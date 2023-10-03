import Coffee from './img/paper-cup.png'
 
export default function about(){
    const body = document.createElement('div');
    body.classList.add('home-div', 'home-elements');

    const aboutDiv = document.createElement('div');
    aboutDiv.classList.add('about-div');

    const aboutContent = document.createElement('p');
    aboutContent.classList.add('about-content');

    const heroPicDiv = document.createElement('div');
    const heroPic = new Image();

    heroPic.src = Coffee;
    heroPic.classList.add('hero-pic');

    heroPicDiv.classList.add('hero-pic-div');
    heroPicDiv.append(heroPic);


    aboutContent.innerHTML = "At Comfy Cafe, we believe that coffee is more than just a beverage; it's a shared experience that brings people together. Our journey began with a simple love for the aroma of freshly brewed coffee and the joy it brings to our customers.<br><br>We're not just a coffee shop; we're a place where friendships are forged, ideas are born, and stories are shared. Our cozy ambiance and carefully crafted brews create a haven where you can escape the daily grind and connect with friends, old and new. We take pride in sourcing the finest coffee beans and serving you that perfect cup of comfort.<br><br>Whether you're seeking a quiet moment of solitude or vibrant conversations, Comfy Cafe is here to be your second home. Come join us, and let's create wonderful memories over a cup of exceptional coffee. Welcome to our coffee-loving family!";
    
    aboutDiv.append(heroPicDiv, aboutContent);
    body.append(aboutDiv);
    return body;  
}