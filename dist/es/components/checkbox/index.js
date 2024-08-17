import { withInstall } from './Users/mamingzhe/Horse UI/packages/utils/with-install';
import { defineComponent, ref, computed, watch, onMounted, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, withDirectives, vModelCheckbox, createCommentVNode, renderSlot, Fragment, createTextVNode, toDisplayString } from 'vue';

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
var script = /* @__PURE__ */ defineComponent({
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
          class: normalizeClass([unref(bem).b(), unref(bem).is("disabled", _ctx.disabled)])
        },
        [
          createElementVNode(
            "span",
            {
              class: normalizeClass(unref(bem).e("input"))
            },
            [
              withDirectives(createElementVNode("input", {
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
          createCommentVNode(" \u5982\u679Ch-checkbox\u4E2D\u6709\u5199\u4E1C\u897F\u5C31\u5C55\u793A\u5199\u7684 "),
          _ctx.$slots.default || _ctx.label ? (openBlock(), createElementBlock(
            "span",
            {
              key: 0,
              class: normalizeClass([unref(bem).e("label"), unref(bem).is("checked", isChecked.value)])
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

const Checkbox = withInstall(script);

export { Checkbox, checkBoxEmits, checkBoxProps, Checkbox as default };
