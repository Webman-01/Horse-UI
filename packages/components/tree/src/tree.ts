import { ExtractPropTypes, PropType } from "vue";
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
}

type Key = string | number;
//给树组件传入参数的类型选项(名称一定要匹配)
export interface TreeOptions {
  label?: Key;
  treeKey?: Key;
  children?: TreeOptions[];
  [treeKey: string]: unknown; //任意接口
  isLeaf: boolean;
}
// vue组件的props
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
} as const;

//提取出数组件的类型
export type TreeProps = Partial<ExtractPropTypes<typeof treeProps>>;
