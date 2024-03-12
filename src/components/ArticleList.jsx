import { useState, useEffect } from "react"
import { getArticles } from "../api"

import FilterBar from "./FilterBar"
import ArticleCard from "./ArticleCard"

export default function ArticleList (){

    const [allArticles, setAllArticles] = useState([])
    const [queries, setQueries] = useState({
        author: "",
        topic: "",
        sortBy: "",
        order: ""
    })
    
    useEffect(() => {
        getArticles(queries).then((articles) => {  
            setAllArticles(articles)
        })
    }, [queries])

    return (
        <>
            <FilterBar queries={queries} setQueries={setQueries} allArticles={allArticles}/>
            <ul id='listArticles'>
                {allArticles.map((article) => {
                    return (<li key={article.article_id}>
                        <ArticleCard article={article}/>
                    </li>)
                })}
            </ul>
        </>
    )
}