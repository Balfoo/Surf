/**
	Menu.js
**/

import barba from "@barba/core";

class Menu {
  constructor() {
    this.init();
    // barba.hooks.after((_) => {
    //   this.init();
    // });
  }

  init() {
    this.links = document.querySelectorAll(".header a, .lateral-nav a");
    // do the magic here
  }
}

export const menu = new Menu();
