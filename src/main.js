let points = 1000

let gustaveLevel = 0
let gLevel = document.getElementById('gLevel')

let pointCounter = document.getElementById("pointCounter")

function changePoint(amount) {

    points = points + amount

    console.log(points)

    pointCounter.innerText = points + ' Lumina Points'
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