"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return {
		// These word categories are filtered at the beginning of word combinations.
		filteredAtBeginning: generalAdjectivesAdverbs,

		// These word categories are filtered at the ending of word combinations.
		filteredAtEnding: [].concat(ordinalNumerals, otherAuxiliariesInfinitive, copulaInfinitive, delexicalizedVerbsInfinitive, generalAdjectivesPreceding),

		// These word categories are filtered at the beginning and ending of word combinations.
		filteredAtBeginningAndEnding: [].concat(articles, prepositions, coordinatingConjunctions, demonstrativePronouns, intensifiers, quantifiers, possessivePronouns),

		// These word categories are filtered everywhere within word combinations.
		filteredAnywhere: [].concat(transitionWords, cardinalNumerals, personalPronounsNominative, personalPronounsAccusative, personalPronounsPrepositional, personalPronounsComitative, reflexivePronouns, indefinitePronouns, interrogativePronouns, interrogativeProAdverbs, locativeAdverbs, otherAuxiliaries, copula, subordinatingConjunctions, interviewVerbs, additionalTransitionWords, delexicalizedVerbs, interjections, recipeWords, timeWords, vagueNouns, miscellaneous, titles),

		// These word categories cannot directly precede a passive participle.
		cannotDirectlyPrecedePassiveParticiple: [].concat(articles, prepositions, personalPronounsAccusative, possessivePronouns, indefinitePronouns, interrogativeProAdverbs, cardinalNumerals, ordinalNumerals, delexicalizedVerbs, delexicalizedVerbsInfinitive, interviewVerbs),

		// This export contains all of the above words.
		all: [].concat(articles, cardinalNumerals, ordinalNumerals, personalPronounsNominative, personalPronounsAccusative, personalPronounsPrepositional, personalPronounsComitative, reflexivePronouns, demonstrativePronouns, possessivePronouns, quantifiers, indefinitePronouns, interrogativePronouns, interrogativeProAdverbs, locativeAdverbs, otherAuxiliaries, otherAuxiliariesInfinitive, copula, copulaInfinitive, prepositions, coordinatingConjunctions, subordinatingConjunctions, interviewVerbs, additionalTransitionWords, intensifiers, delexicalizedVerbs, delexicalizedVerbsInfinitive, generalAdjectivesAdverbs, generalAdjectivesPreceding, interjections, recipeWords, timeWords, vagueNouns, miscellaneous, titles)
	};
};

var _transitionWords = require("./transitionWords.js");

var _transitionWords2 = _interopRequireDefault(_transitionWords);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const transitionWords = (0, _transitionWords2.default)().singleWords;

/**
 * Returns an array with exceptions for the prominent words researcher.
 *
 * @returns {Array} The array filled with exceptions.
 */

const articles = ["o", "a", "os", "as", "um", "uns", "uma", "umas"];

// "um" is already included in the articles.
const cardinalNumerals = ["uma", "duas", "dois", "tr??s", "cuatro", "cinco", "seis", "sete", "oito", "nove", "dez", "onze", "doze", "treze", "quatorze", "catorze", "quinze", "dezesseis", "dezessete", "dezasseis", "dezassete", "dezoito", "dezenove", "dezanove", "vinte", "cem", "cento", "mil", "milh??o", "milh??es", "bilh??o", "bilh??es"];

const ordinalNumerals = ["primeiro", "primeiros", "primeira", "primeiras", "segundo", "segunda", "segundos", "segundas", "terceiro", "terceira", "terceiros", "terceiras", "quarto", "quartos", "quarta", "quartas", "quinto", "quintos", "quinta", "quintas", "sexto", "sextos", "sexta", "sextas", "s??timo", "s??timos", "s??tima", "s??timas", "oitavo", "oitavos", "oitava", "oitavas", "nono", "nonos", "nona", "nonas", "d??cimo", "d??cimos", "d??cima", "d??cimas", "vig??simo", "vig??simos", "vig??sima", "vig??simas"];

const personalPronounsNominative = ["eu", "tu", "ele", "ela", "n??s", "v??s", "voc??", "voc??s", "eles", "elas"];

// "o", "a", "os", "as" are already included in the articles.
const personalPronounsAccusative = ["me", "te", "lhe", "nos", "vos", "lhes"];

