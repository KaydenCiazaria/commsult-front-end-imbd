import React from 'react';
import Header from '../components/Header';
import MovieCard from '../components/MovieCard';
import tempMovies from '../data/movies';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      <Header />
      <main className="main-content">
        <h2>Popular Movies</h2>
        <div className="movies-container">
          {tempMovies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;