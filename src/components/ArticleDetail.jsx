import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getArticle } from "../api"


export default function ArticleDetail (){

    const [article, setArticle] = useState({})
    console.log("🚀 ~ ArticleDetail ~ article:", article)
    const {articleId} = useParams()

    useEffect(() => {
        getArticle(articleId).then((article) => {
            setArticle(article)
        })
    },[])
    
    return (
        <div id="articleDetail">
            <img src={article.article_img_url}/>
            <p><h3>{article.title}</h3></p>
            <p>topic: {article.topic}</p>
            <p>{article.body}</p>
            <p>author: {article.author}</p>
        </div>
    )
}