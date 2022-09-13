// Asynchornous  Programming

// console.log('Shes talking to you')
// const func = () => console.log('soup')
// setTimeout(func, 2000) // 1000 ms is 1s (theres 2s of waiting before the 'soup' appears)
// console.log('If slap the shit out of her')

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(()=> {
//         isReady = [true,false][Math.floor(Math.random()*2)]
//         isReady ? resolve('soup is ready'): reject('soup is not ready')
//     }, 2000)
// })

// console.log(
//     promise1
//     .then(Success => console.log({Success}))
//     .catch(error => console.log({error}))
// )

// const getSoup = async () => {
//     const data = {
//         rating: null,
//         tip: null,
//         pay: null,
//         review: null
//     }

//     try{
//         const soup = await promise1
//         console.log(soup)
//         data.rating = 5
//         data.tip = .2
//         data.pay = 10
//         data.review = 5
//         return data
//     }catch(error){
//         console.log(error)
//         data.rating = 1
//         data.tip = 0
//         data.pay = 0
//         data.review = 1
//         return data
//     }
    
// }
// await getSoup()


// console.log('fetch:', 
// fetch('https://dog.ceo/api/breeds/image/random') 
// .then(response => response.json())  
// .then(data => console.log(data)) 
// )


// Async / Await -> rules for using it: 
                                        // 1. You must create a function
                                        // 2. You must use the keyword async
                                        // 3. Use the word await

// asynchronous function
// const getDog = async () => {
//     const url = 'https://dog.ceo/api/breeds/image/random'
//     const response = await fetch(url)
//     const data = await response.json()
//     console.log(data)
// }

// getDog()


// Exercices

// created a new promise (its like creating a new class instance)
const promise2 = new Promise((resolve,reject) => {
    setTimeout(()=>{
        // to get a random element from the array [true,false]
        isReady = [true,false][Math.floor(Math.random()*2)]
        // If...else statement 
        isReady ? resolve('We do have a ferrari'):reject('Sorry we sold all of them')
    // 2s delay
    },2000)
})

// asynchronous function
const getCar = async() =>{
    // to replace the .then 
    try{
        // if its true await the promise2 
        const car = await promise2
        // and console.log it
        console.log(car)
    // to catch the error
    }catch(error){
        // and console.log it whitout stopping the code and give an error
        console.log(error)
    }
}
// to console.log the async functions 
getCar(value => console.log(value))