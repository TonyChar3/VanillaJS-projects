const billTotalInput = document.getElementById('billTotalInput')
const TipInp = document.getElementById('tipInput')
const NumPplInp = document.getElementById('numberOfPeople')
const Totl = document.getElementById('perPersonTotal')




const calculateBill = () =>{
    let total = Number(billTotalInput.value)
    let tipTotal = Number(TipInp.value / 100) * total

    let billTotal = tipTotal + total
    let SubTotal = billTotal / Number(NumPplInp.innerText)
    Totl.innerText = `$${SubTotal.toFixed(2)}`
}

const increasePeople = () => {
    Number(NumPplInp.innerText ++ ) 
    calculateBill()
}

const decreasePeople = () => {
    Number(NumPplInp.innerText -- )
    if(NumPplInp.innerText <= 0){
        Number(NumPplInp.innerText = 1)
    }
    calculateBill()
}

