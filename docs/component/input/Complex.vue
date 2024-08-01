<template>
  <div style="width: 500px">
    <h-input
      v-model="inputWords"
      placeholder="Please input"
    >
      <template #prefix>头部内容</template>
      <template #prepend>
        <h-icon>
          <Accessibility></Accessibility>
        </h-icon>
      </template>
      <template #append>
        <h-icon>
          <Accessibility></Accessibility>
        </h-icon>
      </template>
      <template #suffix>尾部内容</template>
    </h-input>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Accessibility } from "@vicons/ionicons5";

const inputWords = ref("");
</script>

<style></style>
