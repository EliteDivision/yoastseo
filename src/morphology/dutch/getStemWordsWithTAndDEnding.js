"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.generateCorrectStemWithTAndDEnding = generateCorrectStemWithTAndDEnding;

var _exceptionListHelpers = require("../morphoHelpers/exceptionListHelpers");

var _regexHelpers = require("../morphoHelpers/regexHelpers");

var _stemModificationHelpers = require("./stemModificationHelpers");

/**
 * Checks whether the word ends in suffixes -e or -en which are preceded by -t or -d, and the -t/-d is part of the stem.
 * If it does, stem the -e/-en. Also checks if after suffix deletion the stemmed word needs modification, and applies it if
 * needed. e.g. doden -> dod -> dood
 *
 * @param {Object} 		morphologyDataNL			 	The Dutch morphology data file.
 * @param {string[]} 	regexAndReplacement				The regex to check and the string replacement that should be made.
 * @param {string} 		word							The word to be checked.
 *
 * @returns {?string}							The stem created or null.
 */
const stemWordsWithEOrEnSuffix = function stemWordsWithEOrEnSuffix(morphologyDataNL, regexAndReplacement, word) {
	if ((0, _regexHelpers.doesWordMatchRegex)(word, regexAndReplacement[0])) {
		const stemmedWord = word.replace(new RegExp(regexAndReplacement[0]), regexAndReplacement[1]);
		if ((0, _stemModificationHelpers.isVowelDoublingAllowed)(stemmedWord, morphologyDataNL.regularStemmer.stemModifications.exceptionsStemModifications, morphologyDataNL.pastParticipleStemmer.compoundVerbsPrefixes)) {
			const replacement = (0, _regexHelpers.searchAndReplaceWithRegex)(stemmedWord, morphologyDataNL.regularStemmer.stemModifications.doubleVowel);
			return replacement ? replacement : stemmedWord;
		}
		return stemmedWord;
	}

	return null;
};

/**
 * Stems words for which we know that -t/-d is the ending of the stem (so the -t/-d is not stemmed). This is done through
 * checking lists of words and matching the word with regexes.
 *
 * @param {string}	word								The word to check.
 * @param {Object} 	morphologyDataNL 					The Dutch morphology data.
 *
 * @returns {?string} 							The stemmed word, if matched in one of the checks, or null if not matched.
 */
const checkWhetherTOrDIsPartOfStem = function checkWhetherTOrDIsPartOfStem(word, morphologyDataNL) {
	const tAndDPartOfStemData = morphologyDataNL.ambiguousTAndDEndings.tOrDArePartOfStem;
	/*
  * Step 1:
  * - If the stem ends in -tte, -tten, -dde or -dden leave the first -t/-d and stem the remaining ending.
  * - Example: "katten" (-ten should be stemmed, leaving "kat").
  */
	let stemmedWord = (0, _regexHelpers.searchAndReplaceWithRegex)(word, tAndDPartOfStemData.firstTOrDPartOfStem);

	if (stemmedWord) {
		return stemmedWord;
	}

	/*
  * Step 2:
  * 2a)
  * - Checks whether the word is in the exception list of verbal forms ending in long vowel + -fden/sden. If so, stems -den off.
  * - Example: "hoefden" (-den should be stemmed, leaving "hoef").
  * 2b)
  * - Check whether the word has the suffix -en preceded by -d, where the -d is part of the stem. If it is, stem only -en.
  * - Example: "eenden" (-en should be stemmed, leaving "eend").
  */
	if (tAndDPartOfStemData.verbsDenShouldBeStemmed.includes(word)) {
		return word.slice(0, -3);
	}

	if ((0, _exceptionListHelpers.checkIfWordEndingIsOnExceptionList)(word, tAndDPartOfStemData.wordsStemOnlyEnEnding.endingMatch) || (0, _exceptionListHelpers.checkIfWordIsOnVerbExceptionList)(word, tAndDPartOfStemData.wordsStemOnlyEnEnding.verbs, morphologyDataNL.pastParticipleStemmer.compoundVerbsPrefixes) || (0, _regexHelpers.doesWordMatchRegex)(word, tAndDPartOfStemData.denEnding)) {
		stemmedWord = word.slice(0, -2);
		//	Check if the vowel needs to be doubled after deleting suffix -en.
		if ((0, _stemModificationHelpers.isVowelDoublingAllowed)(stemmedWord, morphologyDataNL.regularStemmer.stemModifications.exceptionsStemModifications, morphologyDataNL.pastParticipleStemmer.compoundVerbsPrefixes)) {
			const replacement = (0, _regexHelpers.searchAndReplaceWithRegex)(stemmedWord, morphologyDataNL.regularStemmer.stemModifications.doubleVowel);
			return replacement ? replacement : stemmedWord;
		}
		return stemmedWord;
	}

	/*
  * Step 3:
  * - Checks whether the word matches the regex for words ending in -de with -d being part of the stem. If it is matched,
  * only stem the -e.
  * - Example: "beenharde" (-e should be stemmed, leaving "beenhard")
  */
	const dIsPartOfStemRegex = tAndDPartOfStemData.deEnding;
	stemmedWord = stemWordsWithEOrEnSuffix(morphologyDataNL, dIsPartOfStemRegex, word);

	if (stemmedWord) {
		return stemmedWord;
	}

	/*
  * Step 4:
  * - Checks whether the word matches the regex for words ending in -te or -ten with -t being part of the stem. If it is
  * matched, only stem the -e/-en.
  * - Example: "castraten" (-en should be stemmed, leaving "castraat")
  */
	const tIsPartOfStemRegex = tAndDPartOfStemData.teAndTenEndings;
	stemmedWord = stemWordsWithEOrEnSuffix(morphologyDataNL, tIsPartOfStemRegex, word);

	if (stemmedWord) {
		return stemmedWord;
	}

	return null;
};

/**
 * Creates the correct stem for words which end in ambiguous endings -t, -te, -ten, -de, or -den.
 *
 * @param {Object} 		morphologyDataNL 					The Dutch morphology data.
 * @param {string} 		word								The word to be checked.
 *
 * @returns {?string} 	The stemmed word or null.
 */
function generateCorrectStemWithTAndDEnding(morphologyDataNL, word) {
	/*
  * Step 1:
  * - Check whether the word is in the exception list of words in which -t ending needs to be stemmed. If it is, stem -t.
  * - Example: "squasht".
  * - This is an exception to one of the rule in step 2.
  */
	if ((0, _exceptionListHelpers.checkIfWordEndingIsOnExceptionList)(word, morphologyDataNL.ambiguousTAndDEndings.wordsTShouldBeStemmed)) {
		return word.slice(0, -1);
	}

	/*
  * Step 2:
  * - Check if word is matched by a regex for a t that shouldn't be stemmed.
  * - Example: "boot".
  */
	if ((0, _regexHelpers.doesWordMatchRegex)(word, morphologyDataNL.ambiguousTAndDEndings.tOrDArePartOfStem.tEnding)) {
		return word;
	}

	/*
  * Step 3:
  * - Check whether the word has another suffix that should be stemmed (e.g. -en) preceded by -t or -d which is part of the stem.
  *  If yes, stem the suffix that should be stemmed and return the stem which ends in -t/-d.
  * - Example: "tijden" (only -en should be removed, not -den).
  */

	const stemmedWord = checkWhetherTOrDIsPartOfStem(word, morphologyDataNL);

	if (stemmedWord) {
		return stemmedWord;
	}

	return null;
}
//# sourceMappingURL=getStemWordsWithTAndDEnding.js.map
