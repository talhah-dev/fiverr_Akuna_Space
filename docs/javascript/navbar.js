
// const navbar = document.getElementById("navbar");
// navbar.innerHTML = `

// `

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuCloseBtns = document.querySelectorAll(".mobileMenuCloseBtn");

mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.style.width = "100%";
});

mobileMenuCloseBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        mobileMenu.style.width = "0";
    });
});