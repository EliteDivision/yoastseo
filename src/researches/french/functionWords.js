"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return {
		// These word categories are filtered at the ending of word combinations.
		filteredAtEnding: [].concat(ordinalNumerals, otherAuxiliariesInfinitive, delexicalizedVerbsInfinitive, copulaInfinitive, interviewVerbsInfinitive, generalAdjectivesAdverbsPreceding),

		// These word categories are filtered at the beginning of word combinations.
		filteredAtBeginning: generalAdjectivesAdverbs,

		// These word categories are filtered at the beginning and ending of word combinations.
		filteredAtBeginningAndEnding: [].concat(articles, prepositions, coordinatingConjunctions, demonstrativePronouns, intensifiers, quantifiers, possessivePronouns),

		// These word categories are filtered everywhere within word combinations.
		filteredAnywhere: [].concat(transitionWords, personalPronounsNominative, personalPronounsAccusative, personalPronounsStressed, reflexivePronouns, interjections, cardinalNumerals, copula, interviewVerbs, otherAuxiliaries, delexicalizedVerbs, indefinitePronouns, correlativeConjunctions, subordinatingConjunctions, interrogativeAdjectives, relativePronouns, locativeAdverbs, miscellaneous, pronominalAdverbs, recipeWords, timeWords, vagueNouns),

		// These word categories cannot directly precede a passive participle.
		cannotDirectlyPrecedePassiveParticiple: [].concat(articles, prepositions, personalPronounsStressed, personalPronounsAccusative, possessivePronouns, reflexivePronouns, indefinitePronouns, interrogativeProAdverbs, interrogativeAdjectives, cardinalNumerals, ordinalNumerals, delexicalizedVerbs, interviewVerbs, delexicalizedVerbsInfinitive),

		// These word categories cannot intervene between an auxiliary and a corresponding passive participle.
		cannotBeBetweenPassiveAuxiliaryAndParticiple: [].concat(otherAuxiliaries, otherAuxiliariesInfinitive),

		// This export contains all of the above words.
		all: [].concat(articles, cardinalNumerals, ordinalNumerals, demonstrativePronouns, possessivePronouns, reflexivePronouns, personalPronounsNominative, personalPronounsAccusative, relativePronouns, quantifiers, indefinitePronouns, interrogativeProAdverbs, pronominalAdverbs, locativeAdverbs, otherAuxiliaries, otherAuxiliariesInfinitive, interrogativeAdjectives, copula, copulaInfinitive, prepositions, coordinatingConjunctions, correlativeConjunctions, subordinatingConjunctions, interviewVerbs, interviewVerbsInfinitive, transitionWords, additionalTransitionWords, intensifiers, delexicalizedVerbs, delexicalizedVerbsInfinitive, interjections, generalAdjectivesAdverbs, generalAdjectivesAdverbsPreceding, recipeWords, vagueNouns, miscellaneous, timeWords, titlesPreceding, titlesFollowing, personalPronounsStressed)
	};
};

var _transitionWords = require("./transitionWords.js");

var _transitionWords2 = _interopRequireDefault(_transitionWords);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const transitionWords = (0, _transitionWords2.default)().singleWords;

/**
 * Returns an object with exceptions for the prominent words researcher
 * @returns {Object} The object filled with exception arrays.
 */

const articles = ["le", "la", "les", "un", "une", "des", "aux", "du", "au", "d'un", "d'une", "l'un", "l'une"];

const cardinalNumerals = ["deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix", "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf", "vingt", "trente", "quarante", "cinquante", "soixante", "soixante-dix", "quatre-vingt", "quatre-vingt-dix", "septante", "huitante", "octante", "nonante", "cent", "mille", "million", "milliard"];

// 'premier' and 'premi??re' are not included because of their secondary meanings ('prime minister', '[movie] premiere')
const ordinalNumerals = ["second", "secondes", "deuxi??me", "deuxi??mes", "troisi??me", "troisi??mes", "quatri??me", "quatri??mes", "cinqui??me", "cinqui??mes", "sixi??me", "sixi??mes", "septi??me", "septi??mes", "huiti??me", "huiti??mes", "neuvi??me", "neuvi??mes", "dixi??me", "dixi??mes", "onzi??me", "onzi??mes", "douzi??me", "douzi??mes", "treizi??me", "treizi??mes", "quatorzi??me", "quatorzi??mes", "quinzi??me", "quinzi??mes", "seizi??me", "seizi??mes", "dix-septi??me", "dix-septi??mes", "dix-huiti??me", "dix-huiti??mes", "dix-neuvi??me", "dix-neuvi??mes", "vingti??me", "vingti??mes"];

