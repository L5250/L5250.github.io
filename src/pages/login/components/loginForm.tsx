import React, { FC } from 'react';
import {
  LoginModelState,
  ConnectProps,
  ConnectRC,
  Loading,
  connect,
  useModel,
} from 'umi';
import { Button } from 'antd';

interface LoginFromProps {
  login: LoginModelState;
  loading: boolean;
  dispatch: any;
}

const LoginFrom: FC<LoginFromProps> = ({ login, dispatch }) => {
  // 全局Model
  const { initialState, loading, error, refresh, setInitialState } = useModel(
    '@@initialState',
  );
  console.log(initialState);

  const { name } = login;
  const setHome = () => {
    dispatch({
      type: 'login/save',
      payload: { name: '组件加载' },
    });
  };

  return (
    <div>
      Hello {name}
      <Button onClick={setHome}>组件加载</Button>
    </div>
  );
};

export default connect(
  ({ login, loading }: { login: LoginModelState; loading: Loading }) => ({
    login,
    loading: loading.models.login,
  }),
)(LoginFrom);
