const NavbarInitiator = {
  init({ button, navbar, content }) {
    button.addEventListener('click', (event) => {
      this._toggleNavbar(event, navbar);
    });

    content.addEventListener('click', (event) => {
      this._closeNavbar(event, navbar);
    });
  },

  _toggleNavbar(event) {
    event.stopPropagation();
  },

  _closeNavbar(event) {
    event.stopPropagation();
  },
};

export default NavbarInitiator;
