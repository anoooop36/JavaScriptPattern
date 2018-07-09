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
    document.getElementsByClassName('cat-count')[0].innerHTML = "<img src='./cat.jpg' class='cat-image-one'/>"
}

document.getElementsByClassName('cat-image-two')[0].onclick = () => {
    document.getElementsByClassName('cat-count')[0].innerHTML = "<img src='./cat2.jpg' class='cat-image-two'/>"
}

document.getElementsByClassName('cat-image-three')[0].onclick = () => {
    document.getElementsByClassName('cat-count')[0].innerHTML = "<img src='./cat3.jpg' class='cat-image-three'/>"
}