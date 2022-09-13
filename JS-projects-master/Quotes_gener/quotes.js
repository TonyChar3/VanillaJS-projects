let SpanEL = document.getElementById('quotes')
let GenerateBtn = document.getElementById('generate-btn')
let ClearBtn = document.getElementById('clear-btn')



const getQuotes = () =>{
    fetch("https://type.fit/api/quotes")
    .then(response => response.json())
    .then(json => {
        const rndm_num = Math.floor(Math.random()*json.length)
        SpanEL.innerText = `${json[rndm_num].text}`
    })
}

GenerateBtn.onclick = ()=> getQuotes()
ClearBtn.onclick = () => SpanEL.innerText = ` `