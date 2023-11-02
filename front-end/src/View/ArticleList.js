import React from 'react'
import { Link } from 'react-router-dom';

const ArticleList = (props) => {
    const url = `/articles/${props.id}`



    return (
        <div className='container'>
            {/*template liteal not working */}
            <Link to={`/article/${props.id}`}><h3>{props.title}</h3></Link>
        </div >
    )
}

export default ArticleList
