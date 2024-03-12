import { useState, useEffect } from "react"
import { getTopics } from "../api"

export default function FilterBar(props){
    const {queries, setQueries, allArticles} = props
    const [topics, setTopics] = useState([])

    const [articleFeilds, setArticleFeilds] = useState([])
    const [authors, setAuthors] = useState([])

    useEffect(() => {
        const newFeilds = []
        for(const key in allArticles[0]){
            newFeilds.push(key)
        }
        setArticleFeilds(
            newFeilds
        )
    }, [])

    useEffect(() => {
        const notedAuthors = []
        for(let i = 0; i < allArticles.length; i++){
            if(!notedAuthors.includes(allArticles[i].author)){
                notedAuthors.push(allArticles[i].author)
            }  
        }
        setAuthors(
            notedAuthors
        )
    }, [])


    useEffect(() => {
        getTopics().then((topics) => {
            setTopics(topics)
        })
    }, [])

    const handleSelects = (inputName, e) => {
        setQueries((currQueries) => {
            const newQueries = {...currQueries}
            newQueries[inputName] = e.target.value
            return newQueries
        })
    }
    

    return (
        <nav className="nav_menu" id="nav_menu">
            <select id="author" name="author" value={queries.author} onChange={(e) => {handleSelects("author", e)}}>
                <option value=''>
                author
                </option>
                {
                    authors.map((author) => {
                        return (
                            <option value={author}>
                                {author}
                            </option>
                        )
                    })
                }
            </select>
            <select id="topic" name="topic" value={queries.topic} onChange={(e) => {handleSelects("topic", e)}}>
                <option value=''>
                topic
                </option>
                {
                    topics.map((topic) => {
                        return (
                            <option value={topic.slug}>
                                {topic.slug}
                            </option>
                        )
                    })
                }
            </select>
            <select id="sortBy" name="sortBy" value={queries.sortBy} onChange={(e) => {handleSelects("sortBy", e)}}>
                <option value=''>
                sort by
                </option>
                {
                    articleFeilds.map((feild) => {
                        return (
                            <option value={feild}>
                                {feild}
                            </option>
                        )
                    })
                }

            </select>
            <select id="order" name="order" value={queries.order} onChange={(e) => {handleSelects("order", e)}}>
                <option value=''>
                order
                </option>
                <option value='asc'>
                ascending
                </option>
                <option value='desc'>
                descending
                </option>
            </select>
        </nav>
            
    )
}