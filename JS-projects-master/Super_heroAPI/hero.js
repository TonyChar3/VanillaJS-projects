// https://superheroapi.com/api/3316876835255222/character-id

const SUPERHERO_TOKEN = '3316876835255222'
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`

let NewBtn = document.getElementById('new-hero-btn')
const heroDiv = document.getElementById('heroImage')
let srchInpt = document.getElementById('hero-inp')
let srchBtn = document.getElementById('srch-btn')

const getSrchSuperHero = (name) => {
    fetch(`${BASE_URL}/search/${name}`)
    .then(response => response.json())
    .then(json => {
        const hero = json.results[0]
        getHeroStats(hero)
    })
}


const getRndomSuperHero = (id) => {
    fetch(`${BASE_URL}/${id}`)
    .then(response => response.json())
    .then(json => {
        const Sups = json
        getHeroStats(Sups)
    })
}

const getHeroStats = (character)=> {
    const name = `<h2>${character.name}</h2>`

    const img = `<img src="${character.image.url}" height=200 width=200>`

    const stats = Object.keys(character.powerstats).map(stat => {
        return `<p>${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`
    }).join('---------------')

    heroDiv.innerHTML = `${name}${img}${stats}`
}


const rndomHero = ()=> {
    const num = 731
    return Math.floor(Math.random()*num)+1
}

NewBtn.onclick = () => getRndomSuperHero(rndomHero())
srchBtn.onclick = () => getSrchSuperHero(srchInpt.value)