const personalPronounsNominative = ["je", "tu", "il", "elle", "on", "nous", "vous", "ils", "elles", "qu'il", "qu'elle", "qu'ils", "qu'elles", "qu'on", "d'elle", "d'elles"];

const personalPronounsStressed = ["moi", "toi", "lui", "soi", "eux", "d'eux", "qu'eux"];

// Le, la, les are already included in the articles list.
const personalPronounsAccusative = ["me", "te"];

const demonstrativePronouns = ["celui", "celle", "ceux", "celles", "ce", "celui-ci", "celui-l??", "celle-ci", "celle-l??", "ceux-ci", "ceux-l??", "celles-ci", "celles-l??", "ceci", "cela", "??a", "cette", "cet", "ces"];

const possessivePronouns = ["mon", "ton", "son", "ma", "ta", "sa", "mes", "tes", "ses", "notre", "votre", "leur", "nos", "vos", "leurs"];

const quantifiers = ["beaucoup", "peu", "quelque", "quelques", "tous", "tout", "toute", "toutes", "plusieurs", "plein", "chaque", "suffisant", "suffisante", "suffisantes", "suffisants", "faible", "moins", "tant", "plus", "divers", "diverse", "diverses"];

// The remaining reflexive personal pronouns are already included in other pronoun lists.
const reflexivePronouns = ["se"];

const indefinitePronouns = ["aucun", "aucune", "autre", "autres", "d'autres", "certain", "certaine", "certaines", "certains", "chacun", "chacune", "m??me", "m??mes", "quelqu'un", "quelqu'une", "quelques'uns", "quelques'unes", "autrui", "nul", "personne", "quiconque", "rien", "d'aucunes", "d'aucuns", "nuls", "nules", "l'autre", "tel", "telle", "tels", "telles"];

const relativePronouns = ["qui", "que", "lequel", "laquelle", "auquel", "auxquels", "auxquelles", "duquel", "desquels", "desquelles", "dont", "o??", "quoi"];

const interrogativeProAdverbs = ["combien", "comment", "pourquoi", "d'o??"];

const interrogativeAdjectives = ["quel", "quels", "quelle"];

const pronominalAdverbs = ["y", "n'y"];

const locativeAdverbs = ["l??", "ici", "d'ici", "voici"];

