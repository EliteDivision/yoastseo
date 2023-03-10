"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = detectAndStemSuffixes;

var _stemModificationHelpers = require("./stemModificationHelpers");

/**
 * Determines the start index of the R1 region.
 * R1 is the region after the first non-vowel following a vowel. It should include at least 3 letters.
 *
 * @param {string} word The word for which to determine the R1 region.
 * @returns {number} The start index of the R1 region.
 */
const determineR1 = function determineR1(word) {
	// Start with matching the first cluster that consists of a vowel and a non-vowel.
	let r1Index = word.search(/[aeiouyèäüëïöáéíóú][^aeiouyèäüëïöáéíóú]/);
	// Then add 2 since the R1 index is the index after the first vowel & non-vowel matched with the regex.
	if (r1Index !== -1) {
		r1Index += 2;
	}

	// Adjust R1 so that the region preceding it includes at least 3 letters.
	if (r1Index !== -1 && r1Index < 3) {
		r1Index = 3;
	}

	return r1Index;
};

/**
 * Searches for suffixes in a word.
 *
 * @param {string} word 	The word in which to look for suffixes.
 * @param {Object} suffixStep	 One of the three steps of findings suffixes.
 * @param {number} r1Index	 The index of the R1 region.
 * @returns {Object} The index of the suffix and extra information about whether, and how, the stem will need to be modified.
 */
/**
 * @file Dutch stemming algorithm. Adapted from:
 * @author:
 * @copyright
 * All rights reserved.
 * Implementation of the stemming algorithm from http://snowball.tartarus.org/algorithms/dutch/stemmer.html
 * Copyright of the algorithm is: Copyright (c) 2001, Dr Martin Porter and can be found at http://snowball.tartarus.org/license.php
 *
 * Redistribution and use in source and binary forms, with or without modification, is covered by the standard BSD license.
 */

const findSuffix = function findSuffix(word, suffixStep, r1Index) {
	for (const suffixClass in suffixStep) {
		if (suffixStep.hasOwnProperty(suffixClass)) {
			const suffixes = suffixStep[suffixClass].suffixes;

			const matchedRegex = suffixes.find(suffixRegex => new RegExp(suffixRegex).exec(word));

			if (matchedRegex) {
				const matched = new RegExp(matchedRegex).exec(word);
				const suffix = matched[matched.length - 1];
				const suffixIndex = word.lastIndexOf(suffix);

				if (r1Index !== -1 && suffixIndex >= r1Index) {
					return {
						suffixIndex: suffixIndex,
						stemModification: suffixStep[suffixClass].stemModification
					};
				}
			}
		}
	}
};

/**
 * Deletes the suffix and modifies the stem according to the required modifications.
 *
 * @param {string} word	 The word from which to delete the suffix.
 * @param {Object} suffixStep 	One of the three steps of deleting a suffix.
 * @param {number} suffixIndex	 The index of the found suffix.
 * @param {string} stemModification 	The type of stem modification that needs to be done.
 * @param {Object} morphologyDataNL	 The Dutch morphology data file.
 * @returns {string} The stemmed and modified word.
 */
const deleteSuffixAndModifyStem = function deleteSuffixAndModifyStem(word, suffixStep, suffixIndex, stemModification, morphologyDataNL) {
	if (stemModification === "hedenToHeid") {
		return (0, _stemModificationHelpers.modifyStem)(word, morphologyDataNL.regularStemmer.stemModifications.hedenToHeid);
	}
	word = word.substring(0, suffixIndex);
	if (stemModification === "changeIedtoId") {
		return (0, _stemModificationHelpers.modifyStem)(word, morphologyDataNL.regularStemmer.stemModifications.iedToId);
	} else if (stemModification === "changeInktoIng" && word.endsWith("ink")) {
		return (0, _stemModificationHelpers.modifyStem)(word, morphologyDataNL.regularStemmer.stemModifications.inkToIng);
	} else if (stemModification === "vowelDoubling" && (0, _stemModificationHelpers.isVowelDoublingAllowed)(word, morphologyDataNL.regularStemmer.stemModifications.exceptionsStemModifications, morphologyDataNL.pastParticipleStemmer.compoundVerbsPrefixes)) {
		return (0, _stemModificationHelpers.modifyStem)(word, morphologyDataNL.regularStemmer.stemModifications.doubleVowel);
	}
	return word;
};

/**
 * Finds and deletes the suffix found in a particular step, and modifies the stem.
 *
 * @param {string} word 	The word for which to find and delete a suffix.
 * @param {Object} suffixStep	 One of the three suffix steps.
 * @param {number} r1Index	 The index of the R1 region.
 * @param {Object} morphologyDataNL	 The Dutch morphology data file.
 * @returns {string} The word with the deleted suffix.
 */
const findAndDeleteSuffix = function findAndDeleteSuffix(word, suffixStep, r1Index, morphologyDataNL) {
	const foundSuffix = findSuffix(word, suffixStep, r1Index);
	if (typeof foundSuffix !== "undefined") {
		word = deleteSuffixAndModifyStem(word, suffixStep, foundSuffix.suffixIndex, foundSuffix.stemModification, morphologyDataNL);
	}

	return word;
};

/**
 * Runs through three stemming steps that process different kinds of suffixes, determines if there is a valid suffix
 * within the R1 region that can be deleted for stemming and deletes it, as well as applies suffix-specific stem
 * modifications if needed.
 *
 * @param {string} word 	The word for which to find and delete suffixes.
 * @param {Object} suffixSteps	 All of the suffix steps.
 * @param {number} r1Index	 The index of the R1 region
 * @param {Object} morphologyDataNL 	The Dutch morphology data file.
 * @returns {string} The word with the delete suffix.
 */
const findAndDeleteSuffixes = function findAndDeleteSuffixes(word, suffixSteps, r1Index, morphologyDataNL) {
	for (const suffixStep in suffixSteps) {
		if (suffixSteps.hasOwnProperty(suffixStep)) {
			word = findAndDeleteSuffix(word, suffixSteps[suffixStep], r1Index, morphologyDataNL);
		}
	}

	return word;
};

/**
 * Search for suffixes in a word, remove them if found, and modify the stem if needed.
 *
 * @param {string} word  The word to stem.
 * @param {Object} morphologyDataNL The Dutch morphology data file.
 *
 * @returns {string} The stemmed word.
 */
function detectAndStemSuffixes(word, morphologyDataNL) {
	/*
  * Put i and y in between vowels, initial y, and y after a vowel into upper case. This is because they should
  * be treated as consonants so we want to differentiate them from other i's and y's when matching regexes.
  */
	word = (0, _stemModificationHelpers.modifyStem)(word, morphologyDataNL.regularStemmer.stemModifications.IAndYToUppercase);

	// Find the start index of the R1 region.
	const r1Index = determineR1(word);

	// Import the suffixes from all three steps.
	const suffixSteps = morphologyDataNL.regularStemmer.suffixes;

	// Run through the three steps of possible de-suffixation.
	word = findAndDeleteSuffixes(word, suffixSteps, r1Index, morphologyDataNL);

	// Do final modifications to the stem.
	return (0, _stemModificationHelpers.modifyStem)(word, morphologyDataNL.regularStemmer.stemModifications.finalChanges);
}
//# sourceMappingURL=detectAndStemSuffixes.js.map
