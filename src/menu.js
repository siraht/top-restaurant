let menu = () => {
    let main = document.querySelector('main')

    const headingDiv = document.createElement('div');
    headingDiv.classList.add('headingDiv', 'menuContainer');
    main.appendChild(headingDiv);

    // const mainImg = document.createElement('img');
    // mainImg.src = oysterimg;

    const heading1 = document.createElement('h1');
    heading1.classList.add('text', 'h1');
    heading1.textContent = "Our Menu";
    const menuText = document.createElement('h4');
    menuText.classList.add('text', 'h4');
    menuText.textContent = "Everything Bagels - $4\nPlain Bagels - $3\nStrawberry Bagels - $5\nAsbestos Bagels - $9001"

    // headingDiv.appendChild(mainImg);
    headingDiv.appendChild(heading1);
    headingDiv.appendChild(menuText);

    return menu;

};

export default menu;