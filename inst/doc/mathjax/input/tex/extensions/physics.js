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

// NAMESPACE OBJECT: ./mjs/input/tex/physics/PhysicsItems.js
var PhysicsItems_namespaceObject = {};
__webpack_require__.r(PhysicsItems_namespaceObject);
__webpack_require__.d(PhysicsItems_namespaceObject, {
  AutoOpen: () => (AutoOpen)
});

// NAMESPACE OBJECT: ./mjs/input/tex/physics/PhysicsMethods.js
var PhysicsMethods_namespaceObject = {};
__webpack_require__.r(PhysicsMethods_namespaceObject);
__webpack_require__.d(PhysicsMethods_namespaceObject, {
  "default": () => (physics_PhysicsMethods)
});

// NAMESPACE OBJECT: ./mjs/input/tex/physics/PhysicsConfiguration.js
var PhysicsConfiguration_namespaceObject = {};
__webpack_require__.r(PhysicsConfiguration_namespaceObject);
__webpack_require__.d(PhysicsConfiguration_namespaceObject, {
  PhysicsConfiguration: () => (PhysicsConfiguration)
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

;// ./components/mjs/input/tex-base/lib/input/tex/StackItem.js
const StackItem_def = MathJax._.input.tex.StackItem;
const MmlStack = StackItem_def.MmlStack;
const BaseItem = StackItem_def.BaseItem;

;// ./components/mjs/input/tex-base/lib/input/tex/ParseUtil.js
const ParseUtil_def = MathJax._.input.tex.ParseUtil;
const KeyValueDef = ParseUtil_def.KeyValueDef;
const KeyValueTypes = ParseUtil_def.KeyValueTypes;
const ParseUtil = ParseUtil_def.ParseUtil;

;// ./components/mjs/input/tex-base/lib/input/tex/NodeUtil.js
const NodeUtil_def = MathJax._.input.tex.NodeUtil;
/* harmony default export */ const NodeUtil = (NodeUtil_def.default);

;// ./components/mjs/input/tex-base/lib/input/tex/TexParser.js
const TexParser_def = MathJax._.input.tex.TexParser;
/* harmony default export */ const TexParser = (TexParser_def.default);

;// ./mjs/input/tex/physics/PhysicsItems.js




class AutoOpen extends BaseItem {
    constructor() {
        super(...arguments);
        this.openCount = 0;
    }
    get kind() {
        return 'auto open';
    }
    get isOpen() {
        return true;
    }
    toMml(inferred = true, forceRow) {
        if (!inferred) {
            return super.toMml(inferred, forceRow);
        }
        const parser = this.factory.configuration.parser;
        const right = this.getProperty('right');
        if (this.getProperty('smash')) {
            const mml = super.toMml();
            const smash = parser.create('node', 'mpadded', [mml], {
                height: 0,
                depth: 0,
            });
            this.Clear();
            this.Push(parser.create('node', 'TeXAtom', [smash]));
        }
        if (right) {
            this.Push(new TexParser(right, parser.stack.env, parser.configuration).mml());
        }
        const mml = ParseUtil.fenced(this.factory.configuration, this.getProperty('open'), super.toMml(), this.getProperty('close'), this.getProperty('big'));
        NodeUtil.removeProperties(mml, 'open', 'close', 'texClass');
        return mml;
    }
    closing(fence) {
        return fence === this.getProperty('close') && !this.openCount--;
    }
    checkItem(item) {
        if (item.getProperty('pre-autoclose')) {
            return BaseItem.fail;
        }
        if (item.getProperty('autoclose')) {
            if (this.getProperty('ignore')) {
                this.Clear();
                return [[], true];
            }
            return [[this.toMml()], true];
        }
        if (item.isKind('mml') && item.Size() === 1) {
            const mml = item.toMml();
            if (mml.isKind('mo') &&
                mml.getText() === this.getProperty('open')) {
                this.openCount++;
            }
        }
        return super.checkItem(item);
    }
}
AutoOpen.errors = Object.assign(Object.create(BaseItem.errors), {
    stop: ['ExtraOrMissingDelims', 'Extra open or missing close delimiter'],
});
//# sourceMappingURL=PhysicsItems.js.map
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

;// ./components/mjs/input/tex-base/lib/input/tex/base/BaseMethods.js
const BaseMethods_def = MathJax._.input.tex.base.BaseMethods;
const splitAlignArray = BaseMethods_def.splitAlignArray;
/* harmony default export */ const BaseMethods = (BaseMethods_def.default);

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

;// ./components/mjs/input/tex-base/lib/input/tex/NodeFactory.js
const NodeFactory_def = MathJax._.input.tex.NodeFactory;
const NodeFactory = NodeFactory_def.NodeFactory;

;// ./mjs/input/tex/physics/PhysicsMethods.js








const pairs = {
    '(': ')',
    '[': ']',
    '{': '}',
    '|': '|',
};
const biggs = /^(b|B)i(g{1,2})$/;
const latinCap = [0x41, 0x5a];
const latinSmall = [0x61, 0x7a];
const greekCap = [0x391, 0x3a9];
const greekSmall = [0x3b1, 0x3c9];
const digits = [0x30, 0x39];
function inRange(value, range) {
    return value >= range[0] && value <= range[1];
}
function createVectorToken(factory, kind, def, text) {
    const parser = factory.configuration.parser;
    const token = NodeFactory.createToken(factory, kind, def, text);
    const code = text.codePointAt(0);
    if (text.length === 1 &&
        !parser.stack.env.font &&
        parser.stack.env.vectorFont &&
        (inRange(code, latinCap) ||
            inRange(code, latinSmall) ||
            inRange(code, greekCap) ||
            inRange(code, digits) ||
            (inRange(code, greekSmall) && parser.stack.env.vectorStar) ||
            NodeUtil.getAttribute(token, 'accent'))) {
        NodeUtil.setAttribute(token, 'mathvariant', parser.stack.env.vectorFont);
    }
    return token;
}
function vectorApplication(parser, kind, name, operator, fences) {
    const op = new TexParser(operator, parser.stack.env, parser.configuration).mml();
    parser.Push(parser.itemFactory.create(kind, op));
    const left = parser.GetNext();
    const right = pairs[left];
    if (!right) {
        return;
    }
    let lfence = '', rfence = '', arg = '';
    const enlarge = fences.includes(left);
    if (left === '{') {
        arg = parser.GetArgument(name);
        lfence = enlarge ? '\\left\\{' : '';
        rfence = enlarge ? '\\right\\}' : '';
        const macro = `${lfence} ${arg} ${rfence}`;
        parser.string = macro + parser.string.slice(parser.i);
        parser.i = 0;
        return;
    }
    if (!enlarge) {
        return;
    }
    parser.i++;
    parser.Push(parser.itemFactory
        .create('auto open')
        .setProperties({ open: left, close: right }));
}
function outputBraket([arg1, arg2, arg3], star1, star2) {
    return star1 && star2
        ? `\\left\\langle{${arg1}}\\middle\\vert{${arg2}}\\middle\\vert{${arg3}}\\right\\rangle`
        : star1
            ? `\\langle{${arg1}}\\vert{${arg2}}\\vert{${arg3}}\\rangle`
            : `\\left\\langle{${arg1}}\\right\\vert{${arg2}}\\left\\vert{${arg3}}\\right\\rangle`;
}
function makeDiagMatrix(elements, anti) {
    const length = elements.length;
    const matrix = [];
    for (let i = 0; i < length; i++) {
        matrix.push(Array(anti ? length - i : i + 1).join('&') + `\\mqty{${elements[i]}}`);
    }
    return matrix.join('\\\\ ');
}
const PhysicsMethods = {
    Quantity(parser, name, open = '(', close = ')', arg = false, named = '', variant = '') {
        const star = arg ? parser.GetStar() : false;
        let next = parser.GetNext();
        const position = parser.i;
        let big = null;
        if (next === '\\') {
            parser.i++;
            big = parser.GetCS();
            if (!big.match(biggs)) {
                const empty = parser.create('node', 'mrow');
                parser.Push(ParseUtil.fenced(parser.configuration, open, empty, close));
                parser.i = position;
                return;
            }
            next = parser.GetNext();
        }
        let right = pairs[next];
        if (arg && next !== '{') {
            throw new TexError('MissingArgFor', 'Missing argument for %1', parser.currentCS);
        }
        if (!right) {
            const empty = parser.create('node', 'mrow');
            parser.Push(ParseUtil.fenced(parser.configuration, open, empty, close));
            parser.i = position;
            return;
        }
        if (named) {
            const mml = parser.create('token', 'mi', { texClass: TEXCLASS.OP }, named);
            if (variant) {
                NodeUtil.setAttribute(mml, 'mathvariant', variant);
            }
            parser.Push(parser.itemFactory.create('fn', mml));
        }
        if (next === '{') {
            let argument = parser.GetArgument(name);
            next = arg ? open : '\\{';
            right = arg ? close : '\\}';
            argument = star
                ? `${next} ${argument} ${right}`
                : big
                    ? `\\${big}l${next} ${argument} \\${big}r${right}`
                    : `\\left${next} ${argument} \\right${right}`;
            parser.Push(new TexParser(argument, parser.stack.env, parser.configuration).mml());
            return;
        }
        parser.i++;
        parser.Push(parser.itemFactory
            .create('auto open')
            .setProperties({ open: next, close: right, big: big }));
    },
    Eval(parser, name) {
        const star = parser.GetStar();
        const next = parser.GetNext();
        if (next === '(' || next === '[') {
            parser.i++;
            parser.Push(parser.itemFactory.create('auto open').setProperties({
                open: next,
                close: '|',
                smash: star,
                right: '\\vphantom{\\int}',
            }));
            return;
        }
        let replace = '\\left.\\vphantom{\\int}\\right|';
        if (next === '{') {
            const arg = parser.GetArgument(name);
            replace = `\\left.${star ? `\\smash{${arg}}` : arg}\\vphantom{\\int}\\right|`;
        }
        parser.string =
            parser.string.substring(0, parser.i) +
                replace +
                parser.string.slice(parser.i);
    },
    Commutator(parser, name, open = '[', close = ']') {
        const star = parser.GetStar();
        let next = parser.GetNext();
        let big = null;
        if (next === '\\') {
            parser.i++;
            big = parser.GetCS();
            if (!big.match(biggs)) {
                throw new TexError('MissingArgFor', 'Missing argument for %1', parser.currentCS);
            }
            next = parser.GetNext();
        }
        if (next !== '{') {
            throw new TexError('MissingArgFor', 'Missing argument for %1', parser.currentCS);
        }
        const arg1 = parser.GetArgument(name);
        const arg2 = parser.GetArgument(name);
        let argument = arg1 + ',' + arg2;
        argument = star
            ? `${open} ${argument} ${close}`
            : big
                ? `\\${big}l${open} ${argument} \\${big}r${close}`
                : `\\left${open} ${argument} \\right${close}`;
        parser.Push(new TexParser(argument, parser.stack.env, parser.configuration).mml());
    },
    VectorBold(parser, name) {
        const star = parser.GetStar();
        const arg = parser.GetArgument(name);
        const oldToken = parser.configuration.nodeFactory.get('token');
        const oldFont = parser.stack.env.font;
        delete parser.stack.env.font;
        parser.configuration.nodeFactory.set('token', createVectorToken);
        parser.stack.env.vectorFont = star ? 'bold-italic' : 'bold';
        parser.stack.env.vectorStar = star;
        const node = new TexParser(arg, parser.stack.env, parser.configuration).mml();
        if (oldFont) {
            parser.stack.env.font = oldFont;
        }
        delete parser.stack.env.vectorFont;
        delete parser.stack.env.vectorStar;
        parser.configuration.nodeFactory.set('token', oldToken);
        parser.Push(node);
    },
    StarMacro(parser, name, argcount, ...parts) {
        const star = parser.GetStar();
        const args = [];
        if (argcount) {
            for (let i = args.length; i < argcount; i++) {
                args.push(parser.GetArgument(name));
            }
        }
        let macro = parts.join(star ? '*' : '');
        macro = ParseUtil.substituteArgs(parser, args, macro);
        parser.string = ParseUtil.addArgs(parser, macro, parser.string.slice(parser.i));
        parser.i = 0;
        ParseUtil.checkMaxMacros(parser);
    },
    OperatorApplication(parser, name, operator, ...fences) {
        vectorApplication(parser, 'fn', name, operator, fences);
    },
    VectorOperator(parser, name, operator, ...fences) {
        vectorApplication(parser, 'mml', name, operator, fences);
    },
    Expression(parser, name, opt = true, id = '') {
        id = id || name.slice(1);
        const exp = opt ? parser.GetBrackets(name) : null;
        let mml = parser.create('token', 'mi', { texClass: TEXCLASS.OP }, id);
        if (exp) {
            const sup = new TexParser(exp, parser.stack.env, parser.configuration).mml();
            mml = parser.create('node', 'msup', [mml, sup]);
        }
        parser.Push(parser.itemFactory.create('fn', mml));
        if (parser.GetNext() !== '(') {
            return;
        }
        parser.i++;
        parser.Push(parser.itemFactory
            .create('auto open')
            .setProperties({ open: '(', close: ')' }));
    },
    Qqtext(parser, name, text) {
        const star = parser.GetStar();
        const arg = text ? text : parser.GetArgument(name);
        const replace = (star ? '' : '\\quad') + '\\text{' + arg + '}\\quad ';
        parser.string =
            parser.string.slice(0, parser.i) +
                replace +
                parser.string.slice(parser.i);
    },
    Differential(parser, name, op) {
        const optArg = parser.GetBrackets(name);
        const power = optArg != null ? '^{' + optArg + '}' : ' ';
        const parens = parser.GetNext() === '(';
        const braces = parser.GetNext() === '{';
        let macro = op + power;
        if (!(parens || braces)) {
            macro += parser.GetArgument(name, true) || '';
            const mml = new TexParser(macro, parser.stack.env, parser.configuration).mml();
            parser.Push(mml);
            return;
        }
        if (braces) {
            macro += parser.GetArgument(name);
            const mml = new TexParser(macro, parser.stack.env, parser.configuration).mml();
            parser.Push(parser.create('node', 'TeXAtom', [mml], { texClass: TEXCLASS.OP }));
            return;
        }
        parser.Push(new TexParser(macro, parser.stack.env, parser.configuration).mml());
        parser.i++;
        parser.Push(parser.itemFactory
            .create('auto open')
            .setProperties({ open: '(', close: ')' }));
    },
    Derivative(parser, name, argMax, op) {
        const star = parser.GetStar();
        const optArg = parser.GetBrackets(name);
        let argCounter = 1;
        const args = [];
        args.push(parser.GetArgument(name));
        while (parser.GetNext() === '{' && argCounter < argMax) {
            args.push(parser.GetArgument(name));
            argCounter++;
        }
        let ignore = false;
        let power1 = ' ';
        let power2 = ' ';
        if (argMax > 2 && args.length > 2) {
            power1 = '^{' + (args.length - 1) + '}';
            ignore = true;
        }
        else if (optArg != null) {
            if (argMax > 2 && args.length > 1) {
                ignore = true;
            }
            power1 = `^{${optArg}}`;
            power2 = power1;
        }
        const frac = star ? '\\flatfrac' : '\\frac';
        const first = args.length > 1 ? args[0] : '';
        const second = args.length > 1 ? args[1] : args[0];
        let rest = '';
        for (let i = 2, arg; (arg = args[i]); i++) {
            rest += op + ' ' + arg;
        }
        const macro = `${frac}{${op}${power1}${first}}{${op} ${second}${power2} ${rest}}`;
        parser.Push(new TexParser(macro, parser.stack.env, parser.configuration).mml());
        if (parser.GetNext() === '(') {
            parser.i++;
            parser.Push(parser.itemFactory
                .create('auto open')
                .setProperties({ open: '(', close: ')', ignore: ignore }));
        }
    },
    Bra(parser, name) {
        const starBra = parser.GetStar();
        const bra = parser.GetArgument(name);
        let ket = '';
        let hasKet = false;
        let starKet = false;
        if (parser.GetNext() === '\\') {
            let saveI = parser.i;
            parser.i++;
            const cs = parser.GetCS();
            const token = parser.lookup(HandlerType.MACRO, cs);
            if (token && token.token === 'ket') {
                hasKet = true;
                saveI = parser.i;
                starKet = parser.GetStar();
                if (parser.GetNext() === '{') {
                    ket = parser.GetArgument(cs, true);
                }
                else {
                    parser.i = saveI;
                    starKet = false;
                }
            }
            else {
                parser.i = saveI;
            }
        }
        let macro = '';
        if (hasKet) {
            macro =
                starBra || starKet
                    ? `\\langle{${bra}}\\vert{${ket}}\\rangle`
                    : `\\left\\langle{${bra}}\\middle\\vert{${ket}}\\right\\rangle`;
        }
        else {
            macro = starBra
                ? `\\langle{${bra}}\\vert`
                : `\\left\\langle{${bra}}\\right\\vert{${ket}}`;
        }
        parser.Push(new TexParser(macro, parser.stack.env, parser.configuration).mml());
    },
    Ket(parser, name) {
        const star = parser.GetStar();
        const ket = parser.GetArgument(name);
        const macro = star
            ? `\\vert{${ket}}\\rangle`
            : `\\left\\vert{${ket}}\\right\\rangle`;
        parser.Push(new TexParser(macro, parser.stack.env, parser.configuration).mml());
    },
    BraKet(parser, name) {
        const star = parser.GetStar();
        const bra = parser.GetArgument(name);
        let ket = null;
        if (parser.GetNext() === '{') {
            ket = parser.GetArgument(name, true);
        }
        let macro = '';
        if (ket == null) {
            macro = star
                ? `\\langle{${bra}}\\vert{${bra}}\\rangle`
                : `\\left\\langle{${bra}}\\middle\\vert{${bra}}\\right\\rangle`;
        }
        else {
            macro = star
                ? `\\langle{${bra}}\\vert{${ket}}\\rangle`
                : `\\left\\langle{${bra}}\\middle\\vert{${ket}}\\right\\rangle`;
        }
        parser.Push(new TexParser(macro, parser.stack.env, parser.configuration).mml());
    },
    KetBra(parser, name) {
        const star = parser.GetStar();
        const ket = parser.GetArgument(name);
        let bra = null;
        if (parser.GetNext() === '{') {
            bra = parser.GetArgument(name, true);
        }
        let macro = '';
        if (bra == null) {
            macro = star
                ? `\\vert{${ket}}\\rangle\\!\\langle{${ket}}\\vert`
                : `\\left\\vert{${ket}}\\middle\\rangle\\!\\middle\\langle{${ket}}\\right\\vert`;
        }
        else {
            macro = star
                ? `\\vert{${ket}}\\rangle\\!\\langle{${bra}}\\vert`
                : `\\left\\vert{${ket}}\\middle\\rangle\\!\\middle\\langle{${bra}}\\right\\vert`;
        }
        parser.Push(new TexParser(macro, parser.stack.env, parser.configuration).mml());
    },
    Expectation(parser, name) {
        const star1 = parser.GetStar();
        const star2 = star1 && parser.GetStar();
        const arg1 = parser.GetArgument(name);
        let arg2 = null;
        if (parser.GetNext() === '{') {
            arg2 = parser.GetArgument(name, true);
        }
        const macro = arg1 && arg2
            ? outputBraket([arg2, arg1, arg2], star1, star2)
            :
                star1
                    ? `\\langle {${arg1}} \\rangle`
                    : `\\left\\langle {${arg1}} \\right\\rangle`;
        parser.Push(new TexParser(macro, parser.stack.env, parser.configuration).mml());
    },
    MatrixElement(parser, name) {
        const star1 = parser.GetStar();
        const star2 = star1 && parser.GetStar();
        const arg1 = parser.GetArgument(name);
        const arg2 = parser.GetArgument(name);
        const arg3 = parser.GetArgument(name);
        const macro = outputBraket([arg1, arg2, arg3], star1, star2);
        parser.Push(new TexParser(macro, parser.stack.env, parser.configuration).mml());
    },
    MatrixQuantity(parser, name, small) {
        const star = parser.GetStar();
        const next = parser.GetNext();
        const array = small ? 'smallmatrix' : 'array';
        let arg = '';
        let open = '';
        let close = '';
        switch (next) {
            case '{':
                arg = parser.GetArgument(name);
                break;
            case '(':
                parser.i++;
                open = star ? '\\lgroup' : '(';
                close = star ? '\\rgroup' : ')';
                arg = parser.GetUpTo(name, ')');
                break;
            case '[':
                parser.i++;
                open = '[';
                close = ']';
                arg = parser.GetUpTo(name, ']');
                break;
            case '|':
                parser.i++;
                open = '|';
                close = '|';
                arg = parser.GetUpTo(name, '|');
                break;
            default:
                open = '(';
                close = ')';
                break;
        }
        const macro = (open ? '\\left' : '') +
            `${open}\\begin{${array}}{} ${arg}\\end{${array}}` +
            (open ? '\\right' : '') +
            close;
        parser.Push(new TexParser(macro, parser.stack.env, parser.configuration).mml());
    },
    IdentityMatrix(parser, name) {
        const arg = parser.GetArgument(name);
        const size = parseInt(arg, 10);
        if (isNaN(size)) {
            throw new TexError('InvalidNumber', 'Invalid number');
        }
        if (size <= 1) {
            parser.string = '1' + parser.string.slice(parser.i);
            parser.i = 0;
            return;
        }
        const zeros = Array(size).fill('0');
        const columns = [];
        for (let i = 0; i < size; i++) {
            const row = zeros.slice();
            row[i] = '1';
            columns.push(row.join(' & '));
        }
        parser.string = columns.join('\\\\ ') + parser.string.slice(parser.i);
        parser.i = 0;
    },
    XMatrix(parser, name) {
        const star = parser.GetStar();
        const arg1 = parser.GetArgument(name);
        const arg2 = parser.GetArgument(name);
        const arg3 = parser.GetArgument(name);
        let n = parseInt(arg2, 10);
        let m = parseInt(arg3, 10);
        if (isNaN(n) ||
            isNaN(m) ||
            m.toString() !== arg3 ||
            n.toString() !== arg2) {
            throw new TexError('InvalidNumber', 'Invalid number');
        }
        n = n < 1 ? 1 : n;
        m = m < 1 ? 1 : m;
        if (!star) {
            const row = Array(m).fill(arg1).join(' & ');
            const matrix = Array(n).fill(row).join('\\\\ ');
            parser.string = matrix + parser.string.slice(parser.i);
            parser.i = 0;
            return;
        }
        let matrix = '';
        if (n === 1 && m === 1) {
            matrix = arg1;
        }
        else if (n === 1) {
            const row = [];
            for (let i = 1; i <= m; i++) {
                row.push(`${arg1}_{${i}}`);
            }
            matrix = row.join(' & ');
        }
        else if (m === 1) {
            const row = [];
            for (let i = 1; i <= n; i++) {
                row.push(`${arg1}_{${i}}`);
            }
            matrix = row.join('\\\\ ');
        }
        else {
            const rows = [];
            for (let i = 1; i <= n; i++) {
                const row = [];
                for (let j = 1; j <= m; j++) {
                    row.push(`${arg1}_{{${i}}{${j}}}`);
                }
                rows.push(row.join(' & '));
            }
            matrix = rows.join('\\\\ ');
        }
        parser.string = matrix + parser.string.slice(parser.i);
        parser.i = 0;
        return;
    },
    PauliMatrix(parser, name) {
        const arg = parser.GetArgument(name);
        let matrix = arg.slice(1);
        switch (arg[0]) {
            case '0':
                matrix += ' 1 & 0\\\\ 0 & 1';
                break;
            case '1':
            case 'x':
                matrix += ' 0 & 1\\\\ 1 & 0';
                break;
            case '2':
            case 'y':
                matrix += ' 0 & -i\\\\ i & 0';
                break;
            case '3':
            case 'z':
                matrix += ' 1 & 0\\\\ 0 & -1';
                break;
            default:
        }
        parser.string = matrix + parser.string.slice(parser.i);
        parser.i = 0;
    },
    DiagonalMatrix(parser, name, anti) {
        if (parser.GetNext() !== '{') {
            return;
        }
        const startI = parser.i;
        parser.GetArgument(name);
        const endI = parser.i;
        parser.i = startI + 1;
        const elements = [];
        let element = '';
        let currentI = parser.i;
        while (currentI < endI) {
            try {
                element = parser.GetUpTo(name, ',');
            }
            catch (_e) {
                parser.i = endI;
                elements.push(parser.string.slice(currentI, endI - 1));
                break;
            }
            currentI = parser.i;
            elements.push(element);
        }
        parser.string = makeDiagMatrix(elements, anti) + parser.string.slice(endI);
        parser.i = 0;
    },
    AutoClose(parser, fence, texclass) {
        let top = parser.stack.Top();
        if (top.isKind('over')) {
            top = parser.stack.Top(2);
        }
        if (!top.isKind('auto open') || !top.closing(fence)) {
            return false;
        }
        const mo = parser.create('token', 'mo', { texClass: texclass }, fence);
        parser.Push(parser.itemFactory
            .create('close')
            .setProperties({ 'pre-autoclose': true }));
        parser.Push(parser.itemFactory.create('mml', mo).setProperties({ autoclose: true }));
        return true;
    },
    Vnabla(parser, _name) {
        const argument = parser.options.physics.arrowdel
            ? '\\vec{\\gradientnabla}'
            : '{\\gradientnabla}';
        return parser.Push(new TexParser(argument, parser.stack.env, parser.configuration).mml());
    },
    DiffD(parser, _name) {
        const argument = parser.options.physics.italicdiff ? 'd' : '{\\rm d}';
        return parser.Push(new TexParser(argument, parser.stack.env, parser.configuration).mml());
    },
    Macro: BaseMethods.Macro,
    NamedFn: BaseMethods.NamedFn,
    Array: BaseMethods.Array,
};
/* harmony default export */ const physics_PhysicsMethods = (PhysicsMethods);
//# sourceMappingURL=PhysicsMethods.js.map
;// ./components/mjs/input/tex-base/lib/input/tex/TexConstants.js
const TexConstants_def = MathJax._.input.tex.TexConstants;
const TexConstant = TexConstants_def.TexConstant;

;// ./components/mjs/input/tex-base/lib/input/tex/ParseMethods.js
const ParseMethods_def = MathJax._.input.tex.ParseMethods;
/* harmony default export */ const ParseMethods = (ParseMethods_def.default);

;// ./mjs/input/tex/physics/PhysicsMappings.js





new CommandMap('Physics-automatic-bracing-macros', {
    quantity: physics_PhysicsMethods.Quantity,
    qty: physics_PhysicsMethods.Quantity,
    pqty: [physics_PhysicsMethods.Quantity, '(', ')', true],
    bqty: [physics_PhysicsMethods.Quantity, '[', ']', true],
    vqty: [physics_PhysicsMethods.Quantity, '|', '|', true],
    Bqty: [physics_PhysicsMethods.Quantity, '\\{', '\\}', true],
    absolutevalue: [physics_PhysicsMethods.Quantity, '|', '|', true],
    abs: [physics_PhysicsMethods.Quantity, '|', '|', true],
    norm: [physics_PhysicsMethods.Quantity, '\\|', '\\|', true],
    evaluated: physics_PhysicsMethods.Eval,
    eval: physics_PhysicsMethods.Eval,
    order: [
        physics_PhysicsMethods.Quantity,
        '(',
        ')',
        true,
        'O',
        TexConstant.Variant.CALLIGRAPHIC,
    ],
    commutator: physics_PhysicsMethods.Commutator,
    comm: physics_PhysicsMethods.Commutator,
    anticommutator: [physics_PhysicsMethods.Commutator, '\\{', '\\}'],
    acomm: [physics_PhysicsMethods.Commutator, '\\{', '\\}'],
    poissonbracket: [physics_PhysicsMethods.Commutator, '\\{', '\\}'],
    pb: [physics_PhysicsMethods.Commutator, '\\{', '\\}'],
});
new CharacterMap('Physics-vector-mo', ParseMethods.mathchar0mo, {
    dotproduct: ['\u22C5', { mathvariant: TexConstant.Variant.BOLD }],
    vdot: ['\u22C5', { mathvariant: TexConstant.Variant.BOLD }],
    crossproduct: '\u00D7',
    cross: '\u00D7',
    cp: '\u00D7',
    gradientnabla: ['\u2207', { mathvariant: TexConstant.Variant.BOLD }],
    divsymbol: '\u00F7',
    divisionsymbol: '\u00F7',
});
new CharacterMap('Physics-vector-mi', ParseMethods.mathchar0mi, {
    real: ['\u211C', { mathvariant: TexConstant.Variant.NORMAL }],
    imaginary: ['\u2111', { mathvariant: TexConstant.Variant.NORMAL }],
});
new CommandMap('Physics-vector-macros', {
    vnabla: physics_PhysicsMethods.Vnabla,
    vectorbold: physics_PhysicsMethods.VectorBold,
    vb: physics_PhysicsMethods.VectorBold,
    vectorarrow: [physics_PhysicsMethods.StarMacro, 1, '\\vec{\\vb', '{#1}}'],
    va: [physics_PhysicsMethods.StarMacro, 1, '\\vec{\\vb', '{#1}}'],
    vectorunit: [physics_PhysicsMethods.StarMacro, 1, '\\hat{\\vb', '{#1}}'],
    vu: [physics_PhysicsMethods.StarMacro, 1, '\\hat{\\vb', '{#1}}'],
    gradient: [physics_PhysicsMethods.OperatorApplication, '\\vnabla', '(', '['],
    grad: [physics_PhysicsMethods.OperatorApplication, '\\vnabla', '(', '['],
    divergence: [physics_PhysicsMethods.VectorOperator, '\\vnabla\\vdot', '(', '['],
    div: [physics_PhysicsMethods.VectorOperator, '\\vnabla\\vdot', '(', '['],
    curl: [physics_PhysicsMethods.VectorOperator, '\\vnabla\\crossproduct', '(', '['],
    laplacian: [physics_PhysicsMethods.OperatorApplication, '\\nabla^2', '(', '['],
});
new CommandMap('Physics-expressions-macros', {
    sin: physics_PhysicsMethods.Expression,
    sinh: physics_PhysicsMethods.Expression,
    arcsin: physics_PhysicsMethods.Expression,
    asin: physics_PhysicsMethods.Expression,
    cos: physics_PhysicsMethods.Expression,
    cosh: physics_PhysicsMethods.Expression,
    arccos: physics_PhysicsMethods.Expression,
    acos: physics_PhysicsMethods.Expression,
    tan: physics_PhysicsMethods.Expression,
    tanh: physics_PhysicsMethods.Expression,
    arctan: physics_PhysicsMethods.Expression,
    atan: physics_PhysicsMethods.Expression,
    csc: physics_PhysicsMethods.Expression,
    csch: physics_PhysicsMethods.Expression,
    arccsc: physics_PhysicsMethods.Expression,
    acsc: physics_PhysicsMethods.Expression,
    sec: physics_PhysicsMethods.Expression,
    sech: physics_PhysicsMethods.Expression,
    arcsec: physics_PhysicsMethods.Expression,
    asec: physics_PhysicsMethods.Expression,
    cot: physics_PhysicsMethods.Expression,
    coth: physics_PhysicsMethods.Expression,
    arccot: physics_PhysicsMethods.Expression,
    acot: physics_PhysicsMethods.Expression,
    exp: [physics_PhysicsMethods.Expression, false],
    log: physics_PhysicsMethods.Expression,
    ln: physics_PhysicsMethods.Expression,
    det: [physics_PhysicsMethods.Expression, false],
    Pr: [physics_PhysicsMethods.Expression, false],
    tr: [physics_PhysicsMethods.Expression, false],
    trace: [physics_PhysicsMethods.Expression, false, 'tr'],
    Tr: [physics_PhysicsMethods.Expression, false],
    Trace: [physics_PhysicsMethods.Expression, false, 'Tr'],
    rank: physics_PhysicsMethods.NamedFn,
    erf: [physics_PhysicsMethods.Expression, false],
    Residue: [physics_PhysicsMethods.Macro, '\\mathrm{Res}'],
    Res: [physics_PhysicsMethods.OperatorApplication, '\\Residue', '(', '[', '{'],
    principalvalue: [physics_PhysicsMethods.OperatorApplication, '{\\cal P}'],
    pv: [physics_PhysicsMethods.OperatorApplication, '{\\cal P}'],
    PV: [physics_PhysicsMethods.OperatorApplication, '{\\rm P.V.}'],
    Re: [physics_PhysicsMethods.OperatorApplication, '\\mathrm{Re}', '{'],
    Im: [physics_PhysicsMethods.OperatorApplication, '\\mathrm{Im}', '{'],
    sine: [physics_PhysicsMethods.NamedFn, 'sin'],
    hypsine: [physics_PhysicsMethods.NamedFn, 'sinh'],
    arcsine: [physics_PhysicsMethods.NamedFn, 'arcsin'],
    asine: [physics_PhysicsMethods.NamedFn, 'asin'],
    cosine: [physics_PhysicsMethods.NamedFn, 'cos'],
    hypcosine: [physics_PhysicsMethods.NamedFn, 'cosh'],
    arccosine: [physics_PhysicsMethods.NamedFn, 'arccos'],
    acosine: [physics_PhysicsMethods.NamedFn, 'acos'],
    tangent: [physics_PhysicsMethods.NamedFn, 'tan'],
    hyptangent: [physics_PhysicsMethods.NamedFn, 'tanh'],
    arctangent: [physics_PhysicsMethods.NamedFn, 'arctan'],
    atangent: [physics_PhysicsMethods.NamedFn, 'atan'],
    cosecant: [physics_PhysicsMethods.NamedFn, 'csc'],
    hypcosecant: [physics_PhysicsMethods.NamedFn, 'csch'],
    arccosecant: [physics_PhysicsMethods.NamedFn, 'arccsc'],
    acosecant: [physics_PhysicsMethods.NamedFn, 'acsc'],
    secant: [physics_PhysicsMethods.NamedFn, 'sec'],
    hypsecant: [physics_PhysicsMethods.NamedFn, 'sech'],
    arcsecant: [physics_PhysicsMethods.NamedFn, 'arcsec'],
    asecant: [physics_PhysicsMethods.NamedFn, 'asec'],
    cotangent: [physics_PhysicsMethods.NamedFn, 'cot'],
    hypcotangent: [physics_PhysicsMethods.NamedFn, 'coth'],
    arccotangent: [physics_PhysicsMethods.NamedFn, 'arccot'],
    acotangent: [physics_PhysicsMethods.NamedFn, 'acot'],
    exponential: [physics_PhysicsMethods.NamedFn, 'exp'],
    logarithm: [physics_PhysicsMethods.NamedFn, 'log'],
    naturallogarithm: [physics_PhysicsMethods.NamedFn, 'ln'],
    determinant: [physics_PhysicsMethods.NamedFn, 'det'],
    Probability: [physics_PhysicsMethods.NamedFn, 'Pr'],
});
new CommandMap('Physics-quick-quad-macros', {
    qqtext: physics_PhysicsMethods.Qqtext,
    qq: physics_PhysicsMethods.Qqtext,
    qcomma: [physics_PhysicsMethods.Macro, '\\qqtext*{,}'],
    qc: [physics_PhysicsMethods.Macro, '\\qqtext*{,}'],
    qcc: [physics_PhysicsMethods.Qqtext, 'c.c.'],
    qif: [physics_PhysicsMethods.Qqtext, 'if'],
    qthen: [physics_PhysicsMethods.Qqtext, 'then'],
    qelse: [physics_PhysicsMethods.Qqtext, 'else'],
    qotherwise: [physics_PhysicsMethods.Qqtext, 'otherwise'],
    qunless: [physics_PhysicsMethods.Qqtext, 'unless'],
    qgiven: [physics_PhysicsMethods.Qqtext, 'given'],
    qusing: [physics_PhysicsMethods.Qqtext, 'using'],
    qassume: [physics_PhysicsMethods.Qqtext, 'assume'],
    qsince: [physics_PhysicsMethods.Qqtext, 'since'],
    qlet: [physics_PhysicsMethods.Qqtext, 'let'],
    qfor: [physics_PhysicsMethods.Qqtext, 'for'],
    qall: [physics_PhysicsMethods.Qqtext, 'all'],
    qeven: [physics_PhysicsMethods.Qqtext, 'even'],
    qodd: [physics_PhysicsMethods.Qqtext, 'odd'],
    qinteger: [physics_PhysicsMethods.Qqtext, 'integer'],
    qand: [physics_PhysicsMethods.Qqtext, 'and'],
    qor: [physics_PhysicsMethods.Qqtext, 'or'],
    qas: [physics_PhysicsMethods.Qqtext, 'as'],
    qin: [physics_PhysicsMethods.Qqtext, 'in'],
});
new CommandMap('Physics-derivative-macros', {
    diffd: physics_PhysicsMethods.DiffD,
    flatfrac: [physics_PhysicsMethods.Macro, '\\left.#1\\middle/#2\\right.', 2],
    differential: [physics_PhysicsMethods.Differential, '\\diffd'],
    dd: [physics_PhysicsMethods.Differential, '\\diffd'],
    variation: [physics_PhysicsMethods.Differential, '\\delta'],
    var: [physics_PhysicsMethods.Differential, '\\delta'],
    derivative: [physics_PhysicsMethods.Derivative, 2, '\\diffd'],
    dv: [physics_PhysicsMethods.Derivative, 2, '\\diffd'],
    partialderivative: [physics_PhysicsMethods.Derivative, 3, '\\partial'],
    pderivative: [physics_PhysicsMethods.Derivative, 3, '\\partial'],
    pdv: [physics_PhysicsMethods.Derivative, 3, '\\partial'],
    functionalderivative: [physics_PhysicsMethods.Derivative, 2, '\\delta'],
    fderivative: [physics_PhysicsMethods.Derivative, 2, '\\delta'],
    fdv: [physics_PhysicsMethods.Derivative, 2, '\\delta'],
});
new CommandMap('Physics-bra-ket-macros', {
    bra: physics_PhysicsMethods.Bra,
    ket: physics_PhysicsMethods.Ket,
    innerproduct: physics_PhysicsMethods.BraKet,
    ip: physics_PhysicsMethods.BraKet,
    braket: physics_PhysicsMethods.BraKet,
    outerproduct: physics_PhysicsMethods.KetBra,
    dyad: physics_PhysicsMethods.KetBra,
    ketbra: physics_PhysicsMethods.KetBra,
    op: physics_PhysicsMethods.KetBra,
    expectationvalue: physics_PhysicsMethods.Expectation,
    expval: physics_PhysicsMethods.Expectation,
    ev: physics_PhysicsMethods.Expectation,
    matrixelement: physics_PhysicsMethods.MatrixElement,
    matrixel: physics_PhysicsMethods.MatrixElement,
    mel: physics_PhysicsMethods.MatrixElement,
});
new CommandMap('Physics-matrix-macros', {
    matrixquantity: physics_PhysicsMethods.MatrixQuantity,
    mqty: physics_PhysicsMethods.MatrixQuantity,
    pmqty: [physics_PhysicsMethods.Macro, '\\mqty(#1)', 1],
    Pmqty: [physics_PhysicsMethods.Macro, '\\mqty*(#1)', 1],
    bmqty: [physics_PhysicsMethods.Macro, '\\mqty[#1]', 1],
    vmqty: [physics_PhysicsMethods.Macro, '\\mqty|#1|', 1],
    smallmatrixquantity: [physics_PhysicsMethods.MatrixQuantity, true],
    smqty: [physics_PhysicsMethods.MatrixQuantity, true],
    spmqty: [physics_PhysicsMethods.Macro, '\\smqty(#1)', 1],
    sPmqty: [physics_PhysicsMethods.Macro, '\\smqty*(#1)', 1],
    sbmqty: [physics_PhysicsMethods.Macro, '\\smqty[#1]', 1],
    svmqty: [physics_PhysicsMethods.Macro, '\\smqty|#1|', 1],
    matrixdeterminant: [physics_PhysicsMethods.Macro, '\\vmqty{#1}', 1],
    mdet: [physics_PhysicsMethods.Macro, '\\vmqty{#1}', 1],
    smdet: [physics_PhysicsMethods.Macro, '\\svmqty{#1}', 1],
    identitymatrix: physics_PhysicsMethods.IdentityMatrix,
    imat: physics_PhysicsMethods.IdentityMatrix,
    xmatrix: physics_PhysicsMethods.XMatrix,
    xmat: physics_PhysicsMethods.XMatrix,
    zeromatrix: [physics_PhysicsMethods.Macro, '\\xmat{0}{#1}{#2}', 2],
    zmat: [physics_PhysicsMethods.Macro, '\\xmat{0}{#1}{#2}', 2],
    paulimatrix: physics_PhysicsMethods.PauliMatrix,
    pmat: physics_PhysicsMethods.PauliMatrix,
    diagonalmatrix: physics_PhysicsMethods.DiagonalMatrix,
    dmat: physics_PhysicsMethods.DiagonalMatrix,
    antidiagonalmatrix: [physics_PhysicsMethods.DiagonalMatrix, true],
    admat: [physics_PhysicsMethods.DiagonalMatrix, true],
});
new EnvironmentMap('Physics-aux-envs', ParseMethods.environment, {
    smallmatrix: [
        physics_PhysicsMethods.Array,
        null,
        null,
        null,
        'c',
        '0.333em',
        '.2em',
        'S',
        1,
    ],
});
new MacroMap('Physics-characters', {
    '|': [physics_PhysicsMethods.AutoClose, TEXCLASS.ORD],
    ')': physics_PhysicsMethods.AutoClose,
    ']': physics_PhysicsMethods.AutoClose,
});
//# sourceMappingURL=PhysicsMappings.js.map
;// ./mjs/input/tex/physics/PhysicsConfiguration.js




const PhysicsConfiguration = Configuration.create('physics', {
    [ConfigurationType.HANDLER]: {
        macro: [
            'Physics-automatic-bracing-macros',
            'Physics-vector-macros',
            'Physics-vector-mo',
            'Physics-vector-mi',
            'Physics-derivative-macros',
            'Physics-expressions-macros',
            'Physics-quick-quad-macros',
            'Physics-bra-ket-macros',
            'Physics-matrix-macros',
        ],
        [HandlerType.CHARACTER]: ['Physics-characters'],
        [HandlerType.ENVIRONMENT]: ['Physics-aux-envs'],
    },
    [ConfigurationType.ITEMS]: {
        [AutoOpen.prototype.kind]: AutoOpen,
    },
    [ConfigurationType.OPTIONS]: {
        physics: {
            italicdiff: false,
            arrowdel: false,
        },
    },
});
//# sourceMappingURL=PhysicsConfiguration.js.map
;// ./components/mjs/input/tex/extensions/physics/lib/physics.js







if (MathJax.loader) {
  MathJax.loader.checkVersion('[tex]/physics', VERSION, 'tex-extension');
}

combineWithMathJax({_: {
  input: {
    tex: {
      physics: {
        PhysicsConfiguration: PhysicsConfiguration_namespaceObject,
        PhysicsItems: PhysicsItems_namespaceObject,
        PhysicsMethods: PhysicsMethods_namespaceObject
      }
    }
  }
}});

;// ./components/mjs/input/tex/extensions/physics/physics.js


/******/ })()
;