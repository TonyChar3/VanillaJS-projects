let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let sumEl = document.getElementById("sum-el");

function add(){
    let results = num1 + num2
    sumEl.innerText = "Sum:" + results
};

function subtract(){
    let results = num1 - num2
    sumEl.innerText = "Sum:" + results
};

function divide(){
    let results = num1 / num2
    sumEl.innerText = "Sum:" + results
};

function multiply(){
    let results = num1 * num2
    sumEl.innerText = "Sum:" + results
};
