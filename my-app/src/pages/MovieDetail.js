import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
import './MovieDetail.css';

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/user/movie/${id}`);
        setMovie(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (isLoading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!movie) return <div>Movie not found</div>;

  return (
    <div> 
      
    <Header />
    <div className="movie-detail">
      
      <img 
        src={`/images/${movie.thumb}`} 
        alt={movie.title} 
        className="movie-poster"
      />
      <div className="movie-info">
        <h1>{movie.title} ({new Date(movie.date).getFullYear()})</h1>
        <p><strong>Director:</strong> {movie.director}</p>
        <p><strong>Rating:</strong> {movie.rating}/10</p>
      </div>
    </div>
    </div>
  );
}

export default MovieDetail;