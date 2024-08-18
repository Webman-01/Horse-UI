import { ExtractPropTypes, PropType } from "vue";
export declare const inputProps: {
    readonly type: {
        readonly type: StringConstructor;
        readonly default: "text";
    };
    readonly modelValue: {
        readonly type: PropType<String | Number>;
        readonly default: "";
    };
    readonly placeholder: {
        readonly type: StringConstructor;
    };
    readonly clearable: {
        readonly type: BooleanConstructor;
    };
    readonly showPassword: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly readonly: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly label: {
        readonly type: StringConstructor;
    };
};
export declare const inputEmits: {
    "update:modelValue": (value: string) => boolean;
    input: (value: string) => boolean;
    change: (value: string) => boolean;
    focus: (event: FocusEvent) => boolean;
    blur: (event: FocusEvent) => boolean;
    clear: () => boolean;
};
export type InputProps = ExtractPropTypes<typeof inputProps>;
export type InputEmits = typeof inputEmits;
