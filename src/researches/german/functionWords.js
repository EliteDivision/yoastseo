"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return {
		// These word categories are filtered at the beginning of word combinations.
		filteredAtBeginning: [].concat(otherAuxiliariesInfinitive, passiveAuxiliariesInfinitive, delexicalizedVerbsInfinitive, copulaInfinitive, interviewVerbsInfinitive),

		// These word categories are filtered at the ending of word combinations.
		filteredAtEnding: [].concat(ordinalNumerals, generalAdjectivesAdverbs),

		// These word categories are filtered at the beginning and ending of word combinations.
		filteredAtBeginningAndEnding: [].concat(articles, prepositions, coordinatingConjunctions, demonstrativePronouns, intensifiers, quantifiers),

		// These word categories are filtered everywhere within word combinations.
		filteredAnywhere: [].concat(transitionWords, adverbialGenitives, personalPronounsNominative, personalPronounsAccusative, personalPronounsDative, reflexivePronouns, interjections, cardinalNumerals, copula, interviewVerbs, otherAuxiliaries, filteredPassiveAuxiliaries, delexicalizedVerbs, indefinitePronouns, correlativeConjunctions, subordinatingConjunctions, interrogativeProAdverbs, locativeAdverbs, miscellaneous, pronominalAdverbs, recipeWords, timeWords, vagueNouns, reciprocalPronouns, possessivePronouns),

		// This export contains all of the above words.
		all: [].concat(articles, cardinalNumerals, ordinalNumerals, demonstrativePronouns, possessivePronouns, reflexivePronouns, reciprocalPronouns, personalPronounsNominative, personalPronounsAccusative, quantifiers, indefinitePronouns, interrogativeProAdverbs, pronominalAdverbs, locativeAdverbs, adverbialGenitives, filteredPassiveAuxiliaries, passiveAuxiliariesInfinitive, otherAuxiliaries, otherAuxiliariesInfinitive, copula, copulaInfinitive, prepositions, coordinatingConjunctions, correlativeConjunctions, subordinatingConjunctions, interviewVerbs, interviewVerbsInfinitive, transitionWords, additionalTransitionWords, intensifiers, delexicalizedVerbs, delexicalizedVerbsInfinitive, interjections, generalAdjectivesAdverbs, recipeWords, vagueNouns, miscellaneous, timeWords, titlesPreceding, titlesFollowing)
	};
};

var _auxiliaries = require("./passiveVoice/auxiliaries.js");

var _auxiliaries2 = _interopRequireDefault(_auxiliaries);

var _transitionWords = require("./transitionWords.js");

var _transitionWords2 = _interopRequireDefault(_transitionWords);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const filteredPassiveAuxiliaries = (0, _auxiliaries2.default)().filteredAuxiliaries;

const passiveAuxiliariesInfinitive = (0, _auxiliaries2.default)().infinitiveAuxiliaries;

const transitionWords = (0, _transitionWords2.default)().singleWords;

/**
 * Returns an object with exceptions for the prominent words researcher
 * @returns {Object} The object filled with exception arrays.
 */

const articles = ["das", "dem", "den", "der", "des", "die", "ein", "eine", "einem", "einen", "einer", "eines"];

const cardinalNumerals = ["eins", "zwei", "drei", "vier", "f??nf", "sechs", "sieben", "acht", "neun", "zehn", "elf", "zw??lf", "zwoelf", "dreizehn", "vierzehn", "f??nfzehn", "fuenfzehn", "sechzehn", "siebzehn", "achtzehn", "neunzehn", "zwanzig", "hundert", "einhundert", "zweihundert", "dreihundert", "vierhundert", "f??nfhundert", "fuenfhundert", "sechshundert", "siebenhundert", "achthundert", "neunhundert", "tausend", "million", "milliarde", "billion", "billiarde"];

