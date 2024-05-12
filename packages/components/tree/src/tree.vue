<template>
  <div :class="bem.b()">
    <h-virtual-list :items="flatTree" :remain="8" :size="32">
      <template #default="{ node }">
        <h-tree-node
          :key="node.treeKey"
          :node="node"
          :expanded="isExpanded(node)"
          @toggle="toggleExpandAndCollapse"
          :loading-keys="loadingKeysRef"
          @select="handleSelect"
          :selected-keys="selectTreeRef"
        ></h-tree-node>
      </template>
    </h-virtual-list>
  </div>
</template>

<script setup lang="ts">
import { provide, ref, useSlots, watch } from "vue";
import {
  Key,
  TreeNode,
  TreeOptions,
  injectTreeKey,
  treeProps,
  treeSelectEmit,
} from "./tree";
import { computed } from "vue";
import { createNameSpace } from "../../../utils/create";
import HTreeNode from "./treeNode.vue";
import HVirtualList from '../../virtualized-list'
defineOptions({
  name: "h-tree",
});
//导入数的数据类型
const props = defineProps(treeProps);
const bem = createNameSpace("tree");

//获取用户传的属性值
function createOptions(key: string, label: string, children: string) {
  return {
    getKey(node: TreeOptions) {
      return node[key] as string;
    },
    getLabel(node: TreeOptions) {
      return node[label] as string;
    },
    getChildren(node: TreeOptions) {
      return node[children] as TreeOptions[];
    },
  };
}
const treeOption = createOptions(props.treeKey, props.label, props.children);

//格式化的函数
const createTree = function (
  data: TreeOptions[],
  parent: TreeNode | null = null
) {
  function traversal(data: TreeOptions[], parent: TreeNode | null = null) {
    return data.map((item) => {
      //获取子节点数组
      const children = treeOption.getChildren(item) || [];
      //生成树上的节点类型
      const treeNode: TreeNode = {
        //把data中的类型提取出来
        treeKey: treeOption.getKey(item),
        label: treeOption.getLabel(item),
        //没递归一次层级+1
        level: parent ? parent.level + 1 : 0,
        children: [], //子数组默认为空
        rawNode: item,
        disabled: !!item.disabled,
        isLeaf: item.isLeaf ?? children.length === 0, //？？是当左侧的操作数为 null 或者 undefined 时，返回其右侧操作数，否则返回左侧操作数。
      };

      //有子数组就递归
      if (children.length > 0) {
        treeNode.children = traversal(children, treeNode);
      }
      return treeNode;
    });
  }

  const result: TreeNode[] = traversal(data, parent);
  return result;
};

//有了props要对数据进行格式化，因为用户的属性名不知道会传什么过来，我们要把名字变为label,key,children
//将格式化后的结果放到tree中
const tree = ref<TreeNode[]>([]);

//监测数据的变化进行格式化
watch(
  () => props.data,
  (data: TreeOptions[]) => {
    //data变化时重新获取格式化结果
    tree.value = createTree(data);
    console.log(tree.value);
  },
  { immediate: true }
);

//需要展开的key选项
const expandedKeySet = ref(new Set(props.defaultExpandedKeys));

//利用一个栈拍平树型结构
//计算出拍平后的树结构
const flatTree = computed(() => {
  //要展开的选项
  let expandedKey = expandedKeySet.value;
  //存储拍平后的结果
  let result: TreeNode[] = [];

  //被格式化后的节点
  const nodes = tree.value || [];

  //栈：用来遍历树
  const stack: TreeNode[] = [];

  //1.把节点元素倒序放入栈中
  for (let i = nodes.length - 1; i >= 0; --i) {
    stack.push(nodes[i]);
  }
  //2.从栈中取出节点放入结果集中
  while (stack.length) {
    const node = stack.pop();
    if (!node) continue;
    result.push(node);
    //3.判断当前节点的treeKey是否在要展开的中，然后进行操作
    if (expandedKey.has(node.treeKey)) {
      //处理子节点(相同的方法，倒序加入栈)
      const children = node.children;
      if (children) {
        for (let i = node.children.length - 1; i >= 0; --i) {
          stack.push(node.children[i]);
        }
      }
    }
  }
  return result;
});
console.log(flatTree.value, "flat");
//树结构是否需要展开
function isExpanded(node: TreeNode): boolean {
  return expandedKeySet.value.has(node.treeKey);
}
//切换展开和收缩
function toggleExpandAndCollapse(node: TreeNode) {
  const expandKeys = expandedKeySet.value;
  if (expandKeys.has(node.treeKey) && !loadingKeysRef.value.has(node.treeKey)) {
    //如果需要展开的set中有这个treeKey
    //那么表明他需要展开，现在显示为折叠状态,如果正在加载中则不能收起
    collapse(node);
  } else {
    expand(node);
  }
}
// 收缩
function collapse(node: TreeNode) {
  expandedKeySet.value.delete(node.treeKey);
}
//存储需要懒加载的数据的key
const loadingKeysRef = ref(new Set<Key>());
//展开
function expand(node: TreeNode) {
  expandedKeySet.value.add(node.treeKey);
  //这里还要实现懒加载
  //判断不是叶子节点且此时没有子节点
  if (!node.children.length && !node.isLeaf) {
    const loadingKeys = loadingKeysRef.value;
    //并且这个节点没有加载过
    if (!loadingKeys.has(node.treeKey)) {
      //进行懒加载：1.放入set中  2.看用户是否有写lazy方法
      //把当前要加载的节点存储下来，防止多次加载
      loadingKeys.add(node.treeKey);
      const lazy = props.lazy;
      if (lazy) {
        //有就把用户的节点传进去
        //然后执行tree.vue中的handleLoad方法
        lazy(node.rawNode).then((children) => {
          //修改原来的节点
          node.rawNode.children = children;
          //更新自定义的node,重新渲染树
          node.children = createTree(children, node);
          //删去set中存储的数据，表示加载完成
          loadingKeys.delete(node.treeKey);
        });
      }
    }
  }
}

//选中节点功能
const emit = defineEmits(treeSelectEmit);
const selectTreeRef = ref<Key[]>([]);

//监听selectKeys,如果有值就把值赋给定义的selectTreeRef
watch(
  () => props.selectedKeys,
  (value) => {
    if (value) {
      selectTreeRef.value = value;
    }
  },
  { immediate: true }
);
//处理选中的节点
function handleSelect(node: TreeNode) {
  let keys = Array.from(selectTreeRef.value);
  if (!props.selectable) return;

  if (props.multiple) {
    const index = keys.findIndex((key) => key === node.treeKey);
    if (index > -1) {
      //重复就删除
      keys.splice(index, 1);
    } else {
      keys.push(node.treeKey);
    }
  } else {
    //单选时如果keys中有选中的key:说明再一次点击：清空
    if (keys.includes(node.treeKey)) {
      keys = [];
    } else {
      keys = [node.treeKey];
    }
  }
  //触发事件
  emit("update:selectedKeys", keys);
}
//提供一个名为 injectTreeKey 的键，以及一个包含 slots 的对象作为值
provide(injectTreeKey, {
  slots: useSlots(),
});
</script>

<style></style>
