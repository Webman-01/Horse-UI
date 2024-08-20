import { Component } from "vue";
declare const FormItem: Component;
declare const Form: any;
export { Form, FormItem };
export type { FormItemProps } from "./src/form-item";
export type { FormProps } from "./src/form";
export type FormInstance = InstanceType<typeof Form>;
declare module "vue" {
    interface GlobalComponents {
        HFormItem: typeof FormItem;
        HForm: typeof Form;
    }
}
