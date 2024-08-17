import type { RuleItem } from "async-validator";
import { ExtractPropTypes, InjectionKey, PropType } from "vue";
export type ArrayAble<T> = T | T[];
export interface FormItemRule extends RuleItem {
    trigger?: ArrayAble<string>;
}
export declare const formItemValidateState: readonly ["success", "error", ""];
export type FormItemValidateState = (typeof formItemValidateState)[number];
export declare const formItemProps: {
    readonly prop: StringConstructor;
    readonly label: StringConstructor;
    readonly rules: PropType<ArrayAble<FormItemRule>>;
    readonly required: BooleanConstructor;
    readonly showMessage: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
};
export type FormItemProps = Partial<ExtractPropTypes<typeof formItemProps>>;
export interface FormItemContext extends FormItemProps {
    validate: (trigger: string, callback?: (isValid: boolean) => void) => Promise<void>;
}
export declare const FormItemContextKey: InjectionKey<FormItemContext>;
