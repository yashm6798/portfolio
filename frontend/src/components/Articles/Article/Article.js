import React from 'react';
import './Article.css'

const article = (props) => {
    return (
        <div className='article'>
            <div className='photo'>
                <img src={props.article.image} alt=""></img>
            </div>
            <div className='text'>
                <div className='title'>
                    <h2>{props.article.title}</h2>
                </div>
                <div className='article_content' dangerouslySetInnerHTML={{ __html: props.article.introduction }}></div>
            </div>
        </div>
    )
}

export default article;