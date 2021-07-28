//APK RENDER MENU
					n.render = function() {
/*
				{
          "node": {
            "id": "d3c8641f-c7a0-5a1d-a799-ed1601922def",
            "fields": {
              "slug": "/edge-certificates"
            },
            "frontmatter": {
              "title": "",
              "type": null,
              "order": 22,
              "hidden": null,
              "hideChildren": null,
              "breadcrumbs": null
            },
            "headings": [
              {
                "value": " t---Edge certificates",
                "depth": 11
              }
            ]
          }
        },

*/				
					
					
					
					
					
					
					
						var e = this.state.expanded,
							n = this.props,
							r = n.node,
							i = n.location,
							a = this.props.depth + 1,
							s = {};
						e && (s["is-expanded"] = ""), this.isActive() && (s["is-active"] = ""), this.isActiveRoot() && (s["is-active-root"] = "");
						var c = {};
						this.isHidden() && (c.tabIndex = -1), this.isHidden() && (c["aria-hidden"] = !0), this.isActive() && (c["is-active"] = "");
						var u = {};
						return this.isHidden() && (u.tabIndex = -1), this.isHidden() && (u["aria-hidden"] = !0), o.a.createElement("li", Object.assign({
							className: "DocsSidebar--nav-item",
							key: r.id
						}, s), this.showChildren() && o.a.createElement("button", Object.assign({
							onClick: this.onExpandCollapseClick,
							className: "Button DocsSidebar--nav-expand-collapse-button"
						}, u), o.a.createElement("span", {
							className: "DocsSidebar--nav-expand-collapse-button-content",
							"aria-hidden": "true"
						}), o.a.createElement("span", {
							"is-visually-hidden": ""
						}, e ? "Collapse" : "Expand", ": ", r.title)), o.a.createElement(T.Link, Object.assign({
							className: "DocsSidebar--nav-link",
							to: r.href
						}, c), o.a.createElement("span", {
							className: "DocsSidebar--nav-link-highlight"
							
							
						//APK
							
						}), o.a.createElement("span", {
							className: "DocsSidebar--nav-link-text"
						}, r.title)),






						this.showChildren() && o.a.createElement(Mn, {
							expanded: e
						}, o.a.createElement("div", {
							className: "DocsSidebar--nav-item-collapse-content"
						}, o.a.createElement("ul", {
							className: "DocsSidebar--nav-subnav",
							depth: a,
							style: {
								"--depth": a
							}
						}, r.children.map((function(n) {
							return o.a.createElement(t, {
								key: n.id,
								node: n,
								location: i,
								depth: a,
								isParentExpanded: e
							})
						}))))))
					}