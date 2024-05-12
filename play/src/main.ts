import { createApp } from "vue";

import App from "./App.vue";
import Icon from "../../packages/components/icon";
import Tree from "../../packages/components/tree";
import Checkbox from "../../packages/components/checkbox";
import "../../packages/theme-chalk/src/index.scss";
const app = createApp(App);
const plugins = [Icon, Tree, Checkbox];
plugins.forEach((item) => {
  app.use(item);
});
app.mount("#app");
