"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return {
		// These word categories are filtered at the ending of word combinations.
		filteredAtEnding: [].concat(ordinalNumerals, generalAdjectives, generalAdverbs, auxiliariesInfinitive, delexicalizedVerbsInfinitive, copulaInfinitive, interviewVerbsInfinitive),

		// These word categories are filtered at the beginning and ending of word combinations.
		filteredAtBeginningAndEnding: [].concat(articles, prepositions, coordinatingConjunctions, demonstrativePronouns, intensifiers, quantifiers, possessivePronouns),

		// These word categories are filtered everywhere within word combinations.
		filteredAnywhere: [].concat(transitionWords, personalPronounsNominative, personalPronounsObjective, reflexivePronouns, relativePronouns, interjections, cardinalNumerals, copula, auxiliaries, interviewVerbs, delexicalizedVerbs, indefinitePronouns, otherPronouns, subordinatingConjunctions, interrogativePronouns, interrogativeProAdverbs, miscellaneous, pronominalAdverbs, recipeWords, timeWords, titles, vagueNouns),

		// This export contains all of the above words.
		all: [].concat(articles, cardinalNumerals, ordinalNumerals, personalPronounsNominative, personalPronounsObjective, reflexivePronouns, possessivePronouns, demonstrativePronouns, relativePronouns, interrogativePronouns, interrogativeProAdverbs, indefinitePronouns, otherPronouns, quantifiers, pronominalAdverbs, auxiliaries, auxiliariesInfinitive, copula, copulaInfinitive, delexicalizedVerbs, delexicalizedVerbsInfinitive, interviewVerbs, interviewVerbsInfinitive, generalAdjectives, generalAdverbs, vagueNouns, prepositions, intensifiers, coordinatingConjunctions, subordinatingConjunctions, timeWords, titles, interjections, recipeWords, miscellaneous)
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

const articles = ["en", "ett", "det", "den", "de"];

const cardinalNumerals = ["tv??", "tre", "fyra", "fem", "sex", "sju", "??tta", "nio", "tio", "tiotals", "elva", "tolv", "tretton", "fjorton", "femton", "sexton", "sjutton", "arton", "aderton", "nitton", "tjugo", "hundra", "hundratals", "tusen", "tusentals", "miljon", "miljoner", "miljontals", "miljard", "miljarder"];

const ordinalNumerals = ["f??rsta", "andra", "tredje", "fj??rde", "femte", "sj??tte", "sjunde", "??ttonde", "nionde", "tionde", "elfte", "tolfte", "trettonde", "fjortonde", "femtonde", "sextonde", "sjuttonde", "artonde", "nittonde", "tjugonde"];

const personalPronounsNominative = ["jag", "du", "han", "hon", "hen", "vi", "ni"];

const personalPronounsObjective = ["mig", "dig", "honom", "henne", "oss", "er", "dem", "henom", "eder"];

const reflexivePronouns = ["sig", "sin", "sitt", "sina"];

const possessivePronouns = ["min", "mitt", "mina", "din", "ditt", "dina", "hans", "hennes", "dess", "ens", "v??r", "v??rt", "v??ra", "er", "ert", "era", "ers", "deras", "hens"];

const demonstrativePronouns = ["denne", "denna", "detta", "dessa", "h??r", "d??r", "varifr??n", "d??rav", "hit", "dit", "vart", "h??dan", "d??dan", "vadan", "h??n", "sen"];

const relativePronouns = ["som", "vilken", "vilket", "vilka", "vars", "d??"];

const interrogativePronouns = ["vem", "vems", "vad"];

const interrogativeProAdverbs = ["hur", "varf??r"];

const indefinitePronouns = ["n??gon", "n??got", "n??gra", "n??n", "n??t", "ingen", "inget", "inga", "annan", "annat", "andra", "n??gonstans", "ingenstans", "annastans", "??verallt", "n??gonst??des", "ingenst??des", "annorst??des", "allest??des", "n??gorlunda", "ingalunda", "annorlunda", "n??gonting", "ingenting", "allting", "all", "allt", "alla", "somlig", "somligt", "somliga", "m??ngen", "m??nget", "man", "en", "ens"];

const otherPronouns = ["varandra", "varsin", "varsitt", "envar", "varannan", "vartannat"];

const quantifiers = ["andra", "??tskilliga", "b??dadera", "b??de", "f??", "f??rre", "f??talig", "f??taliga", "flera", "flesta", "f??ga", "ganska", "icke", "inte", "lite", "litet", "m??nga", "mer", "mera", "mest", "mindre", "minst", "mycket", "nog", "ollika", "tillr??ckligt", "vardera", "varje", "viss", "visst", "vissa", "visse"];

