/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 74:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   f: () => (/* binding */ SystemExternal)
/* harmony export */ });
/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(714);
/* harmony import */ var _lib_external_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(268);


const windowSupported = (() => !(typeof window === 'undefined'))();
const documentSupported = (() => windowSupported && !(typeof window.document === 'undefined'))();
const webworker = (() => !(typeof DedicatedWorkerGlobalScope === 'undefined'))();
const nodeRequire = () => {
    try {
        return eval('require');
    }
    catch (_err) {
        return (_file) => null;
    }
};
const SystemExternal = {
    extRequire(library) {
        if (typeof process !== 'undefined' && typeof require !== 'undefined') {
            return nodeRequire()(library);
        }
        return null;
    },
    windowSupported: windowSupported,
    documentSupported: documentSupported,
    webworker: webworker,
    xmldom: _lib_external_js__WEBPACK_IMPORTED_MODULE_1__/* .xmldom */ .Gb,
    document: _lib_external_js__WEBPACK_IMPORTED_MODULE_1__/* .document */ .Al,
    fs: documentSupported || webworker ? null : nodeRequire()('fs'),
    url: _variables_js__WEBPACK_IMPORTED_MODULE_0__/* .Variables */ .u.url,
    jsonPath: (function () {
        if (documentSupported || webworker) {
            return _variables_js__WEBPACK_IMPORTED_MODULE_0__/* .Variables */ .u.url;
        }
        if (process.env.SRE_JSON_PATH || global.SRE_JSON_PATH) {
            return process.env.SRE_JSON_PATH || global.SRE_JSON_PATH;
        }
        try {
            const path = nodeRequire().resolve('speech-rule-engine');
            return path.replace(/sre\.js$/, '') + 'mathmaps';
        }
        catch (_err) {
        }
        try {
            const path = nodeRequire().resolve('.');
            return path.replace(/sre\.js$/, '') + 'mathmaps';
        }
        catch (_err) {
        }
        return typeof __dirname !== 'undefined'
            ? __dirname + (__dirname.match(/lib?$/) ? '/mathmaps' : '/lib/mathmaps')
            : process.cwd() + '/lib/mathmaps';
    })(),
    xpath: _lib_external_js__WEBPACK_IMPORTED_MODULE_1__/* .xpath */ .Oe
};
//# sourceMappingURL=system_external.js.map

/***/ }),

/***/ 159:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var freeze = (__webpack_require__(870).freeze);

/**
 * The entities that are predefined in every XML document.
 *
 * @see https://www.w3.org/TR/2006/REC-xml11-20060816/#sec-predefined-ent W3C XML 1.1
 * @see https://www.w3.org/TR/2008/REC-xml-20081126/#sec-predefined-ent W3C XML 1.0
 * @see https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Predefined_entities_in_XML
 *      Wikipedia
 */
exports.XML_ENTITIES = freeze({
	amp: '&',
	apos: "'",
	gt: '>',
	lt: '<',
	quot: '"',
});

/**
 * A map of all entities that are detected in an HTML document.
 * They contain all entries from `XML_ENTITIES`.
 *
 * @see {@link XML_ENTITIES}
 * @see {@link DOMParser.parseFromString}
 * @see {@link DOMImplementation.prototype.createHTMLDocument}
 * @see https://html.spec.whatwg.org/#named-character-references WHATWG HTML(5)
 *      Spec
 * @see https://html.spec.whatwg.org/entities.json JSON
 * @see https://www.w3.org/TR/xml-entity-names/ W3C XML Entity Names
 * @see https://www.w3.org/TR/html4/sgml/entities.html W3C HTML4/SGML
 * @see https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Character_entity_references_in_HTML
 *      Wikipedia (HTML)
 * @see https://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references#Entities_representing_special_characters_in_XHTML
 *      Wikpedia (XHTML)
 */
exports.HTML_ENTITIES = freeze({
	Aacute: '\u00C1',
	aacute: '\u00E1',
	Abreve: '\u0102',
	abreve: '\u0103',
	ac: '\u223E',
	acd: '\u223F',
	acE: '\u223E\u0333',
	Acirc: '\u00C2',
	acirc: '\u00E2',
	acute: '\u00B4',
	Acy: '\u0410',
	acy: '\u0430',
	AElig: '\u00C6',
	aelig: '\u00E6',
	af: '\u2061',
	Afr: '\uD835\uDD04',
	afr: '\uD835\uDD1E',
	Agrave: '\u00C0',
	agrave: '\u00E0',
	alefsym: '\u2135',
	aleph: '\u2135',
	Alpha: '\u0391',
	alpha: '\u03B1',
	Amacr: '\u0100',
	amacr: '\u0101',
	amalg: '\u2A3F',
	AMP: '\u0026',
	amp: '\u0026',
	And: '\u2A53',
	and: '\u2227',
	andand: '\u2A55',
	andd: '\u2A5C',
	andslope: '\u2A58',
	andv: '\u2A5A',
	ang: '\u2220',
	ange: '\u29A4',
	angle: '\u2220',
	angmsd: '\u2221',
	angmsdaa: '\u29A8',
	angmsdab: '\u29A9',
	angmsdac: '\u29AA',
	angmsdad: '\u29AB',
	angmsdae: '\u29AC',
	angmsdaf: '\u29AD',
	angmsdag: '\u29AE',
	angmsdah: '\u29AF',
	angrt: '\u221F',
	angrtvb: '\u22BE',
	angrtvbd: '\u299D',
	angsph: '\u2222',
	angst: '\u00C5',
	angzarr: '\u237C',
	Aogon: '\u0104',
	aogon: '\u0105',
	Aopf: '\uD835\uDD38',
	aopf: '\uD835\uDD52',
	ap: '\u2248',
	apacir: '\u2A6F',
	apE: '\u2A70',
	ape: '\u224A',
	apid: '\u224B',
	apos: '\u0027',
	ApplyFunction: '\u2061',
	approx: '\u2248',
	approxeq: '\u224A',
	Aring: '\u00C5',
	aring: '\u00E5',
	Ascr: '\uD835\uDC9C',
	ascr: '\uD835\uDCB6',
	Assign: '\u2254',
	ast: '\u002A',
	asymp: '\u2248',
	asympeq: '\u224D',
	Atilde: '\u00C3',
	atilde: '\u00E3',
	Auml: '\u00C4',
	auml: '\u00E4',
	awconint: '\u2233',
	awint: '\u2A11',
	backcong: '\u224C',
	backepsilon: '\u03F6',
	backprime: '\u2035',
	backsim: '\u223D',
	backsimeq: '\u22CD',
	Backslash: '\u2216',
	Barv: '\u2AE7',
	barvee: '\u22BD',
	Barwed: '\u2306',
	barwed: '\u2305',
	barwedge: '\u2305',
	bbrk: '\u23B5',
	bbrktbrk: '\u23B6',
	bcong: '\u224C',
	Bcy: '\u0411',
	bcy: '\u0431',
	bdquo: '\u201E',
	becaus: '\u2235',
	Because: '\u2235',
	because: '\u2235',
	bemptyv: '\u29B0',
	bepsi: '\u03F6',
	bernou: '\u212C',
	Bernoullis: '\u212C',
	Beta: '\u0392',
	beta: '\u03B2',
	beth: '\u2136',
	between: '\u226C',
	Bfr: '\uD835\uDD05',
	bfr: '\uD835\uDD1F',
	bigcap: '\u22C2',
	bigcirc: '\u25EF',
	bigcup: '\u22C3',
	bigodot: '\u2A00',
	bigoplus: '\u2A01',
	bigotimes: '\u2A02',
	bigsqcup: '\u2A06',
	bigstar: '\u2605',
	bigtriangledown: '\u25BD',
	bigtriangleup: '\u25B3',
	biguplus: '\u2A04',
	bigvee: '\u22C1',
	bigwedge: '\u22C0',
	bkarow: '\u290D',
	blacklozenge: '\u29EB',
	blacksquare: '\u25AA',
	blacktriangle: '\u25B4',
	blacktriangledown: '\u25BE',
	blacktriangleleft: '\u25C2',
	blacktriangleright: '\u25B8',
	blank: '\u2423',
	blk12: '\u2592',
	blk14: '\u2591',
	blk34: '\u2593',
	block: '\u2588',
	bne: '\u003D\u20E5',
	bnequiv: '\u2261\u20E5',
	bNot: '\u2AED',
	bnot: '\u2310',
	Bopf: '\uD835\uDD39',
	bopf: '\uD835\uDD53',
	bot: '\u22A5',
	bottom: '\u22A5',
	bowtie: '\u22C8',
	boxbox: '\u29C9',
	boxDL: '\u2557',
	boxDl: '\u2556',
	boxdL: '\u2555',
	boxdl: '\u2510',
	boxDR: '\u2554',
	boxDr: '\u2553',
	boxdR: '\u2552',
	boxdr: '\u250C',
	boxH: '\u2550',
	boxh: '\u2500',
	boxHD: '\u2566',
	boxHd: '\u2564',
	boxhD: '\u2565',
	boxhd: '\u252C',
	boxHU: '\u2569',
	boxHu: '\u2567',
	boxhU: '\u2568',
	boxhu: '\u2534',
	boxminus: '\u229F',
	boxplus: '\u229E',
	boxtimes: '\u22A0',
	boxUL: '\u255D',
	boxUl: '\u255C',
	boxuL: '\u255B',
	boxul: '\u2518',
	boxUR: '\u255A',
	boxUr: '\u2559',
	boxuR: '\u2558',
	boxur: '\u2514',
	boxV: '\u2551',
	boxv: '\u2502',
	boxVH: '\u256C',
	boxVh: '\u256B',
	boxvH: '\u256A',
	boxvh: '\u253C',
	boxVL: '\u2563',
	boxVl: '\u2562',
	boxvL: '\u2561',
	boxvl: '\u2524',
	boxVR: '\u2560',
	boxVr: '\u255F',
	boxvR: '\u255E',
	boxvr: '\u251C',
	bprime: '\u2035',
	Breve: '\u02D8',
	breve: '\u02D8',
	brvbar: '\u00A6',
	Bscr: '\u212C',
	bscr: '\uD835\uDCB7',
	bsemi: '\u204F',
	bsim: '\u223D',
	bsime: '\u22CD',
	bsol: '\u005C',
	bsolb: '\u29C5',
	bsolhsub: '\u27C8',
	bull: '\u2022',
	bullet: '\u2022',
	bump: '\u224E',
	bumpE: '\u2AAE',
	bumpe: '\u224F',
	Bumpeq: '\u224E',
	bumpeq: '\u224F',
	Cacute: '\u0106',
	cacute: '\u0107',
	Cap: '\u22D2',
	cap: '\u2229',
	capand: '\u2A44',
	capbrcup: '\u2A49',
	capcap: '\u2A4B',
	capcup: '\u2A47',
	capdot: '\u2A40',
	CapitalDifferentialD: '\u2145',
	caps: '\u2229\uFE00',
	caret: '\u2041',
	caron: '\u02C7',
	Cayleys: '\u212D',
	ccaps: '\u2A4D',
	Ccaron: '\u010C',
	ccaron: '\u010D',
	Ccedil: '\u00C7',
	ccedil: '\u00E7',
	Ccirc: '\u0108',
	ccirc: '\u0109',
	Cconint: '\u2230',
	ccups: '\u2A4C',
	ccupssm: '\u2A50',
	Cdot: '\u010A',
	cdot: '\u010B',
	cedil: '\u00B8',
	Cedilla: '\u00B8',
	cemptyv: '\u29B2',
	cent: '\u00A2',
	CenterDot: '\u00B7',
	centerdot: '\u00B7',
	Cfr: '\u212D',
	cfr: '\uD835\uDD20',
	CHcy: '\u0427',
	chcy: '\u0447',
	check: '\u2713',
	checkmark: '\u2713',
	Chi: '\u03A7',
	chi: '\u03C7',
	cir: '\u25CB',
	circ: '\u02C6',
	circeq: '\u2257',
	circlearrowleft: '\u21BA',
	circlearrowright: '\u21BB',
	circledast: '\u229B',
	circledcirc: '\u229A',
	circleddash: '\u229D',
	CircleDot: '\u2299',
	circledR: '\u00AE',
	circledS: '\u24C8',
	CircleMinus: '\u2296',
	CirclePlus: '\u2295',
	CircleTimes: '\u2297',
	cirE: '\u29C3',
	cire: '\u2257',
	cirfnint: '\u2A10',
	cirmid: '\u2AEF',
	cirscir: '\u29C2',
	ClockwiseContourIntegral: '\u2232',
	CloseCurlyDoubleQuote: '\u201D',
	CloseCurlyQuote: '\u2019',
	clubs: '\u2663',
	clubsuit: '\u2663',
	Colon: '\u2237',
	colon: '\u003A',
	Colone: '\u2A74',
	colone: '\u2254',
	coloneq: '\u2254',
	comma: '\u002C',
	commat: '\u0040',
	comp: '\u2201',
	compfn: '\u2218',
	complement: '\u2201',
	complexes: '\u2102',
	cong: '\u2245',
	congdot: '\u2A6D',
	Congruent: '\u2261',
	Conint: '\u222F',
	conint: '\u222E',
	ContourIntegral: '\u222E',
	Copf: '\u2102',
	copf: '\uD835\uDD54',
	coprod: '\u2210',
	Coproduct: '\u2210',
	COPY: '\u00A9',
	copy: '\u00A9',
	copysr: '\u2117',
	CounterClockwiseContourIntegral: '\u2233',
	crarr: '\u21B5',
	Cross: '\u2A2F',
	cross: '\u2717',
	Cscr: '\uD835\uDC9E',
	cscr: '\uD835\uDCB8',
	csub: '\u2ACF',
	csube: '\u2AD1',
	csup: '\u2AD0',
	csupe: '\u2AD2',
	ctdot: '\u22EF',
	cudarrl: '\u2938',
	cudarrr: '\u2935',
	cuepr: '\u22DE',
	cuesc: '\u22DF',
	cularr: '\u21B6',
	cularrp: '\u293D',
	Cup: '\u22D3',
	cup: '\u222A',
	cupbrcap: '\u2A48',
	CupCap: '\u224D',
	cupcap: '\u2A46',
	cupcup: '\u2A4A',
	cupdot: '\u228D',
	cupor: '\u2A45',
	cups: '\u222A\uFE00',
	curarr: '\u21B7',
	curarrm: '\u293C',
	curlyeqprec: '\u22DE',
	curlyeqsucc: '\u22DF',
	curlyvee: '\u22CE',
	curlywedge: '\u22CF',
	curren: '\u00A4',
	curvearrowleft: '\u21B6',
	curvearrowright: '\u21B7',
	cuvee: '\u22CE',
	cuwed: '\u22CF',
	cwconint: '\u2232',
	cwint: '\u2231',
	cylcty: '\u232D',
	Dagger: '\u2021',
	dagger: '\u2020',
	daleth: '\u2138',
	Darr: '\u21A1',
	dArr: '\u21D3',
	darr: '\u2193',
	dash: '\u2010',
	Dashv: '\u2AE4',
	dashv: '\u22A3',
	dbkarow: '\u290F',
	dblac: '\u02DD',
	Dcaron: '\u010E',
	dcaron: '\u010F',
	Dcy: '\u0414',
	dcy: '\u0434',
	DD: '\u2145',
	dd: '\u2146',
	ddagger: '\u2021',
	ddarr: '\u21CA',
	DDotrahd: '\u2911',
	ddotseq: '\u2A77',
	deg: '\u00B0',
	Del: '\u2207',
	Delta: '\u0394',
	delta: '\u03B4',
	demptyv: '\u29B1',
	dfisht: '\u297F',
	Dfr: '\uD835\uDD07',
	dfr: '\uD835\uDD21',
	dHar: '\u2965',
	dharl: '\u21C3',
	dharr: '\u21C2',
	DiacriticalAcute: '\u00B4',
	DiacriticalDot: '\u02D9',
	DiacriticalDoubleAcute: '\u02DD',
	DiacriticalGrave: '\u0060',
	DiacriticalTilde: '\u02DC',
	diam: '\u22C4',
	Diamond: '\u22C4',
	diamond: '\u22C4',
	diamondsuit: '\u2666',
	diams: '\u2666',
	die: '\u00A8',
	DifferentialD: '\u2146',
	digamma: '\u03DD',
	disin: '\u22F2',
	div: '\u00F7',
	divide: '\u00F7',
	divideontimes: '\u22C7',
	divonx: '\u22C7',
	DJcy: '\u0402',
	djcy: '\u0452',
	dlcorn: '\u231E',
	dlcrop: '\u230D',
	dollar: '\u0024',
	Dopf: '\uD835\uDD3B',
	dopf: '\uD835\uDD55',
	Dot: '\u00A8',
	dot: '\u02D9',
	DotDot: '\u20DC',
	doteq: '\u2250',
	doteqdot: '\u2251',
	DotEqual: '\u2250',
	dotminus: '\u2238',
	dotplus: '\u2214',
	dotsquare: '\u22A1',
	doublebarwedge: '\u2306',
	DoubleContourIntegral: '\u222F',
	DoubleDot: '\u00A8',
	DoubleDownArrow: '\u21D3',
	DoubleLeftArrow: '\u21D0',
	DoubleLeftRightArrow: '\u21D4',
	DoubleLeftTee: '\u2AE4',
	DoubleLongLeftArrow: '\u27F8',
	DoubleLongLeftRightArrow: '\u27FA',
	DoubleLongRightArrow: '\u27F9',
	DoubleRightArrow: '\u21D2',
	DoubleRightTee: '\u22A8',
	DoubleUpArrow: '\u21D1',
	DoubleUpDownArrow: '\u21D5',
	DoubleVerticalBar: '\u2225',
	DownArrow: '\u2193',
	Downarrow: '\u21D3',
	downarrow: '\u2193',
	DownArrowBar: '\u2913',
	DownArrowUpArrow: '\u21F5',
	DownBreve: '\u0311',
	downdownarrows: '\u21CA',
	downharpoonleft: '\u21C3',
	downharpoonright: '\u21C2',
	DownLeftRightVector: '\u2950',
	DownLeftTeeVector: '\u295E',
	DownLeftVector: '\u21BD',
	DownLeftVectorBar: '\u2956',
	DownRightTeeVector: '\u295F',
	DownRightVector: '\u21C1',
	DownRightVectorBar: '\u2957',
	DownTee: '\u22A4',
	DownTeeArrow: '\u21A7',
	drbkarow: '\u2910',
	drcorn: '\u231F',
	drcrop: '\u230C',
	Dscr: '\uD835\uDC9F',
	dscr: '\uD835\uDCB9',
	DScy: '\u0405',
	dscy: '\u0455',
	dsol: '\u29F6',
	Dstrok: '\u0110',
	dstrok: '\u0111',
	dtdot: '\u22F1',
	dtri: '\u25BF',
	dtrif: '\u25BE',
	duarr: '\u21F5',
	duhar: '\u296F',
	dwangle: '\u29A6',
	DZcy: '\u040F',
	dzcy: '\u045F',
	dzigrarr: '\u27FF',
	Eacute: '\u00C9',
	eacute: '\u00E9',
	easter: '\u2A6E',
	Ecaron: '\u011A',
	ecaron: '\u011B',
	ecir: '\u2256',
	Ecirc: '\u00CA',
	ecirc: '\u00EA',
	ecolon: '\u2255',
	Ecy: '\u042D',
	ecy: '\u044D',
	eDDot: '\u2A77',
	Edot: '\u0116',
	eDot: '\u2251',
	edot: '\u0117',
	ee: '\u2147',
	efDot: '\u2252',
	Efr: '\uD835\uDD08',
	efr: '\uD835\uDD22',
	eg: '\u2A9A',
	Egrave: '\u00C8',
	egrave: '\u00E8',
	egs: '\u2A96',
	egsdot: '\u2A98',
	el: '\u2A99',
	Element: '\u2208',
	elinters: '\u23E7',
	ell: '\u2113',
	els: '\u2A95',
	elsdot: '\u2A97',
	Emacr: '\u0112',
	emacr: '\u0113',
	empty: '\u2205',
	emptyset: '\u2205',
	EmptySmallSquare: '\u25FB',
	emptyv: '\u2205',
	EmptyVerySmallSquare: '\u25AB',
	emsp: '\u2003',
	emsp13: '\u2004',
	emsp14: '\u2005',
	ENG: '\u014A',
	eng: '\u014B',
	ensp: '\u2002',
	Eogon: '\u0118',
	eogon: '\u0119',
	Eopf: '\uD835\uDD3C',
	eopf: '\uD835\uDD56',
	epar: '\u22D5',
	eparsl: '\u29E3',
	eplus: '\u2A71',
	epsi: '\u03B5',
	Epsilon: '\u0395',
	epsilon: '\u03B5',
	epsiv: '\u03F5',
	eqcirc: '\u2256',
	eqcolon: '\u2255',
	eqsim: '\u2242',
	eqslantgtr: '\u2A96',
	eqslantless: '\u2A95',
	Equal: '\u2A75',
	equals: '\u003D',
	EqualTilde: '\u2242',
	equest: '\u225F',
	Equilibrium: '\u21CC',
	equiv: '\u2261',
	equivDD: '\u2A78',
	eqvparsl: '\u29E5',
	erarr: '\u2971',
	erDot: '\u2253',
	Escr: '\u2130',
	escr: '\u212F',
	esdot: '\u2250',
	Esim: '\u2A73',
	esim: '\u2242',
	Eta: '\u0397',
	eta: '\u03B7',
	ETH: '\u00D0',
	eth: '\u00F0',
	Euml: '\u00CB',
	euml: '\u00EB',
	euro: '\u20AC',
	excl: '\u0021',
	exist: '\u2203',
	Exists: '\u2203',
	expectation: '\u2130',
	ExponentialE: '\u2147',
	exponentiale: '\u2147',
	fallingdotseq: '\u2252',
	Fcy: '\u0424',
	fcy: '\u0444',
	female: '\u2640',
	ffilig: '\uFB03',
	fflig: '\uFB00',
	ffllig: '\uFB04',
	Ffr: '\uD835\uDD09',
	ffr: '\uD835\uDD23',
	filig: '\uFB01',
	FilledSmallSquare: '\u25FC',
	FilledVerySmallSquare: '\u25AA',
	fjlig: '\u0066\u006A',
	flat: '\u266D',
	fllig: '\uFB02',
	fltns: '\u25B1',
	fnof: '\u0192',
	Fopf: '\uD835\uDD3D',
	fopf: '\uD835\uDD57',
	ForAll: '\u2200',
	forall: '\u2200',
	fork: '\u22D4',
	forkv: '\u2AD9',
	Fouriertrf: '\u2131',
	fpartint: '\u2A0D',
	frac12: '\u00BD',
	frac13: '\u2153',
	frac14: '\u00BC',
	frac15: '\u2155',
	frac16: '\u2159',
	frac18: '\u215B',
	frac23: '\u2154',
	frac25: '\u2156',
	frac34: '\u00BE',
	frac35: '\u2157',
	frac38: '\u215C',
	frac45: '\u2158',
	frac56: '\u215A',
	frac58: '\u215D',
	frac78: '\u215E',
	frasl: '\u2044',
	frown: '\u2322',
	Fscr: '\u2131',
	fscr: '\uD835\uDCBB',
	gacute: '\u01F5',
	Gamma: '\u0393',
	gamma: '\u03B3',
	Gammad: '\u03DC',
	gammad: '\u03DD',
	gap: '\u2A86',
	Gbreve: '\u011E',
	gbreve: '\u011F',
	Gcedil: '\u0122',
	Gcirc: '\u011C',
	gcirc: '\u011D',
	Gcy: '\u0413',
	gcy: '\u0433',
	Gdot: '\u0120',
	gdot: '\u0121',
	gE: '\u2267',
	ge: '\u2265',
	gEl: '\u2A8C',
	gel: '\u22DB',
	geq: '\u2265',
	geqq: '\u2267',
	geqslant: '\u2A7E',
	ges: '\u2A7E',
	gescc: '\u2AA9',
	gesdot: '\u2A80',
	gesdoto: '\u2A82',
	gesdotol: '\u2A84',
	gesl: '\u22DB\uFE00',
	gesles: '\u2A94',
	Gfr: '\uD835\uDD0A',
	gfr: '\uD835\uDD24',
	Gg: '\u22D9',
	gg: '\u226B',
	ggg: '\u22D9',
	gimel: '\u2137',
	GJcy: '\u0403',
	gjcy: '\u0453',
	gl: '\u2277',
	gla: '\u2AA5',
	glE: '\u2A92',
	glj: '\u2AA4',
	gnap: '\u2A8A',
	gnapprox: '\u2A8A',
	gnE: '\u2269',
	gne: '\u2A88',
	gneq: '\u2A88',
	gneqq: '\u2269',
	gnsim: '\u22E7',
	Gopf: '\uD835\uDD3E',
	gopf: '\uD835\uDD58',
	grave: '\u0060',
	GreaterEqual: '\u2265',
	GreaterEqualLess: '\u22DB',
	GreaterFullEqual: '\u2267',
	GreaterGreater: '\u2AA2',
	GreaterLess: '\u2277',
	GreaterSlantEqual: '\u2A7E',
	GreaterTilde: '\u2273',
	Gscr: '\uD835\uDCA2',
	gscr: '\u210A',
	gsim: '\u2273',
	gsime: '\u2A8E',
	gsiml: '\u2A90',
	Gt: '\u226B',
	GT: '\u003E',
	gt: '\u003E',
	gtcc: '\u2AA7',
	gtcir: '\u2A7A',
	gtdot: '\u22D7',
	gtlPar: '\u2995',
	gtquest: '\u2A7C',
	gtrapprox: '\u2A86',
	gtrarr: '\u2978',
	gtrdot: '\u22D7',
	gtreqless: '\u22DB',
	gtreqqless: '\u2A8C',
	gtrless: '\u2277',
	gtrsim: '\u2273',
	gvertneqq: '\u2269\uFE00',
	gvnE: '\u2269\uFE00',
	Hacek: '\u02C7',
	hairsp: '\u200A',
	half: '\u00BD',
	hamilt: '\u210B',
	HARDcy: '\u042A',
	hardcy: '\u044A',
	hArr: '\u21D4',
	harr: '\u2194',
	harrcir: '\u2948',
	harrw: '\u21AD',
	Hat: '\u005E',
	hbar: '\u210F',
	Hcirc: '\u0124',
	hcirc: '\u0125',
	hearts: '\u2665',
	heartsuit: '\u2665',
	hellip: '\u2026',
	hercon: '\u22B9',
	Hfr: '\u210C',
	hfr: '\uD835\uDD25',
	HilbertSpace: '\u210B',
	hksearow: '\u2925',
	hkswarow: '\u2926',
	hoarr: '\u21FF',
	homtht: '\u223B',
	hookleftarrow: '\u21A9',
	hookrightarrow: '\u21AA',
	Hopf: '\u210D',
	hopf: '\uD835\uDD59',
	horbar: '\u2015',
	HorizontalLine: '\u2500',
	Hscr: '\u210B',
	hscr: '\uD835\uDCBD',
	hslash: '\u210F',
	Hstrok: '\u0126',
	hstrok: '\u0127',
	HumpDownHump: '\u224E',
	HumpEqual: '\u224F',
	hybull: '\u2043',
	hyphen: '\u2010',
	Iacute: '\u00CD',
	iacute: '\u00ED',
	ic: '\u2063',
	Icirc: '\u00CE',
	icirc: '\u00EE',
	Icy: '\u0418',
	icy: '\u0438',
	Idot: '\u0130',
	IEcy: '\u0415',
	iecy: '\u0435',
	iexcl: '\u00A1',
	iff: '\u21D4',
	Ifr: '\u2111',
	ifr: '\uD835\uDD26',
	Igrave: '\u00CC',
	igrave: '\u00EC',
	ii: '\u2148',
	iiiint: '\u2A0C',
	iiint: '\u222D',
	iinfin: '\u29DC',
	iiota: '\u2129',
	IJlig: '\u0132',
	ijlig: '\u0133',
	Im: '\u2111',
	Imacr: '\u012A',
	imacr: '\u012B',
	image: '\u2111',
	ImaginaryI: '\u2148',
	imagline: '\u2110',
	imagpart: '\u2111',
	imath: '\u0131',
	imof: '\u22B7',
	imped: '\u01B5',
	Implies: '\u21D2',
	in: '\u2208',
	incare: '\u2105',
	infin: '\u221E',
	infintie: '\u29DD',
	inodot: '\u0131',
	Int: '\u222C',
	int: '\u222B',
	intcal: '\u22BA',
	integers: '\u2124',
	Integral: '\u222B',
	intercal: '\u22BA',
	Intersection: '\u22C2',
	intlarhk: '\u2A17',
	intprod: '\u2A3C',
	InvisibleComma: '\u2063',
	InvisibleTimes: '\u2062',
	IOcy: '\u0401',
	iocy: '\u0451',
	Iogon: '\u012E',
	iogon: '\u012F',
	Iopf: '\uD835\uDD40',
	iopf: '\uD835\uDD5A',
	Iota: '\u0399',
	iota: '\u03B9',
	iprod: '\u2A3C',
	iquest: '\u00BF',
	Iscr: '\u2110',
	iscr: '\uD835\uDCBE',
	isin: '\u2208',
	isindot: '\u22F5',
	isinE: '\u22F9',
	isins: '\u22F4',
	isinsv: '\u22F3',
	isinv: '\u2208',
	it: '\u2062',
	Itilde: '\u0128',
	itilde: '\u0129',
	Iukcy: '\u0406',
	iukcy: '\u0456',
	Iuml: '\u00CF',
	iuml: '\u00EF',
	Jcirc: '\u0134',
	jcirc: '\u0135',
	Jcy: '\u0419',
	jcy: '\u0439',
	Jfr: '\uD835\uDD0D',
	jfr: '\uD835\uDD27',
	jmath: '\u0237',
	Jopf: '\uD835\uDD41',
	jopf: '\uD835\uDD5B',
	Jscr: '\uD835\uDCA5',
	jscr: '\uD835\uDCBF',
	Jsercy: '\u0408',
	jsercy: '\u0458',
	Jukcy: '\u0404',
	jukcy: '\u0454',
	Kappa: '\u039A',
	kappa: '\u03BA',
	kappav: '\u03F0',
	Kcedil: '\u0136',
	kcedil: '\u0137',
	Kcy: '\u041A',
	kcy: '\u043A',
	Kfr: '\uD835\uDD0E',
	kfr: '\uD835\uDD28',
	kgreen: '\u0138',
	KHcy: '\u0425',
	khcy: '\u0445',
	KJcy: '\u040C',
	kjcy: '\u045C',
	Kopf: '\uD835\uDD42',
	kopf: '\uD835\uDD5C',
	Kscr: '\uD835\uDCA6',
	kscr: '\uD835\uDCC0',
	lAarr: '\u21DA',
	Lacute: '\u0139',
	lacute: '\u013A',
	laemptyv: '\u29B4',
	lagran: '\u2112',
	Lambda: '\u039B',
	lambda: '\u03BB',
	Lang: '\u27EA',
	lang: '\u27E8',
	langd: '\u2991',
	langle: '\u27E8',
	lap: '\u2A85',
	Laplacetrf: '\u2112',
	laquo: '\u00AB',
	Larr: '\u219E',
	lArr: '\u21D0',
	larr: '\u2190',
	larrb: '\u21E4',
	larrbfs: '\u291F',
	larrfs: '\u291D',
	larrhk: '\u21A9',
	larrlp: '\u21AB',
	larrpl: '\u2939',
	larrsim: '\u2973',
	larrtl: '\u21A2',
	lat: '\u2AAB',
	lAtail: '\u291B',
	latail: '\u2919',
	late: '\u2AAD',
	lates: '\u2AAD\uFE00',
	lBarr: '\u290E',
	lbarr: '\u290C',
	lbbrk: '\u2772',
	lbrace: '\u007B',
	lbrack: '\u005B',
	lbrke: '\u298B',
	lbrksld: '\u298F',
	lbrkslu: '\u298D',
	Lcaron: '\u013D',
	lcaron: '\u013E',
	Lcedil: '\u013B',
	lcedil: '\u013C',
	lceil: '\u2308',
	lcub: '\u007B',
	Lcy: '\u041B',
	lcy: '\u043B',
	ldca: '\u2936',
	ldquo: '\u201C',
	ldquor: '\u201E',
	ldrdhar: '\u2967',
	ldrushar: '\u294B',
	ldsh: '\u21B2',
	lE: '\u2266',
	le: '\u2264',
	LeftAngleBracket: '\u27E8',
	LeftArrow: '\u2190',
	Leftarrow: '\u21D0',
	leftarrow: '\u2190',
	LeftArrowBar: '\u21E4',
	LeftArrowRightArrow: '\u21C6',
	leftarrowtail: '\u21A2',
	LeftCeiling: '\u2308',
	LeftDoubleBracket: '\u27E6',
	LeftDownTeeVector: '\u2961',
	LeftDownVector: '\u21C3',
	LeftDownVectorBar: '\u2959',
	LeftFloor: '\u230A',
	leftharpoondown: '\u21BD',
	leftharpoonup: '\u21BC',
	leftleftarrows: '\u21C7',
	LeftRightArrow: '\u2194',
	Leftrightarrow: '\u21D4',
	leftrightarrow: '\u2194',
	leftrightarrows: '\u21C6',
	leftrightharpoons: '\u21CB',
	leftrightsquigarrow: '\u21AD',
	LeftRightVector: '\u294E',
	LeftTee: '\u22A3',
	LeftTeeArrow: '\u21A4',
	LeftTeeVector: '\u295A',
	leftthreetimes: '\u22CB',
	LeftTriangle: '\u22B2',
	LeftTriangleBar: '\u29CF',
	LeftTriangleEqual: '\u22B4',
	LeftUpDownVector: '\u2951',
	LeftUpTeeVector: '\u2960',
	LeftUpVector: '\u21BF',
	LeftUpVectorBar: '\u2958',
	LeftVector: '\u21BC',
	LeftVectorBar: '\u2952',
	lEg: '\u2A8B',
	leg: '\u22DA',
	leq: '\u2264',
	leqq: '\u2266',
	leqslant: '\u2A7D',
	les: '\u2A7D',
	lescc: '\u2AA8',
	lesdot: '\u2A7F',
	lesdoto: '\u2A81',
	lesdotor: '\u2A83',
	lesg: '\u22DA\uFE00',
	lesges: '\u2A93',
	lessapprox: '\u2A85',
	lessdot: '\u22D6',
	lesseqgtr: '\u22DA',
	lesseqqgtr: '\u2A8B',
	LessEqualGreater: '\u22DA',
	LessFullEqual: '\u2266',
	LessGreater: '\u2276',
	lessgtr: '\u2276',
	LessLess: '\u2AA1',
	lesssim: '\u2272',
	LessSlantEqual: '\u2A7D',
	LessTilde: '\u2272',
	lfisht: '\u297C',
	lfloor: '\u230A',
	Lfr: '\uD835\uDD0F',
	lfr: '\uD835\uDD29',
	lg: '\u2276',
	lgE: '\u2A91',
	lHar: '\u2962',
	lhard: '\u21BD',
	lharu: '\u21BC',
	lharul: '\u296A',
	lhblk: '\u2584',
	LJcy: '\u0409',
	ljcy: '\u0459',
	Ll: '\u22D8',
	ll: '\u226A',
	llarr: '\u21C7',
	llcorner: '\u231E',
	Lleftarrow: '\u21DA',
	llhard: '\u296B',
	lltri: '\u25FA',
	Lmidot: '\u013F',
	lmidot: '\u0140',
	lmoust: '\u23B0',
	lmoustache: '\u23B0',
	lnap: '\u2A89',
	lnapprox: '\u2A89',
	lnE: '\u2268',
	lne: '\u2A87',
	lneq: '\u2A87',
	lneqq: '\u2268',
	lnsim: '\u22E6',
	loang: '\u27EC',
	loarr: '\u21FD',
	lobrk: '\u27E6',
	LongLeftArrow: '\u27F5',
	Longleftarrow: '\u27F8',
	longleftarrow: '\u27F5',
	LongLeftRightArrow: '\u27F7',
	Longleftrightarrow: '\u27FA',
	longleftrightarrow: '\u27F7',
	longmapsto: '\u27FC',
	LongRightArrow: '\u27F6',
	Longrightarrow: '\u27F9',
	longrightarrow: '\u27F6',
	looparrowleft: '\u21AB',
	looparrowright: '\u21AC',
	lopar: '\u2985',
	Lopf: '\uD835\uDD43',
	lopf: '\uD835\uDD5D',
	loplus: '\u2A2D',
	lotimes: '\u2A34',
	lowast: '\u2217',
	lowbar: '\u005F',
	LowerLeftArrow: '\u2199',
	LowerRightArrow: '\u2198',
	loz: '\u25CA',
	lozenge: '\u25CA',
	lozf: '\u29EB',
	lpar: '\u0028',
	lparlt: '\u2993',
	lrarr: '\u21C6',
	lrcorner: '\u231F',
	lrhar: '\u21CB',
	lrhard: '\u296D',
	lrm: '\u200E',
	lrtri: '\u22BF',
	lsaquo: '\u2039',
	Lscr: '\u2112',
	lscr: '\uD835\uDCC1',
	Lsh: '\u21B0',
	lsh: '\u21B0',
	lsim: '\u2272',
	lsime: '\u2A8D',
	lsimg: '\u2A8F',
	lsqb: '\u005B',
	lsquo: '\u2018',
	lsquor: '\u201A',
	Lstrok: '\u0141',
	lstrok: '\u0142',
	Lt: '\u226A',
	LT: '\u003C',
	lt: '\u003C',
	ltcc: '\u2AA6',
	ltcir: '\u2A79',
	ltdot: '\u22D6',
	lthree: '\u22CB',
	ltimes: '\u22C9',
	ltlarr: '\u2976',
	ltquest: '\u2A7B',
	ltri: '\u25C3',
	ltrie: '\u22B4',
	ltrif: '\u25C2',
	ltrPar: '\u2996',
	lurdshar: '\u294A',
	luruhar: '\u2966',
	lvertneqq: '\u2268\uFE00',
	lvnE: '\u2268\uFE00',
	macr: '\u00AF',
	male: '\u2642',
	malt: '\u2720',
	maltese: '\u2720',
	Map: '\u2905',
	map: '\u21A6',
	mapsto: '\u21A6',
	mapstodown: '\u21A7',
	mapstoleft: '\u21A4',
	mapstoup: '\u21A5',
	marker: '\u25AE',
	mcomma: '\u2A29',
	Mcy: '\u041C',
	mcy: '\u043C',
	mdash: '\u2014',
	mDDot: '\u223A',
	measuredangle: '\u2221',
	MediumSpace: '\u205F',
	Mellintrf: '\u2133',
	Mfr: '\uD835\uDD10',
	mfr: '\uD835\uDD2A',
	mho: '\u2127',
	micro: '\u00B5',
	mid: '\u2223',
	midast: '\u002A',
	midcir: '\u2AF0',
	middot: '\u00B7',
	minus: '\u2212',
	minusb: '\u229F',
	minusd: '\u2238',
	minusdu: '\u2A2A',
	MinusPlus: '\u2213',
	mlcp: '\u2ADB',
	mldr: '\u2026',
	mnplus: '\u2213',
	models: '\u22A7',
	Mopf: '\uD835\uDD44',
	mopf: '\uD835\uDD5E',
	mp: '\u2213',
	Mscr: '\u2133',
	mscr: '\uD835\uDCC2',
	mstpos: '\u223E',
	Mu: '\u039C',
	mu: '\u03BC',
	multimap: '\u22B8',
	mumap: '\u22B8',
	nabla: '\u2207',
	Nacute: '\u0143',
	nacute: '\u0144',
	nang: '\u2220\u20D2',
	nap: '\u2249',
	napE: '\u2A70\u0338',
	napid: '\u224B\u0338',
	napos: '\u0149',
	napprox: '\u2249',
	natur: '\u266E',
	natural: '\u266E',
	naturals: '\u2115',
	nbsp: '\u00A0',
	nbump: '\u224E\u0338',
	nbumpe: '\u224F\u0338',
	ncap: '\u2A43',
	Ncaron: '\u0147',
	ncaron: '\u0148',
	Ncedil: '\u0145',
	ncedil: '\u0146',
	ncong: '\u2247',
	ncongdot: '\u2A6D\u0338',
	ncup: '\u2A42',
	Ncy: '\u041D',
	ncy: '\u043D',
	ndash: '\u2013',
	ne: '\u2260',
	nearhk: '\u2924',
	neArr: '\u21D7',
	nearr: '\u2197',
	nearrow: '\u2197',
	nedot: '\u2250\u0338',
	NegativeMediumSpace: '\u200B',
	NegativeThickSpace: '\u200B',
	NegativeThinSpace: '\u200B',
	NegativeVeryThinSpace: '\u200B',
	nequiv: '\u2262',
	nesear: '\u2928',
	nesim: '\u2242\u0338',
	NestedGreaterGreater: '\u226B',
	NestedLessLess: '\u226A',
	NewLine: '\u000A',
	nexist: '\u2204',
	nexists: '\u2204',
	Nfr: '\uD835\uDD11',
	nfr: '\uD835\uDD2B',
	ngE: '\u2267\u0338',
	nge: '\u2271',
	ngeq: '\u2271',
	ngeqq: '\u2267\u0338',
	ngeqslant: '\u2A7E\u0338',
	nges: '\u2A7E\u0338',
	nGg: '\u22D9\u0338',
	ngsim: '\u2275',
	nGt: '\u226B\u20D2',
	ngt: '\u226F',
	ngtr: '\u226F',
	nGtv: '\u226B\u0338',
	nhArr: '\u21CE',
	nharr: '\u21AE',
	nhpar: '\u2AF2',
	ni: '\u220B',
	nis: '\u22FC',
	nisd: '\u22FA',
	niv: '\u220B',
	NJcy: '\u040A',
	njcy: '\u045A',
	nlArr: '\u21CD',
	nlarr: '\u219A',
	nldr: '\u2025',
	nlE: '\u2266\u0338',
	nle: '\u2270',
	nLeftarrow: '\u21CD',
	nleftarrow: '\u219A',
	nLeftrightarrow: '\u21CE',
	nleftrightarrow: '\u21AE',
	nleq: '\u2270',
	nleqq: '\u2266\u0338',
	nleqslant: '\u2A7D\u0338',
	nles: '\u2A7D\u0338',
	nless: '\u226E',
	nLl: '\u22D8\u0338',
	nlsim: '\u2274',
	nLt: '\u226A\u20D2',
	nlt: '\u226E',
	nltri: '\u22EA',
	nltrie: '\u22EC',
	nLtv: '\u226A\u0338',
	nmid: '\u2224',
	NoBreak: '\u2060',
	NonBreakingSpace: '\u00A0',
	Nopf: '\u2115',
	nopf: '\uD835\uDD5F',
	Not: '\u2AEC',
	not: '\u00AC',
	NotCongruent: '\u2262',
	NotCupCap: '\u226D',
	NotDoubleVerticalBar: '\u2226',
	NotElement: '\u2209',
	NotEqual: '\u2260',
	NotEqualTilde: '\u2242\u0338',
	NotExists: '\u2204',
	NotGreater: '\u226F',
	NotGreaterEqual: '\u2271',
	NotGreaterFullEqual: '\u2267\u0338',
	NotGreaterGreater: '\u226B\u0338',
	NotGreaterLess: '\u2279',
	NotGreaterSlantEqual: '\u2A7E\u0338',
	NotGreaterTilde: '\u2275',
	NotHumpDownHump: '\u224E\u0338',
	NotHumpEqual: '\u224F\u0338',
	notin: '\u2209',
	notindot: '\u22F5\u0338',
	notinE: '\u22F9\u0338',
	notinva: '\u2209',
	notinvb: '\u22F7',
	notinvc: '\u22F6',
	NotLeftTriangle: '\u22EA',
	NotLeftTriangleBar: '\u29CF\u0338',
	NotLeftTriangleEqual: '\u22EC',
	NotLess: '\u226E',
	NotLessEqual: '\u2270',
	NotLessGreater: '\u2278',
	NotLessLess: '\u226A\u0338',
	NotLessSlantEqual: '\u2A7D\u0338',
	NotLessTilde: '\u2274',
	NotNestedGreaterGreater: '\u2AA2\u0338',
	NotNestedLessLess: '\u2AA1\u0338',
	notni: '\u220C',
	notniva: '\u220C',
	notnivb: '\u22FE',
	notnivc: '\u22FD',
	NotPrecedes: '\u2280',
	NotPrecedesEqual: '\u2AAF\u0338',
	NotPrecedesSlantEqual: '\u22E0',
	NotReverseElement: '\u220C',
	NotRightTriangle: '\u22EB',
	NotRightTriangleBar: '\u29D0\u0338',
	NotRightTriangleEqual: '\u22ED',
	NotSquareSubset: '\u228F\u0338',
	NotSquareSubsetEqual: '\u22E2',
	NotSquareSuperset: '\u2290\u0338',
	NotSquareSupersetEqual: '\u22E3',
	NotSubset: '\u2282\u20D2',
	NotSubsetEqual: '\u2288',
	NotSucceeds: '\u2281',
	NotSucceedsEqual: '\u2AB0\u0338',
	NotSucceedsSlantEqual: '\u22E1',
	NotSucceedsTilde: '\u227F\u0338',
	NotSuperset: '\u2283\u20D2',
	NotSupersetEqual: '\u2289',
	NotTilde: '\u2241',
	NotTildeEqual: '\u2244',
	NotTildeFullEqual: '\u2247',
	NotTildeTilde: '\u2249',
	NotVerticalBar: '\u2224',
	npar: '\u2226',
	nparallel: '\u2226',
	nparsl: '\u2AFD\u20E5',
	npart: '\u2202\u0338',
	npolint: '\u2A14',
	npr: '\u2280',
	nprcue: '\u22E0',
	npre: '\u2AAF\u0338',
	nprec: '\u2280',
	npreceq: '\u2AAF\u0338',
	nrArr: '\u21CF',
	nrarr: '\u219B',
	nrarrc: '\u2933\u0338',
	nrarrw: '\u219D\u0338',
	nRightarrow: '\u21CF',
	nrightarrow: '\u219B',
	nrtri: '\u22EB',
	nrtrie: '\u22ED',
	nsc: '\u2281',
	nsccue: '\u22E1',
	nsce: '\u2AB0\u0338',
	Nscr: '\uD835\uDCA9',
	nscr: '\uD835\uDCC3',
	nshortmid: '\u2224',
	nshortparallel: '\u2226',
	nsim: '\u2241',
	nsime: '\u2244',
	nsimeq: '\u2244',
	nsmid: '\u2224',
	nspar: '\u2226',
	nsqsube: '\u22E2',
	nsqsupe: '\u22E3',
	nsub: '\u2284',
	nsubE: '\u2AC5\u0338',
	nsube: '\u2288',
	nsubset: '\u2282\u20D2',
	nsubseteq: '\u2288',
	nsubseteqq: '\u2AC5\u0338',
	nsucc: '\u2281',
	nsucceq: '\u2AB0\u0338',
	nsup: '\u2285',
	nsupE: '\u2AC6\u0338',
	nsupe: '\u2289',
	nsupset: '\u2283\u20D2',
	nsupseteq: '\u2289',
	nsupseteqq: '\u2AC6\u0338',
	ntgl: '\u2279',
	Ntilde: '\u00D1',
	ntilde: '\u00F1',
	ntlg: '\u2278',
	ntriangleleft: '\u22EA',
	ntrianglelefteq: '\u22EC',
	ntriangleright: '\u22EB',
	ntrianglerighteq: '\u22ED',
	Nu: '\u039D',
	nu: '\u03BD',
	num: '\u0023',
	numero: '\u2116',
	numsp: '\u2007',
	nvap: '\u224D\u20D2',
	nVDash: '\u22AF',
	nVdash: '\u22AE',
	nvDash: '\u22AD',
	nvdash: '\u22AC',
	nvge: '\u2265\u20D2',
	nvgt: '\u003E\u20D2',
	nvHarr: '\u2904',
	nvinfin: '\u29DE',
	nvlArr: '\u2902',
	nvle: '\u2264\u20D2',
	nvlt: '\u003C\u20D2',
	nvltrie: '\u22B4\u20D2',
	nvrArr: '\u2903',
	nvrtrie: '\u22B5\u20D2',
	nvsim: '\u223C\u20D2',
	nwarhk: '\u2923',
	nwArr: '\u21D6',
	nwarr: '\u2196',
	nwarrow: '\u2196',
	nwnear: '\u2927',
	Oacute: '\u00D3',
	oacute: '\u00F3',
	oast: '\u229B',
	ocir: '\u229A',
	Ocirc: '\u00D4',
	ocirc: '\u00F4',
	Ocy: '\u041E',
	ocy: '\u043E',
	odash: '\u229D',
	Odblac: '\u0150',
	odblac: '\u0151',
	odiv: '\u2A38',
	odot: '\u2299',
	odsold: '\u29BC',
	OElig: '\u0152',
	oelig: '\u0153',
	ofcir: '\u29BF',
	Ofr: '\uD835\uDD12',
	ofr: '\uD835\uDD2C',
	ogon: '\u02DB',
	Ograve: '\u00D2',
	ograve: '\u00F2',
	ogt: '\u29C1',
	ohbar: '\u29B5',
	ohm: '\u03A9',
	oint: '\u222E',
	olarr: '\u21BA',
	olcir: '\u29BE',
	olcross: '\u29BB',
	oline: '\u203E',
	olt: '\u29C0',
	Omacr: '\u014C',
	omacr: '\u014D',
	Omega: '\u03A9',
	omega: '\u03C9',
	Omicron: '\u039F',
	omicron: '\u03BF',
	omid: '\u29B6',
	ominus: '\u2296',
	Oopf: '\uD835\uDD46',
	oopf: '\uD835\uDD60',
	opar: '\u29B7',
	OpenCurlyDoubleQuote: '\u201C',
	OpenCurlyQuote: '\u2018',
	operp: '\u29B9',
	oplus: '\u2295',
	Or: '\u2A54',
	or: '\u2228',
	orarr: '\u21BB',
	ord: '\u2A5D',
	order: '\u2134',
	orderof: '\u2134',
	ordf: '\u00AA',
	ordm: '\u00BA',
	origof: '\u22B6',
	oror: '\u2A56',
	orslope: '\u2A57',
	orv: '\u2A5B',
	oS: '\u24C8',
	Oscr: '\uD835\uDCAA',
	oscr: '\u2134',
	Oslash: '\u00D8',
	oslash: '\u00F8',
	osol: '\u2298',
	Otilde: '\u00D5',
	otilde: '\u00F5',
	Otimes: '\u2A37',
	otimes: '\u2297',
	otimesas: '\u2A36',
	Ouml: '\u00D6',
	ouml: '\u00F6',
	ovbar: '\u233D',
	OverBar: '\u203E',
	OverBrace: '\u23DE',
	OverBracket: '\u23B4',
	OverParenthesis: '\u23DC',
	par: '\u2225',
	para: '\u00B6',
	parallel: '\u2225',
	parsim: '\u2AF3',
	parsl: '\u2AFD',
	part: '\u2202',
	PartialD: '\u2202',
	Pcy: '\u041F',
	pcy: '\u043F',
	percnt: '\u0025',
	period: '\u002E',
	permil: '\u2030',
	perp: '\u22A5',
	pertenk: '\u2031',
	Pfr: '\uD835\uDD13',
	pfr: '\uD835\uDD2D',
	Phi: '\u03A6',
	phi: '\u03C6',
	phiv: '\u03D5',
	phmmat: '\u2133',
	phone: '\u260E',
	Pi: '\u03A0',
	pi: '\u03C0',
	pitchfork: '\u22D4',
	piv: '\u03D6',
	planck: '\u210F',
	planckh: '\u210E',
	plankv: '\u210F',
	plus: '\u002B',
	plusacir: '\u2A23',
	plusb: '\u229E',
	pluscir: '\u2A22',
	plusdo: '\u2214',
	plusdu: '\u2A25',
	pluse: '\u2A72',
	PlusMinus: '\u00B1',
	plusmn: '\u00B1',
	plussim: '\u2A26',
	plustwo: '\u2A27',
	pm: '\u00B1',
	Poincareplane: '\u210C',
	pointint: '\u2A15',
	Popf: '\u2119',
	popf: '\uD835\uDD61',
	pound: '\u00A3',
	Pr: '\u2ABB',
	pr: '\u227A',
	prap: '\u2AB7',
	prcue: '\u227C',
	prE: '\u2AB3',
	pre: '\u2AAF',
	prec: '\u227A',
	precapprox: '\u2AB7',
	preccurlyeq: '\u227C',
	Precedes: '\u227A',
	PrecedesEqual: '\u2AAF',
	PrecedesSlantEqual: '\u227C',
	PrecedesTilde: '\u227E',
	preceq: '\u2AAF',
	precnapprox: '\u2AB9',
	precneqq: '\u2AB5',
	precnsim: '\u22E8',
	precsim: '\u227E',
	Prime: '\u2033',
	prime: '\u2032',
	primes: '\u2119',
	prnap: '\u2AB9',
	prnE: '\u2AB5',
	prnsim: '\u22E8',
	prod: '\u220F',
	Product: '\u220F',
	profalar: '\u232E',
	profline: '\u2312',
	profsurf: '\u2313',
	prop: '\u221D',
	Proportion: '\u2237',
	Proportional: '\u221D',
	propto: '\u221D',
	prsim: '\u227E',
	prurel: '\u22B0',
	Pscr: '\uD835\uDCAB',
	pscr: '\uD835\uDCC5',
	Psi: '\u03A8',
	psi: '\u03C8',
	puncsp: '\u2008',
	Qfr: '\uD835\uDD14',
	qfr: '\uD835\uDD2E',
	qint: '\u2A0C',
	Qopf: '\u211A',
	qopf: '\uD835\uDD62',
	qprime: '\u2057',
	Qscr: '\uD835\uDCAC',
	qscr: '\uD835\uDCC6',
	quaternions: '\u210D',
	quatint: '\u2A16',
	quest: '\u003F',
	questeq: '\u225F',
	QUOT: '\u0022',
	quot: '\u0022',
	rAarr: '\u21DB',
	race: '\u223D\u0331',
	Racute: '\u0154',
	racute: '\u0155',
	radic: '\u221A',
	raemptyv: '\u29B3',
	Rang: '\u27EB',
	rang: '\u27E9',
	rangd: '\u2992',
	range: '\u29A5',
	rangle: '\u27E9',
	raquo: '\u00BB',
	Rarr: '\u21A0',
	rArr: '\u21D2',
	rarr: '\u2192',
	rarrap: '\u2975',
	rarrb: '\u21E5',
	rarrbfs: '\u2920',
	rarrc: '\u2933',
	rarrfs: '\u291E',
	rarrhk: '\u21AA',
	rarrlp: '\u21AC',
	rarrpl: '\u2945',
	rarrsim: '\u2974',
	Rarrtl: '\u2916',
	rarrtl: '\u21A3',
	rarrw: '\u219D',
	rAtail: '\u291C',
	ratail: '\u291A',
	ratio: '\u2236',
	rationals: '\u211A',
	RBarr: '\u2910',
	rBarr: '\u290F',
	rbarr: '\u290D',
	rbbrk: '\u2773',
	rbrace: '\u007D',
	rbrack: '\u005D',
	rbrke: '\u298C',
	rbrksld: '\u298E',
	rbrkslu: '\u2990',
	Rcaron: '\u0158',
	rcaron: '\u0159',
	Rcedil: '\u0156',
	rcedil: '\u0157',
	rceil: '\u2309',
	rcub: '\u007D',
	Rcy: '\u0420',
	rcy: '\u0440',
	rdca: '\u2937',
	rdldhar: '\u2969',
	rdquo: '\u201D',
	rdquor: '\u201D',
	rdsh: '\u21B3',
	Re: '\u211C',
	real: '\u211C',
	realine: '\u211B',
	realpart: '\u211C',
	reals: '\u211D',
	rect: '\u25AD',
	REG: '\u00AE',
	reg: '\u00AE',
	ReverseElement: '\u220B',
	ReverseEquilibrium: '\u21CB',
	ReverseUpEquilibrium: '\u296F',
	rfisht: '\u297D',
	rfloor: '\u230B',
	Rfr: '\u211C',
	rfr: '\uD835\uDD2F',
	rHar: '\u2964',
	rhard: '\u21C1',
	rharu: '\u21C0',
	rharul: '\u296C',
	Rho: '\u03A1',
	rho: '\u03C1',
	rhov: '\u03F1',
	RightAngleBracket: '\u27E9',
	RightArrow: '\u2192',
	Rightarrow: '\u21D2',
	rightarrow: '\u2192',
	RightArrowBar: '\u21E5',
	RightArrowLeftArrow: '\u21C4',
	rightarrowtail: '\u21A3',
	RightCeiling: '\u2309',
	RightDoubleBracket: '\u27E7',
	RightDownTeeVector: '\u295D',
	RightDownVector: '\u21C2',
	RightDownVectorBar: '\u2955',
	RightFloor: '\u230B',
	rightharpoondown: '\u21C1',
	rightharpoonup: '\u21C0',
	rightleftarrows: '\u21C4',
	rightleftharpoons: '\u21CC',
	rightrightarrows: '\u21C9',
	rightsquigarrow: '\u219D',
	RightTee: '\u22A2',
	RightTeeArrow: '\u21A6',
	RightTeeVector: '\u295B',
	rightthreetimes: '\u22CC',
	RightTriangle: '\u22B3',
	RightTriangleBar: '\u29D0',
	RightTriangleEqual: '\u22B5',
	RightUpDownVector: '\u294F',
	RightUpTeeVector: '\u295C',
	RightUpVector: '\u21BE',
	RightUpVectorBar: '\u2954',
	RightVector: '\u21C0',
	RightVectorBar: '\u2953',
	ring: '\u02DA',
	risingdotseq: '\u2253',
	rlarr: '\u21C4',
	rlhar: '\u21CC',
	rlm: '\u200F',
	rmoust: '\u23B1',
	rmoustache: '\u23B1',
	rnmid: '\u2AEE',
	roang: '\u27ED',
	roarr: '\u21FE',
	robrk: '\u27E7',
	ropar: '\u2986',
	Ropf: '\u211D',
	ropf: '\uD835\uDD63',
	roplus: '\u2A2E',
	rotimes: '\u2A35',
	RoundImplies: '\u2970',
	rpar: '\u0029',
	rpargt: '\u2994',
	rppolint: '\u2A12',
	rrarr: '\u21C9',
	Rrightarrow: '\u21DB',
	rsaquo: '\u203A',
	Rscr: '\u211B',
	rscr: '\uD835\uDCC7',
	Rsh: '\u21B1',
	rsh: '\u21B1',
	rsqb: '\u005D',
	rsquo: '\u2019',
	rsquor: '\u2019',
	rthree: '\u22CC',
	rtimes: '\u22CA',
	rtri: '\u25B9',
	rtrie: '\u22B5',
	rtrif: '\u25B8',
	rtriltri: '\u29CE',
	RuleDelayed: '\u29F4',
	ruluhar: '\u2968',
	rx: '\u211E',
	Sacute: '\u015A',
	sacute: '\u015B',
	sbquo: '\u201A',
	Sc: '\u2ABC',
	sc: '\u227B',
	scap: '\u2AB8',
	Scaron: '\u0160',
	scaron: '\u0161',
	sccue: '\u227D',
	scE: '\u2AB4',
	sce: '\u2AB0',
	Scedil: '\u015E',
	scedil: '\u015F',
	Scirc: '\u015C',
	scirc: '\u015D',
	scnap: '\u2ABA',
	scnE: '\u2AB6',
	scnsim: '\u22E9',
	scpolint: '\u2A13',
	scsim: '\u227F',
	Scy: '\u0421',
	scy: '\u0441',
	sdot: '\u22C5',
	sdotb: '\u22A1',
	sdote: '\u2A66',
	searhk: '\u2925',
	seArr: '\u21D8',
	searr: '\u2198',
	searrow: '\u2198',
	sect: '\u00A7',
	semi: '\u003B',
	seswar: '\u2929',
	setminus: '\u2216',
	setmn: '\u2216',
	sext: '\u2736',
	Sfr: '\uD835\uDD16',
	sfr: '\uD835\uDD30',
	sfrown: '\u2322',
	sharp: '\u266F',
	SHCHcy: '\u0429',
	shchcy: '\u0449',
	SHcy: '\u0428',
	shcy: '\u0448',
	ShortDownArrow: '\u2193',
	ShortLeftArrow: '\u2190',
	shortmid: '\u2223',
	shortparallel: '\u2225',
	ShortRightArrow: '\u2192',
	ShortUpArrow: '\u2191',
	shy: '\u00AD',
	Sigma: '\u03A3',
	sigma: '\u03C3',
	sigmaf: '\u03C2',
	sigmav: '\u03C2',
	sim: '\u223C',
	simdot: '\u2A6A',
	sime: '\u2243',
	simeq: '\u2243',
	simg: '\u2A9E',
	simgE: '\u2AA0',
	siml: '\u2A9D',
	simlE: '\u2A9F',
	simne: '\u2246',
	simplus: '\u2A24',
	simrarr: '\u2972',
	slarr: '\u2190',
	SmallCircle: '\u2218',
	smallsetminus: '\u2216',
	smashp: '\u2A33',
	smeparsl: '\u29E4',
	smid: '\u2223',
	smile: '\u2323',
	smt: '\u2AAA',
	smte: '\u2AAC',
	smtes: '\u2AAC\uFE00',
	SOFTcy: '\u042C',
	softcy: '\u044C',
	sol: '\u002F',
	solb: '\u29C4',
	solbar: '\u233F',
	Sopf: '\uD835\uDD4A',
	sopf: '\uD835\uDD64',
	spades: '\u2660',
	spadesuit: '\u2660',
	spar: '\u2225',
	sqcap: '\u2293',
	sqcaps: '\u2293\uFE00',
	sqcup: '\u2294',
	sqcups: '\u2294\uFE00',
	Sqrt: '\u221A',
	sqsub: '\u228F',
	sqsube: '\u2291',
	sqsubset: '\u228F',
	sqsubseteq: '\u2291',
	sqsup: '\u2290',
	sqsupe: '\u2292',
	sqsupset: '\u2290',
	sqsupseteq: '\u2292',
	squ: '\u25A1',
	Square: '\u25A1',
	square: '\u25A1',
	SquareIntersection: '\u2293',
	SquareSubset: '\u228F',
	SquareSubsetEqual: '\u2291',
	SquareSuperset: '\u2290',
	SquareSupersetEqual: '\u2292',
	SquareUnion: '\u2294',
	squarf: '\u25AA',
	squf: '\u25AA',
	srarr: '\u2192',
	Sscr: '\uD835\uDCAE',
	sscr: '\uD835\uDCC8',
	ssetmn: '\u2216',
	ssmile: '\u2323',
	sstarf: '\u22C6',
	Star: '\u22C6',
	star: '\u2606',
	starf: '\u2605',
	straightepsilon: '\u03F5',
	straightphi: '\u03D5',
	strns: '\u00AF',
	Sub: '\u22D0',
	sub: '\u2282',
	subdot: '\u2ABD',
	subE: '\u2AC5',
	sube: '\u2286',
	subedot: '\u2AC3',
	submult: '\u2AC1',
	subnE: '\u2ACB',
	subne: '\u228A',
	subplus: '\u2ABF',
	subrarr: '\u2979',
	Subset: '\u22D0',
	subset: '\u2282',
	subseteq: '\u2286',
	subseteqq: '\u2AC5',
	SubsetEqual: '\u2286',
	subsetneq: '\u228A',
	subsetneqq: '\u2ACB',
	subsim: '\u2AC7',
	subsub: '\u2AD5',
	subsup: '\u2AD3',
	succ: '\u227B',
	succapprox: '\u2AB8',
	succcurlyeq: '\u227D',
	Succeeds: '\u227B',
	SucceedsEqual: '\u2AB0',
	SucceedsSlantEqual: '\u227D',
	SucceedsTilde: '\u227F',
	succeq: '\u2AB0',
	succnapprox: '\u2ABA',
	succneqq: '\u2AB6',
	succnsim: '\u22E9',
	succsim: '\u227F',
	SuchThat: '\u220B',
	Sum: '\u2211',
	sum: '\u2211',
	sung: '\u266A',
	Sup: '\u22D1',
	sup: '\u2283',
	sup1: '\u00B9',
	sup2: '\u00B2',
	sup3: '\u00B3',
	supdot: '\u2ABE',
	supdsub: '\u2AD8',
	supE: '\u2AC6',
	supe: '\u2287',
	supedot: '\u2AC4',
	Superset: '\u2283',
	SupersetEqual: '\u2287',
	suphsol: '\u27C9',
	suphsub: '\u2AD7',
	suplarr: '\u297B',
	supmult: '\u2AC2',
	supnE: '\u2ACC',
	supne: '\u228B',
	supplus: '\u2AC0',
	Supset: '\u22D1',
	supset: '\u2283',
	supseteq: '\u2287',
	supseteqq: '\u2AC6',
	supsetneq: '\u228B',
	supsetneqq: '\u2ACC',
	supsim: '\u2AC8',
	supsub: '\u2AD4',
	supsup: '\u2AD6',
	swarhk: '\u2926',
	swArr: '\u21D9',
	swarr: '\u2199',
	swarrow: '\u2199',
	swnwar: '\u292A',
	szlig: '\u00DF',
	Tab: '\u0009',
	target: '\u2316',
	Tau: '\u03A4',
	tau: '\u03C4',
	tbrk: '\u23B4',
	Tcaron: '\u0164',
	tcaron: '\u0165',
	Tcedil: '\u0162',
	tcedil: '\u0163',
	Tcy: '\u0422',
	tcy: '\u0442',
	tdot: '\u20DB',
	telrec: '\u2315',
	Tfr: '\uD835\uDD17',
	tfr: '\uD835\uDD31',
	there4: '\u2234',
	Therefore: '\u2234',
	therefore: '\u2234',
	Theta: '\u0398',
	theta: '\u03B8',
	thetasym: '\u03D1',
	thetav: '\u03D1',
	thickapprox: '\u2248',
	thicksim: '\u223C',
	ThickSpace: '\u205F\u200A',
	thinsp: '\u2009',
	ThinSpace: '\u2009',
	thkap: '\u2248',
	thksim: '\u223C',
	THORN: '\u00DE',
	thorn: '\u00FE',
	Tilde: '\u223C',
	tilde: '\u02DC',
	TildeEqual: '\u2243',
	TildeFullEqual: '\u2245',
	TildeTilde: '\u2248',
	times: '\u00D7',
	timesb: '\u22A0',
	timesbar: '\u2A31',
	timesd: '\u2A30',
	tint: '\u222D',
	toea: '\u2928',
	top: '\u22A4',
	topbot: '\u2336',
	topcir: '\u2AF1',
	Topf: '\uD835\uDD4B',
	topf: '\uD835\uDD65',
	topfork: '\u2ADA',
	tosa: '\u2929',
	tprime: '\u2034',
	TRADE: '\u2122',
	trade: '\u2122',
	triangle: '\u25B5',
	triangledown: '\u25BF',
	triangleleft: '\u25C3',
	trianglelefteq: '\u22B4',
	triangleq: '\u225C',
	triangleright: '\u25B9',
	trianglerighteq: '\u22B5',
	tridot: '\u25EC',
	trie: '\u225C',
	triminus: '\u2A3A',
	TripleDot: '\u20DB',
	triplus: '\u2A39',
	trisb: '\u29CD',
	tritime: '\u2A3B',
	trpezium: '\u23E2',
	Tscr: '\uD835\uDCAF',
	tscr: '\uD835\uDCC9',
	TScy: '\u0426',
	tscy: '\u0446',
	TSHcy: '\u040B',
	tshcy: '\u045B',
	Tstrok: '\u0166',
	tstrok: '\u0167',
	twixt: '\u226C',
	twoheadleftarrow: '\u219E',
	twoheadrightarrow: '\u21A0',
	Uacute: '\u00DA',
	uacute: '\u00FA',
	Uarr: '\u219F',
	uArr: '\u21D1',
	uarr: '\u2191',
	Uarrocir: '\u2949',
	Ubrcy: '\u040E',
	ubrcy: '\u045E',
	Ubreve: '\u016C',
	ubreve: '\u016D',
	Ucirc: '\u00DB',
	ucirc: '\u00FB',
	Ucy: '\u0423',
	ucy: '\u0443',
	udarr: '\u21C5',
	Udblac: '\u0170',
	udblac: '\u0171',
	udhar: '\u296E',
	ufisht: '\u297E',
	Ufr: '\uD835\uDD18',
	ufr: '\uD835\uDD32',
	Ugrave: '\u00D9',
	ugrave: '\u00F9',
	uHar: '\u2963',
	uharl: '\u21BF',
	uharr: '\u21BE',
	uhblk: '\u2580',
	ulcorn: '\u231C',
	ulcorner: '\u231C',
	ulcrop: '\u230F',
	ultri: '\u25F8',
	Umacr: '\u016A',
	umacr: '\u016B',
	uml: '\u00A8',
	UnderBar: '\u005F',
	UnderBrace: '\u23DF',
	UnderBracket: '\u23B5',
	UnderParenthesis: '\u23DD',
	Union: '\u22C3',
	UnionPlus: '\u228E',
	Uogon: '\u0172',
	uogon: '\u0173',
	Uopf: '\uD835\uDD4C',
	uopf: '\uD835\uDD66',
	UpArrow: '\u2191',
	Uparrow: '\u21D1',
	uparrow: '\u2191',
	UpArrowBar: '\u2912',
	UpArrowDownArrow: '\u21C5',
	UpDownArrow: '\u2195',
	Updownarrow: '\u21D5',
	updownarrow: '\u2195',
	UpEquilibrium: '\u296E',
	upharpoonleft: '\u21BF',
	upharpoonright: '\u21BE',
	uplus: '\u228E',
	UpperLeftArrow: '\u2196',
	UpperRightArrow: '\u2197',
	Upsi: '\u03D2',
	upsi: '\u03C5',
	upsih: '\u03D2',
	Upsilon: '\u03A5',
	upsilon: '\u03C5',
	UpTee: '\u22A5',
	UpTeeArrow: '\u21A5',
	upuparrows: '\u21C8',
	urcorn: '\u231D',
	urcorner: '\u231D',
	urcrop: '\u230E',
	Uring: '\u016E',
	uring: '\u016F',
	urtri: '\u25F9',
	Uscr: '\uD835\uDCB0',
	uscr: '\uD835\uDCCA',
	utdot: '\u22F0',
	Utilde: '\u0168',
	utilde: '\u0169',
	utri: '\u25B5',
	utrif: '\u25B4',
	uuarr: '\u21C8',
	Uuml: '\u00DC',
	uuml: '\u00FC',
	uwangle: '\u29A7',
	vangrt: '\u299C',
	varepsilon: '\u03F5',
	varkappa: '\u03F0',
	varnothing: '\u2205',
	varphi: '\u03D5',
	varpi: '\u03D6',
	varpropto: '\u221D',
	vArr: '\u21D5',
	varr: '\u2195',
	varrho: '\u03F1',
	varsigma: '\u03C2',
	varsubsetneq: '\u228A\uFE00',
	varsubsetneqq: '\u2ACB\uFE00',
	varsupsetneq: '\u228B\uFE00',
	varsupsetneqq: '\u2ACC\uFE00',
	vartheta: '\u03D1',
	vartriangleleft: '\u22B2',
	vartriangleright: '\u22B3',
	Vbar: '\u2AEB',
	vBar: '\u2AE8',
	vBarv: '\u2AE9',
	Vcy: '\u0412',
	vcy: '\u0432',
	VDash: '\u22AB',
	Vdash: '\u22A9',
	vDash: '\u22A8',
	vdash: '\u22A2',
	Vdashl: '\u2AE6',
	Vee: '\u22C1',
	vee: '\u2228',
	veebar: '\u22BB',
	veeeq: '\u225A',
	vellip: '\u22EE',
	Verbar: '\u2016',
	verbar: '\u007C',
	Vert: '\u2016',
	vert: '\u007C',
	VerticalBar: '\u2223',
	VerticalLine: '\u007C',
	VerticalSeparator: '\u2758',
	VerticalTilde: '\u2240',
	VeryThinSpace: '\u200A',
	Vfr: '\uD835\uDD19',
	vfr: '\uD835\uDD33',
	vltri: '\u22B2',
	vnsub: '\u2282\u20D2',
	vnsup: '\u2283\u20D2',
	Vopf: '\uD835\uDD4D',
	vopf: '\uD835\uDD67',
	vprop: '\u221D',
	vrtri: '\u22B3',
	Vscr: '\uD835\uDCB1',
	vscr: '\uD835\uDCCB',
	vsubnE: '\u2ACB\uFE00',
	vsubne: '\u228A\uFE00',
	vsupnE: '\u2ACC\uFE00',
	vsupne: '\u228B\uFE00',
	Vvdash: '\u22AA',
	vzigzag: '\u299A',
	Wcirc: '\u0174',
	wcirc: '\u0175',
	wedbar: '\u2A5F',
	Wedge: '\u22C0',
	wedge: '\u2227',
	wedgeq: '\u2259',
	weierp: '\u2118',
	Wfr: '\uD835\uDD1A',
	wfr: '\uD835\uDD34',
	Wopf: '\uD835\uDD4E',
	wopf: '\uD835\uDD68',
	wp: '\u2118',
	wr: '\u2240',
	wreath: '\u2240',
	Wscr: '\uD835\uDCB2',
	wscr: '\uD835\uDCCC',
	xcap: '\u22C2',
	xcirc: '\u25EF',
	xcup: '\u22C3',
	xdtri: '\u25BD',
	Xfr: '\uD835\uDD1B',
	xfr: '\uD835\uDD35',
	xhArr: '\u27FA',
	xharr: '\u27F7',
	Xi: '\u039E',
	xi: '\u03BE',
	xlArr: '\u27F8',
	xlarr: '\u27F5',
	xmap: '\u27FC',
	xnis: '\u22FB',
	xodot: '\u2A00',
	Xopf: '\uD835\uDD4F',
	xopf: '\uD835\uDD69',
	xoplus: '\u2A01',
	xotime: '\u2A02',
	xrArr: '\u27F9',
	xrarr: '\u27F6',
	Xscr: '\uD835\uDCB3',
	xscr: '\uD835\uDCCD',
	xsqcup: '\u2A06',
	xuplus: '\u2A04',
	xutri: '\u25B3',
	xvee: '\u22C1',
	xwedge: '\u22C0',
	Yacute: '\u00DD',
	yacute: '\u00FD',
	YAcy: '\u042F',
	yacy: '\u044F',
	Ycirc: '\u0176',
	ycirc: '\u0177',
	Ycy: '\u042B',
	ycy: '\u044B',
	yen: '\u00A5',
	Yfr: '\uD835\uDD1C',
	yfr: '\uD835\uDD36',
	YIcy: '\u0407',
	yicy: '\u0457',
	Yopf: '\uD835\uDD50',
	yopf: '\uD835\uDD6A',
	Yscr: '\uD835\uDCB4',
	yscr: '\uD835\uDCCE',
	YUcy: '\u042E',
	yucy: '\u044E',
	Yuml: '\u0178',
	yuml: '\u00FF',
	Zacute: '\u0179',
	zacute: '\u017A',
	Zcaron: '\u017D',
	zcaron: '\u017E',
	Zcy: '\u0417',
	zcy: '\u0437',
	Zdot: '\u017B',
	zdot: '\u017C',
	zeetrf: '\u2128',
	ZeroWidthSpace: '\u200B',
	Zeta: '\u0396',
	zeta: '\u03B6',
	Zfr: '\u2128',
	zfr: '\uD835\uDD37',
	ZHcy: '\u0416',
	zhcy: '\u0436',
	zigrarr: '\u21DD',
	Zopf: '\u2124',
	zopf: '\uD835\uDD6B',
	Zscr: '\uD835\uDCB5',
	zscr: '\uD835\uDCCF',
	zwj: '\u200D',
	zwnj: '\u200C',
});

/**
 * @deprecated
 * Use `HTML_ENTITIES` instead.
 * @see {@link HTML_ENTITIES}
 */
exports.entityMap = exports.HTML_ENTITIES;


/***/ }),

/***/ 268:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
var _xmldom_xmldom__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
var wicked_good_xpath__WEBPACK_IMPORTED_MODULE_1___namespace_cache;
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Al: () => (/* binding */ document),
/* harmony export */   Gb: () => (/* binding */ xmldom),
/* harmony export */   Oe: () => (/* binding */ xpath)
/* harmony export */ });
/* harmony import */ var _xmldom_xmldom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(546);
/* harmony import */ var wicked_good_xpath__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(999);


const xmldom = /*#__PURE__*/ (_xmldom_xmldom__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_xmldom_xmldom__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_xmldom_xmldom__WEBPACK_IMPORTED_MODULE_0__, 2)));
const document = new xmldom.DOMImplementation().createDocument('', '');
const install = (/*#__PURE__*/ (wicked_good_xpath__WEBPACK_IMPORTED_MODULE_1___namespace_cache || (wicked_good_xpath__WEBPACK_IMPORTED_MODULE_1___namespace_cache = __webpack_require__.t(wicked_good_xpath__WEBPACK_IMPORTED_MODULE_1__, 2))) === null || /*#__PURE__*/ (wicked_good_xpath__WEBPACK_IMPORTED_MODULE_1___namespace_cache || (wicked_good_xpath__WEBPACK_IMPORTED_MODULE_1___namespace_cache = __webpack_require__.t(wicked_good_xpath__WEBPACK_IMPORTED_MODULE_1__, 2))) === void 0 ? void 0 : wicked_good_xpath__WEBPACK_IMPORTED_MODULE_1__.install) || window.wgxpath.install;
const Xpath = (function () {
    const win = { document: {}, XPathResult: {} };
    install(win);
    win.document.XPathResult = win.XPathResult;
    return win.document;
})();
const xpath = {
    currentDocument: document,
    evaluate: Xpath.evaluate,
    result: Xpath.XPathResult,
    createNSResolver: Xpath.createNSResolver
};
//# sourceMappingURL=lib_external.js.map

/***/ }),

/***/ 546:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var conventions = __webpack_require__(870);
exports.assign = conventions.assign;
exports.hasDefaultHTMLNamespace = conventions.hasDefaultHTMLNamespace;
exports.isHTMLMimeType = conventions.isHTMLMimeType;
exports.isValidMimeType = conventions.isValidMimeType;
exports.MIME_TYPE = conventions.MIME_TYPE;
exports.NAMESPACE = conventions.NAMESPACE;

var errors = __webpack_require__(767);
exports.DOMException = errors.DOMException;
exports.DOMExceptionName = errors.DOMExceptionName;
exports.ExceptionCode = errors.ExceptionCode;
exports.ParseError = errors.ParseError;

var dom = __webpack_require__(786);
exports.Attr = dom.Attr;
exports.CDATASection = dom.CDATASection;
exports.CharacterData = dom.CharacterData;
exports.Comment = dom.Comment;
exports.Document = dom.Document;
exports.DocumentFragment = dom.DocumentFragment;
exports.DocumentType = dom.DocumentType;
exports.DOMImplementation = dom.DOMImplementation;
exports.Element = dom.Element;
exports.Entity = dom.Entity;
exports.EntityReference = dom.EntityReference;
exports.LiveNodeList = dom.LiveNodeList;
exports.NamedNodeMap = dom.NamedNodeMap;
exports.Node = dom.Node;
exports.NodeList = dom.NodeList;
exports.Notation = dom.Notation;
exports.ProcessingInstruction = dom.ProcessingInstruction;
exports.Text = dom.Text;
exports.XMLSerializer = dom.XMLSerializer;

var domParser = __webpack_require__(576);
exports.DOMParser = domParser.DOMParser;
exports.normalizeLineEndings = domParser.normalizeLineEndings;
exports.onErrorStopParsing = domParser.onErrorStopParsing;
exports.onWarningStopParsing = domParser.onWarningStopParsing;


/***/ }),

/***/ 576:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var conventions = __webpack_require__(870);
var dom = __webpack_require__(786);
var errors = __webpack_require__(767);
var entities = __webpack_require__(159);
var sax = __webpack_require__(802);

var DOMImplementation = dom.DOMImplementation;

var hasDefaultHTMLNamespace = conventions.hasDefaultHTMLNamespace;
var isHTMLMimeType = conventions.isHTMLMimeType;
var isValidMimeType = conventions.isValidMimeType;
var MIME_TYPE = conventions.MIME_TYPE;
var NAMESPACE = conventions.NAMESPACE;
var ParseError = errors.ParseError;

var XMLReader = sax.XMLReader;

/**
 * Normalizes line ending according to <https://www.w3.org/TR/xml11/#sec-line-ends>,
 * including some Unicode "newline" characters:
 *
 * > XML parsed entities are often stored in computer files which,
 * > for editing convenience, are organized into lines.
 * > These lines are typically separated by some combination
 * > of the characters CARRIAGE RETURN (#xD) and LINE FEED (#xA).
 * >
 * > To simplify the tasks of applications, the XML processor must behave
 * > as if it normalized all line breaks in external parsed entities (including the document entity)
 * > on input, before parsing, by translating the following to a single #xA character:
 * >
 * > 1. the two-character sequence #xD #xA,
 * > 2. the two-character sequence #xD #x85,
 * > 3. the single character #x85,
 * > 4. the single character #x2028,
 * > 5. the single character #x2029,
 * > 6. any #xD character that is not immediately followed by #xA or #x85.
 *
 * @param {string} input
 * @returns {string}
 * @prettierignore
 */
function normalizeLineEndings(input) {
	return input.replace(/\r[\n\u0085]/g, '\n').replace(/[\r\u0085\u2028\u2029]/g, '\n');
}

/**
 * @typedef Locator
 * @property {number} [columnNumber]
 * @property {number} [lineNumber]
 */

/**
 * @typedef DOMParserOptions
 * @property {typeof assign} [assign]
 * The method to use instead of `conventions.assign`, which is used to copy values from
 * `options` before they are used for parsing.
 * @property {typeof DOMHandler} [domHandler]
 * For internal testing: The class for creating an instance for handling events from the SAX
 * parser.
 * *****Warning: By configuring a faulty implementation, the specified behavior can completely
 * be broken.*****.
 * @property {Function} [errorHandler]
 * DEPRECATED! use `onError` instead.
 * @property {function(level:ErrorLevel, message:string, context: DOMHandler):void}
 * [onError]
 * A function invoked for every error that occurs during parsing.
 *
 * If it is not provided, all errors are reported to `console.error`
 * and only `fatalError`s are thrown as a `ParseError`,
 * which prevents any further processing.
 * If the provided method throws, a `ParserError` is thrown,
 * which prevents any further processing.
 *
 * Be aware that many `warning`s are considered an error that prevents further processing in
 * most implementations.
 * @property {boolean} [locator=true]
 * Configures if the nodes created during parsing will have a `lineNumber` and a `columnNumber`
 * attribute describing their location in the XML string.
 * Default is true.
 * @property {(string) => string} [normalizeLineEndings]
 * used to replace line endings before parsing, defaults to exported `normalizeLineEndings`,
 * which normalizes line endings according to <https://www.w3.org/TR/xml11/#sec-line-ends>,
 * including some Unicode "newline" characters.
 * @property {Object} [xmlns]
 * The XML namespaces that should be assumed when parsing.
 * The default namespace can be provided by the key that is the empty string.
 * When the `mimeType` for HTML, XHTML or SVG are passed to `parseFromString`,
 * the default namespace that will be used,
 * will be overridden according to the specification.
 * @see {@link normalizeLineEndings}
 */

/**
 * The DOMParser interface provides the ability to parse XML or HTML source code from a string
 * into a DOM `Document`.
 *
 * ***xmldom is different from the spec in that it allows an `options` parameter,
 * to control the behavior***.
 *
 * @class
 * @param {DOMParserOptions} [options]
 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser
 * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-parsing-and-serialization
 */
function DOMParser(options) {
	options = options || {};
	if (options.locator === undefined) {
		options.locator = true;
	}

	/**
	 * The method to use instead of `conventions.assign`, which is used to copy values from
	 * `options`
	 * before they are used for parsing.
	 *
	 * @type {conventions.assign}
	 * @private
	 * @see {@link conventions.assign}
	 * @readonly
	 */
	this.assign = options.assign || conventions.assign;

	/**
	 * For internal testing: The class for creating an instance for handling events from the SAX
	 * parser.
	 * *****Warning: By configuring a faulty implementation, the specified behavior can completely
	 * be broken*****.
	 *
	 * @type {typeof DOMHandler}
	 * @private
	 * @readonly
	 */
	this.domHandler = options.domHandler || DOMHandler;

	/**
	 * A function that is invoked for every error that occurs during parsing.
	 *
	 * If it is not provided, all errors are reported to `console.error`
	 * and only `fatalError`s are thrown as a `ParseError`,
	 * which prevents any further processing.
	 * If the provided method throws, a `ParserError` is thrown,
	 * which prevents any further processing.
	 *
	 * Be aware that many `warning`s are considered an error that prevents further processing in
	 * most implementations.
	 *
	 * @type {function(level:ErrorLevel, message:string, context: DOMHandler):void}
	 * @see {@link onErrorStopParsing}
	 * @see {@link onWarningStopParsing}
	 */
	this.onError = options.onError || options.errorHandler;
	if (options.errorHandler && typeof options.errorHandler !== 'function') {
		throw new TypeError('errorHandler object is no longer supported, switch to onError!');
	} else if (options.errorHandler) {
		options.errorHandler('warning', 'The `errorHandler` option has been deprecated, use `onError` instead!', this);
	}

	/**
	 * used to replace line endings before parsing, defaults to `normalizeLineEndings`
	 *
	 * @type {(string) => string}
	 * @readonly
	 */
	this.normalizeLineEndings = options.normalizeLineEndings || normalizeLineEndings;

	/**
	 * Configures if the nodes created during parsing will have a `lineNumber` and a
	 * `columnNumber`
	 * attribute describing their location in the XML string.
	 * Default is true.
	 *
	 * @type {boolean}
	 * @readonly
	 */
	this.locator = !!options.locator;

	/**
	 * The default namespace can be provided by the key that is the empty string.
	 * When the `mimeType` for HTML, XHTML or SVG are passed to `parseFromString`,
	 * the default namespace that will be used,
	 * will be overridden according to the specification.
	 *
	 * @type {Readonly<Object>}
	 * @readonly
	 */
	this.xmlns = this.assign(Object.create(null), options.xmlns);
}

/**
 * Parses `source` using the options in the way configured by the `DOMParserOptions` of `this`
 * `DOMParser`. If `mimeType` is `text/html` an HTML `Document` is created,
 * otherwise an XML `Document` is created.
 *
 * __It behaves different from the description in the living standard__:
 * - Uses the `options` passed to the `DOMParser` constructor to modify the behavior.
 * - Any unexpected input is reported to `onError` with either a `warning`,
 * `error` or `fatalError` level.
 * - Any `fatalError` throws a `ParseError` which prevents further processing.
 * - Any error thrown by `onError` is converted to a `ParseError` which prevents further
 * processing - If no `Document` was created during parsing it is reported as a `fatalError`.
 * *****Warning: By configuring a faulty DOMHandler implementation,
 * the specified behavior can completely be broken*****.
 *
 * @param {string} source
 * The XML mime type only allows string input!
 * @param {string} [mimeType='application/xml']
 * the mimeType or contentType of the document to be created determines the `type` of document
 * created (XML or HTML)
 * @returns {Document}
 * The `Document` node.
 * @throws {ParseError}
 * for any `fatalError` or anything that is thrown by `onError`
 * @throws {TypeError}
 * for any invalid `mimeType`
 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString
 * @see https://html.spec.whatwg.org/#dom-domparser-parsefromstring-dev
 */
DOMParser.prototype.parseFromString = function (source, mimeType) {
	if (!isValidMimeType(mimeType)) {
		throw new TypeError('DOMParser.parseFromString: the provided mimeType "' + mimeType + '" is not valid.');
	}
	var defaultNSMap = this.assign(Object.create(null), this.xmlns);
	var entityMap = entities.XML_ENTITIES;
	var defaultNamespace = defaultNSMap[''] || null;
	if (hasDefaultHTMLNamespace(mimeType)) {
		entityMap = entities.HTML_ENTITIES;
		defaultNamespace = NAMESPACE.HTML;
	} else if (mimeType === MIME_TYPE.XML_SVG_IMAGE) {
		defaultNamespace = NAMESPACE.SVG;
	}
	defaultNSMap[''] = defaultNamespace;
	defaultNSMap.xml = defaultNSMap.xml || NAMESPACE.XML;

	var domBuilder = new this.domHandler({
		mimeType: mimeType,
		defaultNamespace: defaultNamespace,
		onError: this.onError,
	});
	var locator = this.locator ? {} : undefined;
	if (this.locator) {
		domBuilder.setDocumentLocator(locator);
	}

	var sax = new XMLReader();
	sax.errorHandler = domBuilder;
	sax.domBuilder = domBuilder;
	var isXml = !conventions.isHTMLMimeType(mimeType);
	if (isXml && typeof source !== 'string') {
		sax.errorHandler.fatalError('source is not a string');
	}
	sax.parse(this.normalizeLineEndings(String(source)), defaultNSMap, entityMap);
	if (!domBuilder.doc.documentElement) {
		sax.errorHandler.fatalError('missing root element');
	}
	return domBuilder.doc;
};

/**
 * @typedef DOMHandlerOptions
 * @property {string} [mimeType=MIME_TYPE.XML_APPLICATION]
 * @property {string | null} [defaultNamespace=null]
 */
/**
 * The class that is used to handle events from the SAX parser to create the related DOM
 * elements.
 *
 * Some methods are only implemented as an empty function,
 * since they are (at least currently) not relevant for xmldom.
 *
 * @class
 * @param {DOMHandlerOptions} [options]
 * @see http://www.saxproject.org/apidoc/org/xml/sax/ext/DefaultHandler2.html
 */
function DOMHandler(options) {
	var opt = options || {};
	/**
	 * The mime type is used to determine if the DOM handler will create an XML or HTML document.
	 * Only if it is set to `text/html` it will create an HTML document.
	 * It defaults to MIME_TYPE.XML_APPLICATION.
	 *
	 * @type {string}
	 * @see {@link MIME_TYPE}
	 * @readonly
	 */
	this.mimeType = opt.mimeType || MIME_TYPE.XML_APPLICATION;

	/**
	 * The namespace to use to create an XML document.
	 * For the following reasons this is required:
	 * - The SAX API for `startDocument` doesn't offer any way to pass a namespace,
	 * since at that point there is no way for the parser to know what the default namespace from
	 * the document will be.
	 * - When creating using `DOMImplementation.createDocument` it is required to pass a
	 * namespace,
	 * to determine the correct `Document.contentType`, which should match `this.mimeType`.
	 * - When parsing an XML document with the `application/xhtml+xml` mimeType,
	 * the HTML namespace needs to be the default namespace.
	 *
	 * @type {string | null}
	 * @private
	 * @readonly
	 */
	this.defaultNamespace = opt.defaultNamespace || null;

	/**
	 * @type {boolean}
	 * @private
	 */
	this.cdata = false;

	/**
	 * The last `Element` that was created by `startElement`.
	 * `endElement` sets it to the `currentElement.parentNode`.
	 *
	 * Note: The sax parser currently sets it to white space text nodes between tags.
	 *
	 * @type {Element | Node | undefined}
	 * @private
	 */
	this.currentElement = undefined;

	/**
	 * The Document that is created as part of `startDocument`,
	 * and returned by `DOMParser.parseFromString`.
	 *
	 * @type {Document | undefined}
	 * @readonly
	 */
	this.doc = undefined;

	/**
	 * The locator is stored as part of setDocumentLocator.
	 * It is controlled and mutated by the SAX parser to store the current parsing position.
	 * It is used by DOMHandler to set `columnNumber` and `lineNumber`
	 * on the DOM nodes.
	 *
	 * @type {Readonly<Locator> | undefined}
	 * @private
	 * @readonly (the
	 * sax parser currently sometimes set's it)
	 */
	this.locator = undefined;
	/**
	 * @type {function (level:ErrorLevel ,message:string, context:DOMHandler):void}
	 * @readonly
	 */
	this.onError = opt.onError;
}

function position(locator, node) {
	node.lineNumber = locator.lineNumber;
	node.columnNumber = locator.columnNumber;
}

DOMHandler.prototype = {
	/**
	 * Either creates an XML or an HTML document and stores it under `this.doc`.
	 * If it is an XML document, `this.defaultNamespace` is used to create it,
	 * and it will not contain any `childNodes`.
	 * If it is an HTML document, it will be created without any `childNodes`.
	 *
	 * @see http://www.saxproject.org/apidoc/org/xml/sax/ContentHandler.html
	 */
	startDocument: function () {
		var impl = new DOMImplementation();
		this.doc = isHTMLMimeType(this.mimeType) ? impl.createHTMLDocument(false) : impl.createDocument(this.defaultNamespace, '');
	},
	startElement: function (namespaceURI, localName, qName, attrs) {
		var doc = this.doc;
		var el = doc.createElementNS(namespaceURI, qName || localName);
		var len = attrs.length;
		appendElement(this, el);
		this.currentElement = el;

		this.locator && position(this.locator, el);
		for (var i = 0; i < len; i++) {
			var namespaceURI = attrs.getURI(i);
			var value = attrs.getValue(i);
			var qName = attrs.getQName(i);
			var attr = doc.createAttributeNS(namespaceURI, qName);
			this.locator && position(attrs.getLocator(i), attr);
			attr.value = attr.nodeValue = value;
			el.setAttributeNode(attr);
		}
	},
	endElement: function (namespaceURI, localName, qName) {
		this.currentElement = this.currentElement.parentNode;
	},
	startPrefixMapping: function (prefix, uri) {},
	endPrefixMapping: function (prefix) {},
	processingInstruction: function (target, data) {
		var ins = this.doc.createProcessingInstruction(target, data);
		this.locator && position(this.locator, ins);
		appendElement(this, ins);
	},
	ignorableWhitespace: function (ch, start, length) {},
	characters: function (chars, start, length) {
		chars = _toString.apply(this, arguments);
		//console.log(chars)
		if (chars) {
			if (this.cdata) {
				var charNode = this.doc.createCDATASection(chars);
			} else {
				var charNode = this.doc.createTextNode(chars);
			}
			if (this.currentElement) {
				this.currentElement.appendChild(charNode);
			} else if (/^\s*$/.test(chars)) {
				this.doc.appendChild(charNode);
				//process xml
			}
			this.locator && position(this.locator, charNode);
		}
	},
	skippedEntity: function (name) {},
	endDocument: function () {
		this.doc.normalize();
	},
	/**
	 * Stores the locator to be able to set the `columnNumber` and `lineNumber`
	 * on the created DOM nodes.
	 *
	 * @param {Locator} locator
	 */
	setDocumentLocator: function (locator) {
		if (locator) {
			locator.lineNumber = 0;
		}
		this.locator = locator;
	},
	//LexicalHandler
	comment: function (chars, start, length) {
		chars = _toString.apply(this, arguments);
		var comm = this.doc.createComment(chars);
		this.locator && position(this.locator, comm);
		appendElement(this, comm);
	},

	startCDATA: function () {
		//used in characters() methods
		this.cdata = true;
	},
	endCDATA: function () {
		this.cdata = false;
	},

	startDTD: function (name, publicId, systemId, internalSubset) {
		var impl = this.doc.implementation;
		if (impl && impl.createDocumentType) {
			var dt = impl.createDocumentType(name, publicId, systemId, internalSubset);
			this.locator && position(this.locator, dt);
			appendElement(this, dt);
			this.doc.doctype = dt;
		}
	},
	reportError: function (level, message) {
		if (typeof this.onError === 'function') {
			try {
				this.onError(level, message, this);
			} catch (e) {
				throw new ParseError('Reporting ' + level + ' "' + message + '" caused ' + e, this.locator);
			}
		} else {
			console.error('[xmldom ' + level + ']\t' + message, _locator(this.locator));
		}
	},
	/**
	 * @see http://www.saxproject.org/apidoc/org/xml/sax/ErrorHandler.html
	 */
	warning: function (message) {
		this.reportError('warning', message);
	},
	error: function (message) {
		this.reportError('error', message);
	},
	/**
	 * This function reports a fatal error and throws a ParseError.
	 *
	 * @param {string} message
	 * - The message to be used for reporting and throwing the error.
	 * @returns {never}
	 * This function always throws an error and never returns a value.
	 * @throws {ParseError}
	 * Always throws a ParseError with the provided message.
	 */
	fatalError: function (message) {
		this.reportError('fatalError', message);
		throw new ParseError(message, this.locator);
	},
};

function _locator(l) {
	if (l) {
		return '\n@#[line:' + l.lineNumber + ',col:' + l.columnNumber + ']';
	}
}

function _toString(chars, start, length) {
	if (typeof chars == 'string') {
		return chars.substr(start, length);
	} else {
		//java sax connect width xmldom on rhino(what about: "? && !(chars instanceof String)")
		if (chars.length >= start + length || start) {
			return new java.lang.String(chars, start, length) + '';
		}
		return chars;
	}
}

/*
 * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/LexicalHandler.html
 * used method of org.xml.sax.ext.LexicalHandler:
 *  #comment(chars, start, length)
 *  #startCDATA()
 *  #endCDATA()
 *  #startDTD(name, publicId, systemId)
 *
 *
 * IGNORED method of org.xml.sax.ext.LexicalHandler:
 *  #endDTD()
 *  #startEntity(name)
 *  #endEntity(name)
 *
 *
 * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/DeclHandler.html
 * IGNORED method of org.xml.sax.ext.DeclHandler
 * 	#attributeDecl(eName, aName, type, mode, value)
 *  #elementDecl(name, model)
 *  #externalEntityDecl(name, publicId, systemId)
 *  #internalEntityDecl(name, value)
 * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/EntityResolver2.html
 * IGNORED method of org.xml.sax.EntityResolver2
 *  #resolveEntity(String name,String publicId,String baseURI,String systemId)
 *  #resolveEntity(publicId, systemId)
 *  #getExternalSubset(name, baseURI)
 * @link http://www.saxproject.org/apidoc/org/xml/sax/DTDHandler.html
 * IGNORED method of org.xml.sax.DTDHandler
 *  #notationDecl(name, publicId, systemId) {};
 *  #unparsedEntityDecl(name, publicId, systemId, notationName) {};
 */
'endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl'.replace(
	/\w+/g,
	function (key) {
		DOMHandler.prototype[key] = function () {
			return null;
		};
	}
);

/* Private static helpers treated below as private instance methods, so don't need to add these to the public API; we might use a Relator to also get rid of non-standard public properties */
function appendElement(handler, node) {
	if (!handler.currentElement) {
		handler.doc.appendChild(node);
	} else {
		handler.currentElement.appendChild(node);
	}
}

/**
 * A method that prevents any further parsing when an `error`
 * with level `error` is reported during parsing.
 *
 * @see {@link DOMParserOptions.onError}
 * @see {@link onWarningStopParsing}
 */
function onErrorStopParsing(level) {
	if (level === 'error') throw 'onErrorStopParsing';
}

/**
 * A method that prevents any further parsing when any `error` is reported during parsing.
 *
 * @see {@link DOMParserOptions.onError}
 * @see {@link onErrorStopParsing}
 */
function onWarningStopParsing() {
	throw 'onWarningStopParsing';
}

exports.__DOMHandler = DOMHandler;
exports.DOMParser = DOMParser;
exports.normalizeLineEndings = normalizeLineEndings;
exports.onErrorStopParsing = onErrorStopParsing;
exports.onWarningStopParsing = onWarningStopParsing;


/***/ }),

/***/ 714:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ Variables)
/* harmony export */ });
class Variables {
    static ensureLocale(loc, def) {
        if (!Variables.LOCALES.get(loc)) {
            console.error(`Locale ${loc} does not exist! Using` +
                ` ${Variables.LOCALES.get(def)} instead.`);
            return def;
        }
        return loc;
    }
}
Variables.VERSION = '5.0.0-beta.1';
Variables.LOCALES = new Map([
    ['af', 'Africaans'],
    ['ca', 'Catalan'],
    ['da', 'Danish'],
    ['de', 'German'],
    ['en', 'English'],
    ['es', 'Spanish'],
    ['euro', 'Euro'],
    ['fr', 'French'],
    ['hi', 'Hindi'],
    ['it', 'Italian'],
    ['ko', 'Korean'],
    ['nb', 'Bokmål'],
    ['nn', 'Nynorsk'],
    ['sv', 'Swedish'],
    ['nemeth', 'Nemeth']
]);
Variables.mathjaxVersion = '4.0.0';
Variables.url = 'https://cdn.jsdelivr.net/npm/speech-rule-engine@' +
    Variables.VERSION +
    '/lib/mathmaps';
//# sourceMappingURL=variables.js.map

/***/ }),

/***/ 731:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


/**
 * Detects relevant unicode support for regular expressions in the runtime.
 * Should the runtime not accepts the flag `u` or unicode ranges,
 * character classes without unicode handling will be used.
 *
 * @param {typeof RegExp} [RegExpImpl=RegExp]
 * For testing: the RegExp class.
 * @returns {boolean}
 * @see https://node.green/#ES2015-syntax-RegExp--y--and--u--flags
 */
function detectUnicodeSupport(RegExpImpl) {
	try {
		if (typeof RegExpImpl !== 'function') {
			RegExpImpl = RegExp;
		}
		// eslint-disable-next-line es5/no-unicode-regex,es5/no-unicode-code-point-escape
		var match = new RegExpImpl('\u{1d306}', 'u').exec('𝌆');
		return !!match && match[0].length === 2;
	} catch (error) {}
	return false;
}
var UNICODE_SUPPORT = detectUnicodeSupport();

/**
 * Removes `[`, `]` and any trailing quantifiers from the source of a RegExp.
 *
 * @param {RegExp} regexp
 */
function chars(regexp) {
	if (regexp.source[0] !== '[') {
		throw new Error(regexp + ' can not be used with chars');
	}
	return regexp.source.slice(1, regexp.source.lastIndexOf(']'));
}

/**
 * Creates a new character list regular expression,
 * by removing `search` from the source of `regexp`.
 *
 * @param {RegExp} regexp
 * @param {string} search
 * The character(s) to remove.
 * @returns {RegExp}
 */
function chars_without(regexp, search) {
	if (regexp.source[0] !== '[') {
		throw new Error('/' + regexp.source + '/ can not be used with chars_without');
	}
	if (!search || typeof search !== 'string') {
		throw new Error(JSON.stringify(search) + ' is not a valid search');
	}
	if (regexp.source.indexOf(search) === -1) {
		throw new Error('"' + search + '" is not is /' + regexp.source + '/');
	}
	if (search === '-' && regexp.source.indexOf(search) !== 1) {
		throw new Error('"' + search + '" is not at the first postion of /' + regexp.source + '/');
	}
	return new RegExp(regexp.source.replace(search, ''), UNICODE_SUPPORT ? 'u' : '');
}

/**
 * Combines and Regular expressions correctly by using `RegExp.source`.
 *
 * @param {...(RegExp | string)[]} args
 * @returns {RegExp}
 */
function reg(args) {
	var self = this;
	return new RegExp(
		Array.prototype.slice
			.call(arguments)
			.map(function (part) {
				var isStr = typeof part === 'string';
				if (isStr && self === undefined && part === '|') {
					throw new Error('use regg instead of reg to wrap expressions with `|`!');
				}
				return isStr ? part : part.source;
			})
			.join(''),
		UNICODE_SUPPORT ? 'mu' : 'm'
	);
}

/**
 * Like `reg` but wraps the expression in `(?:`,`)` to create a non tracking group.
 *
 * @param {...(RegExp | string)[]} args
 * @returns {RegExp}
 */
function regg(args) {
	if (arguments.length === 0) {
		throw new Error('no parameters provided');
	}
	return reg.apply(regg, ['(?:'].concat(Array.prototype.slice.call(arguments), [')']));
}

// /**
//  * Append ^ to the beginning of the expression.
//  * @param {...(RegExp | string)[]} args
//  * @returns {RegExp}
//  */
// function reg_start(args) {
// 	if (arguments.length === 0) {
// 		throw new Error('no parameters provided');
// 	}
// 	return reg.apply(reg_start, ['^'].concat(Array.prototype.slice.call(arguments)));
// }

// https://www.w3.org/TR/xml/#document
// `[1] document ::= prolog element Misc*`
// https://www.w3.org/TR/xml11/#NT-document
// `[1] document ::= ( prolog element Misc* ) - ( Char* RestrictedChar Char* )`

/**
 * A character usually appearing in wrongly converted strings.
 *
 * @type {string}
 * @see https://en.wikipedia.org/wiki/Specials_(Unicode_block)#Replacement_character
 * @see https://nodejs.dev/en/api/v18/buffer/#buffers-and-character-encodings
 * @see https://www.unicode.org/faq/utf_bom.html#BOM
 * @readonly
 */
var UNICODE_REPLACEMENT_CHARACTER = '\uFFFD';
// https://www.w3.org/TR/xml/#NT-Char
// any Unicode character, excluding the surrogate blocks, FFFE, and FFFF.
// `[2] Char ::= #x9 | #xA | #xD | [#x20-#xD7FF] | [#xE000-#xFFFD] | [#x10000-#x10FFFF]`
// https://www.w3.org/TR/xml11/#NT-Char
// `[2] Char ::= [#x1-#xD7FF] | [#xE000-#xFFFD] | [#x10000-#x10FFFF]`
// https://www.w3.org/TR/xml11/#NT-RestrictedChar
// `[2a] RestrictedChar ::= [#x1-#x8] | [#xB-#xC] | [#xE-#x1F] | [#x7F-#x84] | [#x86-#x9F]`
// https://www.w3.org/TR/xml11/#charsets
var Char = /[-\x09\x0A\x0D\x20-\x2C\x2E-\uD7FF\uE000-\uFFFD]/; // without \u10000-\uEFFFF
if (UNICODE_SUPPORT) {
	// eslint-disable-next-line es5/no-unicode-code-point-escape
	Char = reg('[', chars(Char), '\\u{10000}-\\u{10FFFF}', ']');
}

var _SChar = /[\x20\x09\x0D\x0A]/;
var SChar_s = chars(_SChar);
// https://www.w3.org/TR/xml11/#NT-S
// `[3] S ::= (#x20 | #x9 | #xD | #xA)+`
var S = reg(_SChar, '+');
// optional whitespace described as `S?` in the grammar,
// simplified to 0-n occurrences of the character class
// instead of 0-1 occurrences of a non-capturing group around S
var S_OPT = reg(_SChar, '*');

// https://www.w3.org/TR/xml11/#NT-NameStartChar
// `[4] NameStartChar ::= ":" | [A-Z] | "_" | [a-z] | [#xC0-#xD6] | [#xD8-#xF6] | [#xF8-#x2FF] | [#x370-#x37D] | [#x37F-#x1FFF] | [#x200C-#x200D] | [#x2070-#x218F] | [#x2C00-#x2FEF] | [#x3001-#xD7FF] | [#xF900-#xFDCF] | [#xFDF0-#xFFFD] | [#x10000-#xEFFFF]`
var NameStartChar =
	/[:_a-zA-Z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/; // without \u10000-\uEFFFF
if (UNICODE_SUPPORT) {
	// eslint-disable-next-line es5/no-unicode-code-point-escape
	NameStartChar = reg('[', chars(NameStartChar), '\\u{10000}-\\u{10FFFF}', ']');
}
var NameStartChar_s = chars(NameStartChar);

// https://www.w3.org/TR/xml11/#NT-NameChar
// `[4a] NameChar ::= NameStartChar | "-" | "." | [0-9] | #xB7 | [#x0300-#x036F] | [#x203F-#x2040]`
var NameChar = reg('[', NameStartChar_s, chars(/[-.0-9\xB7]/), chars(/[\u0300-\u036F\u203F-\u2040]/), ']');
// https://www.w3.org/TR/xml11/#NT-Name
// `[5] Name ::= NameStartChar (NameChar)*`
var Name = reg(NameStartChar, NameChar, '*');
/*
https://www.w3.org/TR/xml11/#NT-Names
`[6] Names ::= Name (#x20 Name)*`
*/

// https://www.w3.org/TR/xml11/#NT-Nmtoken
// `[7] Nmtoken ::= (NameChar)+`
var Nmtoken = reg(NameChar, '+');
/*
https://www.w3.org/TR/xml11/#NT-Nmtokens
`[8] Nmtokens ::= Nmtoken (#x20 Nmtoken)*`
var Nmtokens = reg(Nmtoken, regg(/\x20/, Nmtoken), '*');
*/

// https://www.w3.org/TR/xml11/#NT-EntityRef
// `[68] EntityRef ::= '&' Name ';'` [WFC: Entity Declared] [VC: Entity Declared] [WFC: Parsed Entity] [WFC: No Recursion]
var EntityRef = reg('&', Name, ';');
// https://www.w3.org/TR/xml11/#NT-CharRef
// `[66] CharRef ::= '&#' [0-9]+ ';' | '&#x' [0-9a-fA-F]+ ';'` [WFC: Legal Character]
var CharRef = regg(/&#[0-9]+;|&#x[0-9a-fA-F]+;/);

/*
https://www.w3.org/TR/xml11/#NT-Reference
- `[67] Reference ::= EntityRef | CharRef`
- `[66] CharRef ::= '&#' [0-9]+ ';' | '&#x' [0-9a-fA-F]+ ';'` [WFC: Legal Character]
- `[68] EntityRef ::= '&' Name ';'` [WFC: Entity Declared] [VC: Entity Declared] [WFC: Parsed Entity] [WFC: No Recursion]
*/
var Reference = regg(EntityRef, '|', CharRef);

// https://www.w3.org/TR/xml11/#NT-PEReference
// `[69] PEReference ::= '%' Name ';'`
// [VC: Entity Declared] [WFC: No Recursion] [WFC: In DTD]
var PEReference = reg('%', Name, ';');

// https://www.w3.org/TR/xml11/#NT-EntityValue
// `[9] EntityValue ::= '"' ([^%&"] | PEReference | Reference)* '"' | "'" ([^%&'] | PEReference | Reference)* "'"`
var EntityValue = regg(
	reg('"', regg(/[^%&"]/, '|', PEReference, '|', Reference), '*', '"'),
	'|',
	reg("'", regg(/[^%&']/, '|', PEReference, '|', Reference), '*', "'")
);

// https://www.w3.org/TR/xml11/#NT-AttValue
// `[10] AttValue ::= '"' ([^<&"] | Reference)* '"' | "'" ([^<&'] | Reference)* "'"`
var AttValue = regg('"', regg(/[^<&"]/, '|', Reference), '*', '"', '|', "'", regg(/[^<&']/, '|', Reference), '*', "'");

// https://www.w3.org/TR/xml-names/#ns-decl
// https://www.w3.org/TR/xml-names/#ns-qualnames
// NameStartChar without ":"
var NCNameStartChar = chars_without(NameStartChar, ':');
// https://www.w3.org/TR/xml-names/#orphans
// `[5] NCNameChar ::= NameChar - ':'`
// An XML NameChar, minus the ":"
var NCNameChar = chars_without(NameChar, ':');
// https://www.w3.org/TR/xml-names/#NT-NCName
// `[4] NCName ::= Name - (Char* ':' Char*)`
// An XML Name, minus the ":"
var NCName = reg(NCNameStartChar, NCNameChar, '*');

/**
https://www.w3.org/TR/xml-names/#ns-qualnames

```
[7] QName ::= PrefixedName | UnprefixedName
				  === (NCName ':' NCName) | NCName
				  === NCName (':' NCName)?
[8] PrefixedName ::= Prefix ':' LocalPart
								 === NCName ':' NCName
[9] UnprefixedName ::= LocalPart
									 === NCName
[10] Prefix ::= NCName
[11] LocalPart ::= NCName
```
*/
var QName = reg(NCName, regg(':', NCName), '?');
var QName_exact = reg('^', QName, '$');
var QName_group = reg('(', QName, ')');

// https://www.w3.org/TR/xml11/#NT-SystemLiteral
// `[11] SystemLiteral ::= ('"' [^"]* '"') | ("'" [^']* "'")`
var SystemLiteral = regg(/"[^"]*"|'[^']*'/);

/*
 https://www.w3.org/TR/xml11/#NT-PI
 ```
 [17] PITarget    ::= Name - (('X' | 'x') ('M' | 'm') ('L' | 'l'))
 [16] PI    ::= '<?' PITarget (S (Char* - (Char* '?>' Char*)))? '?>'
 ```
 target /xml/i is not excluded!
*/
var PI = reg(/^<\?/, '(', Name, ')', regg(S, '(', Char, '*?)'), '?', /\?>/);

// https://www.w3.org/TR/xml11/#NT-PubidChar
// `[13] PubidChar ::= #x20 | #xD | #xA | [a-zA-Z0-9] | [-'()+,./:=?;!*#@$_%]`
var PubidChar = /[\x20\x0D\x0Aa-zA-Z0-9-'()+,./:=?;!*#@$_%]/;

// https://www.w3.org/TR/xml11/#NT-PubidLiteral
// `[12] PubidLiteral ::= '"' PubidChar* '"' | "'" (PubidChar - "'")* "'"`
var PubidLiteral = regg('"', PubidChar, '*"', '|', "'", chars_without(PubidChar, "'"), "*'");

// https://www.w3.org/TR/xml11/#NT-CharData
// `[14] CharData    ::= [^<&]* - ([^<&]* ']]>' [^<&]*)`

var COMMENT_START = '<!--';
var COMMENT_END = '-->';
// https://www.w3.org/TR/xml11/#NT-Comment
// `[15] Comment ::= '<!--' ((Char - '-') | ('-' (Char - '-')))* '-->'`
var Comment = reg(COMMENT_START, regg(chars_without(Char, '-'), '|', reg('-', chars_without(Char, '-'))), '*', COMMENT_END);

var PCDATA = '#PCDATA';
// https://www.w3.org/TR/xml11/#NT-Mixed
// `[51] Mixed ::= '(' S? '#PCDATA' (S? '|' S? Name)* S? ')*' | '(' S? '#PCDATA' S? ')'`
// https://www.w3.org/TR/xml-names/#NT-Mixed
// `[51] Mixed ::= '(' S? '#PCDATA' (S? '|' S? QName)* S? ')*' | '(' S? '#PCDATA' S? ')'`
// [VC: Proper Group/PE Nesting] [VC: No Duplicate Types]
var Mixed = regg(
	reg(/\(/, S_OPT, PCDATA, regg(S_OPT, /\|/, S_OPT, QName), '*', S_OPT, /\)\*/),
	'|',
	reg(/\(/, S_OPT, PCDATA, S_OPT, /\)/)
);

var _children_quantity = /[?*+]?/;
/*
 `[49] choice ::= '(' S? cp ( S? '|' S? cp )+ S? ')'` [VC: Proper Group/PE Nesting]
 `[50] seq ::= '(' S? cp ( S? ',' S? cp )* S? ')'` [VC: Proper Group/PE Nesting]
 simplification to solve circular referencing, but doesn't check validity constraint "Proper Group/PE Nesting"
 var _choice_or_seq = reg('[', NameChar_s, SChar_s, chars(_children_quantity), '()|,]*');
 ```
 [48] cp ::= (Name | choice | seq) ('?' | '*' | '+')?
         === (Name | '(' S? cp ( S? '|' S? cp )+ S? ')' | '(' S? cp ( S? ',' S? cp )* S? ')') ('?' | '*' | '+')?
         !== (Name | [_choice_or_seq]*) ('?' | '*' | '+')?
 ```
 simplification to solve circular referencing, but doesn't check validity constraint "Proper Group/PE Nesting"
 var cp = reg(regg(Name, '|', _choice_or_seq), _children_quantity);
*/
/*
Inefficient regular expression (High)
This part of the regular expression may cause exponential backtracking on strings starting with '(|' and containing many repetitions of '|'.
https://github.com/xmldom/xmldom/security/code-scanning/91
var choice = regg(/\(/, S_OPT, cp, regg(S_OPT, /\|/, S_OPT, cp), '+', S_OPT, /\)/);
*/
/*
Inefficient regular expression (High)
This part of the regular expression may cause exponential backtracking on strings starting with '(,' and containing many repetitions of ','.
https://github.com/xmldom/xmldom/security/code-scanning/92
var seq = regg(/\(/, S_OPT, cp, regg(S_OPT, /,/, S_OPT, cp), '*', S_OPT, /\)/);
*/

// `[47] children ::= (choice | seq) ('?' | '*' | '+')?`
// simplification to solve circular referencing, but doesn't check validity constraint "Proper Group/PE Nesting"
var children = reg(/\([^>]+\)/, _children_quantity /*regg(choice, '|', seq), _children_quantity*/);

// https://www.w3.org/TR/xml11/#NT-contentspec
// `[46] contentspec ::= 'EMPTY' | 'ANY' | Mixed | children`
var contentspec = regg('EMPTY', '|', 'ANY', '|', Mixed, '|', children);

var ELEMENTDECL_START = '<!ELEMENT';
// https://www.w3.org/TR/xml11/#NT-elementdecl
// `[45] elementdecl ::= '<!ELEMENT' S Name S contentspec S? '>'`
// https://www.w3.org/TR/xml-names/#NT-elementdecl
// `[17] elementdecl ::= '<!ELEMENT' S QName S contentspec S? '>'`
// because of https://www.w3.org/TR/xml11/#NT-PEReference
// since xmldom is not supporting replacements of PEReferences in the DTD
// this also supports PEReference in the possible places
var elementdecl = reg(ELEMENTDECL_START, S, regg(QName, '|', PEReference), S, regg(contentspec, '|', PEReference), S_OPT, '>');

// https://www.w3.org/TR/xml11/#NT-NotationType
// `[58] NotationType ::= 'NOTATION' S '(' S? Name (S? '|' S? Name)* S? ')'`
// [VC: Notation Attributes] [VC: One Notation Per Element Type] [VC: No Notation on Empty Element] [VC: No Duplicate Tokens]
var NotationType = reg('NOTATION', S, /\(/, S_OPT, Name, regg(S_OPT, /\|/, S_OPT, Name), '*', S_OPT, /\)/);
// https://www.w3.org/TR/xml11/#NT-Enumeration
// `[59] Enumeration ::= '(' S? Nmtoken (S? '|' S? Nmtoken)* S? ')'`
// [VC: Enumeration] [VC: No Duplicate Tokens]
var Enumeration = reg(/\(/, S_OPT, Nmtoken, regg(S_OPT, /\|/, S_OPT, Nmtoken), '*', S_OPT, /\)/);

// https://www.w3.org/TR/xml11/#NT-EnumeratedType
// `[57] EnumeratedType ::= NotationType | Enumeration`
var EnumeratedType = regg(NotationType, '|', Enumeration);

/*
```
[55] StringType ::= 'CDATA'
[56] TokenizedType ::= 'ID' [VC: ID] [VC: One ID per Element Type] [VC: ID Attribute Default]
   | 'IDREF' [VC: IDREF]
   | 'IDREFS' [VC: IDREF]
	 | 'ENTITY' [VC: Entity Name]
	 | 'ENTITIES' [VC: Entity Name]
	 | 'NMTOKEN' [VC: Name Token]
	 | 'NMTOKENS' [VC: Name Token]
 [54] AttType ::= StringType | TokenizedType | EnumeratedType
```*/
var AttType = regg(/CDATA|ID|IDREF|IDREFS|ENTITY|ENTITIES|NMTOKEN|NMTOKENS/, '|', EnumeratedType);

// `[60] DefaultDecl ::= '#REQUIRED' | '#IMPLIED' | (('#FIXED' S)? AttValue)`
// [WFC: No < in Attribute Values] [WFC: No External Entity References]
// [VC: Fixed Attribute Default] [VC: Required Attribute] [VC: Attribute Default Value Syntactically Correct]
var DefaultDecl = regg(/#REQUIRED|#IMPLIED/, '|', regg(regg('#FIXED', S), '?', AttValue));

// https://www.w3.org/TR/xml11/#NT-AttDef
// [53] AttDef ::= S Name S AttType S DefaultDecl
// https://www.w3.org/TR/xml-names/#NT-AttDef
// [1] NSAttName ::= PrefixedAttName | DefaultAttName
// [2] PrefixedAttName ::= 'xmlns:' NCName [NSC: Reserved Prefixes and Namespace Names]
// [3] DefaultAttName ::= 'xmlns'
// [21] AttDef ::= S (QName | NSAttName) S AttType S DefaultDecl
// 						 === S Name S AttType S DefaultDecl
// xmldom is not distinguishing between QName and NSAttName on this level
// to support XML without namespaces in DTD we can not restrict it to QName
var AttDef = regg(S, Name, S, AttType, S, DefaultDecl);

var ATTLIST_DECL_START = '<!ATTLIST';
// https://www.w3.org/TR/xml11/#NT-AttlistDecl
// `[52] AttlistDecl ::= '<!ATTLIST' S Name AttDef* S? '>'`
// https://www.w3.org/TR/xml-names/#NT-AttlistDecl
// `[20] AttlistDecl ::= '<!ATTLIST' S QName AttDef* S? '>'`
// to support XML without namespaces in DTD we can not restrict it to QName
var AttlistDecl = reg(ATTLIST_DECL_START, S, Name, AttDef, '*', S_OPT, '>');

// https://html.spec.whatwg.org/multipage/urls-and-fetching.html#about:legacy-compat
var ABOUT_LEGACY_COMPAT = 'about:legacy-compat';
var ABOUT_LEGACY_COMPAT_SystemLiteral = regg('"' + ABOUT_LEGACY_COMPAT + '"', '|', "'" + ABOUT_LEGACY_COMPAT + "'");
var SYSTEM = 'SYSTEM';
var PUBLIC = 'PUBLIC';
// https://www.w3.org/TR/xml11/#NT-ExternalID
// `[75] ExternalID ::= 'SYSTEM' S SystemLiteral | 'PUBLIC' S PubidLiteral S SystemLiteral`
var ExternalID = regg(regg(SYSTEM, S, SystemLiteral), '|', regg(PUBLIC, S, PubidLiteral, S, SystemLiteral));
var ExternalID_match = reg(
	'^',
	regg(
		regg(SYSTEM, S, '(?<SystemLiteralOnly>', SystemLiteral, ')'),
		'|',
		regg(PUBLIC, S, '(?<PubidLiteral>', PubidLiteral, ')', S, '(?<SystemLiteral>', SystemLiteral, ')')
	)
);

// https://www.w3.org/TR/xml11/#NT-NDataDecl
// `[76] NDataDecl ::= S 'NDATA' S Name` [VC: Notation Declared]
var NDataDecl = regg(S, 'NDATA', S, Name);

// https://www.w3.org/TR/xml11/#NT-EntityDef
// `[73] EntityDef ::= EntityValue | (ExternalID NDataDecl?)`
var EntityDef = regg(EntityValue, '|', regg(ExternalID, NDataDecl, '?'));

var ENTITY_DECL_START = '<!ENTITY';
// https://www.w3.org/TR/xml11/#NT-GEDecl
// `[71] GEDecl ::= '<!ENTITY' S Name S EntityDef S? '>'`
var GEDecl = reg(ENTITY_DECL_START, S, Name, S, EntityDef, S_OPT, '>');
// https://www.w3.org/TR/xml11/#NT-PEDef
// `[74] PEDef ::= EntityValue | ExternalID`
var PEDef = regg(EntityValue, '|', ExternalID);
// https://www.w3.org/TR/xml11/#NT-PEDecl
// `[72] PEDecl ::= '<!ENTITY' S '%' S Name S PEDef S? '>'`
var PEDecl = reg(ENTITY_DECL_START, S, '%', S, Name, S, PEDef, S_OPT, '>');
// https://www.w3.org/TR/xml11/#NT-EntityDecl
// `[70] EntityDecl ::= GEDecl | PEDecl`
var EntityDecl = regg(GEDecl, '|', PEDecl);

// https://www.w3.org/TR/xml11/#NT-PublicID
// `[83] PublicID    ::= 'PUBLIC' S PubidLiteral`
var PublicID = reg(PUBLIC, S, PubidLiteral);
// https://www.w3.org/TR/xml11/#NT-NotationDecl
// `[82] NotationDecl    ::= '<!NOTATION' S Name S (ExternalID | PublicID) S? '>'` [VC: Unique Notation Name]
var NotationDecl = reg('<!NOTATION', S, Name, S, regg(ExternalID, '|', PublicID), S_OPT, '>');

// https://www.w3.org/TR/xml11/#NT-Eq
// `[25] Eq ::= S? '=' S?`
var Eq = reg(S_OPT, '=', S_OPT);
// https://www.w3.org/TR/xml/#NT-VersionNum
// `[26] VersionNum ::= '1.' [0-9]+`
// https://www.w3.org/TR/xml11/#NT-VersionNum
// `[26] VersionNum ::= '1.1'`
var VersionNum = /1[.]\d+/;
// https://www.w3.org/TR/xml11/#NT-VersionInfo
// `[24] VersionInfo ::= S 'version' Eq ("'" VersionNum "'" | '"' VersionNum '"')`
var VersionInfo = reg(S, 'version', Eq, regg("'", VersionNum, "'", '|', '"', VersionNum, '"'));
// https://www.w3.org/TR/xml11/#NT-EncName
// `[81] EncName ::= [A-Za-z] ([A-Za-z0-9._] | '-')*`
var EncName = /[A-Za-z][-A-Za-z0-9._]*/;
// https://www.w3.org/TR/xml11/#NT-EncDecl
// `[80] EncodingDecl ::= S 'encoding' Eq ('"' EncName '"' | "'" EncName "'" )`
var EncodingDecl = regg(S, 'encoding', Eq, regg('"', EncName, '"', '|', "'", EncName, "'"));
// https://www.w3.org/TR/xml11/#NT-SDDecl
// `[32] SDDecl ::= S 'standalone' Eq (("'" ('yes' | 'no') "'") | ('"' ('yes' | 'no') '"'))`
var SDDecl = regg(S, 'standalone', Eq, regg("'", regg('yes', '|', 'no'), "'", '|', '"', regg('yes', '|', 'no'), '"'));
// https://www.w3.org/TR/xml11/#NT-XMLDecl
// [23] XMLDecl ::= '<?xml' VersionInfo EncodingDecl? SDDecl? S? '?>'
var XMLDecl = reg(/^<\?xml/, VersionInfo, EncodingDecl, '?', SDDecl, '?', S_OPT, /\?>/);

/*
 https://www.w3.org/TR/xml/#NT-markupdecl
 https://www.w3.org/TR/xml11/#NT-markupdecl
 `[29] markupdecl ::= elementdecl | AttlistDecl | EntityDecl | NotationDecl | PI | Comment`
 var markupdecl = regg(elementdecl, '|', AttlistDecl, '|', EntityDecl, '|', NotationDecl, '|', PI_unsafe, '|', Comment);
*/
/*
 https://www.w3.org/TR/xml-names/#NT-doctypedecl
`[28a] DeclSep   ::= PEReference | S`
 https://www.w3.org/TR/xml11/#NT-intSubset
```
 [28b] intSubset ::= (markupdecl | DeclSep)*
                 === (markupdecl | PEReference | S)*
```
 [WFC: PE Between Declarations]
 var intSubset = reg(regg(markupdecl, '|', PEReference, '|', S), '*');
*/
var DOCTYPE_DECL_START = '<!DOCTYPE';
/*
 https://www.w3.org/TR/xml11/#NT-doctypedecl
 `[28] doctypedecl ::= '<!DOCTYPE' S Name (S ExternalID)? S? ('[' intSubset ']' S?)? '>'`
 https://www.afterwardsw3.org/TR/xml-names/#NT-doctypedecl
 `[16] doctypedecl ::= '<!DOCTYPE' S QName (S ExternalID)? S? ('[' (markupdecl | PEReference | S)* ']' S?)? '>'`
 var doctypedecl = reg('<!DOCTYPE', S, Name, regg(S, ExternalID), '?', S_OPT, regg(/\[/, intSubset, /]/, S_OPT), '?', '>');
*/

var CDATA_START = '<![CDATA[';
var CDATA_END = ']]>';
var CDStart = /<!\[CDATA\[/;
var CDEnd = /\]\]>/;
var CData = reg(Char, '*?', CDEnd);
/*
 https://www.w3.org/TR/xml/#dt-cdsection
 `[18]   	CDSect	   ::=   	CDStart CData CDEnd`
 `[19]   	CDStart	   ::=   	'<![CDATA['`
 `[20]   	CData	   ::=   	(Char* - (Char* ']]>' Char*))`
 `[21]   	CDEnd	   ::=   	']]>'`
*/
var CDSect = reg(CDStart, CData);

// unit tested
exports.chars = chars;
exports.chars_without = chars_without;
exports.detectUnicodeSupport = detectUnicodeSupport;
exports.reg = reg;
exports.regg = regg;
exports.ABOUT_LEGACY_COMPAT = ABOUT_LEGACY_COMPAT;
exports.ABOUT_LEGACY_COMPAT_SystemLiteral = ABOUT_LEGACY_COMPAT_SystemLiteral;
exports.AttlistDecl = AttlistDecl;
exports.CDATA_START = CDATA_START;
exports.CDATA_END = CDATA_END;
exports.CDSect = CDSect;
exports.Char = Char;
exports.Comment = Comment;
exports.COMMENT_START = COMMENT_START;
exports.COMMENT_END = COMMENT_END;
exports.DOCTYPE_DECL_START = DOCTYPE_DECL_START;
exports.elementdecl = elementdecl;
exports.EntityDecl = EntityDecl;
exports.EntityValue = EntityValue;
exports.ExternalID = ExternalID;
exports.ExternalID_match = ExternalID_match;
exports.Name = Name;
exports.NotationDecl = NotationDecl;
exports.Reference = Reference;
exports.PEReference = PEReference;
exports.PI = PI;
exports.PUBLIC = PUBLIC;
exports.PubidLiteral = PubidLiteral;
exports.QName = QName;
exports.QName_exact = QName_exact;
exports.QName_group = QName_group;
exports.S = S;
exports.SChar_s = SChar_s;
exports.S_OPT = S_OPT;
exports.SYSTEM = SYSTEM;
exports.SystemLiteral = SystemLiteral;
exports.UNICODE_REPLACEMENT_CHARACTER = UNICODE_REPLACEMENT_CHARACTER;
exports.UNICODE_SUPPORT = UNICODE_SUPPORT;
exports.XMLDecl = XMLDecl;


/***/ }),

/***/ 767:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var conventions = __webpack_require__(870);

function extendError(constructor, writableName) {
	constructor.prototype = Object.create(Error.prototype, {
		constructor: { value: constructor },
		name: { value: constructor.name, enumerable: true, writable: writableName },
	});
}

var DOMExceptionName = conventions.freeze({
	/**
	 * the default value as defined by the spec
	 */
	Error: 'Error',
	/**
	 * @deprecated
	 * Use RangeError instead.
	 */
	IndexSizeError: 'IndexSizeError',
	/**
	 * @deprecated
	 * Just to match the related static code, not part of the spec.
	 */
	DomstringSizeError: 'DomstringSizeError',
	HierarchyRequestError: 'HierarchyRequestError',
	WrongDocumentError: 'WrongDocumentError',
	InvalidCharacterError: 'InvalidCharacterError',
	/**
	 * @deprecated
	 * Just to match the related static code, not part of the spec.
	 */
	NoDataAllowedError: 'NoDataAllowedError',
	NoModificationAllowedError: 'NoModificationAllowedError',
	NotFoundError: 'NotFoundError',
	NotSupportedError: 'NotSupportedError',
	InUseAttributeError: 'InUseAttributeError',
	InvalidStateError: 'InvalidStateError',
	SyntaxError: 'SyntaxError',
	InvalidModificationError: 'InvalidModificationError',
	NamespaceError: 'NamespaceError',
	/**
	 * @deprecated
	 * Use TypeError for invalid arguments,
	 * "NotSupportedError" DOMException for unsupported operations,
	 * and "NotAllowedError" DOMException for denied requests instead.
	 */
	InvalidAccessError: 'InvalidAccessError',
	/**
	 * @deprecated
	 * Just to match the related static code, not part of the spec.
	 */
	ValidationError: 'ValidationError',
	/**
	 * @deprecated
	 * Use TypeError instead.
	 */
	TypeMismatchError: 'TypeMismatchError',
	SecurityError: 'SecurityError',
	NetworkError: 'NetworkError',
	AbortError: 'AbortError',
	/**
	 * @deprecated
	 * Just to match the related static code, not part of the spec.
	 */
	URLMismatchError: 'URLMismatchError',
	QuotaExceededError: 'QuotaExceededError',
	TimeoutError: 'TimeoutError',
	InvalidNodeTypeError: 'InvalidNodeTypeError',
	DataCloneError: 'DataCloneError',
	EncodingError: 'EncodingError',
	NotReadableError: 'NotReadableError',
	UnknownError: 'UnknownError',
	ConstraintError: 'ConstraintError',
	DataError: 'DataError',
	TransactionInactiveError: 'TransactionInactiveError',
	ReadOnlyError: 'ReadOnlyError',
	VersionError: 'VersionError',
	OperationError: 'OperationError',
	NotAllowedError: 'NotAllowedError',
	OptOutError: 'OptOutError',
});
var DOMExceptionNames = Object.keys(DOMExceptionName);

function isValidDomExceptionCode(value) {
	return typeof value === 'number' && value >= 1 && value <= 25;
}
function endsWithError(value) {
	return typeof value === 'string' && value.substring(value.length - DOMExceptionName.Error.length) === DOMExceptionName.Error;
}
/**
 * DOM operations only raise exceptions in "exceptional" circumstances, i.e., when an operation
 * is impossible to perform (either for logical reasons, because data is lost, or because the
 * implementation has become unstable). In general, DOM methods return specific error values in
 * ordinary processing situations, such as out-of-bound errors when using NodeList.
 *
 * Implementations should raise other exceptions under other circumstances. For example,
 * implementations should raise an implementation-dependent exception if a null argument is
 * passed when null was not expected.
 *
 * This implementation supports the following usages:
 * 1. according to the living standard (both arguments are optional):
 * ```
 * new DOMException("message (can be empty)", DOMExceptionNames.HierarchyRequestError)
 * ```
 * 2. according to previous xmldom implementation (only the first argument is required):
 * ```
 * new DOMException(DOMException.HIERARCHY_REQUEST_ERR, "optional message")
 * ```
 * both result in the proper name being set.
 *
 * @class DOMException
 * @param {number | string} messageOrCode
 * The reason why an operation is not acceptable.
 * If it is a number, it is used to determine the `name`, see
 * {@link https://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-258A00AF ExceptionCode}
 * @param {string | keyof typeof DOMExceptionName | Error} [nameOrMessage]
 * The `name` to use for the error.
 * If `messageOrCode` is a number, this arguments is used as the `message` instead.
 * @augments Error
 * @see https://webidl.spec.whatwg.org/#idl-DOMException
 * @see https://webidl.spec.whatwg.org/#dfn-error-names-table
 * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-17189187
 * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
 * @see http://www.w3.org/TR/REC-DOM-Level-1/ecma-script-language-binding.html
 */
function DOMException(messageOrCode, nameOrMessage) {
	// support old way of passing arguments: first argument is a valid number
	if (isValidDomExceptionCode(messageOrCode)) {
		this.name = DOMExceptionNames[messageOrCode];
		this.message = nameOrMessage || '';
	} else {
		this.message = messageOrCode;
		this.name = endsWithError(nameOrMessage) ? nameOrMessage : DOMExceptionName.Error;
	}
	if (Error.captureStackTrace) Error.captureStackTrace(this, DOMException);
}
extendError(DOMException, true);
Object.defineProperties(DOMException.prototype, {
	code: {
		enumerable: true,
		get: function () {
			var code = DOMExceptionNames.indexOf(this.name);
			if (isValidDomExceptionCode(code)) return code;
			return 0;
		},
	},
});

var ExceptionCode = {
	INDEX_SIZE_ERR: 1,
	DOMSTRING_SIZE_ERR: 2,
	HIERARCHY_REQUEST_ERR: 3,
	WRONG_DOCUMENT_ERR: 4,
	INVALID_CHARACTER_ERR: 5,
	NO_DATA_ALLOWED_ERR: 6,
	NO_MODIFICATION_ALLOWED_ERR: 7,
	NOT_FOUND_ERR: 8,
	NOT_SUPPORTED_ERR: 9,
	INUSE_ATTRIBUTE_ERR: 10,
	INVALID_STATE_ERR: 11,
	SYNTAX_ERR: 12,
	INVALID_MODIFICATION_ERR: 13,
	NAMESPACE_ERR: 14,
	INVALID_ACCESS_ERR: 15,
	VALIDATION_ERR: 16,
	TYPE_MISMATCH_ERR: 17,
	SECURITY_ERR: 18,
	NETWORK_ERR: 19,
	ABORT_ERR: 20,
	URL_MISMATCH_ERR: 21,
	QUOTA_EXCEEDED_ERR: 22,
	TIMEOUT_ERR: 23,
	INVALID_NODE_TYPE_ERR: 24,
	DATA_CLONE_ERR: 25,
};

var entries = Object.entries(ExceptionCode);
for (var i = 0; i < entries.length; i++) {
	var key = entries[i][0];
	DOMException[key] = entries[i][1];
}

/**
 * Creates an error that will not be caught by XMLReader aka the SAX parser.
 *
 * @class
 * @param {string} message
 * @param {any} [locator]
 */
function ParseError(message, locator) {
	this.message = message;
	this.locator = locator;
	if (Error.captureStackTrace) Error.captureStackTrace(this, ParseError);
}
extendError(ParseError);

exports.DOMException = DOMException;
exports.DOMExceptionName = DOMExceptionName;
exports.ExceptionCode = ExceptionCode;
exports.ParseError = ParseError;


/***/ }),

/***/ 786:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var conventions = __webpack_require__(870);
var find = conventions.find;
var hasDefaultHTMLNamespace = conventions.hasDefaultHTMLNamespace;
var hasOwn = conventions.hasOwn;
var isHTMLMimeType = conventions.isHTMLMimeType;
var isHTMLRawTextElement = conventions.isHTMLRawTextElement;
var isHTMLVoidElement = conventions.isHTMLVoidElement;
var MIME_TYPE = conventions.MIME_TYPE;
var NAMESPACE = conventions.NAMESPACE;

/**
 * Private DOM Constructor symbol
 *
 * Internal symbol used for construction of all classes whose constructors should be private.
 * Currently used for checks in `Node`, `Document`, `Element`, `Attr`, `CharacterData`, `Text`, `Comment`,
 * `CDATASection`, `DocumentType`, `Notation`, `Entity`, `EntityReference`, `DocumentFragment`, `ProcessingInstruction`
 * so the constructor can't be used from outside the module.
 */
var PDC = Symbol();

var errors = __webpack_require__(767);
var DOMException = errors.DOMException;
var DOMExceptionName = errors.DOMExceptionName;

var g = __webpack_require__(731);

/**
 * Checks if the given symbol equals the Private DOM Constructor symbol (PDC)
 * and throws an Illegal constructor exception when the symbols don't match.
 * This ensures that the constructor remains private and can't be used outside this module.
 */
function checkSymbol(symbol) {
	if (symbol !== PDC) {
		throw new TypeError('Illegal constructor');
	}
}

/**
 * A prerequisite for `[].filter`, to drop elements that are empty.
 *
 * @param {string} input
 * The string to be checked.
 * @returns {boolean}
 * Returns `true` if the input string is not empty, `false` otherwise.
 */
function notEmptyString(input) {
	return input !== '';
}
/**
 * Splits a string on ASCII whitespace characters (U+0009 TAB, U+000A LF, U+000C FF, U+000D CR,
 * U+0020 SPACE).
 * It follows the definition from the infra specification from WHATWG.
 *
 * @param {string} input
 * The string to be split.
 * @returns {string[]}
 * An array of the split strings. The array can be empty if the input string is empty or only
 * contains whitespace characters.
 * @see {@link https://infra.spec.whatwg.org/#split-on-ascii-whitespace}
 * @see {@link https://infra.spec.whatwg.org/#ascii-whitespace}
 */
function splitOnASCIIWhitespace(input) {
	// U+0009 TAB, U+000A LF, U+000C FF, U+000D CR, U+0020 SPACE
	return input ? input.split(/[\t\n\f\r ]+/).filter(notEmptyString) : [];
}

/**
 * Adds element as a key to current if it is not already present.
 *
 * @param {Record<string, boolean | undefined>} current
 * The current record object to which the element will be added as a key.
 * The object's keys are string types and values are either boolean or undefined.
 * @param {string} element
 * The string to be added as a key to the current record.
 * @returns {Record<string, boolean | undefined>}
 * The updated record object after the addition of the new element.
 */
function orderedSetReducer(current, element) {
	if (!hasOwn(current, element)) {
		current[element] = true;
	}
	return current;
}

/**
 * Converts a string into an ordered set by splitting the input on ASCII whitespace and
 * ensuring uniqueness of elements.
 * This follows the definition of an ordered set from the infra specification by WHATWG.
 *
 * @param {string} input
 * The input string to be transformed into an ordered set.
 * @returns {string[]}
 * An array of unique strings obtained from the input, preserving the original order.
 * The array can be empty if the input string is empty or only contains whitespace characters.
 * @see {@link https://infra.spec.whatwg.org/#ordered-set}
 */
function toOrderedSet(input) {
	if (!input) return [];
	var list = splitOnASCIIWhitespace(input);
	return Object.keys(list.reduce(orderedSetReducer, {}));
}

/**
 * Uses `list.indexOf` to implement a function that behaves like `Array.prototype.includes`.
 * This function is used in environments where `Array.prototype.includes` may not be available.
 *
 * @param {any[]} list
 * The array in which to search for the element.
 * @returns {function(any): boolean}
 * A function that accepts an element and returns a boolean indicating whether the element is
 * included in the provided list.
 */
function arrayIncludes(list) {
	return function (element) {
		return list && list.indexOf(element) !== -1;
	};
}

/**
 * Validates a qualified name based on the criteria provided in the DOM specification by
 * WHATWG.
 *
 * @param {string} qualifiedName
 * The qualified name to be validated.
 * @throws {DOMException}
 * With code {@link DOMException.INVALID_CHARACTER_ERR} if the qualified name contains an
 * invalid character.
 * @see {@link https://dom.spec.whatwg.org/#validate}
 */
function validateQualifiedName(qualifiedName) {
	if (!g.QName_exact.test(qualifiedName)) {
		throw new DOMException(DOMException.INVALID_CHARACTER_ERR, 'invalid character in qualified name "' + qualifiedName + '"');
	}
}

/**
 * Validates a qualified name and the namespace associated with it,
 * based on the criteria provided in the DOM specification by WHATWG.
 *
 * @param {string | null} namespace
 * The namespace to be validated. It can be a string or null.
 * @param {string} qualifiedName
 * The qualified name to be validated.
 * @returns {[namespace: string | null, prefix: string | null, localName: string]}
 * Returns a tuple with the namespace,
 * prefix and local name of the qualified name.
 * @throws {DOMException}
 * Throws a DOMException if the qualified name or the namespace is not valid.
 * @see {@link https://dom.spec.whatwg.org/#validate-and-extract}
 */
function validateAndExtract(namespace, qualifiedName) {
	validateQualifiedName(qualifiedName);
	namespace = namespace || null;
	/**
	 * @type {string | null}
	 */
	var prefix = null;
	var localName = qualifiedName;
	if (qualifiedName.indexOf(':') >= 0) {
		var splitResult = qualifiedName.split(':');
		prefix = splitResult[0];
		localName = splitResult[1];
	}
	if (prefix !== null && namespace === null) {
		throw new DOMException(DOMException.NAMESPACE_ERR, 'prefix is non-null and namespace is null');
	}
	if (prefix === 'xml' && namespace !== conventions.NAMESPACE.XML) {
		throw new DOMException(DOMException.NAMESPACE_ERR, 'prefix is "xml" and namespace is not the XML namespace');
	}
	if ((prefix === 'xmlns' || qualifiedName === 'xmlns') && namespace !== conventions.NAMESPACE.XMLNS) {
		throw new DOMException(
			DOMException.NAMESPACE_ERR,
			'either qualifiedName or prefix is "xmlns" and namespace is not the XMLNS namespace'
		);
	}
	if (namespace === conventions.NAMESPACE.XMLNS && prefix !== 'xmlns' && qualifiedName !== 'xmlns') {
		throw new DOMException(
			DOMException.NAMESPACE_ERR,
			'namespace is the XMLNS namespace and neither qualifiedName nor prefix is "xmlns"'
		);
	}
	return [namespace, prefix, localName];
}

/**
 * Copies properties from one object to another.
 * It only copies the object's own (not inherited) properties.
 *
 * @param {Object} src
 * The source object from which properties are copied.
 * @param {Object} dest
 * The destination object to which properties are copied.
 */
function copy(src, dest) {
	for (var p in src) {
		if (hasOwn(src, p)) {
			dest[p] = src[p];
		}
	}
}

/**
 * Extends a class with the properties and methods of a super class.
 * It uses a form of prototypal inheritance, and establishes the `constructor` property
 * correctly(?).
 *
 * It is not clear to the current maintainers if this implementation is making sense,
 * since it creates an intermediate prototype function,
 * which all properties of `Super` are copied onto using `_copy`.
 *
 * @param {Object} Class
 * The class that is to be extended.
 * @param {Object} Super
 * The super class from which properties and methods are inherited.
 * @private
 */
function _extends(Class, Super) {
	var pt = Class.prototype;
	if (!(pt instanceof Super)) {
		function t() {}
		t.prototype = Super.prototype;
		t = new t();
		copy(pt, t);
		Class.prototype = pt = t;
	}
	if (pt.constructor != Class) {
		if (typeof Class != 'function') {
			console.error('unknown Class:' + Class);
		}
		pt.constructor = Class;
	}
}

var NodeType = {};
var ELEMENT_NODE = (NodeType.ELEMENT_NODE = 1);
var ATTRIBUTE_NODE = (NodeType.ATTRIBUTE_NODE = 2);
var TEXT_NODE = (NodeType.TEXT_NODE = 3);
var CDATA_SECTION_NODE = (NodeType.CDATA_SECTION_NODE = 4);
var ENTITY_REFERENCE_NODE = (NodeType.ENTITY_REFERENCE_NODE = 5);
var ENTITY_NODE = (NodeType.ENTITY_NODE = 6);
var PROCESSING_INSTRUCTION_NODE = (NodeType.PROCESSING_INSTRUCTION_NODE = 7);
var COMMENT_NODE = (NodeType.COMMENT_NODE = 8);
var DOCUMENT_NODE = (NodeType.DOCUMENT_NODE = 9);
var DOCUMENT_TYPE_NODE = (NodeType.DOCUMENT_TYPE_NODE = 10);
var DOCUMENT_FRAGMENT_NODE = (NodeType.DOCUMENT_FRAGMENT_NODE = 11);
var NOTATION_NODE = (NodeType.NOTATION_NODE = 12);

var DocumentPosition = conventions.freeze({
	DOCUMENT_POSITION_DISCONNECTED: 1,
	DOCUMENT_POSITION_PRECEDING: 2,
	DOCUMENT_POSITION_FOLLOWING: 4,
	DOCUMENT_POSITION_CONTAINS: 8,
	DOCUMENT_POSITION_CONTAINED_BY: 16,
	DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: 32,
});

//helper functions for compareDocumentPosition
/**
 * Finds the common ancestor in two parent chains.
 *
 * @param {Node[]} a
 * The first parent chain.
 * @param {Node[]} b
 * The second parent chain.
 * @returns {Node}
 * The common ancestor node if it exists. If there is no common ancestor, the function will
 * return `null`.
 */
function commonAncestor(a, b) {
	if (b.length < a.length) return commonAncestor(b, a);
	var c = null;
	for (var n in a) {
		if (a[n] !== b[n]) return c;
		c = a[n];
	}
	return c;
}

/**
 * Assigns a unique identifier to a document to ensure consistency while comparing unrelated
 * nodes.
 *
 * @param {Document} doc
 * The document to which a unique identifier is to be assigned.
 * @returns {string}
 * The unique identifier of the document. If the document already had a unique identifier, the
 * function will return the existing one.
 */
function docGUID(doc) {
	if (!doc.guid) doc.guid = Math.random();
	return doc.guid;
}
//-- end of helper functions

/**
 * The NodeList interface provides the abstraction of an ordered collection of nodes,
 * without defining or constraining how this collection is implemented.
 * NodeList objects in the DOM are live.
 * The items in the NodeList are accessible via an integral index, starting from 0.
 * You can also access the items of the NodeList with a `for...of` loop.
 *
 * @class NodeList
 * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-536297177
 * @constructs NodeList
 */
function NodeList() {}
NodeList.prototype = {
	/**
	 * The number of nodes in the list. The range of valid child node indices is 0 to length-1
	 * inclusive.
	 *
	 * @type {number}
	 */
	length: 0,
	/**
	 * Returns the item at `index`. If index is greater than or equal to the number of nodes in
	 * the list, this returns null.
	 *
	 * @param index
	 * Unsigned long Index into the collection.
	 * @returns {Node | null}
	 * The node at position `index` in the NodeList,
	 * or null if that is not a valid index.
	 */
	item: function (index) {
		return index >= 0 && index < this.length ? this[index] : null;
	},
	/**
	 * Returns a string representation of the NodeList.
	 *
	 * @param {unknown} nodeFilter
	 * __A filter function? Not implemented according to the spec?__.
	 * @returns {string}
	 * A string representation of the NodeList.
	 */
	toString: function (nodeFilter) {
		for (var buf = [], i = 0; i < this.length; i++) {
			serializeToString(this[i], buf, nodeFilter);
		}
		return buf.join('');
	},
	/**
	 * Filters the NodeList based on a predicate.
	 *
	 * @param {function(Node): boolean} predicate
	 * - A predicate function to filter the NodeList.
	 * @returns {Node[]}
	 * An array of nodes that satisfy the predicate.
	 * @private
	 */
	filter: function (predicate) {
		return Array.prototype.filter.call(this, predicate);
	},
	/**
	 * Returns the first index at which a given node can be found in the NodeList, or -1 if it is
	 * not present.
	 *
	 * @param {Node} item
	 * - The Node item to locate in the NodeList.
	 * @returns {number}
	 * The first index of the node in the NodeList; -1 if not found.
	 * @private
	 */
	indexOf: function (item) {
		return Array.prototype.indexOf.call(this, item);
	},
};
NodeList.prototype[Symbol.iterator] = function () {
	var me = this;
	var index = 0;

	return {
		next: function () {
			if (index < me.length) {
				return {
					value: me[index++],
					done: false,
				};
			} else {
				return {
					done: true,
				};
			}
		},
		return: function () {
			return {
				done: true,
			};
		},
	};
};

/**
 * Represents a live collection of nodes that is automatically updated when its associated
 * document changes.
 *
 * @class LiveNodeList
 * @param {Node} node
 * The associated node.
 * @param {function} refresh
 * The function to refresh the live node list.
 * @augments NodeList
 * @constructs LiveNodeList
 */
function LiveNodeList(node, refresh) {
	this._node = node;
	this._refresh = refresh;
	_updateLiveList(this);
}
/**
 * Updates the live node list.
 *
 * @param {LiveNodeList} list
 * The live node list to update.
 * @private
 */
function _updateLiveList(list) {
	var inc = list._node._inc || list._node.ownerDocument._inc;
	if (list._inc !== inc) {
		var ls = list._refresh(list._node);
		__set__(list, 'length', ls.length);
		if (!list.$$length || ls.length < list.$$length) {
			for (var i = ls.length; i in list; i++) {
				if (hasOwn(list, i)) {
					delete list[i];
				}
			}
		}
		copy(ls, list);
		list._inc = inc;
	}
}
/**
 * Returns the node at position `index` in the LiveNodeList, or null if that is not a valid
 * index.
 *
 * @param {number} i
 * Index into the collection.
 * @returns {Node | null}
 * The node at position `index` in the LiveNodeList, or null if that is not a valid index.
 */
LiveNodeList.prototype.item = function (i) {
	_updateLiveList(this);
	return this[i] || null;
};

_extends(LiveNodeList, NodeList);

/**
 * Objects implementing the NamedNodeMap interface are used to represent collections of nodes
 * that can be accessed by name.
 * Note that NamedNodeMap does not inherit from NodeList;
 * NamedNodeMaps are not maintained in any particular order.
 * Objects contained in an object implementing NamedNodeMap may also be accessed by an ordinal
 * index,
 * but this is simply to allow convenient enumeration of the contents of a NamedNodeMap,
 * and does not imply that the DOM specifies an order to these Nodes.
 * NamedNodeMap objects in the DOM are live.
 * used for attributes or DocumentType entities
 *
 * This implementation only supports property indices, but does not support named properties,
 * as specified in the living standard.
 *
 * @class NamedNodeMap
 * @see https://dom.spec.whatwg.org/#interface-namednodemap
 * @see https://webidl.spec.whatwg.org/#dfn-supported-property-names
 * @constructs NamedNodeMap
 */
function NamedNodeMap() {}
/**
 * Returns the index of a node within the list.
 *
 * @param {Array} list
 * The list of nodes.
 * @param {Node} node
 * The node to find.
 * @returns {number}
 * The index of the node within the list, or -1 if not found.
 * @private
 */
function _findNodeIndex(list, node) {
	var i = 0;
	while (i < list.length) {
		if (list[i] === node) {
			return i;
		}
		i++;
	}
}
/**
 * Adds a new attribute to the list and updates the owner element of the attribute.
 *
 * @param {Element} el
 * The element which will become the owner of the new attribute.
 * @param {NamedNodeMap} list
 * The list to which the new attribute will be added.
 * @param {Attr} newAttr
 * The new attribute to be added.
 * @param {Attr} oldAttr
 * The old attribute to be replaced, or null if no attribute is to be replaced.
 * @returns {void}
 * @private
 */
function _addNamedNode(el, list, newAttr, oldAttr) {
	if (oldAttr) {
		list[_findNodeIndex(list, oldAttr)] = newAttr;
	} else {
		list[list.length] = newAttr;
		list.length++;
	}
	if (el) {
		newAttr.ownerElement = el;
		var doc = el.ownerDocument;
		if (doc) {
			oldAttr && _onRemoveAttribute(doc, el, oldAttr);
			_onAddAttribute(doc, el, newAttr);
		}
	}
}
/**
 * Removes an attribute from the list and updates the owner element of the attribute.
 *
 * @param {Element} el
 * The element which is the current owner of the attribute.
 * @param {NamedNodeMap} list
 * The list from which the attribute will be removed.
 * @param {Attr} attr
 * The attribute to be removed.
 * @returns {void}
 * @private
 */
function _removeNamedNode(el, list, attr) {
	//console.log('remove attr:'+attr)
	var i = _findNodeIndex(list, attr);
	if (i >= 0) {
		var lastIndex = list.length - 1;
		while (i <= lastIndex) {
			list[i] = list[++i];
		}
		list.length = lastIndex;
		if (el) {
			var doc = el.ownerDocument;
			if (doc) {
				_onRemoveAttribute(doc, el, attr);
			}
			attr.ownerElement = null;
		}
	}
}
NamedNodeMap.prototype = {
	length: 0,
	item: NodeList.prototype.item,

	/**
	 * Get an attribute by name. Note: Name is in lower case in case of HTML namespace and
	 * document.
	 *
	 * @param {string} localName
	 * The local name of the attribute.
	 * @returns {Attr | null}
	 * The attribute with the given local name, or null if no such attribute exists.
	 * @see https://dom.spec.whatwg.org/#concept-element-attributes-get-by-name
	 */
	getNamedItem: function (localName) {
		if (this._ownerElement && this._ownerElement._isInHTMLDocumentAndNamespace()) {
			localName = localName.toLowerCase();
		}
		var i = 0;
		while (i < this.length) {
			var attr = this[i];
			if (attr.nodeName === localName) {
				return attr;
			}
			i++;
		}
		return null;
	},

	/**
	 * Set an attribute.
	 *
	 * @param {Attr} attr
	 * The attribute to set.
	 * @returns {Attr | null}
	 * The old attribute with the same local name and namespace URI as the new one, or null if no
	 * such attribute exists.
	 * @throws {DOMException}
	 * With code:
	 * - {@link INUSE_ATTRIBUTE_ERR} - If the attribute is already an attribute of another
	 * element.
	 * @see https://dom.spec.whatwg.org/#concept-element-attributes-set
	 */
	setNamedItem: function (attr) {
		var el = attr.ownerElement;
		if (el && el !== this._ownerElement) {
			throw new DOMException(DOMException.INUSE_ATTRIBUTE_ERR);
		}
		var oldAttr = this.getNamedItemNS(attr.namespaceURI, attr.localName);
		if (oldAttr === attr) {
			return attr;
		}
		_addNamedNode(this._ownerElement, this, attr, oldAttr);
		return oldAttr;
	},

	/**
	 * Set an attribute, replacing an existing attribute with the same local name and namespace
	 * URI if one exists.
	 *
	 * @param {Attr} attr
	 * The attribute to set.
	 * @returns {Attr | null}
	 * The old attribute with the same local name and namespace URI as the new one, or null if no
	 * such attribute exists.
	 * @throws {DOMException}
	 * Throws a DOMException with the name "InUseAttributeError" if the attribute is already an
	 * attribute of another element.
	 * @see https://dom.spec.whatwg.org/#concept-element-attributes-set
	 */
	setNamedItemNS: function (attr) {
		return this.setNamedItem(attr);
	},

	/**
	 * Removes an attribute specified by the local name.
	 *
	 * @param {string} localName
	 * The local name of the attribute to be removed.
	 * @returns {Attr}
	 * The attribute node that was removed.
	 * @throws {DOMException}
	 * With code:
	 * - {@link DOMException.NOT_FOUND_ERR} if no attribute with the given name is found.
	 * @see https://dom.spec.whatwg.org/#dom-namednodemap-removenameditem
	 * @see https://dom.spec.whatwg.org/#concept-element-attributes-remove-by-name
	 */
	removeNamedItem: function (localName) {
		var attr = this.getNamedItem(localName);
		if (!attr) {
			throw new DOMException(DOMException.NOT_FOUND_ERR, localName);
		}
		_removeNamedNode(this._ownerElement, this, attr);
		return attr;
	},

	/**
	 * Removes an attribute specified by the namespace and local name.
	 *
	 * @param {string | null} namespaceURI
	 * The namespace URI of the attribute to be removed.
	 * @param {string} localName
	 * The local name of the attribute to be removed.
	 * @returns {Attr}
	 * The attribute node that was removed.
	 * @throws {DOMException}
	 * With code:
	 * - {@link DOMException.NOT_FOUND_ERR} if no attribute with the given namespace URI and local
	 * name is found.
	 * @see https://dom.spec.whatwg.org/#dom-namednodemap-removenameditemns
	 * @see https://dom.spec.whatwg.org/#concept-element-attributes-remove-by-namespace
	 */
	removeNamedItemNS: function (namespaceURI, localName) {
		var attr = this.getNamedItemNS(namespaceURI, localName);
		if (!attr) {
			throw new DOMException(DOMException.NOT_FOUND_ERR, namespaceURI ? namespaceURI + ' : ' + localName : localName);
		}
		_removeNamedNode(this._ownerElement, this, attr);
		return attr;
	},

	/**
	 * Get an attribute by namespace and local name.
	 *
	 * @param {string | null} namespaceURI
	 * The namespace URI of the attribute.
	 * @param {string} localName
	 * The local name of the attribute.
	 * @returns {Attr | null}
	 * The attribute with the given namespace URI and local name, or null if no such attribute
	 * exists.
	 * @see https://dom.spec.whatwg.org/#concept-element-attributes-get-by-namespace
	 */
	getNamedItemNS: function (namespaceURI, localName) {
		if (!namespaceURI) {
			namespaceURI = null;
		}
		var i = 0;
		while (i < this.length) {
			var node = this[i];
			if (node.localName === localName && node.namespaceURI === namespaceURI) {
				return node;
			}
			i++;
		}
		return null;
	},
};
NamedNodeMap.prototype[Symbol.iterator] = function () {
	var me = this;
	var index = 0;

	return {
		next: function () {
			if (index < me.length) {
				return {
					value: me[index++],
					done: false,
				};
			} else {
				return {
					done: true,
				};
			}
		},
		return: function () {
			return {
				done: true,
			};
		},
	};
};

/**
 * The DOMImplementation interface provides a number of methods for performing operations that
 * are independent of any particular instance of the document object model.
 *
 * The DOMImplementation interface represents an object providing methods which are not
 * dependent on any particular document.
 * Such an object is returned by the `Document.implementation` property.
 *
 * **The individual methods describe the differences compared to the specs**.
 *
 * @class DOMImplementation
 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation MDN
 * @see https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-102161490 DOM Level 1 Core
 *      (Initial)
 * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-102161490 DOM Level 2 Core
 * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-102161490 DOM Level 3 Core
 * @see https://dom.spec.whatwg.org/#domimplementation DOM Living Standard
 * @constructs DOMImplementation
 */
function DOMImplementation() {}

DOMImplementation.prototype = {
	/**
	 * Test if the DOM implementation implements a specific feature and version, as specified in
	 * {@link https://www.w3.org/TR/DOM-Level-3-Core/core.html#DOMFeatures DOM Features}.
	 *
	 * The DOMImplementation.hasFeature() method returns a Boolean flag indicating if a given
	 * feature is supported. The different implementations fairly diverged in what kind of
	 * features were reported. The latest version of the spec settled to force this method to
	 * always return true, where the functionality was accurate and in use.
	 *
	 * @deprecated
	 * It is deprecated and modern browsers return true in all cases.
	 * @function DOMImplementation#hasFeature
	 * @param {string} feature
	 * The name of the feature to test.
	 * @param {string} [version]
	 * This is the version number of the feature to test.
	 * @returns {boolean}
	 * Always returns true.
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/hasFeature MDN
	 * @see https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-5CED94D7 DOM Level 1 Core
	 * @see https://dom.spec.whatwg.org/#dom-domimplementation-hasfeature DOM Living Standard
	 * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-5CED94D7 DOM Level 3 Core
	 */
	hasFeature: function (feature, version) {
		return true;
	},
	/**
	 * Creates a DOM Document object of the specified type with its document element. Note that
	 * based on the {@link DocumentType}
	 * given to create the document, the implementation may instantiate specialized
	 * {@link Document} objects that support additional features than the "Core", such as "HTML"
	 * {@link https://www.w3.org/TR/DOM-Level-3-Core/references.html#DOM2HTML DOM Level 2 HTML}.
	 * On the other hand, setting the {@link DocumentType} after the document was created makes
	 * this very unlikely to happen. Alternatively, specialized {@link Document} creation methods,
	 * such as createHTMLDocument
	 * {@link https://www.w3.org/TR/DOM-Level-3-Core/references.html#DOM2HTML DOM Level 2 HTML},
	 * can be used to obtain specific types of {@link Document} objects.
	 *
	 * __It behaves slightly different from the description in the living standard__:
	 * - There is no interface/class `XMLDocument`, it returns a `Document`
	 * instance (with it's `type` set to `'xml'`).
	 * - `encoding`, `mode`, `origin`, `url` fields are currently not declared.
	 *
	 * @function DOMImplementation.createDocument
	 * @param {string | null} namespaceURI
	 * The
	 * {@link https://www.w3.org/TR/DOM-Level-3-Core/glossary.html#dt-namespaceURI namespace URI}
	 * of the document element to create or null.
	 * @param {string | null} qualifiedName
	 * The
	 * {@link https://www.w3.org/TR/DOM-Level-3-Core/glossary.html#dt-qualifiedname qualified name}
	 * of the document element to be created or null.
	 * @param {DocumentType | null} [doctype=null]
	 * The type of document to be created or null. When doctype is not null, its
	 * {@link Node#ownerDocument} attribute is set to the document being created. Default is
	 * `null`
	 * @returns {Document}
	 * A new {@link Document} object with its document element. If the NamespaceURI,
	 * qualifiedName, and doctype are null, the returned {@link Document} is empty with no
	 * document element.
	 * @throws {DOMException}
	 * With code:
	 *
	 * - `INVALID_CHARACTER_ERR`: Raised if the specified qualified name is not an XML name
	 * according to {@link https://www.w3.org/TR/DOM-Level-3-Core/references.html#XML XML 1.0}.
	 * - `NAMESPACE_ERR`: Raised if the qualifiedName is malformed, if the qualifiedName has a
	 * prefix and the namespaceURI is null, or if the qualifiedName is null and the namespaceURI
	 * is different from null, or if the qualifiedName has a prefix that is "xml" and the
	 * namespaceURI is different from "{@link http://www.w3.org/XML/1998/namespace}"
	 * {@link https://www.w3.org/TR/DOM-Level-3-Core/references.html#Namespaces XML Namespaces},
	 * or if the DOM implementation does not support the "XML" feature but a non-null namespace
	 * URI was provided, since namespaces were defined by XML.
	 * - `WRONG_DOCUMENT_ERR`: Raised if doctype has already been used with a different document
	 * or was created from a different implementation.
	 * - `NOT_SUPPORTED_ERR`: May be raised if the implementation does not support the feature
	 * "XML" and the language exposed through the Document does not support XML Namespaces (such
	 * as {@link https://www.w3.org/TR/DOM-Level-3-Core/references.html#HTML40 HTML 4.01}).
	 * @since DOM Level 2.
	 * @see {@link #createHTMLDocument}
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocument MDN
	 * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument DOM Living Standard
	 * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#Level-2-Core-DOM-createDocument DOM
	 *      Level 3 Core
	 * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocument DOM
	 *      Level 2 Core (initial)
	 */
	createDocument: function (namespaceURI, qualifiedName, doctype) {
		var contentType = MIME_TYPE.XML_APPLICATION;
		if (namespaceURI === NAMESPACE.HTML) {
			contentType = MIME_TYPE.XML_XHTML_APPLICATION;
		} else if (namespaceURI === NAMESPACE.SVG) {
			contentType = MIME_TYPE.XML_SVG_IMAGE;
		}
		var doc = new Document(PDC, { contentType: contentType });
		doc.implementation = this;
		doc.childNodes = new NodeList();
		doc.doctype = doctype || null;
		if (doctype) {
			doc.appendChild(doctype);
		}
		if (qualifiedName) {
			var root = doc.createElementNS(namespaceURI, qualifiedName);
			doc.appendChild(root);
		}
		return doc;
	},
	/**
	 * Creates an empty DocumentType node. Entity declarations and notations are not made
	 * available. Entity reference expansions and default attribute additions do not occur.
	 *
	 * **This behavior is slightly different from the one in the specs**:
	 * - `encoding`, `mode`, `origin`, `url` fields are currently not declared.
	 * - `publicId` and `systemId` contain the raw data including any possible quotes,
	 *   so they can always be serialized back to the original value
	 * - `internalSubset` contains the raw string between `[` and `]` if present,
	 *   but is not parsed or validated in any form.
	 *
	 * @function DOMImplementation#createDocumentType
	 * @param {string} qualifiedName
	 * The {@link https://www.w3.org/TR/DOM-Level-3-Core/glossary.html#dt-qualifiedname qualified
	 * name} of the document type to be created.
	 * @param {string} [publicId]
	 * The external subset public identifier.
	 * @param {string} [systemId]
	 * The external subset system identifier.
	 * @param {string} [internalSubset]
	 * the internal subset or an empty string if it is not present
	 * @returns {DocumentType}
	 * A new {@link DocumentType} node with {@link Node#ownerDocument} set to null.
	 * @throws {DOMException}
	 * With code:
	 *
	 * - `INVALID_CHARACTER_ERR`: Raised if the specified qualified name is not an XML name
	 * according to {@link https://www.w3.org/TR/DOM-Level-3-Core/references.html#XML XML 1.0}.
	 * - `NAMESPACE_ERR`: Raised if the qualifiedName is malformed.
	 * - `NOT_SUPPORTED_ERR`: May be raised if the implementation does not support the feature
	 * "XML" and the language exposed through the Document does not support XML Namespaces (such
	 * as {@link https://www.w3.org/TR/DOM-Level-3-Core/references.html#HTML40 HTML 4.01}).
	 * @since DOM Level 2.
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocumentType
	 *      MDN
	 * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocumenttype DOM Living
	 *      Standard
	 * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#Level-3-Core-DOM-createDocType DOM
	 *      Level 3 Core
	 * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocType DOM
	 *      Level 2 Core
	 * @see https://github.com/xmldom/xmldom/blob/master/CHANGELOG.md#050
	 * @see https://www.w3.org/TR/DOM-Level-2-Core/#core-ID-Core-DocType-internalSubset
	 * @prettierignore
	 */
	createDocumentType: function (qualifiedName, publicId, systemId, internalSubset) {
		validateQualifiedName(qualifiedName);
		var node = new DocumentType(PDC);
		node.name = qualifiedName;
		node.nodeName = qualifiedName;
		node.publicId = publicId || '';
		node.systemId = systemId || '';
		node.internalSubset = internalSubset || '';
		node.childNodes = new NodeList();

		return node;
	},
	/**
	 * Returns an HTML document, that might already have a basic DOM structure.
	 *
	 * __It behaves slightly different from the description in the living standard__:
	 * - If the first argument is `false` no initial nodes are added (steps 3-7 in the specs are
	 * omitted)
	 * - `encoding`, `mode`, `origin`, `url` fields are currently not declared.
	 *
	 * @param {string | false} [title]
	 * A string containing the title to give the new HTML document.
	 * @returns {Document}
	 * The HTML document.
	 * @since WHATWG Living Standard.
	 * @see {@link #createDocument}
	 * @see https://dom.spec.whatwg.org/#dom-domimplementation-createhtmldocument
	 * @see https://dom.spec.whatwg.org/#html-document
	 */
	createHTMLDocument: function (title) {
		var doc = new Document(PDC, { contentType: MIME_TYPE.HTML });
		doc.implementation = this;
		doc.childNodes = new NodeList();
		if (title !== false) {
			doc.doctype = this.createDocumentType('html');
			doc.doctype.ownerDocument = doc;
			doc.appendChild(doc.doctype);
			var htmlNode = doc.createElement('html');
			doc.appendChild(htmlNode);
			var headNode = doc.createElement('head');
			htmlNode.appendChild(headNode);
			if (typeof title === 'string') {
				var titleNode = doc.createElement('title');
				titleNode.appendChild(doc.createTextNode(title));
				headNode.appendChild(titleNode);
			}
			htmlNode.appendChild(doc.createElement('body'));
		}
		return doc;
	},
};

/**
 * The DOM Node interface is an abstract base class upon which many other DOM API objects are
 * based, thus letting those object types to be used similarly and often interchangeably. As an
 * abstract class, there is no such thing as a plain Node object. All objects that implement
 * Node functionality are based on one of its subclasses. Most notable are Document, Element,
 * and DocumentFragment.
 *
 * In addition, every kind of DOM node is represented by an interface based on Node. These
 * include Attr, CharacterData (which Text, Comment, CDATASection and ProcessingInstruction are
 * all based on), and DocumentType.
 *
 * In some cases, a particular feature of the base Node interface may not apply to one of its
 * child interfaces; in that case, the inheriting node may return null or throw an exception,
 * depending on circumstances. For example, attempting to add children to a node type that
 * cannot have children will throw an exception.
 *
 * **This behavior is slightly different from the in the specs**:
 * - unimplemented interfaces: `EventTarget`
 *
 * @class
 * @abstract
 * @param {Symbol} symbol
 * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-1950641247
 * @see https://dom.spec.whatwg.org/#node
 * @prettierignore
 */
function Node(symbol) {
	checkSymbol(symbol);
}

Node.prototype = {
	/**
	 * The first child of this node.
	 *
	 * @type {Node | null}
	 */
	firstChild: null,
	/**
	 * The last child of this node.
	 *
	 * @type {Node | null}
	 */
	lastChild: null,
	/**
	 * The previous sibling of this node.
	 *
	 * @type {Node | null}
	 */
	previousSibling: null,
	/**
	 * The next sibling of this node.
	 *
	 * @type {Node | null}
	 */
	nextSibling: null,
	/**
	 * The parent node of this node.
	 *
	 * @type {Node | null}
	 */
	parentNode: null,
	/**
	 * The parent element of this node.
	 *
	 * @type {Element | null}
	 */
	get parentElement() {
		return this.parentNode && this.parentNode.nodeType === this.ELEMENT_NODE ? this.parentNode : null;
	},
	/**
	 * The child nodes of this node.
	 *
	 * @type {NodeList}
	 */
	childNodes: null,
	/**
	 * The document object associated with this node.
	 *
	 * @type {Document | null}
	 */
	ownerDocument: null,
	/**
	 * The value of this node.
	 *
	 * @type {string | null}
	 */
	nodeValue: null,
	/**
	 * The namespace URI of this node.
	 *
	 * @type {string | null}
	 */
	namespaceURI: null,
	/**
	 * The prefix of the namespace for this node.
	 *
	 * @type {string | null}
	 */
	prefix: null,
	/**
	 * The local part of the qualified name of this node.
	 *
	 * @type {string | null}
	 */
	localName: null,
	/**
	 * The baseURI is currently always `about:blank`,
	 * since that's what happens when you create a document from scratch.
	 *
	 * @type {'about:blank'}
	 */
	baseURI: 'about:blank',
	/**
	 * Is true if this node is part of a document.
	 *
	 * @type {boolean}
	 */
	get isConnected() {
		var rootNode = this.getRootNode();
		return rootNode && rootNode.nodeType === rootNode.DOCUMENT_NODE;
	},
	/**
	 * Checks whether `other` is an inclusive descendant of this node.
	 *
	 * @param {Node | null | undefined} other
	 * The node to check.
	 * @returns {boolean}
	 * True if `other` is an inclusive descendant of this node; false otherwise.
	 * @see https://dom.spec.whatwg.org/#dom-node-contains
	 */
	contains: function (other) {
		if (!other) return false;
		var parent = other;
		do {
			if (this === parent) return true;
			parent = other.parentNode;
		} while (parent);
		return false;
	},
	/**
	 * @typedef GetRootNodeOptions
	 * @property {boolean} [composed=false]
	 */
	/**
	 * Searches for the root node of this node.
	 *
	 * **This behavior is slightly different from the in the specs**:
	 * - ignores `options.composed`, since `ShadowRoot`s are unsupported, always returns root.
	 *
	 * @param {GetRootNodeOptions} [options]
	 * @returns {Node}
	 * Root node.
	 * @see https://dom.spec.whatwg.org/#dom-node-getrootnode
	 * @see https://dom.spec.whatwg.org/#concept-shadow-including-root
	 */
	getRootNode: function (options) {
		var parent = this;
		do {
			if (!parent.parentNode) {
				return parent;
			}
			parent = parent.parentNode;
		} while (parent);
	},
	/**
	 * Checks whether the given node is equal to this node.
	 *
	 * @param {Node} [otherNode]
	 * @see https://dom.spec.whatwg.org/#concept-node-equals
	 */
	isEqualNode: function (otherNode) {
		if (!otherNode) return false;

		if (this.nodeType !== otherNode.nodeType) return false;

		switch (this.nodeType) {
			case this.DOCUMENT_TYPE_NODE:
				if (this.name !== otherNode.name) return false;
				if (this.publicId !== otherNode.publicId) return false;
				if (this.systemId !== otherNode.systemId) return false;
				break;
			case this.ELEMENT_NODE:
				if (this.namespaceURI !== otherNode.namespaceURI) return false;
				if (this.prefix !== otherNode.prefix) return false;
				if (this.localName !== otherNode.localName) return false;
				if (this.attributes.length !== otherNode.attributes.length) return false;
				for (var i = 0; i < this.attributes.length; i++) {
					var attr = this.attributes.item(i);
					if (!attr.isEqualNode(otherNode.getAttributeNodeNS(attr.namespaceURI, attr.localName))) {
						return false;
					}
				}
				break;
			case this.ATTRIBUTE_NODE:
				if (this.namespaceURI !== otherNode.namespaceURI) return false;
				if (this.localName !== otherNode.localName) return false;
				if (this.value !== otherNode.value) return false;

				break;
			case this.PROCESSING_INSTRUCTION_NODE:
				if (this.target !== otherNode.target || this.data !== otherNode.data) {
					return false;
				}
				break;
			case this.TEXT_NODE:
			case this.COMMENT_NODE:
				if (this.data !== otherNode.data) return false;
				break;
		}

		if (this.childNodes.length !== otherNode.childNodes.length) {
			return false;
		}

		for (var i = 0; i < this.childNodes.length; i++) {
			if (!this.childNodes[i].isEqualNode(otherNode.childNodes[i])) {
				return false;
			}
		}

		return true;
	},
	/**
	 * Checks whether or not the given node is this node.
	 *
	 * @param {Node} [otherNode]
	 */
	isSameNode: function (otherNode) {
		return this === otherNode;
	},
	/**
	 * Inserts a node before a reference node as a child of this node.
	 *
	 * @param {Node} newChild
	 * The new child node to be inserted.
	 * @param {Node | null} refChild
	 * The reference node before which newChild will be inserted.
	 * @returns {Node}
	 * The new child node successfully inserted.
	 * @throws {DOMException}
	 * Throws a DOMException if inserting the node would result in a DOM tree that is not
	 * well-formed, or if `child` is provided but is not a child of `parent`.
	 * See {@link _insertBefore} for more details.
	 * @since Modified in DOM L2
	 */
	insertBefore: function (newChild, refChild) {
		return _insertBefore(this, newChild, refChild);
	},
	/**
	 * Replaces an old child node with a new child node within this node.
	 *
	 * @param {Node} newChild
	 * The new node that is to replace the old node.
	 * If it already exists in the DOM, it is removed from its original position.
	 * @param {Node} oldChild
	 * The existing child node to be replaced.
	 * @returns {Node}
	 * Returns the replaced child node.
	 * @throws {DOMException}
	 * Throws a DOMException if replacing the node would result in a DOM tree that is not
	 * well-formed, or if `oldChild` is not a child of `this`.
	 * This can also occur if the pre-replacement validity assertion fails.
	 * See {@link _insertBefore}, {@link Node.removeChild}, and
	 * {@link assertPreReplacementValidityInDocument} for more details.
	 * @see https://dom.spec.whatwg.org/#concept-node-replace
	 */
	replaceChild: function (newChild, oldChild) {
		_insertBefore(this, newChild, oldChild, assertPreReplacementValidityInDocument);
		if (oldChild) {
			this.removeChild(oldChild);
		}
	},
	/**
	 * Removes an existing child node from this node.
	 *
	 * @param {Node} oldChild
	 * The child node to be removed.
	 * @returns {Node}
	 * Returns the removed child node.
	 * @throws {DOMException}
	 * Throws a DOMException if `oldChild` is not a child of `this`.
	 * See {@link _removeChild} for more details.
	 */
	removeChild: function (oldChild) {
		return _removeChild(this, oldChild);
	},
	/**
	 * Appends a child node to this node.
	 *
	 * @param {Node} newChild
	 * The child node to be appended to this node.
	 * If it already exists in the DOM, it is removed from its original position.
	 * @returns {Node}
	 * Returns the appended child node.
	 * @throws {DOMException}
	 * Throws a DOMException if appending the node would result in a DOM tree that is not
	 * well-formed, or if `newChild` is not a valid Node.
	 * See {@link insertBefore} for more details.
	 */
	appendChild: function (newChild) {
		return this.insertBefore(newChild, null);
	},
	/**
	 * Determines whether this node has any child nodes.
	 *
	 * @returns {boolean}
	 * Returns true if this node has any child nodes, and false otherwise.
	 */
	hasChildNodes: function () {
		return this.firstChild != null;
	},
	/**
	 * Creates a copy of the calling node.
	 *
	 * @param {boolean} deep
	 * If true, the contents of the node are recursively copied.
	 * If false, only the node itself (and its attributes, if it is an element) are copied.
	 * @returns {Node}
	 * Returns the newly created copy of the node.
	 * @throws {DOMException}
	 * May throw a DOMException if operations within {@link Element#setAttributeNode} or
	 * {@link Node#appendChild} (which are potentially invoked in this method) do not meet their
	 * specific constraints.
	 * @see {@link cloneNode}
	 */
	cloneNode: function (deep) {
		return cloneNode(this.ownerDocument || this, this, deep);
	},
	/**
	 * Puts the specified node and all of its subtree into a "normalized" form. In a normalized
	 * subtree, no text nodes in the subtree are empty and there are no adjacent text nodes.
	 *
	 * Specifically, this method merges any adjacent text nodes (i.e., nodes for which `nodeType`
	 * is `TEXT_NODE`) into a single node with the combined data. It also removes any empty text
	 * nodes.
	 *
	 * This method operates recursively, so it also normalizes any and all descendent nodes within
	 * the subtree.
	 *
	 * @throws {DOMException}
	 * May throw a DOMException if operations within removeChild or appendData (which are
	 * potentially invoked in this method) do not meet their specific constraints.
	 * @since Modified in DOM Level 2
	 * @see {@link Node.removeChild}
	 * @see {@link CharacterData.appendData}
	 */
	normalize: function () {
		var child = this.firstChild;
		while (child) {
			var next = child.nextSibling;
			if (next && next.nodeType == TEXT_NODE && child.nodeType == TEXT_NODE) {
				this.removeChild(next);
				child.appendData(next.data);
			} else {
				child.normalize();
				child = next;
			}
		}
	},
	/**
	 * Checks whether the DOM implementation implements a specific feature and its version.
	 *
	 * @deprecated
	 * Since `DOMImplementation.hasFeature` is deprecated and always returns true.
	 * @param {string} feature
	 * The package name of the feature to test. This is the same name that can be passed to the
	 * method `hasFeature` on `DOMImplementation`.
	 * @param {string} version
	 * This is the version number of the package name to test.
	 * @returns {boolean}
	 * Returns true in all cases in the current implementation.
	 * @since Introduced in DOM Level 2
	 * @see {@link DOMImplementation.hasFeature}
	 */
	isSupported: function (feature, version) {
		return this.ownerDocument.implementation.hasFeature(feature, version);
	},
	/**
	 * Look up the prefix associated to the given namespace URI, starting from this node.
	 * **The default namespace declarations are ignored by this method.**
	 * See Namespace Prefix Lookup for details on the algorithm used by this method.
	 *
	 * **This behavior is different from the in the specs**:
	 * - no node type specific handling
	 * - uses the internal attribute _nsMap for resolving namespaces that is updated when changing attributes
	 *
	 * @param {string | null} namespaceURI
	 * The namespace URI for which to find the associated prefix.
	 * @returns {string | null}
	 * The associated prefix, if found; otherwise, null.
	 * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-lookupNamespacePrefix
	 * @see https://www.w3.org/TR/DOM-Level-3-Core/namespaces-algorithms.html#lookupNamespacePrefixAlgo
	 * @see https://dom.spec.whatwg.org/#dom-node-lookupprefix
	 * @see https://github.com/xmldom/xmldom/issues/322
	 * @prettierignore
	 */
	lookupPrefix: function (namespaceURI) {
		var el = this;
		while (el) {
			var map = el._nsMap;
			//console.dir(map)
			if (map) {
				for (var n in map) {
					if (hasOwn(map, n) && map[n] === namespaceURI) {
						return n;
					}
				}
			}
			el = el.nodeType == ATTRIBUTE_NODE ? el.ownerDocument : el.parentNode;
		}
		return null;
	},
	/**
	 * This function is used to look up the namespace URI associated with the given prefix,
	 * starting from this node.
	 *
	 * **This behavior is different from the in the specs**:
	 * - no node type specific handling
	 * - uses the internal attribute _nsMap for resolving namespaces that is updated when changing attributes
	 *
	 * @param {string | null} prefix
	 * The prefix for which to find the associated namespace URI.
	 * @returns {string | null}
	 * The associated namespace URI, if found; otherwise, null.
	 * @since DOM Level 3
	 * @see https://dom.spec.whatwg.org/#dom-node-lookupnamespaceuri
	 * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-lookupNamespaceURI
	 * @prettierignore
	 */
	lookupNamespaceURI: function (prefix) {
		var el = this;
		while (el) {
			var map = el._nsMap;
			//console.dir(map)
			if (map) {
				if (hasOwn(map, prefix)) {
					return map[prefix];
				}
			}
			el = el.nodeType == ATTRIBUTE_NODE ? el.ownerDocument : el.parentNode;
		}
		return null;
	},
	/**
	 * Determines whether the given namespace URI is the default namespace.
	 *
	 * The function works by looking up the prefix associated with the given namespace URI. If no
	 * prefix is found (i.e., the namespace URI is not registered in the namespace map of this
	 * node or any of its ancestors), it returns `true`, implying the namespace URI is considered
	 * the default.
	 *
	 * **This behavior is different from the in the specs**:
	 * - no node type specific handling
	 * - uses the internal attribute _nsMap for resolving namespaces that is updated when changing attributes
	 *
	 * @param {string | null} namespaceURI
	 * The namespace URI to be checked.
	 * @returns {boolean}
	 * Returns true if the given namespace URI is the default namespace, false otherwise.
	 * @since DOM Level 3
	 * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-isDefaultNamespace
	 * @see https://dom.spec.whatwg.org/#dom-node-isdefaultnamespace
	 * @prettierignore
	 */
	isDefaultNamespace: function (namespaceURI) {
		var prefix = this.lookupPrefix(namespaceURI);
		return prefix == null;
	},
	/**
	 * Compares the reference node with a node with regard to their position in the document and
	 * according to the document order.
	 *
	 * @param {Node} other
	 * The node to compare the reference node to.
	 * @returns {number}
	 * Returns how the node is positioned relatively to the reference node according to the
	 * bitmask. 0 if reference node and given node are the same.
	 * @since DOM Level 3
	 * @see https://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core.html#Node3-compare
	 * @see https://dom.spec.whatwg.org/#dom-node-comparedocumentposition
	 */
	compareDocumentPosition: function (other) {
		if (this === other) return 0;
		var node1 = other;
		var node2 = this;
		var attr1 = null;
		var attr2 = null;
		if (node1 instanceof Attr) {
			attr1 = node1;
			node1 = attr1.ownerElement;
		}
		if (node2 instanceof Attr) {
			attr2 = node2;
			node2 = attr2.ownerElement;
			if (attr1 && node1 && node2 === node1) {
				for (var i = 0, attr; (attr = node2.attributes[i]); i++) {
					if (attr === attr1)
						return DocumentPosition.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC + DocumentPosition.DOCUMENT_POSITION_PRECEDING;
					if (attr === attr2)
						return DocumentPosition.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC + DocumentPosition.DOCUMENT_POSITION_FOLLOWING;
				}
			}
		}
		if (!node1 || !node2 || node2.ownerDocument !== node1.ownerDocument) {
			return (
				DocumentPosition.DOCUMENT_POSITION_DISCONNECTED +
				DocumentPosition.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC +
				(docGUID(node2.ownerDocument) > docGUID(node1.ownerDocument)
					? DocumentPosition.DOCUMENT_POSITION_FOLLOWING
					: DocumentPosition.DOCUMENT_POSITION_PRECEDING)
			);
		}
		if (attr2 && node1 === node2) {
			return DocumentPosition.DOCUMENT_POSITION_CONTAINS + DocumentPosition.DOCUMENT_POSITION_PRECEDING;
		}
		if (attr1 && node1 === node2) {
			return DocumentPosition.DOCUMENT_POSITION_CONTAINED_BY + DocumentPosition.DOCUMENT_POSITION_FOLLOWING;
		}

		var chain1 = [];
		var ancestor1 = node1.parentNode;
		while (ancestor1) {
			if (!attr2 && ancestor1 === node2) {
				return DocumentPosition.DOCUMENT_POSITION_CONTAINED_BY + DocumentPosition.DOCUMENT_POSITION_FOLLOWING;
			}
			chain1.push(ancestor1);
			ancestor1 = ancestor1.parentNode;
		}
		chain1.reverse();

		var chain2 = [];
		var ancestor2 = node2.parentNode;
		while (ancestor2) {
			if (!attr1 && ancestor2 === node1) {
				return DocumentPosition.DOCUMENT_POSITION_CONTAINS + DocumentPosition.DOCUMENT_POSITION_PRECEDING;
			}
			chain2.push(ancestor2);
			ancestor2 = ancestor2.parentNode;
		}
		chain2.reverse();

		var ca = commonAncestor(chain1, chain2);
		for (var n in ca.childNodes) {
			var child = ca.childNodes[n];
			if (child === node2) return DocumentPosition.DOCUMENT_POSITION_FOLLOWING;
			if (child === node1) return DocumentPosition.DOCUMENT_POSITION_PRECEDING;
			if (chain2.indexOf(child) >= 0) return DocumentPosition.DOCUMENT_POSITION_FOLLOWING;
			if (chain1.indexOf(child) >= 0) return DocumentPosition.DOCUMENT_POSITION_PRECEDING;
		}
		return 0;
	},
};

/**
 * Encodes special XML characters to their corresponding entities.
 *
 * @param {string} c
 * The character to be encoded.
 * @returns {string}
 * The encoded character.
 * @private
 */
function _xmlEncoder(c) {
	return (
		(c == '<' && '&lt;') || (c == '>' && '&gt;') || (c == '&' && '&amp;') || (c == '"' && '&quot;') || '&#' + c.charCodeAt() + ';'
	);
}

copy(NodeType, Node);
copy(NodeType, Node.prototype);
copy(DocumentPosition, Node);
copy(DocumentPosition, Node.prototype);

/**
 * @param callback
 * Return true for continue,false for break.
 * @returns
 * boolean true: break visit;
 */
function _visitNode(node, callback) {
	if (callback(node)) {
		return true;
	}
	if ((node = node.firstChild)) {
		do {
			if (_visitNode(node, callback)) {
				return true;
			}
		} while ((node = node.nextSibling));
	}
}

/**
 * @typedef DocumentOptions
 * @property {string} [contentType=MIME_TYPE.XML_APPLICATION]
 */
/**
 * The Document interface describes the common properties and methods for any kind of document.
 *
 * It should usually be created using `new DOMImplementation().createDocument(...)`
 * or `new DOMImplementation().createHTMLDocument(...)`.
 *
 * The constructor is considered a private API and offers to initially set the `contentType`
 * property via it's options parameter.
 *
 * @class
 * @param {Symbol} symbol
 * @param {DocumentOptions} [options]
 * @augments Node
 * @private
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document
 * @see https://dom.spec.whatwg.org/#interface-document
 */
function Document(symbol, options) {
	checkSymbol(symbol);

	var opt = options || {};
	this.ownerDocument = this;
	/**
	 * The mime type of the document is determined at creation time and can not be modified.
	 *
	 * @type {string}
	 * @see https://dom.spec.whatwg.org/#concept-document-content-type
	 * @see {@link DOMImplementation}
	 * @see {@link MIME_TYPE}
	 * @readonly
	 */
	this.contentType = opt.contentType || MIME_TYPE.XML_APPLICATION;
	/**
	 * @type {'html' | 'xml'}
	 * @see https://dom.spec.whatwg.org/#concept-document-type
	 * @see {@link DOMImplementation}
	 * @readonly
	 */
	this.type = isHTMLMimeType(this.contentType) ? 'html' : 'xml';
}

/**
 * Updates the namespace mapping of an element when a new attribute is added.
 *
 * @param {Document} doc
 * The document that the element belongs to.
 * @param {Element} el
 * The element to which the attribute is being added.
 * @param {Attr} newAttr
 * The new attribute being added.
 * @private
 */
function _onAddAttribute(doc, el, newAttr) {
	doc && doc._inc++;
	var ns = newAttr.namespaceURI;
	if (ns === NAMESPACE.XMLNS) {
		//update namespace
		el._nsMap[newAttr.prefix ? newAttr.localName : ''] = newAttr.value;
	}
}

/**
 * Updates the namespace mapping of an element when an attribute is removed.
 *
 * @param {Document} doc
 * The document that the element belongs to.
 * @param {Element} el
 * The element from which the attribute is being removed.
 * @param {Attr} newAttr
 * The attribute being removed.
 * @param {boolean} remove
 * Indicates whether the attribute is to be removed.
 * @private
 */
function _onRemoveAttribute(doc, el, newAttr, remove) {
	doc && doc._inc++;
	var ns = newAttr.namespaceURI;
	if (ns === NAMESPACE.XMLNS) {
		//update namespace
		delete el._nsMap[newAttr.prefix ? newAttr.localName : ''];
	}
}

/**
 * Updates `parent.childNodes`, adjusting the indexed items and its `length`.
 * If `newChild` is provided and has no nextSibling, it will be appended.
 * Otherwise, it's assumed that an item has been removed or inserted,
 * and `parent.firstNode` and its `.nextSibling` to re-indexing all child nodes of `parent`.
 *
 * @param {Document} doc
 * The parent document of `el`.
 * @param {Node} parent
 * The parent node whose childNodes list needs to be updated.
 * @param {Node} [newChild]
 * The new child node to be appended. If not provided, the function assumes a node has been
 * removed.
 * @private
 */
function _onUpdateChild(doc, parent, newChild) {
	if (doc && doc._inc) {
		doc._inc++;
		var childNodes = parent.childNodes;
		// assumes nextSibling and previousSibling were already configured upfront
		if (newChild && !newChild.nextSibling) {
			// if an item has been appended, we only need to update the last index and the length
			childNodes[childNodes.length++] = newChild;
		} else {
			// otherwise we need to reindex all items,
			// which can take a while when processing nodes with a lot of children
			var child = parent.firstChild;
			var i = 0;
			while (child) {
				childNodes[i++] = child;
				child = child.nextSibling;
			}
			childNodes.length = i;
			delete childNodes[childNodes.length];
		}
	}
}

/**
 * Removes the connections between `parentNode` and `child`
 * and any existing `child.previousSibling` or `child.nextSibling`.
 *
 * @param {Node} parentNode
 * The parent node from which the child node is to be removed.
 * @param {Node} child
 * The child node to be removed from the parentNode.
 * @returns {Node}
 * Returns the child node that was removed.
 * @throws {DOMException}
 * With code:
 * - {@link DOMException.NOT_FOUND_ERR} If the parentNode is not the parent of the child node.
 * @private
 * @see https://github.com/xmldom/xmldom/issues/135
 * @see https://github.com/xmldom/xmldom/issues/145
 */
function _removeChild(parentNode, child) {
	if (parentNode !== child.parentNode) {
		throw new DOMException(DOMException.NOT_FOUND_ERR, "child's parent is not parent");
	}
	var oldPreviousSibling = child.previousSibling;
	var oldNextSibling = child.nextSibling;
	if (oldPreviousSibling) {
		oldPreviousSibling.nextSibling = oldNextSibling;
	} else {
		parentNode.firstChild = oldNextSibling;
	}
	if (oldNextSibling) {
		oldNextSibling.previousSibling = oldPreviousSibling;
	} else {
		parentNode.lastChild = oldPreviousSibling;
	}
	_onUpdateChild(parentNode.ownerDocument, parentNode);
	child.parentNode = null;
	child.previousSibling = null;
	child.nextSibling = null;
	return child;
}

/**
 * Returns `true` if `node` can be a parent for insertion.
 *
 * @param {Node} node
 * @returns {boolean}
 */
function hasValidParentNodeType(node) {
	return (
		node &&
		(node.nodeType === Node.DOCUMENT_NODE || node.nodeType === Node.DOCUMENT_FRAGMENT_NODE || node.nodeType === Node.ELEMENT_NODE)
	);
}

/**
 * Returns `true` if `node` can be inserted according to it's `nodeType`.
 *
 * @param {Node} node
 * @returns {boolean}
 */
function hasInsertableNodeType(node) {
	return (
		node &&
		(node.nodeType === Node.CDATA_SECTION_NODE ||
			node.nodeType === Node.COMMENT_NODE ||
			node.nodeType === Node.DOCUMENT_FRAGMENT_NODE ||
			node.nodeType === Node.DOCUMENT_TYPE_NODE ||
			node.nodeType === Node.ELEMENT_NODE ||
			node.nodeType === Node.PROCESSING_INSTRUCTION_NODE ||
			node.nodeType === Node.TEXT_NODE)
	);
}

/**
 * Returns true if `node` is a DOCTYPE node.
 *
 * @param {Node} node
 * @returns {boolean}
 */
function isDocTypeNode(node) {
	return node && node.nodeType === Node.DOCUMENT_TYPE_NODE;
}

/**
 * Returns true if the node is an element.
 *
 * @param {Node} node
 * @returns {boolean}
 */
function isElementNode(node) {
	return node && node.nodeType === Node.ELEMENT_NODE;
}
/**
 * Returns true if `node` is a text node.
 *
 * @param {Node} node
 * @returns {boolean}
 */
function isTextNode(node) {
	return node && node.nodeType === Node.TEXT_NODE;
}

/**
 * Check if en element node can be inserted before `child`, or at the end if child is falsy,
 * according to the presence and position of a doctype node on the same level.
 *
 * @param {Document} doc
 * The document node.
 * @param {Node} child
 * The node that would become the nextSibling if the element would be inserted.
 * @returns {boolean}
 * `true` if an element can be inserted before child.
 * @private
 */
function isElementInsertionPossible(doc, child) {
	var parentChildNodes = doc.childNodes || [];
	if (find(parentChildNodes, isElementNode) || isDocTypeNode(child)) {
		return false;
	}
	var docTypeNode = find(parentChildNodes, isDocTypeNode);
	return !(child && docTypeNode && parentChildNodes.indexOf(docTypeNode) > parentChildNodes.indexOf(child));
}

/**
 * Check if en element node can be inserted before `child`, or at the end if child is falsy,
 * according to the presence and position of a doctype node on the same level.
 *
 * @param {Node} doc
 * The document node.
 * @param {Node} child
 * The node that would become the nextSibling if the element would be inserted.
 * @returns {boolean}
 * `true` if an element can be inserted before child.
 * @private
 */
function isElementReplacementPossible(doc, child) {
	var parentChildNodes = doc.childNodes || [];

	function hasElementChildThatIsNotChild(node) {
		return isElementNode(node) && node !== child;
	}

	if (find(parentChildNodes, hasElementChildThatIsNotChild)) {
		return false;
	}
	var docTypeNode = find(parentChildNodes, isDocTypeNode);
	return !(child && docTypeNode && parentChildNodes.indexOf(docTypeNode) > parentChildNodes.indexOf(child));
}

/**
 * Asserts pre-insertion validity of a node into a parent before a child.
 * Throws errors for invalid node combinations that would result in an ill-formed DOM.
 *
 * @param {Node} parent
 * The parent node to insert `node` into.
 * @param {Node} node
 * The node to insert.
 * @param {Node | null} child
 * The node that should become the `nextSibling` of `node`. If null, no sibling is considered.
 * @throws {DOMException}
 * With code:
 * - {@link DOMException.HIERARCHY_REQUEST_ERR} If `parent` is not a Document,
 * DocumentFragment, or Element node.
 * - {@link DOMException.HIERARCHY_REQUEST_ERR} If `node` is a host-including inclusive
 * ancestor of `parent`. (Currently not implemented)
 * - {@link DOMException.NOT_FOUND_ERR} If `child` is non-null and its `parent` is not
 * `parent`.
 * - {@link DOMException.HIERARCHY_REQUEST_ERR} If `node` is not a DocumentFragment,
 * DocumentType, Element, or CharacterData node.
 * - {@link DOMException.HIERARCHY_REQUEST_ERR} If either `node` is a Text node and `parent` is
 * a document, or if `node` is a doctype and `parent` is not a document.
 * @private
 * @see https://dom.spec.whatwg.org/#concept-node-ensure-pre-insertion-validity
 * @see https://dom.spec.whatwg.org/#concept-node-replace
 */
function assertPreInsertionValidity1to5(parent, node, child) {
	// 1. If `parent` is not a Document, DocumentFragment, or Element node, then throw a "HierarchyRequestError" DOMException.
	if (!hasValidParentNodeType(parent)) {
		throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, 'Unexpected parent node type ' + parent.nodeType);
	}
	// 2. If `node` is a host-including inclusive ancestor of `parent`, then throw a "HierarchyRequestError" DOMException.
	// not implemented!
	// 3. If `child` is non-null and its parent is not `parent`, then throw a "NotFoundError" DOMException.
	if (child && child.parentNode !== parent) {
		throw new DOMException(DOMException.NOT_FOUND_ERR, 'child not in parent');
	}
	if (
		// 4. If `node` is not a DocumentFragment, DocumentType, Element, or CharacterData node, then throw a "HierarchyRequestError" DOMException.
		!hasInsertableNodeType(node) ||
		// 5. If either `node` is a Text node and `parent` is a document,
		// the sax parser currently adds top level text nodes, this will be fixed in 0.9.0
		// || (node.nodeType === Node.TEXT_NODE && parent.nodeType === Node.DOCUMENT_NODE)
		// or `node` is a doctype and `parent` is not a document, then throw a "HierarchyRequestError" DOMException.
		(isDocTypeNode(node) && parent.nodeType !== Node.DOCUMENT_NODE)
	) {
		throw new DOMException(
			DOMException.HIERARCHY_REQUEST_ERR,
			'Unexpected node type ' + node.nodeType + ' for parent node type ' + parent.nodeType
		);
	}
}

/**
 * Asserts pre-insertion validity of a node into a document before a child.
 * Throws errors for invalid node combinations that would result in an ill-formed DOM.
 *
 * @param {Document} parent
 * The parent node to insert `node` into.
 * @param {Node} node
 * The node to insert.
 * @param {Node | undefined} child
 * The node that should become the `nextSibling` of `node`. If undefined, no sibling is
 * considered.
 * @returns {Node}
 * @throws {DOMException}
 * With code:
 * - {@link DOMException.HIERARCHY_REQUEST_ERR} If `node` is a DocumentFragment with more than
 * one element child or has a Text node child.
 * - {@link DOMException.HIERARCHY_REQUEST_ERR} If `node` is a DocumentFragment with one
 * element child and either `parent` has an element child, `child` is a doctype, or `child` is
 * non-null and a doctype is following `child`.
 * - {@link DOMException.HIERARCHY_REQUEST_ERR} If `node` is an Element and `parent` has an
 * element child, `child` is a doctype, or `child` is non-null and a doctype is following
 * `child`.
 * - {@link DOMException.HIERARCHY_REQUEST_ERR} If `node` is a DocumentType and `parent` has a
 * doctype child, `child` is non-null and an element is preceding `child`, or `child` is null
 * and `parent` has an element child.
 * @private
 * @see https://dom.spec.whatwg.org/#concept-node-ensure-pre-insertion-validity
 * @see https://dom.spec.whatwg.org/#concept-node-replace
 */
function assertPreInsertionValidityInDocument(parent, node, child) {
	var parentChildNodes = parent.childNodes || [];
	var nodeChildNodes = node.childNodes || [];

	// DocumentFragment
	if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
		var nodeChildElements = nodeChildNodes.filter(isElementNode);
		// If node has more than one element child or has a Text node child.
		if (nodeChildElements.length > 1 || find(nodeChildNodes, isTextNode)) {
			throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, 'More than one element or text in fragment');
		}
		// Otherwise, if `node` has one element child and either `parent` has an element child,
		// `child` is a doctype, or `child` is non-null and a doctype is following `child`.
		if (nodeChildElements.length === 1 && !isElementInsertionPossible(parent, child)) {
			throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, 'Element in fragment can not be inserted before doctype');
		}
	}
	// Element
	if (isElementNode(node)) {
		// `parent` has an element child, `child` is a doctype,
		// or `child` is non-null and a doctype is following `child`.
		if (!isElementInsertionPossible(parent, child)) {
			throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, 'Only one element can be added and only after doctype');
		}
	}
	// DocumentType
	if (isDocTypeNode(node)) {
		// `parent` has a doctype child,
		if (find(parentChildNodes, isDocTypeNode)) {
			throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, 'Only one doctype is allowed');
		}
		var parentElementChild = find(parentChildNodes, isElementNode);
		// `child` is non-null and an element is preceding `child`,
		if (child && parentChildNodes.indexOf(parentElementChild) < parentChildNodes.indexOf(child)) {
			throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, 'Doctype can only be inserted before an element');
		}
		// or `child` is null and `parent` has an element child.
		if (!child && parentElementChild) {
			throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, 'Doctype can not be appended since element is present');
		}
	}
}

/**
 * @param {Document} parent
 * The parent node to insert `node` into.
 * @param {Node} node
 * The node to insert.
 * @param {Node | undefined} child
 * the node that should become the `nextSibling` of `node`
 * @returns {Node}
 * @throws {DOMException}
 * For several node combinations that would create a DOM that is not well-formed.
 * @throws {DOMException}
 * If `child` is provided but is not a child of `parent`.
 * @private
 * @see https://dom.spec.whatwg.org/#concept-node-ensure-pre-insertion-validity
 * @see https://dom.spec.whatwg.org/#concept-node-replace
 */
function assertPreReplacementValidityInDocument(parent, node, child) {
	var parentChildNodes = parent.childNodes || [];
	var nodeChildNodes = node.childNodes || [];

	// DocumentFragment
	if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
		var nodeChildElements = nodeChildNodes.filter(isElementNode);
		// If `node` has more than one element child or has a Text node child.
		if (nodeChildElements.length > 1 || find(nodeChildNodes, isTextNode)) {
			throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, 'More than one element or text in fragment');
		}
		// Otherwise, if `node` has one element child and either `parent` has an element child that is not `child` or a doctype is following `child`.
		if (nodeChildElements.length === 1 && !isElementReplacementPossible(parent, child)) {
			throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, 'Element in fragment can not be inserted before doctype');
		}
	}
	// Element
	if (isElementNode(node)) {
		// `parent` has an element child that is not `child` or a doctype is following `child`.
		if (!isElementReplacementPossible(parent, child)) {
			throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, 'Only one element can be added and only after doctype');
		}
	}
	// DocumentType
	if (isDocTypeNode(node)) {
		function hasDoctypeChildThatIsNotChild(node) {
			return isDocTypeNode(node) && node !== child;
		}

		// `parent` has a doctype child that is not `child`,
		if (find(parentChildNodes, hasDoctypeChildThatIsNotChild)) {
			throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, 'Only one doctype is allowed');
		}
		var parentElementChild = find(parentChildNodes, isElementNode);
		// or an element is preceding `child`.
		if (child && parentChildNodes.indexOf(parentElementChild) < parentChildNodes.indexOf(child)) {
			throw new DOMException(DOMException.HIERARCHY_REQUEST_ERR, 'Doctype can only be inserted before an element');
		}
	}
}

/**
 * Inserts a node into a parent node before a child node.
 *
 * @param {Node} parent
 * The parent node to insert the node into.
 * @param {Node} node
 * The node to insert into the parent.
 * @param {Node | null} child
 * The node that should become the next sibling of the node.
 * If null, the function inserts the node at the end of the children of the parent node.
 * @param {Function} [_inDocumentAssertion]
 * An optional function to check pre-insertion validity if parent is a document node.
 * Defaults to {@link assertPreInsertionValidityInDocument}
 * @returns {Node}
 * Returns the inserted node.
 * @throws {DOMException}
 * Throws a DOMException if inserting the node would result in a DOM tree that is not
 * well-formed. See {@link assertPreInsertionValidity1to5},
 * {@link assertPreInsertionValidityInDocument}.
 * @throws {DOMException}
 * Throws a DOMException if child is provided but is not a child of the parent. See
 * {@link Node.removeChild}
 * @private
 * @see https://dom.spec.whatwg.org/#concept-node-ensure-pre-insertion-validity
 */
function _insertBefore(parent, node, child, _inDocumentAssertion) {
	// To ensure pre-insertion validity of a node into a parent before a child, run these steps:
	assertPreInsertionValidity1to5(parent, node, child);

	// If parent is a document, and any of the statements below, switched on the interface node implements,
	// are true, then throw a "HierarchyRequestError" DOMException.
	if (parent.nodeType === Node.DOCUMENT_NODE) {
		(_inDocumentAssertion || assertPreInsertionValidityInDocument)(parent, node, child);
	}

	var cp = node.parentNode;
	if (cp) {
		cp.removeChild(node); //remove and update
	}
	if (node.nodeType === DOCUMENT_FRAGMENT_NODE) {
		var newFirst = node.firstChild;
		if (newFirst == null) {
			return node;
		}
		var newLast = node.lastChild;
	} else {
		newFirst = newLast = node;
	}
	var pre = child ? child.previousSibling : parent.lastChild;

	newFirst.previousSibling = pre;
	newLast.nextSibling = child;

	if (pre) {
		pre.nextSibling = newFirst;
	} else {
		parent.firstChild = newFirst;
	}
	if (child == null) {
		parent.lastChild = newLast;
	} else {
		child.previousSibling = newLast;
	}
	do {
		newFirst.parentNode = parent;
	} while (newFirst !== newLast && (newFirst = newFirst.nextSibling));
	_onUpdateChild(parent.ownerDocument || parent, parent, node);
	if (node.nodeType == DOCUMENT_FRAGMENT_NODE) {
		node.firstChild = node.lastChild = null;
	}

	return node;
}

Document.prototype = {
	/**
	 * The implementation that created this document.
	 *
	 * @type DOMImplementation
	 * @readonly
	 */
	implementation: null,
	nodeName: '#document',
	nodeType: DOCUMENT_NODE,
	/**
	 * The DocumentType node of the document.
	 *
	 * @type DocumentType
	 * @readonly
	 */
	doctype: null,
	documentElement: null,
	_inc: 1,

	insertBefore: function (newChild, refChild) {
		//raises
		if (newChild.nodeType === DOCUMENT_FRAGMENT_NODE) {
			var child = newChild.firstChild;
			while (child) {
				var next = child.nextSibling;
				this.insertBefore(child, refChild);
				child = next;
			}
			return newChild;
		}
		_insertBefore(this, newChild, refChild);
		newChild.ownerDocument = this;
		if (this.documentElement === null && newChild.nodeType === ELEMENT_NODE) {
			this.documentElement = newChild;
		}

		return newChild;
	},
	removeChild: function (oldChild) {
		var removed = _removeChild(this, oldChild);
		if (removed === this.documentElement) {
			this.documentElement = null;
		}
		return removed;
	},
	replaceChild: function (newChild, oldChild) {
		//raises
		_insertBefore(this, newChild, oldChild, assertPreReplacementValidityInDocument);
		newChild.ownerDocument = this;
		if (oldChild) {
			this.removeChild(oldChild);
		}
		if (isElementNode(newChild)) {
			this.documentElement = newChild;
		}
	},
	// Introduced in DOM Level 2:
	importNode: function (importedNode, deep) {
		return importNode(this, importedNode, deep);
	},
	// Introduced in DOM Level 2:
	getElementById: function (id) {
		var rtv = null;
		_visitNode(this.documentElement, function (node) {
			if (node.nodeType == ELEMENT_NODE) {
				if (node.getAttribute('id') == id) {
					rtv = node;
					return true;
				}
			}
		});
		return rtv;
	},

	/**
	 * Creates a new `Element` that is owned by this `Document`.
	 * In HTML Documents `localName` is the lower cased `tagName`,
	 * otherwise no transformation is being applied.
	 * When `contentType` implies the HTML namespace, it will be set as `namespaceURI`.
	 *
	 * __This implementation differs from the specification:__ - The provided name is not checked
	 * against the `Name` production,
	 * so no related error will be thrown.
	 * - There is no interface `HTMLElement`, it is always an `Element`.
	 * - There is no support for a second argument to indicate using custom elements.
	 *
	 * @param {string} tagName
	 * @returns {Element}
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
	 * @see https://dom.spec.whatwg.org/#dom-document-createelement
	 * @see https://dom.spec.whatwg.org/#concept-create-element
	 */
	createElement: function (tagName) {
		var node = new Element(PDC);
		node.ownerDocument = this;
		if (this.type === 'html') {
			tagName = tagName.toLowerCase();
		}
		if (hasDefaultHTMLNamespace(this.contentType)) {
			node.namespaceURI = NAMESPACE.HTML;
		}
		node.nodeName = tagName;
		node.tagName = tagName;
		node.localName = tagName;
		node.childNodes = new NodeList();
		var attrs = (node.attributes = new NamedNodeMap());
		attrs._ownerElement = node;
		return node;
	},
	/**
	 * @returns {DocumentFragment}
	 */
	createDocumentFragment: function () {
		var node = new DocumentFragment(PDC);
		node.ownerDocument = this;
		node.childNodes = new NodeList();
		return node;
	},
	/**
	 * @param {string} data
	 * @returns {Text}
	 */
	createTextNode: function (data) {
		var node = new Text(PDC);
		node.ownerDocument = this;
		node.childNodes = new NodeList();
		node.appendData(data);
		return node;
	},
	/**
	 * @param {string} data
	 * @returns {Comment}
	 */
	createComment: function (data) {
		var node = new Comment(PDC);
		node.ownerDocument = this;
		node.childNodes = new NodeList();
		node.appendData(data);
		return node;
	},
	/**
	 * @param {string} data
	 * @returns {CDATASection}
	 */
	createCDATASection: function (data) {
		var node = new CDATASection(PDC);
		node.ownerDocument = this;
		node.childNodes = new NodeList();
		node.appendData(data);
		return node;
	},
	/**
	 * @param {string} target
	 * @param {string} data
	 * @returns {ProcessingInstruction}
	 */
	createProcessingInstruction: function (target, data) {
		var node = new ProcessingInstruction(PDC);
		node.ownerDocument = this;
		node.childNodes = new NodeList();
		node.nodeName = node.target = target;
		node.nodeValue = node.data = data;
		return node;
	},
	/**
	 * Creates an `Attr` node that is owned by this document.
	 * In HTML Documents `localName` is the lower cased `name`,
	 * otherwise no transformation is being applied.
	 *
	 * __This implementation differs from the specification:__ - The provided name is not checked
	 * against the `Name` production,
	 * so no related error will be thrown.
	 *
	 * @param {string} name
	 * @returns {Attr}
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/createAttribute
	 * @see https://dom.spec.whatwg.org/#dom-document-createattribute
	 */
	createAttribute: function (name) {
		if (!g.QName_exact.test(name)) {
			throw new DOMException(DOMException.INVALID_CHARACTER_ERR, 'invalid character in name "' + name + '"');
		}
		if (this.type === 'html') {
			name = name.toLowerCase();
		}
		return this._createAttribute(name);
	},
	_createAttribute: function (name) {
		var node = new Attr(PDC);
		node.ownerDocument = this;
		node.childNodes = new NodeList();
		node.name = name;
		node.nodeName = name;
		node.localName = name;
		node.specified = true;
		return node;
	},
	/**
	 * Creates an EntityReference object.
	 * The current implementation does not fill the `childNodes` with those of the corresponding
	 * `Entity`
	 *
	 * @deprecated
	 * In DOM Level 4.
	 * @param {string} name
	 * The name of the entity to reference. No namespace well-formedness checks are performed.
	 * @returns {EntityReference}
	 * @throws {DOMException}
	 * With code `INVALID_CHARACTER_ERR` when `name` is not valid.
	 * @throws {DOMException}
	 * with code `NOT_SUPPORTED_ERR` when the document is of type `html`
	 * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-392B75AE
	 */
	createEntityReference: function (name) {
		if (!g.Name.test(name)) {
			throw new DOMException(DOMException.INVALID_CHARACTER_ERR, 'not a valid xml name "' + name + '"');
		}
		if (this.type === 'html') {
			throw new DOMException('document is an html document', DOMExceptionName.NotSupportedError);
		}

		var node = new EntityReference(PDC);
		node.ownerDocument = this;
		node.childNodes = new NodeList();
		node.nodeName = name;
		return node;
	},
	// Introduced in DOM Level 2:
	/**
	 * @param {string} namespaceURI
	 * @param {string} qualifiedName
	 * @returns {Element}
	 */
	createElementNS: function (namespaceURI, qualifiedName) {
		var validated = validateAndExtract(namespaceURI, qualifiedName);
		var node = new Element(PDC);
		var attrs = (node.attributes = new NamedNodeMap());
		node.childNodes = new NodeList();
		node.ownerDocument = this;
		node.nodeName = qualifiedName;
		node.tagName = qualifiedName;
		node.namespaceURI = validated[0];
		node.prefix = validated[1];
		node.localName = validated[2];
		attrs._ownerElement = node;
		return node;
	},
	// Introduced in DOM Level 2:
	/**
	 * @param {string} namespaceURI
	 * @param {string} qualifiedName
	 * @returns {Attr}
	 */
	createAttributeNS: function (namespaceURI, qualifiedName) {
		var validated = validateAndExtract(namespaceURI, qualifiedName);
		var node = new Attr(PDC);
		node.ownerDocument = this;
		node.childNodes = new NodeList();
		node.nodeName = qualifiedName;
		node.name = qualifiedName;
		node.specified = true;
		node.namespaceURI = validated[0];
		node.prefix = validated[1];
		node.localName = validated[2];
		return node;
	},
};
_extends(Document, Node);

function Element(symbol) {
	checkSymbol(symbol);

	this._nsMap = Object.create(null);
}
Element.prototype = {
	nodeType: ELEMENT_NODE,
	/**
	 * The attributes of this element.
	 *
	 * @type {NamedNodeMap | null}
	 */
	attributes: null,
	getQualifiedName: function () {
		return this.prefix ? this.prefix + ':' + this.localName : this.localName;
	},
	_isInHTMLDocumentAndNamespace: function () {
		return this.ownerDocument.type === 'html' && this.namespaceURI === NAMESPACE.HTML;
	},
	/**
	 * Implementaton of Level2 Core function hasAttributes.
	 *
	 * @returns {boolean}
	 * True if attribute list is not empty.
	 * @see https://www.w3.org/TR/DOM-Level-2-Core/#core-ID-NodeHasAttrs
	 */
	hasAttributes: function () {
		return !!(this.attributes && this.attributes.length);
	},
	hasAttribute: function (name) {
		return !!this.getAttributeNode(name);
	},
	/**
	 * Returns element’s first attribute whose qualified name is `name`, and `null`
	 * if there is no such attribute.
	 *
	 * @param {string} name
	 * @returns {string | null}
	 */
	getAttribute: function (name) {
		var attr = this.getAttributeNode(name);
		return attr ? attr.value : null;
	},
	getAttributeNode: function (name) {
		if (this._isInHTMLDocumentAndNamespace()) {
			name = name.toLowerCase();
		}
		return this.attributes.getNamedItem(name);
	},
	/**
	 * Sets the value of element’s first attribute whose qualified name is qualifiedName to value.
	 *
	 * @param {string} name
	 * @param {string} value
	 */
	setAttribute: function (name, value) {
		if (this._isInHTMLDocumentAndNamespace()) {
			name = name.toLowerCase();
		}
		var attr = this.getAttributeNode(name);
		if (attr) {
			attr.value = attr.nodeValue = '' + value;
		} else {
			attr = this.ownerDocument._createAttribute(name);
			attr.value = attr.nodeValue = '' + value;
			this.setAttributeNode(attr);
		}
	},
	removeAttribute: function (name) {
		var attr = this.getAttributeNode(name);
		attr && this.removeAttributeNode(attr);
	},
	setAttributeNode: function (newAttr) {
		return this.attributes.setNamedItem(newAttr);
	},
	setAttributeNodeNS: function (newAttr) {
		return this.attributes.setNamedItemNS(newAttr);
	},
	removeAttributeNode: function (oldAttr) {
		//console.log(this == oldAttr.ownerElement)
		return this.attributes.removeNamedItem(oldAttr.nodeName);
	},
	//get real attribute name,and remove it by removeAttributeNode
	removeAttributeNS: function (namespaceURI, localName) {
		var old = this.getAttributeNodeNS(namespaceURI, localName);
		old && this.removeAttributeNode(old);
	},

	hasAttributeNS: function (namespaceURI, localName) {
		return this.getAttributeNodeNS(namespaceURI, localName) != null;
	},
	/**
	 * Returns element’s attribute whose namespace is `namespaceURI` and local name is
	 * `localName`,
	 * or `null` if there is no such attribute.
	 *
	 * @param {string} namespaceURI
	 * @param {string} localName
	 * @returns {string | null}
	 */
	getAttributeNS: function (namespaceURI, localName) {
		var attr = this.getAttributeNodeNS(namespaceURI, localName);
		return attr ? attr.value : null;
	},
	/**
	 * Sets the value of element’s attribute whose namespace is `namespaceURI` and local name is
	 * `localName` to value.
	 *
	 * @param {string} namespaceURI
	 * @param {string} qualifiedName
	 * @param {string} value
	 * @see https://dom.spec.whatwg.org/#dom-element-setattributens
	 */
	setAttributeNS: function (namespaceURI, qualifiedName, value) {
		var validated = validateAndExtract(namespaceURI, qualifiedName);
		var localName = validated[2];
		var attr = this.getAttributeNodeNS(namespaceURI, localName);
		if (attr) {
			attr.value = attr.nodeValue = '' + value;
		} else {
			attr = this.ownerDocument.createAttributeNS(namespaceURI, qualifiedName);
			attr.value = attr.nodeValue = '' + value;
			this.setAttributeNode(attr);
		}
	},
	getAttributeNodeNS: function (namespaceURI, localName) {
		return this.attributes.getNamedItemNS(namespaceURI, localName);
	},

	/**
	 * Returns a LiveNodeList of all child elements which have **all** of the given class name(s).
	 *
	 * Returns an empty list if `classNames` is an empty string or only contains HTML white space
	 * characters.
	 *
	 * Warning: This returns a live LiveNodeList.
	 * Changes in the DOM will reflect in the array as the changes occur.
	 * If an element selected by this array no longer qualifies for the selector,
	 * it will automatically be removed. Be aware of this for iteration purposes.
	 *
	 * @param {string} classNames
	 * Is a string representing the class name(s) to match; multiple class names are separated by
	 * (ASCII-)whitespace.
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByClassName
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
	 * @see https://dom.spec.whatwg.org/#concept-getelementsbyclassname
	 */
	getElementsByClassName: function (classNames) {
		var classNamesSet = toOrderedSet(classNames);
		return new LiveNodeList(this, function (base) {
			var ls = [];
			if (classNamesSet.length > 0) {
				_visitNode(base, function (node) {
					if (node !== base && node.nodeType === ELEMENT_NODE) {
						var nodeClassNames = node.getAttribute('class');
						// can be null if the attribute does not exist
						if (nodeClassNames) {
							// before splitting and iterating just compare them for the most common case
							var matches = classNames === nodeClassNames;
							if (!matches) {
								var nodeClassNamesSet = toOrderedSet(nodeClassNames);
								matches = classNamesSet.every(arrayIncludes(nodeClassNamesSet));
							}
							if (matches) {
								ls.push(node);
							}
						}
					}
				});
			}
			return ls;
		});
	},

	/**
	 * Returns a LiveNodeList of elements with the given qualifiedName.
	 * Searching for all descendants can be done by passing `*` as `qualifiedName`.
	 *
	 * All descendants of the specified element are searched, but not the element itself.
	 * The returned list is live, which means it updates itself with the DOM tree automatically.
	 * Therefore, there is no need to call `Element.getElementsByTagName()`
	 * with the same element and arguments repeatedly if the DOM changes in between calls.
	 *
	 * When called on an HTML element in an HTML document,
	 * `getElementsByTagName` lower-cases the argument before searching for it.
	 * This is undesirable when trying to match camel-cased SVG elements (such as
	 * `<linearGradient>`) in an HTML document.
	 * Instead, use `Element.getElementsByTagNameNS()`,
	 * which preserves the capitalization of the tag name.
	 *
	 * `Element.getElementsByTagName` is similar to `Document.getElementsByTagName()`,
	 * except that it only searches for elements that are descendants of the specified element.
	 *
	 * @param {string} qualifiedName
	 * @returns {LiveNodeList}
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName
	 * @see https://dom.spec.whatwg.org/#concept-getelementsbytagname
	 */
	getElementsByTagName: function (qualifiedName) {
		var isHTMLDocument = (this.nodeType === DOCUMENT_NODE ? this : this.ownerDocument).type === 'html';
		var lowerQualifiedName = qualifiedName.toLowerCase();
		return new LiveNodeList(this, function (base) {
			var ls = [];
			_visitNode(base, function (node) {
				if (node === base || node.nodeType !== ELEMENT_NODE) {
					return;
				}
				if (qualifiedName === '*') {
					ls.push(node);
				} else {
					var nodeQualifiedName = node.getQualifiedName();
					var matchingQName = isHTMLDocument && node.namespaceURI === NAMESPACE.HTML ? lowerQualifiedName : qualifiedName;
					if (nodeQualifiedName === matchingQName) {
						ls.push(node);
					}
				}
			});
			return ls;
		});
	},
	getElementsByTagNameNS: function (namespaceURI, localName) {
		return new LiveNodeList(this, function (base) {
			var ls = [];
			_visitNode(base, function (node) {
				if (
					node !== base &&
					node.nodeType === ELEMENT_NODE &&
					(namespaceURI === '*' || node.namespaceURI === namespaceURI) &&
					(localName === '*' || node.localName == localName)
				) {
					ls.push(node);
				}
			});
			return ls;
		});
	},
};
Document.prototype.getElementsByClassName = Element.prototype.getElementsByClassName;
Document.prototype.getElementsByTagName = Element.prototype.getElementsByTagName;
Document.prototype.getElementsByTagNameNS = Element.prototype.getElementsByTagNameNS;

_extends(Element, Node);
function Attr(symbol) {
	checkSymbol(symbol);

	this.namespaceURI = null;
	this.prefix = null;
	this.ownerElement = null;
}
Attr.prototype.nodeType = ATTRIBUTE_NODE;
_extends(Attr, Node);

function CharacterData(symbol) {
	checkSymbol(symbol);
}
CharacterData.prototype = {
	data: '',
	substringData: function (offset, count) {
		return this.data.substring(offset, offset + count);
	},
	appendData: function (text) {
		text = this.data + text;
		this.nodeValue = this.data = text;
		this.length = text.length;
	},
	insertData: function (offset, text) {
		this.replaceData(offset, 0, text);
	},
	deleteData: function (offset, count) {
		this.replaceData(offset, count, '');
	},
	replaceData: function (offset, count, text) {
		var start = this.data.substring(0, offset);
		var end = this.data.substring(offset + count);
		text = start + text + end;
		this.nodeValue = this.data = text;
		this.length = text.length;
	},
};
_extends(CharacterData, Node);
function Text(symbol) {
	checkSymbol(symbol);
}
Text.prototype = {
	nodeName: '#text',
	nodeType: TEXT_NODE,
	splitText: function (offset) {
		var text = this.data;
		var newText = text.substring(offset);
		text = text.substring(0, offset);
		this.data = this.nodeValue = text;
		this.length = text.length;
		var newNode = this.ownerDocument.createTextNode(newText);
		if (this.parentNode) {
			this.parentNode.insertBefore(newNode, this.nextSibling);
		}
		return newNode;
	},
};
_extends(Text, CharacterData);
function Comment(symbol) {
	checkSymbol(symbol);
}
Comment.prototype = {
	nodeName: '#comment',
	nodeType: COMMENT_NODE,
};
_extends(Comment, CharacterData);

function CDATASection(symbol) {
	checkSymbol(symbol);
}
CDATASection.prototype = {
	nodeName: '#cdata-section',
	nodeType: CDATA_SECTION_NODE,
};
_extends(CDATASection, Text);

function DocumentType(symbol) {
	checkSymbol(symbol);
}
DocumentType.prototype.nodeType = DOCUMENT_TYPE_NODE;
_extends(DocumentType, Node);

function Notation(symbol) {
	checkSymbol(symbol);
}
Notation.prototype.nodeType = NOTATION_NODE;
_extends(Notation, Node);

function Entity(symbol) {
	checkSymbol(symbol);
}
Entity.prototype.nodeType = ENTITY_NODE;
_extends(Entity, Node);

function EntityReference(symbol) {
	checkSymbol(symbol);
}
EntityReference.prototype.nodeType = ENTITY_REFERENCE_NODE;
_extends(EntityReference, Node);

function DocumentFragment(symbol) {
	checkSymbol(symbol);
}
DocumentFragment.prototype.nodeName = '#document-fragment';
DocumentFragment.prototype.nodeType = DOCUMENT_FRAGMENT_NODE;
_extends(DocumentFragment, Node);

function ProcessingInstruction(symbol) {
	checkSymbol(symbol);
}
ProcessingInstruction.prototype.nodeType = PROCESSING_INSTRUCTION_NODE;
_extends(ProcessingInstruction, CharacterData);
function XMLSerializer() {}
XMLSerializer.prototype.serializeToString = function (node, nodeFilter) {
	return nodeSerializeToString.call(node, nodeFilter);
};
Node.prototype.toString = nodeSerializeToString;
function nodeSerializeToString(nodeFilter) {
	var buf = [];
	var refNode = (this.nodeType === DOCUMENT_NODE && this.documentElement) || this;
	var prefix = refNode.prefix;
	var uri = refNode.namespaceURI;

	if (uri && prefix == null) {
		var prefix = refNode.lookupPrefix(uri);
		if (prefix == null) {
			var visibleNamespaces = [
				{ namespace: uri, prefix: null },
				//{namespace:uri,prefix:''}
			];
		}
	}
	serializeToString(this, buf, nodeFilter, visibleNamespaces);
	return buf.join('');
}

function needNamespaceDefine(node, isHTML, visibleNamespaces) {
	var prefix = node.prefix || '';
	var uri = node.namespaceURI;
	// According to [Namespaces in XML 1.0](https://www.w3.org/TR/REC-xml-names/#ns-using) ,
	// and more specifically https://www.w3.org/TR/REC-xml-names/#nsc-NoPrefixUndecl :
	// > In a namespace declaration for a prefix [...], the attribute value MUST NOT be empty.
	// in a similar manner [Namespaces in XML 1.1](https://www.w3.org/TR/xml-names11/#ns-using)
	// and more specifically https://www.w3.org/TR/xml-names11/#nsc-NSDeclared :
	// > [...] Furthermore, the attribute value [...] must not be an empty string.
	// so serializing empty namespace value like xmlns:ds="" would produce an invalid XML document.
	if (!uri) {
		return false;
	}
	if ((prefix === 'xml' && uri === NAMESPACE.XML) || uri === NAMESPACE.XMLNS) {
		return false;
	}

	var i = visibleNamespaces.length;
	while (i--) {
		var ns = visibleNamespaces[i];
		// get namespace prefix
		if (ns.prefix === prefix) {
			return ns.namespace !== uri;
		}
	}
	return true;
}
/**
 * Literal whitespace other than space that appear in attribute values are serialized as
 * their entity references, so they will be preserved.
 * (In contrast to whitespace literals in the input which are normalized to spaces).
 *
 * Well-formed constraint: No < in Attribute Values:
 * > The replacement text of any entity referred to directly or indirectly
 * > in an attribute value must not contain a <.
 *
 * @see https://www.w3.org/TR/xml11/#CleanAttrVals
 * @see https://www.w3.org/TR/xml11/#NT-AttValue
 * @see https://www.w3.org/TR/xml11/#AVNormalize
 * @see https://w3c.github.io/DOM-Parsing/#serializing-an-element-s-attributes
 * @prettierignore
 */
function addSerializedAttribute(buf, qualifiedName, value) {
	buf.push(' ', qualifiedName, '="', value.replace(/[<>&"\t\n\r]/g, _xmlEncoder), '"');
}

function serializeToString(node, buf, nodeFilter, visibleNamespaces) {
	if (!visibleNamespaces) {
		visibleNamespaces = [];
	}
	var doc = node.nodeType === DOCUMENT_NODE ? node : node.ownerDocument;
	var isHTML = doc.type === 'html';

	if (nodeFilter) {
		node = nodeFilter(node);
		if (node) {
			if (typeof node == 'string') {
				buf.push(node);
				return;
			}
		} else {
			return;
		}
		//buf.sort.apply(attrs, attributeSorter);
	}

	switch (node.nodeType) {
		case ELEMENT_NODE:
			var attrs = node.attributes;
			var len = attrs.length;
			var child = node.firstChild;
			var nodeName = node.tagName;

			var prefixedNodeName = nodeName;
			if (!isHTML && !node.prefix && node.namespaceURI) {
				var defaultNS;
				// lookup current default ns from `xmlns` attribute
				for (var ai = 0; ai < attrs.length; ai++) {
					if (attrs.item(ai).name === 'xmlns') {
						defaultNS = attrs.item(ai).value;
						break;
					}
				}
				if (!defaultNS) {
					// lookup current default ns in visibleNamespaces
					for (var nsi = visibleNamespaces.length - 1; nsi >= 0; nsi--) {
						var namespace = visibleNamespaces[nsi];
						if (namespace.prefix === '' && namespace.namespace === node.namespaceURI) {
							defaultNS = namespace.namespace;
							break;
						}
					}
				}
				if (defaultNS !== node.namespaceURI) {
					for (var nsi = visibleNamespaces.length - 1; nsi >= 0; nsi--) {
						var namespace = visibleNamespaces[nsi];
						if (namespace.namespace === node.namespaceURI) {
							if (namespace.prefix) {
								prefixedNodeName = namespace.prefix + ':' + nodeName;
							}
							break;
						}
					}
				}
			}

			buf.push('<', prefixedNodeName);

			for (var i = 0; i < len; i++) {
				// add namespaces for attributes
				var attr = attrs.item(i);
				if (attr.prefix == 'xmlns') {
					visibleNamespaces.push({
						prefix: attr.localName,
						namespace: attr.value,
					});
				} else if (attr.nodeName == 'xmlns') {
					visibleNamespaces.push({ prefix: '', namespace: attr.value });
				}
			}

			for (var i = 0; i < len; i++) {
				var attr = attrs.item(i);
				if (needNamespaceDefine(attr, isHTML, visibleNamespaces)) {
					var prefix = attr.prefix || '';
					var uri = attr.namespaceURI;
					addSerializedAttribute(buf, prefix ? 'xmlns:' + prefix : 'xmlns', uri);
					visibleNamespaces.push({ prefix: prefix, namespace: uri });
				}
				serializeToString(attr, buf, nodeFilter, visibleNamespaces);
			}

			// add namespace for current node
			if (nodeName === prefixedNodeName && needNamespaceDefine(node, isHTML, visibleNamespaces)) {
				var prefix = node.prefix || '';
				var uri = node.namespaceURI;
				addSerializedAttribute(buf, prefix ? 'xmlns:' + prefix : 'xmlns', uri);
				visibleNamespaces.push({ prefix: prefix, namespace: uri });
			}
			// in XML elements can be closed when they have no children
			var canCloseTag = !child;
			if (canCloseTag && (isHTML || node.namespaceURI === NAMESPACE.HTML)) {
				// in HTML (doc or ns) only void elements can be closed right away
				canCloseTag = isHTMLVoidElement(nodeName);
			}
			if (canCloseTag) {
				buf.push('/>');
			} else {
				buf.push('>');
				//if is cdata child node
				if (isHTML && isHTMLRawTextElement(nodeName)) {
					while (child) {
						if (child.data) {
							buf.push(child.data);
						} else {
							serializeToString(child, buf, nodeFilter, visibleNamespaces.slice());
						}
						child = child.nextSibling;
					}
				} else {
					while (child) {
						serializeToString(child, buf, nodeFilter, visibleNamespaces.slice());
						child = child.nextSibling;
					}
				}
				buf.push('</', prefixedNodeName, '>');
			}
			// remove added visible namespaces
			//visibleNamespaces.length = startVisibleNamespaces;
			return;
		case DOCUMENT_NODE:
		case DOCUMENT_FRAGMENT_NODE:
			var child = node.firstChild;
			while (child) {
				serializeToString(child, buf, nodeFilter, visibleNamespaces.slice());
				child = child.nextSibling;
			}
			return;
		case ATTRIBUTE_NODE:
			return addSerializedAttribute(buf, node.name, node.value);
		case TEXT_NODE:
			/*
			 * The ampersand character (&) and the left angle bracket (<) must not appear in their literal form,
			 * except when used as markup delimiters, or within a comment, a processing instruction,
			 * or a CDATA section.
			 * If they are needed elsewhere, they must be escaped using either numeric character
			 * references or the strings `&amp;` and `&lt;` respectively.
			 * The right angle bracket (>) may be represented using the string " &gt; ",
			 * and must, for compatibility, be escaped using either `&gt;`,
			 * or a character reference when it appears in the string `]]>` in content,
			 * when that string is not marking the end of a CDATA section.
			 *
			 * In the content of elements, character data is any string of characters which does not
			 * contain the start-delimiter of any markup and does not include the CDATA-section-close
			 * delimiter, `]]>`.
			 *
			 * @see https://www.w3.org/TR/xml/#NT-CharData
			 * @see https://w3c.github.io/DOM-Parsing/#xml-serializing-a-text-node
			 */
			return buf.push(node.data.replace(/[<&>]/g, _xmlEncoder));
		case CDATA_SECTION_NODE:
			return buf.push(g.CDATA_START, node.data, g.CDATA_END);
		case COMMENT_NODE:
			return buf.push(g.COMMENT_START, node.data, g.COMMENT_END);
		case DOCUMENT_TYPE_NODE:
			var pubid = node.publicId;
			var sysid = node.systemId;
			buf.push(g.DOCTYPE_DECL_START, ' ', node.name);
			if (pubid) {
				buf.push(' ', g.PUBLIC, ' ', pubid);
				if (sysid && sysid !== '.') {
					buf.push(' ', sysid);
				}
			} else if (sysid && sysid !== '.') {
				buf.push(' ', g.SYSTEM, ' ', sysid);
			}
			if (node.internalSubset) {
				buf.push(' [', node.internalSubset, ']');
			}
			buf.push('>');
			return;
		case PROCESSING_INSTRUCTION_NODE:
			return buf.push('<?', node.target, ' ', node.data, '?>');
		case ENTITY_REFERENCE_NODE:
			return buf.push('&', node.nodeName, ';');
		//case ENTITY_NODE:
		//case NOTATION_NODE:
		default:
			buf.push('??', node.nodeName);
	}
}
function importNode(doc, node, deep) {
	var node2;
	switch (node.nodeType) {
		case ELEMENT_NODE:
			node2 = node.cloneNode(false);
			node2.ownerDocument = doc;
		//var attrs = node2.attributes;
		//var len = attrs.length;
		//for(var i=0;i<len;i++){
		//node2.setAttributeNodeNS(importNode(doc,attrs.item(i),deep));
		//}
		case DOCUMENT_FRAGMENT_NODE:
			break;
		case ATTRIBUTE_NODE:
			deep = true;
			break;
		//case ENTITY_REFERENCE_NODE:
		//case PROCESSING_INSTRUCTION_NODE:
		////case TEXT_NODE:
		//case CDATA_SECTION_NODE:
		//case COMMENT_NODE:
		//	deep = false;
		//	break;
		//case DOCUMENT_NODE:
		//case DOCUMENT_TYPE_NODE:
		//cannot be imported.
		//case ENTITY_NODE:
		//case NOTATION_NODE：
		//can not hit in level3
		//default:throw e;
	}
	if (!node2) {
		node2 = node.cloneNode(false); //false
	}
	node2.ownerDocument = doc;
	node2.parentNode = null;
	if (deep) {
		var child = node.firstChild;
		while (child) {
			node2.appendChild(importNode(doc, child, deep));
			child = child.nextSibling;
		}
	}
	return node2;
}

/**
 * Creates a copy of a node from an existing one.
 *
 * @param {Document} doc
 * The Document object representing the document that the new node will belong to.
 * @param {Node} node
 * The node to clone.
 * @param {boolean} deep
 * If true, the contents of the node are recursively copied.
 * If false, only the node itself (and its attributes, if it is an element) are copied.
 * @returns {Node}
 * Returns the newly created copy of the node.
 * @throws {DOMException}
 * May throw a DOMException if operations within setAttributeNode or appendChild (which are
 * potentially invoked in this function) do not meet their specific constraints.
 */
function cloneNode(doc, node, deep) {
	var node2 = new node.constructor(PDC);
	for (var n in node) {
		if (hasOwn(node, n)) {
			var v = node[n];
			if (typeof v != 'object') {
				if (v != node2[n]) {
					node2[n] = v;
				}
			}
		}
	}
	if (node.childNodes) {
		node2.childNodes = new NodeList();
	}
	node2.ownerDocument = doc;
	switch (node2.nodeType) {
		case ELEMENT_NODE:
			var attrs = node.attributes;
			var attrs2 = (node2.attributes = new NamedNodeMap());
			var len = attrs.length;
			attrs2._ownerElement = node2;
			for (var i = 0; i < len; i++) {
				node2.setAttributeNode(cloneNode(doc, attrs.item(i), true));
			}
			break;
		case ATTRIBUTE_NODE:
			deep = true;
	}
	if (deep) {
		var child = node.firstChild;
		while (child) {
			node2.appendChild(cloneNode(doc, child, deep));
			child = child.nextSibling;
		}
	}
	return node2;
}

function __set__(object, key, value) {
	object[key] = value;
}
//do dynamic
try {
	if (Object.defineProperty) {
		Object.defineProperty(LiveNodeList.prototype, 'length', {
			get: function () {
				_updateLiveList(this);
				return this.$$length;
			},
		});

		Object.defineProperty(Node.prototype, 'textContent', {
			get: function () {
				return getTextContent(this);
			},

			set: function (data) {
				switch (this.nodeType) {
					case ELEMENT_NODE:
					case DOCUMENT_FRAGMENT_NODE:
						while (this.firstChild) {
							this.removeChild(this.firstChild);
						}
						if (data || String(data)) {
							this.appendChild(this.ownerDocument.createTextNode(data));
						}
						break;

					default:
						this.data = data;
						this.value = data;
						this.nodeValue = data;
				}
			},
		});

		function getTextContent(node) {
			switch (node.nodeType) {
				case ELEMENT_NODE:
				case DOCUMENT_FRAGMENT_NODE:
					var buf = [];
					node = node.firstChild;
					while (node) {
						if (node.nodeType !== 7 && node.nodeType !== 8) {
							buf.push(getTextContent(node));
						}
						node = node.nextSibling;
					}
					return buf.join('');
				default:
					return node.nodeValue;
			}
		}

		__set__ = function (object, key, value) {
			//console.log(value)
			object['$$' + key] = value;
		};
	}
} catch (e) {
	//ie8
}

exports._updateLiveList = _updateLiveList;
exports.Attr = Attr;
exports.CDATASection = CDATASection;
exports.CharacterData = CharacterData;
exports.Comment = Comment;
exports.Document = Document;
exports.DocumentFragment = DocumentFragment;
exports.DocumentType = DocumentType;
exports.DOMImplementation = DOMImplementation;
exports.Element = Element;
exports.Entity = Entity;
exports.EntityReference = EntityReference;
exports.LiveNodeList = LiveNodeList;
exports.NamedNodeMap = NamedNodeMap;
exports.Node = Node;
exports.NodeList = NodeList;
exports.Notation = Notation;
exports.Text = Text;
exports.ProcessingInstruction = ProcessingInstruction;
exports.XMLSerializer = XMLSerializer;


/***/ }),

/***/ 802:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var conventions = __webpack_require__(870);
var g = __webpack_require__(731);
var errors = __webpack_require__(767);

var isHTMLEscapableRawTextElement = conventions.isHTMLEscapableRawTextElement;
var isHTMLMimeType = conventions.isHTMLMimeType;
var isHTMLRawTextElement = conventions.isHTMLRawTextElement;
var hasOwn = conventions.hasOwn;
var NAMESPACE = conventions.NAMESPACE;
var ParseError = errors.ParseError;
var DOMException = errors.DOMException;

//var handlers = 'resolveEntity,getExternalSubset,characters,endDocument,endElement,endPrefixMapping,ignorableWhitespace,processingInstruction,setDocumentLocator,skippedEntity,startDocument,startElement,startPrefixMapping,notationDecl,unparsedEntityDecl,error,fatalError,warning,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,comment,endCDATA,endDTD,endEntity,startCDATA,startDTD,startEntity'.split(',')

//S_TAG,	S_ATTR,	S_EQ,	S_ATTR_NOQUOT_VALUE
//S_ATTR_SPACE,	S_ATTR_END,	S_TAG_SPACE, S_TAG_CLOSE
var S_TAG = 0; //tag name offerring
var S_ATTR = 1; //attr name offerring
var S_ATTR_SPACE = 2; //attr name end and space offer
var S_EQ = 3; //=space?
var S_ATTR_NOQUOT_VALUE = 4; //attr value(no quot value only)
var S_ATTR_END = 5; //attr value end and no space(quot end)
var S_TAG_SPACE = 6; //(attr value end || tag end ) && (space offer)
var S_TAG_CLOSE = 7; //closed el<el />

function XMLReader() {}

XMLReader.prototype = {
	parse: function (source, defaultNSMap, entityMap) {
		var domBuilder = this.domBuilder;
		domBuilder.startDocument();
		_copy(defaultNSMap, (defaultNSMap = Object.create(null)));
		parse(source, defaultNSMap, entityMap, domBuilder, this.errorHandler);
		domBuilder.endDocument();
	},
};

/**
 * Detecting everything that might be a reference,
 * including those without ending `;`, since those are allowed in HTML.
 * The entityReplacer takes care of verifying and transforming each occurrence,
 * and reports to the errorHandler on those that are not OK,
 * depending on the context.
 */
var ENTITY_REG = /&#?\w+;?/g;

function parse(source, defaultNSMapCopy, entityMap, domBuilder, errorHandler) {
	var isHTML = isHTMLMimeType(domBuilder.mimeType);
	if (source.indexOf(g.UNICODE_REPLACEMENT_CHARACTER) >= 0) {
		errorHandler.warning('Unicode replacement character detected, source encoding issues?');
	}

	function fixedFromCharCode(code) {
		// String.prototype.fromCharCode does not supports
		// > 2 bytes unicode chars directly
		if (code > 0xffff) {
			code -= 0x10000;
			var surrogate1 = 0xd800 + (code >> 10),
				surrogate2 = 0xdc00 + (code & 0x3ff);

			return String.fromCharCode(surrogate1, surrogate2);
		} else {
			return String.fromCharCode(code);
		}
	}

	function entityReplacer(a) {
		var complete = a[a.length - 1] === ';' ? a : a + ';';
		if (!isHTML && complete !== a) {
			errorHandler.error('EntityRef: expecting ;');
			return a;
		}
		var match = g.Reference.exec(complete);
		if (!match || match[0].length !== complete.length) {
			errorHandler.error('entity not matching Reference production: ' + a);
			return a;
		}
		var k = complete.slice(1, -1);
		if (hasOwn(entityMap, k)) {
			return entityMap[k];
		} else if (k.charAt(0) === '#') {
			return fixedFromCharCode(parseInt(k.substring(1).replace('x', '0x')));
		} else {
			errorHandler.error('entity not found:' + a);
			return a;
		}
	}

	function appendText(end) {
		//has some bugs
		if (end > start) {
			var xt = source.substring(start, end).replace(ENTITY_REG, entityReplacer);
			locator && position(start);
			domBuilder.characters(xt, 0, end - start);
			start = end;
		}
	}

	var lineStart = 0;
	var lineEnd = 0;
	var linePattern = /\r\n?|\n|$/g;
	var locator = domBuilder.locator;

	function position(p, m) {
		while (p >= lineEnd && (m = linePattern.exec(source))) {
			lineStart = lineEnd;
			lineEnd = m.index + m[0].length;
			locator.lineNumber++;
		}
		locator.columnNumber = p - lineStart + 1;
	}

	var parseStack = [{ currentNSMap: defaultNSMapCopy }];
	var unclosedTags = [];
	var start = 0;
	while (true) {
		try {
			var tagStart = source.indexOf('<', start);
			if (tagStart < 0) {
				if (!isHTML && unclosedTags.length > 0) {
					return errorHandler.fatalError('unclosed xml tag(s): ' + unclosedTags.join(', '));
				}
				if (!source.substring(start).match(/^\s*$/)) {
					var doc = domBuilder.doc;
					var text = doc.createTextNode(source.substring(start));
					if (doc.documentElement) {
						return errorHandler.error('Extra content at the end of the document');
					}
					doc.appendChild(text);
					domBuilder.currentElement = text;
				}
				return;
			}
			if (tagStart > start) {
				var fromSource = source.substring(start, tagStart);
				if (!isHTML && unclosedTags.length === 0) {
					fromSource = fromSource.replace(new RegExp(g.S_OPT.source, 'g'), '');
					fromSource && errorHandler.error("Unexpected content outside root element: '" + fromSource + "'");
				}
				appendText(tagStart);
			}
			switch (source.charAt(tagStart + 1)) {
				case '/':
					var end = source.indexOf('>', tagStart + 2);
					var tagNameRaw = source.substring(tagStart + 2, end > 0 ? end : undefined);
					if (!tagNameRaw) {
						return errorHandler.fatalError('end tag name missing');
					}
					var tagNameMatch = end > 0 && g.reg('^', g.QName_group, g.S_OPT, '$').exec(tagNameRaw);
					if (!tagNameMatch) {
						return errorHandler.fatalError('end tag name contains invalid characters: "' + tagNameRaw + '"');
					}
					if (!domBuilder.currentElement && !domBuilder.doc.documentElement) {
						// not enough information to provide a helpful error message,
						// but parsing will throw since there is no root element
						return;
					}
					var currentTagName =
						unclosedTags[unclosedTags.length - 1] ||
						domBuilder.currentElement.tagName ||
						domBuilder.doc.documentElement.tagName ||
						'';
					if (currentTagName !== tagNameMatch[1]) {
						var tagNameLower = tagNameMatch[1].toLowerCase();
						if (!isHTML || currentTagName.toLowerCase() !== tagNameLower) {
							return errorHandler.fatalError('Opening and ending tag mismatch: "' + currentTagName + '" != "' + tagNameRaw + '"');
						}
					}
					var config = parseStack.pop();
					unclosedTags.pop();
					var localNSMap = config.localNSMap;
					domBuilder.endElement(config.uri, config.localName, currentTagName);
					if (localNSMap) {
						for (var prefix in localNSMap) {
							if (hasOwn(localNSMap, prefix)) {
								domBuilder.endPrefixMapping(prefix);
							}
						}
					}

					end++;
					break;
				// end element
				case '?': // <?...?>
					locator && position(tagStart);
					end = parseProcessingInstruction(source, tagStart, domBuilder, errorHandler);
					break;
				case '!': // <!doctype,<![CDATA,<!--
					locator && position(tagStart);
					end = parseDoctypeCommentOrCData(source, tagStart, domBuilder, errorHandler, isHTML);
					break;
				default:
					locator && position(tagStart);
					var el = new ElementAttributes();
					var currentNSMap = parseStack[parseStack.length - 1].currentNSMap;
					//elStartEnd
					var end = parseElementStartPart(source, tagStart, el, currentNSMap, entityReplacer, errorHandler, isHTML);
					var len = el.length;

					if (!el.closed) {
						if (isHTML && conventions.isHTMLVoidElement(el.tagName)) {
							el.closed = true;
						} else {
							unclosedTags.push(el.tagName);
						}
					}
					if (locator && len) {
						var locator2 = copyLocator(locator, {});
						//try{//attribute position fixed
						for (var i = 0; i < len; i++) {
							var a = el[i];
							position(a.offset);
							a.locator = copyLocator(locator, {});
						}
						domBuilder.locator = locator2;
						if (appendElement(el, domBuilder, currentNSMap)) {
							parseStack.push(el);
						}
						domBuilder.locator = locator;
					} else {
						if (appendElement(el, domBuilder, currentNSMap)) {
							parseStack.push(el);
						}
					}

					if (isHTML && !el.closed) {
						end = parseHtmlSpecialContent(source, end, el.tagName, entityReplacer, domBuilder);
					} else {
						end++;
					}
			}
		} catch (e) {
			if (e instanceof ParseError) {
				throw e;
			} else if (e instanceof DOMException) {
				throw new ParseError(e.name + ': ' + e.message, domBuilder.locator, e);
			}
			errorHandler.error('element parse error: ' + e);
			end = -1;
		}
		if (end > start) {
			start = end;
		} else {
			//Possible sax fallback here, risk of positional error
			appendText(Math.max(tagStart, start) + 1);
		}
	}
}

function copyLocator(f, t) {
	t.lineNumber = f.lineNumber;
	t.columnNumber = f.columnNumber;
	return t;
}

/**
 * @returns
 * end of the elementStartPart(end of elementEndPart for selfClosed el)
 * @see {@link #appendElement}
 */
function parseElementStartPart(source, start, el, currentNSMap, entityReplacer, errorHandler, isHTML) {
	/**
	 * @param {string} qname
	 * @param {string} value
	 * @param {number} startIndex
	 */
	function addAttribute(qname, value, startIndex) {
		if (hasOwn(el.attributeNames, qname)) {
			return errorHandler.fatalError('Attribute ' + qname + ' redefined');
		}
		if (!isHTML && value.indexOf('<') >= 0) {
			return errorHandler.fatalError("Unescaped '<' not allowed in attributes values");
		}
		el.addValue(
			qname,
			// @see https://www.w3.org/TR/xml/#AVNormalize
			// since the xmldom sax parser does not "interpret" DTD the following is not implemented:
			// - recursive replacement of (DTD) entity references
			// - trimming and collapsing multiple spaces into a single one for attributes that are not of type CDATA
			value.replace(/[\t\n\r]/g, ' ').replace(ENTITY_REG, entityReplacer),
			startIndex
		);
	}

	var attrName;
	var value;
	var p = ++start;
	var s = S_TAG; //status
	while (true) {
		var c = source.charAt(p);
		switch (c) {
			case '=':
				if (s === S_ATTR) {
					//attrName
					attrName = source.slice(start, p);
					s = S_EQ;
				} else if (s === S_ATTR_SPACE) {
					s = S_EQ;
				} else {
					//fatalError: equal must after attrName or space after attrName
					throw new Error('attribute equal must after attrName'); // No known test case
				}
				break;
			case "'":
			case '"':
				if (
					s === S_EQ ||
					s === S_ATTR //|| s == S_ATTR_SPACE
				) {
					//equal
					if (s === S_ATTR) {
						errorHandler.warning('attribute value must after "="');
						attrName = source.slice(start, p);
					}
					start = p + 1;
					p = source.indexOf(c, start);
					if (p > 0) {
						value = source.slice(start, p);
						addAttribute(attrName, value, start - 1);
						s = S_ATTR_END;
					} else {
						//fatalError: no end quot match
						throw new Error("attribute value no end '" + c + "' match");
					}
				} else if (s == S_ATTR_NOQUOT_VALUE) {
					value = source.slice(start, p);
					addAttribute(attrName, value, start);
					errorHandler.warning('attribute "' + attrName + '" missed start quot(' + c + ')!!');
					start = p + 1;
					s = S_ATTR_END;
				} else {
					//fatalError: no equal before
					throw new Error('attribute value must after "="'); // No known test case
				}
				break;
			case '/':
				switch (s) {
					case S_TAG:
						el.setTagName(source.slice(start, p));
					case S_ATTR_END:
					case S_TAG_SPACE:
					case S_TAG_CLOSE:
						s = S_TAG_CLOSE;
						el.closed = true;
					case S_ATTR_NOQUOT_VALUE:
					case S_ATTR:
						break;
					case S_ATTR_SPACE:
						el.closed = true;
						break;
					//case S_EQ:
					default:
						throw new Error("attribute invalid close char('/')"); // No known test case
				}
				break;
			case '': //end document
				errorHandler.error('unexpected end of input');
				if (s == S_TAG) {
					el.setTagName(source.slice(start, p));
				}
				return p;
			case '>':
				switch (s) {
					case S_TAG:
						el.setTagName(source.slice(start, p));
					case S_ATTR_END:
					case S_TAG_SPACE:
					case S_TAG_CLOSE:
						break; //normal
					case S_ATTR_NOQUOT_VALUE: //Compatible state
					case S_ATTR:
						value = source.slice(start, p);
						if (value.slice(-1) === '/') {
							el.closed = true;
							value = value.slice(0, -1);
						}
					case S_ATTR_SPACE:
						if (s === S_ATTR_SPACE) {
							value = attrName;
						}
						if (s == S_ATTR_NOQUOT_VALUE) {
							errorHandler.warning('attribute "' + value + '" missed quot(")!');
							addAttribute(attrName, value, start);
						} else {
							if (!isHTML) {
								errorHandler.warning('attribute "' + value + '" missed value!! "' + value + '" instead!!');
							}
							addAttribute(value, value, start);
						}
						break;
					case S_EQ:
						if (!isHTML) {
							return errorHandler.fatalError('AttValue: \' or " expected');
						}
				}
				return p;
			/*xml space '\x20' | #x9 | #xD | #xA; */
			case '\u0080':
				c = ' ';
			default:
				if (c <= ' ') {
					//space
					switch (s) {
						case S_TAG:
							el.setTagName(source.slice(start, p)); //tagName
							s = S_TAG_SPACE;
							break;
						case S_ATTR:
							attrName = source.slice(start, p);
							s = S_ATTR_SPACE;
							break;
						case S_ATTR_NOQUOT_VALUE:
							var value = source.slice(start, p);
							errorHandler.warning('attribute "' + value + '" missed quot(")!!');
							addAttribute(attrName, value, start);
						case S_ATTR_END:
							s = S_TAG_SPACE;
							break;
						//case S_TAG_SPACE:
						//case S_EQ:
						//case S_ATTR_SPACE:
						//	void();break;
						//case S_TAG_CLOSE:
						//ignore warning
					}
				} else {
					//not space
					//S_TAG,	S_ATTR,	S_EQ,	S_ATTR_NOQUOT_VALUE
					//S_ATTR_SPACE,	S_ATTR_END,	S_TAG_SPACE, S_TAG_CLOSE
					switch (s) {
						//case S_TAG:void();break;
						//case S_ATTR:void();break;
						//case S_ATTR_NOQUOT_VALUE:void();break;
						case S_ATTR_SPACE:
							if (!isHTML) {
								errorHandler.warning('attribute "' + attrName + '" missed value!! "' + attrName + '" instead2!!');
							}
							addAttribute(attrName, attrName, start);
							start = p;
							s = S_ATTR;
							break;
						case S_ATTR_END:
							errorHandler.warning('attribute space is required"' + attrName + '"!!');
						case S_TAG_SPACE:
							s = S_ATTR;
							start = p;
							break;
						case S_EQ:
							s = S_ATTR_NOQUOT_VALUE;
							start = p;
							break;
						case S_TAG_CLOSE:
							throw new Error("elements closed character '/' and '>' must be connected to");
					}
				}
		} //end outer switch
		p++;
	}
}

/**
 * @returns
 * `true` if a new namespace has been defined.
 */
function appendElement(el, domBuilder, currentNSMap) {
	var tagName = el.tagName;
	var localNSMap = null;
	var i = el.length;
	while (i--) {
		var a = el[i];
		var qName = a.qName;
		var value = a.value;
		var nsp = qName.indexOf(':');
		if (nsp > 0) {
			var prefix = (a.prefix = qName.slice(0, nsp));
			var localName = qName.slice(nsp + 1);
			var nsPrefix = prefix === 'xmlns' && localName;
		} else {
			localName = qName;
			prefix = null;
			nsPrefix = qName === 'xmlns' && '';
		}
		//can not set prefix,because prefix !== ''
		a.localName = localName;
		//prefix == null for no ns prefix attribute
		if (nsPrefix !== false) {
			//hack!!
			if (localNSMap == null) {
				localNSMap = Object.create(null);
				_copy(currentNSMap, (currentNSMap = Object.create(null)));
			}
			currentNSMap[nsPrefix] = localNSMap[nsPrefix] = value;
			a.uri = NAMESPACE.XMLNS;
			domBuilder.startPrefixMapping(nsPrefix, value);
		}
	}
	var i = el.length;
	while (i--) {
		a = el[i];
		if (a.prefix) {
			//no prefix attribute has no namespace
			if (a.prefix === 'xml') {
				a.uri = NAMESPACE.XML;
			}
			if (a.prefix !== 'xmlns') {
				a.uri = currentNSMap[a.prefix];
			}
		}
	}
	var nsp = tagName.indexOf(':');
	if (nsp > 0) {
		prefix = el.prefix = tagName.slice(0, nsp);
		localName = el.localName = tagName.slice(nsp + 1);
	} else {
		prefix = null; //important!!
		localName = el.localName = tagName;
	}
	//no prefix element has default namespace
	var ns = (el.uri = currentNSMap[prefix || '']);
	domBuilder.startElement(ns, localName, tagName, el);
	//endPrefixMapping and startPrefixMapping have not any help for dom builder
	//localNSMap = null
	if (el.closed) {
		domBuilder.endElement(ns, localName, tagName);
		if (localNSMap) {
			for (prefix in localNSMap) {
				if (hasOwn(localNSMap, prefix)) {
					domBuilder.endPrefixMapping(prefix);
				}
			}
		}
	} else {
		el.currentNSMap = currentNSMap;
		el.localNSMap = localNSMap;
		//parseStack.push(el);
		return true;
	}
}

function parseHtmlSpecialContent(source, elStartEnd, tagName, entityReplacer, domBuilder) {
	// https://html.spec.whatwg.org/#raw-text-elements
	// https://html.spec.whatwg.org/#escapable-raw-text-elements
	// https://html.spec.whatwg.org/#cdata-rcdata-restrictions:raw-text-elements
	// TODO: https://html.spec.whatwg.org/#cdata-rcdata-restrictions
	var isEscapableRaw = isHTMLEscapableRawTextElement(tagName);
	if (isEscapableRaw || isHTMLRawTextElement(tagName)) {
		var elEndStart = source.indexOf('</' + tagName + '>', elStartEnd);
		var text = source.substring(elStartEnd + 1, elEndStart);

		if (isEscapableRaw) {
			text = text.replace(ENTITY_REG, entityReplacer);
		}
		domBuilder.characters(text, 0, text.length);
		return elEndStart;
	}
	return elStartEnd + 1;
}

function _copy(source, target) {
	for (var n in source) {
		if (hasOwn(source, n)) {
			target[n] = source[n];
		}
	}
}

/**
 * @typedef ParseUtils
 * @property {function(relativeIndex: number?): string | undefined} char
 * Provides look ahead access to a singe character relative to the current index.
 * @property {function(): number} getIndex
 * Provides read-only access to the current index.
 * @property {function(reg: RegExp): string | null} getMatch
 * Applies the provided regular expression enforcing that it starts at the current index and
 * returns the complete matching string,
 * and moves the current index by the length of the matching string.
 * @property {function(): string} getSource
 * Provides read-only access to the complete source.
 * @property {function(places: number?): void} skip
 * moves the current index by places (defaults to 1)
 * @property {function(): number} skipBlanks
 * Moves the current index by the amount of white space that directly follows the current index
 * and returns the amount of whitespace chars skipped (0..n),
 * or -1 if the end of the source was reached.
 * @property {function(): string} substringFromIndex
 * creates a substring from the current index to the end of `source`
 * @property {function(compareWith: string): boolean} substringStartsWith
 * Checks if `source` contains `compareWith`, starting from the current index.
 * @property {function(compareWith: string): boolean} substringStartsWithCaseInsensitive
 * Checks if `source` contains `compareWith`, starting from the current index,
 * comparing the upper case of both sides.
 * @see {@link parseUtils}
 */

/**
 * A temporary scope for parsing and look ahead operations in `source`,
 * starting from index `start`.
 *
 * Some operations move the current index by a number of positions,
 * after which `getIndex` returns the new index.
 *
 * @param {string} source
 * @param {number} start
 * @returns {ParseUtils}
 */
function parseUtils(source, start) {
	var index = start;

	function char(n) {
		n = n || 0;
		return source.charAt(index + n);
	}

	function skip(n) {
		n = n || 1;
		index += n;
	}

	function skipBlanks() {
		var blanks = 0;
		while (index < source.length) {
			var c = char();
			if (c !== ' ' && c !== '\n' && c !== '\t' && c !== '\r') {
				return blanks;
			}
			blanks++;
			skip();
		}
		return -1;
	}
	function substringFromIndex() {
		return source.substring(index);
	}
	function substringStartsWith(text) {
		return source.substring(index, index + text.length) === text;
	}
	function substringStartsWithCaseInsensitive(text) {
		return source.substring(index, index + text.length).toUpperCase() === text.toUpperCase();
	}

	function getMatch(args) {
		var expr = g.reg('^', args);
		var match = expr.exec(substringFromIndex());
		if (match) {
			skip(match[0].length);
			return match[0];
		}
		return null;
	}
	return {
		char: char,
		getIndex: function () {
			return index;
		},
		getMatch: getMatch,
		getSource: function () {
			return source;
		},
		skip: skip,
		skipBlanks: skipBlanks,
		substringFromIndex: substringFromIndex,
		substringStartsWith: substringStartsWith,
		substringStartsWithCaseInsensitive: substringStartsWithCaseInsensitive,
	};
}

/**
 * @param {ParseUtils} p
 * @param {DOMHandler} errorHandler
 * @returns {string}
 */
function parseDoctypeInternalSubset(p, errorHandler) {
	/**
	 * @param {ParseUtils} p
	 * @param {DOMHandler} errorHandler
	 * @returns {string}
	 */
	function parsePI(p, errorHandler) {
		var match = g.PI.exec(p.substringFromIndex());
		if (!match) {
			return errorHandler.fatalError('processing instruction is not well-formed at position ' + p.getIndex());
		}
		if (match[1].toLowerCase() === 'xml') {
			return errorHandler.fatalError(
				'xml declaration is only allowed at the start of the document, but found at position ' + p.getIndex()
			);
		}
		p.skip(match[0].length);
		return match[0];
	}
	// Parse internal subset
	var source = p.getSource();
	if (p.char() === '[') {
		p.skip(1);
		var intSubsetStart = p.getIndex();
		while (p.getIndex() < source.length) {
			p.skipBlanks();
			if (p.char() === ']') {
				var internalSubset = source.substring(intSubsetStart, p.getIndex());
				p.skip(1);
				return internalSubset;
			}
			var current = null;
			// Only in external subset
			// if (char() === '<' && char(1) === '!' && char(2) === '[') {
			// 	parseConditionalSections(p, errorHandler);
			// } else
			if (p.char() === '<' && p.char(1) === '!') {
				switch (p.char(2)) {
					case 'E': // ELEMENT | ENTITY
						if (p.char(3) === 'L') {
							current = p.getMatch(g.elementdecl);
						} else if (p.char(3) === 'N') {
							current = p.getMatch(g.EntityDecl);
						}
						break;
					case 'A': // ATTRIBUTE
						current = p.getMatch(g.AttlistDecl);
						break;
					case 'N': // NOTATION
						current = p.getMatch(g.NotationDecl);
						break;
					case '-': // COMMENT
						current = p.getMatch(g.Comment);
						break;
				}
			} else if (p.char() === '<' && p.char(1) === '?') {
				current = parsePI(p, errorHandler);
			} else if (p.char() === '%') {
				current = p.getMatch(g.PEReference);
			} else {
				return errorHandler.fatalError('Error detected in Markup declaration');
			}
			if (!current) {
				return errorHandler.fatalError('Error in internal subset at position ' + p.getIndex());
			}
		}
		return errorHandler.fatalError('doctype internal subset is not well-formed, missing ]');
	}
}

/**
 * Called when the parser encounters an element starting with '<!'.
 *
 * @param {string} source
 * The xml.
 * @param {number} start
 * the start index of the '<!'
 * @param {DOMHandler} domBuilder
 * @param {DOMHandler} errorHandler
 * @param {boolean} isHTML
 * @returns {number | never}
 * The end index of the element.
 * @throws {ParseError}
 * In case the element is not well-formed.
 */
function parseDoctypeCommentOrCData(source, start, domBuilder, errorHandler, isHTML) {
	var p = parseUtils(source, start);

	switch (isHTML ? p.char(2).toUpperCase() : p.char(2)) {
		case '-':
			// should be a comment
			var comment = p.getMatch(g.Comment);
			if (comment) {
				domBuilder.comment(comment, g.COMMENT_START.length, comment.length - g.COMMENT_START.length - g.COMMENT_END.length);
				return p.getIndex();
			} else {
				return errorHandler.fatalError('comment is not well-formed at position ' + p.getIndex());
			}
		case '[':
			// should be CDATA
			var cdata = p.getMatch(g.CDSect);
			if (cdata) {
				if (!isHTML && !domBuilder.currentElement) {
					return errorHandler.fatalError('CDATA outside of element');
				}
				domBuilder.startCDATA();
				domBuilder.characters(cdata, g.CDATA_START.length, cdata.length - g.CDATA_START.length - g.CDATA_END.length);
				domBuilder.endCDATA();
				return p.getIndex();
			} else {
				return errorHandler.fatalError('Invalid CDATA starting at position ' + start);
			}
		case 'D': {
			// should be DOCTYPE
			if (domBuilder.doc && domBuilder.doc.documentElement) {
				return errorHandler.fatalError('Doctype not allowed inside or after documentElement at position ' + p.getIndex());
			}
			if (isHTML ? !p.substringStartsWithCaseInsensitive(g.DOCTYPE_DECL_START) : !p.substringStartsWith(g.DOCTYPE_DECL_START)) {
				return errorHandler.fatalError('Expected ' + g.DOCTYPE_DECL_START + ' at position ' + p.getIndex());
			}
			p.skip(g.DOCTYPE_DECL_START.length);
			if (p.skipBlanks() < 1) {
				return errorHandler.fatalError('Expected whitespace after ' + g.DOCTYPE_DECL_START + ' at position ' + p.getIndex());
			}

			var doctype = {
				name: undefined,
				publicId: undefined,
				systemId: undefined,
				internalSubset: undefined,
			};
			// Parse the DOCTYPE name
			doctype.name = p.getMatch(g.Name);
			if (!doctype.name)
				return errorHandler.fatalError('doctype name missing or contains unexpected characters at position ' + p.getIndex());

			if (isHTML && doctype.name.toLowerCase() !== 'html') {
				errorHandler.warning('Unexpected DOCTYPE in HTML document at position ' + p.getIndex());
			}
			p.skipBlanks();

			// Check for ExternalID
			if (p.substringStartsWith(g.PUBLIC) || p.substringStartsWith(g.SYSTEM)) {
				var match = g.ExternalID_match.exec(p.substringFromIndex());
				if (!match) {
					return errorHandler.fatalError('doctype external id is not well-formed at position ' + p.getIndex());
				}
				if (match.groups.SystemLiteralOnly !== undefined) {
					doctype.systemId = match.groups.SystemLiteralOnly;
				} else {
					doctype.systemId = match.groups.SystemLiteral;
					doctype.publicId = match.groups.PubidLiteral;
				}
				p.skip(match[0].length);
			} else if (isHTML && p.substringStartsWithCaseInsensitive(g.SYSTEM)) {
				// https://html.spec.whatwg.org/multipage/syntax.html#doctype-legacy-string
				p.skip(g.SYSTEM.length);
				if (p.skipBlanks() < 1) {
					return errorHandler.fatalError('Expected whitespace after ' + g.SYSTEM + ' at position ' + p.getIndex());
				}
				doctype.systemId = p.getMatch(g.ABOUT_LEGACY_COMPAT_SystemLiteral);
				if (!doctype.systemId) {
					return errorHandler.fatalError(
						'Expected ' + g.ABOUT_LEGACY_COMPAT + ' in single or double quotes after ' + g.SYSTEM + ' at position ' + p.getIndex()
					);
				}
			}
			if (isHTML && doctype.systemId && !g.ABOUT_LEGACY_COMPAT_SystemLiteral.test(doctype.systemId)) {
				errorHandler.warning('Unexpected doctype.systemId in HTML document at position ' + p.getIndex());
			}
			if (!isHTML) {
				p.skipBlanks();
				doctype.internalSubset = parseDoctypeInternalSubset(p, errorHandler);
			}
			p.skipBlanks();
			if (p.char() !== '>') {
				return errorHandler.fatalError('doctype not terminated with > at position ' + p.getIndex());
			}
			p.skip(1);
			domBuilder.startDTD(doctype.name, doctype.publicId, doctype.systemId, doctype.internalSubset);
			domBuilder.endDTD();
			return p.getIndex();
		}
		default:
			return errorHandler.fatalError('Not well-formed XML starting with "<!" at position ' + start);
	}
}

function parseProcessingInstruction(source, start, domBuilder, errorHandler) {
	var match = source.substring(start).match(g.PI);
	if (!match) {
		return errorHandler.fatalError('Invalid processing instruction starting at position ' + start);
	}
	if (match[1].toLowerCase() === 'xml') {
		if (start > 0) {
			return errorHandler.fatalError(
				'processing instruction at position ' + start + ' is an xml declaration which is only at the start of the document'
			);
		}
		if (!g.XMLDecl.test(source.substring(start))) {
			return errorHandler.fatalError('xml declaration is not well-formed');
		}
	}
	domBuilder.processingInstruction(match[1], match[2]);
	return start + match[0].length;
}

function ElementAttributes() {
	this.attributeNames = Object.create(null);
}

ElementAttributes.prototype = {
	setTagName: function (tagName) {
		if (!g.QName_exact.test(tagName)) {
			throw new Error('invalid tagName:' + tagName);
		}
		this.tagName = tagName;
	},
	addValue: function (qName, value, offset) {
		if (!g.QName_exact.test(qName)) {
			throw new Error('invalid attribute:' + qName);
		}
		this.attributeNames[qName] = this.length;
		this[this.length++] = { qName: qName, value: value, offset: offset };
	},
	length: 0,
	getLocalName: function (i) {
		return this[i].localName;
	},
	getLocator: function (i) {
		return this[i].locator;
	},
	getQName: function (i) {
		return this[i].qName;
	},
	getURI: function (i) {
		return this[i].uri;
	},
	getValue: function (i) {
		return this[i].value;
	},
	//	,getIndex:function(uri, localName)){
	//		if(localName){
	//
	//		}else{
	//			var qName = uri
	//		}
	//	},
	//	getValue:function(){return this.getValue(this.getIndex.apply(this,arguments))},
	//	getType:function(uri,localName){}
	//	getType:function(i){},
};

exports.XMLReader = XMLReader;
exports.parseUtils = parseUtils;
exports.parseDoctypeCommentOrCData = parseDoctypeCommentOrCData;


/***/ }),

/***/ 870:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


/**
 * Ponyfill for `Array.prototype.find` which is only available in ES6 runtimes.
 *
 * Works with anything that has a `length` property and index access properties,
 * including NodeList.
 *
 * @param {T[] | { length: number; [number]: T }} list
 * @param {function (item: T, index: number, list:T[]):boolean} predicate
 * @param {Partial<Pick<ArrayConstructor['prototype'], 'find'>>?} ac
 * Allows injecting a custom implementation in tests (`Array.prototype` by default).
 * @returns {T | undefined}
 * @template {unknown} T
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
 * @see https://tc39.es/ecma262/multipage/indexed-collections.html#sec-array.prototype.find
 */
function find(list, predicate, ac) {
	if (ac === undefined) {
		ac = Array.prototype;
	}
	if (list && typeof ac.find === 'function') {
		return ac.find.call(list, predicate);
	}
	for (var i = 0; i < list.length; i++) {
		if (hasOwn(list, i)) {
			var item = list[i];
			if (predicate.call(undefined, item, i, list)) {
				return item;
			}
		}
	}
}

/**
 * "Shallow freezes" an object to render it immutable.
 * Uses `Object.freeze` if available,
 * otherwise the immutability is only in the type.
 *
 * Is used to create "enum like" objects.
 *
 * If `Object.getOwnPropertyDescriptors` is available,
 * a new object with all properties of object but without any prototype is created and returned
 * after freezing it.
 *
 * @param {T} object
 * The object to freeze.
 * @param {Pick<ObjectConstructor, 'create' | 'freeze' | 'getOwnPropertyDescriptors'>} [oc=Object]
 * `Object` by default,
 * allows to inject custom object constructor for tests.
 * @returns {Readonly<T>}
 * @template {Object} T
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
 * @prettierignore
 */
function freeze(object, oc) {
	if (oc === undefined) {
		oc = Object;
	}
	if (oc && typeof oc.getOwnPropertyDescriptors === 'function') {
		object = oc.create(null, oc.getOwnPropertyDescriptors(object));
	}
	return oc && typeof oc.freeze === 'function' ? oc.freeze(object) : object;
}

/**
 * Implementation for `Object.hasOwn` but ES5 compatible.
 *
 * @param {any} object
 * @param {string | number} key
 * @returns {boolean}
 */
function hasOwn(object, key) {
	return Object.prototype.hasOwnProperty.call(object, key);
}

/**
 * Since xmldom can not rely on `Object.assign`,
 * it uses/provides a simplified version that is sufficient for its needs.
 *
 * @param {Object} target
 * @param {Object | null | undefined} source
 * @returns {Object}
 * The target with the merged/overridden properties.
 * @throws {TypeError}
 * If target is not an object.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 * @see https://tc39.es/ecma262/multipage/fundamental-objects.html#sec-object.assign
 */
function assign(target, source) {
	if (target === null || typeof target !== 'object') {
		throw new TypeError('target is not an object');
	}
	for (var key in source) {
		if (hasOwn(source, key)) {
			target[key] = source[key];
		}
	}
	return target;
}

/**
 * A number of attributes are boolean attributes.
 * The presence of a boolean attribute on an element represents the `true` value,
 * and the absence of the attribute represents the `false` value.
 *
 * If the attribute is present, its value must either be the empty string, or a value that is
 * an ASCII case-insensitive match for the attribute's canonical name,
 * with no leading or trailing whitespace.
 *
 * Note: The values `"true"` and `"false"` are not allowed on boolean attributes.
 * To represent a `false` value, the attribute has to be omitted altogether.
 *
 * @see https://html.spec.whatwg.org/#boolean-attributes
 * @see https://html.spec.whatwg.org/#attributes-3
 */
var HTML_BOOLEAN_ATTRIBUTES = freeze({
	allowfullscreen: true,
	async: true,
	autofocus: true,
	autoplay: true,
	checked: true,
	controls: true,
	default: true,
	defer: true,
	disabled: true,
	formnovalidate: true,
	hidden: true,
	ismap: true,
	itemscope: true,
	loop: true,
	multiple: true,
	muted: true,
	nomodule: true,
	novalidate: true,
	open: true,
	playsinline: true,
	readonly: true,
	required: true,
	reversed: true,
	selected: true,
});

/**
 * Check if `name` is matching one of the HTML boolean attribute names.
 * This method doesn't check if such attributes are allowed in the context of the current
 * document/parsing.
 *
 * @param {string} name
 * @returns {boolean}
 * @see {@link HTML_BOOLEAN_ATTRIBUTES}
 * @see https://html.spec.whatwg.org/#boolean-attributes
 * @see https://html.spec.whatwg.org/#attributes-3
 */
function isHTMLBooleanAttribute(name) {
	return hasOwn(HTML_BOOLEAN_ATTRIBUTES, name.toLowerCase());
}

/**
 * Void elements only have a start tag; end tags must not be specified for void elements.
 * These elements should be written as self-closing like this: `<area />`.
 * This should not be confused with optional tags that HTML allows to omit the end tag for
 * (like `li`, `tr` and others), which can have content after them,
 * so they can not be written as self-closing.
 * xmldom does not have any logic for optional end tags cases,
 * and will report them as a warning.
 * Content that would go into the unopened element,
 * will instead be added as a sibling text node.
 *
 * @type {Readonly<{
 * 	area: boolean;
 * 	col: boolean;
 * 	img: boolean;
 * 	wbr: boolean;
 * 	link: boolean;
 * 	hr: boolean;
 * 	source: boolean;
 * 	br: boolean;
 * 	input: boolean;
 * 	param: boolean;
 * 	meta: boolean;
 * 	embed: boolean;
 * 	track: boolean;
 * 	base: boolean;
 * }>}
 * @see https://html.spec.whatwg.org/#void-elements
 * @see https://html.spec.whatwg.org/#optional-tags
 */
var HTML_VOID_ELEMENTS = freeze({
	area: true,
	base: true,
	br: true,
	col: true,
	embed: true,
	hr: true,
	img: true,
	input: true,
	link: true,
	meta: true,
	param: true,
	source: true,
	track: true,
	wbr: true,
});

/**
 * Check if `tagName` is matching one of the HTML void element names.
 * This method doesn't check if such tags are allowed in the context of the current
 * document/parsing.
 *
 * @param {string} tagName
 * @returns {boolean}
 * @see {@link HTML_VOID_ELEMENTS}
 * @see https://html.spec.whatwg.org/#void-elements
 */
function isHTMLVoidElement(tagName) {
	return hasOwn(HTML_VOID_ELEMENTS, tagName.toLowerCase());
}

/**
 * Tag names that are raw text elements according to HTML spec.
 * The value denotes whether they are escapable or not.
 *
 * @see {@link isHTMLEscapableRawTextElement}
 * @see {@link isHTMLRawTextElement}
 * @see https://html.spec.whatwg.org/#raw-text-elements
 * @see https://html.spec.whatwg.org/#escapable-raw-text-elements
 */
var HTML_RAW_TEXT_ELEMENTS = freeze({
	script: false,
	style: false,
	textarea: true,
	title: true,
});

/**
 * Check if `tagName` is matching one of the HTML raw text element names.
 * This method doesn't check if such tags are allowed in the context of the current
 * document/parsing.
 *
 * @param {string} tagName
 * @returns {boolean}
 * @see {@link isHTMLEscapableRawTextElement}
 * @see {@link HTML_RAW_TEXT_ELEMENTS}
 * @see https://html.spec.whatwg.org/#raw-text-elements
 * @see https://html.spec.whatwg.org/#escapable-raw-text-elements
 */
function isHTMLRawTextElement(tagName) {
	var key = tagName.toLowerCase();
	return hasOwn(HTML_RAW_TEXT_ELEMENTS, key) && !HTML_RAW_TEXT_ELEMENTS[key];
}
/**
 * Check if `tagName` is matching one of the HTML escapable raw text element names.
 * This method doesn't check if such tags are allowed in the context of the current
 * document/parsing.
 *
 * @param {string} tagName
 * @returns {boolean}
 * @see {@link isHTMLRawTextElement}
 * @see {@link HTML_RAW_TEXT_ELEMENTS}
 * @see https://html.spec.whatwg.org/#raw-text-elements
 * @see https://html.spec.whatwg.org/#escapable-raw-text-elements
 */
function isHTMLEscapableRawTextElement(tagName) {
	var key = tagName.toLowerCase();
	return hasOwn(HTML_RAW_TEXT_ELEMENTS, key) && HTML_RAW_TEXT_ELEMENTS[key];
}
/**
 * Only returns true if `value` matches MIME_TYPE.HTML, which indicates an HTML document.
 *
 * @param {string} mimeType
 * @returns {mimeType is 'text/html'}
 * @see https://www.iana.org/assignments/media-types/text/html
 * @see https://en.wikipedia.org/wiki/HTML
 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString
 * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring
 */
function isHTMLMimeType(mimeType) {
	return mimeType === MIME_TYPE.HTML;
}
/**
 * For both the `text/html` and the `application/xhtml+xml` namespace the spec defines that the
 * HTML namespace is provided as the default.
 *
 * @param {string} mimeType
 * @returns {boolean}
 * @see https://dom.spec.whatwg.org/#dom-document-createelement
 * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument
 * @see https://dom.spec.whatwg.org/#dom-domimplementation-createhtmldocument
 */
function hasDefaultHTMLNamespace(mimeType) {
	return isHTMLMimeType(mimeType) || mimeType === MIME_TYPE.XML_XHTML_APPLICATION;
}

/**
 * All mime types that are allowed as input to `DOMParser.parseFromString`
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString#Argument02
 *      MDN
 * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#domparsersupportedtype
 *      WHATWG HTML Spec
 * @see {@link DOMParser.prototype.parseFromString}
 */
var MIME_TYPE = freeze({
	/**
	 * `text/html`, the only mime type that triggers treating an XML document as HTML.
	 *
	 * @see https://www.iana.org/assignments/media-types/text/html IANA MimeType registration
	 * @see https://en.wikipedia.org/wiki/HTML Wikipedia
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString MDN
	 * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring
	 *      WHATWG HTML Spec
	 */
	HTML: 'text/html',

	/**
	 * `application/xml`, the standard mime type for XML documents.
	 *
	 * @see https://www.iana.org/assignments/media-types/application/xml IANA MimeType
	 *      registration
	 * @see https://tools.ietf.org/html/rfc7303#section-9.1 RFC 7303
	 * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
	 */
	XML_APPLICATION: 'application/xml',

	/**
	 * `text/xml`, an alias for `application/xml`.
	 *
	 * @see https://tools.ietf.org/html/rfc7303#section-9.2 RFC 7303
	 * @see https://www.iana.org/assignments/media-types/text/xml IANA MimeType registration
	 * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
	 */
	XML_TEXT: 'text/xml',

	/**
	 * `application/xhtml+xml`, indicates an XML document that has the default HTML namespace,
	 * but is parsed as an XML document.
	 *
	 * @see https://www.iana.org/assignments/media-types/application/xhtml+xml IANA MimeType
	 *      registration
	 * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument WHATWG DOM Spec
	 * @see https://en.wikipedia.org/wiki/XHTML Wikipedia
	 */
	XML_XHTML_APPLICATION: 'application/xhtml+xml',

	/**
	 * `image/svg+xml`,
	 *
	 * @see https://www.iana.org/assignments/media-types/image/svg+xml IANA MimeType registration
	 * @see https://www.w3.org/TR/SVG11/ W3C SVG 1.1
	 * @see https://en.wikipedia.org/wiki/Scalable_Vector_Graphics Wikipedia
	 */
	XML_SVG_IMAGE: 'image/svg+xml',
});
/**
 * @typedef {'application/xhtml+xml' | 'application/xml' | 'image/svg+xml' | 'text/html' | 'text/xml'}
 * MimeType
 */
/**
 * @type {MimeType[]}
 * @private
 * Basically `Object.values`, which is not available in ES5.
 */
var _MIME_TYPES = Object.keys(MIME_TYPE).map(function (key) {
	return MIME_TYPE[key];
});

/**
 * Only returns true if `mimeType` is one of the allowed values for
 * `DOMParser.parseFromString`.
 *
 * @param {string} mimeType
 * @returns {mimeType is 'application/xhtml+xml' | 'application/xml' | 'image/svg+xml' |  'text/html' | 'text/xml'}
 *
 */
function isValidMimeType(mimeType) {
	return _MIME_TYPES.indexOf(mimeType) > -1;
}
/**
 * Namespaces that are used in this code base.
 *
 * @see http://www.w3.org/TR/REC-xml-names
 */
var NAMESPACE = freeze({
	/**
	 * The XHTML namespace.
	 *
	 * @see http://www.w3.org/1999/xhtml
	 */
	HTML: 'http://www.w3.org/1999/xhtml',

	/**
	 * The SVG namespace.
	 *
	 * @see http://www.w3.org/2000/svg
	 */
	SVG: 'http://www.w3.org/2000/svg',

	/**
	 * The `xml:` namespace.
	 *
	 * @see http://www.w3.org/XML/1998/namespace
	 */
	XML: 'http://www.w3.org/XML/1998/namespace',

	/**
	 * The `xmlns:` namespace.
	 *
	 * @see https://www.w3.org/2000/xmlns/
	 */
	XMLNS: 'http://www.w3.org/2000/xmlns/',
});

exports.assign = assign;
exports.find = find;
exports.freeze = freeze;
exports.HTML_BOOLEAN_ATTRIBUTES = HTML_BOOLEAN_ATTRIBUTES;
exports.HTML_RAW_TEXT_ELEMENTS = HTML_RAW_TEXT_ELEMENTS;
exports.HTML_VOID_ELEMENTS = HTML_VOID_ELEMENTS;
exports.hasDefaultHTMLNamespace = hasDefaultHTMLNamespace;
exports.hasOwn = hasOwn;
exports.isHTMLBooleanAttribute = isHTMLBooleanAttribute;
exports.isHTMLRawTextElement = isHTMLRawTextElement;
exports.isHTMLEscapableRawTextElement = isHTMLEscapableRawTextElement;
exports.isHTMLMimeType = isHTMLMimeType;
exports.isHTMLVoidElement = isHTMLVoidElement;
exports.isValidMimeType = isValidMimeType;
exports.MIME_TYPE = MIME_TYPE;
exports.NAMESPACE = NAMESPACE;


/***/ }),

/***/ 999:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

(function(){'use strict';var k=this;
function aa(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==
b&&"undefined"==typeof a.call)return"object";return b}function l(a){return"string"==typeof a}function ba(a,b,c){return a.call.apply(a.bind,arguments)}function ca(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function da(a,b,c){da=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ba:ca;return da.apply(null,arguments)}function ea(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
function m(a){var b=n;function c(){}c.prototype=b.prototype;a.G=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.F=function(a,c,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[c].apply(a,g)}};/*

 The MIT License

 Copyright (c) 2007 Cybozu Labs, Inc.
 Copyright (c) 2012 Google Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to
 deal in the Software without restriction, including without limitation the
 rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 IN THE SOFTWARE.
*/
var fa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};function q(a,b){return-1!=a.indexOf(b)}function ga(a,b){return a<b?-1:a>b?1:0};var ha=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(l(a))return l(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},r=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=l(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},ia=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,
b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=l(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var p=g[h];b.call(c,p,h,a)&&(e[f++]=p)}return e},t=Array.prototype.reduce?function(a,b,c,d){d&&(b=da(b,d));return Array.prototype.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;r(a,function(c,g){e=b.call(d,e,c,g,a)});return e},ja=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=l(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1};function ka(a,b){var c;a:{c=a.length;for(var d=l(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:l(a)?a.charAt(c):a[c]}function la(a){return Array.prototype.concat.apply(Array.prototype,arguments)}function ma(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)};var u;a:{var na=k.navigator;if(na){var oa=na.userAgent;if(oa){u=oa;break a}}u=""};var pa=q(u,"Opera")||q(u,"OPR"),v=q(u,"Trident")||q(u,"MSIE"),qa=q(u,"Edge"),ra=q(u,"Gecko")&&!(q(u.toLowerCase(),"webkit")&&!q(u,"Edge"))&&!(q(u,"Trident")||q(u,"MSIE"))&&!q(u,"Edge"),sa=q(u.toLowerCase(),"webkit")&&!q(u,"Edge");function ta(){var a=k.document;return a?a.documentMode:void 0}var ua;
a:{var va="",wa=function(){var a=u;if(ra)return/rv\:([^\);]+)(\)|;)/.exec(a);if(qa)return/Edge\/([\d\.]+)/.exec(a);if(v)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(sa)return/WebKit\/(\S+)/.exec(a);if(pa)return/(?:Version)[ \/]?(\S+)/.exec(a)}();wa&&(va=wa?wa[1]:"");if(v){var xa=ta();if(null!=xa&&xa>parseFloat(va)){ua=String(xa);break a}}ua=va}var ya={};
function za(a){if(!ya[a]){for(var b=0,c=fa(String(ua)).split("."),d=fa(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"",p=/(\d*)(\D*)/g,y=/(\d*)(\D*)/g;do{var D=p.exec(g)||["","",""],X=y.exec(h)||["","",""];if(0==D[0].length&&0==X[0].length)break;b=ga(0==D[1].length?0:parseInt(D[1],10),0==X[1].length?0:parseInt(X[1],10))||ga(0==D[2].length,0==X[2].length)||ga(D[2],X[2])}while(0==b)}ya[a]=0<=b}}
var Aa=k.document,Ba=Aa&&v?ta()||("CSS1Compat"==Aa.compatMode?parseInt(ua,10):5):void 0;var w=v&&!(9<=Number(Ba)),Ca=v&&!(8<=Number(Ba));function x(a,b,c,d){this.a=a;this.nodeName=c;this.nodeValue=d;this.nodeType=2;this.parentNode=this.ownerElement=b}function Da(a,b){var c=Ca&&"href"==b.nodeName?a.getAttribute(b.nodeName,2):b.nodeValue;return new x(b,a,b.nodeName,c)};function z(a){var b=null,c=a.nodeType;1==c&&(b=a.textContent,b=void 0==b||null==b?a.innerText:b,b=void 0==b||null==b?"":b);if("string"!=typeof b)if(w&&"title"==a.nodeName.toLowerCase()&&1==c)b=a.text;else if(9==c||1==c){a=9==c?a.documentElement:a.firstChild;for(var c=0,d=[],b="";a;){do 1!=a.nodeType&&(b+=a.nodeValue),w&&"title"==a.nodeName.toLowerCase()&&(b+=a.text),d[c++]=a;while(a=a.firstChild);for(;c&&!(a=d[--c].nextSibling););}}else b=a.nodeValue;return""+b}
function A(a,b,c){if(null===b)return!0;try{if(!a.getAttribute)return!1}catch(d){return!1}Ca&&"class"==b&&(b="className");return null==c?!!a.getAttribute(b):a.getAttribute(b,2)==c}function B(a,b,c,d,e){return(w?Ea:Fa).call(null,a,b,l(c)?c:null,l(d)?d:null,e||new C)}
function Ea(a,b,c,d,e){if(a instanceof E||8==a.b||c&&null===a.b){var f=b.all;if(!f)return e;a=Ga(a);if("*"!=a&&(f=b.getElementsByTagName(a),!f))return e;if(c){for(var g=[],h=0;b=f[h++];)A(b,c,d)&&g.push(b);f=g}for(h=0;b=f[h++];)"*"==a&&"!"==b.tagName||F(e,b);return e}Ha(a,b,c,d,e);return e}
function Fa(a,b,c,d,e){b.getElementsByName&&d&&"name"==c&&!v?(b=b.getElementsByName(d),r(b,function(b){a.a(b)&&F(e,b)})):b.getElementsByClassName&&d&&"class"==c?(b=b.getElementsByClassName(d),r(b,function(b){b.className==d&&a.a(b)&&F(e,b)})):a instanceof G?Ha(a,b,c,d,e):b.getElementsByTagName&&(b=b.getElementsByTagName(a.f()),r(b,function(a){A(a,c,d)&&F(e,a)}));return e}
function Ia(a,b,c,d,e){var f;if((a instanceof E||8==a.b||c&&null===a.b)&&(f=b.childNodes)){var g=Ga(a);if("*"!=g&&(f=ia(f,function(a){return a.tagName&&a.tagName.toLowerCase()==g}),!f))return e;c&&(f=ia(f,function(a){return A(a,c,d)}));r(f,function(a){"*"==g&&("!"==a.tagName||"*"==g&&1!=a.nodeType)||F(e,a)});return e}return Ja(a,b,c,d,e)}function Ja(a,b,c,d,e){for(b=b.firstChild;b;b=b.nextSibling)A(b,c,d)&&a.a(b)&&F(e,b);return e}
function Ha(a,b,c,d,e){for(b=b.firstChild;b;b=b.nextSibling)A(b,c,d)&&a.a(b)&&F(e,b),Ha(a,b,c,d,e)}function Ga(a){if(a instanceof G){if(8==a.b)return"!";if(null===a.b)return"*"}return a.f()};!ra&&!v||v&&9<=Number(Ba)||ra&&za("1.9.1");v&&za("9");function Ka(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function La(a,b){if(a==b)return 0;if(a.compareDocumentPosition)return a.compareDocumentPosition(b)&2?1:-1;if(v&&!(9<=Number(Ba))){if(9==a.nodeType)return-1;if(9==b.nodeType)return 1}if("sourceIndex"in a||a.parentNode&&"sourceIndex"in a.parentNode){var c=1==a.nodeType,d=1==b.nodeType;if(c&&d)return a.sourceIndex-b.sourceIndex;var e=a.parentNode,f=b.parentNode;return e==f?Ma(a,b):!c&&Ka(e,b)?-1*Na(a,b):!d&&Ka(f,a)?Na(b,a):(c?a.sourceIndex:e.sourceIndex)-(d?b.sourceIndex:f.sourceIndex)}d=9==a.nodeType?
a:a.ownerDocument||a.document;c=d.createRange();c.selectNode(a);c.collapse(!0);d=d.createRange();d.selectNode(b);d.collapse(!0);return c.compareBoundaryPoints(k.Range.START_TO_END,d)}function Na(a,b){var c=a.parentNode;if(c==b)return-1;for(var d=b;d.parentNode!=c;)d=d.parentNode;return Ma(d,a)}function Ma(a,b){for(var c=b;c=c.previousSibling;)if(c==a)return-1;return 1};function C(){this.b=this.a=null;this.l=0}function Oa(a){this.node=a;this.a=this.b=null}function Pa(a,b){if(!a.a)return b;if(!b.a)return a;for(var c=a.a,d=b.a,e=null,f=null,g=0;c&&d;){var f=c.node,h=d.node;f==h||f instanceof x&&h instanceof x&&f.a==h.a?(f=c,c=c.a,d=d.a):0<La(c.node,d.node)?(f=d,d=d.a):(f=c,c=c.a);(f.b=e)?e.a=f:a.a=f;e=f;g++}for(f=c||d;f;)f.b=e,e=e.a=f,g++,f=f.a;a.b=e;a.l=g;return a}function Qa(a,b){var c=new Oa(b);c.a=a.a;a.b?a.a.b=c:a.a=a.b=c;a.a=c;a.l++}
function F(a,b){var c=new Oa(b);c.b=a.b;a.a?a.b.a=c:a.a=a.b=c;a.b=c;a.l++}function Ra(a){return(a=a.a)?a.node:null}function Sa(a){return(a=Ra(a))?z(a):""}function H(a,b){return new Ta(a,!!b)}function Ta(a,b){this.f=a;this.b=(this.c=b)?a.b:a.a;this.a=null}function I(a){var b=a.b;if(null==b)return null;var c=a.a=b;a.b=a.c?b.b:b.a;return c.node};function n(a){this.i=a;this.b=this.g=!1;this.f=null}function J(a){return"\n  "+a.toString().split("\n").join("\n  ")}function Ua(a,b){a.g=b}function Va(a,b){a.b=b}function K(a,b){var c=a.a(b);return c instanceof C?+Sa(c):+c}function L(a,b){var c=a.a(b);return c instanceof C?Sa(c):""+c}function M(a,b){var c=a.a(b);return c instanceof C?!!c.l:!!c};function N(a,b,c){n.call(this,a.i);this.c=a;this.h=b;this.o=c;this.g=b.g||c.g;this.b=b.b||c.b;this.c==Wa&&(c.b||c.g||4==c.i||0==c.i||!b.f?b.b||b.g||4==b.i||0==b.i||!c.f||(this.f={name:c.f.name,s:b}):this.f={name:b.f.name,s:c})}m(N);
function O(a,b,c,d,e){b=b.a(d);c=c.a(d);var f;if(b instanceof C&&c instanceof C){b=H(b);for(d=I(b);d;d=I(b))for(e=H(c),f=I(e);f;f=I(e))if(a(z(d),z(f)))return!0;return!1}if(b instanceof C||c instanceof C){b instanceof C?(e=b,d=c):(e=c,d=b);f=H(e);for(var g=typeof d,h=I(f);h;h=I(f)){switch(g){case "number":h=+z(h);break;case "boolean":h=!!z(h);break;case "string":h=z(h);break;default:throw Error("Illegal primitive type for comparison.");}if(e==b&&a(h,d)||e==c&&a(d,h))return!0}return!1}return e?"boolean"==
typeof b||"boolean"==typeof c?a(!!b,!!c):"number"==typeof b||"number"==typeof c?a(+b,+c):a(b,c):a(+b,+c)}N.prototype.a=function(a){return this.c.m(this.h,this.o,a)};N.prototype.toString=function(){var a="Binary Expression: "+this.c,a=a+J(this.h);return a+=J(this.o)};function Xa(a,b,c,d){this.a=a;this.w=b;this.i=c;this.m=d}Xa.prototype.toString=function(){return this.a};var Ya={};
function P(a,b,c,d){if(Ya.hasOwnProperty(a))throw Error("Binary operator already created: "+a);a=new Xa(a,b,c,d);return Ya[a.toString()]=a}P("div",6,1,function(a,b,c){return K(a,c)/K(b,c)});P("mod",6,1,function(a,b,c){return K(a,c)%K(b,c)});P("*",6,1,function(a,b,c){return K(a,c)*K(b,c)});P("+",5,1,function(a,b,c){return K(a,c)+K(b,c)});P("-",5,1,function(a,b,c){return K(a,c)-K(b,c)});P("<",4,2,function(a,b,c){return O(function(a,b){return a<b},a,b,c)});
P(">",4,2,function(a,b,c){return O(function(a,b){return a>b},a,b,c)});P("<=",4,2,function(a,b,c){return O(function(a,b){return a<=b},a,b,c)});P(">=",4,2,function(a,b,c){return O(function(a,b){return a>=b},a,b,c)});var Wa=P("=",3,2,function(a,b,c){return O(function(a,b){return a==b},a,b,c,!0)});P("!=",3,2,function(a,b,c){return O(function(a,b){return a!=b},a,b,c,!0)});P("and",2,2,function(a,b,c){return M(a,c)&&M(b,c)});P("or",1,2,function(a,b,c){return M(a,c)||M(b,c)});function Q(a,b,c){this.a=a;this.b=b||1;this.f=c||1};function Za(a,b){if(b.a.length&&4!=a.i)throw Error("Primary expression must evaluate to nodeset if filter has predicate(s).");n.call(this,a.i);this.c=a;this.h=b;this.g=a.g;this.b=a.b}m(Za);Za.prototype.a=function(a){a=this.c.a(a);return $a(this.h,a)};Za.prototype.toString=function(){var a;a="Filter:"+J(this.c);return a+=J(this.h)};function ab(a,b){if(b.length<a.A)throw Error("Function "+a.j+" expects at least"+a.A+" arguments, "+b.length+" given");if(null!==a.v&&b.length>a.v)throw Error("Function "+a.j+" expects at most "+a.v+" arguments, "+b.length+" given");a.B&&r(b,function(b,d){if(4!=b.i)throw Error("Argument "+d+" to function "+a.j+" is not of type Nodeset: "+b);});n.call(this,a.i);this.h=a;this.c=b;Ua(this,a.g||ja(b,function(a){return a.g}));Va(this,a.D&&!b.length||a.C&&!!b.length||ja(b,function(a){return a.b}))}m(ab);
ab.prototype.a=function(a){return this.h.m.apply(null,la(a,this.c))};ab.prototype.toString=function(){var a="Function: "+this.h;if(this.c.length)var b=t(this.c,function(a,b){return a+J(b)},"Arguments:"),a=a+J(b);return a};function bb(a,b,c,d,e,f,g,h,p){this.j=a;this.i=b;this.g=c;this.D=d;this.C=e;this.m=f;this.A=g;this.v=void 0!==h?h:g;this.B=!!p}bb.prototype.toString=function(){return this.j};var cb={};
function R(a,b,c,d,e,f,g,h){if(cb.hasOwnProperty(a))throw Error("Function already created: "+a+".");cb[a]=new bb(a,b,c,d,!1,e,f,g,h)}R("boolean",2,!1,!1,function(a,b){return M(b,a)},1);R("ceiling",1,!1,!1,function(a,b){return Math.ceil(K(b,a))},1);R("concat",3,!1,!1,function(a,b){return t(ma(arguments,1),function(b,d){return b+L(d,a)},"")},2,null);R("contains",2,!1,!1,function(a,b,c){return q(L(b,a),L(c,a))},2);R("count",1,!1,!1,function(a,b){return b.a(a).l},1,1,!0);
R("false",2,!1,!1,function(){return!1},0);R("floor",1,!1,!1,function(a,b){return Math.floor(K(b,a))},1);R("id",4,!1,!1,function(a,b){function c(a){if(w){var b=e.all[a];if(b){if(b.nodeType&&a==b.id)return b;if(b.length)return ka(b,function(b){return a==b.id})}return null}return e.getElementById(a)}var d=a.a,e=9==d.nodeType?d:d.ownerDocument,d=L(b,a).split(/\s+/),f=[];r(d,function(a){a=c(a);!a||0<=ha(f,a)||f.push(a)});f.sort(La);var g=new C;r(f,function(a){F(g,a)});return g},1);
R("lang",2,!1,!1,function(){return!1},1);R("last",1,!0,!1,function(a){if(1!=arguments.length)throw Error("Function last expects ()");return a.f},0);R("local-name",3,!1,!0,function(a,b){var c=b?Ra(b.a(a)):a.a;return c?c.localName||c.nodeName.toLowerCase():""},0,1,!0);R("name",3,!1,!0,function(a,b){var c=b?Ra(b.a(a)):a.a;return c?c.nodeName.toLowerCase():""},0,1,!0);R("namespace-uri",3,!0,!1,function(){return""},0,1,!0);
R("normalize-space",3,!1,!0,function(a,b){return(b?L(b,a):z(a.a)).replace(/[\s\xa0]+/g," ").replace(/^\s+|\s+$/g,"")},0,1);R("not",2,!1,!1,function(a,b){return!M(b,a)},1);R("number",1,!1,!0,function(a,b){return b?K(b,a):+z(a.a)},0,1);R("position",1,!0,!1,function(a){return a.b},0);R("round",1,!1,!1,function(a,b){return Math.round(K(b,a))},1);R("starts-with",2,!1,!1,function(a,b,c){b=L(b,a);a=L(c,a);return 0==b.lastIndexOf(a,0)},2);R("string",3,!1,!0,function(a,b){return b?L(b,a):z(a.a)},0,1);
R("string-length",1,!1,!0,function(a,b){return(b?L(b,a):z(a.a)).length},0,1);R("substring",3,!1,!1,function(a,b,c,d){c=K(c,a);if(isNaN(c)||Infinity==c||-Infinity==c)return"";d=d?K(d,a):Infinity;if(isNaN(d)||-Infinity===d)return"";c=Math.round(c)-1;var e=Math.max(c,0);a=L(b,a);return Infinity==d?a.substring(e):a.substring(e,c+Math.round(d))},2,3);R("substring-after",3,!1,!1,function(a,b,c){b=L(b,a);a=L(c,a);c=b.indexOf(a);return-1==c?"":b.substring(c+a.length)},2);
R("substring-before",3,!1,!1,function(a,b,c){b=L(b,a);a=L(c,a);a=b.indexOf(a);return-1==a?"":b.substring(0,a)},2);R("sum",1,!1,!1,function(a,b){for(var c=H(b.a(a)),d=0,e=I(c);e;e=I(c))d+=+z(e);return d},1,1,!0);R("translate",3,!1,!1,function(a,b,c,d){b=L(b,a);c=L(c,a);var e=L(d,a);a={};for(d=0;d<c.length;d++){var f=c.charAt(d);f in a||(a[f]=e.charAt(d))}c="";for(d=0;d<b.length;d++)f=b.charAt(d),c+=f in a?a[f]:f;return c},3);R("true",2,!1,!1,function(){return!0},0);function G(a,b){this.h=a;this.c=void 0!==b?b:null;this.b=null;switch(a){case "comment":this.b=8;break;case "text":this.b=3;break;case "processing-instruction":this.b=7;break;case "node":break;default:throw Error("Unexpected argument");}}function db(a){return"comment"==a||"text"==a||"processing-instruction"==a||"node"==a}G.prototype.a=function(a){return null===this.b||this.b==a.nodeType};G.prototype.f=function(){return this.h};
G.prototype.toString=function(){var a="Kind Test: "+this.h;null===this.c||(a+=J(this.c));return a};function eb(a){this.b=a;this.a=0}function fb(a){a=a.match(gb);for(var b=0;b<a.length;b++)hb.test(a[b])&&a.splice(b,1);return new eb(a)}var gb=/\$?(?:(?![0-9-\.])(?:\*|[\w-\.]+):)?(?![0-9-\.])(?:\*|[\w-\.]+)|\/\/|\.\.|::|\d+(?:\.\d*)?|\.\d+|"[^"]*"|'[^']*'|[!<>]=|\s+|./g,hb=/^\s/;function S(a,b){return a.b[a.a+(b||0)]}function T(a){return a.b[a.a++]}function ib(a){return a.b.length<=a.a};function jb(a){n.call(this,3);this.c=a.substring(1,a.length-1)}m(jb);jb.prototype.a=function(){return this.c};jb.prototype.toString=function(){return"Literal: "+this.c};function E(a,b){this.j=a.toLowerCase();var c;c="*"==this.j?"*":"http://www.w3.org/1999/xhtml";this.c=b?b.toLowerCase():c}E.prototype.a=function(a){var b=a.nodeType;if(1!=b&&2!=b)return!1;b=void 0!==a.localName?a.localName:a.nodeName;return"*"!=this.j&&this.j!=b.toLowerCase()?!1:"*"==this.c?!0:this.c==(a.namespaceURI?a.namespaceURI.toLowerCase():"http://www.w3.org/1999/xhtml")};E.prototype.f=function(){return this.j};
E.prototype.toString=function(){return"Name Test: "+("http://www.w3.org/1999/xhtml"==this.c?"":this.c+":")+this.j};function kb(a,b){n.call(this,a.i);this.h=a;this.c=b;this.g=a.g;this.b=a.b;if(1==this.c.length){var c=this.c[0];c.u||c.c!=lb||(c=c.o,"*"!=c.f()&&(this.f={name:c.f(),s:null}))}}m(kb);function mb(){n.call(this,4)}m(mb);mb.prototype.a=function(a){var b=new C;a=a.a;9==a.nodeType?F(b,a):F(b,a.ownerDocument);return b};mb.prototype.toString=function(){return"Root Helper Expression"};function nb(){n.call(this,4)}m(nb);nb.prototype.a=function(a){var b=new C;F(b,a.a);return b};nb.prototype.toString=function(){return"Context Helper Expression"};
function ob(a){return"/"==a||"//"==a}kb.prototype.a=function(a){var b=this.h.a(a);if(!(b instanceof C))throw Error("Filter expression must evaluate to nodeset.");a=this.c;for(var c=0,d=a.length;c<d&&b.l;c++){var e=a[c],f=H(b,e.c.a),g;if(e.g||e.c!=pb)if(e.g||e.c!=qb)for(g=I(f),b=e.a(new Q(g));null!=(g=I(f));)g=e.a(new Q(g)),b=Pa(b,g);else g=I(f),b=e.a(new Q(g));else{for(g=I(f);(b=I(f))&&(!g.contains||g.contains(b))&&b.compareDocumentPosition(g)&8;g=b);b=e.a(new Q(g))}}return b};
kb.prototype.toString=function(){var a;a="Path Expression:"+J(this.h);if(this.c.length){var b=t(this.c,function(a,b){return a+J(b)},"Steps:");a+=J(b)}return a};function rb(a){n.call(this,4);this.c=a;Ua(this,ja(this.c,function(a){return a.g}));Va(this,ja(this.c,function(a){return a.b}))}m(rb);rb.prototype.a=function(a){var b=new C;r(this.c,function(c){c=c.a(a);if(!(c instanceof C))throw Error("Path expression must evaluate to NodeSet.");b=Pa(b,c)});return b};rb.prototype.toString=function(){return t(this.c,function(a,b){return a+J(b)},"Union Expression:")};function sb(a,b){this.a=a;this.b=!!b}
function $a(a,b,c){for(c=c||0;c<a.a.length;c++)for(var d=a.a[c],e=H(b),f=b.l,g,h=0;g=I(e);h++){var p=a.b?f-h:h+1;g=d.a(new Q(g,p,f));if("number"==typeof g)p=p==g;else if("string"==typeof g||"boolean"==typeof g)p=!!g;else if(g instanceof C)p=0<g.l;else throw Error("Predicate.evaluate returned an unexpected type.");if(!p){p=e;g=p.f;var y=p.a;if(!y)throw Error("Next must be called at least once before remove.");var D=y.b,y=y.a;D?D.a=y:g.a=y;y?y.b=D:g.b=D;g.l--;p.a=null}}return b}
sb.prototype.toString=function(){return t(this.a,function(a,b){return a+J(b)},"Predicates:")};function U(a,b,c,d){n.call(this,4);this.c=a;this.o=b;this.h=c||new sb([]);this.u=!!d;b=this.h;b=0<b.a.length?b.a[0].f:null;a.b&&b&&(a=b.name,a=w?a.toLowerCase():a,this.f={name:a,s:b.s});a:{a=this.h;for(b=0;b<a.a.length;b++)if(c=a.a[b],c.g||1==c.i||0==c.i){a=!0;break a}a=!1}this.g=a}m(U);
U.prototype.a=function(a){var b=a.a,c=null,c=this.f,d=null,e=null,f=0;c&&(d=c.name,e=c.s?L(c.s,a):null,f=1);if(this.u)if(this.g||this.c!=tb)if(a=H((new U(ub,new G("node"))).a(a)),b=I(a))for(c=this.m(b,d,e,f);null!=(b=I(a));)c=Pa(c,this.m(b,d,e,f));else c=new C;else c=B(this.o,b,d,e),c=$a(this.h,c,f);else c=this.m(a.a,d,e,f);return c};U.prototype.m=function(a,b,c,d){a=this.c.f(this.o,a,b,c);return a=$a(this.h,a,d)};
U.prototype.toString=function(){var a;a="Step:"+J("Operator: "+(this.u?"//":"/"));this.c.j&&(a+=J("Axis: "+this.c));a+=J(this.o);if(this.h.a.length){var b=t(this.h.a,function(a,b){return a+J(b)},"Predicates:");a+=J(b)}return a};function vb(a,b,c,d){this.j=a;this.f=b;this.a=c;this.b=d}vb.prototype.toString=function(){return this.j};var wb={};function V(a,b,c,d){if(wb.hasOwnProperty(a))throw Error("Axis already created: "+a);b=new vb(a,b,c,!!d);return wb[a]=b}
V("ancestor",function(a,b){for(var c=new C,d=b;d=d.parentNode;)a.a(d)&&Qa(c,d);return c},!0);V("ancestor-or-self",function(a,b){var c=new C,d=b;do a.a(d)&&Qa(c,d);while(d=d.parentNode);return c},!0);
var lb=V("attribute",function(a,b){var c=new C,d=a.f();if("style"==d&&w&&b.style)return F(c,new x(b.style,b,"style",b.style.cssText)),c;var e=b.attributes;if(e)if(a instanceof G&&null===a.b||"*"==d)for(var d=0,f;f=e[d];d++)w?f.nodeValue&&F(c,Da(b,f)):F(c,f);else(f=e.getNamedItem(d))&&(w?f.nodeValue&&F(c,Da(b,f)):F(c,f));return c},!1),tb=V("child",function(a,b,c,d,e){return(w?Ia:Ja).call(null,a,b,l(c)?c:null,l(d)?d:null,e||new C)},!1,!0);V("descendant",B,!1,!0);
var ub=V("descendant-or-self",function(a,b,c,d){var e=new C;A(b,c,d)&&a.a(b)&&F(e,b);return B(a,b,c,d,e)},!1,!0),pb=V("following",function(a,b,c,d){var e=new C;do for(var f=b;f=f.nextSibling;)A(f,c,d)&&a.a(f)&&F(e,f),e=B(a,f,c,d,e);while(b=b.parentNode);return e},!1,!0);V("following-sibling",function(a,b){for(var c=new C,d=b;d=d.nextSibling;)a.a(d)&&F(c,d);return c},!1);V("namespace",function(){return new C},!1);
var xb=V("parent",function(a,b){var c=new C;if(9==b.nodeType)return c;if(2==b.nodeType)return F(c,b.ownerElement),c;var d=b.parentNode;a.a(d)&&F(c,d);return c},!1),qb=V("preceding",function(a,b,c,d){var e=new C,f=[];do f.unshift(b);while(b=b.parentNode);for(var g=1,h=f.length;g<h;g++){var p=[];for(b=f[g];b=b.previousSibling;)p.unshift(b);for(var y=0,D=p.length;y<D;y++)b=p[y],A(b,c,d)&&a.a(b)&&F(e,b),e=B(a,b,c,d,e)}return e},!0,!0);
V("preceding-sibling",function(a,b){for(var c=new C,d=b;d=d.previousSibling;)a.a(d)&&Qa(c,d);return c},!0);var yb=V("self",function(a,b){var c=new C;a.a(b)&&F(c,b);return c},!1);function zb(a){n.call(this,1);this.c=a;this.g=a.g;this.b=a.b}m(zb);zb.prototype.a=function(a){return-K(this.c,a)};zb.prototype.toString=function(){return"Unary Expression: -"+J(this.c)};function Ab(a){n.call(this,1);this.c=a}m(Ab);Ab.prototype.a=function(){return this.c};Ab.prototype.toString=function(){return"Number: "+this.c};function Bb(a,b){this.a=a;this.b=b}function Cb(a){for(var b,c=[];;){W(a,"Missing right hand side of binary expression.");b=Db(a);var d=T(a.a);if(!d)break;var e=(d=Ya[d]||null)&&d.w;if(!e){a.a.a--;break}for(;c.length&&e<=c[c.length-1].w;)b=new N(c.pop(),c.pop(),b);c.push(b,d)}for(;c.length;)b=new N(c.pop(),c.pop(),b);return b}function W(a,b){if(ib(a.a))throw Error(b);}function Eb(a,b){var c=T(a.a);if(c!=b)throw Error("Bad token, expected: "+b+" got: "+c);}
function Fb(a){a=T(a.a);if(")"!=a)throw Error("Bad token: "+a);}function Gb(a){a=T(a.a);if(2>a.length)throw Error("Unclosed literal string");return new jb(a)}
function Hb(a){var b,c=[],d;if(ob(S(a.a))){b=T(a.a);d=S(a.a);if("/"==b&&(ib(a.a)||"."!=d&&".."!=d&&"@"!=d&&"*"!=d&&!/(?![0-9])[\w]/.test(d)))return new mb;d=new mb;W(a,"Missing next location step.");b=Ib(a,b);c.push(b)}else{a:{b=S(a.a);d=b.charAt(0);switch(d){case "$":throw Error("Variable reference not allowed in HTML XPath");case "(":T(a.a);b=Cb(a);W(a,'unclosed "("');Eb(a,")");break;case '"':case "'":b=Gb(a);break;default:if(isNaN(+b))if(!db(b)&&/(?![0-9])[\w]/.test(d)&&"("==S(a.a,1)){b=T(a.a);
b=cb[b]||null;T(a.a);for(d=[];")"!=S(a.a);){W(a,"Missing function argument list.");d.push(Cb(a));if(","!=S(a.a))break;T(a.a)}W(a,"Unclosed function argument list.");Fb(a);b=new ab(b,d)}else{b=null;break a}else b=new Ab(+T(a.a))}"["==S(a.a)&&(d=new sb(Jb(a)),b=new Za(b,d))}if(b)if(ob(S(a.a)))d=b;else return b;else b=Ib(a,"/"),d=new nb,c.push(b)}for(;ob(S(a.a));)b=T(a.a),W(a,"Missing next location step."),b=Ib(a,b),c.push(b);return new kb(d,c)}
function Ib(a,b){var c,d,e;if("/"!=b&&"//"!=b)throw Error('Step op should be "/" or "//"');if("."==S(a.a))return d=new U(yb,new G("node")),T(a.a),d;if(".."==S(a.a))return d=new U(xb,new G("node")),T(a.a),d;var f;if("@"==S(a.a))f=lb,T(a.a),W(a,"Missing attribute name");else if("::"==S(a.a,1)){if(!/(?![0-9])[\w]/.test(S(a.a).charAt(0)))throw Error("Bad token: "+T(a.a));c=T(a.a);f=wb[c]||null;if(!f)throw Error("No axis with name: "+c);T(a.a);W(a,"Missing node name")}else f=tb;c=S(a.a);if(/(?![0-9])[\w\*]/.test(c.charAt(0)))if("("==
S(a.a,1)){if(!db(c))throw Error("Invalid node type: "+c);c=T(a.a);if(!db(c))throw Error("Invalid type name: "+c);Eb(a,"(");W(a,"Bad nodetype");e=S(a.a).charAt(0);var g=null;if('"'==e||"'"==e)g=Gb(a);W(a,"Bad nodetype");Fb(a);c=new G(c,g)}else if(c=T(a.a),e=c.indexOf(":"),-1==e)c=new E(c);else{var g=c.substring(0,e),h;if("*"==g)h="*";else if(h=a.b(g),!h)throw Error("Namespace prefix not declared: "+g);c=c.substr(e+1);c=new E(c,h)}else throw Error("Bad token: "+T(a.a));e=new sb(Jb(a),f.a);return d||
new U(f,c,e,"//"==b)}function Jb(a){for(var b=[];"["==S(a.a);){T(a.a);W(a,"Missing predicate expression.");var c=Cb(a);b.push(c);W(a,"Unclosed predicate expression.");Eb(a,"]")}return b}function Db(a){if("-"==S(a.a))return T(a.a),new zb(Db(a));var b=Hb(a);if("|"!=S(a.a))a=b;else{for(b=[b];"|"==T(a.a);)W(a,"Missing next union location path."),b.push(Hb(a));a.a.a--;a=new rb(b)}return a};function Kb(a){switch(a.nodeType){case 1:return ea(Lb,a);case 9:return Kb(a.documentElement);case 11:case 10:case 6:case 12:return Mb;default:return a.parentNode?Kb(a.parentNode):Mb}}function Mb(){return null}function Lb(a,b){if(a.prefix==b)return a.namespaceURI||"http://www.w3.org/1999/xhtml";var c=a.getAttributeNode("xmlns:"+b);return c&&c.specified?c.value||null:a.parentNode&&9!=a.parentNode.nodeType?Lb(a.parentNode,b):null};function Nb(a,b){if(!a.length)throw Error("Empty XPath expression.");var c=fb(a);if(ib(c))throw Error("Invalid XPath expression.");b?"function"==aa(b)||(b=da(b.lookupNamespaceURI,b)):b=function(){return null};var d=Cb(new Bb(c,b));if(!ib(c))throw Error("Bad token: "+T(c));this.evaluate=function(a,b){var c=d.a(new Q(a));return new Y(c,b)}}
function Y(a,b){if(0==b)if(a instanceof C)b=4;else if("string"==typeof a)b=2;else if("number"==typeof a)b=1;else if("boolean"==typeof a)b=3;else throw Error("Unexpected evaluation result.");if(2!=b&&1!=b&&3!=b&&!(a instanceof C))throw Error("value could not be converted to the specified type");this.resultType=b;var c;switch(b){case 2:this.stringValue=a instanceof C?Sa(a):""+a;break;case 1:this.numberValue=a instanceof C?+Sa(a):+a;break;case 3:this.booleanValue=a instanceof C?0<a.l:!!a;break;case 4:case 5:case 6:case 7:var d=
H(a);c=[];for(var e=I(d);e;e=I(d))c.push(e instanceof x?e.a:e);this.snapshotLength=a.l;this.invalidIteratorState=!1;break;case 8:case 9:d=Ra(a);this.singleNodeValue=d instanceof x?d.a:d;break;default:throw Error("Unknown XPathResult type.");}var f=0;this.iterateNext=function(){if(4!=b&&5!=b)throw Error("iterateNext called with wrong result type");return f>=c.length?null:c[f++]};this.snapshotItem=function(a){if(6!=b&&7!=b)throw Error("snapshotItem called with wrong result type");return a>=c.length||
0>a?null:c[a]}}Y.ANY_TYPE=0;Y.NUMBER_TYPE=1;Y.STRING_TYPE=2;Y.BOOLEAN_TYPE=3;Y.UNORDERED_NODE_ITERATOR_TYPE=4;Y.ORDERED_NODE_ITERATOR_TYPE=5;Y.UNORDERED_NODE_SNAPSHOT_TYPE=6;Y.ORDERED_NODE_SNAPSHOT_TYPE=7;Y.ANY_UNORDERED_NODE_TYPE=8;Y.FIRST_ORDERED_NODE_TYPE=9;function Ob(a){this.lookupNamespaceURI=Kb(a)}
function Pb(a,b){var c=a||k,d=c.Document&&c.Document.prototype||c.document;if(!d.evaluate||b)c.XPathResult=Y,d.evaluate=function(a,b,c,d){return(new Nb(a,c)).evaluate(b,d)},d.createExpression=function(a,b){return new Nb(a,b)},d.createNSResolver=function(a){return new Ob(a)}}var Qb=["wgxpath","install"],Z=k;Qb[0]in Z||!Z.execScript||Z.execScript("var "+Qb[0]);for(var Rb;Qb.length&&(Rb=Qb.shift());)Qb.length||void 0===Pb?Z[Rb]?Z=Z[Rb]:Z=Z[Rb]={}:Z[Rb]=Pb;module.exports.install=Pb;module.exports.XPathResultType={ANY_TYPE:0,NUMBER_TYPE:1,STRING_TYPE:2,BOOLEAN_TYPE:3,UNORDERED_NODE_ITERATOR_TYPE:4,ORDERED_NODE_ITERATOR_TYPE:5,UNORDERED_NODE_SNAPSHOT_TYPE:6,ORDERED_NODE_SNAPSHOT_TYPE:7,ANY_UNORDERED_NODE_TYPE:8,FIRST_ORDERED_NODE_TYPE:9};}).call(__webpack_require__.g)


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";

// UNUSED EXPORTS: Sre

// NAMESPACE OBJECT: ./mjs/a11y/sre.js
var sre_namespaceObject = {};
__webpack_require__.r(sre_namespaceObject);
__webpack_require__.d(sre_namespaceObject, {
  addPreference: () => (sre_addPreference),
  engineSetup: () => (engineSetup),
  fromPreference: () => (sre_fromPreference),
  locales: () => (locales),
  parseDOM: () => (parseDOM),
  setupEngine: () => (setupEngine),
  toEnriched: () => (toEnriched),
  toPreference: () => (sre_toPreference)
});

;// ./components/mjs/core/lib/components/global.js
const g = (typeof window !== 'undefined' ? window : global);
const def = g.MathJax._.components.global;
const GLOBAL = def.GLOBAL;
const isObject = def.isObject;
const combineConfig = def.combineConfig;
const combineDefaults = def.combineDefaults;
const combineWithMathJax = def.combineWithMathJax;
const global_MathJax = def.MathJax;

;// ./mjs/components/version.js
const VERSION = '4.0.0';
//# sourceMappingURL=version.js.map
;// ./node_modules/.pnpm/speech-rule-engine@5.0.0-beta.1/node_modules/speech-rule-engine/js/rule_engine/dynamic_cstr.js
var Axis;
(function (Axis) {
    Axis["DOMAIN"] = "domain";
    Axis["STYLE"] = "style";
    Axis["LOCALE"] = "locale";
    Axis["TOPIC"] = "topic";
    Axis["MODALITY"] = "modality";
})(Axis || (Axis = {}));
class DynamicProperties {
    static createProp(...cstrList) {
        const axes = DynamicCstr.DEFAULT_ORDER;
        const dynamicCstr = {};
        for (let i = 0, l = cstrList.length, k = axes.length; i < l && i < k; i++) {
            dynamicCstr[axes[i]] = cstrList[i];
        }
        return new DynamicProperties(dynamicCstr);
    }
    constructor(properties, order = Object.keys(properties)) {
        this.properties = properties;
        this.order = order;
    }
    getProperties() {
        return this.properties;
    }
    getOrder() {
        return this.order;
    }
    getAxes() {
        return this.order;
    }
    getProperty(key) {
        return this.properties[key];
    }
    updateProperties(props) {
        this.properties = props;
    }
    allProperties() {
        const propLists = [];
        this.order.forEach((key) => propLists.push(this.getProperty(key).slice()));
        return propLists;
    }
    toString() {
        const cstrStrings = [];
        this.order.forEach((key) => cstrStrings.push(key + ': ' + this.getProperty(key).toString()));
        return cstrStrings.join('\n');
    }
}
class DynamicCstr extends DynamicProperties {
    static createCstr(...cstrList) {
        const axes = DynamicCstr.DEFAULT_ORDER;
        const dynamicCstr = {};
        for (let i = 0, l = cstrList.length, k = axes.length; i < l && i < k; i++) {
            dynamicCstr[axes[i]] = cstrList[i];
        }
        return new DynamicCstr(dynamicCstr);
    }
    static defaultCstr() {
        return DynamicCstr.createCstr.apply(null, DynamicCstr.DEFAULT_ORDER.map(function (x) {
            return DynamicCstr.DEFAULT_VALUES[x];
        }));
    }
    static validOrder(order) {
        const axes = DynamicCstr.DEFAULT_ORDER.slice();
        return order.every((x) => {
            const index = axes.indexOf(x);
            return index !== -1 && axes.splice(index, 1);
        });
    }
    constructor(components_, order) {
        const properties = {};
        for (const [key, value] of Object.entries(components_)) {
            properties[key] = [value];
        }
        super(properties, order);
        this.components = components_;
    }
    getComponents() {
        return this.components;
    }
    getValue(key) {
        return this.components[key];
    }
    getValues() {
        return this.order.map((key) => this.getValue(key));
    }
    allProperties() {
        const propLists = super.allProperties();
        for (let i = 0, props, key; (props = propLists[i]), (key = this.order[i]); i++) {
            const value = this.getValue(key);
            if (props.indexOf(value) === -1) {
                props.unshift(value);
            }
        }
        return propLists;
    }
    toString() {
        return this.getValues().join('.');
    }
    equal(cstr) {
        const keys1 = cstr.getAxes();
        if (this.order.length !== keys1.length) {
            return false;
        }
        for (let j = 0, key; (key = keys1[j]); j++) {
            const comp2 = this.getValue(key);
            if (!comp2 || cstr.getValue(key) !== comp2) {
                return false;
            }
        }
        return true;
    }
}
DynamicCstr.DEFAULT_ORDER = [
    Axis.LOCALE,
    Axis.MODALITY,
    Axis.DOMAIN,
    Axis.STYLE,
    Axis.TOPIC
];
DynamicCstr.BASE_LOCALE = 'base';
DynamicCstr.DEFAULT_VALUE = 'default';
DynamicCstr.DEFAULT_VALUES = {
    [Axis.LOCALE]: 'en',
    [Axis.DOMAIN]: DynamicCstr.DEFAULT_VALUE,
    [Axis.STYLE]: DynamicCstr.DEFAULT_VALUE,
    [Axis.TOPIC]: DynamicCstr.DEFAULT_VALUE,
    [Axis.MODALITY]: 'speech'
};
class DynamicCstrParser {
    constructor(order) {
        this.order = order;
    }
    parse(str) {
        const order = str.split('.');
        const cstr = {};
        if (order.length > this.order.length) {
            throw new Error('Invalid dynamic constraint: ' + cstr);
        }
        let j = 0;
        for (let i = 0, key; (key = this.order[i]), order.length; i++, j++) {
            const value = order.shift();
            cstr[key] = value;
        }
        return new DynamicCstr(cstr, this.order.slice(0, j));
    }
}
class DefaultComparator {
    constructor(reference, fallback = new DynamicProperties(reference.getProperties(), reference.getOrder())) {
        this.reference = reference;
        this.fallback = fallback;
        this.order = this.reference.getOrder();
    }
    getReference() {
        return this.reference;
    }
    setReference(cstr, props) {
        this.reference = cstr;
        this.fallback =
            props || new DynamicProperties(cstr.getProperties(), cstr.getOrder());
        this.order = this.reference.getOrder();
    }
    match(cstr) {
        const keys1 = cstr.getAxes();
        return (keys1.length === this.reference.getAxes().length &&
            keys1.every((key) => {
                const value = cstr.getValue(key);
                return (value === this.reference.getValue(key) ||
                    this.fallback.getProperty(key).indexOf(value) !== -1);
            }));
    }
    compare(cstr1, cstr2) {
        let ignore = false;
        for (let i = 0, key; (key = this.order[i]); i++) {
            const value1 = cstr1.getValue(key);
            const value2 = cstr2.getValue(key);
            if (!ignore) {
                const ref = this.reference.getValue(key);
                if (ref === value1 && ref !== value2) {
                    return -1;
                }
                if (ref === value2 && ref !== value1) {
                    return 1;
                }
                if (ref === value1 && ref === value2) {
                    continue;
                }
                if (ref !== value1 && ref !== value2) {
                    ignore = true;
                }
            }
            const prop = this.fallback.getProperty(key);
            const index1 = prop.indexOf(value1);
            const index2 = prop.indexOf(value2);
            if (index1 < index2) {
                return -1;
            }
            if (index2 < index1) {
                return 1;
            }
        }
        return 0;
    }
    toString() {
        return this.reference.toString() + '\n' + this.fallback.toString();
    }
}
//# sourceMappingURL=dynamic_cstr.js.map
;// ./node_modules/.pnpm/speech-rule-engine@5.0.0-beta.1/node_modules/speech-rule-engine/js/common/engine_const.js
var Mode;
(function (Mode) {
    Mode["SYNC"] = "sync";
    Mode["ASYNC"] = "async";
    Mode["HTTP"] = "http";
})(Mode || (Mode = {}));
var personalityProps;
(function (personalityProps) {
    personalityProps["PITCH"] = "pitch";
    personalityProps["RATE"] = "rate";
    personalityProps["VOLUME"] = "volume";
    personalityProps["PAUSE"] = "pause";
    personalityProps["JOIN"] = "join";
    personalityProps["LAYOUT"] = "layout";
})(personalityProps || (personalityProps = {}));
const personalityPropList = [
    personalityProps.PITCH,
    personalityProps.RATE,
    personalityProps.VOLUME,
    personalityProps.PAUSE,
    personalityProps.JOIN
];
var Speech;
(function (Speech) {
    Speech["NONE"] = "none";
    Speech["SHALLOW"] = "shallow";
    Speech["DEEP"] = "deep";
})(Speech || (Speech = {}));
var Markup;
(function (Markup) {
    Markup["NONE"] = "none";
    Markup["LAYOUT"] = "layout";
    Markup["COUNTING"] = "counting";
    Markup["PUNCTUATION"] = "punctuation";
    Markup["SSML"] = "ssml";
    Markup["ACSS"] = "acss";
    Markup["SABLE"] = "sable";
    Markup["VOICEXML"] = "voicexml";
})(Markup || (Markup = {}));
const DOMAIN_TO_STYLES = {
    mathspeak: 'default',
    clearspeak: 'default'
};
//# sourceMappingURL=engine_const.js.map
// EXTERNAL MODULE: ./node_modules/.pnpm/speech-rule-engine@5.0.0-beta.1/node_modules/speech-rule-engine/js/common/system_external.js
var system_external = __webpack_require__(74);
;// ./node_modules/.pnpm/speech-rule-engine@5.0.0-beta.1/node_modules/speech-rule-engine/js/common/file_util.js

function makePath(path) {
    return path.match('/$') ? path : path + '/';
}
function localePath(locale, ext = 'json') {
    return (makePath(SystemExternal.jsonPath) +
        locale +
        (ext.match(/^\./) ? ext : '.' + ext));
}
//# sourceMappingURL=file_util.js.map
;// ./node_modules/.pnpm/speech-rule-engine@5.0.0-beta.1/node_modules/speech-rule-engine/js/common/debugger.js

class Debugger {
    static getInstance() {
        Debugger.instance = Debugger.instance || new Debugger();
        return Debugger.instance;
    }
    init(opt_file) {
        if (opt_file) {
            this.startDebugFile_(opt_file);
        }
        this.isActive_ = true;
        return this.fileHandle;
    }
    output(...args) {
        if (this.isActive_) {
            this.output_(args);
        }
    }
    generate(func) {
        if (this.isActive_) {
            this.output_(func.apply(func, []));
        }
    }
    exit(callback = () => { }) {
        this.fileHandle.then(() => {
            if (this.isActive_ && this.stream_) {
                this.stream_.end('', '', callback);
            }
        });
    }
    constructor() {
        this.isActive_ = false;
        this.fileHandle = Promise.resolve();
        this.stream_ = null;
    }
    startDebugFile_(filename) {
        this.fileHandle = system_external/* SystemExternal */.f.fs.promises.open(filename, 'w');
        this.fileHandle = this.fileHandle.then((handle) => {
            this.stream_ = handle.createWriteStream(filename);
            this.outputFunction = function (...args) {
                this.stream_.write(args.join(' '));
                this.stream_.write('\n');
            }.bind(this);
            this.stream_.on('error', function (_error) {
                console.info('Invalid log file. Debug information sent to console.');
                this.outputFunction = console.info;
            }.bind(this));
            this.stream_.on('finish', function () {
                console.info('Finalizing debug file.');
            });
        });
    }
    output_(outputList) {
        if (this.stream_) {
            this.fileHandle.then(() => this.outputFunction.apply(this.outputFunction, ['Speech Rule Engine Debugger:'].concat(outputList)));
            return;
        }
        console.info.apply(console, ['Speech Rule Engine Debugger:'].concat(outputList));
    }
}
//# sourceMappingURL=debugger.js.map
// EXTERNAL MODULE: ./node_modules/.pnpm/speech-rule-engine@5.0.0-beta.1/node_modules/speech-rule-engine/js/common/variables.js
var variables = __webpack_require__(714);
;// ./node_modules/.pnpm/speech-rule-engine@5.0.0-beta.1/node_modules/speech-rule-engine/js/common/options.js


class Options {
    constructor(options = {}) {
        this.delay = false;
        this.domain = 'clearspeak';
        this.style = DynamicCstr.DEFAULT_VALUES[Axis.STYLE];
        this.locale = DynamicCstr.DEFAULT_VALUES[Axis.LOCALE];
        this.subiso = '';
        this.modality = DynamicCstr.DEFAULT_VALUES[Axis.MODALITY];
        this.speech = Speech.NONE;
        this.markup = Markup.NONE;
        this.mark = true;
        this.automark = false;
        this.character = true;
        this.cleanpause = true;
        this.cayleyshort = true;
        this.linebreaks = false;
        this.rate = '100';
        this.walker = 'Table';
        this.structure = false;
        this.aria = false;
        this.tree = false;
        this.strict = false;
        this.pprint = false;
        this.rules = '';
        this.prune = '';
        this.set(options);
    }
    set(options) {
        this.ensureDomain(options);
        for (const [option, value] of Object.entries(options)) {
            if (Options.BINARY_FEATURES.includes(option) ||
                Options.STRING_FEATURES.includes(option)) {
                this[option] = value;
                continue;
            }
        }
    }
    json() {
        const features = {};
        const engineFeatures = [].concat(Options.STRING_FEATURES, Options.BINARY_FEATURES);
        engineFeatures.forEach((x) => (features[x] = this[x]));
        return features;
    }
    ensureDomain(feature) {
        if ((feature.modality && feature.modality !== 'speech') ||
            (!feature.modality && this.modality !== 'speech')) {
            return;
        }
        if (!feature.domain && !feature.locale) {
            return;
        }
        if (feature.domain === 'default') {
            feature.domain = 'mathspeak';
            return;
        }
        const locale = (feature.locale || this.locale);
        const domain = (feature.domain || this.domain);
        if (MATHSPEAK_ONLY.indexOf(locale) !== -1 && domain !== 'mathspeak') {
            feature.domain = 'mathspeak';
            return;
        }
        if (locale === 'en') {
            if (EN_RULES.indexOf(domain) === -1) {
                feature.domain = 'mathspeak';
            }
            return;
        }
        if (domain !== 'mathspeak' && domain !== 'clearspeak') {
            feature.domain = 'mathspeak';
        }
    }
}
Options.BINARY_FEATURES = [
    'automark',
    'mark',
    'character',
    'cleanpause',
    'strict',
    'structure',
    'aria',
    'pprint',
    'cayleyshort',
    'linebreaks',
    'tree'
];
Options.STRING_FEATURES = [
    'markup',
    'style',
    'domain',
    'speech',
    'walker',
    'locale',
    'delay',
    'modality',
    'rate',
    'rules',
    'subiso',
    'prune'
];
const MATHSPEAK_ONLY = ['ca', 'da', 'es'];
const EN_RULES = [
    'chromevox',
    'clearspeak',
    'mathspeak',
    'emacspeak',
    'html'
];
//# sourceMappingURL=options.js.map
;// ./node_modules/.pnpm/speech-rule-engine@5.0.0-beta.1/node_modules/speech-rule-engine/js/common/engine.js







class SREError extends Error {
    constructor(message = '') {
        super();
        this.message = message;
        this.name = 'SRE Error';
    }
}
class Engine {
    set defaultLocale(loc) {
        this._defaultLocale = variables/* Variables */.u.ensureLocale(loc, this._defaultLocale);
    }
    get defaultLocale() {
        return this._defaultLocale;
    }
    static getInstance() {
        Engine.instance = Engine.instance || new Engine();
        return Engine.instance;
    }
    static defaultEvaluator(str, _cstr) {
        return str;
    }
    static evaluateNode(node) {
        return Engine.nodeEvaluator(node);
    }
    getRate() {
        const numeric = parseInt(this.options.rate, 10);
        return isNaN(numeric) ? 100 : numeric;
    }
    setDynamicCstr(opt_dynamic) {
        if (this.defaultLocale) {
            DynamicCstr.DEFAULT_VALUES[Axis.LOCALE] = this.defaultLocale;
        }
        if (opt_dynamic) {
            const keys = Object.keys(opt_dynamic);
            for (let i = 0; i < keys.length; i++) {
                const feature = keys[i];
                if (DynamicCstr.DEFAULT_ORDER.indexOf(feature) !== -1) {
                    const value = opt_dynamic[feature];
                    this.options[feature] = value;
                }
            }
        }
        const dynamic = [
            this.options.locale,
            this.options.modality,
            this.options.domain,
            this.options.style
        ].join('.');
        const fallback = DynamicProperties.createProp([DynamicCstr.DEFAULT_VALUES[Axis.LOCALE]], [DynamicCstr.DEFAULT_VALUES[Axis.MODALITY]], [DynamicCstr.DEFAULT_VALUES[Axis.DOMAIN]], [DynamicCstr.DEFAULT_VALUES[Axis.STYLE]]);
        const comparator = this.comparators[this.options.domain];
        const parser = this.parsers[this.options.domain];
        this.parser = parser ? parser : this.defaultParser;
        this.dynamicCstr = this.parser.parse(dynamic);
        this.dynamicCstr.updateProperties(fallback.getProperties());
        this.comparator = comparator
            ? comparator()
            : new DefaultComparator(this.dynamicCstr);
    }
    constructor() {
        this.options = new Options();
        this.config = false;
        this.customLoader = null;
        this.parsers = {};
        this.comparator = null;
        this.mode = Mode.SYNC;
        this.init = true;
        this.comparators = {};
        this._defaultLocale = DynamicCstr.DEFAULT_VALUES[Axis.LOCALE];
        this.options.locale = this.defaultLocale;
        this.evaluator = Engine.defaultEvaluator;
        this.defaultParser = new DynamicCstrParser(DynamicCstr.DEFAULT_ORDER);
        this.parser = this.defaultParser;
        this.dynamicCstr = DynamicCstr.defaultCstr();
    }
    configurate(feature) {
        if (this.mode === Mode.HTTP &&
            !system_external/* SystemExternal */.f.webworker &&
            !this.config) {
            configBlocks(feature);
            this.config = true;
        }
        configFeature(feature);
    }
    setCustomLoader(fn) {
        if (fn) {
            this.customLoader = fn;
        }
    }
    setup(feature) {
        if (typeof feature['mode'] !== 'undefined') {
            this.mode = feature['mode'];
        }
        this.configurate(feature);
        this.options.set(feature);
        if (feature.json) {
            system_external/* SystemExternal */.f.jsonPath = makePath(feature.json);
        }
        this.setCustomLoader(feature.custom);
    }
    json() {
        return Object.assign({ mode: this.mode }, this.options.json());
    }
    reset() {
        this.options = new Options();
    }
}
Engine.nodeEvaluator = function (_node) {
    return [];
};
function configFeature(feature) {
    if (typeof SREfeature !== 'undefined') {
        for (const [name, feat] of Object.entries(SREfeature)) {
            feature[name] = feat;
        }
    }
}
function configBlocks(feature) {
    const scripts = document.documentElement.querySelectorAll('script[type="text/x-sre-config"]');
    for (let i = 0, m = scripts.length; i < m; i++) {
        let inner;
        try {
            inner = scripts[i].innerHTML;
            const config = JSON.parse(inner);
            for (const [key, val] of Object.entries(config)) {
                feature[key] = val;
            }
        }
        catch (_err) {
            Debugger.getInstance().output('Illegal configuration ', inner);
        }
    }
}
class engine_EnginePromise {
    static get(locale = Engine.getInstance().options.locale) {
        return engine_EnginePromise.promises[locale] || Promise.resolve('');
    }
    static getall() {
        return Promise.all(Object.values(engine_EnginePromise.promises));
    }
}
engine_EnginePromise.loaded = {};
engine_EnginePromise.promises = {};
//# sourceMappingURL=engine.js.map
;// ./node_modules/.pnpm/speech-rule-engine@5.0.0-beta.1/node_modules/speech-rule-engine/js/common/xpath_util.js



const xpath = system_external/* SystemExternal */.f.xpath;
const nameSpaces = {
    xhtml: 'http://www.w3.org/1999/xhtml',
    mathml: 'http://www.w3.org/1998/Math/MathML',
    mml: 'http://www.w3.org/1998/Math/MathML',
    svg: 'http://www.w3.org/2000/svg'
};
function resolveNameSpace(prefix) {
    return nameSpaces[prefix] || null;
}
class Resolver {
    constructor() {
        this.lookupNamespaceURI = resolveNameSpace;
    }
}
function evaluateXpath(expression, rootNode, type) {
    return xpath.evaluate(expression, rootNode, new Resolver(), type, null);
}
function evalXPath(expression, rootNode) {
    let iterator;
    try {
        iterator = evaluateXpath(expression, rootNode, xpath.result.ORDERED_NODE_ITERATOR_TYPE);
    }
    catch (_err) {
        return [];
    }
    const results = [];
    for (let xpathNode = iterator.iterateNext(); xpathNode; xpathNode = iterator.iterateNext()) {
        results.push(xpathNode);
    }
    return results;
}
function evaluateBoolean(expression, rootNode) {
    let result;
    try {
        result = evaluateXpath(expression, rootNode, xpath.result.BOOLEAN_TYPE);
    }
    catch (_err) {
        return false;
    }
    return result.booleanValue;
}
function evaluateString(expression, rootNode) {
    let result;
    try {
        result = evaluateXpath(expression, rootNode, xpath.result.STRING_TYPE);
    }
    catch (_err) {
        return '';
    }
    return result.stringValue;
}
function updateEvaluator(node) {
    if (Engine.getInstance().mode !== Mode.HTTP)
        return;
    let parent = node;
    while (parent && !parent.evaluate) {
        parent = parent.parentNode;
    }
    if (parent && parent.evaluate) {
        xpath.currentDocument = parent;
    }
    else if (node.ownerDocument) {
        xpath.currentDocument = node.ownerDocument;
    }
}
//# sourceMappingURL=xpath_util.js.map
;// ./node_modules/.pnpm/speech-rule-engine@5.0.0-beta.1/node_modules/speech-rule-engine/js/common/dom_util.js




function toArray(nodeList) {
    const nodeArray = [];
    for (let i = 0, m = nodeList.length; i < m; i++) {
        nodeArray.push(nodeList[i]);
    }
    return nodeArray;
}
function trimInput(input) {
    input = input.replace(/&nbsp;/g, ' ');
    return input.replace(/>[ \f\n\r\t\v\u200b]+</g, '><').trim();
}
function parseInput(input) {
    const dp = new system_external/* SystemExternal */.f.xmldom.DOMParser();
    const clean_input = trimInput(input);
    const allValues = clean_input.match(/&(?!lt|gt|amp|quot|apos)\w+;/g);
    const html = !!allValues;
    if (!clean_input) {
        throw new Error('Empty input!');
    }
    try {
        const doc = dp.parseFromString(clean_input, html ? 'text/html' : 'text/xml');
        if (Engine.getInstance().mode === Mode.HTTP) {
            xpath.currentDocument = doc;
            return (html ? doc.body.childNodes[0] : doc.documentElement);
        }
        return doc.documentElement;
    }
    catch (err) {
        throw new SREError('Illegal input: ' + err.message);
    }
}
var NodeType;
(function (NodeType) {
    NodeType[NodeType["ELEMENT_NODE"] = 1] = "ELEMENT_NODE";
    NodeType[NodeType["ATTRIBUTE_NODE"] = 2] = "ATTRIBUTE_NODE";
    NodeType[NodeType["TEXT_NODE"] = 3] = "TEXT_NODE";
    NodeType[NodeType["CDATA_SECTION_NODE"] = 4] = "CDATA_SECTION_NODE";
    NodeType[NodeType["ENTITY_REFERENCE_NODE"] = 5] = "ENTITY_REFERENCE_NODE";
    NodeType[NodeType["ENTITY_NODE"] = 6] = "ENTITY_NODE";
    NodeType[NodeType["PROCESSING_INSTRUCTION_NODE"] = 7] = "PROCESSING_INSTRUCTION_NODE";
    NodeType[NodeType["COMMENT_NODE"] = 8] = "COMMENT_NODE";
    NodeType[NodeType["DOCUMENT_NODE"] = 9] = "DOCUMENT_NODE";
    NodeType[NodeType["DOCUMENT_TYPE_NODE"] = 10] = "DOCUMENT_TYPE_NODE";
    NodeType[NodeType["DOCUMENT_FRAGMENT_NODE"] = 11] = "DOCUMENT_FRAGMENT_NODE";
    NodeType[NodeType["NOTATION_NODE"] = 12] = "NOTATION_NODE";
})(NodeType || (NodeType = {}));
function replaceNode(oldNode, newNode) {
    if (!oldNode.parentNode) {
        return;
    }
    oldNode.parentNode.insertBefore(newNode, oldNode);
    oldNode.parentNode.removeChild(oldNode);
}
function createElement(tag) {
    return system_external/* SystemExternal */.f.document.createElement(tag);
}
function createElementNS(url, tag) {
    return SystemExternal.document.createElementNS(url, tag);
}
function createTextNode(content) {
    return system_external/* SystemExternal */.f.document.createTextNode(content);
}
function formatXml(xml) {
    let formatted = '';
    let reg = /(>)(<)(\/*)/g;
    xml = xml.replace(reg, '$1\r\n$2$3');
    let pad = 0;
    let split = xml.split('\r\n');
    reg = /(\.)*(<)(\/*)/g;
    split = split
        .map((x) => x.replace(reg, '$1\r\n$2$3').split('\r\n'))
        .reduce((x, y) => x.concat(y), []);
    while (split.length) {
        let node = split.shift();
        if (!node) {
            continue;
        }
        let indent = 0;
        if (node.match(/^<\w[^>/]*>[^>]+$/)) {
            const match = matchingStartEnd(node, split[0]);
            if (match[0]) {
                if (match[1]) {
                    node = node + split.shift().slice(0, -match[1].length);
                    if (match[1].trim()) {
                        split.unshift(match[1]);
                    }
                }
                else {
                    node = node + split.shift();
                }
            }
            else {
                indent = 1;
            }
        }
        else if (node.match(/^<\/\w/)) {
            if (pad !== 0) {
                pad -= 1;
            }
        }
        else if (node.match(/^<\w[^>]*[^/]>.*$/)) {
            indent = 1;
        }
        else if (node.match(/^<\w[^>]*\/>.+$/)) {
            const position = node.indexOf('>') + 1;
            const rest = node.slice(position);
            if (rest.trim()) {
                split.unshift();
            }
            node = node.slice(0, position) + rest;
        }
        else {
            indent = 0;
        }
        formatted += new Array(pad + 1).join('  ') + node + '\r\n';
        pad += indent;
    }
    return formatted;
}
function matchingStartEnd(start, end) {
    if (!end) {
        return [false, ''];
    }
    const tag1 = start.match(/^<([^> ]+).*>/);
    const tag2 = end.match(/^<\/([^>]+)>(.*)/);
    return tag1 && tag2 && tag1[1] === tag2[1] ? [true, tag2[2]] : [false, ''];
}
function querySelectorAllByAttr(node, attr) {
    return node.querySelectorAll
        ? toArray(node.querySelectorAll(`[${attr}]`))
        : XpathUtil.evalXPath(`.//*[@${attr}]`, node);
}
function querySelectorAllByAttrValue(node, attr, value) {
    return node.querySelectorAll
        ? toArray(node.querySelectorAll(`[${attr}="${value}"]`))
        : XpathUtil.evalXPath(`.//*[@${attr}="${value}"]`, node);
}
function querySelectorAll(node, tag) {
    return node.querySelectorAll
        ? toArray(node.querySelectorAll(tag))
        : XpathUtil.evalXPath(`.//${tag}`, node);
}
function dom_util_tagName(node) {
    return node.tagName.toUpperCase();
}
function cloneNode(node) {
    return node.cloneNode(true);
}
function serializeXml(node) {
    const xmls = new system_external/* SystemExternal */.f.xmldom.XMLSerializer();
    return xmls.serializeToString(node);
}
//# sourceMappingURL=dom_util.js.map
;// ./node_modules/.pnpm/speech-rule-engine@5.0.0-beta.1/node_modules/speech-rule-engine/js/semantic_tree/semantic_annotator.js
class SemanticAnnotator {
    constructor(domain, name, func) {
        this.domain = domain;
        this.name = name;
        this.func = func;
        this.active = false;
    }
    annotate(node) {
        node.childNodes.forEach(this.annotate.bind(this));
        node.contentNodes.forEach(this.annotate.bind(this));
        node.addAnnotation(this.domain, this.func(node));
    }
}
class SemanticVisitor {
    constructor(domain, name, func, def = {}) {
        this.domain = domain;
        this.name = name;
        this.func = func;
        this.def = def;
        this.active = false;
    }
    visit(node, info) {
        let result = this.func(node, info);
        node.addAnnotation(this.domain, result[0]);
        for (let i = 0, child; (child = node.childNodes[i]); i++) {
            result = this.visit(child, result[1]);
        }
        for (let i = 0, content; (content = node.contentNodes[i]); i++) {
            result = this.visit(content, result[1]);
        }
        return result;
    }
}
//# sourceMappingURL=semantic_annotator.js.map
;// ./node_modules/.pnpm/speech-rule-engine@5.0.0-beta.1/node_modules/speech-rule-engine/js/semantic_tree/semantic_annotations.js

const annotators = new Map();
const visitors = new Map();
function register(annotator) {
    const name = annotator.domain + ':' + annotator.name;
    annotator instanceof SemanticAnnotator
        ? annotators.set(name, annotator)
        : visitors.set(name, annotator);
}
function activate(domain, name) {
    const key = domain + ':' + name;
    const annotator = annotators.get(key) || visitors.get(key);
    if (annotator) {
        annotator.active = true;
    }
}
function deactivate(domain, name) {
    const key = domain + ':' + name;
    const annotator = annotators.get(key) || visitors.get(key);
    if (annotator) {
        annotator.active = false;
    }
}
function annotate(node) {
    for (const annotator of annotators.values()) {
        if (annotator.active) {
            annotator.annotate(node);
        }
    }
    for (const visitor of visitors.values()) {
        if (visitor.active) {
            visitor.visit(node, Object.assign({}, visitor.def));
        }
    }
}
//# sourceMappingURL=semantic_annotations.js.map
;// ./node_modules/.pnpm/speech-rule-engine@5.0.0-beta.1/node_modules/speech-rule-engine/js/speech_rules/alphabet.js
var Font;
(function (Font) {
    Font["BOLD"] = "bold";
    Font["BOLDFRAKTUR"] = "bold-fraktur";
    Font["BOLDITALIC"] = "bold-italic";
    Font["BOLDSCRIPT"] = "bold-script";
    Font["DOUBLESTRUCK"] = "double-struck";
    Font["DOUBLESTRUCKITALIC"] = "double-struck-italic";
    Font["FULLWIDTH"] = "fullwidth";
    Font["FRAKTUR"] = "fraktur";
    Font["ITALIC"] = "italic";
    Font["MONOSPACE"] = "monospace";
    Font["NORMAL"] = "normal";
    Font["SCRIPT"] = "script";
    Font["SANSSERIF"] = "sans-serif";
    Font["SANSSERIFITALIC"] = "sans-serif-italic";
    Font["SANSSERIFBOLD"] = "sans-serif-bold";
    Font["SANSSERIFBOLDITALIC"] = "sans-serif-bold-italic";
})(Font || (Font = {}));
var Embellish;
(function (Embellish) {
    Embellish["SUPER"] = "super";
    Embellish["SUB"] = "sub";
    Embellish["CIRCLED"] = "circled";
    Embellish["PARENTHESIZED"] = "parenthesized";
    Embellish["PERIOD"] = "period";
    Embellish["NEGATIVECIRCLED"] = "negative-circled";
    Embellish["DOUBLECIRCLED"] = "double-circled";
    Embellish["CIRCLEDSANSSERIF"] = "circled-sans-serif";
    Embellish["NEGATIVECIRCLEDSANSSERIF"] = "negative-circled-sans-serif";
    Embellish["COMMA"] = "comma";
    Embellish["SQUARED"] = "squared";
    Embellish["NEGATIVESQUARED"] = "negative-squared";
})(Embellish || (Embellish = {}));
var Base;
(function (Base) {
    Base["LATINCAP"] = "latinCap";
    Base["LATINSMALL"] = "latinSmall";
    Base["GREEKCAP"] = "greekCap";
    Base["GREEKSMALL"] = "greekSmall";
    Base["DIGIT"] = "digit";
})(Base || (Base = {}));
function num2str(num) {
    const str = num.toString(16).toUpperCase();
    return str.length > 3 ? str : ('000' + str).slice(-4);
}
function makeInterval([a, b], subst) {
    const start = parseInt(a, 16);
    const end = parseInt(b, 16);
    const result = [];
    for (let i = start; i <= end; i++) {
        let key = num2str(i);
        const sub = subst[key];
        if (sub === false) {
            continue;
        }
        key = subst[key] || key;
        result.push(key);
    }
    return result;
}
function makeCharInterval(int, subst = {}) {
    return makeInterval(int, subst).map((x) => String.fromCodePoint(parseInt(x, 16)));
}
function makeMultiInterval(ints) {
    let result = [];
    for (const int of ints) {
        if (Array.isArray(int)) {
            result = result.concat(makeCharInterval(int));
            continue;
        }
        result.push(String.fromCodePoint(parseInt(int, 16)));
    }
    return result;
}
function makeCodeInterval(ints) {
    let result = [];
    for (const int of ints) {
        if (Array.isArray(int)) {
            result = result.concat(makeInterval(int, {}).map((x) => parseInt(x, 16)));
            continue;
        }
        result.push(parseInt(int, 16));
    }
    return result;
}
const PROTO_INTERVALS = [
    {
        interval: ['1D400', '1D419'],
        base: Base.LATINCAP,
        subst: {},
        capital: true,
        category: 'Lu',
        font: Font.BOLD
    },
    {
        interval: ['1D41A', '1D433'],
        base: Base.LATINSMALL,
        subst: {},
        capital: false,
        category: 'Ll',
        font: Font.BOLD
    },
    {
        interval: ['1D56C', '1D585'],
        base: Base.LATINCAP,
        subst: {},
        capital: true,
        category: 'Lu',
        font: Font.BOLDFRAKTUR
    },
    {
        interval: ['1D586', '1D59F'],
        base: Base.LATINSMALL,
        subst: {},
        capital: false,
        category: 'Ll',
        font: Font.BOLDFRAKTUR
    },
    {
        interval: ['1D468', '1D481'],
        base: Base.LATINCAP,
        subst: {},
        capital: true,
        category: 'Lu',
        font: Font.BOLDITALIC
    },
    {
        interval: ['1D482', '1D49B'],
        base: Base.LATINSMALL,
        subst: {},
        capital: false,
        category: 'Ll',
        font: Font.BOLDITALIC
    },
    {
        interval: ['1D4D0', '1D4E9'],
        base: Base.LATINCAP,
        subst: {},
        capital: true,
        category: 'Lu',
        font: Font.BOLDSCRIPT
    },
    {
        interval: ['1D4EA', '1D503'],
        base: Base.LATINSMALL,
        subst: {},
        capital: false,
        category: 'Ll',
        font: Font.BOLDSCRIPT
    },
    {
        interval: ['1D538', '1D551'],
        base: Base.LATINCAP,
        subst: {
            '1D53A': '2102',
            '1D53F': '210D',
            '1D545': '2115',
            '1D547': '2119',
            '1D548': '211A',
            '1D549': '211D',
            '1D551': '2124'
        },
        capital: true,
        category: 'Lu',
        font: Font.DOUBLESTRUCK
    },
    {
        interval: ['1D552', '1D56B'],
        base: Base.LATINSMALL,
        subst: {},
        capital: false,
        category: 'Ll',
        font: Font.DOUBLESTRUCK
    },
    {
        interval: ['1D504', '1D51D'],
        base: Base.LATINCAP,
        subst: {
            '1D506': '212D',
            '1D50B': '210C',
            '1D50C': '2111',
            '1D515': '211C',
            '1D51D': '2128'
        },
        capital: true,
        category: 'Lu',
        font: Font.FRAKTUR
    },
    {
        interval: ['1D51E', '1D537'],
        base: Base.LATINSMALL,
        subst: {},
        capital: false,
        category: 'Ll',
        font: Font.FRAKTUR
    },
    {
        interval: ['FF21', 'FF3A'],
        base: Base.LATINCAP,
        subst: {},
        capital: true,
        category: 'Lu',
        font: Font.FULLWIDTH
    },
    {
        interval: ['FF41', 'FF5A'],
        base: Base.LATINSMALL,
        subst: {},
        capital: false,
        category: 'Ll',
        font: Font.FULLWIDTH
    },
    {
        interval: ['1D434', '1D44D'],
        base: Base.LATINCAP,
        subst: {},
        capital: true,
        category: 'Lu',
        font: Font.ITALIC
    },
    {
        interval: ['1D44E', '1D467'],
        base: Base.LATINSMALL,
        subst: { '1D455': '210E' },
        capital: false,
        category: 'Ll',
        font: Font.ITALIC
    },
    {
        interval: ['1D670', '1D689'],
        base: Base.LATINCAP,
        subst: {},
        capital: true,
        category: 'Lu',
        font: Font.MONOSPACE
    },
    {
        interval: ['1D68A', '1D6A3'],
        base: Base.LATINSMALL,
        subst: {},
        capital: false,
        category: 'Ll',
        font: Font.MONOSPACE
    },
    {
        interval: ['0041', '005A'],
        base: Base.LATINCAP,
        subst: {},
        capital: true,
        category: 'Lu',
        font: Font.NORMAL
    },
    {
        interval: ['0061', '007A'],
        base: Base.LATINSMALL,
        subst: {},
        capital: false,
        category: 'Ll',
        font: Font.NORMAL
    },
    {
        interval: ['1D49C', '1D4B5'],
        base: Base.LATINCAP,
        subst: {
            '1D49D': '212C',
            '1D4A0': '2130',
            '1D4A1': '2131',
            '1D4A3': '210B',
            '1D4A4': '2110',
            '1D4A7': '2112',
            '1D4A8': '2133',
            '1D4AD': '211B'
        },
        capital: true,
        category: 'Lu',
        font: Font.SCRIPT
    },
    {
        interval: ['1D4B6', '1D4CF'],
        base: Base.LATINSMALL,
        subst: { '1D4BA': '212F', '1D4BC': '210A', '1D4C4': '2134' },
        capital: false,
        category: 'Ll',
        font: Font.SCRIPT
    },
    {
        interval: ['1D5A0', '1D5B9'],
        base: Base.LATINCAP,
        subst: {},
        capital: true,
        category: 'Lu',
        font: Font.SANSSERIF
    },
    {
        interval: ['1D5BA', '1D5D3'],
        base: Base.LATINSMALL,
        subst: {},
        capital: false,
        category: 'Ll',
        font: Font.SANSSERIF
    },
    {
        interval: ['1D608', '1D621'],
        base: Base.LATINCAP,
        subst: {},
        capital: true,
        category: 'Lu',
        font: Font.SANSSERIFITALIC
    },
    {
        interval: ['1D622', '1D63B'],
        base: Base.LATINSMALL,
        subst: {},
        capital: false,
        category: 'Ll',
        font: Font.SANSSERIFITALIC
    },
    {
        interval: ['1D5D4', '1D5ED'],
        base: Base.LATINCAP,
        subst: {},
        capital: true,
        category: 'Lu',
        font: Font.SANSSERIFBOLD
    },
    {
        interval: ['1D5EE', '1D607'],
        base: Base.LATINSMALL,
        subst: {},
        capital: false,
        category: 'Ll',
        font: Font.SANSSERIFBOLD
    },
    {
        interval: ['1D63C', '1D655'],
        base: Base.LATINCAP,
        subst: {},
        capital: true,
        category: 'Lu',
        font: Font.SANSSERIFBOLDITALIC
    },
    {
        interval: ['1D656', '1D66F'],
        base: Base.LATINSMALL,
        subst: {},
        capital: false,
        category: 'Ll',
        font: Font.SANSSERIFBOLDITALIC
    },
    {
        interval: ['0391', '03A9'],
        base: Base.GREEKCAP,
        subst: { '03A2': '03F4' },
        capital: true,
        category: 'Lu',
        font: Font.NORMAL
    },
    {
        interval: ['03B0', '03D0'],
        base: Base.GREEKSMALL,
        subst: {
            '03B0': '2207',
            '03CA': '2202',
            '03CB': '03F5',
            '03CC': '03D1',
            '03CD': '03F0',
            '03CE': '03D5',
            '03CF': '03F1',
            '03D0': '03D6'
        },
        capital: false,
        category: 'Ll',
        font: Font.NORMAL
    },
    {
        interval: ['1D6A8', '1D6C0'],
        base: Base.GREEKCAP,
        subst: {},
        capital: true,
        category: 'Lu',
        font: Font.BOLD
    },
    {
        interval: ['1D6C1', '1D6E1'],
        base: Base.GREEKSMALL,
        subst: {},
        capital: false,
        category: 'Ll',
        font: Font.BOLD
    },
    {
        interval: ['1D6E2', '1D6FA'],
        base: Base.GREEKCAP,
        subst: {},
        capital: true,
        category: 'Lu',
        font: Font.ITALIC
    },
    {
        interval: ['1D6FB', '1D71B'],
        base: Base.GREEKSMALL,
        subst: {},
        capital: false,
        category: 'Ll',
        font: Font.ITALIC
    },
    {
        interval: ['1D71C', '1D734'],
        base: Base.GREEKCAP,
        subst: {},
        capital: true,
        category: 'Lu',
        font: Font.BOLDITALIC
    },
    {
        interval: ['1D735', '1D755'],
        base: Base.GREEKSMALL,
        subst: {},
        capital: false,
        category: 'Ll',
        font: Font.BOLDITALIC
    },
    {
        interval: ['1D756', '1D76E'],
        base: Base.GREEKCAP,
        subst: {},
        capital: true,
        category: 'Lu',
        font: Font.SANSSERIFBOLD
    },
    {
        interval: ['1D76F', '1D78F'],
        base: Base.GREEKSMALL,
        subst: {},
        capital: false,
        category: 'Ll',
        font: Font.SANSSERIFBOLD
    },
    {
        interval: ['1D790', '1D7A8'],
        base: Base.GREEKCAP,
        subst: {},
        capital: true,
        category: 'Lu',
        font: Font.SANSSERIFBOLDITALIC
    },
    {
        interval: ['1D7A9', '1D7C9'],
        base: Base.GREEKSMALL,
        subst: {},
        capital: false,
        category: 'Ll',
        font: Font.SANSSERIFBOLDITALIC
    },
    {
        interval: ['0030', '0039'],
        base: Base.DIGIT,
        subst: {},
        offset: 0,
        category: 'Nd',
        font: Font.NORMAL
    },
    {
        interval: ['2070', '2079'],
        base: Base.DIGIT,
        subst: { 2071: '00B9', 2072: '00B2', 2073: '00B3' },
        offset: 0,
        category: 'No',
        font: Embellish.SUPER
    },
    {
        interval: ['2080', '2089'],
        base: Base.DIGIT,
        subst: {},
        offset: 0,
        category: 'No',
        font: Embellish.SUB
    },
    {
        interval: ['245F', '2473'],
        base: Base.DIGIT,
        subst: { '245F': '24EA' },
        offset: 0,
        category: 'No',
        font: Embellish.CIRCLED
    },
    {
        interval: ['3251', '325F'],
        base: Base.DIGIT,
        subst: {},
        offset: 21,
        category: 'No',
        font: Embellish.CIRCLED
    },
    {
        interval: ['32B1', '32BF'],
        base: Base.DIGIT,
        subst: {},
        offset: 36,
        category: 'No',
        font: Embellish.CIRCLED
    },
    {
        interval: ['2474', '2487'],
        base: Base.DIGIT,
        subst: {},
        offset: 1,
        category: 'No',
        font: Embellish.PARENTHESIZED
    },
    {
        interval: ['2487', '249B'],
        base: Base.DIGIT,
        subst: { 2487: '1F100' },
        offset: 0,
        category: 'No',
        font: Embellish.PERIOD
    },
    {
        interval: ['2775', '277F'],
        base: Base.DIGIT,
        subst: { 2775: '24FF' },
        offset: 0,
        category: 'No',
        font: Embellish.NEGATIVECIRCLED
    },
    {
        interval: ['24EB', '24F4'],
        base: Base.DIGIT,
        subst: {},
        offset: 11,
        category: 'No',
        font: Embellish.NEGATIVECIRCLED
    },
    {
        interval: ['24F5', '24FE'],
        base: Base.DIGIT,
        subst: {},
        offset: 1,
        category: 'No',
        font: Embellish.DOUBLECIRCLED
    },
    {
        interval: ['277F', '2789'],
        base: Base.DIGIT,
        subst: { '277F': '1F10B' },
        offset: 0,
        category: 'No',
        font: Embellish.CIRCLEDSANSSERIF
    },
    {
        interval: ['2789', '2793'],
        base: Base.DIGIT,
        subst: { 2789: '1F10C' },
        offset: 0,
        category: 'No',
        font: Embellish.NEGATIVECIRCLEDSANSSERIF
    },
    {
        interval: ['FF10', 'FF19'],
        base: Base.DIGIT,
        subst: {},
        offset: 0,
        category: 'Nd',
        font: Font.FULLWIDTH
    },
    {
        interval: ['1D7CE', '1D7D7'],
        base: Base.DIGIT,
        subst: {},
        offset: 0,
        category: 'Nd',
        font: Font.BOLD
    },
    {
        interval: ['1D7D8', '1D7E1'],
        base: Base.DIGIT,
        subst: {},
        offset: 0,
        category: 'Nd',
        font: Font.DOUBLESTRUCK
    },
    {
        interval: ['1D7E2', '1D7EB'],
        base: Base.DIGIT,
        subst: {},
        offset: 0,
        category: 'Nd',
        font: Font.SANSSERIF
    },
    {
        interval: ['1D7EC', '1D7F5'],
        base: Base.DIGIT,
        subst: {},
        offset: 0,
        category: 'Nd',
        font: Font.SANSSERIFBOLD
    },
    {
        interval: ['1D7F6', '1D7FF'],
        base: Base.DIGIT,
        subst: {},
        offset: 0,
        category: 'Nd',
        font: Font.MONOSPACE
    },
    {
        interval: ['1F101', '1F10A'],
        base: Base.DIGIT,
        subst: {},
        offset: 0,
        category: 'No',
        font: Embellish.COMMA
    },
    {
        interval: ['24B6', '24CF'],
        base: Base.LATINCAP,
        subst: {},
        capital: true,
        category: 'So',
        font: Embellish.CIRCLED
    },
    {
        interval: ['24D0', '24E9'],
        base: Base.LATINSMALL,
        subst: {},
        capital: false,
        category: 'So',
        font: Embellish.CIRCLED
    },
    {
        interval: ['1F110', '1F129'],
        base: Base.LATINCAP,
        subst: {},
        capital: true,
        category: 'So',
        font: Embellish.PARENTHESIZED
    },
    {
        interval: ['249C', '24B5'],
        base: Base.LATINSMALL,
        subst: {},
        capital: false,
        category: 'So',
        font: Embellish.PARENTHESIZED
    },
    {
        interval: ['1F130', '1F149'],
        base: Base.LATINCAP,
        subst: {},
        capital: true,
        category: 'So',
        font: Embellish.SQUARED
    },
    {
        interval: ['1F170', '1F189'],
        base: Base.LATINCAP,
        subst: {},
        capital: true,
        category: 'So',
        font: Embellish.NEGATIVESQUARED
    },
    {
        interval: ['1F150', '1F169'],
        base: Base.LATINCAP,
        subst: {},
        capital: true,
        category: 'So',
        font: Embellish.NEGATIVECIRCLED
    }
];
const INTERVALS = new Map();
function alphabetName(base, font) {
    const capFont = font
        .split('-')
        .map((x) => x[0].toUpperCase() + x.slice(1))
        .join('');
    return base + capFont;
}
for (const proto of PROTO_INTERVALS) {
    const key = alphabetName(proto.base, proto.font);
    const interval = makeCharInterval(proto.interval, proto.subst);
    let alphabet = INTERVALS.get(key);
    if (alphabet) {
        alphabet.unicode = alphabet.unicode.concat(interval);
        continue;
    }
    alphabet = proto;
    alphabet.unicode = interval;
    INTERVALS.set(key, alphabet);
}
//# sourceMappingURL=alphabet.js.map
;// ./node_modules/.pnpm/speech-rule-engine@5.0.0-beta.1/node_modules/speech-rule-engine/js/semantic_tree/semantic_meaning.js

var Types;
(function (Types) {
    Types["PUNCTUATION"] = "punctuation";
    Types["FENCE"] = "fence";
    Types["NUMBER"] = "number";
    Types["IDENTIFIER"] = "identifier";
    Types["TEXT"] = "text";
    Types["OPERATOR"] = "operator";
    Types["RELATION"] = "relation";
    Types["LARGEOP"] = "largeop";
    Types["FUNCTION"] = "function";
    Types["ACCENT"] = "accent";
    Types["FENCED"] = "fenced";
    Types["FRACTION"] = "fraction";
    Types["PUNCTUATED"] = "punctuated";
    Types["RELSEQ"] = "relseq";
    Types["MULTIREL"] = "multirel";
    Types["INFIXOP"] = "infixop";
    Types["PREFIXOP"] = "prefixop";
    Types["POSTFIXOP"] = "postfixop";
    Types["APPL"] = "appl";
    Types["INTEGRAL"] = "integral";
    Types["BIGOP"] = "bigop";
    Types["SQRT"] = "sqrt";
    Types["ROOT"] = "root";
    Types["LIMUPPER"] = "limupper";
    Types["LIMLOWER"] = "limlower";
    Types["LIMBOTH"] = "limboth";
    Types["SUBSCRIPT"] = "subscript";
    Types["SUPERSCRIPT"] = "superscript";
    Types["UNDERSCORE"] = "underscore";
    Types["OVERSCORE"] = "overscore";
    Types["TENSOR"] = "tensor";
    Types["TABLE"] = "table";
    Types["MULTILINE"] = "multiline";
    Types["MATRIX"] = "matrix";
    Types["VECTOR"] = "vector";
    Types["CASES"] = "cases";
    Types["ROW"] = "row";
    Types["LINE"] = "line";
    Types["CELL"] = "cell";
    Types["ENCLOSE"] = "enclose";
    Types["INFERENCE"] = "inference";
    Types["RULELABEL"] = "rulelabel";
    Types["CONCLUSION"] = "conclusion";
    Types["PREMISES"] = "premises";
    Types["UNKNOWN"] = "unknown";
    Types["EMPTY"] = "empty";
})(Types || (Types = {}));
const semantic_meaning_SemanticType = Object.assign({}, Types);
var Roles;
(function (Roles) {
    Roles["COMMA"] = "comma";
    Roles["SEMICOLON"] = "semicolon";
    Roles["ELLIPSIS"] = "ellipsis";
    Roles["FULLSTOP"] = "fullstop";
    Roles["QUESTION"] = "question";
    Roles["EXCLAMATION"] = "exclamation";
    Roles["QUOTES"] = "quotes";
    Roles["DASH"] = "dash";
    Roles["TILDE"] = "tilde";
    Roles["PRIME"] = "prime";
    Roles["DEGREE"] = "degree";
    Roles["VBAR"] = "vbar";
    Roles["COLON"] = "colon";
    Roles["OPENFENCE"] = "openfence";
    Roles["CLOSEFENCE"] = "closefence";
    Roles["APPLICATION"] = "application";
    Roles["DUMMY"] = "dummy";
    Roles["UNIT"] = "unit";
    Roles["LABEL"] = "label";
    Roles["OPEN"] = "open";
    Roles["CLOSE"] = "close";
    Roles["TOP"] = "top";
    Roles["BOTTOM"] = "bottom";
    Roles["NEUTRAL"] = "neutral";
    Roles["METRIC"] = "metric";
    Roles["LATINLETTER"] = "latinletter";
    Roles["GREEKLETTER"] = "greekletter";
    Roles["OTHERLETTER"] = "otherletter";
    Roles["NUMBERSET"] = "numbersetletter";
    Roles["INTEGER"] = "integer";
    Roles["FLOAT"] = "float";
    Roles["OTHERNUMBER"] = "othernumber";
    Roles["INFTY"] = "infty";
    Roles["MIXED"] = "mixed";
    Roles["MULTIACCENT"] = "multiaccent";
    Roles["OVERACCENT"] = "overaccent";
    Roles["UNDERACCENT"] = "underaccent";
    Roles["UNDEROVER"] = "underover";
    Roles["SUBSUP"] = "subsup";
    Roles["LEFTSUB"] = "leftsub";
    Roles["LEFTSUPER"] = "leftsuper";
    Roles["RIGHTSUB"] = "rightsub";
    Roles["RIGHTSUPER"] = "rightsuper";
    Roles["LEFTRIGHT"] = "leftright";
    Roles["ABOVEBELOW"] = "abovebelow";
    Roles["INTERVAL"] = "interval";
    Roles["SETEMPTY"] = "set empty";
    Roles["SETEXT"] = "set extended";
    Roles["SETSINGLE"] = "set singleton";
    Roles["SETCOLLECT"] = "set collection";
    Roles["STRING"] = "string";
    Roles["SPACE"] = "space";
    Roles["ANNOTATION"] = "annotation";
    Roles["TEXT"] = "text";
    Roles["SEQUENCE"] = "sequence";
    Roles["ENDPUNCT"] = "endpunct";
    Roles["STARTPUNCT"] = "startpunct";
    Roles["NEGATIVE"] = "negative";
    Roles["POSITIVE"] = "positive";
    Roles["NEGATION"] = "negation";
    Roles["MULTIOP"] = "multiop";
    Roles["PREFIXOP"] = "prefix operator";
    Roles["POSTFIXOP"] = "postfix operator";
    Roles["LIMFUNC"] = "limit function";
    Roles["INFIXFUNC"] = "infix function";
    Roles["PREFIXFUNC"] = "prefix function";
    Roles["POSTFIXFUNC"] = "postfix function";
    Roles["SIMPLEFUNC"] = "simple function";
    Roles["COMPFUNC"] = "composed function";
    Roles["SUM"] = "sum";
    Roles["INTEGRAL"] = "integral";
    Roles["GEOMETRY"] = "geometry";
    Roles["BOX"] = "box";
    Roles["BLOCK"] = "block";
    Roles["ADDITION"] = "addition";
    Roles["MULTIPLICATION"] = "multiplication";
    Roles["SUBTRACTION"] = "subtraction";
    Roles["IMPLICIT"] = "implicit";
    Roles["DIVISION"] = "division";
    Roles["VULGAR"] = "vulgar";
    Roles["EQUALITY"] = "equality";
    Roles["INEQUALITY"] = "inequality";
    Roles["ARROW"] = "arrow";
    Roles["ELEMENT"] = "element";
    Roles["NONELEMENT"] = "nonelement";
    Roles["REELEMENT"] = "reelement";
    Roles["RENONELEMENT"] = "renonelement";
    Roles["SET"] = "set";
    Roles["DETERMINANT"] = "determinant";
    Roles["ROWVECTOR"] = "rowvector";
    Roles["BINOMIAL"] = "binomial";
    Roles["SQUAREMATRIX"] = "squarematrix";
    Roles["CYCLE"] = "cycle";
    Roles["MULTILINE"] = "multiline";
    Roles["MATRIX"] = "matrix";
    Roles["VECTOR"] = "vector";
    Roles["CASES"] = "cases";
    Roles["TABLE"] = "table";
    Roles["CAYLEY"] = "cayley";
    Roles["PROOF"] = "proof";
    Roles["LEFT"] = "left";
    Roles["RIGHT"] = "right";
    Roles["UP"] = "up";
    Roles["DOWN"] = "down";
    Roles["FINAL"] = "final";
    Roles["SINGLE"] = "single";
    Roles["HYP"] = "hyp";
    Roles["AXIOM"] = "axiom";
    Roles["LOGIC"] = "logic";
    Roles["UNKNOWN"] = "unknown";
    Roles["MGLYPH"] = "mglyph";
})(Roles || (Roles = {}));
const semantic_meaning_SemanticRole = Object.assign({}, Roles);
var ExtraFont;
(function (ExtraFont) {
    ExtraFont["CALIGRAPHIC"] = "caligraphic";
    ExtraFont["CALIGRAPHICBOLD"] = "caligraphic-bold";
    ExtraFont["OLDSTYLE"] = "oldstyle";
    ExtraFont["OLDSTYLEBOLD"] = "oldstyle-bold";
    ExtraFont["UNKNOWN"] = "unknown";
})(ExtraFont || (ExtraFont = {}));
const SemanticFont = Object.assign(Object.assign(Object.assign({}, Font), ExtraFont), Embellish);
var SecondaryEnum;
(function (SecondaryEnum) {
    SecondaryEnum["ALLLETTERS"] = "allLetters";
    SecondaryEnum["D"] = "d";
    SecondaryEnum["BAR"] = "bar";
    SecondaryEnum["TILDE"] = "tilde";
})(SecondaryEnum || (SecondaryEnum = {}));
const SemanticSecondary = Object.assign(Object.assign({}, Base), SecondaryEnum);
//# sourceMappingURL=semantic_meaning.js.map
;// ./node_modules/.pnpm/speech-rule-engine@5.0.0-beta.1/node_modules/speech-rule-engine/js/semantic_tree/semantic_attr.js
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};


const NamedSymbol = {
    functionApplication: String.fromCodePoint(0x2061),
    invisibleTimes: String.fromCodePoint(0x2062),
    invisibleComma: String.fromCodePoint(0x2063),
    invisiblePlus: String.fromCodePoint(0x2064)
};
class meaningMap extends Map {
    get(symbol) {
        return (super.get(symbol) || {
            role: semantic_meaning_SemanticRole.UNKNOWN,
            type: semantic_meaning_SemanticType.UNKNOWN,
            font: SemanticFont.UNKNOWN
        });
    }
}
class secondaryMap extends Map {
    set(char, kind, annotation = '') {
        super.set(this.secKey(kind, char), annotation || kind);
        return this;
    }
    has(char, kind) {
        return super.has(this.secKey(kind, char));
    }
    get(char, kind) {
        return super.get(this.secKey(kind, char));
    }
    secKey(kind, char) {
        return char ? `${kind} ${char}` : `${kind}`;
    }
}
const SemanticMap = {
    Meaning: new meaningMap(),
    Secondary: new secondaryMap(),
    FencesHoriz: new Map(),
    FencesVert: new Map(),
    LatexCommands: new Map()
};
function addMeaning(symbols, meaning) {
    for (const symbol of symbols) {
        SemanticMap.Meaning.set(symbol, {
            role: meaning.role || semantic_meaning_SemanticRole.UNKNOWN,
            type: meaning.type || semantic_meaning_SemanticType.UNKNOWN,
            font: meaning.font || SemanticFont.UNKNOWN
        });
        if (meaning.secondary) {
            SemanticMap.Secondary.set(symbol, meaning.secondary);
        }
    }
}
function initMeaning() {
    const sets = [
        {
            set: [
                '23',
                '26',
                '40',
                '5c',
                'a1',
                'a7',
                'b6',
                'bf',
                '2017',
                ['2022', '2025'],
                '2027',
                '203b',
                '203c',
                ['2041', '2043'],
                ['2047', '2049'],
                ['204b', '204d'],
                '2050',
                '2055',
                '2056',
                ['2058', '205e'],
                '2234',
                '2235',
                'fe45',
                'fe46',
                'fe5f',
                'fe60',
                'fe68',
                'fe6b',
                'ff03',
                'ff06',
                'ff0f',
                'ff20',
                'ff3c'
            ],
            type: semantic_meaning_SemanticType.PUNCTUATION,
            role: semantic_meaning_SemanticRole.UNKNOWN
        },
        {
            set: [
                '22',
                'ab',
                'bb',
                '2dd',
                ['2018', '201f'],
                '2039',
                '203a',
                ['301d', '301f'],
                'fe10',
                'ff02',
                'ff07'
            ],
            type: semantic_meaning_SemanticType.PUNCTUATION,
            role: semantic_meaning_SemanticRole.QUOTES
        },
        {
            set: ['3b', '204f', '2a1f', '2a3e', 'fe14', 'fe54', 'ff1b'],
            type: semantic_meaning_SemanticType.PUNCTUATION,
            role: semantic_meaning_SemanticRole.SEMICOLON
        },
        {
            set: ['3f', '203d', 'fe16', 'fe56', 'ff1f'],
            type: semantic_meaning_SemanticType.PUNCTUATION,
            role: semantic_meaning_SemanticRole.QUESTION
        },
        {
            set: ['21', 'fe15', 'fe57', 'ff01'],
            type: semantic_meaning_SemanticType.PUNCTUATION,
            role: semantic_meaning_SemanticRole.EXCLAMATION
        },
        {
            set: [
                '5e',
                '60',
                'a8',
                'aa',
                'b4',
                'ba',
                '2c7',
                ['2d8', '2da'],
                '2040',
                '207a',
                '207d',
                '207e',
                'ff3e',
                'ff40'
            ],
            type: semantic_meaning_SemanticType.PUNCTUATION,
            role: semantic_meaning_SemanticRole.OVERACCENT
        },
        {
            set: ['b8', '2db', '2038', '203f', '2054', '208a', '208d', '208e'],
            type: semantic_meaning_SemanticType.PUNCTUATION,
            role: semantic_meaning_SemanticRole.UNDERACCENT
        },
        {
            set: ['3a', '2982', 'fe13', 'fe30', 'fe55', 'ff1a'],
            type: semantic_meaning_SemanticType.PUNCTUATION,
            role: semantic_meaning_SemanticRole.COLON
        },
        {
            set: ['2c', '2063', 'fe50', 'ff0c'],
            type: semantic_meaning_SemanticType.PUNCTUATION,
            role: semantic_meaning_SemanticRole.COMMA
        },
        {
            set: ['2026', ['22ee', '22f1'], 'fe19'],
            type: semantic_meaning_SemanticType.PUNCTUATION,
            role: semantic_meaning_SemanticRole.ELLIPSIS
        },
        {
            set: ['2e', 'fe52', 'ff0e'],
            type: semantic_meaning_SemanticType.PUNCTUATION,
            role: semantic_meaning_SemanticRole.FULLSTOP
        },
        {
            set: ['2d', '207b', '208b', '2212', '2796', 'fe63', 'ff0d'],
            type: semantic_meaning_SemanticType.OPERATOR,
            role: semantic_meaning_SemanticRole.DASH,
            secondary: SemanticSecondary.BAR
        },
        {
            set: [
                '5f',
                'af',
                ['2010', '2015'],
                '203e',
                '208b',
                ['fe49', 'fe4f'],
                'fe58',
                'ff3f',
                'ffe3'
            ],
            type: semantic_meaning_SemanticType.PUNCTUATION,
            role: semantic_meaning_SemanticRole.DASH,
            secondary: SemanticSecondary.BAR
        },
        {
            set: [
                '7e',
                '2dc',
                '2f7',
                '303',
                '330',
                '334',
                '2053',
                '223c',
                '223d',
                '301c',
                'ff5e'
            ],
            type: semantic_meaning_SemanticType.OPERATOR,
            role: semantic_meaning_SemanticRole.TILDE,
            secondary: SemanticSecondary.TILDE
        },
        {
            set: ['27', '2b9', '2ba', ['2032', '2037'], '2057'],
            type: semantic_meaning_SemanticType.PUNCTUATION,
            role: semantic_meaning_SemanticRole.PRIME
        },
        {
            set: ['b0'],
            type: semantic_meaning_SemanticType.PUNCTUATION,
            role: semantic_meaning_SemanticRole.DEGREE
        },
        {
            set: [
                '2b',
                'b1',
                '2064',
                '2213',
                '2214',
                '2228',
                '222a',
                ['228c', '228e'],
                '2294',
                '2295',
                '229d',
                '229e',
                '22bb',
                '22bd',
                '22c4',
                '22ce',
                '22d3',
                '2304',
                '271b',
                '271c',
                '2795',
                '27cf',
                '29fa',
                '29fb',
                '29fe',
                ['2a22', '2a28'],
                '2a2d',
                '2a2e',
                '2a39',
                '2a42',
                '2a45',
                '2a46',
                '2a48',
                '2a4a',
                '2a4c',
                '2a4f',
                '2a50',
                '2a52',
                '2a54',
                '2a56',
                '2a57',
                '2a59',
                '2a5b',
                '2a5d',
                ['2a61', '2a63'],
                '2adc',
                '2add',
                'fe62',
                'ff0b'
            ],
            type: semantic_meaning_SemanticType.OPERATOR,
            role: semantic_meaning_SemanticRole.ADDITION
        },
        {
            set: [
                '2a',
                'b7',
                'd7',
                '2020',
                '2021',
                '204e',
                '2051',
                '2062',
                ['2217', '2219'],
                '2227',
                '2229',
                '2240',
                '2293',
                '2297',
                ['2299', '229b'],
                '22a0',
                '22a1',
                '22b9',
                '22bc',
                ['22c5', '22cc'],
                '22cf',
                '22d2',
                '22d4',
                '2303',
                '2305',
                '2306',
                '25cb',
                '2715',
                '2716',
                '27ce',
                '27d1',
                ['29d1', '29d7'],
                '29e2',
                '2a1d',
                ['2a2f', '2a37'],
                ['2a3b', '2a3d'],
                '2a40',
                '2a43',
                '2a44',
                '2a47',
                '2a49',
                '2a4b',
                '2a4d',
                '2a4e',
                '2a51',
                '2a53',
                '2a55',
                '2a58',
                '2a5a',
                '2a5c',
                ['2a5e', '2a60'],
                '2ada',
                '2adb',
                'fe61',
                'ff0a'
            ],
            type: semantic_meaning_SemanticType.OPERATOR,
            role: semantic_meaning_SemanticRole.MULTIPLICATION
        },
        {
            set: [
                '2d',
                'af',
                '2010',
                '2011',
                '2052',
                '207b',
                '208b',
                '2212',
                '2216',
                '2238',
                '2242',
                '2296',
                '229f',
                '2796',
                '29ff',
                ['2a29', '2a2c'],
                '2a3a',
                '2a41',
                'fe63',
                'ff0d'
            ],
            type: semantic_meaning_SemanticType.OPERATOR,
            role: semantic_meaning_SemanticRole.SUBTRACTION
        },
        {
            set: [
                '2f',
                'f7',
                '2044',
                '2215',
                '2298',
                '2797',
                '27cc',
                '29bc',
                ['29f5', '29f9'],
                '2a38'
            ],
            type: semantic_meaning_SemanticType.OPERATOR,
            role: semantic_meaning_SemanticRole.DIVISION
        },
        {
            set: ['25', '2030', '2031', 'ff05', 'fe6a'],
            type: semantic_meaning_SemanticType.OPERATOR,
            role: semantic_meaning_SemanticRole.POSTFIXOP
        },
        {
            set: [
                'ac',
                '2200',
                '2201',
                '2203',
                '2204',
                '2206',
                ['221a', '221c'],
                '2310',
                'ffe2'
            ],
            type: semantic_meaning_SemanticType.OPERATOR,
            role: semantic_meaning_SemanticRole.PREFIXOP
        },
        {
            set: [
                '2320',
                '2321',
                '23aa',
                '23ae',
                '23af',
                '23b2',
                '23b3',
                '23b6',
                '23b7'
            ],
            type: semantic_meaning_SemanticType.OPERATOR,
            role: semantic_meaning_SemanticRole.PREFIXOP
        },
        {
            set: ['1d7ca', '1d7cb'],
            type: semantic_meaning_SemanticType.OPERATOR,
            role: semantic_meaning_SemanticRole.PREFIXOP,
            font: SemanticFont.BOLD
        },
        {
            set: [
                '3d',
                '7e',
                '207c',
                '208c',
                '221d',
                '2237',
                ['223a', '223f'],
                '2243',
                '2245',
                '2248',
                ['224a', '224e'],
                ['2251', '225f'],
                '2261',
                '2263',
                '229c',
                '22cd',
                '22d5',
                '29e4',
                '29e6',
                '2a66',
                '2a67',
                ['2a6a', '2a6c'],
                ['2a6c', '2a78'],
                'fe66',
                'ff1d'
            ],
            type: semantic_meaning_SemanticType.RELATION,
            role: semantic_meaning_SemanticRole.EQUALITY
        },
        {
            set: [
                '3c',
                '3e',
                '2241',
                '2242',
                '2244',
                '2246',
                '2247',
                '2249',
                '224f',
                '2250',
                '2260',
                '2262',
                ['2264', '2281'],
                '22b0',
                '22b1',
                ['22d6', '22e1'],
                ['22e6', '22e9'],
                ['2976', '2978'],
                '29c0',
                '29c1',
                '29e1',
                '29e3',
                '29e5',
                ['2a79', '2abc'],
                ['2af7', '2afa'],
                'fe64',
                'fe65',
                'ff1c',
                'ff1e'
            ],
            type: semantic_meaning_SemanticType.RELATION,
            role: semantic_meaning_SemanticRole.INEQUALITY
        },
        {
            set: [
                ['2282', '228b'],
                ['228f', '2292'],
                ['22b2', '22b8'],
                '22d0',
                '22d1',
                ['22e2', '22e5'],
                ['22ea', '22ed'],
                '27c3',
                '27c4',
                ['27c7', '27c9'],
                ['27d5', '27d7'],
                '27dc',
                ['2979', '297b'],
                '29df',
                ['2abd', '2ad8']
            ],
            type: semantic_meaning_SemanticType.RELATION,
            role: semantic_meaning_SemanticRole.SET
        },
        {
            set: [
                '2236',
                ['27e0', '27e5'],
                '292b',
                '292c',
                ['29b5', '29bb'],
                '29be',
                '29bf',
                ['29c2', '29d0']
            ],
            type: semantic_meaning_SemanticType.RELATION,
            role: semantic_meaning_SemanticRole.UNKNOWN
        },
        {
            set: ['2205', ['29b0', '29b4']],
            type: semantic_meaning_SemanticType.IDENTIFIER,
            role: semantic_meaning_SemanticRole.SETEMPTY
        },
        {
            set: ['1ab2', '221e', ['29dc', '29de']],
            type: semantic_meaning_SemanticType.IDENTIFIER,
            role: semantic_meaning_SemanticRole.INFTY
        },
        {
            set: [
                '22a2',
                '22a3',
                ['22a6', '22af'],
                '27da',
                '27db',
                '27dd',
                '27de',
                '2ade',
                ['2ae2', '2ae6'],
                '2aec',
                '2aed'
            ],
            type: semantic_meaning_SemanticType.RELATION,
            role: semantic_meaning_SemanticRole.LOGIC
        },
        {
            set: [
                '22a4',
                '22a5',
                '22ba',
                '27d8',
                '27d9',
                '27df',
                '2adf',
                '2ae0',
                ['2ae7', '2aeb'],
                '2af1'
            ],
            type: semantic_meaning_SemanticType.IDENTIFIER,
            role: semantic_meaning_SemanticRole.LOGIC
        },
        {
            set: [
                ['2190', '21ff'],
                '2301',
                '2324',
                '238b',
                '2794',
                ['2798', '27af'],
                ['27b1', '27be'],
                ['27f0', '27ff'],
                ['2900', '292a'],
                ['292d', '2975'],
                ['297c', '297f'],
                ['2b00', '2b11'],
                ['2b30', '2b4c'],
                ['ffe9', 'ffec']
            ],
            type: semantic_meaning_SemanticType.RELATION,
            role: semantic_meaning_SemanticRole.ARROW
        },
        {
            set: ['2208', '220a', ['22f2', '22f9'], '22ff', '27d2', '2ad9'],
            type: semantic_meaning_SemanticType.OPERATOR,
            role: semantic_meaning_SemanticRole.ELEMENT
        },
        {
            set: ['2209'],
            type: semantic_meaning_SemanticType.OPERATOR,
            role: semantic_meaning_SemanticRole.NONELEMENT
        },
        {
            set: ['220b', '220d', ['22fa', '22fe']],
            type: semantic_meaning_SemanticType.OPERATOR,
            role: semantic_meaning_SemanticRole.REELEMENT
        },
        {
            set: ['220c'],
            type: semantic_meaning_SemanticType.OPERATOR,
            role: semantic_meaning_SemanticRole.RENONELEMENT
        },
        {
            set: [
                ['220f', '2211'],
                ['22c0', '22c3'],
                ['2a00', '2a0b'],
                '2a3f',
                '2afc',
                '2aff'
            ],
            type: semantic_meaning_SemanticType.LARGEOP,
            role: semantic_meaning_SemanticRole.SUM
        },
        {
            set: ['2140'],
            type: semantic_meaning_SemanticType.LARGEOP,
            role: semantic_meaning_SemanticRole.SUM,
            font: SemanticFont.DOUBLESTRUCK
        },
        {
            set: [
                ['222b', '2233'],
                ['2a0c', '2a17'],
                ['2a17', '2a1c']
            ],
            type: semantic_meaning_SemanticType.LARGEOP,
            role: semantic_meaning_SemanticRole.INTEGRAL
        },
        {
            set: [['2500', '257F']],
            type: semantic_meaning_SemanticType.RELATION,
            role: semantic_meaning_SemanticRole.BOX
        },
        {
            set: [['2580', '259F']],
            type: semantic_meaning_SemanticType.IDENTIFIER,
            role: semantic_meaning_SemanticRole.BLOCK
        },
        {
            set: [
                ['25A0', '25FF'],
                ['2B12', '2B2F'],
                ['2B50', '2B59']
            ],
            type: semantic_meaning_SemanticType.RELATION,
            role: semantic_meaning_SemanticRole.GEOMETRY
        },
        {
            set: [
                '220e',
                '2300',
                '2302',
                '2311',
                '29bd',
                '29e0',
                ['29e8', '29f3'],
                '2a1e',
                '2afe',
                'ffed',
                'ffee'
            ],
            type: semantic_meaning_SemanticType.OPERATOR,
            role: semantic_meaning_SemanticRole.GEOMETRY
        },
        {
            set: [
                ['221f', '2222'],
                '22be',
                '22bf',
                ['2312', '2314'],
                '237c',
                '27c0',
                ['299b', '29af']
            ],
            type: semantic_meaning_SemanticType.OPERATOR,
            role: semantic_meaning_SemanticRole.GEOMETRY
        },
        {
            set: [
                '24',
                ['a2', 'a5'],
                'b5',
                '2123',
                ['2125', '2127'],
                '212a',
                '212b',
                'fe69',
                'ff04',
                'ffe0',
                'ffe1',
                'ffe5',
                'ffe6'
            ],
            type: semantic_meaning_SemanticType.IDENTIFIER,
            role: semantic_meaning_SemanticRole.UNKNOWN
        },
        {
            set: [
                'a9',
                'ae',
                '210f',
                '2114',
                '2116',
                '2117',
                ['211e', '2122'],
                '212e',
                '2132',
                ['2139', '213b'],
                ['2141', '2144'],
                '214d',
                '214e',
                ['1f12a', '1f12c'],
                '1f18a'
            ],
            type: semantic_meaning_SemanticType.IDENTIFIER,
            role: semantic_meaning_SemanticRole.OTHERLETTER
        },
        {
            set: [
                '2224',
                '2226',
                '2239',
                '2307',
                '27b0',
                '27bf',
                '27c1',
                '27c2',
                '27ca',
                '27cb',
                '27cd',
                '27d0',
                '27d3',
                '27d4',
                '2981',
                '2999',
                '299a',
                '29e7',
                '29f4',
                '2a20',
                '2a21',
                '2a64',
                '2a65',
                '2a68',
                '2a69',
                '2ae1',
                ['2aee', '2af0'],
                '2af2',
                '2af3',
                '2af5',
                '2af6',
                '2afb',
                '2afd'
            ],
            type: semantic_meaning_SemanticType.OPERATOR,
            role: semantic_meaning_SemanticRole.UNKNOWN
        },
        {
            set: ['2605', '2606', '26aa', '26ab', ['2720', '274d']],
            type: semantic_meaning_SemanticType.OPERATOR,
            role: semantic_meaning_SemanticRole.UNKNOWN
        },
        {
            set: [['2145', '2149']],
            type: semantic_meaning_SemanticType.IDENTIFIER,
            role: semantic_meaning_SemanticRole.LATINLETTER,
            font: SemanticFont.DOUBLESTRUCKITALIC,
            secondary: SemanticSecondary.ALLLETTERS
        },
        {
            set: [['213c', '213f']],
            type: semantic_meaning_SemanticType.IDENTIFIER,
            role: semantic_meaning_SemanticRole.GREEKLETTER,
            font: SemanticFont.DOUBLESTRUCK,
            secondary: SemanticSecondary.ALLLETTERS
        },
        {
            set: [
                '3d0',
                '3d7',
                '3f6',
                ['1d26', '1d2a'],
                '1d5e',
                '1d60',
                ['1d66', '1d6a']
            ],
            type: semantic_meaning_SemanticType.IDENTIFIER,
            role: semantic_meaning_SemanticRole.GREEKLETTER,
            font: SemanticFont.NORMAL,
            secondary: SemanticSecondary.ALLLETTERS
        },
        {
            set: [['2135', '2138']],
            type: semantic_meaning_SemanticType.IDENTIFIER,
            role: semantic_meaning_SemanticRole.OTHERLETTER,
            font: SemanticFont.NORMAL,
            secondary: SemanticSecondary.ALLLETTERS
        },
        {
            set: ['131', '237'],
            type: semantic_meaning_SemanticType.IDENTIFIER,
            role: semantic_meaning_SemanticRole.LATINLETTER,
            font: SemanticFont.NORMAL
        },
        {
            set: ['1d6a4', '1d6a5'],
            type: semantic_meaning_SemanticType.IDENTIFIER,
            role: semantic_meaning_SemanticRole.LATINLETTER,
            font: SemanticFont.ITALIC
        },
        {
            set: ['2113', '2118'],
            type: semantic_meaning_SemanticType.IDENTIFIER,
            role: semantic_meaning_SemanticRole.LATINLETTER,
            font: SemanticFont.SCRIPT
        },
        {
            set: [
                ['c0', 'd6'],
                ['d8', 'f6'],
                ['f8', '1bf'],
                ['1c4', '2af'],
                ['1d00', '1d25'],
                ['1d6b', '1d9a'],
                ['1e00', '1ef9'],
                ['363', '36f'],
                ['1dd3', '1de6'],
                ['1d62', '1d65'],
                '1dca',
                '2071',
                '207f',
                ['2090', '209c'],
                '2c7c'
            ],
            type: semantic_meaning_SemanticType.IDENTIFIER,
            role: semantic_meaning_SemanticRole.LATINLETTER,
            font: SemanticFont.NORMAL
        },
        {
            set: [['00bc', '00be'], ['2150', '215f'], '2189'],
            type: semantic_meaning_SemanticType.NUMBER,
            role: semantic_meaning_SemanticRole.FLOAT
        },
        {
            set: ['23E8', ['3248', '324f']],
            type: semantic_meaning_SemanticType.NUMBER,
            role: semantic_meaning_SemanticRole.INTEGER
        },
        {
            set: [['214A', '214C'], '2705', '2713', '2714', '2717', '2718'],
            type: semantic_meaning_SemanticType.IDENTIFIER,
            role: semantic_meaning_SemanticRole.UNKNOWN
        },
        {
            set: [
                '20',
                'a0',
                'ad',
                ['2000', '200f'],
                ['2028', '202f'],
                ['205f', '2060'],
                '206a',
                '206b',
                '206e',
                '206f',
                'feff',
                ['fff9', 'fffb']
            ],
            type: semantic_meaning_SemanticType.TEXT,
            role: semantic_meaning_SemanticRole.SPACE
        },
        {
            set: [
                '7c',
                'a6',
                '2223',
                '23b8',
                '23b9',
                '23d0',
                '2758',
                ['fe31', 'fe34'],
                'ff5c',
                'ffe4',
                'ffe8'
            ],
            type: semantic_meaning_SemanticType.FENCE,
            role: semantic_meaning_SemanticRole.NEUTRAL
        },
        {
            set: ['2016', '2225', '2980', '2af4'],
            type: semantic_meaning_SemanticType.FENCE,
            role: semantic_meaning_SemanticRole.METRIC
        }
    ];
    sets.forEach((_a) => {
        var { set: s } = _a, m = __rest(_a, ["set"]);
        return addMeaning(makeMultiInterval(s), m);
    });
}
function addFences(map, ints, sep = 1) {
    const used = {};
    const codes = makeCodeInterval(ints);
    for (const code of codes) {
        if (used[code])
            continue;
        map.set(String.fromCodePoint(code), String.fromCodePoint(code + sep));
        used[code] = true;
        used[code + sep] = true;
    }
}
function initFences() {
    addFences(SemanticMap.FencesVert, [
        '23b4',
        ['23dc', '23e1'],
        ['fe35', 'fe44'],
        'fe47'
    ]);
    addFences(SemanticMap.FencesHoriz, [
        '28',
        '2045',
        '207D',
        '208D',
        ['2308', '230f'],
        ['231c', '231f'],
        '2329',
        '23b0',
        ['2768', '2775'],
        '27c5',
        ['27e6', '27ef'],
        ['2983', '2998'],
        ['29d8', '29db'],
        '29fc',
        ['2e22', '2e29'],
        ['3008', '3011'],
        ['3014', '301b'],
        'fd3e',
        'fe17',
        ['fe59', 'fe5e'],
        'ff08',
        'ff5f',
        'ff62'
    ]);
    addFences(SemanticMap.FencesHoriz, ['5b', '7b', 'ff3b', 'ff5b'], 2);
    addFences(SemanticMap.FencesHoriz, [['239b', '23a6']], 3);
    addFences(SemanticMap.FencesHoriz, [['23a7', '23a9']], 4);
    addMeaning([...SemanticMap.FencesHoriz.keys()], {
        type: semantic_meaning_SemanticType.FENCE,
        role: semantic_meaning_SemanticRole.OPEN
    });
    addMeaning([...SemanticMap.FencesHoriz.values()], {
        type: semantic_meaning_SemanticType.FENCE,
        role: semantic_meaning_SemanticRole.CLOSE
    });
    addMeaning([...SemanticMap.FencesVert.keys()], {
        type: semantic_meaning_SemanticType.FENCE,
        role: semantic_meaning_SemanticRole.TOP
    });
    addMeaning([...SemanticMap.FencesVert.values()], {
        type: semantic_meaning_SemanticType.FENCE,
        role: semantic_meaning_SemanticRole.BOTTOM
    });
}
const trigonometricFunctions = [
    'cos',
    'cot',
    'csc',
    'sec',
    'sin',
    'tan',
    'arccos',
    'arccot',
    'arccsc',
    'arcsec',
    'arcsin',
    'arctan'
];
const hyperbolicFunctions = [
    'cosh',
    'coth',
    'csch',
    'sech',
    'sinh',
    'tanh',
    'arcosh',
    'arcoth',
    'arcsch',
    'arsech',
    'arsinh',
    'artanh'
];
const algebraicFunctions = ['deg', 'det', 'dim', 'hom', 'ker', 'Tr'];
const elementaryFunctions = [
    'log',
    'ln',
    'lg',
    'exp',
    'gcd',
    'lcm',
    'arg',
    'im',
    're',
    'Pr'
];
const prefixFunctions = trigonometricFunctions.concat(hyperbolicFunctions, algebraicFunctions, elementaryFunctions);
function initFunctions() {
    addMeaning([
        'inf',
        'lim',
        'liminf',
        'limsup',
        'max',
        'min',
        'sup',
        'injlim',
        'projlim'
    ], {
        type: semantic_meaning_SemanticType.FUNCTION,
        role: semantic_meaning_SemanticRole.LIMFUNC
    });
    addMeaning(prefixFunctions, {
        type: semantic_meaning_SemanticType.FUNCTION,
        role: semantic_meaning_SemanticRole.PREFIXFUNC
    });
    addMeaning(['mod', 'rem'], {
        type: semantic_meaning_SemanticType.OPERATOR,
        role: semantic_meaning_SemanticRole.PREFIXFUNC
    });
}
function addFunctionSemantic(base, names) {
    const meaning = SemanticMap.Meaning.get(base) || {
        type: SemanticType.FUNCTION,
        role: SemanticRole.PREFIXFUNC
    };
    addMeaning(names, meaning);
}
function equal(meaning1, meaning2) {
    return (meaning1.type === meaning2.type &&
        meaning1.role === meaning2.role &&
        meaning1.font === meaning2.font);
}
function isMatchingFence(open, close) {
    const meaning = SemanticMap.Meaning.get(open);
    if (meaning.type !== SemanticType.FENCE) {
        return false;
    }
    if (meaning.role === SemanticRole.NEUTRAL ||
        meaning.role === SemanticRole.METRIC) {
        return open === close;
    }
    return (SemanticMap.FencesHoriz.get(open) === close ||
        SemanticMap.FencesVert.get(open) === close);
}
function changeSemantics(alphabet, change) {
    for (const [pos, meaning] of Object.entries(change)) {
        const character = alphabet[pos];
        if (character !== undefined) {
            SemanticMap.Meaning.set(character, meaning);
        }
    }
}
function addSecondaries(alphabet, change) {
    for (const [pos, meaning] of Object.entries(change)) {
        const character = alphabet[pos];
        if (character !== undefined) {
            SemanticMap.Secondary.set(character, meaning);
        }
    }
}
function singleAlphabet(alphabet, type, role, font, semfont, secondaries = [], change = {}, secondary = {}) {
    const interval = INTERVALS.get(alphabetName(alphabet, font));
    if (interval) {
        interval.unicode.forEach((x) => {
            SemanticMap.Meaning.set(x, {
                type: type,
                role: role,
                font: semfont
            });
            secondaries.forEach((sec) => SemanticMap.Secondary.set(x, sec));
        });
        changeSemantics(interval.unicode, change);
        addSecondaries(interval.unicode, secondary);
    }
}
function initAlphabets() {
    for (const [name, font] of Object.entries(SemanticFont)) {
        const emb = !!Embellish[name];
        const semfont = emb
            ? SemanticFont.UNKNOWN
            : font === SemanticFont.FULLWIDTH
                ? SemanticFont.NORMAL
                : font;
        singleAlphabet(Base.LATINCAP, semantic_meaning_SemanticType.IDENTIFIER, semantic_meaning_SemanticRole.LATINLETTER, font, semfont, [SemanticSecondary.ALLLETTERS]);
        singleAlphabet(Base.LATINSMALL, semantic_meaning_SemanticType.IDENTIFIER, semantic_meaning_SemanticRole.LATINLETTER, font, semfont, [SemanticSecondary.ALLLETTERS], {}, { 3: SemanticSecondary.D });
        singleAlphabet(Base.GREEKCAP, semantic_meaning_SemanticType.IDENTIFIER, semantic_meaning_SemanticRole.GREEKLETTER, font, semfont, [SemanticSecondary.ALLLETTERS]);
        singleAlphabet(Base.GREEKSMALL, semantic_meaning_SemanticType.IDENTIFIER, semantic_meaning_SemanticRole.GREEKLETTER, font, semfont, [SemanticSecondary.ALLLETTERS], {
            0: {
                type: semantic_meaning_SemanticType.OPERATOR,
                role: semantic_meaning_SemanticRole.PREFIXOP,
                font: semfont
            },
            26: {
                type: semantic_meaning_SemanticType.OPERATOR,
                role: semantic_meaning_SemanticRole.PREFIXOP,
                font: semfont
            }
        });
        singleAlphabet(Base.DIGIT, semantic_meaning_SemanticType.NUMBER, semantic_meaning_SemanticRole.INTEGER, font, semfont);
    }
}
initMeaning();
initFences();
initAlphabets();
initFunctions();
//# sourceMappingURL=semantic_attr.js.map
;// ./node_modules/.pnpm/speech-rule-engine@5.0.0-beta.1/node_modules/speech-rule-engine/js/semantic_tree/semantic_ordering.js

const comparators = [];
function add(comparator) {
    comparators.push(comparator);
}
function apply(meaning1, meaning2) {
    for (let i = 0, comparator; (comparator = comparators[i]); i++) {
        const result = comparator.compare(meaning1, meaning2);
        if (result !== 0) {
            return result;
        }
    }
    return 0;
}
function sort(meanings) {
    meanings.sort(apply);
}
function reduce(meanings) {
    if (meanings.length <= 1) {
        return meanings;
    }
    const copy = meanings.slice();
    sort(copy);
    const result = [];
    let last;
    do {
        last = copy.pop();
        result.push(last);
    } while (last && copy.length && apply(copy[copy.length - 1], last) === 0);
    return result;
}
class SemanticComparator {
    constructor(comparator, type = null) {
        this.comparator = comparator;
        this.type = type;
        add(this);
    }
    compare(meaning1, meaning2) {
        return this.type &&
            this.type === meaning1.type &&
            this.type === meaning2.type
            ? this.comparator(meaning1, meaning2)
            : 0;
    }
}
function simpleFunction(meaning1, meaning2) {
    if (meaning1.role === semantic_meaning_SemanticRole.SIMPLEFUNC) {
        return 1;
    }
    if (meaning2.role === semantic_meaning_SemanticRole.SIMPLEFUNC) {
        return -1;
    }
    return 0;
}
new SemanticComparator(simpleFunction, semantic_meaning_SemanticType.IDENTIFIER);
//# sourceMappingURL=semantic_ordering.js.map
;// ./node_modules/.pnpm/speech-rule-engine@5.0.0-beta.1/node_modules/speech-rule-engine/js/semantic_tree/semantic_default.js


function key(symbol, font) {
    return symbol.match(/^.+:.+$/) || !font ? symbol : symbol + ':' + font;
}
class SemanticDefault extends Map {
    set(symbol, meaning) {
        super.set(key(symbol, meaning.font), meaning);
        return this;
    }
    setNode(node) {
        this.set(node.textContent, node.meaning());
    }
    get(symbol, font = null) {
        return super.get(key(symbol, font));
    }
    getNode(node) {
        return this.get(node.textContent, node.font);
    }
}
class SemanticCollator extends Map {
    add(symbol, entry) {
        const list = this.get(symbol);
        if (list) {
            list.push(entry);
        }
        else {
            super.set(symbol, [entry]);
        }
    }
    get(symbol, font = null) {
        return super.get(key(symbol, font));
    }
    getNode(node) {
        return this.get(node.textContent, node.font);
    }
    minimize() {
        for (const [key, entry] of this) {
            if (entry.length === 1) {
                this.delete(key);
            }
        }
    }
    isMultiValued() {
        for (const value of this.values()) {
            if (value.length > 1) {
                return true;
            }
        }
        return false;
    }
}
class SemanticNodeCollator extends SemanticCollator {
    add(symbol, entry) {
        super.add(key(symbol, entry.font), entry);
    }
    addNode(node) {
        this.add(node.textContent, node);
    }
    toString() {
        const outer = [];
        for (const [key, nodes] of this) {
            const length = Array(key.length + 3).join(' ');
            const inner = nodes.map((node) => node.toString()).join('\n' + length);
            outer.push(key + ': ' + inner);
        }
        return outer.join('\n');
    }
    collateMeaning() {
        const collator = new SemanticMeaningCollator();
        for (const [key, val] of this) {
            collator.set(key, val.map((node) => node.meaning()));
        }
        return collator;
    }
}
class SemanticMeaningCollator extends SemanticCollator {
    add(symbol, entry) {
        const list = this.get(symbol, entry.font);
        if (!list ||
            !list.find(function (x) {
                return equal(x, entry);
            })) {
            super.add(key(symbol, entry.font), entry);
        }
    }
    addNode(node) {
        this.add(node.textContent, node.meaning());
    }
    toString() {
        const outer = [];
        for (const [key, nodes] of this) {
            const length = Array(key.length + 3).join(' ');
            const inner = nodes
                .map((node) => `{type: ${node.type}, role: ${node.role}, font: ${node.font}}`)
                .join('\n' + length);
            outer.push(key + ': ' + inner);
        }
        return outer.join('\n');
    }
    reduce() {
        for (const [key, val] of this) {
            if (val.length !== 1) {
                this.set(key, reduce(val));
            }
        }
    }
    default() {
        const def = new SemanticDefault();
        for (const [key, val] of this) {
            if (val.length === 1) {
                def.set(key, val[0]);
            }
        }
        return def;
    }
    newDefault() {
        const oldDefault = this.default();
        this.reduce();
        const newDefault = this.default();
        return oldDefault.size !== newDefault.size ? newDefault : null;
    }
}
//# sourceMappingURL=semantic_default.js.map
;// ./node_modules/.pnpm/speech-rule-engine@5.0.0-beta.1/node_modules/speech-rule-engine/js/semantic_tree/semantic_util.js

var MMLTAGS;
(function (MMLTAGS) {
    MMLTAGS["ANNOTATION"] = "ANNOTATION";
    MMLTAGS["ANNOTATIONXML"] = "ANNOTATION-XML";
    MMLTAGS["MACTION"] = "MACTION";
    MMLTAGS["MALIGNGROUP"] = "MALIGNGROUP";
    MMLTAGS["MALIGNMARK"] = "MALIGNMARK";
    MMLTAGS["MATH"] = "MATH";
    MMLTAGS["MENCLOSE"] = "MENCLOSE";
    MMLTAGS["MERROR"] = "MERROR";
    MMLTAGS["MFENCED"] = "MFENCED";
    MMLTAGS["MFRAC"] = "MFRAC";
    MMLTAGS["MGLYPH"] = "MGLYPH";
    MMLTAGS["MI"] = "MI";
    MMLTAGS["MLABELEDTR"] = "MLABELEDTR";
    MMLTAGS["MMULTISCRIPTS"] = "MMULTISCRIPTS";
    MMLTAGS["MN"] = "MN";
    MMLTAGS["MO"] = "MO";
    MMLTAGS["MOVER"] = "MOVER";
    MMLTAGS["MPADDED"] = "MPADDED";
    MMLTAGS["MPHANTOM"] = "MPHANTOM";
    MMLTAGS["MPRESCRIPTS"] = "MPRESCRIPTS";
    MMLTAGS["MROOT"] = "MROOT";
    MMLTAGS["MROW"] = "MROW";
    MMLTAGS["MS"] = "MS";
    MMLTAGS["MSPACE"] = "MSPACE";
    MMLTAGS["MSQRT"] = "MSQRT";
    MMLTAGS["MSTYLE"] = "MSTYLE";
    MMLTAGS["MSUB"] = "MSUB";
    MMLTAGS["MSUBSUP"] = "MSUBSUP";
    MMLTAGS["MSUP"] = "MSUP";
    MMLTAGS["MTABLE"] = "MTABLE";
    MMLTAGS["MTD"] = "MTD";
    MMLTAGS["MTEXT"] = "MTEXT";
    MMLTAGS["MTR"] = "MTR";
    MMLTAGS["MUNDER"] = "MUNDER";
    MMLTAGS["MUNDEROVER"] = "MUNDEROVER";
    MMLTAGS["NONE"] = "NONE";
    MMLTAGS["SEMANTICS"] = "SEMANTICS";
})(MMLTAGS || (MMLTAGS = {}));
const ALLTAGS = Object.values(MMLTAGS);
const LEAFTAGS = [
    MMLTAGS.MO,
    MMLTAGS.MI,
    MMLTAGS.MN,
    MMLTAGS.MTEXT,
    MMLTAGS.MS,
    MMLTAGS.MSPACE
];
const IGNORETAGS = [
    MMLTAGS.MERROR,
    MMLTAGS.MPHANTOM,
    MMLTAGS.MALIGNGROUP,
    MMLTAGS.MALIGNMARK,
    MMLTAGS.MPRESCRIPTS,
    MMLTAGS.ANNOTATION,
    MMLTAGS.ANNOTATIONXML
];
const EMPTYTAGS = [
    MMLTAGS.MATH,
    MMLTAGS.MROW,
    MMLTAGS.MPADDED,
    MMLTAGS.MACTION,
    MMLTAGS.NONE,
    MMLTAGS.MSTYLE,
    MMLTAGS.SEMANTICS
];
const DISPLAYTAGS = [MMLTAGS.MROOT, MMLTAGS.MSQRT];
const directSpeechKeys = ['aria-label', 'exact-speech', 'alt'];
function hasMathTag(node) {
    return !!node && dom_util_tagName(node) === MMLTAGS.MATH;
}
function hasLeafTag(node) {
    return !!node && LEAFTAGS.includes(dom_util_tagName(node));
}
function hasIgnoreTag(node) {
    return (!!node &&
        (IGNORETAGS.includes(dom_util_tagName(node)) ||
            !ALLTAGS.includes(dom_util_tagName(node))));
}
function hasEmptyTag(node) {
    return !!node && EMPTYTAGS.includes(dom_util_tagName(node));
}
function hasDisplayTag(node) {
    return !!node && DISPLAYTAGS.includes(dom_util_tagName(node));
}
function isOrphanedGlyph(node) {
    return (!!node &&
        dom_util_tagName(node) === MMLTAGS.MGLYPH &&
        !hasLeafTag(node.parentNode));
}
function purgeNodes(nodes) {
    const nodeArray = [];
    for (let i = 0, node; (node = nodes[i]); i++) {
        if (node.nodeType !== NodeType.ELEMENT_NODE) {
            continue;
        }
        const tagName = dom_util_tagName(node);
        if (IGNORETAGS.includes(tagName)) {
            continue;
        }
        if (EMPTYTAGS.includes(tagName) && node.childNodes.length === 0) {
            continue;
        }
        nodeArray.push(node);
    }
    return nodeArray;
}
function isZeroLength(length) {
    if (!length) {
        return false;
    }
    const negativeNamedSpaces = [
        'negativeveryverythinmathspace',
        'negativeverythinmathspace',
        'negativethinmathspace',
        'negativemediummathspace',
        'negativethickmathspace',
        'negativeverythickmathspace',
        'negativeveryverythickmathspace'
    ];
    if (negativeNamedSpaces.includes(length)) {
        return true;
    }
    const value = length.match(/[0-9.]+/);
    if (!value) {
        return false;
    }
    return parseFloat(value[0]) === 0;
}
function addAttributes(to, from) {
    var _a;
    if ((_a = from.attributes) === null || _a === void 0 ? void 0 : _a.length) {
        const attrs = from.attributes;
        for (let i = attrs.length - 1; i >= 0; i--) {
            const key = attrs[i].name;
            if (key.match(/^ext/)) {
                to.attributes[key] = attrs[i].value;
                to.nobreaking = true;
            }
            if (directSpeechKeys.includes(key)) {
                to.attributes['ext-speech'] = attrs[i].value;
                to.nobreaking = true;
            }
            if (key.match(/texclass$/)) {
                to.attributes['texclass'] = attrs[i].value;
            }
            if (key.toLowerCase() === 'data-latex') {
                to.attributes['latex'] = attrs[i].value;
            }
            if (key === 'href') {
                to.attributes['href'] = attrs[i].value;
                to.nobreaking = true;
            }
        }
    }
}
function getEmbellishedInner(node) {
    if (node && node.embellished && node.childNodes.length > 0) {
        return getEmbellishedInner(node.childNodes[0]);
    }
    return node;
}
function sliceNodes(nodes, pred, opt_reverse) {
    if (opt_reverse) {
        nodes.reverse();
    }
    const head = [];
    for (let i = 0, node; (node = nodes[i]); i++) {
        if (pred(node)) {
            if (opt_reverse) {
                return {
                    head: nodes.slice(i + 1).reverse(),
                    div: node,
                    tail: head.reverse()
                };
            }
            return { head: head, div: node, tail: nodes.slice(i + 1) };
        }
        head.push(node);
    }
    if (opt_reverse) {
        return { head: [], div: null, tail: head.reverse() };
    }
    return { head: head, div: null, tail: [] };
}
function partitionNodes(nodes, pred) {
    let restNodes = nodes;
    const rel = [];
    const comp = [];
    let result = null;
    do {
        result = sliceNodes(restNodes, pred);
        comp.push(result.head);
        rel.push(result.div);
        restNodes = result.tail;
    } while (result.div);
    rel.pop();
    return { rel: rel, comp: comp };
}
//# sourceMappingURL=semantic_util.js.map
;// ./node_modules/.pnpm/speech-rule-engine@5.0.0-beta.1/node_modules/speech-rule-engine/js/semantic_tree/semantic_node.js




var Attribute;
(function (Attribute) {
    Attribute["EMBELLISHED"] = "embellished";
    Attribute["FENCEPOINTER"] = "fencepointer";
    Attribute["FONT"] = "font";
    Attribute["ID"] = "id";
    Attribute["ANNOTATION"] = "annotation";
    Attribute["ROLE"] = "role";
    Attribute["TYPE"] = "type";
    Attribute["CHILDREN"] = "children";
    Attribute["CONTENT"] = "content";
    Attribute["TEXT"] = "$t";
})(Attribute || (Attribute = {}));
class SemanticNode {
    static fromXml(xml) {
        const id = parseInt(xml.getAttribute('id'), 10);
        const node = new SemanticNode(id);
        node.type = xml.tagName;
        SemanticNode.setAttribute(node, xml, 'role');
        SemanticNode.setAttribute(node, xml, 'font');
        SemanticNode.setAttribute(node, xml, 'embellished');
        SemanticNode.setAttribute(node, xml, 'fencepointer', 'fencePointer');
        if (xml.getAttribute('annotation')) {
            node.parseAnnotation(xml.getAttribute('annotation'));
        }
        addAttributes(node, xml);
        SemanticNode.processChildren(node, xml);
        return node;
    }
    static setAttribute(node, xml, attribute, opt_name) {
        opt_name = opt_name || attribute;
        const value = xml.getAttribute(attribute);
        if (value) {
            node[opt_name] = value;
        }
    }
    static processChildren(node, xml) {
        for (const child of toArray(xml.childNodes)) {
            if (child.nodeType === NodeType.TEXT_NODE) {
                node.textContent = child.textContent;
                continue;
            }
            const children = toArray(child.childNodes).map(SemanticNode.fromXml);
            children.forEach((x) => (x.parent = node));
            if (dom_util_tagName(child) === 'CONTENT') {
                node.contentNodes = children;
            }
            else {
                node.childNodes = children;
            }
        }
    }
    constructor(id) {
        this.id = id;
        this.mathml = [];
        this.parent = null;
        this.type = semantic_meaning_SemanticType.UNKNOWN;
        this.role = semantic_meaning_SemanticRole.UNKNOWN;
        this.font = SemanticFont.UNKNOWN;
        this.embellished = null;
        this.fencePointer = '';
        this.childNodes = [];
        this.textContent = '';
        this.mathmlTree = null;
        this.contentNodes = [];
        this.annotation = {};
        this.attributes = {};
        this.nobreaking = false;
    }
    querySelectorAll(pred) {
        let result = [];
        for (let i = 0, child; (child = this.childNodes[i]); i++) {
            result = result.concat(child.querySelectorAll(pred));
        }
        for (let i = 0, content; (content = this.contentNodes[i]); i++) {
            result = result.concat(content.querySelectorAll(pred));
        }
        if (pred(this)) {
            result.unshift(this);
        }
        return result;
    }
    xml(xml, brief) {
        const xmlNodeList = function (tag, nodes) {
            const xmlNodes = nodes.map(function (x) {
                return x.xml(xml, brief);
            });
            const tagNode = xml.createElementNS('', tag);
            for (let i = 0, child; (child = xmlNodes[i]); i++) {
                tagNode.appendChild(child);
            }
            return tagNode;
        };
        const node = xml.createElementNS('', this.type);
        if (!brief) {
            this.xmlAttributes(node);
        }
        node.textContent = this.textContent;
        if (this.contentNodes.length > 0) {
            node.appendChild(xmlNodeList(Attribute.CONTENT, this.contentNodes));
        }
        if (this.childNodes.length > 0) {
            node.appendChild(xmlNodeList(Attribute.CHILDREN, this.childNodes));
        }
        return node;
    }
    toString(brief = false) {
        const xml = parseInput('<snode/>');
        return serializeXml(this.xml(xml.ownerDocument, brief));
    }
    allAttributes() {
        const attributes = [];
        attributes.push([Attribute.ROLE, this.role]);
        if (this.font !== SemanticFont.UNKNOWN) {
            attributes.push([Attribute.FONT, this.font]);
        }
        if (Object.keys(this.annotation).length) {
            attributes.push([Attribute.ANNOTATION, this.annotationXml()]);
        }
        if (this.embellished) {
            attributes.push([Attribute.EMBELLISHED, this.embellished]);
        }
        if (this.fencePointer) {
            attributes.push([Attribute.FENCEPOINTER, this.fencePointer]);
        }
        attributes.push([Attribute.ID, this.id.toString()]);
        return attributes;
    }
    annotationXml() {
        const result = [];
        for (const [key, val] of Object.entries(this.annotation)) {
            val.forEach((mean) => result.push(key + ':' + mean));
        }
        return result.join(';');
    }
    attributesXml() {
        const result = [];
        for (const [key, value] of Object.entries(this.attributes)) {
            result.push(key + ':' + SemanticNode.escapeValue(value));
        }
        return result.join(';');
    }
    toJson() {
        const json = {};
        json[Attribute.TYPE] = this.type;
        const attributes = this.allAttributes();
        for (let i = 0, attr; (attr = attributes[i]); i++) {
            json[attr[0]] = attr[1].toString();
        }
        if (this.textContent) {
            json[Attribute.TEXT] = this.textContent;
        }
        if (this.childNodes.length) {
            json[Attribute.CHILDREN] = this.childNodes.map(function (child) {
                return child.toJson();
            });
        }
        if (this.contentNodes.length) {
            json[Attribute.CONTENT] = this.contentNodes.map(function (child) {
                return child.toJson();
            });
        }
        return json;
    }
    updateContent(content, text) {
        const newContent = text
            ? content
                .replace(/^[ \f\n\r\t\v\u200b]*/, '')
                .replace(/[ \f\n\r\t\v\u200b]*$/, '')
            : content.trim();
        content = content && !newContent ? content : newContent;
        if (this.textContent === content) {
            return;
        }
        const meaning = SemanticMap.Meaning.get(content.replace(/\s/g, ' '));
        this.textContent = content;
        this.role = meaning.role;
        this.type = meaning.type;
        this.font = meaning.font;
    }
    addMathmlNodes(mmlNodes) {
        for (let i = 0, mml; (mml = mmlNodes[i]); i++) {
            if (this.mathml.indexOf(mml) === -1) {
                this.mathml.push(mml);
            }
        }
    }
    appendChild(child) {
        this.childNodes.push(child);
        this.addMathmlNodes(child.mathml);
        child.parent = this;
    }
    replaceChild(oldNode, newNode) {
        const index = this.childNodes.indexOf(oldNode);
        if (index === -1) {
            return;
        }
        oldNode.parent = null;
        newNode.parent = this;
        this.childNodes[index] = newNode;
        const removeMathml = oldNode.mathml.filter(function (x) {
            return newNode.mathml.indexOf(x) === -1;
        });
        const addMathml = newNode.mathml.filter(function (x) {
            return oldNode.mathml.indexOf(x) === -1;
        });
        this.removeMathmlNodes(removeMathml);
        this.addMathmlNodes(addMathml);
    }
    appendContentNode(node) {
        if (node) {
            this.contentNodes.push(node);
            this.addMathmlNodes(node.mathml);
            node.parent = this;
        }
    }
    removeContentNode(node) {
        if (node) {
            const index = this.contentNodes.indexOf(node);
            if (index !== -1) {
                this.contentNodes.slice(index, 1);
            }
        }
    }
    equals(node) {
        if (!node) {
            return false;
        }
        if (this.type !== node.type ||
            this.role !== node.role ||
            this.textContent !== node.textContent ||
            this.childNodes.length !== node.childNodes.length ||
            this.contentNodes.length !== node.contentNodes.length) {
            return false;
        }
        for (let i = 0, node1, node2; (node1 = this.childNodes[i]), (node2 = node.childNodes[i]); i++) {
            if (!node1.equals(node2)) {
                return false;
            }
        }
        for (let i = 0, node1, node2; (node1 = this.contentNodes[i]), (node2 = node.contentNodes[i]); i++) {
            if (!node1.equals(node2)) {
                return false;
            }
        }
        return true;
    }
    displayTree() {
        console.info(this.displayTree_(0));
    }
    addAnnotation(domain, annotation) {
        if (annotation) {
            this.addAnnotation_(domain, annotation);
        }
    }
    getAnnotation(domain) {
        const content = this.annotation[domain];
        return content ? content : [];
    }
    hasAnnotation(domain, annotation) {
        const content = this.annotation[domain];
        if (!content) {
            return false;
        }
        return content.indexOf(annotation) !== -1;
    }
    parseAnnotation(stateStr) {
        const annotations = stateStr.split(';');
        for (let i = 0, l = annotations.length; i < l; i++) {
            const annotation = annotations[i].split(':');
            this.addAnnotation(annotation[0], annotation[1]);
        }
    }
    meaning() {
        return { type: this.type, role: this.role, font: this.font };
    }
    xmlAttributes(node) {
        const attributes = this.allAttributes();
        for (let i = 0, attr; (attr = attributes[i]); i++) {
            node.setAttribute(attr[0], attr[1]);
        }
        this.addExternalAttributes(node);
    }
    addExternalAttributes(node) {
        for (const [attr, val] of Object.entries(this.attributes)) {
            node.setAttribute(attr, val);
        }
    }
    static escapeValue(value) {
        return value.replace(/;/g, '\\0003B');
    }
    parseAttributes(stateStr) {
        if (!stateStr)
            return;
        const attributes = stateStr.split(';');
        for (let i = 0, l = attributes.length; i < l; i++) {
            const [key, ...values] = attributes[i].split(':');
            if (key) {
                this.attributes[key] = values.join('').replace(/\\0003B/g, ';');
            }
        }
    }
    removeMathmlNodes(mmlNodes) {
        const mmlList = this.mathml;
        for (let i = 0, mml; (mml = mmlNodes[i]); i++) {
            const index = mmlList.indexOf(mml);
            if (index !== -1) {
                mmlList.splice(index, 1);
            }
        }
        this.mathml = mmlList;
    }
    displayTree_(depth) {
        depth++;
        const depthString = Array(depth).join('  ');
        let result = '';
        result += '\n' + depthString + this.toString();
        result += '\n' + depthString + 'MathmlTree:';
        result += '\n' + depthString + this.mathmlTreeString();
        result += '\n' + depthString + 'MathML:';
        for (let i = 0, mml; (mml = this.mathml[i]); i++) {
            result += '\n' + depthString + mml.toString();
        }
        result += '\n' + depthString + 'Begin Content';
        this.contentNodes.forEach(function (x) {
            result += x.displayTree_(depth);
        });
        result += '\n' + depthString + 'End Content';
        result += '\n' + depthString + 'Begin Children';
        this.childNodes.forEach(function (x) {
            result += x.displayTree_(depth);
        });
        result += '\n' + depthString + 'End Children';
        return result;
    }
    mathmlTreeString() {
        return this.mathmlTree ? this.mathmlTree.toString() : 'EMPTY';
    }
    addAnnotation_(domain, annotation) {
        const content = this.annotation[domain];
        if (content && !content.includes(annotation)) {
            content.push(annotation);
        }
        else {
            this.annotation[domain] = [annotation];
        }
    }
}
//# sourceMappingURL=semantic_node.js.map
;// ./node_modules/.pnpm/speech-rule-engine@5.0.0-beta.1/node_modules/speech-rule-engine/js/semantic_tree/semantic_node_factory.js




class SemanticNodeFactory {
    constructor() {
        this.leafMap = new SemanticNodeCollator();
        this.defaultMap = new SemanticDefault();
        this.idCounter_ = -1;
    }
    makeNode(id) {
        return this.createNode_(id);
    }
    makeUnprocessed(mml) {
        const node = this.createNode_();
        node.mathml = [mml];
        node.mathmlTree = mml;
        return node;
    }
    makeEmptyNode() {
        const node = this.createNode_();
        node.type = semantic_meaning_SemanticType.EMPTY;
        return node;
    }
    makeContentNode(content) {
        const node = this.createNode_();
        node.updateContent(content);
        return node;
    }
    makeMultipleContentNodes(num, content) {
        const nodes = [];
        for (let i = 0; i < num; i++) {
            nodes.push(this.makeContentNode(content));
        }
        return nodes;
    }
    makeLeafNode(content, font) {
        if (!content) {
            return this.makeEmptyNode();
        }
        const node = this.makeContentNode(content);
        node.font = font || node.font;
        const meaning = this.defaultMap.getNode(node);
        if (meaning) {
            node.type = meaning.type;
            node.role = meaning.role;
            node.font = meaning.font;
        }
        this.leafMap.addNode(node);
        return node;
    }
    makeBranchNode(type, children, contentNodes, opt_content) {
        const node = this.createNode_();
        if (opt_content) {
            node.updateContent(opt_content);
        }
        node.type = type;
        node.childNodes = children;
        node.contentNodes = contentNodes;
        children.concat(contentNodes).forEach(function (x) {
            x.parent = node;
            node.addMathmlNodes(x.mathml);
        });
        return node;
    }
    createNode_(id) {
        if (typeof id !== 'undefined') {
            this.idCounter_ = Math.max(this.idCounter_, id);
        }
        else {
            id = ++this.idCounter_;
        }
        return new SemanticNode(id);
    }
}
//# sourceMappingURL=semantic_node_factory.js.map
;// ./node_modules/.pnpm/speech-rule-engine@5.0.0-beta.1/node_modules/speech-rule-engine/js/semantic_tree/semantic_parser.js

class SemanticAbstractParser {
    constructor(type) {
        this.type = type;
        this.factory_ = new SemanticNodeFactory();
    }
    getFactory() {
        return this.factory_;
    }
    setFactory(factory) {
        this.factory_ = factory;
    }
    getType() {
        return this.type;
    }
    parseList(list) {
        const result = [];
        for (let i = 0, element; (element = list[i]); i++) {
            result.push(this.parse(element));
        }
        return result;
    }
}
//# sourceMappingURL=semantic_parser.js.map
;// ./node_modules/.pnpm/speech-rule-engine@5.0.0-beta.1/node_modules/speech-rule-engine/js/semantic_tree/semantic_pred.js



function isType(node, attr) {
    return node.type === attr;
}
function embellishedType(node, attr) {
    return node.embellished === attr;
}
function isRole(node, attr) {
    return node.role === attr;
}
function isAccent(node) {
    return (isType(node, semantic_meaning_SemanticType.FENCE) ||
        isType(node, semantic_meaning_SemanticType.PUNCTUATION) ||
        isType(node, semantic_meaning_SemanticType.OPERATOR) ||
        isType(node, semantic_meaning_SemanticType.RELATION));
}
function isSimpleFunctionScope(node) {
    const children = node.childNodes;
    if (children.length === 0) {
        return true;
    }
    if (children.length > 1) {
        return false;
    }
    const child = children[0];
    if (child.type === semantic_meaning_SemanticType.INFIXOP) {
        if (child.role !== semantic_meaning_SemanticRole.IMPLICIT) {
            return false;
        }
        if (child.childNodes.some((x) => isType(x, semantic_meaning_SemanticType.INFIXOP))) {
            return false;
        }
    }
    return true;
}
function isPrefixFunctionBoundary(node) {
    return ((isOperator(node) && !isRole(node, semantic_meaning_SemanticRole.DIVISION)) ||
        isType(node, semantic_meaning_SemanticType.APPL) ||
        isGeneralFunctionBoundary(node));
}
function isBigOpBoundary(node) {
    return isOperator(node) || isGeneralFunctionBoundary(node);
}
function isIntegralDxBoundary(firstNode, secondNode) {
    return (!!secondNode &&
        isType(secondNode, semantic_meaning_SemanticType.IDENTIFIER) &&
        SemanticMap.Secondary.has(firstNode.textContent, SemanticSecondary.D));
}
function isIntegralDxBoundarySingle(node) {
    if (isType(node, semantic_meaning_SemanticType.IDENTIFIER)) {
        const firstChar = node.textContent[0];
        return (firstChar &&
            node.textContent[1] &&
            SemanticMap.Secondary.has(firstChar, SemanticSecondary.D));
    }
    return false;
}
function isGeneralFunctionBoundary(node) {
    return isRelation(node) || isPunctuation(node);
}
function isEmbellished(node) {
    if (node.embellished) {
        return node.embellished;
    }
    if (isEmbellishedType(node.type)) {
        return node.type;
    }
    return null;
}
function isEmbellishedType(type) {
    return (type === semantic_meaning_SemanticType.OPERATOR ||
        type === semantic_meaning_SemanticType.RELATION ||
        type === semantic_meaning_SemanticType.FENCE ||
        type === semantic_meaning_SemanticType.PUNCTUATION);
}
function isOperator(node) {
    return (isType(node, semantic_meaning_SemanticType.OPERATOR) ||
        embellishedType(node, semantic_meaning_SemanticType.OPERATOR));
}
function isRelation(node) {
    return (isType(node, semantic_meaning_SemanticType.RELATION) ||
        embellishedType(node, semantic_meaning_SemanticType.RELATION));
}
function isPunctuation(node) {
    return (isType(node, semantic_meaning_SemanticType.PUNCTUATION) ||
        embellishedType(node, semantic_meaning_SemanticType.PUNCTUATION));
}
function isFence(node) {
    return (isType(node, semantic_meaning_SemanticType.FENCE) ||
        embellishedType(node, semantic_meaning_SemanticType.FENCE));
}
function isElligibleEmbellishedFence(node) {
    if (!node || !isFence(node)) {
        return false;
    }
    if (!node.embellished) {
        return true;
    }
    return recurseBaseNode(node);
}
function bothSide(node) {
    return (isType(node, semantic_meaning_SemanticType.TENSOR) &&
        (!isType(node.childNodes[1], semantic_meaning_SemanticType.EMPTY) ||
            !isType(node.childNodes[2], semantic_meaning_SemanticType.EMPTY)) &&
        (!isType(node.childNodes[3], semantic_meaning_SemanticType.EMPTY) ||
            !isType(node.childNodes[4], semantic_meaning_SemanticType.EMPTY)));
}
function recurseBaseNode(node) {
    if (!node.embellished) {
        return true;
    }
    if (bothSide(node)) {
        return false;
    }
    if (isRole(node, semantic_meaning_SemanticRole.CLOSE) && isType(node, semantic_meaning_SemanticType.TENSOR)) {
        return false;
    }
    if (isRole(node, semantic_meaning_SemanticRole.OPEN) &&
        (isType(node, semantic_meaning_SemanticType.SUBSCRIPT) ||
            isType(node, semantic_meaning_SemanticType.SUPERSCRIPT))) {
        return false;
    }
    return recurseBaseNode(node.childNodes[0]);
}
function isTableOrMultiline(node) {
    return (!!node &&
        (isType(node, semantic_meaning_SemanticType.TABLE) || isType(node, semantic_meaning_SemanticType.MULTILINE)));
}
function tableIsMatrixOrVector(node) {
    return (!!node && isFencedElement(node) && isTableOrMultiline(node.childNodes[0]));
}
function isFencedElement(node) {
    return (!!node &&
        isType(node, semantic_meaning_SemanticType.FENCED) &&
        (isRole(node, semantic_meaning_SemanticRole.LEFTRIGHT) || isNeutralFence(node)) &&
        node.childNodes.length === 1);
}
function tableIsCases(_table, prevNodes) {
    return (prevNodes.length > 0 &&
        isRole(prevNodes[prevNodes.length - 1], semantic_meaning_SemanticRole.OPENFENCE));
}
function tableIsMultiline(table) {
    return table.childNodes.every(function (row) {
        const length = row.childNodes.length;
        return length <= 1;
    });
}
function lineIsLabelled(line) {
    return (isType(line, semantic_meaning_SemanticType.LINE) &&
        line.contentNodes.length &&
        isRole(line.contentNodes[0], semantic_meaning_SemanticRole.LABEL));
}
function isBinomial(table) {
    return table.childNodes.length === 2;
}
function isLimitBase(node) {
    return (isType(node, semantic_meaning_SemanticType.LARGEOP) ||
        isType(node, semantic_meaning_SemanticType.LIMBOTH) ||
        isType(node, semantic_meaning_SemanticType.LIMLOWER) ||
        isType(node, semantic_meaning_SemanticType.LIMUPPER) ||
        (isType(node, semantic_meaning_SemanticType.FUNCTION) &&
            isRole(node, semantic_meaning_SemanticRole.LIMFUNC)) ||
        ((isType(node, semantic_meaning_SemanticType.OVERSCORE) ||
            isType(node, semantic_meaning_SemanticType.UNDERSCORE)) &&
            isLimitBase(node.childNodes[0])));
}
function isSimpleFunctionHead(node) {
    return (node.type === semantic_meaning_SemanticType.IDENTIFIER ||
        node.role === semantic_meaning_SemanticRole.LATINLETTER ||
        node.role === semantic_meaning_SemanticRole.GREEKLETTER ||
        node.role === semantic_meaning_SemanticRole.OTHERLETTER);
}
function singlePunctAtPosition(nodes, puncts, position) {
    return (puncts.length === 1 &&
        (nodes[position].type === semantic_meaning_SemanticType.PUNCTUATION ||
            nodes[position].embellished === semantic_meaning_SemanticType.PUNCTUATION) &&
        nodes[position] === puncts[0]);
}
function isSimpleFunction(node) {
    return (isType(node, semantic_meaning_SemanticType.IDENTIFIER) &&
        isRole(node, semantic_meaning_SemanticRole.SIMPLEFUNC));
}
function isLeftBrace(node) {
    const leftBrace = ['{', '﹛', '｛'];
    return !!node && leftBrace.indexOf(node.textContent) !== -1;
}
function isRightBrace(node) {
    const rightBrace = ['}', '﹜', '｝'];
    return !!node && rightBrace.indexOf(node.textContent) !== -1;
}
function isSetNode(node) {
    return (isLeftBrace(node.contentNodes[0]) && isRightBrace(node.contentNodes[1]));
}
const illegalSingleton = [
    semantic_meaning_SemanticType.PUNCTUATION,
    semantic_meaning_SemanticType.PUNCTUATED,
    semantic_meaning_SemanticType.RELSEQ,
    semantic_meaning_SemanticType.MULTIREL,
    semantic_meaning_SemanticType.TABLE,
    semantic_meaning_SemanticType.MULTILINE,
    semantic_meaning_SemanticType.CASES,
    semantic_meaning_SemanticType.INFERENCE
];
const scriptedElement = [
    semantic_meaning_SemanticType.LIMUPPER,
    semantic_meaning_SemanticType.LIMLOWER,
    semantic_meaning_SemanticType.LIMBOTH,
    semantic_meaning_SemanticType.SUBSCRIPT,
    semantic_meaning_SemanticType.SUPERSCRIPT,
    semantic_meaning_SemanticType.UNDERSCORE,
    semantic_meaning_SemanticType.OVERSCORE,
    semantic_meaning_SemanticType.TENSOR
];
function isSingletonSetContent(node) {
    const type = node.type;
    if (illegalSingleton.indexOf(type) !== -1 ||
        (type === semantic_meaning_SemanticType.INFIXOP && node.role !== semantic_meaning_SemanticRole.IMPLICIT)) {
        return false;
    }
    if (type === semantic_meaning_SemanticType.FENCED) {
        return node.role === semantic_meaning_SemanticRole.LEFTRIGHT
            ? isSingletonSetContent(node.childNodes[0])
            : true;
    }
    if (scriptedElement.indexOf(type) !== -1) {
        return isSingletonSetContent(node.childNodes[0]);
    }
    return true;
}
function isNumber(node) {
    return (node.type === semantic_meaning_SemanticType.NUMBER &&
        (node.role === semantic_meaning_SemanticRole.INTEGER || node.role === semantic_meaning_SemanticRole.FLOAT));
}
function isUnitCounter(node) {
    return (isNumber(node) ||
        node.role === semantic_meaning_SemanticRole.VULGAR ||
        node.role === semantic_meaning_SemanticRole.MIXED);
}
function isPureUnit(node) {
    const children = node.childNodes;
    return (node.role === semantic_meaning_SemanticRole.UNIT &&
        (!children.length || children[0].role === semantic_meaning_SemanticRole.UNIT));
}
function isUnitProduct(node) {
    const children = node.childNodes;
    return (node.type === semantic_meaning_SemanticType.INFIXOP &&
        (node.role === semantic_meaning_SemanticRole.MULTIPLICATION ||
            node.role === semantic_meaning_SemanticRole.IMPLICIT) &&
        children.length &&
        (isPureUnit(children[0]) || isUnitCounter(children[0])) &&
        node.childNodes.slice(1).every(isPureUnit));
}
function isImplicit(node) {
    return (node.type === semantic_meaning_SemanticType.INFIXOP &&
        (node.role === semantic_meaning_SemanticRole.IMPLICIT ||
            (node.role === semantic_meaning_SemanticRole.UNIT &&
                !!node.contentNodes.length &&
                node.contentNodes[0].textContent === NamedSymbol.invisibleTimes)));
}
function isImplicitOp(node) {
    return (node.type === semantic_meaning_SemanticType.INFIXOP && node.role === semantic_meaning_SemanticRole.IMPLICIT);
}
function isNeutralFence(fence) {
    return (fence.role === semantic_meaning_SemanticRole.NEUTRAL || fence.role === semantic_meaning_SemanticRole.METRIC);
}
function compareNeutralFences(fence1, fence2) {
    return (isNeutralFence(fence1) &&
        isNeutralFence(fence2) &&
        getEmbellishedInner(fence1).textContent ===
            getEmbellishedInner(fence2).textContent);
}
function elligibleLeftNeutral(fence) {
    if (!isNeutralFence(fence)) {
        return false;
    }
    if (!fence.embellished) {
        return true;
    }
    if (fence.type === semantic_meaning_SemanticType.SUPERSCRIPT ||
        fence.type === semantic_meaning_SemanticType.SUBSCRIPT) {
        return false;
    }
    if (fence.type === semantic_meaning_SemanticType.TENSOR &&
        (fence.childNodes[3].type !== semantic_meaning_SemanticType.EMPTY ||
            fence.childNodes[4].type !== semantic_meaning_SemanticType.EMPTY)) {
        return false;
    }
    return true;
}
function elligibleRightNeutral(fence) {
    if (!isNeutralFence(fence)) {
        return false;
    }
    if (!fence.embellished) {
        return true;
    }
    if (fence.type === semantic_meaning_SemanticType.TENSOR &&
        (fence.childNodes[1].type !== semantic_meaning_SemanticType.EMPTY ||
            fence.childNodes[2].type !== semantic_meaning_SemanticType.EMPTY)) {
        return false;
    }
    return true;
}
function isMembership(element) {
    return [
        semantic_meaning_SemanticRole.ELEMENT,
        semantic_meaning_SemanticRole.NONELEMENT,
        semantic_meaning_SemanticRole.REELEMENT,
        semantic_meaning_SemanticRole.RENONELEMENT
    ].includes(element.role);
}
//# sourceMappingURL=semantic_pred.js.map
;// ./node_modules/.pnpm/speech-rule-engine@5.0.0-beta.1/node_modules/speech-rule-engine/js/semantic_tree/semantic_heuristic_factory.js

const SemanticHeuristics = {
    factory: null,
    options: new Options(),
    updateFactory: function (nodeFactory) {
        SemanticHeuristics.factory = nodeFactory;
    },
    heuristics: new Map(),
    flags: {
        combine_juxtaposition: true,
        convert_juxtaposition: true,
        multioperator: true
    },
    blacklist: {},
    add: function (heuristic) {
        const name = heuristic.name;
        SemanticHeuristics.heuristics.set(name, heuristic);
        if (!SemanticHeuristics.flags[name]) {
            SemanticHeuristics.flags[name] = false;
        }
    },
    run: function (name, root, opt_alternative) {
        const heuristic = SemanticHeuristics.heuristics.get(name);
        return heuristic &&
            !SemanticHeuristics.blacklist[name] &&
            (SemanticHeuristics.flags[name] || heuristic.applicable(root))
            ? heuristic.apply(root)
            : opt_alternative
                ? opt_alternative(root)
                : root;
    }
};
//# sourceMappingURL=semantic_heuristic_factory.js.map
;// ./node_modules/.pnpm/speech-rule-engine@5.0.0-beta.1/node_modules/speech-rule-engine/js/semantic_tree/semantic_processor.js








class SemanticProcessor {
    static getInstance() {
        SemanticProcessor.instance =
            SemanticProcessor.instance || new SemanticProcessor();
        return SemanticProcessor.instance;
    }
    static tableToMultiline(table) {
        if (!tableIsMultiline(table)) {
            return SemanticHeuristics.run('rewrite_subcases', table, SemanticProcessor.classifyTable);
        }
        table.type = semantic_meaning_SemanticType.MULTILINE;
        for (let i = 0, row; (row = table.childNodes[i]); i++) {
            SemanticProcessor.rowToLine_(row, semantic_meaning_SemanticRole.MULTILINE);
        }
        if (table.childNodes.length === 1 &&
            !lineIsLabelled(table.childNodes[0]) &&
            isFencedElement(table.childNodes[0].childNodes[0])) {
            SemanticProcessor.tableToMatrixOrVector_(SemanticProcessor.rewriteFencedLine_(table));
        }
        SemanticProcessor.binomialForm_(table);
        SemanticProcessor.classifyMultiline(table);
        return table;
    }
    static number(node) {
        if (node.type === semantic_meaning_SemanticType.UNKNOWN ||
            node.type === semantic_meaning_SemanticType.IDENTIFIER) {
            node.type = semantic_meaning_SemanticType.NUMBER;
        }
        SemanticProcessor.meaningFromContent(node, SemanticProcessor.numberRole_);
        SemanticProcessor.exprFont_(node);
    }
    static classifyMultiline(multiline) {
        let index = 0;
        const length = multiline.childNodes.length;
        let line;
        while (index < length &&
            (!(line = multiline.childNodes[index]) || !line.childNodes.length)) {
            index++;
        }
        if (index >= length) {
            return;
        }
        const firstRole = line.childNodes[0].role;
        if (firstRole !== semantic_meaning_SemanticRole.UNKNOWN &&
            multiline.childNodes.every(function (x) {
                const cell = x.childNodes[0];
                return (!cell ||
                    (cell.role === firstRole &&
                        (isType(cell, semantic_meaning_SemanticType.RELATION) ||
                            isType(cell, semantic_meaning_SemanticType.RELSEQ))));
            })) {
            multiline.role = firstRole;
        }
    }
    static classifyTable(table) {
        const columns = SemanticProcessor.computeColumns_(table);
        SemanticProcessor.classifyByColumns_(table, columns, semantic_meaning_SemanticRole.EQUALITY) ||
            SemanticProcessor.classifyByColumns_(table, columns, semantic_meaning_SemanticRole.INEQUALITY, [semantic_meaning_SemanticRole.EQUALITY]) ||
            SemanticProcessor.classifyByColumns_(table, columns, semantic_meaning_SemanticRole.ARROW) ||
            SemanticProcessor.detectCaleyTable(table);
        return table;
    }
    static detectCaleyTable(table) {
        if (!table.mathmlTree) {
            return false;
        }
        const tree = table.mathmlTree;
        const cl = tree.getAttribute('columnlines');
        const rl = tree.getAttribute('rowlines');
        if (!cl || !rl) {
            return false;
        }
        if (SemanticProcessor.cayleySpacing(cl) &&
            SemanticProcessor.cayleySpacing(rl)) {
            table.role = semantic_meaning_SemanticRole.CAYLEY;
            return true;
        }
        return false;
    }
    static cayleySpacing(lines) {
        const list = lines.split(' ');
        return ((list[0] === 'solid' || list[0] === 'dashed') &&
            list.slice(1).every((x) => x === 'none'));
    }
    static proof(node, semantics, parse) {
        const attrs = SemanticProcessor.separateSemantics(semantics);
        return SemanticProcessor.getInstance().proof(node, attrs, parse);
    }
    static findSemantics(node, attr, opt_value) {
        const value = opt_value == null ? null : opt_value;
        const semantics = SemanticProcessor.getSemantics(node);
        if (!semantics) {
            return false;
        }
        if (!semantics[attr]) {
            return false;
        }
        return value == null ? true : semantics[attr] === value;
    }
    static getSemantics(node) {
        const semantics = node.getAttribute('semantics');
        if (!semantics) {
            return null;
        }
        return SemanticProcessor.separateSemantics(semantics);
    }
    static removePrefix(name) {
        const [, ...rest] = name.split('_');
        return rest.join('_');
    }
    static separateSemantics(attr) {
        const result = {};
        attr.split(';').forEach(function (x) {
            const [name, value] = x.split(':');
            result[SemanticProcessor.removePrefix(name)] = value;
        });
        return result;
    }
    static matchSpaces_(nodes, ops) {
        for (let i = 0, op; (op = ops[i]); i++) {
            const node = nodes[i];
            const mt1 = node.mathmlTree;
            const mt2 = nodes[i + 1].mathmlTree;
            if (!mt1 || !mt2) {
                continue;
            }
            const sibling = mt1.nextSibling;
            if (!sibling || sibling === mt2) {
                continue;
            }
            const spacer = SemanticProcessor.getSpacer_(sibling);
            if (spacer) {
                op.mathml.push(spacer);
                op.mathmlTree = spacer;
                op.role = semantic_meaning_SemanticRole.SPACE;
            }
        }
    }
    static getSpacer_(node) {
        if (dom_util_tagName(node) === MMLTAGS.MSPACE) {
            return node;
        }
        while (hasEmptyTag(node) && node.childNodes.length === 1) {
            node = node.childNodes[0];
            if (dom_util_tagName(node) === MMLTAGS.MSPACE) {
                return node;
            }
        }
        return null;
    }
    static fenceToPunct_(fence) {
        const newRole = SemanticProcessor.FENCE_TO_PUNCT_[fence.role];
        if (!newRole) {
            return;
        }
        while (fence.embellished) {
            fence.embellished = semantic_meaning_SemanticType.PUNCTUATION;
            if (!(isRole(fence, semantic_meaning_SemanticRole.SUBSUP) ||
                isRole(fence, semantic_meaning_SemanticRole.UNDEROVER))) {
                fence.role = newRole;
            }
            fence = fence.childNodes[0];
        }
        fence.type = semantic_meaning_SemanticType.PUNCTUATION;
        fence.role = newRole;
    }
    static classifyFunction_(funcNode, restNodes) {
        if (funcNode.type === semantic_meaning_SemanticType.APPL ||
            funcNode.type === semantic_meaning_SemanticType.BIGOP ||
            funcNode.type === semantic_meaning_SemanticType.INTEGRAL) {
            return '';
        }
        if (restNodes[0] &&
            restNodes[0].textContent === NamedSymbol.functionApplication) {
            SemanticProcessor.getInstance().funcAppls[funcNode.id] =
                restNodes.shift();
            let role = semantic_meaning_SemanticRole.SIMPLEFUNC;
            SemanticHeuristics.run('simple2prefix', funcNode);
            if (funcNode.role === semantic_meaning_SemanticRole.PREFIXFUNC ||
                funcNode.role === semantic_meaning_SemanticRole.LIMFUNC) {
                role = funcNode.role;
            }
            SemanticProcessor.propagateFunctionRole_(funcNode, role);
            return 'prefix';
        }
        const kind = SemanticProcessor.CLASSIFY_FUNCTION_[funcNode.role];
        return kind
            ? kind
            : isSimpleFunctionHead(funcNode)
                ? 'simple'
                : '';
    }
    static propagateFunctionRole_(funcNode, tag) {
        if (funcNode) {
            if (funcNode.type === semantic_meaning_SemanticType.INFIXOP) {
                return;
            }
            if (!(isRole(funcNode, semantic_meaning_SemanticRole.SUBSUP) ||
                isRole(funcNode, semantic_meaning_SemanticRole.UNDEROVER))) {
                funcNode.role = tag;
            }
            SemanticProcessor.propagateFunctionRole_(funcNode.childNodes[0], tag);
        }
    }
    static getFunctionOp_(tree, pred) {
        if (pred(tree)) {
            return tree;
        }
        for (let i = 0, child; (child = tree.childNodes[i]); i++) {
            const op = SemanticProcessor.getFunctionOp_(child, pred);
            if (op) {
                return op;
            }
        }
        return null;
    }
    static tableToMatrixOrVector_(node) {
        const matrix = node.childNodes[0];
        isType(matrix, semantic_meaning_SemanticType.MULTILINE)
            ? SemanticProcessor.tableToVector_(node)
            : SemanticProcessor.tableToMatrix_(node);
        node.contentNodes.forEach(matrix.appendContentNode.bind(matrix));
        for (let i = 0, row; (row = matrix.childNodes[i]); i++) {
            SemanticProcessor.assignRoleToRow_(row, SemanticProcessor.getComponentRoles_(matrix));
        }
        matrix.parent = null;
        return matrix;
    }
    static tableToVector_(node) {
        const vector = node.childNodes[0];
        vector.type = semantic_meaning_SemanticType.VECTOR;
        if (vector.childNodes.length === 1) {
            SemanticProcessor.tableToSquare_(node);
            return;
        }
        SemanticProcessor.binomialForm_(vector);
    }
    static binomialForm_(node) {
        if (!isRole(node, semantic_meaning_SemanticRole.UNKNOWN)) {
            return;
        }
        if (isBinomial(node)) {
            node.role = semantic_meaning_SemanticRole.BINOMIAL;
            node.childNodes[0].role = semantic_meaning_SemanticRole.BINOMIAL;
            node.childNodes[1].role = semantic_meaning_SemanticRole.BINOMIAL;
        }
    }
    static tableToMatrix_(node) {
        const matrix = node.childNodes[0];
        matrix.type = semantic_meaning_SemanticType.MATRIX;
        if (matrix.childNodes &&
            matrix.childNodes.length > 0 &&
            matrix.childNodes[0].childNodes &&
            matrix.childNodes.length === matrix.childNodes[0].childNodes.length) {
            SemanticProcessor.tableToSquare_(node);
            return;
        }
        if (matrix.childNodes && matrix.childNodes.length === 1) {
            matrix.role = semantic_meaning_SemanticRole.ROWVECTOR;
        }
    }
    static tableToSquare_(node) {
        const matrix = node.childNodes[0];
        if (!isRole(matrix, semantic_meaning_SemanticRole.UNKNOWN)) {
            return;
        }
        if (isNeutralFence(node)) {
            matrix.role = semantic_meaning_SemanticRole.DETERMINANT;
            return;
        }
        matrix.role = semantic_meaning_SemanticRole.SQUAREMATRIX;
    }
    static getComponentRoles_(node) {
        const role = node.role;
        if (role && role !== semantic_meaning_SemanticRole.UNKNOWN) {
            return role;
        }
        return node.type.toLowerCase() || semantic_meaning_SemanticRole.UNKNOWN;
    }
    static tableToCases_(table, openFence) {
        for (let i = 0, row; (row = table.childNodes[i]); i++) {
            SemanticProcessor.assignRoleToRow_(row, semantic_meaning_SemanticRole.CASES);
        }
        table.type = semantic_meaning_SemanticType.CASES;
        table.appendContentNode(openFence);
        if (tableIsMultiline(table)) {
            SemanticProcessor.binomialForm_(table);
        }
        return table;
    }
    static rewriteFencedLine_(table) {
        const line = table.childNodes[0];
        const fenced = table.childNodes[0].childNodes[0];
        const element = table.childNodes[0].childNodes[0].childNodes[0];
        fenced.parent = table.parent;
        table.parent = fenced;
        element.parent = line;
        fenced.childNodes = [table];
        line.childNodes = [element];
        return fenced;
    }
    static rowToLine_(row, opt_role) {
        const role = opt_role || semantic_meaning_SemanticRole.UNKNOWN;
        if (isType(row, semantic_meaning_SemanticType.ROW)) {
            row.type = semantic_meaning_SemanticType.LINE;
            row.role = role;
            if (row.childNodes.length === 1 &&
                isType(row.childNodes[0], semantic_meaning_SemanticType.CELL)) {
                row.childNodes = row.childNodes[0].childNodes;
                row.childNodes.forEach(function (x) {
                    x.parent = row;
                });
            }
        }
    }
    static assignRoleToRow_(row, role) {
        if (isType(row, semantic_meaning_SemanticType.LINE)) {
            row.role = role;
            return;
        }
        if (isType(row, semantic_meaning_SemanticType.ROW)) {
            row.role = role;
            row.childNodes.forEach(function (cell) {
                if (isType(cell, semantic_meaning_SemanticType.CELL)) {
                    cell.role = role;
                }
            });
        }
    }
    static nextSeparatorFunction_(separators) {
        let sepList;
        if (separators) {
            if (separators.match(/^\s+$/)) {
                return null;
            }
            else {
                sepList = separators
                    .replace(/\s/g, '')
                    .split('')
                    .filter(function (x) {
                    return x;
                });
            }
        }
        else {
            sepList = [','];
        }
        return function () {
            if (sepList.length > 1) {
                return sepList.shift();
            }
            return sepList[0];
        };
    }
    static meaningFromContent(node, func) {
        const content = [...node.textContent].filter((x) => x.match(/[^\s]/));
        const meaning = content.map((x) => SemanticMap.Meaning.get(x));
        func(node, content, meaning);
    }
    static numberRole_(node, content, meaning) {
        if (node.role !== semantic_meaning_SemanticRole.UNKNOWN) {
            return;
        }
        if (meaning.every(function (x) {
            return ((x.type === semantic_meaning_SemanticType.NUMBER && x.role === semantic_meaning_SemanticRole.INTEGER) ||
                (x.type === semantic_meaning_SemanticType.PUNCTUATION && x.role === semantic_meaning_SemanticRole.COMMA));
        })) {
            node.role = semantic_meaning_SemanticRole.INTEGER;
            if (content[0] === '0') {
                node.addAnnotation('general', 'basenumber');
            }
            return;
        }
        if (meaning.every(function (x) {
            return ((x.type === semantic_meaning_SemanticType.NUMBER && x.role === semantic_meaning_SemanticRole.INTEGER) ||
                x.type === semantic_meaning_SemanticType.PUNCTUATION);
        })) {
            node.role = semantic_meaning_SemanticRole.FLOAT;
            return;
        }
        node.role = semantic_meaning_SemanticRole.OTHERNUMBER;
    }
    static exprFont_(node) {
        if (node.font !== SemanticFont.UNKNOWN) {
            return;
        }
        SemanticProcessor.compSemantics(node, 'font', SemanticFont);
    }
    static compSemantics(node, field, sem) {
        const content = [...node.textContent];
        const meaning = content.map((x) => SemanticMap.Meaning.get(x));
        const single = meaning.reduce(function (prev, curr) {
            if (!prev ||
                !curr[field] ||
                curr[field] === sem.UNKNOWN ||
                curr[field] === prev) {
                return prev;
            }
            if (prev === sem.UNKNOWN) {
                return curr[field];
            }
            return null;
        }, sem.UNKNOWN);
        if (single) {
            node[field] = single;
        }
    }
    static purgeFences_(partition) {
        const rel = partition.rel;
        const comp = partition.comp;
        const newRel = [];
        const newComp = [];
        while (rel.length > 0) {
            const currentRel = rel.shift();
            let currentComp = comp.shift();
            if (isElligibleEmbellishedFence(currentRel)) {
                newRel.push(currentRel);
                newComp.push(currentComp);
                continue;
            }
            SemanticProcessor.fenceToPunct_(currentRel);
            currentComp.push(currentRel);
            currentComp = currentComp.concat(comp.shift());
            comp.unshift(currentComp);
        }
        newComp.push(comp.shift());
        return { rel: newRel, comp: newComp };
    }
    static rewriteFencedNode_(fenced) {
        const ofence = fenced.contentNodes[0];
        const cfence = fenced.contentNodes[1];
        let rewritten = SemanticProcessor.rewriteFence_(fenced, ofence);
        fenced.contentNodes[0] = rewritten.fence;
        rewritten = SemanticProcessor.rewriteFence_(rewritten.node, cfence);
        fenced.contentNodes[1] = rewritten.fence;
        fenced.contentNodes[0].parent = fenced;
        fenced.contentNodes[1].parent = fenced;
        rewritten.node.parent = null;
        return rewritten.node;
    }
    static rewriteFence_(node, fence) {
        if (!fence.embellished) {
            return { node: node, fence: fence };
        }
        const newFence = fence.childNodes[0];
        const rewritten = SemanticProcessor.rewriteFence_(node, newFence);
        if (isType(fence, semantic_meaning_SemanticType.SUPERSCRIPT) ||
            isType(fence, semantic_meaning_SemanticType.SUBSCRIPT) ||
            isType(fence, semantic_meaning_SemanticType.TENSOR)) {
            if (!isRole(fence, semantic_meaning_SemanticRole.SUBSUP)) {
                fence.role = node.role;
            }
            if (newFence !== rewritten.node) {
                fence.replaceChild(newFence, rewritten.node);
                newFence.parent = node;
            }
            SemanticProcessor.propagateFencePointer_(fence, newFence);
            return { node: fence, fence: rewritten.fence };
        }
        fence.replaceChild(newFence, rewritten.fence);
        if (fence.mathmlTree && fence.mathml.indexOf(fence.mathmlTree) === -1) {
            fence.mathml.push(fence.mathmlTree);
        }
        return { node: rewritten.node, fence: fence };
    }
    static propagateFencePointer_(oldNode, newNode) {
        oldNode.fencePointer = newNode.fencePointer || newNode.id.toString();
        oldNode.embellished = null;
    }
    static classifyByColumns_(table, columns, relation, alternatives = []) {
        const relations = [relation].concat(alternatives);
        const test1 = (x) => SemanticProcessor.isPureRelation_(x, relations);
        const test2 = (x) => SemanticProcessor.isEndRelation_(x, relations) ||
            SemanticProcessor.isPureRelation_(x, relations);
        const test3 = (x) => SemanticProcessor.isEndRelation_(x, relations, true) ||
            SemanticProcessor.isPureRelation_(x, relations);
        if ((columns.length === 3 &&
            SemanticProcessor.testColumns_(columns, 1, test1)) ||
            (columns.length === 2 &&
                (SemanticProcessor.testColumns_(columns, 1, test2) ||
                    SemanticProcessor.testColumns_(columns, 0, test3)))) {
            table.role = relation;
            return true;
        }
        return false;
    }
    static isEndRelation_(node, relations, opt_right) {
        const position = opt_right ? node.childNodes.length - 1 : 0;
        return (isType(node, semantic_meaning_SemanticType.RELSEQ) &&
            relations.some((relation) => isRole(node, relation)) &&
            isType(node.childNodes[position], semantic_meaning_SemanticType.EMPTY));
    }
    static isPureRelation_(node, relations) {
        return (isType(node, semantic_meaning_SemanticType.RELATION) &&
            relations.some((relation) => isRole(node, relation)));
    }
    static computeColumns_(table) {
        const columns = [];
        for (let i = 0, row; (row = table.childNodes[i]); i++) {
            for (let j = 0, cell; (cell = row.childNodes[j]); j++) {
                const column = columns[j];
                column ? columns[j].push(cell) : (columns[j] = [cell]);
            }
        }
        return columns;
    }
    static testColumns_(columns, index, pred) {
        const column = columns[index];
        return column
            ? column.some(function (cell) {
                return (cell.childNodes.length && pred(cell.childNodes[0]));
            }) &&
                column.every(function (cell) {
                    return (!cell.childNodes.length ||
                        pred(cell.childNodes[0]));
                })
            : false;
    }
    setNodeFactory(factory) {
        SemanticProcessor.getInstance().factory_ = factory;
        SemanticHeuristics.updateFactory(SemanticProcessor.getInstance().factory_);
    }
    getNodeFactory() {
        return SemanticProcessor.getInstance().factory_;
    }
    identifierNode(leaf, font, unit) {
        if (unit === 'MathML-Unit') {
            leaf.type = semantic_meaning_SemanticType.IDENTIFIER;
            leaf.role = semantic_meaning_SemanticRole.UNIT;
        }
        else if (!font &&
            leaf.textContent.length === 1 &&
            (leaf.role === semantic_meaning_SemanticRole.INTEGER ||
                leaf.role === semantic_meaning_SemanticRole.LATINLETTER ||
                leaf.role === semantic_meaning_SemanticRole.GREEKLETTER) &&
            leaf.font === SemanticFont.NORMAL) {
            leaf.font = SemanticFont.ITALIC;
            return SemanticHeuristics.run('simpleNamedFunction', leaf);
        }
        if (leaf.type === semantic_meaning_SemanticType.UNKNOWN) {
            leaf.type = semantic_meaning_SemanticType.IDENTIFIER;
        }
        SemanticProcessor.exprFont_(leaf);
        return SemanticHeuristics.run('simpleNamedFunction', leaf);
    }
    implicitNode(nodes) {
        nodes = SemanticProcessor.getInstance().getMixedNumbers_(nodes);
        nodes = SemanticProcessor.getInstance().combineUnits_(nodes);
        if (nodes.length === 1) {
            return nodes[0];
        }
        const node = SemanticProcessor.getInstance().implicitNode_(nodes);
        return SemanticHeuristics.run('combine_juxtaposition', node);
    }
    text(leaf, type) {
        SemanticProcessor.exprFont_(leaf);
        leaf.type = semantic_meaning_SemanticType.TEXT;
        if (type === MMLTAGS.ANNOTATIONXML) {
            leaf.role = semantic_meaning_SemanticRole.ANNOTATION;
            return leaf;
        }
        if (type === MMLTAGS.MS) {
            leaf.role = semantic_meaning_SemanticRole.STRING;
            return leaf;
        }
        if (type === MMLTAGS.MSPACE || leaf.textContent.match(/^\s*$/)) {
            leaf.role = semantic_meaning_SemanticRole.SPACE;
            return leaf;
        }
        if (/\s/.exec(leaf.textContent)) {
            leaf.role = semantic_meaning_SemanticRole.TEXT;
            return leaf;
        }
        leaf.role = semantic_meaning_SemanticRole.UNKNOWN;
        return leaf;
    }
    row(nodes) {
        nodes = nodes.filter(function (x) {
            return !isType(x, semantic_meaning_SemanticType.EMPTY);
        });
        if (nodes.length === 0) {
            return SemanticProcessor.getInstance().factory_.makeEmptyNode();
        }
        nodes = SemanticProcessor.getInstance().getFencesInRow_(nodes);
        nodes = SemanticProcessor.getInstance().tablesInRow(nodes);
        nodes = SemanticProcessor.getInstance().getPunctuationInRow_(nodes);
        nodes = SemanticProcessor.getInstance().getTextInRow_(nodes);
        nodes = SemanticProcessor.getInstance().getFunctionsInRow_(nodes);
        return SemanticProcessor.getInstance().relationsInRow_(nodes);
    }
    limitNode(mmlTag, children) {
        if (!children.length) {
            return SemanticProcessor.getInstance().factory_.makeEmptyNode();
        }
        let center = children[0];
        let type = semantic_meaning_SemanticType.UNKNOWN;
        if (!children[1]) {
            return center;
        }
        let result;
        SemanticHeuristics.run('op_with_limits', children);
        if (isLimitBase(center)) {
            result = SemanticProcessor.MML_TO_LIMIT_[mmlTag];
            const length = result.length;
            type = result.type;
            children = children.slice(0, result.length + 1);
            if ((length === 1 && isAccent(children[1])) ||
                (length === 2 &&
                    isAccent(children[1]) &&
                    isAccent(children[2]))) {
                result = SemanticProcessor.MML_TO_BOUNDS_[mmlTag];
                return SemanticProcessor.getInstance().accentNode_(center, children, result.type, result.length, result.accent);
            }
            if (length === 2) {
                if (isAccent(children[1])) {
                    center = SemanticProcessor.getInstance().accentNode_(center, [center, children[1]], {
                        MSUBSUP: semantic_meaning_SemanticType.SUBSCRIPT,
                        MUNDEROVER: semantic_meaning_SemanticType.UNDERSCORE
                    }[mmlTag], 1, true);
                    return !children[2]
                        ? center
                        : SemanticProcessor.getInstance().makeLimitNode_(center, [center, children[2]], null, semantic_meaning_SemanticType.LIMUPPER);
                }
                if (children[2] && isAccent(children[2])) {
                    center = SemanticProcessor.getInstance().accentNode_(center, [center, children[2]], {
                        MSUBSUP: semantic_meaning_SemanticType.SUPERSCRIPT,
                        MUNDEROVER: semantic_meaning_SemanticType.OVERSCORE
                    }[mmlTag], 1, true);
                    return SemanticProcessor.getInstance().makeLimitNode_(center, [center, children[1]], null, semantic_meaning_SemanticType.LIMLOWER);
                }
                if (!children[length]) {
                    type = semantic_meaning_SemanticType.LIMLOWER;
                }
            }
            return SemanticProcessor.getInstance().makeLimitNode_(center, children, null, type);
        }
        result = SemanticProcessor.MML_TO_BOUNDS_[mmlTag];
        return SemanticProcessor.getInstance().accentNode_(center, children, result.type, result.length, result.accent);
    }
    tablesInRow(nodes) {
        let partition = partitionNodes(nodes, tableIsMatrixOrVector);
        let result = [];
        for (let i = 0, matrix; (matrix = partition.rel[i]); i++) {
            result = result.concat(partition.comp.shift());
            result.push(SemanticProcessor.tableToMatrixOrVector_(matrix));
        }
        result = result.concat(partition.comp.shift());
        partition = partitionNodes(result, isTableOrMultiline);
        result = [];
        for (let i = 0, table; (table = partition.rel[i]); i++) {
            const prevNodes = partition.comp.shift();
            if (tableIsCases(table, prevNodes)) {
                SemanticProcessor.tableToCases_(table, prevNodes.pop());
            }
            result = result.concat(prevNodes);
            result.push(table);
        }
        return result.concat(partition.comp.shift());
    }
    mfenced(open, close, sepValue, children) {
        if (sepValue && children.length > 0) {
            const separators = SemanticProcessor.nextSeparatorFunction_(sepValue);
            const newChildren = [children.shift()];
            children.forEach((child) => {
                newChildren.push(SemanticProcessor.getInstance().factory_.makeContentNode(separators()));
                newChildren.push(child);
            });
            children = newChildren;
        }
        if (open && close) {
            return SemanticProcessor.getInstance().horizontalFencedNode_(SemanticProcessor.getInstance().factory_.makeContentNode(open), SemanticProcessor.getInstance().factory_.makeContentNode(close), children);
        }
        if (open) {
            children.unshift(SemanticProcessor.getInstance().factory_.makeContentNode(open));
        }
        if (close) {
            children.push(SemanticProcessor.getInstance().factory_.makeContentNode(close));
        }
        return SemanticProcessor.getInstance().row(children);
    }
    fractionLikeNode(denom, enume, linethickness, bevelled) {
        let node;
        if (!bevelled && isZeroLength(linethickness)) {
            const child0 = SemanticProcessor.getInstance().factory_.makeBranchNode(semantic_meaning_SemanticType.LINE, [denom], []);
            const child1 = SemanticProcessor.getInstance().factory_.makeBranchNode(semantic_meaning_SemanticType.LINE, [enume], []);
            node = SemanticProcessor.getInstance().factory_.makeBranchNode(semantic_meaning_SemanticType.MULTILINE, [child0, child1], []);
            SemanticProcessor.binomialForm_(node);
            SemanticProcessor.classifyMultiline(node);
            return node;
        }
        else {
            node = SemanticProcessor.getInstance().fractionNode_(denom, enume);
            if (bevelled) {
                node.addAnnotation('general', 'bevelled');
            }
            return node;
        }
    }
    tensor(base, lsub, lsup, rsub, rsup) {
        const newNode = SemanticProcessor.getInstance().factory_.makeBranchNode(semantic_meaning_SemanticType.TENSOR, [
            base,
            SemanticProcessor.getInstance().scriptNode_(lsub, semantic_meaning_SemanticRole.LEFTSUB),
            SemanticProcessor.getInstance().scriptNode_(lsup, semantic_meaning_SemanticRole.LEFTSUPER),
            SemanticProcessor.getInstance().scriptNode_(rsub, semantic_meaning_SemanticRole.RIGHTSUB),
            SemanticProcessor.getInstance().scriptNode_(rsup, semantic_meaning_SemanticRole.RIGHTSUPER)
        ], []);
        newNode.role = base.role;
        newNode.embellished = isEmbellished(base);
        return newNode;
    }
    pseudoTensor(base, sub, sup) {
        const isEmpty = (x) => !isType(x, semantic_meaning_SemanticType.EMPTY);
        const nonEmptySub = sub.filter(isEmpty).length;
        const nonEmptySup = sup.filter(isEmpty).length;
        if (!nonEmptySub && !nonEmptySup) {
            return base;
        }
        const mmlTag = nonEmptySub
            ? nonEmptySup
                ? MMLTAGS.MSUBSUP
                : MMLTAGS.MSUB
            : MMLTAGS.MSUP;
        const mmlchild = [base];
        if (nonEmptySub) {
            mmlchild.push(SemanticProcessor.getInstance().scriptNode_(sub, semantic_meaning_SemanticRole.RIGHTSUB, true));
        }
        if (nonEmptySup) {
            mmlchild.push(SemanticProcessor.getInstance().scriptNode_(sup, semantic_meaning_SemanticRole.RIGHTSUPER, true));
        }
        return SemanticProcessor.getInstance().limitNode(mmlTag, mmlchild);
    }
    font(font) {
        const mathjaxFont = SemanticProcessor.MATHJAX_FONTS[font];
        return mathjaxFont ? mathjaxFont : font;
    }
    proof(node, semantics, parse) {
        if (!semantics['inference'] && !semantics['axiom']) {
            console.log('Noise');
        }
        if (semantics['axiom']) {
            const cleaned = SemanticProcessor.getInstance().cleanInference(node.childNodes);
            const axiom = cleaned.length
                ? SemanticProcessor.getInstance().factory_.makeBranchNode(semantic_meaning_SemanticType.INFERENCE, parse(cleaned), [])
                : SemanticProcessor.getInstance().factory_.makeEmptyNode();
            axiom.role = semantic_meaning_SemanticRole.AXIOM;
            axiom.mathmlTree = node;
            return axiom;
        }
        const inference = SemanticProcessor.getInstance().inference(node, semantics, parse);
        if (semantics['proof']) {
            inference.role = semantic_meaning_SemanticRole.PROOF;
            inference.childNodes[0].role = semantic_meaning_SemanticRole.FINAL;
        }
        return inference;
    }
    inference(node, semantics, parse) {
        if (semantics['inferenceRule']) {
            const formulas = SemanticProcessor.getInstance().getFormulas(node, [], parse);
            const inference = SemanticProcessor.getInstance().factory_.makeBranchNode(semantic_meaning_SemanticType.INFERENCE, [formulas.conclusion, formulas.premises], []);
            return inference;
        }
        const label = semantics['labelledRule'];
        const children = toArray(node.childNodes);
        const content = [];
        if (label === 'left' || label === 'both') {
            content.push(SemanticProcessor.getInstance().getLabel(node, children, parse, semantic_meaning_SemanticRole.LEFT));
        }
        if (label === 'right' || label === 'both') {
            content.push(SemanticProcessor.getInstance().getLabel(node, children, parse, semantic_meaning_SemanticRole.RIGHT));
        }
        const formulas = SemanticProcessor.getInstance().getFormulas(node, children, parse);
        const inference = SemanticProcessor.getInstance().factory_.makeBranchNode(semantic_meaning_SemanticType.INFERENCE, [formulas.conclusion, formulas.premises], content);
        inference.mathmlTree = node;
        return inference;
    }
    getLabel(_node, children, parse, side) {
        const label = SemanticProcessor.getInstance().findNestedRow(children, 'prooflabel', side);
        const sem = SemanticProcessor.getInstance().factory_.makeBranchNode(semantic_meaning_SemanticType.RULELABEL, parse(toArray(label.childNodes)), []);
        sem.role = side;
        sem.mathmlTree = label;
        return sem;
    }
    getFormulas(node, children, parse) {
        const inf = children.length
            ? SemanticProcessor.getInstance().findNestedRow(children, 'inferenceRule')
            : node;
        const up = SemanticProcessor.getSemantics(inf)['inferenceRule'] === 'up';
        const premRow = up ? inf.childNodes[1] : inf.childNodes[0];
        const concRow = up ? inf.childNodes[0] : inf.childNodes[1];
        const premTable = premRow.childNodes[0].childNodes[0];
        const topRow = toArray(premTable.childNodes[0].childNodes);
        const premNodes = [];
        let i = 1;
        for (const cell of topRow) {
            if (i % 2) {
                premNodes.push(cell.childNodes[0]);
            }
            i++;
        }
        const premises = parse(premNodes);
        const conclusion = parse(toArray(concRow.childNodes[0].childNodes))[0];
        const prem = SemanticProcessor.getInstance().factory_.makeBranchNode(semantic_meaning_SemanticType.PREMISES, premises, []);
        prem.mathmlTree = premTable;
        const conc = SemanticProcessor.getInstance().factory_.makeBranchNode(semantic_meaning_SemanticType.CONCLUSION, [conclusion], []);
        conc.mathmlTree = concRow.childNodes[0].childNodes[0];
        return { conclusion: conc, premises: prem };
    }
    findNestedRow(nodes, semantic, opt_value) {
        return SemanticProcessor.getInstance().findNestedRow_(nodes, semantic, 0, opt_value);
    }
    cleanInference(nodes) {
        return toArray(nodes).filter(function (x) {
            return dom_util_tagName(x) !== 'MSPACE';
        });
    }
    operatorNode(node) {
        if (node.type === semantic_meaning_SemanticType.UNKNOWN) {
            node.type = semantic_meaning_SemanticType.OPERATOR;
        }
        return SemanticHeuristics.run('multioperator', node);
    }
    constructor() {
        this.funcAppls = {};
        this.splitRoles = new Map([
            [semantic_meaning_SemanticRole.SUBTRACTION, semantic_meaning_SemanticRole.NEGATIVE],
            [semantic_meaning_SemanticRole.ADDITION, semantic_meaning_SemanticRole.POSITIVE]
        ]);
        this.splitOps = ['−', '-', '‐', '‑', '+'];
        this.factory_ = new SemanticNodeFactory();
        SemanticHeuristics.updateFactory(this.factory_);
    }
    implicitNode_(nodes) {
        const operators = SemanticProcessor.getInstance().factory_.makeMultipleContentNodes(nodes.length - 1, NamedSymbol.invisibleTimes);
        SemanticProcessor.matchSpaces_(nodes, operators);
        const newNode = SemanticProcessor.getInstance().infixNode_(nodes, operators[0]);
        newNode.role = semantic_meaning_SemanticRole.IMPLICIT;
        operators.forEach(function (op) {
            op.parent = newNode;
        });
        newNode.contentNodes = operators;
        return newNode;
    }
    infixNode_(children, opNode) {
        let node = SemanticProcessor.getInstance().factory_.makeBranchNode(semantic_meaning_SemanticType.INFIXOP, children, [opNode], getEmbellishedInner(opNode).textContent);
        node.role = opNode.role;
        node = SemanticHeuristics.run('propagateInterval', node);
        return SemanticHeuristics.run('propagateSimpleFunction', node);
    }
    explicitMixed_(nodes) {
        const partition = partitionNodes(nodes, function (x) {
            return x.textContent === NamedSymbol.invisiblePlus;
        });
        if (!partition.rel.length) {
            return nodes;
        }
        let result = [];
        for (let i = 0, rel; (rel = partition.rel[i]); i++) {
            const prev = partition.comp[i];
            const next = partition.comp[i + 1];
            const last = prev.length - 1;
            if (prev[last] &&
                next[0] &&
                isType(prev[last], semantic_meaning_SemanticType.NUMBER) &&
                !isRole(prev[last], semantic_meaning_SemanticRole.MIXED) &&
                isType(next[0], semantic_meaning_SemanticType.FRACTION)) {
                const newNode = SemanticProcessor.getInstance().factory_.makeBranchNode(semantic_meaning_SemanticType.NUMBER, [prev[last], next[0]], []);
                newNode.role = semantic_meaning_SemanticRole.MIXED;
                result = result.concat(prev.slice(0, last));
                result.push(newNode);
                next.shift();
            }
            else {
                result = result.concat(prev);
                result.push(rel);
            }
        }
        return result.concat(partition.comp[partition.comp.length - 1]);
    }
    concatNode_(inner, nodeList, type) {
        if (nodeList.length === 0) {
            return inner;
        }
        const content = nodeList
            .map(function (x) {
            return getEmbellishedInner(x).textContent;
        })
            .join(' ');
        const newNode = SemanticProcessor.getInstance().factory_.makeBranchNode(type, [inner], nodeList, content);
        if (nodeList.length > 1) {
            newNode.role = semantic_meaning_SemanticRole.MULTIOP;
        }
        return newNode;
    }
    prefixNode_(node, prefixes) {
        const newPrefixes = this.splitSingles(prefixes);
        let newNode = node;
        while (newPrefixes.length > 0) {
            const op = newPrefixes.pop();
            newNode = SemanticProcessor.getInstance().concatNode_(newNode, op, semantic_meaning_SemanticType.PREFIXOP);
            if (op.length === 1 && this.splitOps.indexOf(op[0].textContent) !== -1) {
                newNode.role = this.splitRoles.get(op[0].role);
            }
        }
        return newNode;
    }
    splitSingles(prefixes) {
        let lastOp = 0;
        const result = [];
        let i = 0;
        while (i < prefixes.length) {
            const op = prefixes[i];
            if (this.splitRoles.has(op.role) &&
                (!prefixes[i - 1] || prefixes[i - 1].role !== op.role) &&
                (!prefixes[i + 1] || prefixes[i + 1].role !== op.role) &&
                this.splitOps.indexOf(op.textContent) !== -1) {
                result.push(prefixes.slice(lastOp, i));
                result.push(prefixes.slice(i, i + 1));
                lastOp = i + 1;
            }
            i++;
        }
        if (lastOp < i) {
            result.push(prefixes.slice(lastOp, i));
        }
        return result;
    }
    postfixNode_(node, postfixes) {
        if (!postfixes.length) {
            return node;
        }
        return SemanticProcessor.getInstance().concatNode_(node, postfixes, semantic_meaning_SemanticType.POSTFIXOP);
    }
    combineUnits_(nodes) {
        const partition = partitionNodes(nodes, function (x) {
            return !isRole(x, semantic_meaning_SemanticRole.UNIT);
        });
        if (nodes.length === partition.rel.length) {
            return partition.rel;
        }
        const result = [];
        let rel;
        let last;
        do {
            const comp = partition.comp.shift();
            rel = partition.rel.shift();
            let unitNode = null;
            last = result.pop();
            if (last) {
                if (!comp.length || !isUnitCounter(last)) {
                    result.push(last);
                }
                else {
                    comp.unshift(last);
                }
            }
            if (comp.length === 1) {
                unitNode = comp.pop();
            }
            if (comp.length > 1) {
                unitNode = SemanticProcessor.getInstance().implicitNode_(comp);
                unitNode.role = semantic_meaning_SemanticRole.UNIT;
            }
            if (unitNode) {
                result.push(unitNode);
            }
            if (rel) {
                result.push(rel);
            }
        } while (rel);
        return result;
    }
    getMixedNumbers_(nodes) {
        const partition = partitionNodes(nodes, function (x) {
            return (isType(x, semantic_meaning_SemanticType.FRACTION) &&
                isRole(x, semantic_meaning_SemanticRole.VULGAR));
        });
        if (!partition.rel.length) {
            return nodes;
        }
        let result = [];
        for (let i = 0, rel; (rel = partition.rel[i]); i++) {
            const comp = partition.comp[i];
            const last = comp.length - 1;
            if (comp[last] &&
                isType(comp[last], semantic_meaning_SemanticType.NUMBER) &&
                (isRole(comp[last], semantic_meaning_SemanticRole.INTEGER) ||
                    isRole(comp[last], semantic_meaning_SemanticRole.FLOAT))) {
                const newNode = SemanticProcessor.getInstance().factory_.makeBranchNode(semantic_meaning_SemanticType.NUMBER, [comp[last], rel], []);
                newNode.role = semantic_meaning_SemanticRole.MIXED;
                result = result.concat(comp.slice(0, last));
                result.push(newNode);
            }
            else {
                result = result.concat(comp);
                result.push(rel);
            }
        }
        return result.concat(partition.comp[partition.comp.length - 1]);
    }
    getTextInRow_(nodes) {
        if (nodes.length === 0) {
            return nodes;
        }
        if (nodes.length === 1) {
            if (nodes[0].type === semantic_meaning_SemanticType.TEXT &&
                nodes[0].role === semantic_meaning_SemanticRole.UNKNOWN) {
                nodes[0].role = semantic_meaning_SemanticRole.ANNOTATION;
            }
            return nodes;
        }
        const { rel: rel, comp: comp } = partitionNodes(nodes, (x) => isType(x, semantic_meaning_SemanticType.TEXT));
        if (rel.length === 0) {
            return nodes;
        }
        const result = [];
        let prevComp = comp.shift();
        while (rel.length > 0) {
            let currentRel = rel.shift();
            let nextComp = comp.shift();
            const text = [];
            while (!nextComp.length &&
                rel.length &&
                currentRel.role !== semantic_meaning_SemanticRole.SPACE &&
                rel[0].role !== semantic_meaning_SemanticRole.SPACE) {
                text.push(currentRel);
                currentRel = rel.shift();
                nextComp = comp.shift();
            }
            if (text.length) {
                if (prevComp.length) {
                    result.push(SemanticProcessor.getInstance().row(prevComp));
                }
                text.push(currentRel);
                const dummy = SemanticProcessor.getInstance().dummyNode_(text);
                result.push(dummy);
                prevComp = nextComp;
                continue;
            }
            if (currentRel.role !== semantic_meaning_SemanticRole.UNKNOWN) {
                if (prevComp.length) {
                    result.push(SemanticProcessor.getInstance().row(prevComp));
                }
                result.push(currentRel);
                prevComp = nextComp;
                continue;
            }
            const meaning = SemanticMap.Meaning.get(currentRel.textContent);
            if (meaning.type === semantic_meaning_SemanticType.PUNCTUATION) {
                currentRel.role = meaning.role;
                currentRel.font = meaning.font;
                if (prevComp.length) {
                    result.push(SemanticProcessor.getInstance().row(prevComp));
                }
                result.push(currentRel);
                prevComp = nextComp;
                continue;
            }
            if (meaning.type !== semantic_meaning_SemanticType.UNKNOWN) {
                currentRel.type = meaning.type;
                currentRel.role = meaning.role;
                currentRel.font = meaning.font;
                currentRel.addAnnotation('general', 'text');
                prevComp.push(currentRel);
                prevComp = prevComp.concat(nextComp);
                continue;
            }
            SemanticProcessor.meaningFromContent(currentRel, (n, c, m) => {
                if (n.role !== semantic_meaning_SemanticRole.UNKNOWN) {
                    return;
                }
                SemanticProcessor.numberRole_(n, c, m);
                if (n.role !== semantic_meaning_SemanticRole.OTHERNUMBER) {
                    n.type = semantic_meaning_SemanticType.NUMBER;
                    return;
                }
                if (m.some((x) => x.type !== semantic_meaning_SemanticType.NUMBER &&
                    x.type !== semantic_meaning_SemanticType.IDENTIFIER)) {
                    n.type = semantic_meaning_SemanticType.TEXT;
                    n.role = semantic_meaning_SemanticRole.ANNOTATION;
                    return;
                }
                n.role = semantic_meaning_SemanticRole.UNKNOWN;
            });
            if (currentRel.type === semantic_meaning_SemanticType.TEXT &&
                currentRel.role !== semantic_meaning_SemanticRole.UNKNOWN) {
                if (prevComp.length) {
                    result.push(SemanticProcessor.getInstance().row(prevComp));
                }
                result.push(currentRel);
                prevComp = nextComp;
                continue;
            }
            if (currentRel.role === semantic_meaning_SemanticRole.UNKNOWN) {
                if (rel.length || nextComp.length) {
                    if (nextComp.length && nextComp[0].type === semantic_meaning_SemanticType.FENCED) {
                        currentRel.type = semantic_meaning_SemanticType.FUNCTION;
                        currentRel.role = semantic_meaning_SemanticRole.PREFIXFUNC;
                    }
                    else {
                        currentRel.role = semantic_meaning_SemanticRole.TEXT;
                    }
                }
                else {
                    currentRel.type = semantic_meaning_SemanticType.IDENTIFIER;
                    currentRel.role = semantic_meaning_SemanticRole.UNIT;
                }
            }
            prevComp.push(currentRel);
            prevComp = prevComp.concat(nextComp);
        }
        if (prevComp.length > 0) {
            result.push(SemanticProcessor.getInstance().row(prevComp));
        }
        return result.length > 1
            ? [SemanticProcessor.getInstance().dummyNode_(result)]
            : result;
    }
    relationsInRow_(nodes) {
        const partition = partitionNodes(nodes, isRelation);
        const firstRel = partition.rel[0];
        if (!firstRel) {
            return SemanticProcessor.getInstance().operationsInRow_(nodes);
        }
        if (nodes.length === 1) {
            return nodes[0];
        }
        const children = partition.comp.map(SemanticProcessor.getInstance().operationsInRow_);
        let node;
        if (partition.rel.some(function (x) {
            return !x.equals(firstRel);
        })) {
            node = SemanticProcessor.getInstance().factory_.makeBranchNode(semantic_meaning_SemanticType.MULTIREL, children, partition.rel);
            if (partition.rel.every(function (x) {
                return x.role === firstRel.role;
            })) {
                node.role = firstRel.role;
            }
            return node;
        }
        node = SemanticProcessor.getInstance().factory_.makeBranchNode(semantic_meaning_SemanticType.RELSEQ, children, partition.rel, getEmbellishedInner(firstRel).textContent);
        node.role = firstRel.role;
        return node;
    }
    operationsInRow_(nodes) {
        if (nodes.length === 0) {
            return SemanticProcessor.getInstance().factory_.makeEmptyNode();
        }
        nodes = SemanticProcessor.getInstance().explicitMixed_(nodes);
        if (nodes.length === 1) {
            return nodes[0];
        }
        const prefix = [];
        while (nodes.length > 0 && isOperator(nodes[0])) {
            prefix.push(nodes.shift());
        }
        if (nodes.length === 0) {
            return SemanticProcessor.getInstance().prefixNode_(prefix.pop(), prefix);
        }
        if (nodes.length === 1) {
            return SemanticProcessor.getInstance().prefixNode_(nodes[0], prefix);
        }
        nodes = SemanticHeuristics.run('convert_juxtaposition', nodes);
        const split = sliceNodes(nodes, isOperator);
        const node = SemanticProcessor.getInstance().wrapFactor(prefix, split);
        return SemanticProcessor.getInstance().addFactor(node, split);
    }
    wrapPostfix(split) {
        var _a;
        if (((_a = split.div) === null || _a === void 0 ? void 0 : _a.role) === semantic_meaning_SemanticRole.POSTFIXOP) {
            if (!split.tail.length || split.tail[0].type === semantic_meaning_SemanticType.OPERATOR) {
                split.head = [
                    SemanticProcessor.getInstance().postfixNode_(SemanticProcessor.getInstance().implicitNode(split.head), [split.div])
                ];
                split.div = split.tail.shift();
                SemanticProcessor.getInstance().wrapPostfix(split);
            }
            else {
                split.div.role = semantic_meaning_SemanticRole.DIVISION;
            }
        }
    }
    wrapFactor(prefix, split) {
        SemanticProcessor.getInstance().wrapPostfix(split);
        return SemanticProcessor.getInstance().prefixNode_(SemanticProcessor.getInstance().implicitNode(split.head), prefix);
    }
    addFactor(node, split) {
        if (!split.div) {
            if (isUnitProduct(node)) {
                node.role = semantic_meaning_SemanticRole.UNIT;
            }
            return node;
        }
        return SemanticProcessor.getInstance().operationsTree_(split.tail, node, split.div);
    }
    operationsTree_(nodes, root, lastop, prefix = []) {
        if (nodes.length === 0) {
            prefix.unshift(lastop);
            if (root.type === semantic_meaning_SemanticType.INFIXOP) {
                const node = SemanticProcessor.getInstance().postfixNode_(root.childNodes.pop(), prefix);
                root.appendChild(node);
                return root;
            }
            return SemanticProcessor.getInstance().postfixNode_(root, prefix);
        }
        const split = sliceNodes(nodes, isOperator);
        if (split.head.length === 0) {
            prefix.push(split.div);
            return SemanticProcessor.getInstance().operationsTree_(split.tail, root, lastop, prefix);
        }
        const node = SemanticProcessor.getInstance().wrapFactor(prefix, split);
        const newNode = SemanticProcessor.getInstance().appendOperand_(root, lastop, node);
        return SemanticProcessor.getInstance().addFactor(newNode, split);
    }
    appendOperand_(root, op, node) {
        if (root.type !== semantic_meaning_SemanticType.INFIXOP) {
            return SemanticProcessor.getInstance().infixNode_([root, node], op);
        }
        const division = SemanticProcessor.getInstance().appendDivisionOp_(root, op, node);
        if (division) {
            return division;
        }
        if (SemanticProcessor.getInstance().appendExistingOperator_(root, op, node)) {
            return root;
        }
        return op.role === semantic_meaning_SemanticRole.MULTIPLICATION
            ? SemanticProcessor.getInstance().appendMultiplicativeOp_(root, op, node)
            : SemanticProcessor.getInstance().appendAdditiveOp_(root, op, node);
    }
    appendDivisionOp_(root, op, node) {
        if (op.role === semantic_meaning_SemanticRole.DIVISION) {
            if (isImplicit(root)) {
                return SemanticProcessor.getInstance().infixNode_([root, node], op);
            }
            return SemanticProcessor.getInstance().appendLastOperand_(root, op, node);
        }
        return root.role === semantic_meaning_SemanticRole.DIVISION
            ? SemanticProcessor.getInstance().infixNode_([root, node], op)
            : null;
    }
    appendLastOperand_(root, op, node) {
        let lastRoot = root;
        let lastChild = root.childNodes[root.childNodes.length - 1];
        while (lastChild &&
            lastChild.type === semantic_meaning_SemanticType.INFIXOP &&
            !isImplicit(lastChild)) {
            lastRoot = lastChild;
            lastChild = lastRoot.childNodes[root.childNodes.length - 1];
        }
        const newNode = SemanticProcessor.getInstance().infixNode_([lastRoot.childNodes.pop(), node], op);
        lastRoot.appendChild(newNode);
        return root;
    }
    appendMultiplicativeOp_(root, op, node) {
        if (isImplicit(root)) {
            return SemanticProcessor.getInstance().infixNode_([root, node], op);
        }
        let lastRoot = root;
        let lastChild = root.childNodes[root.childNodes.length - 1];
        while (lastChild &&
            lastChild.type === semantic_meaning_SemanticType.INFIXOP &&
            !isImplicit(lastChild)) {
            lastRoot = lastChild;
            lastChild = lastRoot.childNodes[root.childNodes.length - 1];
        }
        const newNode = SemanticProcessor.getInstance().infixNode_([lastRoot.childNodes.pop(), node], op);
        lastRoot.appendChild(newNode);
        return root;
    }
    appendAdditiveOp_(root, op, node) {
        return SemanticProcessor.getInstance().infixNode_([root, node], op);
    }
    appendExistingOperator_(root, op, node) {
        if (!root ||
            root.type !== semantic_meaning_SemanticType.INFIXOP ||
            isImplicit(root)) {
            return false;
        }
        if (root.contentNodes[0].equals(op)) {
            root.appendContentNode(op);
            root.appendChild(node);
            return true;
        }
        return SemanticProcessor.getInstance().appendExistingOperator_(root.childNodes[root.childNodes.length - 1], op, node);
    }
    getFencesInRow_(nodes) {
        let partition = partitionNodes(nodes, isFence);
        partition = SemanticProcessor.purgeFences_(partition);
        const felem = partition.comp.shift();
        return SemanticProcessor.getInstance().fences_(partition.rel, partition.comp, [], [felem]);
    }
    fences_(fences, content, openStack, contentStack) {
        if (fences.length === 0 && openStack.length === 0) {
            return contentStack[0];
        }
        const interval = SemanticHeuristics.run('bracketed_interval', [fences[0], fences[1], ...(content[0] || [])], () => null);
        if (interval) {
            fences.shift();
            fences.shift();
            content.shift();
            const stack = contentStack.pop() || [];
            contentStack.push([...stack, interval, ...content.shift()]);
            return SemanticProcessor.getInstance().fences_(fences, content, openStack, contentStack);
        }
        const openPred = (x) => isRole(x, semantic_meaning_SemanticRole.OPEN);
        if (fences.length === 0) {
            const result = contentStack.shift();
            while (openStack.length > 0) {
                if (openPred(openStack[0])) {
                    const firstOpen = openStack.shift();
                    SemanticProcessor.fenceToPunct_(firstOpen);
                    result.push(firstOpen);
                }
                else {
                    const split = sliceNodes(openStack, openPred);
                    const cutLength = split.head.length - 1;
                    const innerNodes = SemanticProcessor.getInstance().neutralFences_(split.head, contentStack.slice(0, cutLength));
                    contentStack = contentStack.slice(cutLength);
                    result.push(...innerNodes);
                    if (split.div) {
                        split.tail.unshift(split.div);
                    }
                    openStack = split.tail;
                }
                result.push(...contentStack.shift());
            }
            return result;
        }
        const lastOpen = openStack[openStack.length - 1];
        const firstRole = fences[0].role;
        if (firstRole === semantic_meaning_SemanticRole.OPEN ||
            (isNeutralFence(fences[0]) &&
                !(lastOpen && compareNeutralFences(fences[0], lastOpen)))) {
            openStack.push(fences.shift());
            const cont = content.shift();
            if (cont) {
                contentStack.push(cont);
            }
            return SemanticProcessor.getInstance().fences_(fences, content, openStack, contentStack);
        }
        if (lastOpen &&
            firstRole === semantic_meaning_SemanticRole.CLOSE &&
            lastOpen.role === semantic_meaning_SemanticRole.OPEN) {
            const fenced = SemanticProcessor.getInstance().horizontalFencedNode_(openStack.pop(), fences.shift(), contentStack.pop());
            contentStack.push(contentStack.pop().concat([fenced], content.shift()));
            return SemanticProcessor.getInstance().fences_(fences, content, openStack, contentStack);
        }
        if (lastOpen &&
            compareNeutralFences(fences[0], lastOpen)) {
            if (!elligibleLeftNeutral(lastOpen) ||
                !elligibleRightNeutral(fences[0])) {
                openStack.push(fences.shift());
                const cont = content.shift();
                if (cont) {
                    contentStack.push(cont);
                }
                return SemanticProcessor.getInstance().fences_(fences, content, openStack, contentStack);
            }
            const fenced = SemanticProcessor.getInstance().horizontalFencedNode_(openStack.pop(), fences.shift(), contentStack.pop());
            contentStack.push(contentStack.pop().concat([fenced], content.shift()));
            return SemanticProcessor.getInstance().fences_(fences, content, openStack, contentStack);
        }
        if (lastOpen &&
            firstRole === semantic_meaning_SemanticRole.CLOSE &&
            isNeutralFence(lastOpen) &&
            openStack.some(openPred)) {
            const split = sliceNodes(openStack, openPred, true);
            const rightContent = contentStack.pop();
            const cutLength = contentStack.length - split.tail.length + 1;
            const innerNodes = SemanticProcessor.getInstance().neutralFences_(split.tail, contentStack.slice(cutLength));
            contentStack = contentStack.slice(0, cutLength);
            const fenced = SemanticProcessor.getInstance().horizontalFencedNode_(split.div, fences.shift(), contentStack.pop().concat(innerNodes, rightContent));
            contentStack.push(contentStack.pop().concat([fenced], content.shift()));
            return SemanticProcessor.getInstance().fences_(fences, content, split.head, contentStack);
        }
        const fenced = fences.shift();
        SemanticProcessor.fenceToPunct_(fenced);
        contentStack.push(contentStack.pop().concat([fenced], content.shift()));
        return SemanticProcessor.getInstance().fences_(fences, content, openStack, contentStack);
    }
    neutralFences_(fences, content) {
        if (fences.length === 0) {
            return fences;
        }
        if (fences.length === 1) {
            SemanticProcessor.fenceToPunct_(fences[0]);
            return fences;
        }
        const firstFence = fences.shift();
        if (!elligibleLeftNeutral(firstFence)) {
            SemanticProcessor.fenceToPunct_(firstFence);
            const restContent = content.shift();
            restContent.unshift(firstFence);
            return restContent.concat(SemanticProcessor.getInstance().neutralFences_(fences, content));
        }
        const split = sliceNodes(fences, function (x) {
            return compareNeutralFences(x, firstFence);
        });
        if (!split.div) {
            SemanticProcessor.fenceToPunct_(firstFence);
            const restContent = content.shift();
            restContent.unshift(firstFence);
            return restContent.concat(SemanticProcessor.getInstance().neutralFences_(fences, content));
        }
        if (!elligibleRightNeutral(split.div)) {
            SemanticProcessor.fenceToPunct_(split.div);
            fences.unshift(firstFence);
            return SemanticProcessor.getInstance().neutralFences_(fences, content);
        }
        const newContent = SemanticProcessor.getInstance().combineFencedContent_(firstFence, split.div, split.head, content);
        if (split.tail.length > 0) {
            const leftContent = newContent.shift();
            const result = SemanticProcessor.getInstance().neutralFences_(split.tail, newContent);
            return leftContent.concat(result);
        }
        return newContent[0];
    }
    combineFencedContent_(leftFence, rightFence, midFences, content) {
        if (midFences.length === 0) {
            const fenced = SemanticProcessor.getInstance().horizontalFencedNode_(leftFence, rightFence, content.shift());
            if (content.length > 0) {
                content[0].unshift(fenced);
            }
            else {
                content = [[fenced]];
            }
            return content;
        }
        const leftContent = content.shift();
        const cutLength = midFences.length - 1;
        const midContent = content.slice(0, cutLength);
        content = content.slice(cutLength);
        const rightContent = content.shift();
        const innerNodes = SemanticProcessor.getInstance().neutralFences_(midFences, midContent);
        leftContent.push(...innerNodes);
        leftContent.push(...rightContent);
        const fenced = SemanticProcessor.getInstance().horizontalFencedNode_(leftFence, rightFence, leftContent);
        if (content.length > 0) {
            content[0].unshift(fenced);
        }
        else {
            content = [[fenced]];
        }
        return content;
    }
    horizontalFencedNode_(ofence, cfence, content) {
        const childNode = SemanticProcessor.getInstance().row(content);
        let newNode = SemanticProcessor.getInstance().factory_.makeBranchNode(semantic_meaning_SemanticType.FENCED, [childNode], [ofence, cfence]);
        if (ofence.role === semantic_meaning_SemanticRole.OPEN) {
            SemanticProcessor.getInstance().classifyHorizontalFence_(newNode);
            newNode = SemanticHeuristics.run('propagateComposedFunction', newNode);
        }
        else {
            newNode.role = ofence.role;
        }
        newNode = SemanticHeuristics.run('detect_cycle', newNode);
        return SemanticProcessor.rewriteFencedNode_(newNode);
    }
    classifyHorizontalFence_(node) {
        SemanticHeuristics.run('interval_heuristic', node);
        if (node.role === semantic_meaning_SemanticRole.INTERVAL) {
            return;
        }
        ;
        node.role = semantic_meaning_SemanticRole.LEFTRIGHT;
        const children = node.childNodes;
        if (!isSetNode(node) || children.length > 1) {
            return;
        }
        if (children.length === 0 || children[0].type === semantic_meaning_SemanticType.EMPTY) {
            node.role = semantic_meaning_SemanticRole.SETEMPTY;
            return;
        }
        const type = children[0].type;
        if (children.length === 1 &&
            isSingletonSetContent(children[0])) {
            node.role = semantic_meaning_SemanticRole.SETSINGLE;
            return;
        }
        const role = children[0].role;
        if (type !== semantic_meaning_SemanticType.PUNCTUATED || role !== semantic_meaning_SemanticRole.SEQUENCE) {
            return;
        }
        if (children[0].contentNodes[0].role === semantic_meaning_SemanticRole.COMMA) {
            node.role = semantic_meaning_SemanticRole.SETCOLLECT;
            return;
        }
        if (children[0].contentNodes.length === 1 &&
            (children[0].contentNodes[0].role === semantic_meaning_SemanticRole.VBAR ||
                children[0].contentNodes[0].role === semantic_meaning_SemanticRole.COLON)) {
            node.role = semantic_meaning_SemanticRole.SETEXT;
            SemanticProcessor.getInstance().setExtension_(node);
            return;
        }
    }
    setExtension_(set) {
        const extender = set.childNodes[0].childNodes[0];
        if (extender &&
            extender.type === semantic_meaning_SemanticType.INFIXOP &&
            extender.contentNodes.length === 1 &&
            isMembership(extender.contentNodes[0])) {
            extender.addAnnotation('set', 'intensional');
            extender.contentNodes[0].addAnnotation('set', 'intensional');
        }
    }
    getPunctuationInRow_(nodes) {
        if (nodes.length <= 1) {
            return nodes;
        }
        const allowedType = (x) => {
            const type = x.type;
            return (type === 'punctuation' ||
                type === 'text' ||
                type === 'operator' ||
                type === 'relation');
        };
        const partition = partitionNodes(nodes, function (x) {
            if (!isPunctuation(x)) {
                return false;
            }
            if (isPunctuation(x) &&
                !isRole(x, semantic_meaning_SemanticRole.ELLIPSIS)) {
                return true;
            }
            const index = nodes.indexOf(x);
            if (index === 0) {
                if (nodes[1] && allowedType(nodes[1])) {
                    return false;
                }
                return true;
            }
            const prev = nodes[index - 1];
            if (index === nodes.length - 1) {
                if (allowedType(prev)) {
                    return false;
                }
                return true;
            }
            const next = nodes[index + 1];
            if (allowedType(prev) && allowedType(next)) {
                return false;
            }
            return true;
        });
        if (partition.rel.length === 0) {
            return nodes;
        }
        let newNodes = [];
        let firstComp = partition.comp.shift();
        if (firstComp.length > 0) {
            newNodes.push(SemanticProcessor.getInstance().row(firstComp));
        }
        let relCounter = 0;
        while (partition.comp.length > 0) {
            let puncts = [];
            const saveCount = relCounter;
            do {
                puncts.push(partition.rel[relCounter++]);
                firstComp = partition.comp.shift();
            } while (partition.rel[relCounter] &&
                firstComp &&
                firstComp.length === 0);
            puncts = SemanticHeuristics.run('ellipses', puncts);
            partition.rel.splice(saveCount, relCounter - saveCount, ...puncts);
            relCounter = saveCount + puncts.length;
            newNodes = newNodes.concat(puncts);
            if (firstComp && firstComp.length > 0) {
                newNodes.push(SemanticProcessor.getInstance().row(firstComp));
            }
        }
        return newNodes.length === 1 && partition.rel.length === 1
            ? newNodes
            : [
                SemanticProcessor.getInstance().punctuatedNode_(newNodes, partition.rel)
            ];
    }
    punctuatedNode_(nodes, punctuations) {
        const newNode = SemanticProcessor.getInstance().factory_.makeBranchNode(semantic_meaning_SemanticType.PUNCTUATED, nodes, punctuations);
        if (punctuations.length === nodes.length) {
            const firstRole = punctuations[0].role;
            if (firstRole !== semantic_meaning_SemanticRole.UNKNOWN &&
                punctuations.every(function (punct) {
                    return punct.role === firstRole;
                })) {
                newNode.role = firstRole;
                return newNode;
            }
        }
        const fpunct = punctuations[0];
        if (singlePunctAtPosition(nodes, punctuations, 0)) {
            newNode.role =
                fpunct.childNodes.length && !fpunct.embellished
                    ? fpunct.role
                    : semantic_meaning_SemanticRole.STARTPUNCT;
        }
        else if (singlePunctAtPosition(nodes, punctuations, nodes.length - 1)) {
            newNode.role =
                fpunct.childNodes.length && !fpunct.embellished
                    ? fpunct.role
                    : semantic_meaning_SemanticRole.ENDPUNCT;
        }
        else if (punctuations.every((x) => isRole(x, semantic_meaning_SemanticRole.DUMMY))) {
            newNode.role = semantic_meaning_SemanticRole.TEXT;
        }
        else if (punctuations.every((x) => isRole(x, semantic_meaning_SemanticRole.SPACE))) {
            newNode.role = semantic_meaning_SemanticRole.SPACE;
        }
        else {
            newNode.role = semantic_meaning_SemanticRole.SEQUENCE;
        }
        return newNode;
    }
    dummyNode_(children) {
        const commata = SemanticProcessor.getInstance().factory_.makeMultipleContentNodes(children.length - 1, NamedSymbol.invisibleComma);
        commata.forEach(function (comma) {
            comma.role = semantic_meaning_SemanticRole.DUMMY;
        });
        return SemanticProcessor.getInstance().punctuatedNode_(children, commata);
    }
    accentRole_(node, type) {
        if (!isAccent(node)) {
            return false;
        }
        const content = node.textContent;
        const role = SemanticMap.Secondary.get(content, SemanticSecondary.BAR) ||
            SemanticMap.Secondary.get(content, SemanticSecondary.TILDE) ||
            node.role;
        node.role =
            type === semantic_meaning_SemanticType.UNDERSCORE
                ? semantic_meaning_SemanticRole.UNDERACCENT
                : semantic_meaning_SemanticRole.OVERACCENT;
        node.addAnnotation('accent', role);
        return true;
    }
    accentNode_(center, children, type, length, accent) {
        children = children.slice(0, length + 1);
        const child1 = children[1];
        const child2 = children[2];
        let innerNode;
        if (!accent && child2) {
            innerNode = SemanticProcessor.getInstance().factory_.makeBranchNode(semantic_meaning_SemanticType.SUBSCRIPT, [center, child1], []);
            innerNode.role = semantic_meaning_SemanticRole.SUBSUP;
            children = [innerNode, child2];
            type = semantic_meaning_SemanticType.SUPERSCRIPT;
        }
        if (accent) {
            const underAccent = SemanticProcessor.getInstance().accentRole_(child1, type);
            if (child2) {
                const overAccent = SemanticProcessor.getInstance().accentRole_(child2, semantic_meaning_SemanticType.OVERSCORE);
                if (overAccent && !underAccent) {
                    innerNode = SemanticProcessor.getInstance().factory_.makeBranchNode(semantic_meaning_SemanticType.OVERSCORE, [center, child2], []);
                    children = [innerNode, child1];
                    type = semantic_meaning_SemanticType.UNDERSCORE;
                }
                else {
                    innerNode = SemanticProcessor.getInstance().factory_.makeBranchNode(semantic_meaning_SemanticType.UNDERSCORE, [center, child1], []);
                    children = [innerNode, child2];
                    type = semantic_meaning_SemanticType.OVERSCORE;
                }
                innerNode.role = semantic_meaning_SemanticRole.UNDEROVER;
            }
        }
        return SemanticProcessor.getInstance().makeLimitNode_(center, children, innerNode, type);
    }
    makeLimitNode_(center, children, innerNode, type) {
        if (type === semantic_meaning_SemanticType.LIMUPPER &&
            center.type === semantic_meaning_SemanticType.LIMLOWER) {
            center.childNodes.push(children[1]);
            children[1].parent = center;
            center.type = semantic_meaning_SemanticType.LIMBOTH;
            return center;
        }
        if (type === semantic_meaning_SemanticType.LIMLOWER &&
            center.type === semantic_meaning_SemanticType.LIMUPPER) {
            center.childNodes.splice(1, -1, children[1]);
            children[1].parent = center;
            center.type = semantic_meaning_SemanticType.LIMBOTH;
            return center;
        }
        const newNode = SemanticProcessor.getInstance().factory_.makeBranchNode(type, children, []);
        const embellished = isEmbellished(center);
        if (innerNode) {
            innerNode.embellished = embellished;
        }
        newNode.embellished = embellished;
        newNode.role = center.role;
        return newNode;
    }
    getFunctionsInRow_(restNodes, opt_result) {
        const result = opt_result || [];
        if (restNodes.length === 0) {
            return result;
        }
        const firstNode = restNodes.shift();
        const heuristic = SemanticProcessor.classifyFunction_(firstNode, restNodes);
        if (!heuristic) {
            result.push(firstNode);
            return SemanticProcessor.getInstance().getFunctionsInRow_(restNodes, result);
        }
        const processedRest = SemanticProcessor.getInstance().getFunctionsInRow_(restNodes, []);
        const newRest = SemanticProcessor.getInstance().getFunctionArgs_(firstNode, processedRest, heuristic);
        return result.concat(newRest);
    }
    getFunctionArgs_(func, rest, heuristic) {
        let partition, arg, funcNode;
        switch (heuristic) {
            case 'integral': {
                const components = SemanticProcessor.getInstance().getIntegralArgs_(rest);
                if (!components.intvar && !components.integrand.length) {
                    components.rest.unshift(func);
                    return components.rest;
                }
                const integrand = SemanticProcessor.getInstance().row(components.integrand);
                funcNode = SemanticProcessor.getInstance().integralNode_(func, integrand, components.intvar);
                SemanticHeuristics.run('intvar_from_fraction', funcNode);
                components.rest.unshift(funcNode);
                return components.rest;
            }
            case 'prefix': {
                if (rest[0] && rest[0].type === semantic_meaning_SemanticType.FENCED) {
                    const arg = rest.shift();
                    if (!isNeutralFence(arg)) {
                        arg.role = semantic_meaning_SemanticRole.LEFTRIGHT;
                    }
                    funcNode = SemanticProcessor.getInstance().functionNode_(func, arg);
                    rest.unshift(funcNode);
                    return rest;
                }
                partition = sliceNodes(rest, isPrefixFunctionBoundary);
                if (!partition.head.length) {
                    if (!partition.div ||
                        !isType(partition.div, semantic_meaning_SemanticType.APPL)) {
                        rest.unshift(func);
                        return rest;
                    }
                    arg = partition.div;
                }
                else {
                    arg = SemanticProcessor.getInstance().row(partition.head);
                    if (partition.div) {
                        partition.tail.unshift(partition.div);
                    }
                }
                funcNode = SemanticProcessor.getInstance().functionNode_(func, arg);
                partition.tail.unshift(funcNode);
                return partition.tail;
            }
            case 'bigop': {
                partition = sliceNodes(rest, isBigOpBoundary);
                if (!partition.head.length) {
                    rest.unshift(func);
                    return rest;
                }
                arg = SemanticProcessor.getInstance().row(partition.head);
                funcNode = SemanticProcessor.getInstance().bigOpNode_(func, arg);
                if (partition.div) {
                    partition.tail.unshift(partition.div);
                }
                partition.tail.unshift(funcNode);
                return partition.tail;
            }
            case 'simple':
            default: {
                if (rest.length === 0) {
                    return [func];
                }
                const firstArg = rest[0];
                if (firstArg.type === semantic_meaning_SemanticType.FENCED &&
                    !isNeutralFence(firstArg) &&
                    isSimpleFunctionScope(firstArg)) {
                    firstArg.role = semantic_meaning_SemanticRole.LEFTRIGHT;
                    SemanticProcessor.propagateFunctionRole_(func, semantic_meaning_SemanticRole.SIMPLEFUNC);
                    funcNode = SemanticProcessor.getInstance().functionNode_(func, rest.shift());
                    rest.unshift(funcNode);
                    return rest;
                }
                rest.unshift(func);
                return rest;
            }
        }
    }
    getIntegralArgs_(nodes, args = []) {
        if (nodes.length === 0) {
            const partition = sliceNodes(args, isBigOpBoundary);
            if (partition.div) {
                partition.tail.unshift(partition.div);
            }
            return { integrand: partition.head, intvar: null, rest: partition.tail };
        }
        SemanticHeuristics.run('intvar_from_implicit', nodes);
        const firstNode = nodes[0];
        if (isGeneralFunctionBoundary(firstNode)) {
            const { integrand: args2, rest: rest2 } = SemanticProcessor.getInstance().getIntegralArgs_(args);
            return { integrand: args2, intvar: null, rest: rest2.concat(nodes) };
        }
        if (isIntegralDxBoundarySingle(firstNode)) {
            firstNode.role = semantic_meaning_SemanticRole.INTEGRAL;
            return { integrand: args, intvar: firstNode, rest: nodes.slice(1) };
        }
        if (nodes[1] && isIntegralDxBoundary(firstNode, nodes[1])) {
            const intvar = SemanticProcessor.getInstance().prefixNode_(nodes[1], [firstNode]);
            intvar.role = semantic_meaning_SemanticRole.INTEGRAL;
            return { integrand: args, intvar: intvar, rest: nodes.slice(2) };
        }
        args.push(nodes.shift());
        return SemanticProcessor.getInstance().getIntegralArgs_(nodes, args);
    }
    functionNode_(func, arg) {
        const applNode = SemanticProcessor.getInstance().factory_.makeContentNode(NamedSymbol.functionApplication);
        const appl = SemanticProcessor.getInstance().funcAppls[func.id];
        if (appl) {
            applNode.mathmlTree = appl.mathmlTree;
            applNode.mathml = appl.mathml;
            applNode.annotation = appl.annotation;
            applNode.attributes = appl.attributes;
            delete SemanticProcessor.getInstance().funcAppls[func.id];
        }
        applNode.type = semantic_meaning_SemanticType.PUNCTUATION;
        applNode.role = semantic_meaning_SemanticRole.APPLICATION;
        const funcop = SemanticProcessor.getFunctionOp_(func, function (node) {
            return (isType(node, semantic_meaning_SemanticType.FUNCTION) ||
                (isType(node, semantic_meaning_SemanticType.IDENTIFIER) &&
                    isRole(node, semantic_meaning_SemanticRole.SIMPLEFUNC)));
        });
        return SemanticProcessor.getInstance().functionalNode_(semantic_meaning_SemanticType.APPL, [func, arg], funcop, [applNode]);
    }
    bigOpNode_(bigOp, arg) {
        const largeop = SemanticProcessor.getFunctionOp_(bigOp, (x) => isType(x, semantic_meaning_SemanticType.LARGEOP));
        return SemanticProcessor.getInstance().functionalNode_(semantic_meaning_SemanticType.BIGOP, [bigOp, arg], largeop, []);
    }
    integralNode_(integral, integrand, intvar) {
        integrand =
            integrand || SemanticProcessor.getInstance().factory_.makeEmptyNode();
        intvar = intvar || SemanticProcessor.getInstance().factory_.makeEmptyNode();
        const largeop = SemanticProcessor.getFunctionOp_(integral, (x) => isType(x, semantic_meaning_SemanticType.LARGEOP));
        return SemanticProcessor.getInstance().functionalNode_(semantic_meaning_SemanticType.INTEGRAL, [integral, integrand, intvar], largeop, []);
    }
    functionalNode_(type, children, operator, content) {
        const funcop = children[0];
        let oldParent;
        if (operator) {
            oldParent = operator.parent;
            content.push(operator);
        }
        const newNode = SemanticProcessor.getInstance().factory_.makeBranchNode(type, children, content);
        newNode.role = funcop.role;
        if (oldParent) {
            operator.parent = oldParent;
        }
        return newNode;
    }
    fractionNode_(denom, enume) {
        const newNode = SemanticProcessor.getInstance().factory_.makeBranchNode(semantic_meaning_SemanticType.FRACTION, [denom, enume], []);
        newNode.role = newNode.childNodes.every(function (x) {
            return (isType(x, semantic_meaning_SemanticType.NUMBER) &&
                isRole(x, semantic_meaning_SemanticRole.INTEGER));
        })
            ? semantic_meaning_SemanticRole.VULGAR
            : newNode.childNodes.every(isPureUnit)
                ? semantic_meaning_SemanticRole.UNIT
                : semantic_meaning_SemanticRole.DIVISION;
        return SemanticHeuristics.run('propagateSimpleFunction', newNode);
    }
    scriptNode_(nodes, role, opt_noSingle) {
        let newNode;
        switch (nodes.length) {
            case 0:
                newNode = SemanticProcessor.getInstance().factory_.makeEmptyNode();
                break;
            case 1:
                newNode = nodes[0];
                if (opt_noSingle) {
                    return newNode;
                }
                break;
            default:
                newNode = SemanticProcessor.getInstance().dummyNode_(nodes);
        }
        newNode.role = role;
        return newNode;
    }
    findNestedRow_(nodes, semantic, level, value) {
        if (level > 3) {
            return null;
        }
        for (let i = 0, node; (node = nodes[i]); i++) {
            const tag = dom_util_tagName(node);
            if (tag !== MMLTAGS.MSPACE) {
                if (tag === MMLTAGS.MROW) {
                    return SemanticProcessor.getInstance().findNestedRow_(toArray(node.childNodes), semantic, level + 1, value);
                }
                if (SemanticProcessor.findSemantics(node, semantic, value)) {
                    return node;
                }
            }
        }
        return null;
    }
}
SemanticProcessor.FENCE_TO_PUNCT_ = {
    [semantic_meaning_SemanticRole.METRIC]: semantic_meaning_SemanticRole.METRIC,
    [semantic_meaning_SemanticRole.NEUTRAL]: semantic_meaning_SemanticRole.VBAR,
    [semantic_meaning_SemanticRole.OPEN]: semantic_meaning_SemanticRole.OPENFENCE,
    [semantic_meaning_SemanticRole.CLOSE]: semantic_meaning_SemanticRole.CLOSEFENCE
};
SemanticProcessor.MML_TO_LIMIT_ = {
    [MMLTAGS.MSUB]: { type: semantic_meaning_SemanticType.LIMLOWER, length: 1 },
    [MMLTAGS.MUNDER]: { type: semantic_meaning_SemanticType.LIMLOWER, length: 1 },
    [MMLTAGS.MSUP]: { type: semantic_meaning_SemanticType.LIMUPPER, length: 1 },
    [MMLTAGS.MOVER]: { type: semantic_meaning_SemanticType.LIMUPPER, length: 1 },
    [MMLTAGS.MSUBSUP]: { type: semantic_meaning_SemanticType.LIMBOTH, length: 2 },
    [MMLTAGS.MUNDEROVER]: { type: semantic_meaning_SemanticType.LIMBOTH, length: 2 }
};
SemanticProcessor.MML_TO_BOUNDS_ = {
    [MMLTAGS.MSUB]: { type: semantic_meaning_SemanticType.SUBSCRIPT, length: 1, accent: false },
    [MMLTAGS.MSUP]: {
        type: semantic_meaning_SemanticType.SUPERSCRIPT,
        length: 1,
        accent: false
    },
    [MMLTAGS.MSUBSUP]: {
        type: semantic_meaning_SemanticType.SUBSCRIPT,
        length: 2,
        accent: false
    },
    [MMLTAGS.MUNDER]: {
        type: semantic_meaning_SemanticType.UNDERSCORE,
        length: 1,
        accent: true
    },
    [MMLTAGS.MOVER]: { type: semantic_meaning_SemanticType.OVERSCORE, length: 1, accent: true },
    [MMLTAGS.MUNDEROVER]: {
        type: semantic_meaning_SemanticType.UNDERSCORE,
        length: 2,
        accent: true
    }
};
SemanticProcessor.CLASSIFY_FUNCTION_ = {
    [semantic_meaning_SemanticRole.INTEGRAL]: 'integral',
    [semantic_meaning_SemanticRole.SUM]: 'bigop',
    [semantic_meaning_SemanticRole.PREFIXFUNC]: 'prefix',
    [semantic_meaning_SemanticRole.LIMFUNC]: 'prefix',
    [semantic_meaning_SemanticRole.SIMPLEFUNC]: 'prefix',
    [semantic_meaning_SemanticRole.COMPFUNC]: 'prefix'
};
SemanticProcessor.MATHJAX_FONTS = {
    '-tex-caligraphic': SemanticFont.CALIGRAPHIC,
    '-tex-caligraphic-bold': SemanticFont.CALIGRAPHICBOLD,
    '-tex-calligraphic': SemanticFont.CALIGRAPHIC,
    '-tex-calligraphic-bold': SemanticFont.CALIGRAPHICBOLD,
    '-tex-oldstyle': SemanticFont.OLDSTYLE,
    '-tex-oldstyle-bold': SemanticFont.OLDSTYLEBOLD,
    '-tex-mathit': SemanticFont.ITALIC
};
//# sourceMappingURL=semantic_processor.js.map
;// ./node_modules/.pnpm/speech-rule-engine@5.0.0-beta.1/node_modules/speech-rule-engine/js/semantic_tree/semantic_mathml.js









class SemanticMathml extends SemanticAbstractParser {
    static getAttribute_(node, attr, def) {
        if (!node.hasAttribute(attr)) {
            return def;
        }
        const value = node.getAttribute(attr);
        if (value.match(/^\s*$/)) {
            return null;
        }
        return value;
    }
    constructor(options) {
        super('MathML');
        this.options = options;
        SemanticHeuristics.options = options;
        this.parseMap_ = new Map([
            [MMLTAGS.SEMANTICS, this.semantics_.bind(this)],
            [MMLTAGS.MATH, this.rows_.bind(this)],
            [MMLTAGS.MROW, this.rows_.bind(this)],
            [MMLTAGS.MPADDED, this.rows_.bind(this)],
            [MMLTAGS.MSTYLE, this.rows_.bind(this)],
            [MMLTAGS.MFRAC, this.fraction_.bind(this)],
            [MMLTAGS.MSUB, this.limits_.bind(this)],
            [MMLTAGS.MSUP, this.limits_.bind(this)],
            [MMLTAGS.MSUBSUP, this.limits_.bind(this)],
            [MMLTAGS.MOVER, this.limits_.bind(this)],
            [MMLTAGS.MUNDER, this.limits_.bind(this)],
            [MMLTAGS.MUNDEROVER, this.limits_.bind(this)],
            [MMLTAGS.MROOT, this.root_.bind(this)],
            [MMLTAGS.MSQRT, this.sqrt_.bind(this)],
            [MMLTAGS.MTABLE, this.table_.bind(this)],
            [MMLTAGS.MLABELEDTR, this.tableLabeledRow_.bind(this)],
            [MMLTAGS.MTR, this.tableRow_.bind(this)],
            [MMLTAGS.MTD, this.tableCell_.bind(this)],
            [MMLTAGS.MS, this.text_.bind(this)],
            [MMLTAGS.MTEXT, this.text_.bind(this)],
            [MMLTAGS.MSPACE, this.space_.bind(this)],
            [MMLTAGS.ANNOTATIONXML, this.text_.bind(this)],
            [MMLTAGS.MI, this.identifier_.bind(this)],
            [MMLTAGS.MN, this.number_.bind(this)],
            [MMLTAGS.MO, this.operator_.bind(this)],
            [MMLTAGS.MFENCED, this.fenced_.bind(this)],
            [MMLTAGS.MENCLOSE, this.enclosed_.bind(this)],
            [MMLTAGS.MMULTISCRIPTS, this.multiscripts_.bind(this)],
            [MMLTAGS.ANNOTATION, this.empty_.bind(this)],
            [MMLTAGS.NONE, this.empty_.bind(this)],
            [MMLTAGS.MACTION, this.action_.bind(this)]
        ]);
        const meaning = {
            type: semantic_meaning_SemanticType.IDENTIFIER,
            role: semantic_meaning_SemanticRole.NUMBERSET,
            font: SemanticFont.DOUBLESTRUCK
        };
        [
            'C',
            'H',
            'N',
            'P',
            'Q',
            'R',
            'Z',
            'ℂ',
            'ℍ',
            'ℕ',
            'ℙ',
            'ℚ',
            'ℝ',
            'ℤ'
        ].forEach(((x) => this.getFactory().defaultMap.set(x, meaning)).bind(this));
    }
    parse(mml) {
        SemanticProcessor.getInstance().setNodeFactory(this.getFactory());
        const children = toArray(mml.childNodes);
        const tag = dom_util_tagName(mml);
        const func = this.parseMap_.get(tag);
        const newNode = (func ? func : this.dummy_.bind(this))(mml, children);
        addAttributes(newNode, mml);
        if ([
            MMLTAGS.MATH,
            MMLTAGS.MROW,
            MMLTAGS.MPADDED,
            MMLTAGS.MSTYLE,
            MMLTAGS.SEMANTICS,
            MMLTAGS.MACTION
        ].indexOf(tag) !== -1) {
            return newNode;
        }
        newNode.mathml.unshift(mml);
        newNode.mathmlTree = mml;
        return newNode;
    }
    semantics_(_node, children) {
        return children.length
            ? this.parse(children[0])
            : this.getFactory().makeEmptyNode();
    }
    rows_(node, children) {
        const semantics = node.getAttribute('semantics');
        if (semantics && semantics.match('bspr_')) {
            return SemanticProcessor.proof(node, semantics, this.parseList.bind(this));
        }
        children = purgeNodes(children);
        let newNode;
        if (children.length === 1) {
            newNode = this.parse(children[0]);
            if (newNode.type === semantic_meaning_SemanticType.EMPTY && !newNode.mathmlTree) {
                newNode.mathmlTree = node;
            }
        }
        else {
            const snode = SemanticHeuristics.run('function_from_identifiers', node);
            newNode =
                snode && snode !== node
                    ? snode
                    : SemanticProcessor.getInstance().row(this.parseList(children));
        }
        newNode.mathml.unshift(node);
        return newNode;
    }
    fraction_(node, children) {
        if (!children.length) {
            return this.getFactory().makeEmptyNode();
        }
        const upper = this.parse(children[0]);
        const lower = children[1]
            ? this.parse(children[1])
            : this.getFactory().makeEmptyNode();
        const sem = SemanticProcessor.getInstance().fractionLikeNode(upper, lower, node.getAttribute('linethickness'), node.getAttribute('bevelled') === 'true');
        return sem;
    }
    limits_(node, children) {
        return SemanticProcessor.getInstance().limitNode(dom_util_tagName(node), this.parseList(children));
    }
    root_(node, children) {
        if (!children[1]) {
            return this.sqrt_(node, children);
        }
        return this.getFactory().makeBranchNode(semantic_meaning_SemanticType.ROOT, [this.parse(children[1]), this.parse(children[0])], []);
    }
    sqrt_(_node, children) {
        const semNodes = this.parseList(purgeNodes(children));
        return this.getFactory().makeBranchNode(semantic_meaning_SemanticType.SQRT, [SemanticProcessor.getInstance().row(semNodes)], []);
    }
    table_(node, children) {
        const semantics = node.getAttribute('semantics');
        if (semantics && semantics.match('bspr_')) {
            return SemanticProcessor.proof(node, semantics, this.parseList.bind(this));
        }
        const newNode = this.getFactory().makeBranchNode(semantic_meaning_SemanticType.TABLE, this.parseList(children), []);
        newNode.mathmlTree = node;
        return SemanticProcessor.tableToMultiline(newNode);
    }
    tableRow_(_node, children) {
        const newNode = this.getFactory().makeBranchNode(semantic_meaning_SemanticType.ROW, this.parseList(children), []);
        newNode.role = semantic_meaning_SemanticRole.TABLE;
        return newNode;
    }
    tableLabeledRow_(node, children) {
        var _a;
        if (!children.length) {
            return this.tableRow_(node, children);
        }
        const label = this.parse(children[0]);
        label.role = semantic_meaning_SemanticRole.LABEL;
        if (((_a = label.childNodes[0]) === null || _a === void 0 ? void 0 : _a.type) === semantic_meaning_SemanticType.TEXT) {
            label.childNodes[0].role = semantic_meaning_SemanticRole.LABEL;
        }
        const newNode = this.getFactory().makeBranchNode(semantic_meaning_SemanticType.ROW, this.parseList(children.slice(1)), [label]);
        newNode.role = semantic_meaning_SemanticRole.TABLE;
        return newNode;
    }
    tableCell_(_node, children) {
        const semNodes = this.parseList(purgeNodes(children));
        let childNodes;
        if (!semNodes.length) {
            childNodes = [];
        }
        else if (semNodes.length === 1 &&
            isType(semNodes[0], semantic_meaning_SemanticType.EMPTY)) {
            childNodes = semNodes;
        }
        else {
            childNodes = [SemanticProcessor.getInstance().row(semNodes)];
        }
        const newNode = this.getFactory().makeBranchNode(semantic_meaning_SemanticType.CELL, childNodes, []);
        newNode.role = semantic_meaning_SemanticRole.TABLE;
        return newNode;
    }
    space_(node, children) {
        const width = node.getAttribute('width');
        const match = width && width.match(/[a-z]*$/);
        if (!match) {
            return this.empty_(node, children);
        }
        const sizes = {
            cm: 0.4,
            pc: 0.5,
            em: 0.5,
            ex: 1,
            in: 0.15,
            pt: 5,
            mm: 5
        };
        const unit = match[0];
        const measure = parseFloat(width.slice(0, match.index));
        const size = sizes[unit];
        if (!size || isNaN(measure) || measure < size) {
            return this.empty_(node, children);
        }
        const newNode = this.getFactory().makeUnprocessed(node);
        return SemanticProcessor.getInstance().text(newNode, dom_util_tagName(node));
    }
    text_(node, children) {
        const newNode = this.leaf_(node, children);
        if (!node.textContent) {
            return newNode;
        }
        newNode.updateContent(node.textContent, true);
        return SemanticProcessor.getInstance().text(newNode, dom_util_tagName(node));
    }
    identifier_(node, children) {
        const newNode = this.leaf_(node, children);
        return SemanticProcessor.getInstance().identifierNode(newNode, SemanticProcessor.getInstance().font(node.getAttribute('mathvariant')), node.getAttribute('class'));
    }
    number_(node, children) {
        const newNode = this.leaf_(node, children);
        SemanticProcessor.number(newNode);
        return newNode;
    }
    operator_(node, children) {
        const newNode = this.leaf_(node, children);
        SemanticProcessor.getInstance().operatorNode(newNode);
        return newNode;
    }
    fenced_(node, children) {
        const semNodes = this.parseList(purgeNodes(children));
        const sepValue = SemanticMathml.getAttribute_(node, 'separators', ',');
        const open = SemanticMathml.getAttribute_(node, 'open', '(');
        const close = SemanticMathml.getAttribute_(node, 'close', ')');
        const newNode = SemanticProcessor.getInstance().mfenced(open, close, sepValue, semNodes);
        const nodes = SemanticProcessor.getInstance().tablesInRow([newNode]);
        return nodes[0];
    }
    enclosed_(node, children) {
        const semNodes = this.parseList(purgeNodes(children));
        const newNode = this.getFactory().makeBranchNode(semantic_meaning_SemanticType.ENCLOSE, [SemanticProcessor.getInstance().row(semNodes)], []);
        newNode.role =
            node.getAttribute('notation') || semantic_meaning_SemanticRole.UNKNOWN;
        return newNode;
    }
    multiscripts_(_node, children) {
        if (!children.length) {
            return this.getFactory().makeEmptyNode();
        }
        const base = this.parse(children.shift());
        if (!children.length) {
            return base;
        }
        const lsup = [];
        const lsub = [];
        const rsup = [];
        const rsub = [];
        let prescripts = false;
        let scriptcount = 0;
        for (let i = 0, child; (child = children[i]); i++) {
            if (dom_util_tagName(child) === MMLTAGS.MPRESCRIPTS) {
                prescripts = true;
                scriptcount = 0;
                continue;
            }
            prescripts
                ? scriptcount & 1
                    ? lsup.push(child)
                    : lsub.push(child)
                : scriptcount & 1
                    ? rsup.push(child)
                    : rsub.push(child);
            scriptcount++;
        }
        if (!purgeNodes(lsup).length &&
            !purgeNodes(lsub).length) {
            return SemanticProcessor.getInstance().pseudoTensor(base, this.parseList(rsub), this.parseList(rsup));
        }
        return SemanticProcessor.getInstance().tensor(base, this.parseList(lsub), this.parseList(lsup), this.parseList(rsub), this.parseList(rsup));
    }
    empty_(_node, _children) {
        return this.getFactory().makeEmptyNode();
    }
    action_(node, children) {
        const selection = children[node.hasAttribute('selection')
            ? parseInt(node.getAttribute('selection'), 10) - 1
            : 0];
        const stree = this.parse(selection);
        stree.mathmlTree = selection;
        return stree;
    }
    dummy_(node, _children) {
        const unknown = this.getFactory().makeUnprocessed(node);
        unknown.role = node.tagName;
        unknown.textContent = node.textContent;
        return unknown;
    }
    leaf_(mml, children) {
        if (children.length === 1 &&
            children[0].nodeType !== NodeType.TEXT_NODE) {
            const node = this.getFactory().makeUnprocessed(mml);
            node.role = children[0].tagName;
            addAttributes(node, children[0]);
            return node;
        }
        const node = this.getFactory().makeLeafNode(mml.textContent, SemanticProcessor.getInstance().font(mml.getAttribute('mathvariant')));
        if (mml.hasAttribute('data-latex')) {
            SemanticMap.LatexCommands.set(mml.getAttribute('data-latex'), mml.textContent);
        }
        return node;
    }
}
//# sourceMappingURL=semantic_mathml.js.map
;// ./node_modules/.pnpm/speech-rule-engine@5.0.0-beta.1/node_modules/speech-rule-engine/js/semantic_tree/semantic_heuristic.js
class SemanticAbstractHeuristic {
    constructor(name, method, predicate = (_x) => false) {
        this.name = name;
        this.apply = method;
        this.applicable = predicate;
    }
}
class SemanticTreeHeuristic extends SemanticAbstractHeuristic {
}
class SemanticMultiHeuristic extends SemanticAbstractHeuristic {
}
class SemanticMmlHeuristic extends SemanticAbstractHeuristic {
}
//# sourceMappingURL=semantic_heuristic.js.map
;// ./node_modules/.pnpm/speech-rule-engine@5.0.0-beta.1/node_modules/speech-rule-engine/js/common/base_util.js
function removeEmpty(strs) {
    return strs.filter((str) => str);
}
function interleaveLists(list1, list2) {
    const result = [];
    while (list1.length || list2.length) {
        if (list1.length) {
            result.push(list1.shift());
        }
        if (list2.length) {
            result.push(list2.shift());
        }
    }
    return result;
}
function setdifference(a, b) {
    if (!a) {
        return [];
    }
    if (!b) {
        return a;
    }
    return a.filter((x) => b.indexOf(x) < 0);
}
//# sourceMappingURL=base_util.js.map
;// ./node_modules/.pnpm/speech-rule-engine@5.0.0-beta.1/node_modules/speech-rule-engine/js/enrich_mathml/enrich_attr.js


const Prefix = 'data-semantic-';
var enrich_attr_Attribute;
(function (Attribute) {
    Attribute["ADDED"] = "data-semantic-added";
    Attribute["ALTERNATIVE"] = "data-semantic-alternative";
    Attribute["CHILDREN"] = "data-semantic-children";
    Attribute["COLLAPSED"] = "data-semantic-collapsed";
    Attribute["CONTENT"] = "data-semantic-content";
    Attribute["EMBELLISHED"] = "data-semantic-embellished";
    Attribute["FENCEPOINTER"] = "data-semantic-fencepointer";
    Attribute["FONT"] = "data-semantic-font";
    Attribute["ID"] = "data-semantic-id";
    Attribute["ANNOTATION"] = "data-semantic-annotation";
    Attribute["ATTRIBUTES"] = "data-semantic-attributes";
    Attribute["OPERATOR"] = "data-semantic-operator";
    Attribute["OWNS"] = "data-semantic-owns";
    Attribute["PARENT"] = "data-semantic-parent";
    Attribute["POSTFIX"] = "data-semantic-postfix";
    Attribute["PREFIX"] = "data-semantic-prefix";
    Attribute["ROLE"] = "data-semantic-role";
    Attribute["SPEECH"] = "data-semantic-speech";
    Attribute["STRUCTURE"] = "data-semantic-structure";
    Attribute["SUMMARY"] = "data-semantic-summary";
    Attribute["TYPE"] = "data-semantic-type";
})(enrich_attr_Attribute || (enrich_attr_Attribute = {}));
const EnrichAttributes = [
    enrich_attr_Attribute.ADDED,
    enrich_attr_Attribute.ALTERNATIVE,
    enrich_attr_Attribute.CHILDREN,
    enrich_attr_Attribute.COLLAPSED,
    enrich_attr_Attribute.CONTENT,
    enrich_attr_Attribute.EMBELLISHED,
    enrich_attr_Attribute.FENCEPOINTER,
    enrich_attr_Attribute.FONT,
    enrich_attr_Attribute.ID,
    enrich_attr_Attribute.ANNOTATION,
    enrich_attr_Attribute.ATTRIBUTES,
    enrich_attr_Attribute.OPERATOR,
    enrich_attr_Attribute.OWNS,
    enrich_attr_Attribute.PARENT,
    enrich_attr_Attribute.POSTFIX,
    enrich_attr_Attribute.PREFIX,
    enrich_attr_Attribute.ROLE,
    enrich_attr_Attribute.SPEECH,
    enrich_attr_Attribute.STRUCTURE,
    enrich_attr_Attribute.SUMMARY,
    enrich_attr_Attribute.TYPE
];
function makeIdList(nodes) {
    return nodes
        .map(function (node) {
        return node.id;
    })
        .join(',');
}
function setAttributes(mml, semantic) {
    mml.setAttribute(enrich_attr_Attribute.TYPE, semantic.type);
    const attributes = semantic.allAttributes();
    for (let i = 0, attr; (attr = attributes[i]); i++) {
        mml.setAttribute(Prefix + attr[0].toLowerCase(), attr[1]);
    }
    if (semantic.childNodes.length) {
        mml.setAttribute(enrich_attr_Attribute.CHILDREN, makeIdList(semantic.childNodes));
    }
    if (semantic.contentNodes.length) {
        mml.setAttribute(enrich_attr_Attribute.CONTENT, makeIdList(semantic.contentNodes));
    }
    if (semantic.parent) {
        mml.setAttribute(enrich_attr_Attribute.PARENT, semantic.parent.id.toString());
    }
    const external = semantic.attributesXml();
    if (external) {
        mml.setAttribute(enrich_attr_Attribute.ATTRIBUTES, external);
    }
    setPostfix(mml, semantic);
}
function setPostfix(mml, semantic) {
    const postfix = [];
    if (semantic.role === semantic_meaning_SemanticRole.MGLYPH) {
        postfix.push('image');
    }
    if (semantic.attributes['href']) {
        postfix.push('link');
    }
    if (postfix.length) {
        mml.setAttribute(enrich_attr_Attribute.POSTFIX, postfix.join(' '));
    }
}
function removeAttributePrefix(mml) {
    return mml.toString().replace(new RegExp(Prefix, 'g'), '');
}
function addPrefix(attr) {
    return (Prefix + attr);
}
function addMrow() {
    const mrow = createElement('mrow');
    mrow.setAttribute(enrich_attr_Attribute.ADDED, 'true');
    return mrow;
}
//# sourceMappingURL=enrich_attr.js.map
;// ./node_modules/.pnpm/speech-rule-engine@5.0.0-beta.1/node_modules/speech-rule-engine/js/semantic_tree/semantic_skeleton.js




class SemanticSkeleton {
    static fromTree(tree) {
        return SemanticSkeleton.fromNode(tree.root);
    }
    static fromNode(node) {
        return new SemanticSkeleton(SemanticSkeleton.fromNode_(node));
    }
    static fromString(skel) {
        return new SemanticSkeleton(SemanticSkeleton.fromString_(skel));
    }
    static simpleCollapseStructure(strct) {
        return typeof strct === 'number';
    }
    static contentCollapseStructure(strct) {
        return (!!strct &&
            !SemanticSkeleton.simpleCollapseStructure(strct) &&
            strct[0] === 'c');
    }
    static interleaveIds(first, second) {
        return interleaveLists(SemanticSkeleton.collapsedLeafs(first), SemanticSkeleton.collapsedLeafs(second));
    }
    static collapsedLeafs(...args) {
        const collapseStructure = (coll) => {
            if (SemanticSkeleton.simpleCollapseStructure(coll)) {
                return [coll];
            }
            coll = coll;
            return SemanticSkeleton.contentCollapseStructure(coll[1])
                ? coll.slice(2)
                : coll.slice(1);
        };
        return args.reduce((x, y) => x.concat(collapseStructure(y)), []);
    }
    static fromStructure(mml, tree, options) {
        return new SemanticSkeleton(SemanticSkeleton.tree_(mml, tree.root, options));
    }
    static combineContentChildren(type, _role, content, children) {
        switch (type) {
            case semantic_meaning_SemanticType.RELSEQ:
            case semantic_meaning_SemanticType.INFIXOP:
            case semantic_meaning_SemanticType.MULTIREL:
                return interleaveLists(children, content);
            case semantic_meaning_SemanticType.PREFIXOP:
                return content.concat(children);
            case semantic_meaning_SemanticType.POSTFIXOP:
                return children.concat(content);
            case semantic_meaning_SemanticType.MATRIX:
            case semantic_meaning_SemanticType.VECTOR:
            case semantic_meaning_SemanticType.FENCED:
                children.unshift(content[0]);
                children.push(content[1]);
                return children;
            case semantic_meaning_SemanticType.CASES:
                children.unshift(content[0]);
                return children;
            case semantic_meaning_SemanticType.APPL:
                return [children[0], content[0], children[1]];
            case semantic_meaning_SemanticType.ROOT:
                return [children[0], children[1]];
            case semantic_meaning_SemanticType.ROW:
            case semantic_meaning_SemanticType.LINE:
                if (content.length) {
                    children.unshift(content[0]);
                }
                return children;
            default:
                return children;
        }
    }
    static makeSexp_(struct) {
        if (SemanticSkeleton.simpleCollapseStructure(struct)) {
            return struct.toString();
        }
        if (SemanticSkeleton.contentCollapseStructure(struct)) {
            return ('(' +
                'c ' +
                struct.slice(1).map(SemanticSkeleton.makeSexp_).join(' ') +
                ')');
        }
        return ('(' + struct.map(SemanticSkeleton.makeSexp_).join(' ') + ')');
    }
    static fromString_(skeleton) {
        let str = skeleton.replace(/\(/g, '[');
        str = str.replace(/\)/g, ']');
        str = str.replace(/ /g, ',');
        str = str.replace(/c/g, '"c"');
        return JSON.parse(str);
    }
    static fromNode_(node) {
        if (!node) {
            return [];
        }
        const content = node.contentNodes;
        let contentStructure;
        if (content.length) {
            contentStructure = content.map(SemanticSkeleton.fromNode_);
            contentStructure.unshift('c');
        }
        const children = node.childNodes;
        if (!children.length) {
            return content.length ? [node.id, contentStructure] : node.id;
        }
        const structure = children.map(SemanticSkeleton.fromNode_);
        if (content.length) {
            structure.unshift(contentStructure);
        }
        structure.unshift(node.id);
        return structure;
    }
    static tree_(mml, node, options, level = 0, posinset = 1, setsize = 1) {
        if (!node) {
            return [];
        }
        const id = node.id;
        const skeleton = [id];
        updateEvaluator(mml);
        const mmlChild = evalXPath(`.//self::*[@${enrich_attr_Attribute.ID}=${id}]`, mml)[0];
        if (!node.childNodes.length) {
            SemanticSkeleton.addAria(mmlChild, level, posinset, setsize, options);
            return node.id;
        }
        const children = SemanticSkeleton.combineContentChildren(node.type, node.role, node.contentNodes.map(function (x) {
            return x;
        }), node.childNodes.map(function (x) {
            return x;
        }));
        if (mmlChild) {
            SemanticSkeleton.addOwns_(mmlChild, children);
        }
        for (let i = 0, l = children.length, child; (child = children[i]); i++) {
            skeleton.push(SemanticSkeleton.tree_(mml, child, options, level + 1, i + 1, l));
        }
        SemanticSkeleton.addAria(mmlChild, level, posinset, setsize, options);
        return skeleton;
    }
    static addAria(node, level, posinset, setsize, options) {
        const role = !options.tree ? 'treeitem' : level ? 'treeitem' : 'tree';
        if (!options.aria || !node) {
            return;
        }
        node.setAttribute('aria-level', level.toString());
        node.setAttribute('aria-posinset', posinset.toString());
        node.setAttribute('aria-setsize', setsize.toString());
        node.setAttribute('role', role);
        if (node.hasAttribute(enrich_attr_Attribute.OWNS)) {
            node.setAttribute('aria-owns', node.getAttribute(enrich_attr_Attribute.OWNS));
        }
    }
    static addOwns_(node, children) {
        const collapsed = node.getAttribute(enrich_attr_Attribute.COLLAPSED);
        const leafs = collapsed
            ? SemanticSkeleton.realLeafs_(SemanticSkeleton.fromString(collapsed).array)
            : children.map((x) => x.id);
        node.setAttribute(enrich_attr_Attribute.OWNS, leafs.join(' '));
    }
    static realLeafs_(sexp) {
        if (SemanticSkeleton.simpleCollapseStructure(sexp)) {
            return [sexp];
        }
        if (SemanticSkeleton.contentCollapseStructure(sexp)) {
            return [];
        }
        sexp = sexp;
        let result = [];
        for (let i = 1; i < sexp.length; i++) {
            result = result.concat(SemanticSkeleton.realLeafs_(sexp[i]));
        }
        return result;
    }
    constructor(skeleton) {
        this.parents = null;
        this.levelsMap = null;
        skeleton = skeleton === 0 ? skeleton : skeleton || [];
        this.array = skeleton;
    }
    populate() {
        if (this.parents && this.levelsMap) {
            return;
        }
        this.parents = {};
        this.levelsMap = {};
        this.populate_(this.array, this.array, []);
    }
    toString() {
        return SemanticSkeleton.makeSexp_(this.array);
    }
    populate_(element, layer, parents) {
        if (SemanticSkeleton.simpleCollapseStructure(element)) {
            element = element;
            this.levelsMap[element] = layer;
            this.parents[element] =
                element === parents[0] ? parents.slice(1) : parents;
            return;
        }
        const newElement = SemanticSkeleton.contentCollapseStructure(element)
            ? element.slice(1)
            : element;
        const newParents = [newElement[0]].concat(parents);
        for (let i = 0, l = newElement.length; i < l; i++) {
            const current = newElement[i];
            this.populate_(current, element, newParents);
        }
    }
    isRoot(id) {
        const level = this.levelsMap[id];
        return id === level[0];
    }
    directChildren(id) {
        if (!this.isRoot(id)) {
            return [];
        }
        const level = this.levelsMap[id];
        return level.slice(1).map((child) => {
            if (SemanticSkeleton.simpleCollapseStructure(child)) {
                return child;
            }
            if (SemanticSkeleton.contentCollapseStructure(child)) {
                return child[1];
            }
            return child[0];
        });
    }
    subtreeNodes(id) {
        if (!this.isRoot(id)) {
            return [];
        }
        const subtreeNodes_ = (tree, nodes) => {
            if (SemanticSkeleton.simpleCollapseStructure(tree)) {
                nodes.push(tree);
                return;
            }
            tree = tree;
            if (SemanticSkeleton.contentCollapseStructure(tree)) {
                tree = tree.slice(1);
            }
            tree.forEach((x) => subtreeNodes_(x, nodes));
        };
        const level = this.levelsMap[id];
        const subtree = [];
        subtreeNodes_(level.slice(1), subtree);
        return subtree;
    }
}
//# sourceMappingURL=semantic_skeleton.js.map
;// ./node_modules/.pnpm/speech-rule-engine@5.0.0-beta.1/node_modules/speech-rule-engine/js/semantic_tree/semantic_heuristics.js











SemanticHeuristics.add(new SemanticTreeHeuristic('combine_juxtaposition', combineJuxtaposition));
function combineJuxtaposition(root) {
    for (let i = root.childNodes.length - 1, child; (child = root.childNodes[i]); i--) {
        if (!isImplicitOp(child) || child.nobreaking) {
            continue;
        }
        root.childNodes.splice(i, 1, ...child.childNodes);
        root.contentNodes.splice(i, 0, ...child.contentNodes);
        child.childNodes.concat(child.contentNodes).forEach(function (x) {
            x.parent = root;
        });
        root.addMathmlNodes(child.mathml);
    }
    return root;
}
SemanticHeuristics.add(new SemanticTreeHeuristic('propagateSimpleFunction', (node) => {
    if ((node.type === semantic_meaning_SemanticType.INFIXOP ||
        node.type === semantic_meaning_SemanticType.FRACTION) &&
        node.childNodes.every(isSimpleFunction)) {
        node.role = semantic_meaning_SemanticRole.COMPFUNC;
    }
    return node;
}, (_node) => SemanticHeuristics.options.domain === 'clearspeak'));
SemanticHeuristics.add(new SemanticTreeHeuristic('simpleNamedFunction', (node) => {
    const specialFunctions = ['f', 'g', 'h', 'F', 'G', 'H'];
    if (node.role !== semantic_meaning_SemanticRole.UNIT &&
        specialFunctions.indexOf(node.textContent) !== -1) {
        node.role = semantic_meaning_SemanticRole.SIMPLEFUNC;
    }
    return node;
}, (_node) => SemanticHeuristics.options.domain === 'clearspeak'));
SemanticHeuristics.add(new SemanticTreeHeuristic('propagateComposedFunction', (node) => {
    if (node.type === semantic_meaning_SemanticType.FENCED &&
        node.childNodes[0].role === semantic_meaning_SemanticRole.COMPFUNC) {
        node.role = semantic_meaning_SemanticRole.COMPFUNC;
    }
    return node;
}, (_node) => SemanticHeuristics.options.domain === 'clearspeak'));
SemanticHeuristics.add(new SemanticTreeHeuristic('multioperator', (node) => {
    if (node.role !== semantic_meaning_SemanticRole.UNKNOWN || node.textContent.length <= 1) {
        return;
    }
    SemanticProcessor.compSemantics(node, 'role', semantic_meaning_SemanticRole);
    SemanticProcessor.compSemantics(node, 'type', semantic_meaning_SemanticType);
}));
SemanticHeuristics.add(new SemanticMultiHeuristic('convert_juxtaposition', (nodes) => {
    let partition = partitionNodes(nodes, function (x) {
        return (x.textContent === NamedSymbol.invisibleTimes &&
            x.type === semantic_meaning_SemanticType.OPERATOR);
    });
    partition = partition.rel.length
        ? juxtapositionPrePost(partition)
        : partition;
    nodes = partition.comp[0];
    for (let i = 1, c, r; (c = partition.comp[i]), (r = partition.rel[i - 1]); i++) {
        nodes.push(r);
        nodes = nodes.concat(c);
    }
    partition = partitionNodes(nodes, function (x) {
        return (x.textContent === NamedSymbol.invisibleTimes &&
            (x.type === semantic_meaning_SemanticType.OPERATOR || x.type === semantic_meaning_SemanticType.INFIXOP));
    });
    if (!partition.rel.length) {
        return nodes;
    }
    return recurseJuxtaposition(partition.comp.shift(), partition.rel, partition.comp);
}));
SemanticHeuristics.add(new SemanticTreeHeuristic('simple2prefix', (node) => {
    if (node.textContent.length > 1 &&
        !node.textContent[0].match(/[A-Z]/)) {
        node.role = semantic_meaning_SemanticRole.PREFIXFUNC;
    }
    return node;
}, (node) => SemanticHeuristics.options.modality === 'braille' &&
    node.type === semantic_meaning_SemanticType.IDENTIFIER));
SemanticHeuristics.add(new SemanticTreeHeuristic('detect_cycle', (node) => {
    node.type = semantic_meaning_SemanticType.MATRIX;
    node.role = semantic_meaning_SemanticRole.CYCLE;
    const row = node.childNodes[0];
    row.type = semantic_meaning_SemanticType.ROW;
    row.role = semantic_meaning_SemanticRole.CYCLE;
    row.textContent = '';
    row.contentNodes = [];
    return node;
}, (node) => node.type === semantic_meaning_SemanticType.FENCED &&
    node.childNodes[0].type === semantic_meaning_SemanticType.INFIXOP &&
    node.childNodes[0].role === semantic_meaning_SemanticRole.IMPLICIT &&
    node.childNodes[0].childNodes.every(function (x) {
        return x.type === semantic_meaning_SemanticType.NUMBER;
    }) &&
    node.childNodes[0].contentNodes.every(function (x) {
        return x.role === semantic_meaning_SemanticRole.SPACE;
    })));
function juxtapositionPrePost(partition) {
    const rels = [];
    const comps = [];
    let next = partition.comp.shift();
    let rel = null;
    let collect = [];
    while (partition.comp.length) {
        collect = [];
        if (next.length) {
            if (rel) {
                rels.push(rel);
            }
            comps.push(next);
            rel = partition.rel.shift();
            next = partition.comp.shift();
            continue;
        }
        if (rel) {
            collect.push(rel);
        }
        while (!next.length && partition.comp.length) {
            next = partition.comp.shift();
            collect.push(partition.rel.shift());
        }
        rel = convertPrePost(collect, next, comps);
    }
    if (!collect.length && !next.length) {
        collect.push(rel);
        convertPrePost(collect, next, comps);
    }
    else {
        rels.push(rel);
        comps.push(next);
    }
    return { rel: rels, comp: comps };
}
function convertPrePost(collect, next, comps) {
    let rel = null;
    if (!collect.length) {
        return rel;
    }
    const prev = comps[comps.length - 1];
    const prevExists = prev && prev.length;
    const nextExists = next && next.length;
    const processor = SemanticProcessor.getInstance();
    if (prevExists && nextExists) {
        if (next[0].type === semantic_meaning_SemanticType.INFIXOP &&
            next[0].role === semantic_meaning_SemanticRole.IMPLICIT) {
            rel = collect.pop();
            prev.push(processor['postfixNode_'](prev.pop(), collect));
            return rel;
        }
        rel = collect.shift();
        const result = processor['prefixNode_'](next.shift(), collect);
        next.unshift(result);
        return rel;
    }
    if (prevExists) {
        prev.push(processor['postfixNode_'](prev.pop(), collect));
        return rel;
    }
    if (nextExists) {
        next.unshift(processor['prefixNode_'](next.shift(), collect));
    }
    return rel;
}
function recurseJuxtaposition(acc, ops, elements) {
    if (!ops.length) {
        return acc;
    }
    const left = acc.pop();
    const op = ops.shift();
    const first = elements.shift();
    if (op.type === semantic_meaning_SemanticType.INFIXOP &&
        (op.role === semantic_meaning_SemanticRole.IMPLICIT || op.role === semantic_meaning_SemanticRole.UNIT)) {
        Debugger.getInstance().output('Juxta Heuristic Case 2');
        const right = (left ? [left, op] : [op]).concat(first);
        return recurseJuxtaposition(acc.concat(right), ops, elements);
    }
    if (!left) {
        Debugger.getInstance().output('Juxta Heuristic Case 3');
        return recurseJuxtaposition([op].concat(first), ops, elements);
    }
    const right = first.shift();
    if (!right) {
        Debugger.getInstance().output('Juxta Heuristic Case 9');
        const newOp = SemanticHeuristics.factory.makeBranchNode(semantic_meaning_SemanticType.INFIXOP, [left, ops.shift()], [op], op.textContent);
        newOp.role = semantic_meaning_SemanticRole.IMPLICIT;
        SemanticHeuristics.run('combine_juxtaposition', newOp);
        ops.unshift(newOp);
        return recurseJuxtaposition(acc, ops, elements);
    }
    if (isOperator(left) || isOperator(right)) {
        Debugger.getInstance().output('Juxta Heuristic Case 4');
        return recurseJuxtaposition(acc.concat([left, op, right]).concat(first), ops, elements);
    }
    let result = null;
    if (isImplicitOp(left) && isImplicitOp(right)) {
        Debugger.getInstance().output('Juxta Heuristic Case 5');
        left.contentNodes.push(op);
        left.contentNodes = left.contentNodes.concat(right.contentNodes);
        left.childNodes.push(right);
        left.childNodes = left.childNodes.concat(right.childNodes);
        right.childNodes.forEach((x) => (x.parent = left));
        op.parent = left;
        left.addMathmlNodes(op.mathml);
        left.addMathmlNodes(right.mathml);
        result = left;
    }
    else if (isImplicitOp(left)) {
        Debugger.getInstance().output('Juxta Heuristic Case 6');
        left.contentNodes.push(op);
        left.childNodes.push(right);
        right.parent = left;
        op.parent = left;
        left.addMathmlNodes(op.mathml);
        left.addMathmlNodes(right.mathml);
        result = left;
    }
    else if (isImplicitOp(right)) {
        Debugger.getInstance().output('Juxta Heuristic Case 7');
        right.contentNodes.unshift(op);
        right.childNodes.unshift(left);
        left.parent = right;
        op.parent = right;
        right.addMathmlNodes(op.mathml);
        right.addMathmlNodes(left.mathml);
        result = right;
    }
    else {
        Debugger.getInstance().output('Juxta Heuristic Case 8');
        result = SemanticHeuristics.factory.makeBranchNode(semantic_meaning_SemanticType.INFIXOP, [left, right], [op], op.textContent);
        result.role = semantic_meaning_SemanticRole.IMPLICIT;
    }
    acc.push(result);
    return recurseJuxtaposition(acc.concat(first), ops, elements);
}
SemanticHeuristics.add(new SemanticMultiHeuristic('intvar_from_implicit', implicitUnpack, (nodes) => nodes[0] && isImplicit(nodes[0])));
function implicitUnpack(nodes) {
    const children = nodes[0].childNodes;
    nodes.splice(0, 1, ...children);
}
SemanticHeuristics.add(new SemanticTreeHeuristic('intvar_from_fraction', integralFractionArg, (node) => {
    if (node.type !== semantic_meaning_SemanticType.INTEGRAL)
        return false;
    const [, integrand, intvar] = node.childNodes;
    return (intvar.type === semantic_meaning_SemanticType.EMPTY &&
        integrand.type === semantic_meaning_SemanticType.FRACTION);
}));
function integralFractionArg(node) {
    const integrand = node.childNodes[1];
    const enumerator = integrand.childNodes[0];
    if (isIntegralDxBoundarySingle(enumerator)) {
        enumerator.role = semantic_meaning_SemanticRole.INTEGRAL;
        return;
    }
    if (!isImplicit(enumerator))
        return;
    const length = enumerator.childNodes.length;
    const first = enumerator.childNodes[length - 2];
    const second = enumerator.childNodes[length - 1];
    if (isIntegralDxBoundarySingle(second)) {
        second.role = semantic_meaning_SemanticRole.INTEGRAL;
        return;
    }
    if (isIntegralDxBoundary(first, second)) {
        const prefix = SemanticProcessor.getInstance()['prefixNode_'](second, [
            first
        ]);
        prefix.role = semantic_meaning_SemanticRole.INTEGRAL;
        if (length === 2) {
            integrand.childNodes[0] = prefix;
        }
        else {
            enumerator.childNodes.pop();
            enumerator.contentNodes.pop();
            enumerator.childNodes[length - 2] = prefix;
            prefix.parent = enumerator;
        }
    }
}
SemanticHeuristics.add(new SemanticTreeHeuristic('rewrite_subcases', rewriteSubcasesTable, (table) => {
    let left = true;
    let right = true;
    const topLeft = table.childNodes[0].childNodes[0];
    if (!eligibleNode(topLeft.mathmlTree)) {
        left = false;
    }
    else {
        for (let i = 1, row; (row = table.childNodes[i]); i++) {
            if (row.childNodes[0].childNodes.length) {
                left = false;
                break;
            }
        }
    }
    if (left) {
        table.addAnnotation('Emph', 'left');
    }
    const topRight = table.childNodes[0].childNodes[table.childNodes[0].childNodes.length - 1];
    if (!eligibleNode(topRight.mathmlTree)) {
        right = false;
    }
    else {
        const firstRow = table.childNodes[0].childNodes.length;
        for (let i = 1, row; (row = table.childNodes[i]); i++) {
            if (row.childNodes.length >= firstRow) {
                right = false;
                break;
            }
        }
    }
    if (right) {
        table.addAnnotation('Emph', 'right');
    }
    return left || right;
}));
function eligibleNode(node) {
    return (node.childNodes[0] &&
        node.childNodes[0].childNodes[0] &&
        dom_util_tagName(node.childNodes[0]) === MMLTAGS.MPADDED &&
        dom_util_tagName(node.childNodes[0].childNodes[0]) ===
            MMLTAGS.MPADDED &&
        dom_util_tagName(node.childNodes[0].childNodes[node.childNodes[0].childNodes.length - 1]) === MMLTAGS.MPHANTOM);
}
const rewritable = [
    semantic_meaning_SemanticType.PUNCTUATED,
    semantic_meaning_SemanticType.RELSEQ,
    semantic_meaning_SemanticType.MULTIREL,
    semantic_meaning_SemanticType.INFIXOP,
    semantic_meaning_SemanticType.PREFIXOP,
    semantic_meaning_SemanticType.POSTFIXOP
];
function rewriteSubcasesTable(table) {
    table.addAnnotation('Emph', 'top');
    let row = [];
    if (table.hasAnnotation('Emph', 'left')) {
        const topLeft = table.childNodes[0].childNodes[0].childNodes[0];
        const cells = rewriteCell(topLeft, true);
        cells.forEach((x) => x.addAnnotation('Emph', 'left'));
        row = row.concat(cells);
        for (let i = 0, line; (line = table.childNodes[i]); i++) {
            line.childNodes.shift();
        }
    }
    row.push(table);
    if (table.hasAnnotation('Emph', 'right')) {
        const topRight = table.childNodes[0].childNodes[table.childNodes[0].childNodes.length - 1]
            .childNodes[0];
        const cells = rewriteCell(topRight);
        cells.forEach((x) => x.addAnnotation('Emph', 'left'));
        row = row.concat(cells);
        table.childNodes[0].childNodes.pop();
    }
    SemanticProcessor.tableToMultiline(table);
    const newNode = SemanticProcessor.getInstance().row(row);
    const annotation = table.annotation['Emph'];
    table.annotation['Emph'] = ['table'];
    annotation.forEach((x) => newNode.addAnnotation('Emph', x));
    return newNode;
}
function rewriteCell(cell, left) {
    if (!cell.childNodes.length) {
        rewriteFence(cell);
        return [cell];
    }
    let fence = null;
    if (cell.type === semantic_meaning_SemanticType.PUNCTUATED &&
        (left
            ? cell.role === semantic_meaning_SemanticRole.ENDPUNCT
            : cell.role === semantic_meaning_SemanticRole.STARTPUNCT)) {
        const children = cell.childNodes;
        if (rewriteFence(children[left ? children.length - 1 : 0])) {
            cell = children[left ? 0 : children.length - 1];
            fence = children[left ? children.length - 1 : 0];
        }
    }
    if (rewritable.indexOf(cell.type) !== -1) {
        const children = cell.childNodes;
        rewriteFence(children[left ? children.length - 1 : 0]);
        const newNodes = SemanticSkeleton.combineContentChildren(cell.type, cell.role, cell.contentNodes, cell.childNodes);
        if (fence) {
            if (left) {
                newNodes.push(fence);
            }
            else {
                newNodes.unshift(fence);
            }
        }
        return newNodes;
    }
    return fence ? (left ? [cell, fence] : [fence, cell]) : [cell];
}
const PUNCT_TO_FENCE_ = {
    [semantic_meaning_SemanticRole.METRIC]: semantic_meaning_SemanticRole.METRIC,
    [semantic_meaning_SemanticRole.VBAR]: semantic_meaning_SemanticRole.NEUTRAL,
    [semantic_meaning_SemanticRole.OPENFENCE]: semantic_meaning_SemanticRole.OPEN,
    [semantic_meaning_SemanticRole.CLOSEFENCE]: semantic_meaning_SemanticRole.CLOSE
};
function rewriteFence(fence) {
    if (fence.type !== semantic_meaning_SemanticType.PUNCTUATION) {
        return false;
    }
    const role = PUNCT_TO_FENCE_[fence.role];
    if (!role) {
        return false;
    }
    fence.role = role;
    fence.type = semantic_meaning_SemanticType.FENCE;
    fence.addAnnotation('Emph', 'fence');
    return true;
}
SemanticHeuristics.add(new SemanticMultiHeuristic('ellipses', (nodes) => {
    const newNodes = [];
    let current = nodes.shift();
    while (current) {
        [current, nodes] = combineNodes(current, nodes, semantic_meaning_SemanticRole.FULLSTOP, semantic_meaning_SemanticRole.ELLIPSIS);
        [current, nodes] = combineNodes(current, nodes, semantic_meaning_SemanticRole.DASH);
        newNodes.push(current);
        current = nodes.shift();
    }
    return newNodes;
}, (nodes) => nodes.length > 1));
function combineNodes(current, nodes, src, target = src) {
    const collect = [];
    while (current && current.role === src) {
        collect.push(current);
        current = nodes.shift();
    }
    if (!collect.length) {
        return [current, nodes];
    }
    if (current) {
        nodes.unshift(current);
    }
    return [
        collect.length === 1 ? collect[0] : combinedNodes(collect, target),
        nodes
    ];
}
function combinedNodes(nodes, role) {
    const node = SemanticHeuristics.factory.makeBranchNode(semantic_meaning_SemanticType.PUNCTUATION, nodes, []);
    node.role = role;
    return node;
}
SemanticHeuristics.add(new SemanticMultiHeuristic('op_with_limits', (nodes) => {
    const center = nodes[0];
    center.type = semantic_meaning_SemanticType.LARGEOP;
    center.role = semantic_meaning_SemanticRole.SUM;
    return nodes;
}, (nodes) => {
    return (nodes[0].type === semantic_meaning_SemanticType.OPERATOR &&
        nodes
            .slice(1)
            .some((node) => node.type === semantic_meaning_SemanticType.RELSEQ ||
            node.type === semantic_meaning_SemanticType.MULTIREL ||
            (node.type === semantic_meaning_SemanticType.INFIXOP &&
                node.role === semantic_meaning_SemanticRole.ELEMENT) ||
            (node.type === semantic_meaning_SemanticType.PUNCTUATED &&
                node.role === semantic_meaning_SemanticRole.SEQUENCE)));
}));
SemanticHeuristics.add(new SemanticMmlHeuristic('function_from_identifiers', (node) => {
    const expr = toArray(node.childNodes)
        .map((x) => x.textContent.trim())
        .join('');
    const meaning = SemanticMap.Meaning.get(expr);
    if (meaning.type === semantic_meaning_SemanticType.UNKNOWN) {
        return node;
    }
    const snode = SemanticHeuristics.factory.makeLeafNode(expr, SemanticProcessor.getInstance().font(node.getAttribute('mathvariant')));
    snode.mathmlTree = node;
    return snode;
}, (node) => {
    const children = toArray(node.childNodes);
    if (children.length < 2) {
        return false;
    }
    return children.every((child) => dom_util_tagName(child) === MMLTAGS.MI &&
        SemanticMap.Meaning.get(child.textContent.trim()).role ===
            semantic_meaning_SemanticRole.LATINLETTER);
}));
SemanticHeuristics.add(new SemanticMultiHeuristic('bracketed_interval', (nodes) => {
    const leftFence = nodes[0];
    const rightFence = nodes[1];
    const content = nodes.slice(2);
    const childNode = SemanticProcessor.getInstance().row(content);
    const fenced = SemanticHeuristics.factory.makeBranchNode(semantic_meaning_SemanticType.FENCED, [childNode], [leftFence, rightFence]);
    fenced.role = semantic_meaning_SemanticRole.INTERVAL;
    return fenced;
}, (nodes) => {
    const leftFence = nodes[0];
    const rightFence = nodes[1];
    const content = nodes.slice(2);
    if (!(leftFence &&
        rightFence &&
        ((isCloseBrack(leftFence.textContent) &&
            (isOpenBrack(rightFence.textContent) || isCloseBrack((rightFence.textContent))) ||
            (isOpenBrack(rightFence.textContent) &&
                (isOpenBrack(leftFence.textContent) || isCloseBrack(leftFence.textContent))))))) {
        return false;
    }
    if (content.length === 1 &&
        content[0].type === semantic_meaning_SemanticType.PUNCTUATED &&
        content[0].contentNodes.length === 1) {
        return true;
    }
    const partition = partitionNodes(content, isPunctuation);
    return !!(partition.rel.length === 1 &&
        partition.comp[0].length &&
        partition.comp[1].length);
}));
function isOpenBrack(str) {
    return ['[', '［'].includes(str);
}
function isCloseBrack(str) {
    return [']', '］'].includes(str);
}
function isOpenParen(str) {
    return ['(', '⁽', '₍'].includes(str);
}
function isCloseParen(str) {
    return [')', '⁾', '₎'].includes(str);
}
function isInfty(node) {
    return node.role === semantic_meaning_SemanticRole.INFTY ||
        (node.type === semantic_meaning_SemanticType.PREFIXOP &&
            node.childNodes[0].role === semantic_meaning_SemanticRole.INFTY);
}
SemanticHeuristics.add(new SemanticTreeHeuristic('interval_heuristic', (node) => {
    node.role = semantic_meaning_SemanticRole.INTERVAL;
    return node;
}, (node) => {
    return isPotentialInterval(node);
}));
function isPotentialInterval(node) {
    const child = node.childNodes[0];
    if (node.type !== semantic_meaning_SemanticType.FENCED ||
        (child === null || child === void 0 ? void 0 : child.type) !== semantic_meaning_SemanticType.PUNCTUATED ||
        (child === null || child === void 0 ? void 0 : child.childNodes.length) !== 3 ||
        (child === null || child === void 0 ? void 0 : child.contentNodes.length) !== 1 ||
        (child === null || child === void 0 ? void 0 : child.childNodes[1].role) !== semantic_meaning_SemanticRole.COMMA) {
        return false;
    }
    const first = node.childNodes[0].childNodes[0];
    const second = node.childNodes[0].childNodes[2];
    const left = node.contentNodes[0].textContent;
    const right = node.contentNodes[1].textContent;
    if ((isOpenBrack(left) && isCloseParen(right)) ||
        (isOpenParen(left) && isCloseBrack(right))) {
        return true;
    }
    if (isOpenParen(left) && isCloseParen(right) &&
        (isInfty(first) || isInfty(second))) {
        return true;
    }
    return false;
}
SemanticHeuristics.add(new SemanticTreeHeuristic('propagateInterval', (node) => {
    node.childNodes.forEach(child => {
        if (isPotentialInterval(child)) {
            child.role = semantic_meaning_SemanticRole.INTERVAL;
        }
    });
    return node;
}, (node) => {
    return isMembership(node);
}));
//# sourceMappingURL=semantic_heuristics.js.map
;// ./node_modules/.pnpm/speech-rule-engine@5.0.0-beta.1/node_modules/speech-rule-engine/js/semantic_tree/special_annotators.js




function isSimpleExpression(node) {
    return (isSimpleNumber_(node) ||
        isSimpleLetters_(node) ||
        isSimpleDegree_(node) ||
        isSimpleNegative_(node) ||
        isSimpleFunction_(node));
}
function isSimpleFunction_(node) {
    return (node.type === semantic_meaning_SemanticType.APPL &&
        (node.childNodes[0].role === semantic_meaning_SemanticRole.PREFIXFUNC ||
            node.childNodes[0].role === semantic_meaning_SemanticRole.SIMPLEFUNC) &&
        (isSimple_(node.childNodes[1]) ||
            (node.childNodes[1].type === semantic_meaning_SemanticType.FENCED &&
                isSimple_(node.childNodes[1].childNodes[0]))));
}
function isSimpleNegative_(node) {
    return (node.type === semantic_meaning_SemanticType.PREFIXOP &&
        node.role === semantic_meaning_SemanticRole.NEGATIVE &&
        isSimple_(node.childNodes[0]) &&
        node.childNodes[0].type !== semantic_meaning_SemanticType.PREFIXOP &&
        node.childNodes[0].type !== semantic_meaning_SemanticType.APPL &&
        node.childNodes[0].type !== semantic_meaning_SemanticType.PUNCTUATED);
}
function isSimpleDegree_(node) {
    return (node.type === semantic_meaning_SemanticType.PUNCTUATED &&
        node.role === semantic_meaning_SemanticRole.ENDPUNCT &&
        node.childNodes.length === 2 &&
        node.childNodes[1].role === semantic_meaning_SemanticRole.DEGREE &&
        (isLetter_(node.childNodes[0]) ||
            isNumber_(node.childNodes[0]) ||
            (node.childNodes[0].type === semantic_meaning_SemanticType.PREFIXOP &&
                node.childNodes[0].role === semantic_meaning_SemanticRole.NEGATIVE &&
                (isLetter_(node.childNodes[0].childNodes[0]) ||
                    isNumber_(node.childNodes[0].childNodes[0])))));
}
function isSimpleLetters_(node) {
    return (isLetter_(node) ||
        (node.type === semantic_meaning_SemanticType.INFIXOP &&
            node.role === semantic_meaning_SemanticRole.IMPLICIT &&
            ((node.childNodes.length === 2 &&
                (isLetter_(node.childNodes[0]) ||
                    isSimpleNumber_(node.childNodes[0])) &&
                isLetter_(node.childNodes[1])) ||
                (node.childNodes.length === 3 &&
                    isSimpleNumber_(node.childNodes[0]) &&
                    isLetter_(node.childNodes[1]) &&
                    isLetter_(node.childNodes[2])))));
}
function isSimple_(node) {
    return node.hasAnnotation('clearspeak', 'simple');
}
function isLetter_(node) {
    return (node.type === semantic_meaning_SemanticType.IDENTIFIER &&
        (node.role === semantic_meaning_SemanticRole.LATINLETTER ||
            node.role === semantic_meaning_SemanticRole.GREEKLETTER ||
            node.role === semantic_meaning_SemanticRole.OTHERLETTER ||
            node.role === semantic_meaning_SemanticRole.SIMPLEFUNC));
}
function isNumber_(node) {
    return (node.type === semantic_meaning_SemanticType.NUMBER &&
        (node.role === semantic_meaning_SemanticRole.INTEGER || node.role === semantic_meaning_SemanticRole.FLOAT));
}
function isSimpleNumber_(node) {
    return isNumber_(node) || isSimpleFraction_(node);
}
function isSimpleFraction_(node) {
    if (hasPreference('Fraction_Over') || hasPreference('Fraction_FracOver')) {
        return false;
    }
    if (node.type !== semantic_meaning_SemanticType.FRACTION ||
        node.role !== semantic_meaning_SemanticRole.VULGAR) {
        return false;
    }
    if (hasPreference('Fraction_Ordinal')) {
        return true;
    }
    const enumerator = parseInt(node.childNodes[0].textContent, 10);
    const denominator = parseInt(node.childNodes[1].textContent, 10);
    return (enumerator > 0 && enumerator < 20 && denominator > 0 && denominator < 11);
}
function hasPreference(pref) {
    return Engine.getInstance().options.style === pref;
}
register(new SemanticAnnotator('clearspeak', 'simple', function (node) {
    return isSimpleExpression(node) ? 'simple' : '';
}));
activate('clearspeak', 'simple');
function isUnitExpression(node) {
    return ((node.type === semantic_meaning_SemanticType.TEXT && node.role !== semantic_meaning_SemanticRole.LABEL) ||
        (node.type === semantic_meaning_SemanticType.PUNCTUATED &&
            node.role === semantic_meaning_SemanticRole.TEXT &&
            isNumber_(node.childNodes[0]) &&
            allTextLastContent_(node.childNodes.slice(1))) ||
        (node.type === semantic_meaning_SemanticType.IDENTIFIER &&
            node.role === semantic_meaning_SemanticRole.UNIT) ||
        (node.type === semantic_meaning_SemanticType.INFIXOP &&
            (node.role === semantic_meaning_SemanticRole.IMPLICIT || node.role === semantic_meaning_SemanticRole.UNIT)));
}
function allTextLastContent_(nodes) {
    for (let i = 0; i < nodes.length - 1; i++) {
        if (!(nodes[i].type === semantic_meaning_SemanticType.TEXT && nodes[i].textContent === '')) {
            return false;
        }
    }
    return nodes[nodes.length - 1].type === semantic_meaning_SemanticType.TEXT;
}
register(new SemanticAnnotator('clearspeak', 'unit', function (node) {
    return isUnitExpression(node) ? 'unit' : '';
}));
activate('clearspeak', 'unit');
const NUMBER_PROPAGATORS = [
    semantic_meaning_SemanticType.MULTIREL,
    semantic_meaning_SemanticType.RELSEQ,
    semantic_meaning_SemanticType.APPL,
    semantic_meaning_SemanticType.ROW,
    semantic_meaning_SemanticType.LINE
];
const NUMBER_INHIBITORS = [
    semantic_meaning_SemanticType.SUBSCRIPT,
    semantic_meaning_SemanticType.SUPERSCRIPT,
    semantic_meaning_SemanticType.OVERSCORE,
    semantic_meaning_SemanticType.UNDERSCORE
];
function checkParent(node, info) {
    const parent = node.parent;
    if (!parent) {
        return false;
    }
    const type = parent.type;
    if (NUMBER_PROPAGATORS.indexOf(type) !== -1 ||
        (type === semantic_meaning_SemanticType.PREFIXOP &&
            parent.role === semantic_meaning_SemanticRole.NEGATIVE &&
            !info.script &&
            !info.enclosed) ||
        (type === semantic_meaning_SemanticType.PREFIXOP &&
            parent.role === semantic_meaning_SemanticRole.GEOMETRY)) {
        return true;
    }
    if (type === semantic_meaning_SemanticType.PUNCTUATED) {
        if (!info.enclosed || parent.role === semantic_meaning_SemanticRole.TEXT) {
            return true;
        }
    }
    return false;
}
function propagateNumber(node, info) {
    if (!node.childNodes.length) {
        if (checkParent(node, info)) {
            info.number = true;
            info.script = false;
            info.enclosed = false;
        }
        return [
            info['number'] ? 'number' : '',
            { number: false, enclosed: info.enclosed, script: info.script }
        ];
    }
    if (NUMBER_INHIBITORS.indexOf(node.type) !== -1) {
        info.script = true;
    }
    if (node.type === semantic_meaning_SemanticType.FENCED) {
        info.number = false;
        info.enclosed = true;
        return ['', info];
    }
    if (node.type === semantic_meaning_SemanticType.PREFIXOP &&
        node.role !== semantic_meaning_SemanticRole.GEOMETRY &&
        node.role !== semantic_meaning_SemanticRole.NEGATIVE) {
        info.number = false;
        return ['', info];
    }
    if (checkParent(node, info)) {
        info.number = true;
        info.enclosed = false;
    }
    return ['', info];
}
register(new SemanticVisitor('nemeth', 'number', propagateNumber, { number: true }));
activate('nemeth', 'number');
function annotateDepth(node) {
    if (!node.parent) {
        return [1];
    }
    const depth = parseInt(node.parent.annotation['depth'][0]);
    return [depth + 1];
}
register(new SemanticVisitor('depth', 'depth', annotateDepth));
activate('depth', 'depth');
//# sourceMappingURL=special_annotators.js.map
;// ./node_modules/.pnpm/speech-rule-engine@5.0.0-beta.1/node_modules/speech-rule-engine/js/semantic_tree/semantic_tree.js










class SemanticTree {
    static empty() {
        const empty = parseInput('<math/>');
        const stree = new SemanticTree(empty, new Options());
        stree.mathml = empty;
        return stree;
    }
    static fromNode(semantic, opt_mathml) {
        const stree = SemanticTree.empty();
        stree.root = semantic;
        if (opt_mathml) {
            stree.mathml = opt_mathml;
        }
        return stree;
    }
    static fromRoot(semantic, opt_mathml) {
        let root = semantic;
        while (root.parent) {
            root = root.parent;
        }
        const stree = SemanticTree.fromNode(root);
        if (opt_mathml) {
            stree.mathml = opt_mathml;
        }
        return stree;
    }
    static fromXml(xml) {
        const stree = SemanticTree.empty();
        if (xml.childNodes[0]) {
            stree.root = SemanticNode.fromXml(xml.childNodes[0]);
        }
        return stree;
    }
    constructor(mathml, options) {
        this.mathml = mathml;
        this.options = options;
        this.parser = new SemanticMathml(options);
        this.root = this.parser.parse(mathml);
        this.collator = this.parser.getFactory().leafMap.collateMeaning();
        const newDefault = this.collator.newDefault();
        if (newDefault) {
            this.parser = new SemanticMathml(options);
            this.parser.getFactory().defaultMap = newDefault;
            this.root = this.parser.parse(mathml);
        }
        unitVisitor.visit(this.root, {});
        annotate(this.root);
    }
    xml(opt_brief) {
        const xml = parseInput('<stree></stree>');
        const xmlRoot = this.root.xml(xml.ownerDocument, opt_brief);
        xml.appendChild(xmlRoot);
        return xml;
    }
    toString(opt_brief) {
        return serializeXml(this.xml(opt_brief));
    }
    formatXml(opt_brief) {
        const xml = this.toString(opt_brief);
        return formatXml(xml);
    }
    displayTree() {
        this.root.displayTree();
    }
    replaceNode(oldNode, newNode) {
        const parent = oldNode.parent;
        if (!parent) {
            this.root = newNode;
            return;
        }
        parent.replaceChild(oldNode, newNode);
    }
    toJson() {
        const json = {};
        json['stree'] = this.root.toJson();
        return json;
    }
}
const unitVisitor = new SemanticVisitor('general', 'unit', (node, _info) => {
    if (isUnitProduct(node)) {
        node.role = semantic_meaning_SemanticRole.UNIT;
    }
    return false;
});
//# sourceMappingURL=semantic_tree.js.map
;// ./node_modules/.pnpm/speech-rule-engine@5.0.0-beta.1/node_modules/speech-rule-engine/js/semantic_tree/semantic.js


function xmlTree(mml, options) {
    return getTree(mml, options).xml();
}
function getTree(mml, options) {
    return new SemanticTree(mml, options);
}
function getTreeFromString(expr, options) {
    const mml = DomUtil.parseInput(expr);
    return getTree(mml, options);
}
//# sourceMappingURL=semantic.js.map
;// ./node_modules/.pnpm/speech-rule-engine@5.0.0-beta.1/node_modules/speech-rule-engine/js/enrich_mathml/enrich_case.js
function getCase(node) {
    for (let i = 0, enrich; (enrich = factory[i]); i++) {
        if (enrich.test(node)) {
            return enrich.constr(node);
        }
    }
    return null;
}
const factory = [];
//# sourceMappingURL=enrich_case.js.map
;// ./node_modules/.pnpm/speech-rule-engine@5.0.0-beta.1/node_modules/speech-rule-engine/js/enrich_mathml/enrich_mathml.js










const SETTINGS = {
    collapsed: true,
    implicit: true
};
const IDS = new Map();
function enrich(mml, semantic, options) {
    Debugger.getInstance().generate(() => [
        'Original MathML',
        formattedOutput(mml)
    ]);
    IDS.clear();
    walkTree(semantic.root);
    if (options.structure) {
        mml.setAttribute(enrich_attr_Attribute.STRUCTURE, SemanticSkeleton.fromStructure(mml, semantic, options).toString());
    }
    Debugger.getInstance().generate(() => [
        'Semantic Tree\n',
        formattedOutput(semantic),
        'Semantically enriched MathML\n',
        formattedOutput(mml)
    ]);
    return mml;
}
function walkTree(semantic) {
    Debugger.getInstance().generate(() => [
        'WALKING START: ',
        semantic.toString()
    ]);
    const specialCase = getCase(semantic);
    let newNode;
    if (specialCase) {
        newNode = specialCase.getMathml();
        Debugger.getInstance().generate(() => [
            'WALKING END: ',
            semantic.toString()
        ]);
        return ascendNewNode(newNode);
    }
    if (semantic.mathml.length === 1) {
        Debugger.getInstance().output('Walktree Case 0');
        if (!semantic.childNodes.length) {
            Debugger.getInstance().output('Walktree Case 0.1');
            newNode = semantic.mathml[0];
            setAttributes(newNode, semantic);
            Debugger.getInstance().generate(() => [
                'WALKING END: ',
                semantic.toString()
            ]);
            return ascendNewNode(newNode);
        }
        const fchild = semantic.childNodes[0];
        if (semantic.childNodes.length === 1 &&
            fchild.type === semantic_meaning_SemanticType.EMPTY) {
            Debugger.getInstance().output('Walktree Case 0.2');
            newNode = semantic.mathml[0];
            setAttributes(newNode, semantic);
            newNode.appendChild(walkTree(fchild));
            Debugger.getInstance().generate(() => [
                'WALKING END: ',
                semantic.toString()
            ]);
            return ascendNewNode(newNode);
        }
        semantic.childNodes.forEach((child) => {
            if (!child.mathml.length) {
                child.mathml = [createInvisibleOperator(child)];
            }
        });
    }
    const newContent = semantic.contentNodes.map(cloneContentNode);
    setOperatorAttribute(semantic, newContent);
    const newChildren = semantic.childNodes.map(walkTree);
    const childrenList = SemanticSkeleton.combineContentChildren(semantic.type, semantic.role, newContent, newChildren);
    newNode = semantic.mathmlTree;
    if (newNode === null) {
        Debugger.getInstance().output('Walktree Case 1');
        newNode = introduceNewLayer(childrenList, semantic);
    }
    else {
        const attached = attachedElement(childrenList);
        Debugger.getInstance().output('Walktree Case 2');
        if (attached) {
            Debugger.getInstance().output('Walktree Case 2.1');
            newNode = parentNode(attached);
        }
        else {
            Debugger.getInstance().output('Walktree Case 2.2');
            newNode = getInnerNode(newNode);
        }
    }
    newNode = rewriteMfenced(newNode);
    mergeChildren(newNode, childrenList, semantic);
    if (!IDS.has(semantic.id)) {
        IDS.set(semantic.id, true);
        setAttributes(newNode, semantic);
    }
    Debugger.getInstance().generate(() => ['WALKING END: ', semantic.toString()]);
    return ascendNewNode(newNode);
}
function introduceNewLayer(children, semantic) {
    const lca = mathmlLca(children);
    let newNode = lca.node;
    const info = lca.type;
    if (info !== lcaType.VALID ||
        !hasEmptyTag(newNode) ||
        (!newNode.parentNode && semantic.parent)) {
        Debugger.getInstance().output('Walktree Case 1.1');
        newNode = addMrow();
        if (info === lcaType.PRUNED) {
            Debugger.getInstance().output('Walktree Case 1.1.0');
            newNode = introduceLayerAboveLca(newNode, lca.node, children);
        }
        else if (children[0]) {
            Debugger.getInstance().output('Walktree Case 1.1.1');
            const node = attachedElement(children);
            if (node) {
                const oldChildren = childrenSubset(parentNode(node), children);
                replaceNode(node, newNode);
                oldChildren.forEach(function (x) {
                    newNode.appendChild(x);
                });
            }
            else {
                moveSemanticAttributes(newNode, children[0]);
                newNode = children[0];
            }
        }
    }
    if (!semantic.mathmlTree) {
        semantic.mathmlTree = newNode;
    }
    return newNode;
}
function introduceLayerAboveLca(mrow, lca, children) {
    let innerNode = descendNode(lca);
    if (hasMathTag(innerNode)) {
        Debugger.getInstance().output('Walktree Case 1.1.0.0');
        moveSemanticAttributes(innerNode, mrow);
        toArray(innerNode.childNodes).forEach(function (x) {
            mrow.appendChild(x);
        });
        const auxNode = mrow;
        mrow = innerNode;
        innerNode = auxNode;
    }
    const index = children.indexOf(lca);
    children[index] = innerNode;
    replaceNode(innerNode, mrow);
    mrow.appendChild(innerNode);
    children.forEach(function (x) {
        mrow.appendChild(x);
    });
    return mrow;
}
function moveSemanticAttributes(oldNode, newNode) {
    for (const attr of EnrichAttributes) {
        if (oldNode.hasAttribute(attr)) {
            newNode.setAttribute(attr, oldNode.getAttribute(attr));
            oldNode.removeAttribute(attr);
        }
    }
}
function childrenSubset(node, newChildren) {
    const oldChildren = toArray(node.childNodes);
    let leftIndex = +Infinity;
    let rightIndex = -Infinity;
    newChildren.forEach(function (child) {
        const index = oldChildren.indexOf(child);
        if (index !== -1) {
            leftIndex = Math.min(leftIndex, index);
            rightIndex = Math.max(rightIndex, index);
        }
    });
    return oldChildren.slice(leftIndex, rightIndex + 1);
}
function collateChildNodes(node, children, semantic) {
    const oldChildren = [];
    let newChildren = toArray(node.childNodes);
    let notFirst = false;
    while (newChildren.length) {
        const child = newChildren.shift();
        if (child.hasAttribute(enrich_attr_Attribute.TYPE)) {
            oldChildren.push(child);
            continue;
        }
        const collect = collectChildNodes(child, children);
        if (collect.length === 0) {
            continue;
        }
        if (collect.length === 1) {
            oldChildren.push(child);
            continue;
        }
        if (notFirst) {
            child.setAttribute('AuxiliaryImplicit', true);
        }
        else {
            notFirst = true;
        }
        newChildren = collect.concat(newChildren);
    }
    const rear = [];
    const semChildren = semantic.childNodes.map(function (x) {
        return x.mathmlTree;
    });
    while (semChildren.length) {
        const schild = semChildren.pop();
        if (!schild) {
            continue;
        }
        if (oldChildren.indexOf(schild) !== -1) {
            break;
        }
        if (children.indexOf(schild) !== -1) {
            rear.unshift(schild);
        }
    }
    return oldChildren.concat(rear);
}
function collectChildNodes(node, children) {
    const collect = [];
    let newChildren = toArray(node.childNodes);
    while (newChildren.length) {
        const child = newChildren.shift();
        if (child.nodeType !== NodeType.ELEMENT_NODE) {
            continue;
        }
        if (child.hasAttribute(enrich_attr_Attribute.TYPE) ||
            children.indexOf(child) !== -1) {
            collect.push(child);
            continue;
        }
        newChildren = toArray(child.childNodes).concat(newChildren);
    }
    return collect;
}
function mergeChildren(node, newChildren, semantic) {
    if (!newChildren.length)
        return;
    if (newChildren.length === 1 && node === newChildren[0])
        return;
    const oldChildren = semantic.role === semantic_meaning_SemanticRole.IMPLICIT &&
        SemanticHeuristics.flags.combine_juxtaposition
        ? collateChildNodes(node, newChildren, semantic)
        : toArray(node.childNodes);
    if (!oldChildren.length) {
        newChildren.forEach(function (x) {
            node.appendChild(x);
        });
        return;
    }
    let oldCounter = 0;
    while (newChildren.length) {
        const newChild = newChildren[0];
        if (oldChildren[oldCounter] === newChild ||
            functionApplication(oldChildren[oldCounter], newChild)) {
            newChildren.shift();
            oldCounter++;
            continue;
        }
        if (oldChildren[oldCounter] &&
            newChildren.indexOf(oldChildren[oldCounter]) === -1) {
            oldCounter++;
            continue;
        }
        if (isDescendant(newChild, node)) {
            newChildren.shift();
            continue;
        }
        const oldChild = oldChildren[oldCounter];
        if (!oldChild) {
            if (newChild.parentNode) {
                node = parentNode(newChild);
                newChildren.shift();
                continue;
            }
            const nextChild = newChildren[1];
            if (nextChild && nextChild.parentNode) {
                node = parentNode(nextChild);
                node.insertBefore(newChild, nextChild);
                newChildren.shift();
                newChildren.shift();
                continue;
            }
            node.insertBefore(newChild, null);
            newChildren.shift();
            continue;
        }
        insertNewChild(node, oldChild, newChild);
        newChildren.shift();
    }
}
function insertNewChild(node, oldChild, newChild) {
    let parent = oldChild;
    let next = parentNode(parent);
    while (next &&
        next.firstChild === parent &&
        !parent.hasAttribute('AuxiliaryImplicit') &&
        next !== node) {
        parent = next;
        next = parentNode(parent);
    }
    if (next) {
        next.insertBefore(newChild, parent);
        parent.removeAttribute('AuxiliaryImplicit');
    }
}
function isDescendant(child, node) {
    if (!child) {
        return false;
    }
    do {
        child = parentNode(child);
        if (child === node) {
            return true;
        }
    } while (child);
    return false;
}
function functionApplication(oldNode, newNode) {
    const appl = NamedSymbol.functionApplication;
    if (oldNode &&
        newNode &&
        oldNode.textContent &&
        newNode.textContent &&
        oldNode.textContent === appl &&
        newNode.textContent === appl &&
        newNode.getAttribute(enrich_attr_Attribute.ADDED) === 'true') {
        for (let i = 0, attr; (attr = oldNode.attributes[i]); i++) {
            if (!newNode.hasAttribute(attr.nodeName)) {
                newNode.setAttribute(attr.nodeName, attr.nodeValue);
            }
        }
        replaceNode(oldNode, newNode);
        return true;
    }
    return false;
}
var lcaType;
(function (lcaType) {
    lcaType["VALID"] = "valid";
    lcaType["INVALID"] = "invalid";
    lcaType["PRUNED"] = "pruned";
})(lcaType || (lcaType = {}));
function mathmlLca(children) {
    const leftMost = attachedElement(children);
    if (!leftMost) {
        return { type: lcaType.INVALID, node: null };
    }
    const rightMost = attachedElement(children.slice().reverse());
    if (leftMost === rightMost) {
        return { type: lcaType.VALID, node: leftMost };
    }
    const leftPath = pathToRoot(leftMost);
    const newLeftPath = prunePath(leftPath, children);
    const rightPath = pathToRoot(rightMost, function (x) {
        return newLeftPath.indexOf(x) !== -1;
    });
    const lca = rightPath[0];
    const lIndex = newLeftPath.indexOf(lca);
    if (lIndex === -1) {
        return { type: lcaType.INVALID, node: null };
    }
    return {
        type: newLeftPath.length !== leftPath.length
            ? lcaType.PRUNED
            : validLca(newLeftPath[lIndex + 1], rightPath[1])
                ? lcaType.VALID
                : lcaType.INVALID,
        node: lca
    };
}
function prunePath(path, children) {
    let i = 0;
    while (path[i] && children.indexOf(path[i]) === -1) {
        i++;
    }
    return path.slice(0, i + 1);
}
function attachedElement(nodes) {
    let count = 0;
    let attached = null;
    while (!attached && count < nodes.length) {
        if (nodes[count].parentNode) {
            attached = nodes[count];
        }
        count++;
    }
    return attached;
}
function pathToRoot(node, opt_test) {
    const test = opt_test || ((_x) => false);
    const path = [node];
    while (!test(node) && !hasMathTag(node) && node.parentNode) {
        node = parentNode(node);
        path.unshift(node);
    }
    return path;
}
function validLca(left, right) {
    return !!(left && right && !left.previousSibling && !right.nextSibling);
}
function ascendNewNode(newNode) {
    while (!hasMathTag(newNode) && unitChild(newNode)) {
        newNode = parentNode(newNode);
    }
    return newNode;
}
function descendNode(node) {
    const children = toArray(node.childNodes);
    if (!children) {
        return node;
    }
    const remainder = children.filter(function (child) {
        return (child.nodeType === NodeType.ELEMENT_NODE &&
            !hasIgnoreTag(child));
    });
    if (remainder.length === 1 &&
        hasEmptyTag(remainder[0]) &&
        !remainder[0].hasAttribute(enrich_attr_Attribute.TYPE)) {
        return descendNode(remainder[0]);
    }
    return node;
}
function unitChild(node) {
    const parent = parentNode(node);
    if (!parent || !hasEmptyTag(parent)) {
        return false;
    }
    return toArray(parent.childNodes).every(function (child) {
        return child === node || isIgnorable(child);
    });
}
function isIgnorable(node) {
    if (node.nodeType !== NodeType.ELEMENT_NODE) {
        return true;
    }
    if (!node || hasIgnoreTag(node)) {
        return true;
    }
    const children = toArray(node.childNodes);
    if ((!hasEmptyTag(node) && children.length) ||
        hasDisplayTag(node) ||
        node.hasAttribute(enrich_attr_Attribute.TYPE) ||
        isOrphanedGlyph(node)) {
        return false;
    }
    return toArray(node.childNodes).every(isIgnorable);
}
function parentNode(element) {
    return element.parentNode;
}
function addCollapsedAttribute(node, collapsed) {
    const skeleton = new SemanticSkeleton(collapsed);
    node.setAttribute(enrich_attr_Attribute.COLLAPSED, skeleton.toString());
}
function cloneContentNode(content) {
    if (content.mathml.length) {
        return walkTree(content);
    }
    const clone = SETTINGS.implicit
        ? createInvisibleOperator(content)
        : addMrow();
    content.mathml = [clone];
    return clone;
}
function rewriteMfenced(mml) {
    if (dom_util_tagName(mml) !== MMLTAGS.MFENCED) {
        return mml;
    }
    const newNode = addMrow();
    for (let i = 0, attr; (attr = mml.attributes[i]); i++) {
        if (['open', 'close', 'separators'].indexOf(attr.name) === -1) {
            newNode.setAttribute(attr.name, attr.value);
        }
    }
    toArray(mml.childNodes).forEach(function (x) {
        newNode.appendChild(x);
    });
    replaceNode(mml, newNode);
    return newNode;
}
function createInvisibleOperator(operator) {
    const moNode = createElement('mo');
    const text = createTextNode(operator.textContent);
    moNode.appendChild(text);
    setAttributes(moNode, operator);
    moNode.setAttribute(enrich_attr_Attribute.ADDED, 'true');
    return moNode;
}
function setOperatorAttribute(semantic, content) {
    const operator = semantic.type + (semantic.textContent ? ',' + semantic.textContent : '');
    content.forEach(function (c) {
        getInnerNode(c).setAttribute(enrich_attr_Attribute.OPERATOR, operator);
    });
}
function getInnerNode(node) {
    const children = toArray(node.childNodes);
    if (!children) {
        return node;
    }
    const remainder = children.filter(function (child) {
        return !isIgnorable(child);
    });
    const result = [];
    for (let i = 0, remain; (remain = remainder[i]); i++) {
        if (hasEmptyTag(remain) &&
            remain.getAttribute(enrich_attr_Attribute.TYPE) !==
                semantic_meaning_SemanticType.PUNCTUATION) {
            const nextInner = getInnerNode(remain);
            if (nextInner && nextInner !== remain) {
                result.push(nextInner);
            }
        }
        else {
            result.push(remain);
        }
    }
    if (result.length === 1) {
        return result[0];
    }
    return node;
}
function formattedOutput(element) {
    return removeAttributePrefix(formatXml(element.toString()));
}
function collapsePunctuated(semantic, opt_children) {
    const optional = !!opt_children;
    const children = opt_children || [];
    const parent = semantic.parent;
    const contentIds = semantic.contentNodes.map(function (x) {
        return x.id;
    });
    contentIds.unshift('c');
    const childIds = [semantic.id, contentIds];
    for (let i = 0, child; (child = semantic.childNodes[i]); i++) {
        const mmlChild = walkTree(child);
        children.push(mmlChild);
        const innerNode = getInnerNode(mmlChild);
        if (parent && !optional) {
            innerNode.setAttribute(enrich_attr_Attribute.PARENT, parent.id.toString());
        }
        childIds.push(child.id);
    }
    return childIds;
}
//# sourceMappingURL=enrich_mathml.js.map
;// ./node_modules/.pnpm/speech-rule-engine@5.0.0-beta.1/node_modules/speech-rule-engine/js/enrich_mathml/abstract_enrich_case.js
class AbstractEnrichCase {
    constructor(semantic) {
        this.semantic = semantic;
    }
}
//# sourceMappingURL=abstract_enrich_case.js.map
;// ./node_modules/.pnpm/speech-rule-engine@5.0.0-beta.1/node_modules/speech-rule-engine/js/enrich_mathml/case_binomial.js





class CaseBinomial extends AbstractEnrichCase {
    static test(semantic) {
        return (!semantic.mathmlTree &&
            semantic.type === semantic_meaning_SemanticType.LINE &&
            semantic.role === semantic_meaning_SemanticRole.BINOMIAL);
    }
    constructor(semantic) {
        super(semantic);
        this.mml = semantic.mathmlTree;
    }
    getMathml() {
        if (!this.semantic.childNodes.length) {
            return this.mml;
        }
        const child = this.semantic.childNodes[0];
        this.mml = walkTree(child);
        if (this.mml.hasAttribute(enrich_attr_Attribute.TYPE)) {
            const mrow = addMrow();
            replaceNode(this.mml, mrow);
            mrow.appendChild(this.mml);
            this.mml = mrow;
        }
        setAttributes(this.mml, this.semantic);
        return this.mml;
    }
}
//# sourceMappingURL=case_binomial.js.map
;// ./node_modules/.pnpm/speech-rule-engine@5.0.0-beta.1/node_modules/speech-rule-engine/js/enrich_mathml/case_double_script.js






class CaseDoubleScript extends AbstractEnrichCase {
    static test(semantic) {
        if (!semantic.mathmlTree || !semantic.childNodes.length) {
            return false;
        }
        const mmlTag = dom_util_tagName(semantic.mathmlTree);
        const role = semantic.childNodes[0].role;
        return ((mmlTag === MMLTAGS.MSUBSUP && role === semantic_meaning_SemanticRole.SUBSUP) ||
            (mmlTag === MMLTAGS.MUNDEROVER && role === semantic_meaning_SemanticRole.UNDEROVER));
    }
    constructor(semantic) {
        super(semantic);
        this.mml = semantic.mathmlTree;
    }
    getMathml() {
        const ignore = this.semantic.childNodes[0];
        const baseSem = ignore.childNodes[0];
        const supSem = this.semantic.childNodes[1];
        const subSem = ignore.childNodes[1];
        const supMml = walkTree(supSem);
        const baseMml = walkTree(baseSem);
        const subMml = walkTree(subSem);
        setAttributes(this.mml, this.semantic);
        this.mml.setAttribute(enrich_attr_Attribute.CHILDREN, makeIdList([baseSem, subSem, supSem]));
        [baseMml, subMml, supMml].forEach((child) => getInnerNode(child).setAttribute(enrich_attr_Attribute.PARENT, this.mml.getAttribute(enrich_attr_Attribute.ID)));
        this.mml.setAttribute(enrich_attr_Attribute.TYPE, ignore.role);
        addCollapsedAttribute(this.mml, [
            this.semantic.id,
            [ignore.id, baseSem.id, subSem.id],
            supSem.id
        ]);
        return this.mml;
    }
}
//# sourceMappingURL=case_double_script.js.map
;// ./node_modules/.pnpm/speech-rule-engine@5.0.0-beta.1/node_modules/speech-rule-engine/js/enrich_mathml/case_multiindex.js






class CaseMultiindex extends AbstractEnrichCase {
    static multiscriptIndex(index) {
        if (index.type === semantic_meaning_SemanticType.PUNCTUATED &&
            index.contentNodes[0].role === semantic_meaning_SemanticRole.DUMMY) {
            return collapsePunctuated(index);
        }
        walkTree(index);
        return index.id;
    }
    static createNone_(semantic) {
        const newNode = createElement('none');
        if (semantic) {
            setAttributes(newNode, semantic);
        }
        newNode.setAttribute(enrich_attr_Attribute.ADDED, 'true');
        return newNode;
    }
    constructor(semantic) {
        super(semantic);
        this.mml = semantic.mathmlTree;
    }
    completeMultiscript(rightIndices, leftIndices) {
        const children = toArray(this.mml.childNodes).slice(1);
        let childCounter = 0;
        const completeIndices = (indices) => {
            for (const index of indices) {
                const child = children[childCounter];
                if (child && index === parseInt(child.getAttribute(enrich_attr_Attribute.ID))) {
                    child.setAttribute(enrich_attr_Attribute.PARENT, this.semantic.id.toString());
                    childCounter++;
                }
                else if (!child ||
                    index !==
                        parseInt(getInnerNode(child).getAttribute(enrich_attr_Attribute.ID))) {
                    const query = this.semantic.querySelectorAll((x) => x.id === index);
                    this.mml.insertBefore(CaseMultiindex.createNone_(query[0]), child || null);
                }
                else {
                    getInnerNode(child).setAttribute(enrich_attr_Attribute.PARENT, this.semantic.id.toString());
                    childCounter++;
                }
            }
        };
        completeIndices(rightIndices);
        if (children[childCounter] &&
            dom_util_tagName(children[childCounter]) !== MMLTAGS.MPRESCRIPTS) {
            this.mml.insertBefore(children[childCounter], createElement('mprescripts'));
        }
        else {
            childCounter++;
        }
        completeIndices(leftIndices);
    }
}
//# sourceMappingURL=case_multiindex.js.map
;// ./node_modules/.pnpm/speech-rule-engine@5.0.0-beta.1/node_modules/speech-rule-engine/js/enrich_mathml/case_multiscripts.js







class CaseMultiscripts extends CaseMultiindex {
    static test(semantic) {
        if (!semantic.mathmlTree) {
            return false;
        }
        const mmlTag = dom_util_tagName(semantic.mathmlTree);
        return (mmlTag === MMLTAGS.MMULTISCRIPTS &&
            (semantic.type === semantic_meaning_SemanticType.SUPERSCRIPT ||
                semantic.type === semantic_meaning_SemanticType.SUBSCRIPT));
    }
    constructor(semantic) {
        super(semantic);
    }
    getMathml() {
        setAttributes(this.mml, this.semantic);
        let baseSem, rsup, rsub;
        if (this.semantic.childNodes[0] &&
            this.semantic.childNodes[0].role === semantic_meaning_SemanticRole.SUBSUP) {
            const ignore = this.semantic.childNodes[0];
            baseSem = ignore.childNodes[0];
            rsup = CaseMultiindex.multiscriptIndex(this.semantic.childNodes[1]);
            rsub = CaseMultiindex.multiscriptIndex(ignore.childNodes[1]);
            const collapsed = [this.semantic.id, [ignore.id, baseSem.id, rsub], rsup];
            addCollapsedAttribute(this.mml, collapsed);
            this.mml.setAttribute(enrich_attr_Attribute.TYPE, ignore.role);
            this.completeMultiscript(SemanticSkeleton.interleaveIds(rsub, rsup), []);
        }
        else {
            baseSem = this.semantic.childNodes[0];
            rsup = CaseMultiindex.multiscriptIndex(this.semantic.childNodes[1]);
            const collapsed = [this.semantic.id, baseSem.id, rsup];
            addCollapsedAttribute(this.mml, collapsed);
        }
        const childIds = SemanticSkeleton.collapsedLeafs(rsub || [], rsup);
        const base = walkTree(baseSem);
        getInnerNode(base).setAttribute(enrich_attr_Attribute.PARENT, this.semantic.id.toString());
        childIds.unshift(baseSem.id);
        this.mml.setAttribute(enrich_attr_Attribute.CHILDREN, childIds.join(','));
        return this.mml;
    }
}
//# sourceMappingURL=case_multiscripts.js.map
;// ./node_modules/.pnpm/speech-rule-engine@5.0.0-beta.1/node_modules/speech-rule-engine/js/enrich_mathml/case_tensor.js





class CaseTensor extends CaseMultiindex {
    static test(semantic) {
        return !!semantic.mathmlTree && semantic.type === semantic_meaning_SemanticType.TENSOR;
    }
    constructor(semantic) {
        super(semantic);
    }
    getMathml() {
        walkTree(this.semantic.childNodes[0]);
        const lsub = CaseMultiindex.multiscriptIndex(this.semantic.childNodes[1]);
        const lsup = CaseMultiindex.multiscriptIndex(this.semantic.childNodes[2]);
        const rsub = CaseMultiindex.multiscriptIndex(this.semantic.childNodes[3]);
        const rsup = CaseMultiindex.multiscriptIndex(this.semantic.childNodes[4]);
        setAttributes(this.mml, this.semantic);
        const collapsed = [
            this.semantic.id,
            this.semantic.childNodes[0].id,
            lsub,
            lsup,
            rsub,
            rsup
        ];
        addCollapsedAttribute(this.mml, collapsed);
        const childIds = SemanticSkeleton.collapsedLeafs(lsub, lsup, rsub, rsup);
        childIds.unshift(this.semantic.childNodes[0].id);
        this.mml.setAttribute(enrich_attr_Attribute.CHILDREN, childIds.join(','));
        this.completeMultiscript(SemanticSkeleton.interleaveIds(rsub, rsup), SemanticSkeleton.interleaveIds(lsub, lsup));
        return this.mml;
    }
}
//# sourceMappingURL=case_tensor.js.map
;// ./node_modules/.pnpm/speech-rule-engine@5.0.0-beta.1/node_modules/speech-rule-engine/js/enrich_mathml/case_embellished.js










class CaseEmbellished extends AbstractEnrichCase {
    static test(semantic) {
        return !!(semantic.mathmlTree &&
            semantic.fencePointer &&
            !semantic.mathmlTree.getAttribute('data-semantic-type'));
    }
    static makeEmptyNode_(id) {
        const mrow = addMrow();
        const empty = new SemanticNode(id);
        empty.type = semantic_meaning_SemanticType.EMPTY;
        empty.mathmlTree = mrow;
        return empty;
    }
    static fencedMap_(fence, ids) {
        ids[fence.id] = fence.mathmlTree;
        if (!fence.embellished) {
            return;
        }
        CaseEmbellished.fencedMap_(fence.childNodes[0], ids);
    }
    constructor(semantic) {
        super(semantic);
        this.fenced = null;
        this.fencedMml = null;
        this.fencedMmlNodes = [];
        this.ofence = null;
        this.ofenceMml = null;
        this.ofenceMap = {};
        this.cfence = null;
        this.cfenceMml = null;
        this.cfenceMap = {};
        this.parentCleanup = [];
    }
    getMathml() {
        this.getFenced_();
        this.fencedMml = walkTree(this.fenced);
        this.getFencesMml_();
        if (this.fenced.type === semantic_meaning_SemanticType.EMPTY && !this.fencedMml.parentNode) {
            this.fencedMml.setAttribute(enrich_attr_Attribute.ADDED, 'true');
            this.cfenceMml.parentNode.insertBefore(this.fencedMml, this.cfenceMml);
        }
        this.getFencedMml_();
        const rewrite = this.rewrite_();
        return rewrite;
    }
    fencedElement(node) {
        return (node.type === semantic_meaning_SemanticType.FENCED ||
            node.type === semantic_meaning_SemanticType.MATRIX ||
            node.type === semantic_meaning_SemanticType.VECTOR);
    }
    getFenced_() {
        let currentNode = this.semantic;
        while (!this.fencedElement(currentNode)) {
            currentNode = currentNode.childNodes[0];
        }
        this.fenced = currentNode.childNodes[0];
        this.ofence = currentNode.contentNodes[0];
        this.cfence = currentNode.contentNodes[1];
        CaseEmbellished.fencedMap_(this.ofence, this.ofenceMap);
        CaseEmbellished.fencedMap_(this.cfence, this.cfenceMap);
    }
    getFencedMml_() {
        let sibling = this.ofenceMml.nextSibling;
        sibling = sibling === this.fencedMml ? sibling : this.fencedMml;
        while (sibling && sibling !== this.cfenceMml) {
            this.fencedMmlNodes.push(sibling);
            sibling = sibling.nextSibling;
        }
    }
    getFencesMml_() {
        let currentNode = this.semantic;
        const ofenceIds = Object.keys(this.ofenceMap);
        const cfenceIds = Object.keys(this.cfenceMap);
        while ((!this.ofenceMml || !this.cfenceMml) &&
            currentNode !== this.fenced) {
            if (ofenceIds.indexOf(currentNode.fencePointer) !== -1 &&
                !this.ofenceMml) {
                this.ofenceMml = currentNode.mathmlTree;
            }
            if (cfenceIds.indexOf(currentNode.fencePointer) !== -1 &&
                !this.cfenceMml) {
                this.cfenceMml = currentNode.mathmlTree;
            }
            currentNode = currentNode.childNodes[0];
        }
        if (!this.ofenceMml) {
            this.ofenceMml = this.ofence.mathmlTree;
        }
        if (!this.cfenceMml) {
            this.cfenceMml = this.cfence.mathmlTree;
        }
        if (this.ofenceMml) {
            this.ofenceMml = ascendNewNode(this.ofenceMml);
        }
        if (this.cfenceMml) {
            this.cfenceMml = ascendNewNode(this.cfenceMml);
        }
    }
    rewrite_() {
        let currentNode = this.semantic;
        let result = null;
        const newNode = this.introduceNewLayer_();
        setAttributes(newNode, this.fenced.parent);
        while (!this.fencedElement(currentNode)) {
            const mml = currentNode.mathmlTree;
            const specialCase = this.specialCase_(currentNode, mml);
            if (specialCase) {
                currentNode = specialCase;
            }
            else {
                setAttributes(mml, currentNode);
                const mmlChildren = [];
                for (let i = 1, child; (child = currentNode.childNodes[i]); i++) {
                    mmlChildren.push(walkTree(child));
                }
                currentNode = currentNode.childNodes[0];
            }
            const dummy = createElement('dummy');
            const saveChild = mml.childNodes[0];
            replaceNode(mml, dummy);
            replaceNode(newNode, mml);
            replaceNode(mml.childNodes[0], newNode);
            replaceNode(dummy, saveChild);
            if (!result) {
                result = mml;
            }
        }
        walkTree(this.ofence);
        walkTree(this.cfence);
        this.cleanupParents_();
        return result || newNode;
    }
    specialCase_(semantic, mml) {
        const mmlTag = dom_util_tagName(mml);
        let parent = null;
        let caller;
        if (mmlTag === MMLTAGS.MSUBSUP) {
            parent = semantic.childNodes[0];
            caller = CaseDoubleScript;
        }
        else if (mmlTag === MMLTAGS.MMULTISCRIPTS) {
            if (semantic.type === semantic_meaning_SemanticType.SUPERSCRIPT ||
                semantic.type === semantic_meaning_SemanticType.SUBSCRIPT) {
                caller = CaseMultiscripts;
            }
            else if (semantic.type === semantic_meaning_SemanticType.TENSOR) {
                caller = CaseTensor;
            }
            if (caller &&
                semantic.childNodes[0] &&
                semantic.childNodes[0].role === semantic_meaning_SemanticRole.SUBSUP) {
                parent = semantic.childNodes[0];
            }
            else {
                parent = semantic;
            }
        }
        if (!parent) {
            return null;
        }
        const base = parent.childNodes[0];
        const empty = CaseEmbellished.makeEmptyNode_(base.id);
        parent.childNodes[0] = empty;
        mml = new caller(semantic).getMathml();
        parent.childNodes[0] = base;
        this.parentCleanup.push(mml);
        return parent.childNodes[0];
    }
    introduceNewLayer_() {
        const fullOfence = this.fullFence(this.ofenceMml);
        const fullCfence = this.fullFence(this.cfenceMml);
        let newNode = addMrow();
        replaceNode(this.fencedMml, newNode);
        this.fencedMmlNodes.forEach((node) => newNode.appendChild(node));
        newNode.insertBefore(fullOfence, this.fencedMml);
        newNode.appendChild(fullCfence);
        if (!newNode.parentNode) {
            const mrow = addMrow();
            while (newNode.childNodes.length > 0) {
                mrow.appendChild(newNode.childNodes[0]);
            }
            newNode.appendChild(mrow);
            newNode = mrow;
        }
        return newNode;
    }
    fullFence(fence) {
        const parent = this.fencedMml.parentNode;
        let currentFence = fence;
        while (currentFence.parentNode && currentFence.parentNode !== parent) {
            currentFence = currentFence.parentNode;
        }
        return currentFence;
    }
    cleanupParents_() {
        this.parentCleanup.forEach(function (x) {
            const parent = x.childNodes[1].getAttribute(enrich_attr_Attribute.PARENT);
            x.childNodes[0].setAttribute(enrich_attr_Attribute.PARENT, parent);
        });
    }
}
//# sourceMappingURL=case_embellished.js.map
;// ./node_modules/.pnpm/speech-rule-engine@5.0.0-beta.1/node_modules/speech-rule-engine/js/enrich_mathml/case_empheq.js





class CaseEmpheq extends AbstractEnrichCase {
    static test(semantic) {
        return !!semantic.mathmlTree && semantic.hasAnnotation('Emph', 'top');
    }
    constructor(semantic) {
        super(semantic);
        this.mrows = [];
        this.mml = semantic.mathmlTree;
    }
    getMathml() {
        this.recurseToTable(this.semantic);
        if (this.mrows.length) {
            const newRow = addMrow();
            const parent = this.mml.parentNode;
            parent.insertBefore(newRow, this.mml);
            for (const mrow of this.mrows) {
                newRow.appendChild(mrow);
            }
            newRow.appendChild(this.mml);
        }
        return this.mml;
    }
    recurseToTable(node) {
        var _a, _b;
        if (!(node.hasAnnotation('Emph', 'top') || node.hasAnnotation('Emph', 'fence')) &&
            (node.hasAnnotation('Emph', 'left') ||
                node.hasAnnotation('Emph', 'right'))) {
            walkTree(node);
            return;
        }
        if (!node.mathmlTree ||
            (dom_util_tagName(node.mathmlTree) === MMLTAGS.MTABLE &&
                ((_a = node.annotation['Emph']) === null || _a === void 0 ? void 0 : _a.length) &&
                node.annotation['Emph'][0] !== 'table')) {
            const newNode = addMrow();
            setAttributes(newNode, node);
            this.mrows.unshift(newNode);
        }
        else {
            if (dom_util_tagName(node.mathmlTree) === MMLTAGS.MTABLE &&
                ((_b = node.annotation['Emph']) === null || _b === void 0 ? void 0 : _b.length) &&
                node.annotation['Emph'][0] === 'table') {
                this.finalizeTable(node);
                return;
            }
            setAttributes(node.mathmlTree, node);
        }
        node.childNodes.forEach(this.recurseToTable.bind(this));
        if (node.textContent || node.type === 'punctuated') {
            const newContent = node.contentNodes.map((x) => {
                const newNode = cloneContentNode(x);
                if (newNode.hasAttribute('data-semantic-added')) {
                    this.mrows.unshift(newNode);
                }
                else {
                    this.recurseToTable(x);
                }
                return newNode;
            });
            setOperatorAttribute(node, newContent);
            return;
        }
        node.contentNodes.forEach(this.recurseToTable.bind(this));
    }
    finalizeTable(node) {
        setAttributes(node.mathmlTree, node);
        node.contentNodes.forEach((x) => {
            walkTree(x);
        });
        node.childNodes.forEach((x) => {
            walkTree(x);
        });
    }
}
//# sourceMappingURL=case_empheq.js.map
;// ./node_modules/.pnpm/speech-rule-engine@5.0.0-beta.1/node_modules/speech-rule-engine/js/enrich_mathml/case_limit.js






class CaseLimit extends AbstractEnrichCase {
    static test(semantic) {
        if (!semantic.mathmlTree || !semantic.childNodes.length) {
            return false;
        }
        const mmlTag = dom_util_tagName(semantic.mathmlTree);
        const type = semantic.type;
        return (((type === semantic_meaning_SemanticType.LIMUPPER || type === semantic_meaning_SemanticType.LIMLOWER) &&
            (mmlTag === MMLTAGS.MSUBSUP || mmlTag === MMLTAGS.MUNDEROVER)) ||
            (type === semantic_meaning_SemanticType.LIMBOTH &&
                (mmlTag === MMLTAGS.MSUB ||
                    mmlTag === MMLTAGS.MUNDER ||
                    mmlTag === MMLTAGS.MSUP ||
                    mmlTag === MMLTAGS.MOVER)));
    }
    static walkTree_(node) {
        if (node) {
            walkTree(node);
        }
    }
    constructor(semantic) {
        super(semantic);
        this.mml = semantic.mathmlTree;
    }
    getMathml() {
        const children = this.semantic.childNodes;
        if (this.semantic.type !== semantic_meaning_SemanticType.LIMBOTH &&
            this.mml.childNodes.length >= 3) {
            this.mml = introduceNewLayer([this.mml], this.semantic);
        }
        setAttributes(this.mml, this.semantic);
        if (!children[0].mathmlTree) {
            children[0].mathmlTree = this.semantic.mathmlTree;
        }
        children.forEach(CaseLimit.walkTree_);
        return this.mml;
    }
}
//# sourceMappingURL=case_limit.js.map
;// ./node_modules/.pnpm/speech-rule-engine@5.0.0-beta.1/node_modules/speech-rule-engine/js/enrich_mathml/case_line.js




class CaseLine extends AbstractEnrichCase {
    static test(semantic) {
        return !!semantic.mathmlTree && semantic.type === semantic_meaning_SemanticType.LINE;
    }
    constructor(semantic) {
        super(semantic);
        this.mml = semantic.mathmlTree;
    }
    getMathml() {
        if (this.semantic.contentNodes.length) {
            walkTree(this.semantic.contentNodes[0]);
        }
        if (this.semantic.childNodes.length) {
            walkTree(this.semantic.childNodes[0]);
        }
        setAttributes(this.mml, this.semantic);
        return this.mml;
    }
}
//# sourceMappingURL=case_line.js.map
;// ./node_modules/.pnpm/speech-rule-engine@5.0.0-beta.1/node_modules/speech-rule-engine/js/enrich_mathml/case_proof.js




class CaseProof extends AbstractEnrichCase {
    static test(semantic) {
        return (!!semantic.mathmlTree &&
            (semantic.type === semantic_meaning_SemanticType.INFERENCE ||
                semantic.type === semantic_meaning_SemanticType.PREMISES));
    }
    constructor(semantic) {
        super(semantic);
        this.mml = semantic.mathmlTree;
    }
    getMathml() {
        if (!this.semantic.childNodes.length) {
            return this.mml;
        }
        this.semantic.contentNodes.forEach(function (x) {
            walkTree(x);
            setAttributes(x.mathmlTree, x);
        });
        this.semantic.childNodes.forEach(function (x) {
            walkTree(x);
        });
        setAttributes(this.mml, this.semantic);
        if (this.mml.getAttribute('data-semantic-id') ===
            this.mml.getAttribute('data-semantic-parent')) {
            this.mml.removeAttribute('data-semantic-parent');
        }
        return this.mml;
    }
}
//# sourceMappingURL=case_proof.js.map
;// ./node_modules/.pnpm/speech-rule-engine@5.0.0-beta.1/node_modules/speech-rule-engine/js/enrich_mathml/case_table.js






class CaseTable extends AbstractEnrichCase {
    static test(semantic) {
        return (semantic.type === semantic_meaning_SemanticType.MATRIX ||
            semantic.type === semantic_meaning_SemanticType.VECTOR ||
            semantic.type === semantic_meaning_SemanticType.CASES);
    }
    constructor(semantic) {
        super(semantic);
        this.inner = [];
        this.mml = semantic.mathmlTree;
    }
    getMathml() {
        const lfence = cloneContentNode(this.semantic.contentNodes[0]);
        const rfence = this.semantic.contentNodes[1]
            ? cloneContentNode(this.semantic.contentNodes[1])
            : null;
        this.inner = this.semantic.childNodes.map(walkTree);
        if (!this.mml) {
            this.mml = introduceNewLayer([lfence].concat(this.inner, [rfence]), this.semantic);
        }
        else if (dom_util_tagName(this.mml) === MMLTAGS.MFENCED) {
            const children = this.mml.childNodes;
            this.mml.insertBefore(lfence, children[0] || null);
            if (rfence) {
                this.mml.appendChild(rfence);
            }
            this.mml = rewriteMfenced(this.mml);
        }
        else {
            const newChildren = [lfence, this.mml];
            if (rfence) {
                newChildren.push(rfence);
            }
            this.mml = introduceNewLayer(newChildren, this.semantic);
        }
        setAttributes(this.mml, this.semantic);
        return this.mml;
    }
}
//# sourceMappingURL=case_table.js.map
;// ./node_modules/.pnpm/speech-rule-engine@5.0.0-beta.1/node_modules/speech-rule-engine/js/enrich_mathml/case_text.js




class CaseText extends AbstractEnrichCase {
    static test(semantic) {
        return (semantic.type === semantic_meaning_SemanticType.PUNCTUATED &&
            (semantic.role === semantic_meaning_SemanticRole.TEXT ||
                semantic.contentNodes.every((x) => x.role === semantic_meaning_SemanticRole.DUMMY)));
    }
    constructor(semantic) {
        super(semantic);
        this.mml = semantic.mathmlTree;
    }
    getMathml() {
        const children = [];
        const collapsed = collapsePunctuated(this.semantic, children);
        this.mml = introduceNewLayer(children, this.semantic);
        setAttributes(this.mml, this.semantic);
        this.mml.removeAttribute(enrich_attr_Attribute.CONTENT);
        addCollapsedAttribute(this.mml, collapsed);
        return this.mml;
    }
}
//# sourceMappingURL=case_text.js.map
;// ./node_modules/.pnpm/speech-rule-engine@5.0.0-beta.1/node_modules/speech-rule-engine/js/enrich_mathml/enrich_case_factory.js












factory.push(...[
    {
        test: CaseLimit.test,
        constr: (node) => new CaseLimit(node)
    },
    {
        test: CaseEmbellished.test,
        constr: (node) => new CaseEmbellished(node)
    },
    {
        test: CaseDoubleScript.test,
        constr: (node) => new CaseDoubleScript(node)
    },
    {
        test: CaseTensor.test,
        constr: (node) => new CaseTensor(node)
    },
    {
        test: CaseMultiscripts.test,
        constr: (node) => new CaseMultiscripts(node)
    },
    { test: CaseLine.test, constr: (node) => new CaseLine(node) },
    {
        test: CaseBinomial.test,
        constr: (node) => new CaseBinomial(node)
    },
    {
        test: CaseProof.test,
        constr: (node) => new CaseProof(node)
    },
    {
        test: CaseEmpheq.test,
        constr: (node) => new CaseEmpheq(node)
    },
    {
        test: CaseTable.test,
        constr: (node) => new CaseTable(node)
    },
    { test: CaseText.test, constr: (node) => new CaseText(node) }
]);
//# sourceMappingURL=enrich_case_factory.js.map
;// ./node_modules/.pnpm/speech-rule-engine@5.0.0-beta.1/node_modules/speech-rule-engine/js/enrich_mathml/enrich.js





function semanticMathmlNode(mml, options) {
    const clone = cloneNode(mml);
    const tree = getTree(clone, options);
    return enrich(clone, tree, options);
}
function semanticMathmlSync(expr, options) {
    const mml = parseInput(expr);
    try {
        return semanticMathmlNode(mml, options);
    }
    catch (err) {
        console.error(err);
        return mml;
    }
}
function semanticMathml(expr, options, callback) {
    EnginePromise.getall().then(() => {
        const mml = DomUtil.parseInput(expr);
        callback(semanticMathmlNode(mml, options));
    });
}
function prepareMmlString(expr) {
    if (!expr.match(/^<math/)) {
        expr = '<math>' + expr;
    }
    if (!expr.match(/\/math>$/)) {
        expr += '</math>';
    }
    return expr;
}
//# sourceMappingURL=enrich.js.map
;// ./node_modules/.pnpm/speech-rule-engine@5.0.0-beta.1/node_modules/speech-rule-engine/js/speech_rules/clearspeak_preference_string.js

const PREFERENCES = new DynamicProperties({
    AbsoluteValue: ['Auto', 'AbsEnd', 'Cardinality', 'Determinant'],
    Bar: ['Auto', 'Conjugate'],
    Caps: ['Auto', 'SayCaps'],
    CombinationPermutation: ['Auto', 'ChoosePermute'],
    Currency: ['Auto', 'Position', 'Prefix'],
    Ellipses: ['Auto', 'AndSoOn'],
    Enclosed: ['Auto', 'EndEnclose'],
    Exponent: [
        'Auto',
        'AfterPower',
        'Ordinal',
        'OrdinalPower',
        'Exponent'
    ],
    Fraction: [
        'Auto',
        'EndFrac',
        'FracOver',
        'General',
        'GeneralEndFrac',
        'Ordinal',
        'Over',
        'OverEndFrac',
        'Per'
    ],
    Functions: [
        'Auto',
        'None',
        'Reciprocal'
    ],
    Inference: ['Auto', 'Long'],
    ImpliedTimes: ['Auto', 'MoreImpliedTimes', 'None'],
    Log: ['Auto', 'LnAsNaturalLog'],
    Matrix: [
        'Auto',
        'Combinatoric',
        'EndMatrix',
        'EndVector',
        'SilentColNum',
        'SpeakColNum',
        'Vector'
    ],
    MultiLineLabel: [
        'Auto',
        'Case',
        'Constraint',
        'Equation',
        'Line',
        'None',
        'Row',
        'Step'
    ],
    MultiLineOverview: ['Auto', 'None'],
    MultiLinePausesBetweenColumns: ['Auto', 'Long', 'Short'],
    MultsymbolDot: ['Auto', 'Dot'],
    MultsymbolX: ['Auto', 'By', 'Cross'],
    Paren: [
        'Auto',
        'CoordPoint',
        'Interval',
        'Silent',
        'Speak',
        'SpeakNestingLevel'
    ],
    Prime: ['Auto', 'Angle', 'Length'],
    Roots: ['Auto', 'PosNegSqRoot', 'PosNegSqRootEnd', 'RootEnd'],
    SetMemberSymbol: ['Auto', 'Belongs', 'Element', 'Member', 'In'],
    Sets: ['Auto', 'SilentBracket', 'woAll'],
    TriangleSymbol: ['Auto', 'Delta'],
    Trig: [
        'Auto',
        'ArcTrig',
        'TrigInverse',
        'Reciprocal'
    ],
    VerticalLine: ['Auto', 'Divides', 'Given', 'SuchThat']
});
const AUTO = 'Auto';
function fromPreference(pref) {
    const pairs = pref.split(':');
    const preferences = {};
    const properties = PREFERENCES.getProperties();
    const validKeys = Object.keys(properties);
    for (let i = 0, key; (key = pairs[i]); i++) {
        const pair = key.split('_');
        if (validKeys.indexOf(pair[0]) === -1) {
            continue;
        }
        const value = pair[1];
        if (value &&
            value !== AUTO &&
            properties[pair[0]].indexOf(value) !== -1) {
            preferences[pair[0]] = pair[1];
        }
    }
    return preferences;
}
function toPreference(pref) {
    const keys = Object.keys(pref);
    const str = [];
    for (let i = 0; i < keys.length; i++) {
        str.push(keys[i] + '_' + pref[keys[i]]);
    }
    return str.length ? str.join(':') : DynamicCstr.DEFAULT_VALUE;
}
function findPreference(prefs, kind) {
    if (prefs === 'default') {
        return AUTO;
    }
    const parsed = fromPreference(prefs);
    return parsed[kind] || AUTO;
}
function addPreference(prefs, kind, value) {
    if (prefs === 'default') {
        return kind + '_' + value;
    }
    const parsed = fromPreference(prefs);
    parsed[kind] = value;
    return toPreference(parsed);
}
//# sourceMappingURL=clearspeak_preference_string.js.map
;// ./mjs/a11y/sre.js





const locales = variables/* Variables */.u.LOCALES;
const setupEngine = (x) => {
    return Engine.getInstance().setup(x);
};
const engineSetup = () => {
    return Engine.getInstance().json();
};
const toEnriched = (mml) => {
    return semanticMathmlSync(mml, Engine.getInstance().options);
};
const parseDOM = parseInput;
const sre_addPreference = addPreference;
const sre_fromPreference = fromPreference;
const sre_toPreference = toPreference;
//# sourceMappingURL=sre.js.map
;// ./components/mjs/a11y/sre/lib/sre.js





if (MathJax.loader) {
  MathJax.loader.checkVersion('a11y/sre', VERSION, 'a11y');
}

combineWithMathJax({_: {
  a11y: {
    sre_ts: sre_namespaceObject
  }
}});

;// ./components/mjs/a11y/sre/sre.js





})();

/******/ })()
;