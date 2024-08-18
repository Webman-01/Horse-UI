import { triggerTypes } from "../src/tooltip";
import { showOrHideFun } from "h-ui/estooltip";
declare const _default: import("vue").DefineComponent<{
    readonly content: {
        readonly type: StringConstructor;
        readonly default: "this is a tooltip";
    };
    readonly trigger: {
        readonly type: import("vue").PropType<triggerTypes>;
        readonly default: triggerTypes.Hover;
    };
    readonly placement: {
        readonly type: import("vue").PropType<import("@popperjs/core").Placement>;
        readonly default: "bottom";
    };
    readonly effect: {
        readonly type: StringConstructor;
        readonly default: "dark";
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
    reference: import("vue").Ref<any>;
    floating: import("vue").Ref<any>;
    arrowRef: import("vue").Ref<any>;
    isHidden: import("vue").Ref<boolean>;
    events: Record<string, EventListener>;
    outerEvents: Record<string, EventListener>;
    tooltipEvents: Record<string, EventListener>;
    calculatePosition: () => Promise<void>;
    flag: import("vue").Ref<boolean>;
    show: showOrHideFun;
    hide: showOrHideFun;
    handleClickFun: (e: Event) => void;
    chooseEvents: () => void;
    handleClick: (e: Event) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly content: {
        readonly type: StringConstructor;
        readonly default: "this is a tooltip";
    };
    readonly trigger: {
        readonly type: import("vue").PropType<triggerTypes>;
        readonly default: triggerTypes.Hover;
    };
    readonly placement: {
        readonly type: import("vue").PropType<import("@popperjs/core").Placement>;
        readonly default: "bottom";
    };
    readonly effect: {
        readonly type: StringConstructor;
        readonly default: "dark";
    };
}>>, {
    readonly trigger: triggerTypes;
    readonly content: string;
    readonly placement: import("@popperjs/core").Placement;
    readonly effect: string;
}, {}>;
export default _default;
