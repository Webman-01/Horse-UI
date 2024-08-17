import { Component } from "vue";
import { withInstall } from "../../utils/with-install";
import _Input from "./src/input.vue";

const Input:Component = withInstall(_Input);

export default Input;
export { Input };

export type { InputProps } from "./src/input";

declare module "vue" {
  export interface GlobalComponents {
    HInput: typeof Input;
  }
}
