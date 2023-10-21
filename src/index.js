import "./styles.scss";
import { tns } from "../node_modules/tiny-slider/src/tiny-slider";

var slider = tns({
    container: ".stages__my-slider",
    items: 1,
    slideBy: "page",
    loop: false,
    controls: false,
    mouseDrag: true,
    gutter: 10,
    edgePadding: 10,
    arrowKeys: true,
    responsive: {
        1101: {
            items: 2,
            gutter: 20,
        },
    },
});

var slider = tns({
    container: ".reviews__my-slider",
    items: 1,
    slideBy: "page",
    loop: false,
    controls: false,
    mouseDrag: true,
    gutter: 20,
    edgePadding: 20,
    arrowKeys: true,
    responsive: {
        1101: {
            items: 4,
        },
        501: {
            items: 2,
        }
    },
});

var slider = tns({
    container: ".examples__my-slider",
    items: 1,
    slideBy: "page",
    loop: false,
    controls: false,
    mouseDrag: true,
    gutter: 10,
    edgePadding: 20,
    arrowKeys: true,
    responsive: {
        421: {
            items: 2,
        },
        851: {
            items: 3,
        },
    },
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

function hideDragCircle(container, circle) {
    container.addEventListener("mousedown", () => {
        if (circle) {
            circle.remove();
        }
    });
}

const stagesSlider = document.querySelector(".stages__my-slider");
const reviewsSlider = document.querySelector(".reviews__my-slider");
const circleStages = document.querySelector(".stages__drag-circle");
const circleReviews = document.querySelector(".reviews__drag-circle");
hideDragCircle(stagesSlider, circleStages);
hideDragCircle(reviewsSlider, circleReviews);

const reviewsColumns = Array.from(
    document.querySelectorAll(".reviews__main-content")
);
const stagesColumns = Array.from(document.querySelectorAll(".stages-info"));

function changeHeight(elementsArray) {
    let maxColHeight = 0;
    for (const el of elementsArray) {
        if (el.offsetHeight > maxColHeight) {
            maxColHeight = el.offsetHeight;
        }
    }

    for (const el of elementsArray) {
        el.style.height = `${maxColHeight}px`;
    }
}

window.onload = function () {
    changeHeight(reviewsColumns);
    changeHeight(stagesColumns);
};
