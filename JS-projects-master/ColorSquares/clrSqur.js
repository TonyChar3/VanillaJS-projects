let title = document.getElementById('title')
let redSqur = document.getElementById('red')
let yellowSqur = document.getElementById('yellow')
let greenSqur = document.getElementById('green')
const clearBtn = document.getElementById('clear-btn')

// redSqur.onclick = () => console.log('you clicked red')
// yellowSqur.onclick = () => console.log('you clicked yellow')
// greenSqur.onclick = () => console.log('you clicked green')

const squares = document.querySelectorAll(".colorSqure")
// console.log(squares[0].value)
// console.log(squares[1].value)
// console.log(squares[2].value)

// forEach loop

squares.forEach(square => {
    square.onclick = () => square.innerHTML ++
})

clearBtn.onclick = () => ClearScores()
const ClearScores = ()=>{
    squares.forEach(square => square.innerHTML = '')
}