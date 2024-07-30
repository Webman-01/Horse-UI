# Button 按钮

常用的操作按钮。

## 基础用法

使用 type、size、round 来定义按钮的样式。

<style>
    .h-button {
      margin-right: 10px;
      margin-top: 10px;
    }
  </style>
  <div class="button-box">
    <h-button type="info">Info</h-button>
    <h-button type="success">Success</h-button>
    <h-button type="warning">Warning</h-button>
    <h-button type="default">Default</h-button>
    <h-button type="danger">Danger</h-button>
    <h-button type="primary">Primary</h-button>
  </div>
  <div class="button-box">
    <h-button size="small">Small</h-button>
    <h-button size="large">Large</h-button>
    <h-button size="default">Default</h-button>
  </div>
  <div class="button-box">
    <h-button type="info" :round="true">Info</h-button>
    <h-button type="success" :round="true">Success</h-button>
    <h-button type="warning" :round="true">Warning</h-button>
    <h-button type="default" :round="true">Default</h-button>
    <h-button type="danger" :round="true">Danger</h-button>
    <h-button type="primary" :round="true">Primary</h-button>
  </div>

::: details 点我查看代码

```vue
  <div class="button-box">
    <h-button type="info">Info</h-button>
    <h-button type="success">Success</h-button>
    <h-button type="warning">Warning</h-button>
    <h-button type="default">Default</h-button>
    <h-button type="danger">Danger</h-button>
    <h-button type="primary">Primary</h-button>
  </div>
  <div class="button-box">
    <h-button size="small">Small</h-button>
    <h-button size="large">Large</h-button>
    <h-button size="default">Default</h-button>
  </div>
  <div class="button-box">
    <h-button type="info" :round="true">Info</h-button>
    <h-button type="success" :round="true">Success</h-button>
    <h-button type="warning" :round="true">Warning</h-button>
    <h-button type="default" :round="true">Default</h-button>
    <h-button type="danger" :round="true">Danger</h-button>
    <h-button type="primary" :round="true">Primary</h-button>
  </div>
  <style>
    .h-button {
      margin-right: 10px;
      margin-top: 10px;
    }
  </style>

```

:::
## 禁用状态
你可以使用 disabled 属性来定义按钮是否被禁用。

使用 disabled 属性来控制按钮是否为禁用状态。 该属性接受一个 Boolean 类型的值。
<style>
    .h-button {
      margin-right: 10px;
      margin-top: 10px;
    }
  </style>
  <div class="button-box">
    <h-button type="info" :disabled="true">Info</h-button>
    <h-button type="success" :disabled="true">Success</h-button>
    <h-button type="warning" :disabled="true">Warning</h-button>
    <h-button type="default" :disabled="true">Default</h-button>
    <h-button type="danger" :disabled="true">Danger</h-button>
    <h-button type="primary" :disabled="true">Primary</h-button>
  </div>

::: details 点我查看代码

```vue
    <div class="button-box">
     <h-button type="info" :disabled="true">Info</h-button>
     <h-button type="success" :disabled="true">Success</h-button>
     <h-button type="warning" :disabled="true">Warning</h-button>
     <h-button type="default" :disabled="true">Default</h-button>
     <h-button type="danger" :disabled="true">Danger</h-button>
     <h-button type="primary" :disabled="true">Primary</h-button>
  </div>
```

:::

## 加载状态
你可以使用 loading 属性来定义按钮是否被禁用。

使用 loading 属性来控制按钮是否为禁用状态。 该属性接受一个 Boolean 类型的值。

::: tip
在这里我们需要设置`icon-placement`属性来展示`loading`图标的位置。该属性有两个可选项，分别为`left`和`right`。
:::

  <style>
    .h-button {
      margin-right: 10px;
      margin-top: 15px;
    }
  </style>
  <div class="button-box">
    <h-button type="info" :loading="true" icon-placement="left">Info</h-button>
    <h-button type="success" :loading="true" icon-placement="left">Success</h-button>
    <h-button type="warning" :loading="true" icon-placement="left">Warning</h-button>
    <h-button type="default" :loading="true" icon-placement="left">Default</h-button>
    <h-button type="danger" :loading="true" icon-placement="left">Danger</h-button>
    <h-button type="primary" :loading="true" icon-placement="left">Primary</h-button>
  </div>
  <div class="button-box">
    <h-button type="info" :loading="true" icon-placement="right">Info</h-button>
    <h-button type="success" :loading="true" icon-placement="right">Success</h-button>
    <h-button type="warning" :loading="true" icon-placement="right">Warning</h-button>
    <h-button type="default" :loading="true" icon-placement="right">Default</h-button>
    <h-button type="danger" :loading="true" icon-placement="right">Danger</h-button>
    <h-button type="primary" :loading="true" icon-placement="right">Primary</h-button>
  </div>

  ::: details 点我查看代码

