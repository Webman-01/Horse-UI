import { withInstall } from "../../utils/with-install";
import _Tree from "./src/tree.vue";
//安装tree并暴露出去
const Tree = withInstall(_Tree);

export default Tree;

//添加类型
declare module "vue" {
  export interface GlobalComponents {
    HTree: typeof Tree;
  }
}
export * from './src/tree'
