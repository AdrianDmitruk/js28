const elements = document.querySelectorAll("p, div");

const replaceText = (element, oldText, newText) => {
  const text = element.textContent;
  element.textContent = text.replace(oldText, newText);
};

elements.forEach((element) => {
  replaceText(element, "P", "DIV");
});
