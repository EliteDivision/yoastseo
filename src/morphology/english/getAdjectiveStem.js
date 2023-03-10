"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (word, regexAdjective, stopAdjectives) {
	/*
  * Check comparatives: Consider only words of four letters or more (otherwise, words like "per" are being treated
  * as comparatives).
  */
	const canBeComparative = constructCanBeFunction("er", 4, stopAdjectives.erExceptions);
	if (canBeComparative(word)) {
		const comparativeToBaseRegex = (0, _createRulesFromMorphologyData2.default)(regexAdjective.comparativeToBase);
		return {
			base: (0, _buildFormRule.buildOneFormFromRegex)(word, comparativeToBaseRegex) || word,
			guessedForm: "er"
		};
	}

	/*
  * Check superlatives: Consider only words of five letters or more (otherwise, words like "test" are being treated
  * as superlatives).
  */
	const canBeSuperlative = constructCanBeFunction("est", 5, stopAdjectives.estExceptions);
	if (canBeSuperlative(word)) {
		const superlativeToBaseRegex = (0, _createRulesFromMorphologyData2.default)(regexAdjective.superlativeToBase);
		return {
			base: (0, _buildFormRule.buildOneFormFromRegex)(word, superlativeToBaseRegex) || word,
			guessedForm: "est"
		};
	}

	/*
  * Check ly-adverbs: Consider only words of five letters or more (otherwise, words like "lily" are being treated
  * as ly-adverbs).
  */
	const canBeLyAdverb = constructCanBeFunction("ly", 5, stopAdjectives.lyExceptions);
	if (canBeLyAdverb(word)) {
		const adverbToBaseRegex = (0, _createRulesFromMorphologyData2.default)(regexAdjective.adverbToBase);
		return {
			base: (0, _buildFormRule.buildOneFormFromRegex)(word, adverbToBaseRegex),
			guessedForm: "ly"
		};
	}

	return {
		base: word,
		guessedForm: "base"
	};
};

var _buildFormRule = require("../morphoHelpers/buildFormRule");

var _createRulesFromMorphologyData = require("../morphoHelpers/createRulesFromMorphologyData");

var _createRulesFromMorphologyData2 = _interopRequireDefault(_createRulesFromMorphologyData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Constructs a function that checks if the input word can be a specific adjectival form.
 *
 * @param {string}      endsWith            How the form ends.
 * @param {int}         minimumWordLength   How long the word should be to classify for this form.
 * @param {string[]}    exceptions          The list of words with that ending (endsWith) which are not this form.
 *
 * @returns {Function} A function that checks if the input word can be a specific adjectival form.
 */
// "use strict";
const constructCanBeFunction = function constructCanBeFunction(endsWith, minimumWordLength, exceptions) {
	return word => {
		const wordLength = word.length;
		if (wordLength < minimumWordLength) {
			return false;
		}

		const doesEndWith = word.substring(wordLength - endsWith.length, wordLength) === endsWith;
		return doesEndWith && !exceptions.includes(word);
	};
};

/**
 * Forms the base form from an input word.
 *
 * @param {string}   word                                  The word to build the base form for.
 * @param {Object}   regexAdjective                        The lists of regexes to apply to stem adjectives.
 * @param {Array}    regexAdjective.comparativeToBaseRegex The Array of regex-based rules to bring comparatives to base.
 * @param {Array}    regexAdjective.superlativeToBaseRegex The Array of regex-based rules to bring superlatives to base.
 * @param {Array}    regexAdjective.adverbToBaseRegex      The Array of regex-based rules to bring adverbs to base.
 * @param {Object}   stopAdjectives                        The lists of words that are not adverbs.
 * @param {string[]} stopAdjectives.erExceptions           The list of words that end with -er and are not comparatives.
 * @param {string[]} stopAdjectives.estExceptions          The list of words that end with -est and are not superlatives.
 * @param {string[]} stopAdjectives.lyExceptions           The list of words that end with -ly and are not adverbs.
 *
 * @returns {string} The base form of the input word.
 */
//# sourceMappingURL=getAdjectiveStem.js.map
