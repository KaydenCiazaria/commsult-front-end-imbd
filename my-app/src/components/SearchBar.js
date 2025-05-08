import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SearchBar.css';

function SearchBar() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Fetch auto-complete suggestions from API
  useEffect(() => {
    if (query.length < 2) {
      setSuggestions([]);
      return;
    }

    const fetchSuggestions = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`/api/search/suggestions?q=${query}`);
        setSuggestions(response.data);
      } catch (error) {
        console.error("Auto-complete failed:", error);
      } finally {
        setIsLoading(false);
      }
    };

    const debounceTimer = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(debounceTimer);
  }, [query]);

  const handleSelectSuggestion = (movie) => {
    navigate(`/movie/${movie.id}`); // Navigate directly to movie detail
    setQuery('');
    setSuggestions([]);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movies..."
      />
      {isLoading && <div className="spinner"></div>}
      {suggestions.length > 0 && (
        <ul className="suggestions-dropdown">
          {suggestions.map((movie) => (
            <li 
              key={movie.id} 
              onClick={() => handleSelectSuggestion(movie)}
            >
              {movie.title} ({movie.year})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;