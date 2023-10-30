const form = document.querySelector(".form");
const modalSend = document.querySelector(".send-modal");
const close = document.querySelector(".send-modal__close");
const agreementLink = document.querySelector(".form__agreement-link");
const agreement = document.querySelector(".agreement-modal")
const body = document.body;
const inputs = document.querySelectorAll(".form__input");
const textarea = document.querySelector(".form__textarea");
const checkbox = document.querySelector(".form__checkbox");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    modalSend.classList.remove("none");
    body.classList.add("no-scroll");
    setTimeout(() => {
        if (!modalSend.classList.contains("none")) {
            modalSend.classList.add("none");
            body.classList.remove("no-scroll");
        }
    }, 2000);
    Array.from(inputs).forEach((el) => {
        el.value = "";
    })
    textarea.value = "";
    checkbox.checked = false;
})

agreementLink.addEventListener("click", (e) => {
    e.preventDefault();
    agreement.classList.remove("none");
    body.classList.add("no-scroll");
})

function closeModal(e) {
    if (e.target.classList.contains("send-modal") || e.target.closest("div").classList.contains("send-modal__close")) {
        modalSend.classList.add("none");
        body.classList.remove("no-scroll");
    }
    if (e.target.classList.contains("agreement-modal") || e.target.closest("div").classList.contains("agreement-modal__close")) {
        agreement.classList.add("none");
        body.classList.remove("no-scroll");
    }
}

modalSend.addEventListener("click", (e) => closeModal(e));
agreement.addEventListener("click", (e) => closeModal(e));
