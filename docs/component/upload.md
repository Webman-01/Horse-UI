# Upload 上传

通过点击或者拖拽上传文件。

<script setup>
    import Base from '/Users/mamingzhe/Horse UI/docs/component/upload/Base.vue'
    import Drag from '/Users/mamingzhe/Horse UI/docs/component/upload/Drag.vue'
</script>

## 基础用法

通过 slot 你可以传入自定义的上传按钮类型和文字提示

::: tip
可以通过`show-file-list`控制是否展示文件列表，默认为`true`。

:::

<Base/>

::: details 点我查看代码

```vue
<template>
  <h-upload
    multiple
    :before-upload="handleBeforeUpload"
    action="http://localhost:4000/upload"
    :show-file-list="true"
  >
    <h-button type="primary">click to upload</h-button>
  </h-upload>
</template>

<script setup lang="ts">
import { UploadRawFile } from "@uuio/components/upload";

//upload组件部分
const handleBeforeUpload = (rawFile: UploadRawFile) => {
  console.log(rawFile);
  return true;
};
</script>
```

:::

## 拖拽上传

<Drag/>

::: details 点我查看代码

```vue
<template>
  <h-upload
    multiple
    :before-upload="handleBeforeUpload"
    action="http://localhost:4000/upload"
    drag
    :show-file-list="true"
  >
    <HIcon :size="50">
      <CloudUploadOutline></CloudUploadOutline>
    </HIcon>
    <div class="h-upload__text">
      Drop file to here or
      <em>click to upload</em>
    </div>
  </h-upload>
</template>

<script setup lang="ts">
import { CloudUploadOutline } from "@vicons/ionicons5";
import { UploadRawFile } from "@uuio/components/upload";
import HIcon from "../../../packages/components/icon";

const handleBeforeUpload = (rawFile: UploadRawFile) => {
  console.log(rawFile);
  return true;
};
</script>
```

:::

## Upload API
### Upload 属性
| 名称  | 类型   | 默认值    | 说明     |
| ----- | ------ | --------- | -------- |
| action |`string` |# | 请求 URL |
| headers |`object` |—— | 设置上传的请求头部 |
| method |`string` |post | 设置上传请求方法 |
| multiple |`boolean` | false | 是否支持多选文件 |
| data |`object` | {} | 上传时附带的额外参数 |
| name |`string` | file | 上传的文件字段名 |
| accept |`string` | '' | 接受上传的文件类型 |
| show-file-list |`boolean` | true | 是否显示已上传文件列表 |
| drag |`boolean` | false | 是否启用拖拽上传 |
| on-preview |`Function` | —— | 点击文件列表中已上传的文件时的钩子 |
| on-change |`Function` | —— | 文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用 |
| on-progress |`Function` | —— | 文件上传时的钩子 |
| on-remove |`Function` | —— | 文件列表移除文件时的钩子 |
| on-success |`Function` | —— | 文件上传成功时的钩子 |
| on-error |`Function` | —— | 文件上传失败时的钩子 |
| before-upload |`Function` | —— | 上传文件之前的钩子，参数为上传的文件， 若返回false或者返回 Promise 且被 reject，则停止上传。 |
| before-remove |`Function` | —— | 删除文件之前的钩子，参数为上传的文件和文件列表， 若返回 false 或者返回 Promise 且被 reject，则停止删除。 |
| file-list |`array` | [] | 默认上传文件 |

### Upload 事件
| 事件名  | 类型     | 说明     |
| ----- | ------ | -------- |
| onUpdate:file-list | `Function` | 上传文件改变时触发 |