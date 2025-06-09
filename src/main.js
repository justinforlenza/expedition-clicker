let points = 100

let gustaveLevel = 0
let gLevel = document.getElementById('gLevel')

let luneLevel = 0
let lLevel = document.getElementById('lLevel')

let maelleLevel = 0
let mLevel = document.getElementById('mLevel')

let pointCounter = document.getElementById("pointCounter")

function changePoint(amount) {

    points = points + amount

    console.log(points)

    pointCounter.innerText = points.toFixed(2) + ' Lumina Points'
}

function buyGustave() {
    if (points >= 100) {
        changePoint(-100)
        gustaveLevel = gustaveLevel + 1
        gLevel.innerText = 'Level ' + gustaveLevel
    } else {
        alert("You poor")
    }
}

function buyMaelle() {
    if (points >= 10000) {
        changePoint(-10000)
        maelleLevel = maelleLevel + 1
        mLevel.innerText = 'Level ' + maelleLevel
    } else {
        alert("You poor")
    }
}

function buyLune() {
    if (points >= 10000000) {
        changePoint(-10000000)
        luneLevel = luneLevel + 1
        lLevel.innerText = 'Level ' + luneLevel
    } else {
        alert("You poor")
    }
}


function bigClick() {
    let basePoint = 1 + (gustaveLevel ** 1.05) + (maelleLevel ** 100.05)

    changePoint(basePoint)
}