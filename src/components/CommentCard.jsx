
export default function CommentCard(props){
    const {comment} = props
    
    return (
        <li>
            <div className='commentContainer' key={comment.comment_id + "container"}>
                <div className='commentBody' key={comment.comment_id + "Body"}>
                    <p>{comment.body}</p>
                    <p>{comment.author}</p>
                    <p>{comment.created_at}</p>
                </div>
            </div>
        </li>
    )
}