# Tree 树形控件

用清晰的层级结构展示信息，可展开或折叠。

## 基础用法

::: tip
这里我们在`tree`组件内置了`virtualized`组件，当树节点较多时可实现虚拟滚动，滚动的渲染节点数和节点高度可以通过传入参数设置。

:::

基础的树形结构展示

<script setup>
    import Base from '/Users/mamingzhe/Horse UI/docs/component/tree/Base.vue'
    import Lazy from '/Users/mamingzhe/Horse UI/docs/component/tree/Lazy.vue'
    import Choose from '/Users/mamingzhe/Horse UI/docs/component/tree/Choose.vue'
    import Disabled from '/Users/mamingzhe/Horse UI/docs/component/tree/Disabled.vue'
    import DefaultChecked from '/Users/mamingzhe/Horse UI/docs/component/tree/DeafultChecked.vue'
</script>

<Base/>

::: details 点我查看代码

```vue
<template>
  <h-tree
    :data="data"
    label="xxx"
    treeKey="key"
    children="children"
    :nodeSize="33"
  >
    <template #default="{ node }">
      {{ node.treeKey }}-{{ node.label }}
    </template>
  </h-tree>
</template>

<script setup lang="ts">
import { ref } from "vue";

const data = ref(createData());
function createData(level = 4, parentKey = ""): any {
  if (!level) return [];
  const arr = new Array(20 - level).fill(0);
  return arr.map((_, idx: number) => {
    const key = parentKey + level + idx;
    return {
      xxx: createLabel(level),
      key,
      children: createData(level - 1, key),
    };
  });
}
function createLabel(level: number): string {
  if (level === 4) return "horse";
  if (level === 3) return "ui";
  if (level === 2) return "tree";
  if (level === 1) return "component";
  return "";
}
</script>
```

:::

## 节点懒加载和节点选中功能

点击节点即可实现选中。
<Lazy/>

::: details 点我查看代码

```vue
<template>
  <h-tree
    :data="data2"
    :lazy="handleLoad"
    v-model:selected-keys="selectedValue"
    selectable
    multiple
  ></h-tree>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Key, TreeOptions } from "@uuio/components/tree/src/tree";
const data2 = ref(createData2());
//存储选中的节点
const selectedValue = ref<Key[]>([1, "41"]);
function createData2() {
  return [
    {
      // 因为这里只传了data，所以这三个属性不能写错
      label: nextLabel(),
      treeKey: 1,
      isLeaf: false,
    },
    {
      label: nextLabel(),
      treeKey: 2,
      isLeaf: false,
    },
  ];
}
function nextLabel(currentLabel?: string | undefined | number): string {
  if (!currentLabel) return "first a";
  if (currentLabel === "first a") return "second a";
  if (currentLabel === "second a") return "third a";
  if (currentLabel === "third a") {
    return "fourth a";
  }
  if (currentLabel === "fourth a") {
    return "that is all";
  }
  return "";
}
//展开需要的事件
const delay: number = 1000;
const handleLoad = (node: TreeOptions) => {
  return new Promise<TreeOptions[]>((resolve) => {
    setTimeout(() => {
      resolve([
        //当前展开的node的children属性
        {
          label: nextLabel(node.label),
          treeKey: node.treeKey + nextLabel(node.label),
          isLeaf: false,
          disabled: false,
        },
      ]);
    }, delay);
  });
};
</script>
```

:::

## 可选择

适用于需要选择层级时使用。

<Choose/>

::: details 点我查看代码

```vue
<template>
  <h-tree :data="data3" selectable show-checkbox></h-tree>
</template>

<script setup lang="ts">
import { TreeOptions } from "@uuio/components/tree";
import { ref } from "vue";

const data3 = ref<TreeOptions[]>([
  {
    treeKey: "0",
    label: "0",
    children: [
      {
        treeKey: "0-0",
        label: "0-0",
      },
      {
        treeKey: "0-1",
        label: "0-1",
        children: [
          {
            label: "0-1-0",
            treeKey: "0-1-0",
          },
          {
            label: "0-1-1",
            treeKey: "0-1-1",
          },
        ],
      },
    ],
  },
]);
</script>
```

