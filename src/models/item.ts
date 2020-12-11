import { Effect, Reducer, Subscription, request } from 'umi';
import services from '@/services/item'

export interface ItemModelState {
  name: string,
  data: [],
}

export interface ItemModelType {
  namespace: "item",
  state: ItemModelState,
  effects: {
    query: Effect,
    getItemData: Effect,
  },
  reducers: {
    save: Reducer<ItemModelState>;
  },
  subscriptions: { setup: Subscription };
}

const ItemModel: ItemModelType = {
  namespace: 'item',

  state: {
    name: 'item',
    data: []
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
        if (pathname === '/item') {
          dispatch({
            type: 'getItemData'
          })
        }
      });
    }
  },
}

export default ItemModel
