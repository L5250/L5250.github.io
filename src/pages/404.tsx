import React from 'react';
import { history } from 'umi';
import { Button } from 'antd';

title:String

const NoFoundPage = () => {
  return (
    <div>
      <Button onClick={() => { history.push('/') }}>返回</Button>
    </div>
  )
}
NoFoundPage.title="404"
export default NoFoundPage
