// Scroll Initialization & Settings
$(document).ready(function() {
	$(".main").onepage_scroll({
		sectionContainer: "section",
		easing: "ease",
		animationTime: 800,
		loop: true,
		// pagination: true,
		direction: "vertical",
		keyboard: true,
		updateURL: false
	});
});

function gt1() {
	$(".main").moveTo(1);
}
function gt2() {
	$(".main").moveTo(2);
}
function gt3() {
	$(".main").moveTo(3);
}
function gt4() {
	$(".main").moveTo(4);
}
function gt5() {
	$(".main").moveTo(5);
}
function gt6() {
	$(".main").moveTo(6);
}

// // left: 37, up: 38, right: 39, down: 40,
// // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
// var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

// function preventDefault(e) {
// 	e = e || window.event;
// 	if (e.preventDefault) e.preventDefault();
// 	e.returnValue = false;
// }

// function preventDefaultForScrollKeys(e) {
// 	if (keys[e.keyCode]) {
// 		preventDefault(e);
// 		return false;
// 	}
// }

// function disableScroll() {
// 	if (window.addEventListener)
// 		// older FF
// 		window.addEventListener("DOMMouseScroll", preventDefault, false);
// 	window.onwheel = preventDefault; // modern standard
// 	window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
// 	window.ontouchmove = preventDefault; // mobile
// 	document.onkeydown = preventDefaultForScrollKeys;
// }

// function enableScroll() {
// 	if (window.removeEventListener)
// 		window.removeEventListener("DOMMouseScroll", preventDefault, false);
// 	window.onmousewheel = document.onmousewheel = null;
// 	window.onwheel = null;
// 	window.ontouchmove = null;
// 	document.onkeydown = null;
// }

// //Fixing & Preventing Scrolling while Open Menu
// function lockScroll() {
// 	if ($("body").hasClass("lock-scroll")) {
// 		$("body").removeClass("lock-scroll");
// 		enableScroll();
// 	} else {
// 		$("body").addClass("lock-scroll");
// 		disableScroll();
// 	}
// }
