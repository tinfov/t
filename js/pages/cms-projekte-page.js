/*----------------------------*/
/* NAVIGATION                 */
/*----------------------------*/

$(document).ready(function() {
	let e = $("#nextList .w--current").parent()
	let li = $("#nextList .w-dyn-item").length - 1
	let ci = e.index()
	let prev;
	let next;

	if (ci === 0) {
		prev = li
		next = ci + 1

	}
	else if (ci === li) {
		prev = ci + 1
		next = 0
	}
	else {
		prev = ci - 1
		next = ci + 1
	}

	console.log(prev, next)

	let prevCopy = $("#nextList .w-dyn-item").eq(prev).text()
	let nextCopy = $("#nextList .w-dyn-item").eq(next).text()
	let prevLink = $("#nextList .w-dyn-item").eq(prev).children().attr("href")
	let nextLink = $("#nextList .w-dyn-item").eq(next).children().attr("href")

	console.log(prevLink, nextLink)

	$("#navPrevCopy").text(prevCopy)
	$("#navNextCopy").text(nextCopy)
	$("#navPrevLink, #navSmallPrevLink").attr("href", prevLink)
	$("#navNextLink, #navSmallNextLink").attr("href", nextLink)
})

$("#navPrevLink").hover(function() {
	console.log("active")
	$("#navPrevCopy").addClass('active')
}, function() {
	console.log("inactive")
	$("#navPrevCopy").removeClass('active')
})
$("#navNextLink").hover(function() {
	$("#navNextCopy").addClass('active')
}, function() {
	$("#navNextCopy").removeClass('active')
})



/*----------------------------*/
/* PROJEKTE SWIPER            */
/*----------------------------*/

$(document).ready(function() {
    teamSwiper = new Swiper ('.cms-p__gallery__container', {
        wrapperClass: 'cms-p__gallery__wrapper',
        slideClass: 'cms-p__gallery__item', 
        slidesPerView: 'auto',
        direction: 'horizontal',
        spaceBetween: 0,
        touchStartPreventDefault: false,
        freeMode: false,
        speed: 400,
    });
    addCursorHover(".cms-p__gallery__wrapper", ".cursor", "cursor__active");
    addCursorDrag(".cms-p__gallery__wrapper", ".cursor__circle", "cursor__circle__drag")
});




/*----------------------------*/
/* GALLERY REVEAL FIX         */
/*----------------------------*/

$(window).scroll(function() {
    let done = false;

    if(checkifonscreen(".cms-p__gallery__lightbox:eq(0)") && done === false && $(".cms-p__gallery__lightbox:eq(0) .utility__hover__gradient").css("transform") !== "matrix(1, 0, 0, 1, 0, 0)") {
        done = true;
        setTimeout(function() {
        	console.log("true")
            $(".cms-p__gallery__lightbox").addClass("active")
        }, 2000)
    }
})


