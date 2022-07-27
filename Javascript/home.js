// variable declaration
const humberger = document.querySelector('.header-humberger-menu');
const headerContainer = document.querySelector('.header-container');

humberger.addEventListener('click', () => {
  console.log('btn works well');
  humberger.classList.toggle('active');
  headerContainer.classList.toggle('active');
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
    imageUrl: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
  {
    name: 'Hayley Mulenda',
    briefly: 'Passionate on yourth mental health activist',
    mission:
      'Recognised as the most influential and most inpiratinal black entreprener in Britain, Author of the award winning book ABCs to student success',
    imageUrl: 'https://randomuser.me/api/portraits/women/10.jpg',
  },
  {
    name: 'Nell Pasricha',
    briefly:
      'The new York times best seller of five books and one of the most popular TED speakers in the world',
    mission:
      "'The 3 A's of Awesome' continue to define resillience through mental health challenges for millions of people",
    imageUrl: 'https://randomuser.me/api/portraits/men/13.jpg',
  },
  {
    name: 'Mellissa Doman, M.A',
    briefly:
      'Organisational Pshycologist, Mental at Work Specialist and Former Mental Health Therapist',
    mission:
      'Melissa Doma uses her years as a mental health professional to assist variety of organisations in implementing and becoming aware of the importace of emotinal and mental welness in a work place',
    imageUrl: 'https://randomuser.me/api/portraits/women/5.jpg',
  },
];

// chevron icons
const chevronUp = '../images/chevron-up.svg';
const chevronDown = '../images/chevron-down.svg';

const featuredSpeakerLiteral = ` 
    <section class="featured-speakers">
    <h4 class="featured-speakers-title">Featured Speakers</h4>
    <div class="featured-speakers-all-cards">

     ${speakersData
       .map(
         (item, index) => `
      <div class='featured-speakers-card ${index > 1 ? 'active' : ''}'>
        <div class='card-image-container'>
          <div class='card-bg-image'></div>
          <img
            src='${item.imageUrl}'
            alt='user image'
          />
        </div>
        <div class='card-text'>
          <h5 class='card-title'>${item.name}</h5>
          <p class='card-description'>
            ${item.briefly}
          </p>

          <p class='academic-bg'>
           ${item.mission}
          </p>
        </div>
      </div>
      `
       )
       .join('')}
      
       <div class="show-more">
         <p>MORE</p>
        <img src="../assets/chevron-down.svg" alt="" />
       </div>
       <div class="show-less active">
         <p>LESS</p>
          <img src="../assets/chevron-up.svg" alt="" />
       </div>
    </div>
  </section>
`;

// create a separate div element to add the created literal as inner
const featureSpeakers = document.createElement('div');
featureSpeakers.innerHTML = featuredSpeakerLiteral;

window.addEventListener('load', () => {
  const { body } = document;

  body.insertBefore(featureSpeakers, body.children[2]);

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
