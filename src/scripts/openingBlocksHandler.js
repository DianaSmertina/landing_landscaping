function changeVisibility(elements, type) {
    if (elements.classList.contains(`${type}-partial`)) {
        elements.classList.remove(`${type}-partial`);
        elements.classList.add(`${type}-full`);
    } else {
        elements.classList.remove(`${type}-full`);
        elements.classList.add(`${type}-partial`);
    }
}

const serviceElements = document.querySelectorAll(".service");
const serviceElementsArray = Array.from(serviceElements);
serviceElementsArray.forEach((el) => {
    el.addEventListener("click", (e) => {
        const ulElem = e.target.closest("li");
        changeVisibility(ulElem, "service");
    });
});

const questionElements = document.querySelectorAll(".question");
const questionElementsArray = Array.from(questionElements);
questionElementsArray.forEach((el) => {
    el.addEventListener("click", (e) => {
        const ulElem = e.target.closest("li");
        changeVisibility(ulElem, "question");
    });
});