const ordinalNumerals = ["erste", "erster", "ersten", "erstem", "erstes", "zweite", "zweites", "zweiter", "zweitem", "zweiten", "dritte", "dritter", "drittes", "dritten", "drittem", "vierter", "vierten", "viertem", "viertes", "vierte", "f??nfte", "f??nfter", "f??nftes", "f??nften", "f??nftem", "fuenfte", "fuenfter", "fuenftem", "fuenften", "fuenftes", "sechste", "sechster", "sechstes", "sechsten", "sechstem", "siebte", "siebter", "siebten", "siebtem", "siebtes", "achte", "achter", "achten", "achtem", "achtes", "neunte", "neunter", "neuntes", "neunten", "neuntem", "zehnte", "zehnter", "zehnten", "zehntem", "zehntes", "elfte", "elfter", "elftes", "elften", "elftem", "zw??lfte", "zw??lfter", "zw??lften", "zw??lftem", "zw??lftes", "zwoelfte", "zwoelfter", "zwoelften", "zwoelftem", "zwoelftes", "dreizehnte", "dreizehnter", "dreizehntes", "dreizehnten", "dreizehntem", "vierzehnte", "vierzehnter", "vierzehntes", "vierzehnten", "vierzehntem", "f??nfzehnte", "f??nfzehnten", "f??nfzehntem", "f??nfzehnter", "f??nfzehntes", "fuenfzehnte", "fuenfzehnten", "fuenfzehntem", "fuenfzehnter", "fuenfzehntes", "sechzehnte", "sechzehnter", "sechzehnten", "sechzehntes", "sechzehntem", "siebzehnte", "siebzehnter", "siebzehntes", "siebzehntem", "siebzehnten", "achtzehnter", "achtzehnten", "achtzehntem", "achtzehntes", "achtzehnte", "nehnzehnte", "nehnzehnter", "nehnzehntem", "nehnzehnten", "nehnzehntes", "zwanzigste", "zwanzigster", "zwanzigstem", "zwanzigsten", "zwanzigstes"];

const personalPronounsNominative = ["ich", "du", "er", "sie", "es", "wir", "ihr"];

const personalPronounsAccusative = ["mich", "dich", "ihn", "uns", "euch"];

const personalPronounsDative = ["mir", "dir", "ihm", "ihnen"];

const demonstrativePronouns = ["denen", "deren", "derer", "dessen", "diese", "diesem", "diesen", "dieser", "dieses", "jene", "jenem", "jenen", "jener", "jenes", "welch", "welcher", "welches", "derjenige", "desjenigen", "demjenigen", "denjenigen", "diejenige", "derjenigen", "dasjenige", "diejenigen"];

const possessivePronouns = ["mein", "meine", "meinem", "meiner", "meines", "meinen", "dein", "deine", "deinem", "deiner", "deines", "deinen", "sein", "seine", "seinem", "seiner", "seines", "ihre", "ihrem", "ihren", "ihrer", "ihres", "unser", "unsere", "unserem", "unseren", "unserer", "unseres", "euer", "eure", "eurem", "euren", "eurer", "eures", "einanders"];

const quantifiers = ["manche", "manch", "viele", "viel", "vieler", "vielen", "vielem", "all", "alle", "aller", "alles", "allen", "allem", "allerlei", "solcherlei", "einige", "etliche", "wenige", "weniger", "wenigen", "wenigem", "weniges", "wenig", "wenigerer", "wenigeren", "wenigerem", "wenigere", "wenigeres", "wenig", "bisschen", "paar", "kein", "keines", "keinem", "keinen", "keine", "mehr", "genug", "mehrere", "mehrerer", "mehreren", "mehrerem", "mehreres", "verschiedene", "verschiedener", "verschiedenen", "verschiedenem", "verschiedenes", "verschiedne", "verschiedner", "verschiednen", "verschiednem", "verschiednes", "art", "arten", "sorte", "sorten"];

const reflexivePronouns = ["sich"];

const reciprocalPronouns = ["einander"];

