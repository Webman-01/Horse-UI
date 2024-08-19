import { createTaskName, pathRewriter, run } from "./utils";
import { glob } from "fast-glob";
import { ModuleKind, Project, ScriptTarget } from "ts-morph";
import { SourceFile } from "ts-morph";
import { series } from "gulp";
import { horseRoot, outDir, projectRoot } from "./utils/path";
import fs from "fs/promises";
import path from "path";
import { parallel } from "gulp";
import { buildConfig } from "./utils/config";
//给入口生成.d.ts
export const genEntryTypes = async () => {
  const files = await glob("*.ts", {
    cwd: horseRoot,
    absolute: true,
    onlyFiles: true,
  });
  const project = new Project({
    compilerOptions: {
      declaration: true,
      module: ModuleKind.ESNext,
      allowJs: true,
      emitDeclarationOnly: true,
      noEmitOnError: false,
      outDir: path.resolve(outDir, "entry/types"),
      target: ScriptTarget.ESNext,
      rootDir: horseRoot,
      strict: false,
    },
    skipFileDependencyResolution: true,
    tsConfigFilePath: path.resolve(projectRoot, "tsconfig.json"),
    skipAddingFilesFromTsConfig: true,
  });
  const sourceFiles: SourceFile[] = [];
  files.map((file) => {
    const sourceFile = project.addSourceFileAtPath(file);
    sourceFiles.push(sourceFile);
  });
  await project.emit({ emitOnlyDtsFiles: true });
  const tasks = sourceFiles.map(async (sourceFile) => {
    const emitOutput = sourceFile.getEmitOutput();
    for (const outputFile of emitOutput.getOutputFiles()) {
      const filepath = outputFile.getFilePath();
      await fs.mkdir(path.dirname(filepath), { recursive: true });
      await fs.writeFile(
        filepath,
        (outputFile.getText() as any).replaceAll("@uuio", "."),
        "utf8"
      );
    }
  });
  await Promise.all(tasks);
};
//types下的文件，将其移动到es,lib中，形成index.js的类型申明
export const copyEntryTypes = () => {
  const src = path.resolve(outDir, "entry/types");
  console.log(src, "sssss");

  const copy = (module) =>
    parallel(
      createTaskName(`copyEntryTypes:${module}`, async() => {
        const destPath = path.resolve(outDir, buildConfig[module].output.path);
        // console.log(`Copying from: ${src}/.`);
        // console.log(`Copying to: ${destPath}/`);
        await run(
          `cp -r "${src}/." "${path.resolve(
            outDir,
            buildConfig[module].output.path
          )}/"`
        );
      })
    );
  return parallel(copy("esm"), copy("cjs"));
};
export const genTypes = series(genEntryTypes,copyEntryTypes());
