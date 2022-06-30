import rotaryimg from './rotary2.jpeg'

let contact = () => {
    let main = document.querySelector('main')

    const headingDiv = document.createElement('div');
    headingDiv.classList.add('headingDiv', 'textContainer');
    main.appendChild(headingDiv);

    const mainImg = document.createElement('img');
    mainImg.src = rotaryimg;

    const heading1 = document.createElement('h1');
    heading1.classList.add('text', 'h1');
    heading1.textContent = "Contact us today!";
    const heading2 = document.createElement('h4');
    heading2.classList.add('text', 'h4');
    heading2.textContent = "We're available for catering and pick-up orders over the phone!"

    headingDiv.appendChild(mainImg);
    headingDiv.appendChild(heading1);
    headingDiv.appendChild(heading2);

    return contact;

};

export default contact;