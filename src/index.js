import home from './home';

console.log('yo buffy')



const container = document.querySelector('#h-container');

const content = document.createElement('div');
const cup = document.createElement('p');
cup.innerHTML = "yoyo";

console.log('before home ini');

const homeElement = home();

console.log('after home ini');

content.append(homeElement, cup);

console.log('3');

container.append(content);

console.log('4');

