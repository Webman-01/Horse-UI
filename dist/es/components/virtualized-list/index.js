import { withInstall } from '../../utils/with-install';
import { defineComponent, ref, reactive, computed, watch, onMounted, nextTick } from 'vue';

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

var _Virtualized = defineComponent({
  name: "HVirtualList",
  props: virtualizedProps,
  setup(props, { slots }) {
    const bem = createNameSpace("v");
    const showHeight = ref();
    const scrollBarHeight = ref();
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
    const scrollTopDistance = ref(0);
    const handleScroll = () => {
      const scrollTop = showHeight.value.scrollTop;
      state.start = Math.floor(scrollTop / props.size);
      state.end = state.start + props.remain;
      scrollTopDistance.value = props.size * state.start - props.size * prevData.value;
    };
    function initData() {
      console.log(showHeight.value, "oooo");
      showHeight.value.style.height = props.remain * props.size + "px";
      scrollBarHeight.value.style.height = props.items.length * props.size + "px";
    }
    watch(() => props.items, initData);
    onMounted(() => {
      console.log("99999999");
      nextTick(() => {
        if (showHeight.value) initData();
      });
      console.log(showHeight.value, "llllllllll");
    });
    return () => {
      try {
        return /* @__PURE__ */ React.createElement("div", { class: bem.b(), ref: showHeight, onScroll: handleScroll }, /* @__PURE__ */ React.createElement("div", { class: bem.e("scroll-bar"), ref: scrollBarHeight }), /* @__PURE__ */ React.createElement(
          "div",
          {
            class: bem.e("scroll-list"),
            style: {
              transform: `translate3d(0,${scrollTopDistance.value}px,0)`
            }
          },
          visibleData.value.map((node, index) => slots.default({ node }))
        ));
      } catch (error) {
        console.error("Error in HVirtualList render function:", error);
      }
    };
  }
});

const Virtualized = withInstall(_Virtualized);

export { Virtualized as default };
