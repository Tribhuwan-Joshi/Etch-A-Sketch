// define canvas
const canvas = document.querySelector(".canvas");
// get dimension of canvas
const canvasWidth = canvas.clientWidth;
const canvasHeight = canvas.clientHeight;


// define gridInput
const gridInput = document.querySelector("#gridInput");
gridInput.addEventListener("input", changeOutput);
gridInput.addEventListener("input", createPixels);

// change gridOutput
const gridOutput = document.querySelector("#gridOutput");

function changeOutput() {
  gridOutput.textContent = gridInput.value;
}


//create Pixel
function createPixels() {

    //clear canvas
    canvas.replaceChildren();

  // take value of grid
    let gridSize = gridOutput.textContent;
    for (let index = 0; index < gridSize*gridSize; index++) {
        const pixel = document.createElement("div");
        //take dimension of pixel
        const pixelHeight = canvasHeight / gridSize;
        const pixelWidth = canvasWidth / gridSize;
        pixel.style.cssText = `width:${pixelWidth}px;height:${pixelHeight}px;`;
        pixel.classList.add('pixel');
        canvas.appendChild(pixel);
        
    }
}

createPixels();



// access color element 
const color = document.querySelector("#color")
let currentColor = color.value;
color.addEventListener('input', () => {
    currentColor = color.value;
    console.log(currentColor)
});


// access all pixels
canvas.addEventListener('mousedown', ()=>{
    
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach((pixel) => {
        pixel.addEventListener("mousedown", () => {
            pixel.style.backgroundColor = `${currentColor}`;
        })
    })
     pixels.forEach((pixel) => {
       pixel.addEventListener("mousemove", () => {
         pixel.style.backgroundColor = `${currentColor}`;
       });
     });

});