// 'Vins' is not included because it also means 'wines'.
const otherAuxiliaries = ["a", "a-t-elle", "a-t-il", "a-t-on", "ai", "ai-je", "aie", "as", "as-tu", "aura", "aurai", "auraient", "aurais", "aurait", "auras", "aurez", "auriez", "aurons", "auront", "avaient", "avais", "avait", "avez", "avez-vous", "aviez", "avions", "avons", "avons-nous", "ayez", "ayons", "eu", "e??mes", "eurent", "eus", "eut", "e??tes", "j'ai", "j'aurai", "j'avais", "j'eus", "ont", "ont-elles", "ont-ils", "vais", "vas", "va", "allons", "allez", "vont", "vais-je", "vas-tu", "va-t-il", "va-t-elle", "va-t-on", "allons-nous", "allez-vous", "vont-elles", "vont-ils", "all??", "all??s", "j'allai", "allai", "allas", "alla", "all??mes", "all??tes", "all??rent", "j'allais", "allais", "allait", "allions", "alliez", "allaient", "j'irai", "iras", "ira", "irons", "irez", "iront", "j'aille", "aille", "ailles", "aillent", "j'allasse", "allasse", "allasses", "all??t", "allassions", "allassiez", "allassent", "j'irais", "irais", "irait", "irions", "iriez", "iraient", "allant", "viens", "vient", "venons", "venez", "viennent", "viens-je", "viens-de", "vient-il", "vient-elle", "vient-on", "venons-nous", "venez-vous", "viennent-elles", "viennent-ils", "vins", "vint", "v??nmes", "v??ntes", "vinrent", "venu", "venus", "venais", "venait", "venions", "veniez", "venaient", "viendrai", "viendras", "viendra", "viendrons", "viendrez", "viendront", "vienne", "viennes", "vinsse", "vinsses", "v??nt", "vinssions", "vinssiez", "vinssent", "viendrais", "viendrait", "viendrions", "viendriez", "viendraient", "venant", "dois", "doit", "devons", "devez", "doivent", "dois-je", "dois-tu", "doit-il", "doit-elle", "doit-on", "devons-nous", "devez-vous", "doivent-elles", "doivent-ils", "dus", "dut", "d??mes", "d??tes", "durent", "d??", "devais", "devait", "devions", "deviez", "devaient", "devrai", "devras", "devra", "devrons", "devrez", "devront", "doive", "doives", "dusse", "dusses", "d??t", "dussions", "dussiez", "dussent", "devrais", "devrait", "devrions", "devriez", "devraient", "peux", "peut", "pouvons", "pouvez", "peuvent", "peux-je", "peux-tu", "peut-il", "peut-elle", "peut-on", "pouvons-nous", "pouvez-vous", "peuvent-ils", "peuvent-elles", "pus", "put", "p??mes", "p??tes", "purent", "pu", "pouvais", "pouvait", "pouvions", "pouviez", "pouvaient", "pourrai", "pourras", "pourra", "pourrons", "pourrez", "pourront", "puisse", "puisses", "puissions", "puissiez", "puissent", "pusse", "pusses", "p??t", "pussions", "pussiez", "pussent", "pourrais", "pourrait", "pourrions", "pourriez", "pourraient", "pouvant", "semble", "sembles", "semblons", "semblez", "semblent", "semble-je", "sembles-il", "sembles-elle", "sembles-on", "semblons-nous", "semblez-vous", "semblent-ils", "semblent-elles", "semblai", "semblas", "sembla", "sembl??mes", "sembl??tes", "sembl??rent", "semblais", "semblait", "semblions", "sembliez", "semblaient", "semblerai", "sembleras", "semblera", "semblerons", "semblerez", "sembleront", "sembl??", "semblasse", "semblasses", "sembl??t", "semblassions", "semblassiez", "semblassent", "semblerais", "semblerait", "semblerions", "sembleriez", "sembleraient", "parais", "para??t", "ait", "paraissons", "paraissez", "paraissent", "parais-je", "parais-tu", "para??t-il", "para??t-elle", "para??t-on", "ait-il", "ait-elle", "ait-on", "paraissons-nous", "paraissez-vous", "paraissent-ils", "paraissent-elles", "parus", "parut", "par??mes", "par??tes", "parurent", "paraissais", "paraissait", "paraissions", "paraissiez", "paraissaient", "para??trai", "para??tras", "para??tra", "para??trons", "para??trez", "para??tront", "paru", "paraisse", "paraisses", "parusse", "parusses", "par??t", "parussions", "parussiez", "parussent", "para??trais", "para??trait", "para??trions", "para??triez", "para??traient", "paraitrais", "paraitrait", "paraitrions", "paraitriez", "paraitraient", "paraissant", "mets", "met", "mettons", "mettez", "mettent", "mets-je", "mets-tu", "met-il", "met-elle", "met-on", "mettons-nous", "mettez-vous", "mettent-ils", "mettent-elles", "mis", "mit", "m??mes", "m??tes", "mirent", "mettais", "mettait", "mettions", "mettiez", "mettaient", "mettrai", "mettras", "mettra", "mettrons", "mettrez", "mettront", "mette", "mettes", "misse", "misses", "m??t", "missions", "missiez", "missent", "mettrais", "mettrait", "mettrions", "mettriez", "mettraient", "mettant", "finis", "finit", "finissons", "finissez", "finissent", "finis-je", "finis-tu", "finit-il", "finit-elle", "finit-on", "finissons-nous", "finissez-vous", "finissent-ils", "finissent-elles", "fin??mes", "fin??tes", "finirent", "finissais", "finissait", "finissions", "finissiez", "finissaient", "finirai", "finiras", "finira", "finirons", "finirez", "finiront", "fini", "finisse", "finisses", "fin??t", "finirais", "finirait", "finirions", "finiriez", "finiraient", "finissant", "n'a", "n'ai", "n'aie", "n'as", "n'aura", "n'aurai", "n'auraient", "n'aurais", "n'aurait", "n'auras", "n'aurez", "n'auriez", "n'aurons", "n'auront", "n'avaient", "n'avais", "n'avait", "n'avez", "n'avez-vous", "n'aviez", "n'avions", "n'avons", "n'avons-nous", "n'ayez", "n'ayons", "n'ont", "n'ont-elles", "n'ont-ils", "n'allons", "n'allez", "n'allais", "n'allait", "n'allions", "n'alliez", "n'allaient", "n'iras", "n'ira", "n'irons", "n'irez", "n'iront", "qu'a"];

