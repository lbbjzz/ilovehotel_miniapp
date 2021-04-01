import {request} from "../request";

export function getEmailCode(email, imageCode) {
  return request({
    url: '/hotelsystem/email/sendEmail',
    method: 'post',
    params: {
      email,
      imageCode,
    }
  })
}
