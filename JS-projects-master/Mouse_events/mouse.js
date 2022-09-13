let Container = document.querySelector(".card-container")
let CardDetails = document.querySelector(".card__details")
let CardTitle = document.querySelector(".card__title")
let CardDescrip = document.querySelector(".card__descrip")
let Price = document.querySelector(".card__price")

Container.addEventListener("mousemove", (e) => {
    let AxisX = (window.innerWidth / 2 - e.pageX) / 18;
    let AxisY = (window.innerHeight / 2 - e.pageY) / 18;

    CardDetails.style.transform = `translateY(2px) translateX(3px) scale(1.1)`
    CardDescrip.style.transform = `scale(1.1)`
    CardTitle.style.transform = `scale(1.1)`
    Price.style.transform = `translateY(2px) translateX(3px) scale(1.1)`
    Container.style.transform = `rotateY(${AxisX}deg) rotateX(${AxisY}deg)`

    Container.style.transition = " all 0.1s ease";
})


Container.addEventListener("mouseout", function(){
    Container.style.transform = `rotateY(0deg) rotateX(0deg)`
    CardDetails.style.transform = `translateY(0) translateX(0) scale(1)`
    CardDescrip.style.transform = `scale(1)`
    CardTitle.style.transform = `scale(1)`
    Price.style.transform = `translateY(0) translateX(0) scale(1)`

    Container.style.transition = "all 0.1s ease";
    Price.style.transition = 
    CardTitle.style.transition = "all 0.1s ease";
    CardDescrip.style.transition = "all 0.1s ease";
    CardDetails.style.transition = "all 0.1s ease";
})