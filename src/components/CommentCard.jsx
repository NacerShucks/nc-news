import { useContext, useState } from "react"
import { UserContext } from "../contexts/UserContext"
import { deleteComment } from "../api"

export default function CommentCard(props){
    const {comment} = props

    const {user} = useContext(UserContext)
    const [deleting, setDeleting] = useState(false)
    const [deleteMsg, setDeleteMsg] = useState("")

    const deleteButtonHandler = (e) => {
        setDeleteMsg("deleting")
        setDeleting(true)
        e.preventDefault()
        deleteComment(comment.comment_id).then(() => {
            setDeleteMsg("deleted")
        }).catch(() => {
            setDeleteMsg("failed to delete")
        })
    }

    const deleteCommentButton = () => {
        if(user.username === comment.author && deleting === false){
            return (
                <button onClick={deleteButtonHandler}>
                delete
                </button>
            )
        }else if(user.username === comment.author && deleting === true){
            return (
                <p>{deleteMsg}</p>
            )
        }
    }

    
    return (
        <li>
            <div className='commentContainer' key={comment.comment_id + "container"}>
                <div className='commentBody' key={comment.comment_id + "Body"}>
                    <p>{comment.body}</p>
                    <p>{comment.author}</p>
                    <p>{comment.created_at}</p>
                    {deleteCommentButton()}
                </div>
            </div>
        </li>
    )
}