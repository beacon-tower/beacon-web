/**
 * Created by PF0BVY6M on 2018/2/1.
 */
import axios from '../plugins/axios'
import {isnull} from '../assets/js/common'
export const state = () => ({
  result:null,
})

export const mutations = {
  SET_RESULT: function (state, result) {
    state.result = result
  }
}
export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  nuxtServerInit({ commit }, { req }) {
    console.log('store,setuser,nuxtServerInit----');
    if (req.session && req.session.authUser) {
      console.log('store,setuser');
      //commit('SET_USER', req.session.authUser)
    }
  },
  async login({ commit }, { username, publicKey }) {//登录
    try {
      const { data } = await axios.post('user/login', { username, publicKey })
      commit('SET_RESULT', data);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },
  async reg3({ commit }, { nickname, publicKey, mobile }) {//注册最后一步
    try {
      const { data } = await axios.post('user/register/third/step',
        { nickname, publicKey, mobile})
      commit('SET_RESULT', data);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },
  async logout({ commit }, { token }) {//退出
    const {data} = await axios.get('user/logout',{
      headers:{
        token:`${token}`
      }
    });
    commit('SET_RESULT', data);
  }
}
