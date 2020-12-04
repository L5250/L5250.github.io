import React from 'react';
import styles from './index.less';
import { Button } from 'antd'
import { history, Link } from 'umi';

export default (props: object) => {
  console.log(props);
  return (
    <div>
      <h1 className={styles.title}>Page index1
      <Button onClick={() => { history.push('/login') }}>login</Button>
      </h1>
      <Link to="/login">go to login</Link>
    </div>
  );
}
