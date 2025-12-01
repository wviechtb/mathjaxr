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

// NAMESPACE OBJECT: ./mjs/input/tex/FindTeX.js
var FindTeX_namespaceObject = {};
__webpack_require__.r(FindTeX_namespaceObject);
__webpack_require__.d(FindTeX_namespaceObject, {
  FindTeX: () => (FindTeX)
});

// NAMESPACE OBJECT: ./mjs/input/tex/NodeUtil.js
var NodeUtil_namespaceObject = {};
__webpack_require__.r(NodeUtil_namespaceObject);
__webpack_require__.d(NodeUtil_namespaceObject, {
  "default": () => (tex_NodeUtil)
});

// NAMESPACE OBJECT: ./mjs/input/tex/FilterUtil.js
var FilterUtil_namespaceObject = {};
__webpack_require__.r(FilterUtil_namespaceObject);
__webpack_require__.d(FilterUtil_namespaceObject, {
  "default": () => (tex_FilterUtil)
});

// NAMESPACE OBJECT: ./mjs/input/tex/HandlerTypes.js
var HandlerTypes_namespaceObject = {};
__webpack_require__.r(HandlerTypes_namespaceObject);
__webpack_require__.d(HandlerTypes_namespaceObject, {
  ConfigurationType: () => (ConfigurationType),
  HandlerType: () => (HandlerType)
});

// NAMESPACE OBJECT: ./mjs/input/tex/UnitUtil.js
var UnitUtil_namespaceObject = {};
__webpack_require__.r(UnitUtil_namespaceObject);
__webpack_require__.d(UnitUtil_namespaceObject, {
  UnitUtil: () => (UnitUtil)
});

// NAMESPACE OBJECT: ./mjs/input/tex/Stack.js
var Stack_namespaceObject = {};
__webpack_require__.r(Stack_namespaceObject);
__webpack_require__.d(Stack_namespaceObject, {
  "default": () => (Stack)
});

// NAMESPACE OBJECT: ./mjs/input/tex/TexError.js
var TexError_namespaceObject = {};
__webpack_require__.r(TexError_namespaceObject);
__webpack_require__.d(TexError_namespaceObject, {
  "default": () => (tex_TexError)
});

// NAMESPACE OBJECT: ./mjs/input/tex/StackItem.js
var StackItem_namespaceObject = {};
__webpack_require__.r(StackItem_namespaceObject);
__webpack_require__.d(StackItem_namespaceObject, {
  BaseItem: () => (BaseItem),
  MmlStack: () => (MmlStack)
});

// NAMESPACE OBJECT: ./mjs/input/tex/TexConstants.js
var TexConstants_namespaceObject = {};
__webpack_require__.r(TexConstants_namespaceObject);
__webpack_require__.d(TexConstants_namespaceObject, {
  TexConstant: () => (TexConstant)
});

// NAMESPACE OBJECT: ./mjs/input/tex/TexParser.js
var TexParser_namespaceObject = {};
__webpack_require__.r(TexParser_namespaceObject);
__webpack_require__.d(TexParser_namespaceObject, {
  "default": () => (TexParser)
});

// NAMESPACE OBJECT: ./mjs/input/tex/StackItemFactory.js
var StackItemFactory_namespaceObject = {};
__webpack_require__.r(StackItemFactory_namespaceObject);
__webpack_require__.d(StackItemFactory_namespaceObject, {
  "default": () => (tex_StackItemFactory)
});

// NAMESPACE OBJECT: ./mjs/input/tex/NodeFactory.js
var NodeFactory_namespaceObject = {};
__webpack_require__.r(NodeFactory_namespaceObject);
__webpack_require__.d(NodeFactory_namespaceObject, {
  NodeFactory: () => (NodeFactory)
});

// NAMESPACE OBJECT: ./mjs/input/tex/ParseUtil.js
var ParseUtil_namespaceObject = {};
__webpack_require__.r(ParseUtil_namespaceObject);
__webpack_require__.d(ParseUtil_namespaceObject, {
  KeyValueDef: () => (KeyValueDef),
  KeyValueTypes: () => (KeyValueTypes),
  ParseUtil: () => (ParseUtil)
});

// NAMESPACE OBJECT: ./mjs/input/tex/ColumnParser.js
var ColumnParser_namespaceObject = {};
__webpack_require__.r(ColumnParser_namespaceObject);
__webpack_require__.d(ColumnParser_namespaceObject, {
  ColumnParser: () => (ColumnParser)
});

// NAMESPACE OBJECT: ./mjs/input/tex/ParseOptions.js
var ParseOptions_namespaceObject = {};
__webpack_require__.r(ParseOptions_namespaceObject);
__webpack_require__.d(ParseOptions_namespaceObject, {
  "default": () => (tex_ParseOptions)
});

// NAMESPACE OBJECT: ./mjs/input/tex/Tags.js
var Tags_namespaceObject = {};
__webpack_require__.r(Tags_namespaceObject);
__webpack_require__.d(Tags_namespaceObject, {
  AbstractTags: () => (AbstractTags),
  AllTags: () => (AllTags),
  Label: () => (Label),
  NoTags: () => (NoTags),
  TagInfo: () => (TagInfo),
  TagsFactory: () => (TagsFactory)
});

// NAMESPACE OBJECT: ./mjs/input/tex/Token.js
var Token_namespaceObject = {};
__webpack_require__.r(Token_namespaceObject);
__webpack_require__.d(Token_namespaceObject, {
  Macro: () => (Macro),
  Token: () => (Token)
});

// NAMESPACE OBJECT: ./mjs/input/tex/TokenMap.js
var TokenMap_namespaceObject = {};
__webpack_require__.r(TokenMap_namespaceObject);
__webpack_require__.d(TokenMap_namespaceObject, {
  AbstractParseMap: () => (AbstractParseMap),
  AbstractTokenMap: () => (AbstractTokenMap),
  CharacterMap: () => (CharacterMap),
  CommandMap: () => (CommandMap),
  DelimiterMap: () => (DelimiterMap),
  EnvironmentMap: () => (EnvironmentMap),
  MacroMap: () => (MacroMap),
  RegExpMap: () => (RegExpMap),
  parseResult: () => (parseResult)
});

// NAMESPACE OBJECT: ./mjs/input/tex/MapHandler.js
var MapHandler_namespaceObject = {};
__webpack_require__.r(MapHandler_namespaceObject);
__webpack_require__.d(MapHandler_namespaceObject, {
  MapHandler: () => (MapHandler),
  SubHandler: () => (SubHandler),
  SubHandlers: () => (SubHandlers)
});

// NAMESPACE OBJECT: ./mjs/input/tex/Configuration.js
var Configuration_namespaceObject = {};
__webpack_require__.r(Configuration_namespaceObject);
__webpack_require__.d(Configuration_namespaceObject, {
  Configuration: () => (Configuration),
  ConfigurationHandler: () => (ConfigurationHandler),
  ParserConfiguration: () => (ParserConfiguration)
});

// NAMESPACE OBJECT: ./mjs/input/tex/base/BaseItems.js
var BaseItems_namespaceObject = {};
__webpack_require__.r(BaseItems_namespaceObject);
__webpack_require__.d(BaseItems_namespaceObject, {
  ArrayItem: () => (ArrayItem),
  BeginItem: () => (BeginItem),
  BreakItem: () => (BreakItem),
  CellItem: () => (CellItem),
  CloseItem: () => (CloseItem),
  DotsItem: () => (DotsItem),
  EndItem: () => (EndItem),
  EqnArrayItem: () => (EqnArrayItem),
  EquationItem: () => (EquationItem),
  FnItem: () => (FnItem),
  LeftItem: () => (LeftItem),
  Middle: () => (Middle),
  MmlItem: () => (MmlItem),
  MstyleItem: () => (MstyleItem),
  NonscriptItem: () => (NonscriptItem),
  NotItem: () => (NotItem),
  NullItem: () => (NullItem),
  OpenItem: () => (OpenItem),
  OverItem: () => (OverItem),
  PositionItem: () => (PositionItem),
  PrimeItem: () => (PrimeItem),
  RightItem: () => (RightItem),
  StartItem: () => (StartItem),
  StopItem: () => (StopItem),
  StyleItem: () => (StyleItem),
  SubsupItem: () => (SubsupItem)
});

// NAMESPACE OBJECT: ./mjs/input/tex/base/BaseMethods.js
var BaseMethods_namespaceObject = {};
__webpack_require__.r(BaseMethods_namespaceObject);
__webpack_require__.d(BaseMethods_namespaceObject, {
  "default": () => (base_BaseMethods),
  splitAlignArray: () => (splitAlignArray)
});

// NAMESPACE OBJECT: ./mjs/input/tex/ParseMethods.js
var ParseMethods_namespaceObject = {};
__webpack_require__.r(ParseMethods_namespaceObject);
__webpack_require__.d(ParseMethods_namespaceObject, {
  "default": () => (tex_ParseMethods)
});

// NAMESPACE OBJECT: ./mjs/input/tex/base/BaseConfiguration.js
var BaseConfiguration_namespaceObject = {};
__webpack_require__.r(BaseConfiguration_namespaceObject);
__webpack_require__.d(BaseConfiguration_namespaceObject, {
  BaseConfiguration: () => (BaseConfiguration),
  BaseTags: () => (BaseTags),
  Other: () => (Other)
});

// NAMESPACE OBJECT: ./mjs/input/tex.js
var tex_namespaceObject = {};
__webpack_require__.r(tex_namespaceObject);
__webpack_require__.d(tex_namespaceObject, {
  TeX: () => (TeX)
});

// NAMESPACE OBJECT: ./mjs/input/tex/ams/AmsItems.js
var AmsItems_namespaceObject = {};
__webpack_require__.r(AmsItems_namespaceObject);
__webpack_require__.d(AmsItems_namespaceObject, {
  FlalignItem: () => (FlalignItem),
  MultlineItem: () => (MultlineItem)
});

// NAMESPACE OBJECT: ./mjs/input/tex/newcommand/NewcommandUtil.js
var NewcommandUtil_namespaceObject = {};
__webpack_require__.r(NewcommandUtil_namespaceObject);
__webpack_require__.d(NewcommandUtil_namespaceObject, {
  NewcommandPriority: () => (NewcommandPriority),
  NewcommandTables: () => (NewcommandTables),
  NewcommandUtil: () => (NewcommandUtil)
});

// NAMESPACE OBJECT: ./mjs/input/tex/ams/AmsMethods.js
var AmsMethods_namespaceObject = {};
__webpack_require__.r(AmsMethods_namespaceObject);
__webpack_require__.d(AmsMethods_namespaceObject, {
  AmsMethods: () => (AmsMethods)
});

// NAMESPACE OBJECT: ./mjs/input/tex/newcommand/NewcommandItems.js
var NewcommandItems_namespaceObject = {};
__webpack_require__.r(NewcommandItems_namespaceObject);
__webpack_require__.d(NewcommandItems_namespaceObject, {
  BeginEnvItem: () => (BeginEnvItem)
});

// NAMESPACE OBJECT: ./mjs/input/tex/newcommand/NewcommandMethods.js
var NewcommandMethods_namespaceObject = {};
__webpack_require__.r(NewcommandMethods_namespaceObject);
__webpack_require__.d(NewcommandMethods_namespaceObject, {
  "default": () => (newcommand_NewcommandMethods)
});

// NAMESPACE OBJECT: ./mjs/input/tex/newcommand/NewcommandConfiguration.js
var NewcommandConfiguration_namespaceObject = {};
__webpack_require__.r(NewcommandConfiguration_namespaceObject);
__webpack_require__.d(NewcommandConfiguration_namespaceObject, {
  NewcommandConfig: () => (NewcommandConfig),
  NewcommandConfiguration: () => (NewcommandConfiguration)
});

// NAMESPACE OBJECT: ./mjs/input/tex/ams/AmsConfiguration.js
var AmsConfiguration_namespaceObject = {};
__webpack_require__.r(AmsConfiguration_namespaceObject);
__webpack_require__.d(AmsConfiguration_namespaceObject, {
  AmsConfiguration: () => (AmsConfiguration),
  AmsTags: () => (AmsTags)
});

// NAMESPACE OBJECT: ./mjs/input/tex/require/RequireConfiguration.js
var RequireConfiguration_namespaceObject = {};
__webpack_require__.r(RequireConfiguration_namespaceObject);
__webpack_require__.d(RequireConfiguration_namespaceObject, {
  RequireConfiguration: () => (RequireConfiguration),
  RequireLoad: () => (RequireLoad),
  RequireMethods: () => (RequireMethods),
  options: () => (RequireConfiguration_options)
});

// NAMESPACE OBJECT: ./mjs/input/tex/autoload/AutoloadConfiguration.js
var AutoloadConfiguration_namespaceObject = {};
__webpack_require__.r(AutoloadConfiguration_namespaceObject);
__webpack_require__.d(AutoloadConfiguration_namespaceObject, {
  AutoloadConfiguration: () => (AutoloadConfiguration)
});

// NAMESPACE OBJECT: ./mjs/input/tex/configmacros/ConfigMacrosConfiguration.js
var ConfigMacrosConfiguration_namespaceObject = {};
__webpack_require__.r(ConfigMacrosConfiguration_namespaceObject);
__webpack_require__.d(ConfigMacrosConfiguration_namespaceObject, {
  ConfigMacrosConfiguration: () => (ConfigMacrosConfiguration)
});

// NAMESPACE OBJECT: ./mjs/input/tex/noundefined/NoUndefinedConfiguration.js
var NoUndefinedConfiguration_namespaceObject = {};
__webpack_require__.r(NoUndefinedConfiguration_namespaceObject);
__webpack_require__.d(NoUndefinedConfiguration_namespaceObject, {
  NoUndefinedConfiguration: () => (NoUndefinedConfiguration)
});

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
;// ./components/mjs/core/lib/core/InputJax.js
const InputJax_def = MathJax._.core.InputJax;
const AbstractInputJax = InputJax_def.AbstractInputJax;

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

;// ./components/mjs/core/lib/core/FindMath.js
const FindMath_def = MathJax._.core.FindMath;
const AbstractFindMath = FindMath_def.AbstractFindMath;

;// ./components/mjs/core/lib/util/string.js
const string_def = MathJax._.util.string;
const sortLength = string_def.sortLength;
const quotePattern = string_def.quotePattern;
const unicodeChars = string_def.unicodeChars;
const unicodeString = string_def.unicodeString;
const isPercent = string_def.isPercent;
const split = string_def.split;
const replaceUnicode = string_def.replaceUnicode;
const toEntity = string_def.toEntity;

;// ./components/mjs/core/lib/core/MathItem.js
const MathItem_def = MathJax._.core.MathItem;
const protoItem = MathItem_def.protoItem;
const AbstractMathItem = MathItem_def.AbstractMathItem;
const STATE = MathItem_def.STATE;
const newState = MathItem_def.newState;

;// ./mjs/input/tex/FindTeX.js



class FindTeX extends AbstractFindMath {
    constructor(options) {
        super(options);
        this.getPatterns();
    }
    getPatterns() {
        const options = this.options;
        const starts = [];
        const parts = [];
        const subparts = [];
        this.end = {};
        this.env = this.sub = 0;
        let i = 1;
        options['inlineMath'].forEach((delims) => this.addPattern(starts, delims, false));
        options['displayMath'].forEach((delims) => this.addPattern(starts, delims, true));
        if (starts.length) {
            parts.push(starts.sort(sortLength).join('|'));
        }
        if (options['processEnvironments']) {
            parts.push('\\\\begin\\s*\\{([^}]*)\\}');
            this.env = i;
            i++;
        }
        if (options['processEscapes']) {
            subparts.push('\\\\([\\\\$])');
        }
        if (options['processRefs']) {
            subparts.push('(\\\\(?:eq)?ref\\s*\\{[^}]*\\})');
        }
        if (subparts.length) {
            parts.push('(' + subparts.join('|') + ')');
            this.sub = i;
        }
        this.start = new RegExp(parts.join('|'), 'g');
        this.hasPatterns = parts.length > 0;
    }
    addPattern(starts, delims, display) {
        const [open, close] = delims;
        starts.push(quotePattern(open));
        this.end[open] = [close, display, this.endPattern(close)];
    }
    endPattern(end, endp) {
        return new RegExp((endp || quotePattern(end)) + '|\\\\(?:[a-zA-Z]|.)|[{}]', 'g');
    }
    findEnd(text, n, start, end) {
        const [close, display, pattern] = end;
        const i = (pattern.lastIndex = start.index + start[0].length);
        let match, braces = 0;
        while ((match = pattern.exec(text))) {
            if ((match[1] || match[0]) === close && braces === 0) {
                return protoItem(start[0], text.substring(i, match.index), match[0], n, start.index, match.index + match[0].length, display);
            }
            else if (match[0] === '{') {
                braces++;
            }
            else if (match[0] === '}' && braces) {
                braces--;
            }
        }
        return null;
    }
    findMathInString(math, n, text) {
        let start, match;
        this.start.lastIndex = 0;
        while ((start = this.start.exec(text))) {
            if (start[this.env] !== undefined && this.env) {
                const end = '\\\\end\\s*(\\{' + quotePattern(start[this.env]) + '\\})';
                match = this.findEnd(text, n, start, [
                    '{' + start[this.env] + '}',
                    true,
                    this.endPattern(null, end),
                ]);
                if (match) {
                    match.math = match.open + match.math + match.close;
                    match.open = match.close = '';
                }
            }
            else if (start[this.sub] !== undefined && this.sub) {
                const math = start[this.sub];
                const end = start.index + start[this.sub].length;
                if (math.length === 2) {
                    match = protoItem('\\', math.substring(1), '', n, start.index, end);
                }
                else {
                    match = protoItem('', math, '', n, start.index, end, false);
                }
            }
            else {
                match = this.findEnd(text, n, start, this.end[start[0]]);
            }
            if (match) {
                math.push(match);
                this.start.lastIndex = match.end.n;
            }
        }
    }
    findMath(strings) {
        const math = [];
        if (this.hasPatterns) {
            for (let i = 0, m = strings.length; i < m; i++) {
                this.findMathInString(math, i, strings[i]);
            }
        }
        return math;
    }
}
FindTeX.OPTIONS = {
    inlineMath: [
        ['\\(', '\\)']
    ],
    displayMath: [
        ['$$', '$$'],
        ['\\[', '\\]']
    ],
    processEscapes: true,
    processEnvironments: true,
    processRefs: true,
};
//# sourceMappingURL=FindTeX.js.map
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

;// ./components/mjs/core/lib/core/MmlTree/MmlNodes/mo.js
const mo_def = MathJax._.core.MmlTree.MmlNodes.mo;
const MmlMo = mo_def.MmlMo;

;// ./mjs/input/tex/NodeUtil.js


const NodeUtil = {
    attrs: new Set([
        'autoOP',
        'fnOP',
        'movesupsub',
        'subsupOK',
        'texprimestyle',
        'useHeight',
        'variantForm',
        'withDelims',
        'mathaccent',
        'open',
        'close',
    ]),
    createEntity(code) {
        return String.fromCodePoint(parseInt(code, 16));
    },
    getChildren(node) {
        return node.childNodes;
    },
    getText(node) {
        return node.getText();
    },
    appendChildren(node, children) {
        for (const child of children) {
            node.appendChild(child);
        }
    },
    setAttribute(node, attribute, value) {
        node.attributes.set(attribute, value);
    },
    setProperty(node, property, value) {
        node.setProperty(property, value);
    },
    setProperties(node, properties) {
        for (const name of Object.keys(properties)) {
            const value = properties[name];
            if (name === 'texClass') {
                node.texClass = value;
                node.setProperty(name, value);
            }
            else if (name === 'movablelimits') {
                node.setProperty('movablelimits', value);
                if (node.isKind('mo') || node.isKind('mstyle')) {
                    node.attributes.set('movablelimits', value);
                }
            }
            else if (name === 'inferred') {
            }
            else if (NodeUtil.attrs.has(name)) {
                node.setProperty(name, value);
            }
            else {
                node.attributes.set(name, value);
            }
        }
    },
    getProperty(node, property) {
        return node.getProperty(property);
    },
    getAttribute(node, attr) {
        return node.attributes.get(attr);
    },
    removeAttribute(node, attr) {
        node.attributes.unset(attr);
    },
    removeProperties(node, ...properties) {
        node.removeProperty(...properties);
    },
    getChildAt(node, position) {
        return node.childNodes[position];
    },
    setChild(node, position, child) {
        const children = node.childNodes;
        children[position] = child;
        if (child) {
            child.parent = node;
        }
    },
    copyChildren(oldNode, newNode) {
        const children = oldNode.childNodes;
        for (let i = 0; i < children.length; i++) {
            this.setChild(newNode, i, children[i]);
        }
    },
    copyAttributes(oldNode, newNode) {
        newNode.attributes = oldNode.attributes;
        this.setProperties(newNode, oldNode.getAllProperties());
    },
    isType(node, kind) {
        return node.isKind(kind);
    },
    isEmbellished(node) {
        return node.isEmbellished;
    },
    getTexClass(node) {
        return node.texClass;
    },
    getCoreMO(node) {
        return node.coreMO();
    },
    isNode(item) {
        return (item instanceof AbstractMmlNode || item instanceof AbstractMmlEmptyNode);
    },
    isInferred(node) {
        return node.isInferred;
    },
    getForm(node) {
        if (!node.isKind('mo')) {
            return null;
        }
        const mo = node;
        const forms = mo.getForms();
        for (const form of forms) {
            const symbol = this.getOp(mo, form);
            if (symbol) {
                return symbol;
            }
        }
        return null;
    },
    getOp(mo, form = 'infix') {
        return MmlMo.OPTABLE[form][mo.getText()] || null;
    },
    getMoAttribute(mo, attr) {
        var _a, _b;
        if (!mo.attributes.isSet(attr)) {
            for (const form of ['infix', 'postfix', 'prefix']) {
                const value = (_b = (_a = this.getOp(mo, form)) === null || _a === void 0 ? void 0 : _a[3]) === null || _b === void 0 ? void 0 : _b[attr];
                if (value !== undefined) {
                    return value;
                }
            }
        }
        return mo.attributes.get(attr);
    },
};
/* harmony default export */ const tex_NodeUtil = (NodeUtil);
//# sourceMappingURL=NodeUtil.js.map
;// ./mjs/input/tex/FilterUtil.js


function _copyExplicit(attrs, node1, node2) {
    const attr1 = node1.attributes;
    const attr2 = node2.attributes;
    attrs.forEach((x) => {
        const attr = attr2.getExplicit(x);
        if (attr != null) {
            attr1.set(x, attr);
        }
    });
}
function _compareExplicit(node1, node2) {
    const filter = (attr, space) => {
        const exp = attr.getExplicitNames();
        return exp.filter((x) => {
            return (x !== space &&
                (x !== 'stretchy' || attr.getExplicit('stretchy')) &&
                x !== 'data-latex' &&
                x !== 'data-latex-item');
        });
    };
    const attr1 = node1.attributes;
    const attr2 = node2.attributes;
    const exp1 = filter(attr1, 'lspace');
    const exp2 = filter(attr2, 'rspace');
    if (exp1.length !== exp2.length) {
        return false;
    }
    for (const name of exp1) {
        if (attr1.getExplicit(name) !== attr2.getExplicit(name)) {
            return false;
        }
    }
    return true;
}
function _cleanSubSup(options, low, up) {
    const remove = [];
    for (const mml of options.getList('m' + low + up)) {
        const children = mml.childNodes;
        if (children[mml[low]] && children[mml[up]]) {
            continue;
        }
        const parent = mml.parent;
        const newNode = children[mml[low]]
            ? options.nodeFactory.create('node', 'm' + low, [
                children[mml.base],
                children[mml[low]],
            ])
            : options.nodeFactory.create('node', 'm' + up, [
                children[mml.base],
                children[mml[up]],
            ]);
        tex_NodeUtil.copyAttributes(mml, newNode);
        parent.replaceChild(newNode, mml);
        remove.push(mml);
    }
    options.removeFromList('m' + low + up, remove);
}
function _moveLimits(options, underover, subsup) {
    const remove = [];
    for (const mml of options.getList(underover)) {
        if (mml.attributes.get('displaystyle')) {
            continue;
        }
        const base = mml.childNodes[mml.base];
        const mo = base.coreMO();
        if (base.getProperty('movablelimits') &&
            !mo.attributes.hasExplicit('movablelimits')) {
            const node = options.nodeFactory.create('node', subsup, mml.childNodes);
            tex_NodeUtil.copyAttributes(mml, node);
            mml.parent.replaceChild(node, mml);
            remove.push(mml);
        }
    }
    options.removeFromList(underover, remove);
}
const FilterUtil = {
    cleanStretchy(arg) {
        const options = arg.data;
        for (const mo of options.getList('fixStretchy')) {
            if (tex_NodeUtil.getProperty(mo, 'fixStretchy')) {
                const symbol = tex_NodeUtil.getForm(mo);
                if (symbol && symbol[3] && symbol[3]['stretchy']) {
                    tex_NodeUtil.setAttribute(mo, 'stretchy', false);
                }
                const parent = mo.parent;
                if (!tex_NodeUtil.getTexClass(mo) && (!symbol || !symbol[2])) {
                    const texAtom = options.nodeFactory.create('node', 'TeXAtom', [mo]);
                    parent.replaceChild(texAtom, mo);
                    texAtom.inheritAttributesFrom(mo);
                }
                tex_NodeUtil.removeProperties(mo, 'fixStretchy');
            }
        }
    },
    cleanAttributes(arg) {
        const node = arg.data.root;
        node.walkTree((mml, _d) => {
            const attribs = mml.attributes;
            const keep = new Set((attribs.get('mjx-keep-attrs') || '').split(/ /));
            attribs.unset('mjx-keep-attrs');
            for (const key of attribs.getExplicitNames()) {
                if (!keep.has(key) &&
                    attribs.get(key) === mml.attributes.getInherited(key)) {
                    attribs.unset(key);
                }
            }
        }, {});
    },
    combineRelations(arg) {
        const remove = [];
        for (const mo of arg.data.getList('mo')) {
            if (mo.getProperty('relationsCombined') ||
                !mo.parent ||
                (mo.parent && !tex_NodeUtil.isType(mo.parent, 'mrow')) ||
                tex_NodeUtil.getTexClass(mo) !== TEXCLASS.REL) {
                continue;
            }
            const mml = mo.parent;
            let m2;
            const children = mml.childNodes;
            const next = children.indexOf(mo) + 1;
            const variantForm = tex_NodeUtil.getProperty(mo, 'variantForm');
            while (next < children.length &&
                (m2 = children[next]) &&
                tex_NodeUtil.isType(m2, 'mo') &&
                tex_NodeUtil.getTexClass(m2) === TEXCLASS.REL) {
                if (variantForm === tex_NodeUtil.getProperty(m2, 'variantForm') &&
                    _compareExplicit(mo, m2)) {
                    tex_NodeUtil.appendChildren(mo, tex_NodeUtil.getChildren(m2));
                    _copyExplicit(['stretchy', 'rspace'], mo, m2);
                    for (const name of m2.getPropertyNames()) {
                        mo.setProperty(name, m2.getProperty(name));
                    }
                    if (m2.attributes.get('data-latex')) {
                        mo.attributes.set('data-latex', mo.attributes.get('data-latex') +
                            m2.attributes.get('data-latex'));
                    }
                    children.splice(next, 1);
                    remove.push(m2);
                    m2.parent = null;
                    m2.setProperty('relationsCombined', true);
                    mo.setProperty('texClass', TEXCLASS.REL);
                }
                else {
                    if (!mo.attributes.hasExplicit('rspace')) {
                        tex_NodeUtil.setAttribute(mo, 'rspace', '0pt');
                    }
                    if (!m2.attributes.hasExplicit('lspace')) {
                        tex_NodeUtil.setAttribute(m2, 'lspace', '0pt');
                    }
                    break;
                }
            }
            mo.attributes.setInherited('form', mo.getForms()[0]);
        }
        arg.data.removeFromList('mo', remove);
    },
    cleanSubSup(arg) {
        const options = arg.data;
        if (options.error) {
            return;
        }
        _cleanSubSup(options, 'sub', 'sup');
        _cleanSubSup(options, 'under', 'over');
    },
    moveLimits(arg) {
        const options = arg.data;
        _moveLimits(options, 'munderover', 'msubsup');
        _moveLimits(options, 'munder', 'msub');
        _moveLimits(options, 'mover', 'msup');
    },
    setInherited(arg) {
        arg.data.root.setInheritedAttributes({}, arg.math['display'], 0, false);
    },
    checkScriptlevel(arg) {
        const options = arg.data;
        const remove = [];
        for (const mml of options.getList('mstyle')) {
            if (mml.childNodes[0].childNodes.length !== 1) {
                continue;
            }
            const attributes = mml.attributes;
            for (const key of ['displaystyle', 'scriptlevel']) {
                if (attributes.getExplicit(key) === attributes.getInherited(key)) {
                    attributes.unset(key);
                }
            }
            const names = attributes.getExplicitNames();
            if (names.filter((key) => key.substring(0, 10) !== 'data-latex').length ===
                0) {
                const child = mml.childNodes[0].childNodes[0];
                names.forEach((key) => child.attributes.set(key, attributes.get(key)));
                mml.parent.replaceChild(child, mml);
                remove.push(mml);
            }
        }
        options.removeFromList('mstyle', remove);
    },
};
/* harmony default export */ const tex_FilterUtil = (FilterUtil);
//# sourceMappingURL=FilterUtil.js.map
;// ./mjs/input/tex/HandlerTypes.js
var ConfigurationType;
(function (ConfigurationType) {
    ConfigurationType["HANDLER"] = "handler";
    ConfigurationType["FALLBACK"] = "fallback";
    ConfigurationType["ITEMS"] = "items";
    ConfigurationType["TAGS"] = "tags";
    ConfigurationType["OPTIONS"] = "options";
    ConfigurationType["NODES"] = "nodes";
    ConfigurationType["PREPROCESSORS"] = "preprocessors";
    ConfigurationType["POSTPROCESSORS"] = "postprocessors";
    ConfigurationType["INIT"] = "init";
    ConfigurationType["CONFIG"] = "config";
    ConfigurationType["PRIORITY"] = "priority";
    ConfigurationType["PARSER"] = "parser";
})(ConfigurationType || (ConfigurationType = {}));
var HandlerType;
(function (HandlerType) {
    HandlerType["DELIMITER"] = "delimiter";
    HandlerType["MACRO"] = "macro";
    HandlerType["CHARACTER"] = "character";
    HandlerType["ENVIRONMENT"] = "environment";
})(HandlerType || (HandlerType = {}));
//# sourceMappingURL=HandlerTypes.js.map
;// ./mjs/input/tex/UnitUtil.js
class UnitMap {
    constructor(map) {
        this.num = '([-+]?([.,]\\d+|\\d+([.,]\\d*)?))';
        this.unit = '';
        this.dimenEnd = /./;
        this.dimenRest = /./;
        this.map = new Map(map);
        this.updateDimen();
    }
    updateDimen() {
        this.unit = `(${Array.from(this.map.keys()).join('|')})`;
        this.dimenEnd = RegExp('^\\s*' + this.num + '\\s*' + this.unit + '\\s*$');
        this.dimenRest = RegExp('^\\s*' + this.num + '\\s*' + this.unit + ' ?');
    }
    set(name, ems) {
        this.map.set(name, ems);
        this.updateDimen();
        return this;
    }
    get(name) {
        return this.map.get(name) || this.map.get('pt');
    }
    delete(name) {
        if (this.map.delete(name)) {
            this.updateDimen();
            return true;
        }
        return false;
    }
}
const emPerInch = 7.2;
const pxPerInch = 72;
function muReplace([value, unit, length]) {
    if (unit !== 'mu') {
        return [value, unit, length];
    }
    const em = UnitUtil.em(UnitUtil.UNIT_CASES.get(unit) * parseFloat(value));
    return [em.slice(0, -2), 'em', length];
}
const UnitUtil = {
    UNIT_CASES: new UnitMap([
        ['em', 1],
        ['ex', .43],
        ['pt', 1 / 10],
        ['pc', 1.2],
        ['px', emPerInch / pxPerInch],
        ['in', emPerInch],
        ['cm', emPerInch / 2.54],
        ['mm', emPerInch / 25.4],
        ['mu', 1 / 18],
    ]),
    matchDimen(dim, rest = false) {
        const match = dim.match(rest ? UnitUtil.UNIT_CASES.dimenRest : UnitUtil.UNIT_CASES.dimenEnd);
        return match
            ? muReplace([match[1].replace(/,/, '.'), match[4], match[0].length])
            : [null, null, 0];
    },
    dimen2em(dim) {
        const [value, unit] = UnitUtil.matchDimen(dim);
        const m = parseFloat(value || '1');
        const factor = UnitUtil.UNIT_CASES.get(unit);
        return factor * m;
    },
    em(m) {
        if (Math.abs(m) < 0.0006) {
            return '0em';
        }
        return m.toFixed(3).replace(/\.?0+$/, '') + 'em';
    },
    trimSpaces(text) {
        if (typeof text !== 'string') {
            return text;
        }
        let TEXT = text.trim();
        if (TEXT.match(/\\$/) && text.match(/ $/)) {
            TEXT += ' ';
        }
        return TEXT;
    },
};
//# sourceMappingURL=UnitUtil.js.map
;// ./mjs/input/tex/Stack.js

