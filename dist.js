! function(e) {
	if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
	else if ("function" == typeof define && define.amd) define([], e);
	else {
		var n;
		n = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, n.autoToc = e()
	}
}(function() {
	return function e(n, t, r) {
		function o(a, u) {
			if (!t[a]) {
				if (!n[a]) {
					var d = "function" == typeof require && require;
					if (!u && d) return d(a, !0);
					if (i) return i(a, !0);
					var l = new Error("Cannot find module '" + a + "'");
					throw l.code = "MODULE_NOT_FOUND", l
				}
				var f = t[a] = {
					exports: {}
				};
				n[a][0].call(f.exports, function(e) {
					var t = n[a][1][e];
					return o(t ? t : e)
				}, f, f.exports, e, n, t, r)
			}
			return t[a].exports
		}
		for (var i = "function" == typeof require && require, a = 0; a < r.length; a++) o(r[a]);
		return o
	}({
		1: [function(e, n, t) {
			function r(e, n, t) {
				if (null == t && (t = {}), null == e) throw new Error("need to provide a selector where to scan for headers");
				if (null == n) throw new Error("need to provide a selector where inject the TOC");
				e = "string" == typeof e ? document.querySelectorAll(e + " > *") : e.children;
				var r = Array.prototype.slice.call(e),
					a = 6,
					l = r.filter(function(e) {
						var n = e.className.split(" ");
						if (-1 != n.indexOf("toc-ignore")) return !1;
						if (-1 != (t.ignore || []).indexOf(u(e))) return !1;
						var r = e.nodeName.split(""),
							o = parseInt(r[1]);
						return "H" === r[0] && o >= 1 && o <= (t.max || 6) ? (a = Math.min(a, o), !0) : void 0
					}),
					f = o(l, a),
					p = i(f.nodes),
					c = document.querySelector(n);
				d(c, ""), c.appendChild(p)
			}

			function o(e, n) {
				var t = {
					nodes: []
				};
				window.hierarchy = t;
				var r = {
						parent: t
					},
					o = n,
					i = !1;
				return e.forEach(function(e) {
					var n = parseInt(e.nodeName.substr(1)),
						t = {
							title: u(e),
							link: window.location.pathname + "#" + e.id,
							originLevel: n,
							nodes: []
						};
					if (n === o) t.parent = r.parent;
					else if (n - o >= 1) {
						if (i === !1) {
							var a = {
								parent: r.parent,
								title: "",
								link: "",
								originLevel: NaN,
								nodes: []
							};
							r.parent.nodes.push(a), r = a
						}
						t.parent = r, o++
					} else if (o - n >= 1) {
						for (var d = r.parent; o - n >= 1;) d = d.parent, o--;
						t.parent = d
					} else console.error("unkown toc path");
					t.parent.nodes.push(t), r = t, i = !0
				}), t
			}

			function i(e) {
				for (var n = document.createElement("UL"), t = 0; t < e.length; t++) n.appendChild(a(e[t]));
				return n
			}

			function a(e) {
				var n = document.createElement("LI"),
					t = document.createElement("A");
				return d(t, e.title), t.href = e.link, n.appendChild(t), e.nodes && n.appendChild(i(e.nodes)), n
			}

			function u(e) {
				return null != e.textContent ? e.textContent : void e.innerText
			}

			function d(e, n) {
				null != e.textContent ? e.textContent = n : e.innerText = n
			}
			n.exports = r, n.exports.update = function() {
				var e = document.querySelector("[data-toc]");
				if (null != e) {
					var n = {},
						t = (e.attributes.getNamedItem("data-toc-ignore") || {}).value,
						o = (e.attributes.getNamedItem("data-toc-max") || {}).value;
					null != t && (n.ignore = t), null != o && (n.max = parseInt(o)), r(e.parentNode, "[data-toc]", n)
				}
			}, window.addEventListener("load", n.exports.update)
		}, {}]
	}, {}, [1])(1)
});