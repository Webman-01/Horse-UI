import { ExtractPropTypes, PropType } from "vue";
export declare enum Size {
    Small = "small",
    Large = "large",
    Default = "default"
}
export declare enum Type {
    Primary = "primary",
    Success = "success",
    Warning = "warning",
    Danger = "danger",
    Info = "info",
    Default = "default"
}
export declare enum NativeType {
    Button = "button",
    Submit = "submit",
    Reset = "reset"
}
export type Placement = "left" | "right";
export declare const buttonProps: {
    readonly size: PropType<Size>;
    readonly type: {
        readonly type: PropType<Type>;
        readonly validator: (value: Type) => boolean;
        readonly default: Type.Default;
    };
    readonly round: BooleanConstructor;
    readonly loading: BooleanConstructor;
    readonly disabled: BooleanConstructor;
    readonly nativeType: {
        readonly type: PropType<NativeType>;
        readonly default: NativeType.Button;
    };
    readonly iconPlacement: {
        readonly type: PropType<Placement>;
        readonly default: "null";
    };
};
export declare const buttonEmits: {
    click: (event: MouseEvent) => boolean;
    mousedown: (event: MouseEvent) => boolean;
    mouseup: (event: MouseEvent) => boolean;
};
export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
export type ButtonEmits = typeof buttonEmits;
