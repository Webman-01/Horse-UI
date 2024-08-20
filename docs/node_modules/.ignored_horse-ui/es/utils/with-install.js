export function withInstall(com) {
    com.install = function (app) {
        const { name } = com;
        app.component(name, com);
    };
    return com;
}
