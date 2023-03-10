"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * Shortlinker to handle appending parameters to a link.
 */
class Shortlinker {
	/**
  * Initialize the Shortlinker class.
  *
  * @param {Object} [config={}] Optional configuration.
  */
	constructor(config = {}) {
		this.configure(config);
	}

	/**
  * Saves the passed configuration.
  *
  * @param {Object} config             The configuration.
  * @param {Object} [config.params={}] The default params to create the query string with.
  *
  * @returns {void}
  */
	configure(config) {
		this._config = _extends({
			params: {}
		}, config);
	}

	/**
  * Creates a query string from a params object.
  *
  * @param {Object} params Params for in the query string.
  *
  * @returns {string} URI encoded query string.
  */
	static createQueryString(params) {
		return Object.keys(params).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`).join("&");
	}

	/**
  * Creates a link by combining the params from the config and appending them to the url.
  *
  * @param {string} url         The base url.
  * @param {Object} [params={}] Optional params for in the url.
  *
  * @returns {string} The url with query string.
  */
	append(url, params = {}) {
		let link = encodeURI(url);
		const queryString = Shortlinker.createQueryString(_extends({}, this._config.params, params));

		if (queryString !== "") {
			link += "?" + queryString;
		}

		return link;
	}

	/**
  * Creates an anchor opening tag; uses the append function to create the url.
  *
  * @param {string} url         The base url.
  * @param {Object} [params={}] Optional params for in the url.
  *
  * @returns {string} The anchor opening tag.
  */
	createAnchorOpeningTag(url, params = {}) {
		return `<a href='${this.append(url, params)}' target='_blank'>`;
	}
}
exports.default = Shortlinker;
//# sourceMappingURL=Shortlinker.js.map
