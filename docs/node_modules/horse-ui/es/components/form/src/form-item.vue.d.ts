import { Values } from "async-validator";
import { ArrayAble, FormItemContext, FormItemRule } from "./form-item";
declare const _default: import("vue").DefineComponent<{
    readonly prop: StringConstructor;
    readonly label: StringConstructor;
    readonly rules: import("vue").PropType<ArrayAble<FormItemRule>>;
    readonly required: BooleanConstructor;
    readonly showMessage: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
}, {
    props: any;
    bem: {
        b: (blockSuffix?: string) => string;
        e: (element?: string) => string;
        m: (modifier?: string) => string;
        be: (blockSuffix?: string, element?: string) => string;
        bm: (blockSuffix?: string, modifier?: string) => string;
        em: (element?: string, modifier?: string) => string;
        bem: (blockSuffix?: string, element?: string, modifier?: string) => string;
        is: (name: string, state: boolean | undefined) => string;
    };
    validateState: import("vue").Ref<"" | "success" | "error">;
    validateMessage: import("vue").Ref<string>;
    changeToArray: (rules: ArrayAble<FormItemRule> | undefined) => FormItemRule[];
    _rules: import("vue").ComputedRef<FormItemRule[]>;
    getFilterRules: (trigger: string) => FormItemRule[];
    onValidateSuccess: () => void;
    onValidateFailed: (error: Values) => void;
    validate: (trigger: string, callback?: (isValid: boolean) => void) => Promise<void>;
    context: FormItemContext;
    formContext: import("./form").FormContext;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly prop: StringConstructor;
    readonly label: StringConstructor;
    readonly rules: import("vue").PropType<ArrayAble<FormItemRule>>;
    readonly required: BooleanConstructor;
    readonly showMessage: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
}>>, {
    readonly required: boolean;
    readonly showMessage: boolean;
}, {}>;
export default _default;