const otherAuxiliariesInfinitive = ["avoir", "aller", "venir", "devoir", "pouvoir", "sembler", "para??tre", "paraitre", "mettre", "finir", "d'avoir", "d'aller", "n'avoir", "l'avoir"];

const copula = ["suis", "es", "est", "est-ce", "n'est", "sommes", "??tes", "sont", "suis-je", "es-tu", "est-il", "est-elle", "est-on", "sommes-nous", "??tes-vous", "sont-ils", "sont-elles", "??tais", "??tait", "??tions", "??tiez", "??taient", "serai", "seras", "sera", "serons", "serez", "seront", "serais", "serait", "serions", "seriez", "seraient", "sois", "soit", "soyons", "soyez", "soient", "??t??", "n'es", "n'est-ce", "n'??tes", "n'??tait", "n'??tais", "n'??tions", "n'??tiez", "n'??taient", "qu'est"];

const copulaInfinitive = ["??tre", "d'??tre"];

/*
???Except??' not filtered because might also be participle of 'excepter', 'concernant' not filtered because might also be present participle
of 'concerner'.
Not filtered because of primary meaning: 'gr??ce ??' ('grace'), 'en face' ('face'), 'en dehors' ('outside'), '?? c??t??' ('side'),
'?? droite' ('right'), '?? gauche' ('left'). 'voici' already included in the locative pronoun list.
'hors' for 'hors de', 'quant' for 'quant ??'. ???travers??? is part of '?? travers.'
 */

const prepositions = ["??", "apr??s", "d'apr??s", "au-del??", "au-dessous", "au-dessus", "avant", "avec", "concernant", "chez", "contre", "dans", "de", "depuis", "derri??re", "d??s", "devant", "durant", "en", "entre", "envers", "environ", "hormis", "hors", "jusque", "jusqu'??", "jusqu'au", "jusqu'aux", "loin", "moyennant", "outre", "par", "parmi", "pendant", "pour", "pr??s", "quant", "sans", "sous", "sur", "travers", "vers", "voil??"];

const coordinatingConjunctions = ["et", "ni", "or", "ou"];

/*
Et...et, ou...ou, ni...ni ??? in their simple forms already in other lists. 'd'une', 'd'autre' are part of 'd'une part???d'autre part'.
'sinon' is part of 'sinon???du moins'.
*/

const correlativeConjunctions = ["non", "pas", "seulement", "sit??t", "aussit??t", "d'autre"];

/*
Many subordinating conjunctions are already included in the prepositions list, transition words list or pronominal adverbs list.
'autant', 'd'autant', 'd'ici', 'tandis' part of the complex form with 'que', 'lors' as a part of 'lors m??me que',
'parce' as a part of 'parce que'
 */

const subordinatingConjunctions = ["afin", "autant", "comme", "d'autant", "d'ici", "quand", "lors", "parce", "si", "tandis"];

/*
 These verbs are frequently used in interviews to indicate questions and answers.
'Dire' ('to say'), 'demander' ('to ask'), 'penser' ('to think')??? 16 forms; more specific verbs ??? 4 forms
'affirmer', 'ajouter' ('to add'), 'analyser', 'avancer', '??crire' ('to write'), 'indiquer', 'poursuivre' ('to pursue'), 'pr??ciser', 'r??sumer',
 'souvenir' ('to remember'), 't??moigner' ('to witness') ??? only VS forms (due to their more general nature)
 */

