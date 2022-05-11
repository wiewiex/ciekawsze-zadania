const form = document.querySelector("form");
const allAddonsButton = document.querySelector(".btn-secondary:first-of-type");
const eraseButton = document.querySelector(".btn-secondary:nth-of-type(2)");
const prices = [];
const checkboxes = document.querySelectorAll(".form-check-input");

const addToBasket = function (event) {
    if (this.checked) {
        prices.push(Number(this.dataset.price))}
    else {
        prices.push(Number(-this.dataset.price))}

    let sum = prices.reduce(function (total, item){
        return total + item;
    });
    const counter = document.querySelector("#price");
    sum = sum.toFixed(2);
    counter.innerText = sum + "zł";
};

const allToBasket = function (event) {
        checkboxes.forEach(function (element) {
            if (!element.checked) {
            element.click()
        }
    })
};

const eraseBasket = function (event) {
    checkboxes.forEach(function (element) {
        if (element.checked) {
            element.click()
        }
    })
}

const printPrice = function (event) {
    event.preventDefault();
    const orderInfo = document.querySelector(".order-info");
    const addonsSum = document.querySelector("#price");
    orderInfo.innerText = `Razem do zapłaty: [${35 + parseFloat(addonsSum.innerText)} zł]`;
}


checkboxes.forEach(function (element){
    element.addEventListener("change", addToBasket)
});

allAddonsButton.addEventListener("click", allToBasket);


eraseButton.addEventListener("click", eraseBasket);

form.addEventListener("submit", printPrice)








