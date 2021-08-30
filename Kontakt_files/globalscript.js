/*----------------------------*/
/* MISC                       */
/*----------------------------*/

$("#footerYear").text(new Date().getFullYear())


$(".cms-p__gallery__container, .p-hero__section, .h-komp__section, .h-projekte_section, .h-aktuell_section").on("dragstart", function(e) {
    return false;
});



/*----------------------------*/
/* NAVIGATION                 */
/*----------------------------*/

$(".nav-button").click(function() {
	if ($(".nav-overlay").is(":visible")) {
		setTimeout(function() {
			$(".nav-logo").removeClass("black")
			$("body").css("overflow", "auto")
			navScrollState()
		}, 800)
	}
	else {
		$("body").css("overflow", "hidden")
		setTimeout(function() {
			$(".nav-logo").addClass("black")
			$(".nav-logo").removeClass("hidden-logo")
		}, 600)
	}
})


$(window).scroll(function() {
  navScrollState()
})

$(document).ready(function() {
    navScrollState()
})


function navScrollState() {
  if ($(window).scrollTop() > 0) {
    $(".nav-logo").addClass("hidden-logo")
  } 
  else {
    $(".nav-logo").removeClass("hidden-logo")
  }
}




/*----------------------------*/
/* PAGE TRANSITION            */
/*----------------------------*/

function ptTransition(a) {
	if (a.attr("target") === "_blank") {return false}
	else if (a.attr("href").includes("#")) {return false}
	else if (a.attr("href").includes("mailto")) {return false}
	else if (a.attr("href").includes("tel:")) {return false}
	else if (a.attr("href").includes("?f80075c4")) {return false}
	else {return true}
}

$('a').click(function(e) {
    if (ptTransition($(this))) {
    	e.preventDefault();

    	var goTO = this.getAttribute('href');

	    $(".pagetransition__start")[0].click()
	    
	    setTimeout(function(){
	      window.location = goTO;
	    }, 1200);

	    
	    setTimeout(function(){
	    	$(".pagetransition__end")[0].click()
		}, 1500);
		
    }
});

$(".nav-overlay").click(function(a) {
	if (a.target.className === "nav-overlay__close") {
		$(".nav-button")[0].click()
	}
	else {
		setTimeout(function(){
	    	$(".pagetransition__end")[0].click()
		}, 1500);
	}
})



/*----------------------------*/
/* CUSTOM CURSOR              */
/*----------------------------*/


function addCursorHover(hoveredElement, selectedElement, newClass) {
  $(hoveredElement).hover(function() {
    $(selectedElement).addClass(newClass);
  }, function() {
    $(selectedElement).removeClass(newClass);
  });	
}

function addCursorDrag(hoveredElement, selectedElement, newClass) {
	$(hoveredElement).mousedown(function() {
		$(selectedElement).addClass(newClass);
	});
	$("body").mouseup(function() {
		$(selectedElement).removeClass(newClass)
	});
}



/*----------------------------*/
/* TEXT ANIMATION             */
/*----------------------------*/

function Utils() {}

Utils.prototype = {
    constructor: Utils,
    isElementInView: function (element, fullyInView) {
        var pageTop = $(window).scrollTop();
        var pageBottom = pageTop + $(window).height();
        var elementTop = $(element).offset().top;
        var elementBottom = elementTop + $(element).height();

        if (fullyInView === true) {
            return ((pageTop < elementTop) && (pageBottom > elementBottom));
        } else {
            return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
        }
    }
};
var Utils = new Utils();


function checkifonscreen(container) {
  if (Utils.isElementInView($(container), true)) {
    return true;
  } 
  else {
    return false;
  }
}
function checkifoffscreen(container) {
  if (Utils.isElementInView($(container), false)) {
    return false;
  } 
  else {
    return true;
  }
}


function addTextAnimation(elementId, repetition, delay) {
	$(elementId).each(function(){
		var currentElement = $(this);
		var rows = $(currentElement).html().split("<br>");
		var d;
		$(currentElement).empty();
		
		if (typeof delay !== "undefined") {
			d = delay
		}
		else {
			d = 50
		}

		// split into rows
		$.each(rows, function(i, v) {
		    $(currentElement).append($('<span class="textanimation__row">').html(v))
		});

		// split words in rows into lines
		$(currentElement).children(".textanimation__row").each(function(){
			var currentRow = $(this)
			var words = $(this).text().split(" ");
			$(this).empty();

			$.each(words, function(i, v) {
			    currentRow.append($('<span class="textanimation__container">').text(v));
			});
		})
		
		// add subspan of word
		$(currentElement).find(".textanimation__container").each(function() {
			var v = $(this).text();
			$(this).empty()
			$(this).append($('<span class="textanimation__text">').text(v))
		})

		// add space between words
	    $(currentElement).find(".textanimation__container").after(" ");

		// add onscreen function
		$(window).scroll(function() {
			if (checkifonscreen(currentElement) === true) {
		 		$(currentElement).find(".textanimation__text").each(function(index){
		 			var $this = $(this)
		 			setTimeout(function() { 
		 				$this.addClass("visible"); 
		 			}, index*d)
		 		})
			}
			else if (checkifoffscreen(currentElement) === true && repetition == true) { 
				$(currentElement).find(".textanimation__text").each(function(){
					$(this).removeClass("visible")
				})
			}
		});
		$(document).ready(function(){
			setTimeout(function() { 
				if (checkifonscreen(currentElement) === true) {
			 		$(currentElement).find(".textanimation__text").each(function(index){
			 			var $this = $(this)
			 			setTimeout(function() { 
			 				$this.addClass("visible"); 
			 			}, index*d)
			 		})
				}
			}, 500);
		})
	})
}

addTextAnimation("h1", true, 100)
