//layouts存在就会使用自定义的全局布局，umi 会自动使用它包裹页面，并传入如下 props（ children, location, route, history, match）
import React from 'react'
import { IRouteComponentProps } from 'umi'
import { Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;

// export default function Layouts({ children, location, route, history, match }: IRouteComponentProps) {
//   return <Layout style={{ padding: 10 }} >
//     {/* <Header></Header> */}
//     <Content >
//       {children}
//     </Content>
//     {/* <Footer></Footer> */}
//   </Layout>
// }

import styles from './index.less';
import { Link } from 'umi'

function BasicLayout({ children, location, route, history, match }: IRouteComponentProps) {

  const menuData = [
    { route: '/hero', name: '英雄' },
    { route: '/item', name: '局内道具' },
    { route: '/summoner', name: '召唤师技能' },
  ];

  return (
    <Layout>
      <Header>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[location.pathname]}
          style={{ lineHeight: '64px' }}
        >
          {menuData.map(menu => (
            <Menu.Item key={`/${menu.route}`}>
              <Link to={menu.route}>{menu.name}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Umi 入门教程 Created by xiaohuoni</Footer>
    </Layout>
  );
}

export default BasicLayout;
