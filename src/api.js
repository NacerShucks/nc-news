import axios from 'axios'

const NCnewsAPI = axios.create({
    baseURL : 'https://nc-news-zack.onrender.com/api'
})

export const getTopics = () => {
    return NCnewsAPI.get('/topics').then((response) => {
        return response.data.topics
    })
} 


export const getArticles = (queries) => {
    const queryArr = []
    for (const key in queries){
        queryArr.push(`?${key}=${queries.key}`)
    }
    const queryStr = queryArr.join("")
    return NCnewsAPI.get(`/articles${queryStr}`).then((response) => {
        return response.data.articles
    })
} 

export const getArticle = (articleId) => {
    return NCnewsAPI.get(`/articles/${articleId}`).then((response) => {
        return response.data.article
    })
} 

export const patchArticle = (articleId, patchBody) => {
    return NCnewsAPI.patch(`/articles/${articleId}`, patchBody).then((response) => {
        return response.data.article
    })
} 


export const postComment = (articleId, postBody) => {
    return NCnewsAPI.post(`/articles/${articleId}/comments`, postBody).then((response) => {
        return response.data.comment
    })
} 

export const getComments = (articleId) => {
    return NCnewsAPI.get(`/articles/${articleId}/comments`).then((response) => {
        return response.data.comments
    })
} 

export const deleteComment = (commentId) => {
    return NCnewsAPI.post(`/comments/${commentId}`).then((response) => {
        return response.data
    })
} 


export const getUsers = () => {
    return NCnewsAPI.get('/api/users').then((response) => {
        return response.data.users
    })
} 

export const getUser = (username) => {
    return NCnewsAPI.get(`/api/users/${username}`).then((response) => {
        return response.data.user
    })
} 