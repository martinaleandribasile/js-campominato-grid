const btnstrat = document.querySelector(".btn-success");
const gridbox = document.querySelector(".grid");
const container = document.querySelector(".container");


// funzioni utilizzate
let isEvenNumber = (i) => i % 2 === 0;

function createAppendCell(grid, maxNumberCells) {
    for (let i = 1; i <= maxNumberCells; i++) {
        const cell = document.createElement("div")
        cell.className = "square";
        cell.innerHTML = i;
        grid.append(cell);
        cell.addEventListener("click", function () {
            colorCells(cell, i)
            console.log(cell.innerHTML)
        });
    }
}

function colorCells(cell, i) {
    if (isEvenNumber(i) === true) {
        cell.classList.add("bg-success");
    }
    else {
        cell.classList.add("bg-danger")
    }
}



// codice effettivo
btnstrat.addEventListener("click", function () {
    container.innerHTML = ""
    container.appendChild(gridbox);
    let gridCells = createAppendCell(gridbox, 100)
})










