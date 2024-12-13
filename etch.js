// Select the container
const gridContainer = document.querySelector(".grid-container");

const squarePerSide = 16;
for (let i = 0; i < squarePerSide * squarePerSide; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    gridContainer.appendChild(square);
}

// Add an event Listener to each square
const squares = document.querySelectorAll(".square");
squares.forEach((square) => {
    square.addEventListener("mouseover", () =>{
        square.style.backgroundColor = "teal";
    });
});

