import React, { useEffect } from 'react';
import { HomeModelState, ConnectRC, Loading, connect, useRequest, getDvaApp, useDispatch, useSelector, useStore } from 'umi';
import service from './service'
import { Button } from 'antd'

interface PageProps {
  home: HomeModelState;
  loading: boolean;
}


const Home: ConnectRC<PageProps> = ({ home, dispatch, loading }) => {

  // const { data, error, loading } = useRequest(() => {
  //   return service.getData({});
  // });

  //  if (loading) {
  //   return <div>loading...</div>;
  // }
  // if (error) {
  //   return <div>{error.message}</div>;
  // }


  const getData = () => {
    console.log(1);
    dispatch({
      type: 'home/setState',
      params: { name: "8989" }
    })

    dispatch({
      type: "login/save",
      payload: { name: "999" }
    })

    console.log(getDvaApp());

  }
  const { name } = home;
  return <div >
    Hello {name}
    <Button onClick={getData}>getData</Button>
  </div>;
};

export default connect(({ home, loading }: { home: HomeModelState; loading: Loading }) => ({
  home,
  loading: loading.models.home,
}))(Home);
