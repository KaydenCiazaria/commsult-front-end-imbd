import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import tempMovies from '../data/movies'; // Your existing temp data
import './SearchBar.css';

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsLoading(true);

    // SIMULATE API DELAY
    setTimeout(() => {
      // Local search logic
      const results = tempMovies.filter(movie => 
        movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        movie.director.toLowerCase().includes(searchQuery.toLowerCase()) ||
        movie.genre.some(g => g.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      
      navigate('/search', { state: { results, query: searchQuery } });
      setIsLoading(false);
    }, 500); // 0.5s delay to simulate network
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input 
        type="text" 
        placeholder="Search movies..." 
        className="search-input"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        disabled={isLoading}
      />
      <button 
        type="submit" 
        className="search-button"
        disabled={isLoading}
      >
        {isLoading ? (
          <span className="spinner"></span> // Add CSS for this
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            {/* Search icon */}
          </svg>
        )}
      </button>
    </form>
  );
}

export default SearchBar;