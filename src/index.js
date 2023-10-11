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
