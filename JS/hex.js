
const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const hexBtn = document.querySelector("#btn");
const hexColorSelector = document.querySelector(".color");


hexBtn.addEventListener("click", () => {
  let hexColor = "#";
  for(let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
    document.body.style.backgroundColor = hexColor;
    hexColorSelector.textContent = hexColor;
  }
})

const getRandomNumber = () => {
  return Math.floor(Math.random() * hex.length);
}