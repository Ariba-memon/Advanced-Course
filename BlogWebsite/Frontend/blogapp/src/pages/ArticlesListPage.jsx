// import React from 'react'

// const ArticlesListPage = () => {
//   return (
//     <div>
//       ArticlesListPage
//     </div>
//   )
// }

// export default ArticlesListPage


import { Link } from 'react-router-dom';
import articles from './article-content';

const ArticlesListPage = () => {
    return (
        <>
        <h1 className='text-center m-10'>Articles</h1>
        {articles.map(article => (
            <Link key={article.name} className="text-center font-sans" to={`/articles/${article.name}`}>
                <h3 className='font-bold m-10 '>{article.title}</h3>
           
                <p>{article.content[0].substring(0, 100)}...</p>
                <hr />
            </Link>
        ))}
        </>
    );
}

export default ArticlesListPage;
