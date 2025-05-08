import './Navbar.css';

export function Navbar() {
  const navbar = document.createElement('nav');
  navbar.className = 'navbar';
  
  const logo = document.createElement('h1');
  logo.textContent = 'IMDb2';
  logo.className = 'logo';
  
  const subtitle = document.createElement('p');
  subtitle.textContent = 'All the things';
  subtitle.className = 'subtitle';
  
  navbar.appendChild(logo);
  navbar.appendChild(subtitle);
  
  return navbar;
}