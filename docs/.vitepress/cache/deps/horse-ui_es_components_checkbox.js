import {
  withInstall
} from "./chunk-7FPKLWMX.js";
import {
  Fragment,
  computed,
  createBaseVNode,
  createCommentVNode,
  createElementBlock,
  createTextVNode,
  defineComponent,
  normalizeClass,
  onMounted,
  openBlock,
  ref,
  renderSlot,
  toDisplayString,
  unref,
  vModelCheckbox,
  watch,
  withDirectives
} from "./chunk-45KCXATN.js";

// node_modules/horse-ui/es/components/checkbox/index.js
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
var checkBoxProps = {
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
var checkBoxEmits = {
  "update:modelValue": (value) => true,
  change: (value) => true
};
var _hoisted_1 = ["disabled", "value"];
var script = defineComponent({
  ...{
    name: "h-checkbox"
  },
  __name: "checkbox",
  props: checkBoxProps,
  emits: checkBoxEmits,
  setup(__props, { emit: __emit }) {
    const bem2 = createNameSpace("checkbox");
    const props = __props;
    const emit = __emit;
    const isChecked = ref(false);
    const model = computed({
      get() {
        if (!props.indeterminate) isChecked.value = Boolean(props.modelValue);
        return props.modelValue;
      },
      set(val) {
        return emit("update:modelValue", val);
      }
    });
    const inputRef = ref();
    function indeterminate(val) {
      inputRef.value.indeterminate = val;
    }
    watch(() => props.indeterminate, indeterminate);
    onMounted(() => {
      indeterminate(props.indeterminate);
    });
    function handleChange(e) {
      const target = e.target;
      const value = target.checked ? true : false;
      emit("change", value);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "label",
        {
          class: normalizeClass([unref(bem2).b(), unref(bem2).is("disabled", _ctx.disabled)])
        },
        [
          createBaseVNode(
            "span",
            {
              class: normalizeClass(unref(bem2).e("input"))
            },
            [
              withDirectives(createBaseVNode("input", {
                type: "checkbox",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.value = $event),
                ref_key: "inputRef",
                ref: inputRef,
                disabled: _ctx.disabled,
                value: _ctx.label,
                onChange: handleChange
              }, null, 40, _hoisted_1), [
                [vModelCheckbox, model.value]
              ])
            ],
            2
            /* CLASS */
          ),
          createCommentVNode(" 如果h-checkbox中有写东西就展示写的 "),
          _ctx.$slots.default || _ctx.label ? (openBlock(), createElementBlock(
            "span",
            {
              key: 0,
              class: normalizeClass([unref(bem2).e("label"), unref(bem2).is("checked", isChecked.value)])
            },
            [
              renderSlot(_ctx.$slots, "default"),
              !_ctx.$slots.default ? (openBlock(), createElementBlock(
                Fragment,
                { key: 0 },
                [
                  createTextVNode(
                    toDisplayString(_ctx.label),
                    1
                    /* TEXT */
                  )
                ],
                64
                /* STABLE_FRAGMENT */
              )) : createCommentVNode("v-if", true)
            ],
            2
            /* CLASS */
          )) : createCommentVNode("v-if", true)
        ],
        2
        /* CLASS */
      );
    };
  }
});
script.__file = "packages/components/checkbox/src/checkbox.vue";
var Checkbox = withInstall(script);
export {
  Checkbox,
  checkBoxEmits,
  checkBoxProps,
  Checkbox as default
};
//# sourceMappingURL=horse-ui_es_components_checkbox.js.map
