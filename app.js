let button = document.querySelector(".btn");
let heading = document.querySelector("h1");

function getBgrc() {
  let body = document.body.style;
  let colors = ["purple", "green", "yellow", "pink", "orange"];
  let random = Math.ceil(Math.random() * colors.length);
  body.backgroundColor = colors[random];
}

button.addEventListener("click", getBgrc);

// setInterval(getBgrc, 2000);

// function getBtn() {
//   let random = Math.ceil(Math.random() * 10);
//   heading.innerText = random;
// }

// button.addEventListener("click", getBtn);
