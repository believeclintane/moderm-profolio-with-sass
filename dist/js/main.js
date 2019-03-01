//select item form the DOM
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");

const navItem = document.querySelectorAll(".nav-item");

//set the initial state of the menu

let showMenu = false;

menuBtn.addEventListener("click", toggleBtn);

function toggleBtn() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");

    navItem.forEach(item => item.classList.add("show"));
    //reset the menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");

    navItem.forEach(item => item.classList.remove("show"));
    //reset the menu state
    showMenu = false;
  }
}
