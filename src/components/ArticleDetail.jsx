import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getArticle, patchArticle } from "../api"

import CommentBox from "./CommentBox"

export default function ArticleDetail (){

    const [article, setArticle] = useState({})
    const {articleId} = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const [votes, setVotes] = useState(0)

    const handleDownVote = () => {
        setVotes((currVotes) => currVotes - 1)
        patchArticle(articleId, {inc_votes: -1}).then((article) => {
            setVotes(article.votes)
        }).catch((err) => {
            setVotes(article.votes)
        })
    }
    const handleUpVote = () => {
        setVotes((currVotes) => currVotes + 1)
        patchArticle(articleId, {inc_votes: 1}).then((article) => {
            setVotes(article.votes)
        }).catch((err) => {
            setVotes(article.votes)
        })
    }
    
    useEffect(() => {
        getArticle(articleId).then((article) => {
            setIsLoading(false)
            setArticle(article)
            setVotes(article.votes)
        }).catch((err) => {
            setIsLoading(false)
        })
    },[])
    if(isLoading){
        return (
            <h2>Loading...</h2>
        )
    }else if(article.article_id !== Number(articleId)){
        return (
            <h1>404 article not found</h1>
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
                <p>{votes}</p>
            </div>
            <button onClick={handleUpVote}>upvote</button>
            <button onClick={handleDownVote}>downvote</button>
            <h4>comments</h4>
            <CommentBox articleId={articleId}/>
        </>
        
        )
    }
        
   
    
    
}