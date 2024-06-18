<template>
  <div :class="[bem.b()]">
    <div :class="bem.e('group')">
      <!-- 头部内容 -->
      <div v-if="slots.prefix" :class="bem.be('group', 'prefix')">
        <slot name="prefix"></slot>
      </div>

      <!-- 输入框+输入框前置+后置 -->
      <div :class="[bem.e('wrapper'),bem.is('focus',isFocus)]">
        <span v-if="slots.prepend" :class="bem.e('prepend')">
          <slot name="prepend"></slot>
        </span>
        <input
          :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
          v-bind="attrs"
          :class="[bem.e('inner')]"
          ref="input"
          @input="handleInput"
          @change="handleChange"
          @blur="handleBlur"
          @focus="handleFocus"
          :placeholder="placeholder"
          :disabled="disabled"
          :readonly="readonly"
        />

        <!-- eyes show or hide -->
        <h-icon v-show="passwordVisible" @click="handlePasswordVisible">
          <EyeOutline></EyeOutline>
        </h-icon>
        <h-icon v-show="!passwordVisible" @click="handlePasswordVisible">
          <EyeOffOutline></EyeOffOutline>
        </h-icon>
        <!-- clear function -->
        <h-icon v-show="showClear" @click="clear">
          <CloseCircleOutline></CloseCircleOutline>
        </h-icon>

        <span v-if="slots.append" :class="bem.e('append')">
          <slot name="append"></slot>
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
import {
  useAttrs,
  useSlots,
  ref,
  watch,
  onMounted,
  nextTick,
  computed,
  inject,
} from "vue";
import { createNameSpace } from "../../../utils/create";
import { inputProps, inputEmits } from "./input";
import {
  EyeOutline,
  EyeOffOutline,
  CloseCircleOutline,
} from "@vicons/ionicons5";
import { FormItemContextKey } from "../../form/src/form-item";

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
    //进行校验
    formItemContext?.validate("change").catch(() => {});
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
  emits("change", (e.target as HTMLInputElement).value);
};
const isFocus = ref<boolean>(false)
const handleFocus = (e: FocusEvent) => {
  emits("focus", e);
  isFocus.value = true
};
const handleBlur = (e: FocusEvent) => {
  formItemContext?.validate("blur").catch(() => {});
  emits("blur", e);
  isFocus.value = false
};
onMounted(() => {
  setInputValue();
});

//密码的显示
const passwordVisible = ref<Boolean>(false);
const handlePasswordVisible = () => {
  passwordVisible.value = !passwordVisible.value;
  focus();
};
//获取焦点：要先切换完visible状态再获取焦点
const focus = async () => {
  //等下一轮
  await nextTick();
  input.value?.focus();
};

//清空功能
const clear = () => {
  //输入框内容置空，双向绑定置空，触发clear事件
  emits("input", "");
  emits("update:modelValue", "");
  emits("clear");
  focus();
};
const showClear = computed(() => {
  return (
    props.modelValue && props.clearable && !props.disabled && !props.readonly
  );
});

//注入表单组件传过来的
const formItemContext = inject(FormItemContextKey);
</script>

<style></style>
