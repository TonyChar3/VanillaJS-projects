let container = document.querySelector('.container')
let URL = `https://dog.ceo/api/breeds/image/random`


function loadImages(numImages = window.innerHeight){
    let i=0
    while(i<numImages){
        fetch(URL)
        .then(response => response.json())
        .then(json => {
            const img = document.createElement('img')
            img.src = `${json.message}`
            container.appendChild(img)
        })
        i++
    }
}
loadImages()

window.addEventListener('scroll',function(){
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
        loadImages()
    }
})








