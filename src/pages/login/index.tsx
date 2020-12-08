import React, { FC } from 'react';
import { IndexModelState, ConnectProps, Loading, connect, history ,useDispatch} from 'umi';
import { Button } from 'antd'


interface PageProps extends ConnectProps {
  login: IndexModelState;
  loading: boolean;
  props: Object;
}

const IndexPage: FC<PageProps> = ({ login, dispatch, loading }) => {
  console.log(dispatch, 111);
  console.log(login, 111);
  const { name } = login;

  const getLoading = () => {
    console.log(loading);
    history.push('/')


  }
  const setData = () => {
    // console.log(dispatch,loading);
    // const dispatch = useDispatch(function)
  }
  const jsx = <div>
    <Button onClick={getLoading}>go to home</Button>
    <Button onClick={()=>setData()}>setData</Button>
  </div>
  return <div >
    Hello {name}
    这是登录页
    {jsx}
  </div>;
};

export default connect(({ login, loading }: { login: IndexModelState; loading: Loading }) => ({
  login,
  loading: loading.models.login,
}))(IndexPage);

