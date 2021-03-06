
! function (a) {
	"function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery)
}(function (a) {
	function b(b) {
		var g = b || window.event,
			h = i.call(arguments, 1),
			j = 0,
			l = 0,
			m = 0,
			n = 0,
			o = 0,
			p = 0;
		if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
			if (1 === g.deltaMode) {
				var q = a.data(this, "mousewheel-line-height");
				j *= q, m *= q, l *= q
			} else if (2 === g.deltaMode) {
				var r = a.data(this, "mousewheel-page-height");
				j *= r, m *= r, l *= r
			}
			if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
				var s = this.getBoundingClientRect();
				o = b.clientX - s.left, p = b.clientY - s.top
			}
			return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h)
		}
	}

	function c() {
		f = null
	}

	function d(a, b) {
		return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0
	}
	var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
		h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
		i = Array.prototype.slice;
	if (a.event.fixHooks)
		for (var j = g.length; j;) a.event.fixHooks[g[--j]] = a.event.mouseHooks;
	var k = a.event.special.mousewheel = {
		version: "3.1.12",
		setup: function () {
			if (this.addEventListener)
				for (var c = h.length; c;) this.addEventListener(h[--c], b, !1);
			else this.onmousewheel = b;
			a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this))
		},
		teardown: function () {
			if (this.removeEventListener)
				for (var c = h.length; c;) this.removeEventListener(h[--c], b, !1);
			else this.onmousewheel = null;
			a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height")
		},
		getLineHeight: function (b) {
			var c = a(b),
				d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
			return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16
		},
		getPageHeight: function (b) {
			return a(b).height()
		},
		settings: {
			adjustOldDeltas: !0,
			normalizeOffset: !0
		}
	};
	a.fn.extend({
		mousewheel: function (a) {
			return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
		},
		unmousewheel: function (a) {
			return this.unbind("mousewheel", a)
		}
	})
}), ! function (a) {
	"function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery)
}(function (a) {
	function b(b) {
		var g = b || window.event,
			h = i.call(arguments, 1),
			j = 0,
			l = 0,
			m = 0,
			n = 0,
			o = 0,
			p = 0;
		if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
			if (1 === g.deltaMode) {
				var q = a.data(this, "mousewheel-line-height");
				j *= q, m *= q, l *= q
			} else if (2 === g.deltaMode) {
				var r = a.data(this, "mousewheel-page-height");
				j *= r, m *= r, l *= r
			}
			if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
				var s = this.getBoundingClientRect();
				o = b.clientX - s.left, p = b.clientY - s.top
			}
			return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h)
		}
	}

	function c() {
		f = null
	}

	function d(a, b) {
		return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0
	}
	var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
		h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
		i = Array.prototype.slice;
	if (a.event.fixHooks)
		for (var j = g.length; j;) a.event.fixHooks[g[--j]] = a.event.mouseHooks;
	var k = a.event.special.mousewheel = {
		version: "3.1.12",
		setup: function () {
			if (this.addEventListener)
				for (var c = h.length; c;) this.addEventListener(h[--c], b, !1);
			else this.onmousewheel = b;
			a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this))
		},
		teardown: function () {
			if (this.removeEventListener)
				for (var c = h.length; c;) this.removeEventListener(h[--c], b, !1);
			else this.onmousewheel = null;
			a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height")
		},
		getLineHeight: function (b) {
			var c = a(b),
				d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
			return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16
		},
		getPageHeight: function (b) {
			return a(b).height()
		},
		settings: {
			adjustOldDeltas: !0,
			normalizeOffset: !0
		}
	};
	a.fn.extend({
		mousewheel: function (a) {
			return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
		},
		unmousewheel: function (a) {
			return this.unbind("mousewheel", a)
		}
	})
}), ! function (a) {
	"function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof module && module.exports ? module.exports = a : a(jQuery, window, document)
}(function (a) {
	! function (b) {
		var c = "function" == typeof define && define.amd,
			d = "undefined" != typeof module && module.exports,
			e = "https:" == document.location.protocol ? "https:" : "http:",
			f = "cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js";
		c || (d ? require("jquery-mousewheel")(a) : a.event.special.mousewheel || a("head").append(decodeURI("%3Cscript src=" + e + "//" + f + "%3E%3C/script%3E"))), b()
	}(function () {
		var b, c = "mCustomScrollbar",
			d = "mCS",
			e = ".mCustomScrollbar",
			f = {
				setTop: 0,
				setLeft: 0,
				axis: "y",
				scrollbarPosition: "inside",
				scrollInertia: 950,
				autoDraggerLength: !0,
				alwaysShowScrollbar: 0,
				snapOffset: 0,
				mouseWheel: {
					enable: !0,
					scrollAmount: "auto",
					axis: "y",
					deltaFactor: "auto",
					disableOver: ["select", "option", "keygen", "datalist", "textarea"]
				},
				scrollButtons: {
					scrollType: "stepless",
					scrollAmount: "auto"
				},
				keyboard: {
					enable: !0,
					scrollType: "stepless",
					scrollAmount: "auto"
				},
				contentTouchScroll: 25,
				documentTouchScroll: !0,
				advanced: {
					autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
					updateOnContentResize: !0,
					updateOnImageLoad: "auto",
					autoUpdateTimeout: 60
				},
				theme: "light",
				callbacks: {
					onTotalScrollOffset: 0,
					onTotalScrollBackOffset: 0,
					alwaysTriggerOffsets: !0
				}
			},
			g = 0,
			h = {},
			i = window.attachEvent && !window.addEventListener ? 1 : 0,
			j = !1,
			k = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"],
			l = {
				init: function (b) {
					var b = a.extend(!0, {}, f, b),
						c = m.call(this);
					if (b.live) {
						var i = b.liveSelector || this.selector || e,
							j = a(i);
						if ("off" === b.live) return void o(i);
						h[i] = setTimeout(function () {
							j.mCustomScrollbar(b), "once" === b.live && j.length && o(i)
						}, 500)
					} else o(i);
					return b.setWidth = b.set_width ? b.set_width : b.setWidth, b.setHeight = b.set_height ? b.set_height : b.setHeight, b.axis = b.horizontalScroll ? "x" : p(b.axis), b.scrollInertia = b.scrollInertia > 0 && b.scrollInertia < 17 ? 17 : b.scrollInertia, "object" != typeof b.mouseWheel && 1 == b.mouseWheel && (b.mouseWheel = {
							enable: !0,
							scrollAmount: "auto",
							axis: "y",
							preventDefault: !1,
							deltaFactor: "auto",
							normalizeDelta: !1,
							invert: !1
						}), b.mouseWheel.scrollAmount = b.mouseWheelPixels ? b.mouseWheelPixels : b.mouseWheel.scrollAmount,
						b.mouseWheel.normalizeDelta = b.advanced.normalizeMouseWheelDelta ? b.advanced.normalizeMouseWheelDelta : b.mouseWheel.normalizeDelta, b.scrollButtons.scrollType = q(b.scrollButtons.scrollType), n(b), a(c).each(function () {
							var c = a(this);
							if (!c.data(d)) {
								c.data(d, {
									idx: ++g,
									opt: b,
									scrollRatio: {
										y: null,
										x: null
									},
									overflowed: null,
									contentReset: {
										y: null,
										x: null
									},
									bindEvents: !1,
									tweenRunning: !1,
									sequential: {},
									langDir: c.css("direction"),
									cbOffsets: null,
									trigger: null,
									poll: {
										size: {
											o: 0,
											n: 0
										},
										img: {
											o: 0,
											n: 0
										},
										change: {
											o: 0,
											n: 0
										}
									}
								});
								var e = c.data(d),
									f = e.opt,
									h = c.data("mcs-axis"),
									i = c.data("mcs-scrollbar-position"),
									j = c.data("mcs-theme");
								h && (f.axis = h), i && (f.scrollbarPosition = i), j && (f.theme = j, n(f)), r.call(this), e && f.callbacks.onCreate && "function" == typeof f.callbacks.onCreate && f.callbacks.onCreate.call(this), a("#mCSB_" + e.idx + "_container img:not(." + k[2] + ")").addClass(k[2]), l.update.call(null, c)
							}
						})
				},
				update: function (b, c) {
					var e = b || m.call(this);
					return a(e).each(function () {
						var b = a(this);
						if (b.data(d)) {
							var e = b.data(d),
								f = e.opt,
								g = a("#mCSB_" + e.idx + "_container"),
								h = a("#mCSB_" + e.idx),
								i = [a("#mCSB_" + e.idx + "_dragger_vertical"), a("#mCSB_" + e.idx + "_dragger_horizontal")];
							if (!g.length) return;
							e.tweenRunning && W(b), c && e && f.callbacks.onBeforeUpdate && "function" == typeof f.callbacks.onBeforeUpdate && f.callbacks.onBeforeUpdate.call(this), b.hasClass(k[3]) && b.removeClass(k[3]), b.hasClass(k[4]) && b.removeClass(k[4]), h.css("max-height", "none"), h.height() !== b.height() && h.css("max-height", b.height()), t.call(this), "y" === f.axis || f.advanced.autoExpandHorizontalScroll || g.css("width", s(g)), e.overflowed = y.call(this), C.call(this), f.autoDraggerLength && v.call(this), w.call(this), A.call(this);
							var j = [Math.abs(g[0].offsetTop), Math.abs(g[0].offsetLeft)];
							"x" !== f.axis && (e.overflowed[0] ? i[0].height() > i[0].parent().height() ? z.call(this) : (X(b, j[0].toString(), {
								dir: "y",
								dur: 0,
								overwrite: "none"
							}), e.contentReset.y = null) : (z.call(this), "y" === f.axis ? B.call(this) : "yx" === f.axis && e.overflowed[1] && X(b, j[1].toString(), {
								dir: "x",
								dur: 0,
								overwrite: "none"
							}))), "y" !== f.axis && (e.overflowed[1] ? i[1].width() > i[1].parent().width() ? z.call(this) : (X(b, j[1].toString(), {
								dir: "x",
								dur: 0,
								overwrite: "none"
							}), e.contentReset.x = null) : (z.call(this), "x" === f.axis ? B.call(this) : "yx" === f.axis && e.overflowed[0] && X(b, j[0].toString(), {
								dir: "y",
								dur: 0,
								overwrite: "none"
							}))), c && e && (2 === c && f.callbacks.onImageLoad && "function" == typeof f.callbacks.onImageLoad ? f.callbacks.onImageLoad.call(this) : 3 === c && f.callbacks.onSelectorChange && "function" == typeof f.callbacks.onSelectorChange ? f.callbacks.onSelectorChange.call(this) : f.callbacks.onUpdate && "function" == typeof f.callbacks.onUpdate && f.callbacks.onUpdate.call(this)), U.call(this)
						}
					})
				},
				scrollTo: function (b, c) {
					if ("undefined" != typeof b && null != b) {
						var e = m.call(this);
						return a(e).each(function () {
							var e = a(this);
							if (e.data(d)) {
								var f = e.data(d),
									g = f.opt,
									h = {
										trigger: "external",
										scrollInertia: g.scrollInertia,
										scrollEasing: "mcsEaseInOut",
										moveDragger: !1,
										timeout: 60,
										callbacks: !0,
										onStart: !0,
										onUpdate: !0,
										onComplete: !0
									},
									i = a.extend(!0, {}, h, c),
									j = S.call(this, b),
									k = i.scrollInertia > 0 && i.scrollInertia < 17 ? 17 : i.scrollInertia;
								j[0] = T.call(this, j[0], "y"), j[1] = T.call(this, j[1], "x"), i.moveDragger && (j[0] *= f.scrollRatio.y, j[1] *= f.scrollRatio.x), i.dur = ea() ? 0 : k, setTimeout(function () {
									null !== j[0] && "undefined" != typeof j[0] && "x" !== g.axis && f.overflowed[0] && (i.dir = "y", i.overwrite = "all", X(e, j[0].toString(), i)), null !== j[1] && "undefined" != typeof j[1] && "y" !== g.axis && f.overflowed[1] && (i.dir = "x", i.overwrite = "none", X(e, j[1].toString(), i))
								}, i.timeout)
							}
						})
					}
				},
				stop: function () {
					var b = m.call(this);
					return a(b).each(function () {
						var b = a(this);
						b.data(d) && W(b)
					})
				},
				disable: function (b) {
					var c = m.call(this);
					return a(c).each(function () {
						var c = a(this);
						c.data(d) && (c.data(d), U.call(this, "remove"), B.call(this), b && z.call(this), C.call(this, !0), c.addClass(k[3]))
					})
				},
				destroy: function () {
					var b = m.call(this);
					return a(b).each(function () {
						var e = a(this);
						if (e.data(d)) {
							var f = e.data(d),
								g = f.opt,
								h = a("#mCSB_" + f.idx),
								i = a("#mCSB_" + f.idx + "_container"),
								j = a(".mCSB_" + f.idx + "_scrollbar");
							g.live && o(g.liveSelector || a(b).selector), U.call(this, "remove"), B.call(this), z.call(this), e.removeData(d), _(this, "mcs"), j.remove(), i.find("img." + k[2]).removeClass(k[2]),
							h.replaceWith(i.contents()), e.removeClass(c + " _" + d + "_" + f.idx + " " + k[6] + " " + k[7] + " " + k[5] + " " + k[3]).addClass(k[4])
						}
					})
				}
			},
			m = function () {
				return "object" != typeof a(this) || a(this).length < 1 ? e : this
			},
			n = function (b) {
				var c = ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"],
					d = ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"],
					e = ["minimal", "minimal-dark"],
					f = ["minimal", "minimal-dark"],
					g = ["minimal", "minimal-dark"];
				b.autoDraggerLength = !(a.inArray(b.theme, c) > -1) && b.autoDraggerLength, b.autoExpandScrollbar = !(a.inArray(b.theme, d) > -1) && b.autoExpandScrollbar, b.scrollButtons.enable = !(a.inArray(b.theme, e) > -1) && b.scrollButtons.enable, b.autoHideScrollbar = a.inArray(b.theme, f) > -1 || b.autoHideScrollbar, b.scrollbarPosition = a.inArray(b.theme, g) > -1 ? "outside" : b.scrollbarPosition
			},
			o = function (a) {
				h[a] && (clearTimeout(h[a]), _(h, a))
			},
			p = function (a) {
				return "yx" === a || "xy" === a || "auto" === a ? "yx" : "x" === a || "horizontal" === a ? "x" : "y"
			},
			q = function (a) {
				return "stepped" === a || "pixels" === a || "step" === a || "click" === a ? "stepped" : "stepless"
			},
			r = function () {
				var b = a(this),
					e = b.data(d),
					f = e.opt,
					g = f.autoExpandScrollbar ? " " + k[1] + "_expand" : "",
					h = ["<div id='mCSB_" + e.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + e.idx + "_scrollbar mCS-" + f.theme + " mCSB_scrollTools_vertical" + g + "'><div class='" + k[12] + "'><div id='mCSB_" + e.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + e.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + e.idx + "_scrollbar mCS-" + f.theme + " mCSB_scrollTools_horizontal" + g + "'><div class='" + k[12] + "'><div id='mCSB_" + e.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],
					i = "yx" === f.axis ? "mCSB_vertical_horizontal" : "x" === f.axis ? "mCSB_horizontal" : "mCSB_vertical",
					j = "yx" === f.axis ? h[0] + h[1] : "x" === f.axis ? h[1] : h[0],
					l = "yx" === f.axis ? "<div id='mCSB_" + e.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "",
					m = f.autoHideScrollbar ? " " + k[6] : "",
					n = "x" !== f.axis && "rtl" === e.langDir ? " " + k[7] : "";
				f.setWidth && b.css("width", f.setWidth), f.setHeight && b.css("height", f.setHeight), f.setLeft = "y" !== f.axis && "rtl" === e.langDir ? "989999px" : f.setLeft, b.addClass(c + " _" + d + "_" + e.idx + m + n).wrapInner("<div id='mCSB_" + e.idx + "' class='mCustomScrollBox mCS-" + f.theme + " " + i + "'><div id='mCSB_" + e.idx + "_container' class='mCSB_container' style='position:relative; top:" + f.setTop + "; left:" + f.setLeft + ";' dir='" + e.langDir + "' /></div>");
				var o = a("#mCSB_" + e.idx),
					p = a("#mCSB_" + e.idx + "_container");
				"y" === f.axis || f.advanced.autoExpandHorizontalScroll || p.css("width", s(p)), "outside" === f.scrollbarPosition ? ("static" === b.css("position") && b.css("position", "relative"), b.css("overflow", "visible"), o.addClass("mCSB_outside").after(j)) : (o.addClass("mCSB_inside").append(j), p.wrap(l)), u.call(this);
				var q = [a("#mCSB_" + e.idx + "_dragger_vertical"), a("#mCSB_" + e.idx + "_dragger_horizontal")];
				q[0].css("min-height", q[0].height()), q[1].css("min-width", q[1].width())
			},
			s = function (b) {
				var c = [b[0].scrollWidth, Math.max.apply(Math, b.children().map(function () {
						return a(this).outerWidth(!0)
					}).get())],
					d = b.parent().width();
				return c[0] > d ? c[0] : c[1] > d ? c[1] : "100%"
			},
			t = function () {
				var b = a(this),
					c = b.data(d),
					e = c.opt,
					f = a("#mCSB_" + c.idx + "_container");
				if (e.advanced.autoExpandHorizontalScroll && "y" !== e.axis) {
					f.css({
						width: "auto",
						"min-width": 0,
						"overflow-x": "scroll"
					});
					var g = Math.ceil(f[0].scrollWidth);
					3 === e.advanced.autoExpandHorizontalScroll || 2 !== e.advanced.autoExpandHorizontalScroll && g > f.parent().width() ? f.css({
						width: g,
						"min-width": "100%",
						"overflow-x": "inherit"
					}) : f.css({
						"overflow-x": "inherit",
						position: "absolute"
					}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
						width: Math.ceil(f[0].getBoundingClientRect().right + .4) - Math.floor(f[0].getBoundingClientRect().left),
						"min-width": "100%",
						position: "relative"
					}).unwrap()
				}
			},
			u = function () {
				var b = a(this),
					c = b.data(d),
					e = c.opt,
					f = a(".mCSB_" + c.idx + "_scrollbar:first"),
					g = ca(e.scrollButtons.tabindex) ? "tabindex='" + e.scrollButtons.tabindex + "'" : "",
					h = ["<a href='#' class='" + k[13] + "' " + g + " />", "<a href='#' class='" + k[14] + "' " + g + " />", "<a href='#' class='" + k[15] + "' " + g + " />", "<a href='#' class='" + k[16] + "' " + g + " />"],
					i = ["x" === e.axis ? h[2] : h[0], "x" === e.axis ? h[3] : h[1], h[2], h[3]];
				e.scrollButtons.enable && f.prepend(i[0]).append(i[1]).next(".mCSB_scrollTools").prepend(i[2]).append(i[3])
			},
			v = function () {
				var b = a(this),
					c = b.data(d),
					e = a("#mCSB_" + c.idx),
					f = a("#mCSB_" + c.idx + "_container"),
					g = [a("#mCSB_" + c.idx + "_dragger_vertical"), a("#mCSB_" + c.idx + "_dragger_horizontal")],
					h = [e.height() / f.outerHeight(!1), e.width() / f.outerWidth(!1)],
					j = [parseInt(g[0].css("min-height")), Math.round(h[0] * g[0].parent().height()), parseInt(g[1].css("min-width")), Math.round(h[1] * g[1].parent().width())],
					k = i && j[1] < j[0] ? j[0] : j[1],
					l = i && j[3] < j[2] ? j[2] : j[3];
				g[0].css({
					height: k,
					"max-height": g[0].parent().height() - 10
				}).find(".mCSB_dragger_bar").css({
					"line-height": j[0] + "px"
				}), g[1].css({
					width: l,
					"max-width": g[1].parent().width() - 10
				})
			},
			w = function () {
				var b = a(this),
					c = b.data(d),
					e = a("#mCSB_" + c.idx),
					f = a("#mCSB_" + c.idx + "_container"),
					g = [a("#mCSB_" + c.idx + "_dragger_vertical"), a("#mCSB_" + c.idx + "_dragger_horizontal")],
					h = [f.outerHeight(!1) - e.height(), f.outerWidth(!1) - e.width()],
					i = [h[0] / (g[0].parent().height() - g[0].height()), h[1] / (g[1].parent().width() - g[1].width())];
				c.scrollRatio = {
					y: i[0],
					x: i[1]
				}
			},
			x = function (a, b, c) {
				var d = c ? k[0] + "_expanded" : "",
					e = a.closest(".mCSB_scrollTools");
				"active" === b ? (a.toggleClass(k[0] + " " + d), e.toggleClass(k[1]), a[0]._draggable = a[0]._draggable ? 0 : 1) : a[0]._draggable || ("hide" === b ? (a.removeClass(k[0]), e.removeClass(k[1])) : (a.addClass(k[0]), e.addClass(k[1])))
			},
			y = function () {
				var b = a(this),
					c = b.data(d),
					e = a("#mCSB_" + c.idx),
					f = a("#mCSB_" + c.idx + "_container"),
					g = null == c.overflowed ? f.height() : f.outerHeight(!1),
					h = null == c.overflowed ? f.width() : f.outerWidth(!1),
					i = f[0].scrollHeight,
					j = f[0].scrollWidth;
				return i > g && (g = i), j > h && (h = j), [g > e.height(), h > e.width()]
			},
			z = function () {
				var b = a(this),
					c = b.data(d),
					e = c.opt,
					f = a("#mCSB_" + c.idx),
					g = a("#mCSB_" + c.idx + "_container"),
					h = [a("#mCSB_" + c.idx + "_dragger_vertical"), a("#mCSB_" + c.idx + "_dragger_horizontal")];
				if (W(b), ("x" !== e.axis && !c.overflowed[0] || "y" === e.axis && c.overflowed[0]) && (h[0].add(g).css("top", 0), X(b, "_resetY")), "y" !== e.axis && !c.overflowed[1] || "x" === e.axis && c.overflowed[1]) {
					var i = dx = 0;
					"rtl" === c.langDir && (i = f.width() - g.outerWidth(!1), dx = Math.abs(i / c.scrollRatio.x)), g.css("left", i), h[1].css("left", dx), X(b, "_resetX")
				}
			},
			A = function () {
				function b() {
					g = setTimeout(function () {
						a.event.special.mousewheel ? (clearTimeout(g), H.call(c[0])) : b()
					}, 100)
				}
				var c = a(this),
					e = c.data(d),
					f = e.opt;
				if (!e.bindEvents) {
					if (E.call(this), f.contentTouchScroll && F.call(this), G.call(this), f.mouseWheel.enable) {
						var g;
						b()
					}
					M.call(this), O.call(this), f.advanced.autoScrollOnFocus && N.call(this), f.scrollButtons.enable && P.call(this), f.keyboard.enable && Q.call(this), e.bindEvents = !0
				}
			},
			B = function () {
				var b = a(this),
					c = b.data(d),
					e = c.opt,
					f = d + "_" + c.idx,
					g = ".mCSB_" + c.idx + "_scrollbar",
					h = a("#mCSB_" + c.idx + ",#mCSB_" + c.idx + "_container,#mCSB_" + c.idx + "_container_wrapper," + g + " ." + k[12] + ",#mCSB_" + c.idx + "_dragger_vertical,#mCSB_" + c.idx + "_dragger_horizontal," + g + ">a"),
					i = a("#mCSB_" + c.idx + "_container");
				e.advanced.releaseDraggableSelectors && h.add(a(e.advanced.releaseDraggableSelectors)), e.advanced.extraDraggableSelectors && h.add(a(e.advanced.extraDraggableSelectors)), c.bindEvents && (a(document).add(a(!J() || top.document)).unbind("." + f), h.each(function () {
					a(this).unbind("." + f)
				}), clearTimeout(b[0]._focusTimeout), _(b[0], "_focusTimeout"), clearTimeout(c.sequential.step), _(c.sequential, "step"), clearTimeout(i[0].onCompleteTimeout), _(i[0], "onCompleteTimeout"), c.bindEvents = !1)
			},
			C = function (b) {
				var c = a(this),
					e = c.data(d),
					f = e.opt,
					g = a("#mCSB_" + e.idx + "_container_wrapper"),
					h = g.length ? g : a("#mCSB_" + e.idx + "_container"),
					i = [a("#mCSB_" + e.idx + "_scrollbar_vertical"), a("#mCSB_" + e.idx + "_scrollbar_horizontal")],
					j = [i[0].find(".mCSB_dragger"), i[1].find(".mCSB_dragger")];
				"x" !== f.axis && (e.overflowed[0] && !b ? (i[0].add(j[0]).add(i[0].children("a")).css("display", "block"), h.removeClass(k[8] + " " + k[10])) : (f.alwaysShowScrollbar ? (2 !== f.alwaysShowScrollbar && j[0].css("display", "none"), h.removeClass(k[10])) : (i[0].css("display", "none"), h.addClass(k[10])), h.addClass(k[8]))), "y" !== f.axis && (e.overflowed[1] && !b ? (i[1].add(j[1]).add(i[1].children("a")).css("display", "block"), h.removeClass(k[9] + " " + k[11])) : (f.alwaysShowScrollbar ? (2 !== f.alwaysShowScrollbar && j[1].css("display", "none"), h.removeClass(k[11])) : (i[1].css("display", "none"), h.addClass(k[11])), h.addClass(k[9]))), e.overflowed[0] || e.overflowed[1] ? c.removeClass(k[5]) : c.addClass(k[5])
			},
			D = function (b) {
				var c = b.type,
					d = b.target.ownerDocument !== document && null !== frameElement ? [a(frameElement).offset().top, a(frameElement).offset().left] : null,
					e = J() && b.target.ownerDocument !== top.document && null !== frameElement ? [a(b.view.frameElement).offset().top, a(b.view.frameElement).offset().left] : [0, 0];
				switch (c) {
				case "pointerdown":
				case "MSPointerDown":
				case "pointermove":
				case "MSPointerMove":
				case "pointerup":
				case "MSPointerUp":
					return d ? [b.originalEvent.pageY - d[0] + e[0], b.originalEvent.pageX - d[1] + e[1], !1] : [b.originalEvent.pageY, b.originalEvent.pageX, !1];
				case "touchstart":
				case "touchmove":
				case "touchend":
					var f = b.originalEvent.touches[0] || b.originalEvent.changedTouches[0],
						g = b.originalEvent.touches.length || b.originalEvent.changedTouches.length;
					return b.target.ownerDocument !== document ? [f.screenY, f.screenX, g > 1] : [f.pageY, f.pageX, g > 1];
				default:
					return d ? [b.pageY - d[0] + e[0], b.pageX - d[1] + e[1], !1] : [b.pageY, b.pageX, !1]
				}
			},
			E = function () {
				function b(a, b, d, e) {
					if (n[0].idleTimer = k.scrollInertia < 233 ? 250 : 0, c.attr("id") === m[1]) var f = "x",
						i = (c[0].offsetLeft - b + e) * h.scrollRatio.x;
					else var f = "y",
						i = (c[0].offsetTop - a + d) * h.scrollRatio.y;
					X(g, i.toString(), {
						dir: f,
						drag: !0
					})
				}
				var c, e, f, g = a(this),
					h = g.data(d),
					k = h.opt,
					l = d + "_" + h.idx,
					m = ["mCSB_" + h.idx + "_dragger_vertical", "mCSB_" + h.idx + "_dragger_horizontal"],
					n = a("#mCSB_" + h.idx + "_container"),
					o = a("#" + m[0] + ",#" + m[1]),
					p = k.advanced.releaseDraggableSelectors ? o.add(a(k.advanced.releaseDraggableSelectors)) : o,
					q = k.advanced.extraDraggableSelectors ? a(!J() || top.document).add(a(k.advanced.extraDraggableSelectors)) : a(!J() || top.document);
				o.bind("contextmenu." + l, function (a) {
					a.preventDefault()
				}).bind("mousedown." + l + " touchstart." + l + " pointerdown." + l + " MSPointerDown." + l, function (b) {
					if (b.stopImmediatePropagation(), b.preventDefault(), aa(b)) {
						j = !0, i && (document.onselectstart = function () {
							return !1
						}), K.call(n, !1), W(g), c = a(this);
						var d = c.offset(),
							h = D(b)[0] - d.top,
							l = D(b)[1] - d.left,
							m = c.height() + d.top,
							o = c.width() + d.left;
						m > h && h > 0 && o > l && l > 0 && (e = h, f = l), x(c, "active", k.autoExpandScrollbar)
					}
				}).bind("touchmove." + l, function (a) {
					a.stopImmediatePropagation(),
					a.preventDefault();
					var d = c.offset(),
						g = D(a)[0] - d.top,
						h = D(a)[1] - d.left;
					b(e, f, g, h)
				}), a(document).add(q).bind("mousemove." + l + " pointermove." + l + " MSPointerMove." + l, function (a) {
					if (c) {
						var d = c.offset(),
							g = D(a)[0] - d.top,
							h = D(a)[1] - d.left;
						if (e === g && f === h) return;
						b(e, f, g, h)
					}
				}).add(p).bind("mouseup." + l + " touchend." + l + " pointerup." + l + " MSPointerUp." + l, function () {
					c && (x(c, "active", k.autoExpandScrollbar), c = null), j = !1, i && (document.onselectstart = null), K.call(n, !0)
				})
			},
			F = function () {
				function c(a) {
					if (!ba(a) || j || D(a)[2]) return void(b = 0);
					b = 1, w = 0, x = 0, k = 1, y.removeClass("mCS_touch_action");
					var c = E.offset();
					l = D(a)[0] - c.top, m = D(a)[1] - c.left, L = [D(a)[0], D(a)[1]]
				}

				function e(a) {
					if (ba(a) && !j && !D(a)[2] && (A.documentTouchScroll || a.preventDefault(), a.stopImmediatePropagation(), (!x || w) && k)) {
						q = Z();
						var b = C.offset(),
							c = D(a)[0] - b.top,
							d = D(a)[1] - b.left,
							e = "mcsLinearOut";
						if (G.push(c), H.push(d), L[2] = Math.abs(D(a)[0] - L[0]), L[3] = Math.abs(D(a)[1] - L[1]), z.overflowed[0]) var f = F[0].parent().height() - F[0].height(),
							g = l - c > 0 && c - l > -(f * z.scrollRatio.y) && (2 * L[3] < L[2] || "yx" === A.axis);
						if (z.overflowed[1]) var h = F[1].parent().width() - F[1].width(),
							n = m - d > 0 && d - m > -(h * z.scrollRatio.x) && (2 * L[2] < L[3] || "yx" === A.axis);
						g || n ? (O || a.preventDefault(), w = 1) : (x = 1, y.addClass("mCS_touch_action")), O && a.preventDefault(), u = "yx" === A.axis ? [l - c, m - d] : "x" === A.axis ? [null, m - d] : [l - c, null], E[0].idleTimer = 250, z.overflowed[0] && i(u[0], I, e, "y", "all", !0), z.overflowed[1] && i(u[1], I, e, "x", K, !0)
					}
				}

				function f(a) {
					if (!ba(a) || j || D(a)[2]) return void(b = 0);
					b = 1, a.stopImmediatePropagation(), W(y), p = Z();
					var c = C.offset();
					n = D(a)[0] - c.top, o = D(a)[1] - c.left, G = [], H = []
				}

				function g(a) {
					if (ba(a) && !j && !D(a)[2]) {
						k = 0, a.stopImmediatePropagation(), w = 0, x = 0, r = Z();
						var b = C.offset(),
							c = D(a)[0] - b.top,
							d = D(a)[1] - b.left;
						if (!(r - q > 30)) {
							t = 1E3 / (r - p);
							var e = "mcsEaseOut",
								f = 2.5 > t,
								g = f ? [G[G.length - 2], H[H.length - 2]] : [0, 0];
							s = f ? [c - g[0], d - g[1]] : [c - n, d - o];
							var l = [Math.abs(s[0]), Math.abs(s[1])];
							t = f ? [Math.abs(s[0] / 4), Math.abs(s[1] / 4)] : [t, t];
							var m = [Math.abs(E[0].offsetTop) - s[0] * h(l[0] / t[0], t[0]), Math.abs(E[0].offsetLeft) - s[1] * h(l[1] / t[1], t[1])];
							u = "yx" === A.axis ? [m[0], m[1]] : "x" === A.axis ? [null, m[1]] : [m[0], null], v = [4 * l[0] + A.scrollInertia, 4 * l[1] + A.scrollInertia];
							var y = parseInt(A.contentTouchScroll) || 0;
							u[0] = l[0] > y ? u[0] : 0, u[1] = l[1] > y ? u[1] : 0, z.overflowed[0] && i(u[0], v[0], e, "y", K, !1), z.overflowed[1] && i(u[1], v[1], e, "x", K, !1)
						}
					}
				}

				function h(a, b) {
					var c = [1.5 * b, 2 * b, b / 1.5, b / 2];
					return a > 90 ? b > 4 ? c[0] : c[3] : a > 60 ? b > 3 ? c[3] : c[2] : a > 30 ? b > 8 ? c[1] : b > 6 ? c[0] : b > 4 ? b : c[2] : b > 8 ? b : c[3]
				}

				function i(a, b, c, d, e, f) {
					a && X(y, a.toString(), {
						dur: b,
						scrollEasing: c,
						dir: d,
						overwrite: e,
						drag: f
					})
				}
				var k, l, m, n, o,
					p, q, r, s, t, u, v, w, x, y = a(this),
					z = y.data(d),
					A = z.opt,
					B = d + "_" + z.idx,
					C = a("#mCSB_" + z.idx),
					E = a("#mCSB_" + z.idx + "_container"),
					F = [a("#mCSB_" + z.idx + "_dragger_vertical"), a("#mCSB_" + z.idx + "_dragger_horizontal")],
					G = [],
					H = [],
					I = 0,
					K = "yx" === A.axis ? "none" : "all",
					L = [],
					M = E.find("iframe"),
					N = ["touchstart." + B + " pointerdown." + B + " MSPointerDown." + B, "touchmove." + B + " pointermove." + B + " MSPointerMove." + B, "touchend." + B + " pointerup." + B + " MSPointerUp." + B],
					O = void 0 !== document.body.style.touchAction && "" !== document.body.style.touchAction;
				E.bind(N[0], function (a) {
					c(a)
				}).bind(N[1], function (a) {
					e(a)
				}), C.bind(N[0], function (a) {
					f(a)
				}).bind(N[2], function (a) {
					g(a)
				}), M.length && M.each(function () {
					a(this).bind("load", function () {
						J(this) && a(this.contentDocument || this.contentWindow.document).bind(N[0], function (a) {
							c(a), f(a)
						}).bind(N[1], function (a) {
							e(a)
						}).bind(N[2], function (a) {
							g(a)
						})
					})
				})
			},
			G = function () {
				function c() {
					return window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type ? document.selection.createRange().text : 0
				}

				function e(a, b, c) {
					k.type = c && f ? "stepped" : "stepless", k.scrollAmount = 10, R(g, a, b, "mcsLinearOut", c ? 60 : null)
				}
				var f, g = a(this),
					h = g.data(d),
					i = h.opt,
					k = h.sequential,
					l = d + "_" + h.idx,
					m = a("#mCSB_" + h.idx + "_container"),
					n = m.parent();
				m.bind("mousedown." + l, function () {
					b || f || (f = 1, j = !0)
				}).add(document).bind("mousemove." + l, function (a) {
					if (!b && f && c()) {
						var d = m.offset(),
							g = D(a)[0] - d.top + m[0].offsetTop,
							j = D(a)[1] - d.left + m[0].offsetLeft;
						g > 0 && g < n.height() && j > 0 && j < n.width() ? k.step && e("off", null, "stepped") : ("x" !== i.axis && h.overflowed[0] && (0 > g ? e("on", 38) : g > n.height() && e("on", 40)), "y" !== i.axis && h.overflowed[1] && (0 > j ? e("on", 37) : j > n.width() && e("on", 39)))
					}
				}).bind("mouseup." + l + " dragend." + l, function () {
					b || (f && (f = 0, e("off", null)), j = !1)
				})
			},
			H = function () {
				function b(b, d) {
					if (W(c), !L(c, b.target)) {
						var g = "auto" !== f.mouseWheel.deltaFactor ? parseInt(f.mouseWheel.deltaFactor) : i && b.deltaFactor < 100 ? 100 : b.deltaFactor || 100,
							k = f.scrollInertia;
						if ("x" === f.axis || "x" === f.mouseWheel.axis) var l = "x",
							m = [Math.round(g * e.scrollRatio.x), parseInt(f.mouseWheel.scrollAmount)],
							n = "auto" !== f.mouseWheel.scrollAmount ? m[1] : m[0] >= h.width() ? .9 * h.width() : m[0],
							o = Math.abs(a("#mCSB_" + e.idx + "_container")[0].offsetLeft),
							p = j[1][0].offsetLeft,
							q = j[1].parent().width() - j[1].width(),
							r = "y" === f.mouseWheel.axis ? b.deltaY || d : b.deltaX;
						else var l = "y",
							m = [Math.round(g * e.scrollRatio.y), parseInt(f.mouseWheel.scrollAmount)],
							n = "auto" !== f.mouseWheel.scrollAmount ? m[1] : m[0] >= h.height() ? .9 * h.height() : m[0],
							o = Math.abs(a("#mCSB_" + e.idx + "_container")[0].offsetTop),
							p = j[0][0].offsetTop,
							q = j[0].parent().height() - j[0].height(),
							r = b.deltaY || d;
						"y" === l && !e.overflowed[0] || "x" === l && !e.overflowed[1] || ((f.mouseWheel.invert || b.webkitDirectionInvertedFromDevice) && (r = -r), f.mouseWheel.normalizeDelta && (r = 0 > r ? -1 : 1), (r > 0 && 0 !== p || 0 > r && p !== q || f.mouseWheel.preventDefault) && (b.stopImmediatePropagation(), b.preventDefault()), b.deltaFactor < 5 && !f.mouseWheel.normalizeDelta && (n = b.deltaFactor, k = 17), X(c, (o - r * n).toString(), {
							dir: l,
							dur: k
						}))
					}
				}
				if (a(this).data(d)) {
					var c = a(this),
						e = c.data(d),
						f = e.opt,
						g = d + "_" + e.idx,
						h = a("#mCSB_" + e.idx),
						j = [a("#mCSB_" + e.idx + "_dragger_vertical"), a("#mCSB_" + e.idx + "_dragger_horizontal")],
						k = a("#mCSB_" + e.idx + "_container").find("iframe");
					k.length && k.each(function () {
						a(this).bind("load", function () {
							J(this) && a(this.contentDocument || this.contentWindow.document).bind("mousewheel." + g, function (a, c) {
								b(a, c)
							})
						})
					}), h.bind("mousewheel." + g, function (a, c) {
						b(a, c)
					})
				}
			},
			I = new Object,
			J = function (b) {
				var c = !1,
					d = !1,
					e = null;
				if (void 0 === b ? d = "#empty" : void 0 !== a(b).attr("id") && (d = a(b).attr("id")), d !== !1 && void 0 !== I[d]) return I[d];
				if (b) {
					try {
						var f = b.contentDocument || b.contentWindow.document;
						e = f.body.innerHTML
					} catch (a$0) {}
					c = null !== e
				} else {
					try {
						var f = top.document;
						e = f.body.innerHTML
					} catch (a$1) {}
					c = null !== e
				}
				return d !== !1 && (I[d] = c), c
			},
			K = function (a) {
				var b = this.find("iframe");
				if (b.length) {
					var c = a ? "auto" : "none";
					b.css("pointer-events", c)
				}
			},
			L = function (b, c) {
				var e = c.nodeName.toLowerCase(),
					f = b.data(d).opt.mouseWheel.disableOver,
					g = ["select", "textarea"];
				return a.inArray(e, f) > -1 && !(a.inArray(e, g) > -1 && !a(c).is(":focus"))
			},
			M = function () {
				var b, c = a(this),
					e = c.data(d),
					f = d + "_" + e.idx,
					g = a("#mCSB_" + e.idx + "_container"),
					h = g.parent(),
					i = a(".mCSB_" + e.idx + "_scrollbar ." + k[12]);
				i.bind("mousedown." + f + " touchstart." + f + " pointerdown." + f + " MSPointerDown." + f, function (c) {
					j = !0, a(c.target).hasClass("mCSB_dragger") || (b = 1)
				}).bind("touchend." + f + " pointerup." + f + " MSPointerUp." + f, function () {
					j = !1
				}).bind("click." + f, function (d) {
					if (b && (b = 0, a(d.target).hasClass(k[12]) || a(d.target).hasClass("mCSB_draggerRail"))) {
						W(c);
						var f = a(this),
							i = f.find(".mCSB_dragger");
						if (f.parent(".mCSB_scrollTools_horizontal").length > 0) {
							if (!e.overflowed[1]) return;
							var j = "x",
								l = d.pageX > i.offset().left ? -1 : 1,
								m = Math.abs(g[0].offsetLeft) - l * (.9 * h.width())
						} else {
							if (!e.overflowed[0]) return;
							var j = "y",
								l = d.pageY > i.offset().top ? -1 : 1,
								m = Math.abs(g[0].offsetTop) - l * (.9 * h.height())
						}
						X(c, m.toString(), {
							dir: j,
							scrollEasing: "mcsEaseInOut"
						})
					}
				})
			},
			N = function () {
				var b = a(this),
					c = b.data(d),
					e = c.opt,
					f = d + "_" + c.idx,
					g = a("#mCSB_" + c.idx + "_container"),
					h = g.parent();
				g.bind("focusin." + f, function () {
					var c = a(document.activeElement),
						d = g.find(".mCustomScrollBox").length,
						f = 0;
					c.is(e.advanced.autoScrollOnFocus) && (W(b), clearTimeout(b[0]._focusTimeout), b[0]._focusTimer = d ? (f + 17) * d : 0, b[0]._focusTimeout = setTimeout(function () {
						var a = [da(c)[0], da(c)[1]],
							d = [g[0].offsetTop, g[0].offsetLeft],
							i = [d[0] + a[0] >= 0 && d[0] + a[0] < h.height() - c.outerHeight(!1), d[1] + a[1] >= 0 && d[0] + a[1] < h.width() - c.outerWidth(!1)],
							j = "yx" !== e.axis || i[0] || i[1] ? "all" : "none";
						"x" === e.axis || i[0] || X(b, a[0].toString(), {
							dir: "y",
							scrollEasing: "mcsEaseInOut",
							overwrite: j,
							dur: f
						}), "y" === e.axis || i[1] || X(b, a[1].toString(), {
							dir: "x",
							scrollEasing: "mcsEaseInOut",
							overwrite: j,
							dur: f
						})
					}, b[0]._focusTimer))
				})
			},
			O = function () {
				var b = a(this),
					c = b.data(d),
					e = d + "_" + c.idx,
					f = a("#mCSB_" + c.idx + "_container").parent();
				f.bind("scroll." + e, function () {
					0 === f.scrollTop() && 0 === f.scrollLeft() || a(".mCSB_" + c.idx + "_scrollbar").css("visibility", "hidden")
				})
			},
			P = function () {
				var b = a(this),
					c = b.data(d),
					e = c.opt,
					f = c.sequential,
					g = d + "_" + c.idx,
					h = ".mCSB_" + c.idx + "_scrollbar",
					i = a(h + ">a");
				i.bind("contextmenu." + g, function (a) {
					a.preventDefault()
				}).bind("mousedown." + g + " touchstart." + g + " pointerdown." + g + " MSPointerDown." + g + " mouseup." + g + " touchend." + g + " pointerup." + g + " MSPointerUp." + g + " mouseout." + g + " pointerout." + g + " MSPointerOut." + g + " click." + g, function (d) {
					function g(a, c) {
						f.scrollAmount = e.scrollButtons.scrollAmount, R(b, a, c)
					}
					if (d.preventDefault(), aa(d)) {
						var h = a(this).attr("class");
						switch (f.type = e.scrollButtons.scrollType, d.type) {
						case "mousedown":
						case "touchstart":
						case "pointerdown":
						case "MSPointerDown":
							if ("stepped" === f.type) return;
							j = !0, c.tweenRunning = !1, g("on", h);
							break;
						case "mouseup":
						case "touchend":
						case "pointerup":
						case "MSPointerUp":
						case "mouseout":
						case "pointerout":
						case "MSPointerOut":
							if ("stepped" === f.type) return;
							j = !1, f.dir && g("off", h);
							break;
						case "click":
							if ("stepped" !== f.type || c.tweenRunning) return;
							g("on", h)
						}
					}
				})
			},
			Q = function () {
				function b(b) {
					function d(a, b) {
						g.type = f.keyboard.scrollType, g.scrollAmount = f.keyboard.scrollAmount, "stepped" === g.type && e.tweenRunning || R(c, a, b)
					}
					switch (b.type) {
					case "blur":
						e.tweenRunning && g.dir && d("off", null);
						break;
					case "keydown":
					case "keyup":
						var h = b.keyCode ? b.keyCode : b.which,
							i = "on";
						if ("x" !== f.axis && (38 === h || 40 === h) || "y" !== f.axis && (37 === h || 39 === h)) {
							if ((38 === h || 40 === h) && !e.overflowed[0] || (37 === h || 39 === h) && !e.overflowed[1]) return;
							"keyup" === b.type && (i = "off"), a(document.activeElement).is(l) || (b.preventDefault(), b.stopImmediatePropagation(), d(i, h))
						} else if (33 === h || 34 === h) {
							if ((e.overflowed[0] || e.overflowed[1]) && (b.preventDefault(), b.stopImmediatePropagation()), "keyup" === b.type) {
								W(c);
								var m = 34 === h ? -1 : 1;
								if ("x" === f.axis || "yx" === f.axis && e.overflowed[1] && !e.overflowed[0]) var n = "x",
									o = Math.abs(j[0].offsetLeft) - m * (.9 * k.width());
								else var n = "y",
									o = Math.abs(j[0].offsetTop) - m * (.9 * k.height());
								X(c, o.toString(), {
									dir: n,
									scrollEasing: "mcsEaseInOut"
								})
							}
						} else if ((35 === h || 36 === h) && !a(document.activeElement).is(l) && ((e.overflowed[0] || e.overflowed[1]) && (b.preventDefault(), b.stopImmediatePropagation()), "keyup" === b.type)) {
							if ("x" === f.axis || "yx" === f.axis && e.overflowed[1] && !e.overflowed[0]) var n = "x",
								o = 35 === h ? Math.abs(k.width() - j.outerWidth(!1)) : 0;
							else var n = "y",
								o = 35 === h ? Math.abs(k.height() - j.outerHeight(!1)) : 0;
							X(c, o.toString(), {
								dir: n,
								scrollEasing: "mcsEaseInOut"
							})
						}
					}
				}
				var c = a(this),
					e = c.data(d),
					f = e.opt,
					g = e.sequential,
					h = d + "_" + e.idx,
					i = a("#mCSB_" + e.idx),
					j = a("#mCSB_" + e.idx + "_container"),
					k = j.parent(),
					l = "input,textarea,select,datalist,keygen,[contenteditable='true']",
					m = j.find("iframe"),
					n = ["blur." + h + " keydown." + h + " keyup." + h];
				m.length && m.each(function () {
					a(this).bind("load", function () {
						J(this) && a(this.contentDocument || this.contentWindow.document).bind(n[0], function (a) {
							b(a)
						})
					})
				}), i.attr("tabindex", "0").bind(n[0], function (a) {
					b(a)
				})
			},
			R = function (b, c, e, f, g) {
				function h(a) {
					l.snapAmount && (m.scrollAmount = l.snapAmount instanceof Array ? "x" === m.dir[0] ? l.snapAmount[1] : l.snapAmount[0] : l.snapAmount);
					var c = "stepped" !== m.type,
						d = g ? g : a ? c ? p / 1.5 : q : 1E3 / 60,
						e = a ? c ? 7.5 : 40 : 2.5,
						i = [Math.abs(n[0].offsetTop), Math.abs(n[0].offsetLeft)],
						k = [j.scrollRatio.y > 10 ? 10 : j.scrollRatio.y, j.scrollRatio.x > 10 ? 10 : j.scrollRatio.x],
						o = "x" === m.dir[0] ? i[1] + m.dir[1] * (k[1] * e) : i[0] + m.dir[1] * (k[0] * e),
						r = "x" === m.dir[0] ? i[1] + m.dir[1] * parseInt(m.scrollAmount) : i[0] + m.dir[1] * parseInt(m.scrollAmount),
						s = "auto" !== m.scrollAmount ? r : o,
						t = f ? f : a ? c ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear",
						u = !!a;
					return a && 17 > d && (s = "x" === m.dir[0] ? i[1] : i[0]), X(b, s.toString(), {
						dir: m.dir[0],
						scrollEasing: t,
						dur: d,
						onComplete: u
					}), a ? void(m.dir = !1) : (clearTimeout(m.step), void(m.step = setTimeout(function () {
						h()
					}, d)))
				}

				function i() {
					clearTimeout(m.step), _(m, "step"), W(b)
				}
				var j = b.data(d),
					l = j.opt,
					m = j.sequential,
					n = a("#mCSB_" + j.idx + "_container"),
					o = "stepped" === m.type,
					p = l.scrollInertia < 26 ? 26 : l.scrollInertia,
					q = l.scrollInertia < 1 ? 17 : l.scrollInertia;
				switch (c) {
				case "on":
					if (m.dir = [e === k[16] || e === k[15] || 39 === e || 37 === e ? "x" : "y", e === k[13] || e === k[15] || 38 === e || 37 === e ? -1 : 1], W(b), ca(e) && "stepped" === m.type) return;
					h(o);
					break;
				case "off":
					i(), (o || j.tweenRunning && m.dir) && h(!0)
				}
			},
			S = function (b) {
				var c = a(this).data(d).opt,
					e = [];
				return "function" == typeof b && (b = b()), b instanceof Array ? e = b.length > 1 ? [b[0], b[1]] : "x" === c.axis ? [null, b[0]] : [b[0], null] : (e[0] = b.y ? b.y : b.x || "x" === c.axis ? null : b, e[1] = b.x ? b.x : b.y || "y" === c.axis ? null : b), "function" == typeof e[0] && (e[0] = e[0]()), "function" == typeof e[1] && (e[1] = e[1]()), e
			},
			T = function (b, c) {
				if (null != b && "undefined" != typeof b) {
					var e = a(this),
						f = e.data(d),
						g = f.opt,
						h = a("#mCSB_" + f.idx + "_container"),
						i = h.parent(),
						j = typeof b;
					c || (c = "x" === g.axis ? "x" : "y");
					var k = "x" === c ? h.outerWidth(!1) - i.width() : h.outerHeight(!1) - i.height(),
						m = "x" === c ? h[0].offsetLeft : h[0].offsetTop,
						n = "x" === c ? "left" : "top";
					switch (j) {
					case "function":
						return b();
					case "object":
						var o = b.jquery ? b : a(b);
						if (!o.length) return;
						return "x" === c ? da(o)[1] : da(o)[0];
					case "string":
					case "number":
						if (ca(b)) return Math.abs(b);
						if (-1 !== b.indexOf("%")) return Math.abs(k * parseInt(b) / 100);
						if (-1 !== b.indexOf("-=")) return Math.abs(m - parseInt(b.split("-=")[1]));
						if (-1 !== b.indexOf("+=")) {
							var p = m + parseInt(b.split("+=")[1]);
							return p >= 0 ? 0 : Math.abs(p)
						}
						if (-1 !== b.indexOf("px") && ca(b.split("px")[0])) return Math.abs(b.split("px")[0]);
						if ("top" === b || "left" === b) return 0;
						if ("bottom" === b) return Math.abs(i.height() - h.outerHeight(!1));
						if ("right" === b) return Math.abs(i.width() - h.outerWidth(!1));
						if ("first" === b || "last" === b) {
							var o = h.find(":" + b);
							return "x" === c ? da(o)[1] : da(o)[0]
						}
						return a(b).length ? "x" === c ? da(a(b))[1] : da(a(b))[0] : (h.css(n, b), void l.update.call(null, e[0]))
					}
				}
			},
			U = function (b) {
				function c() {
					return clearTimeout(m[0].autoUpdate), 0 === h.parents("html").length ? void(h = null) : void(m[0].autoUpdate = setTimeout(function () {
						return j.advanced.updateOnSelectorChange && (i.poll.change.n = f(), i.poll.change.n !== i.poll.change.o) ? (i.poll.change.o = i.poll.change.n, void g(3)) : j.advanced.updateOnContentResize && (i.poll.size.n = h[0].scrollHeight + h[0].scrollWidth + m[0].offsetHeight + h[0].offsetHeight + h[0].offsetWidth, i.poll.size.n !== i.poll.size.o) ? (i.poll.size.o = i.poll.size.n, void g(1)) : !j.advanced.updateOnImageLoad || "auto" === j.advanced.updateOnImageLoad && "y" === j.axis || (i.poll.img.n = m.find("img").length, i.poll.img.n === i.poll.img.o) ? void((j.advanced.updateOnSelectorChange || j.advanced.updateOnContentResize || j.advanced.updateOnImageLoad) && c()) : (i.poll.img.o = i.poll.img.n, void m.find("img").each(function () {
							e(this)
						}))
					}, j.advanced.autoUpdateTimeout))
				}

				function e(b) {
					function c(a, b) {
						return function () {
							return b.apply(a, arguments)
						}
					}

					function d() {
						this.onload = null, a(b).addClass(k[2]), g(2)
					}
					if (a(b).hasClass(k[2])) return void g();
					var e = new Image;
					e.onload = c(e, d), e.src = b.src
				}

				function f() {
					j.advanced.updateOnSelectorChange === !0 && (j.advanced.updateOnSelectorChange = "*");
					var a = 0,
						b = m.find(j.advanced.updateOnSelectorChange);
					return j.advanced.updateOnSelectorChange && b.length > 0 && b.each(function () {
						a += this.offsetHeight + this.offsetWidth
					}), a
				}

				function g(a) {
					clearTimeout(m[0].autoUpdate), l.update.call(null, h[0], a)
				}
				var h = a(this),
					i = h.data(d),
					j = i.opt,
					m = a("#mCSB_" + i.idx + "_container");
				return b ? (clearTimeout(m[0].autoUpdate), void _(m[0], "autoUpdate")) : void c()
			},
			V = function (a, b, c) {
				return Math.round(a / b) * b - c
			},
			W = function (b) {
				var c = b.data(d),
					e = a("#mCSB_" + c.idx + "_container,#mCSB_" + c.idx + "_container_wrapper,#mCSB_" + c.idx + "_dragger_vertical,#mCSB_" + c.idx + "_dragger_horizontal");
				e.each(function () {
					$.call(this)
				})
			},
			X = function (b, c, e) {
				function f(a) {
					return i && j.callbacks[a] && "function" == typeof j.callbacks[a]
				}

				function g() {
					return [j.callbacks.alwaysTriggerOffsets || u >= v[0] + y, j.callbacks.alwaysTriggerOffsets || -z >= u]
				}

				function h() {
					var a = [n[0].offsetTop, n[0].offsetLeft],
						c = [s[0].offsetTop, s[0].offsetLeft],
						d = [n.outerHeight(!1), n.outerWidth(!1)],
						f = [m.height(), m.width()];
					b[0].mcs = {
						content: n,
						top: a[0],
						left: a[1],
						draggerTop: c[0],
						draggerLeft: c[1],
						topPct: Math.round(100 * Math.abs(a[0]) / (Math.abs(d[0]) - f[0])),
						leftPct: Math.round(100 * Math.abs(a[1]) / (Math.abs(d[1]) - f[1])),
						direction: e.dir
					}
				}
				var i = b.data(d),
					j = i.opt,
					k = {
						trigger: "internal",
						dir: "y",
						scrollEasing: "mcsEaseOut",
						drag: !1,
						dur: j.scrollInertia,
						overwrite: "all",
						callbacks: !0,
						onStart: !0,
						onUpdate: !0,
						onComplete: !0
					},
					e = a.extend(k, e),
					l = [e.dur, e.drag ? 0 : e.dur],
					m = a("#mCSB_" + i.idx),
					n = a("#mCSB_" + i.idx + "_container"),
					o = n.parent(),
					p = j.callbacks.onTotalScrollOffset ? S.call(b, j.callbacks.onTotalScrollOffset) : [0, 0],
					q = j.callbacks.onTotalScrollBackOffset ? S.call(b, j.callbacks.onTotalScrollBackOffset) : [0, 0];
				if (i.trigger = e.trigger, 0 === o.scrollTop() && 0 === o.scrollLeft() || (a(".mCSB_" + i.idx + "_scrollbar").css("visibility", "visible"), o.scrollTop(0).scrollLeft(0)), "_resetY" !== c || i.contentReset.y || (f("onOverflowYNone") && j.callbacks.onOverflowYNone.call(b[0]), i.contentReset.y = 1), "_resetX" !== c || i.contentReset.x || (f("onOverflowXNone") && j.callbacks.onOverflowXNone.call(b[0]), i.contentReset.x = 1), "_resetY" !== c && "_resetX" !== c) {
					if (!i.contentReset.y && b[0].mcs || !i.overflowed[0] || (f("onOverflowY") && j.callbacks.onOverflowY.call(b[0]), i.contentReset.x = null), !i.contentReset.x && b[0].mcs || !i.overflowed[1] || (f("onOverflowX") && j.callbacks.onOverflowX.call(b[0]), i.contentReset.x = null), j.snapAmount) {
						var r = j.snapAmount instanceof
						Array ? "x" === e.dir ? j.snapAmount[1] : j.snapAmount[0] : j.snapAmount;
						c = V(c, r, j.snapOffset)
					}
					switch (e.dir) {
					case "x":
						var s = a("#mCSB_" + i.idx + "_dragger_horizontal"),
							t = "left",
							u = n[0].offsetLeft,
							v = [m.width() - n.outerWidth(!1), s.parent().width() - s.width()],
							w = [c, 0 === c ? 0 : c / i.scrollRatio.x],
							y = p[1],
							z = q[1],
							A = y > 0 ? y / i.scrollRatio.x : 0,
							B = z > 0 ? z / i.scrollRatio.x : 0;
						break;
					case "y":
						var s = a("#mCSB_" + i.idx + "_dragger_vertical"),
							t = "top",
							u = n[0].offsetTop,
							v = [m.height() - n.outerHeight(!1), s.parent().height() - s.height()],
							w = [c, 0 === c ? 0 : c / i.scrollRatio.y],
							y = p[0],
							z = q[0],
							A = y > 0 ? y / i.scrollRatio.y : 0,
							B = z > 0 ? z / i.scrollRatio.y : 0
					}
					w[1] < 0 || 0 === w[0] && 0 === w[1] ? w = [0, 0] : w[1] >= v[1] ? w = [v[0], v[1]] : w[0] = -w[0], b[0].mcs || (h(), f("onInit") && j.callbacks.onInit.call(b[0])), clearTimeout(n[0].onCompleteTimeout), Y(s[0], t, Math.round(w[1]), l[1], e.scrollEasing), !i.tweenRunning && (0 === u && w[0] >= 0 || u === v[0] && w[0] <= v[0]) || Y(n[0], t, Math.round(w[0]), l[0], e.scrollEasing, e.overwrite, {
						onStart: function () {
							e.callbacks && e.onStart && !i.tweenRunning && (f("onScrollStart") && (h(), j.callbacks.onScrollStart.call(b[0])), i.tweenRunning = !0, x(s), i.cbOffsets = g())
						},
						onUpdate: function () {
							e.callbacks && e.onUpdate && f("whileScrolling") && (h(), j.callbacks.whileScrolling.call(b[0]))
						},
						onComplete: function () {
							if (e.callbacks && e.onComplete) {
								"yx" === j.axis && clearTimeout(n[0].onCompleteTimeout);
								var a = n[0].idleTimer || 0;
								n[0].onCompleteTimeout = setTimeout(function () {
									f("onScroll") && (h(), j.callbacks.onScroll.call(b[0])), f("onTotalScroll") && w[1] >= v[1] - A && i.cbOffsets[0] && (h(), j.callbacks.onTotalScroll.call(b[0])), f("onTotalScrollBack") && w[1] <= B && i.cbOffsets[1] && (h(), j.callbacks.onTotalScrollBack.call(b[0])), i.tweenRunning = !1, n[0].idleTimer = 0, x(s, "hide")
								}, a)
							}
						}
					})
				}
			},
			Y = function (a, b, c, d, e, f, g) {
				function h() {
					v.stop || (s || o.call(), s = Z() - r, i(), s >= v.time && (v.time = s > v.time ? s + m - (s - v.time) : s + m - 1, v.time < s + 1 && (v.time = s + 1)), v.time < d ? v.id = n(h) : q.call())
				}

				function i() {
					d > 0 ? (v.currVal = l(v.time, t, w, d, e), u[b] = Math.round(v.currVal) + "px") : u[b] = c + "px", p.call()
				}

				function j() {
					m = 1E3 / 60, v.time = s + m, n = window.requestAnimationFrame ? window.requestAnimationFrame : function (a) {
						return i(),
							setTimeout(a, .01)
					}, v.id = n(h)
				}

				function k() {
					null != v.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(v.id) : clearTimeout(v.id), v.id = null)
				}

				function l(a, b, c, d, e) {
					switch (e) {
					case "linear":
					case "mcsLinear":
						return c * a / d + b;
					case "mcsLinearOut":
						return a /= d, a--, c * Math.sqrt(1 - a * a) + b;
					case "easeInOutSmooth":
						return a /= d / 2, 1 > a ? c / 2 * a * a + b : (a--, -c / 2 * (a * (a - 2) - 1) + b);
					case "easeInOutStrong":
						return a /= d / 2, 1 > a ? c / 2 * Math.pow(2, 10 * (a - 1)) + b : (a--, c / 2 * (-Math.pow(2, -10 * a) + 2) + b);
					case "easeInOut":
					case "mcsEaseInOut":
						return a /= d / 2, 1 > a ? c / 2 * a * a * a + b : (a -= 2, c / 2 * (a * a * a + 2) + b);
					case "easeOutSmooth":
						return a /= d, a--, -c * (a * a * a * a - 1) + b;
					case "easeOutStrong":
						return c * (-Math.pow(2, -10 * a / d) + 1) + b;
					case "easeOut":
					case "mcsEaseOut":
					default:
						var f = (a /= d) * a,
							g = f * a;
						return b + c * (.499999999999997 * g * f + -2.5 * f * f + 5.5 * g + -6.5 * f + 4 * a)
					}
				}
				a._mTween || (a._mTween = {
					top: {},
					left: {}
				});
				var m, n, g = g || {},
					o = g.onStart || function () {},
					p = g.onUpdate || function () {},
					q = g.onComplete || function () {},
					r = Z(),
					s = 0,
					t = a.offsetTop,
					u = a.style,
					v = a._mTween[b];
				"left" === b && (t = a.offsetLeft);
				var w = c - t;
				v.stop = 0, "none" !== f && k(), j()
			},
			Z = function () {
				return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : (new Date).getTime()
			},
			$ = function () {
				var a = this;
				a._mTween || (a._mTween = {
					top: {},
					left: {}
				});
				for (var b = ["top", "left"], c = 0; c < b.length; c++) {
					var d = b[c];
					a._mTween[d].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(a._mTween[d].id) : clearTimeout(a._mTween[d].id), a._mTween[d].id = null, a._mTween[d].stop = 1)
				}
			},
			_ = function (a, b) {
				try {
					delete a[b]
				} catch (c$2) {
					a[b] = null
				}
			},
			aa = function (a) {
				return !(a.which && 1 !== a.which)
			},
			ba = function (a) {
				var b = a.originalEvent.pointerType;
				return !(b && "touch" !== b && 2 !== b)
			},
			ca = function (a) {
				return !isNaN(parseFloat(a)) && isFinite(a)
			},
			da = function (a) {
				var b = a.parents(".mCSB_container");
				return [a.offset().top - b.offset().top, a.offset().left - b.offset().left]
			},
			ea = function () {
				function a() {
					var a = ["webkit", "moz", "ms", "o"];
					if ("hidden" in document) return "hidden";
					for (var b = 0; b < a.length; b++)
						if (a[b] + "Hidden" in document) return a[b] + "Hidden";
					return null
				}
				var b = a();
				return !!b && document[b]
			};
		a.fn[c] = function (b) {
			return l[b] ? l[b].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof b && b ? void a.error("Method " + b + " does not exist") : l.init.apply(this, arguments)
		}, a[c] = function (b) {
			return l[b] ? l[b].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof b && b ? void a.error("Method " + b + " does not exist") : l.init.apply(this, arguments)
		}, a[c].defaults = f, window[c] = !0, a(window).bind("load", function () {
			a(e)[c](), a.extend(a.expr[":"], {
				mcsInView: a.expr[":"].mcsInView || function (b) {
					var c, d, e = a(b),
						f = e.parents(".mCSB_container");
					if (f.length) return c = f.parent(), d = [f[0].offsetTop, f[0].offsetLeft], d[0] + da(e)[0] >= 0 && d[0] + da(e)[0] < c.height() - e.outerHeight(!1) && d[1] + da(e)[1] >= 0 && d[1] + da(e)[1] < c.width() - e.outerWidth(!1)
				},
				mcsInSight: a.expr[":"].mcsInSight || function (b, c, d) {
					var e, f, g, h, i = a(b),
						j = i.parents(".mCSB_container"),
						k = "exact" === d[3] ? [
							[1, 0],
							[1, 0]
						] : [
							[.9, .1],
							[.6, .4]
						];
					if (j.length) return e = [i.outerHeight(!1),
						i.outerWidth(!1)
					], g = [j[0].offsetTop + da(i)[0], j[0].offsetLeft + da(i)[1]], f = [j.parent()[0].offsetHeight, j.parent()[0].offsetWidth], h = [e[0] < f[0] ? k[0] : k[1], e[1] < f[1] ? k[0] : k[1]], g[0] - f[0] * h[0][0] < 0 && g[0] + e[0] - f[0] * h[0][1] >= 0 && g[1] - f[1] * h[1][0] < 0 && g[1] + e[1] - f[1] * h[1][1] >= 0
				},
				mcsOverflow: a.expr[":"].mcsOverflow || function (b) {
					var c = a(b).data(d);
					if (c) return c.overflowed[0] || c.overflowed[1]
				}
			})
		})
	})
});


