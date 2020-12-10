import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';
import service from './service'

export interface HomeModelState {
  name: string;
}

export interface HomeModelType {
  namespace: String;
  state: Object;
  effects: {
    getData: Effect;
  };
  reducers: {
    save: Reducer<HomeModelState>;
    setState: Reducer<HomeModelState>;
    // 启用 immer 之后
    // save: ImmerReducer<HomeModelState>;
  };
  subscriptions: { setup: Subscription };
}

const HomeModel: HomeModelType = {
  namespace: 'home',

  state: {
    name: 'home',
    dataSource: []
  },

  effects: {
    *getData({ payload }, { call, put }) {
      const data = yield call(service.getData, payload)
      yield put({
        type: 'setState',
        payload: data
      })
    },
  },
  reducers: {
    save(state, action) {
      console.log(action)
      return {
        ...state,
        ...action.payload,
      };
    },

    setState: (state, { params }) => {
      return { ...state, ...params }
    },

  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/') {
          dispatch({
            type: 'query',
          })
        }
      });
    }
  }
};

export default HomeModel;
