// define canvas
const canvas = document.querySelector(".canvas");
// get dimension of canvas
const canvasWidth = canvas.clientWidth;
const canvasHeight = canvas.clientHeight;

// define gridInput
const gridInput = document.querySelector("#gridInput");
gridInput.addEventListener('input', createPixels);
gridInput.addEventListener('input', changeOutput);
 




// change gridOutput
const gridOutput = document.querySelector("#gridOutput");
 
function changeOutput() {
   
    gridOutput.textContent = gridInput.value; 
}

function createPixels() {
    // take value of grid
    //take dimension of canvas
    //create pixel
    //set value of every pixel
}