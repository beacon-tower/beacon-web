/**
 * @desc  这里放置用户相关的一些方法
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
