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
