// Random int
function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

// Populate grid
function populate(width, height) {
    const grid = document.querySelector('.grid');
    
    // Empty Grid
    while (grid.hasChildNodes()) {
        grid.removeChild(grid.lastChild);
    }

    for(let i = 0; i < height; i++) {
        const row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < width; j++) {
            const cell = document.createElement("div");
            cell.style.backgroundColor = `rgb(${getRandomInt(255)}, ${getRandomInt(255)}, ${getRandomInt(255)})`;
            cell.classList.add("cell");

            // Event listener to change the background color of the cell
            cell.addEventListener("mouseenter", () => {
                let color = cell.style.backgroundColor.slice(4);
                color = color.slice(0, color.length - 1);

                // Get each rgb value as array
                let rgb = color.split(', ');
                for (let i = 0; i < rgb.length; i++) {
                    rgb[i] = +rgb[i]; // Convert to int
                    rgb[i] -= 26;
                }

                cell.style.backgroundColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
            });

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
    populate(newWidth <= 100 ? newWidth : 100, newHeight <= 100 ? newHeight : 100);
}

// Initial Width, Height
const gridWidth = 16;
const gridHeight = 16;
populate(gridWidth, gridHeight);