import Logo from './img/logo3.png';

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




    return navbar;
}