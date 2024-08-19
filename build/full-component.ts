import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import vue from "rollup-plugin-vue";
import typescript from "rollup-plugin-typescript3";
import { parallel } from "gulp";
import path from "path";
import { OutputOptions, rollup } from "rollup";
import { componentRoot, horseRoot, outDir, projectRoot } from "./utils/path";
import esbuild from "rollup-plugin-esbuild";
import alias from "@rollup/plugin-alias";
import postcss from "rollup-plugin-postcss";
import fs from "fs/promises";
import { buildConfig } from "./utils/config";
import { pathRewriter } from "./utils";
//打包全部组件
const buildFull = async () => {
  const config = {
    input: path.resolve(horseRoot, "index.ts"),
    plugins: [
      vue(),
      postcss(),
      nodeResolve(),
      alias({
        entries: [
          {
            find: "@uuio/components",
            replacement: path.resolve(componentRoot, "index.ts"),
          },
        ],
      }),
      esbuild(),
      commonjs(),
    ],
    external: (id: any) => /^vue/.test(id),
  };
  const buildConfig = [
    {
      format: "umd",
      file: path.resolve(outDir, "index.js"),
      name: "HUi",
      exports: "named",
      globals: {
        vue: "Vue",
        "vue-demi": "VueDemi", // 将 'vue-demi' 映射到全局变量 'VueDemi'
      },
    },
    {
      format: "esm",
      file: path.resolve(outDir, "index.esm.js"),
    },
  ];
  let bundle = await rollup(config);
  // console.log(bundle, "bundle");

  return Promise.all(
    buildConfig.map((config) => bundle.write(config as OutputOptions))
  );
};
//打包horse-ui组件库入口(把horse-ui的index.ts变成js和.d.ts,分别放在es,lib下)
async function buildEntry() {
  const entryFiles = await fs.readdir(horseRoot, { withFileTypes: true });
  //配置入口
  const entryPoints = entryFiles
    .filter((f) => f.isFile())
    .filter((f) => !["package.json"].includes(f.name))
    .map((f) => path.resolve(horseRoot, f.name));

  const config = {
    input: entryPoints,
    plugins: [nodeResolve(), vue(), esbuild()],
    external: (id: string) => /^vue/.test(id) || /^@uuio/.test(id),
  };
  //rollup打包并重写路径
  const bundle = await rollup(config);
  return Promise.all(
    Object.values(buildConfig)
      .map((config) => ({
        format: config.format,
        dir: config.output.path,
        paths: pathRewriter(config.output.name),
      }))
      .map((option) => bundle.write(option as OutputOptions))
  );
}

export const buildFullComponent = parallel(buildFull, buildEntry);
