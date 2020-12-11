import { Effect, Reducer, Subscription } from 'umi';
import services from '@/services/summoner'

export interface SummonerModelState {
  name: string,
  data: [],
}

export interface SummonerType {
  namespace: "summoner",
  state: SummonerModelState,
  effects: {
    query: Effect,
    getItemData: Effect,
  },
  reducers: {
    save: Reducer<SummonerModelState>;
  },
  subscriptions: { setup: Subscription };

}

const SummonerModel: SummonerType = {
  namespace: 'summoner',

  state: {
    name: 'summoner',
    data: [],
  },

  effects: {
    *query({ payload }, { call, put }) {

    },
    *getItemData({ payload }, { call, put }) {
      const data = yield call(services.getData);
      console.log(data)
      yield put({
        type: 'save',
        payload: {
          data: data,
        },
      });
    }
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/summoner') {
          dispatch({
            type: 'getItemData'
          })
        }
      });
    }
  },
}

export default SummonerModel
