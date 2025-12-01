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

// NAMESPACE OBJECT: ./mjs/input/tex/tagformat/TagFormatConfiguration.js
var TagFormatConfiguration_namespaceObject = {};
__webpack_require__.r(TagFormatConfiguration_namespaceObject);
__webpack_require__.d(TagFormatConfiguration_namespaceObject, {
  TagFormatConfiguration: () => (TagFormatConfiguration),
  tagformatConfig: () => (tagformatConfig)
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

;// ./components/mjs/input/tex-base/lib/input/tex/Tags.js
const Tags_def = MathJax._.input.tex.Tags;
const Label = Tags_def.Label;
const TagInfo = Tags_def.TagInfo;
const AbstractTags = Tags_def.AbstractTags;
const NoTags = Tags_def.NoTags;
const AllTags = Tags_def.AllTags;
const TagsFactory = Tags_def.TagsFactory;

;// ./mjs/input/tex/tagformat/TagFormatConfiguration.js



let tagID = 0;
function tagformatConfig(config, jax) {
    const tags = jax.parseOptions.options.tags;
    if (tags !== 'base' && Object.hasOwn(config.tags, tags)) {
        TagsFactory.add(tags, config.tags[tags]);
    }
    const TagClass = TagsFactory.create(jax.parseOptions.options.tags)
        .constructor;
    class TagFormat extends TagClass {
        formatNumber(n) {
            return jax.parseOptions.options.tagformat.number(n);
        }
        formatTag(tag) {
            return jax.parseOptions.options.tagformat.tag(tag);
        }
        formatRef(tag) {
            const ref = jax.parseOptions.options.tagformat.ref;
            return ref ? ref(tag) : this.formatTag(tag);
        }
        formatId(id) {
            return jax.parseOptions.options.tagformat.id(id);
        }
        formatUrl(id, base) {
            return jax.parseOptions.options.tagformat.url(id, base);
        }
    }
    tagID++;
    const tagName = 'configTags-' + tagID;
    TagsFactory.add(tagName, TagFormat);
    jax.parseOptions.options.tags = tagName;
}
const TagFormatConfiguration = Configuration.create('tagformat', {
    [ConfigurationType.CONFIG]: [tagformatConfig, 10],
    [ConfigurationType.OPTIONS]: {
        tagformat: {
            number: (n) => n.toString(),
            tag: (tag) => '(' + tag + ')',
            ref: '',
            id: (id) => 'mjx-eqn:' + id.replace(/\s/g, '_'),
            url: (id, base) => base + '#' + encodeURIComponent(id),
        },
    },
});
//# sourceMappingURL=TagFormatConfiguration.js.map
;// ./components/mjs/input/tex/extensions/tagformat/lib/tagformat.js





if (MathJax.loader) {
  MathJax.loader.checkVersion('[tex]/tagformat', VERSION, 'tex-extension');
}

combineWithMathJax({_: {
  input: {
    tex: {
      tagformat: {
        TagFormatConfiguration: TagFormatConfiguration_namespaceObject
      }
    }
  }
}});

;// ./components/mjs/input/tex/extensions/tagformat/tagformat.js


/******/ })()
;