import DefaultTheme from "vitepress/theme";
import Icon from 'horse-ui/es/components/icon/index.js';
// import Icon from 'horse-ui/theme-chalk'
// import Icon from "/Users/mamingzhe/Horse UI/packages/components/icon/index.ts";
// import Button from "/Users/mamingzhe/Horse UI/packages/components/button/index.ts";
import Button from "horse-ui/es/components/button/index.js";
// import Tooltip from "/Users/mamingzhe/Horse UI/packages/components/tooltip/index.ts";
import Tooltip from 'horse-ui/es/components/tooltip/index.js'
// import Checkbox from "/Users/mamingzhe/Horse UI/packages/components/checkbox/index.ts";
import Checkbox from 'horse-ui/es/components/checkbox/index.js'
// import Tree from "/Users/mamingzhe/Horse UI/packages/components/tree/index.ts";
import Tree from 'horse-ui/es/components/tree/index.js'
// import Virtualized from "/Users/mamingzhe/Horse UI/packages/components/virtualized-list/index.ts";
import Virtualized from 'horse-ui/es/components/virtualized-list/index.js'
// import Input from "/Users/mamingzhe/Horse UI/packages/components/input/index.ts";
import Input from 'horse-ui/es/components/input/index.js'
// import Upload from "/Users/mamingzhe/Horse UI/packages/components/upload/index.ts";
import Upload from 'horse-ui/es/components/upload/index.js'
// import {
//   Form,
//   FormItem,
// } from "/Users/mamingzhe/Horse UI/packages/components/form/index.ts";
import {
  Form,
  FormItem,
} from 'horse-ui/es/components/form/index.js'
// import "/Users/mamingzhe/Horse UI/packages/theme-chalk/src/index.scss";
import 'horse-ui/theme-chalk/css/index.css'
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
