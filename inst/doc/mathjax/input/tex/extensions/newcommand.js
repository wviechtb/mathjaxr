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

// NAMESPACE OBJECT: ./mjs/input/tex/newcommand/NewcommandItems.js
var NewcommandItems_namespaceObject = {};
__webpack_require__.r(NewcommandItems_namespaceObject);
__webpack_require__.d(NewcommandItems_namespaceObject, {
  BeginEnvItem: () => (BeginEnvItem)
});

// NAMESPACE OBJECT: ./mjs/input/tex/newcommand/NewcommandUtil.js
var NewcommandUtil_namespaceObject = {};
__webpack_require__.r(NewcommandUtil_namespaceObject);
__webpack_require__.d(NewcommandUtil_namespaceObject, {
  NewcommandPriority: () => (NewcommandPriority),
  NewcommandTables: () => (NewcommandTables),
  NewcommandUtil: () => (NewcommandUtil)
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

;// ./components/mjs/input/tex-base/lib/input/tex/StackItem.js
const StackItem_def = MathJax._.input.tex.StackItem;
const MmlStack = StackItem_def.MmlStack;
const BaseItem = StackItem_def.BaseItem;

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
                throw new TexError('EnvBadEnd', '\\begin{%1} ended with \\end{%2}', this.getName(), item.getName());
            }
            return [[this.factory.create('mml', this.toMml())], true];
        }
        if (item.isKind('stop')) {
            throw new TexError('EnvMissingEnd', 'Missing \\end{%1}', this.getName());
        }
        return super.checkItem(item);
    }
}
//# sourceMappingURL=NewcommandItems.js.map
;// ./components/mjs/input/tex-base/lib/input/tex/MapHandler.js
const MapHandler_def = MathJax._.input.tex.MapHandler;
const MapHandler = MapHandler_def.MapHandler;
const SubHandler = MapHandler_def.SubHandler;
const SubHandlers = MapHandler_def.SubHandlers;

;// ./components/mjs/input/tex-base/lib/input/tex/UnitUtil.js
const UnitUtil_def = MathJax._.input.tex.UnitUtil;
const UnitUtil = UnitUtil_def.UnitUtil;

;// ./components/mjs/input/tex-base/lib/input/tex/Token.js
const Token_def = MathJax._.input.tex.Token;
const Token = Token_def.Token;
const Macro = Token_def.Macro;

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
            throw new TexError('MissingCS', '%1 must be followed by a control sequence', cmd);
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
            throw new TexError('IllegalControlSequenceName', 'Illegal control sequence name for %1', name);
        }
        this.checkProtectedMacros(parser, cs);
        return cs;
    },
    GetArgCount(parser, name) {
        let n = parser.GetBrackets(name);
        if (n) {
            n = UnitUtil.trimSpaces(n);
            if (!n.match(/^[0-9]+$/)) {
                throw new TexError('IllegalParamNumber', 'Illegal number of parameters specified in %1', name);
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
                    throw new TexError('CantUseHash2', 'Illegal use of # in template for %1', cs);
                }
                if (parseInt(c) !== ++n) {
                    throw new TexError('SequentialParam', 'Parameters for %1 must be numbered sequentially', cs);
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
        throw new TexError('MissingReplacementString', 'Missing replacement string for definition of %1', cmd);
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
        throw new TexError('RunawayArgument', 'Runaway argument for %1?', name);
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
            throw new TexError('ProtectedMacro', "The control sequence %1 can't be redefined", `\\${cs}`);
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

;// ./components/mjs/input/tex-base/lib/input/tex/ParseUtil.js
const ParseUtil_def = MathJax._.input.tex.ParseUtil;
const KeyValueDef = ParseUtil_def.KeyValueDef;
const KeyValueTypes = ParseUtil_def.KeyValueTypes;
const ParseUtil = ParseUtil_def.ParseUtil;

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
                throw new TexError('MismatchUseDef', "Use of %1 doesn't match its definition", name);
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
    Macro: BaseMethods.Macro,
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
;// ./components/mjs/input/tex-base/lib/input/tex/ParseMethods.js
const ParseMethods_def = MathJax._.input.tex.ParseMethods;
/* harmony default export */ const ParseMethods = (ParseMethods_def.default);

;// ./mjs/input/tex/newcommand/NewcommandConfiguration.js







function NewcommandConfig(_config, jax) {
    if (jax.parseOptions.packageData.has('newcommand')) {
        return;
    }
    jax.parseOptions.packageData.set('newcommand', {});
    new DelimiterMap(NewcommandTables.NEW_DELIMITER, ParseMethods.delimiter, {});
    new CommandMap(NewcommandTables.NEW_COMMAND, {});
    new EnvironmentMap(NewcommandTables.NEW_ENVIRONMENT, ParseMethods.environment, {});
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
;// ./components/mjs/input/tex/extensions/newcommand/lib/newcommand.js








if (MathJax.loader) {
  MathJax.loader.checkVersion('[tex]/newcommand', VERSION, 'tex-extension');
}

combineWithMathJax({_: {
  input: {
    tex: {
      newcommand: {
        NewcommandConfiguration: NewcommandConfiguration_namespaceObject,
        NewcommandItems: NewcommandItems_namespaceObject,
        NewcommandMethods: NewcommandMethods_namespaceObject,
        NewcommandUtil: NewcommandUtil_namespaceObject
      }
    }
  }
}});

;// ./components/mjs/input/tex/extensions/newcommand/newcommand.js


/******/ })()
;