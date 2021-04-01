import {request} from "../request";

export function getCodeApi() {
  return request({
    url: '/getcode',
    method: 'get',
    responseType: 'arraybuffer'
  })
}
