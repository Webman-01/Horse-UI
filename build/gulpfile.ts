import { series } from "gulp";
import { run, createTaskName } from "./utils";

//1.打包样式 2。打包组件，工具方法  3.打包每个组件 4.生成组件库 5.发布
export default series(
  createTaskName("clean", async () => run("rm -rf ./dist")),
  createTaskName('buildPackages',()=>run('pnpm run --parallel build --filter ./packages'))
);
