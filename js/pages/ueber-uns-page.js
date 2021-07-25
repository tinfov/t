$(".uu-team__collection-item").hover(function() {
	$(".uu-team__cursor__item").removeClass("active")
	$(".uu-team__cursor__item").eq($(this).index()).addClass("active")
})

$(".uu-team__collection-wrapper").hover(function() {
	$(".uu-team__cursor__container").addClass("show")
}, function() {
	$(".uu-team__cursor__container").removeClass("show")
})