var catClickedCountOne = 0
var catClickedCountTwo = 0
function incrementCountOne() {
    catClickedCountOne++
}

function incrementCountTwo () {
    catClickedCountTwo++
}


console.log('loaded')
document.getElementsByClassName('cat-image-one')[0].onclick = () => {
    console.log('clicked')
    incrementCountOne()
    document.getElementsByClassName('cat-count-one')[0].innerHTML = catClickedCountOne
}

document.getElementsByClassName('cat-image-two')[0].onclick = () => {
    console.log('clicked')
    incrementCountTwo()
    document.getElementsByClassName('cat-count-two')[0].innerHTML = catClickedCountTwo
}