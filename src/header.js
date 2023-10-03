
import Logo from './img/logo3.png';
import home from './home';
import menu from './menu';
import about from './about';
import contact from './contact';

import './static/styles.css';
import './static/styles-layout.css';
import './static/menu.css';

let choice = 0;
const container = document.querySelector('#h-container');

export default function header()
{
    const navbar = document.createElement('div');

    const aboutBtn = document.createElement('button');
    const menuBtn = document.createElement('button');
    const contactBtn = document.createElement('button');

    const navItem = document.createElement('div');
    const logo = new Image();
    logo.src = Logo;
    logo.classList.add('logo');

    navbar.classList.add('nav-bar-div');
    navItem.classList.add('nav-item-div');
    logo.classList.add('logo');

    aboutBtn.classList.add('about-btn');
    menuBtn.classList.add('menu-btn');
    contactBtn.classList.add('contact-btn');

    aboutBtn.classList.add('btn-ul');
    menuBtn.classList.add('btn-ul');
    contactBtn.classList.add('btn-ul');

    aboutBtn.innerHTML = 'About';
    menuBtn.innerHTML = 'Menu';
    contactBtn.innerHTML = 'Contact';

    navItem.append(aboutBtn, menuBtn, contactBtn);
    navbar.append(logo ,navItem);

    aboutBtn.addEventListener('click', () => {
        choice = 1;
        console.log(choice);
        render();
    })

    menuBtn.addEventListener('click', () => {
        choice = 2;
        console.log(choice);
        render();
    })

    contactBtn.addEventListener('click', () => {
        choice = 3;
        console.log(choice);
        render();
    })
    
    logo.addEventListener('click', () => {
        choice = 0;
        render();
        console.log(choice);
    })



    return navbar;
}

const navbar = header();
const homesection = home();
const menusection = menu();
const aboutsection = about();
const contactsection = contact();
render();
function render(){
    container.innerHTML = '';
    switch(choice){
        case 0: 
            container.innerHTML = '';
            console.log('home 0');
            container.append(navbar, homesection);
            break;

        case 1: 
            container.innerHTML = '';
            console.log('about 1');
            container.append(navbar, aboutsection);
            break;

        case 2:
            container.innerHTML = '';
            console.log('menu 2');
            container.append(navbar, menusection);
            break;
        
        case 3: 
            container.innerHTML = '';
            console.log('contact 3');
            container.append(navbar, contactsection);
            break;

        default:
            container.innerHTML = ''; 
            console.log('this default bruh');
            container.append(navbar, homesection);
            break;
    }
}