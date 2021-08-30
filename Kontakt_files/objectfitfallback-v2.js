$(document).ready(function() {
	if('objectFit' in document.documentElement.style === false) {
	  $("img").each(function() {
	  	if ($(this).attr("object-fit-size")) {
		  	let p = $(this).attr("object-fit-position")
		  	let size = $(this).attr("object-fit-size")
		  	let pos = "50% 50%";

		  	if (p) {pos = p};

		  	$(this).parent().css({
		  		"background-size": size,
		  		"background-position": pos, 
		  		"background-image": "url(" + $(this).attr("src") + ")", 
		  		"background-repeat": "no-repeat",
		  	})
		  	$(this).remove()
	  	}
	  })
	}
});