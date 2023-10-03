import Coffee from './img/paper-cup.png'

export default function menu() {
    const mainMenu = document.createElement('div');
    mainMenu.classList.add('main-menu');

    const leftBtn = document.createElement('button');
    const rightBtn = document.createElement('button');

    leftBtn.classList.add('left-btn');
    rightBtn.classList.add('right-btn');

    leftBtn.textContent = '<';
    rightBtn.textContent = '>';

    let currentIndex = 0;

    leftBtn.addEventListener('click', () => {
        if(currentIndex < 3 && currentIndex >= 0){
            console.log('neow');
            if(currentIndex == 0)
                currentIndex = 0;
            else
                currentIndex--;
            update();
        }
    });

    rightBtn.addEventListener('click', () => {
        if(currentIndex < 3 && currentIndex >= 0){
            console.log('nopoeow');
            if(currentIndex == 2)
                currentIndex = 2;
            else
                currentIndex++;
            update();
        }
    })
    function update(){
        let content;
        if(currentIndex == 0)
            content = breakfastMenu();
        else if(currentIndex == 1)
            content = lunchMenu();
        else if(currentIndex == 2)
            content = dessertMenu();
        mainMenu.innerHTML = '';
        mainMenu.append(leftBtn, content, rightBtn);
        return mainMenu;
    }
    const result = update();
    return result;
}

function breakfastMenu(){
    const breakfastMenuItems = [
        createMenuItem('Espresso', 'A shot of concentrated coffee made by forcing hot water through finely-ground coffee beans.', '2.50'),
        createMenuItem('Cappuccino', 'A classic Italian coffee with equal parts espresso, steamed milk, and milk foam.', '3.50'),
        createMenuItem('Latte', 'A smooth and creamy coffee made with espresso and steamed milk.', '4.00'),
        createMenuItem('Americano', 'A diluted espresso with hot water, delivering a bold coffee flavor.', '3.00'),
        createMenuItem('Mocha', 'A rich coffee blend with espresso, chocolate, steamed milk, and whipped cream.', '4.50'),
        createMenuItem('Caramel Macchiato', 'A sweet and creamy coffee with espresso, caramel syrup, and milk.', '4.25'),
        createMenuItem('Iced Coffee', 'Chilled coffee served over ice with your choice of milk and sweetener.', '3.50'),
        createMenuItem('Macchiato', 'Espresso "stained" with a dollop of frothy milk for a bold flavor.', '3.25'),
        createMenuItem('Chai Latte', 'A spiced tea blend with steamed milk, perfect for a comforting drink.', '4.25'),
        createMenuItem('Cortado', 'Equal parts espresso and steamed milk, creating a balanced coffee experience.', '3.75')
    ];


    const breakfast = menuCreator('Breakfast', 'just eat bruh');

    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-div');

    const menu = document.createElement('div');
    menu.classList.add('menu');
    
    menu.append(breakfast);

    breakfastMenuItems.forEach((item) => {
        menu.appendChild(item);
    })

    menuDiv.append(menu);

    return menuDiv;
}

function lunchMenu(){
    const lunchMenuItems = [
        createMenuItem('Grilled Chicken Sandwich', 'Juicy grilled chicken with lettuce and mayo toasted bun.', '8.95'),
        createMenuItem('Caesar Salad', 'Crisp romaine lettuce, croutons, Parmesan cheese, and Caesar dressing.', '7.50'),
        createMenuItem('Margherita Pizza', 'Classic pizza with tomato sauce, fresh mozzarella, basil, and a drizzle of olive oil.', '10.00'),
        createMenuItem('Club Sandwich', 'Triple-decker sandwich with turkey, bacon, lettuce, tomato, and mayo.', '9.75'),
        createMenuItem('Pasta Primavera', 'Pasta with seasonal vegetables and a creamy Alfredo sauce.', '11.25'),
        createMenuItem('Fish Tacos', 'Two soft tortillas filled with crispy fish, coleslaw, and chipotle mayo.', '12.50'),
        createMenuItem('Caprese Panini', 'Panini with fresh mozzarella, tomato, basil, and balsamic glaze.', '8.50'),
        createMenuItem('Mushroom Risotto', 'Creamy risotto with wild mushrooms and Parmesan cheese.', '10.75'),
        createMenuItem('Greek Salad', 'Fresh Greek salad with cucumbers, tomatoes, olives, feta cheese, and Greek dressing.', '9.25'),
        createMenuItem('Chicken Caesar Wrap', 'Grilled chicken, lettuce, Parmesan cheese, dressing in a wrap.', '8.95')
    ];

    const lunch = menuCreator('Lunch', 'just eat lunch');

    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-div');

    const menu = document.createElement('div');
    menu.classList.add('menu');
    
    menu.append(lunch);

    lunchMenuItems.forEach((item) => {
        menu.appendChild(item);
    });

    menuDiv.append(menu);

    return menuDiv;
}

