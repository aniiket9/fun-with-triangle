const baseInput = document.querySelector("#base-input");
const heightInput = document.querySelector("#height-input");
const outputEl = document.querySelector("#output");
const areaBtn = document.querySelector("#area-btn");

function multiplication(a, b) {
    var multiply = (a * b) / 2;
    return multiply;
}

function areaCalculator() {
    var multiply = multiplication(Number(baseInput.value), Number(heightInput.value))
    outputEl.innerText = "The area of Triangle is  " + multiply;
}

areaBtn.addEventListener("click", areaCalculator);