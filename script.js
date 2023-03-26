"use strict";
const toggleSwitch = document.querySelector("#switch");
const body = document.querySelector("body");

toggleSwitch.addEventListener("change", switchTheme, false);

function switchTheme(event) {
  if (event.target.checked) {
    body.classList.add("darkmode");
  } else {
    body.classList.remove("darkmode");
  }
}

import { animate, stagger } from "https://cdn.skypack.dev/motion";
animate(".intro", { y: [100, 0], opacity: [0, 1] }, { delay: stagger(0.15), duration: 1 });

animate(".header_text", { opacity: [0, 1] }, { duration: 1.5 });
