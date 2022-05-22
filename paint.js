let canvasView = document.querySelector("#canvas-view");

let context = canvasView.getContext("2d");

const rotateShape = document.querySelector("#rotate-shape")

const scaleXShape = document.querySelector("#scale-x-shape")
const scaleYShape = document.querySelector("#scale-y-shape")

let recentShape;
let recentCoordinateX;
let recentCoordinateY;
let recentSize = [];

let tempRotate;

let isDrawing = false;
var boundings = canvasView.getBoundingClientRect();
let mouseX = 0;
let mouseY = 0;

// Warna Bangun Datar
const getFillColorShape = document.querySelector("#fill-color-shape")
const getStrokeColorShape = document.querySelector("#stroke-color-shape")

let fillColorShape = "#FFFFFF"
let strokeColorShape = "#000000"

getFillColorShape.addEventListener('change',function(e) {
    fillColorShape = e.target.value
    drawCanvas()
})

getStrokeColorShape.addEventListener('change',function(e) {
    strokeColorShape = e.target.value
    drawCanvas()
})

function persegi(panjang, lebar, rotateShape, scaleSize = []) {
    refreshCanvas()
    recentShape = 'persegi'
    if (recentSize.length > 0) {
        recentSize = []
    }
    recentSize.push(panjang,lebar)

    let midPointX = (canvasView.width)/2
    let midPointY = (canvasView.height)/2
    context.translate(midPointX, midPointY)

    recentCoordinateX = midPointX-(panjang/2)
    recentCoordinateY = midPointY-(lebar/2)

    context.beginPath()
    if (rotateShape != 0) {
        context.rotate(Math.PI / 180 * rotateShape)
    }

    if (scaleSize.length > 0) {
        context.setTransform(scaleSize[0], 0, 0, scaleSize[1],midPointX, midPointY)
    }
    context.strokeStyle = strokeColorShape
    context.fillStyle = fillColorShape

    context.rect(-(panjang/2),-(lebar/2),panjang,lebar)
    context.closePath();
    drawCanvas()
}

function persegipanjang(panjang, lebar, rotateShape, scaleSize = []) {
    refreshCanvas()
    recentShape = 'persegipanjang'
    if (recentSize.length > 0) {
        recentSize = []
    }
    recentSize.push(panjang,lebar)

    let midPointX = (canvasView.width)/2
    let midPointY = (canvasView.height)/2
    context.translate(midPointX, midPointY)

    recentCoordinateX = midPointX-(panjang/2)
    recentCoordinateY = midPointY-(lebar/2)

    context.beginPath()
    if (rotateShape != 0) {
        context.rotate(Math.PI / 180 * rotateShape)
    }

    if (scaleSize.length > 0) {
        context.setTransform(scaleSize[0], 0, 0, scaleSize[1],midPointX, midPointY)
    }
    context.strokeStyle = strokeColorShape
    context.fillStyle = fillColorShape

    context.rect(-(panjang/2),-(lebar/2),panjang,lebar)
    context.closePath();
    drawCanvas()
}

function segitiga(alas, tinggi, rotateShape, flipX = 'odd', flipY = 'odd') {
    refreshCanvas()
    recentShape = 'segitiga'
    if (recentSize.length > 0) {
        recentSize = []
    }
    recentSize.push(alas,tinggi)

    let midPointX = (canvasView.width)/2
    let midPointY = (canvasView.height)/2
    context.translate(midPointX, midPointY)

    recentCoordinateX = midPointX+alas/2
    recentCoordinateY = midPointY-tinggi/2

    context.beginPath();
    if (rotateShape != 0) {
        context.rotate(Math.PI / 180 * rotateShape)
    }

    if (flipX == 'odd' && flipY == 'odd') {
        context.moveTo(alas/2, -tinggi/2)
        context.lineTo(alas/2,tinggi/2)
        context.lineTo(-alas/2,tinggi/2)
    }else if (flipX =='even') {
        context.moveTo(-alas/2, -tinggi/2)
        context.lineTo(alas/2,tinggi/2)
        context.lineTo(-alas/2,tinggi/2)
    }else if (flipY == 'even') {
        context.moveTo(-alas/2,-tinggi/2)
        context.lineTo(alas/2,tinggi/2)
        context.lineTo(alas/2, -tinggi/2)
    }
    context.closePath();
    drawCanvas()
}

function lingkaran(radius) {
    refreshCanvas()
    recentShape = 'lingkaran'
    if (recentSize.length > 0) {
        recentSize = []
    }
    recentSize.push(radius)

    recentCoordinateX = canvasView.width/2
    recentCoordinateY = canvasView.height/2

    context.beginPath();
    context.arc(recentCoordinateX, recentCoordinateY, radius, Math.PI * 0, Math.PI * 2);
    context.closePath();
    drawCanvas()
}

function oval(radius, rotateShape) {
    refreshCanvas()
    recentShape = 'oval'
    if (recentSize.length > 0) {
        recentSize = []
    }
    recentSize.push(radius)

    let midPointX = (canvasView.width)/2
    let midPointY = (canvasView.height)/2

    context.translate(midPointX, midPointY)

    recentCoordinateX = midPointX
    recentCoordinateY = midPointY

    if (rotateShape != 0) {
        context.rotate(Math.PI / 180 * rotateShape)
    }

    context.scale(1, 0.75)

    context.beginPath();
    context.arc(0, 0, radius, 0, Math.PI * 2, false);
    context.closePath();
    drawCanvas()
}

function drawCanvas() {
    context.fillStyle = fillColorShape
    context.strokeStyle = strokeColorShape

    context.fill()
    context.stroke()
}

function refreshCanvas() {
    rotateShape.value = 0
    context.restore();
    context.setTransform(1,0,0,1,0,0);
    context.clearRect(0, 0, canvasView.width, canvasView.height)
}