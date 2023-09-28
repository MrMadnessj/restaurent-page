export default function header()
{
    const navbar = document.createElement('div');

    const text = () => document.createElement('p');
    const navItem = document.createElement('div');
    const logo = document.createElement('h1');

    navbar.classList.add('nav-bar-div');
    navItem.classList.add('nav-item-div');
    logo.classList.add('logo');

    navbar.append(logo, navItem);

    navItem.appendChild(text()).classList.add('.about');
    navItem.appendChild(text()).classList.add('.menu');
    navItem.appendChild(text()).classList.add('.contact');

    navItem.querySelector('.about')

    return navbar;
}