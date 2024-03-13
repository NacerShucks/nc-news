
export default function CommentCard(props){
    const {comment} = props
    
    return (
        <li>
            <div className='commentContainer'>
                <div className='commentBody'>
                    <p>{comment.body}</p>
                    <p>{comment.author}</p>
                    <p>{comment.created_at}</p>
                </div>
            </div>
        </li>
    )
}