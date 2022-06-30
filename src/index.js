import home from './home';
import nav from './nav';
import clearPage from './clearpage';
import contact from './contact';
import menu from "./menu";
import './reset.css';
import './style.css';

console.log('Back at it, baby');

// Main variables and initial DOM creation
const body = document.body;
const content = document.querySelector('.content');
const header = document.createElement('header');
header.classList.add('nav', 'header');
const footer = document.createElement('footer');
footer.classList.add('nav', 'footer');
const main = document.createElement('main');
main.classList.add('main');

content.appendChild(header);
content.appendChild(main);
content.appendChild(footer);

// Nav creation
nav();
// Home content creation
home();

// Tab switching
homeBtn.addEventListener('click', () => {
    clearPage();
    home();
});
menuBtn.addEventListener('click', () => {
    clearPage();
    menu();
});
contactBtn.addEventListener('click', () => {
    clearPage();
    contact();
});