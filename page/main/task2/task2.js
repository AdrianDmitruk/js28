const title = document.getElementById("title");
title.style.color = "blue";

const p = document.getElementsByClassName("p");
[...p].forEach((el) => {
  el.style.fontWeight = "bold";
});

const listItems = document.querySelectorAll("ul li");
listItems.forEach((li) => {
  li.textContent = "Новый список";
  li.classList.add("color");
});
