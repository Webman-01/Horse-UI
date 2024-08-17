import { Component } from "vue";
import { withInstall } from "../../utils/with-install";
import _Tooltip from "./src/tooltip.vue";

const Tooltip:Component = withInstall(_Tooltip);

export default Tooltip;
export { Tooltip };
//添加类型
declare module "vue" {
  export interface GlobalComponents {
    HTooltip: typeof Tooltip;
  }
}
export * from "./src/tooltip";
