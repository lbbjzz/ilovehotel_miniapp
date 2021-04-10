import {request} from "../../request";

export function getCodeApi() {
  return request({
    url: '/getcode',
    method: 'get',
    // wechat
    responseType: 'blob'
  })
}
