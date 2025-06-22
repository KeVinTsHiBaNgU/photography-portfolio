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
