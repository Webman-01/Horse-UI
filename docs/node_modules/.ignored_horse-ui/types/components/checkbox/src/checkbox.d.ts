import { ExtractPropTypes, PropType } from "vue";
export declare const checkBoxProps: {
    readonly modelValue: {
        readonly type: PropType<Boolean | String | Number>;
    };
    readonly disabled: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly indeterminate: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly label: {
        readonly type: PropType<String>;
    };
};
export type CheckBoxProps = Partial<ExtractPropTypes<typeof checkBoxProps>>;
export declare const checkBoxEmits: {
    "update:modelValue": (value: boolean | string | number) => boolean;
    change: (value: boolean) => boolean;
};
export type CheckBoxEmits = typeof checkBoxEmits;
