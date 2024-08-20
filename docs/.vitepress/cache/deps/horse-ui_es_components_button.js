import {
  withInstall
} from "./chunk-7FPKLWMX.js";
import {
  Fragment,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  defineComponent,
  normalizeClass,
  normalizeStyle,
  openBlock,
  renderSlot,
  resolveDynamicComponent,
  unref,
  useSlots,
  withCtx
} from "./chunk-45KCXATN.js";

// node_modules/horse-ui/es/components/button/index.js
var _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 512 512"
};
var _hoisted_2 = createBaseVNode(
  "path",
  {
    d: "M400 148l-21.12-24.57A191.43 191.43 0 0 0 240 64C134 64 48 150 48 256s86 192 192 192a192.09 192.09 0 0 0 181.07-128",
    fill: "none",
    stroke: "currentColor",
    "stroke-linecap": "round",
    "stroke-miterlimit": "10",
    "stroke-width": "32"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_3 = createBaseVNode(
  "path",
  {
    d: "M464 97.42V208a16 16 0 0 1-16 16H337.42c-14.26 0-21.4-17.23-11.32-27.31L436.69 86.1C446.77 76 464 83.16 464 97.42z",
    fill: "currentColor"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_4 = [_hoisted_2, _hoisted_3];
var Reload = defineComponent({
  name: "Reload",
  render: function render(_ctx, _cache) {
    return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_4);
  }
});
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
var script$1 = defineComponent({
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
script$1.__file = "packages/components/icon/src/icon.vue";
var Icon = withInstall(script$1);
var Type = ((Type2) => {
  Type2["Primary"] = "primary";
  Type2["Success"] = "success";
  Type2["Warning"] = "warning";
  Type2["Danger"] = "danger";
  Type2["Info"] = "info";
  Type2["Default"] = "default";
  return Type2;
})(Type || {});
var buttonProps = {
  size: String,
  type: {
    type: String,
    //自定义校验器
    validator: (value) => {
      return Object.values(Type).includes(value);
    },
    default: "default"
    /* Default */
  },
  round: Boolean,
  loading: Boolean,
  disabled: Boolean,
  nativeType: {
    type: String,
    default: "button"
    /* Button */
  },
  iconPlacement: {
    type: String,
    default: "null"
  }
};
var buttonEmits = {
  click: (event) => event instanceof MouseEvent,
  mousedown: (event) => event instanceof MouseEvent,
  mouseup: (event) => event instanceof MouseEvent
};
var _hoisted_1 = ["type", "disabled"];
var script = defineComponent({
  ...{
    name: "h-button",
    inheritAttrs: false
  },
  __name: "button",
  props: buttonProps,
  emits: buttonEmits,
  setup(__props, { emit: __emit }) {
    const bem2 = createNameSpace("button");
    const emit = __emit;
    const slots = useSlots();
    const emitClick = (event) => {
      emit("click", event);
    };
    const emitMouseDown = (event) => {
      emit("mousedown", event);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: normalizeClass([
          unref(bem2).b(),
          unref(bem2).m(_ctx.type),
          unref(bem2).m(_ctx.size),
          unref(bem2).is("round", _ctx.round),
          unref(bem2).is("loading", _ctx.loading),
          unref(bem2).is("disabled", _ctx.disabled)
        ]),
        type: _ctx.nativeType,
        disabled: _ctx.disabled || _ctx.loading,
        onClick: emitClick,
        onMousedown: emitMouseDown
      }, [
        createCommentVNode(" 加载图标 "),
        createCommentVNode(" 在左边展示 "),
        _ctx.iconPlacement === "left" ? (openBlock(), createBlock(unref(Icon), {
          key: 0,
          size: "15"
        }, {
          default: withCtx(() => [
            _ctx.loading ? (openBlock(), createBlock(unref(Reload), {
              key: 0,
              class: "loading"
            })) : unref(slots).icon ? (openBlock(), createElementBlock(
              Fragment,
              { key: 1 },
              [
                createCommentVNode(" 用户通过插槽传过来的图标 "),
                (openBlock(), createBlock(resolveDynamicComponent(unref(slots).icon)))
              ],
              64
              /* STABLE_FRAGMENT */
            )) : createCommentVNode("v-if", true)
          ]),
          _: 1
          /* STABLE */
        })) : createCommentVNode("v-if", true),
        renderSlot(_ctx.$slots, "default"),
        createCommentVNode(" 在右边展示 "),
        _ctx.iconPlacement === "right" ? (openBlock(), createBlock(unref(Icon), {
          key: 1,
          size: "15"
        }, {
          default: withCtx(() => [
            _ctx.loading ? (openBlock(), createBlock(unref(Reload), {
              key: 0,
              class: "loading"
            })) : unref(slots).icon ? (openBlock(), createBlock(resolveDynamicComponent(unref(slots).icon), { key: 1 })) : createCommentVNode("v-if", true)
          ]),
          _: 1
          /* STABLE */
        })) : createCommentVNode("v-if", true)
      ], 42, _hoisted_1);
    };
  }
});
script.__file = "packages/components/button/src/button.vue";
var Button = withInstall(script);
export {
  Button,
  Button as default
};
//# sourceMappingURL=horse-ui_es_components_button.js.map
