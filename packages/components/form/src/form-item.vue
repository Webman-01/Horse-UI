<template>
  <div
    :class="[
      bem.b(),
      bem.is('success', validateState === 'success'),
      bem.is('error', validateState === 'error'),
    ]"
  >
    <!-- label -->
    <label :class="bem.e('label')">
      <slot name="label">{{ label }}</slot>
      <div :class="bem.is('required', required)">*</div>
    </label>
    <!-- content -->
    <div :class="bem.e('content')">
      <slot></slot>
      <!-- error message -->
      <div :class="bem.e('error')">
        <slot name="error">
          {{ validateMessage }}
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, onMounted, provide, ref } from "vue";
import { createNameSpace } from "../../../utils/create";
import { FormContextKey } from "./form";
import AsyncValidator, { Values } from "async-validator";
import {
  ArrayAble,
  FormItemContext,
  FormItemContextKey,
  formItemProps,
  FormItemRule,
  FormItemValidateState,
} from "./form-item";

defineOptions({
  name: "h-form-item",
});
const props = defineProps(formItemProps);
const bem = createNameSpace("form-item");
//校验逻辑
//校验结果
const validateState = ref<FormItemValidateState>("");
//错误信息
const validateMessage = ref("");

//计算校验规则

//把传入的转换为数组
const changeToArray = (rules: ArrayAble<FormItemRule> | undefined) => {
  return rules ? (Array.isArray(rules) ? rules : [rules]) : [];
};
// 合并rules
const _rules = computed(() => {
  //把form-item中传递的rules变为数组形式
  const form_item_rules = changeToArray(props.rules);
  //获取form中传递的rules
  const form_rules = formContext?.rules;
  //如果form中有传且传的是formItem中传的要校验的那个
  if (form_rules && props.prop) {
    const temp_rules = form_rules[props.prop]; //根据对象的键取到值
    //合并
    if (temp_rules) {
      form_item_rules.push(...changeToArray(temp_rules));
    }
  }
  return form_item_rules;
});
//获取过滤后的规则
const getFilterRules = (trigger: string) => {
  const rules = _rules.value;
  console.log(rules, "rules");

  return rules.filter((rule) => {
    //如果rule中没有trigger或没传trigger则全部校验
    if (!rule.trigger || !trigger) return true;
    if (Array.isArray(rule.trigger)) {
      return rule.trigger.includes(trigger);
    } else {
      return rule.trigger === trigger;
    }
  });
};

//处理校验中成功
const onValidateSuccess = () => {
  validateState.value = "success";
  validateMessage.value = " ";
};
//处理校验中失败
const onValidateFailed = (error: Values) => {
  validateState.value = "error";
  const { errors } = error;
  validateMessage.value = errors ? errors[0].message : "";
};
//校验
const validate: FormItemContext["validate"] = async (trigger, callback) => {
  //可以在这里拿到触发的时机，校验是否可以通过callback的方法或调用Promise.then
  const rules = getFilterRules(trigger);
  //rules为触发的规则,trigger为触发的方式,rules,formContext?.model为数据源，props.prop为要校验的属性
  console.log("trigger", trigger, rules, formContext?.model, props.prop);

  const modelName = props.prop!;
  //获取校验器
  const validator = new AsyncValidator({
    [modelName]: rules,
  });
  const model = formContext?.model!;
  //进行校验
  return validator
    .validate({
      //找到对象中的要校验的字段
      [modelName]: model[modelName],
    })
    .then(() => {
      onValidateSuccess();
    })
    .catch((error) => {
      onValidateFailed(error);
      return Promise.reject(error);
    });
};
//form组件上下文
const context: FormItemContext = {
  ...props,
  validate,
};
//提供h-form-item的上下文给input
provide(FormItemContextKey, context);

//挂载之后调用addField把form-item的上下文添加到form中
onMounted(() => {
  formContext?.addField(context);
});

//注入来自h-form的上下文
const formContext = inject(FormContextKey);
console.log(formContext);
</script>

<style></style>
