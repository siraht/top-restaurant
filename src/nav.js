let nav = () => {
    let header = document.querySelector('header')

    let navmenu = document.createElement('nav');
    let homeBtn = document.createElement('button');
    homeBtn.textContent = 'Home';
    homeBtn.id = 'homeBtn';
    let contactBtn = document.createElement('button');
    contactBtn.textContent = 'Contact';
    contactBtn.id = 'contactBtn';
    let menuBtn = document.createElement('button');
    menuBtn.textContent = 'Menu';
    menuBtn.id = 'menuBtn';

    navmenu.appendChild(homeBtn);
    navmenu.appendChild(menuBtn);
    navmenu.appendChild(contactBtn);
    header.appendChild(navmenu);


    return nav;
};

export default nav;