const pronominalAdverbs = ["bak??t", "bakifr??n", "bortifr??n", "d??r??t", "d??rav", "d??rh??n", "d??ri", "d??rifr??n", "d??rom", "d??rp??", "d??rtill", "d??ruti", "d??rvid", "dit??t", "dith??n", "dittills", "efter??t", "f??rrut", "fram??t", "h??denefter", "h??r??t", "h??rav", "h??refter", "h??remot", "h??ri", "h??rifr??n", "h??rmed", "h??rom", "h??rp??", "h??rtill", "h??ruti", "h??rvid", "hit??t", "hittills", "ini", "inifr??n", "intill", "inuti", "nedanf??r", "ned??t", "nedf??r", "nedtill", "upp??t", "uppf??r", "upptill", "varav", "varefter", "varemot", "varf??r", "varfr??n", "vari", "varifr??n", "varmed", "varom", "varp??", "varth??n", "vartill", "varur", "varvid"];

const auxiliaries = ["beh??vande", "beh??ver", "beh??vt", "beh??vde", "b??r", "b??rande", "borde", "bort", "brukade", "brukande", "brukar", "brukat", "f??ende", "f??r", "f??tt", "fick", "hade", "haft", "har", "hava", "havande", "kan", "kunde", "kunnande", "kunnat", "m??dde", "m??ende", "m??r", "m??ste", "m??tt", "m??tte", "skall", "skulle", "varande", "velat", "viljande", "vill", "ville"];

const auxiliariesInfinitive = ["beh??va", "b??ra", "bruka", "f??", "ha", "kunna", "m??", "ska", "vilja"];

const copula = ["??r", "var", "varit", "vore", "blivit", "blivande", "blir", "bliver", "blev", "blitt", "funnits", "finnande", "finns", "fanns", "befunnit", "befinnande", "befinner", "befann", "tyckts", "tyckande", "tycks", "tycktes"];

const copulaInfinitive = ["vara", "bli", "finnas", "befinna", "tyckas"];

const delexicalizedVerbs = ["g??ende", "g??llande", "g??llde", "g??ller", "g??llt", "g??r", "g??tt", "gav", "ger", "gett", "gick", "givande", "giver", "gjorde", "gjort", "g??r", "g??rande", "kom", "kommande", "kommer", "kommit", "ligger", "ligges", "l??", "ligget", "liggande", "st??ller", "st??llde", "st??llt", "st??ll", "st??llande", "st??lld", "st??llas", "st??lls", "st??lles", "st??lldes", "st??llts", "tagande", "tager", "tagit", "tar", "tog", "utg??r", "utgjorde", "utgjort", "utg??rande", "utgjord", "utg??ras", "utg??rs", "utg??res", "utgjordes", "utgjorts"];

const delexicalizedVerbsInfinitive = ["g??", "g??lla", "ge", "g??ra", "komma", "ligga", "st??lla", "ta", "utg??ra"];

const interviewVerbs = ["angav", "anger", "angett", "angiver", "angivit", "ber??ttade", "ber??ttar", "ber??ttat", "f??reslagit", "f??resl??r", "f??resl??tt", "f??reslog", "f??rklarade", "f??rklarar", "f??rklarat", "f??rst??r", "f??rst??tt", "f??rstod", "fr??gade", "fr??gar", "fr??gat", "p??st??r", "p??st??tt", "p??stod", "sa", "sade", "s??ger", "sagt", "svarade", "svarar", "svarat", "talade", "talar", "talat", "t??nker", "t??nkt", "t??nkte"];

const interviewVerbsInfinitive = ["ange", "ber??tta", "f??resl??", "f??rklara", "f??rst??", "fr??ga", "p??st??", "s??ga", "svara", "tala", "t??nka"];

const generalAdjectives = ["??ldre", "??ldst", "??ldsta", "??ldste", "b??st", "b??ttre", "d??lig", "d??liga", "d??lige", "d??ligt", "egen", "eget", "egna", "egne", "enkel", "enkelt", "enkla", "enklare", "enklast", "enklaste", "enkle", "fel", "gamla", "gamle", "gammal", "gammalt", "god", "goda", "godare", "godast", "godaste", "gode", "gott", "grundl??ggande", "hel", "hela", "helare", "helast", "helaste", "hele", "helt", "kort", "korta", "kortare", "kortast", "kortaste", "korte", "l??ng", "l??nga", "l??nge", "l??ngre", "l??ngsam", "l??ngsamma", "l??ngsammare", "l??ngsammast", "l??ngsammaste", "l??ngsamme", "l??ngsamt", "l??ngst", "l??ngsta", "l??ngste", "l??ngt", "liknande", "lilla", "lille", "liten", "litet", "mindre", "minst", "minsta", "minste", "m??jlig", "m??jliga", "m??jligare", "m??jligast", "m??jligaste", "m??jlige", "m??jligt", "n??dv??ndig", "n??dv??ndiga", "n??dv??ndigare", "n??dv??ndigast", "n??dv??ndigaste", "n??dv??ndige", "n??dv??ndigt", "normal", "normala", "normalare", "normalast", "normalaste", "normale", "normalt", "ny", "nya", "nyare", "nyast", "nyaste", "nye", "nytt", "olikt", "olika", "olike", "samma", "s??mre", "s??mst", "s??msta", "s??mste", "s??rskild", "s??rskilda", "s??rskilde", "s??rskilt", "sen", "sena", "senare", "senast", "senaste", "sene", "sent", "sm??", "snabb", "snabba", "snabbare", "snabbast", "snabbaste", "snabbe", "snabbt", "stor", "stora", "store", "st??rre", "st??rst", "st??rsta", "st??rste", "stort", "sv??r", "sv??ra", "sv??rare", "sv??rast", "sv??raste", "sv??re", "sv??rt", "tidig", "tidiga", "tidigare", "tidigast", "tidigaste", "tidige", "tidigt", "trevlig", "trevliga", "trevligare", "trevligast", "trevligaste", "trevlige", "trevligt", "ung", "unga", "unge", "ungt", "uppenbar", "uppenbara", "uppenbare", "uppenbart", "v??rre", "v??rst", "v??rsta", "v??rste", "verklig", "viktig", "viktiga", "viktigare", "viktigast", "viktigaste", "viktige", "viktigt", "yngre", "yngst", "yngsta", "yngste"];

