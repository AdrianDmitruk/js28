const element = document.querySelector(".animated");

element.addEventListener("click", () => {
  element.style.width = "300px";
  element.style.height = "300px";
  element.style.borderRadius = "50%";
});
