function translation(oldNode, T) {
    let recentX = oldNode.x + T.x
    let recentY = oldNode.y + T.y

    return {x: recentX, y: recentY}
}

function atas() {
    moveObject(0,-10)
}

function kiri() {
    moveObject(-10,0)
}

function kanan() {
    moveObject(10,0)
}

function bawah() {
    moveObject(0,10)
}

function moveObject(x, y) {
    refreshCanvas()
    if (recentShape == 'persegi') {
        context.beginPath();
        context.rect(recentCoordinateX+x,recentCoordinateY+y,recentSize[0], recentSize[1])
        context.closePath();
        drawCanvas()
    }else if (recentShape == 'segitiga') {
        context.beginPath();
        context.moveTo(recentCoordinateX+x, recentCoordinateY+y);
        context.lineTo(recentCoordinateX+x,(recentCoordinateY+y)+recentSize[1]);
        context.lineTo((recentCoordinateX+x)-recentSize[0],recentCoordinateY+y+recentSize[1]);
        context.closePath();
        drawCanvas() 
    }else if (recentShape == 'lingkaran') {
        console.log(recentSize[0]);
        context.beginPath();
        context.arc(recentCoordinateX+x, recentCoordinateY+y, recentSize[0], Math.PI * 0, Math.PI * 2);
        context.closePath();
        drawCanvas()
    }else if (recentShape == 'oval') {
        console.log(recentSize[0]);
        context.beginPath();
        context.scale(1, 0.75)
        context.arc(recentCoordinateX+x, recentCoordinateY+y+(recentSize[0])+(0.25*recentSize[0]), recentSize[0], 0, Math.PI * 2, false);
        context.closePath();
        drawCanvas()
    }else if (recentShape == 'persegipanjang') {
        context.beginPath();
        context.rect(recentCoordinateX+x,recentCoordinateY+y,recentSize[0], recentSize[1])
        context.closePath();
        drawCanvas()
    }
    recentCoordinateX = recentCoordinateX+x
    recentCoordinateY = recentCoordinateY+y
}