const NavbarInitiator = {
  init({ button, navbar, content }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, navbar);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, navbar);
    });
  },

  _toggleDrawer(event) {
    event.stopPropagation();
  },

  _closeDrawer(event) {
    event.stopPropagation();
  },

};
export default NavbarInitiator;
