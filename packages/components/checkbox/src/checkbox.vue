<template>
  <label :class="[bem.b(), bem.is('disabled', disabled)]">
    <span :class="bem.e('input')">
      <input
        type="checkbox"
        v-model="model"
        ref="inputRef"
        :disabled="disabled"
        :value="label"
        @change="handleChange"
      />
    </span>
    <!-- 如果h-checkbox中有写东西就展示写的 -->
    <span
      v-if="$slots.default || label"
      :class="[bem.e('label'), bem.is('checked', isChecked)]"
    >
      <slot></slot>
      <template v-if="!$slots.default">
        {{ label }}
      </template>
    </span>
  </label>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import { createNameSpace } from "../../../utils/create";
import { checkBoxEmits, checkBoxProps } from "./checkbox";

const bem = createNameSpace("checkbox");
const props = defineProps(checkBoxProps);
const emit = defineEmits(checkBoxEmits);

const isChecked = ref<boolean>(false);

defineOptions({
  name: "h-checkbox",
});
console.log(props);

//计算出model
const model = computed({
  get() {
    if (!props.indeterminate) isChecked.value = Boolean(props.modelValue);
    return props.modelValue as string | number | boolean;
  },
  set(val: string | number | boolean) {
    return emit("update:modelValue", val);
  },
});

const inputRef = ref<HTMLInputElement>();
//对范选框监听
function indeterminate(val: boolean) {
  inputRef.value!.indeterminate = val;
}
watch(() => props.indeterminate, indeterminate);
onMounted(() => {
  indeterminate(props.indeterminate);
});
//添加change事件
function handleChange(e: Event) {
  const target = e.target as HTMLInputElement;
  const value = target.checked ? true : false;
  emit("change", value);
}
</script>

<style></style>
