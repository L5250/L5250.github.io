import React, { FC } from 'react';
import { ModelState, ConnectProps, Loading, connect } from 'umi';
import Demo from './components/demo'

interface PageProps extends ConnectProps {
  demo: ModelState;
  loading: boolean;
}

const Page: FC<PageProps> = ({ demo, dispatch }) => {
  const { name } = demo;
  console.log(dispatch);
  return <div >
    this is {name}
    <h2>这是一个Demo模板。</h2>
    <Demo/>
  </div>;
};

export default connect(({ demo, loading }: { demo: ModelState; loading: Loading }) => ({
  demo,
  loading: loading.models.demo,
}))(Page);

