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

// NAMESPACE OBJECT: ./mjs/input/tex/empheq/EmpheqUtil.js
var EmpheqUtil_namespaceObject = {};
__webpack_require__.r(EmpheqUtil_namespaceObject);
__webpack_require__.d(EmpheqUtil_namespaceObject, {
  EmpheqUtil: () => (EmpheqUtil)
});

// NAMESPACE OBJECT: ./mjs/input/tex/empheq/EmpheqConfiguration.js
var EmpheqConfiguration_namespaceObject = {};
__webpack_require__.r(EmpheqConfiguration_namespaceObject);
__webpack_require__.d(EmpheqConfiguration_namespaceObject, {
  EmpheqConfiguration: () => (EmpheqConfiguration),
  EmpheqMethods: () => (EmpheqMethods)
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

;// ./components/mjs/input/tex-base/lib/input/tex/TexError.js
const TexError_def = MathJax._.input.tex.TexError;
/* harmony default export */ const TexError = (TexError_def.default);

;// ./components/mjs/input/tex-base/lib/input/tex/TexParser.js
const TexParser_def = MathJax._.input.tex.TexParser;
/* harmony default export */ const TexParser = (TexParser_def.default);

;// ./mjs/input/tex/empheq/EmpheqUtil.js


const EmpheqUtil = {
    splitOptions(text, allowed = null) {
        return ParseUtil.keyvalOptions(text, allowed, true);
    },
    columnCount(table) {
        let m = 0;
        for (const row of table.childNodes) {
            const n = row.childNodes.length - (row.isKind('mlabeledtr') ? 1 : 0);
            if (n > m)
                m = n;
        }
        return m;
    },
    cellBlock(tex, table, parser, env) {
        const mpadded = parser.create('node', 'mpadded', [], {
            height: 0,
            depth: 0,
            voffset: '-1height',
        });
        const result = new TexParser(tex, parser.stack.env, parser.configuration);
        const mml = result.mml();
        if (env && result.configuration.tags.label) {
            result.configuration.tags.currentTag.env = env;
            result.configuration.tags.getTag(true);
        }
        for (const child of mml.isInferred ? mml.childNodes : [mml]) {
            mpadded.appendChild(child);
        }
        mpadded.appendChild(parser.create('node', 'mphantom', [
            parser.create('node', 'mpadded', [table], { width: 0 }),
        ]));
        return mpadded;
    },
    topRowTable(original, parser) {
        const table = ParseUtil.copyNode(original, parser);
        table.setChildren(table.childNodes.slice(0, 1));
        table.attributes.set('align', 'baseline 1');
        return original.factory.create('mphantom', {}, [
            parser.create('node', 'mpadded', [table], { width: 0 }),
        ]);
    },
    rowspanCell(mtd, tex, table, parser, env) {
        mtd.appendChild(parser.create('node', 'mpadded', [
            this.cellBlock(tex, ParseUtil.copyNode(table, parser), parser, env),
            this.topRowTable(table, parser),
        ], { height: 0, depth: 0, voffset: 'height' }));
    },
    left(table, original, left, parser, env = '') {
        table.attributes.set('columnalign', 'right ' + table.attributes.get('columnalign'));
        table.attributes.set('columnspacing', '0em ' + table.attributes.get('columnspacing'));
        if (table.childNodes.length === 0) {
            table.appendChild(parser.create('node', 'mtr'));
        }
        let mtd;
        for (const row of table.childNodes.slice(0).reverse()) {
            mtd = parser.create('node', 'mtd');
            row.childNodes.unshift(mtd);
            mtd.parent = row;
            if (row.isKind('mlabeledtr')) {
                row.childNodes[0] = row.childNodes[1];
                row.childNodes[1] = mtd;
            }
        }
        this.rowspanCell(mtd, left, original, parser, env);
    },
    right(table, original, right, parser, env = '') {
        if (table.childNodes.length === 0) {
            table.appendChild(parser.create('node', 'mtr'));
        }
        const row = table.childNodes[0];
        const m = EmpheqUtil.columnCount(table) + (row.isKind('mlabeledtr') ? 1 : 0);
        while (row.childNodes.length < m) {
            row.appendChild(parser.create('node', 'mtd'));
        }
        const mtd = row.appendChild(parser.create('node', 'mtd'));
        EmpheqUtil.rowspanCell(mtd, right, original, parser, env);
        table.attributes.set('columnalign', (table.attributes.get('columnalign') || '')
            .split(/ /)
            .slice(0, m)
            .join(' ') + ' left');
        table.attributes.set('columnspacing', table.attributes.get('columnspacing')
            .split(/ /)
            .slice(0, m - 1)
            .join(' ') + ' 0em');
    },
    adjustTable(empheq, parser) {
        const left = empheq.getProperty('left');
        const right = empheq.getProperty('right');
        if (left || right) {
            const table = empheq.Last;
            const original = ParseUtil.copyNode(table, parser);
            if (left)
                this.left(table, original, left, parser);
            if (right)
                this.right(table, original, right, parser);
        }
    },
    allowEnv: {
        equation: true,
        align: true,
        gather: true,
        flalign: true,
        alignat: true,
        multline: true,
    },
    checkEnv(env) {
        return Object.hasOwn(this.allowEnv, env.replace(/\*$/, '')) || false;
    },
};
//# sourceMappingURL=EmpheqUtil.js.map
;// ./components/mjs/input/tex-base/lib/input/tex/ParseMethods.js
const ParseMethods_def = MathJax._.input.tex.ParseMethods;
/* harmony default export */ const ParseMethods = (ParseMethods_def.default);

;// ./mjs/input/tex/empheq/EmpheqConfiguration.js







const EmpheqMethods = {
    Empheq(parser, begin) {
        if (parser.stack.env.closing === begin.getName()) {
            delete parser.stack.env.closing;
            parser.Push(parser.itemFactory
                .create('end')
                .setProperty('name', parser.stack.global.empheq));
            parser.stack.global.empheq = '';
            const empheq = parser.stack.Top();
            EmpheqUtil.adjustTable(empheq, parser);
            parser.Push(parser.itemFactory.create('end').setProperty('name', 'empheq'));
        }
        else {
            ParseUtil.checkEqnEnv(parser);
            const opts = parser.GetBrackets('\\begin{' + begin.getName() + '}') || '';
            const [env, n] = parser
                .GetArgument('\\begin{' + begin.getName() + '}')
                .split(/=/);
            if (!EmpheqUtil.checkEnv(env)) {
                throw new TexError('EmpheqInvalidEnv', 'Invalid environment "%1" for %2', env, begin.getName());
            }
            begin.setProperty('nestStart', true);
            if (opts) {
                begin.setProperties(EmpheqUtil.splitOptions(opts, { left: 1, right: 1 }));
            }
            parser.stack.global.empheq = env;
            parser.string =
                '\\begin{' +
                    env +
                    '}' +
                    (n ? '{' + n + '}' : '') +
                    parser.string.slice(parser.i);
            parser.i = 0;
            parser.Push(begin);
        }
    },
    EmpheqMO(parser, _name, c) {
        parser.Push(parser.create('token', 'mo', {}, c));
    },
    EmpheqDelim(parser, name) {
        const c = parser.GetDelimiter(name);
        parser.Push(parser.create('token', 'mo', { stretchy: true, symmetric: true }, c));
    },
};
new EnvironmentMap('empheq-env', ParseMethods.environment, {
    empheq: [EmpheqMethods.Empheq, 'empheq'],
});
new CommandMap('empheq-macros', {
    empheqlbrace: [EmpheqMethods.EmpheqMO, '{'],
    empheqrbrace: [EmpheqMethods.EmpheqMO, '}'],
    empheqlbrack: [EmpheqMethods.EmpheqMO, '['],
    empheqrbrack: [EmpheqMethods.EmpheqMO, ']'],
    empheqlangle: [EmpheqMethods.EmpheqMO, '\u27E8'],
    empheqrangle: [EmpheqMethods.EmpheqMO, '\u27E9'],
    empheqlparen: [EmpheqMethods.EmpheqMO, '('],
    empheqrparen: [EmpheqMethods.EmpheqMO, ')'],
    empheqlvert: [EmpheqMethods.EmpheqMO, '|'],
    empheqrvert: [EmpheqMethods.EmpheqMO, '|'],
    empheqlVert: [EmpheqMethods.EmpheqMO, '\u2016'],
    empheqrVert: [EmpheqMethods.EmpheqMO, '\u2016'],
    empheqlfloor: [EmpheqMethods.EmpheqMO, '\u230A'],
    empheqrfloor: [EmpheqMethods.EmpheqMO, '\u230B'],
    empheqlceil: [EmpheqMethods.EmpheqMO, '\u2308'],
    empheqrceil: [EmpheqMethods.EmpheqMO, '\u2309'],
    empheqbiglbrace: [EmpheqMethods.EmpheqMO, '{'],
    empheqbigrbrace: [EmpheqMethods.EmpheqMO, '}'],
    empheqbiglbrack: [EmpheqMethods.EmpheqMO, '['],
    empheqbigrbrack: [EmpheqMethods.EmpheqMO, ']'],
    empheqbiglangle: [EmpheqMethods.EmpheqMO, '\u27E8'],
    empheqbigrangle: [EmpheqMethods.EmpheqMO, '\u27E9'],
    empheqbiglparen: [EmpheqMethods.EmpheqMO, '('],
    empheqbigrparen: [EmpheqMethods.EmpheqMO, ')'],
    empheqbiglvert: [EmpheqMethods.EmpheqMO, '|'],
    empheqbigrvert: [EmpheqMethods.EmpheqMO, '|'],
    empheqbiglVert: [EmpheqMethods.EmpheqMO, '\u2016'],
    empheqbigrVert: [EmpheqMethods.EmpheqMO, '\u2016'],
    empheqbiglfloor: [EmpheqMethods.EmpheqMO, '\u230A'],
    empheqbigrfloor: [EmpheqMethods.EmpheqMO, '\u230B'],
    empheqbiglceil: [EmpheqMethods.EmpheqMO, '\u2308'],
    empheqbigrceil: [EmpheqMethods.EmpheqMO, '\u2309'],
    empheql: EmpheqMethods.EmpheqDelim,
    empheqr: EmpheqMethods.EmpheqDelim,
    empheqbigl: EmpheqMethods.EmpheqDelim,
    empheqbigr: EmpheqMethods.EmpheqDelim,
});
const EmpheqConfiguration = Configuration.create('empheq', {
    [ConfigurationType.HANDLER]: {
        [HandlerType.MACRO]: ['empheq-macros'],
        [HandlerType.ENVIRONMENT]: ['empheq-env'],
    },
});
//# sourceMappingURL=EmpheqConfiguration.js.map
;// ./components/mjs/input/tex/extensions/empheq/lib/empheq.js






if (MathJax.loader) {
  MathJax.loader.checkVersion('[tex]/empheq', VERSION, 'tex-extension');
}

combineWithMathJax({_: {
  input: {
    tex: {
      empheq: {
        EmpheqConfiguration: EmpheqConfiguration_namespaceObject,
        EmpheqUtil: EmpheqUtil_namespaceObject
      }
    }
  }
}});

;// ./components/mjs/input/tex/extensions/empheq/empheq.js


/******/ })()
;