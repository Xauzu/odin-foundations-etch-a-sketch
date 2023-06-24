function populate(width, height) {
    const grid = document.querySelector('.grid');
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

// Initial Width, Height
const gridWidth = 16;
const gridHeight = 16;
populate(gridWidth, gridHeight);