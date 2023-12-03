const form = document.querySelector(".form");
const modalSend = document.querySelector(".send-modal");
const close = document.querySelector(".send-modal__close");
const agreementLink = document.querySelector(".form__agreement-link");
const agreement = document.querySelector(".agreement-modal")
const body = document.body;
const inputs = document.querySelectorAll(".form__input");
const textarea = document.querySelector(".form__textarea");
const checkbox = document.querySelector(".form__checkbox");
const nameInput = document.querySelector(".name-input");
const telInput = document.querySelector(".tel-input");
const areaInput = document.querySelector(".area-input");
const cityInput = document.querySelector(".city-input");

function isFieldCorrect(field) {
    const errorMes = field.nextElementSibling;
    if (field.classList.contains("tel-input")) {
        const onlyNums = Array.from(field.value.replace(/\D/g, ''));
        if (onlyNums.length < 11) {
            errorMes.classList.remove("none");
            return false;
        }
    }
    if (field.value === "") {
        errorMes.classList.remove("none");
        return false;
    }
    if (!errorMes.classList.contains("none")) errorMes.classList.add("none");
    return true;
}

function isAgreementChecked() {
    if (checkbox.checked) return true;
    if (!checkbox.classList.contains("form__checkbox_error")) checkbox.classList.add("form__checkbox_error");
    return false;
}

const submitSuccess = () => {
    modalSend.classList.remove("none");
    body.classList.add("no-scroll");
    setTimeout(() => {
        if (!modalSend.classList.contains("none")) {
            modalSend.classList.add("none");
            body.classList.remove("no-scroll");
        }
    }, 3000);
    Array.from(inputs).forEach((el) => {
        el.value = "";
    })
    textarea.value = "";
    checkbox.checked = false;
}

const submitReject = (error) => {
    const textField = document.querySelector(".send-modal__subtitle");
    textField.innerText = error;
    const title = document.querySelector(".send-modal__title");
    title.innerText = '';
    modalSend.classList.remove("none");
    body.classList.add("no-scroll");
    setTimeout(() => {
        if (!modalSend.classList.contains("none")) {
            modalSend.classList.add("none");
            body.classList.remove("no-scroll");
        }
    }, 5000);
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const dataField = Array.from(inputs);
    const isValidData = dataField.map(el => isFieldCorrect(el));
    const isCheckboxChecked = isAgreementChecked();
    if (isValidData.every(el => el === true) && isCheckboxChecked) {
        try {
            const response = await fetch('https://mail-server-g35u.onrender.com/submit', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                name: nameInput.value,
                tel: telInput.value,
                area: areaInput.value,
                city: cityInput.value, 
                comments: textarea.value,
              }),
            });
            if (response.status === 200) {
                submitSuccess();
            } else {
                const errorObj = await response.json();
                submitReject(errorObj.error);
            }
        } catch (error) {
            submitReject('Извините, произошла непредвиденная ошибка при отправке, пожалуйста, свяжитесь с нами в WhatsApp');
        }
    }
})

inputs.forEach(input => {
    input.addEventListener("input", (e) => {
        const errorMes = e.target.nextElementSibling;
        if (!errorMes.classList.contains("none")) errorMes.classList.add("none");
    })
})

checkbox.addEventListener("click", (e) => {
    if (e.target.classList.contains("form__checkbox_error")) e.target.classList.remove("form__checkbox_error");
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

function formatPhoneNumber(input) {
    const onlyNums = Array.from(input.target.value.replace(/\D/g, ''));
    let cursorPosition = 3;
    if (onlyNums.length > 1 && onlyNums.length <= 4) {
        cursorPosition = cursorPosition + onlyNums.length - 1;
    } else if (onlyNums.length > 4 && onlyNums.length <= 7) {
        cursorPosition = cursorPosition + onlyNums.length;
    } else if (onlyNums.length > 7 && onlyNums.length <= 9) {
        cursorPosition = cursorPosition + onlyNums.length + 1;
    } else if (onlyNums.length > 9 && onlyNums.length <= 12) {
        cursorPosition = cursorPosition + onlyNums.length + 2;
    }
    requestAnimationFrame(() => {
        input.target.setSelectionRange(cursorPosition, cursorPosition);
    })

    function returnValidValue() {
        let initialString = "+7(___)___-__-__".split("");
        if (onlyNums.length > 1) {
            for (let i = 0; i < onlyNums.length; i++) {
                if (i > 0 && i <= 3) {
                    initialString[2 + i] = onlyNums[i];
                } else if (i > 3 && i <= 6) {
                    initialString[3 + i] = onlyNums[i];
                } else if (i > 6 && i <= 8) {
                    initialString[4 + i] = onlyNums[i];
                } else if (i > 8 && i < 11) {
                    initialString[5 + i] = onlyNums[i];
                }
            }
        }
        return initialString.join("");
    };
    input.target.value = returnValidValue();
}

telInput.addEventListener("focus", (e) => {
    if (e.target.value === "") {
        e.target.value = "+7(___)___-__-__";
        setTimeout(function() {
            if (e.target.setSelectionRange) {
                e.target.setSelectionRange(3, 3);
            } else {
                e.target.focus();
                e.target.select();
            }
        }, 0);
    }
});
telInput.addEventListener("input", (e) => formatPhoneNumber(e));
