//import de la lib BarbaJS
import barba from "@barba/core";

export class PageTransition {
  constructor() {
    const loader = document.createElement("div");
    loader.innerHTML = `
      <div id="transition-overlay">
        <div id="transition-overlay-circle"></div>
        <div id="transition-overlay-logo">
          <img
            width="160"
            src="assets/images/logo.svg"
            alt="Logo de notre site"
          />
          </div>
        </div>`;
    document.body.appendChild(loader);

    this.mousePosition = { x: 0, y: 0 };
    document.addEventListener(
      "mousemove",
      (e) => {
        this.mousePosition = { x: e.clientX, y: e.clientY };
      },
      false
    );

    this.init();
  }

  init() {
    const overlay = document.querySelector("#transition-overlay");
    const circle = document.querySelector("#transition-overlay-circle");
    const that = this;
    // do the magic here
  }
}

export const pagetransition = new PageTransition();
