const first = document.querySelector(".first");
const second = document.querySelector(".second");

second.addEventListener("mouseover", () => {
  first.classList.add("color");
});

second.addEventListener("mouseout", () => {
  first.classList.remove("color");
});
