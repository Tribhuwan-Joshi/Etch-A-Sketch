const canvas = document.querySelector(".canvas");

/* create pixel element */
-




function createPixel() {
    
    const canvasWidth = +canvas.clientWidth;
    const canvasHeight = +canvas.clientHeight;



}
// let gridSize = +document.getElementById("gridOutput").innerText;
let gridSize = 16;
const canvasWidth = +canvas.clientWidth;
const canvasHeight = +canvas.clientHeight;

let pixelWidth = canvasWidth / gridSize;
let pixelHeigth = canvasHeight / gridSize;
console.log(canvasHeight,canvasWidth);
console.log(pixelHeigth,pixelWidth);

for (let i = 0; i < gridSize * gridSize; i++) {
    const pixel = document.createElement('div');
    pixel.style.cssText = `height:${pixelHeigth}px;width:${pixelWidth}px;box-sizing:border-box;`;
    canvas.appendChild(pixel);
}
console.log(pixel.clientWidth);