function dessertMenu(){
    const dessertMenuItems = [
        createMenuItem('Chocolate Cake', 'Rich and moist chocolate cake with a velvety chocolate frosting.', '5.50'),
        createMenuItem('Tiramisu', 'A classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cheese.', '6.00'),
        createMenuItem('Cheesecake', 'Creamy and smooth cheesecake with your choice of fruit topping.', '4.75'),
        createMenuItem('Molten Lava Cake', 'Warm chocolate cake with a gooey, molten chocolate center, served with vanilla ice cream.', '7.25'),
        createMenuItem('Fruit Tart', 'A buttery tart crust filled with pastry cream and topped with fresh fruits.', '5.25'),
        createMenuItem('Panna Cotta', 'A silky Italian dessert made with sweetened cream and topped with a berry compote.', '4.95'),
        createMenuItem('Creme Brulee', 'A creamy custard dessert with a caramelized sugar crust.', '6.50'),
        createMenuItem('Lemon Sorbet', 'Refreshing lemon sorbet served in a citrus cup.', '3.75'),
        createMenuItem('Mousse au Chocolat', 'Light and airy chocolate mousse with a hint of espresso.', '5.75'),
        createMenuItem('Fudge Brownie', 'Warm brownie topped with vanilla cream, hot fudge, and whipped cream.', '7.50')
    ];

    const dessert = menuCreator('dessert', 'sugar & chill');

    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-div');

    const menu = document.createElement('div');
    menu.classList.add('menu');
    
    menu.append(dessert);

    dessertMenuItems.forEach((item) => {
        menu.appendChild(item);
    });


    menuDiv.append( menu);
    return menuDiv;
}

function menuCreator(menuName, menuDesc)
{
    const menuHeading = document.createElement('div');
    const headingSuper = document.createElement('p');
    const headingSub = document.createElement('p');

    menuHeading.classList.add('menu-heading-div');
    headingSuper.classList.add('heading-super');
    headingSub.classList.add('heading-sub');

    headingSuper.textContent = menuName;
    headingSub.textContent = menuDesc;
    menuHeading.append(headingSuper,headingSub);

    return menuHeading;
}

function createMenuItem(name, ingredients, price){
    const card = document.createElement('div');
    card.classList.add('card');

    const itemName = document.createElement('p');
    itemName.textContent = name;
    itemName.classList.add('item-name');

    const imageholder = document.createElement('div');
    imageholder.classList.add('image-holder');
    const image = new Image();
    image.classList.add('menu-image');
    image.src = Coffee;
    imageholder.append(image);

    const itemPrice = document.createElement('p');
    itemPrice.textContent = `$${price}`;
    itemPrice.classList.add('item-price');

    const itemIngredients = document.createElement('p');
    itemIngredients.textContent = ingredients;
    itemIngredients.classList.add('item-ingredients');

    const nameAndPrice = document.createElement('div');
    nameAndPrice.classList.add('name-price');
    nameAndPrice.append(itemName, itemPrice);

    card.append(nameAndPrice, imageholder, itemIngredients);

    return card;
}   

