const colorButton = document.getElementById("colorButton");
const colorNameElement = document.getElementById("color");
const Hex = document.getElementById("Hex");
const Simple = document.getElementById("Simple");
const Flipper = document.getElementById("Flipper");
const Bg = document.getElementById("Bg");

let colorMode = "simple";

const selectHex = () => {
  colorMode = "hex";
};
const selectSimple = () => {
  colorMode = "simple";
};
const selectFlipper = () => {
  const flippedMode = colorFlipperGenerator();
  console.log(flippedMode);
  colorMode = flippedMode; // simple, hex
};

const colorFlipper = ["hex", "simple"];
const colorFlipperGenerator = () => {
  const colorFlipperIndex = Math.floor(Math.random() * colorFlipper.length);

  if (colorMode === "hex" && colorFlipper[colorFlipperIndex] === "hex") {
    return "simple";
  }

  if (colorMode === "simple" && colorFlipper[colorFlipperIndex] === "simple") {
    return "hex";
  }

  return colorFlipper[colorFlipperIndex];
};

colorButton.addEventListener("click", changeBackgroundColor);

Hex.onclick = selectHex;
Simple.onclick = selectSimple;
Flipper.onclick = selectFlipper;

const colors = ["red", "blue", "turquoise", "pink", "green", "yellow"];
const randomColorGenerator = () => {
  const colorIndex = Math.floor(Math.random() * colors.length);
  return colors[colorIndex];
};

function changeBackgroundColor() {
  let randomColor = "";
  if (colorMode === "hex") {
    randomColor = randomColorGeneratorHex();
  } else {
    randomColor = randomColorGenerator();
  }

  Bg.style.backgroundColor = randomColor;
  colorNameElement.style.color = randomColor;

  colorNameElement.innerHTML = randomColor;
}

const randomColorGeneratorHex = () => {
  const hexChar = ["0", "1", "2", "3", "A", "B", "C", "D", "E"];

  const hexColorChar = () => {
    const hexCharIndex = Math.floor(Math.random() * hexChar.length);
    const char = hexChar[hexCharIndex];

    return char;
  };

  let hexColor = "#";

  for (let i = 0; i < 6; i++) {
    const hexChar = hexColorChar();

    hexColor += hexChar;
  }

  return hexColor;
};
