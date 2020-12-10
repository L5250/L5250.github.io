//layouts存在就会使用自定义的全局布局，umi 会自动使用它包裹页面，并传入如下 props（ children, location, route, history, match）
import React from 'react'
import { IRouteComponentProps } from 'umi'
import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

export default function Layouts({ children, location, route, history, match }: IRouteComponentProps) {
  return <Layout style={{ padding: 10 }} >
    {/* <Header></Header> */}
    <Content >
      {children}
    </Content>
    {/* <Footer></Footer> */}
  </Layout>

  //针对不同路由输出不同的全局 layout
  // if (location.pathname === '/login') {
  //   return <SimpleLayout>{ children }</SimpleLayout>
  // }
  // return (
  //   <>
  //     <Header />
  //     { children }
  //     <Footer />
  //   </>
  // );
}
