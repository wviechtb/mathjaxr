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

// NAMESPACE OBJECT: ./mjs/input/tex/ams/AmsItems.js
var AmsItems_namespaceObject = {};
__webpack_require__.r(AmsItems_namespaceObject);
__webpack_require__.d(AmsItems_namespaceObject, {
  FlalignItem: () => (FlalignItem),
  MultlineItem: () => (MultlineItem)
});

// NAMESPACE OBJECT: ./mjs/input/tex/ams/AmsMethods.js
var AmsMethods_namespaceObject = {};
__webpack_require__.r(AmsMethods_namespaceObject);
__webpack_require__.d(AmsMethods_namespaceObject, {
  AmsMethods: () => (AmsMethods)
});

// NAMESPACE OBJECT: ./mjs/input/tex/ams/AmsConfiguration.js
var AmsConfiguration_namespaceObject = {};
__webpack_require__.r(AmsConfiguration_namespaceObject);
__webpack_require__.d(AmsConfiguration_namespaceObject, {
  AmsConfiguration: () => (AmsConfiguration),
  AmsTags: () => (AmsTags)
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

;// ./components/mjs/input/tex-base/lib/input/tex/ParseUtil.js
const ParseUtil_def = MathJax._.input.tex.ParseUtil;
const KeyValueDef = ParseUtil_def.KeyValueDef;
const KeyValueTypes = ParseUtil_def.KeyValueTypes;
const ParseUtil = ParseUtil_def.ParseUtil;

;// ./components/mjs/input/tex-base/lib/input/tex/NodeUtil.js
const NodeUtil_def = MathJax._.input.tex.NodeUtil;
/* harmony default export */ const NodeUtil = (NodeUtil_def.default);

;// ./components/mjs/input/tex-base/lib/input/tex/TexError.js
const TexError_def = MathJax._.input.tex.TexError;
/* harmony default export */ const TexError = (TexError_def.default);

;// ./components/mjs/input/tex-base/lib/input/tex/TexConstants.js
const TexConstants_def = MathJax._.input.tex.TexConstants;
const TexConstant = TexConstants_def.TexConstant;

;// ./mjs/input/tex/ams/AmsItems.js





class MultlineItem extends ArrayItem {
    constructor(factory, ...args) {
        super(factory);
        this.factory.configuration.tags.start('multline', true, args[0]);
    }
    get kind() {
        return 'multline';
    }
    EndEntry() {
        if (this.table.length) {
            ParseUtil.fixInitialMO(this.factory.configuration, this.nodes);
        }
        const shove = this.getProperty('shove');
        const mtd = this.create('node', 'mtd', this.nodes, shove ? { columnalign: shove } : {});
        this.setProperty('shove', null);
        this.row.push(mtd);
        this.Clear();
    }
    EndRow() {
        if (this.row.length !== 1) {
            throw new TexError('MultlineRowsOneCol', 'The rows within the %1 environment must have exactly one column', 'multline');
        }
        const row = this.create('node', 'mtr', this.row);
        this.table.push(row);
        this.row = [];
    }
    EndTable() {
        super.EndTable();
        if (this.table.length) {
            const m = this.table.length - 1;
            let label = -1;
            if (!NodeUtil.getAttribute(NodeUtil.getChildren(this.table[0])[0], 'columnalign')) {
                NodeUtil.setAttribute(NodeUtil.getChildren(this.table[0])[0], 'columnalign', TexConstant.Align.LEFT);
            }
            if (!NodeUtil.getAttribute(NodeUtil.getChildren(this.table[m])[0], 'columnalign')) {
                NodeUtil.setAttribute(NodeUtil.getChildren(this.table[m])[0], 'columnalign', TexConstant.Align.RIGHT);
            }
            const tag = this.factory.configuration.tags.getTag();
            if (tag) {
                label =
                    this.arraydef.side === TexConstant.Align.LEFT
                        ? 0
                        : this.table.length - 1;
                const mtr = this.table[label];
                const mlabel = this.create('node', 'mlabeledtr', [tag].concat(NodeUtil.getChildren(mtr)));
                NodeUtil.copyAttributes(mtr, mlabel);
                this.table[label] = mlabel;
            }
        }
        this.factory.configuration.tags.end();
    }
}
class FlalignItem extends EqnArrayItem {
    get kind() {
        return 'flalign';
    }
    constructor(factory, name, numbered, padded, center) {
        super(factory);
        this.name = name;
        this.numbered = numbered;
        this.padded = padded;
        this.center = center;
        this.factory.configuration.tags.start(name, numbered, numbered);
    }
    EndEntry() {
        super.EndEntry();
        const n = this.getProperty('xalignat');
        if (!n)
            return;
        if (this.row.length > n) {
            throw new TexError('XalignOverflow', 'Extra %1 in row of %2', '&', this.name);
        }
    }
    EndRow() {
        let cell;
        const row = this.row;
        const n = this.getProperty('xalignat');
        while (row.length < n) {
            row.push(this.create('node', 'mtd'));
        }
        this.row = [];
        if (this.padded) {
            this.row.push(this.create('node', 'mtd'));
        }
        while ((cell = row.shift())) {
            this.row.push(cell);
            cell = row.shift();
            if (cell)
                this.row.push(cell);
            if (row.length || this.padded) {
                this.row.push(this.create('node', 'mtd'));
            }
        }
        if (this.row.length > this.maxrow) {
            this.maxrow = this.row.length;
        }
        super.EndRow();
        const mtr = this.table[this.table.length - 1];
        if (this.getProperty('zeroWidthLabel') && mtr.isKind('mlabeledtr')) {
            const mtd = NodeUtil.getChildren(mtr)[0];
            const side = this.factory.configuration.options['tagSide'];
            const def = Object.assign({ width: 0 }, (side === 'right' ? { lspace: '-1width' } : {}));
            const mpadded = this.create('node', 'mpadded', NodeUtil.getChildren(mtd), def);
            mtd.setChildren([mpadded]);
        }
    }
    EndTable() {
        super.EndTable();
        if (this.center) {
            if (this.maxrow <= 2) {
                const def = this.arraydef;
                delete def.width;
                delete this.global.indentalign;
            }
        }
    }
}
//# sourceMappingURL=AmsItems.js.map
;// ./components/mjs/input/tex-base/lib/input/tex/Tags.js
const Tags_def = MathJax._.input.tex.Tags;
const Label = Tags_def.Label;
const TagInfo = Tags_def.TagInfo;
const AbstractTags = Tags_def.AbstractTags;
const NoTags = Tags_def.NoTags;
const AllTags = Tags_def.AllTags;
const TagsFactory = Tags_def.TagsFactory;

;// ./components/mjs/input/tex-base/lib/input/tex/UnitUtil.js
const UnitUtil_def = MathJax._.input.tex.UnitUtil;
const UnitUtil = UnitUtil_def.UnitUtil;

;// ./components/mjs/input/tex-base/lib/input/tex/ParseMethods.js
const ParseMethods_def = MathJax._.input.tex.ParseMethods;
/* harmony default export */ const ParseMethods = (ParseMethods_def.default);

;// ./components/mjs/input/tex-base/lib/input/tex/TexParser.js
const TexParser_def = MathJax._.input.tex.TexParser;
/* harmony default export */ const TexParser = (TexParser_def.default);

;// ./components/mjs/input/tex-base/lib/input/tex/base/BaseMethods.js
const BaseMethods_def = MathJax._.input.tex.base.BaseMethods;
const splitAlignArray = BaseMethods_def.splitAlignArray;
/* harmony default export */ const BaseMethods = (BaseMethods_def.default);

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

;// ./components/mjs/input/tex/extensions/newcommand/lib/input/tex/newcommand/NewcommandUtil.js
const NewcommandUtil_def = MathJax._.input.tex.newcommand.NewcommandUtil;
const NewcommandTables = NewcommandUtil_def.NewcommandTables;
const NewcommandPriority = NewcommandUtil_def.NewcommandPriority;
const NewcommandUtil = NewcommandUtil_def.NewcommandUtil;

;// ./mjs/input/tex/ams/AmsMethods.js











function splitSideSet(mml) {
    if (!mml || (mml.isInferred && mml.childNodes.length === 0)) {
        return [null, null];
    }
    if (mml.isKind('msubsup') && checkSideSetBase(mml)) {
        return [mml, null];
    }
    const child = NodeUtil.getChildAt(mml, 0);
    if (!(mml.isInferred && child && checkSideSetBase(child))) {
        return [null, mml];
    }
    mml.childNodes.splice(0, 1);
    return [child, mml];
}
function checkSideSetBase(mml) {
    const base = mml.childNodes[0];
    return (base && base.isKind('mi') && base.getText() === '');
}
const AmsMethods = {
    AmsEqnArray(parser, begin, numbered, taggable, align, balign, spacing, style) {
        const args = parser.GetBrackets('\\begin{' + begin.getName() + '}');
        const array = BaseMethods.EqnArray(parser, begin, numbered, taggable, align, balign, spacing, style);
        return ParseUtil.setArrayAlign(array, args, parser);
    },
    AlignAt(parser, begin, numbered, taggable) {
        const name = begin.getName();
        let valign;
        let align = '';
        let balign = '';
        const spacing = [];
        if (!taggable) {
            valign = parser.GetBrackets('\\begin{' + name + '}');
        }
        const n = parser.GetArgument('\\begin{' + name + '}');
        if (n.match(/[^0-9]/)) {
            throw new TexError('PositiveIntegerArg', 'Argument to %1 must be a positive integer', '\\begin{' + name + '}');
        }
        let count = parseInt(n, 10);
        while (count > 0) {
            align += 'rl';
            balign += 'bt';
            spacing.push('0em 0em');
            count--;
        }
        const spaceStr = spacing.join(' ');
        if (taggable) {
            return AmsMethods.EqnArray(parser, begin, numbered, taggable, align, balign, spaceStr);
        }
        const array = AmsMethods.EqnArray(parser, begin, numbered, taggable, align, balign, spaceStr);
        return ParseUtil.setArrayAlign(array, valign, parser);
    },
    Multline(parser, begin, numbered) {
        ParseUtil.checkEqnEnv(parser);
        parser.Push(begin);
        const padding = parser.options.ams['multlineIndent'];
        const item = parser.itemFactory.create('multline', numbered, parser.stack);
        item.arraydef = {
            displaystyle: true,
            rowspacing: '.5em',
            columnspacing: '100%',
            width: parser.options.ams['multlineWidth'],
            side: parser.options['tagSide'],
            minlabelspacing: parser.options['tagIndent'],
            'data-array-padding': `${padding} ${padding}`,
            'data-width-includes-label': true,
        };
        return item;
    },
    XalignAt(parser, begin, numbered, padded) {
        const n = parser.GetArgument('\\begin{' + begin.getName() + '}');
        if (n.match(/[^0-9]/)) {
            throw new TexError('PositiveIntegerArg', 'Argument to %1 must be a positive integer', '\\begin{' + begin.getName() + '}');
        }
        const align = padded ? 'crl' : 'rlc';
        const balign = padded ? 'mbt' : 'btm';
        const width = padded ? 'fit auto auto' : 'auto auto fit';
        const item = AmsMethods.FlalignArray(parser, begin, numbered, padded, false, align, balign, width, true);
        item.setProperty('xalignat', 2 * parseInt(n));
        return item;
    },
    FlalignArray(parser, begin, numbered, padded, center, align, balign, width, zeroWidthLabel = false) {
        ParseUtil.checkEqnEnv(parser);
        parser.Push(begin);
        align = align
            .split('')
            .join(' ')
            .replace(/r/g, 'right')
            .replace(/l/g, 'left')
            .replace(/c/g, 'center');
        balign = splitAlignArray(balign);
        const item = parser.itemFactory.create('flalign', begin.getName(), numbered, padded, center, parser.stack);
        item.arraydef = {
            width: '100%',
            displaystyle: true,
            columnalign: align,
            columnspacing: '0em',
            columnwidth: width,
            rowspacing: '3pt',
            'data-break-align': balign,
            side: parser.options['tagSide'],
            minlabelspacing: zeroWidthLabel ? '0' : parser.options['tagIndent'],
            'data-width-includes-label': true,
        };
        item.setProperty('zeroWidthLabel', zeroWidthLabel);
        return item;
    },
    HandleDeclareOp(parser, name) {
        const star = parser.GetStar() ? '*' : '';
        const cs = NewcommandUtil.GetCsNameArgument(parser, name);
        const op = parser.GetArgument(name);
        NewcommandUtil.addMacro(parser, cs, AmsMethods.Macro, [
            `\\operatorname${star}{${op}}`,
        ]);
        parser.Push(parser.itemFactory.create('null'));
    },
    HandleOperatorName(parser, name) {
        const star = parser.GetStar();
        const op = UnitUtil.trimSpaces(parser.GetArgument(name));
        let mml = new TexParser(op, Object.assign(Object.assign({}, parser.stack.env), { font: TexConstant.Variant.NORMAL, multiLetterIdentifiers: parser.options.ams.operatornamePattern, operatorLetters: true }), parser.configuration).mml();
        if (!mml.isKind('mi')) {
            mml = parser.create('node', 'TeXAtom', [mml]);
        }
        NodeUtil.setProperties(mml, {
            movesupsub: star,
            movablelimits: true,
            texClass: TEXCLASS.OP,
        });
        if (!star) {
            const c = parser.GetNext();
            const i = parser.i;
            if (c === '\\' && ++parser.i && parser.GetCS() !== 'limits') {
                parser.i = i;
            }
        }
        parser.Push(parser.itemFactory.create('fn', mml));
    },
    SideSet(parser, name) {
        const [preScripts, preRest] = splitSideSet(parser.ParseArg(name));
        const [postScripts, postRest] = splitSideSet(parser.ParseArg(name));
        const base = parser.ParseArg(name);
        let mml = base;
        if (preScripts) {
            if (preRest) {
                preScripts.replaceChild(parser.create('node', 'mphantom', [
                    parser.create('node', 'mpadded', [ParseUtil.copyNode(base, parser)], { width: 0 }),
                ]), NodeUtil.getChildAt(preScripts, 0));
            }
            else {
                mml = parser.create('node', 'mmultiscripts', [base]);
                if (postScripts) {
                    NodeUtil.appendChildren(mml, [
                        NodeUtil.getChildAt(postScripts, 1) ||
                            parser.create('node', 'none'),
                        NodeUtil.getChildAt(postScripts, 2) ||
                            parser.create('node', 'none'),
                    ]);
                }
                NodeUtil.setProperty(mml, 'scriptalign', 'left');
                NodeUtil.appendChildren(mml, [
                    parser.create('node', 'mprescripts'),
                    NodeUtil.getChildAt(preScripts, 1) || parser.create('node', 'none'),
                    NodeUtil.getChildAt(preScripts, 2) || parser.create('node', 'none'),
                ]);
            }
        }
        if (postScripts && mml === base) {
            postScripts.replaceChild(base, NodeUtil.getChildAt(postScripts, 0));
            mml = postScripts;
        }
        const mrow = parser.create('node', 'TeXAtom', [], {
            texClass: TEXCLASS.OP,
            movesupsub: true,
            movablelimits: true,
        });
        if (preRest) {
            if (preScripts) {
                mrow.appendChild(preScripts);
            }
            mrow.appendChild(preRest);
        }
        mrow.appendChild(mml);
        if (postRest) {
            mrow.appendChild(postRest);
        }
        parser.Push(mrow);
    },
    operatorLetter(parser, c) {
        return parser.stack.env.operatorLetters
            ? ParseMethods.variable(parser, c)
            : false;
    },
    MultiIntegral(parser, name, integral) {
        let next = parser.GetNext();
        if (next === '\\') {
            const i = parser.i;
            next = parser.GetArgument(name);
            parser.i = i;
            if (next === '\\limits') {
                integral = '\\!\\!\\mathop{\\,\\,' + integral + '}';
            }
        }
        parser.string = integral + ' ' + parser.string.slice(parser.i);
        parser.i = 0;
    },
    xArrow(parser, name, chr, l, r, m = 0) {
        const def = {
            width: '+' + UnitUtil.em((l + r) / 18),
            lspace: UnitUtil.em(l / 18),
        };
        const bot = parser.GetBrackets(name);
        const first = parser.ParseArg(name);
        const dstrut = parser.create('node', 'mspace', [], { depth: '.2em' });
        let arrow = parser.create('token', 'mo', { stretchy: true, texClass: TEXCLASS.REL }, String.fromCodePoint(chr));
        if (m) {
            arrow.attributes.set('minsize', UnitUtil.em(m));
        }
        arrow = parser.create('node', 'mstyle', [arrow], { scriptlevel: 0 });
        const mml = parser.create('node', 'munderover', [arrow]);
        let mpadded = parser.create('node', 'mpadded', [first, dstrut], def);
        NodeUtil.setAttribute(mpadded, 'voffset', '-.2em');
        NodeUtil.setAttribute(mpadded, 'height', '-.2em');
        NodeUtil.setChild(mml, mml.over, mpadded);
        if (bot) {
            const bottom = new TexParser(bot, parser.stack.env, parser.configuration).mml();
            const bstrut = parser.create('node', 'mspace', [], { height: '.75em' });
            mpadded = parser.create('node', 'mpadded', [bottom, bstrut], def);
            NodeUtil.setAttribute(mpadded, 'voffset', '.15em');
            NodeUtil.setAttribute(mpadded, 'depth', '-.15em');
            NodeUtil.setChild(mml, mml.under, mpadded);
        }
        NodeUtil.setProperty(mml, 'subsupOK', true);
        parser.Push(mml);
    },
    HandleShove(parser, _name, shove) {
        const top = parser.stack.Top();
        if (top.kind !== 'multline') {
            throw new TexError('CommandOnlyAllowedInEnv', '%1 only allowed in %2 environment', parser.currentCS, 'multline');
        }
        if (top.Size()) {
            throw new TexError('CommandAtTheBeginingOfLine', '%1 must come at the beginning of the line', parser.currentCS);
        }
        top.setProperty('shove', shove);
    },
    CFrac(parser, name) {
        let lr = UnitUtil.trimSpaces(parser.GetBrackets(name, ''));
        const num = parser.GetArgument(name);
        const den = parser.GetArgument(name);
        const lrMap = {
            l: TexConstant.Align.LEFT,
            r: TexConstant.Align.RIGHT,
            '': '',
        };
        const numNode = new TexParser('\\strut\\textstyle{' + num + '}', parser.stack.env, parser.configuration).mml();
        const denNode = new TexParser('\\strut\\textstyle{' + den + '}', parser.stack.env, parser.configuration).mml();
        const frac = parser.create('node', 'mfrac', [numNode, denNode]);
        lr = lrMap[lr];
        if (lr == null) {
            throw new TexError('IllegalAlign', 'Illegal alignment specified in %1', parser.currentCS);
        }
        if (lr) {
            NodeUtil.setProperties(frac, { numalign: lr, denomalign: lr });
        }
        parser.Push(frac);
    },
    Genfrac(parser, name, left, right, thick, style) {
        if (left == null) {
            left = parser.GetDelimiterArg(name);
        }
        if (right == null) {
            right = parser.GetDelimiterArg(name);
        }
        if (thick == null) {
            thick = parser.GetArgument(name);
        }
        if (style == null) {
            style = UnitUtil.trimSpaces(parser.GetArgument(name));
        }
        const num = parser.ParseArg(name);
        const den = parser.ParseArg(name);
        let frac = parser.create('node', 'mfrac', [num, den]);
        if (thick !== '') {
            NodeUtil.setAttribute(frac, 'linethickness', thick);
        }
        if (left || right) {
            NodeUtil.setProperty(frac, 'withDelims', true);
            frac = ParseUtil.fixedFence(parser.configuration, left, frac, right);
        }
        if (style !== '') {
            const styleDigit = parseInt(style, 10);
            const styleAlpha = ['D', 'T', 'S', 'SS'][styleDigit];
            if (styleAlpha == null) {
                throw new TexError('BadMathStyleFor', 'Bad math style for %1', parser.currentCS);
            }
            frac = parser.create('node', 'mstyle', [frac]);
            if (styleAlpha === 'D') {
                NodeUtil.setProperties(frac, { displaystyle: true, scriptlevel: 0 });
            }
            else {
                NodeUtil.setProperties(frac, {
                    displaystyle: false,
                    scriptlevel: styleDigit - 1,
                });
            }
        }
        parser.Push(frac);
    },
    HandleTag(parser, name) {
        if (!parser.tags.currentTag.taggable && parser.tags.env) {
            throw new TexError('CommandNotAllowedInEnv', '%1 not allowed in %2 environment', parser.currentCS, parser.tags.env);
        }
        if (parser.tags.currentTag.tag) {
            throw new TexError('MultipleCommand', 'Multiple %1', parser.currentCS);
        }
        const star = parser.GetStar();
        const tagId = UnitUtil.trimSpaces(parser.GetArgument(name));
        parser.tags.tag(tagId, star);
        parser.Push(parser.itemFactory.create('null'));
    },
    HandleNoTag: BaseMethods.HandleNoTag,
    HandleRef: BaseMethods.HandleRef,
    Macro: BaseMethods.Macro,
    Accent: BaseMethods.Accent,
    Tilde: BaseMethods.Tilde,
    Array: BaseMethods.Array,
    Spacer: BaseMethods.Spacer,
    NamedOp: BaseMethods.NamedOp,
    EqnArray: BaseMethods.EqnArray,
    Equation: BaseMethods.Equation,
};
//# sourceMappingURL=AmsMethods.js.map
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

;// ./mjs/input/tex/ams/AmsMappings.js







new CharacterMap('AMSmath-mathchar0mo', ParseMethods.mathchar0mo, {
    iiiint: ['\u2A0C', { texClass: TEXCLASS.OP }],
});
new RegExpMap('AMSmath-operatorLetter', AmsMethods.operatorLetter, /[-*]/i);
new CommandMap('AMSmath-macros', {
    mathring: [AmsMethods.Accent, '02DA'],
    nobreakspace: AmsMethods.Tilde,
    negmedspace: [AmsMethods.Spacer, MATHSPACE.negativemediummathspace],
    negthickspace: [AmsMethods.Spacer, MATHSPACE.negativethickmathspace],
    idotsint: [AmsMethods.MultiIntegral, '\\int\\cdots\\int'],
    dddot: [AmsMethods.Accent, '20DB'],
    ddddot: [AmsMethods.Accent, '20DC'],
    sideset: AmsMethods.SideSet,
    boxed: [AmsMethods.Macro, '\\fbox{$\\displaystyle{#1}$}', 1],
    tag: AmsMethods.HandleTag,
    notag: AmsMethods.HandleNoTag,
    eqref: [AmsMethods.HandleRef, true],
    substack: [AmsMethods.Macro, '\\begin{subarray}{c}#1\\end{subarray}', 1],
    injlim: [AmsMethods.NamedOp, 'inj&thinsp;lim'],
    projlim: [AmsMethods.NamedOp, 'proj&thinsp;lim'],
    varliminf: [AmsMethods.Macro, '\\mathop{\\underline{\\mmlToken{mi}{lim}}}'],
    varlimsup: [AmsMethods.Macro, '\\mathop{\\overline{\\mmlToken{mi}{lim}}}'],
    varinjlim: [
        AmsMethods.Macro,
        '\\mathop{\\underrightarrow{\\mmlToken{mi}{lim}}}',
    ],
    varprojlim: [
        AmsMethods.Macro,
        '\\mathop{\\underleftarrow{\\mmlToken{mi}{lim}}}',
    ],
    DeclareMathOperator: AmsMethods.HandleDeclareOp,
    operatorname: AmsMethods.HandleOperatorName,
    genfrac: AmsMethods.Genfrac,
    frac: [AmsMethods.Genfrac, '', '', '', ''],
    tfrac: [AmsMethods.Genfrac, '', '', '', '1'],
    dfrac: [AmsMethods.Genfrac, '', '', '', '0'],
    binom: [AmsMethods.Genfrac, '(', ')', '0', ''],
    tbinom: [AmsMethods.Genfrac, '(', ')', '0', '1'],
    dbinom: [AmsMethods.Genfrac, '(', ')', '0', '0'],
    cfrac: AmsMethods.CFrac,
    shoveleft: [AmsMethods.HandleShove, TexConstant.Align.LEFT],
    shoveright: [AmsMethods.HandleShove, TexConstant.Align.RIGHT],
    xrightarrow: [AmsMethods.xArrow, 0x2192, 5, 10],
    xleftarrow: [AmsMethods.xArrow, 0x2190, 10, 5],
});
new EnvironmentMap('AMSmath-environment', ParseMethods.environment, {
    'equation*': [AmsMethods.Equation, null, false],
    'eqnarray*': [
        AmsMethods.EqnArray,
        null,
        false,
        true,
        'rcl',
        'bmt',
        ParseUtil.cols(0, MATHSPACE.thickmathspace),
        '.5em',
    ],
    align: [
        AmsMethods.EqnArray,
        null,
        true,
        true,
        'rl',
        'bt',
        ParseUtil.cols(0, 2),
    ],
    'align*': [
        AmsMethods.EqnArray,
        null,
        false,
        true,
        'rl',
        'bt',
        ParseUtil.cols(0, 2),
    ],
    multline: [AmsMethods.Multline, null, true],
    'multline*': [AmsMethods.Multline, null, false],
    split: [
        AmsMethods.EqnArray,
        null,
        false,
        false,
        'rl',
        'bt',
        ParseUtil.cols(0),
    ],
    gather: [AmsMethods.EqnArray, null, true, true, 'c', 'm'],
    'gather*': [AmsMethods.EqnArray, null, false, true, 'c', 'm'],
    alignat: [AmsMethods.AlignAt, null, true, true],
    'alignat*': [AmsMethods.AlignAt, null, false, true],
    alignedat: [AmsMethods.AlignAt, null, false, false],
    aligned: [
        AmsMethods.AmsEqnArray,
        null,
        null,
        null,
        'rl',
        'bt',
        ParseUtil.cols(0, 2),
        '.5em',
        'D',
    ],
    gathered: [
        AmsMethods.AmsEqnArray,
        null,
        null,
        null,
        'c',
        'm',
        null,
        '.5em',
        'D',
    ],
    xalignat: [AmsMethods.XalignAt, null, true, true],
    'xalignat*': [AmsMethods.XalignAt, null, false, true],
    xxalignat: [AmsMethods.XalignAt, null, false, false],
    flalign: [
        AmsMethods.FlalignArray,
        null,
        true,
        false,
        true,
        'rlc',
        'btm',
        'auto auto fit',
    ],
    'flalign*': [
        AmsMethods.FlalignArray,
        null,
        false,
        false,
        true,
        'rlc',
        'btm',
        'auto auto fit',
    ],
    subarray: [
        AmsMethods.Array,
        null,
        null,
        null,
        null,
        ParseUtil.cols(0),
        '0.1em',
        'S',
        true,
    ],
    smallmatrix: [
        AmsMethods.Array,
        null,
        null,
        null,
        'c',
        ParseUtil.cols(1 / 3),
        '.2em',
        'S',
        true,
    ],
    matrix: [AmsMethods.Array, null, null, null, 'c'],
    pmatrix: [AmsMethods.Array, null, '(', ')', 'c'],
    bmatrix: [AmsMethods.Array, null, '[', ']', 'c'],
    Bmatrix: [AmsMethods.Array, null, '\\{', '\\}', 'c'],
    vmatrix: [AmsMethods.Array, null, '\\vert', '\\vert', 'c'],
    Vmatrix: [AmsMethods.Array, null, '\\Vert', '\\Vert', 'c'],
    cases: [AmsMethods.Array, null, '\\{', '.', 'll', null, '.2em', 'T'],
});
new DelimiterMap('AMSmath-delimiter', ParseMethods.delimiter, {
    '\\lvert': ['\u007C', { texClass: TEXCLASS.OPEN }],
    '\\rvert': ['\u007C', { texClass: TEXCLASS.CLOSE }],
    '\\lVert': ['\u2016', { texClass: TEXCLASS.OPEN }],
    '\\rVert': ['\u2016', { texClass: TEXCLASS.CLOSE }],
});
new CharacterMap('AMSsymbols-mathchar0mi', ParseMethods.mathchar0mi, {
    digamma: '\u03DD',
    varkappa: '\u03F0',
    varGamma: ['\u0393', { mathvariant: TexConstant.Variant.ITALIC }],
    varDelta: ['\u0394', { mathvariant: TexConstant.Variant.ITALIC }],
    varTheta: ['\u0398', { mathvariant: TexConstant.Variant.ITALIC }],
    varLambda: ['\u039B', { mathvariant: TexConstant.Variant.ITALIC }],
    varXi: ['\u039E', { mathvariant: TexConstant.Variant.ITALIC }],
    varPi: ['\u03A0', { mathvariant: TexConstant.Variant.ITALIC }],
    varSigma: ['\u03A3', { mathvariant: TexConstant.Variant.ITALIC }],
    varUpsilon: ['\u03A5', { mathvariant: TexConstant.Variant.ITALIC }],
    varPhi: ['\u03A6', { mathvariant: TexConstant.Variant.ITALIC }],
    varPsi: ['\u03A8', { mathvariant: TexConstant.Variant.ITALIC }],
    varOmega: ['\u03A9', { mathvariant: TexConstant.Variant.ITALIC }],
    beth: '\u2136',
    gimel: '\u2137',
    daleth: '\u2138',
    backprime: ['\u2035', { variantForm: true }],
    hslash: '\u210F',
    varnothing: ['\u2205', { variantForm: true }],
    blacktriangle: '\u25B4',
    triangledown: ['\u25BD', { variantForm: true }],
    blacktriangledown: '\u25BE',
    square: '\u25FB',
    Box: '\u25FB',
    blacksquare: '\u25FC',
    lozenge: '\u25CA',
    Diamond: '\u25CA',
    blacklozenge: '\u29EB',
    circledS: ['\u24C8', { mathvariant: TexConstant.Variant.NORMAL }],
    bigstar: '\u2605',
    sphericalangle: '\u2222',
    measuredangle: '\u2221',
    nexists: '\u2204',
    complement: '\u2201',
    mho: '\u2127',
    eth: ['\u00F0', { mathvariant: TexConstant.Variant.NORMAL }],
    Finv: '\u2132',
    diagup: '\u2571',
    Game: '\u2141',
    diagdown: '\u2572',
    Bbbk: ['\u006B', { mathvariant: TexConstant.Variant.DOUBLESTRUCK }],
    yen: '\u00A5',
    circledR: '\u00AE',
    checkmark: '\u2713',
    maltese: '\u2720',
});
new CharacterMap('AMSsymbols-mathchar0mo', ParseMethods.mathchar0mo, {
    dotplus: '\u2214',
    ltimes: '\u22C9',
    smallsetminus: ['\u2216', { variantForm: true }],
    rtimes: '\u22CA',
    Cap: '\u22D2',
    doublecap: '\u22D2',
    leftthreetimes: '\u22CB',
    Cup: '\u22D3',
    doublecup: '\u22D3',
    rightthreetimes: '\u22CC',
    barwedge: '\u22BC',
    curlywedge: '\u22CF',
    veebar: '\u22BB',
    curlyvee: '\u22CE',
    doublebarwedge: '\u2A5E',
    boxminus: '\u229F',
    circleddash: '\u229D',
    boxtimes: '\u22A0',
    circledast: '\u229B',
    boxdot: '\u22A1',
    circledcirc: '\u229A',
    boxplus: '\u229E',
    centerdot: ['\u22C5', { variantForm: true }],
    divideontimes: '\u22C7',
    intercal: '\u22BA',
    leqq: '\u2266',
    geqq: '\u2267',
    leqslant: '\u2A7D',
    geqslant: '\u2A7E',
    eqslantless: '\u2A95',
    eqslantgtr: '\u2A96',
    lesssim: '\u2272',
    gtrsim: '\u2273',
    lessapprox: '\u2A85',
    gtrapprox: '\u2A86',
    approxeq: '\u224A',
    lessdot: '\u22D6',
    gtrdot: '\u22D7',
    lll: '\u22D8',
    llless: '\u22D8',
    ggg: '\u22D9',
    gggtr: '\u22D9',
    lessgtr: '\u2276',
    gtrless: '\u2277',
    lesseqgtr: '\u22DA',
    gtreqless: '\u22DB',
    lesseqqgtr: '\u2A8B',
    gtreqqless: '\u2A8C',
    doteqdot: '\u2251',
    Doteq: '\u2251',
    eqcirc: '\u2256',
    risingdotseq: '\u2253',
    circeq: '\u2257',
    fallingdotseq: '\u2252',
    triangleq: '\u225C',
    backsim: '\u223D',
    thicksim: ['\u223C', { variantForm: true }],
    backsimeq: '\u22CD',
    thickapprox: ['\u2248', { variantForm: true }],
    subseteqq: '\u2AC5',
    supseteqq: '\u2AC6',
    Subset: '\u22D0',
    Supset: '\u22D1',
    sqsubset: '\u228F',
    sqsupset: '\u2290',
    preccurlyeq: '\u227C',
    succcurlyeq: '\u227D',
    curlyeqprec: '\u22DE',
    curlyeqsucc: '\u22DF',
    precsim: '\u227E',
    succsim: '\u227F',
    precapprox: '\u2AB7',
    succapprox: '\u2AB8',
    vartriangleleft: '\u22B2',
    lhd: '\u22B2',
    vartriangleright: '\u22B3',
    rhd: '\u22B3',
    trianglelefteq: '\u22B4',
    unlhd: '\u22B4',
    trianglerighteq: '\u22B5',
    unrhd: '\u22B5',
    vDash: '\u22A8',
    Vdash: '\u22A9',
    Vvdash: '\u22AA',
    smallsmile: ['\u2323', { variantForm: true }],
    shortmid: ['\u2223', { variantForm: true }],
    smallfrown: ['\u2322', { variantForm: true }],
    shortparallel: ['\u2225', { variantForm: true }],
    bumpeq: '\u224F',
    between: '\u226C',
    Bumpeq: '\u224E',
    pitchfork: '\u22D4',
    varpropto: ['\u221D', { variantForm: true }],
    backepsilon: '\u220D',
    blacktriangleleft: '\u25C2',
    blacktriangleright: '\u25B8',
    therefore: '\u2234',
    because: '\u2235',
    eqsim: '\u2242',
    vartriangle: ['\u25B3', { variantForm: true }],
    Join: '\u22C8',
    nless: '\u226E',
    ngtr: '\u226F',
    nleq: '\u2270',
    ngeq: '\u2271',
    nleqslant: ['\u2A87', { variantForm: true }],
    ngeqslant: ['\u2A88', { variantForm: true }],
    nleqq: ['\u2270', { variantForm: true }],
    ngeqq: ['\u2271', { variantForm: true }],
    lneq: '\u2A87',
    gneq: '\u2A88',
    lneqq: '\u2268',
    gneqq: '\u2269',
    lvertneqq: ['\u2268', { variantForm: true }],
    gvertneqq: ['\u2269', { variantForm: true }],
    lnsim: '\u22E6',
    gnsim: '\u22E7',
    lnapprox: '\u2A89',
    gnapprox: '\u2A8A',
    nprec: '\u2280',
    nsucc: '\u2281',
    npreceq: ['\u22E0', { variantForm: true }],
    nsucceq: ['\u22E1', { variantForm: true }],
    precneqq: '\u2AB5',
    succneqq: '\u2AB6',
    precnsim: '\u22E8',
    succnsim: '\u22E9',
    precnapprox: '\u2AB9',
    succnapprox: '\u2ABA',
    nsim: '\u2241',
    ncong: '\u2247',
    nshortmid: ['\u2224', { variantForm: true }],
    nshortparallel: ['\u2226', { variantForm: true }],
    nmid: '\u2224',
    nparallel: '\u2226',
    nvdash: '\u22AC',
    nvDash: '\u22AD',
    nVdash: '\u22AE',
    nVDash: '\u22AF',
    ntriangleleft: '\u22EA',
    ntriangleright: '\u22EB',
    ntrianglelefteq: '\u22EC',
    ntrianglerighteq: '\u22ED',
    nsubseteq: '\u2288',
    nsupseteq: '\u2289',
    nsubseteqq: ['\u2288', { variantForm: true }],
    nsupseteqq: ['\u2289', { variantForm: true }],
    subsetneq: '\u228A',
    supsetneq: '\u228B',
    varsubsetneq: ['\u228A', { variantForm: true }],
    varsupsetneq: ['\u228B', { variantForm: true }],
    subsetneqq: '\u2ACB',
    supsetneqq: '\u2ACC',
    varsubsetneqq: ['\u2ACB', { variantForm: true }],
    varsupsetneqq: ['\u2ACC', { variantForm: true }],
    leftleftarrows: '\u21C7',
    rightrightarrows: '\u21C9',
    leftrightarrows: '\u21C6',
    rightleftarrows: '\u21C4',
    Lleftarrow: '\u21DA',
    Rrightarrow: '\u21DB',
    twoheadleftarrow: '\u219E',
    twoheadrightarrow: '\u21A0',
    leftarrowtail: '\u21A2',
    rightarrowtail: '\u21A3',
    looparrowleft: '\u21AB',
    looparrowright: '\u21AC',
    leftrightharpoons: '\u21CB',
    rightleftharpoons: ['\u21CC', { variantForm: true }],
    curvearrowleft: '\u21B6',
    curvearrowright: '\u21B7',
    circlearrowleft: '\u21BA',
    circlearrowright: '\u21BB',
    Lsh: '\u21B0',
    Rsh: '\u21B1',
    upuparrows: '\u21C8',
    downdownarrows: '\u21CA',
    upharpoonleft: '\u21BF',
    upharpoonright: '\u21BE',
    downharpoonleft: '\u21C3',
    restriction: '\u21BE',
    multimap: '\u22B8',
    downharpoonright: '\u21C2',
    leftrightsquigarrow: '\u21AD',
    rightsquigarrow: '\u21DD',
    leadsto: '\u21DD',
    dashrightarrow: '\u21E2',
    dashleftarrow: '\u21E0',
    nleftarrow: '\u219A',
    nrightarrow: '\u219B',
    nLeftarrow: '\u21CD',
    nRightarrow: '\u21CF',
    nleftrightarrow: '\u21AE',
    nLeftrightarrow: '\u21CE',
});
new DelimiterMap('AMSsymbols-delimiter', ParseMethods.delimiter, {
    '\\ulcorner': '\u231C',
    '\\urcorner': '\u231D',
    '\\llcorner': '\u231E',
    '\\lrcorner': '\u231F',
});
new CommandMap('AMSsymbols-macros', {
    implies: [AmsMethods.Macro, '\\;\\Longrightarrow\\;'],
    impliedby: [AmsMethods.Macro, '\\;\\Longleftarrow\\;'],
});
//# sourceMappingURL=AmsMappings.js.map
;// ./components/mjs/input/tex/extensions/newcommand/lib/input/tex/newcommand/NewcommandConfiguration.js
const NewcommandConfiguration_def = MathJax._.input.tex.newcommand.NewcommandConfiguration;
const NewcommandConfig = NewcommandConfiguration_def.NewcommandConfig;
const NewcommandConfiguration = NewcommandConfiguration_def.NewcommandConfiguration;

;// ./mjs/input/tex/ams/AmsConfiguration.js






class AmsTags extends AbstractTags {
}
const AmsConfiguration = Configuration.create('ams', {
    [ConfigurationType.HANDLER]: {
        [HandlerType.CHARACTER]: ['AMSmath-operatorLetter'],
        [HandlerType.DELIMITER]: ['AMSsymbols-delimiter', 'AMSmath-delimiter'],
        [HandlerType.MACRO]: [
            'AMSsymbols-mathchar0mi',
            'AMSsymbols-mathchar0mo',
            'AMSsymbols-delimiter',
            'AMSsymbols-macros',
            'AMSmath-mathchar0mo',
            'AMSmath-macros',
            'AMSmath-delimiter',
        ],
        [HandlerType.ENVIRONMENT]: ['AMSmath-environment'],
    },
    [ConfigurationType.ITEMS]: {
        [MultlineItem.prototype.kind]: MultlineItem,
        [FlalignItem.prototype.kind]: FlalignItem,
    },
    [ConfigurationType.TAGS]: { ams: AmsTags },
    [ConfigurationType.OPTIONS]: {
        multlineWidth: '',
        ams: {
            operatornamePattern: /^[-*a-zA-Z]+/,
            multlineWidth: '100%',
            multlineIndent: '1em',
        },
    },
    [ConfigurationType.CONFIG]: NewcommandConfig,
});
//# sourceMappingURL=AmsConfiguration.js.map
;// ./components/mjs/input/tex/extensions/ams/lib/ams.js







if (MathJax.loader) {
  MathJax.loader.checkVersion('[tex]/ams', VERSION, 'tex-extension');
}

combineWithMathJax({_: {
  input: {
    tex: {
      ams: {
        AmsConfiguration: AmsConfiguration_namespaceObject,
        AmsItems: AmsItems_namespaceObject,
        AmsMethods: AmsMethods_namespaceObject
      }
    }
  }
}});

;// ./components/mjs/input/tex/extensions/ams/ams.js


/******/ })()
;