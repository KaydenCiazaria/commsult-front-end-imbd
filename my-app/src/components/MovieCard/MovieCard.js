import './MovieCard.css';

export function MovieCard(title, year, director) {
  const card = document.createElement('div');
  card.className = 'movie-card';
  
  const titleElement = document.createElement('h3');
  titleElement.textContent = `${title} (${year})`;
  
  const directorElement = document.createElement('p');
  directorElement.textContent = director;
  directorElement.className = 'director';
  
  card.appendChild(titleElement);
  card.appendChild(directorElement);
  
  return card;
}