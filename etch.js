// Select the container
const gridContainer = document.querySelector(".container");

const squarePerSide = 16;
for (let i = 0; i < squarePerSide * squarePerSide; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    gridContainer.appendChild(square);
}