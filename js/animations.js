"use strict";
gsap.registerPlugin(ScrollTrigger);

window.addEventListener("DOMContentLoaded", setup);

function setup() {
  console.log("setup");
  // aniTxt();
  // highlightSection();
  progressBar();
  // aboutSection();
  contactSection();
}

function progressBar() {
  gsap.to("progress", {
    value: 100,
    ease: "none",
    scrollTrigger: {
      scrub: 0.3,
      end: "100% bottom",
    },
  });
}

// Remove before deploying the portfolio
// ScrollTrigger.defaults({
//   toggleActions: "restart pause resume none",
//   markers: true,
// });

function aniTxt() {
  let h1 = document.querySelector("#introductory_section h1");
  h1.innerHTML = spanWrapper(h1.textContent);
  let h2 = document.querySelector("#introductory_section h2");
  h2.innerHTML = spanWrapper(h2.textContent);
  gsap.from("span", {
    x: 400,
    opacity: 0,
    duration: 2,
    stagger: { amount: 1 },
  });
}

function spanWrapper(word) {
  let wordArr = word.split(" ").map((word) => {
    return `<span>${word}</span>`;
  });
  return wordArr.join(" ");
}

function highlightSection() {
  gsap.from("#highlight_section", {
    id: "highlight",
    duration: 3,
    opacity: 0,
    scrollTrigger: {
      trigger: "#highlight_section",
      start: "top bottom",
      end: "200px center",
      toggleActions: "play none complete none",
      scrub: 5,
      opacity: 1,
      once: true,
    },
  });
}

function aboutSection() {
  gsap.to("#about_section img", {
    id: "img_magnus",
    duration: 2,
    opacity: 1,
    x: "0vw",
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#about_section h2",
      toggleActions: "play none complete none",
      // start: "top 80%",
      end: "200px center",
      // scrub: 3,
      start: "60% center",
      once: true,
    },
  });
}

function contactSection() {
  const contact = document.querySelector("#contact_footer");
  gsap
    .timeline({
      id: "contact",
      scrollTrigger: {
        trigger: contact,
        start: "20% 70%",
      },
    })

    .to(contact, {
      y: "-25%",
      duration: 0.5,
    })

    .to(contact, {
      duration: 0.8,
      opacity: 1,
      ease: Bounce.easeOut,
      y: 0,
    });
}
