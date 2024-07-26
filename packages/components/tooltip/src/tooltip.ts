import type { Placement } from "@popperjs/core";
import { ExtractPropTypes, PropType } from "vue";

export enum triggerTypes {
  Hover = "hover",
  Click = "click",
}
export const tooltipProps = {
  content: {
    type: String,
    default: "this is a tooltip",
  },
  trigger: {
    type: String as PropType<triggerTypes>,
    default: triggerTypes.Hover,
  },
  placement: {
    type: String as PropType<Placement>,
    default: "bottom",
  },
  effect: {
    type: String,
    default: "dark",
  },
} as const;
export type showOrHideFun = () => void;
export type TooltipProps = Partial<ExtractPropTypes<typeof tooltipProps>>;
