import { useState, useEffect } from "react"
import { getArticles } from "../api"

import FilterBar from "./FilterBar"
import ArticleCard from "./ArticleCard"

export default function ArticleList (){
    
    const [articleFeilds, setArticleFeilds] = useState([])
    const [authors, setAuthors] = useState([])
    const [allArticles, setAllArticles] = useState([{article_id:1},{article_id:2},{article_id:3},{article_id:4},{article_id:5}])
    const [queries, setQueries] = useState({
        topic: "",
        sort_by: "",
        order: ""
    })
    const [isLoading, setIsLoading] = useState(true)
    const [loadingMsg, setLoadingMsg] = useState("Loading...")

    
    useEffect(() => {
        setIsLoading(true)
        getArticles(queries).then((articles) => {  
            setAllArticles(articles)
            setIsLoading(false)
        }).catch((err) => {
            setLoadingMsg("Something went wrong...")
        })
    }, [queries])
        
       

    useEffect(() => {
        setArticleFeilds(Object.keys(allArticles[0]))
    }, [allArticles])

    const articleLoader = () => {
        if(isLoading){
            return (
                <h2>{loadingMsg}</h2>
            )
        }
        return(
            <ul id='listArticles'>
            {allArticles.map((article) => {
                return (<li key={article.article_id}>
                    <ArticleCard article={article}/>
                </li>)
            })}
            </ul>
        )
        
    }

    return (
        <>
            <FilterBar queries={queries} setQueries={setQueries} authors={authors} articleFeilds={articleFeilds}/>
            {articleLoader()}
        </>
    )
}