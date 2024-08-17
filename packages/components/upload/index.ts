import { Component } from "vue";
import { withInstall } from "../../utils/with-install";
import _Upload from "./src/upload.vue";

const Upload:Component = withInstall(_Upload);

export default Upload;
export { Upload };

//添加类型
declare module "vue" {
  export interface GlobalComponents {
    HUpload: typeof Upload;
  }
}
export * from "./src/upload";
