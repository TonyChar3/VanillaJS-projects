// HELP

// const randomFruitSelector = (fruits) =>{
//     const randomNumber = Math.floor(Math.random()*fruits.length)

//    return fruits[randomNumber]
// }
// let fruits = ['Banana','Ananas','Apple','Cookie']
// console.log(randomFruitSelector(fruits))

// const weatherScore = (weather)=>{
//     let score = 0

//     if (weather === 'Rainy'){
//         score = 1
//     }else if (weather === 'overcast'){
//         score = 0
//     }else if (weather === 'sunny'){
//         score = -1
//     }

//     return score
// }
// ********************************
// Object
const Totalscores = {computerScore: 0, playerScore: 0}

// inputs and buttons from the DOM
let ResltInp = document.getElementById('result')
let HandsInp = document.getElementById('hands')
let PlyrScore = document.getElementById('player-score')
const bUttons = document.querySelectorAll('.rpsButton')

// generate the compute choice
function getComputerChoice(){
    // array for the all of the possible choices
    let choices = ['Rock','Paper','Scissors']

    // generate a random index number 
    const rndomIndex = Math.floor(Math.random()*choices.length)

    // get the element that is situated in the array at the random index
    return choices[rndomIndex]
}

// to get the score between the two choices
function getResult(playerChoice, computerChoice){
    // variable for the score
    let score

    // if its the same (Draw)
    if (playerChoice === computerChoice){
        score = 0
     //All of the possible wins for the player 
    }else if (playerChoice === 'Rock' && computerChoice === 'Scissors'){
        score = 1
        Totalscores['computerScore'] --
    }else if(playerChoice === 'Scissors' && computerChoice === 'Paper'){
        score = 1
        Totalscores['computerScore'] --
    }else if (playerChoice === 'Paper' && computerChoice === 'Rock'){
        score = 1
        Totalscores['computerScore'] --
    // if the computer wins
    }else{
        score = -1
        Totalscores['computerScore'] +=1
    }
    // return the value of the score
    return score
}


// To manipulate the DOM and show the results to the user
function showResult(score, playerChoice, computerChoice){
    
    if (score === 1){
        ResltInp.innerText = `You win!`
        HandsInp.innerHTML = `You: ${playerChoice} vs AI: ${computerChoice}`
        PlyrScore.innerText = `The Ai: ${Totalscores['computerScore']} You: ${Totalscores['playerScore']}`
    }else if(score === -1){
        ResltInp.innerText = `You Lose!`
        HandsInp.innerHTML = `You: ${playerChoice} vs AI: ${computerChoice}`
        PlyrScore.innerText = `The Ai: ${Totalscores['computerScore']} You: ${Totalscores['playerScore']}`
    }else{
        ResltInp.innerText = `Draw!`
        HandsInp.innerHTML = `You: ${playerChoice} vs AI: ${computerChoice}`
        PlyrScore.innerText = `The Ai: ${Totalscores['computerScore']} You: ${Totalscores['playerScore']}`
    }
}

// When the player click a button
function onClickRPS(playerChoice){
    // Get the computer random choice
    const computerChoice = getComputerChoice()

    // Get the calculated score
    const score = getResult(playerChoice, computerChoice)

    // update the Totalscores object
    Totalscores['playerScore'] += score

    // Update the DOM
    showResult(score, playerChoice, computerChoice)
    
}

// Render the game
function playGame(){
    // To get access to the buttons of the DOM
    const rpsButtons = document.querySelectorAll('.rpsButton')
    const endButtn = document.getElementById('endGameButton')
    
    // If one of the three buttons is clicked by the player
    rpsButtons.forEach(rpsButton => {
        rpsButton.onclick = () => onClickRPS(rpsButton.value)
    })

    // if the user wants to clear the game
    endButtn.onclick = () => endGame()
}

// to clear the whole game
function endGame(){
    Totalscores['playerScore'] = 0
    ResltInp.innerText = ``
    HandsInp.innerText = ``
    PlyrScore.innerText =``
}

playGame()