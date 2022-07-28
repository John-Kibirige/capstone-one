// variable declaration
const humberger = document.querySelector('.header-humberger-menu');
const headerContainer = document.querySelector('.header-container');

humberger.addEventListener('click', () => {
  humberger.classList.toggle('active');
  headerContainer.classList.toggle('active');
});

// Monitor screen onchange
window.addEventListener('resize', () => {
  const windowSize = window.innerWidth;
  if (windowSize >= 768) {
    humberger.classList.remove('active');
    headerContainer.classList.remove('active');
  }
});

// Object for the featured speakers
const speakersData = [
  {
    name: 'Dr Kristel Bauer',
    briefly:
      'Keynote speaker and corporate wellness expert. She is the founder of be well',
    mission:
      'She is clinical psycologist who specialises in diagnosis and psychological treatment of mental, behavioral and emotional illnesses',
    imageUrl: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    name: 'Dr Tali Sharot',
    briefly:
      'A neuroscientist provides keynote speeches on the science that empowers optimism using her expertise in the psychology and decision making.',
    mission:
      'Dr Tali Sharot is a visiting professor at MIT and also an associate professor at University College London',
    imageUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    name: 'Dr Martyn Newman',
    briefly: 'Bestseller author, Mindfulness and Emotional Intelligence',
    mission:
      'Dr Martyn is a clinical Psychologist specialized in Mindfulness and emotional intelligence. As a best seller author of Emotional Capitalists',
    imageUrl: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
  {
    name: 'Dr. Chloe Carmichael, PhD',
    briefly: 'Chemical Psychologist, author and inspirational speaker',
    mission:
      'Dr Chloe is a leading expert on anxiety nationally know speaker, clinical psychologist, author and entrepreneur',
    imageUrl: 'https://randomuser.me/api/portraits/women/8.jpg',
  },
  {
    name: 'Elliot Aronson',
    briefly:
      'Aron is currently Professor Emeritus of psybhology at the university of California, Santa Cruz',
    mission:
      "Aronson's work has focussed on the social dimension of human motivation MediaKeySystemAccess, such as the structural reasons for prejudice and aggression",
    imageUrl: 'https://randomuser.me/api/portraits/men/20.jpg',
  },
  {
    name: 'Hayley Mulenda',
    briefly: 'Passionate on yourth mental health activist',
    mission:
      'Recognised as the most influential and most inpiratinal black entreprener in Britain, Author of the award winning book ABCs to student success',
    imageUrl: 'https://randomuser.me/api/portraits/women/10.jpg',
  },
];

// Creating elements related to the featured speakers section
const featuredSpeakerSection = document.createElement('section');
featuredSpeakerSection.classList.add('featured-speakers');

const fsTitle = document.createElement('h4');
fsTitle.innerText = 'Featured Speakers';
fsTitle.classList.add('featured-speakers-title');
featuredSpeakerSection.appendChild(fsTitle);

const fsAllCards = document.createElement('div');
fsAllCards.classList.add('featured-speakers-all-cards');
featuredSpeakerSection.appendChild(fsAllCards);

// loop though each card and append to featured speakers
speakersData.forEach((item, index) => {
  // for a single card
  const fsCard = document.createElement('div');
  fsCard.classList.add('featured-speakers-card');
  if (index > 1) {
    fsCard.classList.add('active');
  }

  const cardImageContainer = document.createElement('div');
  cardImageContainer.classList.add('card-image-container');
  fsCard.appendChild(cardImageContainer);

  const cardBgImage = document.createElement('div');
  cardBgImage.classList.add('card-bg-image');
  cardImageContainer.appendChild(cardBgImage);

  const cardImage = document.createElement('img');
  cardImage.src = `${item.imageUrl}`;
  cardImageContainer.appendChild(cardImage);

  const cardText = document.createElement('div');
  cardText.classList.add('card-text');
  fsCard.appendChild(cardText);

  const cardTitle = document.createElement('h5');
  cardTitle.classList.add('card-title');
  cardTitle.innerText = `${item.name}`;
  cardText.appendChild(cardTitle);

  const cardDescription = document.createElement('p');
  cardDescription.classList.add('card-description');
  cardDescription.innerText = ` ${item.briefly}`;
  cardText.appendChild(cardDescription);

  const cardAcademic = document.createElement('p');
  cardAcademic.classList.add('academic-bg');
  cardAcademic.innerText = `${item.mission}`;
  cardText.appendChild(cardAcademic);

  fsAllCards.appendChild(fsCard);
});

// Creating the show more and less elements and appending them to the featuredSpeakerSection
const showMore = document.createElement('div');
showMore.classList.add('show-more');
const showMorePar = document.createElement('p');
showMorePar.innerText = 'MORE';
showMore.appendChild(showMorePar);

const chevronMore = document.createElement('img');
chevronMore.src = './assets/chevron-down.svg';
showMore.appendChild(chevronMore);
featuredSpeakerSection.appendChild(showMore);

const showLess = document.createElement('div');
showLess.classList.add('show-less');
showLess.classList.add('active');
const showLessPar = document.createElement('p');
showLessPar.innerText = 'LESS';
showLess.appendChild(showLessPar);

const chevronLess = document.createElement('img');
chevronLess.src = './assets/chevron-up.svg';
showLess.appendChild(chevronLess);
featuredSpeakerSection.appendChild(showLess);

// load everything only when the window has loaded
window.addEventListener('load', () => {
  const { body } = document;

  body.insertBefore(featuredSpeakerSection, body.children[2]);

  // we want to show more or less
  const showMore = document.querySelector('.show-more');
  const showLess = document.querySelector('.show-less');

  // get all cards
  const cards = document.querySelectorAll('.featured-speakers-card');

  showMore.addEventListener('click', () => {
    showMore.classList.toggle('active');
    showLess.classList.toggle('active');

    // we toggle the active class on the non appearing cards
    cards.forEach((card, index) => {
      if (index >= 2) {
        card.classList.toggle('active');
      }
    });
  });
  showLess.addEventListener('click', () => {
    showLess.classList.toggle('active');
    showMore.classList.toggle('active');

    // we toggle the active class on the non appearing cards
    cards.forEach((card, index) => {
      if (index >= 2) {
        card.classList.toggle('active');
      }
    });
  });
});
