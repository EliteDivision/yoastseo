"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _lodashEs = require("lodash-es");

var _addMark = require("../../markers/addMark");

var _addMark2 = _interopRequireDefault(_addMark);

var _shortlinker = require("../../helpers/shortlinker");

var _stripHTMLTags = require("../../stringProcessing/stripHTMLTags");

var _AssessmentResult = require("../../values/AssessmentResult");

var _AssessmentResult2 = _interopRequireDefault(_AssessmentResult);

var _Mark = require("../../values/Mark");

var _Mark2 = _interopRequireDefault(_Mark);

var _getLanguageAvailability = require("../../helpers/getLanguageAvailability.js");

var _getLanguageAvailability2 = _interopRequireDefault(_getLanguageAvailability);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const maximumConsecutiveDuplicates = 2;

const availableLanguages = ["en", "de", "es", "fr", "nl", "it", "ru", "pl", "sv", "pt", "id", "ar", "he", "hu", "tr"];

/**
 * Counts and groups the number too often used sentence beginnings and determines the lowest count within that group.
 * @param {array} sentenceBeginnings The array containing the objects containing the beginning words and counts.
 * @returns {object} The object containing the total number of too often used beginnings and the lowest count within those.
 */
const groupSentenceBeginnings = function groupSentenceBeginnings(sentenceBeginnings) {
	const tooOften = (0, _lodashEs.partition)(sentenceBeginnings, function (word) {
		return word.count > maximumConsecutiveDuplicates;
	});

	if (tooOften[0].length === 0) {
		return { total: 0 };
	}

	const sortedCounts = (0, _lodashEs.sortBy)(tooOften[0], function (word) {
		return word.count;
	});

	return { total: tooOften[0].length, lowestCount: sortedCounts[0].count };
};

/**
 * Calculates the score based on sentence beginnings.
 * @param {object} groupedSentenceBeginnings The object with grouped sentence beginnings.
 * @param {object} i18n The object used for translations.
 * @returns {{score: number, text: string, hasMarks: boolean}} result object with score and text.
 */
const calculateSentenceBeginningsResult = function calculateSentenceBeginningsResult(groupedSentenceBeginnings, i18n) {
	const urlTitle = (0, _shortlinker.createAnchorOpeningTag)("https://yoa.st/35f");
	const urlCallToAction = (0, _shortlinker.createAnchorOpeningTag)("https://yoa.st/35g");

	if (groupedSentenceBeginnings.total > 0) {
		return {
			score: 3,
			hasMarks: true,
			text: i18n.sprintf(
			/* Translators: %1$s and %5$s expand to a link on yoast.com, %2$s expands to the anchor end tag,
   %3$d expands to the number of consecutive sentences starting with the same word,
   %4$d expands to the number of instances where 3 or more consecutive sentences start with the same word. */
			i18n.dngettext("js-text-analysis", "%1$sConsecutive sentences%2$s: The text contains %3$d consecutive sentences starting with the same word." + " %5$sTry to mix things up%2$s!", "%1$sConsecutive sentences%2$s: The text contains %4$d instances where" + " %3$d or more consecutive sentences start with the same word. %5$sTry to mix things up%2$s!", groupedSentenceBeginnings.total), urlTitle, "</a>", groupedSentenceBeginnings.lowestCount, groupedSentenceBeginnings.total, urlCallToAction)
		};
	}
	return {
		score: 9,
		hasMarks: false,
		text: i18n.sprintf(
		/* Translators:  %1$s expands to a link on yoast.com, %2$s expands to the anchor end tag */
		i18n.dgettext("js-text-analysis", "%1$sConsecutive sentences%2$s: There is enough variety in your sentences. That's great!"), urlTitle, "</a>")
	};
};

/**
 * Marks all consecutive sentences with the same beginnings.
 * @param {object} paper The paper to use for the assessment.
 * @param {object} researcher The researcher used for calling research.
 * @returns {object} All marked sentences.
 */
const sentenceBeginningMarker = function sentenceBeginningMarker(paper, researcher) {
	let sentenceBeginnings = researcher.getResearch("getSentenceBeginnings");
	sentenceBeginnings = (0, _lodashEs.filter)(sentenceBeginnings, function (sentenceBeginning) {
		return sentenceBeginning.count > maximumConsecutiveDuplicates;
	});

	const sentences = (0, _lodashEs.map)(sentenceBeginnings, function (begin) {
		return begin.sentences;
	});

	return (0, _lodashEs.map)((0, _lodashEs.flatten)(sentences), function (sentence) {
		sentence = (0, _stripHTMLTags.stripIncompleteTags)(sentence);
		const marked = (0, _addMark2.default)(sentence);
		return new _Mark2.default({
			original: sentence,
			marked: marked
		});
	});
};

/**
 * Scores the repetition of sentence beginnings in consecutive sentences.
 * @param {object} paper The paper to use for the assessment.
 * @param {object} researcher The researcher used for calling research.
 * @param {object} i18n The object used for translations.
 * @returns {object} The Assessment result
 */
const sentenceBeginningsAssessment = function sentenceBeginningsAssessment(paper, researcher, i18n) {
	const sentenceBeginnings = researcher.getResearch("getSentenceBeginnings");
	const groupedSentenceBeginnings = groupSentenceBeginnings(sentenceBeginnings);
	const sentenceBeginningsResult = calculateSentenceBeginningsResult(groupedSentenceBeginnings, i18n);
	const assessmentResult = new _AssessmentResult2.default();

	assessmentResult.setScore(sentenceBeginningsResult.score);
	assessmentResult.setText(sentenceBeginningsResult.text);
	assessmentResult.setHasMarks(sentenceBeginningsResult.hasMarks);
	return assessmentResult;
};

/**
 * Checks if the sentence beginnings assessment is applicable to the paper.
 *
 * @param {Object} paper The paper to check.
 *
 * @returns {boolean} Returns true if the language is available and the paper is not empty.
 */
const isApplicable = function isApplicable(paper) {
	const isLanguageAvailable = (0, _getLanguageAvailability2.default)(paper.getLocale(), availableLanguages);
	return isLanguageAvailable && paper.hasText();
};

exports.default = {
	identifier: "sentenceBeginnings",
	getResult: sentenceBeginningsAssessment,
	isApplicable: isApplicable,
	getMarks: sentenceBeginningMarker
};
//# sourceMappingURL=sentenceBeginningsAssessment.js.map
