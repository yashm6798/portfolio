import React from 'react';

import Article from './Article/Article'

const articles = (props) => props.articles.map( (article) => {
        return <Article />
      } );

export default articles;