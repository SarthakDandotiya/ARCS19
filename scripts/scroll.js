// Scroll Initialization & Settings
$(document).ready(function() {
	$(".main").onepage_scroll({
		sectionContainer: "section",
		easing: "ease",
		animationTime: 1000,
		// loop: true,
		// pagination: true,
		direction: "vertical",
		keyboard: true,
		updateURL: false
	});
});
