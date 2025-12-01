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

// NAMESPACE OBJECT: ./mjs/input/tex/action/ActionConfiguration.js
var ActionConfiguration_namespaceObject = {};
__webpack_require__.r(ActionConfiguration_namespaceObject);
__webpack_require__.d(ActionConfiguration_namespaceObject, {
  ActionConfiguration: () => (ActionConfiguration),
  ActionMethods: () => (ActionMethods)
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

;// ./components/mjs/input/tex-base/lib/input/tex/base/BaseMethods.js
const BaseMethods_def = MathJax._.input.tex.base.BaseMethods;
const splitAlignArray = BaseMethods_def.splitAlignArray;
/* harmony default export */ const BaseMethods = (BaseMethods_def.default);

;// ./mjs/input/tex/action/ActionConfiguration.js





const ActionMethods = {
    Toggle(parser, name) {
        const children = [];
        let arg;
        while ((arg = parser.GetArgument(name)) !== '\\endtoggle') {
            children.push(new TexParser(arg, parser.stack.env, parser.configuration).mml());
        }
        parser.Push(parser.create('node', 'maction', children, { actiontype: 'toggle' }));
    },
    Mathtip(parser, name) {
        const arg = parser.ParseArg(name);
        const tip = parser.ParseArg(name);
        parser.Push(parser.create('node', 'maction', [arg, tip], { actiontype: 'tooltip' }));
    },
    Macro: BaseMethods.Macro,
};
new CommandMap('action-macros', {
    toggle: ActionMethods.Toggle,
    mathtip: ActionMethods.Mathtip,
    texttip: [ActionMethods.Macro, '\\mathtip{#1}{\\text{#2}}', 2],
});
const ActionConfiguration = Configuration.create('action', {
    [ConfigurationType.HANDLER]: { [HandlerType.MACRO]: ['action-macros'] },
});
//# sourceMappingURL=ActionConfiguration.js.map
;// ./components/mjs/input/tex/extensions/action/lib/action.js





if (MathJax.loader) {
  MathJax.loader.checkVersion('[tex]/action', VERSION, 'tex-extension');
}

combineWithMathJax({_: {
  input: {
    tex: {
      action: {
        ActionConfiguration: ActionConfiguration_namespaceObject
      }
    }
  }
}});

;// ./components/mjs/input/tex/extensions/action/action.js


/******/ })()
;