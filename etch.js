// Select the container
const gridContainer = document.querySelector(".grid-container");

const squarePerSide = 16;

// Function to create new grid
function createGrid(squaresPerSide) {
    // Clear existing grid
    gridContainer.innerHTML = "";
   
    // Calculate the size of each square
    const squareSize = 960 / squaresPerSide; // Container size divided by grid size

    // Create squares and append to container
    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        const square = document.createElement("div");
        square.classList.add("square");

        // Dynamically set square size
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        // Add hover effect
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "teal";
        });

        gridContainer.appendChild(square);
    }
}

// Initialize the grid
createGrid(squarePerSide);

// OPTIONAL: Add a button to reset the grid dynamically
const button = document.createElement("button");
button.textContent = "New Grid";
button.style.marginBottom = "20px";
button.addEventListener("click", () => {
    let userInput = prompt("Enter number of squares per side (max 100):");

    // Validate input
    userInput = Number(userInput);
    if (!Number.isInteger(userInput) || userInput < 1 || userInput > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }

    // Create a new grid
    createGrid(userInput);
});
document.body.insertBefore(button, gridContainer);

