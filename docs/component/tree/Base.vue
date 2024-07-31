<template>
   <h-tree :data="data" label="xxx" treeKey="key" children="children" :nodeSize="33">
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

<style>

</style>