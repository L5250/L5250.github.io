import React, { FC } from 'react';
import { ModelState, ConnectProps, ConnectRC, Loading, connect } from 'umi';
import { Button } from 'antd'

interface DemoPageProps {
  demo: ModelState;
  loading: boolean;
  dispatch: any;
}

const Demo: FC<DemoPageProps> = ({ demo, dispatch }) => {
  const { name } = demo;
  const setHome = () => {
    dispatch({
      type: "demo/save",
      payload: { name: "组件加载" }
    })
  }

  return (
    <div >Hello {name}
      <Button onClick={setHome}>这是组件模板</Button>
    </div>
  );
};

export default connect(({ demo, loading }: { demo: ModelState; loading: Loading }) => ({
  demo,
  loading: loading.models.demo,
}))(Demo);

