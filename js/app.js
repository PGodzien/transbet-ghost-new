console.log("Hello from JS");

setInterval(() => {
    console.log("hello from fat arrow function");
}, 5000);

import Typewriter from "typewriter-effect/dist/core";

// Burger menus
document.addEventListener("DOMContentLoaded", function () {
    // open
    const burger = document.querySelectorAll(".navbar-burger");
    const menu = document.querySelectorAll(".navbar-menu");

    if (burger.length && menu.length) {
        for (var i = 0; i < burger.length; i++) {
            burger[i].addEventListener("click", function () {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle("hidden");
                }
            });
        }
    }

    // close
    const close = document.querySelectorAll(".navbar-close");
    const backdrop = document.querySelectorAll(".navbar-backdrop");

    if (close.length) {
        for (var i = 0; i < close.length; i++) {
            close[i].addEventListener("click", function () {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle("hidden");
                }
            });
        }
    }

    if (backdrop.length) {
        for (var i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener("click", function () {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle("hidden");
                }
            });
        }
    }

    new Typewriter("#typewriter-hero", {
        strings: ["sprzedaży", "zasięgów"],
        autoStart: true,
        loop: true,
        cursorClassName: "bg-clip-border font-normal",
    });
});

// scroll smoth
$(document).ready(function () {
    $("a").on('click', function (event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function () {
          window.location.hash = hash;
        });
      }
    });
  });

  // carousel realisations 
  const realisations = document.getElementById('realisations');
  const realisationsWidth = realisations.scrollWidth;

  window.addEventListener('load', () => {
      self.setInterval(() => {
          if (realisations.scrollLeft !== realisationsWidth) {
              realisations.scrollTo(realisations.scrollLeft += 1);
          }
      }, 15);
  });

  