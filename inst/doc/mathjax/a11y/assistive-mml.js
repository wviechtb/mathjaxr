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

// NAMESPACE OBJECT: ./mjs/a11y/assistive-mml.js
var assistive_mml_namespaceObject = {};
__webpack_require__.r(assistive_mml_namespaceObject);
__webpack_require__.d(assistive_mml_namespaceObject, {
  AssistiveMmlHandler: () => (AssistiveMmlHandler),
  AssistiveMmlMathDocumentMixin: () => (AssistiveMmlMathDocumentMixin),
  AssistiveMmlMathItemMixin: () => (AssistiveMmlMathItemMixin),
  LimitedMmlVisitor: () => (LimitedMmlVisitor)
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
;// ./components/mjs/core/lib/core/MathItem.js
const MathItem_def = MathJax._.core.MathItem;
const protoItem = MathItem_def.protoItem;
const AbstractMathItem = MathItem_def.AbstractMathItem;
const STATE = MathItem_def.STATE;
const newState = MathItem_def.newState;

;// ./components/mjs/core/lib/core/MmlTree/SerializedMmlVisitor.js
const SerializedMmlVisitor_def = MathJax._.core.MmlTree.SerializedMmlVisitor;
const SerializedMmlVisitor = SerializedMmlVisitor_def.SerializedMmlVisitor;

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

;// ./mjs/a11y/assistive-mml.js



class LimitedMmlVisitor extends SerializedMmlVisitor {
    getAttributes(node) {
        return super.getAttributes(node).replace(/ ?id=".*?"/, '');
    }
}
newState('ASSISTIVEMML', 153);
function AssistiveMmlMathItemMixin(BaseMathItem) {
    return class extends BaseMathItem {
        assistiveMml(document, force = false) {
            if (this.state() >= STATE.ASSISTIVEMML)
                return;
            if (!this.isEscaped && (document.options.enableAssistiveMml || force)) {
                const adaptor = document.adaptor;
                const mml = document
                    .toMML(this.root)
                    .replace(/\n */g, '')
                    .replace(/<!--.*?-->/g, '');
                const mmlNodes = adaptor.firstChild(adaptor.body(adaptor.parse(mml, 'text/html')));
                const node = adaptor.node('mjx-assistive-mml', {
                    unselectable: 'on',
                    display: this.display ? 'block' : 'inline',
                }, [mmlNodes]);
                adaptor.setAttribute(adaptor.firstChild(this.typesetRoot), 'aria-hidden', 'true');
                adaptor.setStyle(this.typesetRoot, 'position', 'relative');
                adaptor.append(this.typesetRoot, node);
            }
            this.state(STATE.ASSISTIVEMML);
        }
    };
}
function AssistiveMmlMathDocumentMixin(BaseDocument) {
    var _a;
    return _a = class BaseClass extends BaseDocument {
            constructor(...args) {
                super(...args);
                const CLASS = this.constructor;
                const ProcessBits = CLASS.ProcessBits;
                if (!ProcessBits.has('assistive-mml')) {
                    ProcessBits.allocate('assistive-mml');
                }
                this.visitor = new LimitedMmlVisitor(this.mmlFactory);
                this.options.MathItem = AssistiveMmlMathItemMixin(this.options.MathItem);
                if ('addStyles' in this) {
                    this.addStyles(CLASS.assistiveStyles);
                }
            }
            toMML(node) {
                return this.visitor.visitTree(node);
            }
            assistiveMml() {
                if (!this.processed.isSet('assistive-mml')) {
                    for (const math of this.math) {
                        math.assistiveMml(this);
                    }
                    this.processed.set('assistive-mml');
                }
                return this;
            }
            state(state, restore = false) {
                super.state(state, restore);
                if (state < STATE.ASSISTIVEMML) {
                    this.processed.clear('assistive-mml');
                }
                return this;
            }
        },
        _a.OPTIONS = Object.assign(Object.assign({}, BaseDocument.OPTIONS), { enableAssistiveMml: true, renderActions: expandable(Object.assign(Object.assign({}, BaseDocument.OPTIONS.renderActions), { assistiveMml: [STATE.ASSISTIVEMML] })) }),
        _a.assistiveStyles = {
            'mjx-assistive-mml': {
                position: 'absolute !important',
                top: '0px',
                left: '0px',
                bottom: '0px',
                right: '0px',
                clip: 'rect(1px, 1px, 1px, 1px)',
                'clip-path': 'polygon(0 0, 0 1px, 1px 1px, 1px 0)',
                padding: '1px 0px 0px 0px !important',
                border: '0px !important',
                display: 'block !important',
                width: 'auto !important',
                overflow: 'hidden !important',
                'text-indent': '0px ! important',
                '-webkit-touch-callout': 'none',
                '-webkit-user-select': 'none',
                '-khtml-user-select': 'none',
                '-moz-user-select': 'none',
                '-ms-user-select': 'none',
                'user-select': 'none',
            },
            'mjx-assistive-mml[display="block"]': {
                width: '100% !important',
            },
        },
        _a;
}
function AssistiveMmlHandler(handler) {
    handler.documentClass = AssistiveMmlMathDocumentMixin(handler.documentClass);
    return handler;
}
//# sourceMappingURL=assistive-mml.js.map
;// ./components/mjs/a11y/assistive-mml/lib/assistive-mml.js





if (MathJax.loader) {
  MathJax.loader.checkVersion('a11y/assistive-mml', VERSION, 'a11y');
}

combineWithMathJax({_: {
  a11y: {
    "assistive-mml": assistive_mml_namespaceObject
  }
}});

;// ./components/mjs/a11y/assistive-mml/assistive-mml.js





if (MathJax.startup) {
  if (MathJax.config.options && MathJax.config.options.enableAssistiveMml !== false) {
    combineDefaults(MathJax.config, 'options', {
      menuOptions: {
        settings: {
          assistiveMml: true
        }
      }
    });
  }
  MathJax.startup.extendHandler(handler => AssistiveMmlHandler(handler));
}

/******/ })()
;