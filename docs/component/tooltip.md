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
  <h-tooltip
    :placement="'right'"
    :content="'horse ui'"
    :trigger="'click'"
    :effect="'light'"
  >
    <h-button type="primary">left-start</h-button>
    <template #content> this is the horse-ui hahahah </template>
  </h-tooltip>

   <h-tooltip
    :placement="'right'"
    :content="'horse ui'"
    :trigger="'click'"
    :effect="'light'"
  >
    <h-button type="primary">left</h-button>
    <template #content> this is the horse-ui hahahah </template>
  </h-tooltip>

  <h-tooltip
    :placement="'right'"
    :content="'horse ui'"
    :trigger="'click'"
    :effect="'light'"
  >
    <h-button type="primary">left-end</h-button>
    <template #content> this is the horse-ui hahahah </template>
  </h-tooltip>

  <h-tooltip
    :placement="'right'"
    :content="'horse ui'"
    :trigger="'click'"
    :effect="'light'"
  >
    <h-button type="primary">right-start</h-button>
    <template #content> this is the horse-ui hahahah </template>
  </h-tooltip>

   <h-tooltip
    :placement="'right'"
    :content="'horse ui'"
    :trigger="'click'"
    :effect="'light'"
  >
    <h-button type="primary">right</h-button>
    <template #content> this is the horse-ui hahahah </template>
  </h-tooltip>

   <h-tooltip
    :placement="'right'"
    :content="'horse ui'"
    :trigger="'click'"
    :effect="'light'"
  >
    <h-button type="primary">right-end</h-button>
    <template #content> this is the horse-ui hahahah </template>
  </h-tooltip>

   <h-tooltip
    :placement="'right'"
    :content="'horse ui'"
    :trigger="'click'"
    :effect="'light'"
  >
    <h-button type="primary">bottom-start</h-button>
    <template #content> this is the horse-ui hahahah </template>
  </h-tooltip>

   <h-tooltip
    :placement="'right'"
    :content="'horse ui'"
    :trigger="'click'"
    :effect="'light'"
  >
    <h-button type="primary">bottom</h-button>
    <template #content> this is the horse-ui hahahah </template>
  </h-tooltip>

   <h-tooltip
    :placement="'right'"
    :content="'horse ui'"
    :trigger="'click'"
    :effect="'light'"
  >
    <h-button type="primary">bottom-end</h-button>
    <template #content> this is the horse-ui hahahah </template>
  </h-tooltip>
</div>

<style>
.tooltip-box{
        width:100%;
        height:600px;
        border:1px solid #e2e2e3;
        border-radius:2%;
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
  width: 110px;
  margin-top: 10px;
}
</style>
    
::: details 点我查看代码
```vue 
<script setup lang="ts"></script>

<template>
<div class="tooltip-box">
  <h-tooltip
    :placement="'right'"
    :content="'horse ui'"
    :trigger="'click'"
    :effect="'light'"
  >
    <h-button type="primary">top-start</h-button>
    <template #content> this is the horse-ui hahahah </template>
  </h-tooltip>

   <h-tooltip
    :placement="'right'"
    :content="'horse ui'"
    :trigger="'click'"
    :effect="'light'"
  >
    <h-button type="primary">top-end</h-button>
    <template #content> this is the horse-ui hahahah </template>
  </h-tooltip>

  <h-tooltip
    :placement="'right'"
    :content="'horse ui'"
    :trigger="'click'"
    :effect="'light'"
  >
    <h-button type="primary">left-start</h-button>
    <template #content> this is the horse-ui hahahah </template>
  </h-tooltip>

   <h-tooltip
    :placement="'right'"
    :content="'horse ui'"
    :trigger="'click'"
    :effect="'light'"
  >
    <h-button type="primary">left</h-button>
    <template #content> this is the horse-ui hahahah </template>
  </h-tooltip>

  <h-tooltip
    :placement="'right'"
    :content="'horse ui'"
    :trigger="'click'"
    :effect="'light'"
  >
    <h-button type="primary">left-end</h-button>
    <template #content> this is the horse-ui hahahah </template>
  </h-tooltip>

  <h-tooltip
    :placement="'right'"
    :content="'horse ui'"
    :trigger="'click'"
    :effect="'light'"
  >
    <h-button type="primary">right-start</h-button>
    <template #content> this is the horse-ui hahahah </template>
  </h-tooltip>

   <h-tooltip
    :placement="'right'"
    :content="'horse ui'"
    :trigger="'click'"
    :effect="'light'"
  >
    <h-button type="primary">right</h-button>
    <template #content> this is the horse-ui hahahah </template>
  </h-tooltip>

   <h-tooltip
    :placement="'right'"
    :content="'horse ui'"
    :trigger="'click'"
    :effect="'light'"
  >
    <h-button type="primary">right-end</h-button>
    <template #content> this is the horse-ui hahahah </template>
  </h-tooltip>

   <h-tooltip
    :placement="'right'"
    :content="'horse ui'"
    :trigger="'click'"
    :effect="'light'"
  >
    <h-button type="primary">bottom-start</h-button>
    <template #content> this is the horse-ui hahahah </template>
  </h-tooltip>

   <h-tooltip
    :placement="'right'"
    :content="'horse ui'"
    :trigger="'click'"
    :effect="'light'"
  >
    <h-button type="primary">bottom</h-button>
    <template #content> this is the horse-ui hahahah </template>
  </h-tooltip>

   <h-tooltip
    :placement="'right'"
    :content="'horse ui'"
    :trigger="'click'"
    :effect="'light'"
  >
    <h-button type="primary">bottom-end</h-button>
    <template #content> this is the horse-ui hahahah </template>
  </h-tooltip>
  </div>
</template>
```
:::

<script setup lang="ts">

</script>

## API

| 名称  | 类型   | 默认值    | 说明     |
| ----- | ------ | --------- | -------- |
| color | string | undefined | 图标颜色 |
| Size  | String | undefined | 图标大小 |
