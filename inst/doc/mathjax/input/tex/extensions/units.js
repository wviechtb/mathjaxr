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

// NAMESPACE OBJECT: ./mjs/input/tex/units/UnitsConfiguration.js
var UnitsConfiguration_namespaceObject = {};
__webpack_require__.r(UnitsConfiguration_namespaceObject);
__webpack_require__.d(UnitsConfiguration_namespaceObject, {
  UnitsConfiguration: () => (UnitsConfiguration),
  UnitsMethods: () => (UnitsMethods)
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

;// ./components/mjs/input/tex-base/lib/input/tex/TexParser.js
const TexParser_def = MathJax._.input.tex.TexParser;
/* harmony default export */ const TexParser = (TexParser_def.default);

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

;// ./mjs/input/tex/units/UnitsConfiguration.js




const UnitsMethods = {
    Unit(parser, name) {
        const val = parser.GetBrackets(name);
        const dim = parser.GetArgument(name);
        let macro = `\\mathrm{${dim}}`;
        if (val) {
            macro = val + (parser.options.units.loose ? '~' : '\\,') + macro;
        }
        parser.string = macro + parser.string.slice(parser.i);
        parser.i = 0;
    },
    UnitFrac(parser, name) {
        const val = parser.GetBrackets(name);
        const num = parser.GetArgument(name);
        const den = parser.GetArgument(name);
        let macro = `\\nicefrac[\\mathrm]{${num}}{${den}}`;
        if (val) {
            macro = val + (parser.options.units.loose ? '~' : '\\,') + macro;
        }
        parser.string = macro + parser.string.slice(parser.i);
        parser.i = 0;
    },
    NiceFrac(parser, name) {
        const font = parser.GetBrackets(name, '\\mathrm');
        const num = parser.GetArgument(name);
        const den = parser.GetArgument(name);
        const numMml = new TexParser(`${font}{${num}}`, Object.assign({}, parser.stack.env), parser.configuration).mml();
        const denMml = new TexParser(`${font}{${den}}`, Object.assign({}, parser.stack.env), parser.configuration).mml();
        const def = parser.options.units.ugly ? {} : { bevelled: true };
        const node = parser.create('node', 'mfrac', [numMml, denMml], def);
        parser.Push(node);
    },
};
new CommandMap('units', {
    units: UnitsMethods.Unit,
    unitfrac: UnitsMethods.UnitFrac,
    nicefrac: UnitsMethods.NiceFrac,
});
const UnitsConfiguration = Configuration.create('units', {
    [ConfigurationType.HANDLER]: { [HandlerType.MACRO]: ['units'] },
    [ConfigurationType.OPTIONS]: {
        units: {
            loose: false,
            ugly: false,
        },
    },
});
//# sourceMappingURL=UnitsConfiguration.js.map
;// ./components/mjs/input/tex/extensions/units/lib/units.js





if (MathJax.loader) {
  MathJax.loader.checkVersion('[tex]/units', VERSION, 'tex-extension');
}

combineWithMathJax({_: {
  input: {
    tex: {
      units: {
        UnitsConfiguration: UnitsConfiguration_namespaceObject
      }
    }
  }
}});

;// ./components/mjs/input/tex/extensions/units/units.js


/******/ })()
;