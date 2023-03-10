"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
/*
 * Adapted from: Kornai, A, Halácsy, P, Nagy, V, Oravecz, Cs, Trón, V, and Varga, D (2006). Web-based frequency
 * dictionaries for medium density languages. In: Proceedings of the 2nd International Workshop on Web as Corpus,
 * edited by Adam Kilgarriff, Marco Baroni  ACL-06, pages 1-9, under Creative Commons Attribution-ShareAlike 4.0
 * Internation (CC BY-SA 4.0) license. Common Crawl Terms of Use apply. The corpus user-interface can be found here:
 * http://szotar.mokk.bme.hu/szoszablya/searchq.php
 */

/**
 * Returns a list of words that look like the participles used for the Hungarian passive voice assessment.
 * This list only includes words that look like participles ending in -re and -ra.
 *
 * @returns {Array}                The list with words that look like participles.
 */
exports.default = [
// Non passives ending in -va.
"éva", "szava", "moszkva", "alternatíva", "normatíva", "java", "jelszava", "direktíva", "perspektíva", "dráva", "lova", "kurva", "szilva", "páva", "kollektíva", "lárva", "szarva", "tava", "láva", "díva", "ponyva", "hava", "offenzíva", "előszava", "borotva", "színe-java", "hamva", "káva", "legjava", "mályva", "murva", "olíva", "híre-hamva", "pelyva", "címszava", "dudva", "sava", "csóva", "golyva", "árva", "fénycsóva", "utószava", "antikva", "közjava", "aktíva", "hadiárva", "morotva", "gyomorsava", "villanyborotva", "alapszava", "szerva", "odva", "naiva", "szupernova", "félárva", "harangszava", "szlalomozva", "halastava", "vezényszava", "falova", "defenzíva", "lángcsóva", "varázsszava", "végszava", "hadova", "dzsuva", "pányva", "sátorponyva", "parancsszava", "vezérszava", "falva", "durva", "gyáva", "tétova", "zagyva", "mogorva", "morva", "híva", "báva", "hova", "fordítva", "ahova", "felváltva", "valahova", "kurva", "sehova", "kisvártatva", "játszva", "hivatva", "mindenhova", "tova", "bárhova", "lopva", "idestova", "elragadtatva", "lélekszakadva", "fejcsóválva", "akárhova", "fogcsikorgatva", "tárva-nyitva", "hagyatva", "szájtátva", "készakarva", "karonfogva", "szívdobogva", "lélegzet-visszafojtva", "szívszorongva", "orozva", "fogvacogva", "szívszakadva", "fogvicsorítva", "bélapátfalva", "albertfalva",
// Non passives ending in -ve.
"éve", "neve", "könyve", "szíve", "teve", "elve", "műve", "kedve", "terve", "nyelve", "szerve", "medve", "híve", "alapelve", "törvénykönyve", "életműve", "irányelve", "kézikönyve", "felhasználóneve", "jegyzőkönyve", "diáknyelve", "leve", "ismérve", "tanterve", "hírneve", "objektíve", "íve", "emlékműve", "anyanyelve", "beceneve", "forgatókönyve", "féléve", "orgonaműve", "tankönyve", "alapköve", "jókedve", "évkönyve", "járműve", "köve", "keresztneve", "ráckeve", "munkaterve", "vezetékneve", "remekműve", "túrkeve", "töve", "öve", "futóműve", "heve", "sarokköve", "életéve", "vendégkönyve", "negyedéve", "jegesmedve", "csöve", "szócsöve", "keve", "üdve", "nedve", "gyűjtőneve", "fedőneve", "mérföldköve", "kéve", "ütemterve", "próbaköve", "gépjárműve", "domborműve", "ékköve", "rokonszenve", "érzékszerve", "kollektíve", "életkedve", "örve", "sérve", "verseskönyve", "füve", "építőköve", "ellenszenve", "álneve", "tanulmányterve", "szakácskönyve", "erőműve", "sarkköve", "barnamedve", "hajtóműve", "mesterműve", "színműve", "törzskönyve", "utóneve", "családneve", "formanyelve", "távcsöve", "tanéve", "mosómedve", "talpköve", "szövegkönyve", "sírköve", "keserve", "boltíve", "márkaneve", "munkakedve", "kérdőíve", "rosszkedve", "emlékkönyve", "gúnyneve", "szakkönyve", "pályaműve", "olvasókönyve", "előneve", "csúcsszerve", "személyneve", "atomerőműve", "útikönyve", "cséve", "telefonkönyve", "képeskönyve", "szabálykönyve", "nyakörve", "cseppköve", "látószerve", "mozgásszerve", "daloskönyve", "halászleve", "heresérve", "jogelve", "köldöksérve", "utcaneve", "eleve", "közvetve", "elvétve", "relatíve", "karöltve", "együttvéve", "vállvetve"];
//# sourceMappingURL=nonPassivesInVaAndVe.js.map
