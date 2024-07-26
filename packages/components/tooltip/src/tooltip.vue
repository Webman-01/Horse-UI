<template>
  <div style="display: inline-block;" v-on="outerEvents">
    <div ref="reference"  v-on="events">
      <slot></slot>
    </div>
    <div
      ref="floating"
      id="tooltip"
      style="position: absolute"
      v-show="!isHidden"
      v-on="tooltipEvents"
    >
      {{ props.content }}
      <!-- 箭头 -->
      <div ref="arrowRef" class="arrow" style="position: absolute"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { tooltipProps, triggerTypes } from "../src/tooltip";
import { onBeforeMount, onMounted, reactive, ref } from "vue";
import {
  offset,
  flip,
  shift,
  computePosition,
  arrow,
  Placement,
} from "@floating-ui/vue";
defineOptions({
  name: "h-tooltip",
});

const props = defineProps(tooltipProps);

const reference = ref();
const floating = ref();
const arrowRef = ref();
const isHidden = ref(true);
// 用events来保存click/hover对应的触发，并且绑定在触发区域对应的节点上
const events:Record<string,EventListener> = reactive({})  
const outerEvents:Record<string,EventListener> = reactive({})
const tooltipEvents:Record<string,EventListener> = reactive({})
onMounted(() => {
  chooseEvents()
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
  console.log('aaa');
  
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
let flag = ref(true)
const show = () => {
  console.log('show');
  flag.value = true
  isHidden.value = false;
  calculatePosition();
};
const hide = () => {
  console.log('hide');
  flag.value = false
  setTimeout(()=>{
    if(!flag.value){
      isHidden.value = true;
    }
  },300)
};
const chooseEvents = ()=>{
    if(props.trigger === triggerTypes.Hover){
      events['mouseenter'] = show
      tooltipEvents['mouseenter'] = show
      outerEvents['mouseleave'] = hide
    }else{
      events['click'] = handleClick
    }
}
</script>

<style scoped lang="scss">
#tooltip {
  /* width: max-content; */
  /* width: 80px;
  height: 30px; */
  background: #222;
  color: white;
  font-weight: bold;
  padding: 5px;
  border-radius: 4px;
  font-size: 90%;
  
  
}
.arrow {
  width: 8px;
  height: 8px;
  transform: rotate(45deg);
  background-color: greenyellow;
}
</style>
