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

const serviceElements = document.querySelectorAll(".service");
const serviceElementsArray = Array.from(serviceElements);
serviceElementsArray.forEach((el) => {
    el.addEventListener("click", (e) => {
        const ulElem = e.target.closest("ul");
        if (ulElem.classList.contains("service-partial")) {
            ulElem.classList.remove("service-partial");
            ulElem.classList.add("service-full");
        } else {
            ulElem.classList.remove("service-full");
            ulElem.classList.add("service-partial");
        }
    })
})
