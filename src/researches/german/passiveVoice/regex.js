"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.exceptions = exceptions;

exports.default = function () {
  return {
    verbsBeginningWithGe: verbsBeginningWithGe,
    verbsBeginningWithErVerEntBeZerHerUber: verbsBeginningWithErVerEntBeZerHerUber,
    verbsWithGeInMiddle: verbsWithGeInMiddle,
    verbsWithErVerEntBeZerHerUberInMiddle: verbsWithErVerEntBeZerHerUberInMiddle,
    verbsEndingWithIert: verbsEndingWithIert,
    exceptions: exceptions
  };
};

var verbsBeginningWithGeRegex = /^((ge)\S+t($|[ \n\r\t.,'()"+\-;!?:/»«‹›<>]))/ig;
var verbsBeginningWithErVerEntBeZerHerUberRegex = /^(((be|ent|er|her|ver|zer|über|ueber)\S+([^s]t|sst))($|[ \n\r\t.,'()"+\-;!?:/»«‹›<>]))/ig;
var verbsWithGeInMiddleRegex = /(ab|an|auf|aus|vor|wieder|zurück)(ge)\S+t($|[ \n\r\t.,'()"+\-;!?:/»«‹›<>])/ig;
var verbsWithErVerEntBeZerHerUberInMiddleRegex = /((ab|an|auf|aus|vor|wieder|zurück)(be|ent|er|her|ver|zer|über|ueber)\S+([^s]t|sst))($|[ \n\r\t.,'()"+\-;!?:/»«‹›<>])/ig;
var verbsEndingWithIertRegex = /\S+iert($|[ \n\r\t.,'()"+\-;!?:/»«‹›<>])/ig;
var exceptionsRegex = /\S+(apparat|arbeit|dienst|haft|halt|kraft|not|pflicht|schaft|schrift|tät|wert|zeit)($|[ \n\r\t.,'()"+\-;!?:/»«‹›<>])/ig;

/**
 * Checks if the word starts with 'ge'.
 *
 * @param {string} word The word to match.
 * @returns {Array} A list with matches.
 */
var verbsBeginningWithGe = function verbsBeginningWithGe(word) {
  return word.match(verbsBeginningWithGeRegex) || [];
};

/**
 * Checks if the word starts with 'er', 'ver', 'ent', 'be' or 'zer'.
 *
 * @param {string} word The word to match.
 * @returns {Array} A list with matches.
 */
var verbsBeginningWithErVerEntBeZerHerUber = function verbsBeginningWithErVerEntBeZerHerUber(word) {
  return word.match(verbsBeginningWithErVerEntBeZerHerUberRegex) || [];
};

/**
 * Checks if the word contains 'ge' following 'ab', 'an', 'auf', 'aus', 'vor', 'wieder' or 'zurück'.
 *
 * @param {string} word The word to match.
 * @returns {Array} A list with matches.
 */
var verbsWithGeInMiddle = function verbsWithGeInMiddle(word) {
  return word.match(verbsWithGeInMiddleRegex) || [];
};

/**
 * Checks if the word starts with 'er', 'ver', 'ent', 'be' or 'zer',
 * following  'ab', 'an', 'auf', 'aus', 'vor', 'wieder' or 'zurück'.
 *
 * @param {string} word The word to match.
 * @returns {Array} A list with matches.
 */
var verbsWithErVerEntBeZerHerUberInMiddle = function verbsWithErVerEntBeZerHerUberInMiddle(word) {
  return word.match(verbsWithErVerEntBeZerHerUberInMiddleRegex) || [];
};

/**
 * Checks if the word ends in 'iert'.
 *
 * @param {string} word The word to match.
 * @returns {Array} A list with matches.
 */
var verbsEndingWithIert = function verbsEndingWithIert(word) {
  return word.match(verbsEndingWithIertRegex) || [];
};

/**
 * Matches the word against the exceptions regex.
 *
 * @param {string} word The word to match.
 *
 * @returns {Array} A list with matches.
 */
function exceptions(word) {
  return word.match(exceptionsRegex) || [];
}

/**
 * Returns lists of verbs that are relevant for determining passive voice in German.
 *
 * @returns {Object} German lists of words relevant for passive voice.
 */
//# sourceMappingURL=regex.js.map
