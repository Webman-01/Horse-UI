/*
 * @: 整合组件，最后导出
   实现一个组件既可以直接写名称引入或全局引入
 */
import { withInstall } from "../../utils/with-install";
import _Icon from "./src/icon.vue";

const Icon = withInstall(_Icon);
export default Icon;
export { Icon };
export * from "./src/icon";

//这里添加的类型可以在模版中被解析
declare module "vue" {
  export interface GlobalComponents {
    Icon: typeof Icon;
  }
}
