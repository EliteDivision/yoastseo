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

// The verb stems that can have -ódik suffix.
const odikVerbStems1 = ["ábrázol", "ad", "adományoz", "ajándékoz", "akadályoz", "alakít", "alapít", "álcáz", "áldoz", "alkalmaz", "alkot", "állít", "arat", "ás", "automatizál", "azonosít", "befolyásol", "bírál", "bizonyít", "bocsát", "bont", "bonyolít", "csatol", "definiál", "deklarál", "digitalizál", "dob", "dokumentál", "dolgoz", "finanszíroz", "fogalmaz", "foglal", "foglalkoztat", "fogyaszt", "fojt", "fokoz", "fontol", "fordít", "forgalmaz", "garantál", "gyakorl", "gyárt", "gyógyít", "hagy", "hajt", "hálál", "hallgat", "hamisít", "hárít", "használ", "határoz", "hidal", "hoz", "igazít", "igazol", "illusztrál", "importál", "indít", "ír", "irányít", "istáz", "javasol", "javít", "jutalmaz", "kattint", "kínál", "kombinál", "kompenzál", "komponál", "kritizál", "kutat", "lapoz", "listáz", "locsol", "magyaráz", "másol", "moderál", "mond", "motivál", "mozgósít", "mulaszt", "mutat", "nyomtat", "nyújt", "olvas", "oszt", "parancsol", "postáz", "pótl", "próbál", "produkál", "ragaszt", "rak", "ráz", "regisztrál", "reklámoz", "rombol", "ront", "ruház", "sajátít", "sorol", "strukturál", "sugárz", "szabályoz", "szakít", "szállít", "számít", "számláz", "számol", "szavaz", "szimbolizál", "szólít", "szorít", "talál", "támogat", "tanít", "tárol", "tart", "taszít", "távolít", "tilt", "tisztít", "továbbít", "tudósít", "tulajdonít", "újít", "utal", "utasít", "válaszol", "választ", "válogat", "vált", "változtat", "varázsol", "világít", "világosít", "vitat", "vizsgál", "von"];

// The verb stems that can have -ődik suffix.
const odikVerbStems2 = ["beszél", "böngész", "bővít", "címz", "cserél", "derít", "díszít", "dönt", "egészít", "egyeztet", "egyszerűsít", "elégít", "emel", "említ", "engedélyez", "enyhít", "épít", "érint", "erősít", "ért", "értékel", "értelmez", "érzékeltet", "ev", "fedez", "fejleszt", "fejt", "fektet", "felejt", "feltev", "figyel", "fizet", "győz", "gyűjt", "hegeszt", "helyettesít", "helyez", "hirdet", "idéz", "igényl", "illeszt", "intéz", "ismer", "ítél", "ízesít", "jegyz", "jelenít", "jelent", "jelentkez", "jelöl", "kényszerít", "képvisel", "kérdez", "kerekít", "keresztel", "készít", "késztet", "kezel", "kivitelez", "kölcsönz", "köt", "követ", "közl", "közvetít", "küld", "különít", "küszöböl", "melegít", "mellékl", "mér", "nevez", "néz", "nyel", "nyer", "örökít", "őrz", "összegz", "összesít", "rendel", "rendez", "rögzít", "semmisít", "sürget", "szed", "szeg", "szennyez", "szerel", "szerkeszt", "szervez", "szigetel", "színez", "tekint", "telepít", "teljesít", "tenyészt", "teremt", "térít", "terjeszt", "tervez", "testesít", "tesztel", "tev", "tölt", "tömörít", "törl", "üldöz", "ültet", "végz", "veszélyeztet", "vet", "vetít", "vev", "vezet"];

exports.default = {
	odikVerbStems1: odikVerbStems1,
	odikVerbStems2: odikVerbStems2,
	all: odikVerbStems1.concat(odikVerbStems2)
};
//# sourceMappingURL=odikVerbs.js.map
