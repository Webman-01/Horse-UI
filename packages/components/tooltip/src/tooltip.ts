import type { Placement, Options, viewport } from "@popperjs/core";
import { ExtractPropTypes, PropType } from "vue";

export enum triggerTypes {
  Hover = "hover",
  Click = "click",
}
export const tooltipProps = {
  content: {
    type:String,
    default:'this is a tooltip'
  },
  trigger: {
    type: String as PropType<triggerTypes>,
    default: triggerTypes.Hover,
  },
  placement: {
    type: String as PropType<Placement>,
    default: "bottom",
  },
  manual: Boolean,
  disabled: Boolean,
  popperOptions: Object as PropType<Partial<Options>>,
  transition: {
    type: String,
    default: "fade",
  },
  showTimeout: {
    type: Number,
    default: 0,
  },
  hideTimeout: {
    type: Number,
    default: 200,
  },
} as const;

export const tooltipEmits = {
  "visible-change": (value: boolean) => true,
  "click-outside": () => true,
};
export interface TooltipInstance {
  show(): void;
  hide(): void;
}
export type TooltipProps = Partial<ExtractPropTypes<typeof tooltipProps>>;
export type TooltipEmits = ExtractPropTypes<typeof tooltipEmits>;
