console.log("Js ok bonus")

const btnStart = document.querySelector(".btn-success");
const gridBox = document.querySelector(".grid");
const container = document.querySelector(".container");
let cells = [];


//funzioni
/*function randomNumberFunction(min, max) {
    numberGenerate = Math.floor(Math.random() * max) + min;
    return numberGenerate
}*/

function changeColor(cell) {
    let classColor = parseInt(cell.innerHTML) % 2 === 0 ? "bg-success" : "bg-danger"
    cell.classList.add(classColor)
}

function generateArrayCells(maxindex) {
    let arrayNumbers = generateNumberArray()
    for (let i = 0; i < maxindex; i++) {
        let cell = document.createElement("div");
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

function generateNumberArray() {
    let arrayNumbers = []
    for (let index = 1; index <= 100; index++) {
        arrayNumbers.push(index)
    }
    console.log(arrayNumbers)
    arrayNumbers.sort(function () {
        let random = Math.round(Math.random())
        return random === 1 ? 1 : -1;
    })
    return arrayNumbers

}
/*

function alternativeRandomArray(){
let array=[]
while (array.length < 100) {
    let number = randomNumberFunction(1, 100);
   if (!array.includes(number)){
    array.push(number)
   }
}
return array
}
*/


// codice al click start
btnStart.addEventListener("click", function () {
    container.innerHTML = ""
    cells = generateArrayCells(100);
    container.appendChild(gridBox);

})






