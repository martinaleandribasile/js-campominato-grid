console.log("Js ok")

const btnStart = document.querySelector(".btn-success");
const gridBox = document.querySelector(".grid");
const container = document.querySelector(".container");
let cells = [];


//funzioni
function randomNumberFunction(min, max) {
    numberGenerate = Math.floor(Math.random() * max) + min;
    return numberGenerate
}

function changeColor(cell) {
    let classColor = parseInt(cell.innerHTML) % 2 === 0 ? "bg-success" : "bg-danger"
    cell.classList.add(classColor)
}

function generateArrayCells(minindex, maxindex) {
    for (let i = 0; i < maxindex; i++) {
        let cell = document.createElement("div");
        let arrayNumbers = generateNumberArray(100)
        cell.className = "square"
        cell.innerHTML = arrayNumbers[i];
        cell.addEventListener("click", function () {
            console.log(arrayNumbers[i])
            changeColor(cell)
        })
        gridBox.appendChild(cell)
    }
    return gridBox
}

function generateNumberArray(max) {
    let array = []
    while (array.length < max) {
        let number = randomNumberFunction(1, 100);
        console.log(number)
        let numbernew = true;
        let i = 0
        do {
            if (number === array[i]) {
                numbernew = false;
            }
            i++
        } while (i < array.length)

        if (numbernew) {
            array.push(number)
        }
    }
    return array
}


// codice al click start
btnStart.addEventListener("click", function () {
    container.innerHTML = ""
    cells = generateArrayCells(1, 100);
    container.appendChild(gridBox);

})