const personalPronounsPrepositional = ["dele", "dela", "deles", "delas", "nele", "nela", "neles", "nelas", "mim", "ti", "si"];

const personalPronounsComitative = ["conmigo", "contigo", "consigo", "convosco", "conosco", "connosco"];

const reflexivePronouns = ["se"];

const demonstrativePronouns = ["aquilo", "??quele", "??quela", "??queles", "??quelas", "??quilo", "este", "estes", "esta", "estas", "??queles", "aqueles", "aquele", "aquela", "aquelas", "aquilo", "esse", "esses", "essa", "essas", "isto", "isso"];

const possessivePronouns = ["minhas", "tuas", "suas", "minha", "tua", "sua", "minhas", "tuas", "suas", "vossa", "vossas", "meu", "meus", "teu", "teus", "seu", "seus", "nosso", "nossos", "nossa", "nossas"];

const quantifiers = ["apenas", "v??rio", "v??rios", "v??ria", "v??rias", "mais", "muito", "muitos", "muita", "muitas", "puoco", "puocos", "puoca", "puocas", "bastante", "todo", "todos", "toda", "todas"];

const indefinitePronouns = ["alguma", "algumas", "nenhuns", "nenhumas", "todo", "toda", "todas", "outro", "outra", "outros", "outras", "qualquer", "quaisquer", "outrem", "tudo", "nada", "algo", "tanto", "tanta", "tantos", "tantas", "quanto", "quanta", "quantos", "quantas", "ningu??m", "cada"];

const interrogativePronouns = ["quais", "qual", "quem", "cujo", "cuja", "cujos", "cujas"];

const interrogativeProAdverbs = ["como", "porque", "quanto", "quanta", "onde", "quando", "qu??o", "quantos", "quantas", "donde", "aonde", "que"];

const locativeAdverbs = ["c??", "al??m", "aqui", "ali", "l??", "acol??", "a??"];

const otherAuxiliaries = ["tenho", "tens", "tem", "temos", "tendes", "t??m", "tive", "tiveste", "teve", "tivemos", "tivestes", "tiveram", "t??nhamos", "t??nheis", "tinham", "tivera", "tiveras", "tiv??ramos", "tiv??reis", "tiveram", "terei", "ter??s", "ter??", "teremos", "tereis", "ter??o", "teria", "terias", "ter??amos", "ter??eis", "teriam", "tenha", "tenhas", "tenhamos", "tenhais", "tenham", "tivesse", "tivesses", "tiv??ssemos", "tiv??sseis", "tivessem", "tiver", "tiveres", "tivermos", "tiverdes", "tiverem", "tende", "teres", "termos", "terdes", "terem", "tido", "hei", "h??s", "h??", "havemos", "hemos", "haveis", "heis", "h??o", "houve", "houveste", "houvemos", "houvestes", "houveram", "havia", "havias", "hav??amos", "hav??eis", "haviam", "houvera", "houveras", "houv??ramos", "houv??reis", "houveram", "haverei", "haver??s", "haver??", "haveremos", "havereis", "haver??o", "haveria", "haverias", "haver??amos", "haver??eis", "haveriam", "haja", "hajas", "hajamos", "hajais", "hajam", "houvesse", "houvesses", "houv??ssemos", "houv??sseis", "houvessem", "houver", "houveres", "houvermos", "houverdes", "houverem", "havei", "hajais", "haveres", "havermos", "haverdes", "haverem", "havido", "poder", "posso", "podes", "pode", "podemos", "podeis", "podem", "pude", "pudeste", "p??de", "pudemos", "pudestes", "puderam", "podia", "podias", "podia", "pod??amos", "pod??eis", "podiam", "pudera", "puderas", "pud??ramos", "pud??reis", "puderam", "poderei", "poder??s", "poder??", "poderemos", "podereis", "poder??o", "poderia", "poderias", "poder??amos", "poder??eis", "poderiam", "possa", "possas", "possamos", "possais", "possam", "pudesse", "pudesses", "pud??ssemos", "pud??sseis", "pudessem", "puder", "puderes", "pudermos", "puderdes", "puderem"];

const otherAuxiliariesInfinitive = ["ter", "haver"];

