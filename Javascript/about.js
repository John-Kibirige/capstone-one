// variable declaration
const humberger = document.querySelector('.header-humberger-menu');
const headerContainer = document.querySelector('.header-container');

humberger.addEventListener('click', () => {
  console.log('btn works well');
  humberger.classList.toggle('active');
  headerContainer.classList.toggle('active');
});
