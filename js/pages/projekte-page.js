/*----------------------------*/
/* HERO MOBILE HEIGHT FIX     */
/*----------------------------*/


(function () {
  if (globalViewportWidth < 480) {
    $(".p-hero__section").css("height", window.innerHeight + "px")
  }
}());



/*----------------------------*/
/* MISC FUNCTIONS             */
/*----------------------------*/

function setLinks() {
	$(".p-list__link-block").each(function() {
	    if ($(this).find(".p-list__arrow-container div").is(":hidden")) {
	        $(this).attr("href", "#")
	    }   
	})	
}



$(".p-list__link-block").click(function() {
    if ($(this).attr("href") === "#") {
        $(this).siblings(".p-overlay__section").children(".p-overlay__open")[0].click()
    }
})

$(".p-overlay__close-container").click(function() {
    $(this).parents(".p-overlay__section").children(".p-overlay__close")[0].click()
})
$(".p-overlay__background").click(function() {
    $(this).siblings(".p-overlay__close")[0].click()
})



/*----------------------------*/
/* PROJEKTE SWIPER            */
/*----------------------------*/

$(document).ready(function() {
    projektSwiper = new Swiper ('.p-hero__container', {
        wrapperClass: 'p-hero__wrapper',
        slideClass: 'p-hero__item', 
        slidesPerView: 'auto',
        direction: 'horizontal',
        spaceBetween: 0,
        touchStartPreventDefault: false,
        freeMode: false,
        speed: 400,
        loop: true,
        loopAdditionalSlides: 1,
    });

    let amountOfSlides = $(".p-hero__container .p-hero__item").attr("data-swiper-slide-index");;

    $("#heroAmount").text(convertSliderCount(amountOfSlides));

    projektSwiper.on('slideChangeTransitionStart', function () {
        let cs = $(".p-hero__container .swiper-slide-active").attr("data-swiper-slide-index");      
        $("#heroIndex").text(convertSliderCount(cs));
    });

    addCursorHover(".p-hero__wrapper *", ".cursor", "cursor__active");
    addCursorDrag(".p-hero__wrapper *", ".cursor__circle", "cursor__circle__drag")
});

function convertSliderCount(index) {
    index = parseInt(index) + 1;
    if (index < 10) {
        index = "0" + index;
    };
    return index
}





/*----------------------------*/
/* FILTERING                  */
/*----------------------------*/


// fill content

$("#bautypList .w-dyn-item .bautyp-list-name").each(function() {
    let t = $(this).text()
    var e = $(this).parents(".p-list__filter-column").find("select")
    let id = $(this).next().text()
    e.append(
        $('<option id=' + id + '></option>').val(t).html(t)
    );
})


$(".p-list__collection-item").each(function() {
    $(this).addClass($(this).find(".p-list__filter__bauvorhaben").text())
})


// fix nav

$(window).scroll(function() {
    if ($(".p-list__filter__section").offset().top < $(document).scrollTop()) {
        $(".p-list__filter__section").addClass("fixed")
    }
    else {
        $(".p-list__filter__section").removeClass("fixed")
    }
})

$(".p-list__dropdown").change(function() {
    if ($(this).val() === "") {
       $(this).removeClass("set")
    }
    else {
        $(this).addClass("set")
    }
})



// range slider

$(document).ready(function() {
    let y = new Date().getFullYear();

    $("#yearRangeSlider").ionRangeSlider({
        skin: "flat",
        type: "double",
        min: 1971,
        max: y,
        step: 1,
        from: 1971,
        to: y,
        grid: false,
        prettify_enabled: false,
        hide_min_max: true,
        hide_from_to: false,
        force_edges: true,
        onFinish: function (data) {
            isotopeFiltering()
            scrollToFilter()
        }
    });
})


// prevent form submit

function checkEnter(e){
 e = e || event;
 var txtArea = /textarea/i.test((e.target || e.srcElement).tagName);
 return txtArea || (e.keyCode || e.which || e.charCode || 0) !== 13;
}

document.querySelector('form').onkeypress = checkEnter;


$(".p-list__filter__container form").submit(function(event) {
    event.preventDefault();
    return
})

function setAmount() {
	$(".p-list__top-bar__index span").text($(".p-list__collection-item:visible").length)
}



/*----------------------------*/
/* FILTERING – LOGIC          */
/*----------------------------*/


