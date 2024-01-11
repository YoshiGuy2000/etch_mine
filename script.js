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

function selectSize() {
    let size = prompt("Please enter the size of box you would like from 1 to 100: ")
    if (size == "") {
        document.querySelector("#error").textContent = "You did not choose a size!"
    }

    else if (size < 1 || size > 100) {
        document.querySelector("#error").textContent = "Your choice was out of bounds!"
    }

    else {
        document.querySelector("#error").textContent = "The grid is set!"
        makeGrid(size)
    }

}

makeGrid(16)