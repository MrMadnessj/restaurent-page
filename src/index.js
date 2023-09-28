import header from './header';
import './static/styles.css';
import './static/styles-layout.css';

console.log('yo buffy')



const container = document.querySelector('#h-container');

const navbar = header();

container.append(navbar);

