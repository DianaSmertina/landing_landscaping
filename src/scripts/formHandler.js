const form = document.querySelector(".form");
const modalSend = document.querySelector(".send-modal");
const close = document.querySelector(".send-modal__close");
const agreementLink = document.querySelector(".form__agreement-link");
const agreement = document.querySelector(".agreement-modal")
const body = document.body;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    modalSend.classList.remove("none");
    body.classList.add("no-scroll");
})

agreementLink.addEventListener("click", (e) => {
    e.preventDefault();
    agreement.classList.remove("none");
    body.classList.add("no-scroll");
})

function closeModal(e) {
    if (e.target.classList.contains("send-modal") || e.target.classList.contains("send-modal__close-img")) {
        modalSend.classList.add("none");
        body.classList.remove("no-scroll");
    }
    if (e.target.classList.contains("agreement-modal") || e.target.classList.contains("agreement-modal__close-img")) {
        agreement.classList.add("none");
        body.classList.remove("no-scroll");
    }
}

modalSend.addEventListener("click", (e) => closeModal(e));
agreement.addEventListener("click", (e) => closeModal(e));
