import path from "path";
import { outDir } from "./path";
export const buildConfig = {
  esm: {
    module: "ESNext",
    format: "esm",
    output: {
      name: "es",
      path: path.resolve(outDir, "es"),
    },
    bundle: {
      path: "horse-ui/es",
    },
  },
  cjs: {
    module: "CommonJS",
    format: "cjs",
    output: {
      name: "lib",
      path: path.resolve(outDir, "lib"),
    },
    bundle: {
      path: "horse-ui/lib",
    },
  },
};
export type BuildConfig = typeof buildConfig;
