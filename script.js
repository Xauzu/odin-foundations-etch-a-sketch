const gridWidth = 16;
const gridHeight = 16;

function populate() {
    const grid = document.querySelector('.grid');
    for(let i = 0; i < gridHeight; i++) {
        const row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < gridWidth; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            row.appendChild(cell);
        }
        grid.appendChild(row);
    }
    document.querySelector(".dimensionDisplay").textContent = gridWidth + " x " + gridHeight;
}

populate();