import clearPage from './clearpage';
import home from "./home";
import contact from './contact';
import menu from "./menu";

let nav = () => {
    let header = document.querySelector('header')

    let navmenu = document.createElement('nav');
    let homeBtn = document.createElement('button');
    homeBtn.textContent = 'Home';
    homeBtn.id = 'home';
    let contactBtn = document.createElement('button');
    contactBtn.textContent = 'Contact';
    contactBtn.id = 'contact';
    let menuBtn = document.createElement('button');
    menuBtn.textContent = 'Menu';
    menuBtn.id = 'menu';

    navmenu.appendChild(homeBtn);
    navmenu.appendChild(menuBtn);
    navmenu.appendChild(contactBtn);
    header.appendChild(navmenu);

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


    return nav;
};

export default nav;