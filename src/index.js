import "./styles.css";
import { tns } from "../node_modules/tiny-slider/src/tiny-slider";

var slider = tns({
    container: ".my-slider",
    items: 2,
    slideBy: "page",
    loop: false,
    controls: false,
    mouseDrag: true,
});
