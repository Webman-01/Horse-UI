import { buildConfig } from "./utils/config";
import path from "path";
import { outDir, projectRoot } from "./utils/path";
import { dest, parallel, series, src } from "gulp";
import ts from "gulp-typescript";
import { createTaskName } from "./utils";
// 专门打包 hook, util
export const buildPackages = (dirname: string, name: string) => {
  // 打包 cjs 和 esm; ts -> js

  const tasks = Object.entries(buildConfig).map(([module, config]) => {
    const output = path.resolve(dirname, config.output.name);

    // 创建构建任务
    const buildTask = function buildTask() {
      const tsConfig = path.resolve(projectRoot, "tsconfig.json");
      const inputs = ["**/*.ts", "!gulpfile.ts", "!node_modules"];
      return src(inputs)
        .pipe(
          ts.createProject(tsConfig, {
            declaration: true, // 需要生成声明文件
            strict: false,
            module: config.module,
          })()
        )
        .pipe(dest(output));
    };

    // 创建复制任务
    const copyTask = function copyTask() {
      // 放到 es 和 lib 的 utils 下
      return src(`${output}/**`).pipe(
        dest(path.resolve(outDir, config.output.name, name))
      );
    };

    // 使用 `createTaskName` 为任务命名，并组合任务
    return series(
      createTaskName(`build:${dirname}`, buildTask),
      createTaskName(`copy:${dirname}`, copyTask)
    );
  });

  return parallel(...tasks);
};
