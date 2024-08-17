'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var withInstall = require('./Users/mamingzhe/Horse UI/packages/utils/with-install');
var vue = require('vue');

const _bem = (namespace, blockSuffix, element, modifier) => {
  let cls = namespace;
  if (blockSuffix) {
    cls += `-${blockSuffix}`;
  }
  if (element) {
    cls += `__${element}`;
  }
  if (modifier) {
    cls += `--${modifier}`;
  }
  return cls;
};
function createBEM(namespace) {
  const b = (blockSuffix = "") => _bem(namespace, blockSuffix, "", "");
  const e = (element) => element ? _bem(namespace, "", element, "") : "";
  const m = (modifier) => modifier ? _bem(namespace, "", "", modifier) : "";
  const be = (blockSuffix, element) => blockSuffix && element ? _bem(namespace, blockSuffix, element, "") : "";
  const bm = (blockSuffix, modifier) => blockSuffix && modifier ? _bem(namespace, blockSuffix, "", modifier) : "";
  const em = (element, modifier) => element && modifier ? _bem(namespace, "", element, modifier) : "";
  const bem2 = (blockSuffix, element, modifier) => blockSuffix && element && modifier ? _bem(namespace, blockSuffix, element, modifier) : "";
  const is = (name, state) => state ? `is-${name}` : "";
  return { b, e, m, be, bm, em, bem: bem2, is };
}
function createNameSpace(name) {
  const namespace = `h-${name}`;
  return createBEM(namespace);
}
const bem = createNameSpace("button");
console.log(bem.b("box"));
console.log(bem.bem("block", "element", "modifier"));
console.log(bem.is("isChecked", true));

const iconProps = {
  color: String,
  size: [Number, String]
};

var script = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "h-icon"
  },
  __name: "icon",
  props: iconProps,
  setup(__props) {
    const bem = createNameSpace("icon");
    const props = __props;
    const style = vue.computed(() => {
      const { size, color } = props;
      if (!size && !color) return {};
      return {
        ...size ? { "font-size": size + "px" } : {},
        ...color ? { color } : {}
      };
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock(
        "i",
        {
          class: vue.normalizeClass(vue.unref(bem).b()),
          style: vue.normalizeStyle(style.value)
        },
        [
          vue.renderSlot(_ctx.$slots, "default")
        ],
        6
        /* CLASS, STYLE */
      );
    };
  }
});

script.__file = "packages/components/icon/src/icon.vue";

const Icon = withInstall.withInstall(script);

exports.Icon = Icon;
exports.default = Icon;
exports.iconProps = iconProps;
