const btnRotate = document.querySelector("#btn-rotate")

btnRotate.addEventListener('click', function(e) {
    if (recentShape == 'persegi') {
        persegi(recentSize[1], recentSize[0], rotateShape.value)
    }else if (recentShape == 'persegipanjang') {
        persegipanjang(recentSize[0], recentSize[1], rotateShape.value)
    }else if (recentShape == 'segitiga') {
        segitiga(recentSize[0], recentSize[1], rotateShape.value)
    }else if (recentShape == 'oval') {
        oval(recentSize[0], rotateShape.value)
    }
})