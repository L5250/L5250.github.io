import { Effect, Reducer, Subscription, request } from 'umi';
import services from '@/services/hero'
//原文地址
//  https://www.yuque.com/umijs/umi/filter
interface HeroProps {
  ename: number;
  cname: string;
  title: string;
  new_type: number;
  hero_type: number;
  skin_name: string;
}

export interface HeroModelState {
  name: string;
  heros: HeroProps[];
}

export interface HeroModelType {
  namespace: 'hero';
  state: HeroModelState;
  effects: {
    query: Effect;
    fetch: Effect,
  };
  reducers: {
    save: Reducer<HeroModelState>;
  };
  subscriptions: { setup: Subscription };
}

const HeroModel: HeroModelType = {
  namespace: 'hero',

  state: {
    name: 'hero',
    heros: [],
  },

  effects: {
    *query({ payload }, { call, put }) {

    },
    *fetch({ type, payload }, { put, call, select }) {
      // const data = yield  request('/herolist');
      const data = yield call(services.getData,{a:1});
      const localData = [
        {
          ename: 105,
          cname: '廉颇',
          title: '正义爆轰',
          new_type: 0,
          hero_type: 3,
          skin_name: '正义爆轰|地狱岩魂',
        },
        {
          ename: 106,
          cname: '小乔',
          title: '恋之微风',
          new_type: 0,
          hero_type: 2,
          skin_name: '恋之微风|万圣前夜|天鹅之梦|纯白花嫁|缤纷独角兽',
        },
      ];
      yield put({
        type: 'save',
        payload: {
          heros: data ,
        },
      });
    },
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
  // subscriptions 是一个全局的监听，就是说，
  // 当设定触发条件满足时，所有的 subscriptions 都会响应，
  // 所以我们在这里判断了路由为当前路由时，发起一个 effects 事件。
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/hero') {
          dispatch({
            type: 'fetch'
          })
        }
      });
    }
  },
};

export default HeroModel;
