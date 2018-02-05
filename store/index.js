/**
 * Created by PF0BVY6M on 2018/2/1.
 */
import axios from '../plugins/axios'
import {isnull} from '../assets/js/common'
var qs = require('qs');
export const state = () => ({
  token: null,
  result:null,
})

export const mutations = {
  SET_RESULT: function (state, result) {
    state.result = result
  },
  SET_TOKEN: function (state, token) {
    state.token = token
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
      const { data } = await axios.post('user/login', qs.stringify({ username, publicKey }))
      commit('SET_RESULT', data);
      commit('SET_TOKEN',data.data)
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },
  async setSessionToken({ commit }, { token }) {//将已有的token保存到sessionStorage
    if(!isnull(token)){
      sessionStorage.setItem('rgtk',token);
    }else{
      commit('SET_TOKEN', sessionStorage.getItem('rgtk'));
    }
  },
  async reg3({ commit }, { nickname, publicKey, mobile }) {//注册最后一步
    try {
      const { data } = await axios.post('user/register/third/step',
        qs.stringify({ nickname, publicKey, mobile}))
      commit('SET_RESULT', data);
      commit('SET_TOKEN',data.data)
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
    commit('SET_TOKEN', null);
  }
}
