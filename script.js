function makeRows() {
    colors.style.setProperty('--grid-rows', 100);
    colors.style.setProperty('--grid-cols', 100);
    for (c = 0; c < (10 * 2); c++) {
        let cell = document.createElement("div");
        colors.appendChild(cell).className = "grid-item";
    };

};

makeRows()
