import { ExtractPropTypes, InjectionKey, PropType } from "vue";
import { ArrayAble, FormItemRule } from "./form-item";

export const formProps = {
  model: Object,
  rules: {
    type: Object as PropType<Record<string, ArrayAble<FormItemRule>>>,
  },
  showMessage: {
    type: Boolean,
    default: true,
  },
} as const;
export type FormProps = Partial<ExtractPropTypes<typeof formProps>>;

export interface FormContext extends FormProps {}

export const FormContextKey: InjectionKey<FormContext> = Symbol();
