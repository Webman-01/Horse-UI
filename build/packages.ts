import { buildConfig } from "./utils/config";
import path from "path";
import { projectRoot } from "./utils/path";
import { dest, parallel, series, src } from "gulp";
import ts from "gulp-typescript";
//专门打包hook,util
export const buildPackages = (dirname: string, name: string) => {
  //打包cjs esm;ts->js

  const tasks = Object.entries(buildConfig).map(([module, config]) => {
    const output = path.resolve(dirname, config.output.name);

    return series(() => {
      const tsConfig = path.resolve(projectRoot, "tsconfig.json");
      const inputs = ["**/*.ts", "!gulpfile.ts", "!node_modules"];
      return src(inputs)
        .pipe(
          ts.createProject(tsConfig, {
            declaration: true, //需要生成声明文件
            strict: false,
            module: config.module,
          })()
        )
        .pipe(dest(output));
    });
  });
  return parallel(...tasks);
};
