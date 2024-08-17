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
export const buildFullComponent = parallel(buildFull);
