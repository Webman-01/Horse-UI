<template>
  <div :class="bem.b()" v-on="outerEvents">
    <div ref="reference" v-on="events">
      <slot></slot>
    </div>
    <Transition>
      <div
        :class="[bem.e('content'), bem.m(effect)]"
        ref="floating"
        v-show="!isHidden"
        v-on="tooltipEvents"
      >
        <slot name="content">
          {{ content }}
        </slot>
        <!-- 箭头 -->
        <div
          ref="arrowRef"
          :class="[bem.e('arrow'), bem.m(`${effect}-arrow`)]"
        ></div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { tooltipProps, triggerTypes } from "../src/tooltip";
import { onMounted, reactive, ref } from "vue";
import {
  offset,
  flip,
  shift,
  computePosition,
  arrow,
  Placement,
} from "@floating-ui/vue";
import { showOrHideFun } from "../../tooltip";
import { createNameSpace } from "../../../utils/create";
import { Ref } from "vue";
defineOptions({
  name: "h-tooltip",
});
const bem = createNameSpace("tooltip");
const props = defineProps(tooltipProps);

const reference = ref();
const floating = ref();
const arrowRef = ref();
const isHidden = ref(true);
// 用events来保存click/hover对应的触发，并且绑定在触发区域对应的节点上
const events: Record<string, EventListener> = reactive({});
const outerEvents: Record<string, EventListener> = reactive({});
const tooltipEvents: Record<string, EventListener> = reactive({});
onMounted(() => {
  chooseEvents();
  document.addEventListener("click", handleClick);
});
const calculatePosition = async () => {
  const { x, y, middlewareData, placement } = await computePosition(
    reference.value,
    floating.value,
    {
      placement: props.placement as Placement,
      middleware: [
        offset(10),
        flip(),
        shift({ padding: 5 }),
        arrow({ element: arrowRef.value }),
      ],
    }
  );
  //set floating position
  Object.assign(floating.value.style, {
    left: `${x}px`,
    top: `${y}px`,
  });
  //get arrow position
  console.log("aaa");

  //@ts-ignore
  const { x: arrowX, y: arrowY } = middlewareData.arrow;

  //set arrow in opposite position
  const opposedSide = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom",
  }[placement.split("-")[0]] as string;
  Object.assign(arrowRef.value.style, {
    left: arrowX ? `${arrowX}px` : "",
    top: arrowY ? `${arrowY}px` : "",
    bottom: "",
    right: "",
    [opposedSide]: "-4px",
  });
};
let flag = ref(true);
const show: showOrHideFun = () => {
  flag.value = true;
  isHidden.value = false;
  calculatePosition();
};
const hide: showOrHideFun = () => {
  flag.value = false;
  setTimeout(() => {
    if (!flag.value) {
      isHidden.value = true;
    }
  }, 300);
};
const handleClickFun = (e: Event) => {
  // isHidden.value = !isHidden.value;
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

const handleClick = (e: Event) => {
  console.log(e, "eee");
  // e.target即表示点击事件发生的元素
  if (reference.value && e.target) {
    //点击的是reference之外的元素就触发hide
    if (!reference.value?.contains(e.target as HTMLElement)) {
      hide();
    }
  }
};
</script>

<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
