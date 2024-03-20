//拼接成字符串类似于 h-button__element--modifier
const _bem = (
  namespace: string,
  blockSuffix: string,
  element: string,
  modifier: string
) => {
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
//创建一个BEM类型
/*
E:h-button-box
namespace是一定有的：如button  --必选
blockSuffix传入 生成的是b :box --可选
element传入 生成的是 __xx     --可选
is用于判断状态
*/
function createBEM(namespace: string) {
  const b = (blockSuffix: string = "") => _bem(namespace, blockSuffix, "", "");
  const e = (element?: string) =>
    element ? _bem(namespace, "", element, "") : "";
  const m = (modifier?: string) =>
    modifier ? _bem(namespace, "", "", modifier) : "";
  const be = (blockSuffix?: string, element?: string) =>
    blockSuffix && element ? _bem(namespace, blockSuffix, element, "") : "";
  const bm = (blockSuffix?: string, modifier?: string) =>
    blockSuffix && modifier ? _bem(namespace, blockSuffix, "", modifier) : "";
  const em = (element?: string, modifier?: string) =>
    element && modifier ? _bem(namespace, "", element, modifier) : "";
  const bem = (blockSuffix?: string, element?: string, modifier?: string) =>
    blockSuffix && element && modifier
      ? _bem(namespace, blockSuffix, element, modifier)
      : "";
  const is = (name: string, state: boolean | undefined) =>
    state ? `is-${name}` : "";
  return { b, e, m, be, bm, em, bem ,is};
}
function createNameSpace(name: string) {
  const namespace = `h-${name}`;
  return createBEM(namespace);
}
const bem = createNameSpace("button");
console.log(bem.b("box"));
console.log(bem.bem('block','element','modifier'));
console.log(bem.is('isChecked',true));


