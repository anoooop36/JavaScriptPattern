var data = {
    currentCat : null,
    catsArray : [{name: 'cat1', imgPath: './cat.jpg', clickCount:0}, {name: 'cat2', imgPath: './cat2.jpg', clickCount:0}, {name: 'cat3', imgPath: './cat3.jpg', clickCount:0}]
};

var octopus = {
    getCurrentCat: function () {
        return data.currentCat
    },
    setCurrentCat: function (cat) {
        data.currentCat = cat
    },
    getCats: function () {
        return data.catsArray
    },
    incrementClickCount: function () {
        data.currentCat.clickCount++
        catView.render()
    },
    init: function (){
        data.currentCat = data.catsArray[0]
        catView.init()
        catListView.init()
    }
}

var catView = {
    init: function () {
        this.catEle = document.getElementById('cat')
        this.catNameEle = document.getElementById('cat-name')
        this.catImgEle = document.getElementById('cat-image')
        this.catCountEle = document.getElementById('cat-count')
        this.catImgEle.addEventListener('click', (e) =>{
            octopus.incrementClickCount()
        })
        this.render()
    },
    render: function () {
        var currentCat = data.currentCat
        this.catNameEle.textContent = currentCat.name
        this.catCountEle.textContent =  currentCat.clickCount
        this.catImgEle.src = currentCat.imgPath
    }
}

var catListView = {
    init: function () {
        this.catListEle = document.getElementById('cat-list')
        this.render()
    },
    render: function () {
        var cats = octopus.getCats()
        this.catListEle.innerHTML = ''
        cats.forEach(cat => {
            var ele = document.createElement('li')
            ele.textContent = cat.name
            ele.addEventListener('click',(function (cat) {
                return function () {
                    octopus.setCurrentCat(cat)
                    catView.render()
                }
            })(cat))
            this.catListEle.appendChild(ele)
        });
    }
}

octopus.init()