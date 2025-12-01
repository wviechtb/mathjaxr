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

// NAMESPACE OBJECT: ./mjs/input/tex/setoptions/SetOptionsConfiguration.js
var SetOptionsConfiguration_namespaceObject = {};
__webpack_require__.r(SetOptionsConfiguration_namespaceObject);
__webpack_require__.d(SetOptionsConfiguration_namespaceObject, {
  SetOptionsConfiguration: () => (SetOptionsConfiguration),
  SetOptionsUtil: () => (SetOptionsUtil)
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

;// ./components/mjs/input/tex-base/lib/input/tex/TexError.js
const TexError_def = MathJax._.input.tex.TexError;
/* harmony default export */ const TexError = (TexError_def.default);

;// ./components/mjs/input/tex-base/lib/input/tex/ParseUtil.js
const ParseUtil_def = MathJax._.input.tex.ParseUtil;
const KeyValueDef = ParseUtil_def.KeyValueDef;
const KeyValueTypes = ParseUtil_def.KeyValueTypes;
const ParseUtil = ParseUtil_def.ParseUtil;

;// ./components/mjs/input/tex-base/lib/input/tex/Token.js
const Token_def = MathJax._.input.tex.Token;
const Token = Token_def.Token;
const Macro = Token_def.Macro;

;// ./components/mjs/input/tex-base/lib/input/tex/base/BaseMethods.js
const BaseMethods_def = MathJax._.input.tex.base.BaseMethods;
const splitAlignArray = BaseMethods_def.splitAlignArray;
/* harmony default export */ const BaseMethods = (BaseMethods_def.default);

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

;// ./components/mjs/core/lib/util/PrioritizedList.js
const PrioritizedList_def = MathJax._.util.PrioritizedList;
const PrioritizedList = PrioritizedList_def.PrioritizedList;

;// ./mjs/input/tex/setoptions/SetOptionsConfiguration.js









const SetOptionsUtil = {
    filterPackage(parser, extension) {
        if (extension !== 'tex' && !ConfigurationHandler.get(extension)) {
            throw new TexError('NotAPackage', 'Not a defined package: %1', extension);
        }
        const config = parser.options.setoptions;
        const options = config.allowOptions[extension];
        if ((options === undefined && !config.allowPackageDefault) ||
            options === false) {
            throw new TexError('PackageNotSettable', 'Options can\'t be set for package "%1"', extension);
        }
        return true;
    },
    filterOption(parser, extension, option) {
        const config = parser.options.setoptions;
        const options = config.allowOptions[extension] || {};
        const isTex = extension === 'tex';
        const allow = Object.hasOwn(options, option) && !Options_isObject(options[option])
            ? options[option]
            : null;
        if (allow === false || (allow === null && !config.allowOptionsDefault)) {
            if (isTex) {
                throw new TexError('TeXOptionNotSettable', 'Option "%1" is not allowed to be set', option);
            }
            else {
                throw new TexError('OptionNotSettable', 'Option "%1" is not allowed to be set for package %2', option, extension);
            }
        }
        const extOptions = isTex ? parser.options : parser.options[extension];
        if (!extOptions || !Object.hasOwn(extOptions, option)) {
            if (isTex) {
                throw new TexError('InvalidTexOption', 'Invalid TeX option "%1"', option);
            }
            else {
                throw new TexError('InvalidOptionKey', 'Invalid option "%1" for package "%2"', option, extension);
            }
        }
        return true;
    },
    filterValue(_parser, _extension, _option, value) {
        if (typeof value !== 'string') {
            return value;
        }
        const match = value.match(/^\/(.*)\/([dgimsuvy]*)$/);
        return match ? new RegExp(match[1], match[2]) : value;
    },
};
function SetOptions(parser, name) {
    const extension = parser.GetBrackets(name) || 'tex';
    const options = ParseUtil.keyvalOptions(parser.GetArgument(name));
    const config = parser.options.setoptions;
    if (!config.filterPackage(parser, extension))
        return;
    for (const key of Object.keys(options)) {
        if (config.filterOption(parser, extension, key)) {
            (extension === 'tex' ? parser.options : parser.options[extension])[key] =
                config.filterValue(parser, extension, key, options[key]);
        }
    }
    parser.Push(parser.itemFactory.create('null'));
}
function setoptionsConfig(_config, jax) {
    const setOptionsMap = new CommandMap('setoptions', {
        setOptions: SetOptions,
    });
    const macros = jax.parseOptions.handlers.get(HandlerType.MACRO);
    macros.add(['setoptions'], null, PrioritizedList.DEFAULTPRIORITY - 1);
    const require = macros.lookup('require');
    if (require) {
        setOptionsMap.add('Require', new Macro('Require', require._func));
        setOptionsMap.add('require', new Macro('require', BaseMethods.Macro, [
            '\\Require{#2}\\setOptions[#2]{#1}',
            2,
            '',
        ]));
    }
}
const SetOptionsConfiguration = Configuration.create('setoptions', {
    [ConfigurationType.CONFIG]: setoptionsConfig,
    [ConfigurationType.PRIORITY]: 3,
    [ConfigurationType.OPTIONS]: {
        setoptions: {
            filterPackage: SetOptionsUtil.filterPackage,
            filterOption: SetOptionsUtil.filterOption,
            filterValue: SetOptionsUtil.filterValue,
            allowPackageDefault: true,
            allowOptionsDefault: true,
            allowOptions: expandable({
                tex: {
                    FindTeX: false,
                    formatError: false,
                    package: false,
                    baseURL: false,
                    tags: false,
                    maxBuffer: false,
                    maxMaxros: false,
                    macros: false,
                    environments: false
                },
                setoptions: false,
                autoload: false,
                require: false,
                configmacros: false,
                tagformat: false
            })
        }
    },
});
//# sourceMappingURL=SetOptionsConfiguration.js.map
;// ./components/mjs/input/tex/extensions/setoptions/lib/setoptions.js





if (MathJax.loader) {
  MathJax.loader.checkVersion('[tex]/setoptions', VERSION, 'tex-extension');
}

combineWithMathJax({_: {
  input: {
    tex: {
      setoptions: {
        SetOptionsConfiguration: SetOptionsConfiguration_namespaceObject
      }
    }
  }
}});

;// ./components/mjs/input/tex/extensions/setoptions/setoptions.js


/******/ })()
;