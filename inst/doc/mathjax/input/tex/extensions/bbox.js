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

// NAMESPACE OBJECT: ./mjs/input/tex/bbox/BboxConfiguration.js
var BboxConfiguration_namespaceObject = {};
__webpack_require__.r(BboxConfiguration_namespaceObject);
__webpack_require__.d(BboxConfiguration_namespaceObject, {
  BboxConfiguration: () => (BboxConfiguration)
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

;// ./mjs/input/tex/bbox/BboxConfiguration.js




const BboxMethods = {
    BBox(parser, name) {
        const bbox = parser.GetBrackets(name, '');
        let math = parser.ParseArg(name);
        const parts = bbox.split(/,/);
        let def, background, style;
        for (let i = 0, m = parts.length; i < m; i++) {
            const part = parts[i].trim();
            const match = part.match(/^(\.\d+|\d+(\.\d*)?)(pt|em|ex|mu|px|in|cm|mm)$/);
            if (match) {
                if (def) {
                    throw new TexError('MultipleBBoxProperty', '%1 specified twice in %2', 'Padding', name);
                }
                const pad = BBoxPadding(match[1] + match[3]);
                if (pad) {
                    def = {
                        height: '+' + pad,
                        depth: '+' + pad,
                        lspace: pad,
                        width: '+' + 2 * parseInt(match[1], 10) + match[3],
                    };
                }
            }
            else if (part.match(/^([a-z0-9]+|#[0-9a-f]{6}|#[0-9a-f]{3})$/i)) {
                if (background) {
                    throw new TexError('MultipleBBoxProperty', '%1 specified twice in %2', 'Background', name);
                }
                background = part;
            }
            else if (part.match(/^[-a-z]+:/i)) {
                if (style) {
                    throw new TexError('MultipleBBoxProperty', '%1 specified twice in %2', 'Style', name);
                }
                style = BBoxStyle(part);
            }
            else if (part !== '') {
                throw new TexError('InvalidBBoxProperty', '"%1" doesn\'t look like a color, a padding dimension, or a style', part);
            }
        }
        if (def) {
            math = parser.create('node', 'mpadded', [math], def);
        }
        if (background || style) {
            def = {};
            if (background) {
                Object.assign(def, { mathbackground: background });
            }
            if (style) {
                Object.assign(def, { style: style });
            }
            math = parser.create('node', 'mstyle', [math], def);
        }
        parser.Push(math);
    },
};
function BBoxStyle(styles) {
    return styles;
}
function BBoxPadding(pad) {
    return pad;
}
new CommandMap('bbox', { bbox: BboxMethods.BBox });
const BboxConfiguration = Configuration.create('bbox', {
    [ConfigurationType.HANDLER]: { [HandlerType.MACRO]: ['bbox'] },
});
//# sourceMappingURL=BboxConfiguration.js.map
;// ./components/mjs/input/tex/extensions/bbox/lib/bbox.js





if (MathJax.loader) {
  MathJax.loader.checkVersion('[tex]/bbox', VERSION, 'tex-extension');
}

combineWithMathJax({_: {
  input: {
    tex: {
      bbox: {
        BboxConfiguration: BboxConfiguration_namespaceObject
      }
    }
  }
}});

;// ./components/mjs/input/tex/extensions/bbox/bbox.js


/******/ })()
;