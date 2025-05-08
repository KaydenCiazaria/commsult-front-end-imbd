import { MovieCard } from '../components/MovieCard/MovieCard.js';

export function HomePage() {
  const homePage = document.createElement('div');
  homePage.className = 'home-page';
  
  const title = document.createElement('h2');
  title.textContent = 'MOVIE RECOMMENDATION';
  title.className = 'section-title';
  
  homePage.appendChild(title);
  
  // Create movie cards container
  const moviesContainer = document.createElement('div');
  moviesContainer.className = 'movies-container';
  
  // Add movie cards (you can fetch these from an API later)
  const movie1 = MovieCard('The Shawshank Redemption', '1994', 'Frank Darabont');
  const movie2 = MovieCard('The Godfather', '1972', 'Francis Ford Coppola');
  const movie3 = MovieCard('The Dark Knight', '2008', 'Christopher Nolan');
  
  moviesContainer.appendChild(movie1);
  moviesContainer.appendChild(movie2);
  moviesContainer.appendChild(movie3);
  
  homePage.appendChild(moviesContainer);
  
  return homePage;
}