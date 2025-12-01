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

// NAMESPACE OBJECT: ./mjs/input/tex/textmacros/TextParser.js
var TextParser_namespaceObject = {};
__webpack_require__.r(TextParser_namespaceObject);
__webpack_require__.d(TextParser_namespaceObject, {
  TextParser: () => (TextParser)
});

// NAMESPACE OBJECT: ./mjs/input/tex/textmacros/TextMacrosMethods.js
var TextMacrosMethods_namespaceObject = {};
__webpack_require__.r(TextMacrosMethods_namespaceObject);
__webpack_require__.d(TextMacrosMethods_namespaceObject, {
  TextMacrosMethods: () => (TextMacrosMethods)
});

// NAMESPACE OBJECT: ./mjs/input/tex/textmacros/TextMacrosConfiguration.js
var TextMacrosConfiguration_namespaceObject = {};
__webpack_require__.r(TextMacrosConfiguration_namespaceObject);
__webpack_require__.d(TextMacrosConfiguration_namespaceObject, {
  TextBaseConfiguration: () => (TextBaseConfiguration),
  TextMacrosConfiguration: () => (TextMacrosConfiguration)
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

;// ./components/mjs/input/tex-base/lib/input/tex/ParseOptions.js
const ParseOptions_def = MathJax._.input.tex.ParseOptions;
/* harmony default export */ const ParseOptions = (ParseOptions_def.default);

;// ./components/mjs/input/tex-base/lib/input/tex/Tags.js
const Tags_def = MathJax._.input.tex.Tags;
const Label = Tags_def.Label;
const TagInfo = Tags_def.TagInfo;
const AbstractTags = Tags_def.AbstractTags;
const NoTags = Tags_def.NoTags;
const AllTags = Tags_def.AllTags;
const TagsFactory = Tags_def.TagsFactory;

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

;// ./components/mjs/input/tex-base/lib/input/tex/TexParser.js
const TexParser_def = MathJax._.input.tex.TexParser;
/* harmony default export */ const TexParser = (TexParser_def.default);

;// ./components/mjs/input/tex-base/lib/input/tex/TexError.js
const TexError_def = MathJax._.input.tex.TexError;
/* harmony default export */ const TexError = (TexError_def.default);

;// ./components/mjs/input/tex-base/lib/input/tex/ParseUtil.js
const ParseUtil_def = MathJax._.input.tex.ParseUtil;
const KeyValueDef = ParseUtil_def.KeyValueDef;
const KeyValueTypes = ParseUtil_def.KeyValueTypes;
const ParseUtil = ParseUtil_def.ParseUtil;

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

;// ./components/mjs/input/tex-base/lib/input/tex/NodeUtil.js
const NodeUtil_def = MathJax._.input.tex.NodeUtil;
/* harmony default export */ const NodeUtil = (NodeUtil_def.default);

;// ./mjs/input/tex/textmacros/TextParser.js






class TextParser extends TexParser {
    get texParser() {
        return this.configuration.packageData.get('textmacros').texParser;
    }
    get tags() {
        return this.texParser.tags;
    }
    constructor(text, env, configuration, level) {
        super(text, env, configuration);
        this.level = level;
    }
    mml() {
        this.copyLists();
        this.configuration.popParser();
        return this.level != null
            ? this.create('node', 'mstyle', this.nodes, {
                displaystyle: false,
                scriptlevel: this.level,
            })
            : this.nodes.length === 1
                ? this.nodes[0]
                : this.create('node', 'mrow', this.nodes);
    }
    copyLists() {
        const parseOptions = this.texParser.configuration;
        for (const [name, list] of Object.entries(this.configuration.nodeLists)) {
            for (const node of list) {
                parseOptions.addNode(name, node);
            }
        }
        this.configuration.nodeLists = {};
    }
    Parse() {
        this.text = '';
        this.nodes = [];
        this.envStack = [];
        super.Parse();
    }
    saveText() {
        if (this.text) {
            const mathvariant = this.stack.env.mathvariant;
            const text = ParseUtil.internalText(this, this.text, mathvariant ? { mathvariant } : {});
            this.text = '';
            this.Push(text);
        }
    }
    Push(mml) {
        if (this.text) {
            this.saveText();
        }
        if (mml instanceof StopItem) {
            return super.Push(mml);
        }
        if (mml instanceof StyleItem) {
            this.stack.env.mathcolor = this.stack.env.color;
            return;
        }
        if (mml instanceof AbstractMmlNode) {
            this.addAttributes(mml);
            this.nodes.push(mml);
        }
    }
    PushMath(mml) {
        const env = this.stack.env;
        for (const name of ['mathsize', 'mathcolor']) {
            if (env[name] && !mml.attributes.hasExplicit(name)) {
                if (!mml.isToken && !mml.isKind('mstyle')) {
                    mml = this.create('node', 'mstyle', [mml]);
                }
                NodeUtil.setAttribute(mml, name, env[name]);
            }
        }
        if (mml.isInferred) {
            mml = this.create('node', 'mrow', mml.childNodes);
        }
        if (!mml.isKind('TeXAtom')) {
            mml = this.create('node', 'TeXAtom', [mml]);
        }
        this.nodes.push(mml);
    }
    addAttributes(mml) {
        const env = this.stack.env;
        if (!mml.isToken)
            return;
        for (const name of ['mathsize', 'mathcolor', 'mathvariant']) {
            if (env[name] && !mml.attributes.hasExplicit(name)) {
                NodeUtil.setAttribute(mml, name, env[name]);
            }
        }
    }
    ParseTextArg(name, env) {
        const text = this.GetArgument(name);
        env = Object.assign(Object.assign({}, this.stack.env), env);
        return new TextParser(text, env, this.configuration).mml();
    }
    ParseArg(name) {
        return new TextParser(this.GetArgument(name), this.stack.env, this.configuration).mml();
    }
    Error(id, message, ...args) {
        throw new TexError(id, message, ...args);
    }
}
//# sourceMappingURL=TextParser.js.map
;// ./components/mjs/core/lib/util/Retries.js
const Retries_def = MathJax._.util.Retries;
const handleRetriesFor = Retries_def.handleRetriesFor;
const retryAfter = Retries_def.retryAfter;

;// ./components/mjs/input/tex-base/lib/input/tex/base/BaseMethods.js
const BaseMethods_def = MathJax._.input.tex.base.BaseMethods;
const splitAlignArray = BaseMethods_def.splitAlignArray;
/* harmony default export */ const BaseMethods = (BaseMethods_def.default);

;// ./mjs/input/tex/textmacros/TextMacrosMethods.js




const TextMacrosMethods = {
    Comment(parser, _c) {
        while (parser.i < parser.string.length &&
            parser.string.charAt(parser.i) !== '\n') {
            parser.i++;
        }
        parser.i++;
    },
    Math(parser, open) {
        parser.saveText();
        const i = parser.i;
        let j, c;
        let braces = 0;
        while ((c = parser.GetNext())) {
            j = parser.i++;
            switch (c) {
                case '\\': {
                    const cs = parser.GetCS();
                    if (cs === ')')
                        c = '\\(';
                }
                case '$':
                    if (braces === 0 && open === c) {
                        const config = parser.texParser.configuration;
                        const mml = new TexParser(parser.string.substring(i, j), parser.stack.env, config).mml();
                        parser.PushMath(mml);
                        return;
                    }
                    break;
                case '{':
                    braces++;
                    break;
                case '}':
                    if (braces === 0) {
                        parser.Error('ExtraCloseMissingOpen', 'Extra close brace or missing open brace');
                    }
                    braces--;
                    break;
            }
        }
        parser.Error('MathNotTerminated', 'Math mode is not properly terminated');
    },
    MathModeOnly(parser, c) {
        parser.Error('MathModeOnly', "'%1' allowed only in math mode", c);
    },
    Misplaced(parser, c) {
        parser.Error('Misplaced', "Misplaced '%1'", c);
    },
    OpenBrace(parser, _c) {
        const env = parser.stack.env;
        parser.envStack.push(env);
        parser.stack.env = Object.assign({}, env);
    },
    CloseBrace(parser, _c) {
        if (parser.envStack.length) {
            parser.saveText();
            parser.stack.env = parser.envStack.pop();
        }
        else {
            parser.Error('ExtraCloseMissingOpen', 'Extra close brace or missing open brace');
        }
    },
    OpenQuote(parser, c) {
        if (parser.string.charAt(parser.i) === c) {
            parser.text += '\u201C';
            parser.i++;
        }
        else {
            parser.text += '\u2018';
        }
    },
    CloseQuote(parser, c) {
        if (parser.string.charAt(parser.i) === c) {
            parser.text += '\u201D';
            parser.i++;
        }
        else {
            parser.text += '\u2019';
        }
    },
    Tilde(parser, _c) {
        parser.text += '\u00A0';
    },
    Space(parser, _c) {
        parser.text += ' ';
        parser.GetNext();
    },
    SelfQuote(parser, name) {
        parser.text += name.substring(1);
    },
    Insert(parser, _name, c) {
        parser.text += c;
    },
    Accent(parser, name, c) {
        const base = parser.ParseArg(name);
        const accent = parser.create('token', 'mo', {}, c);
        parser.addAttributes(accent);
        parser.Push(parser.create('node', 'mover', [base, accent]));
    },
    Emph(parser, name) {
        const variant = parser.stack.env.mathvariant === '-tex-mathit' ? 'normal' : '-tex-mathit';
        parser.Push(parser.ParseTextArg(name, { mathvariant: variant }));
    },
    TextFont(parser, name, variant) {
        parser.saveText();
        parser.Push(parser.ParseTextArg(name, { mathvariant: variant }));
    },
    SetFont(parser, _name, variant) {
        parser.saveText();
        parser.stack.env.mathvariant = variant;
    },
    SetSize(parser, _name, size) {
        parser.saveText();
        parser.stack.env.mathsize = size;
    },
    CheckAutoload(parser, name) {
        const autoload = parser.configuration.packageData.get('autoload');
        const texParser = parser.texParser;
        name = name.slice(1);
        const macro = texParser.lookup(HandlerType.MACRO, name);
        if (!macro || (autoload && macro._func === autoload.Autoload)) {
            texParser.parse(HandlerType.MACRO, [texParser, name]);
            if (!macro)
                return;
            retryAfter(Promise.resolve());
        }
        texParser.parse(HandlerType.MACRO, [parser, name]);
    },
    Macro: BaseMethods.Macro,
    Spacer: BaseMethods.Spacer,
    Hskip: BaseMethods.Hskip,
    rule: BaseMethods.rule,
    Rule: BaseMethods.Rule,
    HandleRef: BaseMethods.HandleRef,
    UnderOver: BaseMethods.UnderOver,
    Lap: BaseMethods.Lap,
    Phantom: BaseMethods.Phantom,
    Smash: BaseMethods.Smash,
    MmlToken: BaseMethods.MmlToken,
};
//# sourceMappingURL=TextMacrosMethods.js.map
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

;// ./mjs/input/tex/textmacros/TextMacrosMappings.js




const VARIANT = TexConstant.Variant;
new MacroMap('text-special', {
    $: TextMacrosMethods.Math,
    '%': TextMacrosMethods.Comment,
    '^': TextMacrosMethods.MathModeOnly,
    _: TextMacrosMethods.MathModeOnly,
    '&': TextMacrosMethods.Misplaced,
    '#': TextMacrosMethods.Misplaced,
    '~': TextMacrosMethods.Tilde,
    ' ': TextMacrosMethods.Space,
    '\t': TextMacrosMethods.Space,
    '\r': TextMacrosMethods.Space,
    '\n': TextMacrosMethods.Space,
    '\u00A0': TextMacrosMethods.Tilde,
    '{': TextMacrosMethods.OpenBrace,
    '}': TextMacrosMethods.CloseBrace,
    '`': TextMacrosMethods.OpenQuote,
    "'": TextMacrosMethods.CloseQuote,
});
new CommandMap('text-macros', {
    '(': TextMacrosMethods.Math,
    $: TextMacrosMethods.SelfQuote,
    _: TextMacrosMethods.SelfQuote,
    '%': TextMacrosMethods.SelfQuote,
    '{': TextMacrosMethods.SelfQuote,
    '}': TextMacrosMethods.SelfQuote,
    ' ': TextMacrosMethods.SelfQuote,
    '&': TextMacrosMethods.SelfQuote,
    '#': TextMacrosMethods.SelfQuote,
    '\\': [TextMacrosMethods.Macro, '$\\\\$'],
    "'": [TextMacrosMethods.Accent, '\u00B4'],
    '\u2019': [TextMacrosMethods.Accent, '\u00B4'],
    '`': [TextMacrosMethods.Accent, '\u0060'],
    '\u2018': [TextMacrosMethods.Accent, '\u0060'],
    '^': [TextMacrosMethods.Accent, '^'],
    '"': [TextMacrosMethods.Accent, '\u00A8'],
    '~': [TextMacrosMethods.Accent, '~'],
    '=': [TextMacrosMethods.Accent, '\u00AF'],
    '.': [TextMacrosMethods.Accent, '\u02D9'],
    u: [TextMacrosMethods.Accent, '\u02D8'],
    v: [TextMacrosMethods.Accent, '\u02C7'],
    emph: TextMacrosMethods.Emph,
    rm: [TextMacrosMethods.SetFont, VARIANT.NORMAL],
    mit: [TextMacrosMethods.SetFont, VARIANT.ITALIC],
    oldstyle: [TextMacrosMethods.SetFont, VARIANT.OLDSTYLE],
    cal: [TextMacrosMethods.SetFont, VARIANT.CALLIGRAPHIC],
    it: [TextMacrosMethods.SetFont, '-tex-mathit'],
    bf: [TextMacrosMethods.SetFont, VARIANT.BOLD],
    sf: [TextMacrosMethods.SetFont, VARIANT.SANSSERIF],
    tt: [TextMacrosMethods.SetFont, VARIANT.MONOSPACE],
    frak: [TextMacrosMethods.TextFont, VARIANT.FRAKTUR],
    Bbb: [TextMacrosMethods.TextFont, VARIANT.DOUBLESTRUCK],
    tiny: [TextMacrosMethods.SetSize, 0.5],
    Tiny: [TextMacrosMethods.SetSize, 0.6],
    scriptsize: [TextMacrosMethods.SetSize, 0.7],
    small: [TextMacrosMethods.SetSize, 0.85],
    normalsize: [TextMacrosMethods.SetSize, 1.0],
    large: [TextMacrosMethods.SetSize, 1.2],
    Large: [TextMacrosMethods.SetSize, 1.44],
    LARGE: [TextMacrosMethods.SetSize, 1.73],
    huge: [TextMacrosMethods.SetSize, 2.07],
    Huge: [TextMacrosMethods.SetSize, 2.49],
    textnormal: [TextMacrosMethods.Macro, '{\\rm #1}', 1],
    textup: [TextMacrosMethods.Macro, '{\\rm #1}', 1],
    textrm: [TextMacrosMethods.Macro, '{\\rm #1}', 1],
    textit: [TextMacrosMethods.Macro, '{\\it #1}', 1],
    textbf: [TextMacrosMethods.Macro, '{\\bf #1}', 1],
    textsf: [TextMacrosMethods.Macro, '{\\sf #1}', 1],
    texttt: [TextMacrosMethods.Macro, '{\\tt #1}', 1],
    dagger: [TextMacrosMethods.Insert, '\u2020'],
    ddagger: [TextMacrosMethods.Insert, '\u2021'],
    S: [TextMacrosMethods.Insert, '\u00A7'],
    AA: [TextMacrosMethods.Insert, '\u212B'],
    ldots: [TextMacrosMethods.Insert, '\u2026'],
    vdots: [TextMacrosMethods.Insert, '\u22EE'],
    ',': [TextMacrosMethods.Spacer, MATHSPACE.thinmathspace],
    ':': [TextMacrosMethods.Spacer, MATHSPACE.mediummathspace],
    '>': [TextMacrosMethods.Spacer, MATHSPACE.mediummathspace],
    ';': [TextMacrosMethods.Spacer, MATHSPACE.thickmathspace],
    '!': [TextMacrosMethods.Spacer, MATHSPACE.negativethinmathspace],
    enspace: [TextMacrosMethods.Spacer, 0.5],
    quad: [TextMacrosMethods.Spacer, 1],
    qquad: [TextMacrosMethods.Spacer, 2],
    thinspace: [TextMacrosMethods.Spacer, MATHSPACE.thinmathspace],
    negthinspace: [TextMacrosMethods.Spacer, MATHSPACE.negativethinmathspace],
    hskip: TextMacrosMethods.Hskip,
    hspace: TextMacrosMethods.Hskip,
    kern: TextMacrosMethods.Hskip,
    mskip: TextMacrosMethods.Hskip,
    mspace: TextMacrosMethods.Hskip,
    mkern: TextMacrosMethods.Hskip,
    rule: TextMacrosMethods.rule,
    Rule: [TextMacrosMethods.Rule],
    Space: [TextMacrosMethods.Rule, 'blank'],
    color: TextMacrosMethods.CheckAutoload,
    textcolor: TextMacrosMethods.CheckAutoload,
    colorbox: TextMacrosMethods.CheckAutoload,
    fcolorbox: TextMacrosMethods.CheckAutoload,
    href: TextMacrosMethods.CheckAutoload,
    style: TextMacrosMethods.CheckAutoload,
    class: TextMacrosMethods.CheckAutoload,
    data: TextMacrosMethods.CheckAutoload,
    cssId: TextMacrosMethods.CheckAutoload,
    unicode: TextMacrosMethods.CheckAutoload,
    U: TextMacrosMethods.CheckAutoload,
    char: TextMacrosMethods.CheckAutoload,
    ref: [TextMacrosMethods.HandleRef, false],
    eqref: [TextMacrosMethods.HandleRef, true],
    underline: [TextMacrosMethods.UnderOver, '2015'],
    llap: TextMacrosMethods.Lap,
    rlap: TextMacrosMethods.Lap,
    phantom: TextMacrosMethods.Phantom,
    vphantom: [TextMacrosMethods.Phantom, 1, 0],
    hphantom: [TextMacrosMethods.Phantom, 0, 1],
    smash: TextMacrosMethods.Smash,
    mmlToken: TextMacrosMethods.MmlToken,
});
//# sourceMappingURL=TextMacrosMappings.js.map
;// ./mjs/input/tex/textmacros/TextMacrosConfiguration.js








const TextBaseConfiguration = Configuration.create('text-base', {
    [ConfigurationType.PARSER]: 'text',
    [ConfigurationType.PRIORITY]: 1,
    [ConfigurationType.HANDLER]: {
        [HandlerType.CHARACTER]: ['command', 'text-special'],
        [HandlerType.MACRO]: ['text-macros'],
    },
    [ConfigurationType.FALLBACK]: {
        [HandlerType.CHARACTER]: (parser, c) => {
            parser.text += c;
        },
        [HandlerType.MACRO]: (parser, name) => {
            const texParser = parser.texParser;
            const macro = texParser.lookup(HandlerType.MACRO, name);
            if (macro && macro._func !== TextMacrosMethods.Macro) {
                parser.Error('MathMacro', '%1 is only supported in math mode', '\\' + name);
            }
            texParser.parse(HandlerType.MACRO, [parser, name]);
        },
    },
    [ConfigurationType.ITEMS]: {
        [StartItem.prototype.kind]: StartItem,
        [StopItem.prototype.kind]: StopItem,
        [MmlItem.prototype.kind]: MmlItem,
        [StyleItem.prototype.kind]: StyleItem,
    },
});
function internalMath(parser, text, level, mathvariant) {
    const config = parser.configuration.packageData.get('textmacros');
    if (!(parser instanceof TextParser)) {
        config.texParser = parser;
    }
    config.parseOptions.clear();
    return [
        new TextParser(text, mathvariant ? { mathvariant } : {}, config.parseOptions, level).mml(),
    ];
}
const TextMacrosConfiguration = Configuration.create('textmacros', {
    [ConfigurationType.PRIORITY]: 1,
    [ConfigurationType.CONFIG]: (_config, jax) => {
        const textConf = new ParserConfiguration(jax.parseOptions.options.textmacros.packages, ['tex', 'text']);
        textConf.init();
        const parseOptions = new ParseOptions(textConf, []);
        parseOptions.options = jax.parseOptions.options;
        textConf.config(jax);
        TagsFactory.addTags(textConf.tags);
        parseOptions.tags = TagsFactory.getDefault();
        parseOptions.tags.configuration = parseOptions;
        parseOptions.packageData = jax.parseOptions.packageData;
        parseOptions.packageData.set('textmacros', {
            textConf,
            parseOptions,
            jax,
            texParser: null,
        });
        parseOptions.options.internalMath = internalMath;
    },
    [ConfigurationType.PREPROCESSORS]: [
        (data) => {
            const config = data.data.packageData.get('textmacros');
            config.parseOptions.nodeFactory.setMmlFactory(config.jax.mmlFactory);
        },
    ],
    [ConfigurationType.OPTIONS]: {
        textmacros: {
            packages: ['text-base'],
        },
    },
});
//# sourceMappingURL=TextMacrosConfiguration.js.map
;// ./components/mjs/input/tex/extensions/textmacros/lib/textmacros.js







if (MathJax.loader) {
  MathJax.loader.checkVersion('[tex]/textmacros', VERSION, 'tex-extension');
}

combineWithMathJax({_: {
  input: {
    tex: {
      textmacros: {
        TextMacrosConfiguration: TextMacrosConfiguration_namespaceObject,
        TextMacrosMethods: TextMacrosMethods_namespaceObject,
        TextParser: TextParser_namespaceObject
      }
    }
  }
}});

;// ./components/mjs/input/tex/extensions/textmacros/textmacros.js


/******/ })()
;