const generalAdverbs = ["aldrig", "allm??nt", "alltid", "delvis", "direkt", "huvudsakligen", "ibland", "l??ngsamt", "mestadels", "n??stan", "ofta", "relativt", "riktigt", "riktigare", "riktigast", "s??llan", "snabbt", "st??ndigt", "v??l", "vanligt"];

const vagueNouns = ["antal", "antalet", "antals", "antalets", "antalen", "antalens", "bit", "bitar", "bitarna", "bitarnas", "bitars", "biten", "bitens", "bits", "del", "delar", "delarna", "delarnas", "delars", "delen", "delens", "dels", "detalj", "detaljen", "detaljens", "detaljer", "detaljerna", "detaljernas", "detaljers", "detaljs", "exempel", "exempels", "exemplet", "exemplets", "exemplen", "exemplens", "person", "personen", "personens", "personer", "personerna", "personernas", "personers", "persons", "procent", "punkt", "punkten", "punktens", "punkter", "punkterna", "punkternas", "punkters", "sak", "saken", "sakens", "saker", "sakerna", "sakernas", "sakers", "saks", "s??tt", "s??tten", "s??ttens", "s??ttet", "s??ttets", "s??tts", "skillnad", "skillnaden", "skillnadens", "skillnader", "skillnaderna", "skillnadernas", "skillnaders", "skillnads", "sort", "sorten", "sortens", "sorter", "sorterna", "sorternas", "sorters", "sorts", "tema", "teman", "temanas", "temans", "temas", "temat", "temats", "tid", "tiden", "tidens", "tider", "tiderna", "tidernas", "tiders", "tids", "ting", "tingen", "tingens", "tinget", "tingets", "tings"];

const prepositions = ["??t", "av", "bakom", "bland", "bortom", "bredvid", "cirka", "efter", "emellan", "emot", "enligt", "f??r", "f??re", "f??rutom", "framf??r", "fr??n", "genom", "hos", "i", "igenom", "inom", "inuti", "l??ngs", "med", "mellan", "mittemot", "mot", "n??ra", "n??sta", "nedan", "ner", "olik", "om", "omkring", "ovanf??r", "ovanp??", "??ver", "p??", "runt", "sedan", "som", "till", "tv??rs", "tv??rs??ver", "under", "upp", "ur", "ut", "utan", "utanf??r", "utom", "via", "vid"];

const intensifiers = ["absolut", "alldeles", "allra", "bra", "fullst??ndigt", "fullt", "ganska", "helt", "illa", "j??tte", "rysligt", "s??", "storligen", "totalt", "v??ldigt", "ytterst"];

const coordinatingConjunctions = ["eller", "och"];

const subordinatingConjunctions = ["att"];

const timeWords = ["??r", "??rens", "??ret", "??rets", "??rs", "??rtal", "??rtalen", "??rtalens", "??rtaconst", "??rtaconsts", "??rtals", "dag", "dagar", "dagarna", "dagarnas", "dagars", "dagen", "dagens", "dags", "g??r", "idag", "m??nad", "m??naden", "m??nadens", "m??nader", "m??naderna", "m??nadernas", "m??naders", "m??nads", "minut", "minuten", "minutens", "minuter", "minuterna", "minuternas", "minuters", "minuts", "morgon", "sekund", "sekunden", "sekundens", "sekunder", "sekunderna", "sekundernas", "sekunders", "sekunds", "timmar", "timmarna", "timmarnas", "timmars", "timme", "timmen", "timmens", "timmes", "vecka", "veckan", "veckans", "veckas", "veckor", "veckorna", "veckornas", "veckors"];

const titles = ["prof", "doc", "dr"];

const interjections = ["??", "aj", "aja", "fy", "grattis", "hej", "hu", "jas??", "javisst", "o", "oj", "ojd??", "prosit", "puh", "sk??l", "usch"];

const recipeWords = ["c", "cl", "cm", "dl", "g", "kg", "km", "krm", "l", "m", "mg", "ml", "mm", "msk", "pkt", "st", "tsk"];

const miscellaneous = ["f??rl??t", "ja", "jo", "ju", "m.m", "nej", "ok", "okej", "tack"];

/**
 * Returns function words for Swedish.
 *
 * @returns {Object} Swedish function words.
 */
//# sourceMappingURL=functionWords.js.map
