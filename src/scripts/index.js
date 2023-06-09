import 'regenerator-runtime';
import '../styles/css/header.css';
import '../styles/css/footer.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import App from './views/app';

const app = new App({
  button: document.querySelector('#navbarhamButton'),
  drawer: document.querySelector('#navbarNav'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
