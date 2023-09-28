import header from './header';
import home from './home';
import './static/styles.css';
import './static/styles-layout.css';


console.log('yo buffy');

const container = document.querySelector('#h-container');

console.log('yo buffy');

const navbar = header();
const homesection = home();

console.log('yo buffy');

container.append(navbar,homesection);

console.log('yo buffy');

