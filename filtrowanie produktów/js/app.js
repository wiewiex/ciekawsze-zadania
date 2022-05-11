const products = [
  {
    name: "Fiat Tipo",
    category: "car",
    price: 29900,
    condition: "new"
  },
  {
    name: "MacBook Pro",
    category: "computer",
    price: 9999,
    condition: "new"
  },
  {
    name: "Xiaomi Redmi Note 8",
    category: "phone",
    price: 2399,
    condition: "new"
  },
  {
    name: "Audi A6",
    category: "car",
    price: 23450,
    condition: "used"
  },
  {
    name: "Samsung Galaxy Note 9",
    category: "phone",
    price: 1899,
    condition: "used"
  },
  {
    name: "Seat Leon",
    category: "car",
    price: 66000,
    condition: "new"
  },
  {
    name: "Nike Sneakers",
    category: "shoes",
    price: 345,
    condition: "new"
  },
  {
    name: "Dacia Logan",
    category: "car",
    price: 33500,
    condition: "new"
  }
];

const allProducts = document.querySelector("#all-products");
const filteredProducts = document.querySelector("#filtered-products");



createItem = function (array, listInHtml){
  array.forEach(function (element){
    const createLi = document.createElement("li");
    const createStrong = document.createElement("strong");
    createStrong.innerText = element.name + " ";
    const createSpan = document.createElement("span");
    createSpan.innerText = element.price + " " + element.condition;

    listInHtml.appendChild(createLi);
    createLi.appendChild(createStrong);
    createLi.appendChild(createSpan);
  })
}
createItem(products, allProducts);

const filter = products.filter(function (element, index){
    return element.category === "car" && element.category === "car" && element.price < 45000;
})

createItem(filter, filteredProducts);









