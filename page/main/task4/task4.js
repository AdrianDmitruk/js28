const img = document.querySelector("img");

img.addEventListener("mouseover", () => {
  img.src = "../../../img/2.jfif";
  img.alt = "2";
  img.width = 500;
});

img.addEventListener("mouseout", () => {
  img.src = "../../../img/1.jfif";
  img.alt = "1";
  img.width = 400;
});
