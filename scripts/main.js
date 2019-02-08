// var controller = new ScrollMagic.Controller();

// Navbar
$(document).on("scroll", function(e) {
	$(".menu").css({
		top: parseInt($("body").scrollTop()) + "px"
	});
});

// Navbar Animations
var t1 = new TimelineMax({ paused: true });

t1.to(".one", 0.25, {
	y: 6,
	rotation: 45,
	ease: Expo.easeInOut
});
t1.to(".two", 0.25, {
	y: -6,
	rotation: -45,
	ease: Expo.easeInOut,
	delay: -0.25
});

t1.to(".menu", 0.8, {
	// top: 100 % +$(document).scrollTop(),
	left: "0%",
	ease: Expo.easeInOut,
	delay: -0.25
});

t1.to(".block", 0.8, {
	width: "100%",
	ease: Power4.easeInOut,
	delay: -1
});

t1.staggerFrom(
	".menu ul li",
	0.3,
	{ x: -30, opacity: 0, ease: Expo.easeOut },
	0.05
);

t1.reverse();
$(document).on("click", ".toggle-btn", function() {
	t1.reversed(!t1.reversed());
});
$(document).on("click", ".clickable", function() {
	t1.reversed(!t1.reversed());
});

// Main Animations
var animateIn = new TimelineMax();
// var scene = new ScrollMagic.Scene({}).setTween(animateIn);

// Typewriter

$(document).ready(function() {
	var app = document.getElementById("app");

	var typewriter = new Typewriter(app, {
		loop: false,
		cursor: ""
	});

	typewriter.typeString("ACCRETE<br>YOUR<br>KNOWLEDGE").start();
});

// Scroll
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
function gt7() {
	$(".main").moveTo(7);
}

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
	e = e || window.event;
	if (e.preventDefault) e.preventDefault();
	e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
	if (keys[e.keyCode]) {
		preventDefault(e);
		return false;
	}
}

function disableScroll() {
	if (window.addEventListener)
		// older FF
		window.addEventListener("DOMMouseScroll", preventDefault, false);
	window.onwheel = preventDefault; // modern standard
	window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
	window.ontouchmove = preventDefault; // mobile
	document.onkeydown = preventDefaultForScrollKeys;
}

function enableScroll() {
	if (window.removeEventListener)
		window.removeEventListener("DOMMouseScroll", preventDefault, false);
	window.onmousewheel = document.onmousewheel = null;
	window.onwheel = null;
	window.ontouchmove = null;
	document.onkeydown = null;
}

//Fixing & Preventing Scrolling while Open Menu
function lockScroll() {
	if ($("body").hasClass("lock-scroll")) {
		$("body").removeClass("lock-scroll");
		enableScroll();
	} else {
		$("body").addClass("lock-scroll");
		disableScroll();
	}
}

// Carousel

var ww;

$(document).ready(function() {
	ww = screen.width;

	if (ww >= 1024) {
		$("#carousel").Cloud9Carousel({
			// yPos: 42,
			yPos: 0,
			xPos: 0,
			yRadius: 100,
			xRadius: 500,
			farScale: 0.4,
			buttonLeft: $("#buttons > .left"),
			buttonRight: $("#buttons > .right"),
			autoPlay: 1,
			smooth: true,
			bringToFront: true
		});
		console.log("bsdk");
	} else if (ww < 1024 && ww >= 768) {
		$("#carousel").Cloud9Carousel({
			// yPos: 42,
			yPos: 0,
			xPos: 0,
			yRadius: 70,
			xRadius: 350,
			farScale: 0.4,
			buttonLeft: $("#buttons > .left"),
			buttonRight: $("#buttons > .right"),
			autoPlay: 1,
			smooth: true,
			bringToFront: true
		});
		// console.log("mc");
	} else if (ww < 768 && ww >= 600) {
		$("#carousel").Cloud9Carousel({
			// yPos: 42,
			yPos: 0,
			xPos: 0,
			yRadius: 60,
			xRadius: 250,
			farScale: 0.4,
			buttonLeft: $("#buttons > .left"),
			buttonRight: $("#buttons > .right"),
			autoPlay: 1,
			smooth: true,
			bringToFront: true
		});
		console.log("bc");
	} else if (ww < 600) {
		$("#carousel").Cloud9Carousel({
			// yPos: 42,
			yPos: 0,
			xPos: 0,
			yRadius: -30,
			xRadius: 150,
			farScale: 0.4,
			buttonLeft: $("#buttons > .left"),
			buttonRight: $("#buttons > .right"),
			autoPlay: 1,
			autoPlayDelay: 2000,
			smooth: true,
			bringToFront: true
		});
	}
});

// sdvinadvndvnsdv

// Marquee Script
// marqueeInit({
// 	uniqueid: "mycrawler",
// 	style: {
// 		padding: "5px",
// 		width: "450px",
// 		background: "lightyellow",
// 		border: "1px solid #CC3300"
// 	},
// 	inc: 5, //speed - pixel increment for each iteration of this marquee's movement
// 	mouse: "cursor driven", //mouseover behavior ('pause' 'cursor driven' or false)
// 	moveatleast: 2,
// 	neutral: 150,
// 	persist: true,
// 	savedirection: true
// });

// testing

// Modal
// $("#demo01").animatedModal();
