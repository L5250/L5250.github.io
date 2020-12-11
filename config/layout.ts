import React from 'react';
import {
  SmileOutlined,
  CrownOutlined,
  TabletOutlined,
} from '@ant-design/icons';

export default {
  // 支持任何不需要 dom 的
  // https://procomponents.ant.design/components/layout#prolayout
  name: 'Ant',
  locale: true,
  // logo:'',
  layout: 'side',
  route: {
    path: '/',
    routes: [
      {
        path: '/login',
        name: '一级菜单',
        icon: 'edit',
        component: './login',
        routes:[
          {
            path: '/login',
            name: '登录',
            // icon: <SmileOutlined />,
            component: './login',
          },
        ]
      },
      {
        path: '/login',
        name: '登录',
        // icon: <SmileOutlined />,
        component: './login',
      },
      {
        path: '/login',
        name: '登录',
        // icon: <SmileOutlined />,
        component: './login',
      },
      {
        path: '/login',
        name: '登录',
        // icon: <SmileOutlined />,
        component: './login',
      },
      {
        path: '/login',
        name: '登录',
        // icon: <SmileOutlined />,
        component: './login',
      },
      {
        path: '/login',
        name: '登录',
        // icon: <SmileOutlined />,
        component: './login',
      },
      {
        path: '/login',
        name: '登录',
        // icon: <SmileOutlined />,
        component: './login',
      },
    ],
  },
  location: {
    pathname: '/home',
  },
};
