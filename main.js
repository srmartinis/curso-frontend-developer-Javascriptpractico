
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu")
const menuMobileIcon = document.querySelector('.menuMobileIcon');
const menuMobile = document.querySelector('.mobile-menu')
const cartShopping = document.querySelector(".navbar-shopping-cart")
const productDetail = document.querySelector(".product-detail")

menuEmail.addEventListener("click",toggleDesktopMenu);
menuMobileIcon.addEventListener("click",toggleMenuMobile);
cartShopping.addEventListener('click',toggleProducDetail);


function toggleDesktopMenu () {
    if (productDetail.classList.contains("product-detail")){
        productDetail.classList.add('inactive')
    }
    desktopMenu.classList.toggle("inactive");
}

function toggleMenuMobile (){
    if (productDetail.classList.contains("product-detail")){
        productDetail.classList.add('inactive')
    }
    menuMobile.classList.toggle('inactive');
}

function toggleProducDetail (){
    if (desktopMenu.classList.contains("desktop-menu")){
        desktopMenu.classList.add('inactive')
    }
    if (menuMobile.classList.contains("mobile-menu")){
        menuMobile.classList.add("inactive")
    }
    productDetail.classList.toggle('inactive');
}


