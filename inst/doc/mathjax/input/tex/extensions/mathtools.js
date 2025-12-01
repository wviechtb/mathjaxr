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

// NAMESPACE OBJECT: ./mjs/input/tex/mathtools/MathtoolsUtil.js
var MathtoolsUtil_namespaceObject = {};
__webpack_require__.r(MathtoolsUtil_namespaceObject);
__webpack_require__.d(MathtoolsUtil_namespaceObject, {
  MathtoolsUtil: () => (MathtoolsUtil)
});

// NAMESPACE OBJECT: ./mjs/input/tex/mathtools/MathtoolsMethods.js
var MathtoolsMethods_namespaceObject = {};
__webpack_require__.r(MathtoolsMethods_namespaceObject);
__webpack_require__.d(MathtoolsMethods_namespaceObject, {
  LEGACYCONFIG: () => (LEGACYCONFIG),
  LEGACYPRIORITY: () => (LEGACYPRIORITY),
  MathtoolsMethods: () => (MathtoolsMethods)
});

// NAMESPACE OBJECT: ./mjs/input/tex/mathtools/MathtoolsTags.js
var MathtoolsTags_namespaceObject = {};
__webpack_require__.r(MathtoolsTags_namespaceObject);
__webpack_require__.d(MathtoolsTags_namespaceObject, {
  MathtoolsTagFormat: () => (MathtoolsTagFormat)
});

// NAMESPACE OBJECT: ./mjs/input/tex/mathtools/MathtoolsItems.js
var MathtoolsItems_namespaceObject = {};
__webpack_require__.r(MathtoolsItems_namespaceObject);
__webpack_require__.d(MathtoolsItems_namespaceObject, {
  MultlinedItem: () => (MultlinedItem)
});

