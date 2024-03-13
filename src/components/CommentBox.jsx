import { useEffect, useState } from "react"
import { getComments } from "../api"

export default function CommentBox (props){
    const [comments, setComments] = useState([
        {comment_id: 1},
        {comment_id: 2},
        {comment_id: 3},
        {comment_id: 4}
    ])
    const { article_id } = props
    useEffect(() => {
        getComments(article_id).then((comments) => {
            setComments(comments)
        }).catch((err) => {
            console.log("🚀 ~ getComments ~ err:", err)
        })
    },[])

    return (
        <ul>
        {
            comments.map((comment) => {
                return (
                    <li key={comment.comment_id}>
                        
                    </li>
                )
            })
        }
        </ul>
    )

}