import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';

export interface LoginModelState {
  name: string;
}

export interface LoginModelType {
  namespace: String;
  state: LoginModelState;
  effects: {
    query: Effect;
  };
  reducers: {
    save: Reducer<LoginModelState>;
    // 启用 immer 之后
    // save: ImmerReducer<LoginModelState>;
  };
  subscriptions: { setup: Subscription };
}

const IndexModel: LoginModelType = {
  namespace: 'login',

  state: {
    name: 'login',
  },

  effects: {
    *query({ payload }, { call, put }) {
    },
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    // 启用 immer 之后
    // save(state, action) {
    //   state.name = action.payload;
    // },
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

export default IndexModel;
