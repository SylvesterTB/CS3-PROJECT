var canvas = document.getElementById("canvas");
var isDrawing = false;
var borderStuff = "";
var clear = false;


function makeCanvasRows() {
    canvas.style.setProperty('--canvas-grid-rows', "20");
    canvas.style.setProperty('--canvas-grid-cols', "20");
    for (c = 0; c < (20 * 20); c++) {
        let cell = document.createElement("div");
        cell.addEventListener("mousedown", mouseDown)
        cell.addEventListener("mouseover", mouseOver)
        cell.addEventListener("mouseup", mouseUp)
        canvas.appendChild(cell).className = "canvas-grid-item";
    }

}

function getColor(element) {
    currentColor = element.style.backgroundImage;
    currentColor = currentColor.substring(currentColor.indexOf("rgb(")+4,currentColor.indexOf(")"));
    console.log("currentColor: " + currentColor);

}

function mouseDown() {
    this.style.backgroundColor = currentColor;
    // this.addEventListener("mouseover", mouseOver)
    isDrawing = true
    console.log("dasdasd")
}

function mouseOver() {
    if(isDrawing){
        this.style.backgroundColor = currentColor;

    }

}

function mouseUp() {
    isDrawing = false
}

var currentColor = "Black";



makeCanvasRows()