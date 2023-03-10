"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * \u00a0 - No-break space
 * \u06d4 - Urdu full stop
 * \u061f - Arabic question mark
 * \u060C - Arabic comma
 * \u061B - Arabic semicolon
 */
const wordBoundary = "[ \\u00a0\\u06d4\\u061f\\u060C\\u061B \\n\\r\\t.,'()\"+\\-;!?:/»«‹›<>]";
const wordBoundaryStart = new RegExp("^(" + wordBoundary + "+)", "ig");
const wordBoundaryEnd = new RegExp("(" + wordBoundary + "+$)", "ig");

/**
 * Strip word boundary markers from text in the beginning
 *
 * @param {String} text The text to strip word boundary markers from.
 *
 * @returns {String} The text without double word boundary markers.
 */
const stripWordBoundariesStart = function stripWordBoundariesStart(text) {
  // Remove first character if word boundary
  text = text.replace(wordBoundaryStart, "");

  return text;
};

/**
 * Strip word boundary markers from text in the end
 *
 * @param {String} text The text to strip word boundary markers from.
 *
 * @returns {String} The text without double word boundary markers.
 */
const stripWordBoundariesEnd = function stripWordBoundariesEnd(text) {
  // Remove last character if word boundary
  text = text.replace(wordBoundaryEnd, "");

  return text;
};

/**
 * Strip word boundary markers from text in the beginning and in the end
 *
 * @param {String} text The text to strip word boundary markers from.
 *
 * @returns {String} The text without word boundary markers.
 */
const stripWordBoundariesEverywhere = function stripWordBoundariesEverywhere(text) {
  // Remove first/last character if word boundary
  text = text.replace(wordBoundaryStart, "");
  text = text.replace(wordBoundaryEnd, "");

  return text;
};

exports.stripWordBoundariesStart = stripWordBoundariesStart;
exports.stripWordBoundariesEnd = stripWordBoundariesEnd;
exports.stripWordBoundariesEverywhere = stripWordBoundariesEverywhere;
exports.default = {
  stripWordBoundariesStart: stripWordBoundariesStart,
  stripWordBoundariesEnd: stripWordBoundariesEnd,
  stripWordBoundariesEverywhere: stripWordBoundariesEverywhere
};
//# sourceMappingURL=stripWordBoundaries.js.map
