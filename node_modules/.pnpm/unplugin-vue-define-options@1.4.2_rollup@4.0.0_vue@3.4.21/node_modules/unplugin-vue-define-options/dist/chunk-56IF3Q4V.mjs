import {
  transformDefineOptions
} from "./chunk-6BKG7JEA.mjs";

// src/index.ts
import { createUnplugin } from "unplugin";
import {
  FilterFileType,
  createFilter,
  detectVueVersion,
  getFilterPattern
} from "@vue-macros/common";
function resolveOptions(options, framework) {
  const version = options.version || detectVueVersion();
  const include = getFilterPattern(
    [FilterFileType.VUE_SFC_WITH_SETUP, FilterFileType.SETUP_SFC],
    framework
  );
  return {
    include,
    ...options,
    version
  };
}
var name = "unplugin-vue-define-options";
var src_default = createUnplugin(
  (userOptions = {}, { framework }) => {
    const options = resolveOptions(userOptions, framework);
    const filter = createFilter(options);
    return {
      name,
      enforce: "pre",
      transformInclude: filter,
      transform: transformDefineOptions
    };
  }
);

export {
  src_default
};