const interviewVerbs = ["dit", "disent", "dit-il", "dit-elle", "disent-ils", "disent-elles", "disait", "disait-il", "disait-elle", "disaient-ils", "disaient-elles", "dirent", "demande", "demandent", "demande-t-il", "demande-t-elle", "demandent-ils", "demandent-elles", "demandait", "demandaient", "demandait-il", "demandait-elle", "demandaient-ils", "demandaient-elles", "demanda", "demanda-t-il", "demanda-t-elle", "demand??", "pense", "pensent", "pense-t-il", "pense-t-elle", "pensent-ils", "pensent-elles", "pensait", "pensaient", "pensait-il", "pensait-elle", "pensaient-ils", "pensaient-elles", "pensa", "pensa-t-il", "pensa-t-elle", "pens??", "affirme", "affirme-t-il", "affirme-t-elle", "affirm??", "avoue", "avoue-t-il", "avoue-t-elle", "avou??", "conc??de", "conc??de-t-il", "conc??de-t-elle", "conc??d??", "confie", "confie-t-il", "confie-t-elle", "confi??", "continue", "continue-t-il", "continue-t-elle", "continu??", "d??clame", "d??clame-t-il", "d??clame-t-elle", "d??clam??", "d??clare", "d??clare-t-il", "d??clare-t-elle", "d??clar??", "d??plore", "d??plore-t-il", "d??plore-t-elle", "d??plor??", "explique", "explique-t-il", "explique-t-elle", "expliqu??", "lance", "lance-t-il", "lance-t-elle", "lanc??", "narre", "narre-t-il", "narre-t-elle", "narr??", "raconte", "raconte-t-il", "raconte-t-elle", "racont??", "rappelle", "rappelle-t-il", "rappelle-t-elle", "rappel??", "r??agit", "r??agit-il", "r??agit-elle", "r??agi", "r??pond", "r??pond-il", "r??pond-elle", "r??pondu", "r??torque", "r??torque-t-il", "r??torque-t-elle", "r??torqu??", "souligne", "souligne-t-il", "souligne-t-elle", "soulign??", "affirme-t-il", "affirme-t-elle", "ajoute-t-il", "ajoute-t-elle", "analyse-t-il", "analyse-t-elle", "avance-t-il", "avance-t-elle", "??crit-il", "??crit-elle", "indique-t-il", "indique-t-elle", "poursuit-il", "poursuit-elle", "pr??cise-t-il", "pr??cise-t-elle", "r??sume-t-il", "r??sume-t-elle", "souvient-il", "souvient-elle", "t??moigne-t-il", "t??moigne-t-elle"];

const interviewVerbsInfinitive = ["dire", "penser", "demander", "conc??der", "continuer", "confier", "d??clamer", "d??clarer", "d??plorer", "expliquer", "lancer", "narrer", "raconter", "rappeler", "r??agir", "r??pondre", "r??torquer", "souligner", "affirmer", "ajouter", "analyser", "avancer", "??crire", "indiquer", "poursuivre", "pr??ciser", "r??sumer", "t??moigner"];

// These transition words were not included in the list for the transition word assessment for various reasons.
const additionalTransitionWords = ["encore", "??ternellement", "imm??diatement", "compris", "comprenant", "inclus", "naturellement", "particuli??rement", "notablement", "actuellement", "maintenant", "ordinairement", "g??n??ralement", "habituellement", "d'habitude", "vraiment", "finalement", "uniquement", "peut-??tre", "initialement", "d??j??", "c.-??-d", "souvent", "fr??quemment", "r??guli??rement", "simplement", "??ventuellement", "quelquefois", "parfois", "probable", "plausible", "jamais", "toujours", "incidemment", "accidentellement", "r??cemment", "derni??rement", "relativement", "clairement", "??videmment", "apparemment", "pourvu"];

const intensifiers = ["assez", "trop", "tellement", "presque", "tr??s", "absolument", "extr??mement", "quasi", "quasiment", "fort"];

// These verbs convey little meaning.
const delexicalizedVerbs = ["fais", "fait", "faisons", "faites", "font", "fais-je", "fait-il", "fait-elle", "fait-on", "faisons-nous", "faites-vous", "font-ils", "font-elles", "fis", "fit", "f??mes", "f??tes", "firent", "faisais", "faisait", "faisions", "faisiez", "faisaient", "ferai", "feras", "fera", "ferons", "ferez", "feront", "veux", "veut", "voulons", "voulez", "veulent", "voulus", "voulut", "voul??mes", "voul??tes", "voulurent", "voulais", "voulait", "voulions", "vouliez", "voulaient", "voudrai", "voudras", "voudra", "voudrons", "voudrez", "voudront", "voulu", "veux-je", "veux-tu", "veut-il", "veut-elle", "veut-on", "voulons-nous", "voulez-vous", "veulent-ils", "veulent-elles", "voudrais", "voudrait", "voudrions", "voudriez", "voudraient", "voulant"];

