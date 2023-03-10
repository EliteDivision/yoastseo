"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _lodashEs = require("lodash-es");

var _assessment = require("../../assessment");

var _assessment2 = _interopRequireDefault(_assessment);

var _config = require("../../config/config");

var _config2 = _interopRequireDefault(_config);

var _shortlinker = require("../../helpers/shortlinker");

var _AssessmentResult = require("../../values/AssessmentResult");

var _AssessmentResult2 = _interopRequireDefault(_AssessmentResult);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const maximumMetaDescriptionLength = _config2.default.maxMeta;

/**
 * Assessment for calculating the length of the meta description.
 */
class MetaDescriptionLengthAssessment extends _assessment2.default {
	/**
  * Sets the identifier and the config.
  *
  * @param {Object} [config] The configuration to use.
  *
  * @returns {void}
  */
	constructor(config = {}) {
		super();

		const defaultConfig = {
			recommendedMaximumLength: 120,
			maximumLength: maximumMetaDescriptionLength,
			scores: {
				noMetaDescription: 1,
				tooLong: 6,
				tooShort: 6,
				correctLength: 9
			},
			urlTitle: (0, _shortlinker.createAnchorOpeningTag)("https://yoa.st/34d"),
			urlCallToAction: (0, _shortlinker.createAnchorOpeningTag)("https://yoa.st/34e")
		};

		this.identifier = "metaDescriptionLength";
		this._config = (0, _lodashEs.merge)(defaultConfig, config);
	}

	/**
  * Returns the maximum length.
  *
  * @returns {number} The maximum length.
  */
	getMaximumLength() {
		return this._config.maximumLength;
	}

	/**
  * Runs the metaDescriptionLength module, based on this returns an assessment result with score.
  *
  * @param {Paper} paper The paper to use for the assessment.
  * @param {Researcher} researcher The researcher used for calling research.
  * @param {Jed} i18n The object used for translations
  *
  * @returns {AssessmentResult} The assessment result.
  */
	getResult(paper, researcher, i18n) {
		const descriptionLength = researcher.getResearch("metaDescriptionLength");
		const assessmentResult = new _AssessmentResult2.default();

		assessmentResult.setScore(this.calculateScore(descriptionLength));
		assessmentResult.setText(this.translateScore(descriptionLength, i18n));

		// Max and actual are used in the snippet editor progress bar.
		assessmentResult.max = this._config.maximumLength;
		assessmentResult.actual = descriptionLength;

		return assessmentResult;
	}

	/**
  * Returns the score for the descriptionLength.
  *
  * @param {number} descriptionLength The length of the metadescription.
  *
  * @returns {number} The calculated score.
  */
	calculateScore(descriptionLength) {
		if (descriptionLength === 0) {
			return this._config.scores.noMetaDescription;
		}

		if (descriptionLength <= this._config.recommendedMaximumLength) {
			return this._config.scores.tooShort;
		}

		if (descriptionLength > this._config.maximumLength) {
			return this._config.scores.tooLong;
		}

		if (descriptionLength >= this._config.recommendedMaximumLength && descriptionLength <= this._config.maximumLength) {
			return this._config.scores.correctLength;
		}

		return 0;
	}

	/**
  * Translates the descriptionLength to a message the user can understand.
  *
  * @param {number} descriptionLength The length of the metadescription.
  * @param {object} i18n The object used for translations.
  *
  * @returns {string} The translated string.
  */
	translateScore(descriptionLength, i18n) {
		if (descriptionLength === 0) {
			return i18n.sprintf(
			/* Translators:  %1$s and %2$s expand to a links on yoast.com, %3$s expands to the anchor end tag */
			i18n.dgettext("js-text-analysis", "%1$sMeta description length%3$s:  No meta description has been specified. " + "Search engines will display copy from the page instead. %2$sMake sure to write one%3$s!"), this._config.urlTitle, this._config.urlCallToAction, "</a>");
		}

		if (descriptionLength <= this._config.recommendedMaximumLength) {
			return i18n.sprintf(
			/* Translators: %1$s and %2$s expand to links on yoast.com, %3$s expands to the anchor end tag,
   %4$d expands to the number of characters in the meta description, %5$d expands to
   the total available number of characters in the meta description */
			i18n.dgettext("js-text-analysis", "%1$sMeta description length%3$s: The meta description is too short (under %4$d characters). " + "Up to %5$d characters are available. %2$sUse the space%3$s!"), this._config.urlTitle, this._config.urlCallToAction, "</a>", this._config.recommendedMaximumLength, this._config.maximumLength);
		}

		if (descriptionLength > this._config.maximumLength) {
			return i18n.sprintf(
			/* Translators: %1$s and %2$s expand to links on yoast.com, %3$s expands to the anchor end tag,
   %4$d expands to	the total available number of characters in the meta description */
			i18n.dgettext("js-text-analysis", "%1$sMeta description length%3$s: The meta description is over %4$d characters. " + "To ensure the entire description will be visible, %2$syou should reduce the length%3$s!"), this._config.urlTitle, this._config.urlCallToAction, "</a>", this._config.maximumLength);
		}

		if (descriptionLength >= this._config.recommendedMaximumLength && descriptionLength <= this._config.maximumLength) {
			return i18n.sprintf(
			/* Translators:  %1$s expands to a link on yoast.com, %2$s expands to the anchor end tag */
			i18n.dgettext("js-text-analysis", "%1$sMeta description length%2$s: Well done!"), this._config.urlTitle, "</a>");
		}
	}
}
exports.default = MetaDescriptionLengthAssessment;
//# sourceMappingURL=MetaDescriptionLengthAssessment.js.map
