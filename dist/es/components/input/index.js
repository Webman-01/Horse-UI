import { withInstall } from './Users/mamingzhe/Horse UI/packages/utils/with-install';
import { defineComponent, openBlock, createElementBlock, createElementVNode, createStaticVNode, useSlots, useAttrs, ref, watch, onMounted, computed, inject, resolveComponent, normalizeClass, unref, createCommentVNode, renderSlot, mergeProps, withDirectives, createVNode, withCtx, vShow, nextTick } from 'vue';

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

const _hoisted_1$3 = {
  xmlns: 'http://www.w3.org/2000/svg',
  'xmlns:xlink': 'http://www.w3.org/1999/xlink',
  viewBox: '0 0 512 512'
};
const _hoisted_2$2 = /*#__PURE__*/ createElementVNode(
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
const _hoisted_3$1 = /*#__PURE__*/ createElementVNode(
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
const _hoisted_4$1 = /*#__PURE__*/ createElementVNode(
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
const _hoisted_5 = [_hoisted_2$2, _hoisted_3$1, _hoisted_4$1];
var CloseCircleOutline = defineComponent({
  name: 'CloseCircleOutline',
  render: function render(_ctx, _cache) {
    return openBlock(), createElementBlock('svg', _hoisted_1$3, _hoisted_5)
  }
});

const _hoisted_1$2 = {
  xmlns: 'http://www.w3.org/2000/svg',
  'xmlns:xlink': 'http://www.w3.org/1999/xlink',
  viewBox: '0 0 512 512'
};
const _hoisted_2$1 = /*#__PURE__*/ createStaticVNode('<path d="M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z" fill="currentColor"></path><path d="M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z" fill="currentColor"></path><path d="M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z" fill="currentColor"></path><path d="M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z" fill="currentColor"></path><path d="M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z" fill="currentColor"></path>', 5);
const _hoisted_7 = [_hoisted_2$1];
var EyeOffOutline = defineComponent({
  name: 'EyeOffOutline',
  render: function render(_ctx, _cache) {
    return openBlock(), createElementBlock('svg', _hoisted_1$2, _hoisted_7)
  }
});

const _hoisted_1$1 = {
  xmlns: 'http://www.w3.org/2000/svg',
  'xmlns:xlink': 'http://www.w3.org/1999/xlink',
  viewBox: '0 0 512 512'
};
const _hoisted_2 = /*#__PURE__*/ createElementVNode(
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
const _hoisted_3 = /*#__PURE__*/ createElementVNode(
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
const _hoisted_4 = [_hoisted_2, _hoisted_3];
var EyeOutline = defineComponent({
  name: 'EyeOutline',
  render: function render(_ctx, _cache) {
    return openBlock(), createElementBlock('svg', _hoisted_1$1, _hoisted_4)
  }
});

const FormItemContextKey = Symbol();

const _hoisted_1 = ["type", "placeholder", "disabled", "readonly"];
var script = /* @__PURE__ */ defineComponent({
  ...{
    name: "h-input",
    inheritAttrs: false
  },
  __name: "input",
  props: inputProps,
  emits: inputEmits,
  setup(__props, { emit: __emit }) {
    const slots = useSlots();
    const attrs = useAttrs();
    const bem = createNameSpace("input");
    const props = __props;
    const emits = __emit;
    const input = ref(null);
    watch(
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
    const isFocus = ref(false);
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
    onMounted(() => {
      setInputValue();
    });
    const passwordVisible = ref(false);
    const handlePasswordVisible = () => {
      passwordVisible.value = !passwordVisible.value;
      focus();
    };
    const focus = async () => {
      await nextTick();
      input.value?.focus();
    };
    const clear = () => {
      emits("input", "");
      emits("update:modelValue", "");
      emits("clear");
      focus();
    };
    const showClear = computed(() => {
      return props.modelValue && props.clearable && !props.disabled && !props.readonly;
    });
    const formItemContext = inject(FormItemContextKey);
    return (_ctx, _cache) => {
      const _component_h_icon = resolveComponent("h-icon");
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass([unref(bem).b()])
        },
        [
          createElementVNode(
            "div",
            {
              class: normalizeClass(unref(bem).e("group"))
            },
            [
              createCommentVNode(" \u5934\u90E8\u5185\u5BB9 "),
              unref(slots).prefix ? (openBlock(), createElementBlock(
                "div",
                {
                  key: 0,
                  class: normalizeClass(unref(bem).be("group", "prefix"))
                },
                [
                  renderSlot(_ctx.$slots, "prefix")
                ],
                2
                /* CLASS */
              )) : createCommentVNode("v-if", true),
              createCommentVNode(" \u8F93\u5165\u6846+\u8F93\u5165\u6846\u524D\u7F6E+\u540E\u7F6E "),
              createElementVNode(
                "div",
                {
                  class: normalizeClass([unref(bem).e("wrapper"), unref(bem).is("focus", isFocus.value)])
                },
                [
                  unref(slots).prepend ? (openBlock(), createElementBlock(
                    "span",
                    {
                      key: 0,
                      class: normalizeClass(unref(bem).e("prepend"))
                    },
                    [
                      renderSlot(_ctx.$slots, "prepend")
                    ],
                    2
                    /* CLASS */
                  )) : createCommentVNode("v-if", true),
                  createElementVNode("input", mergeProps({
                    type: _ctx.showPassword ? passwordVisible.value ? "text" : "password" : _ctx.type
                  }, unref(attrs), {
                    class: [unref(bem).e("inner"), unref(bem).is("disabled", _ctx.disabled)],
                    ref_key: "input",
                    ref: input,
                    onInput: handleInput,
                    onChange: handleChange,
                    onBlur: handleBlur,
                    onFocus: handleFocus,
                    placeholder: _ctx.placeholder,
                    disabled: _ctx.disabled,
                    readonly: _ctx.readonly
                  }), null, 16, _hoisted_1),
                  createCommentVNode(" eyes show or hide "),
                  withDirectives(createVNode(
                    _component_h_icon,
                    { onClick: handlePasswordVisible },
                    {
                      default: withCtx(() => [
                        createVNode(unref(EyeOutline))
                      ]),
                      _: 1
                      /* STABLE */
                    },
                    512
                    /* NEED_PATCH */
                  ), [
                    [vShow, passwordVisible.value && _ctx.showPassword]
                  ]),
                  withDirectives(createVNode(
                    _component_h_icon,
                    { onClick: handlePasswordVisible },
                    {
                      default: withCtx(() => [
                        createVNode(unref(EyeOffOutline))
                      ]),
                      _: 1
                      /* STABLE */
                    },
                    512
                    /* NEED_PATCH */
                  ), [
                    [vShow, !passwordVisible.value && _ctx.showPassword]
                  ]),
                  createCommentVNode(" clear function "),
                  withDirectives(createVNode(
                    _component_h_icon,
                    { onClick: clear },
                    {
                      default: withCtx(() => [
                        createVNode(unref(CloseCircleOutline))
                      ]),
                      _: 1
                      /* STABLE */
                    },
                    512
                    /* NEED_PATCH */
                  ), [
                    [vShow, showClear.value]
                  ]),
                  unref(slots).append ? (openBlock(), createElementBlock(
                    "span",
                    {
                      key: 1,
                      class: normalizeClass(unref(bem).e("append"))
                    },
                    [
                      renderSlot(_ctx.$slots, "append")
                    ],
                    2
                    /* CLASS */
                  )) : createCommentVNode("v-if", true)
                ],
                2
                /* CLASS */
              ),
              createCommentVNode(" \u5C3E\u90E8\u5185\u5BB9 "),
              unref(slots).suffix ? (openBlock(), createElementBlock(
                "div",
                {
                  key: 1,
                  class: normalizeClass(unref(bem).be("group", "suffix"))
                },
                [
                  renderSlot(_ctx.$slots, "suffix")
                ],
                2
                /* CLASS */
              )) : createCommentVNode("v-if", true)
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

script.__file = "packages/components/input/src/input.vue";

const Input = withInstall(script);

export { Input, Input as default };
