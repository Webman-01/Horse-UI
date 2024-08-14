import { Icon, Button, Checkbox, Form, Input, Tooltip, Tree, Upload } from '@uuio/components';
export * from '@uuio/components';

var components = [Icon, Button, Checkbox, Form, Input, Tooltip, Tree, Upload];
var install = function (app) {
    components.forEach(function (component) { return app.use(component); });
};
var index = {
    install: install,
};

export { index as default };
