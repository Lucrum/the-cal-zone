import CalzonePicture from '../assets/calzone.jpg'
import PizzaPicture from '../assets/pizza.jpg'
import PastaPicture from '../assets/pasta.jpg'
import SodaPicture from '../assets/soda.jpg'
import '../menu.css'

function buildMenu(contentDiv) {
  let title = document.createElement('h1')
  title.textContent = "MENU"

  // CALZONES
  const calzones = [
    {
      name: "The Classic",
      price: "14.99",
      description: "This is it — what you came here for. Ricotta cheese, meatballs, & vodka sauce.",
    },
    {
      name: "Plain",
      price: "9.99",
      description: "A plain calzone, ready for extra toppings.",
    },
  ]
  let calzoneSection = generateFoodSection(
    "CALZONES",
    "All calzones can be customized with toppings for an extra $2 per topping!",
    calzones,
    CalzonePicture
  )

  // pizzas
  const pizzas = [
    {
      name: "CalZone Special",
      price: "22.99",
      description: "Mozzarella, Grilled Chicken, Pecorino Romano & Bruschetta Topping with Balsamic Reduction Drizzle",
    },
    {
      name: "Meat Lover's Supreme",
      price: "23.99",
      description: "Meatballs, Sausages, Ham & Pepperoni.",
    },
    {
      name: "White Pizza",
      price: "18.99",
      description: "Ricotta, Mozzarella & Romano Cheese",
    },
  ]
  let pizzaSection = generateFoodSection(
    "PIZZAS", "Additional toppings are $3.99 each", pizzas, PizzaPicture
  )

  // toppings
  const toppings = [
    "Ham", "Pepperoni", "Grilled Chicken", "Spinach", "Meatballs",
    "Sausage", "Fresh Mozzarella", "Pecorino Romano", "Ricotta",
  ]
  let toppingSection = generateSection(
    "TOPPINGS", toppings
  )

  // pastas
  const pastas = [
    {
      name: "Cavatelli",
      price: "25.99",
      description: "Homemade and Hand-Rolled, Roasted Tomato Sauce, Diced Eggplant, Fresh Basil, Shaved Aged Ricotta Salata",
    },
    {
      name: "Fettucini Carbonara",
      price: "20.99",
      description: "Pancetta, Shallots, Onion, Garlic, Peas, Pecorino Romano",
    },
    {
      name: "Penne Vodka",
      price: "21.99",
      description: "Heavy Cream, Touch of Tomato Sauce, Pecorino Romano, Fresh Basil",
    },
    {
      name: "Black Linguini Arabbiata",
      price: "34.99",
      description: "Homemade Squid Ink Pasta with Calamari, Shrimp, Spicy Crab Infused Tomato Sauce",
    },
  ]
  let pastaSection = generateFoodSection(
    "PASTAS", "Pasta Wednesdays: $3 off any pasta!", pastas, PastaPicture
  )

  // beverages
  const beverages = [
    {
      name: "Soft Drinks",
      price: "3.49",
      description: "Sprite, Coca-Cola, Fanta, Ginger Ale",
    },
    {
      name: "Coffee",
      price: "2.99",
      description: "Ground and Brewed In-House",
    },
    {
      name: "Tea",
      price: "2.49",
      description: "Your choice of Black or Green",
    },
  ]
  let beverageSection = generateFoodSection(
    "BEVERAGES", "", beverages, SodaPicture
  )

  contentDiv.replaceChildren(
    title, calzoneSection, pizzaSection, toppingSection, pastaSection, beverageSection
  )
}

function generateFoodSection(title, desc, items, image) {
  let div = document.createElement('div')
  let sectionTitle = document.createElement('h2')
  let picture = document.createElement('img')
  div.classList.add('menu-food-category')
  sectionTitle.textContent = title

  div.append(sectionTitle)

  if (desc) {
    let description = document.createElement('p')
    description.textContent = desc
    div.append(description)
  }
  
  picture.src = image
  picture.classList.add('food-preview')

  div.append(...generateFoods(items), picture)

  return div
}

function generateFoods(items) {
  let foods = []

  for (const item of items) {
    let div = document.createElement('div')
    let name = document.createElement('h3')
    let price = document.createElement('p')

    div.classList.add('food-item')
    
    name.textContent = item.name
    price.textContent = "$" + item.price

    let description = document.createElement('p')
    description.textContent = item.description

    div.append(name, price, description)
    foods.push(div)
  }
  return foods
}

function generateSection(title, items) {
  let sectionDiv = document.createElement('div')
  let sectionTitle = document.createElement('h2')
  sectionTitle.textContent = title
  sectionDiv.append(sectionTitle)
  sectionDiv.classList.add('menu-toppings-category')

  for (const item of items) {
    let p = document.createElement('p')
    p.textContent = item
    sectionDiv.append(p)
  }

  return sectionDiv
}

export default buildMenu