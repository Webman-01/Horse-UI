import DefaultTheme from "vitepress/theme";

import Icon from "/Users/mamingzhe/Horse UI/packages/components/icon/index.ts";
import Button from "/Users/mamingzhe/Horse UI/packages/components/button/index.ts";
import Tooltip from "/Users/mamingzhe/Horse UI/packages/components/tooltip/index.ts";
import Checkbox from "/Users/mamingzhe/Horse UI/packages/components/checkbox/index.ts";
import Tree from "/Users/mamingzhe/Horse UI/packages/components/tree/index.ts";
import Virtualized from "/Users/mamingzhe/Horse UI/packages/components/virtualized-list/index.ts";
import Input from "/Users/mamingzhe/Horse UI/packages/components/input/index.ts";
import Upload from "/Users/mamingzhe/Horse UI/packages/components/upload/index.ts";
import {
  Form,
  FormItem,
} from "/Users/mamingzhe/Horse UI/packages/components/form/index.ts";
import "/Users/mamingzhe/Horse UI/packages/theme-chalk/src/index.scss";
console.log(Tooltip);
const plugins = [
  Icon,
  Button,
  Tooltip,
  Checkbox,
  Tree,
  Virtualized,
  Input,
  Form,
  FormItem,
  Upload,
];
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    plugins.forEach((item) => {
      app.use(item);
    });
  },
};