! function (a) {
	"function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function (a) {
	function c(a) {
		return h.raw ? a : encodeURIComponent(a)
	}

	function d(a) {
		return h.raw ? a : decodeURIComponent(a)
	}

	function e(a) {
		return c(h.json ? JSON.stringify(a) : String(a))
	}

	function f(a) {
		0 === a.indexOf('"') && (a = a.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
		try {
			return a = decodeURIComponent(a.replace(b, " ")), h.json ? JSON.parse(a) : a
		} catch (a$3) {}
	}

	function g(b, c) {
		var d = h.raw ? b : f(b);
		return a.isFunction(c) ? c(d) : d
	}
	var b = /\+/g,
		h = a.cookie = function (b, f, i) {
			if (arguments.length > 1 && !a.isFunction(f)) {
				if (i = a.extend({}, h.defaults, i), "number" == typeof i.expires) {
					var j = i.expires,
						k = i.expires = new Date;
					k.setMilliseconds(k.getMilliseconds() + 864E5 * j)
				}
				return document.cookie = [c(b), "=", e(f), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join("")
			}
			for (var l = b ? void 0 : {}, m = document.cookie ? document.cookie.split("; ") : [], n = 0, o = m.length; n < o; n++) {
				var p = m[n].split("="),
					q = d(p.shift()),
					r = p.join("=");
				if (b === q) {
					l = g(r, f);
					break
				}
				b || void 0 === (r = g(r)) || (l[q] = r)
			}
			return l
		};
	h.defaults = {}, a.removeCookie = function (b, c) {
		return a.cookie(b, "", a.extend({}, c, {
			expires: -1
		})), !a.cookie(b)
	}
});


var lastScrollTop = 0,
	action = "stopped",
	timeout = 1;
$.fn.scrollEnd = function (a, b) {
	$(this).scroll(function () {
		var c = $(this).scrollTop(),
			d = $(this);
		0 != lastScrollTop && (c < lastScrollTop ? action = "scrollUp" : c > lastScrollTop && (action = "scrollDown")), lastScrollTop = c, d.data("scrollTimeout") && clearTimeout(d.data("scrollTimeout")), d.data("scrollTimeout", setTimeout(a, b))
	})
}, $(window).scrollEnd(function () {
	"stopped" != action && $(document).trigger(action)
}, timeout);


! function (a, b, c, d) {
	function e(b, c) {
		this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
			time: null,
			target: null,
			pointer: null,
			stage: {
				start: null,
				current: null
			},
			direction: null
		}, this._states = {
			current: {},
			tags: {
				initializing: ["busy"],
				animating: ["busy"],
				dragging: ["interacting"]
			}
		}, a.each(["onResize", "onThrottledResize"], a.proxy(function (b, c) {
			this._handlers[c] = a.proxy(this[c], this)
		}, this)), a.each(e.Plugins, a.proxy(function (a, b) {
			this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this)
		}, this)), a.each(e.Workers, a.proxy(function (b, c) {
			this._pipe.push({
				filter: c.filter,
				run: a.proxy(c.run, this)
			})
		}, this)), this.setup(), this.initialize()
	}
	e.Defaults = {
		items: 3,
		loop: !1,
		center: !1,
		rewind: !1,
		mouseDrag: !0,
		touchDrag: !0,
		pullDrag: !0,
		freeDrag: !1,
		margin: 0,
		stagePadding: 0,
		merge: !1,
		mergeFit: !0,
		autoWidth: !1,
		startPosition: 0,
		rtl: !1,
		smartSpeed: 250,
		fluidSpeed: !1,
		dragEndSpeed: !1,
		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: b,
		fallbackEasing: "swing",
		info: !1,
		nestedItemSelector: !1,
		itemElement: "div",
		stageElement: "div",
		refreshClass: "owl-refresh",
		loadedClass: "owl-loaded",
		loadingClass: "owl-loading",
		rtlClass: "owl-rtl",
		responsiveClass: "owl-responsive",
		dragClass: "owl-drag",
		itemClass: "owl-item",
		stageClass: "owl-stage",
		stageOuterClass: "owl-stage-outer",
		grabClass: "owl-grab"
	}, e.Width = {
		Default: "default",
		Inner: "inner",
		Outer: "outer"
	}, e.Type = {
		Event: "event",
		State: "state"
	}, e.Plugins = {}, e.Workers = [{
		filter: ["width", "settings"],
		run: function () {
			this._width = this.$element.width()
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function (a) {
			a.current = this._items && this._items[this.relative(this._current)]
		}
	}, {
		filter: ["items", "settings"],
		run: function () {
			this.$stage.children(".cloned").remove()
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function (a) {
			var b = this.settings.margin || "",
				c = !this.settings.autoWidth,
				d = this.settings.rtl,
				e = {
					width: "auto",
					"margin-left": d ? b : "",
					"margin-right": d ? "" : b
				};
			!c && this.$stage.children().css(e), a.css = e
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function (a) {
			var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
				c = null,
				d = this._items.length,
				e = !this.settings.autoWidth,
				f = [];
			for (a.items = {
				merge: !1,
				width: b
			}; d--;) c = this._mergers[d], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, a.items.merge = c > 1 || a.items.merge, f[d] = e ? b * c : this._items[d].width();
			this._widths = f
		}
	}, {
		filter: ["items", "settings"],
		run: function () {
			var b = [],
				c = this._items,
				d = this.settings,
				e = Math.max(2 * d.items, 4),
				f = 2 * Math.ceil(c.length / 2),
				g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0,
				h = "",
				i = "";
			for (g /= 2; g--;) b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i;
			this._clones = b, a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage)
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function () {
			for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;) d = f[c - 1] || 0, e = this._widths[this.relative(c)] + this.settings.margin, f.push(d + e * a);
			this._coordinates = f
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function () {
			var a = this.settings.stagePadding,
				b = this._coordinates,
				c = {
					width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
					"padding-left": a || "",
					"padding-right": a || ""
				};
			this.$stage.css(c)
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function (a) {
			var b = this._coordinates.length,
				c = !this.settings.autoWidth,
				d = this.$stage.children();
			if (c && a.items.merge)
				for (; b--;) a.css.width = this._widths[this.relative(b)], d.eq(b).css(a.css);
			else c && (a.css.width = a.items.width, d.css(a.css))
		}
	}, {
		filter: ["items"],
		run: function () {
			this._coordinates.length < 1 && this.$stage.removeAttr("style")
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function (a) {
			a.current = a.current ? this.$stage.children().index(a.current) : 0, a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)), this.reset(a.current)
		}
	}, {
		filter: ["position"],
		run: function () {
			this.animate(this.coordinates(this._current))
		}
	}, {
		filter: ["width", "position", "items", "settings"],
		run: function () {
			var a, b, c, d, e = this.settings.rtl ? 1 : -1,
				f = 2 * this.settings.stagePadding,
				g = this.coordinates(this.current()) + f,
				h = g + this.width() * e,
				i = [];
			for (c = 0, d = this._coordinates.length; c < d; c++) a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
			this.$stage.children(".active").removeClass("active"),
			this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
		}
	}], e.prototype.initialize = function () {
		if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
			var b, c, e;
			b = this.$element.find("img"), c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e = this.$element.children(c).width(), b.length && e <= 0 && this.preloadAutoWidthImages(b)
		}
		this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass),
		this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
	}, e.prototype.setup = function () {
		var b = this.viewport(),
			c = this.options.responsive,
			d = -1,
			e = null;
		c ? (a.each(c, function (a) {
			a <= b && a > d && (d = Number(a))
		}), e = a.extend({}, this.options, c[d]), "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()), delete e.responsive, e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options), this.trigger("change", {
			property: {
				name: "settings",
				value: e
			}
		}), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
			property: {
				name: "settings",
				value: this.settings
			}
		})
	}, e.prototype.optionsLogic = function () {
		this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
	}, e.prototype.prepare = function (b) {
		var c = this.trigger("prepare", {
			content: b
		});
		return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)),
			this.trigger("prepared", {
				content: c.data
			}), c.data
	}, e.prototype.update = function () {
		for (var b = 0, c = this._pipe.length, d = a.proxy(function (a) {
			return this[a]
		}, this._invalidated), e = {}; b < c;)(this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
		this._invalidated = {}, !this.is("valid") && this.enter("valid")
	}, e.prototype.width = function (a) {
		switch (a = a || e.Width.Default) {
		case e.Width.Inner:
		case e.Width.Outer:
			return this._width;
		default:
			return this._width - 2 * this.settings.stagePadding + this.settings.margin
		}
	}, e.prototype.refresh = function () {
		this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
	}, e.prototype.onThrottledResize = function () {
		b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
	}, e.prototype.onResize = function () {
		return !!this._items.length && this._width !== this.$element.width() && !!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
	}, e.prototype.registerEventHandlers = function () {
		a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), this.settings.responsive !== !1 && this.on(b, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
			return !1
		})), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)))
	}, e.prototype.onDragStart = function (b) {
		var d = null;
		3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), d = {
			x: d[16 === d.length ? 12 : 4],
			y: d[16 === d.length ? 13 : 5]
		}) : (d = this.$stage.position(), d = {
			x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left,
			y: d.top
		}), this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = a(b.target), this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function (b) {
			var d = this.difference(this._drag.pointer, this.pointer(b));
			a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(), this.enter("dragging"), this.trigger("drag"))
		}, this)))
	}, e.prototype.onDragMove = function (a) {
		var b = null,
			c = null,
			d = null,
			e = this.difference(this._drag.pointer, this.pointer(a)),
			f = this.difference(this._drag.stage.start, e);
		this.is("dragging") && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), d = this.settings.pullDrag ? -1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), this._drag.stage.current = f, this.animate(f.x))
	},
	e.prototype.onDragEnd = function (b) {
		var d = this.difference(this._drag.pointer, this.pointer(b)),
			e = this._drag.stage.current,
			f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
		a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = f, (Math.abs(d.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function () {
			return !1
		})), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
	}, e.prototype.closest = function (b, c) {
		var d = -1,
			e = 30,
			f = this.width(),
			g = this.coordinates();
		return this.settings.freeDrag || a.each(g, a.proxy(function (a, h) {
			return "left" === c && b > h - e && b < h + e ? d = a : "right" === c && b > h - f - e && b < h - f + e ? d = a + 1 : this.op(b, "<", h) && this.op(b, ">", g[a + 1] || h - f) && (d = "left" === c ? a + 1 : a), d === -1
		}, this)), this.settings.loop || (this.op(b, ">", g[this.minimum()]) ? d = b = this.minimum() : this.op(b, "<", g[this.maximum()]) && (d = b = this.maximum())), d
	}, e.prototype.animate = function (b) {
		var c = this.speed() > 0;
		this.is("animating") && this.onTransitionEnd(), c && (this.enter("animating"), this.trigger("translate")), a.support.transform3d && a.support.transition ? this.$stage.css({
			transform: "translate3d(" + b + "px,0px,0px)",
			transition: this.speed() / 1E3 + "s"
		}) : c ? this.$stage.animate({
			left: b + "px"
		}, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({
			left: b + "px"
		})
	}, e.prototype.is = function (a) {
		return this._states.current[a] && this._states.current[a] > 0
	}, e.prototype.current = function (a) {
		if (a === d) return this._current;
		if (0 === this._items.length) return d;
		if (a = this.normalize(a), this._current !== a) {
			var b = this.trigger("change", {
				property: {
					name: "position",
					value: a
				}
			});
			b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", {
				property: {
					name: "position",
					value: this._current
				}
			})
		}
		return this._current
	}, e.prototype.invalidate = function (b) {
		return "string" === a.type(b) && (this._invalidated[b] = !0, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function (a, b) {
			return b
		})
	}, e.prototype.reset = function (a) {
		a = this.normalize(a), a !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]))
	}, e.prototype.normalize = function (a, b) {
		var c = this._items.length,
			e = b ? 0 : this._clones.length;
		return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2), a
	}, e.prototype.relative = function (a) {
		return a -= this._clones.length / 2, this.normalize(a, !0)
	}, e.prototype.maximum = function (a) {
		var b, c, d, e = this.settings,
			f = this._coordinates.length;
		if (e.loop) f = this._clones.length / 2 + this._items.length - 1;
		else if (e.autoWidth || e.merge) {
			for (b = this._items.length, c = this._items[--b].width(), d = this.$element.width(); b-- && (c += this._items[b].width() + this.settings.margin, !(c > d)););
			f = b + 1
		} else f = e.center ? this._items.length - 1 : this._items.length - e.items;
		return a && (f -= this._clones.length / 2), Math.max(f, 0)
	}, e.prototype.minimum = function (a) {
		return a ? 0 : this._clones.length / 2
	}, e.prototype.items = function (a) {
		return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a])
	}, e.prototype.mergers = function (a) {
		return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a])
	}, e.prototype.clones = function (b) {
		var c = this._clones.length / 2,
			e = c + this._items.length,
			f = function (a) {
				return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2
			};
		return b === d ? a.map(this._clones, function (a, b) {
			return f(b)
		}) : a.map(this._clones, function (a, c) {
			return a === b ? f(c) : null
		})
	},
	e.prototype.speed = function (a) {
		return a !== d && (this._speed = a), this._speed
	}, e.prototype.coordinates = function (b) {
		var c, e = 1,
			f = b - 1;
		return b === d ? a.map(this._coordinates, a.proxy(function (a, b) {
			return this.coordinates(b)
		}, this)) : (this.settings.center ? (this.settings.rtl && (e = -1, f = b + 1), c = this._coordinates[b], c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0, c = Math.ceil(c))
	}, e.prototype.duration = function (a, b, c) {
		return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
	},
	e.prototype.to = function (a, b) {
		var c = this.current(),
			d = null,
			e = a - this.relative(c),
			f = (e > 0) - (e < 0),
			g = this._items.length,
			h = this.minimum(),
			i = this.maximum();
		this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += f * -1 * g), a = c + e, d = ((a - h) % g + g) % g + h, d !== a && d - e <= i && d - e > 0 && (c = d - e, a = d, this.reset(c))) : this.settings.rewind ? (i += 1, a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)), this.speed(this.duration(c, a, b)), this.current(a), this.$element.is(":visible") && this.update()
	}, e.prototype.next = function (a) {
		a = a || !1, this.to(this.relative(this.current()) + 1, a)
	}, e.prototype.prev = function (a) {
		a = a || !1, this.to(this.relative(this.current()) - 1, a)
	}, e.prototype.onTransitionEnd = function (a) {
		return (a === d || (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) === this.$stage.get(0))) && (this.leave("animating"), void this.trigger("translated"))
	}, e.prototype.viewport = function () {
		var d;
		return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn("Can not detect viewport width."), d
	}, e.prototype.replace = function (b) {
		this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function () {
			return 1 === this.nodeType
		}).each(a.proxy(function (a, b) {
			b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
		}, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
	}, e.prototype.add = function (b, c) {
		var e = this.relative(this._current);
		c = c === d ? this._items.length : this.normalize(c, !0), b = b instanceof jQuery ? b : a(b), this.trigger("add", {
			content: b,
			position: c
		}), b = this.prepare(b), 0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[e] && this.reset(this._items[e].index()), this.invalidate("items"), this.trigger("added", {
			content: b,
			position: c
		})
	}, e.prototype.remove = function (a) {
		a = this.normalize(a, !0), a !== d && (this.trigger("remove", {
			content: this._items[a],
			position: a
		}), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
			content: null,
			position: a
		}))
	}, e.prototype.preloadAutoWidthImages = function (b) {
		b.each(a.proxy(function (b, c) {
			this.enter("pre-loading"), c = a(c), a(new Image).one("load", a.proxy(function (a) {
				c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
			}, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"))
		}, this))
	}, e.prototype.destroy = function () {
		this.$element.off(".owl.core"), this.$stage.off(".owl.core"),
		a(c).off(".owl.core"), this.settings.responsive !== !1 && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));
		for (var d in this._plugins) this._plugins[d].destroy();
		this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
	}, e.prototype.op = function (a, b, c) {
		var d = this.settings.rtl;
		switch (b) {
		case "<":
			return d ? a > c : a < c;
		case ">":
			return d ? a < c : a > c;
		case ">=":
			return d ? a <= c : a >= c;
		case "<=":
			return d ? a >= c : a <= c
		}
	}, e.prototype.on = function (a, b, c, d) {
		a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
	}, e.prototype.off = function (a, b, c, d) {
		a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
	}, e.prototype.trigger = function (b, c, d, f, g) {
		var h = {
				item: {
					count: this._items.length,
					index: this.current()
				}
			},
			i = a.camelCase(a.grep(["on", b, d], function (a) {
				return a
			}).join("-").toLowerCase()),
			j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({
				relatedTarget: this
			}, h, c));
		return this._supress[b] || (a.each(this._plugins, function (a, b) {
			b.onTrigger && b.onTrigger(j)
		}), this.register({
			type: e.Type.Event,
			name: b
		}), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), j
	}, e.prototype.enter = function (b) {
		a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
			this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++
		}, this))
	}, e.prototype.leave = function (b) {
		a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
			this._states.current[b]--
		}, this))
	}, e.prototype.register = function (b) {
		if (b.type === e.Type.Event) {
			if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) {
				var c = a.event.special[b.name]._default;
				a.event.special[b.name]._default = function (a) {
					return !c || !c.apply || a.namespace && a.namespace.indexOf("owl") !== -1 ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments)
				}, a.event.special[b.name].owl = !0
			}
		} else b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function (c, d) {
			return a.inArray(c, this._states.tags[b.name]) === d
		}, this)))
	}, e.prototype.suppress = function (b) {
		a.each(b, a.proxy(function (a, b) {
			this._supress[b] = !0
		}, this))
	}, e.prototype.release = function (b) {
		a.each(b, a.proxy(function (a, b) {
			delete this._supress[b]
		}, this))
	}, e.prototype.pointer = function (a) {
		var c = {
			x: null,
			y: null
		};
		return a = a.originalEvent || a || b.event, a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, a.pageX ? (c.x = a.pageX, c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c
	}, e.prototype.isNumeric = function (a) {
		return !isNaN(parseFloat(a))
	},
	e.prototype.difference = function (a, b) {
		return {
			x: a.x - b.x,
			y: a.y - b.y
		}
	}, a.fn.owlCarousel = function (b) {
		var c = Array.prototype.slice.call(arguments, 1);
		return this.each(function () {
			var d = a(this),
				f = d.data("owl.carousel");
			f || (f = new e(this, "object" == typeof b && b), d.data("owl.carousel", f), a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (b, c) {
				f.register({
					type: e.Type.Event,
					name: c
				}), f.$element.on(c + ".owl.carousel.core", a.proxy(function (a) {
					a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c]))
				}, f))
			})), "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c)
		})
	}, a.fn.owlCarousel.Constructor = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
	var e = function (b) {
		this._core = b, this._interval = null, this._visible = null, this._handlers = {
			"initialized.owl.carousel": a.proxy(function (a) {
				a.namespace && this._core.settings.autoRefresh && this.watch()
			}, this)
		}, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
	};
	e.Defaults = {
		autoRefresh: !0,
		autoRefreshInterval: 500
	}, e.prototype.watch = function () {
		this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
	}, e.prototype.refresh = function () {
		this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
	}, e.prototype.destroy = function () {
		var a, c;
		b.clearInterval(this._interval);
		for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
		for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
	var e = function (b) {
		this._core = b, this._loaded = [], this._handlers = {
			"initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function (b) {
				if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type))
					for (var c = this._core.settings, e = c.center && Math.ceil(c.items / 2) || c.items, f = c.center && e * -1 || 0, g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f, h = this._core.clones().length, i = a.proxy(function (a, b) {
						this.load(b)
					}, this); f++ < e;) this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++
			}, this)
		}, this._core.options = a.extend({}, e.Defaults, this._core.options),
		this._core.$element.on(this._handlers)
	};
	e.Defaults = {
		lazyLoad: !1
	}, e.prototype.load = function (c) {
		var d = this._core.$stage.children().eq(c),
			e = d && d.find(".owl-lazy");
		!e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function (c, d) {
			var e, f = a(d),
				g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
			this._core.trigger("load", {
				element: f,
				url: g
			}, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function () {
				f.css("opacity", 1), this._core.trigger("loaded", {
					element: f,
					url: g
				}, "lazy")
			}, this)).attr("src", g) : (e = new Image, e.onload = a.proxy(function () {
				f.css({
					"background-image": 'url("' + g + '")',
					opacity: "1"
				}), this._core.trigger("loaded", {
					element: f,
					url: g
				}, "lazy")
			}, this), e.src = g)
		}, this)), this._loaded.push(d.get(0)))
	}, e.prototype.destroy = function () {
		var a, b;
		for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
		for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.Lazy = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
	var e = function (b) {
		this._core = b, this._handlers = {
			"initialized.owl.carousel refreshed.owl.carousel": a.proxy(function (a) {
				a.namespace && this._core.settings.autoHeight && this.update()
			}, this),
			"changed.owl.carousel": a.proxy(function (a) {
				a.namespace && this._core.settings.autoHeight && "position" == a.property.name && this.update()
			}, this),
			"loaded.owl.lazy": a.proxy(function (a) {
				a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
			}, this)
		}, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
	};
	e.Defaults = {
		autoHeight: !1,
		autoHeightClass: "owl-height"
	}, e.prototype.update = function () {
		var b = this._core._current,
			c = b + this._core.settings.items,
			d = this._core.$stage.children().toArray().slice(b, c),
			e = [],
			f = 0;
		a.each(d, function (b, c) {
			e.push(a(c).height())
		}), f = Math.max.apply(null, e), this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass)
	}, e.prototype.destroy = function () {
		var a,
			b;
		for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
		for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
	var e = function (b) {
		this._core = b, this._videos = {}, this._playing = null, this._handlers = {
			"initialized.owl.carousel": a.proxy(function (a) {
				a.namespace && this._core.register({
					type: "state",
					name: "playing",
					tags: ["interacting"]
				})
			}, this),
			"resize.owl.carousel": a.proxy(function (a) {
				a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault()
			}, this),
			"refreshed.owl.carousel": a.proxy(function (a) {
				a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
			}, this),
			"changed.owl.carousel": a.proxy(function (a) {
				a.namespace && "position" === a.property.name && this._playing && this.stop()
			}, this),
			"prepared.owl.carousel": a.proxy(function (b) {
				if (b.namespace) {
					var c = a(b.content).find(".owl-video");
					c.length && (c.css("display", "none"), this.fetch(c, a(b.content)))
				}
			}, this)
		}, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function (a) {
			this.play(a)
		}, this))
	};
	e.Defaults = {
		video: !1,
		videoHeight: !1,
		videoWidth: !1
	}, e.prototype.fetch = function (a, b) {
		var c = function () {
				return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube"
			}(),
			d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
			e = a.attr("data-width") || this._core.settings.videoWidth,
			f = a.attr("data-height") || this._core.settings.videoHeight,
			g = a.attr("href");
		if (!g) throw new Error("Missing video URL.");
		if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";
		else if (d[3].indexOf("vimeo") > -1) c = "vimeo";
		else {
			if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
			c = "vzaar"
		}
		d = d[6], this._videos[g] = {
			type: c,
			id: d,
			width: e,
			height: f
		}, b.attr("data-video", g), this.thumbnail(a, this._videos[g])
	}, e.prototype.thumbnail = function (b, c) {
		var d, e, f, g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
			h = b.find("img"),
			i = "src",
			j = "",
			k = this._core.settings,
			l = function (a) {
				e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d),
				b.after(e)
			};
		return b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length ? (l(h.attr(i)), h.remove(), !1) : void("youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type ? a.ajax({
			type: "GET",
			url: "//vimeo.com/api/v2/video/" + c.id + ".json",
			jsonp: "callback",
			dataType: "jsonp",
			success: function (a) {
				f = a[0].thumbnail_large, l(f)
			}
		}) : "vzaar" === c.type && a.ajax({
			type: "GET",
			url: "//vzaar.com/api/videos/" + c.id + ".json",
			jsonp: "callback",
			dataType: "jsonp",
			success: function (a) {
				f = a.framegrab_url, l(f)
			}
		}))
	}, e.prototype.stop = function () {
		this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
	}, e.prototype.play = function (b) {
		var c, d = a(b.target),
			e = d.closest("." + this._core.settings.itemClass),
			f = this._videos[e.attr("data-video")],
			g = f.width || "100%",
			h = f.height || this._core.$stage.height();
		this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), "youtube" === f.type ? c = '<iframe width="' + g + '" height="' + h + '" src="//www.youtube.com/embed/' + f.id + "?autoplay=1&rel=0&v=" + f.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === f.type ? c = '<iframe src="//player.vimeo.com/video/' + f.id + '?autoplay=1" width="' + g + '" height="' + h + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === f.type && (c = '<iframe frameborder="0"height="' + h + '"width="' + g + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + f.id + '/player?autoplay=true"></iframe>'), a('<div class="owl-video-frame">' + c + "</div>").insertAfter(e.find(".owl-video")), this._playing = e.addClass("owl-video-playing"))
	}, e.prototype.isInFullScreen = function () {
		var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
		return b && a(b).parent().hasClass("owl-video-frame")
	}, e.prototype.destroy = function () {
		var a, b;
		this._core.$element.off("click.owl.video");
		for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
		for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.Video = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
	var e = function (b) {
		this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
			"change.owl.carousel": a.proxy(function (a) {
				a.namespace && "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value)
			}, this),
			"drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function (a) {
				a.namespace && (this.swapping = "translated" == a.type)
			}, this),
			"translate.owl.carousel": a.proxy(function (a) {
				a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
			}, this)
		}, this.core.$element.on(this.handlers)
	};
	e.Defaults = {
		animateOut: !1,
		animateIn: !1
	}, e.prototype.swap = function () {
		if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
			this.core.speed(0);
			var b, c = a.proxy(this.clear, this),
				d = this.core.$stage.children().eq(this.previous),
				e = this.core.$stage.children().eq(this.next),
				f = this.core.settings.animateIn,
				g = this.core.settings.animateOut;
			this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.one(a.support.animation.end, c).css({
				left: b + "px"
			}).addClass("animated owl-animated-out").addClass(g)), f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f))
		}
	}, e.prototype.clear = function (b) {
		a(b.target).css({
			left: ""
		}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
	}, e.prototype.destroy = function () {
		var a, b;
		for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
		for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
	var e = function (b) {
		this._core = b, this._timeout = null, this._paused = !1, this._handlers = {
			"changed.owl.carousel": a.proxy(function (a) {
				a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
			}, this),
			"initialized.owl.carousel": a.proxy(function (a) {
				a.namespace && this._core.settings.autoplay && this.play()
			}, this),
			"play.owl.autoplay": a.proxy(function (a, b, c) {
				a.namespace && this.play(b, c)
			}, this),
			"stop.owl.autoplay": a.proxy(function (a) {
				a.namespace && this.stop()
			}, this),
			"mouseover.owl.autoplay": a.proxy(function () {
				this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
			}, this),
			"mouseleave.owl.autoplay": a.proxy(function () {
				this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
			}, this),
			"touchstart.owl.core": a.proxy(function () {
				this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
			}, this),
			"touchend.owl.core": a.proxy(function () {
				this._core.settings.autoplayHoverPause && this.play()
			}, this)
		}, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options)
	};
	e.Defaults = {
		autoplay: !1,
		autoplayTimeout: 5E3,
		autoplayHoverPause: !1,
		autoplaySpeed: !1
	}, e.prototype.play = function (a, b) {
		this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval())
	}, e.prototype._getNextTimeout = function (d, e) {
		return this._timeout && b.clearTimeout(this._timeout), b.setTimeout(a.proxy(function () {
			this._paused || this._core.is("busy") || this._core.is("interacting") || c.hidden || this._core.next(e || this._core.settings.autoplaySpeed)
		}, this), d || this._core.settings.autoplayTimeout)
	}, e.prototype._setAutoPlayInterval = function () {
		this._timeout = this._getNextTimeout()
	}, e.prototype.stop = function () {
		this._core.is("rotating") && (b.clearTimeout(this._timeout), this._core.leave("rotating"))
	}, e.prototype.pause = function () {
		this._core.is("rotating") && (this._paused = !0)
	}, e.prototype.destroy = function () {
		var a, b;
		this.stop();
		for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
		for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.autoplay = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
	var e = function (b) {
		this._core = b, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
			next: this._core.next,
			prev: this._core.prev,
			to: this._core.to
		}, this._handlers = {
			"prepared.owl.carousel": a.proxy(function (b) {
				b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
			}, this),
			"added.owl.carousel": a.proxy(function (a) {
				a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop())
			}, this),
			"remove.owl.carousel": a.proxy(function (a) {
				a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1)
			}, this),
			"changed.owl.carousel": a.proxy(function (a) {
				a.namespace && "position" == a.property.name && this.draw()
			}, this),
			"initialized.owl.carousel": a.proxy(function (a) {
				a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
			}, this),
			"refreshed.owl.carousel": a.proxy(function (a) {
				a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
			}, this)
		}, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
	};
	e.Defaults = {
		nav: !1,
		navText: ["prev", "next"],
		navSpeed: !1,
		navElement: "div",
		navContainer: !1,
		navContainerClass: "owl-nav",
		navClass: ["owl-prev", "owl-next"],
		slideBy: 1,
		dotClass: "owl-dot",
		dotsClass: "owl-dots",
		dots: !0,
		dotsEach: !1,
		dotsData: !1,
		dotsSpeed: !1,
		dotsContainer: !1
	}, e.prototype.initialize = function () {
		var b,
			c = this._core.settings;
		this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function (a) {
			this.prev(c.navSpeed)
		}, this)), this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function (a) {
			this.next(c.navSpeed)
		}, this)), c.dotsData || (this._templates = [a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]), this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", a.proxy(function (b) {
			var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
			b.preventDefault(), this.to(d, c.dotsSpeed)
		}, this));
		for (b in this._overrides) this._core[b] = a.proxy(this[b], this)
	}, e.prototype.destroy = function () {
		var a, b, c, d;
		for (a in this._handlers) this.$element.off(a, this._handlers[a]);
		for (b in this._controls) this._controls[b].remove();
		for (d in this.overides) this._core[d] = this._overrides[d];
		for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
	}, e.prototype.update = function () {
		var a, b, c, d = this._core.clones().length / 2,
			e = d + this._core.items().length,
			f = this._core.maximum(!0),
			g = this._core.settings,
			h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
		if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy)
			for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
				if (b >= h || 0 === b) {
					if (this._pages.push({
						start: Math.min(f, a - d),
						end: a - d + h - 1
					}), Math.min(f, a - d) === f) break;
					b = 0, ++c
				}
				b += this._core.mergers(this._core.relative(a))
			}
	}, e.prototype.draw = function () {
		var b, c = this._core.settings,
			d = this._core.items().length <= c.items,
			e = this._core.relative(this._core.current()),
			f = c.loop || c.rewind;
		this._controls.$relative.toggleClass("disabled", !c.nav || d), c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !c.dots || d), c.dots && (b = this._pages.length - this._controls.$absolute.children().length, c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append((new Array(b + 1)).join(this._templates[0])) : b < 0 && this._controls.$absolute.children().slice(b).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"))
	}, e.prototype.onTrigger = function (b) {
		var c = this._core.settings;
		b.page = {
			index: a.inArray(this.current(), this._pages),
			count: this._pages.length,
			size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)
		}
	}, e.prototype.current = function () {
		var b = this._core.relative(this._core.current());
		return a.grep(this._pages, a.proxy(function (a, c) {
			return a.start <= b && a.end >= b
		}, this)).pop()
	}, e.prototype.getPosition = function (b) {
		var c, d, e = this._core.settings;
		return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c
	}, e.prototype.next = function (b) {
		a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
	}, e.prototype.prev = function (b) {
		a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
	}, e.prototype.to = function (b, c, d) {
		var e;
		!d && this._pages.length ? (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c)
	}, a.fn.owlCarousel.Constructor.Plugins.Navigation = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
	var e = function (c) {
		this._core = c, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
			"initialized.owl.carousel": a.proxy(function (c) {
				c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
			}, this),
			"prepared.owl.carousel": a.proxy(function (b) {
				if (b.namespace) {
					var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
					if (!c) return;
					this._hashes[c] = b.content
				}
			}, this),
			"changed.owl.carousel": a.proxy(function (c) {
				if (c.namespace && "position" === c.property.name) {
					var d = this._core.items(this._core.relative(this._core.current())),
						e = a.map(this._hashes, function (a, b) {
							return a === d ? b : null
						}).join();
					if (!e || b.location.hash.slice(1) === e) return;
					b.location.hash = e
				}
			}, this)
		}, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function (a) {
			var c = b.location.hash.substring(1),
				e = this._core.$stage.children(),
				f = this._hashes[c] && e.index(this._hashes[c]);
			f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0)
		}, this))
	};
	e.Defaults = {
		URLhashListener: !1
	}, e.prototype.destroy = function () {
		var c, d;
		a(b).off("hashchange.owl.navigation");
		for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
		for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null)
	}, a.fn.owlCarousel.Constructor.Plugins.Hash = e
}(window.Zepto || window.jQuery, window, document),
function (a, b, c, d) {
	function e(b, c) {
		var e = !1,
			f = b.charAt(0).toUpperCase() + b.slice(1);
		return a.each((b + " " + h.join(f + " ") + f).split(" "), function (a, b) {
			if (g[b] !== d) return e = !c || b, !1
		}), e
	}

	function f(a) {
		return e(a, !0)
	}
	var g = a("<support>").get(0).style,
		h = "Webkit Moz O ms".split(" "),
		i = {
			transition: {
				end: {
					WebkitTransition: "webkitTransitionEnd",
					MozTransition: "transitionend",
					OTransition: "oTransitionEnd",
					transition: "transitionend"
				}
			},
			animation: {
				end: {
					WebkitAnimation: "webkitAnimationEnd",
					MozAnimation: "animationend",
					OAnimation: "oAnimationEnd",
					animation: "animationend"
				}
			}
		},
		j = {
			csstransforms: function () {
				return !!e("transform")
			},
			csstransforms3d: function () {
				return !!e("perspective")
			},
			csstransitions: function () {
				return !!e("transition")
			},
			cssanimations: function () {
				return !!e("animation")
			}
		};
	j.csstransitions() && (a.support.transition = new String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = new String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = new String(f("transform")), a.support.transform3d = j.csstransforms3d())
}(window.Zepto || window.jQuery, window, document);


