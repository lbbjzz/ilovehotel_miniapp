import {request} from "../../request";

export function getCodeApi() {
  return request({
    url: '/getcode',
    method: 'get',
    // H5
    responseType: 'blob'
  })
}
