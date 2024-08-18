declare const _default: import("vue").DefineComponent<{
    readonly modelValue: {
        readonly type: import("vue").PropType<Boolean | String | Number>;
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
        readonly type: import("vue").PropType<String>;
    };
}, {
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
    props: any;
    emit: ((event: "update:modelValue", value: string | number | boolean) => void) & ((event: "change", value: boolean) => void);
    isChecked: import("vue").Ref<boolean>;
    model: import("vue").WritableComputedRef<string | number | boolean>;
    inputRef: import("vue").Ref<HTMLInputElement>;
    indeterminate: (val: boolean) => void;
    handleChange: (e: Event) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: boolean | string | number) => boolean;
    change: (value: boolean) => boolean;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: {
        readonly type: import("vue").PropType<Boolean | String | Number>;
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
        readonly type: import("vue").PropType<String>;
    };
}>> & {
    "onUpdate:modelValue"?: (value: string | number | boolean) => any;
    onChange?: (value: boolean) => any;
}, {
    readonly disabled: boolean;
    readonly indeterminate: boolean;
}, {}>;
export default _default;
