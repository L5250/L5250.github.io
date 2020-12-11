import React, { FC } from 'react';
import styles from './index.less';
import { connect, SummonerModelState, ConnectProps } from 'umi';


interface PageProps extends ConnectProps {
  summoner: SummonerModelState;
}

const Hero: FC<PageProps> = (props) => {
  console.log(props.summoner);
  return (
    <div>
      <h1 className={styles.title}>Page summoner</h1>
      <h2>This is {props.summoner.name}</h2>
      <h2>This is {JSON.stringify(props.summoner.data)}</h2>
    </div>
  );
}
export default connect(({ summoner }: { summoner: SummonerModelState }) => ({ summoner }))(Hero);
