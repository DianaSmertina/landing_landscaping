const reviewsColumns = Array.from(
    document.querySelectorAll(".reviews__main-content")
);
const stagesColumns = Array.from(document.querySelectorAll(".stages-info"));

function changeHeight(elementsArray) {
    for (const el of elementsArray) {
        el.style.height = "auto";
    }

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

window.addEventListener("resize", (e) => {
    changeHeight(reviewsColumns);
    changeHeight(stagesColumns);
});
