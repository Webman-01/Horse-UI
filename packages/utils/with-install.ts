import { Plugin } from "vue";
export type SFCWithInstall<T> = T & Plugin
export function withInstall<T>(com:T) {
  (com as SFCWithInstall<T>).install = function (app: { component: (arg0: string, arg1: T) => void; }) {
    const { name } = com as {name:string};
    app.component(name, com); //将组件注册成全局组件
  };
  return com as SFCWithInstall<T>
}