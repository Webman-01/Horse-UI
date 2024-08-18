import type { Placement } from "@popperjs/core";
import { ExtractPropTypes, PropType } from "vue";
export declare enum triggerTypes {
    Hover = "hover",
    Click = "click"
}
export declare const tooltipProps: {
    readonly content: {
        readonly type: StringConstructor;
        readonly default: "this is a tooltip";
    };
    readonly trigger: {
        readonly type: PropType<triggerTypes>;
        readonly default: triggerTypes.Hover;
    };
    readonly placement: {
        readonly type: PropType<Placement>;
        readonly default: "bottom";
    };
    readonly effect: {
        readonly type: StringConstructor;
        readonly default: "dark";
    };
};
export type showOrHideFun = () => void;
export type TooltipProps = Partial<ExtractPropTypes<typeof tooltipProps>>;
