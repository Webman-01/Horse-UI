import { Component } from "vue";
declare const Tooltip: Component;
export default Tooltip;
export { Tooltip };
declare module "vue" {
    interface GlobalComponents {
        HTooltip: typeof Tooltip;
    }
}
export * from "./src/tooltip";
