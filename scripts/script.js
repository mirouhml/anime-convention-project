const guests = {
    guest1: {
        name: 'Yochai Benkler',
        occupation: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
        description: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
        picture: 'src/hunter.jpg'
    },
    guest2: {
        name: 'Yochai Benkler',
        occupation: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
        description: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
        picture: 'src/hunter.jpg'
    },
    guest3: {
        name: 'Yochai Benkler',
        occupation: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
        description: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
        picture: 'src/hunter.jpg'
    },
    guest4: {
        name: 'Yochai Benkler',
        occupation: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
        description: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
        picture: 'src/hunter.jpg'
    },
    guest5: {
        name: 'Yochai Benkler',
        occupation: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
        description: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
        picture: 'src/hunter.jpg'
    },
    guest6: {
        name: 'Yochai Benkler',
        occupation: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
        description: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
        picture: 'src/hunter.jpg'
    },
    guest7: {
        name: 'Yochai Benkler',
        occupation: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
        description: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
        picture: 'src/hunter.jpg'
    },
    guest8: {
        name: 'Yochai Benkler',
        occupation: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
        description: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
        picture: 'src/hunter.jpg'
    },
}

function createGuest(guest) {
    const guestContainer = document.getElementById('guest-container');
    const guestElement = document.createElement('li');
    guestElement.innerHTML =   `<div class="guest-image">
                                    <img src="${guest.picture}" alt="Guest picture">
                                </div>
                                <div class="guest-info">
                                    <h3>${guest.name}</h3>
                                    <h4>${guest.occupation}</h4>
                                    <hr>
                                    <p>${guest.description}</p>
                                </div>`;
    guestContainer.appendChild(guestElement);
}   

function createGuestSection(guestsList,counter){
    const guestContainer = document.getElementById('guest-container');
    guestContainer.innerHTML = '';
    for (let i = 0; i < counter; i += 1) {
        createGuest(guestsList[i]);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    createGuestSection(Object.values(guests),2);
});

let clicks = true;
const button = document.getElementById('more-button');
button.addEventListener('click', () => {
    const list = Object.values(guests);
    if (clicks){
        createGuestSection(list,list.length);
        clicks = false;
        button.innerHTML = 'LESS';
    }
    else {
        createGuestSection(list,2);
        clicks = true;
        button.innerHTML = 'MORE';
    }
});