/**
 * Created by PF0BVY6M on 2017/12/26.
 */
import axios from 'axios'

export default function ({ route }) {
  console.log('中间件路由：',route);
  return axios.post('http://baidu.com', {
    url: route.fullPath
  })
}
