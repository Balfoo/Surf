import barba from "@barba/core";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// https://greensock.com/docs/v3
// https://greensock.com/docs/v3/Plugins/ScrollTrigger

class GsapExample {
  constructor() {
    gsap.registerPlugin(ScrollTrigger);
    this.init();
    // barba.hooks.after((_) => {
    //   this.init();
    // });
  }
  init() {
    if (document.querySelector(".gsap-example")) {
      //do magic here
    }
  }
}

export const gsapExample = new GsapExample();
