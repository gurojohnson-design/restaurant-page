export function renderMenu(content) {
    content.textContent = '';

    const heading = document.createElement('h2');
    heading.id = 'heading';

    //make all the stuff
    const menuCard = document.createElement('div');
    menuCard.classList.add('menuCard');

    const dishTitle = document.createElement('div');
    dishTitle.classList.add('dishTitle');

    const dishDescription = document.createElement('div');
    dishDescription.classList.add('dishDescription');

    const dishPic = document.createElement('img');
    dishPic.id = 'dishPic';

    const dishPrice = document.createElement('div');
    dishPrice.classList.add('dishPrice');

    // text content time
    heading.textContent = 'Menu'
    dishTitle.textContent = `A menu item`;
    dishDescription.textContent = `A delicious dish that will satisfy your hunger`;
    dishPic.src = 'https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg';
    dishPrice.textContent = `$Some Money`;

    menuCard.append(dishPic, dishTitle, dishPrice, dishDescription);

    content.append(heading, menuCard);


};