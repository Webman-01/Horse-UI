# tooltip 文字提示

常用于展示鼠标 hover 时的提示信息。

::: tip
在这里我们提供 9 种不同方向的展示方式，可以通过以下完整示例来理解，选择你要的效果

:::

- 使用 `content`属性来决定 hover 时的提示信息。
- 由 `placement` 属性决定展示效果： `placement`属性值为：[方向]-[对齐位置]；四个方向：`top`、`left`、`right`、`bottom`；三种对齐位置：`start`, `end`，默认为空。
- 如 `placement="left-end"`，则提示信息出现在目标元素的左侧，且提示信息的底部与目标元素的底部对齐。

## 使用 tooltip

<div class="tooltip-box">
<!-- 第一行 -->
    <div class="row center">
   <h-tooltip
    :placement="'top-start'"
    :content="'horse ui'"
    :trigger="'hover'"
    :effect="'light'"
    class="box-item"
  >
    <h-button type="primary">top-start</h-button>
    <template #content> this is the horse-ui</template>
  </h-tooltip>

  <h-tooltip
    :placement="'top'"
    :content="'horse ui'"
    :trigger="'hover'"
    :effect="'light'"
    class="box-item"
  >
    <h-button type="primary">top</h-button>
    <template #content> this is the horse-ui</template>
  </h-tooltip>

   <h-tooltip
    :placement="'top-end'"
    :content="'horse ui'"
    :trigger="'hover'"
    :effect="'light'"
    class="box-item"
  >
    <h-button type="primary">top-end</h-button>
    <template #content> this is the horse-ui</template>
  </h-tooltip>
    </div>
<!-- 第二行 -->
<div class="row">
  <h-tooltip
    :placement="'left-start'"
    :content="'horse ui'"
    :trigger="'hover'"
    :effect="'light'"
    class='box-item'
  >
    <h-button type="primary">left-start</h-button>
    <template #content> this is the horse-ui </template>
  </h-tooltip>

   <h-tooltip
    :placement="'right-start'"
    :content="'horse ui'"
    :trigger="'hover'"
    :effect="'light'"
     class='box-item'
  >
    <h-button type="primary">right-start</h-button>
    <template #content> this is the horse-ui</template>
  </h-tooltip>
</div>
<!-- 第三行 -->
<div class="row">
  <h-tooltip
    :placement="'left'"
    :content="'horse ui'"
    :trigger="'hover'"
    :effect="'light'"
     class='box-item'
  >
    <h-button type="primary">left</h-button>
    <template #content> this is the horse-ui</template>
  </h-tooltip>

  <h-tooltip
    :placement="'right'"
    :content="'horse ui'"
    :trigger="'hover'"
    :effect="'light'"
     class='box-item'
  >
    <h-button type="primary">right</h-button>
    <template #content> this is the horse-ui</template>
  </h-tooltip>
</div>
<!-- 第四行 -->
<div class="row">
   <h-tooltip
    :placement="'left-end'"
    :content="'horse ui'"
    :trigger="'hover'"
    :effect="'light'"
     class='box-item'
  >
    <h-button type="primary">left-end</h-button>
    <template #content> this is the horse-ui</template>
  </h-tooltip>

   <h-tooltip
    :placement="'right-end'"
    :content="'horse ui'"
    :trigger="'hover'"
    :effect="'light'"
     class='box-item'
  >
    <h-button type="primary">right-end</h-button>
    <template #content> this is the horse-ui</template>
  </h-tooltip>
</div>
<!-- 第五行 -->
<div class="row center">
   <h-tooltip
    :placement="'bottom-start'"
    :content="'horse ui'"
    :trigger="'hover'"
    :effect="'light'"
     class='box-item'
  >
    <h-button type="primary">bottom-start</h-button>
    <template #content> this is the horse-ui</template>
  </h-tooltip>

   <h-tooltip
    :placement="'bottom'"
    :content="'horse ui'"
    :trigger="'hover'"
    :effect="'light'"
     class='box-item'
  >
    <h-button type="primary">bottom</h-button>
    <template #content> this is the horse-ui</template>
  </h-tooltip>

   <h-tooltip
    :placement="'bottom-end'"
    :content="'horse ui'"
    :trigger="'hover'"
    :effect="'light'"
     class='box-item'
  >
    <h-button type="primary">bottom-end</h-button>
    <template #content> this is the horse-ui</template>
  </h-tooltip>
  </div>
</div>

<style>
.tooltip-box{
        width:75%;
    }
.tooltip-box .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tooltip-box .center {
  justify-content: center;
}
.tooltip-box .box-item {
 display:flex;
 margin-left:12px;
 margin-top:20px;
}
</style>
    
