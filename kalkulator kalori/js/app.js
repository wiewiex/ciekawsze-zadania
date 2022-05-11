const foods = [];

class Food {
  constructor(name, protein, carbs, fat) {
    this.name = name;
    this.protein = protein;
    this.carbs = carbs;
    this.fat = fat;
  }
  howManyKcal() {
    return this.protein * 4 + this.carbs * 4 + this.fat * 9;
  }
}


class FastFood extends Food {
  print() {
    return `${this.name} is fast-food, include ${this.howManyKcal()} kcal`;
  }
}

class FatFreeFood extends Food {
  print() {
    return `${this.name} is fat-free-food, include ${this.howManyKcal()} kcal`;
  }
}

addProduct = function (event) {
  event.preventDefault();
  const ul = document.querySelector("#products");
  const li = document.createElement("li");
  ul.appendChild(li);

  const nameInput = document.querySelector("#name").value;
  const proteinInput = document.querySelector("#proteins").value;
  const carbsInput = document.querySelector("#carbs").value;
  const fatInput = document.querySelector("#fat").value;

  const food = new Food(nameInput, proteinInput, carbsInput, fatInput);
  food.name = nameInput;
  food.protein = proteinInput;
  food.carbs = carbsInput;
  food.fat = fatInput;


  if (food.howManyKcal() > 250) {
    const fastFood = new FastFood(nameInput, proteinInput, carbsInput, fatInput);
    foods.push(fastFood);
    console.log(foods);
    li.innerText = fastFood.print();
  }

  else {
    const fatFreeFood = new FatFreeFood(nameInput, proteinInput, carbsInput, fatInput);
    foods.push(fatFreeFood);
    console.log(foods);
    li.innerText = fatFreeFood.print();
  }

}


const submit = document.querySelector(".btn-primary");
submit.addEventListener("click", addProduct);

