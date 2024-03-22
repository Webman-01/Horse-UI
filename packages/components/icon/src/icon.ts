
//准备组件相关的属性和ts类型

import { ExtractPropTypes,PropType } from "vue"
/*
1.as const 让属性成为只读的
2.ExtractPropTypes:从运行时的 props 选项对象中提取 props 类型。提取到的类型是面向内部的
3.用于在用运行时 props 声明时给一个 prop 标注更复杂的类型定义
*/
export const iconProps = {
    color:String,
    size:[Number,String] as PropType<number|string>
} as const
export type IconProps = ExtractPropTypes<typeof iconProps>