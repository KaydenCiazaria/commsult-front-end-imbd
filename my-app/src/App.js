import { Navbar } from './components/Navbar/Navbar.js';
import { HomePage } from './pages/HomePage.js';

export function renderApp() {
  const root = document.getElementById('root');
  root.innerHTML = '';

  // Render Navbar
  const navbar = Navbar();
  root.appendChild(navbar);

  // Render Home Page by default
  const homePage = HomePage();
  root.appendChild(homePage);
}

// For navigation between pages (you can expand this)
export function navigateTo(page) {
  const root = document.getElementById('root');
  const navbar = root.querySelector('nav'); // Preserve navbar
  
  root.innerHTML = '';
  root.appendChild(navbar);
  
  let pageContent;
  switch(page) {
    case 'home':
      pageContent = HomePage();
      break;
    // Add other pages here
    default:
      pageContent = HomePage();
  }
  
  root.appendChild(pageContent);
}