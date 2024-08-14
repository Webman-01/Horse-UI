import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import vue from "rollup-plugin-vue";
import typescript from "rollup-plugin-typescript3";
import { parallel } from "gulp";
import path from "path";
import { OutputOptions, rollup } from "rollup";
import { horseRoot, outDir, projectRoot } from "./utils/path";

const buildFull = async () => {
  const config = {
    input: path.resolve(horseRoot, "index.ts"),
    plugins: [nodeResolve(), typescript(), vue(), commonjs()],
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
      },
    },
    {
      format: "esm",
      file: path.resolve(outDir, "index.esm.js"),
    },
  ];
  let bundle = await rollup(config);

  return Promise.all(
    buildConfig.map((config) => bundle.write(config as OutputOptions))
  );
};
export const buildFullComponent = parallel(buildFull);
