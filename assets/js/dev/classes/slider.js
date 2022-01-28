/**
	SLIDER.JS
**/

//import de la lib Glide
import Glide from "@glidejs/glide";
import barba from "@barba/core";

class Slider {
  constructor() {
    window.addEventListener("scroll", function () {
      const imgs = document.querySelectorAll("#photos img");
      const translate = -(window.pageYOffset * 0.2);

      imgs.forEach(function (img) {
        img.style.transform = "translateY(" + translate + "px )";
      });
    });

    this.init();
    // barba.hooks.after((_) => {
    //   this.init();
    // });
  }
  init() {
    const mySlider = new Glide(".glide", {
      //options
      autoplay: 5000,
      hoverpause: false,
      animationDuration: 1000,
      gap: 0,
    });
    mySlider.mount();
  }
}

//export d'une instance de ma Classe Slider
export const slider = new Slider();
//export const slider2 = new Slider();
