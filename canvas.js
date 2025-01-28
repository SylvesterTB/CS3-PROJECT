import rgbHex from "rgb-hex";


var canvas = document.getElementById("canvas");
var isDrawing = false;
var borderStuff = "";
var clear = false;
var currentColor = "#000000";
var tempColor = "255, 255, 255";

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
    console.log("makeCanvasRows");
}

const newColor = rgbHex(tempColor);

console.log(newColor);

//
// const componentToHexes = (c) => {
//     const hex = c.toString(16);`
//     return hex.length == 1 ? "0" + hex : hex;
// }
//
// const rgbToHex = (r, g, b) => {
//     return "#" + componentToHexes(r) + componentToHexes(g) + componentToHexes(b);
// }
//
// function splitColor(color) {
//     color.split(", ");
//     return color;
// }
//
// console.log(rgbToHex(splitColor(tempColor)));



function getColor(element) {
    currentColor = element.style.backgroundImage;
    console.log("currentColor: " + currentColor);
    currentColor = currentColor.substring(currentColor.indexOf("rgb(")+4,currentColor.indexOf(")"));
    console.log("currentColor: " + currentColor);
    return currentColor;
}

function mouseDown() {
    this.style.backgroundColor = currentColor;
    // console.log("mousedown color" + getColor(element));
    // this.addEventListener("mouseover", mouseOver)
    isDrawing = true;
    console.log("mouseDown");
}

function mouseOver() {
    if(isDrawing){
        this.style.backgroundColor = currentColor;
        console.log(currentColor);
    }
    console.log("mouseOver");
}

function mouseUp() {
    isDrawing = false
    console.log("mouseUp");
}





makeCanvasRows()