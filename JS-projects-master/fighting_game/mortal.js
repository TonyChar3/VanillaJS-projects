let playBtn = document.getElementById('play')
let resultDiv = document.getElementById('result')
let p1NameDiv = document.getElementById('p1Name')
let p2NameDiv = document.getElementById('p2Name')
let p1HealthDiv = document.getElementById('p1Health')
let p2HealthDiv = document.getElementById('p2Health') 


const updateGame = (p1,p2,gameState) => {
    // update the names and health of the players
    p1NameDiv.innerText = p1.name
    p2NameDiv.innerText = p2.name

    p1HealthDiv.innerText = p1.health
    p2HealthDiv.innerText = p2.health

    // determine if the game is over and declare the winner
    if(p1.health <= 0 || p2.health <= 0){
        game.isOver = true
        gameState = game.isOver

        resultDiv.innerText = game.declareWinner(game.isOver,p1,p2)
        return gameState
    }

}

// Class for the players
class Player{
    constructor(name, health, attackDamage) {
        this.name = name
        this.health = health
        this.attackDamage = attackDamage
    }

    strike(player, enemy, attackDmg){
        let damgAmnt = Math.ceil(Math.random() * attackDmg)
        
        enemy.health -= damgAmnt
        updateGame(p1,p2,game.isOver)

        return `${player.name} attacks ${enemy.name} for ${damgAmnt}`
    }

    heal(player){
        let hpAmnt = Math.ceil(Math.random()*5)
        player.health += hpAmnt
        updateGame(p1,p2,game.isOver)
        return `${player.name} heals for ${hpAmnt}HP`
    }
}



// Class to run the game
class Game{
    constructor(){
        this.isOver = false
    }

    declareWinner(isOver, p1, p2){
        // variable to hold a message to declare the winner 
        let Mess 

        if (isOver == true && p1.health <=0){
            Mess = `${p2.name} WINS!`
        }else if(isOver == true && p2.health <= 0){
            Mess = `${p1.name} WINS!`
        }

        return Mess

    }

    reset(p1, p2){
        p1.health = 100
        p2.health = 100

        this.isOver = false

        resultDiv.innerText = ` `
        updateGame(p1,p2)
    }

    play(p1, p2){
        this.reset(p1,p2)
        
        while (!this.isOver) {
            p1.strike(p1, p2, p1.attackDamage)
            p2.heal(p2)
            p2.strike(p2,p1, p2.attackDamage)
            p1.heal(p1)
        }
        return this.declareWinner(this.isOver,p1,p2)
    }
}



let player1 = new Player('Tony',100, 20)
let player2 = new Player('Bob',100, 19)

let p1 = player1
let p2 = player2



let game = new Game()



updateGame(p1,p2)

let gameState = game.isOver

playBtn.addEventListener('click', function(){
    resultDiv.innerText = game.play(p1,p2)
})

document.addEventListener('keydown', function(e){
    if (e.key == 'q' && p1.health > 0 && game.isOver == false){
        p1.strike(p1,p2,p1.attackDamage)
        // resultDiv.innerText = p1.strike(p1,p2,p1.attackDamage)
    }
})

document.addEventListener('keydown',function(e){
    if (e.key == 'a' && p1.health > 0 && game.isOver == false){
        p1.heal(p1)
    }
})

document.addEventListener('keydown', function(e){
    if(e.key == 'p' && p2.health > 0 && game.isOver == false){
        p2.strike(p2,p1,p2.attackDamage)
    }
})

document.addEventListener('keydown', function(e){
    if(e.key == 'l' && p2.health > 0 && game.isOver == false){
        p2.heal(p2)
    }
})