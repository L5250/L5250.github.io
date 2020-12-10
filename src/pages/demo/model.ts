import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';

export interface ModelState {
  name: string;
}

export interface ModelType {
  namespace: 'demo';
  state: ModelState;
  effects: {
    query: Effect;
  };
  reducers: {
    save: Reducer<ModelState>;
  };
  subscriptions: { setup: Subscription };
}

const Model: ModelType = {
  namespace: 'demo',

  state: {
    name: 'demo',
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

export default Model;
