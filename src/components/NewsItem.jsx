import React from 'react';
import './NewsItem.css';

const NewsItem = ({ article, onBookmark }) => {
  return (
    <div className="news-item">
      <h3>{article.title}</h3>
      <p>{article.description}</p>
      <div className="news-item-footer">
        <button onClick={() => onBookmark(article)}>Bookmark</button>
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          Read more
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