::: details 点我查看代码
```vue 
<script setup lang="ts"></script>

<template>
<div class="tooltip-box">
    <!-- 第一行 -->
    <div class="row center">
      <h-tooltip
        :placement="'top-start'"
        :content="'horse ui'"
        :trigger="'hover'"
        :effect="'light'"
        class="box-item"
      >
        <h-button type="primary">top-start</h-button>
        <template #content> this is the horse-ui</template>
      </h-tooltip>

      <h-tooltip
        :placement="'top'"
        :content="'horse ui'"
        :trigger="'hover'"
        :effect="'light'"
        class="box-item"
      >
        <h-button type="primary">top</h-button>
        <template #content> this is the horse-ui</template>
      </h-tooltip>

      <h-tooltip
        :placement="'top-end'"
        :content="'horse ui'"
        :trigger="'hover'"
        :effect="'light'"
        class="box-item"
      >
        <h-button type="primary">top-end</h-button>
        <template #content> this is the horse-ui</template>
      </h-tooltip>
    </div>
    <!-- 第二行 -->
    <div class="row">
      <h-tooltip
        :placement="'left-start'"
        :content="'horse ui'"
        :trigger="'hover'"
        :effect="'light'"
        class="box-item"
      >
        <h-button type="primary">left-start</h-button>
        <template #content> this is the horse-ui </template>
      </h-tooltip>

      <h-tooltip
        :placement="'right-start'"
        :content="'horse ui'"
        :trigger="'hover'"
        :effect="'light'"
        class="box-item"
      >
        <h-button type="primary">right-start</h-button>
        <template #content> this is the horse-ui</template>
      </h-tooltip>
    </div>
    <!-- 第三行 -->
    <div class="row">
      <h-tooltip
        :placement="'left'"
        :content="'horse ui'"
        :trigger="'hover'"
        :effect="'light'"
        class="box-item"
      >
        <h-button type="primary">left</h-button>
        <template #content> this is the horse-ui</template>
      </h-tooltip>

      <h-tooltip
        :placement="'right'"
        :content="'horse ui'"
        :trigger="'hover'"
        :effect="'light'"
        class="box-item"
      >
        <h-button type="primary">right</h-button>
        <template #content> this is the horse-ui</template>
      </h-tooltip>
    </div>
    <!-- 第四行 -->
    <div class="row">
      <h-tooltip
        :placement="'left-end'"
        :content="'horse ui'"
        :trigger="'hover'"
        :effect="'light'"
        class="box-item"
      >
        <h-button type="primary">left-end</h-button>
        <template #content> this is the horse-ui</template>
      </h-tooltip>

      <h-tooltip
        :placement="'right-end'"
        :content="'horse ui'"
        :trigger="'hover'"
        :effect="'light'"
        class="box-item"
      >
        <h-button type="primary">right-end</h-button>
        <template #content> this is the horse-ui</template>
      </h-tooltip>
    </div>
    <!-- 第五行 -->
    <div class="row center">
      <h-tooltip
        :placement="'bottom-start'"
        :content="'horse ui'"
        :trigger="'hover'"
        :effect="'light'"
        class="box-item"
      >
        <h-button type="primary">bottom-start</h-button>
        <template #content> this is the horse-ui</template>
      </h-tooltip>

      <h-tooltip
        :placement="'bottom'"
        :content="'horse ui'"
        :trigger="'hover'"
        :effect="'light'"
        class="box-item"
      >
        <h-button type="primary">bottom</h-button>
        <template #content> this is the horse-ui</template>
      </h-tooltip>

      <h-tooltip
        :placement="'bottom-end'"
        :content="'horse ui'"
        :trigger="'hover'"
        :effect="'light'"
        class="box-item"
      >
        <h-button type="primary">bottom-end</h-button>
        <template #content> this is the horse-ui</template>
      </h-tooltip>
    </div>
  </div>
  <style>
    .tooltip-box{
        width:75%;
    }
    .tooltip-box .row {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .tooltip-box .center {
        justify-content: center;
    }
    .tooltip-box .box-item {
        display:flex;
        margin-left:12px;
        margin-top:20px;
    }
  </style> 
</template>
```
:::

## API

| 名称  | 类型   | 默认值    | 说明     |
| ----- | ------ | --------- | -------- |
| trigger | enum（可选click点击触发） | hover | 如何触发Tooltip |
| content  | string | this is a tooltip | 显示的内容，也可被 slot#content 覆盖 |
| placement | string | bottom | Tooltip 组件出现的位置 |
| effect | string | dark | Tooltip 组件颜色 |
