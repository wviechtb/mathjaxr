/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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

// NAMESPACE OBJECT: ./mjs/input/tex/textcomp/TextcompConfiguration.js
var TextcompConfiguration_namespaceObject = {};
__webpack_require__.r(TextcompConfiguration_namespaceObject);
__webpack_require__.d(TextcompConfiguration_namespaceObject, {
  TextcompConfiguration: () => (TextcompConfiguration)
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
;// ./components/mjs/input/tex-base/lib/input/tex/HandlerTypes.js
const HandlerTypes_def = MathJax._.input.tex.HandlerTypes;
const ConfigurationType = HandlerTypes_def.ConfigurationType;
const HandlerType = HandlerTypes_def.HandlerType;

;// ./components/mjs/input/tex-base/lib/input/tex/Configuration.js
const Configuration_def = MathJax._.input.tex.Configuration;
const Configuration = Configuration_def.Configuration;
const ConfigurationHandler = Configuration_def.ConfigurationHandler;
const ParserConfiguration = Configuration_def.ParserConfiguration;

;// ./components/mjs/input/tex-base/lib/input/tex/TokenMap.js
const TokenMap_def = MathJax._.input.tex.TokenMap;
const parseResult = TokenMap_def.parseResult;
const AbstractTokenMap = TokenMap_def.AbstractTokenMap;
const RegExpMap = TokenMap_def.RegExpMap;
const AbstractParseMap = TokenMap_def.AbstractParseMap;
const CharacterMap = TokenMap_def.CharacterMap;
const DelimiterMap = TokenMap_def.DelimiterMap;
const MacroMap = TokenMap_def.MacroMap;
const CommandMap = TokenMap_def.CommandMap;
const EnvironmentMap = TokenMap_def.EnvironmentMap;

;// ./components/mjs/input/tex-base/lib/input/tex/TexConstants.js
const TexConstants_def = MathJax._.input.tex.TexConstants;
const TexConstant = TexConstants_def.TexConstant;

;// ./components/mjs/input/tex/extensions/textmacros/lib/input/tex/textmacros/TextMacrosMethods.js
const TextMacrosMethods_def = MathJax._.input.tex.textmacros.TextMacrosMethods;
const TextMacrosMethods = TextMacrosMethods_def.TextMacrosMethods;

;// ./components/mjs/input/tex-base/lib/input/tex/ParseUtil.js
const ParseUtil_def = MathJax._.input.tex.ParseUtil;
const KeyValueDef = ParseUtil_def.KeyValueDef;
const KeyValueTypes = ParseUtil_def.KeyValueTypes;
const ParseUtil = ParseUtil_def.ParseUtil;

;// ./components/mjs/input/tex/extensions/textmacros/lib/input/tex/textmacros/TextParser.js
const TextParser_def = MathJax._.input.tex.textmacros.TextParser;
const TextParser = TextParser_def.TextParser;

;// ./mjs/input/tex/textcomp/TextcompMappings.js





function Insert(parser, name, c, font) {
    if (parser instanceof TextParser) {
        if (!font) {
            TextMacrosMethods.Insert(parser, name, c);
            return;
        }
        parser.saveText();
    }
    parser.Push(ParseUtil.internalText(parser, c, font ? { mathvariant: font } : {}));
}
new CommandMap('textcomp-macros', {
    textasciicircum: [Insert, '\u005E'],
    textasciitilde: [Insert, '\u007E'],
    textasteriskcentered: [Insert, '\u002A'],
    textbackslash: [Insert, '\u005C'],
    textbar: [Insert, '\u007C'],
    textbraceleft: [Insert, '\u007B'],
    textbraceright: [Insert, '\u007D'],
    textbullet: [Insert, '\u2022'],
    textdagger: [Insert, '\u2020'],
    textdaggerdbl: [Insert, '\u2021'],
    textellipsis: [Insert, '\u2026'],
    textemdash: [Insert, '\u2014'],
    textendash: [Insert, '\u2013'],
    textexclamdown: [Insert, '\u00A1'],
    textgreater: [Insert, '\u003E'],
    textless: [Insert, '\u003C'],
    textordfeminine: [Insert, '\u00AA'],
    textordmasculine: [Insert, '\u00BA'],
    textparagraph: [Insert, '\u00B6'],
    textperiodcentered: [Insert, '\u00B7'],
    textquestiondown: [Insert, '\u00BF'],
    textquotedblleft: [Insert, '\u201C'],
    textquotedblright: [Insert, '\u201D'],
    textquoteleft: [Insert, '\u2018'],
    textquoteright: [Insert, '\u2019'],
    textsection: [Insert, '\u00A7'],
    textunderscore: [Insert, '\u005F'],
    textvisiblespace: [Insert, '\u2423'],
    textacutedbl: [Insert, '\u02DD'],
    textasciiacute: [Insert, '\u00B4'],
    textasciibreve: [Insert, '\u02D8'],
    textasciicaron: [Insert, '\u02C7'],
    textasciidieresis: [Insert, '\u00A8'],
    textasciimacron: [Insert, '\u00AF'],
    textgravedbl: [Insert, '\u02F5'],
    texttildelow: [Insert, '\u02F7'],
    textbaht: [Insert, '\u0E3F'],
    textcent: [Insert, '\u00A2'],
    textcolonmonetary: [Insert, '\u20A1'],
    textcurrency: [Insert, '\u00A4'],
    textdollar: [Insert, '\u0024'],
    textdong: [Insert, '\u20AB'],
    texteuro: [Insert, '\u20AC'],
    textflorin: [Insert, '\u0192'],
    textguarani: [Insert, '\u20B2'],
    textlira: [Insert, '\u20A4'],
    textnaira: [Insert, '\u20A6'],
    textpeso: [Insert, '\u20B1'],
    textsterling: [Insert, '\u00A3'],
    textwon: [Insert, '\u20A9'],
    textyen: [Insert, '\u00A5'],
    textcircledP: [Insert, '\u2117'],
    textcompwordmark: [Insert, '\u200C'],
    textcopyleft: [Insert, '\u{1F12F}'],
    textcopyright: [Insert, '\u00A9'],
    textregistered: [Insert, '\u00AE'],
    textservicemark: [Insert, '\u2120'],
    texttrademark: [Insert, '\u2122'],
    textbardbl: [Insert, '\u2016'],
    textbigcircle: [Insert, '\u25EF'],
    textblank: [Insert, '\u2422'],
    textbrokenbar: [Insert, '\u00A6'],
    textdiscount: [Insert, '\u2052'],
    textestimated: [Insert, '\u212E'],
    textinterrobang: [Insert, '\u203D'],
    textinterrobangdown: [Insert, '\u2E18'],
    textmusicalnote: [Insert, '\u266A'],
    textnumero: [Insert, '\u2116'],
    textopenbullet: [Insert, '\u25E6'],
    textpertenthousand: [Insert, '\u2031'],
    textperthousand: [Insert, '\u2030'],
    textrecipe: [Insert, '\u211E'],
    textreferencemark: [Insert, '\u203B'],
    textlangle: [Insert, '\u2329'],
    textrangle: [Insert, '\u232A'],
    textlbrackdbl: [Insert, '\u27E6'],
    textrbrackdbl: [Insert, '\u27E7'],
    textlquill: [Insert, '\u2045'],
    textrquill: [Insert, '\u2046'],
    textcelsius: [Insert, '\u2103'],
    textdegree: [Insert, '\u00B0'],
    textdiv: [Insert, '\u00F7'],
    textdownarrow: [Insert, '\u2193'],
    textfractionsolidus: [Insert, '\u2044'],
    textleftarrow: [Insert, '\u2190'],
    textlnot: [Insert, '\u00AC'],
    textmho: [Insert, '\u2127'],
    textminus: [Insert, '\u2212'],
    textmu: [Insert, '\u00B5'],
    textohm: [Insert, '\u2126'],
    textonehalf: [Insert, '\u00BD'],
    textonequarter: [Insert, '\u00BC'],
    textonesuperior: [Insert, '\u00B9'],
    textpm: [Insert, '\u00B1'],
    textrightarrow: [Insert, '\u2192'],
    textsurd: [Insert, '\u221A'],
    textthreequarters: [Insert, '\u00BE'],
    textthreesuperior: [Insert, '\u00B3'],
    texttimes: [Insert, '\u00D7'],
    texttwosuperior: [Insert, '\u00B2'],
    textuparrow: [Insert, '\u2191'],
    textborn: [Insert, '\u002A'],
    textdied: [Insert, '\u2020'],
    textdivorced: [Insert, '\u26AE'],
    textmarried: [Insert, '\u26AD'],
    textcentoldstyle: [Insert, '\u00A2', TexConstant.Variant.OLDSTYLE],
    textdollaroldstyle: [Insert, '\u0024', TexConstant.Variant.OLDSTYLE],
    textzerooldstyle: [Insert, '0', TexConstant.Variant.OLDSTYLE],
    textoneoldstyle: [Insert, '1', TexConstant.Variant.OLDSTYLE],
    texttwooldstyle: [Insert, '2', TexConstant.Variant.OLDSTYLE],
    textthreeoldstyle: [Insert, '3', TexConstant.Variant.OLDSTYLE],
    textfouroldstyle: [Insert, '4', TexConstant.Variant.OLDSTYLE],
    textfiveoldstyle: [Insert, '5', TexConstant.Variant.OLDSTYLE],
    textsixoldstyle: [Insert, '6', TexConstant.Variant.OLDSTYLE],
    textsevenoldstyle: [Insert, '7', TexConstant.Variant.OLDSTYLE],
    texteightoldstyle: [Insert, '8', TexConstant.Variant.OLDSTYLE],
    textnineoldstyle: [Insert, '9', TexConstant.Variant.OLDSTYLE],
});
//# sourceMappingURL=TextcompMappings.js.map
;// ./mjs/input/tex/textcomp/TextcompConfiguration.js



Configuration.create('text-textcomp', {
    [ConfigurationType.PARSER]: 'text',
    [ConfigurationType.HANDLER]: { [HandlerType.MACRO]: ['textcomp-macros'] },
});
const TextcompConfiguration = Configuration.create('textcomp', {
    [ConfigurationType.HANDLER]: { macro: ['textcomp-macros'] },
    config(_config, jax) {
        const textmacros = jax.parseOptions.packageData.get('textmacros');
        if (textmacros) {
            textmacros.parseOptions.options.textmacros.packages.push('text-textcomp');
            textmacros.textConf.add('text-textcomp', jax, {});
        }
    },
});
//# sourceMappingURL=TextcompConfiguration.js.map
;// ./components/mjs/input/tex/extensions/textcomp/lib/textcomp.js





if (MathJax.loader) {
  MathJax.loader.checkVersion('[tex]/textcomp', VERSION, 'tex-extension');
}

combineWithMathJax({_: {
  input: {
    tex: {
      textcomp: {
        TextcompConfiguration: TextcompConfiguration_namespaceObject
      }
    }
  }
}});

;// ./components/mjs/input/tex/extensions/textcomp/textcomp.js


/******/ })()
;