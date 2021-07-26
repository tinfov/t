(window.webpackJsonp = window.webpackJsonp || []).push([
	[4], {
		qrHm: function(e, t, a) {
			"use strict";
			var n = a("zLVn"),
				r = a("q1tI"),
				c = a.n(r),
				l = a("Wbzz"),
				i = a("YwZP"),
				s = a("Wcz/"),
				o = a("en1l"),
				m = ["className", "description", "children"],
				p = function(e) {
					var t = e.className,
						a = e.description,
						r = e.children,
						l = Object(n.a)(e, m);
					return c.a.createElement("span", {
						className: t,
						"aria-hidden": "true"
					}, c.a.createElement(o.a, l, r), c.a.createElement("span", {
						"is-visually-hidden": "",
						children: a
					}))
				};
			p.defaultProps = {
				viewBox: "0 0 16 16",
				className: "Icon"
			};
			var u = p,
				d = function(e) {
					var t = e.className,
						a = e.description;
					return c.a.createElement(u, {
						className: t,
						description: a,
						title: "External link icon",
						fill: "none",
						stroke: "currentColor",
						strokeWidth: "1.5",
						strokeLinecap: "round",
						strokeLinejoin: "round"
					}, c.a.createElement("path", {
						d: "M6.75,1.75h-5v12.5h12.5v-5m0,-4v-3.5h-3.5M8,8l5.5-5.5"
					}))
				};
			d.defaultProps = {
				description: "Open external link"
			};
			var f = d,
				E = ["href", "className", "children"],
				h = Object(s.a)("link"),
				g = h + "-content",
				w = h + "-external-icon";
			t.a = function(e) {
				var t = e.href,
					a = e.className,
					r = e.children,
					s = Object(n.a)(e, E);
				if (!t || !r) return c.a.createElement("a", s);
				var o = 0 === t.indexOf("#"),
					m = !!t.match(/^https?:/),
					p = /\.[^/]*$/.test(t),
					u = o || m || p,
					d = "object" == typeof r && c.a.Children.toArray(r).filter((function(e) {
						return !("object" != typeof e || !e.props || "img" !== e.props.parentName && "img" !== e.props.originalType && "gatsby-resp-image-wrapper" !== e.props.className)
					})).length;
				if (o && (s.onClick = function(e) {
						if (e.target) {
							var t = e.target.closest("a");
							e.preventDefault(), Object(i.navigate)(t.href)
						}
					}), !u) {
					var v = Object(l.withPrefix)("/").slice(0, -1);
					t.startsWith(v + "/") && (t = t.substr(v.length))
				}
				return u ? m && !d ? c.a.createElement("a", Object.assign({
					href: t,
					className: a || h
				}, s), c.a.createElement("span", {
					className: g
				}, r), c.a.createElement(f, {
					className: w
				})) : c.a.createElement("a", Object.assign({
					href: t,
					className: a || h
				}, s), c.a.createElement("span", {
					className: g
				}, r)) : c.a.createElement(l.Link, Object.assign({
					to: t,
					className: a || h
				}, s), c.a.createElement("span", {
					className: g
				}, r))
			}
		},
		w2l6: function(e, t, a) {
			"use strict";
			a.r(t);
			var n = a("q1tI"),
				r = a.n(n),
				c = a("qrHm"),
				l = a("qhky"),
				i = a("Wbzz");

			function s(e) {
				var t = e.lang,
					a = e.title,
					n = e.description,
					c = (e.meta, Object(i.useStaticQuery)("32046230").site),
					s = n || c.siteMetadata.description,
					o = a,
					m = c.siteMetadata.title;
				return a = ["Home", "Docs", "Overview", "Welcome", m].includes(o) ? m : o + " · " + m, r.a.createElement(l.a, null, r.a.createElement("html", {
					lang: t
				}), r.a.createElement("title", null, a), r.a.createElement("meta", {
					name: "description",
					content: s
				}), r.a.createElement("meta", {
					property: "og:image",
					content: c.siteMetadata.image
				}), r.a.createElement("meta", {
					property: "og:title",
					content: a
				}), r.a.createElement("meta", {
					property: "og:description",
					content: s
				}), r.a.createElement("meta", {
					property: "og:type",
					content: "website"
				}), r.a.createElement("meta", {
					name: "twitter:title",
					content: a
				}), r.a.createElement("meta", {
					name: "twitter:image",
					content: "https://www.cloudflare.com/img/cf-twitter-card.png"
				}), r.a.createElement("meta", {
					name: "twitter:description",
					content: s
				}), r.a.createElement("meta", {
					name: "twitter:creator",
					content: c.siteMetadata.author
				}), r.a.createElement("meta", {
					name: "twitter:card",
					content: "summary_large_image"
				}))
			}
			s.defaultProps = {
				lang: "en",
				description: "",
				meta: []
			};
			var o = s;
			t.default = function() {
				return r.a.createElement(r.a.Fragment, null, r.a.createElement(o, {
					title: "Not found"
				}), r.a.createElement("center", null, r.a.createElement("h1", null, "Not found"), r.a.createElement("p", null, "Unfortunately, the page you requested cannot be found."), r.a.createElement("p", null, r.a.createElement(c.a, {
					class: "Button Button-is-docs-primary",
					href: "/"
				}, "Go home"))))
			}
		}
	}
]);