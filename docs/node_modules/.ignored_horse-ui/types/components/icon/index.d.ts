import { Component } from "vue";
declare const Icon: Component;
export default Icon;
export { Icon };
export * from "./src/icon";
declare module "vue" {
    interface GlobalComponents {
        Icon: typeof Icon;
    }
}
