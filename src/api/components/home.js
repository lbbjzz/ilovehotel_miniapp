import {request} from "../request";

export function getCarousel() {
  return request({
    url: '/hotelsystem/tHomePicture/list',
    method: 'post',
  })
}

export function getIntro() {
  return request({
    url: '/hotelsystem/tHomePicture/floorCard',
    method: 'post'
  })
}

export function getCity(cityName){
  return request({
    url:'/hotelsystem/city/list',
    method: 'post',
    params:{
      cityName
    }
  })
}

export function getRoom(cityId) {
  return request({
    url: 'hotelsystem/tHomePicture/roomCard',
    method: 'post',
    params: {
      cityId
    }
  })
}

export function getRoomType(cityId) {
  return request({
    url: '/hotelsystem/tHomePicture/roomTypeCard',
    method: 'post',
    params: {
      cityId
    }
  })
}
