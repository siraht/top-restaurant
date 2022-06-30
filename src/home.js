import oysterimg from './oysterbar.jpg'

let home = () => {
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

    const headingDiv = document.createElement('div');
    headingDiv.classList.add('headingDiv', 'textContainer');
    main.appendChild(headingDiv);

    const mainImg = document.createElement('img');
    mainImg.src = oysterimg;

    const heading1 = document.createElement('h1');
    heading1.classList.add('text', 'h1');
    heading1.textContent = "Bond's Bagels";
    const heading2 = document.createElement('h4');
    heading2.classList.add('text', 'h4');
    heading2.textContent = "Baked fresh every morning with a license to smell."

    headingDiv.appendChild(mainImg);
    headingDiv.appendChild(heading1);
    headingDiv.appendChild(heading2);

    return home

};

export default home;