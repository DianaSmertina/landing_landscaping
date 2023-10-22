const burgerBtn = document.querySelector(".header__burger");
const closeMenu = document.querySelector(".menu-modal__close");
const modal = document.querySelector(".menu-modal");
const body = document.body;
const modalLink = Array.from(document.querySelectorAll(".menu-modal__nav-link"));

burgerBtn.addEventListener("click", () => {
    modal.classList.remove("none");
    body.classList.add("no-scroll");
});

function closeModal() {
    modal.classList.add("none");
    body.classList.remove("no-scroll");
}

closeMenu.addEventListener("click", closeModal);

modalLink.forEach((link) => {
    link.addEventListener("click", closeModal);
});