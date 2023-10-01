import Coffee from './img/paper-cup.png'
 
export default function home(){
    const home = document.createElement('div');
    const homeElements = document.createElement('div');
    homeElements.classList.add('home-elements');

    const heroPicDiv = document.createElement('div');
    const heroPic = new Image();

    heroPicDiv.classList.add('hero-pic-div');
    const homecontent = document.createElement('div');
    const content = document.createElement('h1');

    content.innerHTML = "Life's a journey<br>Coffee's the fuel<br>Keep brewing!";

    // homecontent.classList.add('home-con-div');
    content.classList.add('home-content');

    // homecontent.append(content);

    heroPic.src = Coffee;
    heroPic.classList.add('hero-pic');

    home.classList.add('home-div');


    const leftBgImage = document.createElement('div');

    homeElements.append(heroPic, content);
    home.append(homeElements);

    return home;
}