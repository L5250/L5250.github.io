//umirc.ts和config只会编译一个
import { defineConfig } from 'umi';
import routes from './routes';
export default defineConfig({
  routes: routes,

  layout: {
    // 支持任何不需要 dom 的
    // https://procomponents.ant.design/components/layout#prolayout
    name: 'Ant 1',
    locale: true,
    layout: 'side',
  },

});
