/**
 * @desc  这里放置写文章页面的一些方法
 */
 import axios from '../plugins/axios';

 // 获取左侧列表
 export function getTopics(TOKEN = ''){
     return axios({
        method: 'get',
        url: 'author/topics',
        headers:  {'token': TOKEN}
     })
 }

 // 获取文章列表
 export function getArticleList(TopicId, TOKEN = ''){
     return axios({
        method: 'get',
        url: `author/topics/${TopicId}/posts`,
        headers:  {'token': TOKEN}
     })
 }