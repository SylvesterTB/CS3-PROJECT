var currentColor = "Black";

function getColor(element) {
    console.log("test");
    currentColor = element.style.backgroundImage; // Use the passed `element`
    console.log(currentColor);
    currentColor = currentColor.substring(30,43);
    console.log(currentColor);

}


// function useColor()
// {
//
// }
