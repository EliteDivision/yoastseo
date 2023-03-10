"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
/* eslint-disable no-unused-vars */
/**
 * Represents the defaults of an assessment.
 */
class Assessment {
	/**
  * Executes the assessment and return its result.
  *
  * @param {Paper} paper The paper to run this assessment on.
  * @param {Researcher} researcher The researcher used for the assessment.
  * @param {object} i18n The i18n-object used for parsing translations.
  *
  * @returns {AssessmentResult} The result of the assessment.
  */
	getResult(paper, researcher, i18n) {
		throw "The method getResult is not implemented";
	}

	/**
  * Checks whether the assessment is applicable
  *
  * @param {Paper} paper The paper to use for the assessment.
  *
  * @returns {boolean} True.
  */
	isApplicable(paper) {
		return true;
	}
}

/* eslint-enable no-unused-vars */

exports.default = Assessment;
//# sourceMappingURL=assessment.js.map
