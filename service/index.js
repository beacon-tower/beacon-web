/**
 * @desc  这里放置首页相关的一些方法
 */
import axios from '../plugins/axios';
// 获取话题（热点）列表
export function getTopicList(param){
  return axios({
    method: 'get',
    url: 'index/topic/list',
    params:param
  })
}
// 获取默认文章列表
export function getDefaultArticleList(param,TOKEN){
  return axios({
    method: 'get',
    url: 'index/posts/list',
    params:param,
    headers:  {'token': TOKEN}
  })
}
// 根据话题（热点）id获取文章列表
export function getArticleListById(param){
  return axios({
    method: 'get',
    url: 'index/topic/posts/list',
    params:param
  })
}
// 获取今日最火
export function getTodayHot(param){
  return axios({
    method: 'get',
    url: 'index/today/hot/list',
    params:param
  })
}
// 获取7日最火
export function getSevenHot(param){
  return axios({
    method: 'get',
    url: 'index/seven/day/hot/list',
    params:param
  })
}
// 获取历史最火
export function getHistoryHot(param){
  return axios({
    method: 'get',
    url: 'index/history/hot/list',
    params:param
  })
}
// 获取作者列表
export function getAuthList(param,TOKEN){
  return axios({
    method: 'get',
    url: 'index/author/list',
    params:param,
    headers:  {'token': TOKEN}
  })
}
