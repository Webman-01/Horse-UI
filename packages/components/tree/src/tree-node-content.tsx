import { defineComponent, inject } from "vue";
import { injectTreeKey, treeNodeContentProps } from "./tree";

export default defineComponent({
  name: "HTreeNodeContent",
  props: treeNodeContentProps,
  setup(props) {
    //把提供的插槽注入进来
    const treeContext = inject(injectTreeKey);
    const node = props.node;
    return () => {
      return treeContext?.slots.default
        ? treeContext.slots.default({ node: node })
        : node!.label;
    };
  },
});
