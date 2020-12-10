// 运行时配置
// 运行时配置和配置的区别是他跑在浏览器端，基于此，我们可以在这里写函数、jsx、import 浏览器端依赖等等，注意不要引入 node 依赖

// let isSubApp = false;
// export function modifyClientRenderOpts(memo: { rootElement: any; }) {
//   return {
//     ...memo,
//     rootElement: isSubApp ? 'sub-root' : memo.rootElement,
//   };
// }

//初始值 umijs/plugin-initial-state
export async function getInitialState() {
  const data = { login: true };
  return data;
}

import React from 'react';
import {
  BasicLayoutProps,
  Settings as LayoutSettings,
} from '@ant-design/pro-layout';
import { history } from 'umi';
import Header from '@/components/header';

export const layout = ({
  initialState,
}: {
  initialState: { settings?: LayoutSettings; currentUser?: true };
}): BasicLayoutProps => {
  return {
    title: '111',
    // rightContentRender: () => <Header/>,
    footerRender: () => <div>222</div>,
    onPageChange: () => {
      const { currentUser } = initialState;
      const { location } = history;
      // 如果没有登录，重定向到 login
      // if (!currentUser && location.pathname !== '/user/login') {
      //   history.push('/user/login');
      // }
    },
    menuHeaderRender: undefined,
    ...initialState?.settings,
  };
};
