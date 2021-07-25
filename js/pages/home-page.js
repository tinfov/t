/*----------------------------*/
/* HERO MOBILE HEIGHT FIX     */
/*----------------------------*/


(function () {
  if (globalViewportWidth < 480) {
    $(".h-hero__section").css("height", window.innerHeight + "px")
  }
}());

addTextAnimation("h2, .h-angebot__link-block, .h-angebot__separator", true, 100)



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



/*----------------------------*/
/* PROJEKTE SWIPER            */
/*----------------------------*/

$(document).ready(function() {
    teamSwiper = new Swiper ('.h-projekte__container', {
        wrapperClass: 'h-projekte__wrapper',
        slideClass: 'h-projekte__item', 
        slidesPerView: 'auto',
        direction: 'horizontal',
        spaceBetween: 0,
        touchStartPreventDefault: false,
        freeMode: false,
        speed: 400,
    });
    addCursorHover(".h-projekte__wrapper", ".cursor", "cursor__active");
    addCursorDrag(".h-projekte__wrapper", ".cursor__circle", "cursor__circle__drag")
});



/*----------------------------*/
/* KOMPETENZEN SWIPER         */
/*----------------------------*/

$(document).ready(function() {
    teamSwiper = new Swiper ('.h-komp__collection-container', {
        wrapperClass: 'h-komp__collection-wrapper',
        slideClass: 'h-komp__collection-item', 
        slidesPerView: 'auto',
        direction: 'horizontal',
        spaceBetween: 0,
        touchStartPreventDefault: false,
        freeMode: false,
        speed: 400,
    });
    addCursorHover(".h-komp__collection-wrapper", ".cursor", "cursor__active");
    addCursorDrag(".h-komp__collection-wrapper", ".cursor__circle", "cursor__circle__drag")
});



/*----------------------------*/
/* HERO SLIDER                */
/*----------------------------*/

let sliderIndex = 0;

function heroSlider(index, duration) {
    let maxIndex = $(".h-hero__collection-wrapper").children().length;

    // set new Index

    if (typeof index !== "undefined") {
        if (index === "next") {
            sliderIndex++
        }
        else if (index === "prev") {
            sliderIndex--
        }
        else {
            sliderIndex = index
        }
    };

    // Check for overflow

    if (sliderIndex === maxIndex) {
        sliderIndex = 0
    }
    if (sliderIndex < 0) {
        sliderIndex = maxIndex - 1
    }


    // set index and amount

    $(".h-hero__collection-item").addClass("inactive")
    setTimeout(function() {
        $(".h-hero__collection-item").eq(sliderIndex).removeClass("inactive")
    }, 200)
    $("#heroIndex").text(convertCount(sliderIndex))


    // set progressbars

    let time;

    if (typeof duration !== "undefined") {
        time = duration
    }
    else {
        time = 8000
    }

    $(".h-hero__progress-indicator").css({"-webkit-transition": "none", "transition": "none"})
    $(".h-hero__progress-indicator").removeClass("loading")
    $(".h-hero__progress-indicator").eq(sliderIndex).css({"-webkit-transition": "width " + time + "ms linear", "transition": "width " + time + "ms linear"})
    $(".h-hero__progress-indicator").eq(sliderIndex).addClass("loading")


    // set link field

    var l = $(".h-hero__collection-item").eq(sliderIndex).find("a")

    $(".h-hero__link-block").attr("href", l.attr("href"))
    $(".h-hero__index__heading").text(l.text())
}




$(document).ready(function() {
    // setup
    var i = $(".h-hero__collection-wrapper").children().length - 1
    $("#heroAmount").text(convertCount(i))

    
    $(".h-hero__collection-item").each(function() {
        $(".h-hero__progress-bar").eq(0).clone().appendTo(".h-hero__progress-container")
    })
    $(".h-hero__progress-bar").eq($(".h-hero__collection-item").length).remove()

    heroSlider(0, 8000)

    // loop
    var iv = setInterval(function(){ heroSlider("next", 8000) }, 8000);


    $("#heroNext").click(function() {
    	heroSlider("next")
    	clearInterval(iv);

    	iv = setInterval(function(){ heroSlider("next", 8000) }, 8000);
    })
})



function convertCount(i) {
    var index = i + 1;
    if (index < 10) {
        index = "0" + index;
    }
    return index
}

$(".h-hero__link-block").hover(function() {
	if (globalViewportWidth > 768) {
    	$(".h-hero__name-container").addClass("hover")
	}
}, function() {
    $(".h-hero__name-container").removeClass("hover")
})




/*----------------------------*/
/* ANGEBOT LINK               */
/*----------------------------*/

$(".h-angebot__collection-item").each(function() {
    $(this).find("a").eq(0).attr("href", $(this).find(".angebot-href").attr("href"))
})











