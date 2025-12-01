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

// NAMESPACE OBJECT: ./mjs/input/tex/cases/CasesConfiguration.js
var CasesConfiguration_namespaceObject = {};
__webpack_require__.r(CasesConfiguration_namespaceObject);
__webpack_require__.d(CasesConfiguration_namespaceObject, {
  CasesBeginItem: () => (CasesBeginItem),
  CasesConfiguration: () => (CasesConfiguration),
  CasesMethods: () => (CasesMethods),
  CasesTags: () => (CasesTags)
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

;// ./components/mjs/input/tex-base/lib/input/tex/ParseUtil.js
const ParseUtil_def = MathJax._.input.tex.ParseUtil;
const KeyValueDef = ParseUtil_def.KeyValueDef;
const KeyValueTypes = ParseUtil_def.KeyValueTypes;
const ParseUtil = ParseUtil_def.ParseUtil;

;// ./components/mjs/input/tex-base/lib/input/tex/base/BaseMethods.js
const BaseMethods_def = MathJax._.input.tex.base.BaseMethods;
const splitAlignArray = BaseMethods_def.splitAlignArray;
/* harmony default export */ const BaseMethods = (BaseMethods_def.default);

;// ./components/mjs/input/tex-base/lib/input/tex/TexError.js
const TexError_def = MathJax._.input.tex.TexError;
/* harmony default export */ const TexError = (TexError_def.default);

;// ./components/mjs/input/tex-base/lib/input/tex/base/BaseItems.js
const BaseItems_def = MathJax._.input.tex.base.BaseItems;
const StartItem = BaseItems_def.StartItem;
const StopItem = BaseItems_def.StopItem;
const OpenItem = BaseItems_def.OpenItem;
const CloseItem = BaseItems_def.CloseItem;
const NullItem = BaseItems_def.NullItem;
const PrimeItem = BaseItems_def.PrimeItem;
const SubsupItem = BaseItems_def.SubsupItem;
const OverItem = BaseItems_def.OverItem;
const LeftItem = BaseItems_def.LeftItem;
const Middle = BaseItems_def.Middle;
const RightItem = BaseItems_def.RightItem;
const BreakItem = BaseItems_def.BreakItem;
const BeginItem = BaseItems_def.BeginItem;
const EndItem = BaseItems_def.EndItem;
const StyleItem = BaseItems_def.StyleItem;
const PositionItem = BaseItems_def.PositionItem;
const CellItem = BaseItems_def.CellItem;
const MmlItem = BaseItems_def.MmlItem;
const FnItem = BaseItems_def.FnItem;
const NotItem = BaseItems_def.NotItem;
const NonscriptItem = BaseItems_def.NonscriptItem;
const DotsItem = BaseItems_def.DotsItem;
const ArrayItem = BaseItems_def.ArrayItem;
const EqnArrayItem = BaseItems_def.EqnArrayItem;
const MstyleItem = BaseItems_def.MstyleItem;
const EquationItem = BaseItems_def.EquationItem;

;// ./components/mjs/input/tex/extensions/ams/lib/input/tex/ams/AmsConfiguration.js
const AmsConfiguration_def = MathJax._.input.tex.ams.AmsConfiguration;
const AmsTags = AmsConfiguration_def.AmsTags;
const AmsConfiguration = AmsConfiguration_def.AmsConfiguration;

;// ./components/mjs/input/tex/extensions/empheq/lib/input/tex/empheq/EmpheqUtil.js
const EmpheqUtil_def = MathJax._.input.tex.empheq.EmpheqUtil;
const EmpheqUtil = EmpheqUtil_def.EmpheqUtil;

;// ./mjs/input/tex/cases/CasesConfiguration.js









class CasesBeginItem extends BeginItem {
    get kind() {
        return 'cases-begin';
    }
    checkItem(item) {
        if (item.isKind('end') && item.getName() === this.getName()) {
            if (this.getProperty('end')) {
                this.setProperty('end', false);
                return [[], true];
            }
        }
        return super.checkItem(item);
    }
}
class CasesTags extends AmsTags {
    constructor() {
        super(...arguments);
        this.subcounter = 0;
    }
    start(env, taggable, defaultTags) {
        this.subcounter = 0;
        super.start(env, taggable, defaultTags);
    }
    autoTag() {
        if (this.currentTag.tag != null)
            return;
        if (this.currentTag.env === 'subnumcases') {
            if (this.subcounter === 0) {
                this.counter++;
            }
            this.subcounter++;
            this.tag(this.formatNumber(this.counter, this.subcounter), false);
        }
        else {
            if (this.currentTag.env !== 'numcases-left') {
                this.counter++;
            }
            this.tag(this.formatNumber(this.counter), false);
        }
    }
    formatNumber(n, m = null) {
        return n.toString() + (m === null ? '' : String.fromCharCode(0x60 + m));
    }
}
const CasesMethods = {
    NumCases(parser, begin) {
        if (parser.stack.env.closing === begin.getName()) {
            delete parser.stack.env.closing;
            parser.Push(parser.itemFactory.create('end').setProperty('name', begin.getName()));
            const cases = parser.stack.Top();
            const table = cases.Last;
            const original = ParseUtil.copyNode(table, parser);
            const left = cases.getProperty('left');
            EmpheqUtil.left(table, original, left + '\\mmlToken{mo}{\\U{7B}}\\,', parser, 'numcases-left');
            parser.Push(parser.itemFactory.create('end').setProperty('name', begin.getName()));
            return null;
        }
        else {
            const left = parser.GetArgument('\\begin{' + begin.getName() + '}');
            begin.setProperty('left', left);
            const array = BaseMethods.EqnArray(parser, begin, true, true, 'll', 'tt');
            array.arraydef.displaystyle = false;
            array.arraydef.rowspacing = '.2em';
            array.setProperty('numCases', true);
            parser.Push(begin);
            return array;
        }
    },
    Entry(parser, name) {
        if (!parser.stack.Top().getProperty('numCases')) {
            return BaseMethods.Entry(parser, name);
        }
        parser.Push(parser.itemFactory
            .create('cell')
            .setProperties({ isEntry: true, name: name }));
        const tex = parser.string;
        let braces = 0;
        let i = parser.i;
        const m = tex.length;
        while (i < m) {
            const c = tex.charAt(i);
            if (c === '{') {
                braces++;
                i++;
            }
            else if (c === '}') {
                if (braces === 0) {
                    break;
                }
                else {
                    braces--;
                    i++;
                }
            }
            else if (c === '&' && braces === 0) {
                throw new TexError('ExtraCasesAlignTab', 'Extra alignment tab in text for numcase environment');
            }
            else if (c === '\\' && braces === 0) {
                const cs = (tex.slice(i + 1).match(/^[a-z]+|./i) || [])[0];
                if (cs === '\\' ||
                    cs === 'cr' ||
                    cs === 'end' ||
                    cs === 'label' ||
                    cs === undefined) {
                    break;
                }
                else {
                    i += cs.length;
                }
            }
            else {
                i++;
            }
        }
        const text = tex.substring(parser.i, i).replace(/^\s*/, '');
        parser.PushAll(ParseUtil.internalMath(parser, text, 0));
        parser.i = i;
        return null;
    },
    environment(parser, env, func, args) {
        const item = parser.itemFactory
            .create('cases-begin')
            .setProperties({ name: env, end: true });
        parser.Push(func(parser, item, ...args));
    },
};
new EnvironmentMap('cases-env', CasesMethods.environment, {
    numcases: [CasesMethods.NumCases, 'cases'],
    subnumcases: [CasesMethods.NumCases, 'cases'],
});
new MacroMap('cases-macros', {
    '&': CasesMethods.Entry,
});
const CasesConfiguration = Configuration.create('cases', {
    [ConfigurationType.HANDLER]: {
        [HandlerType.ENVIRONMENT]: ['cases-env'],
        [HandlerType.CHARACTER]: ['cases-macros'],
    },
    [ConfigurationType.ITEMS]: {
        [CasesBeginItem.prototype.kind]: CasesBeginItem,
    },
    [ConfigurationType.TAGS]: { cases: CasesTags },
});
//# sourceMappingURL=CasesConfiguration.js.map
;// ./components/mjs/input/tex/extensions/cases/lib/cases.js





if (MathJax.loader) {
  MathJax.loader.checkVersion('[tex]/cases', VERSION, 'tex-extension');
}

combineWithMathJax({_: {
  input: {
    tex: {
      cases: {
        CasesConfiguration: CasesConfiguration_namespaceObject
      }
    }
  }
}});

;// ./components/mjs/input/tex/extensions/cases/cases.js


/******/ })()
;