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

// NAMESPACE OBJECT: ./mjs/input/tex/configmacros/ConfigMacrosConfiguration.js
var ConfigMacrosConfiguration_namespaceObject = {};
__webpack_require__.r(ConfigMacrosConfiguration_namespaceObject);
__webpack_require__.d(ConfigMacrosConfiguration_namespaceObject, {
  ConfigMacrosConfiguration: () => (ConfigMacrosConfiguration)
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

;// ./components/mjs/core/lib/util/Options.js
const Options_def = MathJax._.util.Options;
const Options_isObject = Options_def.isObject;
const APPEND = Options_def.APPEND;
const REMOVE = Options_def.REMOVE;
const OPTIONS = Options_def.OPTIONS;
const Expandable = Options_def.Expandable;
const expandable = Options_def.expandable;
const makeArray = Options_def.makeArray;
const keys = Options_def.keys;
const copy = Options_def.copy;
const insert = Options_def.insert;
const defaultOptions = Options_def.defaultOptions;
const userOptions = Options_def.userOptions;
const selectOptions = Options_def.selectOptions;
const selectOptionsFromKeys = Options_def.selectOptionsFromKeys;
const separateOptions = Options_def.separateOptions;
const lookup = Options_def.lookup;

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

;// ./components/mjs/input/tex-base/lib/input/tex/ParseMethods.js
const ParseMethods_def = MathJax._.input.tex.ParseMethods;
/* harmony default export */ const ParseMethods = (ParseMethods_def.default);

;// ./components/mjs/input/tex-base/lib/input/tex/Token.js
const Token_def = MathJax._.input.tex.Token;
const Token = Token_def.Token;
const Macro = Token_def.Macro;

;// ./components/mjs/input/tex/extensions/newcommand/lib/input/tex/newcommand/NewcommandMethods.js
const NewcommandMethods_def = MathJax._.input.tex.newcommand.NewcommandMethods;
/* harmony default export */ const NewcommandMethods = (NewcommandMethods_def.default);

;// ./components/mjs/input/tex/extensions/newcommand/lib/input/tex/newcommand/NewcommandItems.js
const NewcommandItems_def = MathJax._.input.tex.newcommand.NewcommandItems;
const BeginEnvItem = NewcommandItems_def.BeginEnvItem;

;// ./mjs/input/tex/configmacros/ConfigMacrosConfiguration.js








const MACROSMAP = 'configmacros-map';
const ACTIVEMAP = 'configmacros-active-map';
const ENVIRONMENTMAP = 'configmacros-env-map';
function configmacrosInit(config) {
    new MacroMap(ACTIVEMAP, {});
    new CommandMap(MACROSMAP, {});
    new EnvironmentMap(ENVIRONMENTMAP, ParseMethods.environment, {});
    config.append(Configuration.local({
        handler: {
            [HandlerType.CHARACTER]: [ACTIVEMAP],
            [HandlerType.MACRO]: [MACROSMAP],
            [HandlerType.ENVIRONMENT]: [ENVIRONMENTMAP],
        },
        priority: 3,
    }));
}
function configmacrosConfig(_config, jax) {
    configActives(jax);
    configMacros(jax);
    configEnvironments(jax);
}
function setMacros(name, map, jax) {
    const handler = jax.parseOptions.handlers.retrieve(map);
    const macros = jax.parseOptions.options[name];
    for (const cs of Object.keys(macros)) {
        const def = typeof macros[cs] === 'string' ? [macros[cs]] : macros[cs];
        const macro = Array.isArray(def[2])
            ? new Macro(cs, NewcommandMethods.MacroWithTemplate, def.slice(0, 2).concat(def[2]))
            : new Macro(cs, NewcommandMethods.Macro, def);
        handler.add(cs, macro);
    }
}
function configActives(jax) {
    setMacros('active', ACTIVEMAP, jax);
}
function configMacros(jax) {
    setMacros('macros', MACROSMAP, jax);
}
function configEnvironments(jax) {
    const handler = jax.parseOptions.handlers.retrieve(ENVIRONMENTMAP);
    const environments = jax.parseOptions.options.environments;
    for (const env of Object.keys(environments)) {
        handler.add(env, new Macro(env, NewcommandMethods.BeginEnv, [true].concat(environments[env])));
    }
}
const ConfigMacrosConfiguration = Configuration.create('configmacros', {
    [ConfigurationType.INIT]: configmacrosInit,
    [ConfigurationType.CONFIG]: configmacrosConfig,
    [ConfigurationType.ITEMS]: {
        [BeginEnvItem.prototype.kind]: BeginEnvItem,
    },
    [ConfigurationType.OPTIONS]: {
        active: expandable({}),
        macros: expandable({}),
        environments: expandable({}),
    },
});
//# sourceMappingURL=ConfigMacrosConfiguration.js.map
;// ./components/mjs/input/tex/extensions/configmacros/lib/configmacros.js





if (MathJax.loader) {
  MathJax.loader.checkVersion('[tex]/configmacros', VERSION, 'tex-extension');
}

combineWithMathJax({_: {
  input: {
    tex: {
      configmacros: {
        ConfigMacrosConfiguration: ConfigMacrosConfiguration_namespaceObject
      }
    }
  }
}});

;// ./components/mjs/input/tex/extensions/configmacros/configmacros.js


/******/ })()
;