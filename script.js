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
  gridOutput.textContent = `${gridInput.value}x${gridInput.value}`;
}


//create Pixel
function createPixels() {

    //clear canvas
    canvas.replaceChildren();

  // take value of grid
    let gridSize = gridInput.value;
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


// reset button
const reset = document.querySelector("#resetButton");
reset.addEventListener('click', createPixels);

// eraser
const eraser = document.querySelector("#eraserButton");
let eraserActive = false;
eraser.addEventListener('click', () => {
    if (eraserActive) {
        eraser.style.backgroundColor = "transparent";
        eraserActive = false;
        
    }
    else {
        eraserActive = true;
        eraser.style.backgroundColor = "grey";
    }
    
    
});


// toggleRainbow state

function toggleRainbow() {
    if (rainbowActive) {
        rainbowActive = false;
        rainbow.style.background = "transparent";
        
    }
    else {
        rainbowActive = true;
        rainbow.style.background =
          "linear-gradient(45deg, pink, yellow, cyan, pink)";
        
    }
    
    
}

// get Rainbow color

function getRainbow() {
    if (rainbowActive) {
        let diff = 250 - 20;
        let r = (Math.floor(Math.random() * diff)) + 20;
        let g = (Math.floor(Math.random() * diff)) + 20;
        let b = Math.floor(Math.random() * diff) + 20;
        currentColor = `rgb(${r},${g},${b})`;
    }
    else {
        currentColor = color.value;
    }
   

}

// rainbow color 
let rainbowActive = false;
const rainbow = document.querySelector("#rainbow");

rainbow.addEventListener('click', toggleRainbow);
rainbow.addEventListener('click', getRainbow);

// change color

function changeColor() {
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach((pixel) => {
        pixel.addEventListener("mousedown", () => {
            if (eraserActive) {
                pixel.style.backgroundColor = "transparent";
                
              
            }
            else {
                pixel.style.backgroundColor = `${currentColor}`;
            }
      });
    });
    pixels.forEach((pixel) => {
      pixel.addEventListener("mousemove", () => {
       if (eraserActive) {
         pixel.style.backgroundColor = "transparent";
       } else {
         pixel.style.backgroundColor = `${currentColor}`;
       }
      });
    });
}



// access color element 
const color = document.querySelector("#color")
let currentColor = color.value;
color.addEventListener('input', () => {
    currentColor = color.value;
    
});


// set canvas eventListener
canvas.addEventListener("mouseover", getRainbow);
canvas.addEventListener('mousedown', changeColor);








