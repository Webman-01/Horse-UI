# button 按钮

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
    <h-button type="info" round="true">Info</h-button>
    <h-button type="success" round="true">Success</h-button>
    <h-button type="warning" round="true">Warning</h-button>
    <h-button type="default" round="true">Default</h-button>
    <h-button type="danger" round="true">Danger</h-button>
    <h-button type="primary" round="true">Primary</h-button>
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
    <h-button type="info" round="true">Info</h-button>
    <h-button type="success" round="true">Success</h-button>
    <h-button type="warning" round="true">Warning</h-button>
    <h-button type="default" round="true">Default</h-button>
    <h-button type="danger" round="true">Danger</h-button>
    <h-button type="primary" round="true">Primary</h-button>
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
    <h-button type="info" disabled="true">Info</h-button>
    <h-button type="success" disabled="true">Success</h-button>
    <h-button type="warning" disabled="true">Warning</h-button>
    <h-button type="default" disabled="true">Default</h-button>
    <h-button type="danger" disabled="true">Danger</h-button>
    <h-button type="primary" disabled="true">Primary</h-button>
  </div>

::: details 点我查看代码

```vue
    <div class="button-box">
     <h-button type="info" disabled="true">Info</h-button>
     <h-button type="success" disabled="true">Success</h-button>
     <h-button type="warning" disabled="true">Warning</h-button>
     <h-button type="default" disabled="true">Default</h-button>
     <h-button type="danger" disabled="true">Danger</h-button>
     <h-button type="primary" disabled="true">Primary</h-button>
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
    <h-button type="info" loading="true" icon-placement="left">Info</h-button>
    <h-button type="success" loading="true" icon-placement="left">Success</h-button>
    <h-button type="warning" loading="true" icon-placement="left">Warning</h-button>
    <h-button type="default" loading="true" icon-placement="left">Default</h-button>
    <h-button type="danger" loading="true" icon-placement="left">Danger</h-button>
    <h-button type="primary" loading="true" icon-placement="left">Primary</h-button>
  </div>
  <div class="button-box">
    <h-button type="info" loading="true" icon-placement="right">Info</h-button>
    <h-button type="success" loading="true" icon-placement="right">Success</h-button>
    <h-button type="warning" loading="true" icon-placement="right">Warning</h-button>
    <h-button type="default" loading="true" icon-placement="right">Default</h-button>
    <h-button type="danger" loading="true" icon-placement="right">Danger</h-button>
    <h-button type="primary" loading="true" icon-placement="right">Primary</h-button>
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
    <h-button type="info" loading="true" icon-placement="left">Info</h-button>
    <h-button type="success" loading="true" icon-placement="left">Success</h-button>
    <h-button type="warning" loading="true" icon-placement="left">Warning</h-button>
    <h-button type="default" loading="true" icon-placement="left">Default</h-button>
    <h-button type="danger" loading="true" icon-placement="left">Danger</h-button>
    <h-button type="primary" loading="true" icon-placement="left">Primary</h-button>
  </div>
  <div class="button-box">
    <h-button type="info" loading="true" icon-placement="right">Info</h-button>
    <h-button type="success" loading="true" icon-placement="right">Success</h-button>
    <h-button type="warning" loading="true" icon-placement="right">Warning</h-button>
    <h-button type="default" loading="true" icon-placement="right">Default</h-button>
    <h-button type="danger" loading="true" icon-placement="right">Danger</h-button>
    <h-button type="primary" loading="true" icon-placement="right">Primary</h-button>
  </div>
```

:::

## 图标按钮
使用图标为按钮添加更多的含义。 你也可以单独使用图标不添加文字来节省显示区域占用。使用插槽来传递图标给按钮。