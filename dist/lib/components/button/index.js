'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var withInstall = require('./Users/mamingzhe/Horse UI/packages/utils/with-install');
var vue = require('vue');

const _hoisted_1$1 = {
  xmlns: 'http://www.w3.org/2000/svg',
  'xmlns:xlink': 'http://www.w3.org/1999/xlink',
  viewBox: '0 0 512 512'
};
const _hoisted_2 = /*#__PURE__*/ vue.createElementVNode(
  'path',
  {
    d: 'M400 148l-21.12-24.57A191.43 191.43 0 0 0 240 64C134 64 48 150 48 256s86 192 192 192a192.09 192.09 0 0 0 181.07-128',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-linecap': 'round',
    'stroke-miterlimit': '10',
    'stroke-width': '32'
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3 = /*#__PURE__*/ vue.createElementVNode(
  'path',
  {
    d: 'M464 97.42V208a16 16 0 0 1-16 16H337.42c-14.26 0-21.4-17.23-11.32-27.31L436.69 86.1C446.77 76 464 83.16 464 97.42z',
    fill: 'currentColor'
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_4 = [_hoisted_2, _hoisted_3];
var Reload = vue.defineComponent({
  name: 'Reload',
  render: function render(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock('svg', _hoisted_1$1, _hoisted_4)
  }
});

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

var script$1 = /* @__PURE__ */ vue.defineComponent({
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

script$1.__file = "packages/components/icon/src/icon.vue";

const Icon = withInstall.withInstall(script$1);

var Type = /* @__PURE__ */ ((Type2) => {
  Type2["Primary"] = "primary";
  Type2["Success"] = "success";
  Type2["Warning"] = "warning";
  Type2["Danger"] = "danger";
  Type2["Info"] = "info";
  Type2["Default"] = "default";
  return Type2;
})(Type || {});
const buttonProps = {
  size: String,
  type: {
    type: String,
    //自定义校验器
    validator: (value) => {
      return Object.values(Type).includes(value);
    },
    default: "default" /* Default */
  },
  round: Boolean,
  loading: Boolean,
  disabled: Boolean,
  nativeType: {
    type: String,
    default: "button" /* Button */
  },
  iconPlacement: {
    type: String,
    default: "null"
  }
};
const buttonEmits = {
  click: (event) => event instanceof MouseEvent,
  mousedown: (event) => event instanceof MouseEvent,
  mouseup: (event) => event instanceof MouseEvent
};

const _hoisted_1 = ["type", "disabled"];
var script = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "h-button",
    inheritAttrs: false
  },
  __name: "button",
  props: buttonProps,
  emits: buttonEmits,
  setup(__props, { emit: __emit }) {
    const bem = createNameSpace("button");
    const emit = __emit;
    const slots = vue.useSlots();
    const emitClick = (event) => {
      emit("click", event);
    };
    const emitMouseDown = (event) => {
      emit("mousedown", event);
    };
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("button", {
        class: vue.normalizeClass([
          vue.unref(bem).b(),
          vue.unref(bem).m(_ctx.type),
          vue.unref(bem).m(_ctx.size),
          vue.unref(bem).is("round", _ctx.round),
          vue.unref(bem).is("loading", _ctx.loading),
          vue.unref(bem).is("disabled", _ctx.disabled)
        ]),
        type: _ctx.nativeType,
        disabled: _ctx.disabled || _ctx.loading,
        onClick: emitClick,
        onMousedown: emitMouseDown
      }, [
        vue.createCommentVNode(" \u52A0\u8F7D\u56FE\u6807 "),
        vue.createCommentVNode(" \u5728\u5DE6\u8FB9\u5C55\u793A "),
        _ctx.iconPlacement === "left" ? (vue.openBlock(), vue.createBlock(vue.unref(Icon), {
          key: 0,
          size: "15"
        }, {
          default: vue.withCtx(() => [
            _ctx.loading ? (vue.openBlock(), vue.createBlock(vue.unref(Reload), {
              key: 0,
              class: "loading"
            })) : vue.unref(slots).icon ? (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              { key: 1 },
              [
                vue.createCommentVNode(" \u7528\u6237\u901A\u8FC7\u63D2\u69FD\u4F20\u8FC7\u6765\u7684\u56FE\u6807 "),
                (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(vue.unref(slots).icon)))
              ],
              64
              /* STABLE_FRAGMENT */
            )) : vue.createCommentVNode("v-if", true)
          ]),
          _: 1
          /* STABLE */
        })) : vue.createCommentVNode("v-if", true),
        vue.renderSlot(_ctx.$slots, "default"),
        vue.createCommentVNode(" \u5728\u53F3\u8FB9\u5C55\u793A "),
        _ctx.iconPlacement === "right" ? (vue.openBlock(), vue.createBlock(vue.unref(Icon), {
          key: 1,
          size: "15"
        }, {
          default: vue.withCtx(() => [
            _ctx.loading ? (vue.openBlock(), vue.createBlock(vue.unref(Reload), {
              key: 0,
              class: "loading"
            })) : vue.unref(slots).icon ? (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(vue.unref(slots).icon), { key: 1 })) : vue.createCommentVNode("v-if", true)
          ]),
          _: 1
          /* STABLE */
        })) : vue.createCommentVNode("v-if", true)
      ], 42, _hoisted_1);
    };
  }
});

script.__file = "packages/components/button/src/button.vue";

const Button = withInstall.withInstall(script);

exports.Button = Button;
exports.default = Button;
