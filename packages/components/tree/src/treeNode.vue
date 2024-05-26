<template>
  <div
    :class="[
      bem.b(),
      bem.is('selected', isSelected),
      bem.is('disabled', node?.disabled),
    ]"
  >
    <div
      :class="[bem.e('content')]"
      :style="{ paddingLeft: `${node.level * 16}px` }"
    >
      <!-- 被选为展开且不是叶子节点时展开 -->
      <span
        @click="handleExpand"
        :class="[
          bem.e('expand-icon'),
          { expanded: expanded && !node?.isLeaf },
          bem.is('leaf', node?.isLeaf),
        ]"
        v-if="node?.label !== ''"
      >
        <h-icon size="12">
          <CaretForwardSharp v-if="!isLoading"></CaretForwardSharp>
          <Reload v-else class="loading"></Reload>
        </h-icon>
      </span>
      
      <h-checkbox
        v-if="showCheckbox"
        v-model:modelVal="checked"
        :disabled="disabled"
        :indeterminate="indeterminate"
        @change="handleCheckboxChange"
      ></h-checkbox>
      <span @click="handleSelected" :class="bem.e('label')">
        <HTreeNodeContent :node="node"></HTreeNodeContent>
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { CaretForwardSharp, Reload } from "@vicons/ionicons5";
import HIcon from "../../../components/icon";
import HTreeNodeContent from "./tree-node-content";
import { createNameSpace } from "../../../utils/create";
import { TreeNode, injectTreeKey, treeNodeEmits, treeNodeProps } from "./tree";
import { computed, inject } from "vue";
import HCheckbox from "../../../components/checkbox";

const bem = createNameSpace("tree-node");
//针对类型的props和emit声明
const props = defineProps(treeNodeProps);
const emit = defineEmits(treeNodeEmits);
function handleExpand() {
  emit("toggle", props.node!);
}
//是否在加载
const isLoading = computed(() => {
  return props.loadingKeys?.has((props.node as TreeNode).treeKey);
});
//是否选中
const isSelected = computed(() => {
  return props.selectedKeys.includes(props.node?.treeKey);
});
//处理选中节点
function handleSelected() {
  if (props.node?.disabled) return;
  emit("select", props.node!);
}
//注入插槽
inject(injectTreeKey);

function handleCheckboxChange(val: boolean) {
  emit("check", props.node as TreeNode, val);
}
</script>
<style scoped></style>
