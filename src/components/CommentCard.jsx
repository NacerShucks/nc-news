import { useContext} from "react"
import { UserContext } from "../contexts/UserContext"
import { deleteComment } from "../api"

export default function CommentCard(props){
    const {comment} = props
    const {user} = useContext(UserContext)

    const deleteButtonHandler = (e) => {
        e.preventDefault()
        deleteComment(comment.comment_id)
    }

    const deleteCommentButton = () => {
        if(user.username === comment.author){
            return (
                <button onClick={deleteButtonHandler}>
                delete
                </button>
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