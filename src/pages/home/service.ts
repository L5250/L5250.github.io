import { request } from 'umi'

export interface serivce {
  params: Object
}

const serivce = {
  // getData: async (params: Object) => {
  //   const data= request('http://jsonplaceholder.typicode.com/users', {
  //     method: 'get',
  //     params
  //   })
  //   console.log(data)
  // }

  getData: (params: any) => {
    request('http://jsonplaceholder.typicode.com/users', {
      params,
      skipErrorHandler: true,
    })
  }
}
export default serivce
