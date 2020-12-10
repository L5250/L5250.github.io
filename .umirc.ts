//umirc.ts和config只会编译一个
import { defineConfig } from 'umi';
import layout from './config/layout'

export default defineConfig({
  dva: {},

  // 布局
  layout: layout,

  // 如果没有 routes 配置，Umi 会进入约定式路由模式，然后分析 src/pages 目录拿到路由配置。
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  //   { path: '/login', component: '@/pages/login' },
  // ],

  //快速编译
  // nodeModulesTransform: {
  //   type: 'none',
  // },

  title: 'L',
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
  // dynamicImport: {},

  //webpack 会在静态文件路径前面添加 publicPath 的值
  //production（线上环境）  development（本地开发环境）
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',

  //配置代理能力
  proxy: {
    '/api': {
      'target': 'http://jsonplaceholder.typicode.com/',
      'changeOrigin': true,
      'pathRewrite': { '^/api': '' },
    },
  },

  //
  favicon: "122",
  //插件
  plugins: [

  ],

});
