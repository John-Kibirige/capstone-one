// variable declaration
const humberger = document.querySelector('.header-humberger-menu');
const headerContainer = document.querySelector('.header-container');

// Add event listener to the humberger menu
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
