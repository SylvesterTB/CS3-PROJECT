var canvas = document.getElementById("canvas");
var isDrawing = false;
// import isDrawing from "draw";

var borderStuff = "";
var clear = false;
var currentColor = "#000000";
var tempColor = "255, 255, 255";

function makeCanvasRows() {
    canvas.style.setProperty('--canvas-grid-rows', "40");
    canvas.style.setProperty('--canvas-grid-cols', "40");
    for (var c = 0; c < (40 * 40); c++) {
        let cell = document.createElement("div");
        cell.addEventListener("mousedown", mouseDown)
        cell.addEventListener("mouseover", mouseOver)
        cell.addEventListener("mouseup", mouseUp)


        canvas.appendChild(cell).className = "canvas-grid-item";
    }
}

const componentToHex = (k) => {
    const hex = k.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

const rgbToHex = (r, g, b) => {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function newColor(inputColor) {
    return inputColor.split(", ");
}

function getColor(element) {
    currentColor = element.style.backgroundImage;
    console.log("currentColor: " + currentColor);
    currentColor = currentColor.substring(currentColor.indexOf("rgb(")+4,currentColor.indexOf(")"));
    console.log("currentColor: " + currentColor);
    currentColor = rgbToHex(parseInt(newColor(currentColor)[0]),parseInt(newColor(currentColor)[1]),parseInt(newColor(currentColor)[2]))
    return currentColor;
}

function mouseDown() {
    this.style.backgroundColor = currentColor;

    isDrawing = true;
}

function mouseOver() {
    if(isDrawing){
        this.style.backgroundColor = currentColor;
    }
}

function mouseUp() {
    isDrawing = false
}

makeCanvasRows()