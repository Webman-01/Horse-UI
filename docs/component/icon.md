# Icon 图标

Horse-UI 使用 xicons 作为图标库

```
pnpm install @vicons/ionicons5

```

## 基础用法

  <h-icon :color="'red'" :size="40">
    <Accessibility></Accessibility>
  </h-icon>
  <h-icon :color="'purple'" :size="20">
    <Accessibility></Accessibility>
  </h-icon>

```vue
<script setup lang="ts">
import { Accessibility } from "@vicons/ionicons5";
</script>

<template>
  <h-icon :color="'red'" :size="40">
    <Accessibility></Accessibility>
  </h-icon>
  <br/>
  <h-icon :color="'purple'" :size="20">
    <Accessibility></Accessibility>
  </h-icon>
</template>
```

<script setup lang="ts">
import {Accessibility} from '@vicons/ionicons5'
</script>

## Icon API
| 名称  | 类型   | 默认值    | 说明     |
| ----- | ------ | --------- | -------- |
| color | `string` | undefined | 图标颜色 |
| Size  | `string` | undefined | 图标大小 |

