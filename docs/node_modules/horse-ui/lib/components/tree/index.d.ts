import { Component } from "vue";
declare const Tree: Component;
export default Tree;
export { Tree };
declare module "vue" {
    interface GlobalComponents {
        HTree: typeof Tree;
    }
}
export * from "./src/tree";
