<template>
  <h-icon :color="'yellow'" :size="30">
    <Accessibility></Accessibility>
  </h-icon>

  <!-- 使用的时候传递一个树型的数据结构 -->
  <h-tree
    :data="data"
    label="xxx"
    treeKey="key"
    children="children"
    :default-expanded-keys="['40', '41']"
  ></h-tree>
</template>

<script setup lang="ts">
import { Accessibility } from "@vicons/ionicons5";
import { ref } from "vue";

function createData(level = 4, parentKey = ""): any {
  if (!level) return [];
  const arr = new Array(6 - level).fill(0);
  return arr.map((_, idx: number) => {
    const key = parentKey + level + idx;
    return {
      //
      xxx: createLabel(level),
      key,
      children: createData(level - 1, key),
    };
  });
}
function createLabel(level: number): string {
  if (level === 4) return "1";
  if (level === 3) return "2";
  if (level === 2) return "3";
  if (level === 1) return "4";
  return "";
}
const data = ref(createData());
console.log(data, "data");
</script>

<style></style>