// "Welch", "welcher", and "welches" are already included in the demonstrativePronouns.
const indefinitePronouns = ["andere", "anderer", "anderem", "anderen", "anderes", "andren", "andern", "andrem", "anderm", "andre", "andrer", "andres", "beide", "beides", "beidem", "beider", "beiden", "etwas", "irgendetwas", "irgendein", "irgendeinen", "irgendeinem", "irgendeines", "irgendeine", "irgendeiner", "irgendwas", "irgendwessen", "irgendwer", "irgendwen", "irgendwem", "irgendwelche", "irgendwelcher", "irgendwelchem", "irgendwelchen", "irgendwelches", "irgendjemand", "irgendjemanden", "irgendjemandem", "irgendjemandes", "irgendwie", "wer", "wen", "wem", "wessen", "was", "welchen", "welchem", "welche", "jeder", "jedes", "jedem", "jeden", "jede", "jedweder", "jedweden", "jedwedem", "jedwedes", "jedwede", "jeglicher", "jeglichen", "jeglichem", "jegliches", "jegliche", "jedermann", "jedermanns", "jemand", "jemanden", "jemandem", "jemands", "jemandes", "man", "meinesgleichen", "s??mtlich", "saemtlich", "s??mtlicher", "saemtlicher", "s??mtlichen", "saemtlichen", "s??mtlichem", "saemtlichem", "s??mtliches", "saemtliches", "s??mtliche", "saemtliche", "solche", "solcher", "solchen", "solchem", "solches", "niemand", "niemanden", "niemandem", "niemandes", "niemands", "nichts", "zweiter"];

const interrogativeProAdverbs = ["warum", "wie", "wo", "woher", "wohin", "wann"];

const pronominalAdverbs = ["dahinter", "damit", "daneben", "daran", "daraus", "darin", "darunter", "dar??ber", "darueber", "davon", "dazwischen", "hieran", "hierauf", "hieraus", "hierbei", "hierfuer", "hierf??r", "hiergegen", "hierhinter", "hierin", "hiermit", "hiernach", "hierum", "hierunter", "hierueber", "hier??ber", "hiervor", "hierzwischen", "hierneben", "hiervon", "wodurch", "wof??r", "wofuer", "wogegen", "wohinter", "womit", "wonach", "woneben", "woran", "worauf", "woraus", "worin", "worum", "worunter", "wor??ber", "worueber", "wovon", "wovor", "wozu", "wozwischen"];

const locativeAdverbs = ["hier", "dorthin", "hierher", "dorther"];

const adverbialGenitives = ["allenfalls", "keinesfalls", "anderenfalls", "andernfalls", "andrenfalls", "??u??erstenfalls", "bejahendenfalls", "bestenfalls", "eintretendenfalls", "entgegengesetztenfalls", "erforderlichenfalls", "gegebenenfalls", "geringstenfalls", "gleichfalls", "g??nstigenfalls", "g??nstigstenfalls", "h??chstenfalls", "m??glichenfalls", "notfalls", "n??tigenfalls", "notwendigenfalls", "schlimmstenfalls", "vorkommendenfalls", "zutreffendenfalls", "keineswegs", "durchwegs", "geradenwegs", "geradeswegs", "geradewegs", "gradenwegs", "halbwegs", "mittwegs", "unterwegs"];

const otherAuxiliaries = ["habe", "hast", "hat", "habt", "habest", "habet", "hatte", "hattest", "hatten", "h??tte", "haette", "h??ttest", "haettest", "h??tten", "haetten", "haettet", "h??ttet", "hab", "bin", "bist", "ist", "sind", "sei", "seiest", "seien", "seiet", "war", "warst", "waren", "wart", "w??re", "waere", "w??rest", "waerest", "w??rst", "waerst", "w??ren", "waeren", "w??ret", "waeret", "w??rt", "waert", "seid", "darf", "darfst", "d??rft", "duerft", "d??rfe", "duerfe", "d??rfest", "duerfest", "d??rfet", "duerfet", "durfte", "durftest", "durften", "durftet", "d??rfte", "duerfte", "d??rftest", "duerftest", "d??rften", "duerften", "d??rftet", "duerftet", "kann", "kannst", "k??nnt", "koennt", "k??nne", "koenne", "k??nnest", "koennest", "k??nnet", "koennet", "konnte", "konntest", "konnten", "konntet", "k??nnte", "koennte", "k??nntest", "koenntest", "k??nnten", "koennten", "k??nntet", "koenntet", "mag", "magst", "m??gt", "moegt", "m??ge", "moege", "m??gest", "moegest", "m??get", "moeget", "mochte", "mochtest", "mochten", "mochtet", "m??chte", "moechte", "m??chtest", "moechtest", "m??chten", "moechten", "m??chtet", "moechtet", "muss", "mu??", "musst", "mu??t", "m??sst", "muesst", "m????t", "mue??t", "m??sse", "muesse", "m??ssest", "muessest", "m??sset", "muesset", "musste", "mu??te", "musstest", "mu??test", "mussten", "mu??ten", "musstet", "mu??tet", "m??sste", "muesste", "m????te", "mue??te", "m??sstest", "muesstest", "m????test", "mue??test", "m??ssten", "muessten", "m????ten", "mue??ten", "m??sstet", "muesstet", "m????tet", "mue??tet", "soll", "sollst", "sollt", "solle", "sollest", "sollet", "sollte", "solltest", "sollten", "solltet", "will", "willst", "wollt", "wolle", "wollest", "wollet", "wollte", "wolltest", "wollten", "wolltet", "lasse", "l??sst", "laesst", "l????t", "lae??t", "lasst", "la??t", "lassest", "lasset", "lie??", "lie??est", "lie??t", "lie??en", "lie??e", "lie??et", "liess", "liessest", "liesst", "liessen", "liesse", "liesset"];