:::

## 禁用复选框

节点的复选框可以设置为禁用。

在示例中，通过 disabled 设置禁用状态。 相应的复选框已禁用，不能点击。

<Disabled/>

::: details 点我查看代码

```vue
<template>
  <h-tree :data="data3" selectable show-checkbox></h-tree>
</template>

<script setup lang="ts">
import { TreeOptions } from "@uuio/components/tree";
import { ref } from "vue";

const data3 = ref<TreeOptions[]>([
  {
    treeKey: "0",
    label: "0",
    children: [
      {
        treeKey: "0-0",
        label: "0-0",
      },
      {
        treeKey: "0-1",
        label: "0-1",
        children: [
          {
            label: "0-1-0",
            treeKey: "0-1-0",
            disabled: true,
          },
          {
            label: "0-1-1",
            treeKey: "0-1-1",
          },
        ],
      },
    ],
  },
]);
</script>
```

:::

## 默认展开以及默认选中

树节点可以在初始化阶段被设置为展开和选中。

分别通过 `default-expanded-keys` 和 `default-checked-keys` 设置默认展开和默认选中的节点

<DefaultChecked/>

::: details 点我查看代码

```vue
<template>
  <h-tree
    :data="data3"
    show-checkbox
    :default-checked-keys="['0', '0-1']"
    :default-expanded-keys="['0-1']"
  ></h-tree>
</template>

<script setup lang="ts">
import { TreeOptions } from "@uuio/components/tree";
import { ref } from "vue";

const data3 = ref<TreeOptions[]>([
  {
    treeKey: "0",
    label: "0",
    children: [
      {
        treeKey: "0-0",
        label: "0-0",
      },
      {
        treeKey: "0-1",
        label: "0-1",
        children: [
          {
            label: "0-1-0",
            treeKey: "0-1-0",
          },
          {
            label: "0-1-1",
            treeKey: "0-1-1",
          },
        ],
      },
    ],
  },
]);
</script>
```

:::


## Tree API
### Tree 属性
| 名称  | 类型   | 默认值    | 说明     |
| ----- | ------ | --------- | -------- |
| data | array | —— | 展示数据 |
| treeOptions | object | —— | 节点配置选项，具体看下表 |
| default-checked-keys | array | —— | 默认勾选的节点的 key 的数组 |
| default-expanded-keys | array | —— | 默认展开的节点的 key 的数组 |
| label | `string` | label | 指定TreeOptions配置中label的名称 |
| treeKey | `string` | treeKey | 指定TreeOptions配置中treeKey的名称 |
| children | `string` | children | 指定TreeOptions配置中children的名称 |
| lazy | function | —— | 加载子树数据的方法（懒加载） |
| select-keys | array | —— | 指定被选中的节点 |
| selectable | `boolean` | true | 当前树是否可以被选中 |
| multiple | `boolean` | false | 当前树节点是否可以被多选 |
| showCheckbox | `boolean` | false | 节点是否可被选择(是否要展示选择框) |
| nodeRemain | `number` | 8 | 在内置虚拟组件中要渲染的节点个数 |
| nodeSize | `number` | 32 | 在内置虚拟组件中要树节点的高度 |



### TreeOptions
| 名称  | 类型   | 默认值    | 说明     |
| ----- | ------ | --------- | -------- |
| label | `string`/`number` | —— | 树节点显示的内容 |
| treeKey | `string` | —— | 每个树节点用来作为唯一标识的属性，整棵树应该是唯一的 |
| children | `string` | —— | 指定子树为节点对象的某个属性值 |
| isLeaf | `boolean` | —— | 指定节点是否为叶子节点 |
| disabled | `boolean` | —— | 指定节点选择框是否禁用为节点对象的某个属性值 |


## Tree 事件
| 名称   | 回调参数    | 说明     |
| -----  | --------- | -------- |
| update:selectedKeys  | array | 选中节点时触发该事件 |
| toggle  | node | 节点展开或收起触发该事件 |
| select  | node | 节点被选中时触发该事件 |
| check  | node,isChecked | 点击节点复选框之后触发 |