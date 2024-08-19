import { withInstall } from '../../utils/with-install';
import { defineComponent, ref, reactive, computed, watch, onMounted, nextTick, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, normalizeStyle, Fragment, renderList, renderSlot } from 'vue';

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

var script = /* @__PURE__ */ defineComponent({
  ...{
    name: "h-virtualized"
  },
  __name: "virtualized",
  props: virtualizedProps,
  setup(__props) {
    const bem = createNameSpace("v");
    const props = __props;
    const showHeight = ref(null);
    const scrollBarHeight = ref(null);
    const scrollTopDistance = ref(0);
    const state = reactive({
      start: 0,
      end: props.remain
    });
    const visibleData = computed(() => {
      return props.items.slice(
        state.start - prevData.value,
        state.end + nextData.value
      );
    });
    const prevData = computed(() => {
      return Math.min(state.start, props.remain / 2);
    });
    const nextData = computed(() => {
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
    watch(() => props.items, initData);
    onMounted(() => {
      console.log("1111");
      nextTick(() => {
        initData();
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass(unref(bem).b()),
          ref_key: "showHeight",
          ref: showHeight,
          onScroll: handleScroll
        },
        [
          createElementVNode(
            "div",
            {
              class: normalizeClass(unref(bem).e("scroll-bar")),
              ref_key: "scrollBarHeight",
              ref: scrollBarHeight
            },
            null,
            2
            /* CLASS */
          ),
          createElementVNode(
            "div",
            {
              class: normalizeClass(unref(bem).e("scroll-list")),
              style: normalizeStyle({ transform: `translate3d(0, ${scrollTopDistance.value}px, 0)` })
            },
            [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList(visibleData.value, (node, index) => {
                  return renderSlot(_ctx.$slots, "default", {
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

const Virtualized = withInstall(script);

export { Virtualized as default };
