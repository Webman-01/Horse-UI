(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue'), require('vue-demi')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue', 'vue-demi'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.HUi = {}, global.Vue, global.VueDemi));
})(this, (function (exports, vue, vueDemi) { 'use strict';

  function withInstall(com) {
    com.install = function(app) {
      const { name } = com;
      app.component(name, com);
    };
    return com;
  }

  const _hoisted_1$b = {
    xmlns: 'http://www.w3.org/2000/svg',
    'xmlns:xlink': 'http://www.w3.org/1999/xlink',
    viewBox: '0 0 512 512'
  };
  const _hoisted_2$6 = /*#__PURE__*/ vue.createElementVNode(
    'path',
    {
      d: 'M144 448l224-192L144 64v384z',
      fill: 'currentColor'
    },
    null,
    -1
    /* HOISTED */
  );
  const _hoisted_3$5 = [_hoisted_2$6];
  var CaretForwardSharp = vue.defineComponent({
    name: 'CaretForwardSharp',
    render: function render(_ctx, _cache) {
      return vue.openBlock(), vue.createElementBlock('svg', _hoisted_1$b, _hoisted_3$5)
    }
  });

  const _hoisted_1$a = {
    xmlns: 'http://www.w3.org/2000/svg',
    'xmlns:xlink': 'http://www.w3.org/1999/xlink',
    viewBox: '0 0 512 512'
  };
  const _hoisted_2$5 = /*#__PURE__*/ vue.createElementVNode(
    'path',
    {
      d: 'M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192z',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-miterlimit': '10',
      'stroke-width': '32'
    },
    null,
    -1
    /* HOISTED */
  );
  const _hoisted_3$4 = /*#__PURE__*/ vue.createElementVNode(
    'path',
    {
      fill: 'none',
      stroke: 'currentColor',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      'stroke-width': '32',
      d: 'M352 176L217.6 336L160 272'
    },
    null,
    -1
    /* HOISTED */
  );
  const _hoisted_4$4 = [_hoisted_2$5, _hoisted_3$4];
  var CheckmarkCircleOutline = vue.defineComponent({
    name: 'CheckmarkCircleOutline',
    render: function render(_ctx, _cache) {
      return vue.openBlock(), vue.createElementBlock('svg', _hoisted_1$a, _hoisted_4$4)
    }
  });

  const _hoisted_1$9 = {
    xmlns: 'http://www.w3.org/2000/svg',
    'xmlns:xlink': 'http://www.w3.org/1999/xlink',
    viewBox: '0 0 512 512'
  };
  const _hoisted_2$4 = /*#__PURE__*/ vue.createElementVNode(
    'path',
    {
      d: 'M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192z',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-miterlimit': '10',
      'stroke-width': '32'
    },
    null,
    -1
    /* HOISTED */
  );
  const _hoisted_3$3 = /*#__PURE__*/ vue.createElementVNode(
    'path',
    {
      fill: 'none',
      stroke: 'currentColor',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      'stroke-width': '32',
      d: 'M320 320L192 192'
    },
    null,
    -1
    /* HOISTED */
  );
  const _hoisted_4$3 = /*#__PURE__*/ vue.createElementVNode(
    'path',
    {
      fill: 'none',
      stroke: 'currentColor',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      'stroke-width': '32',
      d: 'M192 320l128-128'
    },
    null,
    -1
    /* HOISTED */
  );
  const _hoisted_5 = [_hoisted_2$4, _hoisted_3$3, _hoisted_4$3];
  var CloseCircleOutline = vue.defineComponent({
    name: 'CloseCircleOutline',
    render: function render(_ctx, _cache) {
      return vue.openBlock(), vue.createElementBlock('svg', _hoisted_1$9, _hoisted_5)
    }
  });

  const _hoisted_1$8 = {
    xmlns: 'http://www.w3.org/2000/svg',
    'xmlns:xlink': 'http://www.w3.org/1999/xlink',
    viewBox: '0 0 512 512'
  };
  const _hoisted_2$3 = /*#__PURE__*/ vue.createElementVNode(
    'path',
    {
      fill: 'none',
      stroke: 'currentColor',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      'stroke-width': '32',
      d: 'M368 368L144 144'
    },
    null,
    -1
    /* HOISTED */
  );
  const _hoisted_3$2 = /*#__PURE__*/ vue.createElementVNode(
    'path',
    {
      fill: 'none',
      stroke: 'currentColor',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      'stroke-width': '32',
      d: 'M368 144L144 368'
    },
    null,
    -1
    /* HOISTED */
  );
  const _hoisted_4$2 = [_hoisted_2$3, _hoisted_3$2];
  var CloseOutline = vue.defineComponent({
    name: 'CloseOutline',
    render: function render(_ctx, _cache) {
      return vue.openBlock(), vue.createElementBlock('svg', _hoisted_1$8, _hoisted_4$2)
    }
  });

  const _hoisted_1$7 = {
    xmlns: 'http://www.w3.org/2000/svg',
    'xmlns:xlink': 'http://www.w3.org/1999/xlink',
    viewBox: '0 0 512 512'
  };
  const _hoisted_2$2 = /*#__PURE__*/ vue.createStaticVNode('<path d="M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z" fill="currentColor"></path><path d="M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z" fill="currentColor"></path><path d="M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z" fill="currentColor"></path><path d="M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z" fill="currentColor"></path><path d="M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z" fill="currentColor"></path>', 5);
  const _hoisted_7 = [_hoisted_2$2];
  var EyeOffOutline = vue.defineComponent({
    name: 'EyeOffOutline',
    render: function render(_ctx, _cache) {
      return vue.openBlock(), vue.createElementBlock('svg', _hoisted_1$7, _hoisted_7)
    }
  });

  const _hoisted_1$6 = {
    xmlns: 'http://www.w3.org/2000/svg',
    'xmlns:xlink': 'http://www.w3.org/1999/xlink',
    viewBox: '0 0 512 512'
  };
  const _hoisted_2$1 = /*#__PURE__*/ vue.createElementVNode(
    'path',
    {
      d: 'M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      'stroke-width': '32'
    },
    null,
    -1
    /* HOISTED */
  );
  const _hoisted_3$1 = /*#__PURE__*/ vue.createElementVNode(
    'circle',
    {
      cx: '256',
      cy: '256',
      r: '80',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-miterlimit': '10',
      'stroke-width': '32'
    },
    null,
    -1
    /* HOISTED */
  );
  const _hoisted_4$1 = [_hoisted_2$1, _hoisted_3$1];
  var EyeOutline = vue.defineComponent({
    name: 'EyeOutline',
    render: function render(_ctx, _cache) {
      return vue.openBlock(), vue.createElementBlock('svg', _hoisted_1$6, _hoisted_4$1)
    }
  });

  const _hoisted_1$5 = {
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
      return vue.openBlock(), vue.createElementBlock('svg', _hoisted_1$5, _hoisted_4)
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

  var script$c = /* @__PURE__ */ vue.defineComponent({
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

  script$c.__file = "packages/components/icon/src/icon.vue";

  const Icon = withInstall(script$c);

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

  const _hoisted_1$4 = ["type", "disabled"];
  var script$b = /* @__PURE__ */ vue.defineComponent({
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
        ], 42, _hoisted_1$4);
      };
    }
  });

  script$b.__file = "packages/components/button/src/button.vue";

  const Button = withInstall(script$b);

  const checkBoxProps = {
    modelValue: {
      type: [Boolean, String, Number]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    indeterminate: {
      type: Boolean,
      default: false
    },
    label: {
      type: String
    }
  };
  const checkBoxEmits = {
    "update:modelValue": (value) => true,
    change: (value) => true
  };

  const _hoisted_1$3 = ["disabled", "value"];
  var script$a = /* @__PURE__ */ vue.defineComponent({
    ...{
      name: "h-checkbox"
    },
    __name: "checkbox",
    props: checkBoxProps,
    emits: checkBoxEmits,
    setup(__props, { emit: __emit }) {
      const bem = createNameSpace("checkbox");
      const props = __props;
      const emit = __emit;
      const isChecked = vue.ref(false);
      const model = vue.computed({
        get() {
          if (!props.indeterminate) isChecked.value = Boolean(props.modelValue);
          return props.modelValue;
        },
        set(val) {
          return emit("update:modelValue", val);
        }
      });
      const inputRef = vue.ref();
      function indeterminate(val) {
        inputRef.value.indeterminate = val;
      }
      vue.watch(() => props.indeterminate, indeterminate);
      vue.onMounted(() => {
        indeterminate(props.indeterminate);
      });
      function handleChange(e) {
        const target = e.target;
        const value = target.checked ? true : false;
        emit("change", value);
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          "label",
          {
            class: vue.normalizeClass([vue.unref(bem).b(), vue.unref(bem).is("disabled", _ctx.disabled)])
          },
          [
            vue.createElementVNode(
              "span",
              {
                class: vue.normalizeClass(vue.unref(bem).e("input"))
              },
              [
                vue.withDirectives(vue.createElementVNode("input", {
                  type: "checkbox",
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.value = $event),
                  ref_key: "inputRef",
                  ref: inputRef,
                  disabled: _ctx.disabled,
                  value: _ctx.label,
                  onChange: handleChange
                }, null, 40, _hoisted_1$3), [
                  [vue.vModelCheckbox, model.value]
                ])
              ],
              2
              /* CLASS */
            ),
            vue.createCommentVNode(" \u5982\u679Ch-checkbox\u4E2D\u6709\u5199\u4E1C\u897F\u5C31\u5C55\u793A\u5199\u7684 "),
            _ctx.$slots.default || _ctx.label ? (vue.openBlock(), vue.createElementBlock(
              "span",
              {
                key: 0,
                class: vue.normalizeClass([vue.unref(bem).e("label"), vue.unref(bem).is("checked", isChecked.value)])
              },
              [
                vue.renderSlot(_ctx.$slots, "default"),
                !_ctx.$slots.default ? (vue.openBlock(), vue.createElementBlock(
                  vue.Fragment,
                  { key: 0 },
                  [
                    vue.createTextVNode(
                      vue.toDisplayString(_ctx.label),
                      1
                      /* TEXT */
                    )
                  ],
                  64
                  /* STABLE_FRAGMENT */
                )) : vue.createCommentVNode("v-if", true)
              ],
              2
              /* CLASS */
            )) : vue.createCommentVNode("v-if", true)
          ],
          2
          /* CLASS */
        );
      };
    }
  });

  script$a.__file = "packages/components/checkbox/src/checkbox.vue";

  const Checkbox = withInstall(script$a);

  const formProps = {
    model: Object,
    rules: {
      type: Object
    },
    showMessage: {
      type: Boolean,
      default: true
    },
    maxWidth: [Number, String]
  };
  const FormContextKey = Symbol();

  function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };
    return _extends.apply(this, arguments);
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;

    _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct.bind();
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  /* eslint no-console:0 */
  var formatRegExp = /%[sdj%]/g;
  var warning = function warning() {}; // don't print warning message when in production env or node runtime

  if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV !== 'production' && typeof window !== 'undefined' && typeof document !== 'undefined') {
    warning = function warning(type, errors) {
      if (typeof console !== 'undefined' && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING === 'undefined') {
        if (errors.every(function (e) {
          return typeof e === 'string';
        })) {
          console.warn(type, errors);
        }
      }
    };
  }

  function convertFieldsError(errors) {
    if (!errors || !errors.length) return null;
    var fields = {};
    errors.forEach(function (error) {
      var field = error.field;
      fields[field] = fields[field] || [];
      fields[field].push(error);
    });
    return fields;
  }
  function format(template) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var i = 0;
    var len = args.length;

    if (typeof template === 'function') {
      return template.apply(null, args);
    }

    if (typeof template === 'string') {
      var str = template.replace(formatRegExp, function (x) {
        if (x === '%%') {
          return '%';
        }

        if (i >= len) {
          return x;
        }

        switch (x) {
          case '%s':
            return String(args[i++]);

          case '%d':
            return Number(args[i++]);

          case '%j':
            try {
              return JSON.stringify(args[i++]);
            } catch (_) {
              return '[Circular]';
            }

            break;

          default:
            return x;
        }
      });
      return str;
    }

    return template;
  }

  function isNativeStringType(type) {
    return type === 'string' || type === 'url' || type === 'hex' || type === 'email' || type === 'date' || type === 'pattern';
  }

  function isEmptyValue(value, type) {
    if (value === undefined || value === null) {
      return true;
    }

    if (type === 'array' && Array.isArray(value) && !value.length) {
      return true;
    }

    if (isNativeStringType(type) && typeof value === 'string' && !value) {
      return true;
    }

    return false;
  }

  function asyncParallelArray(arr, func, callback) {
    var results = [];
    var total = 0;
    var arrLength = arr.length;

    function count(errors) {
      results.push.apply(results, errors || []);
      total++;

      if (total === arrLength) {
        callback(results);
      }
    }

    arr.forEach(function (a) {
      func(a, count);
    });
  }

  function asyncSerialArray(arr, func, callback) {
    var index = 0;
    var arrLength = arr.length;

    function next(errors) {
      if (errors && errors.length) {
        callback(errors);
        return;
      }

      var original = index;
      index = index + 1;

      if (original < arrLength) {
        func(arr[original], next);
      } else {
        callback([]);
      }
    }

    next([]);
  }

  function flattenObjArr(objArr) {
    var ret = [];
    Object.keys(objArr).forEach(function (k) {
      ret.push.apply(ret, objArr[k] || []);
    });
    return ret;
  }

  var AsyncValidationError = /*#__PURE__*/function (_Error) {
    _inheritsLoose(AsyncValidationError, _Error);

    function AsyncValidationError(errors, fields) {
      var _this;

      _this = _Error.call(this, 'Async Validation Error') || this;
      _this.errors = errors;
      _this.fields = fields;
      return _this;
    }

    return AsyncValidationError;
  }( /*#__PURE__*/_wrapNativeSuper(Error));
  function asyncMap(objArr, option, func, callback, source) {
    if (option.first) {
      var _pending = new Promise(function (resolve, reject) {
        var next = function next(errors) {
          callback(errors);
          return errors.length ? reject(new AsyncValidationError(errors, convertFieldsError(errors))) : resolve(source);
        };

        var flattenArr = flattenObjArr(objArr);
        asyncSerialArray(flattenArr, func, next);
      });

      _pending["catch"](function (e) {
        return e;
      });

      return _pending;
    }

    var firstFields = option.firstFields === true ? Object.keys(objArr) : option.firstFields || [];
    var objArrKeys = Object.keys(objArr);
    var objArrLength = objArrKeys.length;
    var total = 0;
    var results = [];
    var pending = new Promise(function (resolve, reject) {
      var next = function next(errors) {
        results.push.apply(results, errors);
        total++;

        if (total === objArrLength) {
          callback(results);
          return results.length ? reject(new AsyncValidationError(results, convertFieldsError(results))) : resolve(source);
        }
      };

      if (!objArrKeys.length) {
        callback(results);
        resolve(source);
      }

      objArrKeys.forEach(function (key) {
        var arr = objArr[key];

        if (firstFields.indexOf(key) !== -1) {
          asyncSerialArray(arr, func, next);
        } else {
          asyncParallelArray(arr, func, next);
        }
      });
    });
    pending["catch"](function (e) {
      return e;
    });
    return pending;
  }

  function isErrorObj(obj) {
    return !!(obj && obj.message !== undefined);
  }

  function getValue(value, path) {
    var v = value;

    for (var i = 0; i < path.length; i++) {
      if (v == undefined) {
        return v;
      }

      v = v[path[i]];
    }

    return v;
  }

  function complementError(rule, source) {
    return function (oe) {
      var fieldValue;

      if (rule.fullFields) {
        fieldValue = getValue(source, rule.fullFields);
      } else {
        fieldValue = source[oe.field || rule.fullField];
      }

      if (isErrorObj(oe)) {
        oe.field = oe.field || rule.fullField;
        oe.fieldValue = fieldValue;
        return oe;
      }

      return {
        message: typeof oe === 'function' ? oe() : oe,
        fieldValue: fieldValue,
        field: oe.field || rule.fullField
      };
    };
  }
  function deepMerge(target, source) {
    if (source) {
      for (var s in source) {
        if (source.hasOwnProperty(s)) {
          var value = source[s];

          if (typeof value === 'object' && typeof target[s] === 'object') {
            target[s] = _extends({}, target[s], value);
          } else {
            target[s] = value;
          }
        }
      }
    }

    return target;
  }

  var required$1 = function required(rule, value, source, errors, options, type) {
    if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type || rule.type))) {
      errors.push(format(options.messages.required, rule.fullField));
    }
  };

  /**
   *  Rule for validating whitespace.
   *
   *  @param rule The validation rule.
   *  @param value The value of the field on the source object.
   *  @param source The source object being validated.
   *  @param errors An array of errors that this rule may add
   *  validation errors to.
   *  @param options The validation options.
   *  @param options.messages The validation messages.
   */

  var whitespace = function whitespace(rule, value, source, errors, options) {
    if (/^\s+$/.test(value) || value === '') {
      errors.push(format(options.messages.whitespace, rule.fullField));
    }
  };

  // https://github.com/kevva/url-regex/blob/master/index.js
  var urlReg;
  var getUrlRegex = (function () {
    if (urlReg) {
      return urlReg;
    }

    var word = '[a-fA-F\\d:]';

    var b = function b(options) {
      return options && options.includeBoundaries ? "(?:(?<=\\s|^)(?=" + word + ")|(?<=" + word + ")(?=\\s|$))" : '';
    };

    var v4 = '(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}';
    var v6seg = '[a-fA-F\\d]{1,4}';
    var v6 = ("\n(?:\n(?:" + v6seg + ":){7}(?:" + v6seg + "|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:" + v6seg + ":){6}(?:" + v4 + "|:" + v6seg + "|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:" + v6seg + ":){5}(?::" + v4 + "|(?::" + v6seg + "){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:" + v6seg + ":){4}(?:(?::" + v6seg + "){0,1}:" + v4 + "|(?::" + v6seg + "){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:" + v6seg + ":){3}(?:(?::" + v6seg + "){0,2}:" + v4 + "|(?::" + v6seg + "){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:" + v6seg + ":){2}(?:(?::" + v6seg + "){0,3}:" + v4 + "|(?::" + v6seg + "){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:" + v6seg + ":){1}(?:(?::" + v6seg + "){0,4}:" + v4 + "|(?::" + v6seg + "){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::(?:(?::" + v6seg + "){0,5}:" + v4 + "|(?::" + v6seg + "){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1\n").replace(/\s*\/\/.*$/gm, '').replace(/\n/g, '').trim(); // Pre-compile only the exact regexes because adding a global flag make regexes stateful

    var v46Exact = new RegExp("(?:^" + v4 + "$)|(?:^" + v6 + "$)");
    var v4exact = new RegExp("^" + v4 + "$");
    var v6exact = new RegExp("^" + v6 + "$");

    var ip = function ip(options) {
      return options && options.exact ? v46Exact : new RegExp("(?:" + b(options) + v4 + b(options) + ")|(?:" + b(options) + v6 + b(options) + ")", 'g');
    };

    ip.v4 = function (options) {
      return options && options.exact ? v4exact : new RegExp("" + b(options) + v4 + b(options), 'g');
    };

    ip.v6 = function (options) {
      return options && options.exact ? v6exact : new RegExp("" + b(options) + v6 + b(options), 'g');
    };

    var protocol = "(?:(?:[a-z]+:)?//)";
    var auth = '(?:\\S+(?::\\S*)?@)?';
    var ipv4 = ip.v4().source;
    var ipv6 = ip.v6().source;
    var host = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)";
    var domain = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*";
    var tld = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))";
    var port = '(?::\\d{2,5})?';
    var path = '(?:[/?#][^\\s"]*)?';
    var regex = "(?:" + protocol + "|www\\.)" + auth + "(?:localhost|" + ipv4 + "|" + ipv6 + "|" + host + domain + tld + ")" + port + path;
    urlReg = new RegExp("(?:^" + regex + "$)", 'i');
    return urlReg;
  });

  /* eslint max-len:0 */

  var pattern$2 = {
    // http://emailregex.com/
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
    // url: new RegExp(
    //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
    //   'i',
    // ),
    hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
  };
  var types = {
    integer: function integer(value) {
      return types.number(value) && parseInt(value, 10) === value;
    },
    "float": function float(value) {
      return types.number(value) && !types.integer(value);
    },
    array: function array(value) {
      return Array.isArray(value);
    },
    regexp: function regexp(value) {
      if (value instanceof RegExp) {
        return true;
      }

      try {
        return !!new RegExp(value);
      } catch (e) {
        return false;
      }
    },
    date: function date(value) {
      return typeof value.getTime === 'function' && typeof value.getMonth === 'function' && typeof value.getYear === 'function' && !isNaN(value.getTime());
    },
    number: function number(value) {
      if (isNaN(value)) {
        return false;
      }

      return typeof value === 'number';
    },
    object: function object(value) {
      return typeof value === 'object' && !types.array(value);
    },
    method: function method(value) {
      return typeof value === 'function';
    },
    email: function email(value) {
      return typeof value === 'string' && value.length <= 320 && !!value.match(pattern$2.email);
    },
    url: function url(value) {
      return typeof value === 'string' && value.length <= 2048 && !!value.match(getUrlRegex());
    },
    hex: function hex(value) {
      return typeof value === 'string' && !!value.match(pattern$2.hex);
    }
  };

  var type$1 = function type(rule, value, source, errors, options) {
    if (rule.required && value === undefined) {
      required$1(rule, value, source, errors, options);
      return;
    }

    var custom = ['integer', 'float', 'array', 'regexp', 'object', 'method', 'email', 'number', 'date', 'url', 'hex'];
    var ruleType = rule.type;

    if (custom.indexOf(ruleType) > -1) {
      if (!types[ruleType](value)) {
        errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
      } // straight typeof check

    } else if (ruleType && typeof value !== rule.type) {
      errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
    }
  };

  var range = function range(rule, value, source, errors, options) {
    var len = typeof rule.len === 'number';
    var min = typeof rule.min === 'number';
    var max = typeof rule.max === 'number'; // 正则匹配码点范围从U+010000一直到U+10FFFF的文字（补充平面Supplementary Plane）

    var spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
    var val = value;
    var key = null;
    var num = typeof value === 'number';
    var str = typeof value === 'string';
    var arr = Array.isArray(value);

    if (num) {
      key = 'number';
    } else if (str) {
      key = 'string';
    } else if (arr) {
      key = 'array';
    } // if the value is not of a supported type for range validation
    // the validation rule rule should use the
    // type property to also test for a particular type


    if (!key) {
      return false;
    }

    if (arr) {
      val = value.length;
    }

    if (str) {
      // 处理码点大于U+010000的文字length属性不准确的bug，如"𠮷𠮷𠮷".lenght !== 3
      val = value.replace(spRegexp, '_').length;
    }

    if (len) {
      if (val !== rule.len) {
        errors.push(format(options.messages[key].len, rule.fullField, rule.len));
      }
    } else if (min && !max && val < rule.min) {
      errors.push(format(options.messages[key].min, rule.fullField, rule.min));
    } else if (max && !min && val > rule.max) {
      errors.push(format(options.messages[key].max, rule.fullField, rule.max));
    } else if (min && max && (val < rule.min || val > rule.max)) {
      errors.push(format(options.messages[key].range, rule.fullField, rule.min, rule.max));
    }
  };

  var ENUM$1 = 'enum';

  var enumerable$1 = function enumerable(rule, value, source, errors, options) {
    rule[ENUM$1] = Array.isArray(rule[ENUM$1]) ? rule[ENUM$1] : [];

    if (rule[ENUM$1].indexOf(value) === -1) {
      errors.push(format(options.messages[ENUM$1], rule.fullField, rule[ENUM$1].join(', ')));
    }
  };

  var pattern$1 = function pattern(rule, value, source, errors, options) {
    if (rule.pattern) {
      if (rule.pattern instanceof RegExp) {
        // if a RegExp instance is passed, reset `lastIndex` in case its `global`
        // flag is accidentally set to `true`, which in a validation scenario
        // is not necessary and the result might be misleading
        rule.pattern.lastIndex = 0;

        if (!rule.pattern.test(value)) {
          errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
        }
      } else if (typeof rule.pattern === 'string') {
        var _pattern = new RegExp(rule.pattern);

        if (!_pattern.test(value)) {
          errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
        }
      }
    }
  };

  var rules = {
    required: required$1,
    whitespace: whitespace,
    type: type$1,
    range: range,
    "enum": enumerable$1,
    pattern: pattern$1
  };

  var string = function string(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

    if (validate) {
      if (isEmptyValue(value, 'string') && !rule.required) {
        return callback();
      }

      rules.required(rule, value, source, errors, options, 'string');

      if (!isEmptyValue(value, 'string')) {
        rules.type(rule, value, source, errors, options);
        rules.range(rule, value, source, errors, options);
        rules.pattern(rule, value, source, errors, options);

        if (rule.whitespace === true) {
          rules.whitespace(rule, value, source, errors, options);
        }
      }
    }

    callback(errors);
  };

  var method = function method(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

    if (validate) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }

      rules.required(rule, value, source, errors, options);

      if (value !== undefined) {
        rules.type(rule, value, source, errors, options);
      }
    }

    callback(errors);
  };

  var number = function number(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

    if (validate) {
      if (value === '') {
        value = undefined;
      }

      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }

      rules.required(rule, value, source, errors, options);

      if (value !== undefined) {
        rules.type(rule, value, source, errors, options);
        rules.range(rule, value, source, errors, options);
      }
    }

    callback(errors);
  };

  var _boolean = function _boolean(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

    if (validate) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }

      rules.required(rule, value, source, errors, options);

      if (value !== undefined) {
        rules.type(rule, value, source, errors, options);
      }
    }

    callback(errors);
  };

  var regexp = function regexp(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

    if (validate) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }

      rules.required(rule, value, source, errors, options);

      if (!isEmptyValue(value)) {
        rules.type(rule, value, source, errors, options);
      }
    }

    callback(errors);
  };

  var integer = function integer(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

    if (validate) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }

      rules.required(rule, value, source, errors, options);

      if (value !== undefined) {
        rules.type(rule, value, source, errors, options);
        rules.range(rule, value, source, errors, options);
      }
    }

    callback(errors);
  };

  var floatFn = function floatFn(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

    if (validate) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }

      rules.required(rule, value, source, errors, options);

      if (value !== undefined) {
        rules.type(rule, value, source, errors, options);
        rules.range(rule, value, source, errors, options);
      }
    }

    callback(errors);
  };

  var array = function array(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

    if (validate) {
      if ((value === undefined || value === null) && !rule.required) {
        return callback();
      }

      rules.required(rule, value, source, errors, options, 'array');

      if (value !== undefined && value !== null) {
        rules.type(rule, value, source, errors, options);
        rules.range(rule, value, source, errors, options);
      }
    }

    callback(errors);
  };

  var object = function object(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

    if (validate) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }

      rules.required(rule, value, source, errors, options);

      if (value !== undefined) {
        rules.type(rule, value, source, errors, options);
      }
    }

    callback(errors);
  };

  var ENUM = 'enum';

  var enumerable = function enumerable(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

    if (validate) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }

      rules.required(rule, value, source, errors, options);

      if (value !== undefined) {
        rules[ENUM](rule, value, source, errors, options);
      }
    }

    callback(errors);
  };

  var pattern = function pattern(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

    if (validate) {
      if (isEmptyValue(value, 'string') && !rule.required) {
        return callback();
      }

      rules.required(rule, value, source, errors, options);

      if (!isEmptyValue(value, 'string')) {
        rules.pattern(rule, value, source, errors, options);
      }
    }

    callback(errors);
  };

  var date = function date(rule, value, callback, source, options) {
    // console.log('integer rule called %j', rule);
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field); // console.log('validate on %s value', value);

    if (validate) {
      if (isEmptyValue(value, 'date') && !rule.required) {
        return callback();
      }

      rules.required(rule, value, source, errors, options);

      if (!isEmptyValue(value, 'date')) {
        var dateObject;

        if (value instanceof Date) {
          dateObject = value;
        } else {
          dateObject = new Date(value);
        }

        rules.type(rule, dateObject, source, errors, options);

        if (dateObject) {
          rules.range(rule, dateObject.getTime(), source, errors, options);
        }
      }
    }

    callback(errors);
  };

  var required = function required(rule, value, callback, source, options) {
    var errors = [];
    var type = Array.isArray(value) ? 'array' : typeof value;
    rules.required(rule, value, source, errors, options, type);
    callback(errors);
  };

  var type = function type(rule, value, callback, source, options) {
    var ruleType = rule.type;
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

    if (validate) {
      if (isEmptyValue(value, ruleType) && !rule.required) {
        return callback();
      }

      rules.required(rule, value, source, errors, options, ruleType);

      if (!isEmptyValue(value, ruleType)) {
        rules.type(rule, value, source, errors, options);
      }
    }

    callback(errors);
  };

  var any = function any(rule, value, callback, source, options) {
    var errors = [];
    var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

    if (validate) {
      if (isEmptyValue(value) && !rule.required) {
        return callback();
      }

      rules.required(rule, value, source, errors, options);
    }

    callback(errors);
  };

  var validators = {
    string: string,
    method: method,
    number: number,
    "boolean": _boolean,
    regexp: regexp,
    integer: integer,
    "float": floatFn,
    array: array,
    object: object,
    "enum": enumerable,
    pattern: pattern,
    date: date,
    url: type,
    hex: type,
    email: type,
    required: required,
    any: any
  };

  function newMessages() {
    return {
      "default": 'Validation error on field %s',
      required: '%s is required',
      "enum": '%s must be one of %s',
      whitespace: '%s cannot be empty',
      date: {
        format: '%s date %s is invalid for format %s',
        parse: '%s date could not be parsed, %s is invalid ',
        invalid: '%s date %s is invalid'
      },
      types: {
        string: '%s is not a %s',
        method: '%s is not a %s (function)',
        array: '%s is not an %s',
        object: '%s is not an %s',
        number: '%s is not a %s',
        date: '%s is not a %s',
        "boolean": '%s is not a %s',
        integer: '%s is not an %s',
        "float": '%s is not a %s',
        regexp: '%s is not a valid %s',
        email: '%s is not a valid %s',
        url: '%s is not a valid %s',
        hex: '%s is not a valid %s'
      },
      string: {
        len: '%s must be exactly %s characters',
        min: '%s must be at least %s characters',
        max: '%s cannot be longer than %s characters',
        range: '%s must be between %s and %s characters'
      },
      number: {
        len: '%s must equal %s',
        min: '%s cannot be less than %s',
        max: '%s cannot be greater than %s',
        range: '%s must be between %s and %s'
      },
      array: {
        len: '%s must be exactly %s in length',
        min: '%s cannot be less than %s in length',
        max: '%s cannot be greater than %s in length',
        range: '%s must be between %s and %s in length'
      },
      pattern: {
        mismatch: '%s value %s does not match pattern %s'
      },
      clone: function clone() {
        var cloned = JSON.parse(JSON.stringify(this));
        cloned.clone = this.clone;
        return cloned;
      }
    };
  }
  var messages = newMessages();

  /**
   *  Encapsulates a validation schema.
   *
   *  @param descriptor An object declaring validation rules
   *  for this schema.
   */

  var Schema = /*#__PURE__*/function () {
    // ========================= Static =========================
    // ======================== Instance ========================
    function Schema(descriptor) {
      this.rules = null;
      this._messages = messages;
      this.define(descriptor);
    }

    var _proto = Schema.prototype;

    _proto.define = function define(rules) {
      var _this = this;

      if (!rules) {
        throw new Error('Cannot configure a schema with no rules');
      }

      if (typeof rules !== 'object' || Array.isArray(rules)) {
        throw new Error('Rules must be an object');
      }

      this.rules = {};
      Object.keys(rules).forEach(function (name) {
        var item = rules[name];
        _this.rules[name] = Array.isArray(item) ? item : [item];
      });
    };

    _proto.messages = function messages(_messages) {
      if (_messages) {
        this._messages = deepMerge(newMessages(), _messages);
      }

      return this._messages;
    };

    _proto.validate = function validate(source_, o, oc) {
      var _this2 = this;

      if (o === void 0) {
        o = {};
      }

      if (oc === void 0) {
        oc = function oc() {};
      }

      var source = source_;
      var options = o;
      var callback = oc;

      if (typeof options === 'function') {
        callback = options;
        options = {};
      }

      if (!this.rules || Object.keys(this.rules).length === 0) {
        if (callback) {
          callback(null, source);
        }

        return Promise.resolve(source);
      }

      function complete(results) {
        var errors = [];
        var fields = {};

        function add(e) {
          if (Array.isArray(e)) {
            var _errors;

            errors = (_errors = errors).concat.apply(_errors, e);
          } else {
            errors.push(e);
          }
        }

        for (var i = 0; i < results.length; i++) {
          add(results[i]);
        }

        if (!errors.length) {
          callback(null, source);
        } else {
          fields = convertFieldsError(errors);
          callback(errors, fields);
        }
      }

      if (options.messages) {
        var messages$1 = this.messages();

        if (messages$1 === messages) {
          messages$1 = newMessages();
        }

        deepMerge(messages$1, options.messages);
        options.messages = messages$1;
      } else {
        options.messages = this.messages();
      }

      var series = {};
      var keys = options.keys || Object.keys(this.rules);
      keys.forEach(function (z) {
        var arr = _this2.rules[z];
        var value = source[z];
        arr.forEach(function (r) {
          var rule = r;

          if (typeof rule.transform === 'function') {
            if (source === source_) {
              source = _extends({}, source);
            }

            value = source[z] = rule.transform(value);
          }

          if (typeof rule === 'function') {
            rule = {
              validator: rule
            };
          } else {
            rule = _extends({}, rule);
          } // Fill validator. Skip if nothing need to validate


          rule.validator = _this2.getValidationMethod(rule);

          if (!rule.validator) {
            return;
          }

          rule.field = z;
          rule.fullField = rule.fullField || z;
          rule.type = _this2.getType(rule);
          series[z] = series[z] || [];
          series[z].push({
            rule: rule,
            value: value,
            source: source,
            field: z
          });
        });
      });
      var errorFields = {};
      return asyncMap(series, options, function (data, doIt) {
        var rule = data.rule;
        var deep = (rule.type === 'object' || rule.type === 'array') && (typeof rule.fields === 'object' || typeof rule.defaultField === 'object');
        deep = deep && (rule.required || !rule.required && data.value);
        rule.field = data.field;

        function addFullField(key, schema) {
          return _extends({}, schema, {
            fullField: rule.fullField + "." + key,
            fullFields: rule.fullFields ? [].concat(rule.fullFields, [key]) : [key]
          });
        }

        function cb(e) {
          if (e === void 0) {
            e = [];
          }

          var errorList = Array.isArray(e) ? e : [e];

          if (!options.suppressWarning && errorList.length) {
            Schema.warning('async-validator:', errorList);
          }

          if (errorList.length && rule.message !== undefined) {
            errorList = [].concat(rule.message);
          } // Fill error info


          var filledErrors = errorList.map(complementError(rule, source));

          if (options.first && filledErrors.length) {
            errorFields[rule.field] = 1;
            return doIt(filledErrors);
          }

          if (!deep) {
            doIt(filledErrors);
          } else {
            // if rule is required but the target object
            // does not exist fail at the rule level and don't
            // go deeper
            if (rule.required && !data.value) {
              if (rule.message !== undefined) {
                filledErrors = [].concat(rule.message).map(complementError(rule, source));
              } else if (options.error) {
                filledErrors = [options.error(rule, format(options.messages.required, rule.field))];
              }

              return doIt(filledErrors);
            }

            var fieldsSchema = {};

            if (rule.defaultField) {
              Object.keys(data.value).map(function (key) {
                fieldsSchema[key] = rule.defaultField;
              });
            }

            fieldsSchema = _extends({}, fieldsSchema, data.rule.fields);
            var paredFieldsSchema = {};
            Object.keys(fieldsSchema).forEach(function (field) {
              var fieldSchema = fieldsSchema[field];
              var fieldSchemaList = Array.isArray(fieldSchema) ? fieldSchema : [fieldSchema];
              paredFieldsSchema[field] = fieldSchemaList.map(addFullField.bind(null, field));
            });
            var schema = new Schema(paredFieldsSchema);
            schema.messages(options.messages);

            if (data.rule.options) {
              data.rule.options.messages = options.messages;
              data.rule.options.error = options.error;
            }

            schema.validate(data.value, data.rule.options || options, function (errs) {
              var finalErrors = [];

              if (filledErrors && filledErrors.length) {
                finalErrors.push.apply(finalErrors, filledErrors);
              }

              if (errs && errs.length) {
                finalErrors.push.apply(finalErrors, errs);
              }

              doIt(finalErrors.length ? finalErrors : null);
            });
          }
        }

        var res;

        if (rule.asyncValidator) {
          res = rule.asyncValidator(rule, data.value, cb, data.source, options);
        } else if (rule.validator) {
          try {
            res = rule.validator(rule, data.value, cb, data.source, options);
          } catch (error) {
            console.error == null ? void 0 : console.error(error); // rethrow to report error

            if (!options.suppressValidatorError) {
              setTimeout(function () {
                throw error;
              }, 0);
            }

            cb(error.message);
          }

          if (res === true) {
            cb();
          } else if (res === false) {
            cb(typeof rule.message === 'function' ? rule.message(rule.fullField || rule.field) : rule.message || (rule.fullField || rule.field) + " fails");
          } else if (res instanceof Array) {
            cb(res);
          } else if (res instanceof Error) {
            cb(res.message);
          }
        }

        if (res && res.then) {
          res.then(function () {
            return cb();
          }, function (e) {
            return cb(e);
          });
        }
      }, function (results) {
        complete(results);
      }, source);
    };

    _proto.getType = function getType(rule) {
      if (rule.type === undefined && rule.pattern instanceof RegExp) {
        rule.type = 'pattern';
      }

      if (typeof rule.validator !== 'function' && rule.type && !validators.hasOwnProperty(rule.type)) {
        throw new Error(format('Unknown rule type %s', rule.type));
      }

      return rule.type || 'string';
    };

    _proto.getValidationMethod = function getValidationMethod(rule) {
      if (typeof rule.validator === 'function') {
        return rule.validator;
      }

      var keys = Object.keys(rule);
      var messageIndex = keys.indexOf('message');

      if (messageIndex !== -1) {
        keys.splice(messageIndex, 1);
      }

      if (keys.length === 1 && keys[0] === 'required') {
        return validators.required;
      }

      return validators[this.getType(rule)] || undefined;
    };

    return Schema;
  }();

  Schema.register = function register(type, validator) {
    if (typeof validator !== 'function') {
      throw new Error('Cannot register a validator by type, validator is not a function');
    }

    validators[type] = validator;
  };

  Schema.warning = warning;
  Schema.messages = messages;
  Schema.validators = validators;

  const formItemProps = {
    prop: String,
    label: String,
    rules: [Object, Array],
    required: Boolean,
    showMessage: {
      type: Boolean,
      default: true
    }
  };
  const FormItemContextKey = Symbol();

  var script$9 = /* @__PURE__ */ vue.defineComponent({
    ...{
      name: "h-form-item"
    },
    __name: "form-item",
    props: formItemProps,
    setup(__props) {
      const props = __props;
      const bem = createNameSpace("form-item");
      const validateState = vue.ref("");
      const validateMessage = vue.ref("");
      const changeToArray = (rules) => {
        return rules ? Array.isArray(rules) ? rules : [rules] : [];
      };
      const _rules = vue.computed(() => {
        const form_item_rules = changeToArray(props.rules);
        const form_rules = formContext?.rules;
        if (form_rules && props.prop) {
          const temp_rules = form_rules[props.prop];
          if (temp_rules) {
            form_item_rules.push(...changeToArray(temp_rules));
          }
        }
        return form_item_rules;
      });
      const getFilterRules = (trigger) => {
        const rules = _rules.value;
        console.log(rules, "rules");
        return rules.filter((rule) => {
          if (!rule.trigger || !trigger) return true;
          if (Array.isArray(rule.trigger)) {
            return rule.trigger.includes(trigger);
          } else {
            return rule.trigger === trigger;
          }
        });
      };
      const onValidateSuccess = () => {
        validateState.value = "success";
        validateMessage.value = " ";
      };
      const onValidateFailed = (error) => {
        validateState.value = "error";
        const { errors } = error;
        validateMessage.value = errors ? errors[0].message : "";
      };
      const validate = async (trigger, callback) => {
        const rules = getFilterRules(trigger);
        console.log("trigger", trigger, rules, formContext?.model, props.prop);
        const modelName = props.prop;
        const validator = new Schema({
          [modelName]: rules
        });
        const model = formContext?.model;
        return validator.validate({
          //找到对象中的要校验的字段
          [modelName]: model[modelName]
        }).then(() => {
          onValidateSuccess();
        }).catch((error) => {
          onValidateFailed(error);
          return Promise.reject(error);
        });
      };
      const context = {
        ...props,
        validate
      };
      vue.provide(FormItemContextKey, context);
      vue.onMounted(() => {
        formContext?.addField(context);
      });
      const formContext = vue.inject(FormContextKey);
      console.log(formContext);
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          "div",
          {
            class: vue.normalizeClass([
              vue.unref(bem).b(),
              vue.unref(bem).is("success", validateState.value === "success"),
              vue.unref(bem).is("error", validateState.value === "error")
            ])
          },
          [
            vue.createCommentVNode(" label "),
            vue.createElementVNode(
              "label",
              {
                class: vue.normalizeClass(vue.unref(bem).e("label"))
              },
              [
                vue.renderSlot(_ctx.$slots, "label", {}, () => [
                  vue.createTextVNode(
                    vue.toDisplayString(_ctx.label),
                    1
                    /* TEXT */
                  )
                ]),
                vue.createElementVNode(
                  "div",
                  {
                    class: vue.normalizeClass(vue.unref(bem).is("required", _ctx.required))
                  },
                  "*",
                  2
                  /* CLASS */
                )
              ],
              2
              /* CLASS */
            ),
            vue.createCommentVNode(" content "),
            vue.createElementVNode(
              "div",
              {
                class: vue.normalizeClass(vue.unref(bem).e("content"))
              },
              [
                vue.renderSlot(_ctx.$slots, "default"),
                vue.createCommentVNode(" error message "),
                vue.createElementVNode(
                  "div",
                  {
                    class: vue.normalizeClass(vue.unref(bem).e("error"))
                  },
                  [
                    vue.renderSlot(_ctx.$slots, "error", {}, () => [
                      vue.createTextVNode(
                        vue.toDisplayString(validateMessage.value),
                        1
                        /* TEXT */
                      )
                    ])
                  ],
                  2
                  /* CLASS */
                )
              ],
              2
              /* CLASS */
            )
          ],
          2
          /* CLASS */
        );
      };
    }
  });

  script$9.__file = "packages/components/form/src/form-item.vue";

  var script$8 = /* @__PURE__ */ vue.defineComponent({
    ...{
      name: "h-form"
    },
    __name: "form",
    props: formProps,
    setup(__props, { expose: __expose }) {
      const bem = createNameSpace("form");
      const props = __props;
      const validate = async (callback) => {
        let errors = {};
        for (const field of fields) {
          try {
            await field.validate("");
          } catch (error) {
            errors = {
              ...errors,
              ...error.fields
            };
          }
          if (Object.keys(errors).length === 0) {
            return callback?.(true);
          } else {
            if (callback) {
              callback?.(false, errors);
            } else {
              return Promise.reject(errors);
            }
          }
        }
      };
      const fields = [];
      const addField = (context2) => {
        fields.push(context2);
        setTimeout(() => {
          console.log(fields);
        }, 1e3);
      };
      __expose({
        validate
      });
      const context = {
        ...props,
        addField
      };
      vue.provide(FormContextKey, context);
      const style = vue.computed(() => {
        const { maxWidth } = props;
        if (!maxWidth) return {};
        return {
          ...maxWidth ? { width: maxWidth + "px" } : {}
        };
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          "form",
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

  script$8.__file = "packages/components/form/src/form.vue";

  const FormItem = withInstall(script$9);
  const Form = withInstall(script$8);

  /**
  * @vue/shared v3.4.37
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **/



  !!(process.env.NODE_ENV !== "production") ? Object.freeze({}) : {};
  !!(process.env.NODE_ENV !== "production") ? Object.freeze([]) : [];
  const isString = (val) => typeof val === "string";

  const inputProps = {
    type: {
      type: String,
      default: "text"
    },
    modelValue: {
      type: [String, Number],
      default: ""
    },
    placeholder: {
      type: String
    },
    clearable: {
      type: Boolean
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    label: {
      type: String
    }
  };
  const inputEmits = {
    "update:modelValue": (value) => isString(value),
    input: (value) => isString(value),
    change: (value) => isString(value),
    focus: (event) => event instanceof FocusEvent,
    blur: (event) => event instanceof FocusEvent,
    clear: () => true
    //清空事件
  };

  const _hoisted_1$2 = ["type", "placeholder", "disabled", "readonly"];
  var script$7 = /* @__PURE__ */ vue.defineComponent({
    ...{
      name: "h-input",
      inheritAttrs: false
    },
    __name: "input",
    props: inputProps,
    emits: inputEmits,
    setup(__props, { emit: __emit }) {
      const slots = vue.useSlots();
      const attrs = vue.useAttrs();
      const bem = createNameSpace("input");
      const props = __props;
      const emits = __emit;
      const input = vue.ref(null);
      vue.watch(
        () => props.modelValue,
        () => {
          setInputValue();
          formItemContext?.validate("change").catch(() => {
          });
        }
      );
      const setInputValue = () => {
        const inputVal = input.value;
        if (!inputVal) return;
        inputVal.value = String(props.modelValue);
      };
      const handleInput = (e) => {
        const value = e.target.value;
        emits("input", value);
        emits("update:modelValue", value);
      };
      const handleChange = (e) => {
        emits("change", e.target.value);
      };
      const isFocus = vue.ref(false);
      const handleFocus = (e) => {
        emits("focus", e);
        isFocus.value = true;
      };
      const handleBlur = (e) => {
        formItemContext?.validate("blur").catch(() => {
        });
        emits("blur", e);
        isFocus.value = false;
      };
      vue.onMounted(() => {
        setInputValue();
      });
      const passwordVisible = vue.ref(false);
      const handlePasswordVisible = () => {
        passwordVisible.value = !passwordVisible.value;
        focus();
      };
      const focus = async () => {
        await vue.nextTick();
        input.value?.focus();
      };
      const clear = () => {
        emits("input", "");
        emits("update:modelValue", "");
        emits("clear");
        focus();
      };
      const showClear = vue.computed(() => {
        return props.modelValue && props.clearable && !props.disabled && !props.readonly;
      });
      const formItemContext = vue.inject(FormItemContextKey);
      return (_ctx, _cache) => {
        const _component_h_icon = vue.resolveComponent("h-icon");
        return vue.openBlock(), vue.createElementBlock(
          "div",
          {
            class: vue.normalizeClass([vue.unref(bem).b()])
          },
          [
            vue.createElementVNode(
              "div",
              {
                class: vue.normalizeClass(vue.unref(bem).e("group"))
              },
              [
                vue.createCommentVNode(" \u5934\u90E8\u5185\u5BB9 "),
                vue.unref(slots).prefix ? (vue.openBlock(), vue.createElementBlock(
                  "div",
                  {
                    key: 0,
                    class: vue.normalizeClass(vue.unref(bem).be("group", "prefix"))
                  },
                  [
                    vue.renderSlot(_ctx.$slots, "prefix")
                  ],
                  2
                  /* CLASS */
                )) : vue.createCommentVNode("v-if", true),
                vue.createCommentVNode(" \u8F93\u5165\u6846+\u8F93\u5165\u6846\u524D\u7F6E+\u540E\u7F6E "),
                vue.createElementVNode(
                  "div",
                  {
                    class: vue.normalizeClass([vue.unref(bem).e("wrapper"), vue.unref(bem).is("focus", isFocus.value)])
                  },
                  [
                    vue.unref(slots).prepend ? (vue.openBlock(), vue.createElementBlock(
                      "span",
                      {
                        key: 0,
                        class: vue.normalizeClass(vue.unref(bem).e("prepend"))
                      },
                      [
                        vue.renderSlot(_ctx.$slots, "prepend")
                      ],
                      2
                      /* CLASS */
                    )) : vue.createCommentVNode("v-if", true),
                    vue.createElementVNode("input", vue.mergeProps({
                      type: _ctx.showPassword ? passwordVisible.value ? "text" : "password" : _ctx.type
                    }, vue.unref(attrs), {
                      class: [vue.unref(bem).e("inner"), vue.unref(bem).is("disabled", _ctx.disabled)],
                      ref_key: "input",
                      ref: input,
                      onInput: handleInput,
                      onChange: handleChange,
                      onBlur: handleBlur,
                      onFocus: handleFocus,
                      placeholder: _ctx.placeholder,
                      disabled: _ctx.disabled,
                      readonly: _ctx.readonly
                    }), null, 16, _hoisted_1$2),
                    vue.createCommentVNode(" eyes show or hide "),
                    vue.withDirectives(vue.createVNode(
                      _component_h_icon,
                      { onClick: handlePasswordVisible },
                      {
                        default: vue.withCtx(() => [
                          vue.createVNode(vue.unref(EyeOutline))
                        ]),
                        _: 1
                        /* STABLE */
                      },
                      512
                      /* NEED_PATCH */
                    ), [
                      [vue.vShow, passwordVisible.value && _ctx.showPassword]
                    ]),
                    vue.withDirectives(vue.createVNode(
                      _component_h_icon,
                      { onClick: handlePasswordVisible },
                      {
                        default: vue.withCtx(() => [
                          vue.createVNode(vue.unref(EyeOffOutline))
                        ]),
                        _: 1
                        /* STABLE */
                      },
                      512
                      /* NEED_PATCH */
                    ), [
                      [vue.vShow, !passwordVisible.value && _ctx.showPassword]
                    ]),
                    vue.createCommentVNode(" clear function "),
                    vue.withDirectives(vue.createVNode(
                      _component_h_icon,
                      { onClick: clear },
                      {
                        default: vue.withCtx(() => [
                          vue.createVNode(vue.unref(CloseCircleOutline))
                        ]),
                        _: 1
                        /* STABLE */
                      },
                      512
                      /* NEED_PATCH */
                    ), [
                      [vue.vShow, showClear.value]
                    ]),
                    vue.unref(slots).append ? (vue.openBlock(), vue.createElementBlock(
                      "span",
                      {
                        key: 1,
                        class: vue.normalizeClass(vue.unref(bem).e("append"))
                      },
                      [
                        vue.renderSlot(_ctx.$slots, "append")
                      ],
                      2
                      /* CLASS */
                    )) : vue.createCommentVNode("v-if", true)
                  ],
                  2
                  /* CLASS */
                ),
                vue.createCommentVNode(" \u5C3E\u90E8\u5185\u5BB9 "),
                vue.unref(slots).suffix ? (vue.openBlock(), vue.createElementBlock(
                  "div",
                  {
                    key: 1,
                    class: vue.normalizeClass(vue.unref(bem).be("group", "suffix"))
                  },
                  [
                    vue.renderSlot(_ctx.$slots, "suffix")
                  ],
                  2
                  /* CLASS */
                )) : vue.createCommentVNode("v-if", true)
              ],
              2
              /* CLASS */
            )
          ],
          2
          /* CLASS */
        );
      };
    }
  });

  script$7.__file = "packages/components/input/src/input.vue";

  const Input = withInstall(script$7);

  var triggerTypes = /* @__PURE__ */ ((triggerTypes2) => {
    triggerTypes2["Hover"] = "hover";
    triggerTypes2["Click"] = "click";
    return triggerTypes2;
  })(triggerTypes || {});
  const tooltipProps = {
    content: {
      type: String,
      default: "this is a tooltip"
    },
    trigger: {
      type: String,
      default: "hover" /* Hover */
    },
    placement: {
      type: String,
      default: "bottom"
    },
    effect: {
      type: String,
      default: "dark"
    }
  };

  /**
   * Custom positioning reference element.
   * @see https://floating-ui.com/docs/virtual-elements
   */

  const min = Math.min;
  const max = Math.max;
  const round = Math.round;
  const createCoords = v => ({
    x: v,
    y: v
  });
  const oppositeSideMap = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
  };
  const oppositeAlignmentMap = {
    start: 'end',
    end: 'start'
  };
  function clamp(start, value, end) {
    return max(start, min(value, end));
  }
  function evaluate(value, param) {
    return typeof value === 'function' ? value(param) : value;
  }
  function getSide(placement) {
    return placement.split('-')[0];
  }
  function getAlignment(placement) {
    return placement.split('-')[1];
  }
  function getOppositeAxis(axis) {
    return axis === 'x' ? 'y' : 'x';
  }
  function getAxisLength(axis) {
    return axis === 'y' ? 'height' : 'width';
  }
  function getSideAxis(placement) {
    return ['top', 'bottom'].includes(getSide(placement)) ? 'y' : 'x';
  }
  function getAlignmentAxis(placement) {
    return getOppositeAxis(getSideAxis(placement));
  }
  function getAlignmentSides(placement, rects, rtl) {
    if (rtl === void 0) {
      rtl = false;
    }
    const alignment = getAlignment(placement);
    const alignmentAxis = getAlignmentAxis(placement);
    const length = getAxisLength(alignmentAxis);
    let mainAlignmentSide = alignmentAxis === 'x' ? alignment === (rtl ? 'end' : 'start') ? 'right' : 'left' : alignment === 'start' ? 'bottom' : 'top';
    if (rects.reference[length] > rects.floating[length]) {
      mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
    }
    return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
  }
  function getExpandedPlacements(placement) {
    const oppositePlacement = getOppositePlacement(placement);
    return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
  }
  function getOppositeAlignmentPlacement(placement) {
    return placement.replace(/start|end/g, alignment => oppositeAlignmentMap[alignment]);
  }
  function getSideList(side, isStart, rtl) {
    const lr = ['left', 'right'];
    const rl = ['right', 'left'];
    const tb = ['top', 'bottom'];
    const bt = ['bottom', 'top'];
    switch (side) {
      case 'top':
      case 'bottom':
        if (rtl) return isStart ? rl : lr;
        return isStart ? lr : rl;
      case 'left':
      case 'right':
        return isStart ? tb : bt;
      default:
        return [];
    }
  }
  function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
    const alignment = getAlignment(placement);
    let list = getSideList(getSide(placement), direction === 'start', rtl);
    if (alignment) {
      list = list.map(side => side + "-" + alignment);
      if (flipAlignment) {
        list = list.concat(list.map(getOppositeAlignmentPlacement));
      }
    }
    return list;
  }
  function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, side => oppositeSideMap[side]);
  }
  function expandPaddingObject(padding) {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...padding
    };
  }
  function getPaddingObject(padding) {
    return typeof padding !== 'number' ? expandPaddingObject(padding) : {
      top: padding,
      right: padding,
      bottom: padding,
      left: padding
    };
  }
  function rectToClientRect(rect) {
    const {
      x,
      y,
      width,
      height
    } = rect;
    return {
      width,
      height,
      top: y,
      left: x,
      right: x + width,
      bottom: y + height,
      x,
      y
    };
  }

  function computeCoordsFromPlacement(_ref, placement, rtl) {
    let {
      reference,
      floating
    } = _ref;
    const sideAxis = getSideAxis(placement);
    const alignmentAxis = getAlignmentAxis(placement);
    const alignLength = getAxisLength(alignmentAxis);
    const side = getSide(placement);
    const isVertical = sideAxis === 'y';
    const commonX = reference.x + reference.width / 2 - floating.width / 2;
    const commonY = reference.y + reference.height / 2 - floating.height / 2;
    const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
    let coords;
    switch (side) {
      case 'top':
        coords = {
          x: commonX,
          y: reference.y - floating.height
        };
        break;
      case 'bottom':
        coords = {
          x: commonX,
          y: reference.y + reference.height
        };
        break;
      case 'right':
        coords = {
          x: reference.x + reference.width,
          y: commonY
        };
        break;
      case 'left':
        coords = {
          x: reference.x - floating.width,
          y: commonY
        };
        break;
      default:
        coords = {
          x: reference.x,
          y: reference.y
        };
    }
    switch (getAlignment(placement)) {
      case 'start':
        coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
        break;
      case 'end':
        coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
        break;
    }
    return coords;
  }

  /**
   * Computes the `x` and `y` coordinates that will place the floating element
   * next to a given reference element.
   *
   * This export does not have any `platform` interface logic. You will need to
   * write one for the platform you are using Floating UI with.
   */
  const computePosition$1 = async (reference, floating, config) => {
    const {
      placement = 'bottom',
      strategy = 'absolute',
      middleware = [],
      platform
    } = config;
    const validMiddleware = middleware.filter(Boolean);
    const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
    let rects = await platform.getElementRects({
      reference,
      floating,
      strategy
    });
    let {
      x,
      y
    } = computeCoordsFromPlacement(rects, placement, rtl);
    let statefulPlacement = placement;
    let middlewareData = {};
    let resetCount = 0;
    for (let i = 0; i < validMiddleware.length; i++) {
      const {
        name,
        fn
      } = validMiddleware[i];
      const {
        x: nextX,
        y: nextY,
        data,
        reset
      } = await fn({
        x,
        y,
        initialPlacement: placement,
        placement: statefulPlacement,
        strategy,
        middlewareData,
        rects,
        platform,
        elements: {
          reference,
          floating
        }
      });
      x = nextX != null ? nextX : x;
      y = nextY != null ? nextY : y;
      middlewareData = {
        ...middlewareData,
        [name]: {
          ...middlewareData[name],
          ...data
        }
      };
      if (reset && resetCount <= 50) {
        resetCount++;
        if (typeof reset === 'object') {
          if (reset.placement) {
            statefulPlacement = reset.placement;
          }
          if (reset.rects) {
            rects = reset.rects === true ? await platform.getElementRects({
              reference,
              floating,
              strategy
            }) : reset.rects;
          }
          ({
            x,
            y
          } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
        }
        i = -1;
      }
    }
    return {
      x,
      y,
      placement: statefulPlacement,
      strategy,
      middlewareData
    };
  };

  /**
   * Resolves with an object of overflow side offsets that determine how much the
   * element is overflowing a given clipping boundary on each side.
   * - positive = overflowing the boundary by that number of pixels
   * - negative = how many pixels left before it will overflow
   * - 0 = lies flush with the boundary
   * @see https://floating-ui.com/docs/detectOverflow
   */
  async function detectOverflow(state, options) {
    var _await$platform$isEle;
    if (options === void 0) {
      options = {};
    }
    const {
      x,
      y,
      platform,
      rects,
      elements,
      strategy
    } = state;
    const {
      boundary = 'clippingAncestors',
      rootBoundary = 'viewport',
      elementContext = 'floating',
      altBoundary = false,
      padding = 0
    } = evaluate(options, state);
    const paddingObject = getPaddingObject(padding);
    const altContext = elementContext === 'floating' ? 'reference' : 'floating';
    const element = elements[altBoundary ? altContext : elementContext];
    const clippingClientRect = rectToClientRect(await platform.getClippingRect({
      element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || (await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating))),
      boundary,
      rootBoundary,
      strategy
    }));
    const rect = elementContext === 'floating' ? {
      x,
      y,
      width: rects.floating.width,
      height: rects.floating.height
    } : rects.reference;
    const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
    const offsetScale = (await (platform.isElement == null ? void 0 : platform.isElement(offsetParent))) ? (await (platform.getScale == null ? void 0 : platform.getScale(offsetParent))) || {
      x: 1,
      y: 1
    } : {
      x: 1,
      y: 1
    };
    const elementClientRect = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
      elements,
      rect,
      offsetParent,
      strategy
    }) : rect);
    return {
      top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
      bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
      left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
      right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
    };
  }

  /**
   * Provides data to position an inner element of the floating element so that it
   * appears centered to the reference element.
   * @see https://floating-ui.com/docs/arrow
   */
  const arrow$2 = options => ({
    name: 'arrow',
    options,
    async fn(state) {
      const {
        x,
        y,
        placement,
        rects,
        platform,
        elements,
        middlewareData
      } = state;
      // Since `element` is required, we don't Partial<> the type.
      const {
        element,
        padding = 0
      } = evaluate(options, state) || {};
      if (element == null) {
        return {};
      }
      const paddingObject = getPaddingObject(padding);
      const coords = {
        x,
        y
      };
      const axis = getAlignmentAxis(placement);
      const length = getAxisLength(axis);
      const arrowDimensions = await platform.getDimensions(element);
      const isYAxis = axis === 'y';
      const minProp = isYAxis ? 'top' : 'left';
      const maxProp = isYAxis ? 'bottom' : 'right';
      const clientProp = isYAxis ? 'clientHeight' : 'clientWidth';
      const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
      const startDiff = coords[axis] - rects.reference[axis];
      const arrowOffsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element));
      let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;

      // DOM platform can return `window` as the `offsetParent`.
      if (!clientSize || !(await (platform.isElement == null ? void 0 : platform.isElement(arrowOffsetParent)))) {
        clientSize = elements.floating[clientProp] || rects.floating[length];
      }
      const centerToReference = endDiff / 2 - startDiff / 2;

      // If the padding is large enough that it causes the arrow to no longer be
      // centered, modify the padding so that it is centered.
      const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
      const minPadding = min(paddingObject[minProp], largestPossiblePadding);
      const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);

      // Make sure the arrow doesn't overflow the floating element if the center
      // point is outside the floating element's bounds.
      const min$1 = minPadding;
      const max = clientSize - arrowDimensions[length] - maxPadding;
      const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
      const offset = clamp(min$1, center, max);

      // If the reference is small enough that the arrow's padding causes it to
      // to point to nothing for an aligned placement, adjust the offset of the
      // floating element itself. To ensure `shift()` continues to take action,
      // a single reset is performed when this is true.
      const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
      const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max : 0;
      return {
        [axis]: coords[axis] + alignmentOffset,
        data: {
          [axis]: offset,
          centerOffset: center - offset - alignmentOffset,
          ...(shouldAddOffset && {
            alignmentOffset
          })
        },
        reset: shouldAddOffset
      };
    }
  });

  /**
   * Optimizes the visibility of the floating element by flipping the `placement`
   * in order to keep it in view when the preferred placement(s) will overflow the
   * clipping boundary. Alternative to `autoPlacement`.
   * @see https://floating-ui.com/docs/flip
   */
  const flip$1 = function (options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: 'flip',
      options,
      async fn(state) {
        var _middlewareData$arrow, _middlewareData$flip;
        const {
          placement,
          middlewareData,
          rects,
          initialPlacement,
          platform,
          elements
        } = state;
        const {
          mainAxis: checkMainAxis = true,
          crossAxis: checkCrossAxis = true,
          fallbackPlacements: specifiedFallbackPlacements,
          fallbackStrategy = 'bestFit',
          fallbackAxisSideDirection = 'none',
          flipAlignment = true,
          ...detectOverflowOptions
        } = evaluate(options, state);

        // If a reset by the arrow was caused due to an alignment offset being
        // added, we should skip any logic now since `flip()` has already done its
        // work.
        // https://github.com/floating-ui/floating-ui/issues/2549#issuecomment-1719601643
        if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
          return {};
        }
        const side = getSide(placement);
        const isBasePlacement = getSide(initialPlacement) === initialPlacement;
        const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
        const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
        if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== 'none') {
          fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
        }
        const placements = [initialPlacement, ...fallbackPlacements];
        const overflow = await detectOverflow(state, detectOverflowOptions);
        const overflows = [];
        let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
        if (checkMainAxis) {
          overflows.push(overflow[side]);
        }
        if (checkCrossAxis) {
          const sides = getAlignmentSides(placement, rects, rtl);
          overflows.push(overflow[sides[0]], overflow[sides[1]]);
        }
        overflowsData = [...overflowsData, {
          placement,
          overflows
        }];

        // One or more sides is overflowing.
        if (!overflows.every(side => side <= 0)) {
          var _middlewareData$flip2, _overflowsData$filter;
          const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
          const nextPlacement = placements[nextIndex];
          if (nextPlacement) {
            // Try next placement and re-run the lifecycle.
            return {
              data: {
                index: nextIndex,
                overflows: overflowsData
              },
              reset: {
                placement: nextPlacement
              }
            };
          }

          // First, find the candidates that fit on the mainAxis side of overflow,
          // then find the placement that fits the best on the main crossAxis side.
          let resetPlacement = (_overflowsData$filter = overflowsData.filter(d => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;

          // Otherwise fallback.
          if (!resetPlacement) {
            switch (fallbackStrategy) {
              case 'bestFit':
                {
                  var _overflowsData$map$so;
                  const placement = (_overflowsData$map$so = overflowsData.map(d => [d.placement, d.overflows.filter(overflow => overflow > 0).reduce((acc, overflow) => acc + overflow, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
                  if (placement) {
                    resetPlacement = placement;
                  }
                  break;
                }
              case 'initialPlacement':
                resetPlacement = initialPlacement;
                break;
            }
          }
          if (placement !== resetPlacement) {
            return {
              reset: {
                placement: resetPlacement
              }
            };
          }
        }
        return {};
      }
    };
  };

  // For type backwards-compatibility, the `OffsetOptions` type was also
  // Derivable.

  async function convertValueToCoords(state, options) {
    const {
      placement,
      platform,
      elements
    } = state;
    const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
    const side = getSide(placement);
    const alignment = getAlignment(placement);
    const isVertical = getSideAxis(placement) === 'y';
    const mainAxisMulti = ['left', 'top'].includes(side) ? -1 : 1;
    const crossAxisMulti = rtl && isVertical ? -1 : 1;
    const rawValue = evaluate(options, state);

    // eslint-disable-next-line prefer-const
    let {
      mainAxis,
      crossAxis,
      alignmentAxis
    } = typeof rawValue === 'number' ? {
      mainAxis: rawValue,
      crossAxis: 0,
      alignmentAxis: null
    } : {
      mainAxis: 0,
      crossAxis: 0,
      alignmentAxis: null,
      ...rawValue
    };
    if (alignment && typeof alignmentAxis === 'number') {
      crossAxis = alignment === 'end' ? alignmentAxis * -1 : alignmentAxis;
    }
    return isVertical ? {
      x: crossAxis * crossAxisMulti,
      y: mainAxis * mainAxisMulti
    } : {
      x: mainAxis * mainAxisMulti,
      y: crossAxis * crossAxisMulti
    };
  }

  /**
   * Modifies the placement by translating the floating element along the
   * specified axes.
   * A number (shorthand for `mainAxis` or distance), or an axes configuration
   * object may be passed.
   * @see https://floating-ui.com/docs/offset
   */
  const offset$1 = function (options) {
    if (options === void 0) {
      options = 0;
    }
    return {
      name: 'offset',
      options,
      async fn(state) {
        var _middlewareData$offse, _middlewareData$arrow;
        const {
          x,
          y,
          placement,
          middlewareData
        } = state;
        const diffCoords = await convertValueToCoords(state, options);

        // If the placement is the same and the arrow caused an alignment offset
        // then we don't need to change the positioning coordinates.
        if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
          return {};
        }
        return {
          x: x + diffCoords.x,
          y: y + diffCoords.y,
          data: {
            ...diffCoords,
            placement
          }
        };
      }
    };
  };

  /**
   * Optimizes the visibility of the floating element by shifting it in order to
   * keep it in view when it will overflow the clipping boundary.
   * @see https://floating-ui.com/docs/shift
   */
  const shift$1 = function (options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: 'shift',
      options,
      async fn(state) {
        const {
          x,
          y,
          placement
        } = state;
        const {
          mainAxis: checkMainAxis = true,
          crossAxis: checkCrossAxis = false,
          limiter = {
            fn: _ref => {
              let {
                x,
                y
              } = _ref;
              return {
                x,
                y
              };
            }
          },
          ...detectOverflowOptions
        } = evaluate(options, state);
        const coords = {
          x,
          y
        };
        const overflow = await detectOverflow(state, detectOverflowOptions);
        const crossAxis = getSideAxis(getSide(placement));
        const mainAxis = getOppositeAxis(crossAxis);
        let mainAxisCoord = coords[mainAxis];
        let crossAxisCoord = coords[crossAxis];
        if (checkMainAxis) {
          const minSide = mainAxis === 'y' ? 'top' : 'left';
          const maxSide = mainAxis === 'y' ? 'bottom' : 'right';
          const min = mainAxisCoord + overflow[minSide];
          const max = mainAxisCoord - overflow[maxSide];
          mainAxisCoord = clamp(min, mainAxisCoord, max);
        }
        if (checkCrossAxis) {
          const minSide = crossAxis === 'y' ? 'top' : 'left';
          const maxSide = crossAxis === 'y' ? 'bottom' : 'right';
          const min = crossAxisCoord + overflow[minSide];
          const max = crossAxisCoord - overflow[maxSide];
          crossAxisCoord = clamp(min, crossAxisCoord, max);
        }
        const limitedCoords = limiter.fn({
          ...state,
          [mainAxis]: mainAxisCoord,
          [crossAxis]: crossAxisCoord
        });
        return {
          ...limitedCoords,
          data: {
            x: limitedCoords.x - x,
            y: limitedCoords.y - y
          }
        };
      }
    };
  };

  function getNodeName(node) {
    if (isNode(node)) {
      return (node.nodeName || '').toLowerCase();
    }
    // Mocked nodes in testing environments may not be instances of Node. By
    // returning `#document` an infinite loop won't occur.
    // https://github.com/floating-ui/floating-ui/issues/2317
    return '#document';
  }
  function getWindow(node) {
    var _node$ownerDocument;
    return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
  }
  function getDocumentElement(node) {
    var _ref;
    return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
  }
  function isNode(value) {
    return value instanceof Node || value instanceof getWindow(value).Node;
  }
  function isElement(value) {
    return value instanceof Element || value instanceof getWindow(value).Element;
  }
  function isHTMLElement(value) {
    return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
  }
  function isShadowRoot(value) {
    // Browsers without `ShadowRoot` support.
    if (typeof ShadowRoot === 'undefined') {
      return false;
    }
    return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
  }
  function isOverflowElement(element) {
    const {
      overflow,
      overflowX,
      overflowY,
      display
    } = getComputedStyle(element);
    return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !['inline', 'contents'].includes(display);
  }
  function isTableElement(element) {
    return ['table', 'td', 'th'].includes(getNodeName(element));
  }
  function isContainingBlock(element) {
    const webkit = isWebKit();
    const css = getComputedStyle(element);

    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
    return css.transform !== 'none' || css.perspective !== 'none' || (css.containerType ? css.containerType !== 'normal' : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== 'none' : false) || !webkit && (css.filter ? css.filter !== 'none' : false) || ['transform', 'perspective', 'filter'].some(value => (css.willChange || '').includes(value)) || ['paint', 'layout', 'strict', 'content'].some(value => (css.contain || '').includes(value));
  }
  function getContainingBlock(element) {
    let currentNode = getParentNode(element);
    while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
      if (isContainingBlock(currentNode)) {
        return currentNode;
      }
      currentNode = getParentNode(currentNode);
    }
    return null;
  }
  function isWebKit() {
    if (typeof CSS === 'undefined' || !CSS.supports) return false;
    return CSS.supports('-webkit-backdrop-filter', 'none');
  }
  function isLastTraversableNode(node) {
    return ['html', 'body', '#document'].includes(getNodeName(node));
  }
  function getComputedStyle(element) {
    return getWindow(element).getComputedStyle(element);
  }
  function getNodeScroll(element) {
    if (isElement(element)) {
      return {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
      };
    }
    return {
      scrollLeft: element.pageXOffset,
      scrollTop: element.pageYOffset
    };
  }
  function getParentNode(node) {
    if (getNodeName(node) === 'html') {
      return node;
    }
    const result =
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot ||
    // DOM Element detected.
    node.parentNode ||
    // ShadowRoot detected.
    isShadowRoot(node) && node.host ||
    // Fallback.
    getDocumentElement(node);
    return isShadowRoot(result) ? result.host : result;
  }
  function getNearestOverflowAncestor(node) {
    const parentNode = getParentNode(node);
    if (isLastTraversableNode(parentNode)) {
      return node.ownerDocument ? node.ownerDocument.body : node.body;
    }
    if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
      return parentNode;
    }
    return getNearestOverflowAncestor(parentNode);
  }
  function getOverflowAncestors(node, list, traverseIframes) {
    var _node$ownerDocument2;
    if (list === void 0) {
      list = [];
    }
    if (traverseIframes === void 0) {
      traverseIframes = true;
    }
    const scrollableAncestor = getNearestOverflowAncestor(node);
    const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
    const win = getWindow(scrollableAncestor);
    if (isBody) {
      return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], win.frameElement && traverseIframes ? getOverflowAncestors(win.frameElement) : []);
    }
    return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
  }

  function getCssDimensions(element) {
    const css = getComputedStyle(element);
    // In testing environments, the `width` and `height` properties are empty
    // strings for SVG elements, returning NaN. Fallback to `0` in this case.
    let width = parseFloat(css.width) || 0;
    let height = parseFloat(css.height) || 0;
    const hasOffset = isHTMLElement(element);
    const offsetWidth = hasOffset ? element.offsetWidth : width;
    const offsetHeight = hasOffset ? element.offsetHeight : height;
    const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
    if (shouldFallback) {
      width = offsetWidth;
      height = offsetHeight;
    }
    return {
      width,
      height,
      $: shouldFallback
    };
  }

  function unwrapElement$1(element) {
    return !isElement(element) ? element.contextElement : element;
  }

  function getScale(element) {
    const domElement = unwrapElement$1(element);
    if (!isHTMLElement(domElement)) {
      return createCoords(1);
    }
    const rect = domElement.getBoundingClientRect();
    const {
      width,
      height,
      $
    } = getCssDimensions(domElement);
    let x = ($ ? round(rect.width) : rect.width) / width;
    let y = ($ ? round(rect.height) : rect.height) / height;

    // 0, NaN, or Infinity should always fallback to 1.

    if (!x || !Number.isFinite(x)) {
      x = 1;
    }
    if (!y || !Number.isFinite(y)) {
      y = 1;
    }
    return {
      x,
      y
    };
  }

  const noOffsets = /*#__PURE__*/createCoords(0);
  function getVisualOffsets(element) {
    const win = getWindow(element);
    if (!isWebKit() || !win.visualViewport) {
      return noOffsets;
    }
    return {
      x: win.visualViewport.offsetLeft,
      y: win.visualViewport.offsetTop
    };
  }
  function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
    if (isFixed === void 0) {
      isFixed = false;
    }
    if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
      return false;
    }
    return isFixed;
  }

  function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
    if (includeScale === void 0) {
      includeScale = false;
    }
    if (isFixedStrategy === void 0) {
      isFixedStrategy = false;
    }
    const clientRect = element.getBoundingClientRect();
    const domElement = unwrapElement$1(element);
    let scale = createCoords(1);
    if (includeScale) {
      if (offsetParent) {
        if (isElement(offsetParent)) {
          scale = getScale(offsetParent);
        }
      } else {
        scale = getScale(element);
      }
    }
    const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
    let x = (clientRect.left + visualOffsets.x) / scale.x;
    let y = (clientRect.top + visualOffsets.y) / scale.y;
    let width = clientRect.width / scale.x;
    let height = clientRect.height / scale.y;
    if (domElement) {
      const win = getWindow(domElement);
      const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
      let currentWin = win;
      let currentIFrame = currentWin.frameElement;
      while (currentIFrame && offsetParent && offsetWin !== currentWin) {
        const iframeScale = getScale(currentIFrame);
        const iframeRect = currentIFrame.getBoundingClientRect();
        const css = getComputedStyle(currentIFrame);
        const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
        const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
        x *= iframeScale.x;
        y *= iframeScale.y;
        width *= iframeScale.x;
        height *= iframeScale.y;
        x += left;
        y += top;
        currentWin = getWindow(currentIFrame);
        currentIFrame = currentWin.frameElement;
      }
    }
    return rectToClientRect({
      width,
      height,
      x,
      y
    });
  }

  const topLayerSelectors = [':popover-open', ':modal'];
  function isTopLayer(element) {
    return topLayerSelectors.some(selector => {
      try {
        return element.matches(selector);
      } catch (e) {
        return false;
      }
    });
  }

  function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
    let {
      elements,
      rect,
      offsetParent,
      strategy
    } = _ref;
    const isFixed = strategy === 'fixed';
    const documentElement = getDocumentElement(offsetParent);
    const topLayer = elements ? isTopLayer(elements.floating) : false;
    if (offsetParent === documentElement || topLayer && isFixed) {
      return rect;
    }
    let scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    let scale = createCoords(1);
    const offsets = createCoords(0);
    const isOffsetParentAnElement = isHTMLElement(offsetParent);
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isHTMLElement(offsetParent)) {
        const offsetRect = getBoundingClientRect(offsetParent);
        scale = getScale(offsetParent);
        offsets.x = offsetRect.x + offsetParent.clientLeft;
        offsets.y = offsetRect.y + offsetParent.clientTop;
      }
    }
    return {
      width: rect.width * scale.x,
      height: rect.height * scale.y,
      x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
      y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
    };
  }

  function getClientRects(element) {
    return Array.from(element.getClientRects());
  }

  function getWindowScrollBarX(element) {
    // If <html> has a CSS width greater than the viewport, then this will be
    // incorrect for RTL.
    return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
  }

  // Gets the entire size of the scrollable document area, even extending outside
  // of the `<html>` and `<body>` rect bounds if horizontally scrollable.
  function getDocumentRect(element) {
    const html = getDocumentElement(element);
    const scroll = getNodeScroll(element);
    const body = element.ownerDocument.body;
    const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
    const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
    let x = -scroll.scrollLeft + getWindowScrollBarX(element);
    const y = -scroll.scrollTop;
    if (getComputedStyle(body).direction === 'rtl') {
      x += max(html.clientWidth, body.clientWidth) - width;
    }
    return {
      width,
      height,
      x,
      y
    };
  }

  function getViewportRect(element, strategy) {
    const win = getWindow(element);
    const html = getDocumentElement(element);
    const visualViewport = win.visualViewport;
    let width = html.clientWidth;
    let height = html.clientHeight;
    let x = 0;
    let y = 0;
    if (visualViewport) {
      width = visualViewport.width;
      height = visualViewport.height;
      const visualViewportBased = isWebKit();
      if (!visualViewportBased || visualViewportBased && strategy === 'fixed') {
        x = visualViewport.offsetLeft;
        y = visualViewport.offsetTop;
      }
    }
    return {
      width,
      height,
      x,
      y
    };
  }

  // Returns the inner client rect, subtracting scrollbars if present.
  function getInnerBoundingClientRect(element, strategy) {
    const clientRect = getBoundingClientRect(element, true, strategy === 'fixed');
    const top = clientRect.top + element.clientTop;
    const left = clientRect.left + element.clientLeft;
    const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
    const width = element.clientWidth * scale.x;
    const height = element.clientHeight * scale.y;
    const x = left * scale.x;
    const y = top * scale.y;
    return {
      width,
      height,
      x,
      y
    };
  }
  function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
    let rect;
    if (clippingAncestor === 'viewport') {
      rect = getViewportRect(element, strategy);
    } else if (clippingAncestor === 'document') {
      rect = getDocumentRect(getDocumentElement(element));
    } else if (isElement(clippingAncestor)) {
      rect = getInnerBoundingClientRect(clippingAncestor, strategy);
    } else {
      const visualOffsets = getVisualOffsets(element);
      rect = {
        ...clippingAncestor,
        x: clippingAncestor.x - visualOffsets.x,
        y: clippingAncestor.y - visualOffsets.y
      };
    }
    return rectToClientRect(rect);
  }
  function hasFixedPositionAncestor(element, stopNode) {
    const parentNode = getParentNode(element);
    if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
      return false;
    }
    return getComputedStyle(parentNode).position === 'fixed' || hasFixedPositionAncestor(parentNode, stopNode);
  }

  // A "clipping ancestor" is an `overflow` element with the characteristic of
  // clipping (or hiding) child elements. This returns all clipping ancestors
  // of the given element up the tree.
  function getClippingElementAncestors(element, cache) {
    const cachedResult = cache.get(element);
    if (cachedResult) {
      return cachedResult;
    }
    let result = getOverflowAncestors(element, [], false).filter(el => isElement(el) && getNodeName(el) !== 'body');
    let currentContainingBlockComputedStyle = null;
    const elementIsFixed = getComputedStyle(element).position === 'fixed';
    let currentNode = elementIsFixed ? getParentNode(element) : element;

    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
    while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
      const computedStyle = getComputedStyle(currentNode);
      const currentNodeIsContaining = isContainingBlock(currentNode);
      if (!currentNodeIsContaining && computedStyle.position === 'fixed') {
        currentContainingBlockComputedStyle = null;
      }
      const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === 'static' && !!currentContainingBlockComputedStyle && ['absolute', 'fixed'].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
      if (shouldDropCurrentNode) {
        // Drop non-containing blocks.
        result = result.filter(ancestor => ancestor !== currentNode);
      } else {
        // Record last containing block for next iteration.
        currentContainingBlockComputedStyle = computedStyle;
      }
      currentNode = getParentNode(currentNode);
    }
    cache.set(element, result);
    return result;
  }

  // Gets the maximum area that the element is visible in due to any number of
  // clipping ancestors.
  function getClippingRect(_ref) {
    let {
      element,
      boundary,
      rootBoundary,
      strategy
    } = _ref;
    const elementClippingAncestors = boundary === 'clippingAncestors' ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
    const clippingAncestors = [...elementClippingAncestors, rootBoundary];
    const firstClippingAncestor = clippingAncestors[0];
    const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
      const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
      accRect.top = max(rect.top, accRect.top);
      accRect.right = min(rect.right, accRect.right);
      accRect.bottom = min(rect.bottom, accRect.bottom);
      accRect.left = max(rect.left, accRect.left);
      return accRect;
    }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
    return {
      width: clippingRect.right - clippingRect.left,
      height: clippingRect.bottom - clippingRect.top,
      x: clippingRect.left,
      y: clippingRect.top
    };
  }

  function getDimensions(element) {
    const {
      width,
      height
    } = getCssDimensions(element);
    return {
      width,
      height
    };
  }

  function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
    const isOffsetParentAnElement = isHTMLElement(offsetParent);
    const documentElement = getDocumentElement(offsetParent);
    const isFixed = strategy === 'fixed';
    const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
    let scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    const offsets = createCoords(0);
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isOffsetParentAnElement) {
        const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
        offsets.x = offsetRect.x + offsetParent.clientLeft;
        offsets.y = offsetRect.y + offsetParent.clientTop;
      } else if (documentElement) {
        offsets.x = getWindowScrollBarX(documentElement);
      }
    }
    const x = rect.left + scroll.scrollLeft - offsets.x;
    const y = rect.top + scroll.scrollTop - offsets.y;
    return {
      x,
      y,
      width: rect.width,
      height: rect.height
    };
  }

  function isStaticPositioned(element) {
    return getComputedStyle(element).position === 'static';
  }

  function getTrueOffsetParent(element, polyfill) {
    if (!isHTMLElement(element) || getComputedStyle(element).position === 'fixed') {
      return null;
    }
    if (polyfill) {
      return polyfill(element);
    }
    return element.offsetParent;
  }

  // Gets the closest ancestor positioned element. Handles some edge cases,
  // such as table ancestors and cross browser bugs.
  function getOffsetParent(element, polyfill) {
    const win = getWindow(element);
    if (isTopLayer(element)) {
      return win;
    }
    if (!isHTMLElement(element)) {
      let svgOffsetParent = getParentNode(element);
      while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
        if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
          return svgOffsetParent;
        }
        svgOffsetParent = getParentNode(svgOffsetParent);
      }
      return win;
    }
    let offsetParent = getTrueOffsetParent(element, polyfill);
    while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
      offsetParent = getTrueOffsetParent(offsetParent, polyfill);
    }
    if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
      return win;
    }
    return offsetParent || getContainingBlock(element) || win;
  }

  const getElementRects = async function (data) {
    const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
    const getDimensionsFn = this.getDimensions;
    const floatingDimensions = await getDimensionsFn(data.floating);
    return {
      reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
      floating: {
        x: 0,
        y: 0,
        width: floatingDimensions.width,
        height: floatingDimensions.height
      }
    };
  };

  function isRTL(element) {
    return getComputedStyle(element).direction === 'rtl';
  }

  const platform = {
    convertOffsetParentRelativeRectToViewportRelativeRect,
    getDocumentElement,
    getClippingRect,
    getOffsetParent,
    getElementRects,
    getClientRects,
    getDimensions,
    getScale,
    isElement,
    isRTL
  };

  /**
   * Modifies the placement by translating the floating element along the
   * specified axes.
   * A number (shorthand for `mainAxis` or distance), or an axes configuration
   * object may be passed.
   * @see https://floating-ui.com/docs/offset
   */
  const offset = offset$1;

  /**
   * Optimizes the visibility of the floating element by shifting it in order to
   * keep it in view when it will overflow the clipping boundary.
   * @see https://floating-ui.com/docs/shift
   */
  const shift = shift$1;

  /**
   * Optimizes the visibility of the floating element by flipping the `placement`
   * in order to keep it in view when the preferred placement(s) will overflow the
   * clipping boundary. Alternative to `autoPlacement`.
   * @see https://floating-ui.com/docs/flip
   */
  const flip = flip$1;

  /**
   * Provides data to position an inner element of the floating element so that it
   * appears centered to the reference element.
   * @see https://floating-ui.com/docs/arrow
   */
  const arrow$1 = arrow$2;

  /**
   * Computes the `x` and `y` coordinates that will place the floating element
   * next to a given reference element.
   */
  const computePosition = (reference, floating, options) => {
    // This caches the expensive `getClippingElementAncestors` function so that
    // multiple lifecycle resets re-use the same result. It only lives for a
    // single call. If other functions become expensive, we can add them as well.
    const cache = new Map();
    const mergedOptions = {
      platform,
      ...options
    };
    const platformWithCache = {
      ...mergedOptions.platform,
      _c: cache
    };
    return computePosition$1(reference, floating, {
      ...mergedOptions,
      platform: platformWithCache
    });
  };

  function isComponentPublicInstance(target) {
    return target != null && typeof target === 'object' && '$el' in target;
  }
  function unwrapElement(target) {
    if (isComponentPublicInstance(target)) {
      const element = target.$el;
      return isNode(element) && getNodeName(element) === '#comment' ? null : element;
    }
    return target;
  }

  /**
   * Positions an inner element of the floating element such that it is centered to the reference element.
   * @param options The arrow options.
   * @see https://floating-ui.com/docs/arrow
   */
  function arrow(options) {
    return {
      name: 'arrow',
      options,
      fn(args) {
        const element = unwrapElement(vueDemi.unref(options.element));
        if (element == null) {
          return {};
        }
        return arrow$1({
          element,
          padding: options.padding
        }).fn(args);
      }
    };
  }

  var script$6 = /* @__PURE__ */ vue.defineComponent({
    ...{
      name: "h-tooltip"
    },
    __name: "tooltip",
    props: tooltipProps,
    setup(__props) {
      const bem = createNameSpace("tooltip");
      const props = __props;
      const reference = vue.ref();
      const floating = vue.ref();
      const arrowRef = vue.ref();
      const isHidden = vue.ref(true);
      const events = vue.reactive({});
      const outerEvents = vue.reactive({});
      const tooltipEvents = vue.reactive({});
      vue.onMounted(() => {
        chooseEvents();
        document.addEventListener("click", handleClick);
      });
      const calculatePosition = async () => {
        const { x, y, middlewareData, placement } = await computePosition(
          reference.value,
          floating.value,
          {
            placement: props.placement,
            middleware: [
              offset(10),
              flip(),
              shift({ padding: 5 }),
              arrow({ element: arrowRef.value })
            ]
          }
        );
        Object.assign(floating.value.style, {
          left: `${x}px`,
          top: `${y}px`
        });
        const { x: arrowX, y: arrowY } = middlewareData.arrow;
        const opposedSide = {
          left: "right",
          right: "left",
          bottom: "top",
          top: "bottom"
        }[placement.split("-")[0]];
        Object.assign(arrowRef.value.style, {
          left: arrowX ? `${arrowX}px` : "",
          top: arrowY ? `${arrowY}px` : "",
          bottom: "",
          right: "",
          [opposedSide]: "-4px"
          //一半的高度
        });
      };
      let flag = vue.ref(true);
      const show = () => {
        flag.value = true;
        isHidden.value = false;
        calculatePosition();
      };
      const hide = () => {
        flag.value = false;
        setTimeout(() => {
          if (!flag.value) {
            isHidden.value = true;
          }
        }, 300);
      };
      const handleClickFun = (e) => {
        isHidden.value ? show() : handleClick(e);
        calculatePosition();
      };
      const chooseEvents = () => {
        if (props.trigger === triggerTypes.Hover) {
          events["mouseenter"] = show;
          tooltipEvents["mouseenter"] = show;
          outerEvents["mouseleave"] = hide;
        } else if (props.trigger === triggerTypes.Click) {
          events["click"] = handleClickFun;
        }
      };
      const handleClick = (e) => {
        console.log(e, "eee");
        if (reference.value && e.target) {
          if (!reference.value?.contains(e.target)) {
            hide();
          }
        }
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          "div",
          vue.mergeProps({
            class: vue.unref(bem).b()
          }, vue.toHandlers(outerEvents, true)),
          [
            vue.createElementVNode(
              "div",
              vue.mergeProps({
                ref_key: "reference",
                ref: reference
              }, vue.toHandlers(events, true)),
              [
                vue.renderSlot(_ctx.$slots, "default")
              ],
              16
              /* FULL_PROPS */
            ),
            vue.createVNode(vue.Transition, { persisted: "" }, {
              default: vue.withCtx(() => [
                vue.withDirectives(vue.createElementVNode(
                  "div",
                  vue.mergeProps({
                    class: [vue.unref(bem).e("content"), vue.unref(bem).m(_ctx.effect)],
                    ref_key: "floating",
                    ref: floating
                  }, vue.toHandlers(tooltipEvents, true)),
                  [
                    vue.renderSlot(_ctx.$slots, "content", {}, () => [
                      vue.createTextVNode(
                        vue.toDisplayString(_ctx.content),
                        1
                        /* TEXT */
                      )
                    ]),
                    vue.createCommentVNode(" \u7BAD\u5934 "),
                    vue.createElementVNode(
                      "div",
                      {
                        ref_key: "arrowRef",
                        ref: arrowRef,
                        class: vue.normalizeClass([vue.unref(bem).e("arrow"), vue.unref(bem).m(`${_ctx.effect}-arrow`)])
                      },
                      null,
                      2
                      /* CLASS */
                    )
                  ],
                  16
                  /* FULL_PROPS */
                ), [
                  [vue.vShow, !isHidden.value]
                ])
              ]),
              _: 3
              /* FORWARDED */
            })
          ],
          16
          /* FULL_PROPS */
        );
      };
    }
  });

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = ".v-enter-active[data-v-694d1617],\n.v-leave-active[data-v-694d1617] {\n  transition: opacity 0.5s ease;\n}\n\n.v-enter-from[data-v-694d1617],\n.v-leave-to[data-v-694d1617] {\n  opacity: 0;\n}";
  styleInject(css_248z);

  script$6.__scopeId = "data-v-694d1617";
  script$6.__file = "packages/components/tooltip/src/tooltip.vue";

  const Tooltip = withInstall(script$6);

  const treeProps = {
    data: {
      type: Array,
      //把定义好的类型传给data
      default: () => []
    },
    //默认哪些项展开
    defaultExpandedKeys: {
      type: Array,
      default: () => []
    },
    label: {
      type: String,
      default: "label"
    },
    treeKey: {
      type: String,
      default: "treeKey"
    },
    children: {
      type: String,
      default: "children"
    },
    lazy: Function,
    selectedKeys: {
      type: Array
    },
    selectable: {
      type: Boolean,
      default: true
    },
    multiple: {
      type: Boolean,
      default: false
    },
    defaultCheckedKeys: {
      type: Array,
      default: () => []
    },
    showCheckbox: {
      type: Boolean,
      default: false
    },
    nodeRemain: {
      tye: Number,
      default: 8
    },
    nodeSize: {
      type: Number,
      default: 32
    }
  };
  const treeNodeProps = {
    node: {
      type: Object,
      required: true
    },
    expanded: {
      type: Boolean,
      required: true
    },
    loadingKeys: {
      type: Object,
      required: true
    },
    selectedKeys: {
      type: Array,
      default: () => []
    },
    showCheckbox: {
      type: Boolean,
      default: false
    },
    dragEventKey: {
      type: Object
    },
    checked: Boolean,
    disabled: Boolean,
    indeterminate: Boolean,
    draggable: Boolean
  };
  const treeNodeEmits = {
    toggle: (node) => node,
    select: (node) => node,
    check: (node, val) => typeof val === "boolean"
  };
  const treeSelectEmit = {
    "update:selectedKeys": (keys) => keys
  };
  const injectTreeKey = Symbol();
  const treeNodeContentProps = {
    node: {
      type: Object,
      required: true
    }
  };

  var HTreeNodeContent = vue.defineComponent({
    name: "HTreeNodeContent",
    props: treeNodeContentProps,
    setup(props) {
      const treeContext = vue.inject(injectTreeKey);
      const node = props.node;
      return () => {
        return treeContext?.slots.default ? treeContext.slots.default({ node }) : node.label;
      };
    }
  });

  var script$5 = /* @__PURE__ */ vue.defineComponent({
    __name: "treeNode",
    props: treeNodeProps,
    emits: treeNodeEmits,
    setup(__props, { emit: __emit }) {
      const bem = createNameSpace("tree-node");
      const props = __props;
      const emit = __emit;
      function handleExpand() {
        emit("toggle", props.node);
      }
      const isLoading = vue.computed(() => {
        return props.loadingKeys?.has(props.node.treeKey);
      });
      const isSelected = vue.computed(() => {
        return props.selectedKeys.includes(props.node?.treeKey);
      });
      function handleSelected() {
        if (props.node?.disabled) return;
        emit("select", props.node);
      }
      vue.inject(injectTreeKey);
      function handleCheckboxChange(val) {
        emit("check", props.node, val);
      }
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          "div",
          {
            class: vue.normalizeClass([
              vue.unref(bem).b(),
              vue.unref(bem).is("selected", isSelected.value),
              vue.unref(bem).is("disabled", _ctx.node?.disabled)
            ])
          },
          [
            vue.createElementVNode(
              "div",
              {
                class: vue.normalizeClass([vue.unref(bem).e("content")]),
                style: vue.normalizeStyle({ paddingLeft: `${_ctx.node.level * 16}px` })
              },
              [
                vue.createCommentVNode(" \u88AB\u9009\u4E3A\u5C55\u5F00\u4E14\u4E0D\u662F\u53F6\u5B50\u8282\u70B9\u65F6\u5C55\u5F00 "),
                _ctx.node?.label !== "" ? (vue.openBlock(), vue.createElementBlock(
                  "span",
                  {
                    key: 0,
                    onClick: handleExpand,
                    class: vue.normalizeClass([
                      vue.unref(bem).e("expand-icon"),
                      { expanded: _ctx.expanded && !_ctx.node?.isLeaf },
                      vue.unref(bem).is("leaf", _ctx.node?.isLeaf)
                    ])
                  },
                  [
                    vue.createVNode(vue.unref(Icon), { size: "12" }, {
                      default: vue.withCtx(() => [
                        !isLoading.value ? (vue.openBlock(), vue.createBlock(vue.unref(CaretForwardSharp), { key: 0 })) : (vue.openBlock(), vue.createBlock(vue.unref(Reload), {
                          key: 1,
                          class: "loading"
                        }))
                      ]),
                      _: 1
                      /* STABLE */
                    })
                  ],
                  2
                  /* CLASS */
                )) : vue.createCommentVNode("v-if", true),
                _ctx.showCheckbox ? (vue.openBlock(), vue.createBlock(vue.unref(Checkbox), {
                  key: 1,
                  modelValue: _ctx.checked,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.checked = $event),
                  disabled: _ctx.disabled,
                  indeterminate: _ctx.indeterminate,
                  onChange: handleCheckboxChange
                }, null, 8, ["modelValue", "disabled", "indeterminate"])) : vue.createCommentVNode("v-if", true),
                vue.createElementVNode(
                  "span",
                  {
                    onClick: handleSelected,
                    class: vue.normalizeClass(vue.unref(bem).e("label"))
                  },
                  [
                    vue.createVNode(vue.unref(HTreeNodeContent), { node: _ctx.node }, null, 8, ["node"])
                  ],
                  2
                  /* CLASS */
                )
              ],
              6
              /* CLASS, STYLE */
            )
          ],
          2
          /* CLASS */
        );
      };
    }
  });

  script$5.__file = "packages/components/tree/src/treeNode.vue";

  const virtualizedProps = {
    size: {
      type: Number,
      default: 32
    },
    remain: {
      type: Number,
      default: 8
    },
    items: {
      type: Array,
      default: () => []
    }
  };

  var script$4 = /* @__PURE__ */ vue.defineComponent({
    ...{
      name: "h-virtualized"
    },
    __name: "virtualized",
    props: virtualizedProps,
    setup(__props) {
      const bem = createNameSpace("v");
      const props = __props;
      const showHeight = vue.ref(null);
      const scrollBarHeight = vue.ref(null);
      const scrollTopDistance = vue.ref(0);
      const state = vue.reactive({
        start: 0,
        end: props.remain
      });
      const visibleData = vue.computed(() => {
        return props.items.slice(
          state.start - prevData.value,
          state.end + nextData.value
        );
      });
      const prevData = vue.computed(() => {
        return Math.min(state.start, props.remain / 2);
      });
      const nextData = vue.computed(() => {
        return Math.min(props.remain / 2, props.items.length - state.end);
      });
      const handleScroll = () => {
        if (showHeight.value) {
          const scrollTop = showHeight.value.scrollTop;
          state.start = Math.floor(scrollTop / props.size);
          state.end = state.start + props.remain;
          scrollTopDistance.value = props.size * state.start - props.size * prevData.value;
        }
      };
      const initData = () => {
        if (showHeight.value) {
          showHeight.value.style.height = `${props.remain * props.size}px`;
        }
        if (scrollBarHeight.value) {
          scrollBarHeight.value.style.height = `${props.items.length * props.size}px`;
        }
      };
      vue.watch(() => props.items, initData);
      vue.onMounted(() => {
        console.log("1111");
        vue.nextTick(() => {
          initData();
        });
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          "div",
          {
            class: vue.normalizeClass(vue.unref(bem).b()),
            ref_key: "showHeight",
            ref: showHeight,
            onScroll: handleScroll
          },
          [
            vue.createElementVNode(
              "div",
              {
                class: vue.normalizeClass(vue.unref(bem).e("scroll-bar")),
                ref_key: "scrollBarHeight",
                ref: scrollBarHeight
              },
              null,
              2
              /* CLASS */
            ),
            vue.createElementVNode(
              "div",
              {
                class: vue.normalizeClass(vue.unref(bem).e("scroll-list")),
                style: vue.normalizeStyle({ transform: `translate3d(0, ${scrollTopDistance.value}px, 0)` })
              },
              [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(visibleData.value, (node, index) => {
                    return vue.renderSlot(_ctx.$slots, "default", {
                      key: index,
                      node
                    });
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ],
              6
              /* CLASS, STYLE */
            )
          ],
          34
          /* CLASS, NEED_HYDRATION */
        );
      };
    }
  });

  script$4.__file = "packages/components/virtualized-list/src/virtualized.vue";

  var script$3 = /* @__PURE__ */ vue.defineComponent({
    ...{
      name: "h-tree"
    },
    __name: "tree",
    props: treeProps,
    emits: treeSelectEmit,
    setup(__props, { emit: __emit }) {
      const props = __props;
      const bem = createNameSpace("tree");
      function createOptions(key, label, children) {
        return {
          getKey(node) {
            return node[key];
          },
          getLabel(node) {
            return node[label];
          },
          getChildren(node) {
            return node[children];
          }
        };
      }
      const treeOption = createOptions(props.treeKey, props.label, props.children);
      const createTree = function(data, parent = null) {
        function traversal(data2, parent2 = null) {
          return data2.map((item) => {
            const children = treeOption.getChildren(item) || [];
            const treeNode = {
              //把data中的类型提取出来
              treeKey: treeOption.getKey(item),
              label: treeOption.getLabel(item),
              //没递归一次层级+1
              level: parent2 ? parent2.level + 1 : 0,
              children: [],
              //子数组默认为空
              rawNode: item,
              disabled: !!item.disabled,
              isLeaf: item.isLeaf ?? children.length === 0,
              //？？是当左侧的操作数为 null 或者 undefined 时，返回其右侧操作数，否则返回左侧操作数。
              parentKey: parent2?.treeKey
            };
            if (children.length > 0) {
              treeNode.children = traversal(children, treeNode);
            }
            return treeNode;
          });
        }
        const result = traversal(data, parent);
        return result;
      };
      const tree = vue.ref([]);
      vue.watch(
        () => props.data,
        (data) => {
          tree.value = createTree(data);
          console.log(tree.value);
        },
        { immediate: true }
      );
      const expandedKeySet = vue.ref(new Set(props.defaultExpandedKeys));
      const flatTree = vue.computed(() => {
        let expandedKey = expandedKeySet.value;
        let result = [];
        const nodes = tree.value || [];
        const stack = [];
        for (let i = nodes.length - 1; i >= 0; --i) {
          stack.push(nodes[i]);
        }
        while (stack.length) {
          const node = stack.pop();
          if (!node) continue;
          result.push(node);
          if (expandedKey.has(node.treeKey)) {
            const children = node.children;
            if (children) {
              for (let i = node.children.length - 1; i >= 0; --i) {
                stack.push(node.children[i]);
              }
            }
          }
        }
        return result;
      });
      console.log(flatTree.value, "flat");
      function isExpanded(node) {
        return expandedKeySet.value.has(node.treeKey);
      }
      function toggleExpandAndCollapse(node) {
        const expandKeys = expandedKeySet.value;
        if (expandKeys.has(node.treeKey) && !loadingKeysRef.value.has(node.treeKey)) {
          collapse(node);
        } else {
          expand(node);
        }
      }
      function collapse(node) {
        expandedKeySet.value.delete(node.treeKey);
      }
      const loadingKeysRef = vue.ref(/* @__PURE__ */ new Set());
      function expand(node) {
        expandedKeySet.value.add(node.treeKey);
        if (!node.children.length && !node.isLeaf) {
          const loadingKeys = loadingKeysRef.value;
          if (!loadingKeys.has(node.treeKey)) {
            loadingKeys.add(node.treeKey);
            const lazy = props.lazy;
            if (lazy) {
              lazy(node.rawNode).then((children) => {
                node.rawNode.children = children;
                node.children = createTree(children, node);
                loadingKeys.delete(node.treeKey);
              });
            }
          }
        }
      }
      const emit = __emit;
      const selectTreeRef = vue.ref([]);
      vue.watch(
        () => props.selectedKeys,
        (value) => {
          if (value) {
            selectTreeRef.value = value;
          }
        },
        { immediate: true }
      );
      function handleSelect(node) {
        let keys = Array.from(selectTreeRef.value);
        if (!props.selectable) return;
        if (props.multiple) {
          const index = keys.findIndex((key) => key === node.treeKey);
          if (index > -1) {
            keys.splice(index, 1);
          } else {
            keys.push(node.treeKey);
          }
        } else {
          if (keys.includes(node.treeKey)) {
            keys = [];
          } else {
            keys = [node.treeKey];
          }
        }
        emit("update:selectedKeys", keys);
      }
      vue.provide(injectTreeKey, {
        slots: vue.useSlots()
      });
      const checkedKeysRefs = vue.ref(new Set(props.defaultCheckedKeys));
      function isChecked(node) {
        return checkedKeysRefs.value.has(node.treeKey);
      }
      function isDisabled(node) {
        return !!node.disabled;
        //!!将任意值转换为对应的布尔值
      }
      const indeterminateRefs = vue.ref(/* @__PURE__ */ new Set());
      function isIndeterminate(node) {
        return indeterminateRefs.value.has(node.treeKey);
      }
      function toggle(node, isChecked2) {
        if (!node) return;
        if (isChecked2) {
          indeterminateRefs.value.delete(node.treeKey);
        }
        const checkKeys = checkedKeysRefs.value;
        checkKeys[isChecked2 ? "add" : "delete"](node.treeKey);
        const children = node.children;
        if (children) {
          children.forEach((item) => {
            if (!item.disabled) {
              toggle(item, isChecked2);
            }
          });
        }
      }
      function findNode(key) {
        return flatTree.value.find((node) => node.treeKey === key);
      }
      function updateCheckedKeys(node) {
        if (node.parentKey) {
          const parentNode = findNode(node.parentKey);
          if (parentNode) {
            let isAllChecked = true;
            let isChecked2 = false;
            const nodes = parentNode.children;
            for (const node2 of nodes) {
              if (checkedKeysRefs.value.has(node2.treeKey)) {
                isChecked2 = true;
              } else if (indeterminateRefs.value.has(node2.treeKey)) {
                isAllChecked = false;
                isChecked2 = true;
              } else {
                isAllChecked = false;
              }
            }
            if (isAllChecked) {
              checkedKeysRefs.value.add(parentNode.treeKey);
              indeterminateRefs.value.delete(parentNode.treeKey);
            } else if (isChecked2) {
              checkedKeysRefs.value.delete(parentNode.treeKey);
              indeterminateRefs.value.add(parentNode.treeKey);
            }
            updateCheckedKeys(parentNode);
          }
        }
      }
      function toggleCheck(node, isChecked2) {
        toggle(node, isChecked2);
        updateCheckedKeys(node);
      }
      vue.onMounted(() => {
        checkedKeysRefs.value.forEach((key) => {
          toggle(findNode(key), true);
        });
      });
      vue.computed(() => {
        let expandedKey = expandedKeySet.value;
        let result = [];
        const nodes = tree.value || [];
        const stack = [];
        for (let i = nodes.length - 1; i >= 0; --i) {
          stack.push(nodes[i]);
        }
        while (stack.length) {
          const node = stack.pop();
          if (!node) continue;
          result.push(node.treeKey);
          if (expandedKey.has(node.treeKey)) {
            const children = node.children;
            if (children) {
              for (let i = node.children.length - 1; i >= 0; --i) {
                stack.push(node.children[i]);
              }
            }
          }
        }
        return result;
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          "div",
          {
            class: vue.normalizeClass(vue.unref(bem).b())
          },
          [
            vue.createVNode(script$4, {
              items: flatTree.value,
              remain: _ctx.nodeRemain,
              size: _ctx.nodeSize
            }, {
              default: vue.withCtx(({ node }) => [
                (vue.openBlock(), vue.createBlock(script$5, {
                  key: node.treeKey,
                  node,
                  expanded: isExpanded(node),
                  onToggle: toggleExpandAndCollapse,
                  "loading-keys": loadingKeysRef.value,
                  onSelect: handleSelect,
                  "selected-keys": selectTreeRef.value,
                  "show-checkbox": _ctx.showCheckbox,
                  checked: isChecked(node),
                  disabled: isDisabled(node),
                  indeterminate: isIndeterminate(node),
                  onCheck: toggleCheck
                }, null, 8, ["node", "expanded", "loading-keys", "selected-keys", "show-checkbox", "checked", "disabled", "indeterminate"]))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["items", "remain", "size"])
          ],
          2
          /* CLASS */
        );
      };
    }
  });

  script$3.__file = "packages/components/tree/src/tree.vue";

  const Tree = withInstall(script$3);

  const baseProps = {
    FileList: {
      type: Array,
      default: () => []
    },
    action: {
      type: String,
      default: ""
    },
    multiple: {
      type: Boolean,
      default: false
    },
    //input中需要的类型
    name: {
      type: String,
      default: "file"
    },
    accept: {
      type: String,
      default: ""
    },
    //上传文件调用ajax需要的
    method: {
      type: String,
      default: "post"
    },
    headers: {
      type: Object,
      default: () => ({})
    },
    data: {
      type: Object,
      default: () => ({})
    },
    drag: {
      type: Boolean,
      default: false
    },
    avatarUploader: {
      type: Boolean,
      default: false
    },
    showFileList: {
      type: Boolean,
      default: true
    }
  };
  const DefaultFunction = () => {
  };
  const uploadProps = {
    ...baseProps,
    //预览
    onPreview: {
      type: Function,
      default: DefaultFunction
    },
    beforeUpload: {
      type: Function,
      default: DefaultFunction
    },
    onChange: {
      type: Function,
      default: DefaultFunction
    },
    beforeRemove: {
      type: Function,
      default: DefaultFunction
    },
    onRemove: {
      type: Function,
      default: DefaultFunction
    },
    onProgress: {
      type: Function,
      default: DefaultFunction
    },
    onSuccess: {
      type: Function,
      default: DefaultFunction
    },
    onError: {
      type: Function,
      default: DefaultFunction
    }
  };
  let id = 0;
  const genId = () => id++;
  const updateEmits = {
    "onUpdate:file-list": (val) => true
  };

  const defaultFunction = () => {
  };
  const uploadContentProps = {
    ...baseProps,
    beforeUpload: uploadProps["beforeUpload"],
    onChange: uploadProps["onChange"],
    onStart: {
      type: Function,
      default: defaultFunction
    },
    onProgress: {
      type: Function,
      default: defaultFunction
    },
    onRemove: {
      type: Function,
      default: defaultFunction
    },
    onError: {
      type: Function,
      default: defaultFunction
    },
    onSuccess: {
      type: Function,
      default: defaultFunction
    }
  };

  function httpRequest(options) {
    const xhr = new XMLHttpRequest();
    const action = options.action;
    xhr.open(options.method, action, true);
    xhr.upload.addEventListener("progress", (e) => {
      const progressEvent = e;
      progressEvent.percentage = e.total > 0 ? e.loaded / e.total * 100 : 0;
      options.onProgress(progressEvent);
    });
    const headers = options.headers;
    if (headers) {
      for (const [key, value] of Object.entries(options.headers)) {
        xhr.setRequestHeader(key, value);
      }
    }
    const formData = new FormData();
    if (options.data) {
      for (const [key, value] of Object.entries(options.data)) {
        formData.append(key, value);
      }
    }
    formData.append(options.name, options.file);
    xhr.onload = function() {
      if (xhr.status < 300 && xhr.status >= 200) {
        options.onSuccess(xhr.response);
      } else {
        options.onError({ status: xhr.status });
      }
    };
    xhr.addEventListener("error", (error) => {
      options.onError(error);
    });
    xhr.send(formData);
    return xhr;
  }

  var script$2 = /* @__PURE__ */ vue.defineComponent({
    __name: "upload-content-drag",
    emits: {},
    setup(__props, { emit: __emit }) {
      const bem = createNameSpace("upload");
      const isOver = vue.ref(false);
      const emit = __emit;
      const onDrop = (e) => {
        e.stopPropagation();
        emit("file", Array.from(e.dataTransfer.files));
      };
      const onDragover = (e) => {
        isOver.value = true;
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          "div",
          {
            class: vue.normalizeClass(vue.unref(bem).b("dragger")),
            onDragover: vue.withModifiers(onDragover, ["prevent"]),
            onDragleave: _cache[0] || (_cache[0] = vue.withModifiers(($event) => isOver.value = false, ["prevent"])),
            onDrop: vue.withModifiers(onDrop, ["prevent"])
          },
          [
            vue.renderSlot(_ctx.$slots, "default")
          ],
          34
          /* CLASS, NEED_HYDRATION */
        );
      };
    }
  });

  script$2.__file = "packages/components/upload/src/upload-content-drag.vue";

  const _hoisted_1$1 = ["name", "accept", "multiple"];
  var script$1 = /* @__PURE__ */ vue.defineComponent({
    ...{
      name: "h-upload",
      inheritAttrs: false
    },
    __name: "upload-content",
    props: uploadContentProps,
    setup(__props) {
      const bem = createNameSpace("upload");
      const props = __props;
      const inputRef = vue.ref();
      const handleClick = () => {
        inputRef.value.value = "";
        inputRef.value.click();
      };
      async function upload(file) {
        let result = await props.beforeUpload(file);
        if (!result) return props.onRemove(file);
        console.log(result, "result");
        const { method, name, action, headers, data } = props;
        httpRequest({
          method,
          file,
          name,
          action,
          headers,
          data,
          onError: (error) => {
            props.onError(error, file);
          },
          onSuccess: (res) => {
            props.onSuccess(res, file);
          },
          onProgress: (e) => {
            props.onProgress(e, file);
          }
        });
      }
      const uploadFiles = (files) => {
        for (let i = 0; i < files.length; i++) {
          const rawFile = files[i];
          rawFile.uid = genId();
          props.onStart(rawFile);
          upload(rawFile);
        }
      };
      const handleChange = (e) => {
        const files = e.target.files;
        console.log(files, "files111");
        uploadFiles(files);
        console.log(files, "files222  ");
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          "div",
          {
            onClick: handleClick,
            class: vue.normalizeClass([vue.unref(bem).b()])
          },
          [
            vue.createCommentVNode(" \u53EF\u62D6\u52A8\u4E0A\u4F20 "),
            _ctx.drag ? (vue.openBlock(), vue.createBlock(script$2, {
              key: 0,
              onFile: uploadFiles
            }, {
              default: vue.withCtx(() => [
                vue.renderSlot(_ctx.$slots, "default")
              ]),
              _: 3
              /* FORWARDED */
            })) : (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              { key: 1 },
              [
                vue.createCommentVNode(" \u666E\u901A "),
                vue.renderSlot(_ctx.$slots, "default")
              ],
              64
              /* STABLE_FRAGMENT */
            )),
            vue.createElementVNode("input", {
              type: "file",
              ref_key: "inputRef",
              ref: inputRef,
              name: _ctx.name,
              accept: _ctx.accept,
              multiple: _ctx.multiple,
              onChange: handleChange
            }, null, 40, _hoisted_1$1)
          ],
          2
          /* CLASS */
        );
      };
    }
  });

  script$1.__file = "packages/components/upload/src/upload-content.vue";

  const _hoisted_1 = { class: "progress-text" };
  var script = /* @__PURE__ */ vue.defineComponent({
    ...{
      name: "h-upload"
    },
    __name: "upload",
    props: uploadProps,
    emits: updateEmits,
    setup(__props, { emit: __emit }) {
      const bem = createNameSpace("upload");
      const props = __props;
      const emit = __emit;
      const uploadFiles = vue.ref(props.FileList);
      vue.watch(uploadFiles, (newVal) => {
        emit("onUpdate:file-list", newVal);
      });
      const findFile = (rawFile) => {
        return uploadFiles.value.find((file) => file.uid === rawFile.uid);
      };
      const uploadContentProps = vue.computed(() => ({
        ...props,
        //上传前
        onStart: (rawFile) => {
          console.log("start");
          const uploadFile = {
            uid: rawFile.uid,
            name: rawFile.name,
            percentage: 0,
            raw: rawFile,
            size: rawFile.size,
            status: "start"
          };
          uploadFile.url = URL.createObjectURL(rawFile);
          uploadFiles.value = [...uploadFiles.value, uploadFile];
          props.onChange(uploadFile);
        },
        onProgress: (file, rawFile) => {
          console.log("progress");
          const uploadFile = findFile(rawFile);
          console.log(uploadFiles.value, "000");
          uploadFile.status = "uploading";
          uploadFile.percentage = file.percentage;
          props.onProgress(file, uploadFile, uploadFiles.value);
        },
        onRemove: async (rawFile) => {
          console.log("remove");
          const uploadFile = findFile(rawFile);
          const result = await props.beforeRemove(uploadFile, uploadFiles.value);
          if (result) {
            const fileList = uploadFiles.value;
            fileList.splice(fileList.indexOf(uploadFile), 1);
            props.onRemove(uploadFile, uploadFiles.value);
          }
        },
        onError: (error, rawFile) => {
          console.log("err");
          const uploadFile = findFile(rawFile);
          uploadFile.status = "error";
          const fileList = uploadFiles.value;
          fileList.splice(fileList.indexOf(uploadFile), 1);
          props.onError(error, uploadFile, fileList);
        },
        onSuccess: (res, rawFile) => {
          console.log("success");
          const uploadFile = findFile(rawFile);
          uploadFile.status = "success";
          const fileList = uploadFiles.value;
          props.onSuccess(res, uploadFile, fileList);
        }
      }));
      const deleteFile = (index) => {
        uploadFiles.value.splice(index, 1);
        emit("onUpdate:file-list", uploadFiles);
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(
          vue.Fragment,
          null,
          [
            vue.createVNode(
              script$1,
              vue.normalizeProps(vue.guardReactiveProps(uploadContentProps.value)),
              {
                default: vue.withCtx(() => [
                  vue.renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
                /* FORWARDED */
              },
              16
              /* FULL_PROPS */
            ),
            vue.createCommentVNode(" {{ uploadFiles }} "),
            vue.createCommentVNode(" \u5C55\u793A\u7684\u6587\u4EF6\u5217\u8868 "),
            vue.withDirectives(vue.createElementVNode(
              "div",
              {
                class: vue.normalizeClass(vue.unref(bem).b("list"))
              },
              [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(uploadFiles.value, (item, index) => {
                    return vue.openBlock(), vue.createElementBlock(
                      "div",
                      {
                        class: vue.normalizeClass(vue.unref(bem).be("list", "item")),
                        key: index
                      },
                      [
                        vue.createElementVNode(
                          "div",
                          {
                            class: vue.normalizeClass(vue.unref(bem).be("list", "item-name"))
                          },
                          vue.toDisplayString(item.name),
                          3
                          /* TEXT, CLASS */
                        ),
                        vue.createCommentVNode(" show check "),
                        vue.createElementVNode(
                          "div",
                          {
                            class: vue.normalizeClass(vue.unref(bem).be("list", "item-label"))
                          },
                          [
                            vue.withDirectives(vue.createVNode(
                              vue.unref(Icon),
                              { size: 20 },
                              {
                                default: vue.withCtx(() => [
                                  vue.createVNode(vue.unref(CheckmarkCircleOutline))
                                ]),
                                _: 2
                                /* DYNAMIC */
                              },
                              1536
                              /* NEED_PATCH, DYNAMIC_SLOTS */
                            ), [
                              [vue.vShow, item.percentage === 100]
                            ])
                          ],
                          2
                          /* CLASS */
                        ),
                        vue.createCommentVNode(" show close "),
                        vue.createElementVNode(
                          "div",
                          {
                            class: vue.normalizeClass(vue.unref(bem).be("list", "item-label-hover"))
                          },
                          [
                            vue.createVNode(vue.unref(Icon), {
                              onClick: ($event) => deleteFile(index),
                              size: 20
                            }, {
                              default: vue.withCtx(() => [
                                vue.createVNode(vue.unref(CloseOutline))
                              ]),
                              _: 2
                              /* DYNAMIC */
                            }, 1032, ["onClick"])
                          ],
                          2
                          /* CLASS */
                        ),
                        vue.createCommentVNode(" \u8FDB\u5EA6\u6761 "),
                        vue.withDirectives(vue.createElementVNode(
                          "div",
                          {
                            class: vue.normalizeClass(vue.unref(bem).b("progress"))
                          },
                          [
                            vue.createElementVNode(
                              "div",
                              {
                                class: vue.normalizeClass(vue.unref(bem).b("pro1gress-bar")),
                                style: vue.normalizeStyle({ width: item.percentage + "%" })
                              },
                              null,
                              6
                              /* CLASS, STYLE */
                            ),
                            vue.createElementVNode(
                              "div",
                              _hoisted_1,
                              vue.toDisplayString(Math.floor(item.percentage)) + "%",
                              1
                              /* TEXT */
                            )
                          ],
                          2
                          /* CLASS */
                        ), [
                          [vue.vShow, item.percentage !== 100]
                        ])
                      ],
                      2
                      /* CLASS */
                    );
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ],
              2
              /* CLASS */
            ), [
              [vue.vShow, _ctx.showFileList]
            ])
          ],
          64
          /* STABLE_FRAGMENT */
        );
      };
    }
  });

  script.__file = "packages/components/upload/src/upload.vue";

  const Upload = withInstall(script);

  const components = [Icon, Button, Checkbox, Form, Input, Tooltip, Tree, Upload];
  const install = (app) => {
    components.forEach((component) => app.use(component));
  };
  var index = {
    install
  };

  exports.Button = Button;
  exports.Checkbox = Checkbox;
  exports.Form = Form;
  exports.FormItem = FormItem;
  exports.Icon = Icon;
  exports.Input = Input;
  exports.Tooltip = Tooltip;
  exports.Tree = Tree;
  exports.Upload = Upload;
  exports.baseProps = baseProps;
  exports.checkBoxEmits = checkBoxEmits;
  exports.checkBoxProps = checkBoxProps;
  exports.default = index;
  exports.genId = genId;
  exports.iconProps = iconProps;
  exports.injectTreeKey = injectTreeKey;
  exports.tooltipProps = tooltipProps;
  exports.treeNodeContentProps = treeNodeContentProps;
  exports.treeNodeEmits = treeNodeEmits;
  exports.treeNodeProps = treeNodeProps;
  exports.treeProps = treeProps;
  exports.treeSelectEmit = treeSelectEmit;
  exports.triggerTypes = triggerTypes;
  exports.updateEmits = updateEmits;
  exports.uploadProps = uploadProps;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
