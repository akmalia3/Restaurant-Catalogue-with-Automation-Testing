/* eslint-disable import/no-unresolved */
import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import './views/pages/bar';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const START = 4;
const NUMBER_OF_IMAGES = 25;

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#Home'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
