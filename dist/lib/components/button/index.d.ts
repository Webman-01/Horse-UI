import { Component } from "vue";
declare const Button: Component;
export default Button;
export { Button };
export type { ButtonProps } from "./src/button";
declare module "vue" {
    interface GlobalComponents {
        HButton: typeof Button;
    }
}
