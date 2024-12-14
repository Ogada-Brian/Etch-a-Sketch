# Etch-a-Sketch

This project is a browser-based Etch-a-Sketch application where users can draw by hovering over a grid of squares. The grid size is dynamic and can be reset based on user input.

## Features

- A **16x16 grid** is displayed by default.
- Hover over squares to change their color and create a drawing effect.
- A **"New Grid"** button allows users to reset the grid with a custom number of squares per side.
- Dynamically adjusts square sizes to fit within a 960px by 960px container.
- Designed with **Flexbox** for layout control.

## Technologies Used

- **HTML**: Structure of the webpage.
- **CSS**: Styling for the grid and squares.
- **JavaScript**: Handles dynamic grid creation and interactivity.

## How It Works

1. Open the project in a web browser.
2. Hover over squares to leave a "trail" by changing their background color.
3. Click the **"New Grid"** button to reset the grid size:
   - A prompt will ask you to enter the number of squares per side (maximum 100).
   - A new grid will be generated with the entered dimensions.

## File Structure

### `etch.js`
Contains JavaScript code for:
- Creating and resetting the grid dynamically.
- Adding hover effects to the grid squares.
- Handling user input for custom grid sizes.

### `etch.html`
The HTML file for the project structure. Includes:
- A container for the grid.
- A linked CSS file for styling and a JavaScript file for functionality.

### `etch.css`
Contains CSS code for:
- Styling the grid container and squares.
- Using Flexbox to display the grid in rows and columns.
- Ensuring squares maintain an equal width and height.

## How to Run

1. Clone or download this repository.
2. Open `etch.html` in your browser.
3. Enjoy the Etch-a-Sketch experience!

## Notes

- The maximum grid size is limited to **100x100** to ensure performance.
- Ensure your browser supports modern JavaScript features (e.g., `ES6` syntax) and Flexbox for the best experience.

## Future Improvements

- Add color customization options for the drawing effect.
- Implement a "clear grid" button to erase all drawings.
- Add functionality for gradient colors or randomized colors.

