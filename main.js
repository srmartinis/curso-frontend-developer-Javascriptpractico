
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu")
const menuMobileIcon = document.querySelector('.menuMobileIcon');
const menuMobile = document.querySelector('.mobile-menu')

menuEmail.addEventListener("click",toggleDesktopMenu);
menuMobileIcon.addEventListener("click",toggleMenuMobile);

function toggleDesktopMenu () {
    console.log ("Click")
    desktopMenu.classList.toggle("inactive");
}

function toggleMenuMobile (){
    menuMobile.classList.toggle('inactive');
}


