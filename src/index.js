console.log('Back at it, baby');

const body = document.body;
console.log(body);
const content = document.querySelector('.content');
const header = document.createElement('header');
header.classList.add('nav');
const footer = document.createElement('footer');
footer.classList.add('nav');
const main = document.createElement('main');

content.appendChild(header);
content.appendChild(main);
content.appendChild(footer);
