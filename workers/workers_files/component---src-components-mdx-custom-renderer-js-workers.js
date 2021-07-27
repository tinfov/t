(window.webpackJsonp = window.webpackJsonp || []).push([
	[3], {
		"84QV": function(e, t, r) {
			"use strict";
			r.r(t);
			var n = r("rePB"),
				a = r("q1tI"),
				o = r.n(a),
				c = r("Wbzz"),
				i = r("7ljp"),
				l = r("A2+M"),
				s = r("07sb"),
				u = r("RWNR"),
				p = function(e) {
					return function(t) {
						var r = "#" + t.id;
						return o.a.createElement(e, {
							id: t.id
						}, o.a.createElement("span", {
							className: Object(u.a)("header-anchor-positioner")
						}, o.a.createElement("a", {
							className: Object(u.a)("header-anchor") + " Link Link-without-underline",
							href: r,
							"aria-hidden": "true"
						}, "​")), o.a.createElement("span", null, t.children))
					}
				},
				f = {
					h2: p("h2"),
					h3: p("h3"),
					h4: p("h4"),
					h5: p("h5"),
					h6: p("h6")
				},
				d = r("V1oJ"),
				m = r("zLVn"),
				b = ["type", "href", "children"],
				y = function(e) {
					return o.a.createElement("aside", {
						className: Object(u.a)("aside"),
						role: "note",
						"data-type": e.type
					}, e.header && o.a.createElement("div", {
						className: Object(u.a)("aside-header")
					}, e.header), e.children)
				};
			y.defaultProps = {
				type: "note"
			};
			var h = y,
				O = function(e) {
					var t = e.src,
						r = e.title,
						n = e.height,
						a = e.aspectRatio,
						c = Object(u.a)("demo") + (a ? " AspectRatio" : ""),
						i = a ? "AspectRatio--content" : "",
						l = a ? {
							"--aspect-ratio": "calc(" + a + ")"
						} : {
							height: n + "px"
						};
					return o.a.createElement("div", {
						className: c,
						style: l
					}, o.a.createElement("iframe", {
						className: i,
						src: t,
						title: "Demo of: " + r,
						frameBorder: "0"
					}))
				};
			O.defaultProps = {
				height: 400
			};
			var v = O,
				x = (r("ToJy"), r("6l+n")),
				j = r("A22z"),
				E = r("AXUl"),
				g = function(e) {
					var t = Object(c.useStaticQuery)("811020565").allMdx.edges.map((function(e) {
						return e.node
					})).filter((function(e) {
						return !e.frontmatter.hidden
					})).filter((function(t) {
						return Object(x.a)(t.fields.slug) === e.path
					})).map((function(e) {
						return {
							title: Object(j.a)(e),
							url: e.fields.slug,
							order: Object(E.a)(e)
						}
					})).sort((function(e, t) {
						return e.title < t.title ? -1 : e.title > t.title ? 1 : 0
					})).sort((function(e, t) {
						return e.order - t.order
					}));
					return o.a.createElement("ul", null, t.map((function(e) {
						return o.a.createElement("li", {
							key: e.url
						}, o.a.createElement(s.a, {
							href: e.url
						}, e.title))
					})))
				};

			function w(e, t) {
				var r = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(e);
					t && (n = n.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), r.push.apply(r, n)
				}
				return r
			}

			function P(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = null != arguments[t] ? arguments[t] : {};
					t % 2 ? w(Object(r), !0).forEach((function(t) {
						Object(n.a)(e, t, r[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : w(Object(r)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
					}))
				}
				return e
			}
			var N = P(P({
				a: s.a
			}, f), {}, {
				inlineCode: function(e) {
					return o.a.createElement("code", {
						className: "InlineCode"
					}, e.children)
				},
				pre: d.a,
				Link: c.Link,
				Button: function(e) {
					var t = e.type,
						r = e.href,
						n = e.children,
						a = Object(m.a)(e, b),
						c = "Button";
					return "primary" === t ? c += " Button-is-docs-primary" : "secondary" === t && (c += " Button-is-docs-secondary"), a.className && (c += " " + a.className), r ? o.a.createElement(s.a, Object.assign({
						href: r,
						className: c
					}, a), n) : o.a.createElement("button", Object.assign({
						className: c
					}, a), n)
				},
				ButtonGroup: function(e) {
					return o.a.createElement("p", {
						className: Object(u.a)("button-group")
					}, o.a.createElement("span", {
						className: Object(u.a)("button-group-content")
					}, e.children))
				},
				Aside: h,
				ContentColumn: function(e) {
					return o.a.createElement("div", {
						className: Object(u.a)("content-column")
					}, e.children)
				},
				Example: function(e) {
					return o.a.createElement("div", {
						className: Object(u.a)("example")
					}, e.children)
				},
				Demo: v,
				TableWrap: function(e) {
					return o.a.createElement("div", {
						className: Object(u.a)("table-wrap")
					}, o.a.createElement("div", {
						className: Object(u.a)("table-wrap-inner")
					}, e.children))
				},
				Definitions: function(e) {
					return o.a.createElement("div", {
						className: Object(u.a)("definitions")
					}, e.children)
				},
				Code: function(e) {
					return o.a.createElement("code", {
						className: "InlineCode"
					}, e.children)
				},
				ParamType: function(e) {
					return o.a.createElement("span", {
						className: "InlineCode--type"
					}, e.children)
				},
				Type: function(e) {
					return o.a.createElement("code", {
						className: "InlineCode InlineCode-is-type"
					}, e.children)
				},
				TypeLink: function(e) {
					return o.a.createElement(s.a, {
						href: e.href,
						"data-is-type-link": "true"
					}, o.a.createElement("code", {
						className: "InlineCode InlineCode-is-type"
					}, e.children))
				},
				PropMeta: function(e) {
					return o.a.createElement("span", {
						className: Object(u.a)("prop-meta")
					}, e.children)
				},
				DirectoryListing: g,
				YouTube: function(e) {
					var t = {
						"--aspect-ratio": "calc(" + (e.aspectRatio || 16 / 9) + ")"
					};
					return o.a.createElement("figure", {
						"data-type": "youtube"
					}, o.a.createElement("div", {
						className: "AspectRatio",
						style: t
					}, o.a.createElement("iframe", {
						className: "AspectRatio--content",
						src: "https://www.youtube.com/embed/" + e.id,
						title: e.title || "YouTube video with ID " + e.id,
						frameBorder: "0",
						allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
						allowFullScreen: !0
					})))
				},
				StreamVideo: function(e) {
					var t = {
						"--aspect-ratio": "calc(" + (e.aspectRatio || 16 / 9) + ")"
					};
					return o.a.createElement("figure", {
						"data-type": "stream-video"
					}, o.a.createElement("div", {
						className: "AspectRatio",
						style: t
					}, o.a.createElement("iframe", {
						className: "AspectRatio--content",
						src: "https://iframe.videodelivery.net/" + e.id + (e.params || ""),
						title: e.title || "Stream video with ID " + e.id,
						frameBorder: "0",
						allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
						allowFullScreen: !0
					})))
				}
			});
			t.default = function(e) {
				var t = e.data.mdx;
				return o.a.createElement(i.MDXProvider, {
					components: N
				}, o.a.createElement(l.MDXRenderer, {
					frontmatter: t.frontmatter
				}, t.body))
			}
		},
		"A2+M": function(e, t, r) {
			var n = r("X8hv");
			e.exports = {
				MDXRenderer: n
			}
		},
		Bnag: function(e, t) {
			e.exports = function() {
				throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
			}, e.exports.default = e.exports, e.exports.__esModule = !0
		},
		EbDI: function(e, t) {
			e.exports = function(e) {
				if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
			}, e.exports.default = e.exports, e.exports.__esModule = !0
		},
		Ijbi: function(e, t, r) {
			var n = r("WkPL");
			e.exports = function(e) {
				if (Array.isArray(e)) return n(e)
			}, e.exports.default = e.exports, e.exports.__esModule = !0
		},
		RIqP: function(e, t, r) {
			var n = r("Ijbi"),
				a = r("EbDI"),
				o = r("ZhPi"),
				c = r("Bnag");
			e.exports = function(e) {
				return n(e) || a(e) || o(e) || c()
			}, e.exports.default = e.exports, e.exports.__esModule = !0
		},
		WkPL: function(e, t) {
			e.exports = function(e, t) {
				(null == t || t > e.length) && (t = e.length);
				for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
				return n
			}, e.exports.default = e.exports, e.exports.__esModule = !0
		},
		X8hv: function(e, t, r) {
			var n = r("sXyB"),
				a = r("RIqP"),
				o = r("lSNA"),
				c = r("8OQS"),
				i = ["scope", "components", "children"];

			function l(e, t) {
				var r = Object.keys(e);
				if (Object.getOwnPropertySymbols) {
					var n = Object.getOwnPropertySymbols(e);
					t && (n = n.filter((function(t) {
						return Object.getOwnPropertyDescriptor(e, t).enumerable
					}))), r.push.apply(r, n)
				}
				return r
			}

			function s(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = null != arguments[t] ? arguments[t] : {};
					t % 2 ? l(Object(r), !0).forEach((function(t) {
						o(e, t, r[t])
					})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach((function(t) {
						Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
					}))
				}
				return e
			}
			var u = r("q1tI"),
				p = r("7ljp"),
				f = p.useMDXComponents,
				d = p.mdx,
				m = r("BfwJ").useMDXScope;
			e.exports = function(e) {
				var t = e.scope,
					r = e.components,
					o = e.children,
					l = c(e, i),
					p = f(r),
					b = m(t),
					y = u.useMemo((function() {
						if (!o) return null;
						var e = s({
								React: u,
								mdx: d
							}, b),
							t = Object.keys(e),
							r = t.map((function(t) {
								return e[t]
							}));
						return n(Function, ["_fn"].concat(a(t), ["" + o])).apply(void 0, [{}].concat(a(r)))
					}), [o, t]);
				return u.createElement(y, s({
					components: p
				}, l))
			}
		},
		ZhPi: function(e, t, r) {
			var n = r("WkPL");
			e.exports = function(e, t) {
				if (e) {
					if ("string" == typeof e) return n(e, t);
					var r = Object.prototype.toString.call(e).slice(8, -1);
					return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? n(e, t) : void 0
				}
			}, e.exports.default = e.exports, e.exports.__esModule = !0
		},
		b48C: function(e, t) {
			e.exports = function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
				} catch (e) {
					return !1
				}
			}, e.exports.default = e.exports, e.exports.__esModule = !0
		},
		lSNA: function(e, t) {
			e.exports = function(e, t, r) {
				return t in e ? Object.defineProperty(e, t, {
					value: r,
					enumerable: !0,
					configurable: !0,
					writable: !0
				}) : e[t] = r, e
			}, e.exports.default = e.exports, e.exports.__esModule = !0
		},
		sXyB: function(e, t, r) {
			var n = r("SksO"),
				a = r("b48C");

			function o(t, r, c) {
				return a() ? (e.exports = o = Reflect.construct, e.exports.default = e.exports, e.exports.__esModule = !0) : (e.exports = o = function(e, t, r) {
					var a = [null];
					a.push.apply(a, t);
					var o = new(Function.bind.apply(e, a));
					return r && n(o, r.prototype), o
				}, e.exports.default = e.exports, e.exports.__esModule = !0), o.apply(null, arguments)
			}
			e.exports = o, e.exports.default = e.exports, e.exports.__esModule = !0
		}
	}
]);