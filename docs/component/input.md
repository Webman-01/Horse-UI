# Input 输入框

通过鼠标或键盘输入字符

::: warning
Input 为受控组件，它 总会显示 Vue 绑定值。

在正常情况下，`input` 的输入事件应该被正常响应。 它的处理程序应该更新组件的绑定值 (或使用 `v-model`)。 否则，输入框的值将不会改变。

不支持 `v-model` 修饰符。

:::

<script setup>
    import Base from '/Users/mamingzhe/Horse UI/docs/component/input/Base.vue'
    import Disabled from '/Users/mamingzhe/Horse UI/docs/component/input/Disabled.vue'
    import Clearable from '/Users/mamingzhe/Horse UI/docs/component/input/Clearable.vue'
    import Password from '/Users/mamingzhe/Horse UI/docs/component/input/Password.vue'
    import Complex from '/Users/mamingzhe/Horse UI/docs/component/input/Complex.vue'
</script>

## 基础用法

::: tip
在这里我们没有位 input 内置设置大小尺寸的功能，需要在外层包裹标签进行设置。

:::

<Base/>

::: details 点我查看代码

```vue
<template>
  <div style="width: 500px">
    <h-input v-model="inputWords" placeholder="Please input"> </h-input>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const inputWords = ref("");
</script>
```

:::

## 禁用状态

通过 `disabled` 属性指定是否禁用 input 组件

<Disabled/>

::: details 点我查看代码

```vue
<template>
  <div style="width: 500px">
    <h-input
      v-model="inputWords"
      placeholder="Please input"
      :disabled="true"
    ></h-input>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const inputWords = ref("");
</script>
```

:::

## 一键清空

使用`clearable`属性即可得到一个可一键清空的输入框
<Clearable/>

::: details 点我查看代码

```vue
<template>
  <div style="width: 500px">
    <h-input
      v-model="inputWords"
      placeholder="Please input"
      clearable
    ></h-input>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const inputWords = ref("");
</script>
```

:::

## 密码框

使用 `show-password` 属性即可得到一个可切换显示隐藏的密码框

<Password/>

::: details 点我查看代码

```vue
<template>
  <div style="width: 500px">
    <h-input
      v-model="inputWords"
      placeholder="Please input password"
      :show-password="true"
    >
    </h-input>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const inputWords = ref("");
```

:::

## 复合型输入框

可以在输入框中前置或后置一个元素，通常是标签或按钮。

可通过 `slot` 来指定在 Input 中分发的前置或者后置的内容。
<br/>
<br/>
<Complex/>

::: details 点我查看代码

```vue
<template>
  <div style="width: 500px">
    <h-input
      v-model="inputWords"
      placeholder="Please input"
    >
      <template #prefix>头部内容</template>
      <template #prepend>
        <h-icon>
          <Accessibility></Accessibility>
        </h-icon>
      </template>
      <template #append>
        <h-icon>
          <Accessibility></Accessibility>
        </h-icon>
      </template>
      <template #suffix>尾部内容</template>
    </h-input>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Accessibility } from "@vicons/ionicons5";

const inputWords = ref("");
```

:::

## Input API
### Input 属性
| 名称  | 类型   | 默认值    | 说明     |
| ----- | ------ | --------- | -------- |
| type  | `string`等（原生input类型） | text | 类型 |
| v-model  | `string`/ `number` | —— | 绑定值 |
| placeholder  | `string` | —— | 输入框占位文本 |
| clearable  | `boolean` | false | 是否显示清除按钮 |
| show-password | `boolean` | false | 是否显示切换密码图标 |
| disabled | `boolean` | false | 是否禁用 |
| readonly | `boolean` | false | 是否为只读 |

### Input 事件
| 事件名  | 类型     | 说明     |
| -----  | --------- | -------- |
| blur  | `Function` | 当选择器的输入框失去焦点时触发 |
| focus  | `Function` | 当选择器的输入框获得焦点时触发 |
| change  | `Function` | 仅当 modelValue 改变时，当输入框失去焦点或用户按Enter时触发 |
| input  | `Function` | 在 Input 值改变时触发 |
| clear  | `Function` | 在点击由 `clearable` 属性生成的清空按钮时触发|

### Input 插槽
| 插槽名  |  说明     |
| -----  | -------- |
| prefix  | 输入框头部内容 |
| suffix  | 输入框尾部内容 |
| prepend  | 输入框前置内容 |
| append  | 输入框后置内容 |

