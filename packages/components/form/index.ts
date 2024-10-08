import { Component } from "vue";
import { withInstall } from "../../utils/with-install";
import _FormItem from "./src/form-item.vue";
import _Form from "./src/form.vue";

const FormItem:Component = withInstall(_FormItem);
const Form:any = withInstall(_Form);

export { Form, FormItem };

export type { FormItemProps } from "./src/form-item";
export type { FormProps } from "./src/form";
export type FormInstance = InstanceType<typeof Form>;

declare module "vue" {
  export interface GlobalComponents {
    HFormItem: typeof FormItem;
    HForm: typeof Form;
  }
}