var filterBauart;
var filterSearch;
var filterBautyp;
var filterJahrMin;
var filterJahrMax;
var filterFunction;
var $grid;



function filteringSetup() {

	setAmount()

	$grid = $(".p-list__collection-wrapper").isotope({
	    itemSelector: '.p-list__collection-item',
	    layoutMode: 'vertical',
	    hiddenStyle: {
	        opacity: 0
	      },
	    visibleStyle: {
	        opacity: 1
	    },
	    getSortData: {
	        name: '.name',
	    },
	})
	$grid.on( 'arrangeComplete', function() {
		setAmount()
	});



	filterFunction = function() {

		// bauart

	    var itemBauart = $(this).find('.p-list__filter__bauart').text();
	    var stateBauart = false;
	    if (filterBauart === itemBauart || filterBauart === "") {stateBauart = true};


	    // bautyp

	    var itemBautyp = $(this).find('.p-list__filter__bautyp-item').map(function(){
	        return $.trim($(this).text());
	    }).get();

	    var stateBautyp = false;

	    if ($.inArray(filterBautyp, itemBautyp) !== -1) {stateBautyp = true}
	    else if (filterBautyp === "") {stateBautyp = true}
	    

	    // search

	    var qsRegex = new RegExp( filterSearch, 'gi' )
	    var stateSearch = qsRegex ? $(this).text().match( qsRegex ) : true; 


	    // years

	    var itemYearStart = $(this).find(".p-list__year .inline").eq(0).text();
	    if (itemYearStart !== "") {var itemYearStart = parseInt(itemYearStart)}
	    else {itemYearStart = 0}

	    var itemYearEnd = $(this).find(".p-list__year .inline").eq(2).text();
	    if (itemYearEnd !== "") {var itemYearEnd = parseInt(itemYearEnd)}
	    else {itemYearEnd = 0}

	    var stateYear = false;

	    if (itemYearStart >= filterJahrMin && itemYearStart <= filterJahrMax) {stateYear = true}
	    else if (itemYearEnd >= filterJahrMin && itemYearEnd <= filterJahrMax) {stateYear = true};


		// Return Verdict

	    if (stateSearch && stateBauart && stateBautyp && stateYear) {return true}
	    else {return false}
	};
}



function debounce( fn, threshold ) {
  var timeout;
  threshold = threshold || 100;
  return function debounced() {
    clearTimeout( timeout );
    var args = arguments;
    var _this = this;
    function delayed() {
      fn.apply( _this, args );
    }
    timeout = setTimeout( delayed, threshold );
  };
}

// bind Filters to Events

$('.p-list__dropdown-container select').change(function() {
    isotopeFiltering()
    scrollToFilter()
});

$('#filterSearch input').keyup(debounce(function() {
    isotopeFiltering()
    scrollToFilter()
}, 200));



function isotopeFiltering() {
    filterSearch = $("#filterSearch input").val();
    filterBauart = $("#filterBauart select").val();
    filterBautyp = $("#filterBautyp select").val();


    var a = $("#filterJahr input").val();
    filterJahrMin = parseInt(a.split(';')[0]);
    filterJahrMax = parseInt(a.split(';')[1]);
	
    $grid.isotope({ filter: filterFunction });
}


function scrollToFilter() {
    let offset = 0
    if (globalViewportWidth < 768) {
        offset = 130
    }
    console.log(offset, $(".p-list__section").offset().top)
	if ($(document).scrollTop() !== $(".p-list__section").offset().top) {
		$([document.documentElement, document.body]).animate({
	        scrollTop: $(".p-list__section").offset().top - offset
	    }, 5);
	}
	
}


/*----------------------------*/
/* TARGET SPECIFIC PAGE       */
/*----------------------------*/


$(document).ready(function(){
    var url = document.location.href;
    var path = document.location.pathname;
    var target = url.substring(url.indexOf("=") + 1);
    
    if (!target.includes(path)) {
        var i = $("#filterBautyp select").find("#" + target).val()

        $("#filterBautyp select").val(i);
        $("#filterBautyp select").addClass("set")

        scrollToFilter()

        setTimeout(function() {
            isotopeFiltering()
        }, 200)      
        setTimeout(function() {
            isotopeFiltering()
        }, 500)      
    }
});
























