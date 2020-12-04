import { defineConfig } from 'umi';

export default defineConfig({
  dva: {},
  // layout:{},
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/login', component: '@/pages/login' },
  ],

  title: '测试',
  targets: {//配置浏览器最低版本,比如兼容ie11
    ie: 11,
  },
  //设置路由前缀，通常用于部署到非根目录。
  // base: '',//部署 html 到非根目录

  history: { type: 'hash' },//开启打包文件的hash值后缀
  dynamicImport: {},//按需加载

  //webpack 会在静态文件路径前面添加 publicPath 的值
  //production  development
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',

  //插件
  plugins: [
    // [
    //   'umi-plugin-react',
    //   {
    //     antd: true, //启用后自动配置 babel-plugin-import，实现antd按需加载
    //     dynamicImport: { //实现路由级的动态加载
    //       webpackChunkName: true //实现有意义的异步文件名
    //     },
    //     dva: {
    //       dynamicImport: true, //是否启用按需加载
    //       hmr: true //是否启用 dva 的 热更新
    //     },
    //     //通过 webpack 的 dll 插件预打包一份 dll 文件来达到二次启动提速的目的
    //     dll: {
    //       exclude: [],
    //       include: ['dva', 'dva/router', 'dva/saga', 'dva/fetch', 'antd/es']
    //     },
    //     //约定式路由时才需引用，用于忽略指定文件夹中自动生成的路由
    //     routes: {
    //       exclude: [
    //         /components\//,
    //         /model\.(j|t)sx?$/,
    //         /components\.(j|t)sx?$/,
    //         /service\.(j|t)sx?$/,
    //         /models\//,
    //         /services\//
    //       ],
    //     },
    //   }
    // ]
  ],

});
