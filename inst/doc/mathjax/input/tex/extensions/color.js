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

// NAMESPACE OBJECT: ./mjs/input/tex/color/ColorMethods.js
var ColorMethods_namespaceObject = {};
__webpack_require__.r(ColorMethods_namespaceObject);
__webpack_require__.d(ColorMethods_namespaceObject, {
  ColorMethods: () => (ColorMethods),
  padding: () => (padding)
});

// NAMESPACE OBJECT: ./mjs/input/tex/color/ColorConstants.js
var ColorConstants_namespaceObject = {};
__webpack_require__.r(ColorConstants_namespaceObject);
__webpack_require__.d(ColorConstants_namespaceObject, {
  COLORS: () => (COLORS)
});

// NAMESPACE OBJECT: ./mjs/input/tex/color/ColorUtil.js
var ColorUtil_namespaceObject = {};
__webpack_require__.r(ColorUtil_namespaceObject);
__webpack_require__.d(ColorUtil_namespaceObject, {
  ColorModel: () => (ColorModel)
});

// NAMESPACE OBJECT: ./mjs/input/tex/color/ColorConfiguration.js
var ColorConfiguration_namespaceObject = {};
__webpack_require__.r(ColorConfiguration_namespaceObject);
__webpack_require__.d(ColorConfiguration_namespaceObject, {
  ColorConfiguration: () => (ColorConfiguration)
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

;// ./components/mjs/input/tex-base/lib/input/tex/Configuration.js
const Configuration_def = MathJax._.input.tex.Configuration;
const Configuration = Configuration_def.Configuration;
const ConfigurationHandler = Configuration_def.ConfigurationHandler;
const ParserConfiguration = Configuration_def.ParserConfiguration;

;// ./components/mjs/input/tex-base/lib/input/tex/NodeUtil.js
const NodeUtil_def = MathJax._.input.tex.NodeUtil;
/* harmony default export */ const NodeUtil = (NodeUtil_def.default);

;// ./components/mjs/input/tex-base/lib/input/tex/ParseUtil.js
const ParseUtil_def = MathJax._.input.tex.ParseUtil;
const KeyValueDef = ParseUtil_def.KeyValueDef;
const KeyValueTypes = ParseUtil_def.KeyValueTypes;
const ParseUtil = ParseUtil_def.ParseUtil;

;// ./mjs/input/tex/color/ColorMethods.js


function padding(colorPadding) {
    const pad = `+${colorPadding}`;
    const unit = colorPadding.replace(/^.*?([a-z]*)$/, '$1');
    const pad2 = 2 * parseFloat(pad);
    return {
        width: `+${pad2}${unit}`,
        height: pad,
        depth: pad,
        lspace: colorPadding,
    };
}
const ColorMethods = {
    Color(parser, name) {
        const model = parser.GetBrackets(name, '');
        const colorDef = parser.GetArgument(name);
        const colorModel = parser.configuration.packageData.get('color').model;
        const color = colorModel.getColor(model, colorDef);
        const style = parser.itemFactory
            .create('style')
            .setProperties({ styles: { mathcolor: color } });
        parser.stack.env['color'] = color;
        parser.Push(style);
    },
    TextColor(parser, name) {
        const model = parser.GetBrackets(name, '');
        const colorDef = parser.GetArgument(name);
        const colorModel = parser.configuration.packageData.get('color').model;
        const color = colorModel.getColor(model, colorDef);
        const old = parser.stack.env['color'];
        parser.stack.env['color'] = color;
        const math = parser.ParseArg(name);
        if (old) {
            parser.stack.env['color'] = old;
        }
        else {
            delete parser.stack.env['color'];
        }
        const node = parser.create('node', 'mstyle', [math], { mathcolor: color });
        parser.Push(node);
    },
    DefineColor(parser, name) {
        const cname = parser.GetArgument(name);
        const model = parser.GetArgument(name);
        const def = parser.GetArgument(name);
        const colorModel = parser.configuration.packageData.get('color').model;
        colorModel.defineColor(model, cname, def);
        parser.Push(parser.itemFactory.create('null'));
    },
    ColorBox(parser, name) {
        const model = parser.GetBrackets(name, '');
        const cdef = parser.GetArgument(name);
        const math = ParseUtil.internalMath(parser, parser.GetArgument(name));
        const colorModel = parser.configuration.packageData.get('color').model;
        const node = parser.create('node', 'mpadded', math, {
            mathbackground: colorModel.getColor(model, cdef),
        });
        NodeUtil.setProperties(node, padding(parser.options.color.padding));
        parser.Push(node);
    },
    FColorBox(parser, name) {
        const fmodel = parser.GetBrackets(name, '');
        const fname = parser.GetArgument(name);
        const cmodel = parser.GetBrackets(name, fmodel);
        const cname = parser.GetArgument(name);
        const math = ParseUtil.internalMath(parser, parser.GetArgument(name));
        const options = parser.options.color;
        const colorModel = parser.configuration.packageData.get('color').model;
        const node = parser.create('node', 'mpadded', math, {
            mathbackground: colorModel.getColor(cmodel, cname),
            style: `border: ${options.borderWidth} solid ${colorModel.getColor(fmodel, fname)}`,
        });
        NodeUtil.setProperties(node, padding(options.padding));
        parser.Push(node);
    },
};
//# sourceMappingURL=ColorMethods.js.map
;// ./components/mjs/input/tex-base/lib/input/tex/TexError.js
const TexError_def = MathJax._.input.tex.TexError;
/* harmony default export */ const TexError = (TexError_def.default);

;// ./mjs/input/tex/color/ColorConstants.js
const COLORS = new Map([
    ['Apricot', '#FBB982'],
    ['Aquamarine', '#00B5BE'],
    ['Bittersweet', '#C04F17'],
    ['Black', '#221E1F'],
    ['Blue', '#2D2F92'],
    ['BlueGreen', '#00B3B8'],
    ['BlueViolet', '#473992'],
    ['BrickRed', '#B6321C'],
    ['Brown', '#792500'],
    ['BurntOrange', '#F7921D'],
    ['CadetBlue', '#74729A'],
    ['CarnationPink', '#F282B4'],
    ['Cerulean', '#00A2E3'],
    ['CornflowerBlue', '#41B0E4'],
    ['Cyan', '#00AEEF'],
    ['Dandelion', '#FDBC42'],
    ['DarkOrchid', '#A4538A'],
    ['Emerald', '#00A99D'],
    ['ForestGreen', '#009B55'],
    ['Fuchsia', '#8C368C'],
    ['Goldenrod', '#FFDF42'],
    ['Gray', '#949698'],
    ['Green', '#00A64F'],
    ['GreenYellow', '#DFE674'],
    ['JungleGreen', '#00A99A'],
    ['Lavender', '#F49EC4'],
    ['LimeGreen', '#8DC73E'],
    ['Magenta', '#EC008C'],
    ['Mahogany', '#A9341F'],
    ['Maroon', '#AF3235'],
    ['Melon', '#F89E7B'],
    ['MidnightBlue', '#006795'],
    ['Mulberry', '#A93C93'],
    ['NavyBlue', '#006EB8'],
    ['OliveGreen', '#3C8031'],
    ['Orange', '#F58137'],
    ['OrangeRed', '#ED135A'],
    ['Orchid', '#AF72B0'],
    ['Peach', '#F7965A'],
    ['Periwinkle', '#7977B8'],
    ['PineGreen', '#008B72'],
    ['Plum', '#92268F'],
    ['ProcessBlue', '#00B0F0'],
    ['Purple', '#99479B'],
    ['RawSienna', '#974006'],
    ['Red', '#ED1B23'],
    ['RedOrange', '#F26035'],
    ['RedViolet', '#A1246B'],
    ['Rhodamine', '#EF559F'],
    ['RoyalBlue', '#0071BC'],
    ['RoyalPurple', '#613F99'],
    ['RubineRed', '#ED017D'],
    ['Salmon', '#F69289'],
    ['SeaGreen', '#3FBC9D'],
    ['Sepia', '#671800'],
    ['SkyBlue', '#46C5DD'],
    ['SpringGreen', '#C6DC67'],
    ['Tan', '#DA9D76'],
    ['TealBlue', '#00AEB3'],
    ['Thistle', '#D883B7'],
    ['Turquoise', '#00B4CE'],
    ['Violet', '#58429B'],
    ['VioletRed', '#EF58A0'],
    ['White', '#FFFFFF'],
    ['WildStrawberry', '#EE2967'],
    ['Yellow', '#FFF200'],
    ['YellowGreen', '#98CC70'],
    ['YellowOrange', '#FAA21A'],
]);
//# sourceMappingURL=ColorConstants.js.map
;// ./mjs/input/tex/color/ColorUtil.js


const ColorModelProcessors = new Map();
class ColorModel {
    constructor() {
        this.userColors = new Map();
    }
    normalizeColor(model, def) {
        if (!model || model === 'named') {
            if (def.match(/;/)) {
                throw new TexError('BadColorValue', 'Invalid color value');
            }
            return def;
        }
        if (ColorModelProcessors.has(model)) {
            const modelProcessor = ColorModelProcessors.get(model);
            return modelProcessor(def);
        }
        throw new TexError('UndefinedColorModel', "Color model '%1' not defined", model);
    }
    getColor(model, def) {
        if (!model || model === 'named') {
            return this.getColorByName(def);
        }
        return this.normalizeColor(model, def);
    }
    getColorByName(name) {
        if (this.userColors.has(name)) {
            return this.userColors.get(name);
        }
        if (COLORS.has(name)) {
            return COLORS.get(name);
        }
        if (name.match(/;/)) {
            throw new TexError('BadColorValue', 'Invalid color value');
        }
        return name;
    }
    defineColor(model, name, def) {
        const normalized = this.normalizeColor(model, def);
        this.userColors.set(name, normalized);
    }
}
ColorModelProcessors.set('rgb', function (rgb) {
    const rgbParts = rgb.trim().split(/\s*,\s*/);
    let RGB = '#';
    if (rgbParts.length !== 3) {
        throw new TexError('ModelArg1', 'Color values for the %1 model require 3 numbers', 'rgb');
    }
    for (const rgbPart of rgbParts) {
        if (!rgbPart.match(/^(\d+(\.\d*)?|\.\d+)$/)) {
            throw new TexError('InvalidDecimalNumber', 'Invalid decimal number');
        }
        const n = parseFloat(rgbPart);
        if (n < 0 || n > 1) {
            throw new TexError('ModelArg2', 'Color values for the %1 model must be between %2 and %3', 'rgb', '0', '1');
        }
        let pn = Math.floor(n * 255).toString(16);
        if (pn.length < 2) {
            pn = '0' + pn;
        }
        RGB += pn;
    }
    return RGB;
});
ColorModelProcessors.set('RGB', function (rgb) {
    const rgbParts = rgb.trim().split(/\s*,\s*/);
    let RGB = '#';
    if (rgbParts.length !== 3) {
        throw new TexError('ModelArg1', 'Color values for the %1 model require 3 numbers', 'RGB');
    }
    for (const rgbPart of rgbParts) {
        if (!rgbPart.match(/^\d+$/)) {
            throw new TexError('InvalidNumber', 'Invalid number');
        }
        const n = parseInt(rgbPart);
        if (n > 255) {
            throw new TexError('ModelArg2', 'Color values for the %1 model must be between %2 and %3', 'RGB', '0', '255');
        }
        let pn = n.toString(16);
        if (pn.length < 2) {
            pn = '0' + pn;
        }
        RGB += pn;
    }
    return RGB;
});
ColorModelProcessors.set('gray', function (gray) {
    if (!gray.match(/^\s*(\d+(\.\d*)?|\.\d+)\s*$/)) {
        throw new TexError('InvalidDecimalNumber', 'Invalid decimal number');
    }
    const n = parseFloat(gray);
    if (n < 0 || n > 1) {
        throw new TexError('ModelArg2', 'Color values for the %1 model must be between %2 and %3', 'gray', '0', '1');
    }
    let pn = Math.floor(n * 255).toString(16);
    if (pn.length < 2) {
        pn = '0' + pn;
    }
    return `#${pn}${pn}${pn}`;
});
//# sourceMappingURL=ColorUtil.js.map
;// ./mjs/input/tex/color/ColorConfiguration.js





new CommandMap('color', {
    color: ColorMethods.Color,
    textcolor: ColorMethods.TextColor,
    definecolor: ColorMethods.DefineColor,
    colorbox: ColorMethods.ColorBox,
    fcolorbox: ColorMethods.FColorBox,
});
const config = function (_config, jax) {
    jax.parseOptions.packageData.set('color', { model: new ColorModel() });
};
const ColorConfiguration = Configuration.create('color', {
    [ConfigurationType.HANDLER]: {
        [HandlerType.MACRO]: ['color'],
    },
    [ConfigurationType.OPTIONS]: {
        color: {
            padding: '5px',
            borderWidth: '2px',
        },
    },
    [ConfigurationType.CONFIG]: config,
});
//# sourceMappingURL=ColorConfiguration.js.map
;// ./components/mjs/input/tex/extensions/color/lib/color.js








if (MathJax.loader) {
  MathJax.loader.checkVersion('[tex]/color', VERSION, 'tex-extension');
}

combineWithMathJax({_: {
  input: {
    tex: {
      color: {
        ColorConfiguration: ColorConfiguration_namespaceObject,
        ColorConstants: ColorConstants_namespaceObject,
        ColorMethods: ColorMethods_namespaceObject,
        ColorUtil: ColorUtil_namespaceObject
      }
    }
  }
}});

;// ./components/mjs/input/tex/extensions/color/color.js


/******/ })()
;