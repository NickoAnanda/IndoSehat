import 'regenerator-runtime';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/header.css';
import '../styles/footer.css';
import App from './views/app';

const app = new App({
  button: document.querySelector('#button'),
  drawer: document.querySelector('#navbarNav'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
