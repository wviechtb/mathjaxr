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

// NAMESPACE OBJECT: ./mjs/input/tex/require/RequireConfiguration.js
var RequireConfiguration_namespaceObject = {};
__webpack_require__.r(RequireConfiguration_namespaceObject);
__webpack_require__.d(RequireConfiguration_namespaceObject, {
  RequireConfiguration: () => (RequireConfiguration),
  RequireLoad: () => (RequireLoad),
  RequireMethods: () => (RequireMethods),
  options: () => (options)
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

;// ./components/mjs/startup/lib/components/startup.js
const startup_g = (typeof window !== 'undefined' ? window : global);
const startup_def = startup_g.MathJax._.components.startup;
const Startup = startup_def.Startup;
const startup_MathJax = startup_def.MathJax;
const CONFIG = startup_def.CONFIG;

;// ./components/mjs/startup/lib/components/package.js
const package_def = MathJax._.components.package;
const PackageError = package_def.PackageError;
const Package = package_def.Package;

;// ./components/mjs/startup/lib/components/loader.js
const loader_g = (typeof window !== 'undefined' ? window : global);
const loader_def = loader_g.MathJax._.components.loader;
const PathFilters = loader_def.PathFilters;
const Loader = loader_def.Loader;
const loader_MathJax = loader_def.MathJax;
const loader_CONFIG = loader_def.CONFIG;

;// ./components/mjs/core/lib/mathjax.js
const mathjax_def = MathJax._.mathjax;
const mathjax = mathjax_def.mathjax;

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

;// ./mjs/input/tex/require/RequireConfiguration.js









const MJCONFIG = startup_MathJax.config;
function RegisterExtension(jax, name) {
    const require = jax.parseOptions.options.require;
    const required = jax.parseOptions.packageData.get('require')
        .required;
    const extension = name.substring(require.prefix.length);
    if (!required.includes(extension)) {
        required.push(extension);
        const retry = RegisterDependencies(jax, loader_CONFIG.dependencies[name]);
        if (retry) {
            mathjax.retryAfter(retry.then(() => ProcessExtension(jax, name, extension)));
        }
        else {
            ProcessExtension(jax, name, extension);
        }
    }
}
function ProcessExtension(jax, name, extension) {
    const handler = ConfigurationHandler.get(extension);
    if (handler) {
        let options = MJCONFIG[name] || {};
        if (handler.options &&
            Object.keys(handler.options).length === 1 &&
            handler.options[extension]) {
            options = { [extension]: options };
        }
        jax.configuration.add(extension, jax, options);
        const configured = jax.parseOptions.packageData.get('require').configured;
        if (handler.preprocessors.length && !configured.has(extension)) {
            configured.set(extension, true);
            mathjax.retryAfter(Promise.resolve());
        }
    }
}
function RegisterDependencies(jax, names = []) {
    const prefix = jax.parseOptions.options.require.prefix;
    const retries = [];
    for (const name of names) {
        if (name.substring(0, prefix.length) === prefix) {
            try {
                RegisterExtension(jax, name);
            }
            catch (err) {
                if (!err.retry)
                    throw err;
                retries.push(err.retry);
            }
        }
    }
    return retries.length ? Promise.all(retries) : null;
}
function RequireLoad(parser, name) {
    var _a, _b;
    const options = parser.options.require;
    const allow = options.allow;
    const extension = (name.substring(0, 1) === '[' ? '' : options.prefix) + name;
    const allowed = Object.hasOwn(allow, extension)
        ? allow[extension]
        : Object.hasOwn(allow, name)
            ? allow[name]
            : options.defaultAllow;
    if (!allowed) {
        throw new TexError('BadRequire', 'Extension "%1" is not allowed to be loaded', extension);
    }
    const data = Package.packages.get(extension);
    if (!data) {
        mathjax.retryAfter(Loader.load(extension).catch((_) => { }));
    }
    if (data.hasFailed) {
        throw new TexError('RequireFail', 'Extension "%1" failed to load', name);
    }
    const require = (_a = loader_CONFIG[extension]) === null || _a === void 0 ? void 0 : _a.rendererExtensions;
    const menu = (_b = startup_MathJax.startup.document) === null || _b === void 0 ? void 0 : _b.menu;
    if (require && menu) {
        menu.addRequiredExtensions(require);
    }
    RegisterExtension(parser.configuration.packageData.get('require').jax, extension);
}
function config(_config, jax) {
    jax.parseOptions.packageData.set('require', {
        jax: jax,
        required: [...jax.options.packages],
        configured: new Map()
    });
    const options = jax.parseOptions.options.require;
    const prefix = options.prefix;
    if (prefix.match(/[^_a-zA-Z0-9]/)) {
        throw Error('Illegal characters used in \\require prefix');
    }
    if (!loader_CONFIG.paths[prefix]) {
        loader_CONFIG.paths[prefix] = '[mathjax]/input/tex/extensions';
    }
    options.prefix = '[' + prefix + ']/';
}
const RequireMethods = {
    Require(parser, name) {
        const required = parser.GetArgument(name);
        if (required.match(/[^_a-zA-Z0-9]/) || required === '') {
            throw new TexError('BadPackageName', 'Argument for %1 is not a valid package name', name);
        }
        RequireLoad(parser, required);
        parser.Push(parser.itemFactory.create('null'));
    },
};
const options = {
    require: {
        allow: expandable({
            base: false,
            autoload: false,
            configmacros: false,
            tagformat: false,
            setoptions: false,
            texhtml: false,
        }),
        defaultAllow: true,
        prefix: 'tex',
    },
};
new CommandMap('require', { require: RequireMethods.Require });
const RequireConfiguration = Configuration.create('require', {
    [ConfigurationType.HANDLER]: {
        [HandlerType.MACRO]: ['require'],
    },
    [ConfigurationType.CONFIG]: config,
    [ConfigurationType.OPTIONS]: options,
});
//# sourceMappingURL=RequireConfiguration.js.map
;// ./components/mjs/input/tex/extensions/require/lib/require.js





if (MathJax.loader) {
  MathJax.loader.checkVersion('[tex]/require', VERSION, 'tex-extension');
}

combineWithMathJax({_: {
  input: {
    tex: {
      require: {
        RequireConfiguration: RequireConfiguration_namespaceObject
      }
    }
  }
}});

;// ./components/mjs/input/tex/extensions/require/require.js


/******/ })()
;