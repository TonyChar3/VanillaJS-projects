// Joke API url
let URL = `https://v2.jokeapi.dev/joke/Spooky`

// DOM elements
const Btn = document.querySelector('button');
let SpanJoke = document.getElementById('joke__textarea');
let SpanAnswer = document.getElementById('joke__answerarea');

// function to get the joke from the api URL
const GetJoke = async() => {
    // try & catch statement
    try{
        // fetch data from api
        const response = await fetch(URL)
        // get the element of the fetch
        const joke = await response.json()
        // render the joke in the DOM
        RenderJoke(joke.setup, joke.delivery)
    }catch(error){
        // if there's an error
        console.log(error)
    }
}

// function to render the joke in the DOM
const RenderJoke = (joke, answer) => {
    // Print out the joke 
    SpanJoke.innerHTML = `${joke}`
    // Print out the answer of the joke
    SpanAnswer.innerHTML = `${answer}`
}

// When the user clicks the button 
Btn.addEventListener('click', function(){
    GetJoke()
})
