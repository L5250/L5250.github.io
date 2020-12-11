// export default {
//   // 支持值为 Object 和 Array
//   'GET /api/users': { users: [1, 2] },

//   // GET POST 可省略
//   'POST /api/users/1': { id: 1 },

//   // 支持自定义函数，API 参考 express@4
//   'POST /api/users/create': (req: void, res: { end: (arg0: string) => void; }) => {
//     res.end('OK');
//   },

// };

import herolist from './herolist.json';
import item from './item.json';
import summoner from './summoner.json';

export default {
  '/api/herolist': herolist,
  '/api/getItem': item,
  '/api/getSummoner': summoner,
};
