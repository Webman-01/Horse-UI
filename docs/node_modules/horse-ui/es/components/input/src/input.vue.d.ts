declare const _default: import("vue").DefineComponent<{
    readonly type: {
        readonly type: StringConstructor;
        readonly default: "text";
    };
    readonly modelValue: {
        readonly type: import("vue").PropType<String | Number>;
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
}, {
    slots: Readonly<{
        [name: string]: import("vue").Slot<any>;
    }>;
    attrs: {
        [x: string]: unknown;
    };
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
    emits: ((event: "clear") => void) & ((event: "update:modelValue", value: string) => void) & ((event: "change", value: string) => void) & ((event: "input", value: string) => void) & ((event: "focus", event: FocusEvent) => void) & ((event: "blur", event: FocusEvent) => void);
    input: import("vue").Ref<HTMLInputElement>;
    setInputValue: () => void;
    handleInput: (e: Event) => void;
    handleChange: (e: Event) => void;
    isFocus: import("vue").Ref<boolean>;
    handleFocus: (e: FocusEvent) => void;
    handleBlur: (e: FocusEvent) => void;
    passwordVisible: import("vue").Ref<{
        valueOf: () => boolean;
    }>;
    handlePasswordVisible: () => void;
    focus: () => Promise<void>;
    clear: () => void;
    showClear: import("vue").ComputedRef<boolean>;
    formItemContext: import("horse-ui/esform/src/form-item").FormItemContext;
    readonly EyeOutline: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>;
    readonly EyeOffOutline: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>;
    readonly CloseCircleOutline: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string) => boolean;
    input: (value: string) => boolean;
    change: (value: string) => boolean;
    focus: (event: FocusEvent) => boolean;
    blur: (event: FocusEvent) => boolean;
    clear: () => boolean;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly type: {
        readonly type: StringConstructor;
        readonly default: "text";
    };
    readonly modelValue: {
        readonly type: import("vue").PropType<String | Number>;
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
}>> & {
    "onUpdate:modelValue"?: (value: string) => any;
    onChange?: (value: string) => any;
    onClear?: () => any;
    onInput?: (value: string) => any;
    onFocus?: (event: FocusEvent) => any;
    onBlur?: (event: FocusEvent) => any;
}, {
    readonly type: string;
    readonly disabled: boolean;
    readonly modelValue: String | Number;
    readonly clearable: boolean;
    readonly showPassword: boolean;
    readonly readonly: boolean;
}, {}>;
export default _default;
