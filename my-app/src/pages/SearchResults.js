import React from 'react';
import { useLocation } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Header from '../components/Header';
import './SearchResults.css';

function SearchResults() {
  const { state } = useLocation();
  const results = state?.results || [];
  const query = state?.query || '';

  return (
    <div className="search-results-page">
      <Header />
      <main className="search-results-container">
        <h2>Search Results for "{query}"</h2>
        {results.length > 0 ? (
          <div className="movies-container">
            {results.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <p className="no-results">No movies found matching your search.</p>
        )}
      </main>
    </div>
  );
}

export default SearchResults;