const otherAuxiliariesInfinitive = ["haben", "d??rfen", "duerfen", "k??nnen", "koennen", "m??gen", "moegen", "m??ssen", "muessen", "sollen", "wollen", "lassen"];

// Forms from 'aussehen' with two parts, like 'sehe aus', are not included, because we remove words on an single word basis.
const copula = ["bleibe", "bleibst", "bleibt", "bleibest", "bleibet", "blieb", "bliebst", "bliebt", "blieben", "bliebe", "bliebest", "bliebet", "hei??e", "hei??t", "hei??est", "hei??et", "heisse", "heisst", "heissest", "heisset", "hie??", "hie??est", "hie??t", "hie??en", "hie??e", "hie??et", "hiess", "hiessest", "hiesst", "hiessen", "hiesse", "hiesset", "giltst", "gilt", "geltet", "gelte", "geltest", "galt", "galtest", "galtst", "galten", "galtet", "g??lte", "gaelte", "g??lte", "goelte", "g??ltest", "gaeltest", "g??ltest", "goeltest", "g??lten", "gaelten", "g??lten", "goelten", "g??ltet", "gaeltet", "g??ltet", "goeltet", "aussehe", "aussiehst", "aussieht", "ausseht", "aussehest", "aussehet", "aussah", "aussahst", "aussahen", "aussaht", "auss??he", "aussaehe", "auss??hest", "aussaehest", "auss??hst", "aussaehst", "auss??het", "aussaehet", "auss??ht", "aussaeht", "auss??hen", "aussaehen", "scheine", "scheinst", "scheint", "scheinest", "scheinet", "schien", "schienst", "schienen", "schient", "schiene", "schienest", "schienet", "erscheine", "erscheinst", "erscheint", "erscheinest", "erscheinet", "erschien", "erschienst", "erschienen", "erschient", "erschiene", "erschienest", "erschienet"];

const copulaInfinitive = ["bleiben", "hei??en", "heissen", "gelten", "aussehen", "scheinen", "erscheinen"];

const prepositions = ["a", "??", "ab", "abseits", "abz??glich", "abzueglich", "als", "am", "an", "angelegentlich", "angesichts", "anhand", "anl??sslich", "anlaesslich", "ans", "anstatt", "anstelle", "auf", "aufs", "aufseiten", "aus", "ausgangs", "ausschlie??lich", "ausschliesslich", "au??erhalb", "ausserhalb", "ausweislich", "bar", "behufs", "bei", "beidseits", "beiderseits", "beim", "betreffs", "bez??glich", "bezueglich", "binnen", "bis", "contra", "dank", "diesseits", "durch", "einbez??glich", "einbezueglich", "eingangs", "eingedenk", "einschlie??lich", "einschliesslich", "entgegen", "entlang", "exklusive", "fern", "fernab", "fuer", "f??r", "fuers", "f??rs", "gegen", "gegen??ber", "gegenueber", "gelegentlich", "gem????", "gemae??", "gen", "getreu", "gleich", "halber", "hinsichtlich", "hinter", "hinterm", "hinters", "im", "in", "inklusive", "inmitten", "innerhalb", "innert", "ins", "je", "jenseits", "kontra", "kraft", "l??ngs", "laengs", "l??ngsseits", "laengsseits", "laut", "links", "mangels", "minus", "mit", "mithilfe", "mitsamt", "mittels", "nach", "n??chst", "naechst", "nah", "namens", "neben", "nebst", "n??rdlich", "noerdlich", "nord??stlich", "nordoestlich", "nordwestlich", "oberhalb", "ohne", "??stlich", "oestlich", "per", "plus", "pro", "quer", "rechts", "r??cksichtlich", "ruecksichtlich", "samt", "seitens", "seitlich", "seitw??rts", "seitwaerts", "s??dlich", "suedlich", "s??d??stlich", "suedoestlich", "s??dwestlich", "suedwestlich", "??ber", "ueber", "??berm", "ueberm", "??bern", "uebern", "??bers", "uebers", "um", "ums", "unbeschadet", "unerachtet", "unfern", "unter", "unterhalb", "unterm", "untern", "unters", "unweit", "vermittels", "vermittelst", "verm??ge", "vermoege", "via", "vom", "von", "vonseiten", "vor", "vorbehaltlich", "wegen", "wider", "zeit", "zu", "zugunsten", "zulieb", "zuliebe", "zum", "zur", "zus??tzlich", "zusaetzlich", "zuungunsten", "zuwider", "zuz??glich", "zuzueglich", "zwecks", "zwischen"];

