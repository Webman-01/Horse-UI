import { ExtractPropTypes, PropType } from "vue";
import { isString } from "@vue/shared";

export const inputProps = {
  type: {
    type: String,
    default: "text",
  },
  modelValue: {
    type: [String, Number] as PropType<String | Number>,
    default: "",
  },
  placeholder: {
    type: String,
  },
  clearable: {
    type: Boolean,
  },
  showPassword: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
  },
} as const;

export const inputEmits = {
  "update:modelValue": (value: string) => isString(value),
  input: (value: string) => isString(value),
  change: (value: string) => isString(value),
  focus: (event: FocusEvent) => event instanceof FocusEvent,
  blur: (event: FocusEvent) => event instanceof FocusEvent,
  clear: () => true, //清空事件
};

export type InputProps = ExtractPropTypes<typeof inputProps>;
export type InputEmits = typeof inputEmits;
