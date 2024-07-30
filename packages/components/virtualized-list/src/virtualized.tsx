import {
  computed,
  defineComponent,
  nextTick,
  onMounted,
  reactive,
  ref,
  watch,
} from "vue";
import { virtualizedProps } from "./virtualizedType";
import { createNameSpace } from "../../../utils/create";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

export default defineComponent({
  name: "HVirtualList",
  props: virtualizedProps,
  setup(props, { slots }) {
    const bem = createNameSpace("v");
    //展示出来的高度
    const showHeight = ref<HTMLElement>();
    //滚动条的高度，即所有元素的总高度
    const scrollBarHeight = ref<HTMLElement>();
    //显示区域的开始和结束元素位置
    //是以第几个节点为位置数据的
    const state = reactive({
      start: 0,
      end: props.remain,
    });
    //计算出要显示部分
    const visibleData = computed(() => {
      return props.items.slice(
        state.start - prevData.value,
        state.end + nextData.value
      );
    });
    //要显示部分前的数据
    const prevData = computed(() => {
      return Math.min(state.start, props.remain / 2);
    });
    //要显示部分后的数据
    const nextData = computed(() => {
      return Math.min(props.remain / 2, props.items.length - state.end);
    });

    //滚动卷去的距离
    const scrollTopDistance = ref<number>(0);
    //根据当前滚动的节点来计算过去了几个树节点
    const handleScroll = () => {
      //卷去的距离
      const scrollTop = showHeight.value!.scrollTop;
      //得出卷去的个数
      state.start = Math.floor(scrollTop / props.size);
      state.end = state.start + props.remain;

      scrollTopDistance.value =
        props.size * state.start - props.size * prevData.value;
    };
    function initData() {
      console.log(showHeight.value,'oooo');
    
      showHeight.value!.style.height = props.remain * props.size + "px";
      scrollBarHeight.value!.style.height =
        props.items.length * props.size + "px";
    }
    watch(() => props.items, initData);
    onMounted(() => {
      console.log('99999999');
      nextTick(()=>{
        if(showHeight.value) initData();
      })
      // initData();
      console.log(showHeight.value,'llllllllll');
      
    });
    return () => {
      try {
        return (
          <div class={bem.b()} ref={showHeight} onScroll={handleScroll}>
            <div class={bem.e("scroll-bar")} ref={scrollBarHeight}></div>
            <div
              class={bem.e("scroll-list")}
              style={{
                transform: `translate3d(0,${scrollTopDistance.value}px,0)`,
              }}
            >
              {visibleData.value.map((node, index) => slots.default!({ node }))}
            </div>
          </div>
        );
      } catch (error) {
        console.error('Error in HVirtualList render function:', error);
      }
      
    };
  },
});
