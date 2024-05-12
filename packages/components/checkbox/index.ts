import _Checkbox from "./src/checkbox.vue";
import { withInstall } from "../../utils/with-install";

const Checkbox = withInstall(_Checkbox);

//导出组件和类型
export default Checkbox;
export * from "./src/checkbox";

declare module "vue" {
  export interface GlobalComponents {
    HCheckbox: typeof Checkbox;
  }
}
