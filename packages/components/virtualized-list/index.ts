import { Component } from "vue";
import { withInstall } from "../../utils/with-install";
import _Virtualized from "./src/virtualized.vue";
const Virtualized:Component = withInstall(_Virtualized);

export default Virtualized;

//添加类型
declare module "vue" {
  export interface GlobalComponents {
    HVirtualList: typeof _Virtualized;
  }
}
