// https://dog.ceo/api/breeds/image/random
const DogiMg = document.getElementById('doImg')
const Buton = document.getElementById('btn')

Buton.onclick = () => newDoggy()

function newDoggy(){
    // You fetch the data
    fetch('https://dog.ceo/api/breeds/image/random')
    // To get the response of the fetch
    .then(response => response.json())
    // to show the data of the response
    .then(json => {
        DogiMg.innerHTML = `<img src="${json.message}" width=400 height=400>`
    })
}


