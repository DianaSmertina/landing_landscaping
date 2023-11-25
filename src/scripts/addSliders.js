import { tns } from "../../node_modules/tiny-slider/src/tiny-slider";

var slider1 = tns({
    container: ".stages__my-slider",
    items: 1,
    slideBy: "page",
    loop: false,
    controls: false,
    nav: true,
    navPosition: "bottom",
    mouseDrag: true,
    gutter: 10,
    edgePadding: 0,
    arrowKeys: true,
    responsive: {
        1101: {
            items: 2,
            gutter: 20,
        },
    },
});

var slider2 = tns({
    container: ".reviews__my-slider",
    items: 1,
    slideBy: "page",
    loop: false,
    controls: false,
    nav: true,
    navPosition: "bottom",
    mouseDrag: true,
    gutter: 20,
    edgePadding: 20,
    arrowKeys: true,
    responsive: {
        501: {
            items: 2,
        },
        1301: {
            items: 4,
        },
    },
});

var slider3 = tns({
    container: ".examples__my-slider",
    items: 1,
    slideBy: "page",
    loop: false,
    controls: false,
    nav: true,
    navPosition: "bottom",
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
