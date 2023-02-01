import Drawer from '../utils/drawer';
import UrlParser from '../routes/url-parse';
import routes from '../routes/routes';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  // inisialisasi component in AppShell
  _initialAppShell() {
    Drawer.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
    const skipLink = document.querySelector('.skip-link');
    skipLink.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        document.querySelector('#wrapper-content').focus();
      }
    });
  }
}

export default App;
