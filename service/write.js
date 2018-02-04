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

 // 获取文章
 export function getArticle(ArticleId, TOKEN = ''){
     return axios({
        method: 'get',
        url: `author/posts/${ArticleId}`,
        headers:  {'token': TOKEN}
     })
 }

 // 同一话题下移动文章
 export function moveArticleUnderTopic(postsIdList, TOKEN = ''){
     return axios({
        method: 'put',
        url: `author/posts/sequence`,
        headers:  {'token': TOKEN},
        data: {
            postsIdList
        }
     })
 }

 // 同一话题下移动文章
 export function moveArticle( topicId, id, TOKEN = ''){
     return axios({
        method: 'put',
        url: `author/posts/${id}/move`,
        headers:  {'token': TOKEN},
        data: {
            topicId, id
        }
     })
 }