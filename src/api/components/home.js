import {request} from "../request";

export function getCarousel() {
  return request({
    url: '/hotelsystem/tHomePicture/list',
    method: 'post',
  })
}
