<template>
    <div :class="bem.b()" ref="showHeight" @scroll="handleScroll">
      <div :class="bem.e('scroll-bar')" ref="scrollBarHeight"></div>
      <div
        :class="bem.e('scroll-list')"
        :style="{ transform: `translate3d(0, ${scrollTopDistance}px, 0)` }"
      >
        <template v-for="(node, index) in visibleData" :key="index">
          <slot :node="node"/>
        </template>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { computed, nextTick, onMounted, reactive, ref, watch } from 'vue';
  import { virtualizedProps } from './virtualizedType';
  import { createNameSpace } from '../../../utils/create';
  defineOptions({
    name:'h-virtualized'
  })
  const bem = createNameSpace('v');
  const props = defineProps(virtualizedProps);
  
  const showHeight = ref<HTMLElement | null>(null);
  const scrollBarHeight = ref<HTMLElement | null>(null);
  const scrollTopDistance = ref<number>(0);
  
  const state = reactive({
    start: 0,
    end: props.remain,
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
  
  //根据当前滚动的节点计算过去了几个树节点
  const handleScroll = () => {
    if (showHeight.value) {
      const scrollTop = showHeight.value.scrollTop;
      state.start = Math.floor(scrollTop / props.size);
      state.end = state.start + props.remain;
      scrollTopDistance.value =
        props.size * state.start - props.size * prevData.value;
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
    console.log('1111');
    
    nextTick(() => {
      initData();
    });
  });
  </script>