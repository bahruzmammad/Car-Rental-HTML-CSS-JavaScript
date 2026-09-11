const menuButton = document.getElementById("menu-btn");
const navigationLinks = document.getElementById("nav-links");
const menuButtonIcon = menuButton.querySelector("i");

// Mobil menyu
menuButton.addEventListener("click", () => {
  navigationLinks.classList.toggle("open");
  const isOpen = navigationLinks.classList.contains("open");
  menuButtonIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-line",
  );
});

// Menyunu bağla
navigationLinks.addEventListener("click", () => {
  navigationLinks.classList.remove("open");
  menuButtonIcon.setAttribute("class", "ri-menu-line");
});

// Animasiya
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header-image img", {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".header-content h2", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header-content h1", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".header-content .section-description", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".header-form form", {
  ...scrollRevealOption,
  delay: 2000,
});

// İş prosesi
ScrollReveal().reveal(".about-card", {
  ...scrollRevealOption,
  interval: 500,
});

// Tab sistemi
const dealTabs = document.querySelector(".deals-tabs");
const dealTabContents = document.querySelectorAll(
  ".deals-container .tab-content",
);

dealTabs.addEventListener("click", (event) => {
  const selectedTab = event.target.closest("button");

  if (!selectedTab) {
    return;
  }

  const selectedId = selectedTab.dataset.id;

  dealTabs.querySelectorAll("button").forEach((button) => {
    button.classList.toggle("active", button.dataset.id === selectedId);
  });

  dealTabContents.forEach((content) => {
    content.classList.toggle("active", content.id === selectedId);
  });
});

// Seçim bölməsi
ScrollReveal().reveal(".choose-image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".choose-content .section-header", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".choose-content .section-description", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".choose-card", {
  ...scrollRevealOption,
  delay: 1500,
  interval: 500,
});

// Abunəlik
ScrollReveal().reveal(".subscribe-image img", {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".subscribe-content .section-header", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".subscribe-content .section-description", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".subscribe-content form", {
  ...scrollRevealOption,
  delay: 1500,
});

// Müştəri slideri
const clientSwiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  breakpoints: {
    1024: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
});
