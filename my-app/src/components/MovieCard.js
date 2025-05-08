import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css';

function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.id}`} className="movie-card-link">
      <div className="movie-card">
        <div className="movie-poster">
          <img src={movie.poster} alt={movie.title} />
        </div>
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <p>Year: {movie.year}</p>
          <p>Director: {movie.director}</p>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;