class Stack {
    constructor(_factory, _env, inner) {
        this._factory = _factory;
        this._env = _env;
        this.global = {};
        this.stack = [];
        this.global = { isInner: inner };
        this.stack = [this._factory.create('start', this.global)];
        if (_env) {
            this.stack[0].env = _env;
        }
        this.env = this.stack[0].env;
    }
    set env(env) {
        this._env = env;
    }
    get env() {
        return this._env;
    }
    Push(...args) {
        for (const node of args) {
            if (!node) {
                continue;
            }
            const item = tex_NodeUtil.isNode(node)
                ? this._factory.create('mml', node)
                : node;
            item.global = this.global;
            const [top, success] = this.stack.length
                ? this.Top().checkItem(item)
                : [null, true];
            if (!success) {
                continue;
            }
            if (top) {
                this.Pop();
                this.Push(...top);
                continue;
            }
            if (!item.isKind('null')) {
                this.stack.push(item);
            }
            if (item.env) {
                if (item.copyEnv) {
                    Object.assign(item.env, this.env);
                }
                this.env = item.env;
            }
            else {
                item.env = this.env;
            }
        }
    }
    Pop() {
        const item = this.stack.pop();
        if (!item.isOpen) {
            delete item.env;
        }
        this.env = this.stack.length ? this.Top().env : {};
        return item;
    }
    Top(n = 1) {
        return this.stack.length < n ? null : this.stack[this.stack.length - n];
    }
    Prev(noPop) {
        const top = this.Top();
        return noPop ? top.First : top.Pop();
    }
    get height() {
        return this.stack.length;
    }
    toString() {
        return 'stack[\n  ' + this.stack.join('\n  ') + '\n]';
    }
}
//# sourceMappingURL=Stack.js.map
;// ./mjs/input/tex/TexError.js
class TexError {
    static processString(str, args) {
        const parts = str.split(TexError.pattern);
        for (let i = 1, m = parts.length; i < m; i += 2) {
            let c = parts[i].charAt(0);
            if (c >= '0' && c <= '9') {
                parts[i] = args[parseInt(parts[i], 10) - 1];
                if (typeof parts[i] === 'number') {
                    parts[i] = parts[i].toString();
                }
            }
            else if (c === '{') {
                c = parts[i].substring(1);
                if (c >= '0' && c <= '9') {
                    parts[i] =
                        args[parseInt(parts[i].substring(1, parts[i].length - 1), 10) - 1];
                    if (typeof parts[i] === 'number') {
                        parts[i] = parts[i].toString();
                    }
                }
                else {
                    const match = parts[i].match(/^\{([a-z]+):%(\d+)\|(.*)\}$/);
                    if (match) {
                        parts[i] = '%' + parts[i];
                    }
                }
            }
        }
        return parts.join('');
    }
    constructor(id, message, ...rest) {
        this.id = id;
        this.message = TexError.processString(message, rest);
    }
}
TexError.pattern = /%(\d+|\{\d+\}|\{[a-z]+:%\d+(?:\|(?:%\{\d+\}|%.|[^}])*)+\}|.)/g;
/* harmony default export */ const tex_TexError = (TexError);
//# sourceMappingURL=TexError.js.map
;// ./mjs/input/tex/StackItem.js

class MmlStack {
    constructor(_nodes) {
        this._nodes = _nodes;
        this.startStr = '';
        this.startI = 0;
        this.stopI = 0;
    }
    get nodes() {
        return this._nodes;
    }
    Push(...nodes) {
        this._nodes.push(...nodes);
    }
    Pop() {
        return this._nodes.pop();
    }
    get First() {
        return this._nodes[this.Size() - 1];
    }
    set First(node) {
        this._nodes[this.Size() - 1] = node;
    }
    get Last() {
        return this._nodes[0];
    }
    set Last(node) {
        this._nodes[0] = node;
    }
    Peek(n) {
        if (n == null) {
            n = 1;
        }
        return this._nodes.slice(this.Size() - n);
    }
    Size() {
        return this._nodes.length;
    }
    Clear() {
        this._nodes = [];
    }
    toMml(inferred = true, forceRow) {
        if (this._nodes.length === 1 && !forceRow) {
            return this.First;
        }
        return this.create('node', inferred ? 'inferredMrow' : 'mrow', this._nodes, {});
    }
    create(kind, ...rest) {
        return this.factory.configuration.nodeFactory.create(kind, ...rest);
    }
}
class BaseItem extends MmlStack {
    constructor(factory, ...nodes) {
        super(nodes);
        this.factory = factory;
        this.global = {};
        this._properties = {};
        if (this.isOpen) {
            this._env = {};
        }
    }
    get kind() {
        return 'base';
    }
    get env() {
        return this._env;
    }
    set env(value) {
        this._env = value;
    }
    get copyEnv() {
        return true;
    }
    getProperty(key) {
        return this._properties[key];
    }
    setProperty(key, value) {
        this._properties[key] = value;
        return this;
    }
    get isOpen() {
        return false;
    }
    get isClose() {
        return false;
    }
    get isFinal() {
        return false;
    }
    isKind(kind) {
        return kind === this.kind;
    }
    checkItem(item) {
        if (item.isKind('over') && this.isOpen) {
            item.setProperty('num', this.toMml(false));
            this.Clear();
        }
        if (item.isKind('cell') && this.isOpen) {
            if (item.getProperty('linebreak')) {
                return BaseItem.fail;
            }
            throw new tex_TexError('Misplaced', 'Misplaced %1', item.getName());
        }
        if (item.isClose && this.getErrors(item.kind)) {
            const [id, message] = this.getErrors(item.kind);
            throw new tex_TexError(id, message, item.getName());
        }
        if (!item.isFinal) {
            return BaseItem.success;
        }
        this.Push(item.First);
        return BaseItem.fail;
    }
    clearEnv() {
        for (const id of Object.keys(this.env)) {
            delete this.env[id];
        }
    }
    setProperties(def) {
        Object.assign(this._properties, def);
        return this;
    }
    getName() {
        return this.getProperty('name');
    }
    toString() {
        return this.kind + '[' + this.nodes.join('; ') + ']';
    }
    getErrors(kind) {
        const CLASS = this.constructor;
        return CLASS.errors[kind] || BaseItem.errors[kind];
    }
}
BaseItem.fail = [null, false];
BaseItem.success = [null, true];
BaseItem.errors = {
    end: ['MissingBeginExtraEnd', 'Missing \\begin{%1} or extra \\end{%1}'],
    close: ['ExtraCloseMissingOpen', 'Extra close brace or missing open brace'],
    right: ['MissingLeftExtraRight', 'Missing \\left or extra \\right'],
    middle: ['ExtraMiddle', 'Extra \\middle'],
};
//# sourceMappingURL=StackItem.js.map
;// ./mjs/input/tex/TexConstants.js
const TexConstant = {
    Variant: {
        NORMAL: 'normal',
        BOLD: 'bold',
        ITALIC: 'italic',
        BOLDITALIC: 'bold-italic',
        DOUBLESTRUCK: 'double-struck',
        FRAKTUR: 'fraktur',
        BOLDFRAKTUR: 'bold-fraktur',
        SCRIPT: 'script',
        BOLDSCRIPT: 'bold-script',
        SANSSERIF: 'sans-serif',
        BOLDSANSSERIF: 'bold-sans-serif',
        SANSSERIFITALIC: 'sans-serif-italic',
        SANSSERIFBOLDITALIC: 'sans-serif-bold-italic',
        MONOSPACE: 'monospace',
        INITIAL: 'inital',
        TAILED: 'tailed',
        LOOPED: 'looped',
        STRETCHED: 'stretched',
        CALLIGRAPHIC: '-tex-calligraphic',
        BOLDCALLIGRAPHIC: '-tex-bold-calligraphic',
        OLDSTYLE: '-tex-oldstyle',
        BOLDOLDSTYLE: '-tex-bold-oldstyle',
        MATHITALIC: '-tex-mathit',
    },
    Form: {
        PREFIX: 'prefix',
        INFIX: 'infix',
        POSTFIX: 'postfix',
    },
    LineBreak: {
        AUTO: 'auto',
        NEWLINE: 'newline',
        NOBREAK: 'nobreak',
        GOODBREAK: 'goodbreak',
        BADBREAK: 'badbreak',
    },
    LineBreakStyle: {
        BEFORE: 'before',
        AFTER: 'after',
        DUPLICATE: 'duplicate',
        INFIXLINBREAKSTYLE: 'infixlinebreakstyle',
    },
    IndentAlign: {
        LEFT: 'left',
        CENTER: 'center',
        RIGHT: 'right',
        AUTO: 'auto',
        ID: 'id',
        INDENTALIGN: 'indentalign',
    },
    IndentShift: {
        INDENTSHIFT: 'indentshift',
    },
    LineThickness: {
        THIN: 'thin',
        MEDIUM: 'medium',
        THICK: 'thick',
    },
    Notation: {
        LONGDIV: 'longdiv',
        ACTUARIAL: 'actuarial',
        PHASORANGLE: 'phasorangle',
        RADICAL: 'radical',
        BOX: 'box',
        ROUNDEDBOX: 'roundedbox',
        CIRCLE: 'circle',
        LEFT: 'left',
        RIGHT: 'right',
        TOP: 'top',
        BOTTOM: 'bottom',
        UPDIAGONALSTRIKE: 'updiagonalstrike',
        DOWNDIAGONALSTRIKE: 'downdiagonalstrike',
        VERTICALSTRIKE: 'verticalstrike',
        HORIZONTALSTRIKE: 'horizontalstrike',
        NORTHEASTARROW: 'northeastarrow',
        MADRUWB: 'madruwb',
        UPDIAGONALARROW: 'updiagonalarrow',
    },
    Align: {
        TOP: 'top',
        BOTTOM: 'bottom',
        CENTER: 'center',
        BASELINE: 'baseline',
        AXIS: 'axis',
        LEFT: 'left',
        RIGHT: 'right',
    },
    Lines: {
        NONE: 'none',
        SOLID: 'solid',
        DASHED: 'dashed',
    },
    Side: {
        LEFT: 'left',
        RIGHT: 'right',
        LEFTOVERLAP: 'leftoverlap',
        RIGHTOVERLAP: 'rightoverlap',
    },
    Width: {
        AUTO: 'auto',
        FIT: 'fit',
    },
    Actiontype: {
        TOGGLE: 'toggle',
        STATUSLINE: 'statusline',
        TOOLTIP: 'tooltip',
        INPUT: 'input',
    },
    Overflow: {
        LINBREAK: 'linebreak',
        SCROLL: 'scroll',
        ELIDE: 'elide',
        TRUNCATE: 'truncate',
        SCALE: 'scale',
    },
    Unit: {
        EM: 'em',
        EX: 'ex',
        PX: 'px',
        IN: 'in',
        CM: 'cm',
        MM: 'mm',
        PT: 'pt',
        PC: 'pc',
    },
    Attr: {
        LATEX: 'data-latex',
        LATEXITEM: 'data-latex-item',
    },
};
//# sourceMappingURL=TexConstants.js.map
;// ./mjs/input/tex/TexParser.js







class TexParser {
    constructor(_string, env, configuration) {
        this._string = _string;
        this.configuration = configuration;
        this.macroCount = 0;
        this.i = 0;
        this.currentCS = '';
        this.saveI = 0;
        const inner = Object.hasOwn(env, 'isInner');
        const isInner = env['isInner'];
        delete env['isInner'];
        let ENV;
        if (env) {
            ENV = {};
            for (const id of Object.keys(env)) {
                ENV[id] = env[id];
            }
        }
        this.configuration.pushParser(this);
        this.stack = new Stack(this.itemFactory, ENV, inner ? isInner : true);
        this.Parse();
        this.Push(this.itemFactory.create('stop'));
        this.updateResult(this.string, this.i);
        this.stack.env = ENV;
    }
    get options() {
        return this.configuration.options;
    }
    get itemFactory() {
        return this.configuration.itemFactory;
    }
    get tags() {
        return this.configuration.tags;
    }
    set string(str) {
        this._string = str;
    }
    get string() {
        return this._string;
    }
    parse(kind, input) {
        const i = this.saveI;
        this.saveI = this.i;
        const result = this.configuration.handlers.get(kind).parse(input);
        this.updateResult(input[1], i);
        this.saveI = i;
        return result;
    }
    lookup(kind, token) {
        return this.configuration.handlers.get(kind).lookup(token);
    }
    contains(kind, token) {
        return this.configuration.handlers.get(kind).contains(token);
    }
    toString() {
        let str = '';
        for (const config of Array.from(this.configuration.handlers.keys())) {
            str +=
                config +
                    ': ' +
                    this.configuration.handlers.get(config) +
                    '\n';
        }
        return str;
    }
    Parse() {
        let c;
        while (this.i < this.string.length) {
            c = this.getCodePoint();
            this.i += c.length;
            this.parse(HandlerType.CHARACTER, [this, c]);
        }
    }
    Push(arg) {
        if (arg instanceof BaseItem) {
            arg.startI = this.saveI;
            arg.stopI = this.i;
            arg.startStr = this.string;
        }
        if (arg instanceof AbstractMmlNode && arg.isInferred) {
            this.PushAll(arg.childNodes);
        }
        else {
            this.stack.Push(arg);
        }
    }
    PushAll(args) {
        for (const arg of args) {
            this.stack.Push(arg);
        }
    }
    mml() {
        if (!this.stack.Top().isKind('mml')) {
            return null;
        }
        const node = this.stack.Top().First;
        this.configuration.popParser();
        node.attributes.set(TexConstant.Attr.LATEX, this.string);
        return node;
    }
    convertDelimiter(c) {
        var _a;
        const token = this.lookup(HandlerType.DELIMITER, c);
        return (_a = token === null || token === void 0 ? void 0 : token.char) !== null && _a !== void 0 ? _a : null;
    }
    getCodePoint() {
        const code = this.string.codePointAt(this.i);
        return code === undefined ? '' : String.fromCodePoint(code);
    }
    nextIsSpace() {
        return !!this.string.charAt(this.i).match(/\s/);
    }
    GetNext() {
        while (this.nextIsSpace()) {
            this.i++;
        }
        return this.getCodePoint();
    }
    GetCS() {
        const CS = this.string
            .slice(this.i)
            .match(/^(([a-z]+) ?|[\uD800-\uDBFF].|.)/i);
        if (CS) {
            this.i += CS[0].length;
            return CS[2] || CS[1];
        }
        else {
            this.i++;
            return ' ';
        }
    }
    GetArgument(_name, noneOK = false) {
        switch (this.GetNext()) {
            case '':
                if (!noneOK) {
                    throw new tex_TexError('MissingArgFor', 'Missing argument for %1', this.currentCS);
                }
                return null;
            case '}':
                if (!noneOK) {
                    throw new tex_TexError('ExtraCloseMissingOpen', 'Extra close brace or missing open brace');
                }
                return null;
            case '\\':
                this.i++;
                return '\\' + this.GetCS();
            case '{': {
                const j = ++this.i;
                let parens = 1;
                while (this.i < this.string.length) {
                    switch (this.string.charAt(this.i++)) {
                        case '\\':
                            this.i++;
                            break;
                        case '{':
                            parens++;
                            break;
                        case '}':
                            if (--parens === 0) {
                                return this.string.slice(j, this.i - 1);
                            }
                            break;
                    }
                }
                throw new tex_TexError('MissingCloseBrace', 'Missing close brace');
            }
        }
        const c = this.getCodePoint();
        this.i += c.length;
        return c;
    }
    GetBrackets(_name, def, matchBrackets = false) {
        if (this.GetNext() !== '[') {
            return def;
        }
        const j = ++this.i;
        let braces = 0;
        let brackets = 0;
        while (this.i < this.string.length) {
            switch (this.string.charAt(this.i++)) {
                case '{':
                    braces++;
                    break;
                case '\\':
                    this.i++;
                    break;
                case '}':
                    if (braces-- <= 0) {
                        throw new tex_TexError('ExtraCloseLooking', 'Extra close brace while looking for %1', "']'");
                    }
                    break;
                case '[':
                    if (braces === 0)
                        brackets++;
                    break;
                case ']':
                    if (braces === 0) {
                        if (!matchBrackets || brackets === 0) {
                            return this.string.slice(j, this.i - 1);
                        }
                        brackets--;
                    }
                    break;
            }
        }
        throw new tex_TexError('MissingCloseBracket', "Could not find closing ']' for argument to %1", this.currentCS);
    }
    GetDelimiter(name, braceOK = false) {
        let c = this.GetNext();
        this.i += c.length;
        if (this.i <= this.string.length) {
            if (c === '\\') {
                c += this.GetCS();
            }
            else if (c === '{' && braceOK) {
                this.i--;
                c = this.GetArgument(name).trim();
            }
            if (this.contains(HandlerType.DELIMITER, c)) {
                return this.convertDelimiter(c);
            }
        }
        throw new tex_TexError('MissingOrUnrecognizedDelim', 'Missing or unrecognized delimiter for %1', this.currentCS);
    }
    GetDimen(name) {
        if (this.GetNext() === '{') {
            const dimen = this.GetArgument(name);
            const [value, unit] = UnitUtil.matchDimen(dimen);
            if (value) {
                return value + unit;
            }
        }
        else {
            const dimen = this.string.slice(this.i);
            const [value, unit, length] = UnitUtil.matchDimen(dimen, true);
            if (value) {
                this.i += length;
                return value + unit;
            }
        }
        throw new tex_TexError('MissingDimOrUnits', 'Missing dimension or its units for %1', this.currentCS);
    }
    GetUpTo(_name, token) {
        while (this.nextIsSpace()) {
            this.i++;
        }
        const j = this.i;
        let braces = 0;
        while (this.i < this.string.length) {
            const k = this.i;
            let c = this.GetNext();
            this.i += c.length;
            switch (c) {
                case '\\':
                    c += this.GetCS();
                    break;
                case '{':
                    braces++;
                    break;
                case '}':
                    if (braces === 0) {
                        throw new tex_TexError('ExtraCloseLooking', 'Extra close brace while looking for %1', token);
                    }
                    braces--;
                    break;
            }
            if (braces === 0 && c === token) {
                return this.string.slice(j, k);
            }
        }
        throw new tex_TexError('TokenNotFoundForCommand', 'Could not find %1 for %2', token, this.currentCS);
    }
    ParseArg(name) {
        return new TexParser(this.GetArgument(name), this.stack.env, this.configuration).mml();
    }
    ParseUpTo(name, token) {
        return new TexParser(this.GetUpTo(name, token), this.stack.env, this.configuration).mml();
    }
    GetDelimiterArg(name) {
        const c = UnitUtil.trimSpaces(this.GetArgument(name));
        if (c === '') {
            return null;
        }
        if (this.contains(HandlerType.DELIMITER, c)) {
            return c;
        }
        throw new tex_TexError('MissingOrUnrecognizedDelim', 'Missing or unrecognized delimiter for %1', this.currentCS);
    }
    GetStar() {
        const star = this.GetNext() === '*';
        if (star) {
            this.i++;
        }
        return star;
    }
    create(kind, ...rest) {
        const node = this.configuration.nodeFactory.create(kind, ...rest);
        if (node.isToken && node.attributes.hasExplicit('mathvariant')) {
            if (node.attributes.get('mathvariant').charAt(0) === '-') {
                node.setProperty('ignore-variant', true);
            }
        }
        return node;
    }
    updateResult(input, old) {
        const node = this.stack.Prev(true);
        if (!node) {
            return;
        }
        const existing = node.attributes.get(TexConstant.Attr.LATEXITEM);
        if (existing !== undefined) {
            node.attributes.set(TexConstant.Attr.LATEX, existing);
            return;
        }
        old = old < this.saveI ? this.saveI : old;
        let str = old !== this.i ? this.string.slice(old, this.i) : input;
        str = str.trim();
        if (!str) {
            return;
        }
        if (input === '\\') {
            str = '\\' + str;
        }
        if (node.attributes.get(TexConstant.Attr.LATEX) === '^' &&
            str !== '^' &&
            str !== '\\^') {
            if (node.childNodes[2]) {
                if (str === '}') {
                    this.composeBraces(node.childNodes[2]);
                }
                else {
                    node.childNodes[2].attributes.set(TexConstant.Attr.LATEX, str);
                }
            }
            if (node.childNodes[1]) {
                const sub = node.childNodes[1].attributes.get(TexConstant.Attr.LATEX);
                this.composeLatex(node, `_${sub}^`, 0, 2);
            }
            else {
                this.composeLatex(node, '^', 0, 2);
            }
            return;
        }
        if (node.attributes.get(TexConstant.Attr.LATEX) === '_' &&
            str !== '_' &&
            str !== '\\_') {
            if (node.childNodes[1]) {
                if (str === '}') {
                    this.composeBraces(node.childNodes[1]);
                }
                else {
                    node.childNodes[1].attributes.set(TexConstant.Attr.LATEX, str);
                }
            }
            if (node.childNodes[2]) {
                const sub = node.childNodes[2].attributes.get(TexConstant.Attr.LATEX);
                this.composeLatex(node, `^${sub}_`, 0, 1);
            }
            else {
                this.composeLatex(node, '_', 0, 1);
            }
            return;
        }
        if (str === '}') {
            this.composeBraces(node);
            return;
        }
        node.attributes.set(TexConstant.Attr.LATEX, str);
    }
    composeLatex(node, comp, pos1, pos2) {
        if (!node.childNodes[pos1] || !node.childNodes[pos2])
            return;
        const expr = (node.childNodes[pos1].attributes.get(TexConstant.Attr.LATEX) || '') +
            comp +
            node.childNodes[pos2].attributes.get(TexConstant.Attr.LATEX);
        node.attributes.set(TexConstant.Attr.LATEX, expr);
    }
    composeBraces(atom) {
        const str = this.composeBracedContent(atom);
        atom.attributes.set(TexConstant.Attr.LATEX, `{${str}}`);
    }
    composeBracedContent(atom) {
        var _a, _b;
        const children = ((_a = atom.childNodes[0]) === null || _a === void 0 ? void 0 : _a.childNodes) || [];
        let expr = '';
        for (const child of children) {
            const att = (((_b = child === null || child === void 0 ? void 0 : child.attributes) === null || _b === void 0 ? void 0 : _b.get(TexConstant.Attr.LATEX)) ||
                '');
            if (!att)
                continue;
            expr +=
                expr && expr.match(/[a-zA-Z]$/) && att.match(/^[a-zA-Z]/)
                    ? ' ' + att
                    : att;
        }
        return expr;
    }
}
//# sourceMappingURL=TexParser.js.map
;// ./components/mjs/core/lib/core/Tree/Factory.js
const Factory_def = MathJax._.core.Tree.Factory;
const AbstractFactory = Factory_def.AbstractFactory;

;// ./mjs/input/tex/StackItemFactory.js


class DummyItem extends BaseItem {
}
class StackItemFactory extends AbstractFactory {
    constructor() {
        super(...arguments);
        this.defaultKind = 'dummy';
        this.configuration = null;
    }
}
StackItemFactory.DefaultStackItems = {
    [DummyItem.prototype.kind]: DummyItem,
};
/* harmony default export */ const tex_StackItemFactory = (StackItemFactory);
//# sourceMappingURL=StackItemFactory.js.map
;// ./mjs/input/tex/NodeFactory.js

class NodeFactory {
    constructor() {
        this.mmlFactory = null;
        this.factory = {
            node: NodeFactory.createNode,
            token: NodeFactory.createToken,
            text: NodeFactory.createText,
            error: NodeFactory.createError,
        };
    }
    static createNode(factory, kind, children = [], def = {}, text) {
        const node = factory.mmlFactory.create(kind);
        node.setChildren(children);
        if (text) {
            node.appendChild(text);
        }
        tex_NodeUtil.setProperties(node, def);
        return node;
    }
    static createToken(factory, kind, def = {}, text = '') {
        const textNode = factory.create('text', text);
        return factory.create('node', kind, [], def, textNode);
    }
    static createText(factory, text) {
        if (text == null) {
            return null;
        }
        return factory.mmlFactory.create('text').setText(text);
    }
    static createError(factory, message) {
        const text = factory.create('text', message);
        const mtext = factory.create('node', 'mtext', [], {}, text);
        const error = factory.create('node', 'merror', [mtext], {
            'data-mjx-error': message,
        });
        return error;
    }
    setMmlFactory(mmlFactory) {
        this.mmlFactory = mmlFactory;
    }
    set(kind, func) {
        this.factory[kind] = func;
    }
    setCreators(maps) {
        for (const kind in maps) {
            this.set(kind, maps[kind]);
        }
    }
    create(kind, ...rest) {
        const func = this.factory[kind] || this.factory['node'];
        const node = func(this, rest[0], ...rest.slice(1));
        if (kind === 'node') {
            this.configuration.addNode(rest[0], node);
        }
        return node;
    }
    get(kind) {
        return this.factory[kind];
    }
}
//# sourceMappingURL=NodeFactory.js.map
;// ./components/mjs/core/lib/util/Entities.js
const Entities_def = MathJax._.util.Entities;
const options = Entities_def.options;
const entities = Entities_def.entities;
const add = Entities_def.add;
const remove = Entities_def.remove;
const translate = Entities_def.translate;
const numeric = Entities_def.numeric;

;// ./mjs/input/tex/ParseUtil.js






