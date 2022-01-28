import barba from "@barba/core";

class Contact {
  constructor() {
    this.init();
    // barba.hooks.before((_) => {
    //   this.beforeInit();
    // });
    // barba.hooks.after((_) => {
    //   this.init();
    // });
  }

  // beforeInit() {
  //   this.contact = null;
  //   window.removeEventListener("mousemove");
  //   if (this.form) {
  //     this.form.querySelectorAll("input,textarea").forEach((elt) => {
  //       elt.removeEventListener("input");
  //       elt.removeEventListener("blur");
  //       elt.removeEventListener("focus");
  //     });
  //   }
  // }

  init() {
    this.contact = document.querySelector("#contact");
    this.man = document.querySelector("#contact .contact__man");
    this.form = document.querySelector("#contact form");

    // do the magic here
  }
}

export const contact = new Contact();
