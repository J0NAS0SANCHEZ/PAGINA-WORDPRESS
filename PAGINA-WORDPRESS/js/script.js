const btnLeft = document.querySelector(".btn-left"),
      btnRight = document.querySelector(".btn-right"),
      slider = document.querySelector("#slider"),
      sliderSection = document.querySelectorAll(".slider-section"),
      fulimgbox = document.getElementById("fulimgbox"),//CATALOGO
      fulimg = document.getElementById("fulimg");

btnLeft.addEventListener("click", e => moveToLeft())
btnRight.addEventListener("click", e => moveToRight())


setInterval(() => {
    moveToRight()
},3000);

let operacion = 0,
    couter = 0,
    widthImg = 100 / sliderSection.length;

function moveToRight() {
    if (couter >= sliderSection.length-1) {
        couter = 0
        operacion = 0
        slider.style.transform = `translate(-${operacion}%)`
        slider.style.transition = "none"
        return;
    }

    couter++
    operacion = operacion + widthImg;
    slider.style.transform = `translate(-${operacion}%)`
    slider.style.transition = "all ease.6s"
}

function moveToLeft() {
    couter --;
    if (couter < 0) {
        couter = sliderSection.length-1;
        operacion = widthImg * (sliderSection.length-1)

        slider.style.transform = `translate(-${operacion}%)`
        slider.style.transition = "none"
        return;
    }

    operacion = operacion - widthImg;
    slider.style.transform = `translate(-${operacion}%)`
    slider.style.transition = "all ease.6s"
}