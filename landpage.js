
    const homePage = document.querySelector(".home-slide");
    window.addEventListener("load", () => {
        homePage.classList.add("visibility");
    });


    //hover effect for the sections
    const viewBtn = document.querySelectorAll(".explore-btn"); 
    const exploreSections = document.querySelectorAll(".section");
    
    exploreSections[0].addEventListener("mouseover", () => {
        viewBtn[0].classList.add("visibility");
    });
    viewBtn[0].addEventListener("mouseover", () => {
        viewBtn[0].classList.add("visibility");
        exploreSections[0].classList.add("hover")
    });
    exploreSections[0].addEventListener("mouseout", () => {
        viewBtn[0].classList.remove("visibility");
    });
    viewBtn[0].addEventListener("mouseout", () => {
        exploreSections[0].classList.remove("hover")
    })

    exploreSections[1].addEventListener("mouseover", () => {
        viewBtn[1].classList.add("visibility");
    });
    viewBtn[1].addEventListener("mouseover", () => {
        viewBtn[1].classList.add("visibility");
        exploreSections[1].classList.add("hover")
    });
    exploreSections[1].addEventListener("mouseout", () => {
        viewBtn[1].classList.remove("visibility");
    });
    viewBtn[1].addEventListener("mouseout", () => {
        exploreSections[1].classList.remove("hover")
    })
    
    exploreSections[2].addEventListener("mouseover", () => {
        viewBtn[2].classList.add("visibility");
    });
    viewBtn[2].addEventListener("mouseover", () => {
        viewBtn[2].classList.add("visibility");
        exploreSections[2].classList.add("hover")
    });
    exploreSections[2].addEventListener("mouseout", () => {
        viewBtn[2].classList.remove("visibility");
    });
    viewBtn[2].addEventListener("mouseout", () => {
        exploreSections[2].classList.remove("hover")
    })
    
    exploreSections[3].addEventListener("mouseover", () => {
        viewBtn[3].classList.add("visibility");
    });
    viewBtn[3].addEventListener("mouseover", () => {
        viewBtn[3].classList.add("visibility");
        exploreSections[3].classList.add("hover")
    });
    exploreSections[3].addEventListener("mouseout", () => {
        viewBtn[3].classList.remove("visibility");
    });
    viewBtn[3].addEventListener("mouseout", () => {
        exploreSections[3].classList.remove("hover")
    })

/* SLIDE CHANGE */

    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".previous")
    const slides = document.querySelectorAll(".intro-slide");
    let slideCount = 1;
    console.log(slides);

    nextBtn.addEventListener("click", () => {
        if(slideCount === 5) {
            slides[4].classList.remove("visibility");
            slides[0].classList.add("visibility");
            slideCount = 1
        } else {
            slides[slideCount].classList.add("visibility");
            slides[slideCount-1].classList.remove("visibility");
            slideCount++;
        }   
    });

    prevBtn.addEventListener("click", () => {
        if(slideCount === 1) {
            slides[0].classList.remove("visibility");
            slides[4].classList.add("visibility");
            slideCount = 5;
        } else{
            slides[slideCount-1].classList.remove("visibility");
        slides[slideCount-2].classList.add("visibility");
        slideCount--;
        }
    });

//on-scroll appearance 
let feature = document.querySelectorAll(".feature");
let windowPosition = window.innerHeight/1.5;
console.log(feature);

window.addEventListener("scroll", () => {
    for (let i=0; i < feature.length; i++){
        if(feature[i].getBoundingClientRect().top < windowPosition) {
            feature[i].classList.add("visibility-onscroll");
        }
    }
});


//responsive navigation bar
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
