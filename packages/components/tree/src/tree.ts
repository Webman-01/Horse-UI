import { ExtractPropTypes, InjectionKey, PropType, SetupContext } from "vue";
/*
1.as const 把treeProps转换为只读的
2.ExtractPropTypes用于提取props的类型
3.PropType用于对props类型做明确定义
4.Partial:把一个对象的所有属性标记为可选
*/

//数据格式化之后的类型
export interface TreeNode extends Required<TreeOptions> {
  //层级
  level: number;
  //原数据
  rawNode: TreeOptions;
  //孩子节点
  children: TreeNode[];
  //是否是叶子节点
  isLeaf: boolean;
  //父节点是谁
  parentKey: Key | undefined;
}

export type Key = string | number;
//给树组件传入参数的类型选项(名称一定要匹配)
export interface TreeOptions {
  label?: Key;
  treeKey?: Key;
  children?: TreeOptions[];
  [treeKey: string]: unknown; //任意接口
  isLeaf?: boolean;
  disabled?: boolean; //节点是否可以被选中
}
// vue组件的props(给tree.vue传的字段)
export const treeProps = {
  data: {
    type: Array as PropType<TreeOptions[]>, //把定义好的类型传给data
    default: () => [],
  },
  //默认哪些项展开
  defaultExpandedKeys: {
    type: Array as PropType<Key[]>,
    default: () => [],
  },
  label: {
    type: String,
    default: "label",
  },
  treeKey: {
    type: String,
    default: "treeKey",
  },
  children: {
    type: String,
    default: "children",
  },
  lazy: Function as PropType<(node: TreeOptions) => Promise<TreeOptions[]>>,
  selectedKeys: {
    type: Array as PropType<Key[]>,
  },
  selectable: {
    type: Boolean,
    default: true,
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  defaultCheckedKeys: {
    type: Array as PropType<Key[]>,
    default: () => [],
  },
  showCheckbox: {
    type: Boolean,
    default: false,
  },
} as const;

//treeNode组件的类型(用于展示的组件)（给treeNode传的字段）
export const treeNodeProps = {
  node: {
    type: Object as PropType<NonNullable<TreeNode>>,
    required: true,
  },
  expanded: {
    type: Boolean,
    required: true,
  },
  loadingKeys: {
    type: Object as PropType<Set<Key>>,
    required: true,
  },
  selectedKeys: {
    type: Array,
    default: () => [],
  },
  showCheckbox: {
    type: Boolean,
    default: false,
  },
  dragEventKey:{
    type:Object as PropType<Set<Key>>,
  },
  checked: Boolean,
  disabled: Boolean,
  indeterminate: Boolean,
  draggable:Boolean
};
//传递给树组件的事件类型
export const treeNodeEmits = {
  toggle: (node: TreeNode) => node,
  select: (node: TreeNode) => node,
  check: (node: TreeNode, val: boolean) => typeof val === "boolean",
};
//实现节点选择的事件类型
export const treeSelectEmit = {
  "update:selectedKeys": (keys: Key[]) => keys,
};
//提取出数组件的类型
export type TreeProps = Partial<ExtractPropTypes<typeof treeProps>>;

//插槽的类型
export interface TreeContext {
  slots: SetupContext["slots"];
}
//提供出去的属性
export const injectTreeKey: InjectionKey<TreeContext> = Symbol();

//tree-node-content组件类型
export const treeNodeContentProps = {
  node: {
    type: Object as PropType<TreeNode>,
    required: true,
  },
};
