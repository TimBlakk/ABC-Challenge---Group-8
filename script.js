// Function to generate a random color
function getRandomColor() {
  const colors = ["green", "blue", "red"];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Function to apply random colors to an element
function applyRandomColors(element) {
  const randomColor1 = getRandomColor();
  let randomColor2 = getRandomColor();
  let randomColor3 = getRandomColor();

  // Ensure that all three colors are distinct
  while (randomColor2 === randomColor1) {
    randomColor2 = getRandomColor();
  }
  while (randomColor3 === randomColor1 || randomColor3 === randomColor2) {
    randomColor3 = getRandomColor();
  }

  element.style.color = randomColor1;
  element.style.backgroundColor = randomColor2;
  element.style.borderColor = randomColor3;
}

// Apply random colors when an h5 tag is clicked
const h5Tags = document.querySelectorAll("h5");
h5Tags.forEach((h5) => {
  h5.addEventListener("click", function () {
    applyRandomColors(this);
  });
});
