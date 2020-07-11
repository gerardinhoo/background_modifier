const colors = ["yellow", "blue", "tomato", "rgb(214, 132, 132)", "rgb(73, 191, 93)"];

// Get elements from the DOM
const btn = document.querySelector("#btn");
const colorDisplay = document.querySelector(".color")



// Add event listener
btn.addEventListener("click", () => {
  const randomNumber = getRandomNumber();
  colorDisplay.innerHTML = colors[randomNumber];
  document.body.style.backgroundColor = colors[randomNumber];

})

// Get randome Number function
const getRandomNumber = () => {
   return Math.floor(Math.random() * colors.length);
}