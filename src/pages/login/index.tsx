import React, { FC } from 'react';
import { LoginModelState, ConnectProps, ConnectRC, Loading, connect } from 'umi';
import LoginFrom from './components/loginForm'

interface PageProps {
  login: LoginModelState;
  loading: boolean;
}

const Login: ConnectRC<PageProps> = ({ login, dispatch }) => {
  const { name } = login;
  const setHome = () => {
    dispatch({
      type: ""
    })
  }

  return <div >Hello {name}
    <LoginFrom />
  </div>;
};

export default connect(({ login, loading }: { login: LoginModelState; loading: Loading }) => ({
  login,
  loading: loading.models.login,
}))(Login);

