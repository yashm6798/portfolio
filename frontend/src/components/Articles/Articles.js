import React from 'react';
import Article from './Article/Article'

const articles = (props) => props.articles.map( (article, articleIndex) => {
        return <a href = {article.link} target="_blank" rel="noopener noreferrer" className="single_article" key = {article.id}><Article 
                article = {article}/> </a>
      } );

export default articles;