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

 // 获取单篇文章的内容
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
        headers:  {'token': TOKEN, 'Content-Type': 'application/json'},
        data: postsIdList
     })
 }

 // 多话题移动文章
 export function moveArticle( topicId, id, TOKEN = ''){
     alert(topicId);
     return axios({
        method: 'post',
        url: `author/posts/${id}/move`,
        headers:  {'token': TOKEN, 'Content-Type': 'application/json'},
        data: Number(topicId)
     })
 }

 // 删除文章
 export function removeArticle(id, TOKEN = ''){
     return axios({
        method: 'delete',
        url: `author/posts/${id}/destroy`,
        headers:  {'token': TOKEN}
     })
 }

 // 发布文章
 export function publishArticle(id, TOKEN = ''){
     return axios({
        method: 'post',
        url: `author/posts/${id}/publicize`,
        headers:  {'token': TOKEN}
     })
 }

 // 保存文章
 export function saveArticle(data, id, TOKEN = ''){
     return axios({
        method: 'post',
        url: `author/posts`,
        headers:  {'token': TOKEN},
        data: data
     })
 }