import { useState, useEffect } from "react"
import { getTopics } from "../api"

export default function FilterBar(props){
    const {queries, setQueries, authors, articleFeilds} = props
    const [topics, setTopics] = useState([])
    getTopics().then((topics) => {
        setTopics(topics)
    })


    const handleSelects = (inputName, e) => {
        setQueries((currQueries) => {
            const newQueries = {...currQueries}
            newQueries[inputName] = e.target.value
            return newQueries
        })
        
        console.log("🚀 ~ handleSelects ~ queries:", queries)
    }
        
     

    return (
        <nav className="nav_menu" id="nav_menu">
            <select key={"author"} id="author" name="author" value={queries.author} onChange={(e) => {handleSelects("author", e)}}>
                <option key={"defaultAuthor"} defaultValue={""}>
                author
                </option>
                {
                    authors.map((author) => {
                        return (
                            <option key={author + "author"} value={author}>
                                {author}
                            </option>
                        )
                    })
                }
            </select>
            <select key={"topic"} id="topic" name="topic" value={queries.topic} onChange={(e) => {handleSelects("topic", e)}}>
                <option key={"defaultTopic"} defaultValue=''>
                topic
                </option>
                {
                    topics.map((topic) => {
                        return (
                            <option key={topic.slug + "topic"} value={topic.slug}>
                                {topic.slug}
                            </option>
                        )
                    })
                }
            </select>
            <select key={"sort_by"} id="sort_by" name="sort_by" value={queries.sortBy} onChange={(e) => {handleSelects("sort_by", e)}}>
                <option key={"defaultSortBy"} defaultValue=''>
                sort by
                </option>
                {
                    articleFeilds.map((feild) => {
                        return (
                            <option key={feild + "feild"} value={feild}>
                                {feild}
                            </option>
                        )
                    })
                }

            </select>
            <select key={"order"} id="order" name="order" value={queries.order} onChange={(e) => {handleSelects("order", e)}}>
                <option key={"defaultOrder"} defaultValue=''>
                order
                </option>
                <option key={"asc"} value='asc'>
                ascending
                </option>
                <option key={"desc"} value='desc'>
                descending
                </option>
            </select>
        </nav>
            
    )
}