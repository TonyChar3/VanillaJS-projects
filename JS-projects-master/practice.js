
// Arrays
    // const groceries = ['banana','mango','apple','orange']
    // groceries.push('blueberries')
    // grab the second index
    // groceries.push('cookie')

    // Array slice()
    // console.log(groceries.slice(1,4))
    // console.log(groceries)

    // Array method (slice, push, indexOf, length)

    // console.log(groceries.indexOf('cookie'))

    // console.log(groceries.length)

// Objects
    // const person = {
    //     name: 'Leonardo',
    //     shirt: 'white'
    // }
    // console.log(person.name)
    // console.log(person.shirt)

    // bracket notation
    // console.log(person['shirt'])

    // assign object
    // person.phone = '819-260-0225'
    // console.log(person['phone'])

    // person 2
    // const person2 = {
    //     name: 'Qazi',
    //     shirt: 'black'
    // }

    // console.log(person2['name'])
    // console.log(person2['shirt'])

    // const introducer = (name, shirt) => {
    //     const person ={
    //         name: name,
    //         shirt: shirt,
    //         assets: 100000,
    //         liability: 5000,
    //         netWorth: function (){
    //             return this.assets - this.liability
    //         }
    //     }

    //     const intro =`Hi, my name is ${person.name} and the colour of my shirt is ${person.shirt} and my 
    //     networth is ${person.netWorth()} CAD`
    //     return intro
    // }

    // console.log(introducer('Tony',"white"))  

// For loops

    const fruits = ['banana','mango','apple','orange']

    // old loop
    // for(let i =0; i < fruits.length; i++){
    //     console.log(i, fruits[i])
    // }

    // new way to loop
    // for (const fel of fruits){
    //     console.log(fel)
    // }

    const numbers = [1,2,3,4,5,6,7,7,7,6,4] 

    const double = (numbers) => {
        let result = []
        for (const num of numbers){
            result.push(num**2)
        }
        return result
    }

    // console.log(double([2,4,6,7,9,8]))

    const LetterCounter = () => {
        let results = 0
        for (const index in phrase) {
            console.log(Number(index)+1)
            results = Number(index) + 1
        }
        return {results}
    }
//     const phrase = prompt('write your phrase?')
//    console.log(LetterCounter(phrase))

result = 0

const suArray = (numbers) => {
    let result = 0

    for (const num of numbers){
        result += num
    }
    return {result}
}
// const nums = [1,2,3,4]
// console.log(suArray(nums))

const findMax = (numbers) => {
    let result = numbers[0]

    // loop
    for (const num of numbers) {
        if (num > result) {
            result = num
        }
    }
    return {result}
}
// console.log(findMax([1,2,3,9,10]))

const LetterFrequency = (phrase) => {
    // make a frequency object {}
    let frequency = {}
    for (const letter of phrase){
         // check if letter exist in the object
         if (letter in frequency) {
            // increment the value by +1
            frequency[letter]++
         // ohterwise, set the value to 1
         }else {
            frequency[letter] = 1
         }  
    }
    return frequency
}
// console.log(LetterFrequency('lol loolo lo lol lo lol lol yo yo'))

const WordFrequency = (phrase) => {
    const Arr = phrase.split(' ')
    return LetterFrequency(Arr)
}
// console.log(WordFrequency('lol loolo lo lol lo lol lol yo yo'))


// incremental operators
// ++, --, +=

//higher order functions
// .map() - loops and returns an array
    const doubleMap = (number) =>{
        return number.map(numbers => numbers * 10)
    }

//.filter() - to returns certain elements of the array 
    const nums = [1,2,3,4,5,6]
    // console.log(nums.filter(num => num > 4 && num < 6))

    const actors = [
        {name: 'johnny', netWorth: 200000},
        {name: 'Bruce', netWorth:1000000000000},
        {name: 'leonardo', netWorth:2000000},
    ]
    // let re = actors.filter(actor => actor.netWorth > 2)
    // let jjjj = document.querySelector('h2')
    // let names = re.map(actor => actor.name).join(", ")
    // jjjj.innerHTML +=  `${names}`

// .reduce() - reduces the array to one number by sum them up
    // sum: think reduce
    // const numb = [1,2,3]
    // const resul = numb.reduce((a, b) => a + b)
    // const mult = numb.reduce((a, b) => a * b)
    // console.log(actors.reduce((a,b) => a + b.netWorth, 0))

// DOM manipulation

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




   