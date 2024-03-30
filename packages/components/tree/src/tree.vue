<template>tree</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { TreeNode, TreeOptions, treeProps } from "./tree";
import { computed } from "vue";
defineOptions({
  name: "h-tree",
});
//导入数的数据类型
const props = defineProps(treeProps);

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
const createTree = function (data: TreeOptions[]) {
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
        isLeaf: item.isLeaf ?? children.length === 0, //？？是当左侧的操作数为 null 或者 undefined 时，返回其右侧操作数，否则返回左侧操作数。
      };

      //有子数组就递归
      if (children.length > 0) {
        treeNode.children = traversal(children, treeNode);
      }
      return treeNode;
    });
  }

  const result: TreeNode[] = traversal(data);
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
console.log(flatTree.value);

</script>

<style></style>
