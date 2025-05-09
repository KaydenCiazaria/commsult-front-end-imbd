import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';
import Header from '../components/Header';  // Add this line
import './Home.css';

function Home() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/user/movies');
        setMovies(response.data);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (isLoading) return <div>Loading movies...</div>;

  return (
    <div className="home">
      <Header />
      <h2>Popular Movies</h2>
      <div className="movies-grid">
        {movies.map(movie => (
          <MovieCard 
            key={movie._id} 
            movie={movie} 
          />
        ))}
      </div>
    </div>
  );
}

export default Home;