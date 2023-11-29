function changeVisibility(element, elements, type) {
    if (type === "service") {
        elements.forEach((el) => {
            el.className = "service service-partial no-select";
        })
    } else {
        elements.forEach((el) => {
            el.className = "question question-partial no-select";
        })
    }

    if (element.classList.contains(`${type}-partial`)) {
        element.classList.remove(`${type}-partial`);
        element.classList.add(`${type}-full`);
    } else {
        element.classList.remove(`${type}-full`);
        element.classList.add(`${type}-partial`);
    }
}

const serviceElements = document.querySelectorAll(".service");
const serviceElementsArray = Array.from(serviceElements);
serviceElementsArray.forEach((el) => {
    el.addEventListener("click", (e) => {
        const ulElem = e.target.closest("li");
        changeVisibility(ulElem, serviceElementsArray, "service");
    });
});

const questionElements = document.querySelectorAll(".question");
const questionElementsArray = Array.from(questionElements);
questionElementsArray.forEach((el) => {
    el.addEventListener("click", (e) => {
        const ulElem = e.target.closest("li");
        changeVisibility(ulElem, questionElementsArray, "question");
    });
});