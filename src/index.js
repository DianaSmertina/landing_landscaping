import "./styles.scss";
import { tns } from "../node_modules/tiny-slider/src/tiny-slider";

var slider = tns({
    container: ".stages__my-slider",
    items: 2,
    slideBy: "page",
    loop: false,
    controls: false,
    mouseDrag: true,
    gutter: 20,
});

var slider = tns({
    container: ".reviews__my-slider",
    items: 4,
    slideBy: "page",
    loop: false,
    controls: false,
    mouseDrag: true,
    gutter: 20,
});

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
    })
})

const questionElements = document.querySelectorAll(".question");
const questionElementsArray = Array.from(questionElements);
questionElementsArray.forEach((el) => {
    el.addEventListener("click", (e) => {
        const ulElem = e.target.closest("li");
        changeVisibility(ulElem, "question");
    })
})

function hideDragCircle(container, circle) {
    container.addEventListener("mousedown", () => {
        if (circle) {
            circle.remove();
        }
    })
    // container.addEventListener("touchstart", () => {
    //     if (circle) {
    //         circle.remove();
    //     }
    // })
}

const stagesSlider = document.querySelector(".stages__my-slider");
const reviewsSlider = document.querySelector(".reviews__my-slider");
const circleStages = document.querySelector(".stages__drag-circle");
const circleReviews = document.querySelector(".reviews__drag-circle");
hideDragCircle(stagesSlider, circleStages);
hideDragCircle(reviewsSlider, circleReviews);