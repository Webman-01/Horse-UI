import { Component } from "vue";
declare const Checkbox: Component;
export default Checkbox;
export { Checkbox };
export * from "./src/checkbox";
declare module "vue" {
    interface GlobalComponents {
        HCheckbox: typeof Checkbox;
    }
}
