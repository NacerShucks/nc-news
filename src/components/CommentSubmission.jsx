import { useContext, useEffect, useState } from "react"

import { UserContext } from "../contexts/UserContext"
import { postComment } from "../api"

export default function CommentSubmission (props){
    const {articleId, setComments} = props
    const {user} = useContext(UserContext)
    const [postBody, setPostBody] = useState({
        username: user.username,
        body: ""
    })

    const handleChange = (e) => {
        setPostBody((values) => {
            const newValues = {...values}
            newValues.body = e.target.value
            return newValues
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        postComment(articleId, postBody).then((comment) => {
            setPostBody({
                username: user.username,
                body: ""
            })
            setComments((currComments) => {
                return [...currComments, comment]
            })

        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label for="fComment">comment:</label>
            <input type="text" id="fComment" name="fComment" onChange={handleChange} value={postBody.body}></input>
            <button type={"submit"}>submit</button>
        </form>
    )

}