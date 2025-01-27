var container = document.getElementById("container");
var isDrawing = false;
var currentColor = "black";
var borderStuff = "";
var clear = false;

function makeRows() {
    container.style.setProperty('--grid-rows', 100);
    container.style.setProperty('--grid-cols', 100);
    for (c = 0; c < (100 * 100); c++) {
        let cell = document.createElement("div");

        // Change to click event
        cell.addEventListener("mousedown", mouseDown)
        cell.addEventListener("mouseover", mouseOver)
        cell.addEventListener("mouseup", mouseUp)
        container.appendChild(cell).className = "grid-item";
    };

};

// Rename this function if you want (optional)
function mouseDown() {
    this.style.backgroundColor = currentColor;
    // this.addEventListener("mouseover", mouseOver)
    isDrawing = true
}

function mouseOver() {
    if(isDrawing){
        this.style.backgroundColor = currentColor;

    }

}

function mouseUp() {
    isDrawing = false
}

function changeRed()
{
    currentColor = "red"
    let currentElement = document.getElementById("selectRed")
    console.log(currentElement)
    currentElement.style.border = "blue 2px solid"
    // this.focus();
}


function clearScreen() {
    // console.log("clear")
    var grid_select = document.getElementsByClassName("grid-item");
    console.log(grid_select)
    // const grid_select = document.querySelector("grid-item")
    // containerSelect.style.backgroundColor ="white"
    grid_select.style.backgroundColor = "green"
    // grid_select.style.setProperty('--randomcolor', "blue");

}

function erase() {
    currentColor = "white"
}

makeRows()