// Many coordinating conjunctions are already included in the transition words list.
const coordinatingConjunctions = ["und", "oder", "umso"];

// 'noch' is part of 'weder...noch', 'nur' is part of 'nicht nur...sondern auch'.
const correlativeConjunctions = ["auch", "noch", "nur"];

// Many subordinating conjunctions are already included in the prepositions list, transition words list or pronominal adverbs list.
const subordinatingConjunctions = ["nun", "so", "gleichwohl"];

/*
These verbs are frequently used in interviews to indicate questions and answers. 'Frage' and 'fragen' are not included,
because those words are also nouns.
 */
const interviewVerbs = ["sage", "sagst", "sagt", "sagest", "saget", "sagte", "sagtest", "sagten", "sagtet", "gesagt", "fragst", "fragt", "fragest", "fraget", "fragte", "fragtest", "fragten", "fragtet", "gefragt", "erkl??re", "erkl??rst", "erkl??rt", "erklaere", "erklaerst", "erklaert", "erkl??rte", "erkl??rtest", "erkl??rtet", "erkl??rten", "erklaerte", "erklaertest", "erklaertet", "erklaerten", "denke", "denkst", "denkt", "denkest", "denket", "dachte", "dachtest", "dachten", "dachtet", "d??chte", "d??chtest", "d??chten", "d??chtet", "daechte", "daechtest", "daechten", "daechtet", "finde", "findest", "findet", "gefunden"];

const interviewVerbsInfinitive = ["sagen", "erkl??ren", "erklaeren", "denken", "finden"];

// These transition words were not included in the list for the transition word assessment for various reasons.
const additionalTransitionWords = ["etwa", "absolut", "unbedingt", "wieder", "definitiv", "bestimmt", "immer", "??u??erst", "aeu??erst", "h??chst", "hoechst", "sofort", "augenblicklich", "umgehend", "direkt", "unmittelbar", "n??mlich", "naemlich", "nat??rlich", "natuerlich", "besonders", "haupts??chlich", "hauptsaechlich", "jetzt", "eben", "heutzutage", "eindeutig", "wirklich", "echt", "wahrhaft", "ehrlich", "aufrichtig", "wahrheitsgem????", "letztlich", "einmalig", "un??bertrefflich", "normalerweise", "gew??hnlich", "gewoehnlich", "??blicherweise", "ueblicherweise", "sonst", "fast", "nahezu", "beinahe", "knapp", "ann??hernd", "annaehernd", "geradezu", "bald", "vielleicht", "wahrscheinlich", "wohl", "voraussichtlich", "zugegeben", "urspr??nglich", "insgesamt", "tats??chlich", "eigentlich", "wahrhaftig", "bereits", "schon", "oft", "h??ufig", "haeufig", "regelm????ig", "regelmae??ig", "gleichm????ig", "gleichmae??ig", "einfach", "lediglich", "blo??", "bloss", "halt", "wahlweise", "eventuell", "manchmal", "teilweise", "nie", "niemals", "nimmer", "jemals", "allzeit", "irgendeinmal", "anders", "momentan", "gegenw??rtig", "gegenwaertig", "nebenbei", "anderswo", "woanders", "anderswohin", "anderorts", "insbesondere", "namentlich", "sonderlich", "ausdr??cklich", "ausdruecklich", "vollends", "k??rzlich", "kuerzlich", "j??ngst", "juengst", "unl??ngst", "unlaengst", "neuerdings", "neulich", "letztens", "neuerlich", "verh??ltnism????ig", "verhaeltnismaessig", "deutlich", "klar", "offenbar", "anscheinend", "genau", "u.a", "damals", "zumindest"];

