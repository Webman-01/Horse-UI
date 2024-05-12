import { ExtractPropTypes, PropType } from "vue";

//h-checkbox组件传入数据的类型
export const checkBoxProps = {
  modelVal: {
    type: [Boolean, String, Number] as PropType<Boolean | String | Number>,
  },
  disabled: Boolean,
  indeterminate: Boolean,
  label: {
    type: String as PropType<String>,
  },
} as const;

//暴露出去的组件类型
export type CheckBoxProps = Partial<ExtractPropTypes<typeof checkBoxProps>>;

//事件类型
//1个是v-model的更新时间，1个是原生的@change事件
export const checkBoxEmits = {
  "update:modelValue": (value: boolean | string | number) => true,
  change: (value: boolean) => true,
};
export type CheckBoxEmits = typeof checkBoxEmits;
