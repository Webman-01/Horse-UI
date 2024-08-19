'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var components$1 = require('@uuio/components');

const components = [components$1.Icon, components$1.Button, components$1.Checkbox, components$1.Form, components$1.Input, components$1.Tooltip, components$1.Tree, components$1.Upload];
const install = (app) => {
  components.forEach((component) => app.use(component));
};
var index = {
  install
};

exports.default = index;
Object.keys(components$1).forEach(function (k) {
  if (k !== 'default' && !Object.prototype.hasOwnProperty.call(exports, k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return components$1[k]; }
  });
});
