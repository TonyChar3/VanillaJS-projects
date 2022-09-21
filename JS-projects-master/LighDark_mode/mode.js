let ToggleBtn = document.getElementById("nav__toggle-button");
let Body = document.querySelector("body");


ToggleBtn.addEventListener('click', function(){
    Body.classList.toggle('dark')
})