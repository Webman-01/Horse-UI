import type { RuleItem } from "async-validator";
import { ExtractPropTypes, InjectionKey, PropType } from "vue";
//抽离类型
export type ArrayAble<T> = T | T[];

//在RuleItem基础上扩展
export interface FormItemRule extends RuleItem {
  trigger?: ArrayAble<string>;
}

//校验类型
export const formItemValidateState = ["success", "error", ""] as const;
export type FormItemValidateState = (typeof formItemValidateState)[number];

export const formItemProps = {
  prop: String,
  label: String,
  rules: [Object, Array] as PropType<ArrayAble<FormItemRule>>,
  required: Boolean,
  showMessage: {
    type: Boolean,
    default: true,
  },
} as const;
export type FormItemProps = Partial<ExtractPropTypes<typeof formItemProps>>;

// inject要传的类型
export interface FormItemContext extends FormItemProps {
  validate: (
    trigger: string,
    callback?: (isValid: boolean) => void
  ) => Promise<void>;
}
export const FormItemContextKey: InjectionKey<FormItemContext> = Symbol();
