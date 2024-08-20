import { Icon, Button, Checkbox, Form, Input, Tooltip, Tree, Upload } from '@uuio/components';
export * from '@uuio/components';

const components = [Icon, Button, Checkbox, Form, Input, Tooltip, Tree, Upload];
const install = (app) => {
  components.forEach((component) => app.use(component));
};
var index = {
  install
};

export { index as default };
