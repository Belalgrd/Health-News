import React from 'react';
import './Bookmarks.css';

const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="bookmarks">
      {bookmarks.length === 0 ? (
        <p>No bookmarks yet.</p>
      ) : (
        bookmarks.map((article, index) => (
          <div key={index} className="bookmark-item">
            <h4>{article.title}</h4>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </div>
        ))
      )}
    </div>
  );
};

export default Bookmarks;
