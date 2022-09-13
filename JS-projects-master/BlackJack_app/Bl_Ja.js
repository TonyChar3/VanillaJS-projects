let player = {
    Name: "Tony",
    Chips: 234,
}

let cards = []
let sum = 0 
let hasBlackJack = false
let isAlive = false
let message = " "
let messEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardEl = document.getElementById('card-el')
let playerEl = document.getElementById("player-el")


playerEl.textContent = player.Name + ": $" + player.Chips


function getRandomCard(){
    let RandomCard = Math.floor(Math.random()*14) + 1
    if (RandomCard === 1){
        return RandomCard = 11 
    } else if (RandomCard >10){
        return RandomCard = 10
    } else{
        return RandomCard
    }
     
}
function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()

    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    sumEl.textContent ="Sum: " + sum
    cardEl.textContent = "Cards: "
    
    for(let i = 0; i < cards.length; i+=1){
        cardEl.textContent += cards[i] + " "
    }


    if(sum <= 20){
        message ="Do you want to draw a new card"
    } else if (sum === 21) {
        message = "Wohoo! You've got BlackJack!"
        hasBlackJack = true;
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messEl.textContent = message
    
}

function drawCard(){
    if (isAlive === true && hasBlackJack === false){
        let newCard = getRandomCard()
        sum += newCard
        cards.push(newCard)
    }
    renderGame()
}


















