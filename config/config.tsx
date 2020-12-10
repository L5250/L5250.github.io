//umirc.ts和config只会编译一个
import { defineConfig } from 'umi';
import routes from './routes';
import layout from './layout'
export default defineConfig({
  routes,

  layout,

});
