import { ExtractPropTypes, PropType } from "vue";

export enum Size {
  Small = "small",
  Large = "large",
  Default = "default",
}
export enum Type {
  Primary = "primary",
  Success = "success",
  Warning = "warning",
  Danger = "danger",
  Info = "info",
  Default = "default",
}
export enum NativeType {
  Button = "button",
  Submit = "submit",
  Reset = "reset",
}
export type Placement = "left" | "right";
//定义传给button组件的属性
export const buttonProps = {
  size: String as PropType<Size>,
  type: {
    type: String as PropType<Type>,
    //自定义校验器
    validator: (value: Type): boolean => {
      return Object.values(Type).includes(value as Type);
    },
    default: Type.Default,
  },
  round: Boolean,
  loading: Boolean,
  disabled: Boolean,
  nativeType: {
    type: String as PropType<NativeType>,
    default: NativeType.Button,
  },
  iconPlacement: {
    type: String as PropType<Placement>,
    default: "left",
  },
} as const;
//button组件的事件
export const buttonEmits = {
  click: (event: MouseEvent) => event instanceof MouseEvent,
  mousedown: (event: MouseEvent) => event instanceof MouseEvent,
  mouseup: (event: MouseEvent) => event instanceof MouseEvent,
};

//导出
export type ButtonProps = ExtractPropTypes<typeof buttonProps>
export type ButtonEmits = typeof buttonEmits
