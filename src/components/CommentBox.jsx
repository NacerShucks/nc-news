import { useEffect, useState } from "react"
import { getComments } from "../api"
import CommentCard from "./CommentCard"

export default function CommentBox (props){
    const [comments, setComments] = useState([])
    const { articleId } = props
    
    useEffect(() => {
        console.log("getting comments")
        getComments(articleId).then((comments) => {
            setComments(comments)
        }).catch((err) => {
            console.log("🚀 ~ getComments ~ err:", err)
        })
    },[])

    return (
        <ul>
        {
            comments.map((comment) => {
                return <CommentCard comment={comment}/>
            })
        }
        </ul>
    )

}