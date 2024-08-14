(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@uuio/components')) :
  typeof define === 'function' && define.amd ? define(['exports', '@uuio/components'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.HUi = {}, global.components$1));
})(this, (function (exports, components$1) { 'use strict';

  var components = [components$1.Icon, components$1.Button, components$1.Checkbox, components$1.Form, components$1.Input, components$1.Tooltip, components$1.Tree, components$1.Upload];
  var install = function (app) {
      components.forEach(function (component) { return app.use(component); });
  };
  var index = {
      install: install,
  };

  exports.default = index;
  Object.keys(components$1).forEach(function (k) {
    if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
      enumerable: true,
      get: function () { return components$1[k]; }
    });
  });

  Object.defineProperty(exports, '__esModule', { value: true });

}));
