import {
  Button,
  Checkbox,
  Form,
  Icon,
  Input,
  Tooltip,
  Tree,
  Upload,
} from "@uuio/components";
import type { App } from "vue";

const components = [Icon, Button, Checkbox, Form, Input, Tooltip, Tree, Upload];
const install = (app: App) => {
  components.forEach((component) => app.use(component));
};
export default {
  install,
};
export * from "@uuio/components";
