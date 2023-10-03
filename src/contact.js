import Coffee from './img/paper-cup.png'


export default function contact(){
    const body = document.createElement('div');
    body.classList.add('home-div', 'contact-main-div');

    const abform = aboveFrom();

    const cform = form();
    //holds the form
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact-div');


    const heroPicDiv = document.createElement('div');
    const heroPic = new Image();

    heroPic.src = Coffee;
    heroPic.classList.add('hero-pic');

    heroPicDiv.classList.add('hero-pic-div2');
    heroPicDiv.append(heroPic);

    contactDiv.append(abform, cform);
    body.append(contactDiv, heroPicDiv);
    return body;
}


function form(){
    const cform = document.createElement('form');
    cform.classList.add('cform');

    const namelabel = document.createElement('label');
    const nameInput = document.createElement('input');
    namelabel.innerHTML = 'Name';
    nameInput.type = 'name';
    namelabel.classList.add('flabel');
    nameInput.classList.add('finput');

    const nameDiv = document.createElement('div');
    nameDiv.append(namelabel,nameInput);

    const emaillabel = document.createElement('label');
    const emailInput = document.createElement('input');
    emaillabel.innerHTML = 'Email';
    emailInput.type = 'email';
    emaillabel.classList.add('flabel');
    emailInput.classList.add('finput');

    const emailDiv = document.createElement('div');
    emailDiv.append(emaillabel,emailInput);

    const messagelabel = document.createElement('label');
    const messageInput = document.createElement('input');
    messagelabel.innerHTML = 'Label';
    messageInput.type = 'text';
    messagelabel.classList.add('flabel');
    messageInput.classList.add('finput');

    const messageDiv = document.createElement('div');
    messageDiv.append(messagelabel,messageInput);

    const submit = document.createElement('button');
    submit.classList.add('submit-btn');
    submit.innerHTML = 'Submit';

    cform.append(nameDiv, emailDiv, messageDiv, submit);
    return cform;
}

function aboveFrom(){
    const aboveFormDiv = document.createElement('div');
    aboveFormDiv.classList.add('above-form-content');

    const heading = document.createElement('h1');
    heading.classList.add('contact-heading');
    heading.innerHTML = 'Vist us or Call us Today!';

    const timingsHolder = document.createElement('div');
    const timings = document.createElement('h2');
    timingsHolder.classList.add('timing-holder');
    timings.classList.add('timings');

    const times = document.createElement('p');
    times.classList.add('times');
    times.innerHTML = 'Tue-Thur: 11am-8pm<br>Fri-Sat: 11am-10pm<br>Sun-Mon: closed<br><br>+55 343-433-23';

    timingsHolder.append(timings, times);

    aboveFormDiv.append(heading, timingsHolder);

    return aboveFormDiv;
}