const delexicalizedVerbsInfinitive = ["faire", "vouloir"];

/* These adjectives and adverbs are so general, they should never be suggested as a (single) keyword.
 Keyword combinations containing these adjectives/adverbs are fine.
 'Dernier' is also included in generalAdjectivesAdverbsPreceding because it can be used both before and after a noun,
 and it should be filtered out either way.
 */
const generalAdjectivesAdverbs = ["ant??rieur", "ant??rieures", "ant??rieurs", "ant??rieure", "pr??c??dent", "pr??c??dents", "pr??c??dente", "pr??c??dentes", "facile", "faciles", "simple", "simples", "vite", "vites", "vitesse", "vitesses", "difficile", "difficiles", "propre", "propres", "long", "longe", "longs", "longes", "longue", "longues", "bas", "basse", "basses", "ordinaire", "ordinaires", "bref", "brefs", "br??ve", "br??ves", "s??r", "s??rs", "s??re", "s??res", "sure", "sures", "surs", "habituel", "habituels", "habituelle", "habituelles", "soi-disant", "surtout", "r??cent", "r??cents", "r??cente", "r??centes", "total", "totaux", "totale", "totales", "complet", "complets", "compl??te", "compl??tes", "possible", "possibles", "commun??ment", "constamment", "facilement", "continuellement", "directement", "l??g??rement", "dernier", "derniers", "derni??re", "derni??res", "diff??rent", "diff??rents", "diff??rente", "diff??rentes", "similaire", "similaires", "pareil", "pareils", "pareille", "pareilles", "largement", "mal", "super", "bien", "pire", "pires", "suivants", "suivante", "suivantes", "prochain", "prochaine", "prochains", "prochaines", "proche", "proches", "fur"];

/*
 'Dernier' is also included in generalAdjectivesAdverbs because it can be used both before and after a noun,
 and it should be filtered out either way.
 */
const generalAdjectivesAdverbsPreceding = ["nouveau", "nouvel", "nouvelle", "nouveaux", "nouvelles", "vieux", "vieil", "vieille", "vieilles", "beau", "bel", "belle", "belles", "bon", "bons", "bonne", "bonnes", "grand", "grande", "grands", "grandes", "haut", "hauts", "haute", "hautes", "petit", "petite", "petits", "petites", "meilleur", "meilleurs", "meilleure", "meilleures", "joli", "jolis", "jolie", "jolies", "gros", "grosse", "grosses", "mauvais", "mauvaise", "mauvaises", "dernier", "derniers", "derni??re", "derni??res"];

const interjections = ["ah", "ha", "oh", "ho", "bis", "plouf", "vlan", "ciel", "pouf", "paf", "crac", "hurrah", "allo", "stop", "bravo", "??", "eh", "h??", "a??e", "oef", "ahi", "fi", "zest", "hem", "hol??", "chut"];

// These words and abbreviations are frequently used in recipes in lists of ingredients.
const recipeWords = ["mg", "g", "kg", "ml", "dl", "cl", "l", "grammes", "gram", "once", "onces", "oz", "lbs", "c??c", "cc", "c??d", "c??s", "c??t", "cd", "cs", "ct"];

const timeWords = ["minute", "minutes", "heure", "heures", "journ??e", "journ??es", "semaine", "semaines", "mois", "ann??e", "ann??es", "aujourd'hui", "demain", "hier", "apr??s-demain", "avant-hier"];

const vagueNouns = ["chose", "choses", "fa??on", "fa??ons", "pi??ce", "pi??ces", "truc", "trucs", "fois", "cas", "aspect", "aspects", "objet", "objets", "id??e", "id??es", "th??me", "th??mes", "sujet", "sujets", "personnes", "mani??re", "mani??res", "sorte", "sortes"];

const miscellaneous = ["ne", "oui", "d'accord", "amen", "euro", "euros", "etc"];

const titlesPreceding = ["mme", "mmes", "mlle", "mlles", "mm", "dr", "pr"];

const titlesFollowing = ["jr", "sr"];

/**
 * Returns a list of function words for French.
 *
 * @returns {Object} French function words.
 */
//# sourceMappingURL=functionWords.js.map
