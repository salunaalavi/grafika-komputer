let checkX = 'odd'
let checkY = 'odd'

function flipHorizontal() {
    if(recentShape='segitiga'){
        
    checkY = 'odd'

    if (checkX == 'odd') {
        checkX = 'even'
    }else{
        checkX = 'odd'
    }

    segitiga(recentSize[0], recentSize[1],0,checkX,checkY)
    }
}

function flipVertical() {
    if(recentShape='segitiga'){
        
    checkX = 'odd'

    if (checkY == 'odd') {
        checkY = 'even'
    }else{
        checkY = 'odd'
    }
    segitiga(recentSize[0], recentSize[1],0,checkX,checkY)
    }
    return 0
}