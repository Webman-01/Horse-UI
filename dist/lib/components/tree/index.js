'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var withInstall = require('./Users/mamingzhe/Horse UI/packages/utils/with-install');
var vue = require('vue');

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

const _hoisted_1$2 = {
  xmlns: 'http://www.w3.org/2000/svg',
  'xmlns:xlink': 'http://www.w3.org/1999/xlink',
  viewBox: '0 0 512 512'
};
const _hoisted_2$1 = /*#__PURE__*/ vue.createElementVNode(
  'path',
  {
    d: 'M144 448l224-192L144 64v384z',
    fill: 'currentColor'
  },
  null,
  -1
  /* HOISTED */
);
const _hoisted_3$1 = [_hoisted_2$1];
var CaretForwardSharp = vue.defineComponent({
  name: 'CaretForwardSharp',
  render: function render(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock('svg', _hoisted_1$2, _hoisted_3$1)
  }
});

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

const iconProps = {
  color: String,
  size: [Number, String]
};

var script$4 = /* @__PURE__ */ vue.defineComponent({
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

script$4.__file = "packages/components/icon/src/icon.vue";

const Icon = withInstall.withInstall(script$4);

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
var script$3 = /* @__PURE__ */ vue.defineComponent({
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

script$3.__file = "packages/components/checkbox/src/checkbox.vue";

const Checkbox = withInstall.withInstall(script$3);

var script$2 = /* @__PURE__ */ vue.defineComponent({
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

script$2.__file = "packages/components/tree/src/treeNode.vue";

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

var script$1 = /* @__PURE__ */ vue.defineComponent({
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

script$1.__file = "packages/components/virtualized-list/src/virtualized.vue";

var script = /* @__PURE__ */ vue.defineComponent({
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
          vue.createVNode(script$1, {
            items: flatTree.value,
            remain: _ctx.nodeRemain,
            size: _ctx.nodeSize
          }, {
            default: vue.withCtx(({ node }) => [
              (vue.openBlock(), vue.createBlock(script$2, {
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

script.__file = "packages/components/tree/src/tree.vue";

const Tree = withInstall.withInstall(script);

exports.Tree = Tree;
exports.default = Tree;
exports.injectTreeKey = injectTreeKey;
exports.treeNodeContentProps = treeNodeContentProps;
exports.treeNodeEmits = treeNodeEmits;
exports.treeNodeProps = treeNodeProps;
exports.treeProps = treeProps;
exports.treeSelectEmit = treeSelectEmit;
