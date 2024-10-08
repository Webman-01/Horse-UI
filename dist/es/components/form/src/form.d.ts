import { ExtractPropTypes, InjectionKey, PropType } from "vue";
import { ArrayAble, FormItemContext, FormItemRule } from "./form-item";
export declare const formProps: {
    readonly model: ObjectConstructor;
    readonly rules: {
        readonly type: PropType<Record<string, ArrayAble<FormItemRule>>>;
    };
    readonly showMessage: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly maxWidth: PropType<number | string>;
};
export type FormProps = Partial<ExtractPropTypes<typeof formProps>>;
export interface FormContext extends FormProps {
    addField: (field: FormItemContext) => void;
}
export declare const FormContextKey: InjectionKey<FormContext>;
