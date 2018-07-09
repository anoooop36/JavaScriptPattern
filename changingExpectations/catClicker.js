var catClickedCount = 0
function incrementCount() {
    catClickedCount++
}


console.log('loaded')
document.getElementsByClassName('cat-image')[0].onclick = () => {
    console.log('clicked')
    incrementCount()
    document.getElementsByClassName('cat-count')[0].innerHTML = catClickedCount
}