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

const _hoisted_1 = ["disabled", "value"];
var script = /* @__PURE__ */ vue.defineComponent({
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
              }, null, 40, _hoisted_1), [
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

script.__file = "packages/components/checkbox/src/checkbox.vue";

const Checkbox = withInstall.withInstall(script);

exports.Checkbox = Checkbox;
exports.checkBoxEmits = checkBoxEmits;
exports.checkBoxProps = checkBoxProps;
exports.default = Checkbox;
