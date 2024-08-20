<!--
 * @Author: Webman-01 yyui268@qq.com
 * @Date: 2024-03-21 23:40:10
 * @LastEditors: Webman-01 yyui268@qq.com
 * @LastEditTime: 2024-03-21 23:40:16
 * @FilePath: /Horse UI/docs/guide/getStarted.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
# 快速开始

本节将介绍如何在项目中使用 Horse Ui。

## 用法

#### 完整引入
如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。

```js
// main.ts
import { createApp } from 'vue'
import HorseUi from 'horse-ui'
import 'horse-ui/theme-chalk/css/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(HorseUi)
app.mount('#app')
```

#### 按需引入
可以采用事例中的这种办法对组件库按需引入。
```js
// main.ts
import Button from "horse-ui/es/components/button";
import Tooltip from 'horse-ui/es/components/tooltip'
import Checkbox from 'horse-ui/es/components/checkbox'
const plugins = [
  Button,
  Tooltip,
  Checkbox,
];
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    plugins.forEach((item) => {
      app.use(item);
    });
  },
};

```