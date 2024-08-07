import { createApp } from "vue";

import App from "./App.vue";
import Icon from "../../packages/components/icon";
import Tree from "../../packages/components/tree";
import Checkbox from "../../packages/components/checkbox";
import Button from "../../packages/components/button";
import Input from "../../packages/components/input";
import UPload from "../../packages/components/upload";
import { FormItem, Form } from "../../packages/components/form";
import Tooltip from "../../packages/components/tooltip";
import "../../packages/theme-chalk/src/index.scss";
const app = createApp(App);
const plugins = [
  Icon,
  Tree,
  Checkbox,
  Button,
  Input,
  FormItem,
  Form,
  UPload,
  Tooltip,
];
plugins.forEach((item) => {
  app.use(item);
});
app.mount("#app");
