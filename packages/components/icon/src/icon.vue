<template>
  <i :class="bem.b()" :style="style">
    <slot></slot>
  </i>
</template>
<script lang="ts" setup>
import { CSSProperties, computed, Prop } from "vue";
import { createNameSpace } from "../../../utils/create";
import { IconProps, iconProps } from "./icon";
//定义组件名
defineOptions({
  name: "h-icon",
});
//创建bem规范的字符串
const bem = createNameSpace("icon");

//计算属性
const props: IconProps = defineProps(iconProps);

const style = computed<CSSProperties>(() => {
  const { size, color } = props;
  if (!size && !color) return {};

  return {
    ...(size ? { "font-size": size + "px" } : {}),
    ...(color ? { color: color } : {}),
  };
});
</script>
