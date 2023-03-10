"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _lodashEs = require("lodash-es");

var _assessment = require("../../assessment");

var _assessment2 = _interopRequireDefault(_assessment);

var _shortlinker = require("../../helpers/shortlinker");

var _AssessmentResult = require("../../values/AssessmentResult");

var _AssessmentResult2 = _interopRequireDefault(_AssessmentResult);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Assessment for calculating the outbound links in the text.
 */
class OutboundLinksAssessment extends _assessment2.default {
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
			scores: {
				noLinks: 3,
				allNofollowed: 7,
				someNoFollowed: 8,
				allFollowed: 9
			},
			urlTitle: (0, _shortlinker.createAnchorOpeningTag)("https://yoa.st/34f"),
			urlCallToAction: (0, _shortlinker.createAnchorOpeningTag)("https://yoa.st/34g")
		};

		this.identifier = "externalLinks";
		this._config = (0, _lodashEs.merge)(defaultConfig, config);
	}

	/**
  * Runs the getLinkStatistics module, based on this returns an assessment result with score.
  *
  * @param {Paper} paper The paper to use for the assessment.
  * @param {Researcher} researcher The researcher used for calling research.
  * @param {Jed} i18n The object used for translations
  *
  * @returns {AssessmentResult} The assessment result.
  */
	getResult(paper, researcher, i18n) {
		const linkStatistics = researcher.getResearch("getLinkStatistics");
		const assessmentResult = new _AssessmentResult2.default();
		if (!(0, _lodashEs.isEmpty)(linkStatistics)) {
			assessmentResult.setScore(this.calculateScore(linkStatistics));
			assessmentResult.setText(this.translateScore(linkStatistics, i18n));
		}
		return assessmentResult;
	}

	/**
  * Checks whether paper has text.
  *
  * @param {Paper} paper The paper to use for the assessment.
  *
  * @returns {boolean} True when there is text.
  */
	isApplicable(paper) {
		return paper.hasText();
	}

	/**
  * Returns a score based on the linkStatistics object.
  *
  * @param {object} linkStatistics The object with all link statistics.
  *
  * @returns {number|null} The calculated score.
  */
	calculateScore(linkStatistics) {
		if (linkStatistics.externalTotal === 0) {
			return this._config.scores.noLinks;
		}

		if (linkStatistics.externalNofollow === linkStatistics.externalTotal) {
			return this._config.scores.allNofollowed;
		}

		if (linkStatistics.externalDofollow < linkStatistics.externalTotal) {
			return this._config.scores.someNoFollowed;
		}

		if (linkStatistics.externalDofollow === linkStatistics.externalTotal) {
			return this._config.scores.allFollowed;
		}

		return null;
	}

	/**
  * Translates the score to a message the user can understand.
  *
  * @param {Object} linkStatistics The object with all link statistics.
  * @param {Jed} i18n The object used for translations.
  *
  * @returns {string} The translated string.
  */
	translateScore(linkStatistics, i18n) {
		if (linkStatistics.externalTotal === 0) {
			return i18n.sprintf(
			/* Translators: %1$s and %2$s expand to links on yoast.com, %3$s expands to the anchor end tag */
			i18n.dgettext("js-text-analysis", "%1$sOutbound links%3$s: " + "No outbound links appear in this page. " + "%2$sAdd some%3$s!"), this._config.urlTitle, this._config.urlCallToAction, "</a>");
		}

		if (linkStatistics.externalNofollow === linkStatistics.externalTotal) {
			return i18n.sprintf(
			/* Translators: %1$s and %2$s expand to links on yoast.com, %3$s expands to the anchor end tag */
			i18n.dgettext("js-text-analysis", "%1$sOutbound links%3$s: " + "All outbound links on this page are nofollowed. " + "%2$sAdd some normal links%3$s."), this._config.urlTitle, this._config.urlCallToAction, "</a>");
		}

		if (linkStatistics.externalDofollow === linkStatistics.externalTotal) {
			return i18n.sprintf(
			/* Translators: %1$s expands to a link on yoast.com, %2$s expands to the anchor end tag */
			i18n.dgettext("js-text-analysis", "%1$sOutbound links%2$s: " + "Good job!"), this._config.urlTitle, "</a>");
		}

		if (linkStatistics.externalDofollow < linkStatistics.externalTotal) {
			return i18n.sprintf(
			/* Translators: %1$s expands to a link on yoast.com, %2$s expands to the anchor end tag */
			i18n.dgettext("js-text-analysis", "%1$sOutbound links%2$s: " + "There are both nofollowed and normal outbound links on this page. " + "Good job!"), this._config.urlTitle, "</a>");
		}

		return "";
	}
}
exports.default = OutboundLinksAssessment;
//# sourceMappingURL=OutboundLinksAssessment.js.map
