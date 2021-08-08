var ua = navigator.userAgent,
	ual = ua.toLowerCase(),
	ob = 1;
if (-1 !== ual.indexOf("safari/") && -1 !== ual.indexOf("windows") && -1 === ual.indexOf("chrom") && (ob = 2), /MSIE \d|Trident.*rv:/.test(ua) && (ob = 3), ob > 1) {
	var lazyLoadInstance = {
		update: function () {
			for (var t = document.querySelectorAll("img.vne_lazy_image"), e = 0; e < t.length; e++) t[e].setAttribute("src", t[e].getAttribute("data-original"))
		}
	};
	window.onload = function () {
		lazyLoadInstance.update()
	}
} else {
	var retinaSize = ["680x408", "750x450", "500x300", "380x228", "300x180", "220x132", "180x108", "140x84", "120x72", "100x100", "180x180", "320x320", "60x60", "160x240", "216x324", "330x495", "1200x0", "680x0", "460x0"];

	function setCookie(t, e, n) {
		var i, a;
		(i = new Date).setTime(i.getTime() + 24 * n * 60 * 60 * 1e3), a = "; expires=" + i.toGMTString(), document.cookie = t + "=" + e + a + "; domain=vnexpress.net"
	}

	function getCookie(t) {
		for (var e = t + "=", n = decodeURIComponent(document.cookie).split(";"), i = 0; i < n.length; i++) {
			for (var a = n[i];
				" " == a.charAt(0);) a = a.substring(1);
			if (0 == a.indexOf(e)) return a.substring(e.length, a.length)
		}
		return ""
	}

	function retinaRender(t, e, n, i) {
		if (void 0 !== t && t && t.indexOf("_r_") < 0 && !0 === e && ("" == n || "" != n && parseInt(n) > 15e5)) {
			var a = t.split("_");
			if ("object" == typeof a && a.length >= 2) {
				var o = a[a.length - 1],
					r = o.split(".");
				if (i.indexOf(r[0]) > -1 && "gif" != r[1].toLowerCase()) {
					var s = "r_" + o;
					if (1 == device_env) {
						var l = "m_" + o;
						t = "undefined" != typeof isHomeVNE && 1 == isHomeVNE && t.indexOf("_m_") < 0 ? t.replace(o, s) : t.replace(l, s)
					} else t = t.replace(o, s)
				}
			}
		}
		return t.replace("_m_r_", "_r_").replace("_r_m_", "_r_")
	}

	function MeasureConnectionSpeed() {
		var t = navigator.userAgent;
		if (void 0 !== t && (t.indexOf("Google Page Speed Insights") > -1 || t.indexOf("Chrome-Lighthouse") > -1)) return !0;
		if ("" == getCookie("network_speed")) {
			var e, n = img_url_vne + "/retina.jpg",
				i = new Image;
			i.onload = function () {
				var t = (4076848 / (((new Date).getTime() - e) / 1e3)).toFixed(2);
				t && setCookie("network_speed", t, 1 / 48)
			}, i.onerror = function (t, e) {
				console.log("Invalid image, or error downloading")
			}, e = (new Date).getTime(), i.src = n + "?nnn=" + e
		}
	}

	function _addEventListener(t, e, n) {
		var i;
		window.addEventListener ? t.addEventListener(e, n) : window.attachEvent && (t.attachEvent("on" + e, (i = t, function () {
			n.call(i, window.event)
		})), t = null)
	}
	_addEventListener(window, "LazyLoad::Initialized", function (t) {
		lazyLoadInstance = t.detail.instance
	}), window.lazyLoadOptions = {
		threshold: 0,
		class_loading: "lazyLoading",
		class_loaded: "lazyLoaded",
		class_error: "lazyError",
		class_initial: "lazyInitial"
	}, window.onload = function () {
		void 0 !== lazyLoadInstance && lazyLoadInstance.update(), MeasureConnectionSpeed(), setTimeout(function () {
			MeasureConnectionSpeed()
		}, 9e5)
	};
	var _extends = Object.assign || function (t) {
			for (var e = 1; e < arguments.length; e++) {
				var n = arguments[e];
				for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
			}
			return t
		},
		_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
			return typeof t
		} : function (t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		};
	! function (t, e) {
		"object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.LazyLoad = e()
	}(this, function () {
		"use strict";
		var t = {
			elements_selector: "img",
			container: window,
			threshold: 300,
			throttle: 150,
			isRetinaDetect: null,
			data_src: "original",
			data_srcset: "originalSet",
			class_loading: "loading",
			class_loaded: "loaded",
			class_error: "error",
			class_initial: "initial",
			skip_invisible: !0,
			callback_load: null,
			callback_error: null,
			callback_set: null,
			callback_processed: null
		};
		if (null === t.isRetinaDetect) try {
			void 0 !== window.devicePixelRatio && window.devicePixelRatio > 1 ? t.isRetinaDetect = !0 : void 0 !== window.matchMedia && window.matchMedia && window.matchMedia("(-webkit-min-device-pixel-ratio: 1.5),                    (min--moz-device-pixel-ratio: 1.5),                    (-o-min-device-pixel-ratio: 3/2),                    (min-resolution: 1.5dppx)").matches ? t.isRetinaDetect = !0 : t.isRetinaDetect = !1
		} catch (e) {
			t.isRetinaDetect = !1
		}
		var e = getCookie("network_speed"),
			n = !("onscroll" in window) || /glebot/.test(navigator.userAgent),
			i = function (t, e) {
				t && t(e)
			},
			a = function (t) {
				return t.getBoundingClientRect().top + window.pageYOffset - t.ownerDocument.documentElement.clientTop
			},
			o = function (t) {
				return t.getBoundingClientRect().left + window.pageXOffset - t.ownerDocument.documentElement.clientLeft
			},
			r = function (t, e, n) {
				return !(function (t, e, n) {
					return (e === window ? window.innerHeight + window.pageYOffset : a(e) + e.offsetHeight) <= a(t) - n
				}(t, e, n) || function (t, e, n) {
					return (e === window ? window.pageYOffset : a(e)) >= a(t) + n + t.offsetHeight
				}(t, e, n) || function (t, e, n) {
					var i = window.innerWidth;
					return (e === window ? i + window.pageXOffset : o(e) + i) <= o(t) - n
				}(t, e, n) || function (t, e, n) {
					return (e === window ? window.pageXOffset : o(e)) >= o(t) + n + t.offsetWidth
				}(t, e, n))
			},
			s = function (t, e) {
				var n = new t(e),
					i = new CustomEvent("LazyLoad::Initialized", {
						detail: {
							instance: n
						}
					});
				window.dispatchEvent(i)
			},
			l = function (n, i, a) {
				var o = n.tagName,
					r = n.dataset[a];
				if ("IMG" !== o) {
					"IFRAME" !== o ? r && (n.style.backgroundImage = 'url("' + r + '")') : r && n.setAttribute("src", r)
				} else {
					! function (t, e) {
						var n = t.parentElement;
						if ("PICTURE" === n.tagName)
							for (var i = 0; i < n.children.length; i++) {
								var a = n.children[i];
								if ("SOURCE" === a.tagName) {
									var o = a.dataset[e];
									o && a.setAttribute("srcset", o)
								}
							}
					}(n, i);
					var s = n.dataset[i];
					if (s && n.setAttribute("srcset", s), r) {
						var l = retinaRender(r, t.isRetinaDetect, e, retinaSize);
						n.setAttribute("src", l), n.setAttribute("data-" + t.data_src, l)
					}
				}
			},
			c = function (e) {
				this._settings = _extends({}, t, e), this._queryOriginNode = this._settings.container === window ? document : this._settings.container, this._previousLoopTime = 0, this._loopTimeout = null, this._boundHandleScroll = this.handleScroll.bind(this), this._isFirstLoop = !0, window.addEventListener("resize", this._boundHandleScroll), this.update()
			};
		c.prototype = {
			_reveal: function (t) {
				var e = this._settings;
				"IMG" !== t.tagName && "IFRAME" !== t.tagName || e && t.classList.add(e.class_loaded), l(t, e.data_srcset, e.data_src), i(e.callback_set, t)
			},
			_loopThroughElements: function () {
				var t = this._settings,
					e = this._elements,
					a = e ? e.length : 0,
					o = void 0,
					s = [],
					l = this._isFirstLoop;
				for (o = 0; o < a; o++) {
					var c = e[o];
					t.skip_invisible && null === c.offsetParent || (n || r(c, t.container, t.threshold)) && (l && c.classList.add(t.class_initial), this._reveal(c), s.push(o), c.dataset.wasProcessed = !0)
				}
				for (; s.length;) e.splice(s.pop(), 1), i(t.callback_processed, e.length);
				0 === a && this._stopScrollHandler(), l && (this._isFirstLoop = !1)
			},
			_purgeElements: function () {
				var t = this._elements,
					e = t.length,
					n = void 0,
					i = [];
				for (n = 0; n < e; n++) {
					t[n].dataset.wasProcessed && i.push(n)
				}
				for (; i.length > 0;) t.splice(i.pop(), 1)
			},
			_startScrollHandler: function () {
				this._isHandlingScroll || (this._isHandlingScroll = !0, this._settings.container.addEventListener("scroll", this._boundHandleScroll))
			},
			_stopScrollHandler: function () {
				this._isHandlingScroll && (this._isHandlingScroll = !1, this._settings.container.removeEventListener("scroll", this._boundHandleScroll))
			},
			handleScroll: function () {
				var t = this._settings.throttle;
				if (0 !== t) {
					var e = Date.now(),
						n = t - (e - this._previousLoopTime);
					n <= 0 || n > t ? (this._loopTimeout && (clearTimeout(this._loopTimeout), this._loopTimeout = null), this._previousLoopTime = e, this._loopThroughElements()) : this._loopTimeout || (this._loopTimeout = setTimeout(function () {
						this._previousLoopTime = Date.now(), this._loopTimeout = null, this._loopThroughElements()
					}.bind(this), n))
				} else this._loopThroughElements()
			},
			update: function () {
				this._elements = Array.prototype.slice.call(this._queryOriginNode.querySelectorAll(this._settings.elements_selector)), this._purgeElements(), this._loopThroughElements(), this._startScrollHandler()
			},
			destroy: function () {
				window.removeEventListener("resize", this._boundHandleScroll), this._loopTimeout && (clearTimeout(this._loopTimeout), this._loopTimeout = null), this._stopScrollHandler(), this._elements = null, this._queryOriginNode = null, this._settings = null
			}
		};
		var d = window.lazyLoadOptions;
		return d && function (t, e) {
			var n = e.length;
			if (n)
				for (var i = 0; i < n; i++) s(t, e[i]);
			else s(t, e)
		}(c, d), c
	})
}
var cycleUpdateLazyload = setInterval(function () {
	void 0 !== lazyLoadInstance && lazyLoadInstance.update()
}, 2e3);
setTimeout(function () {
	clearInterval(cycleUpdateLazyload)
}, 12e5);
var personalizeIns = {
	setCookie: function (t, e, n) {
		var i, a;
		(i = new Date).setTime(i.getTime() + 24 * n * 60 * 60 * 1e3), a = "; expires=" + i.toGMTString(), document.cookie = t + "=" + e + a + "; domain=vnexpress.net"
	},
	getCookie: function (t) {
		for (var e = t + "=", n = decodeURIComponent(document.cookie).split(";"), i = 0; i < n.length; i++) {
			for (var a = n[i];
				" " == a.charAt(0);) a = a.substring(1);
			if (0 == a.indexOf(e)) return a.substring(e.length, a.length)
		}
		return ""
	},
	serialize: function (t) {
		var e = [];
		for (var n in t) t.hasOwnProperty(n) && e.push(encodeURIComponent(n) + "=" + encodeURIComponent(t[n]));
		return e.join("&")
	},
	renderComment: function (t) {
		var e = "";
		return 8192 == (8192 & t.privacy) && (e += '<i class="ic ic-fun"></i>'), e += '            <a class="icon_commend" href="' + t.share_url + '#box_comment" style="white-space: nowrap; display: none;">                <span class="txt_num_comment font_icon" data-type="comment" data-objecttype="' + t.article_type + '" data-objectid="' + t.article_type + '"></span>            </a>        '
	},
	renderViewIcon: function (t) {
		if (128 == t) return !1;
		var e = "";
		return 2 == (2 & t) && (e += '<i class="ic ic-video"></i>&nbsp;'), 4 == (4 & t) && (e += '<i class="ic ic-photo"></i>&nbsp;'), 16 == (16 & t) && (e += '<i class="ic ic-audio"></i>&nbsp;'), 32768 == (32768 & t) && (e += '<i class="ic ic-infographic"></i>&nbsp;'), e
	},
	renderTypeIcon: function (t) {
		var e = t.article_type,
			n = t.share_url;
		(32768 & t.privacy || 65536 & t.privacy) && (e = 7);
		var i = "";
		return 2 == e ? i = '<span class="icon_thumb_videophoto" href="' + n + '"><i class="ic ic-video"></i></span>' : 3 == e ? i = '<span class="icon_thumb_videophoto" href="' + n + '"><i class="ic ic-photo"></i></span>' : 4 == e ? i = '<span class="icon_thumb_videophoto" href="' + n + '"><i class="ic ic-infographic"></i></span>' : 7 == e && (i = '<span class="icon_thumb_videophoto" href="' + n + '"><i class="ic ic-interactive"></i></span>'), i
	},
	renderImageSize: function (t, e) {
		if (void 0 !== t && t) {
			var n = t.toString().split("."),
				i = n.length - 2;
			return n[i] = n[i] + "_" + e, n.join(".")
		}
		return ""
	},
	parseHTML: function (t) {
		var e = document.createElement("template");
		return e.innerHTML = t, e.content.cloneNode(!0)
	},
	addClass: function (t, e) {
		var n = t.className;
		return void 0 !== n && n && n.indexOf(e) <= -1 && (n += " " + this.options.classLoaded, t.className = n.trim()), !0
	},
	validSyntaxUrl: function (t) {
		return !0
	},
	_addEventListener: function (t, e, n) {
		var i;
		window.addEventListener ? t.addEventListener(e, n) : window.attachEvent && (t.attachEvent("on" + e, (i = t, function () {
			n.call(i, window.event)
		})), t = null)
	},
	ready: function (t) {
		"loading" != document.readyState ? t() : document.addEventListener ? document.addEventListener("DOMContentLoaded", t) : document.attachEvent("onreadystatechange", function () {
			"complete" == document.readyState && t()
		})
	},
	checkDomImageReady: function (t) {
		return document.querySelectorAll(t)
	},
	executeImageReady: function () {
		var t = this,
			e = t.checkDomImageReady(".item_slide_show .block_thumb_slide_show img"),
			n = t.checkDomImageReady(".fck_detail");
		e.length > 0 && n.length > 0 && (void 0 !== cycle && clearInterval(cycle), n = n[0].offsetWidth, [].forEach.call(e, function (e) {
			var i = e.parentNode.parentNode.getAttribute("data-size");
			if (i) {
				var a = i.split("x"),
					o = a[0],
					r = a[1];
				t.applySizeToImage(e, n, o, r)
			} else {
				e.style.height = "";
				var s = e.getAttribute("src");
				if (void 0 !== s && s) {
					var l = new Image;
					l.src = s, l.onload = function () {
						var i = l.width,
							a = l.height;
						t.applySizeToImage(e, n, i, a)
					}
				}
			}
		}), isResizedPhoto = !0)
	},
	applySizeToImage: function (t, e, n, i) {
		if (4 == device_env) t.parentNode.parentNode.style.width = n + "px", setTimeout(function () {
			t.className += " displayAfterResize"
		}, 400);
		else {
			var a = 100;
			n < e ? (a = n / e * 100, t.parentNode.parentNode.style.width = a + "%", t.parentNode.parentNode.style.margin = "0 auto", setTimeout(function () {
				t.className += " displayAfterResize"
			}, 400)) : (window.innerHeight > window.innerWidth ? t.parentNode.parentNode.style.margin = "0 -15px 15px -15px" : t.parentNode.parentNode.style.margin = "", t.parentNode.parentNode.style.width = "auto"), t.parentNode.style.height = 0, t.parentNode.style.paddingBottom = i / n * 100 + "%", t.parentNode.style.backgroundColor = "#e6e5e5"
		}
	}
};
if ("undefined" != typeof isHomeVNE && 1 == isHomeVNE) var isLogined = !1,
	isRequestPersonalize = !1,
	checkAsyncPersonalize = setInterval(function () {
		var t = document.querySelector("#top_story"),
			e = document.querySelector("#list_personalized");
		if (null != t && null != e) {
			var n = e.getAttribute("data-contract-article");
			isRequestPersonalize = !0, clearInterval(checkAsyncPersonalize);
			var i = {
				app_id: "d9b81e",
				type: "web_home",
				site_id: "1000000",
				limit: "10",
				select: "title,lead,thumbnail_url,share_url,privacy,article_type,publish_time,original_cate,site_id"
			};
			try {
				t = JSON.parse(t.getAttribute("data-cnh"))
			} catch (e) {
				t = null
			}
			if (null != t) {
				t = t.execule;
				var a = personalizeIns.getCookie("myvne_user_id") || 0;
				if (parseInt(a) > 0) i.user_id = a, isLogined = a;
				else {
					var o = personalizeIns.getCookie("readed_news") || !1;
					if (0 != o) try {
						o = JSON.parse(o), t = t.concat(o)
					} catch (t) {
						console.log(t)
					}
				}
				i.exc = t.join(",");
				var r = new XMLHttpRequest;
				r.onreadystatechange = function () {
					if (r.readyState == XMLHttpRequest.DONE && 200 == r.status) try {
						var t = JSON.parse(r.responseText);
						if (0 == t.error && t.data.length > 0) {
							for (var i = "", a = 0; a < t.data.length; ++a) {
								var o = t.data[a],
									s = 30 & parseInt(o.privacy),
									l = (personalizeIns.renderTypeIcon(o), personalizeIns.renderViewIcon(s)),
									c = personalizeIns.renderComment(o),
									d = personalizeIns.renderImageSize(o.thumbnail_url, "m_500x300"),
									u = "";
								9 == a && 0 == n && (u = " last"), 5 == a && (1 == ZONE_ADS ? i += '<article class="art_item art_section inner_section "> <ins class="adsbyeclick" data-zone="5297" data-ad-width="414" data-ad-height="100" data-ad-ivid="0"></ins><script> (adsbyeclick = window.adsbyeclick || []).push({}) <\/script></article>' : i += '<article class="art_item art_section inner_section "> <ins class="adsbyeclick" data-zone="5315" data-ad-width="414" data-ad-height="100" data-ad-ivid="0"></ins><script> (adsbyeclick = window.adsbyeclick || []).push({}) <\/script></article>'), i += '<article class="art_item art_section inner_section item_full_thumb no-border ' + u + '">\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class="thumb_art thumb_small">\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="' + o.share_url + "?vn_source=top" + (a + 26) + '&amp;vn_medium=auto&amp;vn_campaign=nonpersonalize" class="thumb_img thumb_5x3" title="' + o.title + '">\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" class="vne_lazy_image" data-original="' + d + '" alt="' + o.title + '">\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<?php echo $this->V2ArticleView()->ArticleTypeIcon($news);?>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h4 class="title_news">\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<a href="' + o.share_url + "?vn_source=top" + (a + 26) + '&amp;vn_medium=auto&amp;vn_campaign=nonpersonalize" title="' + o.title + '">\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t' + o.title + "\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</a>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t" + l + c + '\t\t\t\t\t\t\t\t\t\t\t\t\t\t</h4>\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class="short_intro">' + o.lead + '</p>\t\t\t\t\t\t\t\t\t\t\t\t\t\t<p class="meta_art"><span class="vne_time_format" data-value="' + o.publish_time + '"></span><a href="#" class="vne_cateid" data-value="' + o.original_cate + '" title="">Thời sự</a></p>\t\t\t\t\t\t\t\t\t\t\t\t\t</article>'
							}
							var p = e.parentNode;
							i = "", i = personalizeIns.parseHTML(i), p.replaceChild(i, e), lazyLoadInstance.update(), common.vneFormatTime()
						} else document.getElementById("list_personalized").innerHTML = ""
					} catch (t) {
						console.log(t)
					}
				}, r.open("GET", "https://api3.vnexpress.net/api/mobile?" + personalizeIns.serialize(i), !0), r.send(i)
			}
		}
	}, 100);
if (window.location.href.indexOf("/photo/") > -1 && "undefined" != typeof PAGE_DETAIL && 1 == PAGE_DETAIL) {
	var resizeTimer, cycle = setInterval(function () {
		personalizeIns.executeImageReady()
	}, 100);
	personalizeIns._addEventListener(window, "resize", function (t) {
		clearTimeout(resizeTimer), resizeTimer = setTimeout(function () {
			personalizeIns.executeImageReady()
		}, 250)
	}), setTimeout(function () {
		void 0 !== cycle && clearInterval(cycle)
	}, 15e3)
}