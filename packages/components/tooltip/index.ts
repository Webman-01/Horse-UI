import { withInstall } from "../../utils/with-install";
import _Tooltip from "./src/tooltip.vue";

const Tooltip = withInstall(_Tooltip);

export default Tooltip;
//添加类型
declare module "vue" {
  export interface GlobalComponents {
    HTooltip: typeof Tooltip;
  }
}
export * from './src/tooltip'