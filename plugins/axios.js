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
options.baseURL = (process.env.NODE_ENV === 'development') ? '' : '';
export default axios.create(options)
