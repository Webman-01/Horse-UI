'use strict';

var withInstall = require('./Users/mamingzhe/Horse UI/packages/utils/with-install');
var vue = require('vue');

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

var script = /* @__PURE__ */ vue.defineComponent({
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

script.__file = "packages/components/virtualized-list/src/virtualized.vue";

const Virtualized = withInstall.withInstall(script);

module.exports = Virtualized;
