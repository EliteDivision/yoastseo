"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function () {
	return {
		irregularsRegular: irregularsRegular,
		irregularsIrregular: irregularsIrregular,
		irregularsEndingInS: irregularsEndingInS
	};
};

/*
This is a list of irregular participles used in French.
These participles have an irregular stem but follow a regular conjugation pattern for feminine and plural forms (adding -e, -es, -s).
The following participles were excluded because they are intransitive verbs that cannot be passive:
apparu, réapparu, devenu, redevenu, intervenu, mort, parti, parvenu, provenu, resurvenu, revenu, survenu, venu.
 */
var irregularsRegular = ["abâtardi", "abattu", "abêti", "aboli", "abouti", "abruti", "abstenu", "abstrait", "accompli", "accouru", "accroupi", "accru", "accueilli", "adjoint", "adouci", "advenu", "affadi", "affaibli", "affermi", "agi", "agrandi", "aguerri", "ahuri", "aigri", "alangui", "alenti", "alourdi", "aluni", "amaigri", "amati", "amerri", "aminci", "amoindri", "amolli", "amorti", "anéanti", "apâli", "aperçu", "aplani", "appartenu", "appauvri", "appendu", "appesanti", "applaudi", "approfondi", "arrondi", "assagi", "assailli", "assaini", "asservi", "assombri", "assorti", "assoupi", "assoupli", "assourdi", "assouvi", "assujetti", "astreint", "attendri", "attendu", "atterri", "attiédi", "attrait", "autodétruit", "avachi", "aveuli", "avili", "banni", "barri", "bâti", "battu", "béni", "blanchi", "blêmi", "bleui", "blondi", "blotti", "bonni", "bouffi", "bouilli", "bruni", "bu", "calmi", "candi", "ceint", "chéri", "choisi", "circonscrit", "circonvenu", "combattu", "comparu", "compati", "conclu", "concouru", "condescendu", "conduit", "confit", "confondu", "conjoint", "connu", "consenti", "construit", "contenu", "contraint", "contredit", "contrefait", "contrevenu", "convaincu", "convenu", "converti", "coproduit", "correspondu", "couru", "cousu", "craint", "cramoisi", "crépi", "croupi", "cru", "cueilli", "cuit", "débattu", "décati", "déchu", "déconfit", "déconstruit", "décousu", "découvert", "décrépi", "décrit", "décru", "déçu", "dédit", "déduit", "défailli", "défendu", "défini", "défleuri", "défraîchi", "dégarni", "dégluti", "dégourdi", "démenti", "démoli", "démordu", "démuni", "départi", "dépeint", "dépendu", "dépéri", "déplu", "dépoli", "dépourvu", "désobéi", "desservi", "déteint", "détendu", "détenu", "détruit", "dévêtu", "discouru", "disjoint", "disparu", "distendu", "distrait", "dit", "diverti", "dormi", "durci", "ébahi", "ébaubi", "ébaudi", "éclairci", "éconduit", "écrit", "élargi", "élu", "embelli", "embouti", "émoulu", "empli", "empreint", "empuanti", "ému", "enchéri", "encouru", "endolori", "endormi", "enduit", "endurci", "enfoui", "enfreint", "enfui", "englouti", "engourdi", "enhardi", "enjoint", "enlaidi", "ennobli", "enorgueilli", "enrichi", "enseveli", "entendu", "entr'aperçu", "entraperçu", "entreclos", "entremis", "entretenu", "entrevu", "entrouvert", "envahi", "épanoui", "éperdu", "équarri", "équivalu", "estourbi", "établi", "éteint", "étendu", "étourdi", "étréci", "étreint", "eu", "évanoui", "exclu", "extrait", "faibli", "fait", "fallu", "farci", "feint", "fendu", "fini", "fléchi", "fleuri", "fondu", "forci", "foui", "fourbi", "fourni", "foutu", "fraîchi", "franchi", "frémi", "frit", "fui", "garanti", "garni", "gauchi", "gémi", "glapi", "grandi", "grossi", "guéri", "haï", "imparti", "induit", "infléchi", "inscrit", "instruit", "interdit", "interrompu", "interverti", "introduit", "inverti", "investi", "jailli", "jauni", "joint", "joui", "langui", "loti", "lu", "maintenu", "méconnu", "mécru", "médit", "menti", "minci", "moisi", "moiti", "molli", "mordu", "morfondu", "moulu", "mugi", "muni", "nanti", "noirci", "nourri", "nui", "obéi", "obscurci", "obtenu", "offert", "oint", "ouï", "ourdi", "ouvert", "pâli", "parcouru", "paru", "pâti", "peint", "pendu", "perçu", "péri", "perverti", "pétri", "plaint", "portrait", "pourfendu", "pourri", "poursuivi", "pourvu", "prédéfini", "prédit", "préétabli", "prémuni", "prescrit", "prétendu", "prévalu", "prévenu", "prévu", "produit", "promu", "proscrit", "pu", "puni", "rabattu", "rabougri", "radouci", "raffermi", "ragaillardi", "raidi", "rajeuni", "ralenti", "ramolli", "ranci", "ravi", "réadmis", "réagi", "réappris", "rebâti", "rebattu", "rebondi", "rebu", "reconnu", "reconstruit", "reconverti", "recouru", "recouvert", "recrépi", "récrit", "recru", "reçu", "recueilli", "recuit", "redécouvert", "redéfini", "redit", "réduit", "réécrit", "réélu", "réentendu", "refendu", "réfléchi", "refondu", "refoutu", "refroidi", "regarni", "régi", "réinscrit", "réintroduit", "réinvesti", "rejoint", "réjoui", "relu", "relui", "rembruni", "remordu", "rempli", "renchéri", "rendormi", "rendu", "rentrait", "répandu", "reparcouru", "réparti", "reparu", "repeint", "rependu", "repenti", "reperdu", "répondu", "reproduit", "résolu", "resplendi", "ressaisi", "resservi", "restreint", "resurgi", "rétabli", "retendu", "retenu", "retraduit", "retrait", "retranscrit", "rétréci", "réuni", "réussi", "revécu", "revendu", "reverdi", "reverni", "revêtu", "revu", "ri", "roidi", "rosi", "rôti", "rougi", "roussi", "rousti", "rouvert", "rugi", "saisi", "sali", "satisfait", "sauri", "secouru", "séduit", "senti", "serti", "servi", "sévi", "souffert", "souri", "sous-entendu", "sous-tendu", "souscrit", "soustrait", "soutenu", "souvenu", "su", "subi", "subvenu", "suffi", "suivi", "surenchéri", "surgi", "suri", "survécu", "suspendu", "tapi", "tari", "teint", "tendu", "tenu", "terni", "terri", "tiédi", "tondu", "tordu", "traduit", "trahi", "trait", "transcrit", "transi", "travesti", "tressailli", "uni", "vagi", "vaincu", "valu", "vécu", "vendu", "verdi", "verni", "vêtu", "vieilli", "vomi", "voulu", "vu"];

/*
This is a list of irregular participles used in French.
These participles have an irregular stem and follow an irregular conjugation pattern. Therefore all forms are included in the list.
 */
var irregularsIrregular = ["absous", "absoute", "absoutes", "dissous", "dissoute", "dissoutes", "crû", "crus", "crue", "crues", "dû", "dus", "dues", "mû", "mus", "mue", "mues"];

/*
This is a list of irregular participles used in French.
These participles have an irregular stem ending in -s. They have the same form in the masculine singular and plural.
For feminine singular and feminine plural forms -e and -es are added.
 */
var irregularsEndingInS = ["repris", "démis", "omis", "dépris", "retransmis", "assis", "promis", "circoncis", "permis", "compris", "mépris", "inclus", "soumis", "rassis", "sursis", "enclos", "acquis", "compromis", "commis", "désappris", "appris", "conquis", "transmis", "remis", "surpris", "reconquis", "mis", "enquis", "pris", "admis", "clos", "émis", "entrepris", "épris", "requis"];

/**
 * Returns a list of irregulars for French.
 *
 * @returns {Object} French irregulars.
 */
//# sourceMappingURL=irregulars.js.map