const intensifiers = ["sehr", "recht", "??beraus", "ueberaus", "ungemein", "weitaus", "einigerma??en", "einigermassen", "ganz", "schwer", "tierisch", "ungleich", "ziemlich", "??belst", "uebelst", "stark", "volkommen", "durchaus", "gar"];

// These verbs convey little meaning.
const delexicalizedVerbs = ["geschienen", "meinst", "meint", "meinest", "meinet", "meinte", "meintest", "meinten", "meintet", "gemeint", "stehe", "stehst", "steht", "gehe", "gehst", "geht", "gegangen", "ging", "gingst", "gingen", "gingt"];

const delexicalizedVerbsInfinitive = ["tun", "machen", "stehen", "wissen", "gehen", "kommen"];

// These adjectives and adverbs are so general, they should never be suggested as a (single) keyword.
// Keyword combinations containing these adjectives/adverbs are fine.
const generalAdjectivesAdverbs = ["einerlei", "egal", "neu", "neue", "neuer", "neuen", "neues", "neuem", "neuerer", "neueren", "neuerem", "neueres", "neuere", "neuester", "neuster", "neuesten", "neusten", "neuestem", "neustem", "neuestes", "neustes", "neueste", "neuste", "alt", "alter", "alten", "altem", "altes", "alte", "??ltere", "??lteren", "??lterer", "??lteres", "??ltester", "??ltesten", "??ltestem", "??ltestes", "??lteste", "aeltere", "aelteren", "aelterer", "aelteres", "aeltester", "aeltesten", "aeltestem", "aeltestes", "aelteste", "gut", "guter", "gutem", "guten", "gutes", "gute", "besser", "besserer", "besseren", "besserem", "besseres", "bester", "besten", "bestem", "bestes", "beste", "gr????te", "gr??sste", "gro??", "gro??er", "gro??en", "gro??em", "gro??es", "gro??e", "gro??erer", "gro??erem", "gro??eren", "gro??eres", "gro??ere", "gro??ter", "gro??ten", "gro??tem", "gro??tes", "gro??te", "gross", "grosser", "grossen", "grossem", "grosses", "grosse", "grosserer", "grosserem", "grosseren", "grosseres", "grossere", "grosster", "grossten", "grosstem", "grosstes", "grosste", "einfacher", "einfachen", "einfachem", "einfaches", "einfache", "einfacherer", "einfacheren", "einfacherem", "einfacheres", "einfachere", "einfachste", "einfachster", "einfachsten", "einfachstes", "einfachstem", "schnell", "schneller", "schnellen", "schnellem", "schnelles", "schnelle", "schnellere", "schnellerer", "schnelleren", "schnelleres", "schnellerem", "schnellster", "schnellste", "schnellsten", "schnellstem", "schnellstes", "weit", "weiten", "weitem", "weites", "weiterer", "weiteren", "weiterem", "weiteres", "weitere", "weitester", "weitesten", "weitestem", "weitestes", "weiteste", "eigen", "eigener", "eigenen", "eigenes", "eigenem", "eigene", "eigenerer", "eignerer", "eigeneren", "eigneren", "eigenerem", "eignerem", "eigeneres", "eigneres", "eigenere", "eignere", "eigenster", "eigensten", "eigenstem", "eigenstes", "eigenste", "wenigster", "wenigsten", "wenigstem", "wenigstes", "wenigste", "minderer", "minderen", "minderem", "mindere", "minderes", "mindester", "mindesten", "mindestes", "mindestem", "mindeste", "lang", "langer", "langen", "langem", "langes", "l??ngerer", "l??ngeren", "l??ngerem", "l??ngeres", "l??ngere", "l??ngster", "l??ngsten", "l??ngstem", "l??ngstes", "l??ngste", "laengerer", "laengeren", "laengerem", "laengeres", "laengere", "laengster", "laengsten", "laengstem", "laengstes", "laengste", "tief", "tiefer", "tiefen", "tiefem", "tiefes", "tiefe", "tieferer", "tieferen", "tieferem", "tieferes", "tiefere", "tiefster", "tiefsten", "tiefstem", "tiefste", "tiefstes", "hoch", "hoher", "hohen", "hohem", "hohes", "hohe", "h??her", "h??herer", "h??here", "h??heren", "h??herem", "h??heres", "hoeherer", "hoehere", "hoeheren", "hoeherem", "hoeheres", "h??chster", "h??chste", "h??chsten", "h??chstem", "h??chstes", "hoechster", "hoechste", "hoechsten", "hoechstem", "hoechstes", "regul??r", "regul??rer", "regul??ren", "regul??rem", "regul??res", "regul??re", "regulaer", "regulaerer", "regulaeren", "regulaerem", "regulaeres", "regulaere", "regul??rerer", "regul??reren", "regul??rerem", "regul??reres", "regul??rere", "regulaererer", "regulaereren", "regulaererem", "regulaereres", "regulaerere", "regul??rster", "regul??rsten", "regul??rstem", "regul??rstes", "regul??rste", "regulaerster", "regulaersten", "regulaerstem", "regulaerstes", "regulaerste", "normal", "normaler", "normalen", "normalem", "normales", "normale", "normalerer", "normaleren", "normalerem", "normaleres", "normalere", "normalster", "normalsten", "normalstem", "normalstes", "normalste", "klein", "kleiner", "kleinen", "kleinem", "kleines", "kleine", "kleinerer", "kleineres", "kleineren", "kleinerem", "kleinere", "kleinster", "kleinsten", "kleinstem", "kleinstes", "kleinste", "winzig", "winziger", "winzigen", "winzigem", "winziges", "winzigerer", "winzigeren", "winzigerem", "winzigeres", "winzigere", "winzigster", "winzigsten", "winzigstem", "winzigste", "winzigstes", "sogenannt", "sogenannter", "sogenannten", "sogenanntem", "sogenanntes", "sogenannte", "kurz", "kurzer", "kurzen", "kurzem", "kurzes", "kurze", "k??rzerer", "k??rzeres", "k??rzeren", "k??rzerem", "k??rzere", "kuerzerer", "kuerzeres", "kuerzeren", "kuerzerem", "kuerzere", "k??rzester", "k??rzesten", "k??rzestem", "k??rzestes", "k??rzeste", "kuerzester", "kuerzesten", "kuerzestem", "kuerzestes", "kuerzeste", "wirklicher", "wirklichen", "wirklichem", "wirkliches", "wirkliche", "wirklicherer", "wirklicheren", "wirklicherem", "wirklicheres", "wirklichere", "wirklichster", "wirklichsten", "wirklichstes", "wirklichstem", "wirklichste", "eigentlicher", "eigentlichen", "eigentlichem", "eigentliches", "eigentliche", "sch??n", "sch??ner", "sch??nen", "sch??nem", "sch??nes", "sch??ne", "sch??nerer", "sch??neren", "sch??nerem", "sch??neres", "sch??nere", "sch??nster", "sch??nsten", "sch??nstem", "sch??nstes", "sch??nste", "real", "realer", "realen", "realem", "reales", "realerer", "realeren", "realerem", "realeres", "realere", "realster", "realsten", "realstem", "realstes", "realste", "derselbe", "denselben", "demselben", "desselben", "dasselbe", "dieselbe", "derselben", "dieselben", "gleicher", "gleichen", "gleichem", "gleiches", "gleiche", "gleicherer", "gleicheren", "gleicherem", "gleicheres", "gleichere", "gleichster", "gleichsten", "gleichstem", "gleichstes", "gleichste", "bestimmter", "bestimmten", "bestimmtem", "bestimmtes", "bestimmte", "bestimmtere", "bestimmterer", "bestimmterem", "bestimmteren", "bestimmteres", "bestimmtester", "bestimmtesten", "bestimmtestem", "bestimmtestes", "bestimmteste", "??berwiegend", "ueberwiegend", "zumeist", "meistens", "meisten", "meiste", "meistem", "meistes", "gro??enteils", "grossenteils", "meistenteils", "weithin", "st??ndig", "staendig", "laufend", "dauernd", "andauernd", "immerfort", "irgendwo", "irgendwann", "??hnlicher", "??hnlichen", "??hnlichem", "??hnliches", "??hnliche", "??hnlich", "??hnlicherer", "??hnlicheren", "??hnlicherem", "??hnlicheres", "??hnlichere", "??hnlichster", "??hnlichsten", "??hnlichstem", "??hnlichstes", "??hnlichste", "schlecht", "schlechter", "schlechten", "schlechtem", "schlechtes", "schlechte", "schlechterer", "schlechteren", "schlechterem", "schlechteres", "schlechtere", "schlechtester", "schlechtesten", "schlechtestem", "schlechtestes", "schlechteste", "schlimm", "schlimmer", "schlimmen", "schlimmem", "schlimmes", "schlimme", "schlimmerer", "schlimmeren", "schlimmerem", "schlimmeres", "schlimmere", "schlimmster", "schlimmsten", "schlimmstem", "schlimmstes", "schlimmste", "toll", "toller", "tollen", "tollem", "tolles", "tolle", "tollerer", "tolleren", "tollerem", "tollere", "tolleres", "tollster", "tollsten", "tollstem", "tollstes", "tollste", "super", "m??gliche", "m??glicher", "m??gliches", "m??glichen", "m??glichem", "m??glich", "moegliche", "moeglicher", "moegliches", "moeglichen", "moeglichem", "moeglich", "n??chsten", "n??chster", "n??chstem", "n??chste", "n??chstes", "naechsten", "voll", "voller", "vollen", "vollem", "volle", "volles", "vollerer", "volleren", "vollerem", "vollere", "volleres", "vollster", "vollsten", "vollstem", "vollste", "vollstes", "au??en", "ganzer", "ganzen", "ganzem", "ganze", "ganzes", "gern", "gerne", "oben", "unten", "zur??ck", "zurueck", "nicht", "eher", "ehere", "eherem", "eheren", "eheres", "eheste", "ehestem", "ehensten", "ehesten"];

