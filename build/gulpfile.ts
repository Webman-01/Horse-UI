import { parallel, series } from "gulp";
import { run, createTaskName } from "./utils";

//1.打包样式 2。打包组件，工具方法  3.打包每个组件 4.生成组件库 5.发布
export default series(
  createTaskName("clean", async () => run("rm -rf ./dist")),
  parallel(
    createTaskName("buildPackages", () =>
      run("pnpm run --parallel build --filter ./packages")
    ),
    createTaskName("buildFullComponent", () =>
      run("pnpm run build buildFullComponent")
    ), //打包全部组件
    //执行build命令时1会调用rollup,给rollup传递参数buildFullComponent,那么就会执行导出任务角buildFullComponent
    createTaskName('buildComponent',()=>run('pnpm run build buildComponent'))
  )
);
export * from "./full-component";
export * from './component'
