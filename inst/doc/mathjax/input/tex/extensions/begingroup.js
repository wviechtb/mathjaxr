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

// NAMESPACE OBJECT: ./mjs/input/tex/begingroup/BegingroupStack.js
var BegingroupStack_namespaceObject = {};
__webpack_require__.r(BegingroupStack_namespaceObject);
__webpack_require__.d(BegingroupStack_namespaceObject, {
  BegingroupStack: () => (BegingroupStack),
  begingroupStack: () => (begingroupStack)
});

// NAMESPACE OBJECT: ./mjs/input/tex/begingroup/BegingroupMethods.js
var BegingroupMethods_namespaceObject = {};
__webpack_require__.r(BegingroupMethods_namespaceObject);
__webpack_require__.d(BegingroupMethods_namespaceObject, {
  BegingroupMethods: () => (BegingroupMethods)
});

// NAMESPACE OBJECT: ./mjs/input/tex/begingroup/BegingroupConfiguration.js
var BegingroupConfiguration_namespaceObject = {};
__webpack_require__.r(BegingroupConfiguration_namespaceObject);
__webpack_require__.d(BegingroupConfiguration_namespaceObject, {
  BegingroupConfiguration: () => (BegingroupConfiguration)
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

;// ./components/mjs/input/tex-base/lib/input/tex/MapHandler.js
const MapHandler_def = MathJax._.input.tex.MapHandler;
const MapHandler = MapHandler_def.MapHandler;
const SubHandler = MapHandler_def.SubHandler;
const SubHandlers = MapHandler_def.SubHandlers;

;// ./components/mjs/input/tex-base/lib/input/tex/TexError.js
const TexError_def = MathJax._.input.tex.TexError;
/* harmony default export */ const TexError = (TexError_def.default);

;// ./components/mjs/input/tex/extensions/newcommand/lib/input/tex/newcommand/NewcommandUtil.js
const NewcommandUtil_def = MathJax._.input.tex.newcommand.NewcommandUtil;
const NewcommandTables = NewcommandUtil_def.NewcommandTables;
const NewcommandPriority = NewcommandUtil_def.NewcommandPriority;
const NewcommandUtil = NewcommandUtil_def.NewcommandUtil;

;// ./components/mjs/input/tex-base/lib/input/tex/ParseMethods.js
const ParseMethods_def = MathJax._.input.tex.ParseMethods;
/* harmony default export */ const ParseMethods = (ParseMethods_def.default);

;// ./mjs/input/tex/begingroup/BegingroupStack.js






class BegingroupStack {
    constructor(parser) {
        this.i = NewcommandPriority;
        this.top = NewcommandPriority;
        this.base = NewcommandPriority;
        this.MARKER = Symbol('marker');
        this.handlers = parser.handlers;
        this.getGlobal();
    }
    getGlobal() {
        this.global = {
            [NewcommandTables.NEW_DELIMITER]: MapHandler.getMap(NewcommandTables.NEW_DELIMITER),
            [NewcommandTables.NEW_ENVIRONMENT]: MapHandler.getMap(NewcommandTables.NEW_ENVIRONMENT),
            [NewcommandTables.NEW_COMMAND]: MapHandler.getMap(NewcommandTables.NEW_COMMAND),
        };
    }
    checkGlobal(tokens, maps) {
        for (const name of maps) {
            const token = tokens.shift();
            const handler = this.handlers.get(BegingroupStack.handlerMap[name]);
            this.global[name].add(token, this.MARKER);
            let item;
            do {
                const map = handler.applicable(token);
                item = map.lookup(token);
                map.remove(token);
            } while (item && item !== this.MARKER);
        }
        return maps.map((name) => this.global[name]);
    }
    push() {
        new DelimiterMap(NewcommandTables.NEW_DELIMITER, ParseMethods.delimiter, {});
        new CommandMap(NewcommandTables.NEW_COMMAND, {});
        new EnvironmentMap(NewcommandTables.NEW_ENVIRONMENT, ParseMethods.environment, {});
        this.handlers.add(BegingroupStack.handlerConfig, {}, --this.i);
    }
    pop() {
        if (this.i === this.base) {
            throw new TexError('MissingBegingroup', 'Missing \\begingroup or extra \\endgroup');
        }
        this.handlers.remove(BegingroupStack.handlerConfig, {});
        for (const name of [NewcommandTables.NEW_COMMAND, NewcommandTables.NEW_ENVIRONMENT, NewcommandTables.NEW_DELIMITER]) {
            MapHandler.register(this.handlers.retrieve(name));
        }
        this.i++;
    }
    finish() {
        this.top = this.i;
    }
    remove() {
        while (this.i < this.top) {
            this.pop();
        }
    }
    reset() {
        this.top = this.base;
        this.remove();
    }
    sandbox() {
        this.base = NewcommandPriority;
        this.reset();
        this.push();
        this.getGlobal();
        this.base = NewcommandPriority - 1;
    }
}
BegingroupStack.handlerConfig = {
    [HandlerType.DELIMITER]: [NewcommandTables.NEW_DELIMITER],
    [HandlerType.ENVIRONMENT]: [NewcommandTables.NEW_ENVIRONMENT],
    [HandlerType.MACRO]: [NewcommandTables.NEW_DELIMITER, NewcommandTables.NEW_COMMAND],
};
BegingroupStack.handlerMap = {
    [NewcommandTables.NEW_DELIMITER]: HandlerType.DELIMITER,
    [NewcommandTables.NEW_ENVIRONMENT]: HandlerType.ENVIRONMENT,
    [NewcommandTables.NEW_COMMAND]: HandlerType.MACRO,
};
function begingroupStack(parser) {
    return parser.packageData.get('begingroup').stack;
}
//# sourceMappingURL=BegingroupStack.js.map
;// ./components/mjs/input/tex-base/lib/input/tex/base/BaseMethods.js
const BaseMethods_def = MathJax._.input.tex.base.BaseMethods;
const splitAlignArray = BaseMethods_def.splitAlignArray;
/* harmony default export */ const BaseMethods = (BaseMethods_def.default);

;// ./mjs/input/tex/begingroup/BegingroupMethods.js




const BegingroupMethods = {
    begingroup(parser, _name) {
        begingroupStack(parser.configuration).push();
    },
    endgroup(parser, _name) {
        begingroupStack(parser.configuration).pop();
    },
    reset(parser, _name) {
        begingroupStack(parser.configuration).reset();
    },
    sandbox(parser, _name) {
        begingroupStack(parser.configuration).sandbox();
        parser.stack.global.isSandbox = true;
    },
    global(parser, _name) {
        const i = parser.i;
        const cs = parser.GetNext() === '\\' ? (parser.i++, parser.GetCS()) : '';
        parser.i = i;
        if (!parser.options.begingroup.allowGlobal.includes(cs)) {
            throw new TexError('IllegalGlobal', 'Invalid use of %1', parser.currentCS);
        }
        parser.stack.env.isGlobal = true;
    },
    macro: BaseMethods.Macro,
};
new CommandMap('begingroup', {
    begingroup: BegingroupMethods.begingroup,
    endgroup: BegingroupMethods.endgroup,
    global: BegingroupMethods.global,
    gdef: [BegingroupMethods.macro, '\\global\\def'],
    begingroupReset: BegingroupMethods.reset,
    begingroupSandbox: BegingroupMethods.sandbox,
});
//# sourceMappingURL=BegingroupMethods.js.map
;// ./mjs/input/tex/begingroup/BegingroupConfiguration.js





new CommandMap('begingroup', {
    begingroup: BegingroupMethods.begingroup,
    endgroup: BegingroupMethods.endgroup,
    global: BegingroupMethods.global,
    gdef: [BegingroupMethods.macro, '\\global\\def'],
    begingroupReset: BegingroupMethods.reset,
    begingroupSandbox: BegingroupMethods.sandbox,
});
const BegingroupConfiguration = Configuration.create('begingroup', {
    [ConfigurationType.HANDLER]: {
        [HandlerType.MACRO]: ['begingroup'],
    },
    [ConfigurationType.CONFIG]: (_config, jax) => {
        jax.parseOptions.packageData.set('begingroup', {
            stack: new BegingroupStack(jax.parseOptions),
        });
    },
    [ConfigurationType.OPTIONS]: {
        begingroup: {
            allowGlobal: [
                'let',
                'def',
                'newcommand',
                'DeclareMathOperator',
                'Newextarrow',
            ],
        },
    },
    [ConfigurationType.PREPROCESSORS]: [
        ({ data: parser }) => begingroupStack(parser).remove(),
    ],
    [ConfigurationType.POSTPROCESSORS]: [
        ({ data: parser }) => begingroupStack(parser).finish(),
    ],
});
//# sourceMappingURL=BegingroupConfiguration.js.map
;// ./components/mjs/input/tex/extensions/begingroup/lib/begingroup.js







if (MathJax.loader) {
  MathJax.loader.checkVersion('[tex]/begingroup', VERSION, 'tex-extension');
}

combineWithMathJax({_: {
  input: {
    tex: {
      begingroup: {
        BegingroupConfiguration: BegingroupConfiguration_namespaceObject,
        BegingroupMethods: BegingroupMethods_namespaceObject,
        BegingroupStack: BegingroupStack_namespaceObject
      }
    }
  }
}});

;// ./components/mjs/input/tex/extensions/begingroup/begingroup.js


/******/ })()
;