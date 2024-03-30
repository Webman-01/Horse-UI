
import { createApp } from "vue";

import App from "./App.vue";
import Icon from "../../packages/components/icon";
import Tree from "../../packages/components/tree"
import '../../packages/theme-chalk/src/index.scss'
const app = createApp(App);
const plugins = [Icon,Tree];
plugins.forEach((item) => {
  app.use(item);
});

app.mount("#app");
