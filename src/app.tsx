// 运行时配置
// 运行时配置和配置的区别是他跑在浏览器端，基于此，我们可以在这里写函数、jsx、import 浏览器端依赖等等，注意不要引入 node 依赖

let isSubApp = false;
export function modifyClientRenderOpts(memo: { rootElement: any; }) {
  return {
    ...memo,
    rootElement: isSubApp ? 'sub-root' : memo.rootElement,
  };
}
