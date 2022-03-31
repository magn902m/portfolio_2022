"use strict";
gsap.registerPlugin(ScrollTrigger);

window.addEventListener("DOMContentLoaded", setup);

function setup() {
  console.log("setup");
  // moving();
}

function moving() {
  const skillsWrapper = document.querySelector("#skills_section .section_wrapper");
  const skillIcons = document.querySelector(".skill_icon");

  const tl = gsap.timeline({ repeat: -1, repeatDelay: 1, yoyo: true });

  tl.to(skillIcons, { duration: 30, x: "-80vw" });
  tl.to(skillIcons, { duration: 30, x: "80vw" });
}
