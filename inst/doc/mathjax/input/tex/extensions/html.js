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

// NAMESPACE OBJECT: ./mjs/input/tex/html/HtmlMethods.js
var HtmlMethods_namespaceObject = {};
__webpack_require__.r(HtmlMethods_namespaceObject);
__webpack_require__.d(HtmlMethods_namespaceObject, {
  "default": () => (html_HtmlMethods)
});

// NAMESPACE OBJECT: ./mjs/input/tex/html/HtmlConfiguration.js
var HtmlConfiguration_namespaceObject = {};
__webpack_require__.r(HtmlConfiguration_namespaceObject);
__webpack_require__.d(HtmlConfiguration_namespaceObject, {
  HtmlConfiguration: () => (HtmlConfiguration)
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

;// ./components/mjs/input/tex-base/lib/input/tex/NodeUtil.js
const NodeUtil_def = MathJax._.input.tex.NodeUtil;
/* harmony default export */ const NodeUtil = (NodeUtil_def.default);

;// ./components/mjs/input/tex-base/lib/input/tex/ParseUtil.js
const ParseUtil_def = MathJax._.input.tex.ParseUtil;
const KeyValueDef = ParseUtil_def.KeyValueDef;
const KeyValueTypes = ParseUtil_def.KeyValueTypes;
const ParseUtil = ParseUtil_def.ParseUtil;

;// ./components/mjs/input/tex-base/lib/input/tex/TexError.js
const TexError_def = MathJax._.input.tex.TexError;
/* harmony default export */ const TexError = (TexError_def.default);

;// ./mjs/input/tex/html/HtmlMethods.js



const nonCharacterRegexp = /[\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u;
function isLegalAttributeName(name) {
    return !(name.match(/[\x00-\x1f\x7f-\x9f "'>/=]/) ||
        name.match(nonCharacterRegexp));
}
const HtmlMethods = {
    Data(parser, name) {
        const dataset = parser.GetArgument(name);
        const arg = GetArgumentMML(parser, name);
        const data = ParseUtil.keyvalOptions(dataset);
        for (const key in data) {
            if (!isLegalAttributeName(key)) {
                throw new TexError('InvalidHTMLAttr', 'Invalid HTML attribute: %1', `data-${key}`);
            }
            NodeUtil.setAttribute(arg, `data-${key}`, data[key]);
        }
        parser.Push(arg);
    },
    Href(parser, name) {
        const url = parser.GetArgument(name);
        const arg = GetArgumentMML(parser, name);
        NodeUtil.setAttribute(arg, 'href', url);
        parser.Push(arg);
    },
    Class(parser, name) {
        let CLASS = parser.GetArgument(name);
        const arg = GetArgumentMML(parser, name);
        const oldClass = NodeUtil.getAttribute(arg, 'class');
        if (oldClass) {
            CLASS = oldClass + ' ' + CLASS;
        }
        NodeUtil.setAttribute(arg, 'class', CLASS);
        parser.Push(arg);
    },
    Style(parser, name) {
        let style = parser.GetArgument(name);
        const arg = GetArgumentMML(parser, name);
        let oldStyle = NodeUtil.getAttribute(arg, 'style');
        if (oldStyle) {
            if (oldStyle.charAt(style.length - 1) !== ';') {
                oldStyle += ';';
            }
            style = oldStyle + ' ' + style;
        }
        NodeUtil.setAttribute(arg, 'style', style);
        parser.Push(arg);
    },
    Id(parser, name) {
        const ID = parser.GetArgument(name);
        const arg = GetArgumentMML(parser, name);
        NodeUtil.setAttribute(arg, 'id', ID);
        parser.Push(arg);
    },
};
const GetArgumentMML = function (parser, name) {
    const arg = parser.ParseArg(name);
    if (!NodeUtil.isInferred(arg)) {
        return arg;
    }
    const mrow = parser.create('node', 'mrow');
    NodeUtil.copyChildren(arg, mrow);
    NodeUtil.copyAttributes(arg, mrow);
    return mrow;
};
/* harmony default export */ const html_HtmlMethods = (HtmlMethods);
//# sourceMappingURL=HtmlMethods.js.map
;// ./mjs/input/tex/html/HtmlConfiguration.js




new CommandMap('html_macros', {
    data: html_HtmlMethods.Data,
    href: html_HtmlMethods.Href,
    class: html_HtmlMethods.Class,
    style: html_HtmlMethods.Style,
    cssId: html_HtmlMethods.Id,
});
const HtmlConfiguration = Configuration.create('html', {
    [ConfigurationType.HANDLER]: { [HandlerType.MACRO]: ['html_macros'] },
});
//# sourceMappingURL=HtmlConfiguration.js.map
;// ./components/mjs/input/tex/extensions/html/lib/html.js






if (MathJax.loader) {
  MathJax.loader.checkVersion('[tex]/html', VERSION, 'tex-extension');
}

combineWithMathJax({_: {
  input: {
    tex: {
      html: {
        HtmlConfiguration: HtmlConfiguration_namespaceObject,
        HtmlMethods: HtmlMethods_namespaceObject
      }
    }
  }
}});

;// ./components/mjs/input/tex/extensions/html/html.js


/******/ })()
;