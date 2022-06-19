const button = document.querySelector("button");
const flash = document.querySelector("flash");

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function generateRand(length) {
  const number = Math.floor(Math.random() * length);
  return number;
}

function generateHexCode() {
  let dt = "#";
  for (let i = 0; i < 6; i++) {
    dt += hex[generateRand(hex.length)];
  }

  return dt;
}

button.addEventListener("click", function () {
  console.log("Hanlde button for generate");
  const data = generateHexCode();
  const viewDiv = document.querySelector(".view");
  const body = document.body;

  body.style.backgroundColor = data;

  viewDiv.textContent = data;
});

flash.addEventListener("click");
