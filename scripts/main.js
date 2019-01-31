var controller = new ScrollMagic.Controller();

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
var scene = new ScrollMagic.Scene({}).setTween(animateIn).addTo(controller);
