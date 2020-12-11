import React, { FC } from 'react';
import styles from './index.less';
import { connect, HeroModelState, ConnectProps } from 'umi';
import { Row, Col, Card, Radio } from 'antd'

const RadioGroup = Radio.Group;

interface PageProps extends ConnectProps {
  hero: HeroModelState;
}

const Hero: FC<PageProps> = (props) => {

  const { heros = [] } = props.hero;
  const heroType = [
    { key: 0, value: '全部' },
    { key: 1, value: '战士' },
    { key: 2, value: '法师' },
    { key: 3, value: '坦克' },
    { key: 4, value: '刺客' },
    { key: 5, value: '射手' },
    { key: 6, value: '辅助' },
  ];
  return (
    <div>
      <Card className={styles.radioPanel}>
        <RadioGroup >
          {heroType.map(data => (
            <Radio value={data.key} key={`hero-rodio-${data.key}`}>
              {data.value}
            </Radio>
          ))}
        </RadioGroup>
      </Card>
      <Row>
        {heros.reverse().map(item => (
          <Col key={item.ename} span={3} className={styles.heroitem}>
            <img
              src={`https://game.gtimg.cn/images/yxzj/img201606/heroimg/${item.ename}/${item.ename}.jpg`}
            />
            <p>{item.cname}</p>
          </Col>
        ))}
      </Row>
    </div>
  );
}
export default connect(({ hero }: { hero: HeroModelState }) => ({ hero }))(Hero);
