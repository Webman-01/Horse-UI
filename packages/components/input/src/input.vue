<template>
  <div :class="[bem.b()]">
    <div :class="bem.e('group')">
      <!-- 头部内容 -->
      <div v-if="slots.prefix" :class="bem.be('group', 'prefix')">
        <slot name="prefix"></slot>
      </div>

      <!-- 输入框+输入框前置+后置 -->
      <div :class="[bem.e('wrapper')]">
        <span v-if="slots.prepend" :class="bem.e('prepend')">
          <slot name="prepend"></slot>
        </span>
        <input
          :type="showPassword ? (passwordVisible ? 'text' : 'password'): type"
          v-bind="attrs"
          :class="bem.e('inner')"
          ref="input"
          @input="handleInput"
          @change="handleChange"
          @blur="handleBlur"
          @focus="handleFocus"
          :placeholder="placeholder"
          :disabled="disabled"
          :readonly="readonly"
        />
        <span v-if="slots.append" :class="bem.e('append')">
          <h-icon v-if="passwordVisible" @click="handlePasswordVisible">
            <EyeOutline></EyeOutline>
          </h-icon>
          <h-icon v-if="!passwordVisible" @click="handlePasswordVisible">
            <EyeOffOutline></EyeOffOutline>
          </h-icon>
          <slot name="append" v-else></slot>
        </span>
      </div>

      <!-- 尾部内容 -->
      <div v-if="slots.suffix" :class="bem.be('group', 'suffix')">
        <slot name="suffix"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAttrs, useSlots, ref, watch, onMounted, nextTick, computed } from "vue";
import { createNameSpace } from "../../../utils/create";
import { inputProps, inputEmits } from "./input";
import { EyeOutline,EyeOffOutline } from "@vicons/ionicons5";

defineOptions({
  name: "h-input",
  inheritAttrs: false,
});
const slots = useSlots();
const attrs = useAttrs();

const bem = createNameSpace("input");
const props = defineProps(inputProps);
const emits = defineEmits(inputEmits);

//当input框输入内容改变后监听变化
const input = ref<HTMLInputElement | null>(null);
watch(
  () => props.modelValue,
  () => {
    setInputValue();
  }
);
//设置输入框的值
const setInputValue = () => {
  const inputVal = input.value;
  if (!inputVal) return;
  inputVal.value = String(props.modelValue);
};
//双向绑定的事件发行
const handleInput = (e: Event) => {
  const value = (e.target as HTMLInputElement).value; //获取输入内容
  emits("input", value);
  emits("update:modelValue", value);
};
//事件改变
const handleChange = (e: Event) => {
  emits('change',(e.target as HTMLInputElement).value)
}
const handleFocus = (e: FocusEvent) => {
  emits('focus',e)
 }
const handleBlur = (e: FocusEvent) => {
  emits('blur',e)
}
onMounted(() => {
  setInputValue();
});

//密码的显示
const passwordVisible = ref<Boolean>(false)
const handlePasswordVisible = ()=>{
  passwordVisible.value = !passwordVisible.value
  focus()
  console.log(passwordVisible.value,'visible');
  
}
//获取焦点：要先切换完visible状态再获取焦点
const focus = async()=>{
  //等下一轮
  await nextTick()
  input.value?.focus()
}
const showPasswordVisible = computed(()=>{
  return props.modelValue && props.showPassword && !props.disabled && !props.readonly
})
</script>

<style></style>
