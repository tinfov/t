var _excluded = ["components"];

function _extends() {
	_extends = Object.assign || function(target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i];
			for (var key in source) {
				if (Object.prototype.hasOwnProperty.call(source, key)) {
					target[key] = source[key];
				}
			}
		}
		return target;
	};
	return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
	if (source == null) return {};
	var target = _objectWithoutPropertiesLoose(source, excluded);
	var key, i;
	if (Object.getOwnPropertySymbols) {
		var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
		for (i = 0; i < sourceSymbolKeys.length; i++) {
			key = sourceSymbolKeys[i];
			if (excluded.indexOf(key) >= 0) continue;
			if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
			target[key] = source[key];
		}
	}
	return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
	if (source == null) return {};
	var target = {};
	var sourceKeys = Object.keys(source);
	var key, i;
	for (i = 0; i < sourceKeys.length; i++) {
		key = sourceKeys[i];
		if (excluded.indexOf(key) >= 0) continue;
		target[key] = source[key];
	}
	return target;
} /* @jsx mdx */
var _frontmatter = {
	"title": "Welcome",
	"order": 0,
	"pcx-content-type": "landing-page"
};
var makeShortcode = function makeShortcode(name) {
	return function MDXDefaultShortcode(props) {
		console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
		return mdx("div", props);
	};
};
var layoutProps = {
	_frontmatter: _frontmatter
};
var MDXLayout = "wrapper";
return function MDXContent(_ref) {
	var components = _ref.components,
		props = _objectWithoutProperties(_ref, _excluded);
	return mdx(MDXLayout, _extends({}, layoutProps, props, {
		components: components,
		mdxType: "MDXLayout"
	}), mdx("h1", {
		"id": "cloudflare-ssl-documentation"
	}, "Cloudflare SSL documentation"), mdx("p", null, "Encrypting as much web traffic as possible to prevent data theft and other tampering is a critical step toward building a safer, better Internet. We are proud to be the first Internet performance and security company to offer SSL protection free of charge."));
};
MDXContent.isMDXComponent = true;