const productPage = document.querySelector("body");
window.addEventListener("load", () => {
    productPage.classList.add("visibility");
});

let searchItem = document.querySelectorAll(".item");
const searchBtn = document.querySelector(".fa-search");
searchBtn.addEventListener("click", () => {
    let input = document.querySelector(".search-box").value 
    input = input.toLowerCase(); 
          
    for (i = 0; i < searchItem.length; i++) {  
        if (!searchItem[i].innerHTML.toLowerCase().includes(input)) { 
            searchItem[i].style.display="none"; 
        } 
        else { 
            searchItem[i].style.display="list-item";
        } 
    } 
})

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


