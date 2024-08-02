# Checkbox 多选框

在一组备选项中进行多选。

## 基础用法

单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。

::: tip
在这里我们提供 2 种不同的`label`展示方案，可以在组件中直接传入`label`属性来展示标签，也可以通过在`<h-checkbox ></h-checkbox>`中间填入文字来展示，第二种方式的权级高于第一种。

:::

<!-- 一个文件中只能有一个顶级script标签 -->
<script setup>
    import Base from '/Users/mamingzhe/Horse UI/docs/component/checkbox/Base.vue'
    import Disabled from '/Users/mamingzhe/Horse UI/docs/component/checkbox/Disabled.vue'
    import Indeterminate from '/Users/mamingzhe/Horse UI/docs/component/checkbox/Indeterminate.vue'
</script>
<Base/>

::: details 点我查看代码

```vue
<template>
  <h-checkbox v-model="check1" label="option1">option1</h-checkbox>
  <h-checkbox v-model="check2" label="option1">option2</h-checkbox>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const check1 = ref<boolean>(false);
const check2 = ref<boolean>(false);
</script>
<style scoped>
.h-checkbox {
  margin-left: 15px;
}
</style>
```

:::

## 禁用状态

多选框不可用状态。

设置 `disabled`属性即可。
<Disabled/>

::: details 点我查看代码

```vue
<template>
  <h-checkbox v-model="check1" label="option1" :disabled="true"></h-checkbox>
  <h-checkbox v-model="check2" label="option2"></h-checkbox>
</template>

<script setup lang="ts">
import { ref } from "vue";
const check1 = ref<boolean>(false);
const check2 = ref<boolean>(true);
</script>
```

:::

## 中间状态

indeterminate 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果

<Indeterminate/>
::: details 点我查看代码

```vue
<template>
  <h-checkbox
    v-model="check1"
    label="option1"
    :indeterminate="indeterminate"
  ></h-checkbox>
  <h-checkbox
    v-model="check2"
    label="option2"
    :indeterminate="indeterminate"
  ></h-checkbox>
</template>

<script setup lang="ts">
import { ref } from "vue";
const check1 = ref<boolean>(false);
const check2 = ref<boolean>(true);
const indeterminate = ref<boolean>(true);
</script>
```

:::

### Checkbox 属性
| 名称  | 类型   | 默认值    | 说明     |
| ----- | ------ | --------- | -------- |
| model-value / v-model | `string`/`number`/`boolean` | undefined | 选中项绑定值 |
| label  | `string` | undefined | checkbox后的描述名称 |
| disabled  | `boolean` | false | 是否禁用 |
| indeterminate  | `boolean` | false | 设置不确定状态，仅负责样式控制 |

### Checkbox 事件
| 事件名  |   类型   | 说明     |
| ----- |  --------- | -------- |
| change  |   `Function`  |  当绑定值变化时触发的事件    |