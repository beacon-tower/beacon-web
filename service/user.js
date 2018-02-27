/**
 * @desc  这里放置用户相关的一些http请求
 */
import axios from '../plugins/axios';
// 获取用户信息
export function getUser(TOKEN = ''){
  return axios({
    method: 'get',
    url: 'user/info',
    headers:  {'token': TOKEN}
  })
}
// 上传头像
export function uploadPicture(filedata,TOKEN = ''){
  return axios({
    method: 'post',
    url: 'image/upload',
    data:filedata,
    headers:  {
      'token': TOKEN,
      'Content-Type': 'multipart/form-data'}
  })
}
// 修改个人信息
export function updateUserInfo(userdata,TOKEN = ''){
  return axios({
    method: 'put',
    url: 'user/info',
    data:userdata,
    headers:  {
      'token': TOKEN,
      'Content-Type': 'application/json;charset=utf-8'}
  })
}
