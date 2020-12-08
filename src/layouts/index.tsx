import React from 'react'
import { IRouteComponentProps } from 'umi'
export default function Layout({ children, location, route, history, match }: IRouteComponentProps) {
  return <div style={{ height: "100%", width: "100%", padding: 10 }} >{children}</div>

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
