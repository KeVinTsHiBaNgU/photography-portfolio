// === Background slider for #home ===
const homeSection = document.querySelector('.home');
const backgrounds = [
  './assets/img/accueil/accueil1.jpg',
  './assets/img/accueil/accueil2.jpg',
  './assets/img/accueil/accueil3.jpg',
  './assets/img/mariages/mariage2.jpg',
];

let currentBg = 0;

function updateBackground() {
  const url = `url('${backgrounds[currentBg]}')`;
  homeSection.style.setProperty('--bg-current', url);
  homeSection.style.backgroundImage = url;

  const bgLayer = document.querySelector('.home::before');
  if (bgLayer) {
    bgLayer.style.backgroundImage = url;
  }

  currentBg = (currentBg + 1) % backgrounds.length;
}

setInterval(updateBackground, 5000); // Change every 5s
updateBackground(); // Init

// =========================================
document.addEventListener('DOMContentLoaded', () => {
  // ========== NAV TOGGLE MOBILE ==========
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav__link');

  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
    });
  });

  // ========== SCROLL ACTIVE LINK ==========
  const sections = document.querySelectorAll('section[id]');
  function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 60;
      const sectionId = current.getAttribute('id');
      const navItem = document.querySelector(`.nav__link[href*="${sectionId}"]`);

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navItem?.classList.add('active-link');
      } else {
        navItem?.classList.remove('active-link');
      }
    });
  }

  window.addEventListener('scroll', scrollActive);

  // ========== SCROLL HEADER BACKGROUND ==========
  const header = document.getElementById('header');
  function scrollHeader() {
    if (window.scrollY >= 80) {
      header.classList.add('scroll-header');
    } else {
      header.classList.remove('scroll-header');
    }
  }

  window.addEventListener('scroll', scrollHeader);

  // ========== REVEAL ON SCROLL ==========
  const revealElements = document.querySelectorAll('.section');

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach(el => {
      const boxTop = el.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        el.classList.add('visible');
      } else {
        el.classList.remove('visible');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // init
});

// ================== GALLERY =========================
document.addEventListener('DOMContentLoaded', () => {
  const galleryItems = document.querySelectorAll('.gallery__item img');

  // Crée l'overlay
  const overlay = document.createElement('div');
  overlay.classList.add('gallery__overlay');
  document.body.appendChild(overlay);

  const overlayImage = document.createElement('img');
  overlay.appendChild(overlayImage);

  // Clique sur image => zoom
  galleryItems.forEach(img => {
    img.addEventListener('click', () => {
      overlayImage.src = img.src;
      overlay.classList.add('active');
    });
  });

  // Clique en dehors pour fermer
  overlay.addEventListener('click', () => {
    overlay.classList.remove('active');
  });
});

