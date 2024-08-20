# Form 表单

表单包含 `输入框`, `单选框`, `下拉选择`, `多选框` 等用户输入的组件。 使用表单，您可以收集、验证和提交数据。

## 典型表单

最基础的表单包括各种输入表单项，比如`input`、`select`、`radio`、`checkbox`等。

在每一个 `form` 组件中，你需要一个 `form-item` 字段作为输入项的容器，用于获取值与验证值。

::: warning
在这里我们暂时只提供了普通的输入框选项，后续功能还在开发中。

:::

<script setup>
    import Base from '../component/form/Base.vue'
    import Validate from '../component/form/Validate.vue'
</script>

::: tip
输入框左侧文字可以通过给`form-item`传递`label`属性或传递插槽，插槽的权级更高。

:::

<Base/>

::: details 点我查看代码

```vue
<template>
  <h-form :max-width="500">
    <h-form-item :label="'oooo'">
      <h-input></h-input>
    </h-form-item>
  </h-form>
  <h-form :max-width="500">
    <h-form-item :label="'oooo'">
      <h-input></h-input>
      <template #label>uuuu</template>
    </h-form-item>
  </h-form>
</template>
```

:::

## 表单校验

Form 组件允许你验证用户的输入是否符合规范，来帮助你找到和纠正错误。

Form 组件提供了表单验证的功能，只需为 `rules` 属性传入约定的验证规则，并将 `form-Item` 的 `prop` 属性设置为需要验证的特殊键值即可。 校验规则参见 `async-validator`

::: tip
我们提供了两层校验逻辑，可以在`form`处和`form-item`处分别进行校验。最后的校验将被合并。

:::


<Validate/>

::: details 点我查看代码

```vue
<template>
  <h-form
    :max-width="500"
    style="margin-left: 20px"
    ref="formRef"
    :model="state"
    :rules="{
      username: {
        min: 6,
        max: 10,
        message: '6-10位',
        trigger: ['change', 'blur'],
      },
    }"
  >
    <h-form-item
      prop="username"
      :required="true"
      :rules="[{ required: true, message: '请输入用户名', trigger: 'blur' }]"
    >
      <h-input placeholder="请输入用户名" v-model="state.username"></h-input>
      <template #label>用户名</template>
    </h-form-item>

    <h-form-item
      prop="password"
      :required="true"
      :rules="[{ required: true, message: '请输入密码', trigger: 'blur' }]"
    >
      <h-input
        placeholder="请输入密码"
        v-model="state.password"
        type="password"
      ></h-input>
      <template #label>密码</template>
    </h-form-item>
    <h-button @click="validateForm" type="primary">点击校验</h-button>
  </h-form>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";

const state = reactive({ username: "", password: "" });

const formRef = ref();
const validateForm = () => {
  const form = formRef.value;
  form?.validate((valid, error) => {
    console.log(valid, error);
  });
};
</script>
```

:::

## 自定义校验规则

`h-form`组件的校验是根据`async-validator`实现，可参照其进行校验规则的自定义。

::: tip
自定义的校验回调函数必须被调用。 校验规则参见 `async-validator`

:::

## Form API
### Form 属性
| 名称  | 类型   | 默认值    | 说明     |
| ----- | ------ | --------- | -------- |
| model | `object` |—— | 表单数据对象 |
| rules | `object` |—— | 表单验证规则 |
| showMessage | `boolean` |true | 是否显示校验错误信息 |
| max-width | `number`/`string` |—— | form组件宽度 |

### Form 事件
| 事件名  | 类型    | 说明     |
| ----- | ------  | -------- |
| validate | `Function`  | 任一表单项被校验后触发 |

## FormItem API
### FormItem 属性
| 名称  | 类型   | 默认值    | 说明     |
| ----- | ------ | --------- | -------- |
| prop |  `string` | —— | `model`的键名 |
| label | `string` | —— | 标签文本 |
| required | `boolean` | —— | 是否为必填项 |
| show-message | `boolean` | true | 是否显示校验错误信息 |
| rules | `object` | —— | 表单验证规则,具体配置见下表,详情可参照`async-validator` |
| formItem-validate-state | `success`/`error`/`''` | —— | formItem 校验的状态 |

### FormItem Rule
| 名称  | 类型   | 默认值    | 说明     |
| ----- | ------ | --------- | -------- |
| trigger | `blur`/`change` | —— |验证逻辑的触发方式 |

### FormItem 插槽
| 插槽名  | 类型     | 说明     |
| ----- | ------ | -------- |
| label |`object`| 标签位置显示的内容 |
| error |`object`| 验证错误信息的显示内容 |