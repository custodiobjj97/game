import MenuMobile from "./module/menuMobile.js";
import SlideNav from "./module/slide/slidenav.js";
import ScrollAnimation from "./module/scrollAnimation.js";
import scrollTop from "./module/scrollTop.js";
const menu = new MenuMobile('.list-menu','.toggle','.line')
menu.start()

const slide =  new SlideNav('.slide','.slider-wrapper')

slide.init()
slide.addControl('.custom-control')

const scroll = new ScrollAnimation('.scroll')

scroll.init()

scrollTop()