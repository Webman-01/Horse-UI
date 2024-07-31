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
import { ref } from 'vue';
import { Key, TreeOptions } from "@uuio/components/tree/src/tree";
const data2 = ref(createData2());
//存储选中的节点
const selectedValue = ref<Key[]>(["40", "41"]);
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

<style>

</style>