const btn = document.querySelector(".header__wrapper");
const openBtn = document.querySelector(".header__btn--open");
const closeBtn = document.querySelector(".header__btn--close");
const navBar = document.querySelector(".nav");

btn.addEventListener("click", () => {
  navBar.classList.toggle("active");
  if (navBar.classList.contains("active")) {
    console.log("hola");
    openBtn.style.display = "none";
    closeBtn.style.display = "flex";
  } else {
    openBtn.style.display = "flex";
    closeBtn.style.display = "none";
  }
});
