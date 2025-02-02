import React, { useEffect, useState } from 'react';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [sortBy, setSortBy] = useState('newest'); // Default sorting option

  // Function to fetch articles based on the selected sorting option
  const fetchArticles = async (sortOption) => {
    try {
      const response = await fetch(`http://localhost:3000/api/articles?sortBy=${sortOption}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch articles');
      }

      const data = await response.json();
      setArticles(data);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  useEffect(() => {
    fetchArticles(sortBy); // Fetch articles when component mounts
  }, [sortBy]); // Re-fetch articles when sortBy changes

  const handleSortChange = (event) => {
    setSortBy(event.target.value); // Update sortBy state when the user selects a different sorting option
  };

  return (
    <div style={{ color: 'black' }}>
      <h1>Articklar</h1>

      {/* Sorting Menu */}
      <div>
        <label>Sort by: </label>
        <select value={sortBy} onChange={handleSortChange}>
          <option value="newest">Senaste</option>
          <option value="oldest">Äldst</option>
        </select>
      </div>

      {/* Display Articles */}
      <ul>
        {articles.map((article) => (
          <li key={article.title}>
            <h2>{article.title}</h2>
            <p>{article.summary}</p>
            <a href={article.link}>Fortsätt</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;