export default class Menu {
    constructor(app) {
        this.topLevelMenu = document.querySelector(".js-top-level-menu");
        this.subMenu = document.querySelector(".js-submenu");
        this.openSubMenuIcon = document.querySelector(".js-menu-open");
        this.closeSubMenuIcon = document.querySelector(".js-menu-close");

        this._setUpHandlers();
    }

    openSubMenu() {
        this.topLevelMenu.classList.add("close-menu");
        this.subMenu.classList.add("open-menu");
    }

    closeSubMenu() {
      this.topLevelMenu.classList.remove("close-menu");
      this.subMenu.classList.remove("open-menu");
    }

    _setUpHandlers() {
        this.openSubMenuIcon.addEventListener('click', () => this.openSubMenu());
        this.closeSubMenuIcon.addEventListener('click', () => this.closeSubMenu());
    }
}
