"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (i18n) {
	const contentOptimizationLabel = i18n.dgettext("js-text-analysis", "Content optimization:");
	return {
		feedback: {
			className: "na",
			screenReaderText: i18n.dgettext("js-text-analysis", "Feedback"),
			fullText: `${contentOptimizationLabel} ${i18n.dgettext("js-text-analysis", "Has feedback")}`,
			screenReaderReadabilityText: ""
		},
		bad: {
			className: "bad",
			screenReaderText: i18n.dgettext("js-text-analysis", "Needs improvement"),
			fullText: `${contentOptimizationLabel} ${i18n.dgettext("js-text-analysis", "Needs improvement")}`,
			screenReaderReadabilityText: i18n.dgettext("js-text-analysis", "Needs improvement")
		},
		ok: {
			className: "ok",
			screenReaderText: i18n.dgettext("js-text-analysis", "OK SEO score"),
			fullText: `${contentOptimizationLabel} ${i18n.dgettext("js-text-analysis", "OK SEO score")}`,
			screenReaderReadabilityText: i18n.dgettext("js-text-analysis", "OK")
		},
		good: {
			className: "good",
			screenReaderText: i18n.dgettext("js-text-analysis", "Good SEO score"),
			fullText: `${contentOptimizationLabel} ${i18n.dgettext("js-text-analysis", "Good SEO score")}`,
			screenReaderReadabilityText: i18n.dgettext("js-text-analysis", "Good")
		}
	};
};
//# sourceMappingURL=presenter.js.map
