export default function menu(){
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-div');

    const menu = document.createElement('div');
    menu.classList.add('menu');


    menuDiv.append(menu);
    return menuDiv;
}

