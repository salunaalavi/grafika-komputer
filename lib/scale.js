const btnScale = document.querySelector("#btn-scale")

btnScale.addEventListener('click', function() {
    recentSize[0] = 200
    recentSize[1] = 200
    recentSize[2] = 400
    recentSize[3] = 80
    let x = scaleXShape.value
    if (scaleXShape.value==0) {
        x = 1
    }

    if (recentShape == 'persegi') {
        persegi(recentSize[0]*x, recentSize[1]*x)
    }else if (recentShape == 'persegipanjang') {
        persegipanjang(recentSize[2]*x, recentSize[1]*x)
    }else if (recentShape == 'segitiga') {
        segitiga(recentSize[0]*x, recentSize[1]*x)
    }else if (recentShape == 'lingkaran') {
        lingkaran(recentSize[3]*x)
    }else if (recentShape == 'oval') {
        oval(recentSize[3]*x)
    }
})