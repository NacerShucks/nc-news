import { Link } from 'react-router-dom'

export default function ArticleCard(props) {
    const {article} = props

    return (
        <Link to={`/articles/${article.article_id}`}>
            <div className='ArticleCard'>
                <div className='listArticle'>
                    <p>{article.title}</p>
                    <p>{article.author}</p>
                    <p>{article.created_at}</p>
                </div>
                <div className='ArticleImage'>
                    <img src={article.article_img_url}/>
                </div>
            </div>
        </Link>  
    )
}