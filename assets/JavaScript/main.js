"use strict";
const HIDDEN_CLASSNAME = "hidden";

// Navbar: transparancy change after scroll
document.addEventListener("scroll", () => {
  const navbar = document.querySelector("#navbar");
  const navbarHeight = navbar.getBoundingClientRect().height;
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

// Scroll: handle scroll after navbar or contact button selection
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", (event) => {
  const link = event.target.dataset.link;
  if (link == null) {
    return;
  }
  navbarMenu.classList.remove("open");
  scrollIntoView(link);
});

// Navbar: border after btn clicked
navbarMenu.addEventListener("click", (e) => {
  const selectedBtn = document.querySelector(".navbar__menu__item.active");
  selectMenu(e, selectedBtn, "active");
});

// Navbar: toggle btn for responsive web screen
const toggleBtn = document.querySelector(".navbar__toggle-btn");
toggleBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
});

// Contact: move to contact section after contact btn click
const contactBtn = document.querySelector(".home__contact");
contactBtn.addEventListener("click", () => scrollIntoView("#contact"));

// Home: transparent home on scroll
const homeItems = document.querySelector(".home__items");
const homeItemsHeight = homeItems.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  const homeOpacity = 1 - window.scrollY / homeItemsHeight;
  if (homeOpacity < 0) {
    return;
  }
  homeItems.style.opacity = homeOpacity;
});

// UP: arrow up button to the top
const arrow = document.querySelector(".arrow");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeItemsHeight * 0.6) {
    arrow.classList.add("visible");
  } else {
    arrow.classList.remove("visible");
  }
});

// Arrow: handle CLick on the arrow button
arrow.addEventListener("click", () => {
  scrollIntoView("#home");
});

// Work: projects filtering
const workBtnContainer = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");
workBtnContainer.addEventListener("click", (e) => {
  const key = e.target.dataset.key || e.target.parentNode.dataset.key;
  if (key == null) {
    return;
  }
  projectContainer.classList.add("anim-out");
  setTimeout(() => {
    projects.forEach((project) => {
      if (key === "All" || key === project.dataset.value) {
        project.classList.remove("invisible");
      } else {
        project.classList.add("invisible");
      }
    });
    projectContainer.classList.remove("anim-out");
  }, 300);
});

// Work: projects menu background change after btn clicked
workBtnContainer.addEventListener("click", (e) => {
  const selectedBtn = document.querySelector(".category__btn.active");
  selectMenu(e, selectedBtn, "active");
});

// functions
function scrollIntoView(selector) {
  const scrollItem = document.querySelector(selector);
  scrollItem.scrollIntoView();
}

function selectMenu(e, selectedBtn, className) {
  if (selectedBtn) {
    selectedBtn.classList.remove(className);
  }
  e.target.classList.add(className);
}

// Scroll: intersection observer
const sectionIds = [
  "home",
  "about",
  "skills",
  "work",
  "testimonials",
  "contact",
];
const sections = sectionIds.map((id) => document.querySelector(`#${id}`));
const navItems = sectionIds.map((id) =>
  document.querySelector(`[data-link="#${id}"]`)
);

const options = {
  root: null,
  rootMargin: "-10px",
  threshold: 0.3,
};

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const selectedMenu = document.querySelector(
        `[data-link="#${entry.target.id}"]`
      );
      const existMenu = document.querySelector(".navbar__menu__item.active");
      existMenu.classList.remove("active");
      selectedMenu.classList.add("active");
    }
  });
};
const observer = new IntersectionObserver(callback, options);

sections.forEach((section) => observer.observe(section));
