/**
 * Timeline - a horizontal / vertical timeline component
 * v. 1.1.4
 * Copyright Mike Collins
 * MIT License
 */
"use strict";
var _slicedToArray = function(e, t) {
	if (Array.isArray(e)) return e;
	if (Symbol.iterator in Object(e))
		return (function(e, t) {
			var i = [],
				n = !0,
				l = !1,
				a = void 0;
			try {
				for (
					var r, s = e[Symbol.iterator]();
					!(n = (r = s.next()).done) &&
					(i.push(r.value), !t || i.length !== t);
					n = !0
				);
			} catch (e) {
				(l = !0), (a = e);
			} finally {
				try {
					!n && s.return && s.return();
				} finally {
					if (l) throw a;
				}
			}
			return i;
		})(e, t);
	throw new TypeError("Invalid attempt to destructure non-iterable instance");
};

function timeline(e, v) {
	var g = [],
		p = "Timeline:",
		t = window.innerWidth,
		i = void 0,
		o = 0,
		b = {
			forceVerticalMode: {
				type: "integer",
				defaultValue: 600
			},
			horizontalStartPosition: {
				type: "string",
				acceptedValues: ["bottom", "top"],
				defaultValue: "top"
			},
			mode: {
				type: "string",
				acceptedValues: ["horizontal", "vertical"],
				defaultValue: "vertical"
			},
			moveItems: {
				type: "integer",
				defaultValue: 1
			},
			startIndex: {
				type: "integer",
				defaultValue: 0
			},
			verticalStartPosition: {
				type: "string",
				acceptedValues: ["left", "right"],
				defaultValue: "left"
			},
			verticalTrigger: {
				type: "string",
				defaultValue: "15%"
			},
			visibleItems: {
				type: "integer",
				defaultValue: 3
			}
		};

	function n(e, t, i) {
		t.classList.add(i), e.parentNode.insertBefore(t, e), t.appendChild(e);
	}

	function l(e, t) {
		var i = e.getBoundingClientRect(),
			n = window.innerHeight || document.documentElement.clientHeight,
			l = b.verticalTrigger.defaultValue.match(/(\d*\.?\d*)(.*)/),
			a = t.unit,
			r = t.value,
			s = n;
		if ("px" === a && n <= r) {
			console.warn(
				'The value entered for the setting "verticalTrigger" is larger than the window height. The default value will be used instead.'
			);
			var o = _slicedToArray(l, 3);
			(r = o[1]), (a = o[2]);
		}
		return (
			"px" === a
				? (s = parseInt(s - r, 10))
				: "%" === a && (s = parseInt(s * ((100 - r) / 100), 10)),
			i.top <= s &&
				i.left <=
					(window.innerWidth ||
						document.documentElement.clientWidth) &&
				0 <= i.top + i.height &&
				0 <= i.left + i.width
		);
	}

	function d(e, t) {
		(e.style.webkitTransform = t),
			(e.style.msTransform = t),
			(e.style.transform = t);
	}

	function c(e) {
		var t = "translate3d(-" + e.items[o].offsetLeft + "px, 0, 0)";
		d(e.scroller, t);
	}

	function a(e) {
		var a, t, i, n, l, r, s;
		(o = e.settings.startIndex),
			e.timelineEl.classList.add("timeline--horizontal"),
			(a = e),
			window.innerWidth > a.settings.forceVerticalMode &&
				((a.itemWidth = a.wrap.offsetWidth / a.settings.visibleItems),
				a.items.forEach(function(e) {
					e.style.width = a.itemWidth + "px";
				}),
				(a.scrollerWidth = a.itemWidth * a.items.length),
				(a.scroller.style.width = a.scrollerWidth + "px"),
				(function() {
					var n = 0,
						l = 0;
					if (screen.width <= 600) {
						console.log("Hellojdjaj");
						a.items.forEach(function(e, t) {
							e.style.height = "auto";
							var i = e.offsetHeight;
							t % 2 == 0
								? (l = l < i ? i : l)
								: (n = n < i ? i : n);
						});
						var i = "translateY(" + 0 + "px)";
						a.items.forEach(function(e, t) {
							t % 2 == 0
								? ((e.style.height = l + "px"),
								  "bottom" ===
								  a.settings.horizontalStartPosition
										? (e.classList.add(
												"timeline__item--top"
										  ),
										  d(e, i))
										: e.classList.add(
												"timeline__item--top"
										  ))
								: ((e.style.height = l + "px"),
								  "bottom" !==
								  a.settings.horizontalStartPosition
										? (e.classList.add(
												"timeline__item--top"
										  ),
										  d(e, i))
										: e.classList.add(
												"timeline__item--top"
										  ));
						}),
							(a.scroller.style.height = l + n + "px");
					} else {
						a.items.forEach(function(e, t) {
							e.style.height = "auto";
							var i = e.offsetHeight;
							t % 2 == 0
								? (l = l < i ? i : l)
								: (n = n < i ? i : n);
						});
						var i = "translateY(" + l + "px)";
						a.items.forEach(function(e, t) {
							t % 2 == 0
								? ((e.style.height = l + "px"),
								  "bottom" ===
								  a.settings.horizontalStartPosition
										? (e.classList.add(
												"timeline__item--bottom"
										  ),
										  d(e, i))
										: e.classList.add(
												"timeline__item--top"
										  ))
								: ((e.style.height = n + "px"),
								  "bottom" !==
								  a.settings.horizontalStartPosition
										? (e.classList.add(
												"timeline__item--bottom"
										  ),
										  d(e, i))
										: e.classList.add(
												"timeline__item--top"
										  ));
						}),
							(a.scroller.style.height = l + n + "px");
					}
				})()),
			c(e),
			(function(e) {
				if (e.items.length > e.settings.visibleItems) {
					var t = document.createElement("button"),
						i = document.createElement("button"),
						n = e.items[0].offsetHeight;
					(t.className =
						"timeline-nav-button timeline-nav-button--prev"),
						(i.className =
							"timeline-nav-button timeline-nav-button--next"),
						(t.textContent = "Previous"),
						(i.textContent = "Next"),
						(t.style.top = n + "px"),
						(i.style.top = n + "px"),
						0 === o
							? (t.disabled = !0)
							: o === e.items.length - e.settings.visibleItems &&
							  (i.disabled = !0),
						e.timelineEl.appendChild(t),
						e.timelineEl.appendChild(i);
				}
			})(e),
			(function(e) {
				var t = e.timelineEl.querySelector(".timeline-divider");
				t && e.timelineEl.removeChild(t);
				var i = e.items[0].offsetHeight,
					n = document.createElement("span");
				(n.className = "timeline-divider"),
					(n.style.top = i + "px"),
					e.timelineEl.appendChild(n);
			})(e),
			(i = (t = e).timelineEl.querySelectorAll(".timeline-nav-button")),
			(n = t.timelineEl.querySelector(".timeline-nav-button--prev")),
			(l = t.timelineEl.querySelector(".timeline-nav-button--next")),
			(r = t.items.length - t.settings.visibleItems),
			(s = parseInt(t.settings.moveItems, 10)),
			[].forEach.call(i, function(e) {
				e.addEventListener("click", function(e) {
					e.preventDefault(),
						0 ===
							(o = this.classList.contains(
								"timeline-nav-button--next"
							)
								? (o += s)
								: (o -= s)) || o < 0
							? ((o = 0), (n.disabled = !0), (l.disabled = !1))
							: o === r || r < o
							? ((o = r), (n.disabled = !1), (l.disabled = !0))
							: ((n.disabled = !1), (l.disabled = !1)),
						c(t);
				});
			});
	}

	function r() {
		g.forEach(function(e) {
			(e.timelineEl.style.opacity = 0),
				e.timelineEl.classList.contains("timeline--loaded") ||
					e.items.forEach(function(e) {
						n(
							e.querySelector(".timeline__content"),
							document.createElement("div"),
							"timeline__content__wrap"
						),
							n(
								e.querySelector(".timeline__content__wrap"),
								document.createElement("div"),
								"timeline__item__inner"
							);
					}),
				(function(e) {
					e.timelineEl.classList.remove(
						"timeline--horizontal",
						"timeline--mobile"
					),
						e.scroller.removeAttribute("style"),
						e.items.forEach(function(e) {
							e.removeAttribute("style"),
								e.classList.remove(
									"animated",
									"fadeIn",
									"timeline__item--left",
									"timeline__item--right"
								);
						});
					var t = e.timelineEl.querySelectorAll(
						".timeline-nav-button"
					);
					[].forEach.call(t, function(e) {
						e.parentNode.removeChild(e);
					});
				})(e),
				window.innerWidth <= e.settings.forceVerticalMode &&
					e.timelineEl.classList.add("timeline--mobile"),
				"horizontal" === e.settings.mode &&
				window.innerWidth > e.settings.forceVerticalMode
					? a(e)
					: (function(i) {
							var n = 0;
							i.items.forEach(function(e, t) {
								e.classList.remove("animated", "fadeIn"),
									!l(e, i.settings.verticalTrigger) && 0 < t
										? e.classList.add("animated")
										: (n = t),
									t % 2 ==
										("left" ===
										i.settings.verticalStartPosition
											? 1
											: 0) &&
									window.innerWidth >
										i.settings.forceVerticalMode
										? e.classList.add(
												"timeline__item--right"
										  )
										: e.classList.add(
												"timeline__item--left"
										  );
							});
							for (var e = 0; e < n; e += 1)
								i.items[e].classList.remove(
									"animated",
									"fadeIn"
								);
							window.addEventListener("scroll", function() {
								i.items.forEach(function(e) {
									l(e, i.settings.verticalTrigger) &&
										e.classList.add("fadeIn");
								});
							});
					  })(e),
				e.timelineEl.classList.add("timeline--loaded"),
				setTimeout(function() {
					e.timelineEl.style.opacity = 1;
				}, 500);
		});
	}
	e.length &&
		[].forEach.call(e, function(e) {
			var t = e.id ? "#" + e.id : "." + e.className,
				i = "could not be found as a direct descendant of",
				n = e.dataset,
				l = void 0,
				a = void 0,
				r = void 0,
				s = {};
			try {
				if (!(l = e.querySelector(".timeline__wrap")))
					throw new Error(p + " .timeline__wrap " + i + " " + t);
				if (!(a = l.querySelector(".timeline__items")))
					throw new Error(
						p + " .timeline__items " + i + " .timeline__wrap"
					);
				r = [].slice.call(a.children, 0);
			} catch (e) {
				return console.warn(e.message), !1;
			}
			Object.keys(b).forEach(function(e) {
				var t, i;
				(s[e] = b[e].defaultValue),
					n[e] ? (s[e] = n[e]) : v && v[e] && (s[e] = v[e]),
					"integer" === b[e].type
						? (s[e] &&
								((t = s[e]),
								(i = e),
								"number" == typeof t ||
									t % 1 == 0 ||
									(console.warn(
										p +
											' The value "' +
											t +
											'" entered for the setting "' +
											i +
											'" is not an integer.'
									),
									0))) ||
						  (s[e] = b[e].defaultValue)
						: "string" === b[e].type &&
						  b[e].acceptedValues &&
						  -1 === b[e].acceptedValues.indexOf(s[e]) &&
						  (console.warn(
								p +
									' The value "' +
									s[e] +
									'" entered for the setting "' +
									e +
									'" was not recognised.'
						  ),
						  (s[e] = b[e].defaultValue));
			});
			var o = b.verticalTrigger.defaultValue.match(/(\d*\.?\d*)(.*)/),
				d = s.verticalTrigger.match(/(\d*\.?\d*)(.*)/),
				c = _slicedToArray(d, 3),
				m = c[1],
				u = c[2],
				f = !0;
			if (
				(m ||
					(console.warn(
						p +
							" No numercial value entered for the 'verticalTrigger' setting."
					),
					(f = !1)),
				"px" !== u &&
					"%" !== u &&
					(console.warn(
						p +
							" The setting 'verticalTrigger' must be a percentage or pixel value."
					),
					(f = !1)),
				"%" === u && (100 < m || m < 0)
					? (console.warn(
							p +
								" The 'verticalTrigger' setting value must be between 0 and 100 if using a percentage value."
					  ),
					  (f = !1))
					: "px" === u &&
					  m < 0 &&
					  (console.warn(
							p +
								" The 'verticalTrigger' setting value must be above 0 if using a pixel value."
					  ),
					  (f = !1)),
				!1 === f)
			) {
				var h = _slicedToArray(o, 3);
				(m = h[1]), (u = h[2]);
			}
			(s.verticalTrigger = {
				unit: u,
				value: m
			}),
				s.moveItems > s.visibleItems &&
					(console.warn(
						p +
							' The value of "moveItems" (' +
							s.moveItems +
							') is larger than the number of "visibleItems" (' +
							s.visibleItems +
							'). The value of "visibleItems" has been used instead.'
					),
					(s.moveItems = s.visibleItems)),
				s.startIndex >= r.length - s.visibleItems
					? (console.warn(
							p +
								" The 'startIndex' setting must be between 0 and " +
								(r.length - s.visibleItems) +
								" for this timeline. The value of " +
								(r.length - s.visibleItems) +
								" has been used instead."
					  ),
					  (s.startIndex = r.length - s.visibleItems))
					: s.startIndex < 0 &&
					  (console.warn(
							p +
								" The 'startIndex' setting must be between 0 and " +
								(r.length - s.visibleItems) +
								" for this timeline. The value of 0 has been used instead."
					  ),
					  (s.startIndex = 0)),
				g.push({
					timelineEl: e,
					wrap: l,
					scroller: a,
					items: r,
					settings: s
				});
		}),
		r(),
		window.addEventListener("resize", function() {
			clearTimeout(i),
				(i = setTimeout(function() {
					var e = window.innerWidth;
					e !== t && (r(), (t = e));
				}, 250));
		});
}
window.jQuery &&
	(window.jQuery.fn.timeline = function(e) {
		return timeline(this, e), this;
	});