// NAMESPACE OBJECT: ./mjs/input/tex/mathtools/MathtoolsConfiguration.js
var MathtoolsConfiguration_namespaceObject = {};
__webpack_require__.r(MathtoolsConfiguration_namespaceObject);
__webpack_require__.d(MathtoolsConfiguration_namespaceObject, {
  MathtoolsConfiguration: () => (MathtoolsConfiguration),
  fixPrescripts: () => (fixPrescripts)
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

;// ./components/mjs/input/tex-base/lib/input/tex/Token.js
const Token_def = MathJax._.input.tex.Token;
const Token = Token_def.Token;
const Macro = Token_def.Macro;

;// ./components/mjs/input/tex-base/lib/input/tex/NodeUtil.js
const NodeUtil_def = MathJax._.input.tex.NodeUtil;
/* harmony default export */ const NodeUtil = (NodeUtil_def.default);

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

;// ./components/mjs/input/tex/extensions/newcommand/lib/input/tex/newcommand/NewcommandConfiguration.js
const NewcommandConfiguration_def = MathJax._.input.tex.newcommand.NewcommandConfiguration;
const NewcommandConfig = NewcommandConfiguration_def.NewcommandConfig;
const NewcommandConfiguration = NewcommandConfiguration_def.NewcommandConfiguration;

;// ./components/mjs/input/tex/extensions/newcommand/lib/input/tex/newcommand/NewcommandUtil.js
const NewcommandUtil_def = MathJax._.input.tex.newcommand.NewcommandUtil;
const NewcommandTables = NewcommandUtil_def.NewcommandTables;
const NewcommandPriority = NewcommandUtil_def.NewcommandPriority;
const NewcommandUtil = NewcommandUtil_def.NewcommandUtil;

;// ./components/mjs/input/tex-base/lib/input/tex/ParseMethods.js
const ParseMethods_def = MathJax._.input.tex.ParseMethods;
/* harmony default export */ const ParseMethods = (ParseMethods_def.default);

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

;// ./components/mjs/input/tex-base/lib/input/tex/TexConstants.js
const TexConstants_def = MathJax._.input.tex.TexConstants;
const TexConstant = TexConstants_def.TexConstant;

;// ./components/mjs/input/tex-base/lib/input/tex/ParseUtil.js
const ParseUtil_def = MathJax._.input.tex.ParseUtil;
const KeyValueDef = ParseUtil_def.KeyValueDef;
const KeyValueTypes = ParseUtil_def.KeyValueTypes;
const ParseUtil = ParseUtil_def.ParseUtil;

;// ./components/mjs/input/tex-base/lib/input/tex/UnitUtil.js
const UnitUtil_def = MathJax._.input.tex.UnitUtil;
const UnitUtil = UnitUtil_def.UnitUtil;

;// ./components/mjs/input/tex/extensions/ams/lib/input/tex/ams/AmsMethods.js
const AmsMethods_def = MathJax._.input.tex.ams.AmsMethods;
const AmsMethods = AmsMethods_def.AmsMethods;

;// ./components/mjs/input/tex-base/lib/input/tex/base/BaseMethods.js
const BaseMethods_def = MathJax._.input.tex.base.BaseMethods;
const splitAlignArray = BaseMethods_def.splitAlignArray;
/* harmony default export */ const BaseMethods = (BaseMethods_def.default);

;// ./components/mjs/input/tex-base/lib/input/tex/TexParser.js
const TexParser_def = MathJax._.input.tex.TexParser;
/* harmony default export */ const TexParser = (TexParser_def.default);

;// ./components/mjs/input/tex-base/lib/input/tex/TexError.js
const TexError_def = MathJax._.input.tex.TexError;
/* harmony default export */ const TexError = (TexError_def.default);

;// ./components/mjs/core/lib/core/MmlTree/MmlNode.js
const MmlNode_def = MathJax._.core.MmlTree.MmlNode;
const TEXCLASS = MmlNode_def.TEXCLASS;
const TEXCLASSNAMES = MmlNode_def.TEXCLASSNAMES;
const MATHVARIANTS = MmlNode_def.MATHVARIANTS;
const indentAttributes = MmlNode_def.indentAttributes;
const AbstractMmlNode = MmlNode_def.AbstractMmlNode;
const AbstractMmlTokenNode = MmlNode_def.AbstractMmlTokenNode;
const AbstractMmlLayoutNode = MmlNode_def.AbstractMmlLayoutNode;
const AbstractMmlBaseNode = MmlNode_def.AbstractMmlBaseNode;
const AbstractMmlEmptyNode = MmlNode_def.AbstractMmlEmptyNode;
const TextNode = MmlNode_def.TextNode;
const XMLNode = MmlNode_def.XMLNode;

;// ./components/mjs/core/lib/util/lengths.js
const lengths_def = MathJax._.util.lengths;
const BIGDIMEN = lengths_def.BIGDIMEN;
const UNITS = lengths_def.UNITS;
const RELUNITS = lengths_def.RELUNITS;
const MATHSPACE = lengths_def.MATHSPACE;
const length2em = lengths_def.length2em;
const percent = lengths_def.percent;
const em = lengths_def.em;
const px = lengths_def.px;

;// ./components/mjs/input/tex/extensions/newcommand/lib/input/tex/newcommand/NewcommandMethods.js
const NewcommandMethods_def = MathJax._.input.tex.newcommand.NewcommandMethods;
/* harmony default export */ const NewcommandMethods = (NewcommandMethods_def.default);

;// ./components/mjs/core/lib/util/PrioritizedList.js
const PrioritizedList_def = MathJax._.util.PrioritizedList;
const PrioritizedList = PrioritizedList_def.PrioritizedList;

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

;// ./mjs/input/tex/mathtools/MathtoolsUtil.js








const MathtoolsUtil = {
    setDisplayLevel(mml, style) {
        if (!style)
            return;
        const [display, script] = lookup(style, {
            '\\displaystyle': [true, 0],
            '\\textstyle': [false, 0],
            '\\scriptstyle': [false, 1],
            '\\scriptscriptstyle': [false, 2],
        }, [null, null]);
        if (display !== null) {
            mml.attributes.set('displaystyle', display);
            mml.attributes.set('scriptlevel', script);
        }
    },
    checkAlignment(parser, name) {
        const top = parser.stack.Top();
        if (top.kind !== EqnArrayItem.prototype.kind) {
            throw new TexError('NotInAlignment', '%1 can only be used in aligment environments', name);
        }
        return top;
    },
    addPairedDelims(parser, cs, args) {
        if (parser.configuration.handlers.get(HandlerType.MACRO).contains(cs)) {
            throw new TexError('CommadExists', 'Command %1 already defined', `\\${cs}`);
        }
        NewcommandUtil.addMacro(parser, cs, MathtoolsMethods.PairedDelimiters, args);
    },
    spreadLines(mtable, spread) {
        if (!mtable.isKind('mtable'))
            return;
        let rowspacing = mtable.attributes.get('rowspacing');
        const add = UnitUtil.dimen2em(spread);
        rowspacing = rowspacing
            .split(/ /)
            .map((s) => UnitUtil.em(Math.max(0, UnitUtil.dimen2em(s) + add)))
            .join(' ');
        mtable.attributes.set('rowspacing', rowspacing);
    },
    plusOrMinus(name, n) {
        n = n.trim();
        if (!n.match(/^[-+]?(?:\d+(?:\.\d*)?|\.\d+)$/)) {
            throw new TexError('NotANumber', 'Argument to %1 is not a number', name);
        }
        return n.match(/^[-+]/) ? n : '+' + n;
    },
    getScript(parser, name, pos) {
        let arg = UnitUtil.trimSpaces(parser.GetArgument(name));
        if (arg === '') {
            return parser.create('node', 'none');
        }
        const format = parser.options.mathtools[`prescript-${pos}-format`];
        if (format) {
            arg = `${format}{${arg}}`;
        }
        const mml = new TexParser(arg, parser.stack.env, parser.configuration).mml();
        return mml.isKind('TeXAtom') && mml.childNodes[0].childNodes.length === 0
            ? parser.create('node', 'none')
            : mml;
    },
};
//# sourceMappingURL=MathtoolsUtil.js.map
;// ./mjs/input/tex/mathtools/MathtoolsMethods.js
















const LEGACYCONFIG = {
    [HandlerType.MACRO]: ['mathtools-legacycolonsymbols'],
};
const LEGACYPRIORITY = PrioritizedList.DEFAULTPRIORITY - 1;
const MathtoolsMethods = {
    MtMatrix(parser, begin, open, close) {
        const align = parser.GetBrackets(`\\begin{${begin.getName()}}`, 'c');
        return MathtoolsMethods.Array(parser, begin, open, close, align);
    },
    MtSmallMatrix(parser, begin, open, close, align) {
        if (!align) {
            align = parser.GetBrackets(`\\begin{${begin.getName()}}`, parser.options.mathtools['smallmatrix-align']);
        }
        return MathtoolsMethods.Array(parser, begin, open, close, align, UnitUtil.em(1 / 3), '.2em', 'S', 1);
    },
    MtMultlined(parser, begin) {
        const name = `\\begin{${begin.getName()}}`;
        let pos = parser.options.mathtools['multlined-pos'] || 'c';
        let width = parser.options.mathtools['multlined-width'] || '';
        if (!parser.nextIsSpace()) {
            const arg = parser.GetBrackets(name, pos);
            if (arg.match(/^[ctb]$/)) {
                pos = arg;
                width = !parser.nextIsSpace() ? parser.GetBrackets(name, '') : '';
            }
            else {
                width = arg;
            }
            if (width && !UnitUtil.matchDimen(width)[0]) {
                throw new TexError('BadWidth', 'Width for %1 must be a dimension', name);
            }
        }
        parser.Push(begin);
        const item = parser.itemFactory.create('multlined', parser, begin);
        item.arraydef = {
            displaystyle: true,
            rowspacing: '.5em',
            width: width || 'auto',
            columnwidth: '100%',
        };
        return ParseUtil.setArrayAlign(item, pos);
    },
    HandleShove(parser, name, shove) {
        const top = parser.stack.Top();
        if (top.kind !== 'multline' && top.kind !== 'multlined') {
            throw new TexError('CommandInMultlined', '%1 can only appear within the multline or multlined environments', name);
        }
        if (top.Size()) {
            throw new TexError('CommandAtTheBeginingOfLine', '%1 must come at the beginning of the line', name);
        }
        top.setProperty('shove', shove);
        const shift = parser.GetBrackets(name);
        let mml = parser.ParseArg(name);
        if (shift) {
            const mrow = parser.create('node', 'mrow', []);
            const mspace = parser.create('node', 'mspace', [], { width: shift });
            if (shove === 'left') {
                mrow.appendChild(mspace);
                mrow.appendChild(mml);
            }
            else {
                mrow.appendChild(mml);
                mrow.appendChild(mspace);
            }
            mml = mrow;
        }
        parser.Push(mml);
    },
    SpreadLines(parser, begin) {
        if (parser.stack.env.closing === begin.getName()) {
            delete parser.stack.env.closing;
            const top = parser.stack.Pop();
            const mml = top.toMml();
            const spread = top.getProperty('spread');
            if (mml.isInferred) {
                for (const child of NodeUtil.getChildren(mml)) {
                    MathtoolsUtil.spreadLines(child, spread);
                }
            }
            else {
                MathtoolsUtil.spreadLines(mml, spread);
            }
            parser.Push(mml);
        }
        else {
            const spread = parser.GetDimen(`\\begin{${begin.getName()}}`);
            begin.setProperty('spread', spread);
            begin.setProperty('nestStart', true);
            ParseUtil.checkEqnEnv(parser);
            parser.Push(begin);
        }
    },
    Cases(parser, begin, open, close, style) {
        const array = parser.itemFactory
            .create('array')
            .setProperty('casesEnv', begin.getName());
        array.arraydef = {
            rowspacing: '.2em',
            columnspacing: '1em',
            columnalign: 'left',
        };
        if (style === 'D') {
            array.arraydef.displaystyle = true;
        }
        array.setProperties({ open, close });
        parser.Push(begin);
        return array;
    },
    MathLap(parser, name, pos, cramped) {
        const style = parser.GetBrackets(name, '').trim();
        const mml = parser.create('node', 'mstyle', [
            parser.create('node', 'mpadded', [parser.ParseArg(name)], Object.assign({ width: 0 }, (pos === 'r'
                ? {}
                : { lspace: pos === 'l' ? '-1width' : '-.5width' }))),
        ], { 'data-cramped': cramped });
        MathtoolsUtil.setDisplayLevel(mml, style);
        parser.Push(parser.create('node', 'TeXAtom', [mml]));
    },
    Cramped(parser, name) {
        const style = parser.GetBrackets(name, '').trim();
        const arg = parser.ParseArg(name);
        const mml = parser.create('node', 'mstyle', [arg], {
            'data-cramped': true,
        });
        MathtoolsUtil.setDisplayLevel(mml, style);
        parser.Push(mml);
    },
    MtLap(parser, name, pos) {
        const content = ParseUtil.internalMath(parser, parser.GetArgument(name), 0);
        const mml = parser.create('node', 'mpadded', content, { width: 0 });
        if (pos !== 'r') {
            NodeUtil.setAttribute(mml, 'lspace', pos === 'l' ? '-1width' : '-.5width');
        }
        parser.Push(mml);
    },
    MathMakeBox(parser, name) {
        const width = parser.GetBrackets(name);
        const pos = parser.GetBrackets(name, 'c');
        const mml = parser.create('node', 'mpadded', [parser.ParseArg(name)]);
        if (width) {
            NodeUtil.setAttribute(mml, 'width', width);
        }
        const align = lookup(pos.toLowerCase(), { c: 'center', r: 'right' }, '');
        if (align) {
            NodeUtil.setAttribute(mml, 'data-align', align);
        }
        if (pos.toLowerCase() !== pos) {
            NodeUtil.setAttribute(mml, 'data-overflow', 'linebreak');
        }
        parser.Push(mml);
    },
    MathMBox(parser, name) {
        parser.Push(parser.create('node', 'mrow', [parser.ParseArg(name)]));
    },
    UnderOverBracket(parser, name) {
        const thickness = length2em(parser.GetBrackets(name, '.1em'), 0.1);
        const height = parser.GetBrackets(name, '.2em');
        const arg = parser.GetArgument(name);
        const [pos, accent, border] = name.charAt(1) === 'o'
            ? ['over', 'accent', 'bottom']
            : ['under', 'accentunder', 'top'];
        const t = em(thickness);
        const base = new TexParser(arg, parser.stack.env, parser.configuration).mml();
        const copy = new TexParser(arg, parser.stack.env, parser.configuration).mml();
        const script = parser.create('node', 'mpadded', [parser.create('node', 'mphantom', [copy])], {
            style: `border: ${t} solid; border-${border}: none`,
            height: height,
            depth: 0,
        });
        const node = ParseUtil.underOver(parser, base, script, pos, true);
        const munderover = NodeUtil.getChildAt(NodeUtil.getChildAt(node, 0), 0);
        NodeUtil.setAttribute(munderover, accent, true);
        parser.Push(node);
    },
    Aboxed(parser, name, box = 'boxed', math = true) {
        const top = MathtoolsUtil.checkAlignment(parser, name);
        if (top.row.length % 2 === 1) {
            top.row.push(parser.create('node', 'mtd', []));
        }
        const arg = parser.GetArgument(name);
        const rest = parser.string.substring(parser.i);
        parser.string = arg + '&&\\endAboxed';
        parser.i = 0;
        const left = parser.GetUpTo(name, '&');
        const right = parser.GetUpTo(name, '&');
        parser.GetUpTo(name, '\\endAboxed');
        const [bmath, emath] = math ? ['', ''] : ['$\\displaystyle{', '}$'];
        const tex = ParseUtil.substituteArgs(parser, [left, right], `\\rlap{\\${box}{${bmath}#1{}#2${emath}}}` +
            '\\kern.267em\\phantom{#1}&\\phantom{{}#2}\\kern.267em');
        parser.string = tex + rest;
        parser.i = 0;
    },
    MakeAboxedCommand(parser, name) {
        const star = parser.GetStar();
        const cs = NewcommandUtil.GetCSname(parser, name);
        const box = NewcommandUtil.GetCSname(parser, name + '\\' + cs);
        const handlers = parser.configuration.handlers;
        if (handlers.get(HandlerType.MACRO).lookup(cs)) {
            throw new TexError('AlreadyDefined', '%1 is already defined', '\\' + cs);
        }
        const handler = handlers.retrieve(NewcommandTables.NEW_COMMAND);
        handler.add(cs, new Macro(cs, MathtoolsMethods.Aboxed, [box, star]));
        parser.Push(parser.itemFactory.create('null'));
    },
    ArrowBetweenLines(parser, name) {
        const top = MathtoolsUtil.checkAlignment(parser, name);
        if (top.Size() || top.row.length) {
            throw new TexError('BetweenLines', '%1 must be on a row by itself', name);
        }
        const star = parser.GetStar();
        const symbol = parser.GetBrackets(name, '\\Updownarrow');
        if (star) {
            top.EndEntry();
            top.EndEntry();
        }
        const tex = star ? '\\quad' + symbol : symbol + '\\quad';
        const mml = new TexParser(tex, parser.stack.env, parser.configuration).mml();
        parser.Push(mml);
        top.EndEntry();
        top.EndRow();
    },
    VDotsWithin(parser, name) {
        const arg = '\\mmlToken{mi}{}' + parser.GetArgument(name) + '\\mmlToken{mi}{}';
        const base = new TexParser(arg, parser.stack.env, parser.configuration).mml();
        const mml = parser.create('node', 'mpadded', [
            parser.create('node', 'mpadded', [parser.create('node', 'mo', [parser.create('text', '\u22EE')])], { width: 0, lspace: '-.5width' }),
            parser.create('node', 'mphantom', [base]),
        ], {
            lspace: '.5width',
        });
        parser.Push(mml);
    },
    ShortVDotsWithin(parser, _name) {
        const top = parser.stack.Top();
        const star = parser.GetStar();
        if (top.EndEntry) {
            MathtoolsMethods.FlushSpaceAbove(parser, '\\MTFlushSpaceAbove');
            if (!star) {
                top.EndEntry();
            }
        }
        MathtoolsMethods.VDotsWithin(parser, '\\vdotswithin');
        if (top.EndEntry) {
            if (star) {
                top.EndEntry();
            }
            MathtoolsMethods.FlushSpaceBelow(parser, '\\MTFlushSpaceBelow');
        }
    },
    FlushSpaceAbove(parser, name) {
        const top = MathtoolsUtil.checkAlignment(parser, name);
        if (top.table) {
            top.setProperty('flushspaceabove', top.table.length);
            top.addRowSpacing('-' + parser.options.mathtools['shortvdotsadjustabove']);
        }
    },
    FlushSpaceBelow(parser, name) {
        const top = MathtoolsUtil.checkAlignment(parser, name);
        if (top.table) {
            if (top.Size()) {
                top.EndEntry();
            }
            top.EndRow();
            top.addRowSpacing('-' + parser.options.mathtools['shortvdotsadjustbelow']);
        }
    },
    PairedDelimiters(parser, name, open, close, body = '#1', n = 1, pre = '', post = '') {
        const star = parser.GetStar();
        const size = star ? '' : parser.GetBrackets(name);
        const [left, right, after] = star
            ? ['\\mathopen{\\left', '\\right', '}\\mathclose{}']
            : size
                ? [size + 'l', size + 'r', '']
                : ['', '', ''];
        const delim = star ? '\\middle' : size || '';
        if (n) {
            const args = [];
            for (let i = args.length; i < n; i++) {
                args.push(parser.GetArgument(name));
            }
            pre = ParseUtil.substituteArgs(parser, args, pre);
            body = ParseUtil.substituteArgs(parser, args, body);
            post = ParseUtil.substituteArgs(parser, args, post);
        }
        body = body.replace(/\\delimsize/g, delim);
        parser.string = [
            pre,
            left,
            open,
            body,
            right,
            close,
            after,
            post,
            parser.string.substring(parser.i),
        ].reduce((s, part) => ParseUtil.addArgs(parser, s, part), '');
        parser.i = 0;
        ParseUtil.checkMaxMacros(parser);
    },
    DeclarePairedDelimiter(parser, name) {
        const cs = NewcommandUtil.GetCsNameArgument(parser, name);
        const open = parser.GetArgument(name);
        const close = parser.GetArgument(name);
        MathtoolsUtil.addPairedDelims(parser, cs, [open, close]);
        parser.Push(parser.itemFactory.create('null'));
    },
    DeclarePairedDelimiterX(parser, name) {
        const cs = NewcommandUtil.GetCsNameArgument(parser, name);
        const n = NewcommandUtil.GetArgCount(parser, name);
        const open = parser.GetArgument(name);
        const close = parser.GetArgument(name);
        const body = parser.GetArgument(name);
        MathtoolsUtil.addPairedDelims(parser, cs, [open, close, body, n]);
        parser.Push(parser.itemFactory.create('null'));
    },
    DeclarePairedDelimiterXPP(parser, name) {
        const cs = NewcommandUtil.GetCsNameArgument(parser, name);
        const n = NewcommandUtil.GetArgCount(parser, name);
        const pre = parser.GetArgument(name);
        const open = parser.GetArgument(name);
        const close = parser.GetArgument(name);
        const post = parser.GetArgument(name);
        const body = parser.GetArgument(name);
        MathtoolsUtil.addPairedDelims(parser, cs, [
            open,
            close,
            body,
            n,
            pre,
            post,
        ]);
        parser.Push(parser.itemFactory.create('null'));
    },
    CenterColon(parser, _name, center, force = false, thin = false) {
        const options = parser.options.mathtools;
        let mml = parser.create('token', 'mo', {}, ':');
        if (center && (options['centercolon'] || force)) {
            const dy = options['centercolon-offset'];
            mml = parser.create('node', 'mpadded', [mml], Object.assign({ voffset: dy, height: `+${dy}`, depth: `-${dy}` }, (thin
                ? { width: options['thincolon-dw'], lspace: options['thincolon-dx'] }
                : {})));
        }
        parser.Push(mml);
    },
    Relation(parser, _name, tex, unicode) {
        const options = parser.options.mathtools;
        if (options['use-unicode'] && unicode) {
            parser.Push(parser.create('token', 'mo', { texClass: TEXCLASS.REL }, unicode));
        }
        else {
            tex =
                '\\mathrel{' +
                    tex.replace(/:/g, '\\MTThinColon').replace(/-/g, '\\mathrel{-}') +
                    '}';
            parser.string = ParseUtil.addArgs(parser, tex, parser.string.substring(parser.i));
            parser.i = 0;
        }
    },
    NArrow(parser, _name, c, dy) {
        parser.Push(parser.create('node', 'TeXAtom', [
            parser.create('token', 'mtext', {}, c),
            parser.create('node', 'mpadded', [
                parser.create('node', 'mpadded', [
                    parser.create('node', 'menclose', [
                        parser.create('node', 'mspace', [], {
                            height: '.2em',
                            depth: 0,
                            width: '.4em',
                        }),
                    ], {
                        notation: 'updiagonalstrike',
                        'data-thickness': '.05em',
                        'data-padding': 0,
                    }),
                ], { width: 0, lspace: '-.5width', voffset: dy }),
                parser.create('node', 'mphantom', [
                    parser.create('token', 'mtext', {}, c),
                ]),
            ], { width: 0, lspace: '-.5width' }),
        ], { texClass: TEXCLASS.REL }));
    },
    SplitFrac(parser, name, display) {
        const num = parser.ParseArg(name);
        const den = parser.ParseArg(name);
        parser.Push(parser.create('node', 'mstyle', [
            parser.create('node', 'mfrac', [
                parser.create('node', 'mstyle', [
                    num,
                    parser.create('token', 'mi'),
                    parser.create('token', 'mspace', { width: '1em' }),
                ], { scriptlevel: 0 }),
                parser.create('node', 'mstyle', [
                    parser.create('token', 'mspace', { width: '1em' }),
                    parser.create('token', 'mi'),
                    den,
                ], { scriptlevel: 0 }),
            ], { linethickness: 0, numalign: 'left', denomalign: 'right' }),
        ], { displaystyle: display, scriptlevel: 0 }));
    },
    XMathStrut(parser, name) {
        let dd = parser.GetBrackets(name);
        let dh = parser.GetArgument(name);
        dh = MathtoolsUtil.plusOrMinus(name, dh);
        dd = MathtoolsUtil.plusOrMinus(name, dd || dh);
        parser.Push(parser.create('node', 'TeXAtom', [
            parser.create('node', 'mpadded', [
                parser.create('node', 'mphantom', [
                    parser.create('token', 'mo', { stretchy: false }, '('),
                ]),
            ], { width: 0, height: dh + 'height', depth: dd + 'depth' }),
        ], { texClass: TEXCLASS.ORD }));
    },
    Prescript(parser, name) {
        const sup = MathtoolsUtil.getScript(parser, name, 'sup');
        const sub = MathtoolsUtil.getScript(parser, name, 'sub');
        const base = MathtoolsUtil.getScript(parser, name, 'arg');
        if (NodeUtil.isType(sup, 'none') && NodeUtil.isType(sub, 'none')) {
            parser.Push(base);
            return;
        }
        const mml = parser.create('node', 'mmultiscripts', [base]);
        NodeUtil.getChildren(mml).push(null, null);
        NodeUtil.appendChildren(mml, [
            parser.create('node', 'mprescripts'),
            sub,
            sup,
        ]);
        mml.setProperty('fixPrescript', true);
        parser.Push(mml);
    },
    NewTagForm(parser, name, renew = false) {
        const tags = parser.tags;
        if (!('mtFormats' in tags)) {
            throw new TexError('TagsNotMT', '%1 can only be used with ams or mathtools tags', name);
        }
        const id = parser.GetArgument(name).trim();
        if (!id) {
            throw new TexError('InvalidTagFormID', "Tag form name can't be empty");
        }
        const format = parser.GetBrackets(name, '');
        const left = parser.GetArgument(name);
        const right = parser.GetArgument(name);
        if (!renew && tags.mtFormats.has(id)) {
            throw new TexError('DuplicateTagForm', 'Duplicate tag form: %1', id);
        }
        tags.mtFormats.set(id, [left, right, format]);
        parser.Push(parser.itemFactory.create('null'));
    },
    UseTagForm(parser, name) {
        const tags = parser.tags;
        if (!('mtFormats' in tags)) {
            throw new TexError('TagsNotMT', '%1 can only be used with ams or mathtools tags', name);
        }
        const id = parser.GetArgument(name).trim();
        if (!id) {
            tags.mtCurrent = null;
            parser.Push(parser.itemFactory.create('null'));
            return;
        }
        if (!tags.mtFormats.has(id)) {
            throw new TexError('UndefinedTagForm', 'Undefined tag form: %1', id);
        }
        tags.mtCurrent = tags.mtFormats.get(id);
        parser.Push(parser.itemFactory.create('null'));
    },
    SetOptions(parser, name) {
        const options = parser.options.mathtools;
        if (!options['allow-mathtoolsset']) {
            throw new TexError('ForbiddenMathtoolsSet', '%1 is disabled', name);
        }
        const allowed = {};
        Object.keys(options).forEach((id) => {
            if (id !== 'pariedDelimiters' &&
                id !== 'tagforms' &&
                id !== 'allow-mathtoolsset') {
                allowed[id] = 1;
            }
        });
        const args = parser.GetArgument(name);
        const keys = ParseUtil.keyvalOptions(args, allowed, true);
        for (const id of Object.keys(keys)) {
            if (id === 'legacycolonsymbols' && options[id] !== keys[id]) {
                if (options[id]) {
                    parser.configuration.handlers.remove(LEGACYCONFIG, {});
                }
                else {
                    parser.configuration.handlers.add(LEGACYCONFIG, {}, LEGACYPRIORITY);
                }
            }
            options[id] = keys[id];
        }
        parser.Push(parser.itemFactory.create('null'));
    },
    Array: BaseMethods.Array,
    Macro: BaseMethods.Macro,
    xArrow: AmsMethods.xArrow,
    HandleRef: AmsMethods.HandleRef,
    AmsEqnArray: AmsMethods.AmsEqnArray,
    MacroWithTemplate: NewcommandMethods.MacroWithTemplate,
};
//# sourceMappingURL=MathtoolsMethods.js.map
;// ./mjs/input/tex/mathtools/MathtoolsMappings.js




new CommandMap('mathtools-macros', {
    shoveleft: [MathtoolsMethods.HandleShove, TexConstant.Align.LEFT],
    shoveright: [MathtoolsMethods.HandleShove, TexConstant.Align.RIGHT],
    xleftrightarrow: [MathtoolsMethods.xArrow, 0x2194, 10, 10],
    xLeftarrow: [MathtoolsMethods.xArrow, 0x21d0, 12, 7],
    xRightarrow: [MathtoolsMethods.xArrow, 0x21d2, 7, 12],
    xLeftrightarrow: [MathtoolsMethods.xArrow, 0x21d4, 12, 12],
    xhookleftarrow: [MathtoolsMethods.xArrow, 0x21a9, 10, 5],
    xhookrightarrow: [MathtoolsMethods.xArrow, 0x21aa, 5, 10],
    xmapsto: [MathtoolsMethods.xArrow, 0x21a6, 10, 10],
    xrightharpoondown: [MathtoolsMethods.xArrow, 0x21c1, 5, 10],
    xleftharpoondown: [MathtoolsMethods.xArrow, 0x21bd, 10, 5],
    xrightleftharpoons: [MathtoolsMethods.xArrow, 0x21cc, 10, 10],
    xrightharpoonup: [MathtoolsMethods.xArrow, 0x21c0, 5, 10],
    xleftharpoonup: [MathtoolsMethods.xArrow, 0x21bc, 10, 5],
    xleftrightharpoons: [MathtoolsMethods.xArrow, 0x21cb, 10, 10],
    xlongrightarrow: [MathtoolsMethods.xArrow, 0x27f6, 7, 12, 1.45],
    xlongleftarrow: [MathtoolsMethods.xArrow, 0x27f5, 12, 7, 1.45],
    xLongrightarrow: [MathtoolsMethods.xArrow, 0x27f9, 7, 12, 1.45],
    xLongleftarrow: [MathtoolsMethods.xArrow, 0x27f8, 12, 7, 1.45],
    mathllap: [MathtoolsMethods.MathLap, 'l', false],
    mathrlap: [MathtoolsMethods.MathLap, 'r', false],
    mathclap: [MathtoolsMethods.MathLap, 'c', false],
    clap: [MathtoolsMethods.MtLap, 'c'],
    textllap: [MathtoolsMethods.MtLap, 'l'],
    textrlap: [MathtoolsMethods.MtLap, 'r'],
    textclap: [MathtoolsMethods.MtLap, 'c'],
    cramped: MathtoolsMethods.Cramped,
    crampedllap: [MathtoolsMethods.MathLap, 'l', true],
    crampedrlap: [MathtoolsMethods.MathLap, 'r', true],
    crampedclap: [MathtoolsMethods.MathLap, 'c', true],
    crampedsubstack: [
        MathtoolsMethods.Macro,
        '\\begin{crampedsubarray}{c}#1\\end{crampedsubarray}',
        1,
    ],
    mathmbox: MathtoolsMethods.MathMBox,
    mathmakebox: MathtoolsMethods.MathMakeBox,
    overbracket: MathtoolsMethods.UnderOverBracket,
    underbracket: MathtoolsMethods.UnderOverBracket,
    refeq: MathtoolsMethods.HandleRef,
    MoveEqLeft: [
        MathtoolsMethods.Macro,
        '\\hspace{#1em}&\\hspace{-#1em}',
        1,
        '2',
    ],
    Aboxed: MathtoolsMethods.Aboxed,
    MakeAboxedCommand: MathtoolsMethods.MakeAboxedCommand,
    ArrowBetweenLines: MathtoolsMethods.ArrowBetweenLines,
    vdotswithin: MathtoolsMethods.VDotsWithin,
    shortvdotswithin: MathtoolsMethods.ShortVDotsWithin,
    MTFlushSpaceAbove: MathtoolsMethods.FlushSpaceAbove,
    MTFlushSpaceBelow: MathtoolsMethods.FlushSpaceBelow,
    DeclarePairedDelimiter: MathtoolsMethods.DeclarePairedDelimiter,
    DeclarePairedDelimiterX: MathtoolsMethods.DeclarePairedDelimiterX,
    DeclarePairedDelimiterXPP: MathtoolsMethods.DeclarePairedDelimiterXPP,
    DeclarePairedDelimiters: MathtoolsMethods.DeclarePairedDelimiter,
    DeclarePairedDelimitersX: MathtoolsMethods.DeclarePairedDelimiterX,
    DeclarePairedDelimitersXPP: MathtoolsMethods.DeclarePairedDelimiterXPP,
    vcentercolon: [MathtoolsMethods.CenterColon, true, true],
    ordinarycolon: [MathtoolsMethods.CenterColon, false],
    MTThinColon: [MathtoolsMethods.CenterColon, true, true, true],
    coloneqq: [MathtoolsMethods.Relation, ':=', '\u2254'],
    Coloneqq: [MathtoolsMethods.Relation, '::=', '\u2A74'],
    coloneq: [MathtoolsMethods.Relation, ':=', '\u2254'],
    Coloneq: [MathtoolsMethods.Relation, '::=', '\u2A7A'],
    eqqcolon: [MathtoolsMethods.Relation, '=:', '\u2255'],
    Eqqcolon: [MathtoolsMethods.Relation, '=::'],
    eqcolon: [MathtoolsMethods.Relation, '=:', '\u2255'],
    Eqcolon: [MathtoolsMethods.Relation, '=::'],
    colonapprox: [MathtoolsMethods.Relation, ':\\approx'],
    Colonapprox: [MathtoolsMethods.Relation, '::\\approx'],
    colonsim: [MathtoolsMethods.Relation, ':\\sim'],
    Colonsim: [MathtoolsMethods.Relation, '::\\sim'],
    dblcolon: [MathtoolsMethods.Relation, '::', '\u2237'],
    approxcolon: [MathtoolsMethods.Relation, '\\approx:'],
    Approxcolon: [MathtoolsMethods.Relation, '\\approx::'],
    simcolon: [MathtoolsMethods.Relation, '\\sim:'],
    Simcolon: [MathtoolsMethods.Relation, '\\sim::'],
    colondash: [MathtoolsMethods.Relation, ':-'],
    Colondash: [MathtoolsMethods.Relation, '::-'],
    dashcolon: [MathtoolsMethods.Relation, '-:', '\u2239'],
    Dashcolon: [MathtoolsMethods.Relation, '-::'],
    nuparrow: [MathtoolsMethods.NArrow, '\u2191', '.06em'],
    ndownarrow: [MathtoolsMethods.NArrow, '\u2193', '.25em'],
    bigtimes: [
        MathtoolsMethods.Macro,
        '\\mathop{\\Large\\kern-.1em\\boldsymbol{\\times}\\kern-.1em}',
    ],
    splitfrac: [MathtoolsMethods.SplitFrac, false],
    splitdfrac: [MathtoolsMethods.SplitFrac, true],
    xmathstrut: MathtoolsMethods.XMathStrut,
    prescript: MathtoolsMethods.Prescript,
    newtagform: [MathtoolsMethods.NewTagForm, false],
    renewtagform: [MathtoolsMethods.NewTagForm, true],
    usetagform: MathtoolsMethods.UseTagForm,
    adjustlimits: [
        MathtoolsMethods.MacroWithTemplate,
        '\\mathop{{#1}\\vphantom{{#3}}}_{{#2}\\vphantom{{#4}}}\\mathop{{#3}\\vphantom{{#1}}}_{{#4}\\vphantom{{#2}}}',
        4,
        ,
        '_',
        ,
        '_',
    ],
    mathtoolsset: MathtoolsMethods.SetOptions,
});
new CommandMap('mathtools-legacycolonsymbols', {
    coloneq: [MathtoolsMethods.Relation, ':-'],
    Coloneq: [MathtoolsMethods.Relation, '::-'],
    eqcolon: [MathtoolsMethods.Relation, '-:', '\u2239'],
    Eqcolon: [MathtoolsMethods.Relation, '-::'],
});
new EnvironmentMap('mathtools-environments', ParseMethods.environment, {
    dcases: [MathtoolsMethods.Array, null, '\\{', '', 'll', null, '.2em', 'D'],
    rcases: [MathtoolsMethods.Array, null, '', '\\}', 'll', null, '.2em'],
    drcases: [MathtoolsMethods.Array, null, '', '\\}', 'll', null, '.2em', 'D'],
    'dcases*': [MathtoolsMethods.Cases, null, '{', '', 'D'],
    'rcases*': [MathtoolsMethods.Cases, null, '', '}'],
    'drcases*': [MathtoolsMethods.Cases, null, '', '}', 'D'],
    'cases*': [MathtoolsMethods.Cases, null, '{', ''],
    'matrix*': [MathtoolsMethods.MtMatrix, null, null, null],
    'pmatrix*': [MathtoolsMethods.MtMatrix, null, '(', ')'],
    'bmatrix*': [MathtoolsMethods.MtMatrix, null, '[', ']'],
    'Bmatrix*': [MathtoolsMethods.MtMatrix, null, '\\{', '\\}'],
    'vmatrix*': [MathtoolsMethods.MtMatrix, null, '\\vert', '\\vert'],
    'Vmatrix*': [MathtoolsMethods.MtMatrix, null, '\\Vert', '\\Vert'],
    'smallmatrix*': [MathtoolsMethods.MtSmallMatrix, null, null, null],
    psmallmatrix: [MathtoolsMethods.MtSmallMatrix, null, '(', ')', 'c'],
    'psmallmatrix*': [MathtoolsMethods.MtSmallMatrix, null, '(', ')'],
    bsmallmatrix: [MathtoolsMethods.MtSmallMatrix, null, '[', ']', 'c'],
    'bsmallmatrix*': [MathtoolsMethods.MtSmallMatrix, null, '[', ']'],
    Bsmallmatrix: [MathtoolsMethods.MtSmallMatrix, null, '\\{', '\\}', 'c'],
    'Bsmallmatrix*': [MathtoolsMethods.MtSmallMatrix, null, '\\{', '\\}'],
    vsmallmatrix: [MathtoolsMethods.MtSmallMatrix, null, '\\vert', '\\vert', 'c'],
    'vsmallmatrix*': [MathtoolsMethods.MtSmallMatrix, null, '\\vert', '\\vert'],
    Vsmallmatrix: [MathtoolsMethods.MtSmallMatrix, null, '\\Vert', '\\Vert', 'c'],
    'Vsmallmatrix*': [MathtoolsMethods.MtSmallMatrix, null, '\\Vert', '\\Vert'],
    crampedsubarray: [
        MathtoolsMethods.Array,
        null,
        null,
        null,
        null,
        '0em',
        '0.1em',
        "S'",
        1,
    ],
    multlined: MathtoolsMethods.MtMultlined,
    spreadlines: [MathtoolsMethods.SpreadLines, true],
    lgathered: [
        MathtoolsMethods.AmsEqnArray,
        null,
        null,
        null,
        'l',
        't',
        null,
        '.5em',
        'D',
    ],
    rgathered: [
        MathtoolsMethods.AmsEqnArray,
        null,
        null,
        null,
        'r',
        't',
        null,
        '.5em',
        'D',
    ],
});
new DelimiterMap('mathtools-delimiters', ParseMethods.delimiter, {
    '\\lparen': '(',
    '\\rparen': ')',
});
new CommandMap('mathtools-characters', {
    ':': [MathtoolsMethods.CenterColon, true],
});
//# sourceMappingURL=MathtoolsMappings.js.map
;// ./components/mjs/input/tex-base/lib/input/tex/Tags.js
const Tags_def = MathJax._.input.tex.Tags;
const Label = Tags_def.Label;
const TagInfo = Tags_def.TagInfo;
const AbstractTags = Tags_def.AbstractTags;
const NoTags = Tags_def.NoTags;
const AllTags = Tags_def.AllTags;
const TagsFactory = Tags_def.TagsFactory;

;// ./mjs/input/tex/mathtools/MathtoolsTags.js


let tagID = 0;
function MathtoolsTagFormat(config, jax) {
    const tags = jax.parseOptions.options.tags;
    if (tags !== 'base' && Object.hasOwn(config.tags, tags)) {
        TagsFactory.add(tags, config.tags[tags]);
    }
    const TagClass = TagsFactory.create(jax.parseOptions.options.tags)
        .constructor;
    class TagFormat extends TagClass {
        constructor() {
            super();
            this.mtFormats = new Map();
            this.mtCurrent = null;
            const forms = jax.parseOptions.options.mathtools.tagforms;
            for (const form of Object.keys(forms)) {
                if (!Array.isArray(forms[form]) || forms[form].length !== 3) {
                    throw new TexError('InvalidTagFormDef', 'The tag form definition for "%1" should be an array of three strings', form);
                }
                this.mtFormats.set(form, forms[form]);
            }
        }
        formatTag(tag) {
            if (this.mtCurrent) {
                const [left, right, format] = this.mtCurrent;
                return format
                    ? `${left}${format}{${tag}}${right}`
                    : `${left}${tag}${right}`;
            }
            return super.formatTag(tag);
        }
    }
    tagID++;
    const tagName = 'MathtoolsTags-' + tagID;
    TagsFactory.add(tagName, TagFormat);
    jax.parseOptions.options.tags = tagName;
}
//# sourceMappingURL=MathtoolsTags.js.map
;// ./components/mjs/input/tex/extensions/ams/lib/input/tex/ams/AmsItems.js
const AmsItems_def = MathJax._.input.tex.ams.AmsItems;
const MultlineItem = AmsItems_def.MultlineItem;
const FlalignItem = AmsItems_def.FlalignItem;

;// ./mjs/input/tex/mathtools/MathtoolsItems.js



class MultlinedItem extends MultlineItem {
    get kind() {
        return 'multlined';
    }
    EndTable() {
        if (this.Size() || this.row.length) {
            this.EndEntry();
            this.EndRow();
        }
        if (this.table.length > 1) {
            const options = this.factory.configuration.options.mathtools;
            const gap = options['multlined-gap'];
            const firstskip = options['firstline-afterskip'] || gap;
            const lastskip = options['lastline-preskip'] || gap;
            const first = NodeUtil.getChildren(this.table[0])[0];
            if (NodeUtil.getAttribute(first, 'columnalign') !== TexConstant.Align.RIGHT) {
                first.appendChild(this.create('node', 'mspace', [], { width: firstskip }));
            }
            const last = NodeUtil.getChildren(this.table[this.table.length - 1])[0];
            if (NodeUtil.getAttribute(last, 'columnalign') !== TexConstant.Align.LEFT) {
                const top = NodeUtil.getChildren(last)[0];
                top.childNodes.unshift(null);
                const space = this.create('node', 'mspace', [], { width: lastskip });
                NodeUtil.setChild(top, 0, space);
            }
        }
        super.EndTable.call(this);
    }
}
//# sourceMappingURL=MathtoolsItems.js.map
;// ./mjs/input/tex/mathtools/MathtoolsConfiguration.js











function configMathtools(config, jax) {
    NewcommandConfig(config, jax);
    const parser = jax.parseOptions;
    const pairedDelims = parser.options.mathtools.pairedDelimiters;
    const handler = config.handlers.retrieve(NewcommandTables.NEW_COMMAND);
    for (const [cs, args] of Object.entries(pairedDelims)) {
        handler.add(cs, new Macro(cs, MathtoolsMethods.PairedDelimiters, args));
    }
    if (parser.options.mathtools.legacycolonsymbols) {
        config.handlers.add(LEGACYCONFIG, {}, LEGACYPRIORITY);
    }
    MathtoolsTagFormat(config, jax);
}
function fixPrescripts({ data }) {
    for (const node of data.getList('mmultiscripts')) {
        if (!node.getProperty('fixPrescript'))
            continue;
        const childNodes = NodeUtil.getChildren(node);
        let n = 0;
        for (const i of [1, 2]) {
            if (!childNodes[i]) {
                NodeUtil.setChild(node, i, data.nodeFactory.create('node', 'none'));
                n++;
            }
        }
        if (n === 2) {
            childNodes.splice(1, 2);
        }
    }
}
const MathtoolsConfiguration = Configuration.create('mathtools', {
    [ConfigurationType.HANDLER]: {
        macro: ['mathtools-macros', 'mathtools-delimiters'],
        [HandlerType.ENVIRONMENT]: ['mathtools-environments'],
        [HandlerType.DELIMITER]: ['mathtools-delimiters'],
        [HandlerType.CHARACTER]: ['mathtools-characters'],
    },
    [ConfigurationType.ITEMS]: {
        [MultlinedItem.prototype.kind]: MultlinedItem,
    },
    [ConfigurationType.CONFIG]: configMathtools,
    [ConfigurationType.POSTPROCESSORS]: [[fixPrescripts, -6]],
    [ConfigurationType.OPTIONS]: {
        mathtools: {
            'multlined-gap': '1em',
            'multlined-pos': 'c',
            'multlined-width': '',
            'firstline-afterskip': '',
            'lastline-preskip': '',
            'smallmatrix-align': 'c',
            'shortvdotsadjustabove': '.2em',
            'shortvdotsadjustbelow': '.2em',
            'centercolon': false,
            'centercolon-offset': '.04em',
            'thincolon-dx': '-.04em',
            'thincolon-dw': '-.08em',
            'use-unicode': false,
            'legacycolonsymbols': false,
            'prescript-sub-format': '',
            'prescript-sup-format': '',
            'prescript-arg-format': '',
            'allow-mathtoolsset': true,
            pairedDelimiters: expandable({}),
            tagforms: expandable({}),
        }
    },
});
//# sourceMappingURL=MathtoolsConfiguration.js.map
;// ./components/mjs/input/tex/extensions/mathtools/lib/mathtools.js









if (MathJax.loader) {
  MathJax.loader.checkVersion('[tex]/mathtools', VERSION, 'tex-extension');
}

combineWithMathJax({_: {
  input: {
    tex: {
      mathtools: {
        MathtoolsConfiguration: MathtoolsConfiguration_namespaceObject,
        MathtoolsItems: MathtoolsItems_namespaceObject,
        MathtoolsMethods: MathtoolsMethods_namespaceObject,
        MathtoolsTags: MathtoolsTags_namespaceObject,
        MathtoolsUtil: MathtoolsUtil_namespaceObject
      }
    }
  }
}});

;// ./components/mjs/input/tex/extensions/mathtools/mathtools.js


/******/ })()
;