const copula = ["sou", "??s", "??", "somos", "sois", "s??o", "fui", "foste", "foi", "fomos", "fostes", "foram", "era", "eras", "??ramos", "??reis", "eram", "f??ramos", "f??reis", "fora", "foras", "foram", "serei", "ser??s", "ser??", "seremos", "sereis", "ser??o", "seria", "serias", "ser??amos", "ser??eis", "seriam", "seja", "sejas", "seja", "sejamos", "sejais", "sejam", "fosse", "fosses", "f??ssemos", "f??sseis", "fossem", "for", "fores", "formos", "fordes", "forem", "s??", "sede", "sermos", "serdes", "serem", "seres", "sido", "estou", "est??", "estamos", "est??s", "est??s", "estais", "est??o", "estive", "estiveste", "esteve", "estivemos", "estivestes", "estiveram", "estava", "estavas", "est??vamos", "est??veis", "estavam", "estivera", "estiveras", "estiv??ramos", "estiv??reis", "estiveram", "estarei", "estar??s", "estar??", "estaremos", "estareis", "estar??o", "estaria", "estarias", "estar??amos", "estar??eis", "estariam", "esteja", "estejas", "estejamos", "estejais", "estejam", "estivesse", "estivesses", "estiv??ssemos", "estiv??sseis", "estivessem", "estiver", "estiveres", "estivermos", "estiverdes", "estiverem", "estai", "estejas", "estejais", "estares", "estarmos", "estardes", "estarem", "estado"];

const copulaInfinitive = ["estar", "ser"];

const prepositions = ["a", "ante", "antes", "ap??s", "at??", "atrav??s", "com", "contra", "depois", "desde", "sem", "entre", "para", "pra", "perante", "sob", "sobre", "tr??s", "de", "por", "em", "ao", "??", "aos", "??s", "do", "da", "dos", "das", "dum", "duma", "duns", "dumas", "no", "na", "nos", "nas", "num", "numa", "nuns", "numas", "pelo", "pela", "pelos", "pelas", "deste", "desse", "daquele", "desta", "dessa", "daquela", "destes", "desses", "daqueles", "destas", "dessas", "daquelas", "neste", "nesse", "naquele", "nesta", "nessa", "naquela", "nestes", "nesses", "naqueles", "nestas", "nessas", "naquelas", "disto", "disso", "daquilo", "nisto", "nisso", "naquilo", "durante"];

const coordinatingConjunctions = ["tamb??m", "e", "ou", "nem"];

const subordinatingConjunctions = ["agora", "conforme", "conquanto", "contanto", "embora", "enquanto", "ent??o", "entretanto", "malgrado", "mas", "pois", "por??m", "porquanto", "porque", "sen??o", "contudo"];

// These verbs are frequently used in interviews to indicate questions and answers.
const interviewVerbs = ["diz", "dizem", "disse", "disseram", "dizia", "diziam", "reivindica", "reivindicam", "reivindicou", "reivindicaram", "reivindicava", "reivindicavam", "requer", "requerem", "requereu", "requereram", "requeria", "requeriam", "afirma", "afirmam", "afirmou", "afirmaram", "afirmava", "afirmavam", "reivindica", "reivindicam", "reivindicou", "reivindicaram", "reivindicava", "reivindicavam", "perguntam", "perguntou", "perguntaram", "perguntava", "perguntavam", "explica", "explicam", "explicou", "explicaram", "explicava", "explicavam", "relata", "relatam", "relatou", "relataram"];

// These transition words were not included in the list for the transition word assessment for various reasons.
const additionalTransitionWords = ["provavelmente", "imediatamente", "ocasionalmente", "indubitavelmente", "para", "possivelmente", "logo", "simultaneamente", "exceto", "inquestionavelmente"];

const intensifiers = ["extremamente", "bem", "completamente", "totalmente", "grandemente", "seriamente", "absolutamente", "bastante", "sobremodo", "sobremaneira", "t??o"];

