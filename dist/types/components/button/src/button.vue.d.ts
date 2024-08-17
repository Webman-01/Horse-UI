import { ButtonProps } from "./button";
declare const _default: import("vue").DefineComponent<{
    readonly size: import("vue").PropType<import("./button").Size>;
    readonly type: {
        readonly type: import("vue").PropType<import("./button").Type>;
        readonly validator: (value: import("./button").Type) => boolean;
        readonly default: import("./button").Type.Default;
    };
    readonly round: BooleanConstructor;
    readonly loading: BooleanConstructor;
    readonly disabled: BooleanConstructor;
    readonly nativeType: {
        readonly type: import("vue").PropType<import("./button").NativeType>;
        readonly default: import("./button").NativeType.Button;
    };
    readonly iconPlacement: {
        readonly type: import("vue").PropType<import("./button").Placement>;
        readonly default: "null";
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
    props: ButtonProps;
    emit: any;
    slots: Readonly<{
        [name: string]: import("vue").Slot<any>;
    }>;
    emitClick: (event: MouseEvent) => void;
    emitMouseDown: (event: MouseEvent) => void;
    readonly Reload: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>;
    readonly HIcon: import("vue").Component;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (event: MouseEvent) => boolean;
    mousedown: (event: MouseEvent) => boolean;
    mouseup: (event: MouseEvent) => boolean;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly size: import("vue").PropType<import("./button").Size>;
    readonly type: {
        readonly type: import("vue").PropType<import("./button").Type>;
        readonly validator: (value: import("./button").Type) => boolean;
        readonly default: import("./button").Type.Default;
    };
    readonly round: BooleanConstructor;
    readonly loading: BooleanConstructor;
    readonly disabled: BooleanConstructor;
    readonly nativeType: {
        readonly type: import("vue").PropType<import("./button").NativeType>;
        readonly default: import("./button").NativeType.Button;
    };
    readonly iconPlacement: {
        readonly type: import("vue").PropType<import("./button").Placement>;
        readonly default: "null";
    };
}>> & {
    onClick?: (event: MouseEvent) => any;
    onMousedown?: (event: MouseEvent) => any;
    onMouseup?: (event: MouseEvent) => any;
}, {
    readonly type: import("./button").Type;
    readonly round: boolean;
    readonly loading: boolean;
    readonly disabled: boolean;
    readonly nativeType: import("./button").NativeType;
    readonly iconPlacement: import("./button").Placement;
}, {}>;
export default _default;
