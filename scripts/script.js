const guests = {
  guest1: {
    name: 'Shingo Adachi',
    occupation: 'Animation director and character designer',
    description: 'Chief animation director and character designer for the popular anime series Sword Art Online and Working.',
    picture: 'src/adachi.png',
  },
  guest2: {
    name: 'Naoshi Komi',
    occupation: 'Manga creator',
    description: 'Japenese manga artist who has debuted in Weekly Shōnen Jump magazine with one of the big hits rom-com manga Nisekoi.',
    picture: 'src/naoshi.png',
  },
  guest3: {
    name: 'Taiki Konno',
    occupation: 'Animator and animation director',
    description: 'Was part of the animation teams of many big hit series such as the monogatari series .',
    picture: 'src/taiki.png',
  },
  guest4: {
    name: 'Toshiya Shinohara',
    occupation: 'Anime director',
    description: 'Directed many successful series such as Black butler and Nagi no Asu Kara as well as the InuYasha movies.',
    picture: 'src/toshiya.png',
  },
  guest5: {
    name: 'Kevin Penkin',
    occupation: 'Music composer',
    description: 'Composed the soundtracks of the critically acclaimed series Made in Abyss, The Rising of the Shield Hero and Tower of God.',
    picture: 'src/kevin.png',
  },
  guest6: {
    name: 'Masaaki Yuasa',
    occupation: 'Anime director',
    description: 'Directed the critically acclaimed series Devilman Crybaby and Keep Your Hands off Eizouken.',
    picture: 'src/masaaki.png',
  },
  guest7: {
    name: 'Christopher Sabat',
    occupation: 'Voice actor',
    description: 'One of the leading figures in the dubbing industry, worked on many hot series such as My Hero Academia as All might, and Dragonball as Vegeta.',
    picture: 'src/christopher.png',
  },
  guest8: {
    name: 'Ichiro Hashiba',
    occupation: 'CEO of Bookwalker',
    description: 'CEO of the leading publisher for translated manga and light novel series Bookwalker, one of the first japan based publishers with global coverage.',
    picture: 'src/ichiro.png',
  },
};

function createGuest(guest) {
  const guestContainer = document.getElementById('guest-container');
  const guestElement = document.createElement('li');
  guestElement.innerHTML = `<div class="guest-image">
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

function createGuestSection(guestsList, counter) {
  const guestContainer = document.getElementById('guest-container');
  guestContainer.innerHTML = '';
  for (let i = 0; i < counter; i += 1) {
    createGuest(guestsList[i]);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  createGuestSection(Object.values(guests), 2);
});

let clicks = true;
const button = document.getElementById('more-button');
button.addEventListener('click', () => {
  const list = Object.values(guests);
  if (clicks) {
    createGuestSection(list, list.length);
    clicks = false;
    button.innerHTML = `LESS
                            <img src="src/up-arrow.png">`;
  } else {
    createGuestSection(list, 2);
    clicks = true;
    document.getElementById('guests-id').scrollIntoView({ behavior: 'smooth' });
    button.innerHTML = `MORE
                            <img src="src/down-arrow.png">`;
  }
});

function openCloseMenu() {
  const x = document.querySelector('.mobile-menu');
  const y = document.querySelector('body');
  if (x.style.display === 'flex') {
    x.style.display = 'none';
    y.style.overflow = 'scroll';
  } else {
    x.style.display = 'flex';
    y.style.overflow = 'hidden';
  }
}
function addevent(id) {
  document.getElementById(id).addEventListener('click', () => {
    openCloseMenu();
  });
}
const ids = ['onclick-open', 'onclick-close', 'onclick-events', 'onclick-about', 'onclick-guests', 'onclick-sponsors'];
ids.forEach(addevent);