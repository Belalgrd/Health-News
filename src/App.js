import React, { useState, useEffect } from 'react';
import { fetchHealthNews } from './services/NewsService'; // Ensure this function handles category-based fetching
import NewsList from './components/NewsList';
import Categories from './components/Categories';
import Bookmarks from './components/Bookmarks';
import './App.css';

function App() {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState('All');
  const [bookmarks, setBookmarks] = useState([]);

  // Fetch news articles based on the selected category
  useEffect(() => {
    const getNews = async () => {
      const articles = await fetchHealthNews(category); // Pass category to the fetch function
      setNews(articles);
    };
    getNews();
  }, [category]); // Fetch news whenever the category changes

  // Add article to bookmarks
  const handleBookmark = (article) => {
    if (!bookmarks.find((bookmark) => bookmark.title === article.title)) {
      setBookmarks([...bookmarks, article]); // Prevent duplicate bookmarks
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Health News Hub</h1>
        <p>Stay updated with the latest in health, fitness, and wellness</p>
      </header>

      {/* Category selection component he yaha */}
      <Categories setCategory={setCategory} />

      <main className="app-main">
        {/* News section displaying articles he yaha */}
        <section className="news-section">
          <NewsList news={news} category={category} onBookmark={handleBookmark} />
        </section>

        {/* Bookmarked articles section he yaha pe */}
        <aside className="bookmarks-section">
          <h2>Bookmarked Articles</h2>
          <Bookmarks bookmarks={bookmarks} />
        </aside>
      </main>
    </div>
  );
}

export default App;
