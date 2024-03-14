import { useEffect, useState, useContext } from "react"
import { getComments } from "../api"
import CommentCard from "./CommentCard"
import CommentSubmission from "./CommentSubmission"
import { UserContext } from "../contexts/UserContext"

export default function CommentBox (props){
    const [comments, setComments] = useState([])
    const { articleId } = props
    const {user} = useContext(UserContext)
    
    useEffect(() => {
        getComments(articleId).then((comments) => {
            setComments(comments)
        }).catch((err) => {
            console.log("🚀 ~ getComments ~ err:", err)
        })
    },[comments])

    const userChecker = () => {
        if(user){
            return (
                <CommentSubmission articleId={articleId} setComments={setComments}/>
            )
        }
    }

    return (
        <ul>
        {
            userChecker()
        }
        {
            comments.map((comment) => {
                return <CommentCard comment={comment}/>
            })
        }
        </ul>
    )

}