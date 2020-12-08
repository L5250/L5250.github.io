//umirc.ts和config只会编译一个
import { defineConfig } from 'umi';

export default defineConfig({
  dva: {},

  // 布局
  layout: {
    // 支持任何不需要 dom 的
    // https://procomponents.ant.design/components/layout#prolayout
    name: 'Ant',
    locale: true,
    layout: 'side',
    route: {
      path: '/',
      routes: [
        {
          path: '/welcome',
          name: '欢迎',
          // icon: <SmileOutlined />,
          component: './Welcome',
        },
      ]
    }
  },

  // 如果没有 routes 配置，Umi 会进入约定式路由模式，然后分析 src/pages 目录拿到路由配置。
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  //   { path: '/login', component: '@/pages/login' },
  // ],

  //快速编译
  nodeModulesTransform: {
    type: 'none',
  },



  title: 'ljy',
  targets: {//配置浏览器最低版本,比如兼容ie11
    ie: 11,
  },

  //设置路由前缀，通常用于部署到非根目录。
  // base: '',//部署 html 到非根目录

  // 配置是否让生成的文件包含 hash 后缀，通常用于增量发布和避免浏览器加载缓存。
  hash: true,

  //路由类型
  history: { type: 'hash' },

  //按需加载
  dynamicImport: {},

  //webpack 会在静态文件路径前面添加 publicPath 的值
  //production（线上环境）  development（本地开发环境）
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
