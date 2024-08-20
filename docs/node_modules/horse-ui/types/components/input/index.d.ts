import { Component } from "vue";
declare const Input: Component;
export default Input;
export { Input };
export type { InputProps } from "./src/input";
declare module "vue" {
    interface GlobalComponents {
        HInput: typeof Input;
    }
}
