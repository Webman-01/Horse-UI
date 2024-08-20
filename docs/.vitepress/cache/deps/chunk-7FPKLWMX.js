// node_modules/horse-ui/es/utils/with-install.js
function withInstall(com) {
  com.install = function(app) {
    const { name } = com;
    app.component(name, com);
  };
  return com;
}

export {
  withInstall
};
//# sourceMappingURL=chunk-7FPKLWMX.js.map
