const productTitlePage = document.querySelector("body");
window.addEventListener("load", () => {
    productTitlePage.classList.add("visibility");
});

//responsive navbar 
const navbarBtnOpen = document.querySelector(".fa-bars")
const navbarBtnClose = document.querySelector(".fa-times")
const navBar = document.querySelector(".navlinks");
const cart = document.querySelector(".fa-shopping-cart");

navbarBtnOpen.addEventListener("click", () => {
    navbarBtnOpen.classList.remove("visibility");
    navbarBtnClose.classList.toggle("visibility");
    navBar.classList.toggle("on-nav-click");
    cart.classList.toggle("visibility");
});

navbarBtnClose.addEventListener("click", () => {
    navbarBtnOpen.classList.toggle("visibility");
    navbarBtnClose.classList.toggle("visibility");
    navBar.classList.toggle("on-nav-click");
    cart.classList.toggle("visibility");
});
