import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SearchBar.css';

function SearchBar() {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (query.length < 2) {
      setSuggestions([]);
      return;
    }

    const fetchSuggestions = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get('http://localhost:3000/api/user/autocomplete', {
          params: { query } // Changed from 'q' to 'query' to match your API
        });
        console.log('API Response:', response.data); // Debug log
        setSuggestions(response.data);
      } catch (error) {
        console.error("Auto-complete failed:", error);
        if (error.response) {
          console.error("Response data:", error.response.data);
          console.error("Status code:", error.response.status);
        }
      } finally {
        setIsLoading(false);
      }
    };

    const debounceTimer = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(debounceTimer);
  }, [query]);

  const handleSelect = (movie) => {
    navigate(`/movie/${movie._id}`);
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
        <ul className="suggestions-list">
          {suggestions.map((movie) => (
            <li key={movie._id} onClick={() => handleSelect(movie)}>
              {movie.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;