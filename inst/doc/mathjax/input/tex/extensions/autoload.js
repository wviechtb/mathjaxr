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

// NAMESPACE OBJECT: ./mjs/input/tex/autoload/AutoloadConfiguration.js
var AutoloadConfiguration_namespaceObject = {};
__webpack_require__.r(AutoloadConfiguration_namespaceObject);
__webpack_require__.d(AutoloadConfiguration_namespaceObject, {
  AutoloadConfiguration: () => (AutoloadConfiguration)
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

;// ./components/mjs/input/tex-base/lib/input/tex/Token.js
const Token_def = MathJax._.input.tex.Token;
const Token = Token_def.Token;
const Macro = Token_def.Macro;

;// ./components/mjs/input/tex/extensions/require/lib/input/tex/require/RequireConfiguration.js
const RequireConfiguration_def = MathJax._.input.tex.require.RequireConfiguration;
const RequireLoad = RequireConfiguration_def.RequireLoad;
const RequireMethods = RequireConfiguration_def.RequireMethods;
const options = RequireConfiguration_def.options;
const RequireConfiguration = RequireConfiguration_def.RequireConfiguration;

;// ./components/mjs/startup/lib/components/package.js
const package_def = MathJax._.components.package;
const PackageError = package_def.PackageError;
const Package = package_def.Package;

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

;// ./mjs/input/tex/autoload/AutoloadConfiguration.js







function Autoload(parser, name, extension, isMacro) {
    if (Package.packages.has(parser.options.require.prefix + extension)) {
        const def = parser.options.autoload[extension];
        const [macros, envs] = def.length === 2 && Array.isArray(def[0]) ? def : [def, []];
        for (const macro of macros) {
            AutoloadMacros.remove(macro);
        }
        for (const env of envs) {
            AutoloadEnvironments.remove(env);
        }
        parser.string =
            (isMacro ? name + ' ' : '\\begin{' + name.slice(1) + '}') +
                parser.string.slice(parser.i);
        parser.i = 0;
    }
    RequireLoad(parser, extension);
}
function initAutoload(config) {
    if (!config.options.require) {
        defaultOptions(config.options, RequireConfiguration.options);
    }
}
function configAutoload(config, jax) {
    const parser = jax.parseOptions;
    const macros = parser.handlers.get(HandlerType.MACRO);
    const environments = parser.handlers.get(HandlerType.ENVIRONMENT);
    const autoload = parser.options.autoload;
    parser.packageData.set('autoload', { Autoload });
    for (const extension of Object.keys(autoload)) {
        const def = autoload[extension];
        const [macs, envs] = def.length === 2 && Array.isArray(def[0]) ? def : [def, []];
        for (const name of macs) {
            if (!macros.lookup(name) || name === 'color') {
                AutoloadMacros.add(name, new Macro(name, Autoload, [extension, true]));
            }
        }
        for (const name of envs) {
            if (!environments.lookup(name)) {
                AutoloadEnvironments.add(name, new Macro(name, Autoload, [extension, false]));
            }
        }
    }
    if (!parser.packageData.get('require')) {
        RequireConfiguration.config(config, jax);
    }
}
const AutoloadMacros = new CommandMap('autoload-macros', {});
const AutoloadEnvironments = new CommandMap('autoload-environments', {});
const AutoloadConfiguration = Configuration.create('autoload', {
    [ConfigurationType.HANDLER]: {
        [HandlerType.MACRO]: ['autoload-macros'],
        [HandlerType.ENVIRONMENT]: ['autoload-environments'],
    },
    [ConfigurationType.OPTIONS]: {
        autoload: expandable({
            action: ['toggle', 'mathtip', 'texttip'],
            amscd: [[], ['CD']],
            bbox: ['bbox'],
            boldsymbol: ['boldsymbol'],
            braket: [
                'bra',
                'ket',
                'braket',
                'set',
                'Bra',
                'Ket',
                'Braket',
                'Set',
                'ketbra',
                'Ketbra',
            ],
            bussproofs: [[], ['prooftree']],
            cancel: ['cancel', 'bcancel', 'xcancel', 'cancelto'],
            color: ['color', 'definecolor', 'textcolor', 'colorbox', 'fcolorbox'],
            enclose: ['enclose'],
            extpfeil: [
                'xtwoheadrightarrow',
                'xtwoheadleftarrow',
                'xmapsto',
                'xlongequal',
                'xtofrom',
                'Newextarrow',
            ],
            html: ['data', 'href', 'class', 'style', 'cssId'],
            mhchem: ['ce', 'pu'],
            newcommand: [
                'newcommand',
                'renewcommand',
                'newenvironment',
                'renewenvironment',
                'def',
                'let',
            ],
            unicode: ['unicode', 'U', 'char'],
            verb: ['verb'],
        }),
    },
    [ConfigurationType.CONFIG]: configAutoload,
    [ConfigurationType.INIT]: initAutoload,
    [ConfigurationType.PRIORITY]: 10,
});
//# sourceMappingURL=AutoloadConfiguration.js.map
;// ./components/mjs/input/tex/extensions/autoload/lib/autoload.js





if (MathJax.loader) {
  MathJax.loader.checkVersion('[tex]/autoload', VERSION, 'tex-extension');
}

combineWithMathJax({_: {
  input: {
    tex: {
      autoload: {
        AutoloadConfiguration: AutoloadConfiguration_namespaceObject
      }
    }
  }
}});

;// ./components/mjs/input/tex/extensions/autoload/autoload.js


/******/ })()
;