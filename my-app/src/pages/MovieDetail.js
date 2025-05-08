import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import tempMovies from '../data/movies';
import './MovieDetail.css';

function MovieDetail() {
  const { id } = useParams();
  const movie = tempMovies.find(movie => movie.id === parseInt(id));

  if (!movie) {
    return (
      <div className="movie-detail">
        <Header />
        <div className="not-found">Movie not found</div>
      </div>
    );
  }

  return (
    <div className="movie-detail-page">
      <Header />
      <div className="movie-detail-container">
        <div className="movie-poster">
          <img src={movie.poster} alt={movie.title} />
        </div>
        <div className="movie-info">
          <h1>{movie.title} ({movie.year})</h1>
          <div className="movie-meta">
            <span>{movie.duration}</span>
            <span>Rating: {movie.rating}/10</span>
            <span>Director: {movie.director}</span>
          </div>
          <div className="movie-genres">
            {movie.genre.map((genre, index) => (
              <span key={index} className="genre-tag">{genre}</span>
            ))}
          </div>
          <p className="movie-description">{movie.description}</p>
          <Link to="/" className="back-button">Back to Home</Link>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;