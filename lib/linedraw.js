// Lebar garis
const getLineWidth = document.querySelector("#lineWidth")
let initialLineWidth = getLineWidth.value = 1

context.lineWidth = initialLineWidth; 

getLineWidth.addEventListener('input',function(e) {
    context.lineWidth = e.target.value
    lineWidthView.innerHTML = e.target.value
})

// Warna Garis
const getStrokeColor = document.querySelector("#stroke-color")
context.strokeStyle = getStrokeColor.value; // initial brush color

getStrokeColor.addEventListener('input',function(e) {
    context.strokeStyle = e.target.value
})

// Type Garis
const getLineType = document.querySelector("#line-type")
const lineWidthView = document.querySelector("#line-width-value")
let lineType = 'solid'

getLineType.addEventListener('change', function(e) {
    lineType = e.target.value
})

function setMouseCoordinates(e) {
    mouseX = e.clientX - boundings.left;
    mouseY = e.clientY - boundings.top;
}

// Mouse ditekan
canvasView.addEventListener('mousedown',function(e) {
    setMouseCoordinates(e)
    isDrawing = true

    // Mulai gambar
    context.beginPath()
    context.moveTo(mouseX, mouseY);  
})

// Mouse Bergerak
canvasView.addEventListener('mousemove',function(e) {
    setMouseCoordinates(e)
    if(isDrawing){
        if (lineType == 'solid') {
            context.setLineDash([0]);
        }else if (lineType == 'dashed') {
            context.setLineDash([15]);
        }
        context.lineTo(mouseX, mouseY);
        context.stroke();
    }
})

// Mouse dilepas
canvasView.addEventListener('mouseup', function(e) {
    setMouseCoordinates(e)
    isDrawing = false
})