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

// NAMESPACE OBJECT: ./mjs/input/tex/bboldx/BboldxMethods.js
var BboldxMethods_namespaceObject = {};
__webpack_require__.r(BboldxMethods_namespaceObject);
__webpack_require__.d(BboldxMethods_namespaceObject, {
  BboldxMethods: () => (BboldxMethods)
});

// NAMESPACE OBJECT: ./mjs/input/tex/bboldx/BboldxConfiguration.js
var BboldxConfiguration_namespaceObject = {};
__webpack_require__.r(BboldxConfiguration_namespaceObject);
__webpack_require__.d(BboldxConfiguration_namespaceObject, {
  BboldxConfiguration: () => (BboldxConfiguration)
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

;// ./components/mjs/input/tex/extensions/textmacros/lib/input/tex/textmacros/TextMacrosMethods.js
const TextMacrosMethods_def = MathJax._.input.tex.textmacros.TextMacrosMethods;
const TextMacrosMethods = TextMacrosMethods_def.TextMacrosMethods;

;// ./components/mjs/input/tex-base/lib/input/tex/base/BaseMethods.js
const BaseMethods_def = MathJax._.input.tex.base.BaseMethods;
const splitAlignArray = BaseMethods_def.splitAlignArray;
/* harmony default export */ const BaseMethods = (BaseMethods_def.default);

;// ./mjs/input/tex/bboldx/BboldxMethods.js


const BboldxMethods = {
    Macro: BaseMethods.Macro,
    ChooseFont: function (parser, name, normal, light, bfbb) {
        const font = getBbxFont(parser, normal, light, bfbb);
        BaseMethods.MathFont(parser, name, font);
    },
    ChooseTextFont: function (parser, name, normal, light, bfbb) {
        const font = getBbxFont(parser, normal, light, bfbb);
        TextMacrosMethods.TextFont(parser, name, font);
    },
    mathchar0miNormal: function (parser, mchar) {
        const font = getBbxFont(parser, '-bboldx', '-bboldx-light', '-bboldx-bold');
        const node = parser.create('token', 'mi', { mathvariant: font }, mchar.char);
        parser.Push(node);
    },
    delimiterNormal: function (parser, delim) {
        const font = getBbxFont(parser, '-bboldx', '-bboldx-light', '-bboldx-bold');
        const def = { stretchy: false, mathvariant: font };
        const node = parser.create('token', 'mo', def, delim.char);
        parser.Push(node);
    },
    mathchar0miBold: function (parser, mchar) {
        const font = getBbxFont(parser, '-bboldx-bold', '-bboldx', '-bboldx-bold');
        const node = parser.create('token', 'mi', { mathvariant: font }, mchar.char);
        parser.Push(node);
    },
    delimiterBold: function (parser, delim) {
        const font = getBbxFont(parser, '-bboldx-bold', '-bboldx', '-bboldx-bold');
        const def = { stretchy: false, mathvariant: font };
        const node = parser.create('token', 'mo', def, delim.char);
        parser.Push(node);
    },
};
function getBbxFont(parser, normal, light, bfbb) {
    const options = parser.options.bboldx;
    return options.bfbb ? bfbb : options.light ? light : normal;
}
//# sourceMappingURL=BboldxMethods.js.map
;// ./mjs/input/tex/bboldx/BboldxMappings.js


new CharacterMap('bboldx-mathchar0miNormal', BboldxMethods.mathchar0miNormal, {
    bbGamma: '\u0393',
    bbDelta: '\u2206',
    bbTheta: '\u0398',
    bbLambda: '\u039B',
    bbXi: '\u039E',
    bbPi: '\u03A0',
    bbSigma: '\u03A3',
    bbUpsilon: '\u03A5',
    bbPhi: '\u03A6',
    bbPsi: '\u03A8',
    bbOmega: '\u2126',
    bbalpha: '\u03B1',
    bbbeta: '\u03B2',
    bbgamma: '\u03B3',
    bbdelta: '\u03B4',
    bbepsilon: '\u03B5',
    bbzeta: '\u03B6',
    bbeta: '\u03B7',
    bbtheta: '\u03B8',
    bbiota: '\u03B9',
    bbkappa: '\u03BA',
    bblambda: '\u03BB',
    bbmu: '\u00B5',
    bbnu: '\u03BD',
    bbxi: '\u03BE',
    bbpi: '\u03C0',
    bbrho: '\u03C1',
    bbsigma: '\u03C3',
    bbtau: '\u03C4',
    bbupsilon: '\u03C5',
    bbphi: '\u03C6',
    bbchi: '\u03C7',
    bbpsi: '\u03C8',
    bbomega: '\u03C9',
    bbdotlessi: '\u0131',
    bbdotlessj: '\u0237',
});
new CharacterMap('bboldx-delimiterNormal', BboldxMethods.delimiterNormal, {
    bbLparen: '\u0028',
    bbRparen: '\u0029',
    bbLbrack: '\u005B',
    bbRbrack: '\u005D',
    bbLangle: '\u2329',
    bbRangle: '\u232A',
});
new CharacterMap('bboldx-mathchar0miBold', BboldxMethods.mathchar0miBold, {
    bfbbGamma: '\u0393',
    bfbbDelta: '\u2206',
    bfbbTheta: '\u0398',
    bfbbLambda: '\u039B',
    bfbbXi: '\u039E',
    bfbbPi: '\u03A0',
    bfbbSigma: '\u03A3',
    bfbbUpsilon: '\u03A5',
    bfbbPhi: '\u03A6',
    bfbbPsi: '\u03A8',
    bfbbOmega: '\u2126',
    bfbbalpha: '\u03B1',
    bfbbbeta: '\u03B2',
    bfbbgamma: '\u03B3',
    bfbbdelta: '\u03B4',
    bfbbepsilon: '\u03B5',
    bfbbzeta: '\u03B6',
    bfbbeta: '\u03B7',
    bfbbtheta: '\u03B8',
    bfbbiota: '\u03B9',
    bfbbkappa: '\u03BA',
    bfbblambda: '\u03BFBB',
    bfbbmu: '\u00B5',
    bfbbnu: '\u03BD',
    bfbbxi: '\u03BE',
    bfbbpi: '\u03C0',
    bfbbrho: '\u03C1',
    bfbbsigma: '\u03C3',
    bfbbtau: '\u03C4',
    bfbbupsilon: '\u03C5',
    bfbbphi: '\u03C6',
    bfbbchi: '\u03C7',
    bfbbpsi: '\u03C8',
    bfbbomega: '\u03C9',
    bfbbdotlessi: '\u0131',
    bfbbdotlessj: '\u0237',
});
new CharacterMap('bboldx-delimiterBold', BboldxMethods.delimiterBold, {
    bfbbLparen: '\u0028',
    bfbbRparen: '\u0029',
    bfbbLbrack: '\u005B',
    bfbbRbrack: '\u005D',
    bfbbLangle: '\u2329',
    bfbbRangle: '\u232A',
});
new CommandMap('bboldx', {
    mathbb: [
        BboldxMethods.ChooseFont,
        '-bboldx',
        '-bboldx-light',
        '-bboldx-bold',
    ],
    mathbfbb: [
        BboldxMethods.ChooseFont,
        '-bboldx-bold',
        '-bboldx',
        '-bboldx-bold',
    ],
    imathbb: [BboldxMethods.Macro, '\\bbdotlessi'],
    jmathbb: [BboldxMethods.Macro, '\\bbdotlessj'],
    imathbfbb: [BboldxMethods.Macro, '\\bfbbdotlessi'],
    jmathbfbb: [BboldxMethods.Macro, '\\bfbbdotlessj'],
});
new CharacterMap('text-bboldx-mathchar0miNormal', BboldxMethods.mathchar0miNormal, {
    txtbbGamma: '\u0393',
    txtbbDelta: '\u2206',
    txtbbTheta: '\u0398',
    txtbbLambda: '\u039B',
    txtbbXi: '\u039E',
    txtbbPi: '\u03A0',
    txtbbSigma: '\u03A3',
    txtbbUpsilon: '\u03A5',
    txtbbPhi: '\u03A6',
    txtbbPsi: '\u03A8',
    txtbbOmega: '\u2126',
    txtbbalpha: '\u03B1',
    txtbbbeta: '\u03B2',
    txtbbgamma: '\u03B3',
    txtbbdelta: '\u03B4',
    txtbbepsilon: '\u03B5',
    txtbbzeta: '\u03B6',
    txtbbeta: '\u03B7',
    txtbbtheta: '\u03B8',
    txtbbiota: '\u03B9',
    txtbbkappa: '\u03BA',
    txtbblambda: '\u03BB',
    txtbbmu: '\u00B5',
    txtbbnu: '\u03BD',
    txtbbxi: '\u03BE',
    txtbbpi: '\u03C0',
    txtbbrho: '\u03C1',
    txtbbsigma: '\u03C3',
    txtbbtau: '\u03C4',
    txtbbupsilon: '\u03C5',
    txtbbphi: '\u03C6',
    txtbbchi: '\u03C7',
    txtbbpsi: '\u03C8',
    txtbbomega: '\u03C9',
    txtbbdotlessi: '\u0131',
    txtbbdotlessj: '\u0237',
});
new CharacterMap('text-bboldx-delimiterNormal', BboldxMethods.delimiterNormal, {
    txtbbLparen: '\u0028',
    txtbbRparen: '\u0029',
    txtbbLbrack: '\u005B',
    txtbbRbrack: '\u005D',
    txtbbLangle: '\u2329',
    txtbbRangle: '\u232A',
});
new CharacterMap('text-bboldx-mathchar0miBold', BboldxMethods.mathchar0miBold, {
    txtbfbbGamma: '\u0393',
    txtbfbbDelta: '\u2206',
    txtbfbbTheta: '\u0398',
    txtbfbbLambda: '\u039B',
    txtbfbbXi: '\u039E',
    txtbfbbPi: '\u03A0',
    txtbfbbSigma: '\u03A3',
    txtbfbbUpsilon: '\u03A5',
    txtbfbbPhi: '\u03A6',
    txtbfbbPsi: '\u03A8',
    txtbfbbOmega: '\u2126',
    txtbfbbalpha: '\u03B1',
    txtbfbbbeta: '\u03B2',
    txtbfbbgamma: '\u03B3',
    txtbfbbdelta: '\u03B4',
    txtbfbbepsilon: '\u03B5',
    txtbfbbzeta: '\u03B6',
    txtbfbbeta: '\u03B7',
    txtbfbbtheta: '\u03B8',
    txtbfbbiota: '\u03B9',
    txtbfbbkappa: '\u03BA',
    txtbfbblambda: '\u03BB',
    txtbfbbmu: '\u00B5',
    txtbfbbnu: '\u03BD',
    txtbfbbxi: '\u03BE',
    txtbfbbpi: '\u03C0',
    txtbfbbrho: '\u03C1',
    txtbfbbsigma: '\u03C3',
    txtbfbbtau: '\u03C4',
    txtbfbbupsilon: '\u03C5',
    txtbfbbphi: '\u03C6',
    txtbfbbchi: '\u03C7',
    txtbfbbpsi: '\u03C8',
    txtbfbbomega: '\u03C9',
    txtbfbbdotlessi: '\u0131',
    txtbfbbdotlessj: '\u0237',
});
new CharacterMap('text-bboldx-delimiterBold', BboldxMethods.delimiterBold, {
    txtbfbbLparen: '\u0028',
    txtbfbbRparen: '\u0029',
    txtbfbbLbrack: '\u005B',
    txtbfbbRbrack: '\u005D',
    txtbfbbLangle: '\u2329',
    txtbfbbRangle: '\u232A',
});
new CommandMap('text-bboldx', {
    textbb: [
        BboldxMethods.ChooseTextFont,
        '-bboldx',
        '-bboldx-light',
        '-bboldx-bold',
    ],
    textbfbb: [
        BboldxMethods.ChooseTextFont,
        '-bboldx-bold',
        '-bboldx',
        '-bboldx-bold',
    ],
    itextbb: [BboldxMethods.Macro, '\\txtbbdotlessi'],
    jtextbb: [BboldxMethods.Macro, '\\txtbbdotlessj'],
    itextbfbb: [BboldxMethods.Macro, '\\txtbfbbdotlessi'],
    jtextbfbb: [BboldxMethods.Macro, '\\txtbfbbdotlessj'],
});
//# sourceMappingURL=BboldxMappings.js.map
;// ./mjs/input/tex/bboldx/BboldxConfiguration.js



Configuration.create('text-bboldx', {
    parser: 'text',
    handler: {
        macro: [
            'text-bboldx',
            'text-bboldx-mathchar0miNormal',
            'text-bboldx-delimiterNormal',
            'text-bboldx-mathchar0miBold',
            'text-bboldx-delimiterBold',
        ],
    },
});
const BboldxConfiguration = Configuration.create('bboldx', {
    [ConfigurationType.HANDLER]: {
        [HandlerType.MACRO]: [
            'bboldx',
            'bboldx-mathchar0miNormal',
            'bboldx-delimiterNormal',
            'bboldx-mathchar0miBold',
            'bboldx-delimiterBold',
        ],
    },
    [ConfigurationType.OPTIONS]: {
        bboldx: {
            bfbb: false,
            light: false,
        },
    },
    config(_config, jax) {
        const textmacros = jax.parseOptions.packageData.get('textmacros');
        if (textmacros) {
            textmacros.parseOptions.options.textmacros.packages.push('text-bboldx');
            textmacros.textConf.add('text-bboldx', jax, {});
        }
    },
    priority: 3,
});
//# sourceMappingURL=BboldxConfiguration.js.map
;// ./components/mjs/input/tex/extensions/bboldx/lib/bboldx.js






if (MathJax.loader) {
  MathJax.loader.checkVersion('[tex]/bboldx', VERSION, 'tex-extension');
}

combineWithMathJax({_: {
  input: {
    tex: {
      bboldx: {
        BboldxConfiguration: BboldxConfiguration_namespaceObject,
        BboldxMethods: BboldxMethods_namespaceObject
      }
    }
  }
}});

;// ./components/mjs/core/lib/util/context.js
const context_def = MathJax._.util.context;
const hasWindow = context_def.hasWindow;
const context = context_def.context;

;// ./components/mjs/input/tex/extension.js



function fontExtension(id, name, pkg = `@mathjax/${name}`) {
  if (MathJax.loader) {
    const FONTPATH = hasWindow ? `https://cdn.jsdelivr.net/npm/${pkg}` : pkg;
    const path = name.replace(/-font-extension$/, '-extension');
    const jax = (MathJax.config?.startup?.output || 'chtml');
    combineDefaults(MathJax.config.loader, 'paths', {[path]: FONTPATH});
    combineDefaults(MathJax.config.loader, 'dependencies', {[`[${path}]/${jax}`]: [`output/${jax}`]});
    MathJax.loader.addPackageData(id, {
      extraLoads: [`[${path}]/${jax}`],
      rendererExtensions: [path]
    });
  }
}

;// ./components/mjs/input/tex/extensions/bboldx/bboldx.js



fontExtension('[tex]/bboldx', 'mathjax-bboldx-font-extension');

/******/ })()
;