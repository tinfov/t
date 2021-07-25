/*----------------------------*/
/* AKTUELL SWIPER             */
/*----------------------------*/

$(document).ready(function() {
	aktuellSwiper = new Swiper ('.h-aktuell__container', {
        wrapperClass: 'h-aktuell__wrapper',
        slideClass: 'h-aktuell__item', 
        slidesPerView: 'auto',
      	direction: 'horizontal',
        spaceBetween: 0,
        touchStartPreventDefault: false,
        freeMode: false,
        speed: 400,
	});
    addCursorHover(".h-aktuell__wrapper", ".cursor", "cursor__active");
    addCursorDrag(".h-aktuell__wrapper", ".cursor__circle", "cursor__circle__drag")
});