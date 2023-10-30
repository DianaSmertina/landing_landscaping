import { tns } from "../../node_modules/tiny-slider/src/tiny-slider";

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
        },
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

function hideDragCircle(container, circle) {
    container.addEventListener("mousedown", () => {
        if (circle) {
            circle.classList.add("none");
        }
    });
}

const stagesSlider = document.querySelector(".stages__my-slider");
const reviewsSlider = document.querySelector(".reviews__my-slider");
const circleStages = document.querySelector(".stages__drag-circle");
const circleReviews = document.querySelector(".reviews__drag-circle");
hideDragCircle(stagesSlider, circleStages);
hideDragCircle(reviewsSlider, circleReviews);

stagesSlider.addEventListener("mouseenter", () => {
    circleStages.classList.remove("none");
})

stagesSlider.addEventListener("mouseleave", () => {
    if (!circleStages.classList.contains("none")) {
        circleStages.classList.add("none");
    }
})

reviewsSlider.addEventListener("mouseenter", () => {
    circleReviews.classList.remove("none");
})

reviewsSlider.addEventListener("mouseleave", () => {
    if (!circleReviews.classList.contains("none")) {
        circleReviews.classList.add("none");
    }
})
