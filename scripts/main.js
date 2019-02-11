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

// Animations
var button = document.querySelector(".btx"),
  background = document.querySelector(".backgroundHover"),
  firstWord = document.querySelectorAll(".btx span"),
  secondWord = document.querySelectorAll(".btx i");
var button2 = document.querySelector(".btx2"),
  background2 = document.querySelector(".backgroundHover2"),
  firstWord2 = document.querySelectorAll(".btx2 span"),
  secondWord2 = document.querySelectorAll(".btx2 i");

// Timeline
var tl = new TimelineMax({ paused: true });
tl.staggerTo(
  firstWord,
  1,
  { rotationX: 360, ease: Expo.easeOut },
  0.03,
  "#start"
);
tl.staggerTo(
  secondWord,
  1,
  { rotationX: 360, ease: Expo.easeOut },
  0.03,
  "#start"
);
tl.to(button, 0.3, { ease: Quad.easeOut }, "#start");
tl.from(
  background,
  0.25,
  { scaleX: "0%", transformOrigin: "left center", ease: Quad.easeInOut },
  "#start"
);

var t2 = new TimelineMax({ paused: true });
t2.staggerTo(
  firstWord2,
  1,
  { rotationX: 360, ease: Expo.easeOut },
  0.03,
  "#start2"
);
t2.staggerTo(
  secondWord2,
  1,
  { rotationX: 360, ease: Expo.easeOut },
  0.03,
  "#start2"
);
t2.to(button, 0.3, { ease: Quad.easeOut }, "#start2");
t2.from(
  background2,
  0.25,
  { scaleX: "0%", transformOrigin: "left center", ease: Quad.easeInOut },
  "#start2"
);

// HOVER
button.addEventListener("mouseenter", function() {
  tl.play();
});

button.addEventListener("mouseleave", function() {
  tl.reverse();
});

button2.addEventListener("mouseenter", function() {
  t2.play();
});

button2.addEventListener("mouseleave", function() {
  t2.reverse();
});

// Typewriter

var app = document.getElementById("app");

var typewriter = new Typewriter(app, {
  loop: false,
  cursor: ""
});

typewriter.typeString("ACCRETE<br>YOUR<br>KNOWLEDGE").start();

// Scroll
// Scroll Initialization & Settings
$(document).ready(function() {
  $(".main").onepage_scroll({
    sectionContainer: "section",
    easing: "ease",
    animationTime: 800,
    loop: false,
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
      xRadius: 125,
      farScale: 0.4,
      buttonLeft: $("#buttons > .left"),
      buttonRight: $("#buttons > .right"),
      autoPlay: 1,
      autoPlayDelay: 2000,
      smooth: true,
      frontItemClass: "card-shadow",
      bringToFront: true
    });
  }
});

// Timeline

if (screen.width >= 600) {
  $(".timeline").timeline({
    forceVerticalMode: 200,
    mode: "horizontal",
    visibleItems: 4
  });
} else {
  $(".timeline").timeline({
    forceVerticalMode: 200,
    mode: "horizontal",
    visibleItems: 1
  });
}

$("#modal-ml").iziModal({
  overlayColor: "rgba(0,0,0,0.9)",
  zindex: 9999
});
$("#modal-ui").iziModal({
  overlayColor: "rgba(0,0,0,0.9)",
  zindex: 9999
});
$("#modal-bc").iziModal({
  overlayColor: "rgba(0,0,0,0.9)",
  zindex: 9999
});
$("#modal-c").iziModal({
  overlayColor: "rgba(0,0,0,0.9)",
  zindex: 9999
});
$("#modal-cs").iziModal({
  overlayColor: "rgba(0,0,0,0.9)",
  zindex: 9999
});

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2500); // Change image every 2 seconds
}

function no_reg() {
  alert("Registrations not open yet!");
}

$(document).bind("touchmove", function(e) {
  e.preventDefault();
});

var scroll = function(e) {
  // compute state
  if (stopScrollX || stopScrollY) {
    e.preventDefault(); // this one is the key
    e.stopPropagation();
    window.scroll(scrollToX, scrollToY);
  }
};

document.addEventListener("mousewheel", scroll, false);
