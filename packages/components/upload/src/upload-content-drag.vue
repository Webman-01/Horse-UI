<template>
  <div
    :class="bem.b('dragger')"
    @dragover.prevent="onDragover"
    @dragleave.prevent="isOver = false"
    @drop.prevent="onDrop"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { createNameSpace } from "../../../utils/create";
const bem = createNameSpace("upload");
const isOver = ref<boolean>(false);
const emit = defineEmits({});
const onDrop = (e: DragEvent) => {
  e.stopPropagation();
  emit("file", Array.from(e.dataTransfer!.files)); //获取拖动到目标区域的文件列表
};
const onDragover = (e: DragEvent) => {
  isOver.value = true;
};
</script>

<style></style>
