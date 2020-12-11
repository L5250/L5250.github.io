import { request } from 'umi'

export interface services {
  params: Object
}

const services = {

  getData: (params: any) => {
    return request('/getItem', {
      params,
    })
  },

}
export default services
