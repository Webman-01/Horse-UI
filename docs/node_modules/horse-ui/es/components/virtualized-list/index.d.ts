import { Component } from "vue";
import _Virtualized from "./src/virtualized.vue";
declare const Virtualized: Component;
export default Virtualized;
declare module "vue" {
    interface GlobalComponents {
        HVirtualList: typeof _Virtualized;
    }
}
