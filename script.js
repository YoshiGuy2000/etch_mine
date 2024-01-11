const container = document.querySelector("#board")

function makeGrid(size) {
    console.log("This works")
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`

    let numDivs = size * size

    for (let c = 0; c < numDivs; c++) {
        let cell = document.createElement("div")
        cell.addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = "black";
        })
        container.insertAdjacentElement("beforeend", cell)

    }
}

makeGrid(16)