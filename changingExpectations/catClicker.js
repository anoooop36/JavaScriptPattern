var data = {
    currentCat : null,
    adminMode: false,
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
        adminButtonView.init()
        adminView.init()
    },
    changeAdminMode: function () {
        data.adminMode = (data.adminMode === false)
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

var adminButtonView = {
    init: function () {
        this.adminButtonEle = document.getElementById('admin-button')
        this.render()
    },
    render: function () {
        this.adminButtonEle.addEventListener('click',function(){
            octopus.changeAdminMode()
            adminView.render()
        })
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
                    adminView.render()
                }
            })(cat))
            this.catListEle.appendChild(ele)
        });
    }
}

var adminView = {
    init: function () {
        this.adminAreaEle = document.getElementById('admin-area')
        this.nameLableEle = document.createElement('label')
        this.nameInputEle = document.createElement('input')
        this.imgLableEle = document.createElement('label')
        this.imgInputEle = document.createElement('input')
        this.numClickEle = document.createElement('label')
        this.clickInputEle = document.createElement('input')
        this.cancelEle = document.createElement('button')
        this.render()
    },
    render: function () {
        if (data.adminMode) {
            this.adminAreaEle.innerHTML = ''
        this.nameLableEle.innerHTML = 'Name  '
        this.adminAreaEle.appendChild(this.nameLableEle)
        
        this.nameInputEle.value = data.currentCat.name
        this.adminAreaEle.appendChild(this.nameInputEle)
        var brEle = document.createElement('br')
        this.adminAreaEle.appendChild(brEle)

        
        this.imgLableEle.innerHTML = 'Image URL  '
        this.adminAreaEle.appendChild(this.imgLableEle)
        
        this.imgInputEle.value = data.currentCat.imgPath
        this.adminAreaEle.appendChild(this.imgInputEle)
        var brElem = document.createElement('br')
        this.adminAreaEle.appendChild(brElem)

        
        this.numClickEle.innerHTML = '# clicks  '
        this.adminAreaEle.appendChild(this.numClickEle)
        
        this.clickInputEle.value = data.currentCat.clickCount
        this.adminAreaEle.appendChild(this.clickInputEle)
        var brElem = document.createElement('br')
        this.adminAreaEle.appendChild(brElem)

        var submitEle = document.createElement('button')
        submitEle.innerHTML = 'submit'
        let self = this
        submitEle.addEventListener('click',(function(){
            return function () {
                data.currentCat.name = self.nameInputEle.value
                data.currentCat.imgPath = self.imgInputEle.value
                data.currentCat.clickCount = self.clickInputEle.value
                catView.render()
                catListView.render()
            }
        })())
        this.adminAreaEle.appendChild(submitEle)
        this.cancelEle.addEventListener('click',() => {
            data.adminMode = false
            adminView.render()
        })
        this.cancelEle.innerHTML = 'Cancel'
        this.adminAreaEle.appendChild(this.cancelEle)
        } else {
            this.adminAreaEle.innerHTML = ''
        }
    }
}

octopus.init()