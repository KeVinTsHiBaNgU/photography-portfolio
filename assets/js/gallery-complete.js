
// gallery-complete.js
document.addEventListener("DOMContentLoaded", () => {
  const filters = document.querySelectorAll(".gallery__filter");
  const items = document.querySelectorAll(".gallery__item");

  filters.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Supprimer active des autres boutons
      filters.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.dataset.filter;

      items.forEach((item) => {
        const category = item.dataset.category;
        if (filter === "all" || filter === category) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".gallery__item img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.getElementById("lightbox-close");
  const nextBtn = document.getElementById("lightbox-next");
  const prevBtn = document.getElementById("lightbox-prev");

  let currentIndex = 0;
  const imgList = Array.from(images);

  function showImage(index) {
    const img = imgList[index];
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.style.display = "flex";
  }

  images.forEach((img, i) => {
    img.addEventListener("click", () => {
      currentIndex = i;
      showImage(currentIndex);
    });
  });

  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % imgList.length;
    showImage(currentIndex);
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + imgList.length) % imgList.length;
    showImage(currentIndex);
  });

  // Fermer en cliquant hors image
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
});

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