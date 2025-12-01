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

// NAMESPACE OBJECT: ./mjs/input/tex/extpfeil/ExtpfeilConfiguration.js
var ExtpfeilConfiguration_namespaceObject = {};
__webpack_require__.r(ExtpfeilConfiguration_namespaceObject);
__webpack_require__.d(ExtpfeilConfiguration_namespaceObject, {
  ExtpfeilConfiguration: () => (ExtpfeilConfiguration)
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

;// ./components/mjs/input/tex/extensions/ams/lib/input/tex/ams/AmsMethods.js
const AmsMethods_def = MathJax._.input.tex.ams.AmsMethods;
const AmsMethods = AmsMethods_def.AmsMethods;

;// ./components/mjs/input/tex/extensions/newcommand/lib/input/tex/newcommand/NewcommandUtil.js
const NewcommandUtil_def = MathJax._.input.tex.newcommand.NewcommandUtil;
const NewcommandTables = NewcommandUtil_def.NewcommandTables;
const NewcommandPriority = NewcommandUtil_def.NewcommandPriority;
const NewcommandUtil = NewcommandUtil_def.NewcommandUtil;

;// ./components/mjs/input/tex/extensions/newcommand/lib/input/tex/newcommand/NewcommandConfiguration.js
const NewcommandConfiguration_def = MathJax._.input.tex.newcommand.NewcommandConfiguration;
const NewcommandConfig = NewcommandConfiguration_def.NewcommandConfig;
const NewcommandConfiguration = NewcommandConfiguration_def.NewcommandConfiguration;

;// ./components/mjs/input/tex-base/lib/input/tex/TexError.js
const TexError_def = MathJax._.input.tex.TexError;
/* harmony default export */ const TexError = (TexError_def.default);

;// ./mjs/input/tex/extpfeil/ExtpfeilConfiguration.js







const ExtpfeilMethods = {
    NewExtArrow(parser, name) {
        let cs = parser.GetArgument(name);
        const space = parser.GetArgument(name);
        const chr = parser.GetArgument(name);
        if (!cs.match(/^\\([a-z]+|.)$/i)) {
            throw new TexError('NewextarrowArg1', 'First argument to %1 must be a control sequence name', name);
        }
        if (!space.match(/^(\d+),(\d+)$/)) {
            throw new TexError('NewextarrowArg2', 'Second argument to %1 must be two integers separated by a comma', name);
        }
        if (!chr.match(/^(\d+|0x[0-9A-F]+)$/i)) {
            throw new TexError('NewextarrowArg3', 'Third argument to %1 must be a unicode character number', name);
        }
        cs = cs.substring(1);
        const spaces = space.split(',');
        NewcommandUtil.addMacro(parser, cs, ExtpfeilMethods.xArrow, [
            parseInt(chr),
            parseInt(spaces[0]),
            parseInt(spaces[1]),
        ]);
        parser.Push(parser.itemFactory.create('null'));
    },
    xArrow: AmsMethods.xArrow,
};
new CommandMap('extpfeil', {
    xtwoheadrightarrow: [ExtpfeilMethods.xArrow, 0x21a0, 12, 16],
    xtwoheadleftarrow: [ExtpfeilMethods.xArrow, 0x219e, 17, 13],
    xmapsto: [ExtpfeilMethods.xArrow, 0x21a6, 6, 7],
    xlongequal: [ExtpfeilMethods.xArrow, 0x003d, 7, 7],
    xtofrom: [ExtpfeilMethods.xArrow, 0x21c4, 12, 12],
    Newextarrow: ExtpfeilMethods.NewExtArrow,
});
const ExtpfeilConfiguration = Configuration.create('extpfeil', {
    [ConfigurationType.HANDLER]: { [HandlerType.MACRO]: ['extpfeil'] },
    [ConfigurationType.CONFIG]: NewcommandConfig,
});
//# sourceMappingURL=ExtpfeilConfiguration.js.map
;// ./components/mjs/input/tex/extensions/extpfeil/lib/extpfeil.js





if (MathJax.loader) {
  MathJax.loader.checkVersion('[tex]/extpfeil', VERSION, 'tex-extension');
}

combineWithMathJax({_: {
  input: {
    tex: {
      extpfeil: {
        ExtpfeilConfiguration: ExtpfeilConfiguration_namespaceObject
      }
    }
  }
}});

;// ./components/mjs/input/tex/extensions/extpfeil/extpfeil.js


/******/ })()
;