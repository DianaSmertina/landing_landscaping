import { tns } from "../../node_modules/tiny-slider/src/tiny-slider";

var slider = tns({
    container: ".stages__my-slider",
    items: 1,
    slideBy: "page",
    loop: false,
    controls: false,
    navAsThumbnails: true,
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

var slider = tns({
    container: ".reviews__my-slider",
    items: 1,
    slideBy: "page",
    loop: false,
    controls: false,
    navAsThumbnails: true,
    nav: true,
    navPosition: "bottom",
    mouseDrag: true,
    gutter: 20,
    edgePadding: 20,
    arrowKeys: true,
    responsive: {
        1301: {
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
