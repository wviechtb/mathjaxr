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

// NAMESPACE OBJECT: ./mjs/input/tex/colortbl/ColortblConfiguration.js
var ColortblConfiguration_namespaceObject = {};
__webpack_require__.r(ColortblConfiguration_namespaceObject);
__webpack_require__.d(ColortblConfiguration_namespaceObject, {
  ColorArrayItem: () => (ColorArrayItem),
  ColortblConfiguration: () => (ColortblConfiguration)
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

;// ./mjs/input/tex/colortbl/ColortblConfiguration.js





class ColorArrayItem extends ArrayItem {
    constructor() {
        super(...arguments);
        this.color = {
            cell: '',
            row: '',
            col: [],
        };
        this.hasColor = false;
    }
    EndEntry() {
        super.EndEntry();
        const cell = this.row[this.row.length - 1];
        const color = this.color.cell || this.color.row || this.color.col[this.row.length - 1];
        if (color) {
            cell.attributes.set('mathbackground', color);
            this.color.cell = '';
            this.hasColor = true;
        }
    }
    EndRow() {
        super.EndRow();
        this.color.row = '';
    }
    createMml() {
        const mml = super.createMml();
        let table = mml.isKind('mrow') ? mml.childNodes[1] : mml;
        if (table.isKind('mstyle')) {
            table = table.childNodes[0].childNodes[0];
        }
        if (table.isKind('menclose')) {
            table = table.childNodes[0].childNodes[0];
        }
        if (this.hasColor) {
            const attributes = table.attributes;
            if (attributes.get('frame') === 'none' &&
                attributes.get('data-frame-styles') === undefined) {
                attributes.set('data-frame-styles', '');
            }
        }
        return mml;
    }
}
function TableColor(parser, name, type) {
    const lookup = parser.configuration.packageData.get('color').model;
    const model = parser.GetBrackets(name, '');
    const color = lookup.getColor(model, parser.GetArgument(name));
    const top = parser.stack.Top();
    if (!(top instanceof ColorArrayItem)) {
        throw new TexError('UnsupportedTableColor', 'Unsupported use of %1', parser.currentCS);
    }
    if (type === 'col') {
        if (top.table.length && top.color.col[top.row.length] !== color) {
            throw new TexError('ColumnColorNotTop', '%1 must be in the top row or preamble', name);
        }
        top.color.col[top.row.length] = color;
        if (parser.GetBrackets(name, '')) {
            parser.GetBrackets(name, '');
        }
    }
    else {
        top.color[type] = color;
        if (type === 'row' && (top.Size() || top.row.length)) {
            throw new TexError('RowColorNotFirst', '%1 must be at the beginning of a row', name);
        }
    }
}
new CommandMap('colortbl', {
    cellcolor: [TableColor, 'cell'],
    rowcolor: [TableColor, 'row'],
    columncolor: [TableColor, 'col'],
});
const config = function (config, jax) {
    if (!jax.parseOptions.packageData.has('color')) {
        ConfigurationHandler.get('color').config(config, jax);
    }
};
const ColortblConfiguration = Configuration.create('colortbl', {
    [ConfigurationType.HANDLER]: { [HandlerType.MACRO]: ['colortbl'] },
    [ConfigurationType.ITEMS]: { array: ColorArrayItem },
    [ConfigurationType.PRIORITY]: 10,
    [ConfigurationType.CONFIG]: [config, 10],
});
//# sourceMappingURL=ColortblConfiguration.js.map
;// ./components/mjs/input/tex/extensions/colortbl/lib/colortbl.js





if (MathJax.loader) {
  MathJax.loader.checkVersion('[tex]/colortbl', VERSION, 'tex-extension');
}

combineWithMathJax({_: {
  input: {
    tex: {
      colortbl: {
        ColortblConfiguration: ColortblConfiguration_namespaceObject
      }
    }
  }
}});

;// ./components/mjs/input/tex/extensions/colortbl/colortbl.js


/******/ })()
;