// These verbs convey little meaning.
const delexicalizedVerbs = ["dou", "d??s", "d??", "damos", "dais", "d??o", "dei", "deu", "demos", "deram", "dava", "davas", "d??vamos", "d??veis", "davam", "dera", "deras", "d??ramos", "d??reis", "deram", "darei", "dar??s", "dar??", "daremos", "dareis", "dar??o", "daria", "darias", "dar??amos", "dar??eis", "dariam", "d??", "d??s", "d??mos", "deis", "deem", "d??ssemos", "d??sseis", "dessem", "der", "deres", "dermos", "derdes", "derem", "dai", "deis", "dares", "darmos", "dardes", "darem", "fazendo", "fa??o", "fazes", "faz", "fazemos", "fazeis", "fazem", "fiz", "fizeste", "fez", "fizemos", "fizestes", "fizeram", "fazia", "fazias", "faz??amos", "faz??eis", "faziam", "fizera", "fizeras", "fiz??ramos", "fiz??reis", "farei", "far??s", "far??", "faremos", "fareis", "faria", "farias", "far??amos", "far??eis", "fariam", "fa??a", "fa??as", "fa??amos", "fa??ais", "fa??am", "fizesse", "fizesses", "fiz??ssemos", "fiz??sseis", "fizessem", "fizer", "fizeres", "fizermos", "fizerdes", "fizerem", "fazei", "fazeres", "fazermos", "fazerdes", "fazerem"];

const delexicalizedVerbsInfinitive = ["dar", "fazer"];

/*
 * These adjectives and adverbs are so general, they should never be suggested as a (single) keyword.
 * Keyword combinations containing these adjectives/adverbs are fine.
 */
const generalAdjectivesAdverbs = ["devagar", "rapidamente", "grande", "grandes", "depressa", "claramente", "effectivamente", "realmente", "exclusivamente", "simplesemente", "somente", "unicamente", "lentamente", "raramente", "certamente", "talvez", "actualmente", "dificilmente", "principalmente", "gerlamente", "enorme", "enormes", "pequeno", "pequena", "pequenos", "pequenas", "min??sculo", "min??sculos", "min??scula", "min??sculas", "velho", "velhos", "velha", "velhas", "lindo", "linda", "lindos", "lindas", "alto", "alta", "altos", "altas", "baixo", "baixa", "baixos", "baixas", "longo", "longa", "longos", "longas", "curto", "curta", "curtos", "curtas", "f??cil", "f??ceis", "dif??cil", "dif??ceis", "simples", "mesmo", "mesma", "mesmos", "mesmas", "m??smo", "m??smos", "m??sma", "m??smas", "cedo", "tarde", "importante", "importantes", "capaz", "capazes", "certo", "certa", "certos", "certas", "usual", "usuals", "ultimamente", "poss??vel", "poss??veis", "comum", "comuns", "freq??entemente", "constantemente", "continuamente", "diretamente", "levemente", "algures", "semelhante", "semelhantes", "similar", "similares", "sempre", "ainda", "j??", "atr??s", "depois"];

// "grande", "velho" and "pequeno" can appear both before and after nouns and are therefore on both lists.
const generalAdjectivesPreceding = ["pior", "melhor", "melhores", "bom", "boa", "bons", "boas", "bonito", "bonita", "bonitos", "bonitas", "grande", "grandes", "pequeno", "pequena", "pequenos", "pequenas", "velho", "velhos", "velha", "velhas", "mau", "m??", "maus", "m??s"];

const interjections = ["ai", "ah", "ih", "al??", "oi", "ol??", "ui", "uf", "psiu", "mau", "olha", "viva", "uau", "wow", "oh", "shi"];

// These words and abbreviations are frequently used in recipes in lists of ingredients.
const recipeWords = ["kg", "mg", "gr", "g", "km", "m", "l", "ml", "cl"];

// "segundo" is already included in cardinal numbers.
const timeWords = ["segundos", "minuto", "minutos", "hora", "horas", "dia", "dias", "semana", "semanas", "mes", "meses", "ano", "anos", "hoje", "amanh??", "ontem"];

const vagueNouns = ["caso", "casos", "coisa", "coisas", "detalhe", "detalhes", "forma", "formas", "jeito", "jeitos", "maneira", "maneiras", "modo", "modos", "suijeto", "sujeitos", "t??pico", "t??picos", "vez", "vezes"];

const miscellaneous = ["sim", "n??o", "ok", "am??m", "etc", "euro", "euros", "adeus", "jeitos"];

const titles = ["sr", "sra", "sras", "dr", "dra", "prof"];

/**
 * Returns the Portuguese function words.
 *
 * @returns {Object} Portuguese function words.
 */
//# sourceMappingURL=functionWords.js.map
