import React from 'react'
import { SmileOutlined, CrownOutlined, TabletOutlined } from '@ant-design/icons';

export default {
  // 支持任何不需要 dom 的
  // https://procomponents.ant.design/components/layout#prolayout
  name: 'Ant',
  locale: true,
  layout: 'side',
  route: {
    path: '/',
    routes: [
      {
        path: '/login',
        name: '登录',
        // icon: <SmileOutlined />,
        component: './login',
      },
    ]
  }
}
