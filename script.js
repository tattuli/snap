"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // Dropdown menu
  const dropdown = document.querySelectorAll(".navbar__item--dropdown");
  dropdown.forEach((item) => {
    const link = item.querySelector(".navbar__link--dropdown");
    const dropdownMenu = item.querySelector(".dropdown-menu");
    const icon = link.querySelector(".navbar__icon");

    link.addEventListener("click", (event) => {
      event.preventDefault();

      const isVisible = dropdownMenu.classList.contains("visible");
      dropdownMenu.classList.toggle("visible", !isVisible);
      item.classList.toggle("active", !isVisible);
      link.classList.toggle("active", !isVisible);

      icon.src = isVisible
        ? "./assets/arrow_down.svg"
        : "./assets/arrow_up.svg";
    });
  });

  // Burger menu
  const burgerMenu = document.getElementById("burgerMenu");
  const closeBtn = document.getElementById("closeBtn");
  const headerMenu = document.querySelector(".header__menu");
  const overlay = document.querySelector(".overlay");

  // () => to disable scrolling
  const disableScrolling = () => {
    document.body.style.overflow = "hidden";
  };

  // () => to enable scrolling
  const enableScrolling = () => {
    document.body.style.overflow = "";
  };

  burgerMenu.addEventListener("click", () => {
    headerMenu.classList.add("visible");
    overlay.classList.add("visible");
    burgerMenu.style.display = "none";
    closeBtn.style.display = "block";
    disableScrolling();
  });

  closeBtn.addEventListener("click", () => {
    headerMenu.classList.remove("visible");
    overlay.classList.remove("visible");
    closeBtn.style.display = "none";
    burgerMenu.style.display = "block";
    enableScrolling();
  });

  overlay.addEventListener("click", () => {
    headerMenu.classList.remove("visible");
    overlay.classList.remove("visible");
    closeBtn.style.display = "none";
    burgerMenu.style.display = "block";
    enableScrolling();
  });

  // Scroll Handling for Header
  const header = document.querySelector(".header");

  window.addEventListener("scroll", () => {
    if (window.innerWidth > 0) {
      header.classList.toggle("scrolled", window.scrollY > 0);
    }
  });
});
