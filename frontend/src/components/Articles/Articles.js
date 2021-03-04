import React from 'react';
import Article from './Article/Article'

const articles = (props) => props.articles.map( (article, articleIndex) => {
        return <Article 
                article = {article}
                key = {article.id}/>
      } );

export default articles;