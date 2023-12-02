import MenuItems from './menuItems.js'

export default function Menu() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const page = document.createElement("div");
    page.classList.add("page");
    content.appendChild(page);

    /* MAIN HEADING */

    const heading = document.createElement("h1");
    heading.classList.add("heading")
    heading.innerText = "MENU";
    page.appendChild(heading);

    /* MENU ITEMS */
    
    const appList = [];
    const saladList = [];
    const pizzasList = [];

    const app1 = new MenuItems("Buffalo Wings", "8 piece served with celery and blue cheese", 10.98);
    appList.push(app1);

    const app2 = new MenuItems("Buffalo Cauliflower Bites", "8 piece served with blue cheese or ranch", 5.89);
    appList.push(app2);

    const app3 = new MenuItems("Fried Pickles", "served with blue cheese or ranch", 6.89);
    appList.push(app3);

    const app4 = new MenuItems("Smothered Fries", "bacon, in-house cheese sauce, fresh jalapenos, sour cream", 10.98);
    appList.push(app4);

    const salad1 = new MenuItems("Fried Goat Cheese Salad", "arugula and romaine, corn, black olives, panko-fried goat cheese, spicy chipotle ranch", 10.98);
    saladList.push(salad1);

    const salad2 = new MenuItems("Southern Fried Chicken Salad", "romaine and iceberg, corn, black olives, southern friend chicken breast strips, spicy chipotle ranch", 11.98);
    saladList.push(salad2);

    const salad3 = new MenuItems("Steak and Blue Cheese Salad", "arugula and romaine, diced tomatoes, blue cheese crumbles, blue cheese dressing", 12.98);
    saladList.push(salad3);

    const pizza1 = new MenuItems("Meat", "Tomatoes, mozzarella, italian sausage, bacon, pepperoni", 13.74);
    pizzasList.push(pizza1);

    const pizza2 = new MenuItems("margherita", "tomatoes, mozzarella, basil, extra virgin olive oil", 10.98);
    pizzasList.push(pizza2);

    const pizza3 = new MenuItems("pesto", "basil pesto, mozzarella, italian sausage, diced tomatoes, extra virgin olive oil", 11.98);
    pizzasList.push(pizza3);

    const pizza4 = new MenuItems("pepperoni", "tomatoes, mozzarella, pepperoni, spicy honey", 10.98);
    pizzasList.push(pizza4);

    const pizza5 = new MenuItems("sausage", "tomatoes, mozzarella, basil, italian sausage", 10.98);
    pizzasList.push(pizza5);

    const pizza6 = new MenuItems("ricotta", "mozzarella, ricotta, basil, oregano, extra virgin olive oil", 9.98);
    pizzasList.push(pizza6);

    /* FUNCTION TO ADD ITEMS FROM LIST TO DOM */

    function addItems(listName, container) {

        for (let i=0; i<listName.length; i++) {
            const newItem = document.createElement("div");
            newItem.classList.add("menuItem");
            container.appendChild(newItem);

            const name = document.createElement("p");
            name.classList.add("itemName");
            name.innerText = listName[i].name;
            newItem.appendChild(name);

            const price = document.createElement("p");
            price.classList.add("itemPrice");
            price.innerText = `$${listName[i].price}`;
            newItem.appendChild(price);

            const description = document.createElement("p");
            description.classList.add("itemDescript");
            description.innerText = listName[i].des;
            newItem.appendChild(description);

        }
    }

    /* APPETIZERS */

    const apps = document.createElement("p");
    apps.classList.add("itemHeader");
    apps.innerText = "appetizers";
    apps.setAttribute("id", "appetizerHeading");
    page.appendChild(apps);

    const appsContainer = document.createElement("div");
    appsContainer.classList.add("gridContainerMenu");
    page.appendChild(appsContainer);

    addItems(appList, appsContainer);

    /* SALADS */

    const salads = document.createElement("p");
    salads.classList.add("itemHeader");
    salads.innerText = "Salads";
    salads.setAttribute("id", "saladsHeading");
    page.appendChild(salads);

    const saladsContainer = document.createElement("div");
    saladsContainer.classList.add("gridContainerMenu");
    page.appendChild(saladsContainer);

    addItems(saladList, saladsContainer);

    /* PIZZAS */

    const pizzas = document.createElement("p");
    salads.classList.add("itemHeader");
    salads.innerText = "Pizzas";
    salads.setAttribute("id", "pizzasHeading");
    page.appendChild(pizzas);

    const pizzasContainer = document.createElement("div");
    saladsContainer.classList.add("gridContainerMenu");
    page.appendChild(pizzasContainer);

    addItems(pizzasList, pizzasContainer);






}