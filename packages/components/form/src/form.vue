<template>
  <form :class="bem.b()" :style="style">
    <slot></slot>
  </form>
</template>

<script setup lang="ts">
import { Values } from "async-validator";
import { computed, CSSProperties, provide } from "vue";
import { createNameSpace } from "../../../utils/create";
import { FormContext, FormContextKey, formProps } from "./form";
import { FormItemContext } from "./form-item";

const bem = createNameSpace("form");
defineOptions({
  name: "h-form",
});
const props:any = defineProps(formProps);

//from的校验，在父级中调用所有儿子的校验方法
const validate = async (
  callback?: (validate: boolean, fields?: Values) => void
) => {
  let errors: Values = {};
  //遍历所以的方法看是否有错误
  for (const field of fields) {
    try {
      await field.validate("");
    } catch (error) {
      errors = {
        ...errors,
        ...(error as Values).fields,
      };
    }
    if (Object.keys(errors).length === 0) {
      return callback?.(true);
    } else {
      if (callback) {
        callback?.(false, errors);
      } else {
        return Promise.reject(errors);
      }
    }
  }
};

const fields: FormItemContext[] = []; //form用来存储form-item
const addField: FormContext["addField"] = (context) => {
  fields.push(context);

  setTimeout(() => {
    console.log(fields);
  }, 1000);
};
//将form表单的校验方法暴露给用户，用户可以通过ref来检测
defineExpose({
  validate,
});
const context = {
  ...props,
  addField,
};
provide(FormContextKey, context);

//计算宽度
const style = computed<CSSProperties>(() => {
  const { maxWidth } = props;
  if (!maxWidth) return {};
  return {
    ...(maxWidth ? { width: maxWidth + "px" } : {}),
  };
});
</script>

<style></style>
