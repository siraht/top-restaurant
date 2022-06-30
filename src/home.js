const body = document.body;
const content = document.querySelector('.content');
const header = document.createElement('header');
header.classList.add('nav');
const footer = document.createElement('footer');
footer.classList.add('nav');
const main = document.createElement('main');

content.appendChild(header);
content.appendChild(main);
content.appendChild(footer);

export default home