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
import { existsSync } from "fs";
//打包每个组件
const buildEachComponent = async () => {
  const files = sync("*", {
    cwd: componentRoot,
    onlyDirectories: true,
  });

  //分别把components文件夹下的组件放到dist/es/components下和dist/lib/components下
  const builds = files.map(async (file: string) => {
    //每个组件的路口
    const input = path.resolve(componentRoot, file, "index.ts");

    //配置文件
    const config = {
      input,
      plugins: [vue(), postcss(), nodeResolve(), esbuild(), commonjs()],
      external: (id: any) => /^vue/.test(id) || /utils\/with-install/.test(id),
    };

    let bundle = await rollup(config);

    const options = Object.values(buildConfig).map((config) => ({
      format: config.format,
      file: path.resolve(config.output.path, `components/${file}/index.js`),
      paths: pathRewriter(config.output.name), //../../ -> h-ui/es h-ui/lib
    }));

    await Promise.all(
      options.map((option) => bundle.write(option as OutputOptions))
    );
  });
  return Promise.all(builds);
};
async function genTypes() {
  const project = new Project({
    compilerOptions: {
      allowJs: true,
      declaration: true,
      emitDeclarationOnly: true,
      noEmitOnError: true,
      outDir: path.resolve(outDir, "types"),
      baseUrl: projectRoot,
      paths: {
        "@uuio/*": ["packages/*"],
      },
      skipLibCheck: true,
      strict: false,
      skipDefaultLibCheck: true,
    },
    tsConfigFilePath: path.resolve(projectRoot, "tsconfig.json"),
    skipAddingFilesFromTsConfig: true,
  });
  const filePaths = await glob("**/*", {
    cwd: componentRoot,
    onlyFiles: true,
    absolute: true,
  });

  const sourceFiles: SourceFile[] = [];
  await Promise.all(
    filePaths.map(async (file) => {
      if (file.endsWith(".vue")) {
        //从vue文件中取出script部分
        const content = await fs.readFile(file, "utf8");
        const sfc = VueCompiler.parse(content); //拿到vue文件
        let { scriptSetup } = sfc.descriptor;
        //xx.vue.ts -> xx.vue.d.ts
        if (scriptSetup) {
          const compiled = VueCompiler.compileScript(sfc.descriptor, {
            id: "xxx",
          });
          //   content += compiled.content;
          let content = compiled.content;
          // console.log(content,'content');

          const sourceFile = project.createSourceFile(file + ".ts", content);
          sourceFiles.push(sourceFile);
        }
      } else {
        const sourceFile = project.addSourceFileAtPath(file); //把ts放在一起
        sourceFiles.push(sourceFile);
      }
    })
  );
  //   console.log(sourceFiles,111111);

  const a = await project.emit({ emitOnlyDtsFiles: true });
  //   console.log(a,'yyui');
  //查看报错内容
  const diagnostics = a.compilerObject.diagnostics;
  diagnostics.forEach((diagnostic) => {
    console.error(diagnostic.messageText, "jjj");
  });
  diagnostics.forEach((diagnostic) => {
    if (diagnostic.file) {
      const { line, character } = diagnostic.file.getLineAndCharacterOfPosition(
        diagnostic.start!
      );
      const message = diagnostic.messageText;
      const fileName = diagnostic.file.fileName;
      console.error(
        `Error in file: ${fileName} (${line + 1},${character + 1})`
      );

      console.error(`Message: ${message}`);
    } else {
      console.error(`Message: ${diagnostic.messageText}`);
    }
  });

  const tasks = sourceFiles.map(async (sourceFile) => {
    const emitOutput = sourceFile.getEmitOutput();
    const task = emitOutput.getOutputFiles().map(async (outputFile) => {
      const filepath = outputFile.getFilePath();
      await fs.mkdir(path.dirname(filepath), {
        recursive: true,
      });
      await fs.writeFile(filepath, pathRewriter("es")(outputFile.getText()));
    });
    await Promise.all(task);
  });
  await Promise.all(tasks);
}
//把types下的文件放到es,lib下
function copyTypes() {
  const src = path.resolve(outDir, "types/components/");
  const copy = (module: any) => {
    let output = path.resolve(outDir, module, "components");

    //cp: 代表 "copy"，用于复制文件或目录，-r: 代表 "recursive"，表示递归复制
    return () => {
      if (existsSync(src)) {
        return run(`mkdir -p "${output}" && cp -r "${src}/." "${output}/."`);
      } else {
        console.log(`Source directory ${src} does not exist.`);
        return Promise.resolve();
      }
    };
  };
  return parallel(copy("es"), copy("lib"));
}

//构建components文件夹入口文件
async function buildComponentInput() {
  const config = {
    input: path.resolve(componentRoot, "index.ts"),
    plugins: [esbuild()],
    external: () => true,
  };
  const bundle = await rollup(config);
  return Promise.all(
    Object.values(buildConfig)
      .map((config) => ({
        format: config.format,
        file: path.resolve(config.output.path, "components/index.js"),
      }))
      .map((config) => bundle.write(config as OutputOptions))
  );
}
export const buildComponent = series(
  buildEachComponent,
  genTypes,
  copyTypes(),
  buildComponentInput
);
