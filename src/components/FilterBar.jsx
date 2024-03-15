import { useState, useEffect } from "react"
import { getTopics } from "../api"

export default function FilterBar(props){
    const {setQueries, articleFeilds} = props
    const [topics, setTopics] = useState([])
    const [selects, setSelects] = useState({
        topic: "",
        sort_by: "",
        order: ""
    })

    getTopics().then((topics) => {
        setTopics(topics)
    })


    const handleSelects = (inputName, e) => {
        console.log("🚀 ~ handleSelects ~ e:", e.target.value)
        
        setSelects((currQueries) => {
            const newSelects = {...currQueries}
            newSelects[inputName] = e.target.value
            return newSelects
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setQueries(selects)
        setSelects({
            topic: "",
            sort_by: "",
            order: ""
        })
    }
     

    return (
        <form className="nav_menu" id="nav_menu" onSubmit={handleSubmit}>
            topic
            <select key={"topic"} id="topic" name="topic" value={selects.topic} onChange={(e) => {handleSelects("topic", e)}}>
                
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
            sort
            <select key={"sort_by"} id="sort_by" name="sort_by" value={selects.sort_by} onChange={(e) => {handleSelects("sort_by", e)}}>
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
            order
            <select key={"order"} id="order" name="order" value={selects.order} onChange={(e) => {handleSelects("order", e)}}>
                <option key={"asc"} value='asc'>
                ascending
                </option>
                <option key={"desc"} value='desc'>
                descending
                </option>
            </select>
            <button type="submit">Submit</button>
        </form>
            
    )
}