const interjections = ["ach", "aha", "oh", "au", "b??h", "baeh", "igitt", "huch", "hurra", "hoppla", "nanu", "oha", "olala", "pfui", "tja", "uups", "wow", "grr", "??h", "aeh", "??hm", "aehm", "??hm", "oehm", "hm", "mei", "mhm", "okay", "richtig", "eijeijeijei"];

// These words and abbreviations are frequently used in recipes in lists of ingredients.
const recipeWords = ["g", "el", "tl", "wg", "be", "bd", "cl", "dl", "dag", "do", "gl", "gr", "kg", "kl", "cb", "ccm", "l", "ms", "mg", "ml", "mi", "pk", "pr", "pp", "sc", "sp", "st", "sk", "ta", "tr", "cm", "mass"];

const timeWords = ["sekunde", "sekunden", "minute", "minuten", "stunde", "stunden", "uhr", "tag", "tages", "tags", "tage", "tagen", "woche", "wochen", "monat", "monate", "monates", "monats", "monaten", "jahr", "jahres", "jahrs", "jahre", "jahren", "morgens", "mittags", "abends", "nachts", "heute", "gestern", "morgen", "vorgestern", "??bermorgen", "uebermorgen"];

const vagueNouns = ["ding", "dinge", "dinges", "dinger", "dingern", "dingen", "sache", "sachen", "weise", "weisen", "wahrscheinlichkeit", "zeug", "zeuge", "zeuges", "zeugen", "mal", "einmal", "teil", "teile", "teiles", "teilen", "prozent", "prozents", "prozentes", "prozente", "prozenten", "beispiel", "beispiele", "beispieles", "beispiels", "beispielen", "aspekt", "aspekte", "aspektes", "aspekts", "aspekten", "idee", "ideen", "ahnung", "ahnungen", "thema", "themas", "themata", "themen", "fall", "falle", "falles", "f??lle", "f??llen", "faelle", "faellen", "mensch", "menschen", "leute"];

const miscellaneous = ["nix", "nixe", "nixes", "nixen", "usw.", "amen", "ja", "nein", "euro"];

const titlesPreceding = ["fr", "hr", "dr", "prof"];

const titlesFollowing = ["jr", "jun", "sen", "sr"];

/**
 * Returns function words for German.
 *
 * @returns {Object} German function words.
 */
//# sourceMappingURL=functionWords.js.map
