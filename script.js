const gridSize = +prompt("Enter grid size \n eg. 16X16 , 2X2")
const sketchBoard = document.querySelector(".container");
let pieceOpacity = 0.2;

function randomColorGenerator() {
    let color = "#";
    let hex = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]

    for(let i = 1;i <= 6;i++){
        let num = Math.floor(Math.random()*16)
        color += hex[num]
    }

    return color
}

function addSketchPieces() {

    for (let i = 1; i <= gridSize * gridSize; i++) {
        const piece = document.createElement("div")
        piece.style = `height : ${600/gridSize}px ; width : ${600/gridSize}px`
        piece.style.cursor = "pointer"
        piece.style.opacity = pieceOpacity
        piece.classList.add("sketch-piece")
        sketchBoard.append(piece)
    }

}


addSketchPieces()
randomColorGenerator()
const pieces = document.querySelectorAll(".sketch-piece")
pieces.forEach((piece,index)=>{
    piece.addEventListener("mouseover",()=>{
        if (pieceOpacity < 1) {
            pieceOpacity = pieceOpacity + 0.01
        }
        piece.style.opacity = pieceOpacity
        piece.style.backgroundColor = randomColorGenerator()
        
    })
})