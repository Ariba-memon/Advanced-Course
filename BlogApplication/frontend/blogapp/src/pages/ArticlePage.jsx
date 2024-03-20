// import React from 'react'
// import { useParams } from 'react-router-dom'
// const ArticlePage = () => {
//   const {articleId} = useParams();
//   return (
//     <div>
//     <h1>This is the Page for the article with id: {articleId}</h1>  
//     </div>
//   )
// }

// export default ArticlePage


import { useParams } from 'react-router-dom';
import articles from './article-content';

const ArticlePage = () => {
    const { articleId } = useParams();
    const article = articles.find(article => article.name === articleId);
//articles/learn-react
//articles/nextjs

    return (
        <>
        <h1>{article.title}</h1>
        {article.content.map(paragraph => (
            <p>{paragraph}</p>
        ))}
        </>
    );
}

export default ArticlePage;






// import React from 'react'
// import { useParams } from 'react-router-dom'
// const ArticlePage = () => {
//   const {articleId} = useParams();
//   return (
//     <div>
//     <h1>This is the Page for the article with id: {articleId}</h1>  
//     </div>
//   )
// }

// export default ArticlePage