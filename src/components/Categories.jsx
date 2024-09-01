import React from 'react';
import './Categories.css';

const Categories = ({ setCategory }) => {
  const categories = ['All', 'Nutrition', 'Fitness', 'Mental Health'];

  return (
    <div className="categories">
      {categories.map((cat) => (
        <button key={cat} onClick={() => setCategory(cat)}>
          {cat}
        </button>
      ))}
    </div>
  );
};

export default Categories;
