/**
 * Created by PF0BVY6M on 2017/12/27.
 */
import axios from 'axios'
let options = {
  timeout: 5000,
  headers: {
    post: {
      'Content-Type': 'application/json'
    }
  }
}
options.baseURL = (process.env.NODE_ENV === 'development') ? 'http://192.168.31.200:8080/bas/' : 'http://192.168.31.201:8080/bas/';
export default axios.create(options)
