import {
  withInstall
} from "./chunk-7FPKLWMX.js";
import {
  computed,
  createElementBlock,
  defineComponent,
  normalizeClass,
  normalizeStyle,
  openBlock,
  renderSlot,
  unref
} from "./chunk-45KCXATN.js";

// node_modules/horse-ui/es/components/icon/index.js
var _bem = (namespace, blockSuffix, element, modifier) => {
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
var bem = createNameSpace("button");
console.log(bem.b("box"));
console.log(bem.bem("block", "element", "modifier"));
console.log(bem.is("isChecked", true));
var iconProps = {
  color: String,
  size: [Number, String]
};
var script = defineComponent({
  ...{
    name: "h-icon"
  },
  __name: "icon",
  props: iconProps,
  setup(__props) {
    const bem2 = createNameSpace("icon");
    const props = __props;
    const style = computed(() => {
      const { size, color } = props;
      if (!size && !color) return {};
      return {
        ...size ? { "font-size": size + "px" } : {},
        ...color ? { color } : {}
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "i",
        {
          class: normalizeClass(unref(bem2).b()),
          style: normalizeStyle(style.value)
        },
        [
          renderSlot(_ctx.$slots, "default")
        ],
        6
        /* CLASS, STYLE */
      );
    };
  }
});
script.__file = "packages/components/icon/src/icon.vue";
var Icon = withInstall(script);
export {
  Icon,
  Icon as default,
  iconProps
};
//# sourceMappingURL=horse-ui_es_components_icon_index__js.js.map
