import { Component } from "vue";
import { withInstall } from "../../utils/with-install";
import _Button from "./src/button.vue";

const Button:Component = withInstall(_Button);

export default Button;
export { Button };
export type { ButtonProps } from "./src/button";

declare module "vue" {
  export interface GlobalComponents {
    HButton: typeof Button;
  }
}

