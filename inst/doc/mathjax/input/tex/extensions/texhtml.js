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

// NAMESPACE OBJECT: ./mjs/input/tex/texhtml/TexHtmlConfiguration.js
var TexHtmlConfiguration_namespaceObject = {};
__webpack_require__.r(TexHtmlConfiguration_namespaceObject);
__webpack_require__.d(TexHtmlConfiguration_namespaceObject, {
  HtmlNodeMethods: () => (HtmlNodeMethods),
  TexHtmlConfiguration: () => (TexHtmlConfiguration)
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

;// ./components/mjs/core/lib/handlers/html/HTMLDomStrings.js
const HTMLDomStrings_def = MathJax._.handlers.html.HTMLDomStrings;
const HTMLDomStrings = HTMLDomStrings_def.HTMLDomStrings;

;// ./mjs/input/tex/texhtml/TexHtmlConfiguration.js





const HtmlNodeMethods = {
    TexHTML(parser, _name) {
        if (!parser.options.allowTexHTML)
            return false;
        const match = parser.string
            .slice(parser.i)
            .match(/^tex-html(?: n="(\d+)")?>/);
        if (!match)
            return false;
        parser.i += match[0].length;
        const end = (match[1] ? `<!${match[1]}>` : '') + '</tex-html>';
        const i = parser.string.slice(parser.i).indexOf(end);
        if (i < 0) {
            throw new TexError('TokenNotFoundForCommand', 'Could not find %1 for %2', end, '<' + match[0]);
        }
        const html = parser.string.substring(parser.i, parser.i + i).trim();
        parser.i += i + 11 + (match[1] ? 3 + match[1].length : 0);
        const adaptor = parser.configuration.packageData.get('texhtml').adaptor;
        const nodes = adaptor.childNodes(adaptor.body(adaptor.parse(html)));
        if (nodes.length === 0)
            return true;
        const DOM = nodes.length === 1 ? nodes[0] : adaptor.node('div', {}, nodes);
        const node = parser.create('node', 'html').setHTML(DOM, adaptor);
        parser.Push(parser.create('node', 'mtext', [node]));
        return true;
    },
};
new MacroMap('tex-html', { '<': HtmlNodeMethods.TexHTML });
const TexHtmlConfiguration = Configuration.create('texhtml', {
    [ConfigurationType.HANDLER]: {
        [HandlerType.CHARACTER]: ['tex-html'],
    },
    [ConfigurationType.OPTIONS]: {
        allowTexHTML: false,
    },
    [ConfigurationType.CONFIG]: () => {
        if (HTMLDomStrings) {
            const include = HTMLDomStrings.OPTIONS.includeHtmlTags;
            if (!include['tex-html']) {
                include['tex-html'] = (node, adaptor) => {
                    const html = adaptor.innerHTML(node);
                    const n = html.split(/<\/tex-html>/).length;
                    const N = n > 1 ? ` n="${n}"` : '';
                    return (`<tex-html${N}>` + html + (n > 1 ? `<!${n}>` : '') + `</tex-html>`);
                };
            }
        }
    },
    [ConfigurationType.PREPROCESSORS]: [
        (data) => {
            data.data.packageData.set('texhtml', { adaptor: data.document.adaptor });
        },
    ],
    [ConfigurationType.POSTPROCESSORS]: [
        (data) => {
            data.data.packageData.set('texhtml', { adaptor: null });
        },
    ],
});
//# sourceMappingURL=TexHtmlConfiguration.js.map
;// ./components/mjs/input/tex/extensions/texhtml/lib/texhtml.js





if (MathJax.loader) {
  MathJax.loader.checkVersion('[tex]/texhtml', VERSION, 'tex-extension');
}

combineWithMathJax({_: {
  input: {
    tex: {
      texhtml: {
        TexHtmlConfiguration: TexHtmlConfiguration_namespaceObject
      }
    }
  }
}});

;// ./components/mjs/input/tex/extensions/texhtml/texhtml.js


/******/ })()
;