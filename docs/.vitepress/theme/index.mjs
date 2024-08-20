import DefaultTheme from "vitepress/theme";
import Icon from 'horse-ui/es/components/icon';
// import Icon from 'horse-ui/theme-chalk'
// import Icon from "/Users/mamingzhe/Horse UI/packages/components/icon/index.ts";
// import Button from "/Users/mamingzhe/Horse UI/packages/components/button/index.ts";
import Button from "horse-ui/es/components/button";
// import Tooltip from "/Users/mamingzhe/Horse UI/packages/components/tooltip/index.ts";
import Tooltip from 'horse-ui/es/components/tooltip'
// import Checkbox from "/Users/mamingzhe/Horse UI/packages/components/checkbox/index.ts";
import Checkbox from 'horse-ui/es/components/checkbox'
// import Tree from "/Users/mamingzhe/Horse UI/packages/components/tree/index.ts";
import Tree from 'horse-ui/es/components/tree'
// import Virtualized from "/Users/mamingzhe/Horse UI/packages/components/virtualized-list/index.ts";
import Virtualized from 'horse-ui/es/components/virtualized-list'
// import Input from "/Users/mamingzhe/Horse UI/packages/components/input/index.ts";
import Input from 'horse-ui/es/components/input'
// import Upload from "/Users/mamingzhe/Horse UI/packages/components/upload/index.ts";
import Upload from 'horse-ui/es/components/upload'
import {
  Form,
  FormItem,
} from "/Users/mamingzhe/Horse UI/packages/components/form/index.ts";
// import {
//   Form,
//   FormItem,
// } from 'horse-ui/es/components/form'
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