class KeyValueDef {
    static oneof(...values) {
        return new this('string', (value) => values.includes(value), (value) => value);
    }
    constructor(name, verify, convert) {
        this.name = name;
        this.verify = verify;
        this.convert = convert;
    }
}
const KeyValueTypes = {
    boolean: new KeyValueDef('boolean', (value) => value === 'true' || value === 'false', (value) => value === 'true'),
    number: new KeyValueDef('number', (value) => !!value.match(/^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[-+]?\d+)?$/), (value) => parseFloat(value)),
    integer: new KeyValueDef('integer', (value) => !!value.match(/^[-+]?\d+$/), (value) => parseInt(value)),
    string: new KeyValueDef('string', (_value) => true, (value) => value),
    dimen: new KeyValueDef('dimen', (value) => UnitUtil.matchDimen(value)[0] !== null, (value) => value),
};
function readKeyval(text, l3keys = false) {
    const options = {};
    let rest = text;
    let end, key, val;
    let dropBrace = true;
    while (rest) {
        [key, end, rest] = readValue(rest, ['=', ','], l3keys, dropBrace);
        dropBrace = false;
        if (end === '=') {
            [val, end, rest] = readValue(rest, [','], l3keys);
            val = val === 'false' || val === 'true' ? JSON.parse(val) : val;
            options[key] = val;
        }
        else if (key) {
            options[key] = true;
        }
    }
    return options;
}
function removeBraces(text, count) {
    if (count === 0) {
        return text
            .replace(/^\s+/, '')
            .replace(/([^\\\s]|^)((?:\\\\)*(?:\\\s)?)?\s+$/, '$1$2');
    }
    while (count > 0) {
        text = text.trim().slice(1, -1);
        count--;
    }
    return text;
}
function readValue(text, end, l3keys = false, dropBrace = false) {
    const length = text.length;
    let braces = 0;
    let value = '';
    let index = 0;
    let start = 0;
    let countBraces = true;
    while (index < length) {
        const c = text[index++];
        switch (c) {
            case '\\':
                value += c + (text[index++] || '');
                countBraces = false;
                continue;
            case ' ':
                break;
            case '{':
                if (countBraces) {
                    start++;
                }
                braces++;
                break;
            case '}':
                if (!braces) {
                    throw new tex_TexError('ExtraCloseMissingOpen', 'Extra close brace or missing open brace');
                }
                braces--;
                countBraces = false;
                break;
            default:
                if (!braces && end.includes(c)) {
                    return [
                        removeBraces(value, l3keys ? Math.min(1, start) : start),
                        c,
                        text.slice(index),
                    ];
                }
                if (start > braces) {
                    start = braces;
                }
                countBraces = false;
        }
        value += c;
    }
    if (braces) {
        throw new tex_TexError('ExtraOpenMissingClose', 'Extra open brace or missing close brace');
    }
    return dropBrace && start
        ? ['', '', removeBraces(value, 1)]
        : [
            removeBraces(value, l3keys ? Math.min(1, start) : start),
            '',
            text.slice(index),
        ];
}
const ParseUtil = {
    cols(...W) {
        return W.map((n) => UnitUtil.em(n)).join(' ');
    },
    fenced(configuration, open, mml, close, big = '', color = '') {
        const nf = configuration.nodeFactory;
        const mrow = nf.create('node', 'mrow', [], {
            open: open,
            close: close,
            texClass: TEXCLASS.INNER,
        });
        let mo;
        if (big) {
            mo = new TexParser('\\' + big + 'l' + open, configuration.parser.stack.env, configuration).mml();
        }
        else {
            const openNode = nf.create('text', open);
            mo = nf.create('node', 'mo', [], {
                fence: true,
                stretchy: true,
                symmetric: true,
                texClass: TEXCLASS.OPEN,
            }, openNode);
        }
        tex_NodeUtil.appendChildren(mrow, [mo, mml]);
        if (big) {
            mo = new TexParser('\\' + big + 'r' + close, configuration.parser.stack.env, configuration).mml();
        }
        else {
            const closeNode = nf.create('text', close);
            mo = nf.create('node', 'mo', [], {
                fence: true,
                stretchy: true,
                symmetric: true,
                texClass: TEXCLASS.CLOSE,
            }, closeNode);
        }
        if (color) {
            mo.attributes.set('mathcolor', color);
        }
        tex_NodeUtil.appendChildren(mrow, [mo]);
        return mrow;
    },
    fixedFence(configuration, open, mml, close) {
        const mrow = configuration.nodeFactory.create('node', 'mrow', [], {
            open: open,
            close: close,
            texClass: TEXCLASS.ORD,
        });
        if (open) {
            tex_NodeUtil.appendChildren(mrow, [
                ParseUtil.mathPalette(configuration, open, 'l'),
            ]);
        }
        if (tex_NodeUtil.isType(mml, 'mrow')) {
            tex_NodeUtil.appendChildren(mrow, tex_NodeUtil.getChildren(mml));
        }
        else {
            tex_NodeUtil.appendChildren(mrow, [mml]);
        }
        if (close) {
            tex_NodeUtil.appendChildren(mrow, [
                ParseUtil.mathPalette(configuration, close, 'r'),
            ]);
        }
        return mrow;
    },
    mathPalette(configuration, fence, side) {
        if (fence === '{' || fence === '}') {
            fence = '\\' + fence;
        }
        const D = '{\\bigg' + side + ' ' + fence + '}';
        const T = '{\\big' + side + ' ' + fence + '}';
        return new TexParser('\\mathchoice' + D + T + T + T, {}, configuration).mml();
    },
    fixInitialMO(configuration, nodes) {
        for (let i = 0, m = nodes.length; i < m; i++) {
            const child = nodes[i];
            if (child &&
                !tex_NodeUtil.isType(child, 'mspace') &&
                (!tex_NodeUtil.isType(child, 'TeXAtom') ||
                    (tex_NodeUtil.getChildren(child)[0] &&
                        tex_NodeUtil.getChildren(tex_NodeUtil.getChildren(child)[0]).length))) {
                if (tex_NodeUtil.isEmbellished(child) ||
                    (tex_NodeUtil.isType(child, 'TeXAtom') &&
                        tex_NodeUtil.getTexClass(child) === TEXCLASS.REL)) {
                    const mi = configuration.nodeFactory.create('node', 'mi');
                    nodes.unshift(mi);
                }
                break;
            }
        }
    },
    internalMath(parser, text, level, font) {
        text = text.replace(/ +/g, ' ');
        if (parser.configuration.options.internalMath) {
            return parser.configuration.options.internalMath(parser, text, level, font);
        }
        const mathvariant = font || parser.stack.env.font;
        const def = mathvariant ? { mathvariant } : {};
        let mml = [], i = 0, k = 0, c, node, match = '', braces = 0;
        if (text.match(/\\?[${}\\]|\\\(|\\(?:eq)?ref\s*\{|\\U/)) {
            while (i < text.length) {
                c = text.charAt(i++);
                if (c === '$') {
                    if (match === '$' && braces === 0) {
                        node = parser.create('node', 'TeXAtom', [
                            new TexParser(text.slice(k, i - 1), {}, parser.configuration).mml(),
                        ]);
                        mml.push(node);
                        match = '';
                        k = i;
                    }
                    else if (match === '') {
                        if (k < i - 1) {
                            mml.push(ParseUtil.internalText(parser, text.slice(k, i - 1), def));
                        }
                        match = '$';
                        k = i;
                    }
                }
                else if (c === '{' && match !== '') {
                    braces++;
                }
                else if (c === '}') {
                    if (match === '}' && braces === 0) {
                        const atom = new TexParser(text.slice(k, i), {}, parser.configuration).mml();
                        node = parser.create('node', 'TeXAtom', [atom], def);
                        mml.push(node);
                        match = '';
                        k = i;
                    }
                    else if (match !== '') {
                        if (braces) {
                            braces--;
                        }
                    }
                }
                else if (c === '\\') {
                    if (match === '' && text.substring(i).match(/^(eq)?ref\s*\{/)) {
                        const len = RegExp['$&'].length;
                        if (k < i - 1) {
                            mml.push(ParseUtil.internalText(parser, text.slice(k, i - 1), def));
                        }
                        match = '}';
                        k = i - 1;
                        i += len;
                    }
                    else {
                        c = text.charAt(i++);
                        if (c === '(' && match === '') {
                            if (k < i - 2) {
                                mml.push(ParseUtil.internalText(parser, text.slice(k, i - 2), def));
                            }
                            match = ')';
                            k = i;
                        }
                        else if (c === ')' && match === ')' && braces === 0) {
                            node = parser.create('node', 'TeXAtom', [
                                new TexParser(text.slice(k, i - 2), {}, parser.configuration).mml(),
                            ]);
                            mml.push(node);
                            match = '';
                            k = i;
                        }
                        else if (c.match(/[${}\\]/) && match === '') {
                            i--;
                            text = text.substring(0, i - 1) + text.substring(i);
                        }
                        else if (c === 'U') {
                            const arg = text
                                .substring(i)
                                .match(/^\s*(?:([0-9A-F])|\{\s*([0-9A-F]+)\s*\})/);
                            if (!arg) {
                                throw new tex_TexError('BadRawUnicode', 'Argument to %1 must a hexadecimal number with 1 to 6 digits', '\\U');
                            }
                            const c = String.fromCodePoint(parseInt(arg[1] || arg[2], 16));
                            text =
                                text.substring(0, i - 2) +
                                    c +
                                    text.substring(i + arg[0].length);
                            i = i - 2 + c.length;
                        }
                    }
                }
            }
            if (match !== '') {
                throw new tex_TexError('MathNotTerminated', 'Math mode is not properly terminated');
            }
        }
        if (k < text.length) {
            mml.push(ParseUtil.internalText(parser, text.slice(k), def));
        }
        if (level != null) {
            mml = [
                parser.create('node', 'mstyle', mml, {
                    displaystyle: false,
                    scriptlevel: level,
                }),
            ];
        }
        else if (mml.length > 1) {
            mml = [parser.create('node', 'mrow', mml)];
        }
        return mml;
    },
    internalText(parser, text, def) {
        text = text
            .replace(/\n+/g, ' ')
            .replace(/^ +/, entities.nbsp)
            .replace(/ +$/, entities.nbsp);
        const textNode = parser.create('text', text);
        return parser.create('node', 'mtext', [], def, textNode);
    },
    underOver(parser, base, script, pos, stack) {
        ParseUtil.checkMovableLimits(base);
        if (tex_NodeUtil.isType(base, 'munderover') && tex_NodeUtil.isEmbellished(base)) {
            tex_NodeUtil.setProperties(tex_NodeUtil.getCoreMO(base), {
                lspace: 0,
                rspace: 0,
            });
            const mo = parser.create('node', 'mo', [], { rspace: 0 });
            base = parser.create('node', 'mrow', [mo, base]);
        }
        const mml = parser.create('node', 'munderover', [base]);
        tex_NodeUtil.setChild(mml, pos === 'over' ? mml.over : mml.under, script);
        let node = mml;
        if (stack) {
            node = parser.create('node', 'TeXAtom', [
                parser.create('node', 'mstyle', [mml], {
                    displaystyle: true,
                    scriptlevel: 0,
                }),
            ], {
                texClass: TEXCLASS.OP,
                movesupsub: true,
            });
        }
        tex_NodeUtil.setProperty(node, 'subsupOK', true);
        return node;
    },
    checkMovableLimits(base) {
        const symbol = tex_NodeUtil.isType(base, 'mo') ? tex_NodeUtil.getForm(base) : null;
        if (tex_NodeUtil.getProperty(base, 'movablelimits') ||
            (symbol && symbol[3] && symbol[3].movablelimits)) {
            tex_NodeUtil.setProperties(base, { movablelimits: false });
        }
    },
    setArrayAlign(array, align, parser) {
        if (!parser) {
            align = UnitUtil.trimSpaces(align || '');
        }
        if (align === 't') {
            array.arraydef.align = 'baseline 1';
        }
        else if (align === 'b') {
            array.arraydef.align = 'baseline -1';
        }
        else if (align === 'c') {
            array.arraydef.align = 'axis';
        }
        else if (align) {
            if (parser) {
                parser.string = `[${align}]` + parser.string.slice(parser.i);
                parser.i = 0;
            }
            else {
                array.arraydef.align = align;
            }
        }
        return array;
    },
    substituteArgs(parser, args, str) {
        let text = '';
        let newstring = '';
        let i = 0;
        while (i < str.length) {
            let c = str.charAt(i++);
            if (c === '\\') {
                text += c + str.charAt(i++);
            }
            else if (c === '#') {
                c = str.charAt(i++);
                if (c === '#') {
                    text += c;
                }
                else {
                    if (!c.match(/[1-9]/) || parseInt(c, 10) > args.length) {
                        throw new tex_TexError('IllegalMacroParam', 'Illegal macro parameter reference');
                    }
                    newstring = ParseUtil.addArgs(parser, ParseUtil.addArgs(parser, newstring, text), args[parseInt(c, 10) - 1]);
                    text = '';
                }
            }
            else {
                text += c;
            }
        }
        return ParseUtil.addArgs(parser, newstring, text);
    },
    addArgs(parser, s1, s2) {
        if (s2.match(/^[a-z]/i) && s1.match(/(^|[^\\])(\\\\)*\\[a-z]+$/i)) {
            s1 += ' ';
        }
        if (s1.length + s2.length > parser.configuration.options['maxBuffer']) {
            throw new tex_TexError('MaxBufferSize', 'MathJax internal buffer size exceeded; is there a' +
                ' recursive macro call?');
        }
        return s1 + s2;
    },
    checkMaxMacros(parser, isMacro = true) {
        if (++parser.macroCount <= parser.configuration.options['maxMacros']) {
            return;
        }
        if (isMacro) {
            throw new tex_TexError('MaxMacroSub1', 'MathJax maximum macro substitution count exceeded; ' +
                'is here a recursive macro call?');
        }
        else {
            throw new tex_TexError('MaxMacroSub2', 'MathJax maximum substitution count exceeded; ' +
                'is there a recursive latex environment?');
        }
    },
    checkEqnEnv(parser, nestable = true) {
        const top = parser.stack.Top();
        const first = top.First;
        if ((top.getProperty('nestable') && nestable && !first) ||
            top.getProperty('nestStart')) {
            return;
        }
        if (!top.isKind('start') || first) {
            throw new tex_TexError('ErroneousNestingEq', 'Erroneous nesting of equation structures');
        }
    },
    copyNode(node, parser) {
        const tree = node.copy();
        const options = parser.configuration;
        tree.walkTree((n) => {
            options.addNode(n.kind, n);
            const lists = (n.getProperty('in-lists') || '').split(/,/);
            for (const list of lists) {
                if (list) {
                    options.addNode(list, n);
                }
            }
        });
        return tree;
    },
    mmlFilterAttribute(_parser, _name, value) {
        return value;
    },
    getFontDef(parser) {
        const font = parser.stack.env['font'];
        return font ? { mathvariant: font } : {};
    },
    keyvalOptions(attrib, allowed = null, error = false, l3keys = false) {
        const def = readKeyval(attrib, l3keys);
        if (allowed) {
            for (const key of Object.keys(def)) {
                if (Object.hasOwn(allowed, key)) {
                    if (allowed[key] instanceof KeyValueDef) {
                        const type = allowed[key];
                        const value = String(def[key]);
                        if (!type.verify(value)) {
                            throw new tex_TexError('InvalidValue', "Value for key '%1' is not of the expected type", key);
                        }
                        def[key] = type.convert(value);
                    }
                }
                else {
                    if (error) {
                        throw new tex_TexError('InvalidOption', 'Invalid option: %1', key);
                    }
                    delete def[key];
                }
            }
        }
        return def;
    },
    isLatinOrGreekChar(c) {
        return !!c.normalize('NFD').match(/[a-zA-Z\u0370-\u03F0]/);
    },
};
//# sourceMappingURL=ParseUtil.js.map
;// ./mjs/input/tex/ColumnParser.js




class ColumnParser {
    constructor() {
        this.columnHandler = {
            l: (state) => (state.calign[state.j++] = 'left'),
            c: (state) => (state.calign[state.j++] = 'center'),
            r: (state) => (state.calign[state.j++] = 'right'),
            p: (state) => this.getColumn(state, 'top'),
            m: (state) => this.getColumn(state, 'middle'),
            b: (state) => this.getColumn(state, 'bottom'),
            w: (state) => this.getColumn(state, 'top', ''),
            W: (state) => this.getColumn(state, 'top', ''),
            '|': (state) => this.addRule(state, 'solid'),
            ':': (state) => this.addRule(state, 'dashed'),
            '>': (state) => (state.cstart[state.j] =
                (state.cstart[state.j] || '') + this.getBraces(state)),
            '<': (state) => (state.cend[state.j - 1] =
                (state.cend[state.j - 1] || '') + this.getBraces(state)),
            '@': (state) => this.addAt(state, this.getBraces(state)),
            '!': (state) => this.addBang(state, this.getBraces(state)),
            '*': (state) => this.repeat(state),
            P: (state) => this.macroColumn(state, '>{$}p{#1}<{$}', 1),
            M: (state) => this.macroColumn(state, '>{$}m{#1}<{$}', 1),
            B: (state) => this.macroColumn(state, '>{$}b{#1}<{$}', 1),
            ' ': (_state) => { },
        };
        this.MAXCOLUMNS = 10000;
    }
    process(parser, template, array) {
        const state = {
            parser,
            template,
            i: 0,
            j: 0,
            c: '',
            cwidth: [],
            calign: [],
            cspace: [],
            clines: [],
            cstart: array.cstart,
            cend: array.cend,
            ralign: array.ralign,
            cextra: array.cextra,
        };
        let n = 0;
        while (state.i < state.template.length) {
            if (n++ > this.MAXCOLUMNS) {
                throw new tex_TexError('MaxColumns', 'Too many column specifiers (perhaps looping column definitions?)');
            }
            const code = state.template.codePointAt(state.i);
            const c = (state.c = String.fromCodePoint(code));
            state.i += c.length;
            if (!Object.hasOwn(this.columnHandler, c)) {
                throw new tex_TexError('BadPreamToken', 'Illegal pream-token (%1)', c);
            }
            this.columnHandler[c](state);
        }
        this.setColumnAlign(state, array);
        this.setColumnWidths(state, array);
        this.setColumnSpacing(state, array);
        this.setColumnLines(state, array);
        this.setPadding(state, array);
    }
    setColumnAlign(state, array) {
        array.arraydef.columnalign = state.calign.join(' ');
    }
    setColumnWidths(state, array) {
        if (!state.cwidth.length)
            return;
        const cwidth = [...state.cwidth];
        if (cwidth.length < state.calign.length) {
            cwidth.push('auto');
        }
        array.arraydef.columnwidth = cwidth.map((w) => w || 'auto').join(' ');
    }
    setColumnSpacing(state, array) {
        if (!state.cspace.length)
            return;
        const cspace = [...state.cspace];
        if (cspace.length < state.calign.length) {
            cspace.push('1em');
        }
        array.arraydef.columnspacing = cspace
            .slice(1)
            .map((d) => d || '1em')
            .join(' ');
    }
    setColumnLines(state, array) {
        if (!state.clines.length)
            return;
        const clines = [...state.clines];
        if (clines[0]) {
            array.frame.push(['left', clines[0]]);
        }
        if (clines.length > state.calign.length) {
            array.frame.push(['right', clines.pop()]);
        }
        else if (clines.length < state.calign.length) {
            clines.push('none');
        }
        if (clines.length > 1) {
            array.arraydef.columnlines = clines
                .slice(1)
                .map((l) => l || 'none')
                .join(' ');
        }
    }
    setPadding(state, array) {
        if (!state.cextra[0] && !state.cextra[state.calign.length - 1])
            return;
        const i = state.calign.length - 1;
        const cspace = state.cspace;
        const space = !state.cextra[i] ? null : cspace[i];
        array.arraydef['data-array-padding'] =
            `${cspace[0] || '.5em'} ${space || '.5em'}`;
    }
    getColumn(state, ralign, calign = 'left') {
        state.calign[state.j] = calign || this.getAlign(state);
        state.cwidth[state.j] = this.getDimen(state);
        state.ralign[state.j] = [
            ralign,
            state.cwidth[state.j],
            state.calign[state.j],
        ];
        state.j++;
    }
    getDimen(state) {
        const dim = this.getBraces(state);
        if (!UnitUtil.matchDimen(dim)[0]) {
            throw new tex_TexError('MissingColumnDimOrUnits', 'Missing dimension or its units for %1 column declaration', state.c);
        }
        return dim;
    }
    getAlign(state) {
        const align = this.getBraces(state);
        return lookup(align.toLowerCase(), { l: 'left', c: 'center', r: 'right' }, '');
    }
    getBraces(state) {
        while (state.template[state.i] === ' ')
            state.i++;
        if (state.i >= state.template.length) {
            throw new tex_TexError('MissingArgForColumn', 'Missing argument for %1 column declaration', state.c);
        }
        if (state.template[state.i] !== '{') {
            return state.template[state.i++];
        }
        const i = ++state.i;
        let braces = 1;
        while (state.i < state.template.length) {
            switch (state.template.charAt(state.i++)) {
                case '\\':
                    state.i++;
                    break;
                case '{':
                    braces++;
                    break;
                case '}':
                    if (--braces === 0) {
                        return state.template.slice(i, state.i - 1);
                    }
                    break;
            }
        }
        throw new tex_TexError('MissingCloseBrace', 'Missing close brace');
    }
    macroColumn(state, macro, n) {
        const args = [];
        while (n > 0 && n--) {
            args.push(this.getBraces(state));
        }
        state.template =
            ParseUtil.substituteArgs(state.parser, args, macro) +
                state.template.slice(state.i);
        state.i = 0;
    }
    addRule(state, rule) {
        if (state.clines[state.j]) {
            this.addAt(state, '\\,');
        }
        state.clines[state.j] = rule;
        if (state.cspace[state.j] === '0') {
            state.cstart[state.j] = '\\hspace{.5em}';
        }
    }
    addAt(state, macro) {
        const { cstart, cspace, j } = state;
        state.cextra[j] = true;
        state.calign[j] = 'center';
        if (state.clines[j]) {
            if (cspace[j] === '.5em') {
                cstart[j - 1] += '\\hspace{.25em}';
            }
            else if (!cspace[j]) {
                state.cend[j - 1] = (state.cend[j - 1] || '') + '\\hspace{.5em}';
            }
        }
        cstart[j] = macro;
        cspace[j] = '0';
        cspace[++state.j] = '0';
    }
    addBang(state, macro) {
        const { cstart, cspace, j } = state;
        state.cextra[j] = true;
        state.calign[j] = 'center';
        cstart[j] =
            (cspace[j] === '0' && state.clines[j] ? '\\hspace{.25em}' : '') + macro;
        if (!cspace[j]) {
            cspace[j] = '.5em';
        }
        cspace[++state.j] = '.5em';
    }
    repeat(state) {
        const num = this.getBraces(state);
        const cols = this.getBraces(state);
        const n = parseInt(num);
        if (String(n) !== num) {
            throw new tex_TexError('ColArgNotNum', 'First argument to %1 column specifier must be a number', '*');
        }
        state.template =
            new Array(n).fill(cols).join('') + state.template.substring(state.i);
        state.i = 0;
    }
}
//# sourceMappingURL=ColumnParser.js.map
;// ./mjs/input/tex/ParseOptions.js






const MATHVARIANT = TexConstant.Variant;
class ParseOptions {
    constructor(configuration, options = []) {
        this.options = {};
        this.columnParser = new ColumnParser();
        this.packageData = new Map();
        this.parsers = [];
        this.root = null;
        this.nodeLists = {};
        this.error = false;
        this.handlers = configuration.handlers;
        this.nodeFactory = new NodeFactory();
        this.nodeFactory.configuration = this;
        this.nodeFactory.setCreators(configuration.nodes);
        this.itemFactory = new tex_StackItemFactory(configuration.items);
        this.itemFactory.configuration = this;
        defaultOptions(this.options, ...options);
        defaultOptions(this.options, configuration.options);
        this.mathStyle =
            ParseOptions.getVariant.get(this.options.mathStyle) ||
                ParseOptions.getVariant.get('TeX');
    }
    pushParser(parser) {
        this.parsers.unshift(parser);
    }
    popParser() {
        this.parsers.shift();
    }
    get parser() {
        return this.parsers[0];
    }
    clear() {
        this.parsers = [];
        this.root = null;
        this.nodeLists = {};
        this.error = false;
        this.tags.resetTag();
    }
    addNode(property, node) {
        let list = this.nodeLists[property];
        if (!list) {
            list = this.nodeLists[property] = [];
        }
        list.push(node);
        if (node.kind !== property) {
            const inlists = tex_NodeUtil.getProperty(node, 'in-lists') || '';
            const lists = (inlists ? inlists.split(/,/) : [])
                .concat(property)
                .join(',');
            tex_NodeUtil.setProperty(node, 'in-lists', lists);
        }
    }
    getList(property) {
        const list = this.nodeLists[property] || [];
        const result = [];
        for (const node of list) {
            if (this.inTree(node)) {
                result.push(node);
            }
        }
        this.nodeLists[property] = result;
        return result;
    }
    removeFromList(property, nodes) {
        const list = this.nodeLists[property] || [];
        for (const node of nodes) {
            const i = list.indexOf(node);
            if (i >= 0) {
                list.splice(i, 1);
            }
        }
    }
    inTree(node) {
        while (node && node !== this.root) {
            node = node.parent;
        }
        return !!node;
    }
}
ParseOptions.getVariant = new Map([
    [
        'TeX',
        (c, b) => b ? (c.match(/^[\u0391-\u03A9\u03F4]/) ? MATHVARIANT.NORMAL : '') : '',
    ],
    ['ISO', (_c) => MATHVARIANT.ITALIC],
    [
        'French',
        (c) => c.normalize('NFD').match(/^[a-z]/)
            ? MATHVARIANT.ITALIC
            : MATHVARIANT.NORMAL,
    ],
    ['upright', (_c) => MATHVARIANT.NORMAL],
]);
/* harmony default export */ const tex_ParseOptions = (ParseOptions);
//# sourceMappingURL=ParseOptions.js.map
;// ./mjs/input/tex/Tags.js

class Label {
    constructor(tag = '???', id = '') {
        this.tag = tag;
        this.id = id;
    }
}
class TagInfo {
    constructor(env = '', taggable = false, defaultTags = false, tag = null, tagId = '', tagFormat = '', noTag = false, labelId = '') {
        this.env = env;
        this.taggable = taggable;
        this.defaultTags = defaultTags;
        this.tag = tag;
        this.tagId = tagId;
        this.tagFormat = tagFormat;
        this.noTag = noTag;
        this.labelId = labelId;
    }
}
class AbstractTags {
    constructor() {
        this.counter = 0;
        this.allCounter = 0;
        this.configuration = null;
        this.ids = {};
        this.allIds = {};
        this.labels = {};
        this.allLabels = {};
        this.redo = false;
        this.refUpdate = false;
        this.currentTag = new TagInfo();
        this.history = [];
        this.stack = [];
        this.enTag = function (node, tag) {
            const nf = this.configuration.nodeFactory;
            const cell = nf.create('node', 'mtd', [node]);
            const row = nf.create('node', 'mlabeledtr', [tag, cell]);
            const table = nf.create('node', 'mtable', [row], {
                side: this.configuration.options['tagSide'],
                minlabelspacing: this.configuration.options['tagIndent'],
                displaystyle: true,
            });
            return table;
        };
    }
    start(env, taggable, defaultTags) {
        if (this.currentTag) {
            this.stack.push(this.currentTag);
        }
        const label = this.label;
        this.currentTag = new TagInfo(env, taggable, defaultTags);
        this.label = label;
    }
    get env() {
        return this.currentTag.env;
    }
    end() {
        this.history.push(this.currentTag);
        const label = this.label;
        this.currentTag = this.stack.pop();
        if (label && !this.label) {
            this.label = label;
        }
    }
    tag(tag, noFormat) {
        this.currentTag.tag = tag;
        this.currentTag.tagFormat = noFormat ? tag : this.formatTag(tag);
        this.currentTag.noTag = false;
    }
    notag() {
        this.tag('', true);
        this.currentTag.noTag = true;
    }
    get noTag() {
        return this.currentTag.noTag;
    }
    set label(label) {
        this.currentTag.labelId = label;
    }
    get label() {
        return this.currentTag.labelId;
    }
    formatUrl(id, base) {
        return base + '#' + encodeURIComponent(id);
    }
    formatTag(tag) {
        return '(' + tag + ')';
    }
    formatRef(tag) {
        return this.formatTag(tag);
    }
    formatId(id) {
        return 'mjx-eqn:' + id.replace(/\s/g, '_');
    }
    formatNumber(n) {
        return n.toString();
    }
    autoTag() {
        if (this.currentTag.tag == null) {
            this.counter++;
            this.tag(this.formatNumber(this.counter), false);
        }
    }
    clearTag() {
        this.tag(null, true);
        this.currentTag.tagId = '';
    }
    getTag(force = false) {
        if (force) {
            this.autoTag();
            return this.makeTag();
        }
        const ct = this.currentTag;
        if (ct.taggable && !ct.noTag) {
            if (ct.defaultTags) {
                this.autoTag();
            }
            if (ct.tag) {
                return this.makeTag();
            }
        }
        return null;
    }
    resetTag() {
        this.history = [];
        this.redo = false;
        this.refUpdate = false;
        this.clearTag();
    }
    reset(offset = 0) {
        this.resetTag();
        this.counter = this.allCounter = offset;
        this.allLabels = {};
        this.allIds = {};
        this.label = '';
    }
    startEquation(math) {
        this.history = [];
        this.stack = [];
        this.clearTag();
        this.currentTag = new TagInfo('', undefined, undefined);
        this.labels = {};
        this.ids = {};
        this.counter = this.allCounter;
        this.redo = false;
        const recompile = math.inputData.recompile;
        if (recompile) {
            this.refUpdate = true;
            this.counter = recompile.counter;
        }
    }
    finishEquation(math) {
        if (this.redo) {
            math.inputData.recompile = {
                state: math.state(),
                counter: this.allCounter,
            };
        }
        if (!this.refUpdate) {
            this.allCounter = this.counter;
        }
        Object.assign(this.allIds, this.ids);
        Object.assign(this.allLabels, this.labels);
    }
    finalize(node, env) {
        if (!env.display || this.currentTag.env || this.currentTag.tag == null) {
            return node;
        }
        const tag = this.makeTag();
        const table = this.enTag(node, tag);
        return table;
    }
    makeId() {
        this.currentTag.tagId = this.formatId(this.configuration.options['useLabelIds']
            ? this.label || this.currentTag.tag
            : this.currentTag.tag);
    }
    makeTag() {
        this.makeId();
        if (this.label) {
            this.labels[this.label] = new Label(this.currentTag.tag, this.currentTag.tagId);
            this.label = '';
        }
        const mml = new TexParser('\\text{' + this.currentTag.tagFormat + '}', {}, this.configuration).mml();
        return this.configuration.nodeFactory.create('node', 'mtd', [mml], {
            id: this.currentTag.tagId,
            rowalign: this.configuration.options.tagAlign,
        });
    }
}
class NoTags extends AbstractTags {
    autoTag() { }
    getTag() {
        return !this.currentTag.tag ? null : super.getTag();
    }
}
class AllTags extends AbstractTags {
    finalize(node, env) {
        if (!env.display ||
            this.history.find(function (x) {
                return x.taggable;
            })) {
            return node;
        }
        const tag = this.getTag(true);
        return this.enTag(node, tag);
    }
}
const tagsMapping = new Map([
    ['none', NoTags],
    ['all', AllTags],
]);
let defaultTags = 'none';
const TagsFactory = {
    OPTIONS: {
        tags: defaultTags,
        tagSide: 'right',
        tagIndent: '0.8em',
        useLabelIds: true,
        ignoreDuplicateLabels: false,
        tagAlign: 'baseline',
    },
    add(name, constr) {
        tagsMapping.set(name, constr);
    },
    addTags(tags) {
        for (const key of Object.keys(tags)) {
            TagsFactory.add(key, tags[key]);
        }
    },
    create(name) {
        const constr = tagsMapping.get(name) || tagsMapping.get(defaultTags);
        if (!constr) {
            throw Error('Unknown tags class');
        }
        return new constr();
    },
    setDefault(name) {
        defaultTags = name;
    },
    getDefault() {
        return TagsFactory.create(defaultTags);
    },
};
//# sourceMappingURL=Tags.js.map
;// ./mjs/input/tex/Token.js
class Token {
    constructor(_token, _char, _attributes) {
        this._token = _token;
        this._char = _char;
        this._attributes = _attributes;
    }
    get token() {
        return this._token;
    }
    get char() {
        return this._char;
    }
    get attributes() {
        return this._attributes;
    }
}
class Macro {
    constructor(_token, _func, _args = []) {
        this._token = _token;
        this._func = _func;
        this._args = _args;
    }
    get token() {
        return this._token;
    }
    get func() {
        return this._func;
    }
    get args() {
        return this._args;
    }
}
//# sourceMappingURL=Token.js.map
;// ./mjs/input/tex/TokenMap.js


function parseResult(result) {
    return result === void 0 ? true : result;
}
class AbstractTokenMap {
    constructor(_name, _parser) {
        this._name = _name;
        this._parser = _parser;
        MapHandler.register(this);
    }
    get name() {
        return this._name;
    }
    parserFor(token) {
        return this.contains(token) ? this.parser : null;
    }
    parse([env, token]) {
        const parser = this.parserFor(token);
        const mapped = this.lookup(token);
        return parser && mapped ? parseResult(parser(env, mapped)) : null;
    }
    set parser(parser) {
        this._parser = parser;
    }
    get parser() {
        return this._parser;
    }
}
class RegExpMap extends AbstractTokenMap {
    constructor(name, parser, _regExp) {
        super(name, parser);
        this._regExp = _regExp;
    }
    contains(token) {
        return this._regExp.test(token);
    }
    lookup(token) {
        return this.contains(token) ? token : null;
    }
}
class AbstractParseMap extends AbstractTokenMap {
    constructor() {
        super(...arguments);
        this.map = new Map();
    }
    lookup(token) {
        return this.map.get(token);
    }
    contains(token) {
        return this.map.has(token);
    }
    add(token, object) {
        this.map.set(token, object);
    }
    remove(token) {
        this.map.delete(token);
    }
}
class CharacterMap extends AbstractParseMap {
    constructor(name, parser, json) {
        super(name, parser);
        for (const key of Object.keys(json)) {
            const value = json[key];
            const [char, attrs] = typeof value === 'string' ? [value, null] : value;
            const character = new Token(key, char, attrs);
            this.add(key, character);
        }
    }
}
class DelimiterMap extends CharacterMap {
    parse([env, token]) {
        return super.parse([env, '\\' + token]);
    }
}
class MacroMap extends AbstractParseMap {
    constructor(name, json, functionMap = {}) {
        super(name, null);
        const getMethod = (func) => typeof func === 'string' ? functionMap[func] : func;
        for (const [key, value] of Object.entries(json)) {
            let func;
            let args;
            if (Array.isArray(value)) {
                func = getMethod(value[0]);
                args = value.slice(1);
            }
            else {
                func = getMethod(value);
                args = [];
            }
            const character = new Macro(key, func, args);
            this.add(key, character);
        }
    }
    parserFor(token) {
        const macro = this.lookup(token);
        return macro ? macro.func : null;
    }
    parse([env, token]) {
        const macro = this.lookup(token);
        const parser = this.parserFor(token);
        if (!macro || !parser) {
            return null;
        }
        return parseResult(parser(env, macro.token, ...macro.args));
    }
}
class CommandMap extends MacroMap {
    parse([env, token]) {
        const macro = this.lookup(token);
        const parser = this.parserFor(token);
        if (!macro || !parser) {
            return null;
        }
        const saveCommand = env.currentCS;
        env.currentCS = '\\' + token;
        const result = parser(env, '\\' + macro.token, ...macro.args);
        env.currentCS = saveCommand;
        return parseResult(result);
    }
}
class EnvironmentMap extends MacroMap {
    constructor(name, parser, json, functionMap = {}) {
        super(name, json, functionMap);
        this.parser = parser;
    }
    parse([env, token]) {
        const macro = this.lookup(token);
        const envParser = this.parserFor(token);
        if (!macro || !envParser) {
            return null;
        }
        return parseResult(this.parser(env, macro.token, envParser, macro.args));
    }
}
//# sourceMappingURL=TokenMap.js.map
;// ./components/mjs/core/lib/util/PrioritizedList.js
const PrioritizedList_def = MathJax._.util.PrioritizedList;
const PrioritizedList = PrioritizedList_def.PrioritizedList;

;// ./components/mjs/core/lib/util/FunctionList.js
const FunctionList_def = MathJax._.util.FunctionList;
const FunctionList = FunctionList_def.FunctionList;

;// ./mjs/input/tex/MapHandler.js



const maps = new Map();
const MapHandler = {
    register(map) {
        maps.set(map.name, map);
    },
    getMap(name) {
        return maps.get(name);
    },
};
class SubHandler {
    constructor() {
        this._configuration = new PrioritizedList();
        this._fallback = new FunctionList();
    }
    add(maps, fallback, priority = PrioritizedList.DEFAULTPRIORITY) {
        for (const name of maps.slice().reverse()) {
            const map = MapHandler.getMap(name);
            if (!map) {
                this.warn(`Configuration '${name}' not found! Omitted.`);
                return;
            }
            this._configuration.add(map, priority);
        }
        if (fallback) {
            this._fallback.add(fallback, priority);
        }
    }
    remove(maps, fallback = null) {
        for (const name of maps) {
            const map = this.retrieve(name);
            if (map) {
                this._configuration.remove(map);
            }
        }
        if (fallback) {
            this._fallback.remove(fallback);
        }
    }
    parse(input) {
        for (const { item: map } of this._configuration) {
            const result = map.parse(input);
            if (result === SubHandler.FALLBACK) {
                break;
            }
            if (result) {
                return result;
            }
        }
        const [env, token] = input;
        Array.from(this._fallback)[0].item(env, token);
        return;
    }
    lookup(token) {
        const map = this.applicable(token);
        return map ? map.lookup(token) : null;
    }
    contains(token) {
        const map = this.applicable(token);
        return (!!map && !(map instanceof CharacterMap && map.lookup(token).char === null));
    }
    toString() {
        const names = [];
        for (const { item: map } of this._configuration) {
            names.push(map.name);
        }
        return names.join(', ');
    }
    applicable(token) {
        for (const { item: map } of this._configuration) {
            if (map.contains(token)) {
                return map;
            }
        }
        return null;
    }
    retrieve(name) {
        for (const { item: map } of this._configuration) {
            if (map.name === name) {
                return map;
            }
        }
        return null;
    }
    warn(message) {
        console.log('TexParser Warning: ' + message);
    }
}
SubHandler.FALLBACK = Symbol('fallback');
class SubHandlers {
    constructor() {
        this.map = new Map();
    }
    add(handlers, fallbacks, priority = PrioritizedList.DEFAULTPRIORITY) {
        for (const key of Object.keys(handlers)) {
            const name = key;
            let subHandler = this.get(name);
            if (!subHandler) {
                subHandler = new SubHandler();
                this.set(name, subHandler);
            }
            subHandler.add(handlers[name], fallbacks[name], priority);
        }
    }
    remove(handlers, fallbacks) {
        for (const name of Object.keys(handlers)) {
            const subHandler = this.get(name);
            if (subHandler) {
                subHandler.remove(handlers[name], fallbacks[name]);
            }
        }
    }
    set(name, subHandler) {
        this.map.set(name, subHandler);
    }
    get(name) {
        return this.map.get(name);
    }
    retrieve(name) {
        for (const handler of this.map.values()) {
            const map = handler.retrieve(name);
            if (map) {
                return map;
            }
        }
        return null;
    }
    keys() {
        return this.map.keys();
    }
}
//# sourceMappingURL=MapHandler.js.map
;// ./mjs/input/tex/Configuration.js






class Configuration {
    static makeProcessor(func, priority) {
        return Array.isArray(func) ? func : [func, priority];
    }
    static _create(name, config = {}) {
        var _a;
        const priority = (_a = config.priority) !== null && _a !== void 0 ? _a : PrioritizedList.DEFAULTPRIORITY;
        const init = config.init ? this.makeProcessor(config.init, priority) : null;
        const conf = config.config
            ? this.makeProcessor(config.config, priority)
            : null;
        const preprocessors = (config.preprocessors || []).map((pre) => this.makeProcessor(pre, priority));
        const postprocessors = (config.postprocessors || []).map((post) => this.makeProcessor(post, priority));
        const parser = config.parser || 'tex';
        return new Configuration(name, config[ConfigurationType.HANDLER] || {}, config[ConfigurationType.FALLBACK] || {}, config[ConfigurationType.ITEMS] || {}, config[ConfigurationType.TAGS] || {}, config[ConfigurationType.OPTIONS] || {}, config[ConfigurationType.NODES] || {}, preprocessors, postprocessors, init, conf, priority, parser);
    }
    static create(name, config = {}) {
        const configuration = Configuration._create(name, config);
        ConfigurationHandler.set(name, configuration);
        return configuration;
    }
    static local(config = {}) {
        return Configuration._create('', config);
    }
    constructor(name, handler = {}, fallback = {}, items = {}, tags = {}, options = {}, nodes = {}, preprocessors = [], postprocessors = [], initMethod = null, configMethod = null, priority, parser) {
        this.name = name;
        this.handler = handler;
        this.fallback = fallback;
        this.items = items;
        this.tags = tags;
        this.options = options;
        this.nodes = nodes;
        this.preprocessors = preprocessors;
        this.postprocessors = postprocessors;
        this.initMethod = initMethod;
        this.configMethod = configMethod;
        this.priority = priority;
        this.parser = parser;
        this.handler = Object.assign({
            [HandlerType.CHARACTER]: [],
            [HandlerType.DELIMITER]: [],
            [HandlerType.MACRO]: [],
            [HandlerType.ENVIRONMENT]: [],
        }, handler);
    }
    get init() {
        return this.initMethod ? this.initMethod[0] : null;
    }
    get config() {
        return this.configMethod ? this.configMethod[0] : null;
    }
}
const Configuration_maps = new Map();
const ConfigurationHandler = {
    set(name, map) {
        Configuration_maps.set(name, map);
    },
    get(name) {
        return Configuration_maps.get(name);
    },
    keys() {
        return Configuration_maps.keys();
    },
};
class ParserConfiguration {
    constructor(packages, parsers = ['tex']) {
        this.initMethod = new FunctionList();
        this.configMethod = new FunctionList();
        this.configurations = new PrioritizedList();
        this.parsers = [];
        this.handlers = new SubHandlers();
        this.items = {};
        this.tags = {};
        this.options = {};
        this.nodes = {};
        this.parsers = parsers;
        for (const pkg of packages.slice().reverse()) {
            this.addPackage(pkg);
        }
        for (const { item: config, priority: priority } of this.configurations) {
            this.append(config, priority);
        }
    }
    init() {
        this.initMethod.execute(this);
    }
    config(jax) {
        this.configMethod.execute(this, jax);
        for (const config of this.configurations) {
            this.addFilters(jax, config.item);
        }
    }
    addPackage(pkg) {
        const name = typeof pkg === 'string' ? pkg : pkg[0];
        const conf = this.getPackage(name);
        if (conf) {
            this.configurations.add(conf, typeof pkg === 'string' ? conf.priority : pkg[1]);
        }
    }
    add(name, jax, options = {}) {
        const config = this.getPackage(name);
        this.append(config);
        this.configurations.add(config, config.priority);
        this.init();
        const parser = jax.parseOptions;
        parser.nodeFactory.setCreators(config.nodes);
        for (const kind of Object.keys(config.items)) {
            parser.itemFactory.setNodeClass(kind, config.items[kind]);
        }
        TagsFactory.addTags(config.tags);
        defaultOptions(parser.options, config.options);
        userOptions(parser.options, options);
        this.addFilters(jax, config);
        if (config.config) {
            config.config(this, jax);
        }
    }
    getPackage(name) {
        const config = ConfigurationHandler.get(name);
        if (config && !this.parsers.includes(config.parser)) {
            throw Error(`Package '${name}' doesn't target the proper parser`);
        }
        if (!config) {
            this.warn(`Package '${name}' not found.  Omitted.`);
        }
        return config;
    }
    append(config, priority) {
        priority = priority || config.priority;
        if (config.initMethod) {
            this.initMethod.add(config.initMethod[0], config.initMethod[1]);
        }
        if (config.configMethod) {
            this.configMethod.add(config.configMethod[0], config.configMethod[1]);
        }
        this.handlers.add(config.handler, config.fallback, priority);
        Object.assign(this.items, config.items);
        Object.assign(this.tags, config.tags);
        defaultOptions(this.options, config.options);
        Object.assign(this.nodes, config.nodes);
    }
    addFilters(jax, config) {
        for (const [pre, priority] of config.preprocessors) {
            jax.preFilters.add(pre, priority);
        }
        for (const [post, priority] of config.postprocessors) {
            jax.postFilters.add(post, priority);
        }
    }
    warn(message) {
        console.warn('MathJax Warning: ' + message);
    }
}
//# sourceMappingURL=Configuration.js.map
;// ./components/mjs/core/lib/util/Styles.js
const Styles_def = MathJax._.util.Styles;
const TRBL = Styles_def.TRBL;
const WSC = Styles_def.WSC;
const Styles = Styles_def.Styles;

;// ./mjs/input/tex/base/BaseItems.js










class StartItem extends BaseItem {
    constructor(factory, global) {
        super(factory);
        this.global = global;
    }
    get kind() {
        return 'start';
    }
    get isOpen() {
        return true;
    }
    checkItem(item) {
        if (item.isKind('stop')) {
            let node = this.toMml();
            if (!this.global.isInner) {
                node = this.factory.configuration.tags.finalize(node, this.env);
            }
            return [[this.factory.create('mml', node)], true];
        }
        return super.checkItem(item);
    }
}
class StopItem extends BaseItem {
    get kind() {
        return 'stop';
    }
    get isClose() {
        return true;
    }
}
class OpenItem extends BaseItem {
    get kind() {
        return 'open';
    }
    get isOpen() {
        return true;
    }
    checkItem(item) {
        if (item.isKind('close')) {
            const mml = this.toMml();
            const node = this.create('node', 'TeXAtom', [mml]);
            addLatexItem(node, item);
            return [[this.factory.create('mml', node)], true];
        }
        return super.checkItem(item);
    }
}
OpenItem.errors = Object.assign(Object.create(BaseItem.errors), {
    stop: ['ExtraOpenMissingClose', 'Extra open brace or missing close brace'],
});
class CloseItem extends BaseItem {
    get kind() {
        return 'close';
    }
    get isClose() {
        return true;
    }
}
class NullItem extends BaseItem {
    get kind() {
        return 'null';
    }
}
class PrimeItem extends BaseItem {
    get kind() {
        return 'prime';
    }
    checkItem(item) {
        const [top0, top1] = this.Peek(2);
        const isSup = (tex_NodeUtil.isType(top0, 'msubsup') || tex_NodeUtil.isType(top0, 'msup')) &&
            !tex_NodeUtil.getChildAt(top0, top0.sup);
        const isOver = (tex_NodeUtil.isType(top0, 'munderover') || tex_NodeUtil.isType(top0, 'mover')) &&
            !tex_NodeUtil.getChildAt(top0, top0.over) &&
            !tex_NodeUtil.getProperty(top0, 'subsupOK');
        if (!isSup && !isOver) {
            const node = this.create('node', top0.getProperty('movesupsub') ? 'mover' : 'msup', [top0, top1]);
            return [[node, item], true];
        }
        const pos = isSup ? top0.sup : top0.over;
        tex_NodeUtil.setChild(top0, pos, top1);
        return [[top0, item], true];
    }
}
class SubsupItem extends BaseItem {
    get kind() {
        return 'subsup';
    }
    checkItem(item) {
        if (item.isKind('open') || item.isKind('left')) {
            return BaseItem.success;
        }
        const top = this.First;
        const position = this.getProperty('position');
        if (item.isKind('mml')) {
            if (this.getProperty('primes')) {
                if (position !== 2) {
                    tex_NodeUtil.setChild(top, 2, this.getProperty('primes'));
                }
                else {
                    tex_NodeUtil.setProperty(this.getProperty('primes'), 'variantForm', true);
                    const node = this.create('node', 'mrow', [
                        this.getProperty('primes'),
                        item.First,
                    ]);
                    item.First = node;
                }
            }
            tex_NodeUtil.setChild(top, position, item.First);
            if (this.getProperty('movesupsub') != null) {
                tex_NodeUtil.setProperty(top, 'movesupsub', this.getProperty('movesupsub'));
            }
            const result = this.factory.create('mml', top);
            return [[result], true];
        }
        super.checkItem(item);
        const error = this.getErrors(['', 'sub', 'sup'][position]);
        throw new tex_TexError(error[0], error[1], ...error.splice(2));
    }
}
SubsupItem.errors = Object.assign(Object.create(BaseItem.errors), {
    stop: ['MissingScript', 'Missing superscript or subscript argument'],
    sup: ['MissingOpenForSup', 'Missing open brace for superscript'],
    sub: ['MissingOpenForSub', 'Missing open brace for subscript'],
});
class OverItem extends BaseItem {
    constructor(factory) {
        super(factory);
        this.setProperty('name', '\\over');
    }
    get kind() {
        return 'over';
    }
    get isClose() {
        return true;
    }
    checkItem(item) {
        if (item.isKind('over')) {
            throw new tex_TexError('AmbiguousUseOf', 'Ambiguous use of %1', item.getName());
        }
        if (item.isClose) {
            let mml = this.create('node', 'mfrac', [
                this.getProperty('num'),
                this.toMml(false),
            ]);
            if (this.getProperty('thickness') != null) {
                tex_NodeUtil.setAttribute(mml, 'linethickness', this.getProperty('thickness'));
            }
            if (this.getProperty('ldelim') || this.getProperty('rdelim')) {
                tex_NodeUtil.setProperty(mml, 'withDelims', true);
                mml = ParseUtil.fixedFence(this.factory.configuration, this.getProperty('ldelim'), mml, this.getProperty('rdelim'));
            }
            mml.attributes.set(TexConstant.Attr.LATEXITEM, this.getProperty('name'));
            return [[this.factory.create('mml', mml), item], true];
        }
        return super.checkItem(item);
    }
    toString() {
        return ('over[' + this.getProperty('num') + ' / ' + this.nodes.join('; ') + ']');
    }
}
class LeftItem extends BaseItem {
    constructor(factory, delim) {
        super(factory);
        this.setProperty('delim', delim);
    }
    get kind() {
        return 'left';
    }
    get isOpen() {
        return true;
    }
    checkItem(item) {
        if (item.isKind('right')) {
            const fenced = ParseUtil.fenced(this.factory.configuration, this.getProperty('delim'), this.toMml(), item.getProperty('delim'), '', item.getProperty('color'));
            const left = fenced.childNodes[0];
            const right = fenced.childNodes[fenced.childNodes.length - 1];
            const mrow = this.factory.create('mml', fenced);
            addLatexItem(left, this, '\\left');
            addLatexItem(right, item, '\\right');
            mrow
                .Peek()[0]
                .attributes.set(TexConstant.Attr.LATEXITEM, '\\left' + item.startStr.slice(this.startI, item.stopI));
            return [[mrow], true];
        }
        if (item.isKind('middle')) {
            const def = { stretchy: true };
            if (item.getProperty('color')) {
                def.mathcolor = item.getProperty('color');
            }
            const middle = this.create('token', 'mo', def, item.getProperty('delim'));
            addLatexItem(middle, item, '\\middle');
            this.Push(this.create('node', 'TeXAtom', [], { texClass: TEXCLASS.CLOSE }), middle, this.create('node', 'TeXAtom', [], { texClass: TEXCLASS.OPEN }));
            this.env = {};
            return [[this], true];
        }
        return super.checkItem(item);
    }
}
LeftItem.errors = Object.assign(Object.create(BaseItem.errors), {
    stop: ['ExtraLeftMissingRight', 'Extra \\left or missing \\right'],
});
class Middle extends BaseItem {
    constructor(factory, delim, color) {
        super(factory);
        this.setProperty('delim', delim);
        if (color) {
            this.setProperty('color', color);
        }
    }
    get kind() {
        return 'middle';
    }
    get isClose() {
        return true;
    }
}
class RightItem extends BaseItem {
    constructor(factory, delim, color) {
        super(factory);
        this.setProperty('delim', delim);
        if (color) {
            this.setProperty('color', color);
        }
    }
    get kind() {
        return 'right';
    }
    get isClose() {
        return true;
    }
}
class BreakItem extends BaseItem {
    get kind() {
        return 'break';
    }
    constructor(factory, linebreak, insert) {
        super(factory);
        this.setProperty('linebreak', linebreak);
        this.setProperty('insert', insert);
    }
    checkItem(item) {
        var _a, _b;
        const linebreak = this.getProperty('linebreak');
        if (item.isKind('mml')) {
            const mml = item.First;
            if (mml.isKind('mo')) {
                const style = ((_b = (_a = tex_NodeUtil.getOp(mml)) === null || _a === void 0 ? void 0 : _a[3]) === null || _b === void 0 ? void 0 : _b.linebreakstyle) ||
                    tex_NodeUtil.getAttribute(mml, 'linebreakstyle');
                if (style !== 'after') {
                    tex_NodeUtil.setAttribute(mml, 'linebreak', linebreak);
                    return [[item], true];
                }
                if (!this.getProperty('insert')) {
                    return [[item], true];
                }
            }
        }
        const mml = this.create('token', 'mspace', { linebreak });
        return [[this.factory.create('mml', mml), item], true];
    }
}
class BeginItem extends BaseItem {
    get kind() {
        return 'begin';
    }
    get isOpen() {
        return true;
    }
    checkItem(item) {
        if (item.isKind('end')) {
            if (item.getName() !== this.getName()) {
                throw new tex_TexError('EnvBadEnd', '\\begin{%1} ended with \\end{%2}', this.getName(), item.getName());
            }
            const node = this.toMml();
            addLatexItem(node, item);
            return [[this.factory.create('mml', node)], true];
        }
        if (item.isKind('stop')) {
            throw new tex_TexError('EnvMissingEnd', 'Missing \\end{%1}', this.getName());
        }
        return super.checkItem(item);
    }
}
class EndItem extends BaseItem {
    get kind() {
        return 'end';
    }
    get isClose() {
        return true;
    }
}
class StyleItem extends BaseItem {
    get kind() {
        return 'style';
    }
    checkItem(item) {
        if (!item.isClose) {
            return super.checkItem(item);
        }
        const mml = this.create('node', 'mstyle', this.nodes, this.getProperty('styles'));
        return [[this.factory.create('mml', mml), item], true];
    }
}
class PositionItem extends BaseItem {
    get kind() {
        return 'position';
    }
    checkItem(item) {
        if (item.isClose) {
            throw new tex_TexError('MissingBoxFor', 'Missing box for %1', this.getName());
        }
        if (item.isFinal) {
            let mml = item.toMml();
            switch (this.getProperty('move')) {
                case 'vertical':
                    mml = this.create('node', 'mpadded', [mml], {
                        height: this.getProperty('dh'),
                        depth: this.getProperty('dd'),
                        voffset: this.getProperty('dh'),
                    });
                    return [[this.factory.create('mml', mml)], true];
                case 'horizontal':
                    return [
                        [
                            this.factory.create('mml', this.getProperty('left')),
                            item,
                            this.factory.create('mml', this.getProperty('right')),
                        ],
                        true,
                    ];
            }
        }
        return super.checkItem(item);
    }
}
class CellItem extends BaseItem {
    get kind() {
        return 'cell';
    }
    get isClose() {
        return true;
    }
}
class MmlItem extends BaseItem {
    get isFinal() {
        return true;
    }
    get kind() {
        return 'mml';
    }
}
class FnItem extends BaseItem {
    get kind() {
        return 'fn';
    }
    checkItem(item) {
        const top = this.First;
        if (top) {
            if (item.isOpen) {
                return BaseItem.success;
            }
            if (!item.isKind('fn')) {
                let mml = item.First;
                if (!item.isKind('mml') || !mml) {
                    return [[top, item], true];
                }
                if ((tex_NodeUtil.isType(mml, 'mstyle') &&
                    mml.childNodes.length &&
                    tex_NodeUtil.isType(mml.childNodes[0].childNodes[0], 'mspace')) ||
                    tex_NodeUtil.isType(mml, 'mspace')) {
                    return [[top, item], true];
                }
                if (tex_NodeUtil.isEmbellished(mml)) {
                    mml = tex_NodeUtil.getCoreMO(mml);
                }
                const form = tex_NodeUtil.getForm(mml);
                if (form != null && [0, 0, 1, 1, 0, 1, 1, 0, 0, 0][form[2]]) {
                    return [[top, item], true];
                }
            }
            const node = this.create('token', 'mo', { texClass: TEXCLASS.NONE }, entities.ApplyFunction);
            return [[top, node, item], true];
        }
        return super.checkItem(item);
    }
}
class NotItem extends BaseItem {
    constructor() {
        super(...arguments);
        this.remap = MapHandler.getMap('not_remap');
    }
    get kind() {
        return 'not';
    }
    checkItem(item) {
        let mml;
        let c;
        let textNode;
        if (item.isKind('open') || item.isKind('left')) {
            return BaseItem.success;
        }
        if (item.isKind('mml') &&
            (tex_NodeUtil.isType(item.First, 'mo') ||
                tex_NodeUtil.isType(item.First, 'mi') ||
                tex_NodeUtil.isType(item.First, 'mtext'))) {
            mml = item.First;
            c = tex_NodeUtil.getText(mml);
            if (c.length === 1 &&
                !tex_NodeUtil.getProperty(mml, 'movesupsub') &&
                tex_NodeUtil.getChildren(mml).length === 1) {
                if (this.remap.contains(c)) {
                    textNode = this.create('text', this.remap.lookup(c).char);
                    tex_NodeUtil.setChild(mml, 0, textNode);
                }
                else {
                    textNode = this.create('text', '\u0338');
                    tex_NodeUtil.appendChildren(mml, [textNode]);
                }
                return [[item], true];
            }
        }
        textNode = this.create('text', '\u29F8');
        const mtextNode = this.create('node', 'mtext', [], {}, textNode);
        const paddedNode = this.create('node', 'mpadded', [mtextNode], {
            width: 0,
        });
        mml = this.create('node', 'TeXAtom', [paddedNode], {
            texClass: TEXCLASS.REL,
        });
        return [[mml, item], true];
    }
}
class NonscriptItem extends BaseItem {
    get kind() {
        return 'nonscript';
    }
    checkItem(item) {
        if (item.isKind('mml') && item.Size() === 1) {
            let mml = item.First;
            if (mml.isKind('mstyle') && mml.notParent) {
                mml = tex_NodeUtil.getChildren(tex_NodeUtil.getChildren(mml)[0])[0];
            }
            if (mml.isKind('mspace')) {
                if (mml !== item.First) {
                    const mrow = this.create('node', 'mrow', [item.Pop()]);
                    item.Push(mrow);
                }
                this.factory.configuration.addNode('nonscript', item.First);
            }
        }
        return [[item], true];
    }
}
class DotsItem extends BaseItem {
    get kind() {
        return 'dots';
    }
    checkItem(item) {
        if (item.isKind('open') || item.isKind('left')) {
            return BaseItem.success;
        }
        let dots = this.getProperty('ldots');
        const top = item.First;
        if (item.isKind('mml') && tex_NodeUtil.isEmbellished(top)) {
            const tclass = tex_NodeUtil.getTexClass(tex_NodeUtil.getCoreMO(top));
            if (tclass === TEXCLASS.BIN || tclass === TEXCLASS.REL) {
                dots = this.getProperty('cdots');
            }
        }
        return [[dots, item], true];
    }
}
class ArrayItem extends BaseItem {
    constructor() {
        super(...arguments);
        this.table = [];
        this.row = [];
        this.frame = [];
        this.hfill = [];
        this.arraydef = {};
        this.cstart = [];
        this.cend = [];
        this.cextra = [];
        this.atEnd = false;
        this.ralign = [];
        this.breakAlign = {
            cell: '',
            row: '',
            table: '',
        };
        this.templateSubs = 0;
    }
    get kind() {
        return 'array';
    }
    get isOpen() {
        return true;
    }
    get copyEnv() {
        return false;
    }
    checkItem(item) {
        if (item.isClose && !item.isKind('over')) {
            if (item.getProperty('isEntry')) {
                this.EndEntry();
                this.clearEnv();
                this.StartEntry();
                return BaseItem.fail;
            }
            if (item.getProperty('isCR')) {
                this.EndEntry();
                this.EndRow();
                this.clearEnv();
                this.StartEntry();
                return BaseItem.fail;
            }
            this.EndTable();
            this.clearEnv();
            const newItem = this.factory.create('mml', this.createMml());
            if (this.getProperty('requireClose')) {
                if (item.isKind('close')) {
                    return [[newItem], true];
                }
                throw new tex_TexError('MissingCloseBrace', 'Missing close brace');
            }
            return [[newItem, item], true];
        }
        return super.checkItem(item);
    }
    createMml() {
        const scriptlevel = this.arraydef['scriptlevel'];
        delete this.arraydef['scriptlevel'];
        let mml = this.create('node', 'mtable', this.table, this.arraydef);
        if (scriptlevel) {
            mml.setProperty('smallmatrix', true);
        }
        if (this.breakAlign.table) {
            tex_NodeUtil.setAttribute(mml, 'data-break-align', this.breakAlign.table);
        }
        if (this.getProperty('arrayPadding')) {
            tex_NodeUtil.setAttribute(mml, 'data-frame-styles', '');
            tex_NodeUtil.setAttribute(mml, 'framespacing', this.getProperty('arrayPadding'));
        }
        mml = this.handleFrame(mml);
        if (scriptlevel !== undefined) {
            mml = this.create('node', 'mstyle', [mml], { scriptlevel });
        }
        if (this.getProperty('open') || this.getProperty('close')) {
            mml = ParseUtil.fenced(this.factory.configuration, this.getProperty('open'), mml, this.getProperty('close'));
        }
        return mml;
    }
    handleFrame(mml) {
        if (!this.frame.length)
            return mml;
        const sides = new Map(this.frame);
        const fstyle = this.frame.reduce((fstyle, [, style]) => (style === fstyle ? style : ''), this.frame[0][1]);
        if (fstyle) {
            if (this.frame.length === 4) {
                tex_NodeUtil.setAttribute(mml, 'frame', fstyle);
                tex_NodeUtil.removeAttribute(mml, 'data-frame-styles');
                return mml;
            }
            if (fstyle === 'solid') {
                tex_NodeUtil.setAttribute(mml, 'data-frame-styles', '');
                mml = this.create('node', 'menclose', [mml], {
                    notation: Array.from(sides.keys()).join(' '),
                    'data-padding': 0,
                });
                return mml;
            }
        }
        const styles = TRBL.map((side) => sides.get(side) || 'none').join(' ');
        tex_NodeUtil.setAttribute(mml, 'data-frame-styles', styles);
        return mml;
    }
    StartEntry() {
        const n = this.row.length;
        let start = this.cstart[n];
        let end = this.cend[n];
        const ralign = this.ralign[n];
        const cextra = this.cextra;
        if (!start && !end && !ralign && !cextra[n] && !cextra[n + 1])
            return;
        let [prefix, entry, term, found] = this.getEntry();
        if (cextra[n] && (!this.atEnd || cextra[n + 1])) {
            start += '&';
        }
        if (term !== '&') {
            found =
                !!entry.trim() || !!(n || (term && term.substring(0, 4) !== '\\end'));
            if (cextra[n + 1] && !cextra[n]) {
                end = (end || '') + '&';
                this.atEnd = true;
            }
        }
        if (!found && !prefix)
            return;
        const parser = this.parser;
        if (found) {
            if (start) {
                entry = ParseUtil.addArgs(parser, start, entry);
            }
            if (end) {
                entry = ParseUtil.addArgs(parser, entry, end);
            }
            if (ralign) {
                entry = '\\text{' + entry.trim() + '}';
            }
            if (start || end || ralign) {
                if (++this.templateSubs >
                    parser.configuration.options.maxTemplateSubtitutions) {
                    throw new tex_TexError('MaxTemplateSubs', 'Maximum template substitutions exceeded; ' +
                        'is there an invalid use of \\\\ in the template?');
                }
            }
        }
        if (prefix) {
            entry = ParseUtil.addArgs(parser, prefix, entry);
        }
        parser.string = ParseUtil.addArgs(parser, entry, parser.string);
        parser.i = 0;
    }
    getEntry() {
        const parser = this.parser;
        const pattern = /^([^]*?)([&{}]|\\\\|\\(?:begin|end)\s*\{array\}|\\cr|\\)/;
        let braces = 0;
        let envs = 0;
        let i = parser.i;
        let match;
        const fail = ['', '', '', false];
        while ((match = parser.string.slice(i).match(pattern)) !== null) {
            i += match[0].length;
            switch (match[2]) {
                case '\\':
                    i++;
                    break;
                case '{':
                    braces++;
                    break;
                case '}':
                    if (!braces)
                        return fail;
                    braces--;
                    break;
                case '\\begin{array}':
                    if (!braces) {
                        envs++;
                    }
                    break;
                case '\\end{array}':
                    if (!braces && envs) {
                        envs--;
                        break;
                    }
                default: {
                    if (braces || envs)
                        continue;
                    i -= match[2].length;
                    let entry = parser.string.slice(parser.i, i).trim();
                    const prefix = entry.match(/^(?:\s*\\(?:h(?:dash)?line|hfil{1,3}|rowcolor\s*\{.*?\}))+/);
                    if (prefix) {
                        entry = entry.slice(prefix[0].length);
                    }
                    parser.string = parser.string.slice(i);
                    parser.i = 0;
                    return [(prefix === null || prefix === void 0 ? void 0 : prefix[0]) || '', entry, match[2], true];
                }
            }
        }
        return fail;
    }
    EndEntry() {
        const mtd = this.create('node', 'mtd', this.nodes);
        if (this.hfill.length) {
            if (this.hfill[0] === 0) {
                tex_NodeUtil.setAttribute(mtd, 'columnalign', 'right');
            }
            if (this.hfill[this.hfill.length - 1] === this.Size()) {
                tex_NodeUtil.setAttribute(mtd, 'columnalign', tex_NodeUtil.getAttribute(mtd, 'columnalign') ? 'center' : 'left');
            }
        }
        const ralign = this.ralign[this.row.length];
        if (ralign) {
            const [valign, cwidth, calign] = ralign;
            const box = this.create('node', 'mpadded', mtd.childNodes[0].childNodes, {
                width: cwidth,
                'data-overflow': 'auto',
                'data-align': calign,
                'data-vertical-align': valign,
            });
            box.setProperty('vbox', valign);
            mtd.childNodes[0].childNodes = [];
            mtd.appendChild(box);
        }
        else if (this.breakAlign.cell) {
            tex_NodeUtil.setAttribute(mtd, 'data-vertical-align', this.breakAlign.cell);
        }
        this.breakAlign.cell = '';
        this.row.push(mtd);
        this.Clear();
        this.hfill = [];
    }
    EndRow() {
        let type = 'mtr';
        if (this.getProperty('isNumbered') && this.row.length === 3) {
            this.row.unshift(this.row.pop());
            type = 'mlabeledtr';
        }
        else if (this.getProperty('isLabeled')) {
            type = 'mlabeledtr';
            this.setProperty('isLabeled', false);
        }
        const node = this.create('node', type, this.row);
        if (this.breakAlign.row) {
            tex_NodeUtil.setAttribute(node, 'data-break-align', this.breakAlign.row);
            this.breakAlign.row = '';
        }
        addLatexItem(node, this);
        this.table.push(node);
        this.row = [];
        this.atEnd = false;
    }
    EndTable() {
        if (this.Size() || this.row.length) {
            this.EndEntry();
            this.EndRow();
        }
        this.checkLines();
    }
    checkLines() {
        if (this.arraydef.rowlines) {
            const lines = this.arraydef.rowlines.split(/ /);
            if (lines.length === this.table.length) {
                this.frame.push(['bottom', lines.pop()]);
                if (lines.length) {
                    this.arraydef.rowlines = lines.join(' ');
                }
                else {
                    delete this.arraydef.rowlines;
                }
            }
            else if (lines.length < this.table.length - 1) {
                this.arraydef.rowlines += ' none';
            }
        }
        if (this.getProperty('rowspacing')) {
            const rows = this.arraydef.rowspacing.split(/ /);
            while (rows.length < this.table.length) {
                rows.push(this.getProperty('rowspacing') + 'em');
            }
            this.arraydef.rowspacing = rows.join(' ');
        }
    }
    addRowSpacing(spacing) {
        if (this.arraydef['rowspacing']) {
            const rows = this.arraydef['rowspacing'].split(/ /);
            if (!this.getProperty('rowspacing')) {
                const dimem = UnitUtil.dimen2em(rows[0]);
                this.setProperty('rowspacing', dimem);
            }
            const rowspacing = this.getProperty('rowspacing');
            while (rows.length < this.table.length) {
                rows.push(UnitUtil.em(rowspacing));
            }
            rows[this.table.length - 1] = UnitUtil.em(Math.max(0, rowspacing + UnitUtil.dimen2em(spacing)));
            this.arraydef['rowspacing'] = rows.join(' ');
        }
    }
}
class EqnArrayItem extends ArrayItem {
    constructor(factory, ...args) {
        super(factory);
        this.maxrow = 0;
        this.factory.configuration.tags.start(args[0], args[2], args[1]);
    }
    get kind() {
        return 'eqnarray';
    }
    EndEntry() {
        const calign = this.arraydef.columnalign.split(/ /);
        const align = this.row.length && calign.length
            ? calign[this.row.length % calign.length]
            : 'right';
        if (align !== 'right') {
            ParseUtil.fixInitialMO(this.factory.configuration, this.nodes);
        }
        super.EndEntry();
    }
    EndRow() {
        if (this.row.length > this.maxrow) {
            this.maxrow = this.row.length;
        }
        const tag = this.factory.configuration.tags.getTag();
        if (tag) {
            this.row = [tag].concat(this.row);
            this.setProperty('isLabeled', true);
        }
        this.factory.configuration.tags.clearTag();
        super.EndRow();
    }
    EndTable() {
        super.EndTable();
        this.factory.configuration.tags.end();
        this.extendArray('columnalign', this.maxrow);
        this.extendArray('columnwidth', this.maxrow);
        this.extendArray('columnspacing', this.maxrow - 1);
        this.extendArray('data-break-align', this.maxrow);
        this.addIndentshift();
    }
    extendArray(name, max) {
        if (!this.arraydef[name])
            return;
        const repeat = this.arraydef[name].split(/ /);
        const columns = [...repeat];
        if (columns.length > 1) {
            while (columns.length < max) {
                columns.push(...repeat);
            }
            this.arraydef[name] = columns.slice(0, max).join(' ');
        }
    }
    addIndentshift() {
        const align = this.arraydef.columnalign.split(/ /);
        let prev = '';
        for (const i of align.keys()) {
            if (align[i] === 'left' && i > 0) {
                const indentshift = prev === 'center' ? '.7em' : '2em';
                for (const row of this.table) {
                    const cell = row.childNodes[row.isKind('mlabeledtr') ? i + 1 : i];
                    if (cell) {
                        const mstyle = this.create('node', 'mstyle', cell.childNodes[0].childNodes, { indentshift });
                        cell.childNodes[0].childNodes = [];
                        cell.appendChild(mstyle);
                    }
                }
            }
            prev = align[i];
        }
    }
}
class MstyleItem extends BeginItem {
    get kind() {
        return 'mstyle';
    }
    constructor(factory, attr, name) {
        super(factory);
        this.attrList = attr;
        this.setProperty('name', name);
    }
    checkItem(item) {
        if (item.isKind('end') && item.getName() === this.getName()) {
            const mml = this.create('node', 'mstyle', [this.toMml()], this.attrList);
            return [[mml], true];
        }
        return super.checkItem(item);
    }
}
class EquationItem extends BaseItem {
    constructor(factory, ...args) {
        super(factory);
        this.factory.configuration.tags.start('equation', true, args[0]);
    }
    get kind() {
        return 'equation';
    }
    get isOpen() {
        return true;
    }
    checkItem(item) {
        if (item.isKind('end')) {
            const mml = this.toMml();
            const tag = this.factory.configuration.tags.getTag();
            this.factory.configuration.tags.end();
            return [
                [tag ? this.factory.configuration.tags.enTag(mml, tag) : mml, item],
                true,
            ];
        }
        if (item.isKind('stop')) {
            throw new tex_TexError('EnvMissingEnd', 'Missing \\end{%1}', this.getName());
        }
        return super.checkItem(item);
    }
}
function addLatexItem(node, item, prefix = '') {
    const str = item.startStr.slice(item.startI, item.stopI);
    if (str) {
        node.attributes.set(TexConstant.Attr.LATEXITEM, prefix ? prefix + str : str);
        node.attributes.set(TexConstant.Attr.LATEX, prefix ? prefix + str : str);
    }
}
//# sourceMappingURL=BaseItems.js.map
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

;// ./mjs/input/tex/base/BaseMethods.js















const P_HEIGHT = 1.2 / 0.85;
const MmlTokenAllow = {
    fontfamily: 1,
    fontsize: 1,
    fontweight: 1,
    fontstyle: 1,
    color: 1,
    background: 1,
    id: 1,
    class: 1,
    href: 1,
    style: 1,
};
function splitAlignArray(align, n = Infinity) {
    const list = align
        .replace(/\s+/g, '')
        .split('')
        .map((s) => {
        const name = { t: 'top', b: 'bottom', m: 'middle', c: 'center' }[s];
        if (!name) {
            throw new tex_TexError('BadBreakAlign', 'Invalid alignment character: %1', s);
        }
        return name;
    });
    if (list.length > n) {
        throw new tex_TexError('TooManyAligns', 'Too many alignment characters: %1', align);
    }
    return n === 1 ? list[0] : list.join(' ');
}
function parseRoot(parser, n) {
    const env = parser.stack.env;
    const inRoot = env['inRoot'];
    env['inRoot'] = true;
    const newParser = new TexParser(n, env, parser.configuration);
    let node = newParser.mml();
    const global = newParser.stack.global;
    if (global['leftRoot'] || global['upRoot']) {
        const def = {};
        if (global['leftRoot']) {
            def['width'] = global['leftRoot'];
        }
        if (global['upRoot']) {
            def['voffset'] = global['upRoot'];
            def['height'] = global['upRoot'];
        }
        node = parser.create('node', 'mpadded', [node], def);
    }
    env['inRoot'] = inRoot;
    return node;
}
const BaseMethods = {
    Open(parser, _c) {
        parser.Push(parser.itemFactory.create('open'));
    },
    Close(parser, _c) {
        parser.Push(parser.itemFactory.create('close'));
    },
    Bar(parser, c) {
        parser.Push(parser.create('token', 'mo', { stretchy: false, texClass: TEXCLASS.ORD }, c));
    },
    Tilde(parser, _c) {
        parser.Push(parser.create('token', 'mtext', {}, entities.nbsp));
    },
    Space(_parser, _c) { },
    Superscript(parser, _c) {
        if (parser.GetNext().match(/\d/)) {
            parser.string =
                parser.string.substring(0, parser.i + 1) +
                    ' ' +
                    parser.string.substring(parser.i + 1);
        }
        let primes;
        let base;
        const top = parser.stack.Top();
        if (top.isKind('prime')) {
            [base, primes] = top.Peek(2);
            parser.stack.Pop();
        }
        else {
            base = parser.stack.Prev();
            if (!base) {
                base = parser.create('token', 'mi', {}, '');
            }
        }
        const movesupsub = tex_NodeUtil.getProperty(base, 'movesupsub');
        let position = tex_NodeUtil.isType(base, 'msubsup')
            ? base.sup
            : base.over;
        if ((tex_NodeUtil.isType(base, 'msubsup') &&
            !tex_NodeUtil.isType(base, 'msup') &&
            tex_NodeUtil.getChildAt(base, base.sup)) ||
            (tex_NodeUtil.isType(base, 'munderover') &&
                !tex_NodeUtil.isType(base, 'mover') &&
                tex_NodeUtil.getChildAt(base, base.over) &&
                !tex_NodeUtil.getProperty(base, 'subsupOK'))) {
            throw new tex_TexError('DoubleExponent', 'Double exponent: use braces to clarify');
        }
        if (!tex_NodeUtil.isType(base, 'msubsup') || tex_NodeUtil.isType(base, 'msup')) {
            if (movesupsub) {
                if (!tex_NodeUtil.isType(base, 'munderover') ||
                    tex_NodeUtil.isType(base, 'mover') ||
                    tex_NodeUtil.getChildAt(base, base.over)) {
                    base = parser.create('node', 'munderover', [base], {
                        movesupsub: true,
                    });
                }
                position = base.over;
            }
            else {
                base = parser.create('node', 'msubsup', [base]);
                position = base.sup;
            }
        }
        parser.Push(parser.itemFactory.create('subsup', base).setProperties({
            position: position,
            primes: primes,
            movesupsub: movesupsub,
        }));
    },
    Subscript(parser, _c) {
        if (parser.GetNext().match(/\d/)) {
            parser.string =
                parser.string.substring(0, parser.i + 1) +
                    ' ' +
                    parser.string.substring(parser.i + 1);
        }
        let primes, base;
        const top = parser.stack.Top();
        if (top.isKind('prime')) {
            [base, primes] = top.Peek(2);
            parser.stack.Pop();
        }
        else {
            base = parser.stack.Prev();
            if (!base) {
                base = parser.create('token', 'mi', {}, '');
            }
        }
        const movesupsub = tex_NodeUtil.getProperty(base, 'movesupsub');
        let position = tex_NodeUtil.isType(base, 'msubsup')
            ? base.sub
            : base.under;
        if ((tex_NodeUtil.isType(base, 'msubsup') &&
            !tex_NodeUtil.isType(base, 'msup') &&
            tex_NodeUtil.getChildAt(base, base.sub)) ||
            (tex_NodeUtil.isType(base, 'munderover') &&
                !tex_NodeUtil.isType(base, 'mover') &&
                tex_NodeUtil.getChildAt(base, base.under) &&
                !tex_NodeUtil.getProperty(base, 'subsupOK'))) {
            throw new tex_TexError('DoubleSubscripts', 'Double subscripts: use braces to clarify');
        }
        if (!tex_NodeUtil.isType(base, 'msubsup') || tex_NodeUtil.isType(base, 'msup')) {
            if (movesupsub) {
                if (!tex_NodeUtil.isType(base, 'munderover') ||
                    tex_NodeUtil.isType(base, 'mover') ||
                    tex_NodeUtil.getChildAt(base, base.under)) {
                    base = parser.create('node', 'munderover', [base], {
                        movesupsub: true,
                    });
                }
                position = base.under;
            }
            else {
                base = parser.create('node', 'msubsup', [base]);
                position = base.sub;
            }
        }
        parser.Push(parser.itemFactory.create('subsup', base).setProperties({
            position: position,
            primes: primes,
            movesupsub: movesupsub,
        }));
    },
    Prime(parser, c) {
        let base = parser.stack.Prev();
        if (!base) {
            base = parser.create('token', 'mi');
        }
        if ((tex_NodeUtil.isType(base, 'msubsup') &&
            !tex_NodeUtil.isType(base, 'msup') &&
            tex_NodeUtil.getChildAt(base, base.sup)) ||
            (tex_NodeUtil.isType(base, 'munderover') &&
                !tex_NodeUtil.isType(base, 'mover') &&
                tex_NodeUtil.getChildAt(base, base.over) &&
                !tex_NodeUtil.getProperty(base, 'subsupOK'))) {
            throw new tex_TexError('DoubleExponentPrime', 'Prime causes double exponent: use braces to clarify');
        }
        let sup = '';
        parser.i--;
        do {
            sup += entities.prime;
            parser.i++;
            c = parser.GetNext();
        } while (c === "'" || c === entities.rsquo);
        sup = ['', '\u2032', '\u2033', '\u2034', '\u2057'][sup.length] || sup;
        const node = parser.create('token', 'mo', { variantForm: true }, sup);
        parser.Push(parser.itemFactory.create('prime', base, node));
    },
    Comment(parser, _c) {
        while (parser.i < parser.string.length &&
            parser.string.charAt(parser.i) !== '\n') {
            parser.i++;
        }
    },
    Hash(_parser, _c) {
        throw new tex_TexError('CantUseHash1', "You can't use 'macro parameter character #' in math mode");
    },
    MathFont(parser, name, variant, italic = '') {
        const text = parser.GetArgument(name);
        const mml = new TexParser(text, Object.assign(Object.assign({ multiLetterIdentifiers: parser.options.identifierPattern }, parser.stack.env), { font: variant, italicFont: italic, noAutoOP: true }), parser.configuration).mml();
        parser.Push(parser.create('node', 'TeXAtom', [mml]));
    },
    SetFont(parser, _name, font) {
        parser.stack.env['font'] = font;
        parser.Push(parser.itemFactory.create('null'));
    },
    SetStyle(parser, _name, texStyle, style, level) {
        parser.stack.env['style'] = texStyle;
        parser.stack.env['level'] = level;
        parser.Push(parser.itemFactory
            .create('style')
            .setProperty('styles', { displaystyle: style, scriptlevel: level }));
    },
    SetSize(parser, _name, size) {
        parser.stack.env['size'] = size;
        parser.Push(parser.itemFactory
            .create('style')
            .setProperty('styles', { mathsize: em(size) }));
    },
    Spacer(parser, _name, space) {
        const node = parser.create('node', 'mspace', [], { width: em(space) });
        const style = parser.create('node', 'mstyle', [node], { scriptlevel: 0 });
        parser.Push(style);
    },
    DiscretionaryTimes(parser, _name) {
        parser.Push(parser.create('token', 'mo', { linebreakmultchar: '\u00D7' }, '\u2062'));
    },
    AllowBreak(parser, _name) {
        parser.Push(parser.create('token', 'mspace'));
    },
    Break(parser, _name) {
        parser.Push(parser.create('token', 'mspace', {
            linebreak: TexConstant.LineBreak.NEWLINE,
        }));
    },
    Linebreak(parser, _name, linebreak) {
        let insert = true;
        const prev = parser.stack.Prev(true);
        if (prev && prev.isKind('mo')) {
            const style = tex_NodeUtil.getMoAttribute(prev, 'linebreakstyle');
            if (style !== TexConstant.LineBreakStyle.BEFORE) {
                prev.attributes.set('linebreak', linebreak);
                insert = false;
            }
        }
        parser.Push(parser.itemFactory.create('break', linebreak, insert));
    },
    LeftRight(parser, name) {
        const first = name.substring(1);
        parser.Push(parser.itemFactory.create(first, parser.GetDelimiter(name), parser.stack.env.color));
    },
    NamedFn(parser, name, id) {
        if (!id) {
            id = name.substring(1);
        }
        const mml = parser.create('token', 'mi', { texClass: TEXCLASS.OP }, id);
        parser.Push(parser.itemFactory.create('fn', mml));
    },
    NamedOp(parser, name, id) {
        if (!id) {
            id = name.substring(1);
        }
        id = id.replace(/&thinsp;/, '\u2006');
        const mml = parser.create('token', 'mo', {
            movablelimits: true,
            movesupsub: true,
            form: TexConstant.Form.PREFIX,
            texClass: TEXCLASS.OP,
        }, id);
        parser.Push(mml);
    },
    Limits(parser, _name, limits) {
        let op = parser.stack.Prev(true);
        if (!op ||
            (tex_NodeUtil.getTexClass(tex_NodeUtil.getCoreMO(op)) !== TEXCLASS.OP &&
                tex_NodeUtil.getProperty(op, 'movesupsub') == null)) {
            throw new tex_TexError('MisplacedLimits', '%1 is allowed only on operators', parser.currentCS);
        }
        const top = parser.stack.Top();
        let node;
        if (tex_NodeUtil.isType(op, 'munderover') && !limits) {
            node = parser.create('node', 'msubsup');
            tex_NodeUtil.copyChildren(op, node);
            op = top.Last = node;
        }
        else if (tex_NodeUtil.isType(op, 'msubsup') && limits) {
            node = parser.create('node', 'munderover');
            tex_NodeUtil.copyChildren(op, node);
            op = top.Last = node;
        }
        tex_NodeUtil.setProperty(op, 'movesupsub', limits ? true : false);
        tex_NodeUtil.setProperties(tex_NodeUtil.getCoreMO(op), { movablelimits: false });
        if ((tex_NodeUtil.isType(op, 'mo')
            ? tex_NodeUtil.getMoAttribute(op, 'movableLimits')
            : tex_NodeUtil.getAttribute(op, 'movablelimits')) ||
            tex_NodeUtil.getProperty(op, 'movablelimits')) {
            tex_NodeUtil.setProperties(op, { movablelimits: false });
        }
    },
    Over(parser, name, open, close) {
        const mml = parser.itemFactory
            .create('over')
            .setProperty('name', parser.currentCS);
        if (open || close) {
            mml.setProperty('ldelim', open);
            mml.setProperty('rdelim', close);
        }
        else if (name.match(/withdelims$/)) {
            mml.setProperty('ldelim', parser.GetDelimiter(name));
            mml.setProperty('rdelim', parser.GetDelimiter(name));
        }
        if (name.match(/^\\above/)) {
            mml.setProperty('thickness', parser.GetDimen(name));
        }
        else if (name.match(/^\\atop/) || open || close) {
            mml.setProperty('thickness', 0);
        }
        parser.Push(mml);
    },
    Frac(parser, name) {
        const num = parser.ParseArg(name);
        const den = parser.ParseArg(name);
        const node = parser.create('node', 'mfrac', [num, den]);
        parser.Push(node);
    },
    Sqrt(parser, name) {
        const n = parser.GetBrackets(name);
        let arg = parser.GetArgument(name);
        if (arg === '\\frac') {
            arg +=
                '{' + parser.GetArgument(arg) + '}{' + parser.GetArgument(arg) + '}';
        }
        let mml = new TexParser(arg, parser.stack.env, parser.configuration).mml();
        if (!n) {
            mml = parser.create('node', 'msqrt', [mml]);
        }
        else {
            mml = parser.create('node', 'mroot', [mml, parseRoot(parser, n)]);
        }
        parser.Push(mml);
    },
    Root(parser, name) {
        const n = parser.GetUpTo(name, '\\of');
        const arg = parser.ParseArg(name);
        const node = parser.create('node', 'mroot', [arg, parseRoot(parser, n)]);
        parser.Push(node);
    },
    MoveRoot(parser, name, id) {
        if (!parser.stack.env['inRoot']) {
            throw new tex_TexError('MisplacedMoveRoot', '%1 can appear only within a root', parser.currentCS);
        }
        if (parser.stack.global[id]) {
            throw new tex_TexError('MultipleMoveRoot', 'Multiple use of %1', parser.currentCS);
        }
        let n = parser.GetArgument(name);
        if (!n.match(/-?[0-9]+/)) {
            throw new tex_TexError('IntegerArg', 'The argument to %1 must be an integer', parser.currentCS);
        }
        n = parseInt(n, 10) / 15 + 'em';
        if (n.substring(0, 1) !== '-') {
            n = '+' + n;
        }
        parser.stack.global[id] = n;
    },
    Accent(parser, name, accent, stretchy) {
        const c = parser.ParseArg(name);
        const def = Object.assign(Object.assign({}, ParseUtil.getFontDef(parser)), { accent: true, mathaccent: stretchy === undefined ? true : stretchy });
        const entity = tex_NodeUtil.createEntity(accent);
        const mml = parser.create('token', 'mo', def, entity);
        tex_NodeUtil.setAttribute(mml, 'stretchy', stretchy ? true : false);
        const mo = tex_NodeUtil.isEmbellished(c) ? tex_NodeUtil.getCoreMO(c) : c;
        if (tex_NodeUtil.isType(mo, 'mo') ||
            tex_NodeUtil.getProperty(mo, 'movablelimits')) {
            tex_NodeUtil.setProperties(mo, { movablelimits: false });
        }
        const muoNode = parser.create('node', 'munderover');
        tex_NodeUtil.setChild(muoNode, 0, c);
        tex_NodeUtil.setChild(muoNode, 1, null);
        tex_NodeUtil.setChild(muoNode, 2, mml);
        const texAtom = parser.create('node', 'TeXAtom', [muoNode]);
        parser.Push(texAtom);
    },
    UnderOver(parser, name, c, stack) {
        const entity = tex_NodeUtil.createEntity(c);
        const mo = parser.create('token', 'mo', { stretchy: true, accent: true }, entity);
        if (entity.match(MmlMo.mathaccentsWithWidth)) {
            mo.setProperty('mathaccent', false);
        }
        const pos = name.charAt(1) === 'o' ? 'over' : 'under';
        const base = parser.ParseArg(name);
        parser.Push(ParseUtil.underOver(parser, base, mo, pos, stack));
    },
    Overset(parser, name) {
        const top = parser.ParseArg(name);
        const base = parser.ParseArg(name);
        const topMo = top.coreMO();
        const accent = topMo.isKind('mo') && tex_NodeUtil.getMoAttribute(topMo, 'accent') === true;
        ParseUtil.checkMovableLimits(base);
        const node = parser.create('node', 'mover', [base, top], { accent });
        parser.Push(node);
    },
    Underset(parser, name) {
        const bot = parser.ParseArg(name);
        const base = parser.ParseArg(name);
        const botMo = bot.coreMO();
        const accentunder = botMo.isKind('mo') && tex_NodeUtil.getMoAttribute(botMo, 'accent') === true;
        ParseUtil.checkMovableLimits(base);
        const node = parser.create('node', 'munder', [base, bot], { accentunder });
        parser.Push(node);
    },
    Overunderset(parser, name) {
        const top = parser.ParseArg(name);
        const bot = parser.ParseArg(name);
        const base = parser.ParseArg(name);
        const topMo = top.coreMO();
        const botMo = bot.coreMO();
        const accent = topMo.isKind('mo') && tex_NodeUtil.getMoAttribute(topMo, 'accent') === true;
        const accentunder = botMo.isKind('mo') && tex_NodeUtil.getMoAttribute(botMo, 'accent') === true;
        ParseUtil.checkMovableLimits(base);
        const node = parser.create('node', 'munderover', [base, bot, top], {
            accent,
            accentunder,
        });
        parser.Push(node);
    },
    TeXAtom(parser, name, mclass) {
        const def = { texClass: mclass };
        let mml;
        let node;
        if (mclass === TEXCLASS.OP) {
            def['movesupsub'] = def['movablelimits'] = true;
            const arg = parser.GetArgument(name);
            const match = arg.match(/^\s*\\rm\s+([a-zA-Z0-9 ]+)$/);
            if (match) {
                def['mathvariant'] = TexConstant.Variant.NORMAL;
                node = parser.create('token', 'mi', def, match[1]);
            }
            else {
                const parsed = new TexParser(arg, parser.stack.env, parser.configuration).mml();
                node = parser.create('node', 'TeXAtom', [parsed], def);
            }
            mml = parser.itemFactory.create('fn', node);
        }
        else {
            mml = parser.create('node', 'TeXAtom', [parser.ParseArg(name)], def);
        }
        parser.Push(mml);
    },
    VBox(parser, name, align) {
        const arg = new TexParser(parser.GetArgument(name), parser.stack.env, parser.configuration);
        const def = {
            'data-vertical-align': align,
            texClass: TEXCLASS.ORD,
        };
        if (arg.stack.env.hsize) {
            def.width = arg.stack.env.hsize;
            def['data-overflow'] = 'linebreak';
        }
        const mml = parser.create('node', 'mpadded', [arg.mml()], def);
        mml.setProperty('vbox', align);
        parser.Push(mml);
    },
    Hsize(parser, name) {
        if (parser.GetNext() === '=') {
            parser.i++;
        }
        parser.stack.env.hsize = parser.GetDimen(name);
        parser.Push(parser.itemFactory.create('null'));
    },
    ParBox(parser, name) {
        const c = parser.GetBrackets(name, 'c');
        const width = parser.GetDimen(name);
        const text = ParseUtil.internalMath(parser, parser.GetArgument(name));
        const align = splitAlignArray(c, 1);
        const mml = parser.create('node', 'mpadded', text, {
            width: width,
            'data-overflow': 'linebreak',
            'data-vertical-align': align,
        });
        mml.setProperty('vbox', align);
        parser.Push(mml);
    },
    BreakAlign(parser, name) {
        const top = parser.stack.Top();
        if (!(top instanceof ArrayItem)) {
            throw new tex_TexError('BreakNotInArray', '%1 must be used in an alignment environment', parser.currentCS);
        }
        const type = parser.GetArgument(name).trim();
        switch (type) {
            case 'c':
                if (top.First) {
                    throw new tex_TexError('BreakFirstInEntry', '%1 must be at the beginning of an alignment entry', parser.currentCS + '{c}');
                }
                top.breakAlign.cell = splitAlignArray(parser.GetArgument(name), 1);
                break;
            case 'r':
                if (top.row.length || top.First) {
                    throw new tex_TexError('BreakFirstInRow', '%1 must be at the beginning of an alignment row', parser.currentCS + '{r}');
                }
                top.breakAlign.row = splitAlignArray(parser.GetArgument(name));
                break;
            case 't':
                if (top.table.length || top.row.length || top.First) {
                    throw new tex_TexError('BreakFirstInTable', '%1 must be at the beginning of an alignment', parser.currentCS + '{t}');
                }
                top.breakAlign.table = splitAlignArray(parser.GetArgument(name));
                break;
            default:
                throw new tex_TexError('BreakType', 'First argument to %1 must be one of c, r, or t', parser.currentCS);
        }
    },
    MmlToken(parser, name) {
        const kind = parser.GetArgument(name);
        let attr = parser.GetBrackets(name, '').replace(/^\s+/, '');
        const text = parser.GetArgument(name);
        const def = {};
        const keep = [];
        let node;
        try {
            node = parser.create('node', kind);
        }
        catch (_e) {
            node = null;
        }
        if (!node || !node.isToken) {
            throw new tex_TexError('NotMathMLToken', '%1 is not a token element', kind);
        }
        while (attr !== '') {
            const match = attr.match(/^([a-z]+)\s*=\s*('[^']*'|"[^"]*"|[^ ,]*)\s*,?\s*/i);
            if (!match) {
                throw new tex_TexError('InvalidMathMLAttr', 'Invalid MathML attribute: %1', attr);
            }
            if (!node.attributes.hasDefault(match[1]) && !MmlTokenAllow[match[1]]) {
                throw new tex_TexError('UnknownAttrForElement', '%1 is not a recognized attribute for %2', match[1], kind);
            }
            let value = ParseUtil.mmlFilterAttribute(parser, match[1], match[2].replace(/^(['"])(.*)\1$/, '$2'));
            if (value) {
                if (value.toLowerCase() === 'true') {
                    value = true;
                }
                else if (value.toLowerCase() === 'false') {
                    value = false;
                }
                def[match[1]] = value;
                keep.push(match[1]);
            }
            attr = attr.substring(match[0].length);
        }
        if (keep.length) {
            def['mjx-keep-attrs'] = keep.join(' ');
        }
        const textNode = parser.create('text', replaceUnicode(text));
        node.appendChild(textNode);
        tex_NodeUtil.setProperties(node, def);
        parser.Push(node);
    },
    Strut(parser, _name) {
        const row = parser.create('node', 'mrow');
        const padded = parser.create('node', 'mpadded', [row], {
            height: '8.6pt',
            depth: '3pt',
            width: 0,
        });
        parser.Push(padded);
    },
    Phantom(parser, name, v, h) {
        let box = parser.create('node', 'mphantom', [parser.ParseArg(name)]);
        if (v || h) {
            box = parser.create('node', 'mpadded', [box]);
            if (h) {
                tex_NodeUtil.setAttribute(box, 'height', 0);
                tex_NodeUtil.setAttribute(box, 'depth', 0);
            }
            if (v) {
                tex_NodeUtil.setAttribute(box, 'width', 0);
            }
        }
        const atom = parser.create('node', 'TeXAtom', [box]);
        parser.Push(atom);
    },
    Smash(parser, name) {
        const bt = UnitUtil.trimSpaces(parser.GetBrackets(name, ''));
        const smash = parser.create('node', 'mpadded', [parser.ParseArg(name)]);
        switch (bt) {
            case 'b':
                tex_NodeUtil.setAttribute(smash, 'depth', 0);
                break;
            case 't':
                tex_NodeUtil.setAttribute(smash, 'height', 0);
                break;
            default:
                tex_NodeUtil.setAttribute(smash, 'height', 0);
                tex_NodeUtil.setAttribute(smash, 'depth', 0);
        }
        const atom = parser.create('node', 'TeXAtom', [smash]);
        parser.Push(atom);
    },
    Lap(parser, name) {
        const mml = parser.create('node', 'mpadded', [parser.ParseArg(name)], {
            width: 0,
        });
        if (name === '\\llap') {
            tex_NodeUtil.setAttribute(mml, 'lspace', '-1width');
        }
        const atom = parser.create('node', 'TeXAtom', [mml]);
        parser.Push(atom);
    },
    RaiseLower(parser, name) {
        let h = parser.GetDimen(name);
        const item = parser.itemFactory
            .create('position')
            .setProperties({ name: parser.currentCS, move: 'vertical' });
        if (h.charAt(0) === '-') {
            h = h.slice(1);
            name = name.substring(1) === 'raise' ? '\\lower' : '\\raise';
        }
        if (name === '\\lower') {
            item.setProperty('dh', '-' + h);
            item.setProperty('dd', '+' + h);
        }
        else {
            item.setProperty('dh', '+' + h);
            item.setProperty('dd', '-' + h);
        }
        parser.Push(item);
    },
    MoveLeftRight(parser, name) {
        let h = parser.GetDimen(name);
        let nh = h.charAt(0) === '-' ? h.slice(1) : '-' + h;
        if (name === '\\moveleft') {
            const tmp = h;
            h = nh;
            nh = tmp;
        }
        parser.Push(parser.itemFactory.create('position').setProperties({
            name: parser.currentCS,
            move: 'horizontal',
            left: parser.create('node', 'mspace', [], { width: h }),
            right: parser.create('node', 'mspace', [], { width: nh }),
        }));
    },
    Hskip(parser, name, nobreak = false) {
        const node = parser.create('node', 'mspace', [], {
            width: parser.GetDimen(name),
        });
        if (nobreak) {
            tex_NodeUtil.setAttribute(node, 'linebreak', 'nobreak');
        }
        parser.Push(node);
    },
    Nonscript(parser, _name) {
        parser.Push(parser.itemFactory.create('nonscript'));
    },
    Rule(parser, name, style) {
        const w = parser.GetDimen(name), h = parser.GetDimen(name), d = parser.GetDimen(name);
        const def = { width: w, height: h, depth: d };
        if (style !== 'blank') {
            def['mathbackground'] = parser.stack.env['color'] || 'black';
        }
        const node = parser.create('node', 'mspace', [], def);
        parser.Push(node);
    },
    rule(parser, name) {
        const v = parser.GetBrackets(name), w = parser.GetDimen(name), h = parser.GetDimen(name);
        let mml = parser.create('node', 'mspace', [], {
            width: w,
            height: h,
            mathbackground: parser.stack.env['color'] || 'black',
        });
        if (v) {
            mml = parser.create('node', 'mpadded', [mml], { voffset: v });
            if (v.match(/^-/)) {
                tex_NodeUtil.setAttribute(mml, 'height', v);
                tex_NodeUtil.setAttribute(mml, 'depth', '+' + v.substring(1));
            }
            else {
                tex_NodeUtil.setAttribute(mml, 'height', '+' + v);
            }
        }
        parser.Push(mml);
    },
    MakeBig(parser, name, mclass, size) {
        size *= P_HEIGHT;
        const sizeStr = String(size).replace(/(\.\d\d\d).+/, '$1') + 'em';
        const delim = parser.GetDelimiter(name, true);
        const mo = parser.create('token', 'mo', {
            minsize: sizeStr,
            maxsize: sizeStr,
            fence: true,
            stretchy: true,
            symmetric: true,
        }, delim);
        const node = parser.create('node', 'TeXAtom', [mo], { texClass: mclass });
        parser.Push(node);
    },
    BuildRel(parser, name) {
        const top = parser.ParseUpTo(name, '\\over');
        const bot = parser.ParseArg(name);
        const node = parser.create('node', 'munderover');
        tex_NodeUtil.setChild(node, 0, bot);
        tex_NodeUtil.setChild(node, 1, null);
        tex_NodeUtil.setChild(node, 2, top);
        const atom = parser.create('node', 'TeXAtom', [node], {
            texClass: TEXCLASS.REL,
        });
        parser.Push(atom);
    },
    HBox(parser, name, style, font) {
        parser.PushAll(ParseUtil.internalMath(parser, parser.GetArgument(name), style, font));
    },
    FBox(parser, name) {
        const internal = ParseUtil.internalMath(parser, parser.GetArgument(name));
        const node = parser.create('node', 'menclose', internal, {
            notation: 'box',
        });
        parser.Push(node);
    },
    FrameBox(parser, name) {
        const width = parser.GetBrackets(name);
        const pos = parser.GetBrackets(name) || 'c';
        let mml = ParseUtil.internalMath(parser, parser.GetArgument(name));
        if (width) {
            mml = [
                parser.create('node', 'mpadded', mml, {
                    width,
                    'data-align': lookup(pos, { l: 'left', r: 'right' }, 'center'),
                }),
            ];
        }
        const node = parser.create('node', 'TeXAtom', [parser.create('node', 'menclose', mml, { notation: 'box' })], { texClass: TEXCLASS.ORD });
        parser.Push(node);
    },
    MakeBox(parser, name) {
        const width = parser.GetBrackets(name);
        const pos = parser.GetBrackets(name, 'c');
        const mml = parser.create('node', 'mpadded', ParseUtil.internalMath(parser, parser.GetArgument(name)));
        if (width) {
            tex_NodeUtil.setAttribute(mml, 'width', width);
        }
        const align = lookup(pos.toLowerCase(), { c: 'center', r: 'right' }, '');
        if (align) {
            tex_NodeUtil.setAttribute(mml, 'data-align', align);
        }
        if (pos.toLowerCase() !== pos) {
            tex_NodeUtil.setAttribute(mml, 'data-overflow', 'linebreak');
        }
        parser.Push(mml);
    },
    Not(parser, _name) {
        parser.Push(parser.itemFactory.create('not'));
    },
    Dots(parser, _name) {
        const ldotsEntity = tex_NodeUtil.createEntity('2026');
        const cdotsEntity = tex_NodeUtil.createEntity('22EF');
        const ldots = parser.create('token', 'mo', { stretchy: false }, ldotsEntity);
        const cdots = parser.create('token', 'mo', { stretchy: false }, cdotsEntity);
        parser.Push(parser.itemFactory.create('dots').setProperties({
            ldots: ldots,
            cdots: cdots,
        }));
    },
    Matrix(parser, _name, open, close, align, spacing, vspacing, style, cases, numbered) {
        const c = parser.GetNext();
        if (c === '') {
            throw new tex_TexError('MissingArgFor', 'Missing argument for %1', parser.currentCS);
        }
        if (c === '{') {
            parser.i++;
        }
        else {
            parser.string = c + '}' + parser.string.slice(parser.i + 1);
            parser.i = 0;
        }
        const array = parser.itemFactory
            .create('array')
            .setProperty('requireClose', true);
        if (open || !align) {
            array.setProperty('arrayPadding', '.2em .125em');
        }
        array.arraydef = {
            rowspacing: vspacing || '4pt',
            columnspacing: spacing || '1em',
        };
        if (cases) {
            array.setProperty('isCases', true);
        }
        if (numbered) {
            array.setProperty('isNumbered', true);
            array.arraydef.side = numbered;
        }
        if (open || close) {
            array.setProperty('open', open);
            array.setProperty('close', close);
        }
        if (style === 'D') {
            array.arraydef.displaystyle = true;
        }
        if (align != null) {
            array.arraydef.columnalign = align;
        }
        parser.Push(array);
    },
    Entry(parser, name) {
        parser.Push(parser.itemFactory
            .create('cell')
            .setProperties({ isEntry: true, name: name }));
        const top = parser.stack.Top();
        const env = top.getProperty('casesEnv');
        const cases = top.getProperty('isCases');
        if (!cases && !env)
            return;
        const str = parser.string;
        let braces = 0;
        let close = -1;
        let i = parser.i;
        let m = str.length;
        const end = env
            ? new RegExp(`^\\\\end\\s*\\{${env.replace(/\*/, '\\*')}\\}`)
            : null;
        while (i < m) {
            const c = str.charAt(i);
            if (c === '{') {
                braces++;
                i++;
            }
            else if (c === '}') {
                if (braces === 0) {
                    m = 0;
                }
                else {
                    braces--;
                    if (braces === 0 && close < 0) {
                        close = i - parser.i;
                    }
                    i++;
                }
            }
            else if (c === '&' && braces === 0) {
                throw new tex_TexError('ExtraAlignTab', 'Extra alignment tab in \\cases text');
            }
            else if (c === '\\') {
                const rest = str.substring(i);
                if (rest.match(/^((\\cr)[^a-zA-Z]|\\\\)/) || (end && rest.match(end))) {
                    m = 0;
                }
                else {
                    i += 2;
                }
            }
            else {
                i++;
            }
        }
        const text = str.substring(parser.i, i);
        if (!text.match(/^\s*\\text[^a-zA-Z]/) ||
            close !== text.replace(/\s+$/, '').length - 1) {
            const internal = ParseUtil.internalMath(parser, UnitUtil.trimSpaces(text), 0);
            parser.PushAll(internal);
            parser.i = i;
        }
    },
    Cr(parser, name) {
        parser.Push(parser.itemFactory
            .create('cell')
            .setProperties({ isCR: true, name: name }));
    },
    CrLaTeX(parser, name, nobrackets = false) {
        let n;
        if (!nobrackets) {
            if (parser.string.charAt(parser.i) === '*') {
                parser.i++;
            }
            if (parser.string.charAt(parser.i) === '[') {
                const dim = parser.GetBrackets(name, '');
                const [value, unit] = UnitUtil.matchDimen(dim);
                if (dim && !value) {
                    throw new tex_TexError('BracketMustBeDimension', 'Bracket argument to %1 must be a dimension', parser.currentCS);
                }
                n = value + unit;
            }
        }
        parser.Push(parser.itemFactory
            .create('cell')
            .setProperties({ isCR: true, name: name, linebreak: true }));
        const top = parser.stack.Top();
        let node;
        if (top instanceof ArrayItem) {
            if (n) {
                top.addRowSpacing(n);
            }
        }
        else {
            node = parser.create('node', 'mspace', [], {
                linebreak: TexConstant.LineBreak.NEWLINE,
            });
            if (n) {
                tex_NodeUtil.setAttribute(node, 'data-lineleading', n);
            }
            parser.Push(node);
        }
    },
    HLine(parser, _name, style) {
        if (style == null) {
            style = 'solid';
        }
        const top = parser.stack.Top();
        if (!(top instanceof ArrayItem) || top.Size()) {
            throw new tex_TexError('Misplaced', 'Misplaced %1', parser.currentCS);
        }
        if (!top.table.length) {
            top.frame.push(['top', style]);
        }
        else {
            const lines = top.arraydef['rowlines']
                ? top.arraydef['rowlines'].split(/ /)
                : [];
            while (lines.length < top.table.length) {
                lines.push('none');
            }
            lines[top.table.length - 1] = style;
            top.arraydef['rowlines'] = lines.join(' ');
        }
    },
    HFill(parser, _name) {
        const top = parser.stack.Top();
        if (top instanceof ArrayItem) {
            top.hfill.push(top.Size());
        }
        else {
            throw new tex_TexError('UnsupportedHFill', 'Unsupported use of %1', parser.currentCS);
        }
    },
    NewColumnType(parser, name) {
        const c = parser.GetArgument(name);
        const n = parser.GetBrackets(name, '0');
        const macro = parser.GetArgument(name);
        if (c.length !== 1) {
            throw new tex_TexError('BadColumnName', 'Column specifier must be exactly one character: %1', c);
        }
        if (!n.match(/^\d+$/)) {
            throw new tex_TexError('PositiveIntegerArg', 'Argument to %1 must be a positive integer', n);
        }
        const cparser = parser.configuration.columnParser;
        cparser.columnHandler[c] = (state) => cparser.macroColumn(state, macro, parseInt(n));
        parser.Push(parser.itemFactory.create('null'));
    },
    BeginEnd(parser, name) {
        const env = parser.GetArgument(name);
        if (env.match(/\\/)) {
            throw new tex_TexError('InvalidEnv', "Invalid environment name '%1'", env);
        }
        const macro = parser.configuration.handlers
            .get(HandlerType.ENVIRONMENT)
            .lookup(env);
        if (macro && name === '\\end') {
            if (!macro.args[0]) {
                const mml = parser.itemFactory.create('end').setProperty('name', env);
                parser.Push(mml);
                return;
            }
            parser.stack.env['closing'] = env;
        }
        ParseUtil.checkMaxMacros(parser, false);
        parser.parse(HandlerType.ENVIRONMENT, [parser, env]);
    },
    Array(parser, begin, open, close, align, spacing, vspacing, style, raggedHeight) {
        if (!align) {
            align = parser.GetArgument('\\begin{' + begin.getName() + '}');
        }
        const array = parser.itemFactory.create('array');
        if (begin.getName() === 'array') {
            array.setProperty('arrayPadding', '.5em .125em');
        }
        array.parser = parser;
        array.arraydef = {
            columnspacing: spacing || '1em',
            rowspacing: vspacing || '4pt',
        };
        parser.configuration.columnParser.process(parser, align, array);
        if (open) {
            array.setProperty('open', parser.convertDelimiter(open));
        }
        if (close) {
            array.setProperty('close', parser.convertDelimiter(close));
        }
        if ((style || '').charAt(1) === "'") {
            array.arraydef['data-cramped'] = true;
            style = style.charAt(0);
        }
        if (style === 'D') {
            array.arraydef['displaystyle'] = true;
        }
        else if (style) {
            array.arraydef['displaystyle'] = false;
        }
        array.arraydef['scriptlevel'] = style === 'S' ? 1 : 0;
        if (raggedHeight) {
            array.arraydef['useHeight'] = false;
        }
        parser.Push(begin);
        array.StartEntry();
        return array;
    },
    AlignedArray(parser, begin, style = '') {
        const align = parser.GetBrackets('\\begin{' + begin.getName() + '}');
        const item = BaseMethods.Array(parser, begin, null, null, null, null, null, style);
        return ParseUtil.setArrayAlign(item, align);
    },
    IndentAlign(parser, begin) {
        const name = `\\begin{${begin.getName()}}`;
        const first = parser.GetBrackets(name, '');
        const shift = parser.GetBrackets(name, '');
        const last = parser.GetBrackets(name, '');
        if ((first && !UnitUtil.matchDimen(first)[0]) ||
            (shift && !UnitUtil.matchDimen(shift)[0]) ||
            (last && !UnitUtil.matchDimen(last)[0])) {
            throw new tex_TexError('BracketMustBeDimension', 'Bracket argument to %1 must be a dimension', name);
        }
        const lcr = parser.GetArgument(name);
        if (lcr && !lcr.match(/^([lcr]{1,3})?$/)) {
            throw new tex_TexError('BadAlignment', 'Alignment must be one to three copies of l, c, or r');
        }
        const align = [...lcr].map((c) => ({ l: 'left', c: 'center', r: 'right' })[c]);
        if (align.length === 1) {
            align.push(align[0]);
        }
        const attr = {};
        for (const [name, value] of [
            ['indentshiftfirst', first],
            ['indentshift', shift || first],
            ['indentshiftlast', last],
            ['indentalignfirst', align[0]],
            ['indentalign', align[1]],
            ['indentalignlast', align[2]],
        ]) {
            if (value) {
                attr[name] = value;
            }
        }
        parser.Push(parser.itemFactory.create('mstyle', attr, begin.getName()));
    },
    Equation(parser, begin, numbered, display = true) {
        parser.configuration.mathItem.display = display;
        parser.stack.env.display = display;
        ParseUtil.checkEqnEnv(parser);
        parser.Push(begin);
        return parser.itemFactory
            .create('equation', numbered)
            .setProperty('name', begin.getName());
    },
    EqnArray(parser, begin, numbered, taggable, align, balign, spacing) {
        const name = begin.getName();
        const isGather = name === 'gather' || name === 'gather*';
        if (taggable) {
            ParseUtil.checkEqnEnv(parser, !isGather);
        }
        parser.Push(begin);
        align = align
            .replace(/[^clr]/g, '')
            .split('')
            .join(' ');
        align = align
            .replace(/l/g, 'left')
            .replace(/r/g, 'right')
            .replace(/c/g, 'center');
        balign = splitAlignArray(balign);
        const newItem = parser.itemFactory.create('eqnarray', name, numbered, taggable, parser.stack.global);
        newItem.arraydef = {
            displaystyle: true,
            columnalign: align,
            columnspacing: spacing || '1em',
            rowspacing: '3pt',
            'data-break-align': balign,
            side: parser.options['tagSide'],
            minlabelspacing: parser.options['tagIndent'],
        };
        if (isGather) {
            newItem.setProperty('nestable', true);
        }
        return newItem;
    },
    HandleNoTag(parser, _name) {
        parser.tags.notag();
    },
    HandleLabel(parser, name) {
        const label = parser.GetArgument(name);
        if (label === '') {
            return;
        }
        if (!parser.tags.refUpdate) {
            if (parser.tags.label) {
                throw new tex_TexError('MultipleCommand', 'Multiple %1', parser.currentCS);
            }
            parser.tags.label = label;
            if ((parser.tags.allLabels[label] || parser.tags.labels[label]) &&
                !parser.options['ignoreDuplicateLabels']) {
                throw new tex_TexError('MultipleLabel', "Label '%1' multiply defined", label);
            }
            parser.tags.labels[label] = new Label();
        }
    },
    HandleRef(parser, name, eqref) {
        const label = parser.GetArgument(name);
        let ref = parser.tags.allLabels[label] || parser.tags.labels[label];
        if (!ref) {
            if (!parser.tags.refUpdate) {
                parser.tags.redo = true;
            }
            ref = new Label();
        }
        let tag = ref.tag;
        if (eqref) {
            tag = parser.tags.formatRef(tag);
        }
        const node = parser.create('node', 'mrow', ParseUtil.internalMath(parser, tag), {
            href: parser.tags.formatUrl(ref.id, parser.options.baseURL),
            class: 'MathJax_ref',
        });
        parser.Push(node);
    },
    Macro(parser, name, macro, argcount, def) {
        if (argcount) {
            const args = [];
            if (def != null) {
                const optional = parser.GetBrackets(name);
                args.push(optional == null ? def : optional);
            }
            for (let i = args.length; i < argcount; i++) {
                args.push(parser.GetArgument(name));
            }
            macro = ParseUtil.substituteArgs(parser, args, macro);
        }
        parser.string = ParseUtil.addArgs(parser, macro, parser.string.slice(parser.i));
        parser.i = 0;
        ParseUtil.checkMaxMacros(parser);
    },
    MathChoice(parser, name) {
        const D = parser.ParseArg(name);
        const T = parser.ParseArg(name);
        const S = parser.ParseArg(name);
        const SS = parser.ParseArg(name);
        parser.Push(parser.create('node', 'MathChoice', [D, T, S, SS]));
    },
};
/* harmony default export */ const base_BaseMethods = (BaseMethods);
//# sourceMappingURL=BaseMethods.js.map
;// ./mjs/input/tex/ParseMethods.js




const ParseMethods_MATHVARIANT = TexConstant.Variant;
const ParseMethods = {
    variable(parser, c) {
        var _a;
        const def = ParseUtil.getFontDef(parser);
        const env = parser.stack.env;
        if (env.multiLetterIdentifiers && env.font !== '') {
            c =
                ((_a = parser.string
                    .substring(parser.i - 1)
                    .match(env.multiLetterIdentifiers)) === null || _a === void 0 ? void 0 : _a[0]) || c;
            parser.i += c.length - 1;
            if (def.mathvariant === ParseMethods_MATHVARIANT.NORMAL &&
                env.noAutoOP &&
                c.length > 1) {
                def.autoOP = false;
            }
        }
        if (!def.mathvariant && ParseUtil.isLatinOrGreekChar(c)) {
            const variant = parser.configuration.mathStyle(c);
            if (variant) {
                def.mathvariant = variant;
            }
        }
        const node = parser.create('token', 'mi', def, c);
        parser.Push(node);
    },
    digit(parser, _c) {
        const pattern = parser.configuration.options['numberPattern'];
        const n = parser.string.slice(parser.i - 1).match(pattern);
        const def = ParseUtil.getFontDef(parser);
        if (!n) {
            return false;
        }
        const mml = parser.create('token', 'mn', def, n[0].replace(/[{}]/g, ''));
        parser.i += n[0].length - 1;
        parser.Push(mml);
        return true;
    },
    controlSequence(parser, _c) {
        const name = parser.GetCS();
        parser.parse(HandlerType.MACRO, [parser, name]);
    },
    lcGreek(parser, mchar) {
        const def = {
            mathvariant: parser.configuration.mathStyle(mchar.char) || ParseMethods_MATHVARIANT.ITALIC,
        };
        const node = parser.create('token', 'mi', def, mchar.char);
        parser.Push(node);
    },
    ucGreek(parser, mchar) {
        const def = {
            mathvariant: parser.stack.env['font'] ||
                parser.configuration.mathStyle(mchar.char, true) ||
                ParseMethods_MATHVARIANT.NORMAL,
        };
        const node = parser.create('token', 'mi', def, mchar.char);
        parser.Push(node);
    },
    mathchar0mi(parser, mchar) {
        const def = mchar.attributes || { mathvariant: ParseMethods_MATHVARIANT.ITALIC };
        const node = parser.create('token', 'mi', def, mchar.char);
        parser.Push(node);
    },
    mathchar0mo(parser, mchar) {
        const def = mchar.attributes || {};
        def['stretchy'] = false;
        const node = parser.create('token', 'mo', def, mchar.char);
        tex_NodeUtil.setProperty(node, 'fixStretchy', true);
        parser.configuration.addNode('fixStretchy', node);
        parser.Push(node);
    },
    mathchar7(parser, mchar) {
        const def = mchar.attributes || { mathvariant: ParseMethods_MATHVARIANT.NORMAL };
        if (parser.stack.env['font']) {
            def['mathvariant'] = parser.stack.env['font'];
        }
        const node = parser.create('token', 'mi', def, mchar.char);
        parser.Push(node);
    },
    delimiter(parser, delim) {
        let def = delim.attributes || {};
        def = Object.assign({ fence: false, stretchy: false }, def);
        const node = parser.create('token', 'mo', def, delim.char);
        parser.Push(node);
    },
    environment(parser, env, func, args) {
        const mml = parser.itemFactory.create('begin').setProperty('name', env);
        parser.Push(func(parser, mml, ...args.slice(1)));
    },
};
/* harmony default export */ const tex_ParseMethods = (ParseMethods);
//# sourceMappingURL=ParseMethods.js.map
;// ./mjs/input/tex/base/BaseMappings.js







const THICKMATHSPACE = em(MATHSPACE.thickmathspace);
const VARIANT = TexConstant.Variant;
new RegExpMap('letter', tex_ParseMethods.variable, /[a-z]/i);
new RegExpMap('digit', tex_ParseMethods.digit, /[0-9.,]/);
new RegExpMap('command', tex_ParseMethods.controlSequence, /^\\/);
new MacroMap('special', {
    '{': base_BaseMethods.Open,
    '}': base_BaseMethods.Close,
    '~': base_BaseMethods.Tilde,
    '^': base_BaseMethods.Superscript,
    _: base_BaseMethods.Subscript,
    '|': base_BaseMethods.Bar,
    ' ': base_BaseMethods.Space,
    '\t': base_BaseMethods.Space,
    '\r': base_BaseMethods.Space,
    '\n': base_BaseMethods.Space,
    "'": base_BaseMethods.Prime,
    '%': base_BaseMethods.Comment,
    '&': base_BaseMethods.Entry,
    '#': base_BaseMethods.Hash,
    '\u00A0': base_BaseMethods.Space,
    '\u2019': base_BaseMethods.Prime,
});
new CharacterMap('lcGreek', tex_ParseMethods.lcGreek, {
    alpha: '\u03B1',
    beta: '\u03B2',
    gamma: '\u03B3',
    delta: '\u03B4',
    epsilon: '\u03F5',
    zeta: '\u03B6',
    eta: '\u03B7',
    theta: '\u03B8',
    iota: '\u03B9',
    kappa: '\u03BA',
    lambda: '\u03BB',
    mu: '\u03BC',
    nu: '\u03BD',
    xi: '\u03BE',
    omicron: '\u03BF',
    pi: '\u03C0',
    rho: '\u03C1',
    sigma: '\u03C3',
    tau: '\u03C4',
    upsilon: '\u03C5',
    phi: '\u03D5',
    chi: '\u03C7',
    psi: '\u03C8',
    omega: '\u03C9',
    varepsilon: '\u03B5',
    vartheta: '\u03D1',
    varpi: '\u03D6',
    varrho: '\u03F1',
    varsigma: '\u03C2',
    varphi: '\u03C6',
});
new CharacterMap('ucGreek', tex_ParseMethods.ucGreek, {
    Gamma: '\u0393',
    Delta: '\u0394',
    Theta: '\u0398',
    Lambda: '\u039B',
    Xi: '\u039E',
    Pi: '\u03A0',
    Sigma: '\u03A3',
    Upsilon: '\u03A5',
    Phi: '\u03A6',
    Psi: '\u03A8',
    Omega: '\u03A9',
});
new CharacterMap('mathchar0mi', tex_ParseMethods.mathchar0mi, {
    AA: '\u212B',
    S: ['\u00A7', { mathvariant: VARIANT.NORMAL }],
    aleph: ['\u2135', { mathvariant: VARIANT.NORMAL }],
    hbar: ['\u210F', { variantForm: true }],
    imath: '\u0131',
    jmath: '\u0237',
    ell: '\u2113',
    wp: ['\u2118', { mathvariant: VARIANT.NORMAL }],
    Re: ['\u211C', { mathvariant: VARIANT.NORMAL }],
    Im: ['\u2111', { mathvariant: VARIANT.NORMAL }],
    partial: ['\u2202', { mathvariant: VARIANT.ITALIC }],
    infty: ['\u221E', { mathvariant: VARIANT.NORMAL }],
    prime: ['\u2032', { variantForm: true }],
    emptyset: ['\u2205', { mathvariant: VARIANT.NORMAL }],
    nabla: ['\u2207', { mathvariant: VARIANT.NORMAL }],
    top: ['\u22A4', { mathvariant: VARIANT.NORMAL }],
    bot: ['\u22A5', { mathvariant: VARIANT.NORMAL }],
    angle: ['\u2220', { mathvariant: VARIANT.NORMAL }],
    triangle: ['\u25B3', { mathvariant: VARIANT.NORMAL }],
    backslash: ['\\', { mathvariant: VARIANT.NORMAL }],
    forall: ['\u2200', { mathvariant: VARIANT.NORMAL }],
    exists: ['\u2203', { mathvariant: VARIANT.NORMAL }],
    neg: ['\u00AC', { mathvariant: VARIANT.NORMAL }],
    lnot: ['\u00AC', { mathvariant: VARIANT.NORMAL }],
    flat: ['\u266D', { mathvariant: VARIANT.NORMAL }],
    natural: ['\u266E', { mathvariant: VARIANT.NORMAL }],
    sharp: ['\u266F', { mathvariant: VARIANT.NORMAL }],
    clubsuit: ['\u2663', { mathvariant: VARIANT.NORMAL }],
    diamondsuit: ['\u2662', { mathvariant: VARIANT.NORMAL }],
    heartsuit: ['\u2661', { mathvariant: VARIANT.NORMAL }],
    spadesuit: ['\u2660', { mathvariant: VARIANT.NORMAL }],
});
new CharacterMap('mathchar0mo', tex_ParseMethods.mathchar0mo, {
    surd: '\u221A',
    coprod: ['\u2210', { movesupsub: true }],
    bigvee: ['\u22C1', { movesupsub: true }],
    bigwedge: ['\u22C0', { movesupsub: true }],
    biguplus: ['\u2A04', { movesupsub: true }],
    bigcap: ['\u22C2', { movesupsub: true }],
    bigcup: ['\u22C3', { movesupsub: true }],
    int: '\u222B',
    intop: ['\u222B', { movesupsub: true, movablelimits: true }],
    iint: '\u222C',
    iiint: '\u222D',
    prod: ['\u220F', { movesupsub: true }],
    sum: ['\u2211', { movesupsub: true }],
    bigotimes: ['\u2A02', { movesupsub: true }],
    bigoplus: ['\u2A01', { movesupsub: true }],
    bigodot: ['\u2A00', { movesupsub: true }],
    oint: '\u222E',
    ointop: ['\u222E', { movesupsub: true, movablelimits: true }],
    oiint: '\u222F',
    oiiint: '\u2230',
    bigsqcup: ['\u2A06', { movesupsub: true }],
    smallint: ['\u222B', { largeop: false }],
    triangleleft: '\u25C3',
    triangleright: '\u25B9',
    bigtriangleup: '\u25B3',
    bigtriangledown: '\u25BD',
    wedge: '\u2227',
    land: '\u2227',
    vee: '\u2228',
    lor: '\u2228',
    cap: '\u2229',
    cup: '\u222A',
    ddagger: '\u2021',
    dagger: '\u2020',
    sqcap: '\u2293',
    sqcup: '\u2294',
    uplus: '\u228E',
    amalg: '\u2A3F',
    diamond: '\u22C4',
    bullet: '\u2219',
    wr: '\u2240',
    div: '\u00F7',
    odot: ['\u2299', { largeop: false }],
    oslash: ['\u2298', { largeop: false }],
    otimes: ['\u2297', { largeop: false }],
    ominus: ['\u2296', { largeop: false }],
    oplus: ['\u2295', { largeop: false }],
    mp: '\u2213',
    pm: '\u00B1',
    circ: '\u2218',
    bigcirc: '\u25EF',
    setminus: '\u2216',
    cdot: '\u22C5',
    ast: '\u2217',
    times: '\u00D7',
    star: '\u22C6',
    propto: '\u221D',
    sqsubseteq: '\u2291',
    sqsupseteq: '\u2292',
    parallel: '\u2225',
    mid: '\u2223',
    dashv: '\u22A3',
    vdash: '\u22A2',
    leq: '\u2264',
    le: '\u2264',
    geq: '\u2265',
    ge: '\u2265',
    lt: '\u003C',
    gt: '\u003E',
    succ: '\u227B',
    prec: '\u227A',
    approx: '\u2248',
    succeq: '\u2AB0',
    preceq: '\u2AAF',
    supset: '\u2283',
    subset: '\u2282',
    supseteq: '\u2287',
    subseteq: '\u2286',
    in: '\u2208',
    ni: '\u220B',
    notin: '\u2209',
    owns: '\u220B',
    gg: '\u226B',
    ll: '\u226A',
    sim: '\u223C',
    simeq: '\u2243',
    perp: '\u27C2',
    equiv: '\u2261',
    asymp: '\u224D',
    smile: '\u2323',
    frown: '\u2322',
    ne: '\u2260',
    neq: '\u2260',
    cong: '\u2245',
    doteq: '\u2250',
    bowtie: '\u22C8',
    models: '\u22A7',
    notChar: '\u29F8',
    Leftrightarrow: '\u21D4',
    Leftarrow: '\u21D0',
    Rightarrow: '\u21D2',
    leftrightarrow: '\u2194',
    leftarrow: '\u2190',
    gets: '\u2190',
    rightarrow: '\u2192',
    to: ['\u2192', { accent: false }],
    mapsto: '\u21A6',
    leftharpoonup: '\u21BC',
    leftharpoondown: '\u21BD',
    rightharpoonup: '\u21C0',
    rightharpoondown: '\u21C1',
    nearrow: '\u2197',
    searrow: '\u2198',
    nwarrow: '\u2196',
    swarrow: '\u2199',
    rightleftharpoons: '\u21CC',
    hookrightarrow: '\u21AA',
    hookleftarrow: '\u21A9',
    longleftarrow: '\u27F5',
    Longleftarrow: '\u27F8',
    longrightarrow: '\u27F6',
    Longrightarrow: '\u27F9',
    Longleftrightarrow: '\u27FA',
    longleftrightarrow: '\u27F7',
    longmapsto: '\u27FC',
    ldots: '\u2026',
    cdots: '\u22EF',
    vdots: '\u22EE',
    ddots: '\u22F1',
    iddots: '\u22F0',
    dotsc: '\u2026',
    dotsb: '\u22EF',
    dotsm: '\u22EF',
    dotsi: '\u22EF',
    dotso: '\u2026',
    ldotp: ['\u002E', { texClass: TEXCLASS.PUNCT }],
    cdotp: ['\u22C5', { texClass: TEXCLASS.PUNCT }],
    colon: ['\u003A', { texClass: TEXCLASS.PUNCT }],
});
new CharacterMap('mathchar7', tex_ParseMethods.mathchar7, {
    _: '\u005F',
    '#': '\u0023',
    $: '\u0024',
    '%': '\u0025',
    '&': '\u0026',
    And: '\u0026',
});
new DelimiterMap('delimiter', tex_ParseMethods.delimiter, {
    '(': '(',
    ')': ')',
    '[': '[',
    ']': ']',
    '<': '\u27E8',
    '>': '\u27E9',
    '\\lt': '\u27E8',
    '\\gt': '\u27E9',
    '/': '/',
    '|': ['|', { texClass: TEXCLASS.ORD }],
    '.': '',
    '\\lmoustache': '\u23B0',
    '\\rmoustache': '\u23B1',
    '\\lgroup': '\u27EE',
    '\\rgroup': '\u27EF',
    '\\arrowvert': '\u23D0',
    '\\Arrowvert': '\u2016',
    '\\bracevert': '\u23AA',
    '\\Vert': ['\u2016', { texClass: TEXCLASS.ORD }],
    '\\|': ['\u2016', { texClass: TEXCLASS.ORD }],
    '\\vert': ['|', { texClass: TEXCLASS.ORD }],
    '\\uparrow': '\u2191',
    '\\downarrow': '\u2193',
    '\\updownarrow': '\u2195',
    '\\Uparrow': '\u21D1',
    '\\Downarrow': '\u21D3',
    '\\Updownarrow': '\u21D5',
    '\\backslash': '\\',
    '\\rangle': '\u27E9',
    '\\langle': '\u27E8',
    '\\rbrace': '}',
    '\\lbrace': '{',
    '\\}': '}',
    '\\{': '{',
    '\\rceil': '\u2309',
    '\\lceil': '\u2308',
    '\\rfloor': '\u230B',
    '\\lfloor': '\u230A',
    '\\lbrack': '[',
    '\\rbrack': ']',
});
new CommandMap('macros', {
    displaystyle: [base_BaseMethods.SetStyle, 'D', true, 0],
    textstyle: [base_BaseMethods.SetStyle, 'T', false, 0],
    scriptstyle: [base_BaseMethods.SetStyle, 'S', false, 1],
    scriptscriptstyle: [base_BaseMethods.SetStyle, 'SS', false, 2],
    rm: [base_BaseMethods.SetFont, VARIANT.NORMAL],
    mit: [base_BaseMethods.SetFont, VARIANT.ITALIC],
    oldstyle: [base_BaseMethods.SetFont, VARIANT.OLDSTYLE],
    cal: [base_BaseMethods.SetFont, VARIANT.CALLIGRAPHIC],
    it: [base_BaseMethods.SetFont, VARIANT.MATHITALIC],
    bf: [base_BaseMethods.SetFont, VARIANT.BOLD],
    sf: [base_BaseMethods.SetFont, VARIANT.SANSSERIF],
    tt: [base_BaseMethods.SetFont, VARIANT.MONOSPACE],
    frak: [base_BaseMethods.MathFont, VARIANT.FRAKTUR],
    Bbb: [base_BaseMethods.MathFont, VARIANT.DOUBLESTRUCK],
    mathrm: [base_BaseMethods.MathFont, VARIANT.NORMAL],
    mathup: [base_BaseMethods.MathFont, VARIANT.NORMAL],
    mathnormal: [base_BaseMethods.MathFont, ''],
    mathbf: [base_BaseMethods.MathFont, VARIANT.BOLD],
    mathbfup: [base_BaseMethods.MathFont, VARIANT.BOLD],
    mathit: [base_BaseMethods.MathFont, VARIANT.MATHITALIC],
    mathbfit: [base_BaseMethods.MathFont, VARIANT.BOLDITALIC],
    mathbb: [base_BaseMethods.MathFont, VARIANT.DOUBLESTRUCK],
    mathfrak: [base_BaseMethods.MathFont, VARIANT.FRAKTUR],
    mathbffrak: [base_BaseMethods.MathFont, VARIANT.BOLDFRAKTUR],
    mathscr: [base_BaseMethods.MathFont, VARIANT.SCRIPT],
    mathbfscr: [base_BaseMethods.MathFont, VARIANT.BOLDSCRIPT],
    mathsf: [base_BaseMethods.MathFont, VARIANT.SANSSERIF],
    mathsfup: [base_BaseMethods.MathFont, VARIANT.SANSSERIF],
    mathbfsf: [base_BaseMethods.MathFont, VARIANT.BOLDSANSSERIF],
    mathbfsfup: [base_BaseMethods.MathFont, VARIANT.BOLDSANSSERIF],
    mathsfit: [base_BaseMethods.MathFont, VARIANT.SANSSERIFITALIC],
    mathbfsfit: [base_BaseMethods.MathFont, VARIANT.SANSSERIFBOLDITALIC],
    mathtt: [base_BaseMethods.MathFont, VARIANT.MONOSPACE],
    mathcal: [base_BaseMethods.MathFont, VARIANT.CALLIGRAPHIC],
    mathbfcal: [base_BaseMethods.MathFont, VARIANT.BOLDCALLIGRAPHIC],
    symrm: [base_BaseMethods.MathFont, VARIANT.NORMAL],
    symup: [base_BaseMethods.MathFont, VARIANT.NORMAL],
    symnormal: [base_BaseMethods.MathFont, ''],
    symbf: [base_BaseMethods.MathFont, VARIANT.BOLD, VARIANT.BOLDITALIC],
    symbfup: [base_BaseMethods.MathFont, VARIANT.BOLD],
    symit: [base_BaseMethods.MathFont, VARIANT.ITALIC],
    symbfit: [base_BaseMethods.MathFont, VARIANT.BOLDITALIC],
    symbb: [base_BaseMethods.MathFont, VARIANT.DOUBLESTRUCK],
    symfrak: [base_BaseMethods.MathFont, VARIANT.FRAKTUR],
    symbffrak: [base_BaseMethods.MathFont, VARIANT.BOLDFRAKTUR],
    symscr: [base_BaseMethods.MathFont, VARIANT.SCRIPT],
    symbfscr: [base_BaseMethods.MathFont, VARIANT.BOLDSCRIPT],
    symsf: [base_BaseMethods.MathFont, VARIANT.SANSSERIF, VARIANT.SANSSERIFITALIC],
    symsfup: [base_BaseMethods.MathFont, VARIANT.SANSSERIF],
    symbfsf: [base_BaseMethods.MathFont, VARIANT.BOLDSANSSERIF],
    symbfsfup: [base_BaseMethods.MathFont, VARIANT.BOLDSANSSERIF],
    symsfit: [base_BaseMethods.MathFont, VARIANT.SANSSERIFITALIC],
    symbfsfit: [base_BaseMethods.MathFont, VARIANT.SANSSERIFBOLDITALIC],
    symtt: [base_BaseMethods.MathFont, VARIANT.MONOSPACE],
    symcal: [base_BaseMethods.MathFont, VARIANT.CALLIGRAPHIC],
    symbfcal: [base_BaseMethods.MathFont, VARIANT.BOLDCALLIGRAPHIC],
    textrm: [base_BaseMethods.HBox, null, VARIANT.NORMAL],
    textup: [base_BaseMethods.HBox, null, VARIANT.NORMAL],
    textnormal: [base_BaseMethods.HBox],
    textit: [base_BaseMethods.HBox, null, VARIANT.ITALIC],
    textbf: [base_BaseMethods.HBox, null, VARIANT.BOLD],
    textsf: [base_BaseMethods.HBox, null, VARIANT.SANSSERIF],
    texttt: [base_BaseMethods.HBox, null, VARIANT.MONOSPACE],
    tiny: [base_BaseMethods.SetSize, 0.5],
    Tiny: [base_BaseMethods.SetSize, 0.6],
    scriptsize: [base_BaseMethods.SetSize, 0.7],
    small: [base_BaseMethods.SetSize, 0.85],
    normalsize: [base_BaseMethods.SetSize, 1.0],
    large: [base_BaseMethods.SetSize, 1.2],
    Large: [base_BaseMethods.SetSize, 1.44],
    LARGE: [base_BaseMethods.SetSize, 1.73],
    huge: [base_BaseMethods.SetSize, 2.07],
    Huge: [base_BaseMethods.SetSize, 2.49],
    arcsin: base_BaseMethods.NamedFn,
    arccos: base_BaseMethods.NamedFn,
    arctan: base_BaseMethods.NamedFn,
    arg: base_BaseMethods.NamedFn,
    cos: base_BaseMethods.NamedFn,
    cosh: base_BaseMethods.NamedFn,
    cot: base_BaseMethods.NamedFn,
    coth: base_BaseMethods.NamedFn,
    csc: base_BaseMethods.NamedFn,
    deg: base_BaseMethods.NamedFn,
    det: base_BaseMethods.NamedOp,
    dim: base_BaseMethods.NamedFn,
    exp: base_BaseMethods.NamedFn,
    gcd: base_BaseMethods.NamedOp,
    hom: base_BaseMethods.NamedFn,
    inf: base_BaseMethods.NamedOp,
    ker: base_BaseMethods.NamedFn,
    lg: base_BaseMethods.NamedFn,
    lim: base_BaseMethods.NamedOp,
    liminf: [base_BaseMethods.NamedOp, 'lim&thinsp;inf'],
    limsup: [base_BaseMethods.NamedOp, 'lim&thinsp;sup'],
    ln: base_BaseMethods.NamedFn,
    log: base_BaseMethods.NamedFn,
    max: base_BaseMethods.NamedOp,
    min: base_BaseMethods.NamedOp,
    Pr: base_BaseMethods.NamedOp,
    sec: base_BaseMethods.NamedFn,
    sin: base_BaseMethods.NamedFn,
    sinh: base_BaseMethods.NamedFn,
    sup: base_BaseMethods.NamedOp,
    tan: base_BaseMethods.NamedFn,
    tanh: base_BaseMethods.NamedFn,
    limits: [base_BaseMethods.Limits, true],
    nolimits: [base_BaseMethods.Limits, false],
    overline: [base_BaseMethods.UnderOver, '2015'],
    underline: [base_BaseMethods.UnderOver, '2015'],
    overbrace: [base_BaseMethods.UnderOver, '23DE', true],
    underbrace: [base_BaseMethods.UnderOver, '23DF', true],
    overparen: [base_BaseMethods.UnderOver, '23DC'],
    underparen: [base_BaseMethods.UnderOver, '23DD'],
    overrightarrow: [base_BaseMethods.UnderOver, '2192'],
    underrightarrow: [base_BaseMethods.UnderOver, '2192'],
    overleftarrow: [base_BaseMethods.UnderOver, '2190'],
    underleftarrow: [base_BaseMethods.UnderOver, '2190'],
    overleftrightarrow: [base_BaseMethods.UnderOver, '2194'],
    underleftrightarrow: [base_BaseMethods.UnderOver, '2194'],
    overset: base_BaseMethods.Overset,
    underset: base_BaseMethods.Underset,
    overunderset: base_BaseMethods.Overunderset,
    stackrel: [base_BaseMethods.Macro, '\\mathrel{\\mathop{#2}\\limits^{#1}}', 2],
    stackbin: [base_BaseMethods.Macro, '\\mathbin{\\mathop{#2}\\limits^{#1}}', 2],
    over: base_BaseMethods.Over,
    overwithdelims: base_BaseMethods.Over,
    atop: base_BaseMethods.Over,
    atopwithdelims: base_BaseMethods.Over,
    above: base_BaseMethods.Over,
    abovewithdelims: base_BaseMethods.Over,
    brace: [base_BaseMethods.Over, '{', '}'],
    brack: [base_BaseMethods.Over, '[', ']'],
    choose: [base_BaseMethods.Over, '(', ')'],
    frac: base_BaseMethods.Frac,
    sqrt: base_BaseMethods.Sqrt,
    root: base_BaseMethods.Root,
    uproot: [base_BaseMethods.MoveRoot, 'upRoot'],
    leftroot: [base_BaseMethods.MoveRoot, 'leftRoot'],
    left: base_BaseMethods.LeftRight,
    right: base_BaseMethods.LeftRight,
    middle: base_BaseMethods.LeftRight,
    llap: base_BaseMethods.Lap,
    rlap: base_BaseMethods.Lap,
    raise: base_BaseMethods.RaiseLower,
    lower: base_BaseMethods.RaiseLower,
    moveleft: base_BaseMethods.MoveLeftRight,
    moveright: base_BaseMethods.MoveLeftRight,
    ',': [base_BaseMethods.Spacer, MATHSPACE.thinmathspace],
    ':': [base_BaseMethods.Spacer, MATHSPACE.mediummathspace],
    '>': [base_BaseMethods.Spacer, MATHSPACE.mediummathspace],
    ';': [base_BaseMethods.Spacer, MATHSPACE.thickmathspace],
    '!': [base_BaseMethods.Spacer, MATHSPACE.negativethinmathspace],
    enspace: [base_BaseMethods.Spacer, 0.5],
    quad: [base_BaseMethods.Spacer, 1],
    qquad: [base_BaseMethods.Spacer, 2],
    thinspace: [base_BaseMethods.Spacer, MATHSPACE.thinmathspace],
    negthinspace: [base_BaseMethods.Spacer, MATHSPACE.negativethinmathspace],
    '*': base_BaseMethods.DiscretionaryTimes,
    allowbreak: base_BaseMethods.AllowBreak,
    goodbreak: [base_BaseMethods.Linebreak, TexConstant.LineBreak.GOODBREAK],
    badbreak: [base_BaseMethods.Linebreak, TexConstant.LineBreak.BADBREAK],
    nobreak: [base_BaseMethods.Linebreak, TexConstant.LineBreak.NOBREAK],
    break: base_BaseMethods.Break,
    hskip: base_BaseMethods.Hskip,
    hspace: base_BaseMethods.Hskip,
    kern: [base_BaseMethods.Hskip, true],
    mskip: base_BaseMethods.Hskip,
    mspace: base_BaseMethods.Hskip,
    mkern: [base_BaseMethods.Hskip, true],
    rule: base_BaseMethods.rule,
    Rule: [base_BaseMethods.Rule],
    Space: [base_BaseMethods.Rule, 'blank'],
    nonscript: base_BaseMethods.Nonscript,
    big: [base_BaseMethods.MakeBig, TEXCLASS.ORD, 0.85],
    Big: [base_BaseMethods.MakeBig, TEXCLASS.ORD, 1.15],
    bigg: [base_BaseMethods.MakeBig, TEXCLASS.ORD, 1.45],
    Bigg: [base_BaseMethods.MakeBig, TEXCLASS.ORD, 1.75],
    bigl: [base_BaseMethods.MakeBig, TEXCLASS.OPEN, 0.85],
    Bigl: [base_BaseMethods.MakeBig, TEXCLASS.OPEN, 1.15],
    biggl: [base_BaseMethods.MakeBig, TEXCLASS.OPEN, 1.45],
    Biggl: [base_BaseMethods.MakeBig, TEXCLASS.OPEN, 1.75],
    bigr: [base_BaseMethods.MakeBig, TEXCLASS.CLOSE, 0.85],
    Bigr: [base_BaseMethods.MakeBig, TEXCLASS.CLOSE, 1.15],
    biggr: [base_BaseMethods.MakeBig, TEXCLASS.CLOSE, 1.45],
    Biggr: [base_BaseMethods.MakeBig, TEXCLASS.CLOSE, 1.75],
    bigm: [base_BaseMethods.MakeBig, TEXCLASS.REL, 0.85],
    Bigm: [base_BaseMethods.MakeBig, TEXCLASS.REL, 1.15],
    biggm: [base_BaseMethods.MakeBig, TEXCLASS.REL, 1.45],
    Biggm: [base_BaseMethods.MakeBig, TEXCLASS.REL, 1.75],
    mathord: [base_BaseMethods.TeXAtom, TEXCLASS.ORD],
    mathop: [base_BaseMethods.TeXAtom, TEXCLASS.OP],
    mathopen: [base_BaseMethods.TeXAtom, TEXCLASS.OPEN],
    mathclose: [base_BaseMethods.TeXAtom, TEXCLASS.CLOSE],
    mathbin: [base_BaseMethods.TeXAtom, TEXCLASS.BIN],
    mathrel: [base_BaseMethods.TeXAtom, TEXCLASS.REL],
    mathpunct: [base_BaseMethods.TeXAtom, TEXCLASS.PUNCT],
    mathinner: [base_BaseMethods.TeXAtom, TEXCLASS.INNER],
    vtop: [base_BaseMethods.VBox, 'top'],
    vcenter: [base_BaseMethods.VBox, 'center'],
    vbox: [base_BaseMethods.VBox, 'bottom'],
    hsize: base_BaseMethods.Hsize,
    parbox: base_BaseMethods.ParBox,
    breakAlign: base_BaseMethods.BreakAlign,
    buildrel: base_BaseMethods.BuildRel,
    hbox: [base_BaseMethods.HBox, 0],
    text: base_BaseMethods.HBox,
    mbox: [base_BaseMethods.HBox, 0],
    fbox: base_BaseMethods.FBox,
    boxed: [base_BaseMethods.Macro, '\\fbox{$\\displaystyle{#1}$}', 1],
    framebox: base_BaseMethods.FrameBox,
    makebox: base_BaseMethods.MakeBox,
    strut: base_BaseMethods.Strut,
    mathstrut: [base_BaseMethods.Macro, '\\vphantom{(}'],
    phantom: base_BaseMethods.Phantom,
    vphantom: [base_BaseMethods.Phantom, 1, 0],
    hphantom: [base_BaseMethods.Phantom, 0, 1],
    smash: base_BaseMethods.Smash,
    acute: [base_BaseMethods.Accent, '00B4'],
    grave: [base_BaseMethods.Accent, '0060'],
    ddot: [base_BaseMethods.Accent, '00A8'],
    dddot: [base_BaseMethods.Accent, '20DB'],
    ddddot: [base_BaseMethods.Accent, '20DC'],
    tilde: [base_BaseMethods.Accent, '007E'],
    bar: [base_BaseMethods.Accent, '00AF'],
    breve: [base_BaseMethods.Accent, '02D8'],
    check: [base_BaseMethods.Accent, '02C7'],
    hat: [base_BaseMethods.Accent, '005E'],
    vec: [base_BaseMethods.Accent, '2192', false],
    dot: [base_BaseMethods.Accent, '02D9'],
    widetilde: [base_BaseMethods.Accent, '007E', true],
    widehat: [base_BaseMethods.Accent, '005E', true],
    matrix: base_BaseMethods.Matrix,
    array: base_BaseMethods.Matrix,
    pmatrix: [base_BaseMethods.Matrix, '(', ')'],
    cases: [base_BaseMethods.Matrix, '{', '', 'left left', null, '.2em', null, true],
    eqalign: [
        base_BaseMethods.Matrix,
        null,
        null,
        'right left',
        THICKMATHSPACE,
        '.5em',
        'D',
    ],
    displaylines: [base_BaseMethods.Matrix, null, null, 'center', null, '.5em', 'D'],
    cr: base_BaseMethods.Cr,
    '\\': base_BaseMethods.CrLaTeX,
    newline: [base_BaseMethods.CrLaTeX, true],
    hline: base_BaseMethods.HLine,
    hdashline: [base_BaseMethods.HLine, 'dashed'],
    eqalignno: [
        base_BaseMethods.Matrix,
        null,
        null,
        'right left',
        THICKMATHSPACE,
        '.5em',
        'D',
        null,
        'right',
    ],
    leqalignno: [
        base_BaseMethods.Matrix,
        null,
        null,
        'right left',
        THICKMATHSPACE,
        '.5em',
        'D',
        null,
        'left',
    ],
    hfill: base_BaseMethods.HFill,
    hfil: base_BaseMethods.HFill,
    hfilll: base_BaseMethods.HFill,
    bmod: [
        base_BaseMethods.Macro,
        '\\mmlToken{mo}[lspace="' +
            THICKMATHSPACE +
            '"' +
            ' rspace="' +
            THICKMATHSPACE +
            '"]{mod}',
    ],
    pmod: [base_BaseMethods.Macro, '\\pod{\\mmlToken{mi}{mod}\\kern 6mu #1}', 1],
    mod: [
        base_BaseMethods.Macro,
        '\\mathchoice{\\kern18mu}{\\kern12mu}' +
            '{\\kern12mu}{\\kern12mu}\\mmlToken{mi}{mod}\\,\\,#1',
        1,
    ],
    pod: [
        base_BaseMethods.Macro,
        '\\mathchoice{\\kern18mu}{\\kern8mu}' + '{\\kern8mu}{\\kern8mu}(#1)',
        1,
    ],
    iff: [base_BaseMethods.Macro, '\\;\\Longleftrightarrow\\;'],
    skew: [base_BaseMethods.Macro, '{{#2{#3\\mkern#1mu}\\mkern-#1mu}{}}', 3],
    pmb: [base_BaseMethods.Macro, '\\rlap{#1}\\kern1px{#1}', 1],
    TeX: [base_BaseMethods.Macro, 'T\\kern-.14em\\lower.5ex{E}\\kern-.115em X'],
    LaTeX: [
        base_BaseMethods.Macro,
        'L\\kern-.325em\\raise.21em' + '{\\scriptstyle{A}}\\kern-.17em\\TeX',
    ],
    not: base_BaseMethods.Not,
    dots: base_BaseMethods.Dots,
    space: base_BaseMethods.Tilde,
    '\u00A0': base_BaseMethods.Tilde,
    ' ': base_BaseMethods.Tilde,
    begin: base_BaseMethods.BeginEnd,
    end: base_BaseMethods.BeginEnd,
    label: base_BaseMethods.HandleLabel,
    ref: base_BaseMethods.HandleRef,
    nonumber: base_BaseMethods.HandleNoTag,
    newcolumntype: base_BaseMethods.NewColumnType,
    mathchoice: base_BaseMethods.MathChoice,
    mmlToken: base_BaseMethods.MmlToken,
});
new EnvironmentMap('environment', tex_ParseMethods.environment, {
    displaymath: [base_BaseMethods.Equation, null, false],
    math: [base_BaseMethods.Equation, null, false, false],
    array: [base_BaseMethods.AlignedArray],
    darray: [base_BaseMethods.AlignedArray, null, 'D'],
    equation: [base_BaseMethods.Equation, null, true],
    eqnarray: [
        base_BaseMethods.EqnArray,
        null,
        true,
        true,
        'rcl',
        'bmt',
        ParseUtil.cols(0, MATHSPACE.thickmathspace),
        '.5em',
    ],
    indentalign: [base_BaseMethods.IndentAlign],
});
new CharacterMap('not_remap', null, {
    '\u2190': '\u219A',
    '\u2192': '\u219B',
    '\u2194': '\u21AE',
    '\u21D0': '\u21CD',
    '\u21D2': '\u21CF',
    '\u21D4': '\u21CE',
    '\u2208': '\u2209',
    '\u220B': '\u220C',
    '\u2223': '\u2224',
    '\u2225': '\u2226',
    '\u223C': '\u2241',
    '\u007E': '\u2241',
    '\u2243': '\u2244',
    '\u2245': '\u2247',
    '\u2248': '\u2249',
    '\u224D': '\u226D',
    '\u003D': '\u2260',
    '\u2261': '\u2262',
    '\u003C': '\u226E',
    '\u003E': '\u226F',
    '\u2264': '\u2270',
    '\u2265': '\u2271',
    '\u2272': '\u2274',
    '\u2273': '\u2275',
    '\u2276': '\u2278',
    '\u2277': '\u2279',
    '\u227A': '\u2280',
    '\u227B': '\u2281',
    '\u2282': '\u2284',
    '\u2283': '\u2285',
    '\u2286': '\u2288',
    '\u2287': '\u2289',
    '\u22A2': '\u22AC',
    '\u22A8': '\u22AD',
    '\u22A9': '\u22AE',
    '\u22AB': '\u22AF',
    '\u227C': '\u22E0',
    '\u227D': '\u22E1',
    '\u2291': '\u22E2',
    '\u2292': '\u22E3',
    '\u22B2': '\u22EA',
    '\u22B3': '\u22EB',
    '\u22B4': '\u22EC',
    '\u22B5': '\u22ED',
    '\u2203': '\u2204',
});
//# sourceMappingURL=BaseMappings.js.map
;// ./components/mjs/core/lib/core/MmlTree/OperatorDictionary.js
const OperatorDictionary_def = MathJax._.core.MmlTree.OperatorDictionary;
const OPDEF = OperatorDictionary_def.OPDEF;
const MO = OperatorDictionary_def.MO;
const RANGES = OperatorDictionary_def.RANGES;
const getRange = OperatorDictionary_def.getRange;
const MMLSPACING = OperatorDictionary_def.MMLSPACING;
const OPTABLE = OperatorDictionary_def.OPTABLE;

;// ./components/mjs/core/lib/util/context.js
const context_def = MathJax._.util.context;
const hasWindow = context_def.hasWindow;
const context = context_def.context;

;// ./mjs/input/tex/base/BaseConfiguration.js














const BaseConfiguration_MATHVARIANT = TexConstant.Variant;
new CharacterMap('remap', null, {
    '-': '\u2212',
    '*': '\u2217',
    '`': '\u2018',
});
function Other(parser, char) {
    const font = parser.stack.env['font'];
    const ifont = parser.stack.env['italicFont'];
    const def = font ? { mathvariant: font } : {};
    const remap = MapHandler.getMap('remap').lookup(char);
    const range = getRange(char);
    const type = range[3];
    const mo = parser.create('token', type, def, remap ? remap.char : char);
    const style = ParseUtil.isLatinOrGreekChar(char)
        ? parser.configuration.mathStyle(char, true) || ifont
        : '';
    const variant = range[4] || (font && style === BaseConfiguration_MATHVARIANT.NORMAL ? '' : style);
    if (variant) {
        mo.attributes.set('mathvariant', variant);
    }
    if (type === 'mo') {
        tex_NodeUtil.setProperty(mo, 'fixStretchy', true);
        parser.configuration.addNode('fixStretchy', mo);
    }
    parser.Push(mo);
}
function csUndefined(_parser, name) {
    throw new tex_TexError('UndefinedControlSequence', 'Undefined control sequence %1', '\\' + name);
}
function envUndefined(_parser, env) {
    throw new tex_TexError('UnknownEnv', "Unknown environment '%1'", env);
}
function filterNonscript({ data }) {
    for (const mml of data.getList('nonscript')) {
        if (mml.attributes.get('scriptlevel') > 0) {
            const parent = mml.parent;
            parent.childNodes.splice(parent.childIndex(mml), 1);
            data.removeFromList(mml.kind, [mml]);
            if (mml.isKind('mrow')) {
                const mstyle = mml.childNodes[0];
                data.removeFromList('mstyle', [mstyle]);
                data.removeFromList('mspace', mstyle.childNodes[0].childNodes);
            }
        }
        else if (mml.isKind('mrow')) {
            mml.parent.replaceChild(mml.childNodes[0], mml);
            data.removeFromList('mrow', [mml]);
        }
    }
}
class BaseTags extends AbstractTags {
}
const BaseConfiguration = Configuration.create('base', {
    [ConfigurationType.CONFIG]: function (config, jax) {
        const options = jax.parseOptions.options;
        if (options.digits) {
            options.numberPattern = options.digits;
        }
        new RegExpMap('digit', tex_ParseMethods.digit, options.initialDigit);
        new RegExpMap('letter', tex_ParseMethods.variable, options.initialLetter);
        const handler = config.handlers.get(HandlerType.CHARACTER);
        handler.add(['letter', 'digit'], null, 4);
    },
    [ConfigurationType.HANDLER]: {
        [HandlerType.CHARACTER]: ['command', 'special'],
        [HandlerType.DELIMITER]: ['delimiter'],
        [HandlerType.MACRO]: [
            'delimiter',
            'macros',
            'lcGreek',
            'ucGreek',
            'mathchar0mi',
            'mathchar0mo',
            'mathchar7',
        ],
        [HandlerType.ENVIRONMENT]: ['environment'],
    },
    [ConfigurationType.FALLBACK]: {
        [HandlerType.CHARACTER]: Other,
        [HandlerType.MACRO]: csUndefined,
        [HandlerType.ENVIRONMENT]: envUndefined,
    },
    [ConfigurationType.ITEMS]: {
        [StartItem.prototype.kind]: StartItem,
        [StopItem.prototype.kind]: StopItem,
        [OpenItem.prototype.kind]: OpenItem,
        [CloseItem.prototype.kind]: CloseItem,
        [NullItem.prototype.kind]: NullItem,
        [PrimeItem.prototype.kind]: PrimeItem,
        [SubsupItem.prototype.kind]: SubsupItem,
        [OverItem.prototype.kind]: OverItem,
        [LeftItem.prototype.kind]: LeftItem,
        [Middle.prototype.kind]: Middle,
        [RightItem.prototype.kind]: RightItem,
        [BreakItem.prototype.kind]: BreakItem,
        [BeginItem.prototype.kind]: BeginItem,
        [EndItem.prototype.kind]: EndItem,
        [StyleItem.prototype.kind]: StyleItem,
        [PositionItem.prototype.kind]: PositionItem,
        [CellItem.prototype.kind]: CellItem,
        [MmlItem.prototype.kind]: MmlItem,
        [FnItem.prototype.kind]: FnItem,
        [NotItem.prototype.kind]: NotItem,
        [NonscriptItem.prototype.kind]: NonscriptItem,
        [DotsItem.prototype.kind]: DotsItem,
        [ArrayItem.prototype.kind]: ArrayItem,
        [EqnArrayItem.prototype.kind]: EqnArrayItem,
        [EquationItem.prototype.kind]: EquationItem,
        [MstyleItem.prototype.kind]: MstyleItem,
    },
    [ConfigurationType.OPTIONS]: {
        maxMacros: 1000,
        digits: '',
        numberPattern: /^(?:[0-9]+(?:\{,\}[0-9]{3})*(?:\.[0-9]*)?|\.[0-9]+)/,
        initialDigit: /[0-9.,]/,
        identifierPattern: /^[a-zA-Z]+/,
        initialLetter: /[a-zA-Z]/,
        baseURL: !context.document ||
            context.document.getElementsByTagName('base').length === 0
            ? ''
            : String(context.document.location).replace(/#.*$/, ''),
    },
    [ConfigurationType.TAGS]: {
        base: BaseTags,
    },
    [ConfigurationType.POSTPROCESSORS]: [[filterNonscript, -4]],
});
//# sourceMappingURL=BaseConfiguration.js.map
;// ./mjs/input/tex.js












class TeX extends AbstractInputJax {
    static configure(packages) {
        const configuration = new ParserConfiguration(packages, ['tex']);
        configuration.init();
        return configuration;
    }
    static tags(options, configuration) {
        TagsFactory.addTags(configuration.tags);
        TagsFactory.setDefault(options.options.tags);
        options.tags = TagsFactory.getDefault();
        options.tags.configuration = options;
    }
    constructor(options = {}) {
        const [rest, tex, find] = separateOptions(options, TeX.OPTIONS, FindTeX.OPTIONS);
        super(tex);
        this.findTeX = this.options['FindTeX'] || new FindTeX(find);
        const packages = this.options.packages;
        const configuration = (this.configuration = TeX.configure(packages));
        const parseOptions = (this._parseOptions = new tex_ParseOptions(configuration, [
            this.options,
            TagsFactory.OPTIONS,
        ]));
        userOptions(parseOptions.options, rest);
        configuration.config(this);
        TeX.tags(parseOptions, configuration);
        this.postFilters.addList([
            [tex_FilterUtil.cleanSubSup, -7],
            [tex_FilterUtil.setInherited, -6],
            [tex_FilterUtil.checkScriptlevel, -5],
            [tex_FilterUtil.moveLimits, -4],
            [tex_FilterUtil.cleanStretchy, -3],
            [tex_FilterUtil.cleanAttributes, -2],
            [tex_FilterUtil.combineRelations, -1],
        ]);
    }
    setMmlFactory(mmlFactory) {
        super.setMmlFactory(mmlFactory);
        this._parseOptions.nodeFactory.setMmlFactory(mmlFactory);
    }
    get parseOptions() {
        return this._parseOptions;
    }
    reset(tag = 0) {
        this.parseOptions.tags.reset(tag);
    }
    compile(math, document) {
        this.parseOptions.clear();
        this.parseOptions.mathItem = math;
        this.executeFilters(this.preFilters, math, document, this.parseOptions);
        this.latex = math.math;
        let node;
        this.parseOptions.tags.startEquation(math);
        let parser;
        try {
            parser = new TexParser(this.latex, { display: math.display, isInner: false }, this.parseOptions);
            node = parser.mml();
        }
        catch (err) {
            if (!(err instanceof tex_TexError)) {
                throw err;
            }
            this.parseOptions.error = true;
            node = this.options.formatError(this, err);
        }
        node = this.parseOptions.nodeFactory.create('node', 'math', [node]);
        node.attributes.set(TexConstant.Attr.LATEX, this.latex);
        if (math.display) {
            tex_NodeUtil.setAttribute(node, 'display', 'block');
        }
        this.parseOptions.tags.finishEquation(math);
        this.parseOptions.root = node;
        this.executeFilters(this.postFilters, math, document, this.parseOptions);
        if (parser && parser.stack.env.hsize) {
            tex_NodeUtil.setAttribute(node, 'maxwidth', parser.stack.env.hsize);
            tex_NodeUtil.setAttribute(node, 'overflow', 'linebreak');
        }
        this.mathNode = this.parseOptions.root;
        return this.mathNode;
    }
    findMath(strings) {
        return this.findTeX.findMath(strings);
    }
    formatError(err) {
        const message = err.message.replace(/\n.*/, '');
        return this.parseOptions.nodeFactory.create('error', message, err.id, this.latex);
    }
}
TeX.NAME = 'TeX';
TeX.OPTIONS = Object.assign(Object.assign({}, AbstractInputJax.OPTIONS), { FindTeX: null, packages: ['base'], maxBuffer: 5 * 1024, maxTemplateSubtitutions: 10000, mathStyle: 'TeX', formatError: (jax, err) => jax.formatError(err) });
//# sourceMappingURL=tex.js.map
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
            throw new tex_TexError('MultlineRowsOneCol', 'The rows within the %1 environment must have exactly one column', 'multline');
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
            if (!tex_NodeUtil.getAttribute(tex_NodeUtil.getChildren(this.table[0])[0], 'columnalign')) {
                tex_NodeUtil.setAttribute(tex_NodeUtil.getChildren(this.table[0])[0], 'columnalign', TexConstant.Align.LEFT);
            }
            if (!tex_NodeUtil.getAttribute(tex_NodeUtil.getChildren(this.table[m])[0], 'columnalign')) {
                tex_NodeUtil.setAttribute(tex_NodeUtil.getChildren(this.table[m])[0], 'columnalign', TexConstant.Align.RIGHT);
            }
            const tag = this.factory.configuration.tags.getTag();
            if (tag) {
                label =
                    this.arraydef.side === TexConstant.Align.LEFT
                        ? 0
                        : this.table.length - 1;
                const mtr = this.table[label];
                const mlabel = this.create('node', 'mlabeledtr', [tag].concat(tex_NodeUtil.getChildren(mtr)));
                tex_NodeUtil.copyAttributes(mtr, mlabel);
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
            throw new tex_TexError('XalignOverflow', 'Extra %1 in row of %2', '&', this.name);
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
            const mtd = tex_NodeUtil.getChildren(mtr)[0];
            const side = this.factory.configuration.options['tagSide'];
            const def = Object.assign({ width: 0 }, (side === 'right' ? { lspace: '-1width' } : {}));
            const mpadded = this.create('node', 'mpadded', tex_NodeUtil.getChildren(mtd), def);
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
;// ./mjs/input/tex/newcommand/NewcommandUtil.js





var NewcommandTables;
(function (NewcommandTables) {
    NewcommandTables["NEW_DELIMITER"] = "new-Delimiter";
    NewcommandTables["NEW_COMMAND"] = "new-Command";
    NewcommandTables["NEW_ENVIRONMENT"] = "new-Environment";
})(NewcommandTables || (NewcommandTables = {}));
const NewcommandPriority = -100;
const NewcommandUtil = {
    GetCSname(parser, cmd) {
        const c = parser.GetNext();
        if (c !== '\\') {
            throw new tex_TexError('MissingCS', '%1 must be followed by a control sequence', cmd);
        }
        const cs = UnitUtil.trimSpaces(parser.GetArgument(cmd)).substring(1);
        this.checkProtectedMacros(parser, cs);
        return cs;
    },
    GetCsNameArgument(parser, name) {
        let cs = UnitUtil.trimSpaces(parser.GetArgument(name));
        if (cs.charAt(0) === '\\') {
            cs = cs.substring(1);
        }
        if (!cs.match(/^(.|[a-z]+)$/i)) {
            throw new tex_TexError('IllegalControlSequenceName', 'Illegal control sequence name for %1', name);
        }
        this.checkProtectedMacros(parser, cs);
        return cs;
    },
    GetArgCount(parser, name) {
        let n = parser.GetBrackets(name);
        if (n) {
            n = UnitUtil.trimSpaces(n);
            if (!n.match(/^[0-9]+$/)) {
                throw new tex_TexError('IllegalParamNumber', 'Illegal number of parameters specified in %1', name);
            }
        }
        return n;
    },
    GetTemplate(parser, cmd, cs) {
        let c = parser.GetNext();
        const params = [];
        let n = 0;
        let i = parser.i;
        while (parser.i < parser.string.length) {
            c = parser.GetNext();
            if (c === '#') {
                if (i !== parser.i) {
                    params[n] = parser.string.substring(i, parser.i);
                }
                c = parser.string.charAt(++parser.i);
                if (!c.match(/^[1-9]$/)) {
                    throw new tex_TexError('CantUseHash2', 'Illegal use of # in template for %1', cs);
                }
                if (parseInt(c) !== ++n) {
                    throw new tex_TexError('SequentialParam', 'Parameters for %1 must be numbered sequentially', cs);
                }
                i = parser.i + 1;
            }
            else if (c === '{') {
                if (i !== parser.i) {
                    params[n] = parser.string.substring(i, parser.i);
                }
                if (params.length > 0) {
                    return [n.toString()].concat(params);
                }
                else {
                    return n;
                }
            }
            parser.i++;
        }
        throw new tex_TexError('MissingReplacementString', 'Missing replacement string for definition of %1', cmd);
    },
    GetParameter(parser, name, param) {
        if (param == null) {
            return parser.GetArgument(name);
        }
        let i = parser.i;
        let j = 0;
        let hasBraces = false;
        while (parser.i < parser.string.length) {
            const c = parser.string.charAt(parser.i);
            if (c === '{') {
                hasBraces = parser.i === i;
                parser.GetArgument(name);
                j = parser.i - i;
            }
            else if (this.MatchParam(parser, param)) {
                if (hasBraces) {
                    i++;
                    j -= 2;
                }
                return parser.string.substring(i, i + j);
            }
            else if (c === '\\') {
                parser.i++;
                j++;
                hasBraces = false;
                const match = parser.string.substring(parser.i).match(/[a-z]+|./i);
                if (match) {
                    parser.i += match[0].length;
                    j = parser.i - i;
                }
            }
            else {
                parser.i++;
                j++;
                hasBraces = false;
            }
        }
        throw new tex_TexError('RunawayArgument', 'Runaway argument for %1?', name);
    },
    MatchParam(parser, param) {
        if (parser.string.substring(parser.i, parser.i + param.length) !== param) {
            return 0;
        }
        if (param.match(/\\[a-z]+$/i) &&
            parser.string.charAt(parser.i + param.length).match(/[a-z]/i)) {
            return 0;
        }
        parser.i += param.length;
        return 1;
    },
    checkGlobal(parser, tokens, maps) {
        return (parser.stack.env.isGlobal
            ? parser.configuration.packageData
                .get('begingroup')
                .stack.checkGlobal(tokens, maps)
            : maps.map((name) => parser.configuration.handlers.retrieve(name)));
    },
    checkProtectedMacros(parser, cs) {
        var _a;
        if ((_a = parser.options.protectedMacros) === null || _a === void 0 ? void 0 : _a.includes(cs)) {
            throw new tex_TexError('ProtectedMacro', "The control sequence %1 can't be redefined", `\\${cs}`);
        }
    },
    addDelimiter(parser, cs, char, attr) {
        const name = cs.substring(1);
        this.checkProtectedMacros(parser, name);
        const [macros, delims] = NewcommandUtil.checkGlobal(parser, [name, cs], [NewcommandTables.NEW_COMMAND, NewcommandTables.NEW_DELIMITER]);
        if (name !== cs) {
            macros.remove(name);
        }
        delims.add(cs, new Token(cs, char, attr));
        delete parser.stack.env.isGlobal;
    },
    addMacro(parser, cs, func, attr, token = '') {
        this.checkProtectedMacros(parser, cs);
        const macros = NewcommandUtil.checkGlobal(parser, [cs], [NewcommandTables.NEW_COMMAND])[0];
        this.undefineDelimiter(parser, '\\' + cs);
        macros.add(cs, new Macro(token ? token : cs, func, attr));
        delete parser.stack.env.isGlobal;
    },
    addEnvironment(parser, env, func, attr) {
        const envs = NewcommandUtil.checkGlobal(parser, [env], [NewcommandTables.NEW_ENVIRONMENT])[0];
        envs.add(env, new Macro(env, func, attr));
        delete parser.stack.env.isGlobal;
    },
    undefineMacro(parser, cs) {
        const macros = NewcommandUtil.checkGlobal(parser, [cs], [NewcommandTables.NEW_COMMAND])[0];
        macros.remove(cs);
        if (parser.configuration.handlers.get(HandlerType.MACRO).applicable(cs)) {
            macros.add(cs, new Macro(cs, () => SubHandler.FALLBACK, []));
            this.undefineDelimiter(parser, '\\' + cs);
        }
        delete parser.stack.env.isGlobal;
    },
    undefineDelimiter(parser, cs) {
        const delims = NewcommandUtil.checkGlobal(parser, [cs], [NewcommandTables.NEW_DELIMITER])[0];
        delims.remove(cs);
        if (parser.configuration.handlers.get(HandlerType.DELIMITER).applicable(cs)) {
            delims.add(cs, new Token(cs, null, {}));
        }
        delete parser.stack.env.isGlobal;
    },
};
//# sourceMappingURL=NewcommandUtil.js.map
;// ./mjs/input/tex/ams/AmsMethods.js











function splitSideSet(mml) {
    if (!mml || (mml.isInferred && mml.childNodes.length === 0)) {
        return [null, null];
    }
    if (mml.isKind('msubsup') && checkSideSetBase(mml)) {
        return [mml, null];
    }
    const child = tex_NodeUtil.getChildAt(mml, 0);
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
        const array = base_BaseMethods.EqnArray(parser, begin, numbered, taggable, align, balign, spacing, style);
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
            throw new tex_TexError('PositiveIntegerArg', 'Argument to %1 must be a positive integer', '\\begin{' + name + '}');
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
            throw new tex_TexError('PositiveIntegerArg', 'Argument to %1 must be a positive integer', '\\begin{' + begin.getName() + '}');
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
        tex_NodeUtil.setProperties(mml, {
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
                ]), tex_NodeUtil.getChildAt(preScripts, 0));
            }
            else {
                mml = parser.create('node', 'mmultiscripts', [base]);
                if (postScripts) {
                    tex_NodeUtil.appendChildren(mml, [
                        tex_NodeUtil.getChildAt(postScripts, 1) ||
                            parser.create('node', 'none'),
                        tex_NodeUtil.getChildAt(postScripts, 2) ||
                            parser.create('node', 'none'),
                    ]);
                }
                tex_NodeUtil.setProperty(mml, 'scriptalign', 'left');
                tex_NodeUtil.appendChildren(mml, [
                    parser.create('node', 'mprescripts'),
                    tex_NodeUtil.getChildAt(preScripts, 1) || parser.create('node', 'none'),
                    tex_NodeUtil.getChildAt(preScripts, 2) || parser.create('node', 'none'),
                ]);
            }
        }
        if (postScripts && mml === base) {
            postScripts.replaceChild(base, tex_NodeUtil.getChildAt(postScripts, 0));
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
            ? tex_ParseMethods.variable(parser, c)
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
        tex_NodeUtil.setAttribute(mpadded, 'voffset', '-.2em');
        tex_NodeUtil.setAttribute(mpadded, 'height', '-.2em');
        tex_NodeUtil.setChild(mml, mml.over, mpadded);
        if (bot) {
            const bottom = new TexParser(bot, parser.stack.env, parser.configuration).mml();
            const bstrut = parser.create('node', 'mspace', [], { height: '.75em' });
            mpadded = parser.create('node', 'mpadded', [bottom, bstrut], def);
            tex_NodeUtil.setAttribute(mpadded, 'voffset', '.15em');
            tex_NodeUtil.setAttribute(mpadded, 'depth', '-.15em');
            tex_NodeUtil.setChild(mml, mml.under, mpadded);
        }
        tex_NodeUtil.setProperty(mml, 'subsupOK', true);
        parser.Push(mml);
    },
    HandleShove(parser, _name, shove) {
        const top = parser.stack.Top();
        if (top.kind !== 'multline') {
            throw new tex_TexError('CommandOnlyAllowedInEnv', '%1 only allowed in %2 environment', parser.currentCS, 'multline');
        }
        if (top.Size()) {
            throw new tex_TexError('CommandAtTheBeginingOfLine', '%1 must come at the beginning of the line', parser.currentCS);
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
            throw new tex_TexError('IllegalAlign', 'Illegal alignment specified in %1', parser.currentCS);
        }
        if (lr) {
            tex_NodeUtil.setProperties(frac, { numalign: lr, denomalign: lr });
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
            tex_NodeUtil.setAttribute(frac, 'linethickness', thick);
        }
        if (left || right) {
            tex_NodeUtil.setProperty(frac, 'withDelims', true);
            frac = ParseUtil.fixedFence(parser.configuration, left, frac, right);
        }
        if (style !== '') {
            const styleDigit = parseInt(style, 10);
            const styleAlpha = ['D', 'T', 'S', 'SS'][styleDigit];
            if (styleAlpha == null) {
                throw new tex_TexError('BadMathStyleFor', 'Bad math style for %1', parser.currentCS);
            }
            frac = parser.create('node', 'mstyle', [frac]);
            if (styleAlpha === 'D') {
                tex_NodeUtil.setProperties(frac, { displaystyle: true, scriptlevel: 0 });
            }
            else {
                tex_NodeUtil.setProperties(frac, {
                    displaystyle: false,
                    scriptlevel: styleDigit - 1,
                });
            }
        }
        parser.Push(frac);
    },
    HandleTag(parser, name) {
        if (!parser.tags.currentTag.taggable && parser.tags.env) {
            throw new tex_TexError('CommandNotAllowedInEnv', '%1 not allowed in %2 environment', parser.currentCS, parser.tags.env);
        }
        if (parser.tags.currentTag.tag) {
            throw new tex_TexError('MultipleCommand', 'Multiple %1', parser.currentCS);
        }
        const star = parser.GetStar();
        const tagId = UnitUtil.trimSpaces(parser.GetArgument(name));
        parser.tags.tag(tagId, star);
        parser.Push(parser.itemFactory.create('null'));
    },
    HandleNoTag: base_BaseMethods.HandleNoTag,
    HandleRef: base_BaseMethods.HandleRef,
    Macro: base_BaseMethods.Macro,
    Accent: base_BaseMethods.Accent,
    Tilde: base_BaseMethods.Tilde,
    Array: base_BaseMethods.Array,
    Spacer: base_BaseMethods.Spacer,
    NamedOp: base_BaseMethods.NamedOp,
    EqnArray: base_BaseMethods.EqnArray,
    Equation: base_BaseMethods.Equation,
};
//# sourceMappingURL=AmsMethods.js.map
;// ./mjs/input/tex/ams/AmsMappings.js







new CharacterMap('AMSmath-mathchar0mo', tex_ParseMethods.mathchar0mo, {
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
new EnvironmentMap('AMSmath-environment', tex_ParseMethods.environment, {
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
new DelimiterMap('AMSmath-delimiter', tex_ParseMethods.delimiter, {
    '\\lvert': ['\u007C', { texClass: TEXCLASS.OPEN }],
    '\\rvert': ['\u007C', { texClass: TEXCLASS.CLOSE }],
    '\\lVert': ['\u2016', { texClass: TEXCLASS.OPEN }],
    '\\rVert': ['\u2016', { texClass: TEXCLASS.CLOSE }],
});
new CharacterMap('AMSsymbols-mathchar0mi', tex_ParseMethods.mathchar0mi, {
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
new CharacterMap('AMSsymbols-mathchar0mo', tex_ParseMethods.mathchar0mo, {
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
new DelimiterMap('AMSsymbols-delimiter', tex_ParseMethods.delimiter, {
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
;// ./mjs/input/tex/newcommand/NewcommandItems.js


class BeginEnvItem extends BaseItem {
    get kind() {
        return 'beginEnv';
    }
    get isOpen() {
        return true;
    }
    checkItem(item) {
        if (item.isKind('end')) {
            if (item.getName() !== this.getName()) {
                throw new tex_TexError('EnvBadEnd', '\\begin{%1} ended with \\end{%2}', this.getName(), item.getName());
            }
            return [[this.factory.create('mml', this.toMml())], true];
        }
        if (item.isKind('stop')) {
            throw new tex_TexError('EnvMissingEnd', 'Missing \\end{%1}', this.getName());
        }
        return super.checkItem(item);
    }
}
//# sourceMappingURL=NewcommandItems.js.map
;// ./mjs/input/tex/newcommand/NewcommandMethods.js







const NewcommandMethods = {
    NewCommand(parser, name) {
        const cs = NewcommandUtil.GetCsNameArgument(parser, name);
        const n = NewcommandUtil.GetArgCount(parser, name);
        const opt = parser.GetBrackets(name);
        const def = parser.GetArgument(name);
        NewcommandUtil.addMacro(parser, cs, NewcommandMethods.Macro, [def, n, opt]);
        parser.Push(parser.itemFactory.create('null'));
    },
    NewEnvironment(parser, name) {
        const env = UnitUtil.trimSpaces(parser.GetArgument(name));
        const n = NewcommandUtil.GetArgCount(parser, name);
        const opt = parser.GetBrackets(name);
        const bdef = parser.GetArgument(name);
        const edef = parser.GetArgument(name);
        NewcommandUtil.addEnvironment(parser, env, NewcommandMethods.BeginEnv, [
            true,
            bdef,
            edef,
            n,
            opt,
        ]);
        parser.Push(parser.itemFactory.create('null'));
    },
    MacroDef(parser, name) {
        const cs = NewcommandUtil.GetCSname(parser, name);
        const params = NewcommandUtil.GetTemplate(parser, name, '\\' + cs);
        const def = parser.GetArgument(name);
        !(params instanceof Array)
            ?
                NewcommandUtil.addMacro(parser, cs, NewcommandMethods.Macro, [
                    def,
                    params,
                ])
            :
                NewcommandUtil.addMacro(parser, cs, NewcommandMethods.MacroWithTemplate, [def].concat(params));
        parser.Push(parser.itemFactory.create('null'));
    },
    Let(parser, name) {
        const cs = NewcommandUtil.GetCSname(parser, name);
        let c = parser.GetNext();
        if (c === '=') {
            parser.i++;
            c = parser.GetNext();
        }
        const handlers = parser.configuration.handlers;
        parser.Push(parser.itemFactory.create('null'));
        if (c === '\\') {
            name = NewcommandUtil.GetCSname(parser, name);
            if (cs === name) {
                return;
            }
            const map = handlers.get(HandlerType.MACRO).applicable(name);
            if (map instanceof MacroMap) {
                const macro = map.lookup(name);
                NewcommandUtil.addMacro(parser, cs, macro.func, macro.args, macro.token);
                return;
            }
            if (map instanceof CharacterMap && !(map instanceof DelimiterMap)) {
                const macro = map.lookup(name);
                const method = (p) => map.parser(p, macro);
                NewcommandUtil.addMacro(parser, cs, method, [cs, macro.char]);
                return;
            }
            const macro = handlers
                .get(HandlerType.DELIMITER)
                .lookup('\\' + name);
            if (macro) {
                NewcommandUtil.addDelimiter(parser, '\\' + cs, macro.char, macro.attributes);
                return;
            }
            NewcommandUtil.checkProtectedMacros(parser, cs);
            NewcommandUtil.undefineMacro(parser, cs);
            NewcommandUtil.undefineDelimiter(parser, '\\' + cs);
            return;
        }
        parser.i++;
        const macro = handlers.get(HandlerType.DELIMITER).lookup(c);
        if (macro) {
            NewcommandUtil.addDelimiter(parser, '\\' + cs, macro.char, macro.attributes);
            return;
        }
        NewcommandUtil.addMacro(parser, cs, NewcommandMethods.Macro, [c]);
    },
    MacroWithTemplate(parser, name, text, n, ...params) {
        const argCount = parseInt(n, 10);
        if (params.length) {
            const args = [];
            parser.GetNext();
            if (params[0] && !NewcommandUtil.MatchParam(parser, params[0])) {
                throw new tex_TexError('MismatchUseDef', "Use of %1 doesn't match its definition", name);
            }
            if (argCount) {
                for (let i = 0; i < argCount; i++) {
                    args.push(NewcommandUtil.GetParameter(parser, name, params[i + 1]));
                }
                text = ParseUtil.substituteArgs(parser, args, text);
            }
        }
        parser.string = ParseUtil.addArgs(parser, text, parser.string.slice(parser.i));
        parser.i = 0;
        ParseUtil.checkMaxMacros(parser);
    },
    BeginEnv(parser, begin, bdef, edef, n, def) {
        const name = begin.getName();
        if (parser.stack.env['closing'] === name) {
            delete parser.stack.env['closing'];
            const beginN = parser.stack.global['beginEnv'];
            if (beginN) {
                parser.stack.global['beginEnv']--;
                if (edef) {
                    const rest = parser.string.slice(parser.i);
                    parser.string = ParseUtil.addArgs(parser, parser.string.substring(0, parser.i), edef);
                    parser.Parse();
                    parser.string = rest;
                    parser.i = 0;
                }
            }
            return parser.itemFactory.create('end').setProperty('name', name);
        }
        if (n) {
            const args = [];
            if (def != null) {
                const optional = parser.GetBrackets(`\\begin{${name}}`);
                args.push(optional == null ? def : optional);
            }
            for (let i = args.length; i < n; i++) {
                args.push(parser.GetArgument(`\\begin{${name}}`));
            }
            bdef = ParseUtil.substituteArgs(parser, args, bdef);
            edef = ParseUtil.substituteArgs(parser, [], edef);
        }
        parser.string = ParseUtil.addArgs(parser, bdef, parser.string.slice(parser.i));
        parser.i = 0;
        parser.stack.global['beginEnv'] =
            (parser.stack.global['beginEnv'] || 0) + 1;
        return parser.itemFactory.create('beginEnv').setProperty('name', name);
    },
    Macro: base_BaseMethods.Macro,
};
/* harmony default export */ const newcommand_NewcommandMethods = (NewcommandMethods);
//# sourceMappingURL=NewcommandMethods.js.map
;// ./mjs/input/tex/newcommand/NewcommandMappings.js


new CommandMap('Newcommand-macros', {
    newcommand: newcommand_NewcommandMethods.NewCommand,
    renewcommand: newcommand_NewcommandMethods.NewCommand,
    newenvironment: newcommand_NewcommandMethods.NewEnvironment,
    renewenvironment: newcommand_NewcommandMethods.NewEnvironment,
    def: newcommand_NewcommandMethods.MacroDef,
    let: newcommand_NewcommandMethods.Let,
});
//# sourceMappingURL=NewcommandMappings.js.map
;// ./mjs/input/tex/newcommand/NewcommandConfiguration.js







function NewcommandConfig(_config, jax) {
    if (jax.parseOptions.packageData.has('newcommand')) {
        return;
    }
    jax.parseOptions.packageData.set('newcommand', {});
    new DelimiterMap(NewcommandTables.NEW_DELIMITER, tex_ParseMethods.delimiter, {});
    new CommandMap(NewcommandTables.NEW_COMMAND, {});
    new EnvironmentMap(NewcommandTables.NEW_ENVIRONMENT, tex_ParseMethods.environment, {});
    jax.parseOptions.handlers.add({
        [HandlerType.CHARACTER]: [],
        [HandlerType.DELIMITER]: [NewcommandTables.NEW_DELIMITER],
        [HandlerType.MACRO]: [
            NewcommandTables.NEW_DELIMITER,
            NewcommandTables.NEW_COMMAND,
        ],
        [HandlerType.ENVIRONMENT]: [NewcommandTables.NEW_ENVIRONMENT],
    }, {}, NewcommandPriority);
}
const NewcommandConfiguration = Configuration.create('newcommand', {
    [ConfigurationType.HANDLER]: {
        macro: ['Newcommand-macros'],
    },
    [ConfigurationType.ITEMS]: {
        [BeginEnvItem.prototype.kind]: BeginEnvItem,
    },
    [ConfigurationType.OPTIONS]: {
        maxMacros: 1000,
        protectedMacros: ['begingroupSandbox'],
    },
    [ConfigurationType.CONFIG]: NewcommandConfig,
});
//# sourceMappingURL=NewcommandConfiguration.js.map
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
;// ./components/mjs/startup/lib/components/startup.js
const startup_g = (typeof window !== 'undefined' ? window : global);
const startup_def = startup_g.MathJax._.components.startup;
const Startup = startup_def.Startup;
const startup_MathJax = startup_def.MathJax;
const CONFIG = startup_def.CONFIG;

;// ./components/mjs/startup/lib/components/package.js
const package_def = MathJax._.components.package;
const PackageError = package_def.PackageError;
const Package = package_def.Package;

;// ./components/mjs/startup/lib/components/loader.js
const loader_g = (typeof window !== 'undefined' ? window : global);
const loader_def = loader_g.MathJax._.components.loader;
const PathFilters = loader_def.PathFilters;
const Loader = loader_def.Loader;
const loader_MathJax = loader_def.MathJax;
const loader_CONFIG = loader_def.CONFIG;

;// ./components/mjs/core/lib/mathjax.js
const mathjax_def = MathJax._.mathjax;
const mathjax = mathjax_def.mathjax;

;// ./mjs/input/tex/require/RequireConfiguration.js









const MJCONFIG = startup_MathJax.config;
function RegisterExtension(jax, name) {
    const require = jax.parseOptions.options.require;
    const required = jax.parseOptions.packageData.get('require')
        .required;
    const extension = name.substring(require.prefix.length);
    if (!required.includes(extension)) {
        required.push(extension);
        const retry = RegisterDependencies(jax, loader_CONFIG.dependencies[name]);
        if (retry) {
            mathjax.retryAfter(retry.then(() => ProcessExtension(jax, name, extension)));
        }
        else {
            ProcessExtension(jax, name, extension);
        }
    }
}
function ProcessExtension(jax, name, extension) {
    const handler = ConfigurationHandler.get(extension);
    if (handler) {
        let options = MJCONFIG[name] || {};
        if (handler.options &&
            Object.keys(handler.options).length === 1 &&
            handler.options[extension]) {
            options = { [extension]: options };
        }
        jax.configuration.add(extension, jax, options);
        const configured = jax.parseOptions.packageData.get('require').configured;
        if (handler.preprocessors.length && !configured.has(extension)) {
            configured.set(extension, true);
            mathjax.retryAfter(Promise.resolve());
        }
    }
}
function RegisterDependencies(jax, names = []) {
    const prefix = jax.parseOptions.options.require.prefix;
    const retries = [];
    for (const name of names) {
        if (name.substring(0, prefix.length) === prefix) {
            try {
                RegisterExtension(jax, name);
            }
            catch (err) {
                if (!err.retry)
                    throw err;
                retries.push(err.retry);
            }
        }
    }
    return retries.length ? Promise.all(retries) : null;
}
function RequireLoad(parser, name) {
    var _a, _b;
    const options = parser.options.require;
    const allow = options.allow;
    const extension = (name.substring(0, 1) === '[' ? '' : options.prefix) + name;
    const allowed = Object.hasOwn(allow, extension)
        ? allow[extension]
        : Object.hasOwn(allow, name)
            ? allow[name]
            : options.defaultAllow;
    if (!allowed) {
        throw new tex_TexError('BadRequire', 'Extension "%1" is not allowed to be loaded', extension);
    }
    const data = Package.packages.get(extension);
    if (!data) {
        mathjax.retryAfter(Loader.load(extension).catch((_) => { }));
    }
    if (data.hasFailed) {
        throw new tex_TexError('RequireFail', 'Extension "%1" failed to load', name);
    }
    const require = (_a = loader_CONFIG[extension]) === null || _a === void 0 ? void 0 : _a.rendererExtensions;
    const menu = (_b = startup_MathJax.startup.document) === null || _b === void 0 ? void 0 : _b.menu;
    if (require && menu) {
        menu.addRequiredExtensions(require);
    }
    RegisterExtension(parser.configuration.packageData.get('require').jax, extension);
}
function config(_config, jax) {
    jax.parseOptions.packageData.set('require', {
        jax: jax,
        required: [...jax.options.packages],
        configured: new Map()
    });
    const options = jax.parseOptions.options.require;
    const prefix = options.prefix;
    if (prefix.match(/[^_a-zA-Z0-9]/)) {
        throw Error('Illegal characters used in \\require prefix');
    }
    if (!loader_CONFIG.paths[prefix]) {
        loader_CONFIG.paths[prefix] = '[mathjax]/input/tex/extensions';
    }
    options.prefix = '[' + prefix + ']/';
}
const RequireMethods = {
    Require(parser, name) {
        const required = parser.GetArgument(name);
        if (required.match(/[^_a-zA-Z0-9]/) || required === '') {
            throw new tex_TexError('BadPackageName', 'Argument for %1 is not a valid package name', name);
        }
        RequireLoad(parser, required);
        parser.Push(parser.itemFactory.create('null'));
    },
};
const RequireConfiguration_options = {
    require: {
        allow: expandable({
            base: false,
            autoload: false,
            configmacros: false,
            tagformat: false,
            setoptions: false,
            texhtml: false,
        }),
        defaultAllow: true,
        prefix: 'tex',
    },
};
new CommandMap('require', { require: RequireMethods.Require });
const RequireConfiguration = Configuration.create('require', {
    [ConfigurationType.HANDLER]: {
        [HandlerType.MACRO]: ['require'],
    },
    [ConfigurationType.CONFIG]: config,
    [ConfigurationType.OPTIONS]: RequireConfiguration_options,
});
//# sourceMappingURL=RequireConfiguration.js.map
;// ./mjs/input/tex/autoload/AutoloadConfiguration.js







function Autoload(parser, name, extension, isMacro) {
    if (Package.packages.has(parser.options.require.prefix + extension)) {
        const def = parser.options.autoload[extension];
        const [macros, envs] = def.length === 2 && Array.isArray(def[0]) ? def : [def, []];
        for (const macro of macros) {
            AutoloadMacros.remove(macro);
        }
        for (const env of envs) {
            AutoloadEnvironments.remove(env);
        }
        parser.string =
            (isMacro ? name + ' ' : '\\begin{' + name.slice(1) + '}') +
                parser.string.slice(parser.i);
        parser.i = 0;
    }
    RequireLoad(parser, extension);
}
function initAutoload(config) {
    if (!config.options.require) {
        defaultOptions(config.options, RequireConfiguration.options);
    }
}
function configAutoload(config, jax) {
    const parser = jax.parseOptions;
    const macros = parser.handlers.get(HandlerType.MACRO);
    const environments = parser.handlers.get(HandlerType.ENVIRONMENT);
    const autoload = parser.options.autoload;
    parser.packageData.set('autoload', { Autoload });
    for (const extension of Object.keys(autoload)) {
        const def = autoload[extension];
        const [macs, envs] = def.length === 2 && Array.isArray(def[0]) ? def : [def, []];
        for (const name of macs) {
            if (!macros.lookup(name) || name === 'color') {
                AutoloadMacros.add(name, new Macro(name, Autoload, [extension, true]));
            }
        }
        for (const name of envs) {
            if (!environments.lookup(name)) {
                AutoloadEnvironments.add(name, new Macro(name, Autoload, [extension, false]));
            }
        }
    }
    if (!parser.packageData.get('require')) {
        RequireConfiguration.config(config, jax);
    }
}
const AutoloadMacros = new CommandMap('autoload-macros', {});
const AutoloadEnvironments = new CommandMap('autoload-environments', {});
const AutoloadConfiguration = Configuration.create('autoload', {
    [ConfigurationType.HANDLER]: {
        [HandlerType.MACRO]: ['autoload-macros'],
        [HandlerType.ENVIRONMENT]: ['autoload-environments'],
    },
    [ConfigurationType.OPTIONS]: {
        autoload: expandable({
            action: ['toggle', 'mathtip', 'texttip'],
            amscd: [[], ['CD']],
            bbox: ['bbox'],
            boldsymbol: ['boldsymbol'],
            braket: [
                'bra',
                'ket',
                'braket',
                'set',
                'Bra',
                'Ket',
                'Braket',
                'Set',
                'ketbra',
                'Ketbra',
            ],
            bussproofs: [[], ['prooftree']],
            cancel: ['cancel', 'bcancel', 'xcancel', 'cancelto'],
            color: ['color', 'definecolor', 'textcolor', 'colorbox', 'fcolorbox'],
            enclose: ['enclose'],
            extpfeil: [
                'xtwoheadrightarrow',
                'xtwoheadleftarrow',
                'xmapsto',
                'xlongequal',
                'xtofrom',
                'Newextarrow',
            ],
            html: ['data', 'href', 'class', 'style', 'cssId'],
            mhchem: ['ce', 'pu'],
            newcommand: [
                'newcommand',
                'renewcommand',
                'newenvironment',
                'renewenvironment',
                'def',
                'let',
            ],
            unicode: ['unicode', 'U', 'char'],
            verb: ['verb'],
        }),
    },
    [ConfigurationType.CONFIG]: configAutoload,
    [ConfigurationType.INIT]: initAutoload,
    [ConfigurationType.PRIORITY]: 10,
});
//# sourceMappingURL=AutoloadConfiguration.js.map
;// ./mjs/input/tex/configmacros/ConfigMacrosConfiguration.js








const MACROSMAP = 'configmacros-map';
const ACTIVEMAP = 'configmacros-active-map';
const ENVIRONMENTMAP = 'configmacros-env-map';
function configmacrosInit(config) {
    new MacroMap(ACTIVEMAP, {});
    new CommandMap(MACROSMAP, {});
    new EnvironmentMap(ENVIRONMENTMAP, tex_ParseMethods.environment, {});
    config.append(Configuration.local({
        handler: {
            [HandlerType.CHARACTER]: [ACTIVEMAP],
            [HandlerType.MACRO]: [MACROSMAP],
            [HandlerType.ENVIRONMENT]: [ENVIRONMENTMAP],
        },
        priority: 3,
    }));
}
function configmacrosConfig(_config, jax) {
    configActives(jax);
    configMacros(jax);
    configEnvironments(jax);
}
function setMacros(name, map, jax) {
    const handler = jax.parseOptions.handlers.retrieve(map);
    const macros = jax.parseOptions.options[name];
    for (const cs of Object.keys(macros)) {
        const def = typeof macros[cs] === 'string' ? [macros[cs]] : macros[cs];
        const macro = Array.isArray(def[2])
            ? new Macro(cs, newcommand_NewcommandMethods.MacroWithTemplate, def.slice(0, 2).concat(def[2]))
            : new Macro(cs, newcommand_NewcommandMethods.Macro, def);
        handler.add(cs, macro);
    }
}
function configActives(jax) {
    setMacros('active', ACTIVEMAP, jax);
}
function configMacros(jax) {
    setMacros('macros', MACROSMAP, jax);
}
function configEnvironments(jax) {
    const handler = jax.parseOptions.handlers.retrieve(ENVIRONMENTMAP);
    const environments = jax.parseOptions.options.environments;
    for (const env of Object.keys(environments)) {
        handler.add(env, new Macro(env, newcommand_NewcommandMethods.BeginEnv, [true].concat(environments[env])));
    }
}
const ConfigMacrosConfiguration = Configuration.create('configmacros', {
    [ConfigurationType.INIT]: configmacrosInit,
    [ConfigurationType.CONFIG]: configmacrosConfig,
    [ConfigurationType.ITEMS]: {
        [BeginEnvItem.prototype.kind]: BeginEnvItem,
    },
    [ConfigurationType.OPTIONS]: {
        active: expandable({}),
        macros: expandable({}),
        environments: expandable({}),
    },
});
//# sourceMappingURL=ConfigMacrosConfiguration.js.map
;// ./mjs/input/tex/noundefined/NoUndefinedConfiguration.js


function noUndefined(parser, name) {
    const textNode = parser.create('text', '\\' + name);
    const options = parser.options.noundefined;
    const def = {};
    for (const id of ['color', 'background', 'size']) {
        if (options[id]) {
            def['math' + id] = options[id];
        }
    }
    parser.Push(parser.create('node', 'mtext', [], def, textNode));
}
const NoUndefinedConfiguration = Configuration.create('noundefined', {
    [ConfigurationType.FALLBACK]: { [HandlerType.MACRO]: noUndefined },
    [ConfigurationType.OPTIONS]: {
        noundefined: {
            color: 'red',
            background: '',
            size: '',
        },
    },
    [ConfigurationType.PRIORITY]: 3,
});
//# sourceMappingURL=NoUndefinedConfiguration.js.map
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
                tex_NodeUtil.setAttribute(mml, name, env[name]);
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
                tex_NodeUtil.setAttribute(mml, name, env[name]);
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
        throw new tex_TexError(id, message, ...args);
    }
}
//# sourceMappingURL=TextParser.js.map
;// ./components/mjs/core/lib/util/Retries.js
const Retries_def = MathJax._.util.Retries;
const handleRetriesFor = Retries_def.handleRetriesFor;
const retryAfter = Retries_def.retryAfter;

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
    Macro: base_BaseMethods.Macro,
    Spacer: base_BaseMethods.Spacer,
    Hskip: base_BaseMethods.Hskip,
    rule: base_BaseMethods.rule,
    Rule: base_BaseMethods.Rule,
    HandleRef: base_BaseMethods.HandleRef,
    UnderOver: base_BaseMethods.UnderOver,
    Lap: base_BaseMethods.Lap,
    Phantom: base_BaseMethods.Phantom,
    Smash: base_BaseMethods.Smash,
    MmlToken: base_BaseMethods.MmlToken,
};
//# sourceMappingURL=TextMacrosMethods.js.map
;// ./mjs/input/tex/textmacros/TextMacrosMappings.js




const TextMacrosMappings_VARIANT = TexConstant.Variant;
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
    rm: [TextMacrosMethods.SetFont, TextMacrosMappings_VARIANT.NORMAL],
    mit: [TextMacrosMethods.SetFont, TextMacrosMappings_VARIANT.ITALIC],
    oldstyle: [TextMacrosMethods.SetFont, TextMacrosMappings_VARIANT.OLDSTYLE],
    cal: [TextMacrosMethods.SetFont, TextMacrosMappings_VARIANT.CALLIGRAPHIC],
    it: [TextMacrosMethods.SetFont, '-tex-mathit'],
    bf: [TextMacrosMethods.SetFont, TextMacrosMappings_VARIANT.BOLD],
    sf: [TextMacrosMethods.SetFont, TextMacrosMappings_VARIANT.SANSSERIF],
    tt: [TextMacrosMethods.SetFont, TextMacrosMappings_VARIANT.MONOSPACE],
    frak: [TextMacrosMethods.TextFont, TextMacrosMappings_VARIANT.FRAKTUR],
    Bbb: [TextMacrosMethods.TextFont, TextMacrosMappings_VARIANT.DOUBLESTRUCK],
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
        const parseOptions = new tex_ParseOptions(textConf, []);
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
;// ./components/mjs/input/tex/lib/tex.js











































if (MathJax.loader) {
  MathJax.loader.checkVersion('input/tex', VERSION, 'input');
}

combineWithMathJax({_: {
  input: {
    tex_ts: tex_namespaceObject,
    tex: {
      ColumnParser: ColumnParser_namespaceObject,
      Configuration: Configuration_namespaceObject,
      FilterUtil: FilterUtil_namespaceObject,
      FindTeX: FindTeX_namespaceObject,
      HandlerTypes: HandlerTypes_namespaceObject,
      MapHandler: MapHandler_namespaceObject,
      NodeFactory: NodeFactory_namespaceObject,
      NodeUtil: NodeUtil_namespaceObject,
      ParseMethods: ParseMethods_namespaceObject,
      ParseOptions: ParseOptions_namespaceObject,
      ParseUtil: ParseUtil_namespaceObject,
      Stack: Stack_namespaceObject,
      StackItem: StackItem_namespaceObject,
      StackItemFactory: StackItemFactory_namespaceObject,
      Tags: Tags_namespaceObject,
      TexConstants: TexConstants_namespaceObject,
      TexError: TexError_namespaceObject,
      TexParser: TexParser_namespaceObject,
      Token: Token_namespaceObject,
      TokenMap: TokenMap_namespaceObject,
      UnitUtil: UnitUtil_namespaceObject,
      ams: {
        AmsConfiguration: AmsConfiguration_namespaceObject,
        AmsItems: AmsItems_namespaceObject,
        AmsMethods: AmsMethods_namespaceObject
      },
      autoload: {
        AutoloadConfiguration: AutoloadConfiguration_namespaceObject
      },
      base: {
        BaseConfiguration: BaseConfiguration_namespaceObject,
        BaseItems: BaseItems_namespaceObject,
        BaseMethods: BaseMethods_namespaceObject
      },
      configmacros: {
        ConfigMacrosConfiguration: ConfigMacrosConfiguration_namespaceObject
      },
      newcommand: {
        NewcommandConfiguration: NewcommandConfiguration_namespaceObject,
        NewcommandItems: NewcommandItems_namespaceObject,
        NewcommandMethods: NewcommandMethods_namespaceObject,
        NewcommandUtil: NewcommandUtil_namespaceObject
      },
      noundefined: {
        NoUndefinedConfiguration: NoUndefinedConfiguration_namespaceObject
      },
      require: {
        RequireConfiguration: RequireConfiguration_namespaceObject
      },
      textmacros: {
        TextMacrosConfiguration: TextMacrosConfiguration_namespaceObject,
        TextMacrosMethods: TextMacrosMethods_namespaceObject,
        TextParser: TextParser_namespaceObject
      }
    }
  }
}});

;// ./components/mjs/input/tex/register.js


function registerTeX(packageList = [], tex = true) {
  if (MathJax.startup) {
    if (tex) {
      MathJax.startup.registerConstructor('tex', MathJax._.input.tex_ts.TeX);
      MathJax.startup.useInput('tex');
    }
    if (!MathJax.config.tex) {
      MathJax.config.tex = {};
    }
    let packages = MathJax.config.tex.packages;
    MathJax.config.tex.packages = packageList;
    if (packages) {
      if (Array.isArray(packages)) {
        packages = {'[+]': packages.filter((name) => !packageList.includes(name))};
      }
      insert(MathJax.config.tex, {packages});
    }
  }
}

;// ./components/mjs/input/tex/tex.js





Loader.preLoaded(
  'input/tex-base',
  '[tex]/ams',
  '[tex]/newcommand',
  '[tex]/textmacros',
  '[tex]/noundefined',
  '[tex]/require',
  '[tex]/autoload',
  '[tex]/configmacros'
);

registerTeX([
  'base',
  'ams',
  'newcommand',
  'textmacros',
  'noundefined',
  'require',
  'autoload',
  'configmacros'
]);

/******/ })()
;