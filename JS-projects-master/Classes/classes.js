// classes
//methods

// class Car {
//     constructor(name, color, topSpeed){
//         this.name = name
//         this.color = color
//         this.topSpeed = topSpeed
//         this.currentSpeed = 0
//     }

//     zeroToSixty(){
//         setTimeout(()=>{
//             console.log('pheW! that was fast')
//             this.currentSpeed+=60
//             console.log(this.currentSpeed)
//         })
//     }

//     drive(){
//         // console.log('He drove 2miles!')
//         this.currentSpeed += 10
//         console.log(`driving at ${this.currentSpeed}mph`)
//     }
//     brake(){
//         console.log('braking!')
//         this.currentSpeed -= 10
//     }
//     stop(){
//         console.log('coming to a screeching alt')
//         this.currentSpeed = 0
//     }
// }

// const ferrari = new Car('ferrari','red',250)
// ferrari.drive()
// ferrari.drive()
// ferrari.drive()
// ferrari.drive()
// console.log(ferrari.currentSpeed)
// ferrari.brake()
// console.log(ferrari.currentSpeed)
// ferrari.stop()
// console.log(ferrari.currentSpeed)

// const Porsche = new Car('Porsche','yellow',250)
// console.log(Porsche.name)
// console.log(Porsche.color)
// console.log(Porsche.topSpeed)
// Porsche.drive()
// Porsche.drive()
// Porsche.drive()
// Porsche.drive()
// Porsche.drive()
// Porsche.drive()
// Porsche.drive()
// Porsche.drive()
// console.log(Porsche.currentSpeed)
// Porsche.brake()
// console.log(Porsche.currentSpeed)
// Porsche.stop()
// console.log(Porsche.currentSpeed)



// console.log(ferrari.topSpeed)
// ferrari.drive()
// ferrari.drive()
// ferrari.drive()
// ferrari.brake()
// ferrari.zeroToSixty()
// console.log(ferrari.currentSpeed)


// Array.prototype.myPush = function(item) {
//     this[this.length] = item
//     return this
// }

// const fruits = ['banana','strawberry','cookie']
// fruits.myPush('kiwi')
// fruits.myPush('oreo')
// fruits.myPush('shit')
// fruits.myPush('condom')

// console.log(fruits)

// Exercice on classes
const Balance = document.getElementById('acc-balance')
const Deposit = document.getElementById('deposit')
const Remove = document.getElementById('Remove')
const ErrorMess = document.getElementById('error-message')

const DepoBtn = document.getElementById('depo-btn')
const RemovBtn = document.getElementById('remov-btn')

class Bank{
    constructor(name, balance){
        this.nAme = name
        this.balance = balance
    }

    deposit(amnt){
        let result = this.balance += Number(amnt)
        console.log(this.balance)
        Balance.value = `${result}`
        Deposit.value = ` `
        ErrorMess.innerHTML =`Funds added successfully!`
    }

    remove(amnt){
        if(this.balance >= amnt){
            let sub = this.balance -= Number(amnt)
            console.log(this.balance)
            Balance.value = `${sub}`
            Remove.value = ` `
            ErrorMess.innerHTML = `Funds removed with success!`
        }else{
            ErrorMess.innerHTML =`You're broke dude do something!`
        }
    }
}

const Tony = new Bank('Tony', 12500)
const Roger = new Bank('Roger', 1000000)
const Bella = new Bank('Bella', 300500)
const Sid = new Bank('Sid',250)

let BankAccnts = [Tony, Roger, Bella, Sid]



const getAccnt = () => {
    const Names = document.getElementById('name-input').value

    for(let i = 0; i < BankAccnts.length; i+=1){
        if(BankAccnts[i].nAme == Names){
            console.log(BankAccnts[i].balance)
            Balance.value = `${BankAccnts[i].balance}`
            ErrorMess.innerHTML = `Account found :)`

            DepoBtn.onclick = () => BankAccnts[i].deposit(Deposit.value)
            RemovBtn.onclick = () => BankAccnts[i].remove(Remove.value)
        }
    }
}






