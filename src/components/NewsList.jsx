import React from 'react';
import './NewsList.css';

const NewsList = ({ news, onBookmark }) => {
  if (!news || news.length === 0) {
    return <p>No articles found for this category.</p>;
  }

  return (
    <div className="news-list">
      {news.map((article, index) => (
        <div key={index} className="news-item">
          <h3>{article.title}</h3>
          {article.urlToImage && <img src={article.urlToImage} alt={article.title} />}
          <p>{article.description}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            Read More
          </a>
          <button onClick={() => onBookmark(article)}>Bookmark</button>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
