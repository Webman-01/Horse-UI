import { parallel, series } from "gulp";
import { sync } from "fast-glob";
import { componentRoot, outDir, projectRoot } from "./utils/path";
import path from "path";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import vue from "rollup-plugin-vue";
import postcss from "rollup-plugin-postcss";
import typescript from "rollup-plugin-typescript3";
import { OutputOptions, rollup } from "rollup";
import { buildConfig } from "./utils/config";
import { pathRewriter, run } from "./utils";
import { Project, SourceFile } from "ts-morph";
import glob from "fast-glob";
import fs from "fs/promises";
import esbuild from "rollup-plugin-esbuild";
import * as VueCompiler from "@vue/compiler-sfc";
const buildEachComponent = async () => {
  const files = sync("*", {
    cwd: componentRoot,
    onlyDirectories: true,
  });
  console.log(files, "000");

  //分别把components文件夹下的组件放到dist/es/components下和dist/lib/components下
  const builds = files.map(async (file: string) => {
    //每个组件的路口
    const input = path.resolve(componentRoot, file, "index.ts");
    console.log(input, "ppp");

    //配置文件
    const config = {
      input,
      plugins: [vue(), postcss(), nodeResolve(), esbuild(), commonjs()],
      external: (id: any) => /^vue/.test(id) || /utils\/with-install/.test(id),
    };

    let bundle = await rollup(config);
    // console.log(bundle,'bundle');

    const options = Object.values(buildConfig).map((config) => ({
      format: config.format,
      file: path.resolve(config.output.path, `components/${file}/index.js`),
      paths: pathRewriter(config.output.name), //../../ -> h-ui/es h-ui/lib
    }));
    console.log(Object.values(buildConfig),'lll');
    
    console.log(options, "ooo");

    await Promise.all(
      options.map((option) => bundle.write(option as OutputOptions))
    );
  });
  return Promise.all(builds);
};
// async function genTypes() {
//   const project = new Project({
//     compilerOptions: {
//       allowJs: true,
//       declaration: true,
//       emitDeclarationOnly: true,
//       noEmitOnError: true,
//       outDir: path.resolve(outDir, "types"),
//       baseUrl: projectRoot,
//       paths: {
//         "@uuio/*": ["packages/*"],
//       },
//       skipLibCheck: true,
//       strict: false,
//     },
//     tsConfigFilePath: path.resolve(projectRoot, "tsconfig.json"),
//     skipAddingFilesFromTsConfig: true,
//   });
//   const filePaths = await glob("**/*", {
//     cwd: componentRoot,
//     onlyFiles: true,
//     absolute: true,
//   });
//   const sourceFiles: SourceFile[] = [];
//   filePaths.map(async (file) => {
//     if (file.endsWith(".vue")) {
//       //从vue文件中取出script部分
//       const content = await fs.readFile(file, "utf8");
//       const sfc = VueCompiler.parse(content); //拿到vue文件
//       let { script } = sfc.descriptor;
//       //xx.vue.ts -> xx.vue.d.ts
//       if (script) {
//         let content = script.content;
//         const sourceFile = project.createSourceFile(file + ".ts", content);
//         sourceFiles.push(sourceFile);
//       }
//     } else {
//       const sourceFile = project.addSourceFileAtPath(file); //把ts放在一起
//       sourceFiles.push(sourceFile);
//     }
//   });
//   await project.emit({ emitOnlyDtsFiles: true });
//   const tasks = sourceFiles.map(async (sourceFile) => {
//     const emitOutput = sourceFile.getEmitOutput();
//     const task = emitOutput.getOutputFiles().map(async (outputFile) => {
//       const filepath = outputFile.getFilePath();
//       await fs.mkdir(path.dirname(filepath), {
//         recursive: true,
//       });
//       await fs.writeFile(filepath, pathRewriter("es")(outputFile.getText()));
//     });
//     await Promise.all(task);
//   });
//   await Promise.all(tasks);
// }
// function copyTypes() {
//   const src = path.resolve(outDir, "types/components/");
//   const copy = (module: any) => {
//     let output = path.resolve(outDir, module, "components");
//     return () => run(`cp -r ${src}/*${output}`);
//   };
//   return parallel(copy("es"), copy("lib"));
// }
export const buildComponent = series(buildEachComponent);
