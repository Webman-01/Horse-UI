import { Component } from "vue";
declare const Upload: Component;
export default Upload;
export { Upload };
declare module "vue" {
    interface GlobalComponents {
        HUpload: typeof Upload;
    }
}
export * from "./src/upload";
