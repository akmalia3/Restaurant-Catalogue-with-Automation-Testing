class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <nav id="navigationDrawer" class="app-bar__navigation">
      <ul>
        <li><a href="#Home"><strong>Home</a></li>
        <li><a href="#/list"><strong>Restaurant</strong></a></li>
        <li><a href="#/favorite"><strong>Favorite</strong></a></li>
        <li><a href="https://www.linkedin.com/in/akmalia-fatimah-77563721b/"><strong>About Us</strong></a></li>
      </ul>
    </nav>
        `;
  }
}

customElements.define('nav-bar', AppBar);