```vue
   <style>
    .h-button {
      margin-right: 10px;
      margin-top: 15px;
    }
  </style>
  <div class="button-box">
    <h-button type="info" :loading="true" icon-placement="left">Info</h-button>
    <h-button type="success" :loading="true" icon-placement="left">Success</h-button>
    <h-button type="warning" :loading="true" icon-placement="left">Warning</h-button>
    <h-button type="default" :loading="true" icon-placement="left">Default</h-button>
    <h-button type="danger" :loading="true" icon-placement="left">Danger</h-button>
    <h-button type="primary" :loading="true" icon-placement="left">Primary</h-button>
  </div>
  <div class="button-box">
    <h-button type="info" :loading="true" icon-placement="right">Info</h-button>
    <h-button type="success" :loading="true" icon-placement="right">Success</h-button>
    <h-button type="warning" :loading="true" icon-placement="right">Warning</h-button>
    <h-button type="default" :loading="true" icon-placement="right">Default</h-button>
    <h-button type="danger" :loading="true" icon-placement="right">Danger</h-button>
    <h-button type="primary" :loading="true" icon-placement="right">Primary</h-button>
  </div>
```

:::

## 图标按钮
使用图标为按钮添加更多的含义。 你也可以单独使用图标不添加文字来节省显示区域占用。使用插槽来传递图标给按钮。

<script setup lang="ts">
import { ShareSocial,ApertureOutline,SearchOutline,CloudUploadOutline } from "@vicons/ionicons5";
</script>
<div>
    <h-button type="primary" icon-placement="right">
        <template #icon>
            <h-icon>
                <ShareSocial></ShareSocial>
            </h-icon>
        </template>
    </h-button>
    <h-button type="primary" icon-placement="left">
        <template #icon>
            <h-icon>
                <ApertureOutline></ApertureOutline>
            </h-icon>
        </template>
    </h-button>
    <h-button type="primary" icon-placement="left">
    Search
        <template #icon>
            <h-icon>
                <SearchOutline></SearchOutline>
            </h-icon>
        </template>
    </h-button>
     <h-button type="primary" icon-placement="right">
    Upload
        <template #icon>
            <h-icon>
                <CloudUploadOutline></CloudUploadOutline>
            </h-icon>
        </template>
    </h-button>
</div>

  ::: details 点我查看代码

```vue
<script setup lang="ts">
import { ShareSocial,ApertureOutline,SearchOutline,CloudUploadOutline } from "@vicons/ionicons5";
</script>
<div>
    <h-button type="primary" icon-placement="right">
        <template #icon>
            <h-icon>
                <ShareSocial></ShareSocial>
            </h-icon>
        </template>
    </h-button>
    <h-button type="primary" icon-placement="left">
        <template #icon>
            <h-icon>
                <ApertureOutline></ApertureOutline>
            </h-icon>
        </template>
    </h-button>
    <h-button type="primary" icon-placement="left">
    Search
        <template #icon>
            <h-icon>
                <SearchOutline></SearchOutline>
            </h-icon>
        </template>
    </h-button>
     <h-button type="primary" icon-placement="right">
    Upload
        <template #icon>
            <h-icon>
                <CloudUploadOutline></CloudUploadOutline>
            </h-icon>
        </template>
    </h-button>
</div>
```

:::

## Button API
### Button 属性
| 名称  | 类型   | 默认值    | 说明     |
| ----- | ------ | --------- | -------- |
| type | `enum` | undefined | 类型 |
| size  | `enum` | undefined | 尺寸 |
| round  | `boolean` | false | 是否为圆角按钮 |
| loading  | `boolean` | false | 是否为加载中状态 |
| disabled  | `boolean` | false | 是否为禁用状态 |
| native-type | `enum ('button' / 'submit' / 'reset')` | button | 原生type属性 |
| icon  | `Component` | undefined | 图标组件 |

### Button 插槽

| 插槽名称      | 说明     |
| -----  | -------- |
| default  |  自定义默认内容   |
| icon  |  自定义图标组件   |

### Button 事件
| 事件名称      | 说明     |
| -----  | -------- |
| click |  点击事件   |
| mousedown  |  鼠标按下   |