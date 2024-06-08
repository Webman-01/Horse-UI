import { withInstall } from "../../utils/with-install";
import _Upload from "./src/upload.vue";
//安装tree并暴露出去
const Upload = withInstall(_Upload);

export default Upload;

//添加类型
declare module "vue" {
  export interface GlobalComponents {
    HUpload: typeof Upload;
  }
}
export * from './src/upload'
 