const productPage = document.querySelector("body");
window.addEventListener("load", () => {
    productPage.classList.add("visibility");
});

let items = document.querySelectorAll(".item");
let windowHeight = window.innerHeight;

window.addEventListener("scroll", function () {
    for (let i = 0; i < items.length - 1; i++){
        let itemPosition = items[i].getBoundingClientRect().top;
        if (itemPosition < windowHeight) {
            items[i].classList.add("visibility-onscroll");
        }
    }
});
