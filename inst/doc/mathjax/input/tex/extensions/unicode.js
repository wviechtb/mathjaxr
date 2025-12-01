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

// NAMESPACE OBJECT: ./mjs/input/tex/unicode/UnicodeConfiguration.js
var UnicodeConfiguration_namespaceObject = {};
__webpack_require__.r(UnicodeConfiguration_namespaceObject);
__webpack_require__.d(UnicodeConfiguration_namespaceObject, {
  UnicodeConfiguration: () => (UnicodeConfiguration)
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

;// ./components/mjs/input/tex-base/lib/input/tex/TexError.js
const TexError_def = MathJax._.input.tex.TexError;
/* harmony default export */ const TexError = (TexError_def.default);

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

;// ./components/mjs/input/tex-base/lib/input/tex/UnitUtil.js
const UnitUtil_def = MathJax._.input.tex.UnitUtil;
const UnitUtil = UnitUtil_def.UnitUtil;

;// ./components/mjs/input/tex-base/lib/input/tex/NodeUtil.js
const NodeUtil_def = MathJax._.input.tex.NodeUtil;
/* harmony default export */ const NodeUtil = (NodeUtil_def.default);

;// ./components/mjs/core/lib/util/Entities.js
const Entities_def = MathJax._.util.Entities;
const options = Entities_def.options;
const entities = Entities_def.entities;
const add = Entities_def.add;
const remove = Entities_def.remove;
const translate = Entities_def.translate;
const numeric = Entities_def.numeric;

;// ./components/mjs/input/tex-base/lib/input/tex/base/BaseConfiguration.js
const BaseConfiguration_def = MathJax._.input.tex.base.BaseConfiguration;
const Other = BaseConfiguration_def.Other;
const BaseTags = BaseConfiguration_def.BaseTags;
const BaseConfiguration = BaseConfiguration_def.BaseConfiguration;

;// ./mjs/input/tex/unicode/UnicodeConfiguration.js








const UnicodeCache = {};
const UnicodeMethods = {
    Unicode(parser, name) {
        const HD = parser.GetBrackets(name);
        let HDsplit = null;
        let font = '';
        if (HD) {
            if (HD.replace(/ /g, '').match(/^(\d+(\.\d*)?|\.\d+),(\d+(\.\d*)?|\.\d+)$/)) {
                HDsplit = HD.replace(/ /g, '').split(/,/);
                font = parser.GetBrackets(name) || '';
            }
            else {
                font = HD;
            }
        }
        if (font.match(/;/)) {
            throw new TexError('BadFont', "Font name for %1 can't contain semicolons", parser.currentCS);
        }
        const n = UnitUtil.trimSpaces(parser.GetArgument(name)).replace(/^0x/, 'x');
        if (!n.match(/^(x[0-9A-Fa-f]+|[0-9]+)$/)) {
            throw new TexError('BadUnicode', 'Argument to %1 must be a number', parser.currentCS);
        }
        const N = parseInt(n.match(/^x/) ? '0' + n : n);
        if (!UnicodeCache[N]) {
            UnicodeCache[N] = [800, 200, font, N];
        }
        else if (!font) {
            font = UnicodeCache[N][2];
        }
        if (HDsplit) {
            UnicodeCache[N][0] = Math.floor(parseFloat(HDsplit[0]) * 1000);
            UnicodeCache[N][1] = Math.floor(parseFloat(HDsplit[1]) * 1000);
        }
        const variant = parser.stack.env.font;
        const def = {};
        if (font) {
            UnicodeCache[N][2] = def.fontfamily = font.replace(/'/g, "'");
            if (variant) {
                if (variant.match(/bold/)) {
                    def.fontweight = 'bold';
                }
                if (variant.match(/italic|-mathit/)) {
                    def.fontstyle = 'italic';
                }
            }
        }
        else if (variant) {
            def.mathvariant = variant;
        }
        const node = parser.create('token', 'mtext', def, numeric(n));
        NodeUtil.setProperty(node, 'unicode', true);
        parser.Push(node);
    },
    RawUnicode(parser, name) {
        const hex = parser.GetArgument(name).trim();
        if (!hex.match(/^[0-9A-F]{1,6}$/)) {
            throw new TexError('BadRawUnicode', 'Argument to %1 must a hexadecimal number with 1 to 6 digits', parser.currentCS);
        }
        const n = parseInt(hex, 16);
        parser.string = String.fromCodePoint(n) + parser.string.substring(parser.i);
        parser.i = 0;
    },
    Char(parser, _name) {
        let match;
        const next = parser.GetNext();
        let c = '';
        const text = parser.string.substring(parser.i);
        if (next === "'") {
            match = text.match(/^'([0-7]{1,7}) ?/u);
            if (match) {
                c = String.fromCodePoint(parseInt(match[1], 8));
            }
        }
        else if (next === '"') {
            match = text.match(/^"([0-9A-F]{1,6}) ?/);
            if (match) {
                c = String.fromCodePoint(parseInt(match[1], 16));
            }
        }
        else if (next === '`') {
            match = text.match(/^`(?:(\\\S)|(.))/u);
            if (match) {
                if (match[2]) {
                    c = match[2];
                }
                else {
                    parser.i += 2;
                    const cs = [...parser.GetCS()];
                    if (cs.length > 1) {
                        throw new TexError('InvalidAlphanumeric', 'Invalid alphanumeric constant for %1', parser.currentCS);
                    }
                    c = cs[0];
                    match = [''];
                }
            }
        }
        else {
            match = text.match(/^([0-9]{1,7}) ?/);
            if (match) {
                c = String.fromCodePoint(parseInt(match[1]));
            }
        }
        if (!c) {
            throw new TexError('MissingNumber', 'Missing numeric constant for %1', parser.currentCS);
        }
        parser.i += match[0].length;
        if (c >= '0' && c <= '9') {
            parser.Push(parser.create('token', 'mn', {}, c));
        }
        else if (c.match(/[A-Za-z]/)) {
            parser.Push(parser.create('token', 'mi', {}, c));
        }
        else {
            Other(parser, c);
        }
    },
};
new CommandMap('unicode', {
    unicode: UnicodeMethods.Unicode,
    U: UnicodeMethods.RawUnicode,
    char: UnicodeMethods.Char,
});
const UnicodeConfiguration = Configuration.create('unicode', {
    [ConfigurationType.HANDLER]: { [HandlerType.MACRO]: ['unicode'] },
});
//# sourceMappingURL=UnicodeConfiguration.js.map
;// ./components/mjs/input/tex/extensions/unicode/lib/unicode.js





if (MathJax.loader) {
  MathJax.loader.checkVersion('[tex]/unicode', VERSION, 'tex-extension');
}

combineWithMathJax({_: {
  input: {
    tex: {
      unicode: {
        UnicodeConfiguration: UnicodeConfiguration_namespaceObject
      }
    }
  }
}});

;// ./components/mjs/input/tex/extensions/unicode/unicode.js


/******/ })()
;