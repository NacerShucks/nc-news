import { useEffect, useState } from "react"
import { getComments } from "../api"
import CommentCard from "./CommentCard"
import CommentSubmission from "./CommentSubmission"

export default function CommentBox (props){
    const [comments, setComments] = useState([])
    const { articleId } = props
    
    
    useEffect(() => {
        getComments(articleId).then((comments) => {
            setComments(comments)
        }).catch((err) => {
            console.log("🚀 ~ getComments ~ err:", err)
        })
    },[comments])

    return (
        <ul>
        <CommentSubmission articleId={articleId} setComments={setComments}/>
        {
            comments.map((comment) => {
                return <CommentCard comment={comment}/>
            })
        }
        </ul>
    )

}