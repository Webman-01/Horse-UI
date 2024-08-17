<template>
  <button
    :class="[
      bem.b(),
      bem.m(type),
      bem.m(size),
      bem.is('round', round),
      bem.is('loading', loading),
      bem.is('disabled', disabled),
    ]"
    :type="nativeType"
    :disabled="disabled || loading"
    @click="emitClick"
    @mousedown="emitMouseDown"
  >
    <!-- 加载图标 -->
    <!-- 在左边展示 -->
    <template v-if="iconPlacement === 'left'">
      <h-icon size="15">
        <Reload v-if="loading" class="loading"></Reload>
        <!-- 用户通过插槽传过来的图标 -->
        <template v-else-if="slots.icon">
          <Component :is="slots.icon"></Component>
        </template>
      </h-icon>
    </template>
    <slot></slot>
    <!-- 在右边展示 -->
    <template v-if="iconPlacement === 'right'">
      <h-icon size="15">
        <Reload v-if="loading" class="loading"></Reload>
        <template v-else-if="slots.icon">
          <Component :is="slots.icon"></Component>
        </template>
      </h-icon>
    </template>
  </button>
</template>

<script lang="ts" setup>
import { Reload } from "@vicons/ionicons5";
import { useSlots } from "vue";
import HIcon from "../../../components/icon";
import { createNameSpace } from "../../../utils/create";
import { buttonEmits, ButtonProps, buttonProps } from "./button";
const bem = createNameSpace("button");
defineOptions({
  name: "h-button",
  inheritAttrs: false,
});
defineProps(buttonProps);
const emit: any = defineEmits(buttonEmits);
const slots = useSlots();

//派发点击事件
const emitClick = (event: MouseEvent) => {
  emit("click", event);
};
const emitMouseDown = (event: MouseEvent) => {
  emit("mousedown", event);
};
</script>

<style scoped></style>
