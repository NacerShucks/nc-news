import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getArticle } from "../api"

import CommentBox from "./CommentBox"

export default function ArticleDetail (){

    const [article, setArticle] = useState({})
    const {articleId} = useParams()
    const [isLoading, setIsLoading] = useState(true)

    getArticle(articleId).then((article) => {
        setIsLoading(false)
        setArticle(article)
    })
    if(isLoading){
        return (
            <h2>Loading...</h2>
        )
    }else{
        return (
        <>
            <div id="articleDetail">
                <img src={article.article_img_url}/>
                <h3>{article.title}</h3>
                <p>topic: {article.topic}</p>
                <p>{article.body}</p>
                <p>author: {article.author}</p>
            </div>
            <h4>comments</h4>
            <CommentBox articleId={articleId}/>
        </>
        
        )
    }
        
   
    
    
}