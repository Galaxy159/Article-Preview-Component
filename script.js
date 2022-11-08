"use-strict";

const share = document.querySelector(".component__content--author-share");

const shareBubble = document.querySelector(".share");

share.addEventListener("click", () => {
  shareBubble.classList.toggle("show");
  share.classList.toggle("active");
});

window.addEventListener("click", (event) => {
  if (!event.target.classList.contains("component__content--author-share")) {
    shareBubble.classList.remove("show");
    share.classList.remove("active");
  }
});