(function (factory) {
	if (typeof define === "function" && define.amd) define(["jquery"], factory);
	else if (typeof module !== "undefined" && module.exports) module.exports = factory(require("jquery"));
	else factory(jQuery)
})(function ($) {
	var _previousResizeWidth = -1,
		_updateTimeout = -1;
	var _parse = function (value) {
		return parseFloat(value) || 0
	};
	var _rows = function (elements) {
		var tolerance = 1,
			$elements = $(elements),
			lastTop = null,
			rows = [];
		$elements.each(function () {
			var $that = $(this),
				top = $that.offset().top - _parse($that.css("margin-top")),
				lastRow = rows.length > 0 ? rows[rows.length - 1] : null;
			if (lastRow === null) rows.push($that);
			else if (Math.floor(Math.abs(lastTop - top)) <= tolerance) rows[rows.length - 1] = lastRow.add($that);
			else rows.push($that);
			lastTop = top
		});
		return rows
	};
	var _parseOptions = function (options) {
		var opts = {
			byRow: true,
			property: "height",
			target: null,
			remove: false
		};
		if (typeof options === "object") return $.extend(opts, options);
		if (typeof options === "boolean") opts.byRow = options;
		else if (options === "remove") opts.remove = true;
		return opts
	};
	var matchHeight = $.fn.matchHeight = function (options) {
		var opts = _parseOptions(options);
		if (opts.remove) {
			var that = this;
			this.css(opts.property, "");
			$.each(matchHeight._groups, function (key, group) {
				group.elements = group.elements.not(that)
			});
			return this
		}
		if (this.length <= 1 && !opts.target) return this;
		matchHeight._groups.push({
			elements: this,
			options: opts
		});
		matchHeight._apply(this, opts);
		return this
	};
	matchHeight.version = "master";
	matchHeight._groups = [];
	matchHeight._throttle = 80;
	matchHeight._maintainScroll = false;
	matchHeight._beforeUpdate = null;
	matchHeight._afterUpdate = null;
	matchHeight._rows = _rows;
	matchHeight._parse = _parse;
	matchHeight._parseOptions = _parseOptions;
	matchHeight._apply = function (elements, options) {
		var opts = _parseOptions(options),
			$elements = $(elements),
			rows = [$elements];
		var scrollTop = $(window).scrollTop(),
			htmlHeight = $("html").outerHeight(true);
		var $hiddenParents = $elements.parents().filter(":hidden");
		$hiddenParents.each(function () {
			var $that = $(this);
			$that.data("style-cache", $that.attr("style"))
		});
		$hiddenParents.css("display", "block");
		if (opts.byRow && !opts.target) {
			$elements.each(function () {
				var $that = $(this),
					display = $that.css("display");
				if (display !== "inline-block" && display !== "flex" && display !== "inline-flex") display = "block";
				$that.data("style-cache", $that.attr("style"));
				$that.css({
					"display": display,
					"padding-top": "0",
					"padding-bottom": "0",
					"margin-top": "0",
					"margin-bottom": "0",
					"border-top-width": "0",
					"border-bottom-width": "0",
					"height": "100px",
					"overflow": "hidden"
				})
			});
			rows = _rows($elements);
			$elements.each(function () {
				var $that = $(this);
				$that.attr("style", $that.data("style-cache") || "")
			})
		}
		$.each(rows, function (key, row) {
			var $row = $(row),
				targetHeight = 0;
			if (!opts.target) {
				if (opts.byRow && $row.length <= 1) {
					$row.css(opts.property, "");
					return
				}
				$row.each(function () {
					var $that = $(this),
						style = $that.attr("style"),
						display = $that.css("display");
					if (display !== "inline-block" && display !== "flex" && display !== "inline-flex") display = "block";
					var css = {
						"display": display
					};
					css[opts.property] = "";
					$that.css(css);
					if ($that.outerHeight(false) > targetHeight) targetHeight = $that.outerHeight(false);
					if (style) $that.attr("style", style);
					else $that.css("display", "")
				})
			} else targetHeight = opts.target.outerHeight(false);
			$row.each(function () {
				var $that = $(this),
					verticalPadding = 0;
				if (opts.target && $that.is(opts.target)) return;
				if ($that.css("box-sizing") !== "border-box") {
					verticalPadding += _parse($that.css("border-top-width")) + _parse($that.css("border-bottom-width"));
					verticalPadding += _parse($that.css("padding-top")) + _parse($that.css("padding-bottom"))
				}
				$that.css(opts.property, targetHeight - verticalPadding + "px")
			})
		});
		$hiddenParents.each(function () {
			var $that = $(this);
			$that.attr("style", $that.data("style-cache") || null)
		});
		if (matchHeight._maintainScroll) $(window).scrollTop(scrollTop / htmlHeight * $("html").outerHeight(true));
		return this
	};
	matchHeight._applyDataApi = function () {
		var groups = {};
		$("[data-match-height], [data-mh]").each(function () {
			var $this = $(this),
				groupId = $this.attr("data-mh") || $this.attr("data-match-height");
			if (groupId in groups) groups[groupId] = groups[groupId].add($this);
			else groups[groupId] = $this
		});
		$.each(groups, function () {
			this.matchHeight(true)
		})
	};
	var _update = function (event) {
		if (matchHeight._beforeUpdate) matchHeight._beforeUpdate(event, matchHeight._groups);
		$.each(matchHeight._groups, function () {
			matchHeight._apply(this.elements, this.options)
		});
		if (matchHeight._afterUpdate) matchHeight._afterUpdate(event, matchHeight._groups)
	};
	matchHeight._update = function (throttle, event) {
		if (event && event.type === "resize") {
			var windowWidth = $(window).width();
			if (windowWidth === _previousResizeWidth) return;
			_previousResizeWidth = windowWidth
		}
		if (!throttle) _update(event);
		else if (_updateTimeout === -1) _updateTimeout = setTimeout(function () {
			_update(event);
			_updateTimeout = -1
		}, matchHeight._throttle)
	};
	$(matchHeight._applyDataApi);
	var on = $.fn.on ? "on" : "bind";
	$(window)[on]("load", function (event) {
		matchHeight._update(false, event)
	});
	$(window)[on]("resize orientationchange", function (event) {
		matchHeight._update(true, event)
	})
});