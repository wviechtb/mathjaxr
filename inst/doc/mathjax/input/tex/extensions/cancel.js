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

// NAMESPACE OBJECT: ./mjs/input/tex/cancel/CancelConfiguration.js
var CancelConfiguration_namespaceObject = {};
__webpack_require__.r(CancelConfiguration_namespaceObject);
__webpack_require__.d(CancelConfiguration_namespaceObject, {
  CancelConfiguration: () => (CancelConfiguration),
  CancelMethods: () => (CancelMethods)
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

;// ./components/mjs/input/tex-base/lib/input/tex/TexConstants.js
const TexConstants_def = MathJax._.input.tex.TexConstants;
const TexConstant = TexConstants_def.TexConstant;

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

;// ./components/mjs/input/tex-base/lib/input/tex/ParseUtil.js
const ParseUtil_def = MathJax._.input.tex.ParseUtil;
const KeyValueDef = ParseUtil_def.KeyValueDef;
const KeyValueTypes = ParseUtil_def.KeyValueTypes;
const ParseUtil = ParseUtil_def.ParseUtil;

;// ./components/mjs/input/tex/extensions/enclose/lib/input/tex/enclose/EncloseConfiguration.js
const EncloseConfiguration_def = MathJax._.input.tex.enclose.EncloseConfiguration;
const ENCLOSE_OPTIONS = EncloseConfiguration_def.ENCLOSE_OPTIONS;
const EncloseMethods = EncloseConfiguration_def.EncloseMethods;
const EncloseConfiguration = EncloseConfiguration_def.EncloseConfiguration;

;// ./mjs/input/tex/cancel/CancelConfiguration.js






const CancelMethods = {
    Cancel(parser, name, notation) {
        const attr = parser.GetBrackets(name, '');
        const math = parser.ParseArg(name);
        const def = ParseUtil.keyvalOptions(attr, ENCLOSE_OPTIONS);
        def['notation'] = notation;
        parser.Push(parser.create('node', 'menclose', [math], def));
    },
    CancelTo(parser, name) {
        const attr = parser.GetBrackets(name, '');
        let value = parser.ParseArg(name);
        const math = parser.ParseArg(name);
        const def = ParseUtil.keyvalOptions(attr, ENCLOSE_OPTIONS);
        def['notation'] = [
            TexConstant.Notation.UPDIAGONALSTRIKE,
            TexConstant.Notation.UPDIAGONALARROW,
            TexConstant.Notation.NORTHEASTARROW,
        ].join(' ');
        value = parser.create('node', 'mpadded', [value], {
            depth: '-.1em',
            height: '+.1em',
            voffset: '.1em',
        });
        parser.Push(parser.create('node', 'msup', [
            parser.create('node', 'menclose', [math], def),
            value,
        ]));
    },
};
new CommandMap('cancel', {
    cancel: [CancelMethods.Cancel, TexConstant.Notation.UPDIAGONALSTRIKE],
    bcancel: [CancelMethods.Cancel, TexConstant.Notation.DOWNDIAGONALSTRIKE],
    xcancel: [
        CancelMethods.Cancel,
        TexConstant.Notation.UPDIAGONALSTRIKE +
            ' ' +
            TexConstant.Notation.DOWNDIAGONALSTRIKE,
    ],
    cancelto: CancelMethods.CancelTo,
});
const CancelConfiguration = Configuration.create('cancel', {
    [ConfigurationType.HANDLER]: { [HandlerType.MACRO]: ['cancel'] },
});
//# sourceMappingURL=CancelConfiguration.js.map
;// ./components/mjs/input/tex/extensions/cancel/lib/cancel.js





if (MathJax.loader) {
  MathJax.loader.checkVersion('[tex]/cancel', VERSION, 'tex-extension');
}

combineWithMathJax({_: {
  input: {
    tex: {
      cancel: {
        CancelConfiguration: CancelConfiguration_namespaceObject
      }
    }
  }
}});

;// ./components/mjs/input/tex/extensions/cancel/cancel.js


/******/ })()
;