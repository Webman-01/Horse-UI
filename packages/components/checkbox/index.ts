import { Component } from "vue";
import { withInstall } from "../../utils/with-install";
import _Checkbox from "./src/checkbox.vue";

const Checkbox:Component = withInstall(_Checkbox);

//导出组件和类型
export default Checkbox;
export { Checkbox };
export * from "./src/checkbox";

declare module "vue" {
  export interface GlobalComponents {
    HCheckbox: typeof Checkbox;
  }
}
