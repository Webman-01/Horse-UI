"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withInstall = void 0;
function withInstall(com) {
    com.install = function (app) {
        const { name } = com;
        app.component(name, com);
    };
    return com;
}
exports.withInstall = withInstall;
