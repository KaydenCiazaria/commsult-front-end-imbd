import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css';

function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie._id}`} className="movie-card">
      <img 
        src={`/images/${movie.thumb}`} 
        alt={movie.title}
        className="movie-thumbnail"
      />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{new Date(movie.date).getFullYear()}</p>
      </div>
    </Link>
  );
}

export default MovieCard;