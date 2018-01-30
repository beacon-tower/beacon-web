/**
 * Created by PF0BVY6M on 2017/12/27.
 */
import axios from 'axios'
let options = {
  timeout: 5000,
  headers: {
    post: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
}
options.baseURL = (process.env.NODE_ENV === 'development') ? '/api/v1/' : '/api/v1/';
export default axios.create(options)
