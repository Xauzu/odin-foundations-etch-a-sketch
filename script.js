// Populate grid
function populate(width, height) {
    const grid = document.querySelector('.grid');
    
    // Empty Grid
    while (grid.hasChildNodes)
        grid.removeChild(grid.lastChild);

    for(let i = 0; i < height; i++) {
        const row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < width; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            row.appendChild(cell);
        }
        grid.appendChild(row);
    }
    document.querySelector(".dimensionDisplay").textContent = width + " x " + height;
}

// Change grid to new dimension
function changeDimension() {
    const newWidth = prompt("Enter a new Width", "16");
    const newHeight = prompt("Enter a new Height", "16");
    populate(newWidth, newHeight);
}

// Initial Width, Height
const gridWidth = 16;
const gridHeight = 16;
populate(gridWidth, gridHeight);