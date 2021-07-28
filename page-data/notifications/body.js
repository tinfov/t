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
}

/* @jsx mdx */
var _frontmatter = {
	"order": 200,
	"pcx-content-type": "reference"
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
		"id": "notifications"
	}, "Notifications"), mdx("p", null, "In your ", mdx("a", {
		parentName: "p",
		"href": "/client-certificates-add/create-a-client-certificate-del"
	}, "account notifications"), ", set up alerts for the following SSL areas:"), mdx("ul", null, mdx("li", {
		parentName: "ul"
	}, "Universal SSL"), mdx("li", {
		parentName: "ul"
	}, "Dedicated SSL"), mdx("li", {
		parentName: "ul"
	}, "SSL for SaaS Custom Hostnames")), mdx("p", null, "These alerts cover certificate validation status, issuance, deployment, renewal, and expiration notices."), mdx("h2", {
		"id": "set-up-notifications"
	}, "Set up oooooooooooooonotifications"), mdx("p", null, "To set up notifications:"), mdx("ol", null, mdx("li", {
		parentName: "ol"
	}, "From your account homepage, click ", mdx("strong", {
		parentName: "li"
	}, "Notifications"), "."), mdx("li", {
		parentName: "ol"
	}, "Select ", mdx("strong", {
		parentName: "li"
	}, "Add"), "."), mdx("li", {
		parentName: "ol"
	}, "Select an alert type."), mdx("li", {
		parentName: "ol"
	}, "Fill in the required information and select ", mdx("strong", {
		parentName: "li"
	}, "Create"), ".")), mdx("p", null, "To edit, delete, or disable notifications, you can also go to ", mdx("a", {
		parentName: "p",
		"href": "/client-certificates-add"
	}, "account notifications"), "."), mdx("h2", {
		"id": "respond-to-notifications"
	}, "Respond to notifications"), mdx("p", null, "You may want to take different actions based on the type of notification."), mdx("h3", {
		"id": "success-notifications"
	}, "Success notifications"), mdx("p", null, "If you receive a success alert \\u2014 such as successful validation or deployment \\u2014 no additional action is required."), mdx("h3", {
		"id": "failure-notifications"
	}, "Failure notifications"), mdx("p", null, "If you receive a failure alert \\u2014 such as a failed validation or certificate deletion \\u2014 refer to the alert itself for suggested fixes or additional information."), mdx("h3", {
		"id": "miscellaneous-notifications"
	}, "Miscellaneous notifications"), mdx("p", null, "If you receive another type of alert \\u2014 such as a certificate expiration notice \\u2014 refer to the alert itself for suggested fixes or additional information."));
};
MDXContent.isMDXComponent = true;