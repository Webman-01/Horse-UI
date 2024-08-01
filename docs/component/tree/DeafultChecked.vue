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

<style></style>
