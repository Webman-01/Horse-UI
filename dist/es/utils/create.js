const _bem = (namespace, blockSuffix, element, modifier) => {
    let cls = namespace;
    if (blockSuffix) {
        cls += `-${blockSuffix}`;
    }
    if (element) {
        cls += `__${element}`;
    }
    if (modifier) {
        cls += `--${modifier}`;
    }
    return cls;
};
function createBEM(namespace) {
    const b = (blockSuffix = "") => _bem(namespace, blockSuffix, "", "");
    const e = (element) => element ? _bem(namespace, "", element, "") : "";
    const m = (modifier) => modifier ? _bem(namespace, "", "", modifier) : "";
    const be = (blockSuffix, element) => blockSuffix && element ? _bem(namespace, blockSuffix, element, "") : "";
    const bm = (blockSuffix, modifier) => blockSuffix && modifier ? _bem(namespace, blockSuffix, "", modifier) : "";
    const em = (element, modifier) => element && modifier ? _bem(namespace, "", element, modifier) : "";
    const bem = (blockSuffix, element, modifier) => blockSuffix && element && modifier
        ? _bem(namespace, blockSuffix, element, modifier)
        : "";
    const is = (name, state) => state ? `is-${name}` : "";
    return { b, e, m, be, bm, em, bem, is };
}
export function createNameSpace(name) {
    const namespace = `h-${name}`;
    return createBEM(namespace);
}
const bem = createNameSpace("button");
console.log(bem.b("box"));
console.log(bem.bem('block', 'element', 'modifier'));
console.log(bem.is('isChecked', true));
