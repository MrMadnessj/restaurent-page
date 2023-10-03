import header from './header';
import home from './home';
import menu from './menu';
import about from './about';
import contact from './contact';

import './static/styles.css';
import './static/styles-layout.css';
import './static/menu.css';



console.log('yo buffy');

const container = document.querySelector('#h-container');

console.log('yo buffy');

const navbar = header();
const homesection = home();
const menusection = menu();
const aboutsection = about();
const contactsection = contact();

console.log('yo buffy');

container.append(navbar, contactsection);

console.log('yo buffy');

