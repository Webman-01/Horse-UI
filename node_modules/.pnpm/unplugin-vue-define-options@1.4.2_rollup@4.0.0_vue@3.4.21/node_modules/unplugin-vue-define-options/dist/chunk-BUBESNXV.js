"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkO5GWIFYCjs = require('./chunk-O5GWIFYC.js');

// src/index.ts
var _unplugin = require('unplugin');





var _common = require('@vue-macros/common');
function resolveOptions(options, framework) {
  const version = options.version || _common.detectVueVersion.call(void 0, );
  const include = _common.getFilterPattern.call(void 0, 
    [_common.FilterFileType.VUE_SFC_WITH_SETUP, _common.FilterFileType.SETUP_SFC],
    framework
  );
  return {
    include,
    ...options,
    version
  };
}
var name = "unplugin-vue-define-options";
var src_default = _unplugin.createUnplugin.call(void 0, 
  (userOptions = {}, { framework }) => {
    const options = resolveOptions(userOptions, framework);
    const filter = _common.createFilter.call(void 0, options);
    return {
      name,
      enforce: "pre",
      transformInclude: filter,
      transform: _chunkO5GWIFYCjs.transformDefineOptions
    };
  }
);



exports.src_default = src_default;
