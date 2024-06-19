import { ExtractPropTypes, InjectionKey, PropType } from "vue";
import { ArrayAble, FormItemContext, FormItemRule } from "./form-item";

export const formProps = {
  model: Object,
  rules: {
    type: Object as PropType<Record<string, ArrayAble<FormItemRule>>>,
  },
  showMessage: {
    type: Boolean,
    default: true,
  },
  maxWidth: [Number, String] as PropType<number | string>,
} as const;
export type FormProps = Partial<ExtractPropTypes<typeof formProps>>;

export interface FormContext extends FormProps {
  addField: (field: FormItemContext) => void;
}

export const FormContextKey: InjectionKey<FormContext> = Symbol();
