/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 15:
/***/ (() => {

/* -*- Mode: Javascript; indent-tabs-mode:nil; js-indent-level: 2 -*- */
/* vim: set ts=2 et sw=2 tw=80: */

/*************************************************************
 *
 *  MathJax/jax/element/mml/jax.js
 *  
 *  Implements the MML ElementJax that holds the internal represetation
 *  of the mathematics on the page.  Various InputJax will produce this
 *  format, and the OutputJax will display it in various formats.
 *
 *  ---------------------------------------------------------------------
 *  
 *  Copyright (c) 2009-2017 The MathJax Consortium
 * 
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

MathJax.ElementJax.mml = MathJax.ElementJax({
  mimeType: "jax/mml"
},{
  id: "mml",
  version: "2.7.2",
  directory: MathJax.ElementJax.directory + "/mml",
  extensionDir: MathJax.ElementJax.extensionDir + "/mml",
  optableDir: MathJax.ElementJax.directory + "/mml/optable"
});

MathJax.ElementJax.mml.Augment({
  Init: function () {
    if (arguments.length === 1 && arguments[0].type === "math") {this.root = arguments[0]}
      else {this.root = MathJax.ElementJax.mml.math.apply(this,arguments)}
    if (this.root.attr && this.root.attr.mode) {
      if (!this.root.display && this.root.attr.mode === "display") {
        this.root.display = "block";
        this.root.attrNames.push("display");
      }
      delete this.root.attr.mode;
      for (var i = 0, m = this.root.attrNames.length; i < m; i++) {
        if (this.root.attrNames[i] === "mode") {this.root.attrNames.splice(i,1); break}
      }
    }
  }
},{
  // VS Q: These two do what?
  INHERIT: "_inherit_",
  AUTO: "_auto_",
  SIZE: {
    INFINITY: "infinity",
    SMALL: "small",
    NORMAL: "normal",
    BIG: "big"
  },
  COLOR: {
    TRANSPARENT: "transparent"
  },
  VARIANT: {
    NORMAL: "normal",
    BOLD: "bold",
    ITALIC: "italic",
    BOLDITALIC: "bold-italic",
    DOUBLESTRUCK: "double-struck",
    FRAKTUR: "fraktur",
    BOLDFRAKTUR: "bold-fraktur",
    SCRIPT: "script",
    BOLDSCRIPT: "bold-script",
    SANSSERIF: "sans-serif",
    BOLDSANSSERIF: "bold-sans-serif",
    SANSSERIFITALIC: "sans-serif-italic",
    SANSSERIFBOLDITALIC: "sans-serif-bold-italic",
    MONOSPACE: "monospace",
    INITIAL: "inital",
    TAILED: "tailed",
    LOOPED: "looped",
    STRETCHED: "stretched",
    CALIGRAPHIC: "-tex-caligraphic",
    OLDSTYLE: "-tex-oldstyle"
  },
  FORM: {
    PREFIX: "prefix",
    INFIX: "infix",
    POSTFIX: "postfix"
  },
  LINEBREAK: {
    AUTO: "auto",
    NEWLINE: "newline",
    NOBREAK: "nobreak",
    GOODBREAK: "goodbreak",
    BADBREAK: "badbreak"
  },
  LINEBREAKSTYLE: {
    BEFORE: "before",
    AFTER: "after",
    DUPLICATE: "duplicate",
    INFIXLINBREAKSTYLE: "infixlinebreakstyle"
  },
  INDENTALIGN: {
    LEFT: "left",
    CENTER: "center",
    RIGHT: "right",
    AUTO: "auto",
    ID: "id",
    INDENTALIGN: "indentalign"
  },
  INDENTSHIFT: {
    INDENTSHIFT: "indentshift"
  },
  LINETHICKNESS: {
    THIN: "thin",
    MEDIUM: "medium",
    THICK: "thick"
  },
  NOTATION: {
    LONGDIV: "longdiv",
    ACTUARIAL: "actuarial",
    RADICAL: "radical",
    BOX: "box",
    ROUNDEDBOX: "roundedbox",
    CIRCLE: "circle",
    LEFT: "left",
    RIGHT: "right",
    TOP: "top",
    BOTTOM: "bottom",
    UPDIAGONALSTRIKE: "updiagonalstrike",
    DOWNDIAGONALSTRIKE: "downdiagonalstrike",
    UPDIAGONALARROW: "updiagonalarrow",
    VERTICALSTRIKE: "verticalstrike",
    HORIZONTALSTRIKE: "horizontalstrike",
    PHASORANGLE: "phasorangle",
    MADRUWB: "madruwb"
  },
  ALIGN: {
    TOP: "top",
    BOTTOM: "bottom",
    CENTER: "center",
    BASELINE: "baseline",
    AXIS: "axis",
    LEFT: "left",
    RIGHT: "right"
  },
  LINES: {
    NONE: "none",
    SOLID: "solid",
    DASHED: "dashed"
  },
  SIDE: {
    LEFT: "left",
    RIGHT: "right",
    LEFTOVERLAP: "leftoverlap",
    RIGHTOVERLAP: "rightoverlap"
  },
  WIDTH: {
    AUTO: "auto",
    FIT: "fit"
  },
  ACTIONTYPE: {
    TOGGLE: "toggle",
    STATUSLINE: "statusline",
    TOOLTIP: "tooltip",
    INPUT: "input"
  },
  LENGTH: {
    VERYVERYTHINMATHSPACE: "veryverythinmathspace",
    VERYTHINMATHSPACE: "verythinmathspace",
    THINMATHSPACE: "thinmathspace",
    MEDIUMMATHSPACE: "mediummathspace",
    THICKMATHSPACE: "thickmathspace",
    VERYTHICKMATHSPACE: "verythickmathspace",
    VERYVERYTHICKMATHSPACE: "veryverythickmathspace",
    NEGATIVEVERYVERYTHINMATHSPACE: "negativeveryverythinmathspace",
    NEGATIVEVERYTHINMATHSPACE: "negativeverythinmathspace",
    NEGATIVETHINMATHSPACE: "negativethinmathspace",
    NEGATIVEMEDIUMMATHSPACE: "negativemediummathspace",
    NEGATIVETHICKMATHSPACE: "negativethickmathspace",
    NEGATIVEVERYTHICKMATHSPACE: "negativeverythickmathspace",
    NEGATIVEVERYVERYTHICKMATHSPACE: "negativeveryverythickmathspace"
  },
  OVERFLOW: {
    LINBREAK: "linebreak",
    SCROLL: "scroll",
    ELIDE: "elide",
    TRUNCATE: "truncate",
    SCALE: "scale"
  },
  UNIT: {
    EM: "em",
    EX: "ex",
    PX: "px",
    IN: "in",
    CM: "cm",
    MM: "mm",
    PT: "pt",
    PC: "pc"
  },
  TEXCLASS: {
    ORD:   0,
    OP:    1,
    BIN:   2,
    REL:   3,
    OPEN:  4,
    CLOSE: 5,
    PUNCT: 6,
    INNER: 7,
    VCENTER: 8,
    NONE:   -1
  },
  TEXCLASSNAMES: ["ORD", "OP", "BIN", "REL", "OPEN", "CLOSE", "PUNCT", "INNER", "VCENTER"],
  skipAttributes: {
    texClass:true, useHeight:true, texprimestyle:true
  },
  copyAttributes: {
    displaystyle:1, scriptlevel:1, open:1, close:1, form:1,
    actiontype: 1,
    fontfamily:true, fontsize:true, fontweight:true, fontstyle:true,
    color:true, background:true,
    id:true, "class":1, href:true, style:true
  },
  copyAttributeNames: [
    "displaystyle", "scriptlevel", "open", "close", "form",  // force these to be copied
    "actiontype",
    "fontfamily", "fontsize", "fontweight", "fontstyle",
    "color", "background",
    "id", "class", "href", "style"
  ],
  nocopyAttributes: {
    fontfamily: true, fontsize: true, fontweight: true, fontstyle: true,
    color: true, background: true,
    id: true, 'class': true, href: true, style: true,
    xmlns: true
  },
  Error: function (message,def) {
    var mml = this.merror(message),
        dir = MathJax.Localization.fontDirection(),
        font = MathJax.Localization.fontFamily();
    if (def) {mml = mml.With(def)}
    if (dir || font) {
      mml = this.mstyle(mml);
      if (dir) {mml.dir = dir}
      if (font) {mml.style.fontFamily = "font-family: "+font}
    }
    return mml;
  }
});

(function (MML) {

  MML.mbase = MathJax.Object.Subclass({
    type: "base", isToken: false,
    defaults: {
      mathbackground: MML.INHERIT,
      mathcolor: MML.INHERIT,
      dir: MML.INHERIT
    },
    noInherit: {},
    noInheritAttribute: {
      texClass: true
    },
    getRemoved: {},
    linebreakContainer: false,
    
    Init: function () {
      this.data = [];
      if (this.inferRow && !(arguments.length === 1 && arguments[0].inferred))
        {this.Append(MML.mrow().With({inferred: true, notParent: true}))}
      this.Append.apply(this,arguments);
    },
    With: function (def) {
      for (var id in def) {if (def.hasOwnProperty(id)) {this[id] = def[id]}}
      return this;
    },
    Append: function () {
      if (this.inferRow && this.data.length) {
        this.data[0].Append.apply(this.data[0],arguments);
      } else {
        for (var i = 0, m = arguments.length; i < m; i++)
          {this.SetData(this.data.length,arguments[i])}
      }
    },
    SetData: function (i,item) {
      if (item != null) {
        if (!(item instanceof MML.mbase))
          {item = (this.isToken || this.isChars ? MML.chars(item) : MML.mtext(item))}
        item.parent = this;
        item.setInherit(this.inheritFromMe ? this : this.inherit);
      }
      this.data[i] = item;
    },
    Parent: function () {
      var parent = this.parent;
      while (parent && parent.notParent) {parent = parent.parent}
      return parent;
    },
    Get: function (name,nodefault,noself) {
      if (!noself) {
        if (this[name] != null) {return this[name]}
        if (this.attr && this.attr[name] != null) {return this.attr[name]}
      }
      // FIXME: should cache these values and get from cache
      // (clear cache when appended to a new object?)
      var parent = this.Parent();
      if (parent && parent["adjustChild_"+name] != null) {
        return (parent["adjustChild_"+name])(this.childPosition(),nodefault);
      }
      var obj = this.inherit; var root = obj;
      while (obj) {
        var value = obj[name]; if (value == null && obj.attr) {value = obj.attr[name]}
        if (obj.removedStyles && obj.getRemoved[name] && value == null) value = obj.removedStyles[obj.getRemoved[name]];
        if (value != null && obj.noInheritAttribute && !obj.noInheritAttribute[name]) {
          var noInherit = obj.noInherit[this.type];
          if (!(noInherit && noInherit[name])) {return value}
        }
        root = obj; obj = obj.inherit;
      }
      if (!nodefault) {
        if (this.defaults[name] === MML.AUTO) {return this.autoDefault(name)}
        if (this.defaults[name] !== MML.INHERIT && this.defaults[name] != null)
          {return this.defaults[name]}
        if (root) {return root.defaults[name]}
      }
      return null;
    },
    hasValue: function (name) {return (this.Get(name,true) != null)},
    getValues: function () {
      var values = {};
      for (var i = 0, m = arguments.length; i < m; i++)
        {values[arguments[i]] = this.Get(arguments[i])}
      return values;
    },
    adjustChild_scriptlevel:   function (i,nodef) {return this.Get("scriptlevel",nodef)},   // always inherit from parent
    adjustChild_displaystyle:  function (i,nodef) {return this.Get("displaystyle",nodef)},  // always inherit from parent
    adjustChild_texprimestyle: function (i,nodef) {return this.Get("texprimestyle",nodef)}, // always inherit from parent
    childPosition: function () {
      var child = this, parent = child.parent;
      while (parent.notParent) {child = parent; parent = child.parent}
      for (var i = 0, m = parent.data.length; i < m; i++) {if (parent.data[i] === child) {return i}}
      return null;
    },
    setInherit: function (obj) {
      if (obj !== this.inherit && this.inherit == null) {
        this.inherit = obj;
        for (var i = 0, m = this.data.length; i < m; i++) {
          if (this.data[i] && this.data[i].setInherit) {this.data[i].setInherit(obj)}
        }
      }
    },
    setTeXclass: function (prev) {
      this.getPrevClass(prev);
      return (typeof(this.texClass) !== "undefined" ? this : prev);
    },
    getPrevClass: function (prev) {
      if (prev) {
        this.prevClass = prev.Get("texClass");
        this.prevLevel = prev.Get("scriptlevel");
      }
    },
    updateTeXclass: function (core) {
      if (core) {
        this.prevClass = core.prevClass; delete core.prevClass;
        this.prevLevel = core.prevLevel; delete core.prevLevel;
        this.texClass = core.Get("texClass");
      }
    },
    texSpacing: function () {
      var prev = (this.prevClass != null ? this.prevClass : MML.TEXCLASS.NONE);
      var tex = (this.Get("texClass") || MML.TEXCLASS.ORD);
      if (prev === MML.TEXCLASS.NONE || tex === MML.TEXCLASS.NONE) {return ""}
      if (prev === MML.TEXCLASS.VCENTER) {prev = MML.TEXCLASS.ORD}
      if (tex  === MML.TEXCLASS.VCENTER) {tex  = MML.TEXCLASS.ORD}
      var space = this.TEXSPACE[prev][tex];
      if ((this.prevLevel > 0 || this.Get("scriptlevel") > 0) && space >= 0) {return ""}
      return this.TEXSPACELENGTH[Math.abs(space)];
    },
    TEXSPACELENGTH:[
      "",
      MML.LENGTH.THINMATHSPACE,
      MML.LENGTH.MEDIUMMATHSPACE,
      MML.LENGTH.THICKMATHSPACE
    ],
    // See TeXBook Chapter 18 (p. 170)
    TEXSPACE: [
      [ 0,-1, 2, 3, 0, 0, 0, 1], // ORD
      [-1,-1, 0, 3, 0, 0, 0, 1], // OP
      [ 2, 2, 0, 0, 2, 0, 0, 2], // BIN
      [ 3, 3, 0, 0, 3, 0, 0, 3], // REL
      [ 0, 0, 0, 0, 0, 0, 0, 0], // OPEN
      [ 0,-1, 2, 3, 0, 0, 0, 1], // CLOSE
      [ 1, 1, 0, 1, 1, 1, 1, 1], // PUNCT
      [ 1,-1, 2, 3, 1, 0, 1, 1]  // INNER
    ],
    autoDefault: function (name) {return ""},
    isSpacelike: function () {return false},
    isEmbellished: function () {return false},
    Core: function () {return this},
    CoreMO: function () {return this},
    childIndex: function(child) {
      if (child == null) return;
      for (var i = 0, m = this.data.length; i < m; i++) if (child === this.data[i]) return i;
    },
    CoreIndex: function () {
      return (this.inferRow ? this.data[0]||this : this).childIndex(this.Core());
    },
    hasNewline: function () {
      if (this.isEmbellished()) {return this.CoreMO().hasNewline()}
      if (this.isToken || this.linebreakContainer) {return false}
      for (var i = 0, m = this.data.length; i < m; i++) {
        if (this.data[i] && this.data[i].hasNewline()) {return true}
      }
      return false;
    },
    array: function () {if (this.inferred) {return this.data} else {return [this]}},
    toString: function () {return this.type+"("+this.data.join(",")+")"},
    getAnnotation: function () {return null}
  },{
    childrenSpacelike: function () {
      for (var i = 0, m = this.data.length; i < m; i++)
        {if (!this.data[i].isSpacelike()) {return false}}
      return true;
    },
    childEmbellished: function () {
      return (this.data[0] && this.data[0].isEmbellished());
    },
    childCore: function () {return (this.inferRow && this.data[0] ? this.data[0].Core() : this.data[0])},
    childCoreMO: function () {return (this.data[0] ? this.data[0].CoreMO() : null)},
    setChildTeXclass: function (prev) {
      if (this.data[0]) {
        prev = this.data[0].setTeXclass(prev);
        this.updateTeXclass(this.data[0]);
      }
      return prev;
    },
    setBaseTeXclasses: function (prev) {
      this.getPrevClass(prev); this.texClass = null;
      if (this.data[0]) {
        if (this.isEmbellished() || this.data[0].isa(MML.mi)) {
          prev = this.data[0].setTeXclass(prev);
          this.updateTeXclass(this.Core());
        } else {this.data[0].setTeXclass(); prev = this}
      } else {prev = this}
      for (var i = 1, m = this.data.length; i < m; i++)
        {if (this.data[i]) {this.data[i].setTeXclass()}}
      return prev;
    },
    setSeparateTeXclasses: function (prev) {
      this.getPrevClass(prev);
      for (var i = 0, m = this.data.length; i < m; i++)
        {if (this.data[i]) {this.data[i].setTeXclass()}}
      if (this.isEmbellished()) {this.updateTeXclass(this.Core())}
      return this;
    }
  });
  
  MML.mi = MML.mbase.Subclass({
    type: "mi", isToken: true,
    texClass: MML.TEXCLASS.ORD,
    defaults: {
      mathvariant: MML.AUTO,
      mathsize: MML.INHERIT,
      mathbackground: MML.INHERIT,
      mathcolor: MML.INHERIT,
      dir: MML.INHERIT
    },
    autoDefault: function (name) {
      if (name === "mathvariant") {
        var mi = (this.data[0]||"").toString();
        return (mi.length === 1 ||
               (mi.length === 2 && mi.charCodeAt(0) >= 0xD800 && mi.charCodeAt(0) < 0xDC00) ?
                  MML.VARIANT.ITALIC : MML.VARIANT.NORMAL);
      }
      return "";
    },
    setTeXclass: function (prev) {
      this.getPrevClass(prev);
      var name = this.data.join("");
      if (name.length > 1 && name.match(/^[a-z][a-z0-9]*$/i) &&
          this.texClass === MML.TEXCLASS.ORD) {
        this.texClass = MML.TEXCLASS.OP;
        this.autoOP = true;
      }
      return this;
    }
  });
  
  MML.mn = MML.mbase.Subclass({
    type: "mn", isToken: true,
    texClass: MML.TEXCLASS.ORD,
    defaults: {
      mathvariant: MML.INHERIT,
      mathsize: MML.INHERIT,
      mathbackground: MML.INHERIT,
      mathcolor: MML.INHERIT,
      dir: MML.INHERIT
    }
  });
  
  MML.mo = MML.mbase.Subclass({
    type: "mo", isToken: true,
    defaults: {
      mathvariant: MML.INHERIT,
      mathsize: MML.INHERIT,
      mathbackground: MML.INHERIT,
      mathcolor: MML.INHERIT,
      dir: MML.INHERIT,
      form: MML.AUTO,
      fence: MML.AUTO,
      separator: MML.AUTO,
      lspace: MML.AUTO,
      rspace: MML.AUTO,
      stretchy: MML.AUTO,
      symmetric: MML.AUTO,
      maxsize: MML.AUTO,
      minsize: MML.AUTO,
      largeop: MML.AUTO,
      movablelimits: MML.AUTO,
      accent: MML.AUTO,
      linebreak: MML.LINEBREAK.AUTO,
      lineleading: MML.INHERIT,
      linebreakstyle: MML.AUTO,
      linebreakmultchar: MML.INHERIT,
      indentalign: MML.INHERIT,
      indentshift: MML.INHERIT,
      indenttarget: MML.INHERIT,
      indentalignfirst: MML.INHERIT,
      indentshiftfirst: MML.INHERIT,
      indentalignlast: MML.INHERIT,
      indentshiftlast: MML.INHERIT,
      texClass: MML.AUTO
    },
    defaultDef: {
      form: MML.FORM.INFIX,
      fence: false,
      separator: false,
      lspace: MML.LENGTH.THICKMATHSPACE,
      rspace: MML.LENGTH.THICKMATHSPACE,
      stretchy: false,
      symmetric: false,
      maxsize: MML.SIZE.INFINITY,
      minsize: '0em', //'1em',
      largeop: false,
      movablelimits: false,
      accent: false,
      linebreak: MML.LINEBREAK.AUTO,
      lineleading: "1ex",
      linebreakstyle: "before",
      indentalign: MML.INDENTALIGN.AUTO,
      indentshift: "0",
      indenttarget: "",
      indentalignfirst: MML.INDENTALIGN.INDENTALIGN,
      indentshiftfirst: MML.INDENTSHIFT.INDENTSHIFT,
      indentalignlast: MML.INDENTALIGN.INDENTALIGN,
      indentshiftlast: MML.INDENTSHIFT.INDENTSHIFT,
      texClass: MML.TEXCLASS.REL // for MML, but TeX sets ORD explicitly
    },
    SPACE_ATTR: {lspace: 0x01, rspace: 0x02, form: 0x04},
    useMMLspacing: 0x07,
    autoDefault: function (name,nodefault) {
      var def = this.def;
      if (!def) {
        if (name === "form") {this.useMMLspacing &= ~this.SPACE_ATTR.form; return this.getForm()}
        var mo = this.data.join("");
        var forms = [this.Get("form"),MML.FORM.INFIX,MML.FORM.POSTFIX,MML.FORM.PREFIX];
        for (var i = 0, m = forms.length; i < m; i++) {
          var data = this.OPTABLE[forms[i]][mo];
          if (data) {def = this.makeDef(data); break}
        }
        if (!def) {def = this.CheckRange(mo)}
        if (!def && nodefault) {def = {}} else {
          if (!def) {def = MathJax.Hub.Insert({},this.defaultDef)}
          if (this.parent) {this.def = def} else {def = MathJax.Hub.Insert({},def)}
          def.form = forms[0];
        }
      }
      this.useMMLspacing &= ~(this.SPACE_ATTR[name] || 0);
      if (def[name] != null) {return def[name]}
      else if (!nodefault) {return this.defaultDef[name]}
      return "";
    },
    CheckRange: function (mo) {
      var n = mo.charCodeAt(0);
      if (n >= 0xD800 && n < 0xDC00) {n = (((n-0xD800)<<10)+(mo.charCodeAt(1)-0xDC00))+0x10000}
      for (var i = 0, m = this.RANGES.length; i < m && this.RANGES[i][0] <= n; i++) {
        if (n <= this.RANGES[i][1]) {
          if (this.RANGES[i][3]) {
            var file = MML.optableDir+"/"+this.RANGES[i][3]+".js";
            this.RANGES[i][3] = null;
            MathJax.Hub.RestartAfter(MathJax.Ajax.Require(file));
          }
          var data = MML.TEXCLASSNAMES[this.RANGES[i][2]];
          data = this.OPTABLE.infix[mo] = MML.mo.OPTYPES[data === "BIN" ? "BIN3" : data];
          return this.makeDef(data);
        }
      }
      return null;
    },
    makeDef: function (data) {
      if (data[2] == null) {data[2] = this.defaultDef.texClass}
      if (!data[3]) {data[3] = {}}
      var def = MathJax.Hub.Insert({},data[3]);
      def.lspace = this.SPACE[data[0]]; def.rspace = this.SPACE[data[1]];
      def.texClass = data[2];
      if (def.texClass === MML.TEXCLASS.REL &&
         (this.movablelimits || this.data.join("").match(/^[a-z]+$/i)))
             {def.texClass = MML.TEXCLASS.OP} // mark named operators as OP
      return def;
    },
    getForm: function () {
      var core = this, parent = this.parent, Parent = this.Parent();
      while (Parent && Parent.isEmbellished())
        {core = parent; parent = Parent.parent; Parent = Parent.Parent()}
      if (parent && parent.type === "mrow" && parent.NonSpaceLength() !== 1) {
        if (parent.FirstNonSpace() === core) {return MML.FORM.PREFIX}
        if (parent.LastNonSpace() === core) {return MML.FORM.POSTFIX}
      }
      return MML.FORM.INFIX;
    },
    isEmbellished: function () {return true},
    hasNewline: function () {return (this.Get("linebreak") === MML.LINEBREAK.NEWLINE)},
    CoreParent: function () {
      var parent = this;
      while (parent && parent.isEmbellished() &&
             parent.CoreMO() === this && !parent.isa(MML.math)) {parent = parent.Parent()}
      return parent;
    },
    CoreText: function (parent) {
      if (!parent) {return ""}
      if (parent.isEmbellished()) {return parent.CoreMO().data.join("")}
      while ((((parent.isa(MML.mrow) || parent.isa(MML.TeXAtom) ||
                parent.isa(MML.mstyle) || parent.isa(MML.mphantom)) &&
                parent.data.length === 1) || parent.isa(MML.munderover)) &&
                parent.data[0]) {parent = parent.data[0]}
      if (!parent.isToken) {return ""} else {return parent.data.join("")}
    },
    remapChars: {
      '*':"\u2217",
      '"':"\u2033",
      "\u00B0":"\u2218",
      "\u00B2":"2",
      "\u00B3":"3",
      "\u00B4":"\u2032",
      "\u00B9":"1"
    },
    remap: function (text,map) {
      text = text.replace(/-/g,"\u2212");
      if (map) {
        text = text.replace(/'/g,"\u2032").replace(/`/g,"\u2035");
        if (text.length === 1) {text = map[text]||text}
      }
      return text;
    },
    setTeXclass: function (prev) {
      var values = this.getValues("form","lspace","rspace","fence"); // sets useMMLspacing
      if (this.useMMLspacing) {this.texClass = MML.TEXCLASS.NONE; return this}
      if (values.fence && !this.texClass) {
        if (values.form === MML.FORM.PREFIX) {this.texClass = MML.TEXCLASS.OPEN}
        if (values.form === MML.FORM.POSTFIX) {this.texClass = MML.TEXCLASS.CLOSE}
      }
      this.texClass = this.Get("texClass");
      if (this.data.join("") === "\u2061") {
        // force previous node to be texClass OP, and skip this node
        if (prev) {prev.texClass = MML.TEXCLASS.OP; prev.fnOP = true}
        this.texClass = this.prevClass = MML.TEXCLASS.NONE;
        return prev;
      }
      return this.adjustTeXclass(prev);
    },
    adjustTeXclass: function (prev) {
      if (this.texClass === MML.TEXCLASS.NONE) {return prev}
      if (prev) {
        if (prev.autoOP && (this.texClass === MML.TEXCLASS.BIN ||
                            this.texClass === MML.TEXCLASS.REL))
          {prev.texClass = MML.TEXCLASS.ORD}
        this.prevClass = prev.texClass || MML.TEXCLASS.ORD;
        this.prevLevel = prev.Get("scriptlevel")
      } else {this.prevClass = MML.TEXCLASS.NONE}
      if (this.texClass === MML.TEXCLASS.BIN &&
            (this.prevClass === MML.TEXCLASS.NONE ||
             this.prevClass === MML.TEXCLASS.BIN ||
             this.prevClass === MML.TEXCLASS.OP ||
             this.prevClass === MML.TEXCLASS.REL ||
             this.prevClass === MML.TEXCLASS.OPEN ||
             this.prevClass === MML.TEXCLASS.PUNCT)) {
        this.texClass = MML.TEXCLASS.ORD;
      } else if (this.prevClass === MML.TEXCLASS.BIN &&
                   (this.texClass === MML.TEXCLASS.REL ||
                    this.texClass === MML.TEXCLASS.CLOSE ||
                    this.texClass === MML.TEXCLASS.PUNCT)) {
        prev.texClass = this.prevClass = MML.TEXCLASS.ORD;
      } else if (this.texClass === MML.TEXCLASS.BIN) {
        //
        // Check if node is the last one in its container since the rule
        // above only takes effect if there is a node that follows.
        //
        var child = this, parent = this.parent;
        while (parent && parent.parent && parent.isEmbellished() &&
              (parent.data.length === 1 ||
              (parent.type !== "mrow" && parent.Core() === child))) // handles msubsup and munderover
                 {child = parent; parent = parent.parent}
        if (parent.data[parent.data.length-1] === child) this.texClass = MML.TEXCLASS.ORD;
      }
      return this;
    }
  });
  
  MML.mtext = MML.mbase.Subclass({
    type: "mtext", isToken: true,
    isSpacelike: function () {return true},
    texClass: MML.TEXCLASS.ORD,
    defaults: {
      mathvariant: MML.INHERIT,
      mathsize: MML.INHERIT,
      mathbackground: MML.INHERIT,
      mathcolor: MML.INHERIT,
      dir: MML.INHERIT
    }
  });

  MML.mspace = MML.mbase.Subclass({
    type: "mspace", isToken: true,
    isSpacelike: function () {return true},
    defaults: {
      mathbackground: MML.INHERIT,
      mathcolor: MML.INHERIT,
      width: "0em",
      height: "0ex",
      depth: "0ex",
      linebreak: MML.LINEBREAK.AUTO
    },
    hasDimAttr: function () {
      return (this.hasValue("width") || this.hasValue("height") ||
              this.hasValue("depth"));
    },
    hasNewline: function () {
      // The MathML spec says that the linebreak attribute should be ignored
      // if any dimensional attribute is set.
      return (!this.hasDimAttr() &&
              this.Get("linebreak") === MML.LINEBREAK.NEWLINE);
    }
  });

  MML.ms = MML.mbase.Subclass({
    type: "ms", isToken: true,
    texClass: MML.TEXCLASS.ORD,
    defaults: {
      mathvariant: MML.INHERIT,
      mathsize: MML.INHERIT,
      mathbackground: MML.INHERIT,
      mathcolor: MML.INHERIT,
      dir: MML.INHERIT,
      lquote: '"',
      rquote: '"'
    }
  });

  MML.mglyph = MML.mbase.Subclass({
    type: "mglyph", isToken: true,
    texClass: MML.TEXCLASS.ORD,
    defaults: {
      mathbackground: MML.INHERIT,
      mathcolor: MML.INHERIT,
      alt: "",
      src: "",
      width: MML.AUTO,
      height: MML.AUTO,
      valign: "0em"
    }
  });

  MML.mrow = MML.mbase.Subclass({
    type: "mrow",
    isSpacelike: MML.mbase.childrenSpacelike,
    inferred: false, notParent: false,
    isEmbellished: function () {
      var isEmbellished = false;
      for (var i = 0, m = this.data.length; i < m; i++) {
        if (this.data[i] == null) continue;
        if (this.data[i].isEmbellished()) {
          if (isEmbellished) {return false}
          isEmbellished = true; this.core = i;
        } else if (!this.data[i].isSpacelike()) {return false}
      }
      return isEmbellished;
    },
    NonSpaceLength: function () {
      var n = 0;
      for (var i = 0, m = this.data.length; i < m; i++)
        {if (this.data[i] && !this.data[i].isSpacelike()) {n++}}
      return n;
    },
    FirstNonSpace: function () {
      for (var i = 0, m = this.data.length; i < m; i++)
        {if (this.data[i] && !this.data[i].isSpacelike()) {return this.data[i]}}
      return null;
    },
    LastNonSpace: function () {
      for (var i = this.data.length-1; i >= 0; i--)
        {if (this.data[0] && !this.data[i].isSpacelike()) {return this.data[i]}}
      return null;
    },
    Core: function () {
      if (!(this.isEmbellished()) || typeof(this.core) === "undefined") {return this}
      return this.data[this.core];
    },
    CoreMO: function () {
      if (!(this.isEmbellished()) || typeof(this.core) === "undefined") {return this}
      return this.data[this.core].CoreMO();
    },
    toString: function () {
      if (this.inferred) {return '[' + this.data.join(',') + ']'}
      return this.SUPER(arguments).toString.call(this);
    },
    setTeXclass: function (prev) {
      var i, m = this.data.length;
      if ((this.open || this.close) && (!prev || !prev.fnOP)) {
        //
        // <mrow> came from \left...\right
        // so treat as subexpression (tex class INNER)
        //
        this.getPrevClass(prev); prev = null;
        for (i = 0; i < m; i++)
          {if (this.data[i]) {prev = this.data[i].setTeXclass(prev)}}
        if (!this.hasOwnProperty("texClass")) this.texClass = MML.TEXCLASS.INNER;
        return this;
      } else {
        //
        //  Normal <mrow>, so treat as
        //  thorugh mrow is not there
        //
        for (i = 0; i < m; i++)
          {if (this.data[i]) {prev = this.data[i].setTeXclass(prev)}}
        if (this.data[0]) {this.updateTeXclass(this.data[0])}
        return prev;
      }
    },
    getAnnotation: function (name) {
      if (this.data.length != 1) return null;
      return this.data[0].getAnnotation(name);
    }
  });

  MML.mfrac = MML.mbase.Subclass({
    type: "mfrac", num: 0, den: 1,
    linebreakContainer: true,
    isEmbellished: MML.mbase.childEmbellished,
    Core: MML.mbase.childCore,
    CoreMO: MML.mbase.childCoreMO,
    defaults: {
      mathbackground: MML.INHERIT,
      mathcolor: MML.INHERIT,
      linethickness: MML.LINETHICKNESS.MEDIUM,
      numalign: MML.ALIGN.CENTER,
      denomalign: MML.ALIGN.CENTER,
      bevelled: false
    },
    adjustChild_displaystyle: function (n) {return false},
    adjustChild_scriptlevel: function (n) {
      var level = this.Get("scriptlevel");
      if (!this.Get("displaystyle") || level > 0) {level++}
      return level;
    },
    adjustChild_texprimestyle: function (n) {
      if (n == this.den) {return true}
      return this.Get("texprimestyle");
    },
    setTeXclass: MML.mbase.setSeparateTeXclasses
  });

  MML.msqrt = MML.mbase.Subclass({
    type: "msqrt",
    inferRow: true,
    linebreakContainer: true,
    texClass: MML.TEXCLASS.ORD,
    setTeXclass: MML.mbase.setSeparateTeXclasses,
    adjustChild_texprimestyle: function (n) {return true}
  });

  MML.mroot = MML.mbase.Subclass({
    type: "mroot",
    linebreakContainer: true,
    texClass: MML.TEXCLASS.ORD,
    adjustChild_displaystyle: function (n) {
      if (n === 1) {return false}
      return this.Get("displaystyle");
    },
    adjustChild_scriptlevel: function (n) {
      var level = this.Get("scriptlevel");
      if (n === 1) {level += 2}
      return level;
    },
    adjustChild_texprimestyle: function (n) {
      if (n === 0) {return true};
      return this.Get("texprimestyle");
    },
    setTeXclass: MML.mbase.setSeparateTeXclasses
  });

  MML.mstyle = MML.mbase.Subclass({
    type: "mstyle",
    isSpacelike: MML.mbase.childrenSpacelike,
    isEmbellished: MML.mbase.childEmbellished,
    Core: MML.mbase.childCore,
    CoreMO: MML.mbase.childCoreMO,
    inferRow: true,
    defaults: {
      scriptlevel: MML.INHERIT,
      displaystyle: MML.INHERIT,
      scriptsizemultiplier: Math.sqrt(1/2),
      scriptminsize: "8pt",
      mathbackground: MML.INHERIT,
      mathcolor: MML.INHERIT,
      dir: MML.INHERIT,
      infixlinebreakstyle: MML.LINEBREAKSTYLE.BEFORE,
      decimalseparator: "."
    },
    adjustChild_scriptlevel: function (n) {
      var level = this.scriptlevel;
      if (level == null) {
        level = this.Get("scriptlevel");
      } else if (String(level).match(/^ *[-+]/)) {
        var LEVEL = this.Get("scriptlevel",null,true);
        level = LEVEL + parseInt(level);
      }
      return level;
    },
    inheritFromMe: true,
    noInherit: {
      mpadded: {width: true, height: true, depth: true, lspace: true, voffset: true},
      mtable:  {width: true, height: true, depth: true, align: true}
    },
    getRemoved: {fontfamily:"fontFamily", fontweight:"fontWeight", fontstyle:"fontStyle", fontsize:"fontSize"},
    setTeXclass: MML.mbase.setChildTeXclass
  });

  MML.merror = MML.mbase.Subclass({
    type: "merror",
    inferRow: true,
    linebreakContainer: true,
    texClass: MML.TEXCLASS.ORD
  });

  MML.mpadded = MML.mbase.Subclass({
    type: "mpadded",
    inferRow: true,
    isSpacelike: MML.mbase.childrenSpacelike,
    isEmbellished: MML.mbase.childEmbellished,
    Core: MML.mbase.childCore,
    CoreMO: MML.mbase.childCoreMO,
    defaults: {
      mathbackground: MML.INHERIT,
      mathcolor: MML.INHERIT,
      width: "",
      height: "",
      depth: "",
      lspace: 0,
      voffset: 0
    },
    setTeXclass: MML.mbase.setChildTeXclass
  });

  MML.mphantom = MML.mbase.Subclass({
    type: "mphantom",
    texClass: MML.TEXCLASS.ORD,
    inferRow: true,
    isSpacelike: MML.mbase.childrenSpacelike,
    isEmbellished: MML.mbase.childEmbellished,
    Core: MML.mbase.childCore,
    CoreMO: MML.mbase.childCoreMO,
    setTeXclass: MML.mbase.setChildTeXclass
  });

  MML.mfenced = MML.mbase.Subclass({
    type: "mfenced",
    defaults: {
      mathbackground: MML.INHERIT,
      mathcolor: MML.INHERIT,
      open: '(',
      close: ')',
      separators: ','
    },
    addFakeNodes: function () {
      var values = this.getValues("open","close","separators");
      values.open = values.open.replace(/[ \t\n\r]/g,"");
      values.close = values.close.replace(/[ \t\n\r]/g,"");
      values.separators = values.separators.replace(/[ \t\n\r]/g,"");
      //
      //  Create a fake node for the open item
      //
      if (values.open !== "") {
        this.SetData("open",MML.mo(values.open).With({
          fence:true, form:MML.FORM.PREFIX, texClass:MML.TEXCLASS.OPEN
        }));
        //
        //  Clear flag for using MML spacing even though form is specified
        //
        this.data.open.useMMLspacing = 0;
      }
      //
      //  Create fake nodes for the separators
      //
      if (values.separators !== "") {
        while (values.separators.length < this.data.length)
          {values.separators += values.separators.charAt(values.separators.length-1)}
        for (var i = 1, m = this.data.length; i < m; i++) {
          if (this.data[i]) {
            this.SetData("sep"+i,MML.mo(values.separators.charAt(i-1)).With({separator:true}))
            this.data["sep"+i].useMMLspacing = 0;
          }
        }
      }
      //
      //  Create fake node for the close item
      //
      if (values.close !== "") {
        this.SetData("close",MML.mo(values.close).With({
          fence:true, form:MML.FORM.POSTFIX, texClass:MML.TEXCLASS.CLOSE
        }));
        //
        //  Clear flag for using MML spacing even though form is specified
        //
        this.data.close.useMMLspacing = 0;
      }
    },
    texClass: MML.TEXCLASS.OPEN,
    setTeXclass: function (prev) {
      this.addFakeNodes();
      this.getPrevClass(prev);
      if (this.data.open) {prev = this.data.open.setTeXclass(prev)}
      if (this.data[0]) {prev = this.data[0].setTeXclass(prev)}
      for (var i = 1, m = this.data.length; i < m; i++) {
        if (this.data["sep"+i]) {prev = this.data["sep"+i].setTeXclass(prev)}
        if (this.data[i]) {prev = this.data[i].setTeXclass(prev)}
      }
      if (this.data.close) {prev = this.data.close.setTeXclass(prev)}
      this.updateTeXclass(this.data.open);
      this.texClass = MML.TEXCLASS.INNER;
      return prev;
    }
  });

  MML.menclose = MML.mbase.Subclass({
    type: "menclose",
    inferRow: true,
    linebreakContainer: true,
    defaults: {
      mathbackground: MML.INHERIT,
      mathcolor: MML.INHERIT,
      notation: MML.NOTATION.LONGDIV,
      texClass: MML.TEXCLASS.ORD
    },
    setTeXclass: MML.mbase.setSeparateTeXclasses
  });

  MML.msubsup = MML.mbase.Subclass({
    type: "msubsup", base: 0, sub: 1, sup: 2,
    isEmbellished: MML.mbase.childEmbellished,
    Core: MML.mbase.childCore,
    CoreMO: MML.mbase.childCoreMO,
    defaults: {
      mathbackground: MML.INHERIT,
      mathcolor: MML.INHERIT,
      subscriptshift: "",
      superscriptshift: "",
      texClass: MML.AUTO
    },
    autoDefault: function (name) {
      if (name === "texClass")
        {return (this.isEmbellished() ? this.CoreMO().Get(name) : MML.TEXCLASS.ORD)}
      return 0;
    },
    adjustChild_displaystyle: function (n) {
      if (n > 0) {return false}
      return this.Get("displaystyle");
    },
    adjustChild_scriptlevel: function (n) {
      var level = this.Get("scriptlevel");
      if (n > 0) {level++}
      return level;
    },
    adjustChild_texprimestyle: function (n) {
      if (n === this.sub) {return true}
      return this.Get("texprimestyle");
    },
    setTeXclass: MML.mbase.setBaseTeXclasses
  });
  
  MML.msub = MML.msubsup.Subclass({type: "msub"});
  MML.msup = MML.msubsup.Subclass({type: "msup", sub:2, sup:1});
  MML.mmultiscripts = MML.msubsup.Subclass({
    type: "mmultiscripts",
    adjustChild_texprimestyle: function (n) {
      if (n % 2 === 1) {return true}
      return this.Get("texprimestyle");
    }
  });
  MML.mprescripts = MML.mbase.Subclass({type: "mprescripts"});
  MML.none = MML.mbase.Subclass({type: "none"});
  
  MML.munderover = MML.mbase.Subclass({
    type: "munderover",
    base: 0, under: 1, over: 2, sub: 1, sup: 2,
    ACCENTS: ["", "accentunder", "accent"],
    linebreakContainer: true,
    isEmbellished: MML.mbase.childEmbellished,
    Core: MML.mbase.childCore,
    CoreMO: MML.mbase.childCoreMO,
    defaults: {
      mathbackground: MML.INHERIT,
      mathcolor: MML.INHERIT,
      accent: MML.AUTO,
      accentunder: MML.AUTO,
      align: MML.ALIGN.CENTER,
      texClass: MML.AUTO,
      subscriptshift: "",  // when converted to msubsup by moveablelimits
      superscriptshift: "" // when converted to msubsup by moveablelimits
    },
    autoDefault: function (name) {
      if (name === "texClass")
        {return (this.isEmbellished() ? this.CoreMO().Get(name) : MML.TEXCLASS.ORD)}
      if (name === "accent" && this.data[this.over]) {return this.data[this.over].CoreMO().Get("accent")}
      if (name === "accentunder" && this.data[this.under]) {return this.data[this.under].CoreMO().Get("accent")}
      return false;
    },
    adjustChild_displaystyle: function (n) {
      if (n > 0) {return false}
      return this.Get("displaystyle");
    },
    adjustChild_scriptlevel: function (n) {
      var level = this.Get("scriptlevel");
      var force = (this.data[this.base] && !this.Get("displaystyle") &&
                   this.data[this.base].CoreMO().Get("movablelimits"));
      if (n == this.under && (force || !this.Get("accentunder"))) {level++}
      if (n == this.over  && (force || !this.Get("accent"))) {level++}
      return level;
    },
    adjustChild_texprimestyle: function (n) {
      if (n === this.base && this.data[this.over]) {return true}
      return this.Get("texprimestyle");
    },
    setTeXclass: MML.mbase.setBaseTeXclasses
  });
  
  MML.munder = MML.munderover.Subclass({type: "munder"});
  MML.mover = MML.munderover.Subclass({
    type: "mover", over: 1, under: 2, sup: 1, sub: 2,
    ACCENTS: ["", "accent", "accentunder"]
  });

  MML.mtable = MML.mbase.Subclass({
    type: "mtable",
    defaults: {
      mathbackground: MML.INHERIT,
      mathcolor: MML.INHERIT,
      align: MML.ALIGN.AXIS,
      rowalign: MML.ALIGN.BASELINE,
      columnalign: MML.ALIGN.CENTER,
      groupalign: "{left}",
      alignmentscope: true,
      columnwidth: MML.WIDTH.AUTO,
      width: MML.WIDTH.AUTO,
      rowspacing: "1ex",
      columnspacing: ".8em",
      rowlines: MML.LINES.NONE,
      columnlines: MML.LINES.NONE,
      frame: MML.LINES.NONE,
      framespacing: "0.4em 0.5ex",
      equalrows: false,
      equalcolumns: false,
      displaystyle: false,
      side: MML.SIDE.RIGHT,
      minlabelspacing: "0.8em",
      texClass: MML.TEXCLASS.ORD,
      useHeight: 1
    },
    adjustChild_displaystyle: function () {
      return (this.displaystyle != null ? this.displaystyle : this.defaults.displaystyle);
    },
    inheritFromMe: true,
    noInherit: {
      mover: {align: true},
      munder: {align: true},
      munderover: {align: true},
      mtable: {
        align: true, rowalign: true, columnalign: true, groupalign: true,
        alignmentscope: true, columnwidth: true, width: true, rowspacing: true,
        columnspacing: true, rowlines: true, columnlines: true, frame: true,
        framespacing: true, equalrows: true, equalcolumns: true, displaystyle: true,
        side: true, minlabelspacing: true, texClass: true, useHeight: 1
      }
    },
    linebreakContainer: true,
    Append: function () {
      for (var i = 0, m = arguments.length; i < m; i++) {
        if (!((arguments[i] instanceof MML.mtr) ||
              (arguments[i] instanceof MML.mlabeledtr))) {arguments[i] = MML.mtr(arguments[i])}
      }
      this.SUPER(arguments).Append.apply(this,arguments);
    },
    setTeXclass: MML.mbase.setSeparateTeXclasses
  });

  MML.mtr = MML.mbase.Subclass({
    type: "mtr",
    defaults: {
      mathbackground: MML.INHERIT,
      mathcolor: MML.INHERIT,
      rowalign: MML.INHERIT,
      columnalign: MML.INHERIT,
      groupalign: MML.INHERIT
    },
    inheritFromMe: true,
    noInherit: {
      mrow: {rowalign: true, columnalign: true, groupalign: true},
      mtable: {rowalign: true, columnalign: true, groupalign: true}
    },
    linebreakContainer: true,
    Append: function () {
      for (var i = 0, m = arguments.length; i < m; i++) {
        if (!(arguments[i] instanceof MML.mtd)) {arguments[i] = MML.mtd(arguments[i])}
      }
      this.SUPER(arguments).Append.apply(this,arguments);
    },
    setTeXclass: MML.mbase.setSeparateTeXclasses
  });

  MML.mtd = MML.mbase.Subclass({
    type: "mtd",
    inferRow: true,
    linebreakContainer: true,
    isEmbellished: MML.mbase.childEmbellished,
    Core: MML.mbase.childCore,
    CoreMO: MML.mbase.childCoreMO,
    defaults: {
      mathbackground: MML.INHERIT,
      mathcolor: MML.INHERIT,
      rowspan: 1,
      columnspan: 1,
      rowalign: MML.INHERIT,
      columnalign: MML.INHERIT,
      groupalign: MML.INHERIT
    },
    setTeXclass: MML.mbase.setSeparateTeXclasses
  });

  MML.maligngroup = MML.mbase.Subclass({
    type: "maligngroup",
    isSpacelike: function () {return true},
    defaults: {
      mathbackground: MML.INHERIT,
      mathcolor: MML.INHERIT,
      groupalign: MML.INHERIT
    },
    inheritFromMe: true,
    noInherit: {
      mrow: {groupalign: true},
      mtable: {groupalign: true}
    }
  });

  MML.malignmark = MML.mbase.Subclass({
    type: "malignmark",
    defaults: {
      mathbackground: MML.INHERIT,
      mathcolor: MML.INHERIT,
      edge: MML.SIDE.LEFT
    },
    isSpacelike: function () {return true}
  });

  MML.mlabeledtr = MML.mtr.Subclass({
    type: "mlabeledtr"
  });
  
  MML.maction = MML.mbase.Subclass({
    type: "maction",
    defaults: {
      mathbackground: MML.INHERIT,
      mathcolor: MML.INHERIT,
      actiontype: MML.ACTIONTYPE.TOGGLE,
      selection: 1
    },
    selected: function () {return this.data[this.Get("selection")-1] || MML.NULL},
    isEmbellished: function () {return this.selected().isEmbellished()},
    isSpacelike: function () {return this.selected().isSpacelike()},
    Core: function () {return this.selected().Core()},
    CoreMO: function () {return this.selected().CoreMO()},
    setTeXclass: function (prev) {
      if (this.Get("actiontype") === MML.ACTIONTYPE.TOOLTIP && this.data[1]) {
        // Make sure tooltip has proper spacing when typeset (see issue #412)
        this.data[1].setTeXclass();
      }
      var selected = this.selected();
      prev = selected.setTeXclass(prev);
      this.updateTeXclass(selected);
      return prev;
    }
  });
  
  MML.semantics = MML.mbase.Subclass({
    type: "semantics", notParent: true,
    isEmbellished: MML.mbase.childEmbellished,
    Core: MML.mbase.childCore,
    CoreMO: MML.mbase.childCoreMO,
    defaults: {
      definitionURL: null,
      encoding: null
    },
    setTeXclass: MML.mbase.setChildTeXclass,
    getAnnotation: function (name) {
      var encodingList = MathJax.Hub.config.MathMenu.semanticsAnnotations[name];
      if (encodingList) {
        for (var i = 0, m = this.data.length; i < m; i++) {
          var encoding = this.data[i].Get("encoding");
          if (encoding) {
            for (var j = 0, n = encodingList.length; j < n; j++) {
              if (encodingList[j] === encoding) return this.data[i];
            }
          }
        }
      }
      return null;
    }
  });
  MML.annotation = MML.mbase.Subclass({
    type: "annotation", isChars: true,
    linebreakContainer: true,
    defaults: {
      definitionURL: null,
      encoding: null,
      cd: "mathmlkeys",
      name: "",
      src: null
    }
  });
  MML["annotation-xml"] = MML.mbase.Subclass({
    type: "annotation-xml",
    linebreakContainer: true,
    defaults: {
      definitionURL: null,
      encoding: null,
      cd: "mathmlkeys",
      name: "",
      src: null
    }
  });

  MML.math = MML.mstyle.Subclass({
    type: "math",
    defaults: {
      mathvariant: MML.VARIANT.NORMAL,
      mathsize: MML.SIZE.NORMAL,
      mathcolor: "", // should be "black", but allow it to inherit from surrounding text
      mathbackground: MML.COLOR.TRANSPARENT,
      dir: "ltr",
      scriptlevel: 0,
      displaystyle: MML.AUTO,
      display: "inline",
      maxwidth: "",
      overflow: MML.OVERFLOW.LINEBREAK,
      altimg: "",
      'altimg-width': "",
      'altimg-height': "",
      'altimg-valign': "",
      alttext: "",
      cdgroup: "",
      scriptsizemultiplier: Math.sqrt(1/2),
      scriptminsize: "8px",    // should be 8pt, but that's too big
      infixlinebreakstyle: MML.LINEBREAKSTYLE.BEFORE,
      lineleading: "1ex",
      indentshift: "auto",     // use user configuration
      indentalign: MML.INDENTALIGN.AUTO,
      indentalignfirst: MML.INDENTALIGN.INDENTALIGN,
      indentshiftfirst: MML.INDENTSHIFT.INDENTSHIFT,
      indentalignlast:  MML.INDENTALIGN.INDENTALIGN,
      indentshiftlast:  MML.INDENTSHIFT.INDENTSHIFT,
      decimalseparator: ".",
      texprimestyle: false     // is it in TeX's C' style?
    },
    autoDefault: function (name) {
      if (name === "displaystyle") {return this.Get("display") === "block"}
      return "";
    },
    linebreakContainer: true,
    setTeXclass: MML.mbase.setChildTeXclass,
    getAnnotation: function (name) {
      if (this.data.length != 1) return null;
      return this.data[0].getAnnotation(name);
    }
  });
  
  MML.chars = MML.mbase.Subclass({
    type: "chars",
    Append: function () {this.data.push.apply(this.data,arguments)},
    value: function () {return this.data.join("")},
    toString: function () {return this.data.join("")}
  });
  
  MML.entity = MML.mbase.Subclass({
    type: "entity",
    Append: function () {this.data.push.apply(this.data,arguments)},
    value: function () {
      if (this.data[0].substr(0,2) === "#x") {return parseInt(this.data[0].substr(2),16)}
      else if (this.data[0].substr(0,1) === "#") {return parseInt(this.data[0].substr(1))}
      else {return 0}  // FIXME: look up named entities from table
    },
    toString: function () {
      var n = this.value();
      if (n <= 0xFFFF) {return String.fromCharCode(n)}
      n -= 0x10000;
      return String.fromCharCode((n>>10)+0xD800, (n&0x3FF)+0xDC00);
    }
  });
  
  MML.xml = MML.mbase.Subclass({
    type: "xml",
    Init: function () {
      this.div = document.createElement("div");
      return this.SUPER(arguments).Init.apply(this,arguments);
    },
    Append: function () {
      for (var i = 0, m = arguments.length; i < m; i++) {
        var node = this.Import(arguments[i]);
        this.data.push(node);
        this.div.appendChild(node);
      }
    },
    Import: function (node) {
      if (document.importNode) {return document.importNode(node,true)}
      //
      //  IE < 9 doesn't have importNode, so fake it.
      //
      var nNode, i, m;
      if (node.nodeType === 1) { // ELEMENT_NODE
        nNode = document.createElement(node.nodeName);
        for (i = 0, m = node.attributes.length; i < m; i++) {
          var attribute = node.attributes[i];
          if (attribute.specified && attribute.nodeValue != null && attribute.nodeValue != '')
            {nNode.setAttribute(attribute.nodeName,attribute.nodeValue)}
          if (attribute.nodeName === "style") {nNode.style.cssText = attribute.nodeValue}
        }
        if (node.className) {nNode.className = node.className}
      } else if (node.nodeType === 3 || node.nodeType === 4) { // TEXT_NODE or CDATA_SECTION_NODE
        nNode = document.createTextNode(node.nodeValue);
      } else if (node.nodeType === 8) { // COMMENT_NODE
        nNode = document.createComment(node.nodeValue);
      } else {
        return document.createTextNode('');
      }
      for (i = 0, m = node.childNodes.length; i < m; i++)
        {nNode.appendChild(this.Import(node.childNodes[i]))}
      return nNode;
    },
    value: function () {return this.div},
    toString: function () {return this.div.innerHTML}
  });
  
  MML.TeXAtom = MML.mbase.Subclass({
    type: "texatom",
    linebreakContainer: true,
    inferRow: true, notParent: true,
    texClass: MML.TEXCLASS.ORD,
    Core: MML.mbase.childCore,
    CoreMO: MML.mbase.childCoreMO,
    isEmbellished: MML.mbase.childEmbellished,
    setTeXclass: function (prev) {
      this.data[0].setTeXclass();
      return this.adjustTeXclass(prev);
    },
    adjustTeXclass: MML.mo.prototype.adjustTeXclass
  });
  
  MML.NULL = MML.mbase().With({type:"null"});

  var TEXCLASS = MML.TEXCLASS;
  
  var MO = {
    ORD:        [0,0,TEXCLASS.ORD],
    ORD11:      [1,1,TEXCLASS.ORD],
    ORD21:      [2,1,TEXCLASS.ORD],
    ORD02:      [0,2,TEXCLASS.ORD],
    ORD55:      [5,5,TEXCLASS.ORD],
    OP:         [1,2,TEXCLASS.OP,{largeop: true, movablelimits: true, symmetric: true}],
    OPFIXED:    [1,2,TEXCLASS.OP,{largeop: true, movablelimits: true}],
    INTEGRAL:   [0,1,TEXCLASS.OP,{largeop: true, symmetric: true}],
    INTEGRAL2:  [1,2,TEXCLASS.OP,{largeop: true, symmetric: true}],
    BIN3:       [3,3,TEXCLASS.BIN],
    BIN4:       [4,4,TEXCLASS.BIN],
    BIN01:      [0,1,TEXCLASS.BIN],
    BIN5:       [5,5,TEXCLASS.BIN],
    TALLBIN:    [4,4,TEXCLASS.BIN,{stretchy: true}],
    BINOP:      [4,4,TEXCLASS.BIN,{largeop: true, movablelimits: true}],
    REL:        [5,5,TEXCLASS.REL],
    REL1:       [1,1,TEXCLASS.REL,{stretchy: true}],
    REL4:       [4,4,TEXCLASS.REL],
    RELSTRETCH: [5,5,TEXCLASS.REL,{stretchy: true}],
    RELACCENT:  [5,5,TEXCLASS.REL,{accent: true}],
    WIDEREL:    [5,5,TEXCLASS.REL,{accent: true, stretchy: true}],
    OPEN:       [0,0,TEXCLASS.OPEN,{fence: true, stretchy: true, symmetric: true}],
    CLOSE:      [0,0,TEXCLASS.CLOSE,{fence: true, stretchy: true, symmetric: true}],
    INNER:      [0,0,TEXCLASS.INNER],
    PUNCT:      [0,3,TEXCLASS.PUNCT],
    ACCENT:     [0,0,TEXCLASS.ORD,{accent: true}],
    WIDEACCENT: [0,0,TEXCLASS.ORD,{accent: true, stretchy: true}]
  };

  MML.mo.Augment({
    SPACE: [
      '0em',
      '0.1111em',
      '0.1667em',
      '0.2222em',
      '0.2667em',
      '0.3333em'
    ],
    RANGES: [
      [0x20,0x7F,TEXCLASS.REL,"BasicLatin"],
      [0xA0,0xFF,TEXCLASS.ORD,"Latin1Supplement"],
      [0x100,0x17F,TEXCLASS.ORD],
      [0x180,0x24F,TEXCLASS.ORD],
      [0x2B0,0x2FF,TEXCLASS.ORD,"SpacingModLetters"],
      [0x300,0x36F,TEXCLASS.ORD,"CombDiacritMarks"],
      [0x370,0x3FF,TEXCLASS.ORD,"GreekAndCoptic"],
      [0x1E00,0x1EFF,TEXCLASS.ORD],
      [0x2000,0x206F,TEXCLASS.PUNCT,"GeneralPunctuation"],
      [0x2070,0x209F,TEXCLASS.ORD],
      [0x20A0,0x20CF,TEXCLASS.ORD],
      [0x20D0,0x20FF,TEXCLASS.ORD,"CombDiactForSymbols"],
      [0x2100,0x214F,TEXCLASS.ORD,"LetterlikeSymbols"],
      [0x2150,0x218F,TEXCLASS.ORD],
      [0x2190,0x21FF,TEXCLASS.REL,"Arrows"],
      [0x2200,0x22FF,TEXCLASS.BIN,"MathOperators"],
      [0x2300,0x23FF,TEXCLASS.ORD,"MiscTechnical"],
      [0x2460,0x24FF,TEXCLASS.ORD],
      [0x2500,0x259F,TEXCLASS.ORD],
      [0x25A0,0x25FF,TEXCLASS.ORD,"GeometricShapes"],
      [0x2700,0x27BF,TEXCLASS.ORD,"Dingbats"],
      [0x27C0,0x27EF,TEXCLASS.ORD,"MiscMathSymbolsA"],
      [0x27F0,0x27FF,TEXCLASS.REL,"SupplementalArrowsA"],
      [0x2900,0x297F,TEXCLASS.REL,"SupplementalArrowsB"],
      [0x2980,0x29FF,TEXCLASS.ORD,"MiscMathSymbolsB"],
      [0x2A00,0x2AFF,TEXCLASS.BIN,"SuppMathOperators"],
      [0x2B00,0x2BFF,TEXCLASS.ORD,"MiscSymbolsAndArrows"],
      [0x1D400,0x1D7FF,TEXCLASS.ORD]
    ],
    OPTABLE: {
      prefix: {
        '\u2200': MO.ORD21,    // for all
        '\u2202': MO.ORD21,    // partial differential
        '\u2203': MO.ORD21,    // there exists
        '\u2207': MO.ORD21,    // nabla
        '\u220F': MO.OP,       // n-ary product
        '\u2210': MO.OP,       // n-ary coproduct
        '\u2211': MO.OP,       // n-ary summation
        '\u2212': MO.BIN01,    // minus sign
        '\u2213': MO.BIN01,    // minus-or-plus sign
        '\u221A': [1,1,TEXCLASS.ORD,{stretchy: true}], // square root
        '\u2220': MO.ORD,      // angle
        '\u222B': MO.INTEGRAL, // integral
        '\u222E': MO.INTEGRAL, // contour integral
        '\u22C0': MO.OP,       // n-ary logical and
        '\u22C1': MO.OP,       // n-ary logical or
        '\u22C2': MO.OP,       // n-ary intersection
        '\u22C3': MO.OP,       // n-ary union
        '\u2308': MO.OPEN,     // left ceiling
        '\u230A': MO.OPEN,     // left floor
        '\u27E8': MO.OPEN,     // mathematical left angle bracket
        '\u27EE': MO.OPEN,     // mathematical left flattened parenthesis
        '\u2A00': MO.OP,       // n-ary circled dot operator
        '\u2A01': MO.OP,       // n-ary circled plus operator
        '\u2A02': MO.OP,       // n-ary circled times operator
        '\u2A04': MO.OP,       // n-ary union operator with plus
        '\u2A06': MO.OP,       // n-ary square union operator
        '\u00AC': MO.ORD21,    // not sign
        '\u00B1': MO.BIN01,    // plus-minus sign
        '(': MO.OPEN,          // left parenthesis
        '+': MO.BIN01,         // plus sign
        '-': MO.BIN01,         // hyphen-minus
        '[': MO.OPEN,          // left square bracket
        '{': MO.OPEN,          // left curly bracket
        '|': MO.OPEN           // vertical line
      },
      postfix: {
        '!': [1,0,TEXCLASS.CLOSE], // exclamation mark
        '&': MO.ORD,           // ampersand
        '\u2032': MO.ORD02,    // prime
        '\u203E': MO.WIDEACCENT, // overline
        '\u2309': MO.CLOSE,    // right ceiling
        '\u230B': MO.CLOSE,    // right floor
        '\u23DE': MO.WIDEACCENT, // top curly bracket
        '\u23DF': MO.WIDEACCENT, // bottom curly bracket
        '\u266D': MO.ORD02,    // music flat sign
        '\u266E': MO.ORD02,    // music natural sign
        '\u266F': MO.ORD02,    // music sharp sign
        '\u27E9': MO.CLOSE,    // mathematical right angle bracket
        '\u27EF': MO.CLOSE,    // mathematical right flattened parenthesis
        '\u02C6': MO.WIDEACCENT, // modifier letter circumflex accent
        '\u02C7': MO.WIDEACCENT, // caron
        '\u02C9': MO.WIDEACCENT, // modifier letter macron
        '\u02CA': MO.ACCENT,   // modifier letter acute accent
        '\u02CB': MO.ACCENT,   // modifier letter grave accent
        '\u02D8': MO.ACCENT,   // breve
        '\u02D9': MO.ACCENT,   // dot above
        '\u02DC': MO.WIDEACCENT, // small tilde
        '\u0302': MO.WIDEACCENT, // combining circumflex accent
        '\u00A8': MO.ACCENT,   // diaeresis
        '\u00AF': MO.WIDEACCENT, // macron
        ')': MO.CLOSE,         // right parenthesis
        ']': MO.CLOSE,         // right square bracket
        '^': MO.WIDEACCENT,    // circumflex accent
        '_': MO.WIDEACCENT,    // low line
        '`': MO.ACCENT,        // grave accent
        '|': MO.CLOSE,         // vertical line
        '}': MO.CLOSE,         // right curly bracket
        '~': MO.WIDEACCENT     // tilde
      },
      infix: {
        '': MO.ORD,            // empty <mo>
        '%': [3,3,TEXCLASS.ORD], // percent sign
        '\u2022': MO.BIN4,     // bullet
        '\u2026': MO.INNER,    // horizontal ellipsis
        '\u2044': MO.TALLBIN,  // fraction slash
        '\u2061': MO.ORD,      // function application
        '\u2062': MO.ORD,      // invisible times
        '\u2063': [0,0,TEXCLASS.ORD,{linebreakstyle:"after", separator: true}], // invisible separator
        '\u2064': MO.ORD,      // invisible plus
        '\u2190': MO.WIDEREL,  // leftwards arrow
        '\u2191': MO.RELSTRETCH, // upwards arrow
        '\u2192': MO.WIDEREL,  // rightwards arrow
        '\u2193': MO.RELSTRETCH, // downwards arrow
        '\u2194': MO.WIDEREL,  // left right arrow
        '\u2195': MO.RELSTRETCH, // up down arrow
        '\u2196': MO.RELSTRETCH, // north west arrow
        '\u2197': MO.RELSTRETCH, // north east arrow
        '\u2198': MO.RELSTRETCH, // south east arrow
        '\u2199': MO.RELSTRETCH, // south west arrow
        '\u21A6': MO.WIDEREL,  // rightwards arrow from bar
        '\u21A9': MO.WIDEREL,  // leftwards arrow with hook
        '\u21AA': MO.WIDEREL,  // rightwards arrow with hook
        '\u21BC': MO.WIDEREL,  // leftwards harpoon with barb upwards
        '\u21BD': MO.WIDEREL,  // leftwards harpoon with barb downwards
        '\u21C0': MO.WIDEREL,  // rightwards harpoon with barb upwards
        '\u21C1': MO.WIDEREL,  // rightwards harpoon with barb downwards
        '\u21CC': MO.WIDEREL,  // rightwards harpoon over leftwards harpoon
        '\u21D0': MO.WIDEREL,  // leftwards double arrow
        '\u21D1': MO.RELSTRETCH, // upwards double arrow
        '\u21D2': MO.WIDEREL,  // rightwards double arrow
        '\u21D3': MO.RELSTRETCH, // downwards double arrow
        '\u21D4': MO.WIDEREL,  // left right double arrow
        '\u21D5': MO.RELSTRETCH, // up down double arrow
        '\u2208': MO.REL,      // element of
        '\u2209': MO.REL,      // not an element of
        '\u220B': MO.REL,      // contains as member
        '\u2212': MO.BIN4,     // minus sign
        '\u2213': MO.BIN4,     // minus-or-plus sign
        '\u2215': MO.TALLBIN,  // division slash
        '\u2216': MO.BIN4,     // set minus
        '\u2217': MO.BIN4,     // asterisk operator
        '\u2218': MO.BIN4,     // ring operator
        '\u2219': MO.BIN4,     // bullet operator
        '\u221D': MO.REL,      // proportional to
        '\u2223': MO.REL,      // divides
        '\u2225': MO.REL,      // parallel to
        '\u2227': MO.BIN4,     // logical and
        '\u2228': MO.BIN4,     // logical or
        '\u2229': MO.BIN4,     // intersection
        '\u222A': MO.BIN4,     // union
        '\u223C': MO.REL,      // tilde operator
        '\u2240': MO.BIN4,     // wreath product
        '\u2243': MO.REL,      // asymptotically equal to
        '\u2245': MO.REL,      // approximately equal to
        '\u2248': MO.REL,      // almost equal to
        '\u224D': MO.REL,      // equivalent to
        '\u2250': MO.REL,      // approaches the limit
        '\u2260': MO.REL,      // not equal to
        '\u2261': MO.REL,      // identical to
        '\u2264': MO.REL,      // less-than or equal to
        '\u2265': MO.REL,      // greater-than or equal to
        '\u226A': MO.REL,      // much less-than
        '\u226B': MO.REL,      // much greater-than
        '\u227A': MO.REL,      // precedes
        '\u227B': MO.REL,      // succeeds
        '\u2282': MO.REL,      // subset of
        '\u2283': MO.REL,      // superset of
        '\u2286': MO.REL,      // subset of or equal to
        '\u2287': MO.REL,      // superset of or equal to
        '\u228E': MO.BIN4,     // multiset union
        '\u2291': MO.REL,      // square image of or equal to
        '\u2292': MO.REL,      // square original of or equal to
        '\u2293': MO.BIN4,     // square cap
        '\u2294': MO.BIN4,     // square cup
        '\u2295': MO.BIN4,     // circled plus
        '\u2296': MO.BIN4,     // circled minus
        '\u2297': MO.BIN4,     // circled times
        '\u2298': MO.BIN4,     // circled division slash
        '\u2299': MO.BIN4,     // circled dot operator
        '\u22A2': MO.REL,      // right tack
        '\u22A3': MO.REL,      // left tack
        '\u22A4': MO.ORD55,    // down tack
        '\u22A5': MO.REL,      // up tack
        '\u22A8': MO.REL,      // true
        '\u22C4': MO.BIN4,     // diamond operator
        '\u22C5': MO.BIN4,     // dot operator
        '\u22C6': MO.BIN4,     // star operator
        '\u22C8': MO.REL,      // bowtie
        '\u22EE': MO.ORD55,    // vertical ellipsis
        '\u22EF': MO.INNER,    // midline horizontal ellipsis
        '\u22F1': [5,5,TEXCLASS.INNER], // down right diagonal ellipsis
        '\u25B3': MO.BIN4,     // white up-pointing triangle
        '\u25B5': MO.BIN4,     // white up-pointing small triangle
        '\u25B9': MO.BIN4,     // white right-pointing small triangle
        '\u25BD': MO.BIN4,     // white down-pointing triangle
        '\u25BF': MO.BIN4,     // white down-pointing small triangle
        '\u25C3': MO.BIN4,     // white left-pointing small triangle
        '\u2758': MO.REL,      // light vertical bar
        '\u27F5': MO.WIDEREL,  // long leftwards arrow
        '\u27F6': MO.WIDEREL,  // long rightwards arrow
        '\u27F7': MO.WIDEREL,  // long left right arrow
        '\u27F8': MO.WIDEREL,  // long leftwards double arrow
        '\u27F9': MO.WIDEREL,  // long rightwards double arrow
        '\u27FA': MO.WIDEREL,  // long left right double arrow
        '\u27FC': MO.WIDEREL,  // long rightwards arrow from bar
        '\u2A2F': MO.BIN4,     // vector or cross product
        '\u2A3F': MO.BIN4,     // amalgamation or coproduct
        '\u2AAF': MO.REL,      // precedes above single-line equals sign
        '\u2AB0': MO.REL,      // succeeds above single-line equals sign
        '\u00B1': MO.BIN4,     // plus-minus sign
        '\u00B7': MO.BIN4,     // middle dot
        '\u00D7': MO.BIN4,     // multiplication sign
        '\u00F7': MO.BIN4,     // division sign
        '*': MO.BIN3,          // asterisk
        '+': MO.BIN4,          // plus sign
        ',': [0,3,TEXCLASS.PUNCT,{linebreakstyle:"after", separator: true}], // comma
        '-': MO.BIN4,          // hyphen-minus
        '.': [3,3,TEXCLASS.ORD], // full stop
        '/': MO.ORD11,         // solidus
        ':': [1,2,TEXCLASS.REL], // colon
        ';': [0,3,TEXCLASS.PUNCT,{linebreakstyle:"after", separator: true}], // semicolon
        '<': MO.REL,           // less-than sign
        '=': MO.REL,           // equals sign
        '>': MO.REL,           // greater-than sign
        '?': [1,1,TEXCLASS.CLOSE], // question mark
        '\\': MO.ORD,          // reverse solidus
        '^': MO.ORD11,         // circumflex accent
        '_': MO.ORD11,         // low line
        '|': [2,2,TEXCLASS.ORD,{fence: true, stretchy: true, symmetric: true}], // vertical line
        '#': MO.ORD,           // #
        '$': MO.ORD,           // $
        '\u002E': [0,3,TEXCLASS.PUNCT,{separator: true}], // \ldotp
        '\u02B9': MO.ORD,      // prime
        '\u0300': MO.ACCENT,   // \grave
        '\u0301': MO.ACCENT,   // \acute
        '\u0303': MO.WIDEACCENT, // \tilde
        '\u0304': MO.ACCENT,   // \bar
        '\u0306': MO.ACCENT,   // \breve
        '\u0307': MO.ACCENT,   // \dot
        '\u0308': MO.ACCENT,   // \ddot
        '\u030C': MO.ACCENT,   // \check
        '\u0332': MO.WIDEACCENT, // horizontal line
        '\u0338': MO.REL4,     // \not
        '\u2015': [0,0,TEXCLASS.ORD,{stretchy: true}], // horizontal line
        '\u2017': [0,0,TEXCLASS.ORD,{stretchy: true}], // horizontal line
        '\u2020': MO.BIN3,     // \dagger
        '\u2021': MO.BIN3,     // \ddagger
        '\u20D7': MO.ACCENT,   // \vec
        '\u2111': MO.ORD,      // \Im
        '\u2113': MO.ORD,      // \ell
        '\u2118': MO.ORD,      // \wp
        '\u211C': MO.ORD,      // \Re
        '\u2205': MO.ORD,      // \emptyset
        '\u221E': MO.ORD,      // \infty
        '\u2305': MO.BIN3,     // barwedge
        '\u2306': MO.BIN3,     // doublebarwedge
        '\u2322': MO.REL4,     // \frown
        '\u2323': MO.REL4,     // \smile
        '\u2329': MO.OPEN,     // langle
        '\u232A': MO.CLOSE,    // rangle
        '\u23AA': MO.ORD,      // \bracevert
        '\u23AF': [0,0,TEXCLASS.ORD,{stretchy: true}], // \underline
        '\u23B0': MO.OPEN,     // \lmoustache
        '\u23B1': MO.CLOSE,    // \rmoustache
        '\u2500': MO.ORD,      // horizontal line
        '\u25EF': MO.BIN3,     // \bigcirc
        '\u2660': MO.ORD,      // \spadesuit
        '\u2661': MO.ORD,      // \heartsuit
        '\u2662': MO.ORD,      // \diamondsuit
        '\u2663': MO.ORD,      // \clubsuit
        '\u3008': MO.OPEN,     // langle
        '\u3009': MO.CLOSE,    // rangle
        '\uFE37': MO.WIDEACCENT, // horizontal brace down
        '\uFE38': MO.WIDEACCENT  // horizontal brace up
      }
    }
  },{
    OPTYPES: MO
  });
  
  //
  //  These are not in the W3C table, but FF works this way,
  //  and it makes sense, so add it here
  //
  var OPTABLE = MML.mo.prototype.OPTABLE;
  OPTABLE.infix["^"] = MO.WIDEREL;
  OPTABLE.infix["_"] = MO.WIDEREL;
  OPTABLE.prefix["\u2223"] = MO.OPEN;
  OPTABLE.prefix["\u2225"] = MO.OPEN;
  OPTABLE.postfix["\u2223"] = MO.CLOSE;
  OPTABLE.postfix["\u2225"] = MO.CLOSE;
  
})(MathJax.ElementJax.mml);

MathJax.ElementJax.mml.loadComplete("jax.js");


/***/ }),

/***/ 123:
/***/ ((__unused_webpack_module, exports) => {

var MathJax = {debug:true};

var window = {
  MathJax: MathJax
};
var navigator = {};
var document = null;

exports.E = MathJax;

(function (BASENAME) {
  var BASE = window[BASENAME];
  if (!BASE) {BASE = window[BASENAME] = {}}

  var PROTO = [];  // a static object used to indicate when a prototype is being created
  var OBJECT = function (def) {
    var obj = def.constructor; if (!obj) {obj = function () {}}
    for (var id in def) {if (id !== 'constructor' && def.hasOwnProperty(id)) {obj[id] = def[id]}}
    return obj;
  };
  var CONSTRUCTOR = function () {
    return function () {return arguments.callee.Init.call(this,arguments)};
  };

  BASE.Object = OBJECT({
    constructor: CONSTRUCTOR(),
    
    Subclass: function (def,classdef) {
      var obj = CONSTRUCTOR();
      obj.SUPER = this; obj.Init = this.Init;
      obj.Subclass = this.Subclass; obj.Augment = this.Augment;
      obj.protoFunction = this.protoFunction;
      obj.can = this.can; obj.has = this.has; obj.isa = this.isa;
      obj.prototype = new this(PROTO);
      obj.prototype.constructor = obj;  // the real constructor
      obj.Augment(def,classdef);
      return obj;
    },
  
    Init: function (args) {
      var obj = this;
      if (args.length === 1 && args[0] === PROTO) {return obj}
      if (!(obj instanceof args.callee)) {obj = new args.callee(PROTO)}
      return obj.Init.apply(obj,args) || obj;
    },
    
    Augment: function (def,classdef) {
      var id;
      if (def != null) {
        for (id in def) {if (def.hasOwnProperty(id)) {this.protoFunction(id,def[id])}}
        // MSIE doesn't list toString even if it is not native so handle it separately
        if (def.toString !== this.prototype.toString && def.toString !== {}.toString)
          {this.protoFunction('toString',def.toString)}
      }
      if (classdef != null) {
        for (id in classdef) {if (classdef.hasOwnProperty(id)) {this[id] = classdef[id]}}
      }
      return this;
    },
  
    protoFunction: function (id,def) {
      this.prototype[id] = def;
      if (typeof def === "function") {def.SUPER = this.SUPER.prototype}
    },
  
    prototype: {
      Init: function () {},
      SUPER: function (fn) {return fn.callee.SUPER},
      can: function (method) {return typeof(this[method]) === "function"},
      has: function (property) {return typeof(this[property]) !== "undefined"},
      isa: function (obj) {return (obj instanceof Object) && (this instanceof obj)}
    },
  
    can: function (method)   {return this.prototype.can.call(this,method)},
    has: function (property) {return this.prototype.has.call(this,property)},
    isa: function (obj) {
      var constructor = this;
      while (constructor) {
        if (constructor === obj) {return true} else {constructor = constructor.SUPER}
      }
      return false;
    },


    SimpleSUPER: OBJECT({
      constructor: function (def) {return this.SimpleSUPER.define(def)},

      define: function (src) {
	var dst = {};
	if (src != null) {
          for (var id in src) {if (src.hasOwnProperty(id)) {dst[id] = this.wrap(id,src[id])}}
	  // MSIE doesn't list toString even if it is not native so handle it separately
          if (src.toString !== this.prototype.toString && src.toString !== {}.toString)
            {dst.toString = this.wrap('toString',src.toString)}
	}
	return dst;
      },

      wrap: function (id,f) {
        if (typeof(f) !== 'function' || !f.toString().match(/\.\s*SUPER\s*\(/)) {return f}
        var fn = function () {
          this.SUPER = fn.SUPER[id];
          try {var result = f.apply(this,arguments)} catch (err) {delete this.SUPER; throw err}
          delete this.SUPER;
          return result;
        }
        fn.toString = function () {return f.toString.apply(f,arguments)}
        return fn;
      }

    })
  });

  BASE.Object.isArray = Array.isArray || function (obj) {
    return Object.prototype.toString.call(obj) === "[object Array]";
  };
  
  BASE.Object.Array = Array;

})("MathJax");

/**********************************************************/

/*
 *  Create a callback function from various forms of data:
 *  
 *     MathJax.Callback(fn)    -- callback to a function
 *
 *     MathJax.Callback([fn])  -- callback to function
 *     MathJax.Callback([fn,data...])
 *                             -- callback to function with given data as arguments
 *     MathJax.Callback([object,fn])
 *                             -- call fn with object as "this"
 *     MathJax.Callback([object,fn,data...])
 *                             -- call fn with object as "this" and data as arguments
 *     MathJax.Callback(["method",object])
 *                             -- call method of object wth object as "this"
 *     MathJax.Callback(["method",object,data...])
 *                             -- as above, but with data as arguments to method
 *
 *     MathJax.Callback({hook: fn, data: [...], object: this})
 *                             -- give function, data, and object to act as "this" explicitly
 *
 *     MathJax.Callback("code")  -- callback that compiles and executes a string
 *
 *     MathJax.Callback([...],i)
 *                             -- use slice of array starting at i and interpret
 *                                result as above.  (Used for passing "arguments" array
 *                                and trimming initial arguments, if any.)
 */

/*
 *    MathJax.Callback.After([...],cb1,cb2,...)
 *                             -- make a callback that isn't called until all the other
 *                                ones are called first.  I.e., wait for a union of
 *                                callbacks to occur before making the given callback.
 */

/*
 *  MathJax.Callback.Queue([callback,...])
 *                             -- make a synchronized queue of commands that process
 *                                sequentially, waiting for those that return uncalled
 *                                callbacks.
 */

/*
 *  MathJax.Callback.Signal(name)
 *                             -- finds or creates a names signal, to which listeners
 *                                can be attached and are signaled by messages posted
 *                                to the signal.  Responses can be asynchronous.
 */

(function (BASENAME) {
  var BASE = window[BASENAME];
  if (!BASE) {BASE = window[BASENAME] = {}}
  //
  //  Create a callback from an associative array
  //
  var CALLBACK = function (data) {
    var cb = function () {return arguments.callee.execute.apply(arguments.callee,arguments)};
    for (var id in CALLBACK.prototype) {
      if (CALLBACK.prototype.hasOwnProperty(id)) {
        if (typeof(data[id]) !== 'undefined') {cb[id] = data[id]}
                                         else {cb[id] = CALLBACK.prototype[id]}
      }
    }
    cb.toString = CALLBACK.prototype.toString;
    return cb;
  };
  CALLBACK.prototype = {
    isCallback: true,
    hook: function () {},
    data: [],
    object: window,
    execute: function () {
      if (!this.called || this.autoReset) {
        this.called = !this.autoReset;
        return this.hook.apply(this.object,this.data.concat([].slice.call(arguments,0)));
      }
    },
    reset: function () {delete this.called},
    toString: function () {return this.hook.toString.apply(this.hook,arguments)}
  };
  var ISCALLBACK = function (f) {
    return (typeof(f) === "function" && f.isCallback);
  }

  //
  //  Evaluate a string in global context
  //
  var EVAL = function (code) {return eval.call(window,code)}
  var TESTEVAL = function () {
    EVAL("var __TeSt_VaR__ = 1"); // check if it works in global context
    if (window.__TeSt_VaR__) {
      try { delete window.__TeSt_VaR__; } // NOTE IE9 throws when in IE7 mode
      catch (error) { window.__TeSt_VaR__ = null; } 
    } else {
      if (window.execScript) {
        // IE
        EVAL = function (code) {
          BASE.__code = code;
          code = "try {"+BASENAME+".__result = eval("+BASENAME+".__code)} catch(err) {"+BASENAME+".__result = err}";
          window.execScript(code);
          var result = BASE.__result; delete BASE.__result; delete BASE.__code;
          if (result instanceof Error) {throw result}
          return result;
        }
      } else {
        // Safari2
        EVAL = function (code) {
          BASE.__code = code;
          code = "try {"+BASENAME+".__result = eval("+BASENAME+".__code)} catch(err) {"+BASENAME+".__result = err}";
          var head = (document.getElementsByTagName("head"))[0]; if (!head) {head = document.body}
          var script = document.createElement("script");
          script.appendChild(document.createTextNode(code));
          head.appendChild(script); head.removeChild(script);
          var result = BASE.__result; delete BASE.__result; delete BASE.__code;
          if (result instanceof Error) {throw result}
          return result;
        }
      }
    }
    TESTEVAL = null;
  }

  //
  //  Create a callback from various types of data
  //
  var USING = function (args,i) {
    if (arguments.length > 1) {
      if (arguments.length === 2 && !(typeof arguments[0] === 'function') &&
          arguments[0] instanceof Object && typeof arguments[1] === 'number')
            {args = [].slice.call(args,i)}
      else {args = [].slice.call(arguments,0)}
    }
    if (args instanceof Array && args.length === 1) {args = args[0]}
    if (typeof args === 'function') {
      if (args.execute === CALLBACK.prototype.execute) {return args}
      return CALLBACK({hook: args});
    } else if (args instanceof Array) {
      if (typeof(args[0]) === 'string' && args[1] instanceof Object &&
                 typeof args[1][args[0]] === 'function') {
        return CALLBACK({hook: args[1][args[0]], object: args[1], data: args.slice(2)});
      } else if (typeof args[0] === 'function') {
        return CALLBACK({hook: args[0], data: args.slice(1)});
      } else if (typeof args[1] === 'function') {
        return CALLBACK({hook: args[1], object: args[0], data: args.slice(2)});
      }
    } else if (typeof(args) === 'string') {
      if (TESTEVAL) TESTEVAL();
      return CALLBACK({hook: EVAL, data: [args]});
    } else if (args instanceof Object) {
      return CALLBACK(args);
    } else if (typeof(args) === 'undefined') {
      return CALLBACK({});
    }
    throw Error("Can't make callback from given data");
  };
  
  //
  //  Wait for a given time to elapse and then perform the callback
  //
  var DELAY = function (time,callback) {
    callback = USING(callback);
    callback.timeout = setTimeout(callback,time);
    return callback;
  };

  //
  //  Callback used by AFTER, QUEUE, and SIGNAL to check if calls have completed
  //
  var WAITFOR = function (callback,signal) {
    callback = USING(callback);
    if (!callback.called) {WAITSIGNAL(callback,signal); signal.pending++}
  };
  var WAITEXECUTE = function () {
    var signals = this.signal; delete this.signal;
    this.execute = this.oldExecute; delete this.oldExecute;
    var result = this.execute.apply(this,arguments);
    if (ISCALLBACK(result) && !result.called) {WAITSIGNAL(result,signals)} else {
      for (var i = 0, m = signals.length; i < m; i++) {
        signals[i].pending--;
        if (signals[i].pending <= 0) {signals[i].call()}
      }
    }
  };
  var WAITSIGNAL = function (callback,signals) {
    if (!(signals instanceof Array)) {signals = [signals]}
    if (!callback.signal) {
      callback.oldExecute = callback.execute;
      callback.execute = WAITEXECUTE;
      callback.signal = signals;
    } else if (signals.length === 1) {callback.signal.push(signals[0])}
      else {callback.signal = callback.signal.concat(signals)}
  };

  //
  //  Create a callback that is called when a collection of other callbacks have
  //  all been executed.  If the callback gets called immediately (i.e., the
  //  others are all already called), check if it returns another callback
  //  and return that instead.
  //
  var AFTER = function (callback) {
    callback = USING(callback);
    callback.pending = 0;
    for (var i = 1, m = arguments.length; i < m; i++)
      {if (arguments[i]) {WAITFOR(arguments[i],callback)}}
    if (callback.pending === 0) {
      var result = callback();
      if (ISCALLBACK(result)) {callback = result}
    }
    return callback;
  };

  //
  //  An array of prioritized hooks that are executed sequentially
  //  with a given set of data.
  //
  var HOOKS = MathJax.Object.Subclass({
    //
    //  Initialize the array and the auto-reset status
    //
    Init: function (reset) {
      this.hooks = [];
      this.remove = []; // used when hooks are removed during execution of list
      this.reset = reset;
      this.running = false;
    },
    //
    //  Add a callback to the list, in priority order (default priority is 10)
    //
    Add: function (hook,priority) {
      if (priority == null) {priority = 10}
      if (!ISCALLBACK(hook)) {hook = USING(hook)}
      hook.priority = priority;
      var i = this.hooks.length;
      while (i > 0 && priority < this.hooks[i-1].priority) {i--}
      this.hooks.splice(i,0,hook);
      return hook;
    },
    Remove: function (hook) {
      for (var i = 0, m = this.hooks.length; i < m; i++) {
        if (this.hooks[i] === hook) {
          if (this.running) {this.remove.push(i)}
            else {this.hooks.splice(i,1)}
          return;
        }
      }
    },
    //
    //  Execute the list of callbacks, resetting them if requested.
    //  If any return callbacks, return a callback that will be 
    //  executed when they all have completed.
    //  Remove any hooks that requested being removed during processing.
    //
    Execute: function () {
      var callbacks = [{}];
      this.running = true;
      for (var i = 0, m = this.hooks.length; i < m; i++) {
        if (this.reset) {this.hooks[i].reset()}
        var result = this.hooks[i].apply(window,arguments);
        if (ISCALLBACK(result) && !result.called) {callbacks.push(result)}
      }
      this.running = false;
      if (this.remove.length) {this.RemovePending()}
      if (callbacks.length === 1) {return null}
      if (callbacks.length === 2) {return callbacks[1]}
      return AFTER.apply({},callbacks);
    },
    //
    //  Remove hooks that asked to be removed during execution of list
    //
    RemovePending: function () {
      this.remove = this.remove.sort();
      for (var i = this.remove.length-1; i >= 0; i--) {this.hooks.splice(i,1)}
      this.remove = [];
    }

  });
  
  //
  //  Run an array of callbacks passing them the given data.
  //  (Legacy function, since this has been replaced by the HOOKS object).
  //
  var EXECUTEHOOKS = function (hooks,data,reset) {
    if (!hooks) {return null}
    if (!(hooks instanceof Array)) {hooks = [hooks]}
    if (!(data instanceof Array))  {data = (data == null ? [] : [data])}
    var handler = HOOKS(reset);
    for (var i = 0, m = hooks.length; i < m; i++) {handler.Add(hooks[i])}
    return handler.Execute.apply(handler,data);
  };
   
  //
  //  Command queue that performs commands in order, waiting when
  //  necessary for commands to complete asynchronousely
  //
  var QUEUE = BASE.Object.Subclass({
    //
    //  Create the queue and push any commands that are specified
    //
    Init: function () {
      this.pending = this.running = 0;
      this.queue = [];
      this.Push.apply(this,arguments);
    },
    //
    //  Add commands to the queue and run them. Adding a callback object
    //  (rather than a callback specification) queues a wait for that callback.
    //  Return the final callback for synchronization purposes.
    //
    Push: function () {
      var callback;
      for (var i = 0, m = arguments.length; i < m; i++) {
        callback = USING(arguments[i]);
        if (callback === arguments[i] && !callback.called)
          {callback = USING(["wait",this,callback])}
        this.queue.push(callback);
      }
      if (!this.running && !this.pending) {this.Process()}
      return callback;
    },
    //
    //  Process the command queue if we aren't waiting on another command
    //
    Process: function (queue) {
      while (!this.running && !this.pending && this.queue.length) {
        var callback = this.queue[0];
        queue = this.queue.slice(1); this.queue = [];
        this.Suspend(); var result = callback(); this.Resume();
        if (queue.length) {this.queue = queue.concat(this.queue)}
        if (ISCALLBACK(result) && !result.called) {WAITFOR(result,this)}
      }
    },
    //
    //  Suspend/Resume command processing on this queue
    //
    Suspend: function () {this.running++},
    Resume: function () {if (this.running) {this.running--}},
    //
    //  Used by WAITFOR to restart the queue when an action completes
    //
    call: function () {this.Process.apply(this,arguments)},
    wait: function (callback) {return callback}
  });
  
  //
  //  Create a named signal that listeners can attach to, to be signaled by
  //  postings made to the signal.  Posts are queued if they occur while one
  //  is already in process.
  //
  var SIGNAL = QUEUE.Subclass({
    Init: function (name) {
      QUEUE.prototype.Init.call(this);
      this.name = name;
      this.posted = [];              // the messages posted so far
      this.listeners = HOOKS(true);  // those with interest in this signal
      this.posting = false;
      this.callback = null;
    },
    //
    // Post a message to the signal listeners, with callback for when complete
    //
    Post: function (message,callback,forget) {
      callback = USING(callback);
      if (this.posting || this.pending) {
        this.Push(["Post",this,message,callback,forget]);
      } else {
        this.callback = callback; callback.reset();
        if (!forget) {this.posted.push(message)}
        this.Suspend(); this.posting = true;
        var result = this.listeners.Execute(message);
        if (ISCALLBACK(result) && !result.called) {WAITFOR(result,this)}
        this.Resume(); this.posting = false;
        if (!this.pending) {this.call()}
      }
      return callback;
    },
    //
    //  Clear the post history (so new listeners won't get old messages)
    //
    Clear: function (callback) {
      callback = USING(callback);
      if (this.posting || this.pending) {
        callback = this.Push(["Clear",this,callback]);
      } else {
        this.posted = [];
        callback();
      }
      return callback;
    },
    //
    //  Call the callback (all replies are in) and process the command queue
    //
    call: function () {this.callback(this); this.Process()},
    
    //
    //  A listener calls this to register interest in the signal (so it will be called
    //  when posts occur).  If ignorePast is true, it will not be sent the post history.
    //
    Interest: function (callback,ignorePast,priority) {
      callback = USING(callback);
      this.listeners.Add(callback,priority);
      if (!ignorePast) {
        for (var i = 0, m = this.posted.length; i < m; i++) {
          callback.reset();
          var result = callback(this.posted[i]);
          if (ISCALLBACK(result) && i === this.posted.length-1) {WAITFOR(result,this)}
        }
      }
      return callback;
    },
    //
    //  A listener calls this to remove itself from a signal
    //
    NoInterest: function (callback) {
      this.listeners.Remove(callback);
    },
    
    //
    //  Hook a callback to a particular message on this signal
    //
    MessageHook: function (msg,callback,priority) {
      callback = USING(callback);
      if (!this.hooks) {this.hooks = {}; this.Interest(["ExecuteHooks",this])}
      if (!this.hooks[msg]) {this.hooks[msg] = HOOKS(true)}
      this.hooks[msg].Add(callback,priority);
      for (var i = 0, m = this.posted.length; i < m; i++)
        {if (this.posted[i] == msg) {callback.reset(); callback(this.posted[i])}}
      callback.msg = msg; // keep track so we can remove it
      return callback;
    },
    //
    //  Execute the message hooks for the given message
    //
    ExecuteHooks: function (msg) {
      var type = ((msg instanceof Array) ? msg[0] : msg);
      if (!this.hooks[type]) {return null}
      return this.hooks[type].Execute(msg);
    },
    //
    //  Remove a hook safely
    //
    RemoveHook: function (hook) {
      this.hooks[hook.msg].Remove(hook);
    }
    
  },{
    signals: {},  // the named signals
    find: function (name) {
      if (!SIGNAL.signals[name]) {SIGNAL.signals[name] = new SIGNAL(name)}
      return SIGNAL.signals[name];
    }
  });
  
  //
  //  The main entry-points
  //
  BASE.Callback = BASE.CallBack = USING;
  BASE.Callback.Delay = DELAY;
  BASE.Callback.After = AFTER;
  BASE.Callback.Queue = QUEUE;
  BASE.Callback.Signal = SIGNAL.find;
  BASE.Callback.Hooks = HOOKS;
  BASE.Callback.ExecuteHooks = EXECUTEHOOKS;
})("MathJax");


/**********************************************************/

(function (BASENAME) {
  var BASE = window[BASENAME];
  if (!BASE) {BASE = window[BASENAME] = {}}
  
  var isSafari2 = (navigator.vendor === "Apple Computer, Inc." &&
                   typeof navigator.vendorSub === "undefined");
  var sheets = 0; // used by Safari2

  //
  //  Update sheets count and look up the head object
  //  
  var HEAD = function (head) {
    return null;
/*
    if (document.styleSheets && document.styleSheets.length > sheets)
      {sheets = document.styleSheets.length}
    if (!head) {
      head = document.head || ((document.getElementsByTagName("head"))[0]);
      if (!head) {head = document.body}
    }
    return head;
*/
  };
  
  //
  //  Remove scripts that are completed so they don't clutter up the HEAD.
  //  This runs via setTimeout since IE7 can't remove the script while it is running.
  //
  var SCRIPTS = [];  // stores scripts to be removed after a delay
  var REMOVESCRIPTS = function () {
    for (var i = 0, m = SCRIPTS.length; i < m; i++) {BASE.Ajax.head.removeChild(SCRIPTS[i])}
    SCRIPTS = [];
  };
  
  var PATH = {};
  PATH[BASENAME] = "";  // empty path gets the root URL
  
  BASE.Ajax = {
    loaded: {},         // files already loaded
    loading: {},        // files currently in process of loading
    loadHooks: {},      // hooks to call when files are loaded
    timeout: 15*1000,   // timeout for loading of files (15 seconds)
    styleDelay: 1,      // delay to use before styles are available
    config: {
      root: "",         // URL of root directory to load from
      path: PATH        // paths to named URL's (e.g., [MathJax]/...)
    },

    STATUS: {
      OK: 1,         // file is loading or did load OK
      ERROR: -1      // file timed out during load
    },

    //
    //  Return a complete URL to a file (replacing any root names)
    //
    fileURL: function (file) {
      var match = file.match(/^\[([-._a-z0-9]+)\]/i);
      if (match && match[1] in PATH)
        {file = (PATH[match[1]]||this.config.root) + file.substr(match[1].length+2)}
      return file;
    },
    //
    //  Replace root names if URL includes one
    //
    fileName: function (url) {
      var root = this.config.root;
      if (url.substr(0,root.length) === root) {url = "["+BASENAME+"]"+url.substr(root.length)}
      else {
        for (var id in PATH) {if (PATH.hasOwnProperty(id) && PATH[id]) {
          if (url.substr(0,PATH[id].length) === PATH[id])
            {url = "["+id+"]"+url.substr(PATH[id].length); break}
        }}
      }
      return url;
    },
    //
    //  Cache-breaking revision number for file
    //
    fileRev: function (file) {
      var rev = BASE.cdnFileVersions[name] || BASE.cdnVersion;
      if (rev) {rev = "?rev="+rev}
      return rev;
    },
    urlRev: function (file) {return this.fileURL(file)+this.fileRev(file)},
    
    //
    //  Load a file if it hasn't been already.
    //  Make sure the file URL is "safe"?
    //
    Require: function (file,callback) {
      callback = BASE.Callback(callback); var type;
      if (file instanceof Object) {
        for (var i in file)
          {if (file.hasOwnProperty(i)) {type = i.toUpperCase(); file = file[i]}}
      } else {type = file.split(/\./).pop().toUpperCase()}
      file = this.fileURL(file);
      // FIXME: check that URL is OK
      if (this.loaded[file]) {
        callback(this.loaded[file]);
      } else {
        var FILE = {}; FILE[type] = file;
        this.Load(FILE,callback);
      }
      return callback;
    },

    //
    //  Load a file regardless of where it is and whether it has
    //  already been loaded.
    //
    Load: function (file,callback) {
      callback = BASE.Callback(callback); var type;
      if (file instanceof Object) {
        for (var i in file)
          {if (file.hasOwnProperty(i)) {type = i.toUpperCase(); file = file[i]}}
      } else {type = file.split(/\./).pop().toUpperCase()}
      file = this.fileURL(file);
      if (this.loading[file]) {
        this.addHook(file,callback);
      } else {
        this.head = HEAD(this.head);
        if (this.loader[type]) {this.loader[type].call(this,file,callback)}
          else {throw Error("Can't load files of type "+type)}
      }
      return callback;
    },
    
    //
    //  Register a load hook for a particular file (it will be called when
    //  loadComplete() is called for that file)
    //
    LoadHook: function (file,callback,priority) {
      callback = BASE.Callback(callback);
      if (file instanceof Object)
        {for (var i in file) {if (file.hasOwnProperty(i)) {file = file[i]}}}
      file = this.fileURL(file);
      if (this.loaded[file]) {callback(this.loaded[file])}
        else {this.addHook(file,callback,priority)}
      return callback;
    },
    addHook: function (file,callback,priority) {
      if (!this.loadHooks[file]) {this.loadHooks[file] = MathJax.Callback.Hooks()}
      this.loadHooks[file].Add(callback,priority);
      callback.file = file;
    },
    removeHook: function (hook) {
      if (this.loadHooks[hook.file]) {
        this.loadHooks[hook.file].Remove(hook);
        if (!this.loadHooks[hook.file].hooks.length) {delete this.loadHooks[hook.file]}
      }
    },
    
    //
    //  Used when files are combined in a preloading configuration file
    //
    Preloading: function () {
      for (var i = 0, m = arguments.length; i < m; i++) {
        var file = this.fileURL(arguments[i]);
        if (!this.loading[file] && !this.loaded[file]) {this.loading[file] = {preloaded: true}}
      }
    },
    
    //
    //  Code used to load the various types of files
    //  (JS for JavaScript, CSS for style sheets)
    //
    loader: {
      //
      //  Create a SCRIPT tag to load the file
      //
      JS: function (file,callback) {
        var name = this.fileName(file);
        var timeout = BASE.Callback(["loadTimeout",this,file]);
	this.loading[file] = {
	  callback: callback,
	  timeout: setTimeout(timeout,this.timeout),
	  status: this.STATUS.OK,
	  script: null
	};
	//
	// Add this to the structure above after it is created to prevent recursion
	//  when loading the initial localization file (before loading messsage is available)
	//
	this.loading[file].message = BASE.Message.File(name);
        if (window.System) {
          window.System.import(file).catch(timeout);
        } else {
          timeout();  // indicate a load failure
        }
      },
      //
      //  Create a LINK tag to load the style sheet
      //
      CSS: function (file,callback) {
        var name = this.fileName(file);
        var link = document.createElement("link");
        link.rel = "stylesheet"; link.type = "text/css";
        link.href = file+this.fileRev(name);
        this.loading[file] = {
          callback: callback,
          message: BASE.Message.File(name),
          status: this.STATUS.OK
        };
        this.head.appendChild(link);
        this.timer.create.call(this,[this.timer.file,file],link);
      }
    },
    
    //
    //  Timing code for checking when style sheets are available.
    //
    timer: {
      //
      //  Create the timing callback and start the timing loop.
      //  We use a delay because some browsers need it to allow the styles
      //  to be processed.
      //
      create: function (callback,node) {
        callback = BASE.Callback(callback);
        if (node.nodeName === "STYLE" && node.styleSheet &&
            typeof(node.styleSheet.cssText) !== 'undefined') {
          callback(this.STATUS.OK); // MSIE processes style immediately, but doesn't set its styleSheet!
        } else if (window.chrome && node.nodeName === "LINK") {
          callback(this.STATUS.OK); // Chrome doesn't give access to cssRules for stylesheet in
                                    //   a link node, so we can't detect when it is loaded.
        } else if (isSafari2) {
          this.timer.start(this,[this.timer.checkSafari2,sheets++,callback],this.styleDelay);
        } else {
          this.timer.start(this,[this.timer.checkLength,node,callback],this.styleDelay);
        }
        return callback;
      },
      //
      //  Start the timer for the given callback checker
      //
      start: function (AJAX,check,delay,timeout) {
        check = BASE.Callback(check);
        check.execute = this.execute; check.time = this.time;
        check.STATUS = AJAX.STATUS; check.timeout = timeout || AJAX.timeout;
        check.delay = check.total = delay || 0;
        if (delay) {setTimeout(check,delay)} else {check()}
      },
      //
      //  Increment the time total, increase the delay
      //  and test if we are past the timeout time.
      //  
      time: function (callback) {
        this.total += this.delay;
        this.delay = Math.floor(this.delay * 1.05 + 5);
        if (this.total >= this.timeout) {callback(this.STATUS.ERROR); return 1}
        return 0;
      },
      //
      //  For JS file loads, call the proper routine according to status
      //
      file: function (file,status) {
        if (status < 0) {BASE.Ajax.loadTimeout(file)} else {BASE.Ajax.loadComplete(file)}
      },
      //
      //  Call the hook with the required data
      //
      execute: function () {this.hook.call(this.object,this,this.data[0],this.data[1])},
      //
      //  Safari2 doesn't set the link's stylesheet, so we need to look in the
      //  document.styleSheets array for the new sheet when it is created
      //
      checkSafari2: function (check,length,callback) {
        if (check.time(callback)) return;
        if (document.styleSheets.length > length &&
            document.styleSheets[length].cssRules &&
            document.styleSheets[length].cssRules.length)
          {callback(check.STATUS.OK)} else {setTimeout(check,check.delay)}
      },
      //
      //  Look for the stylesheets rules and check when they are defined
      //  and no longer of length zero.  (This assumes there actually ARE
      //  some rules in the stylesheet.)
      //  
      checkLength: function (check,node,callback) {
        if (check.time(callback)) return;
        var isStyle = 0; var sheet = (node.sheet || node.styleSheet);
        try {if ((sheet.cssRules||sheet.rules||[]).length > 0) {isStyle = 1}} catch(err) {
          if (err.message.match(/protected variable|restricted URI/)) {isStyle = 1}
          else if (err.message.match(/Security error/)) {
            // Firefox3 gives "Security error" for missing files, so
            //   can't distinguish that from OK files on remote servers.
            //   or OK files in different directory from local files.
            isStyle = 1; // just say it is OK (can't really tell)
          }
        }
        if (isStyle) {
          // Opera 9.6 requires this setTimeout
          setTimeout(BASE.Callback([callback,check.STATUS.OK]),0);
        } else {
          setTimeout(check,check.delay);
        }
      }
    },

    //
    //  JavaScript code must call this when they are completely initialized
    //  (this allows them to perform asynchronous actions before indicating
    //  that they are complete).
    //
    loadComplete: function (file) {
      file = this.fileURL(file);
      var loading = this.loading[file];
      if (loading && !loading.preloaded) {
        BASE.Message.Clear(loading.message);
        if (loading.timeout) clearTimeout(loading.timeout);
	if (loading.script) {
	  if (SCRIPTS.length === 0) {setTimeout(REMOVESCRIPTS,0)}
	  SCRIPTS.push(loading.script);
	}
        this.loaded[file] = loading.status; delete this.loading[file];
        this.addHook(file,loading.callback);
      } else {
        if (loading) {delete this.loading[file]}
        this.loaded[file] = this.STATUS.OK;
        loading = {status: this.STATUS.OK}
      }
      if (!this.loadHooks[file]) {return null}
      return this.loadHooks[file].Execute(loading.status);
    },
    
    //
    //  If a file fails to load within the timeout period (or the onerror handler
    //  is called), this routine runs to signal the error condition.
    //  
    loadTimeout: function (file) {
      if (this.loading[file].timeout) {clearTimeout(this.loading[file].timeout)}
      this.loading[file].status = this.STATUS.ERROR;
      this.loadError(file);
      this.loadComplete(file);
    },
    
    //
    //  The default error hook for file load failures
    //
    loadError: function (file) {
      BASE.Message.Set(["LoadFailed","File failed to load: %1",file],null,2000);
      BASE.Hub.signal.Post(["file load error",file]);
    },

    //
    //  Defines a style sheet from a hash of style declarations (key:value pairs
    //  where the key is the style selector and the value is a hash of CSS attributes 
    //  and values).
    //
    Styles: function (styles,callback) {
      var styleString = this.StyleString(styles);
      if (styleString === "") {
        callback = BASE.Callback(callback);
        callback();
      } else {
        var style = document.createElement("style"); style.type = "text/css";
        this.head = HEAD(this.head);
        this.head.appendChild(style);
        if (style.styleSheet && typeof(style.styleSheet.cssText) !== 'undefined') {
          style.styleSheet.cssText = styleString;
        } else {
          style.appendChild(document.createTextNode(styleString));
        }
        callback = this.timer.create.call(this,callback,style);
      }
      return callback;
    },
    
    //
    //  Create a stylesheet string from a style declaration object
    //
    StyleString: function (styles) {
      if (typeof(styles) === 'string') {return styles}
      var string = "", id, style;
      for (id in styles) {if (styles.hasOwnProperty(id)) {
        if (typeof styles[id] === 'string') {
          string += id + " {"+styles[id]+"}\n";
        } else if (styles[id] instanceof Array) {
          for (var i = 0; i < styles[id].length; i++) {
            style = {}; style[id] = styles[id][i];
            string += this.StyleString(style);
          }
        } else if (id.substr(0,6) === '@media') {
          string += id + " {"+this.StyleString(styles[id])+"}\n";
        } else if (styles[id] != null) {
          style = [];
          for (var name in styles[id]) {if (styles[id].hasOwnProperty(name)) {
            if (styles[id][name] != null) 
              {style[style.length] = name + ': ' + styles[id][name]}
          }}
          string += id +" {"+style.join('; ')+"}\n";
        }
      }}
      return string;
    }
  };
  
})("MathJax");

/**********************************************************/

MathJax.HTML = {
  setDocument: function (doc) {document = this.document = doc},
  //
  //  Create an HTML element with given attributes and content.
  //  The def parameter is an (optional) object containing key:value pairs
  //  of the attributes and their values, and contents is an (optional)
  //  array of strings to be inserted as text, or arrays of the form
  //  [type,def,contents] that describes an HTML element to be inserted
  //  into the current element.  Thus the contents can describe a complete
  //  HTML snippet of arbitrary complexity.  E.g.:
  //  
  //    MathJax.HTML.Element("span",{id:"mySpan",style{"font-style":"italic"}},[
  //        "(See the ",["a",{href:"http://www.mathjax.org"},["MathJax home page"]],
  //        " for more details.)"]);
  // 
  Element: function (type,def,contents) {
    var obj = document.createElement(type), id;
    if (def) {
      if (def.hasOwnProperty("style")) {
        var style = def.style; def.style = {};
        for (id in style) {if (style.hasOwnProperty(id))
          {def.style[id.replace(/-([a-z])/g,this.ucMatch)] = style[id]}}
      }
      MathJax.Hub.Insert(obj,def);
      for (id in def) {
        if (id === "role" || id.substr(0,5) === "aria-") obj.setAttribute(id,def[id]);
      }
    }
    if (contents) {
      if (!MathJax.Object.isArray(contents)) {contents = [contents]}
      for (var i = 0, m = contents.length; i < m; i++) {
        if (MathJax.Object.isArray(contents[i])) {
          obj.appendChild(this.Element(contents[i][0],contents[i][1],contents[i][2]));
        } else if (type === "script") { // IE throws an error if script is added as a text node
          this.setScript(obj, contents[i]);
        } else {
          obj.appendChild(document.createTextNode(contents[i]));
        }
      }
    }
    return obj;
  },
  ucMatch: function (match,c) {return c.toUpperCase()},
  addElement: function (span,type,def,contents) {return span.appendChild(this.Element(type,def,contents))},
  TextNode: function (text) {return document.createTextNode(text)},
  addText: function (span,text) {return span.appendChild(this.TextNode(text))},

  //
  //  Set and get the text of a script
  //
  setScript: function (script,text) {
    if (this.setScriptBug) {script.text = text} else {
      while (script.firstChild) {script.removeChild(script.firstChild)}
      this.addText(script,text);
    }
  },
  getScript: function (script) {return script.innerText}
}

/**********************************************************/

MathJax.Localization = {
  
  locale: "en",
  directory: "[MathJax]/localization",
  strings: {
    // Currently, this list is not modified by the MathJax-i18n script. You can
    // run the following command in MathJax/unpacked/localization to update it:
    //
    // find . -name "*.js" | xargs grep menuTitle\: | grep -v qqq | sed 's/^\.\/\(.*\)\/.*\.js\:  /    "\1"\: \{/' | sed 's/,$/\},/' | sed 's/"English"/"English", isLoaded: true/' > tmp ; sort tmp > tmp2 ; sed '$ s/,$//' tmp2 ; rm tmp*
    //
    // This only takes languages with localization data so you must also add
    // the languages that use a remap but are not translated at all.
    //
    "ast": {menuTitle: "asturianu"},
    "bg": {menuTitle: "\u0431\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438"},
    "bcc": {menuTitle: "\u0628\u0644\u0648\u0686\u06CC"},
    "br": {menuTitle: "brezhoneg"},
    "ca": {menuTitle: "catal\u00E0"},
    "cdo": {menuTitle: "M\u00ECng-d\u0115\u0324ng-ng\u1E73\u0304"},
    "cs": {menuTitle: "\u010De\u0161tina"},
    "da": {menuTitle: "dansk"},
    "de": {menuTitle: "Deutsch"},
    "en": {menuTitle: "English", isLoaded: true},
    "eo": {menuTitle: "Esperanto"},
    "es": {menuTitle: "espa\u00F1ol"},
    "fa": {menuTitle: "\u0641\u0627\u0631\u0633\u06CC"},
    "fi": {menuTitle: "suomi"},
    "fr": {menuTitle: "fran\u00E7ais"},
    "gl": {menuTitle: "galego"},
    "he": {menuTitle: "\u05E2\u05D1\u05E8\u05D9\u05EA"},
    "ia": {menuTitle: "interlingua"},
    "it": {menuTitle: "italiano"},
    "ja": {menuTitle: "\u65E5\u672C\u8A9E"},
    "kn": {menuTitle: "\u0C95\u0CA8\u0CCD\u0CA8\u0CA1"},
    "ko": {menuTitle: "\uD55C\uAD6D\uC5B4"},
    "lb": {menuTitle: "L\u00EBtzebuergesch"},
    "lt": {menuTitle: "lietuvi\u0173"},
    "mk": {menuTitle: "\u043C\u0430\u043A\u0435\u0434\u043E\u043D\u0441\u043A\u0438"},
    "nl": {menuTitle: "Nederlands"},
    "oc": {menuTitle: "occitan"},
    "pl": {menuTitle: "polski"},
    "pt": {menuTitle: "portugus\u00EA"},
    "pt-br": {menuTitle: "portugu\u00EAs do Brasil"},
    "ru": {menuTitle: "\u0440\u0443\u0441\u0441\u043A\u0438\u0439"},
    "sco": {menuTitle: "Scots"},
    "scn": {menuTitle: "sicilianu"},
    "sl": {menuTitle: "sloven\u0161\u010Dina"},
    "sv": {menuTitle: "svenska"},
    "tr": {menuTitle: "T\u00FCrk\u00E7e"},
    "uk": {menuTitle: "\u0443\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430"},
    "vi": {menuTitle: "Ti\u1EBFng Vi\u1EC7t"},
    "zh-hans": {menuTitle: "\u4E2D\u6587\uFF08\u7B80\u4F53\uFF09"}
  },

  //
  //  The pattern for substitution escapes:
  //      %n or %{n} or %{plural:%n|option1|option1|...} or %c
  //
  pattern: /%(\d+|\{\d+\}|\{[a-z]+:\%\d+(?:\|(?:%\{\d+\}|%.|[^\}])*)+\}|.)/g,

  SPLIT: ("axb".split(/(x)/).length === 3 ?
    function (string,regex) {return string.split(regex)} :
    //
    //  IE8 and below don't do split() correctly when the pattern includes
    //    parentheses (the split should include the matched exrepssions).
    //    So implement it by hand here.
    // 
    function (string,regex) {
      var result = [], match, last = 0;
      regex.lastIndex = 0;
      while ((match = regex.exec(string))) {
        result.push(string.substr(last,match.index-last));
        result.push.apply(result,match.slice(1));
        last = match.index + match[0].length;
      }
      result.push(string.substr(last));
      return result;
    }),
  
  _: function (id,phrase) {
    if (phrase instanceof Array) {return this.processSnippet(id,phrase)}
    return this.processString(this.lookupPhrase(id,phrase),[].slice.call(arguments,2));
  },
  
  processString: function (string,args,domain) {
    //
    //  Process arguments for substitution
    //    If the argument is a snippet (and we are processing snippets) do so,
    //    Otherwise, if it is a number, convert it for the lacale
    //
    var i, m;
    for (i = 0, m = args.length; i < m; i++) {
      if (domain && args[i] instanceof Array) {args[i] = this.processSnippet(domain,args[i])}
    }
    //
    //  Split string at escapes and process them individually
    //
    var parts = this.SPLIT(string,this.pattern);
    for (i = 1, m = parts.length; i < m; i += 2) {
      var c = parts[i].charAt(0);  // first char will be { or \d or a char to be kept literally
      if (c >= "0" && c <= "9") {    // %n
        parts[i] = args[parts[i]-1];
        if (typeof parts[i] === "number") parts[i] = this.number(parts[i]);
      } else if (c === "{") {        // %{n} or %{plural:%n|...}
        c = parts[i].substr(1);
        if (c >= "0" && c <= "9") {  // %{n}
          parts[i] = args[parts[i].substr(1,parts[i].length-2)-1];
          if (typeof parts[i] === "number") parts[i] = this.number(parts[i]);
        } else {                     // %{plural:%n|...}
          var match = parts[i].match(/^\{([a-z]+):%(\d+)\|(.*)\}$/);
          if (match) {
            if (match[1] === "plural") {
              var n = args[match[2]-1];
              if (typeof n === "undefined") {
                parts[i] = "???";        // argument doesn't exist
              } else {
                n = this.plural(n) - 1;  // index of the form to use
                var plurals = match[3].replace(/(^|[^%])(%%)*%\|/g,"$1$2%\uEFEF").split(/\|/); // the parts (replacing %| with a special character)
                if (n >= 0 && n < plurals.length) {
                  parts[i] = this.processString(plurals[n].replace(/\uEFEF/g,"|"),args,domain);
                } else {
                  parts[i] = "???";      // no string for this index
                }
              }
            } else {parts[i] = "%"+parts[i]}  // not "plural", put back the % and leave unchanged
          }
        }
      }
      if (parts[i] == null) {parts[i] = "???"}
    }
    //
    //  If we are not forming a snippet, return the completed string
    //  
    if (!domain) {return parts.join("")}
    //
    //  We need to return an HTML snippet, so buld it from the
    //  broken up string with inserted parts (that could be snippets)
    //
    var snippet = [], part = "";
    for (i = 0; i < m; i++) {
      part += parts[i]; i++;  // add the string and move on to substitution result
      if (i < m) {
        if (parts[i] instanceof Array)  {        // substitution was a snippet
          snippet.push(part);                        // add the accumulated string
          snippet = snippet.concat(parts[i]);        // concatenate the substution snippet
          part = "";                                 // start accumulating a new string
        } else {                                 // substitution was a string
          part += parts[i];                          // add to accumulating string
        }
      }
    }
    if (part !== "") {snippet.push(part)} // add final string
    return snippet;
  },
  
  processSnippet: function (domain,snippet) {
    var result = [];   // the new snippet
    //
    //  Look through the original snippet for
    //   strings or snippets to translate
    //
    for (var i = 0, m = snippet.length; i < m; i++) {
      if (snippet[i] instanceof Array) {
        //
        //  This could be a sub-snippet:
        //    ["tag"] or ["tag",{properties}] or ["tag",{properties},snippet]
        //  Or it could be something to translate:
        //    [id,string,args] or [domain,snippet]
        var data = snippet[i];
        if (typeof data[1] === "string") {        // [id,string,args]
          var id = data[0]; if (!(id instanceof Array)) {id = [domain,id]}
          var phrase = this.lookupPhrase(id,data[1]);
          result = result.concat(this.processMarkdown(phrase,data.slice(2),domain));
        } else if (data[1] instanceof Array) {    // [domain,snippet]
          result = result.concat(this.processSnippet.apply(this,data));
        } else if (data.length >= 3) {            // ["tag",{properties},snippet]
          result.push([data[0],data[1],this.processSnippet(domain,data[2])]);
        } else {                                  // ["tag"] or ["tag",{properties}]
          result.push(snippet[i]);
        }
      } else {                                    // a string
        result.push(snippet[i]);
      }
    }
    return result;
  },
  
  markdownPattern: /(%.)|(\*{1,3})((?:%.|.)+?)\2|(`+)((?:%.|.)+?)\4|\[((?:%.|.)+?)\]\(([^\s\)]+)\)/,
  //   %c or *bold*, **italics**, ***bold-italics***, or `code`, or [link](url)
   
  processMarkdown: function (phrase,args,domain) {
    var result = [], data;
    //
    //  Split the string by the Markdown pattern
    //    (the text blocks are separated by 
    //      c,stars,star-text,backtics,code-text,link-text,URL).
    //  Start with teh first text string from the split.
    //
    var parts = phrase.split(this.markdownPattern);
    var string = parts[0];
    //
    //  Loop through the matches and process them
    //
    for (var i = 1, m = parts.length; i < m; i += 8) {
      if (parts[i+1]) {        // stars (for bold/italic)
        //
        //  Select the tag to use by number of stars (three stars requires two tags)
        //
        data = this.processString(parts[i+2],args,domain);
        if (!(data instanceof Array)) {data = [data]}
        data = [["b","i","i"][parts[i+1].length-1],{},data]; // number of stars determines type
        if (parts[i+1].length === 3) {data = ["b",{},data]}  // bold-italic
      } else if (parts[i+3]) { //  backtics (for code)
        //
        //  Remove one leading or trailing space, and process substitutions
        //  Make a <code> tag
        //
        data = this.processString(parts[i+4].replace(/^\s/,"").replace(/\s$/,""),args,domain);
        if (!(data instanceof Array)) {data = [data]}
        data = ["code",{},data];
      } else if (parts[i+5]) { //  hyperlink
        //
        //  Process the link text, and make an <a> tag with the URL
        //
        data = this.processString(parts[i+5],args,domain);
        if (!(data instanceof Array)) {data = [data]}
        data = ["a",{href:this.processString(parts[i+6],args),target:"_blank"},data];
      } else {
        //
        //  Escaped character (%c) gets added into the string.
        //
        string += parts[i]; data = null;
      }
      //
      //  If there is a tag to insert,
      //     Add any pending string, then push the tag
      //
      if (data) {
        result = this.concatString(result,string,args,domain);
        result.push(data); string = "";
      }
      //
      //  Process the string that follows matches pattern
      //
      if (parts[i+7] !== "") {string += parts[i+7]}
    };
    //
    //  Add any pending string and return the resulting snippet
    //
    result = this.concatString(result,string,args,domain);
    return result;
  },
  concatString: function (result,string,args,domain) {
    if (string != "") {
      //
      //  Process the substutions.
      //  If the result is not a snippet, turn it into one.
      //  Then concatenate the snippet to the current one
      //
      string = this.processString(string,args,domain);
      if (!(string instanceof Array)) {string = [string]}
      result = result.concat(string);
    }
    return result;
  },

  lookupPhrase: function (id,phrase,domain) {
    //
    //  Get the domain and messageID
    //
    if (!domain) {domain = "_"}
    if (id instanceof Array) {domain = (id[0] || "_"); id = (id[1] || "")}
    //
    //  Check if the data is available and if not,
    //    load it and throw a restart error so the calling
    //    code can wait for the load and try again.
    //
    var load = this.loadDomain(domain);
    if (load) {MathJax.Hub.RestartAfter(load)}
    //
    //  Look up the message in the localization data
    //    (if not found, the original English is used)
    //
    var localeData = this.strings[this.locale];
    if (localeData) {
      if (localeData.domains && domain in localeData.domains) {
        var domainData = localeData.domains[domain];
        if (domainData.strings && id in domainData.strings)
          {phrase = domainData.strings[id]}
      }
    }
    //
    //  return the translated phrase
    //
    return phrase;
  },
  
  //
  //  Load a langauge data file from the proper
  //  directory and file.
  //
  loadFile: function (file,data,callback) {
    callback = MathJax.Callback(callback);
    file = (data.file || file);  // the data's file name or the default name
    if (!file.match(/\.js$/)) {file += ".js"} // add .js if needed
    //
    //  Add the directory if the file doesn't
    //  contain a full URL already.
    //
    if (!file.match(/^([a-z]+:|\[MathJax\])/)) {
      var dir = (this.strings[this.locale].directory  || 
                 this.directory + "/" + this.locale ||
                 "[MathJax]/localization/" + this.locale);
      file = dir + "/" + file;
    }
    //
    //  Load the file and mark the data as loaded (even if it
    //  failed to load, so we don't continue to try to load it
    //  over and over).
    //
    var load = MathJax.Ajax.Require(file,function () {data.isLoaded = true; return callback()});
    //
    //  Return the callback if needed, otherwise null.
    //
    return (load.called ? null : load);
  },
  
  //
  //  Check to see if the localization data are loaded
  //  for the given domain; if not, load the data file,
  //  and return a callback for the loading operation.
  //  Otherwise return null (data are loaded).
  //  
  loadDomain: function (domain,callback) {
    var load, localeData = this.strings[this.locale];
    if (localeData) {
      if (!localeData.isLoaded) {
        load = this.loadFile(this.locale,localeData);
        if (load) {
          return MathJax.Callback.Queue(
            load,["loadDomain",this,domain] // call again to load domain
          ).Push(callback||{});
        }
      }
      if (localeData.domains && domain in localeData.domains) {
        var domainData = localeData.domains[domain];
        if (!domainData.isLoaded) {
          load = this.loadFile(domain,domainData);
          if (load) {return MathJax.Callback.Queue(load).Push(callback)}
        }
      }
    } 
    // localization data are loaded, so just do the callback
    return MathJax.Callback(callback)();
  },

  //
  //  Perform a function, properly handling
  //  restarts due to localization file loads.
  //
  //  Note that this may return before the function
  //  has been called successfully, so you should
  //  consider fn as running asynchronously.  (Callbacks
  //  can be used to synchronize it with other actions.)
  //
  Try: function (fn) {
    fn = MathJax.Callback(fn); fn.autoReset = true;
    try {fn()} catch (err) {
      if (!err.restart) {throw err}
      MathJax.Callback.After(["Try",this,fn],err.restart);
    }
  },

  //
  //  Reset the current language
  //
  resetLocale: function(locale) {
    // Selection algorithm:
    // 1) Downcase locale name (e.g. "en-US" => "en-us")
    // 2) Try a parent language (e.g. "en-us" => "en")
    // 3) Try the fallback specified in the data (e.g. "pt" => "pt-br")
    // 4) Otherwise don't change the locale.
    if (!locale) return;
    locale = locale.toLowerCase();
    while (!this.strings[locale]) {
      var dashPos = locale.lastIndexOf("-");
      if (dashPos === -1) return;
      locale = locale.substring(0, dashPos);
    }
    var remap = this.strings[locale].remap;
    this.locale = remap ? remap : locale;
  },

  //
  //  Set the current language
  //
  setLocale: function(locale) {
    this.resetLocale(locale);
    if (MathJax.Menu) {this.loadDomain("MathMenu")}
  },

  //
  //  Add or update a language or domain
  //
  addTranslation: function (locale,domain,definition) {
    var data = this.strings[locale], isNew = false;
    if (!data) {data = this.strings[locale] = {}; isNew = true}
    if (!data.domains) {data.domains = {}}
    if (domain) {
      if (!data.domains[domain]) {data.domains[domain] = {}}
      data = data.domains[domain];
    }
    MathJax.Hub.Insert(data,definition);
    if (isNew && MathJax.Menu.menu) {MathJax.Menu.CreateLocaleMenu()}
  },
  
  //
  //  Set CSS for an element based on font requirements
  //
  setCSS: function (div) {
    var locale = this.strings[this.locale];
    if (locale) {
      if (locale.fontFamily) {div.style.fontFamily = locale.fontFamily}
      if (locale.fontDirection) {
        div.style.direction = locale.fontDirection;
        if (locale.fontDirection === "rtl") {div.style.textAlign = "right"}
      }
    }
    return div;
  },
  
  //
  //  Get the language's font family or direction
  //
  fontFamily: function () {
    var locale = this.strings[this.locale];
    return (locale ? locale.fontFamily : null);
  },
  fontDirection: function () {
    var locale = this.strings[this.locale];
    return (locale ? locale.fontDirection : null);
  },

  //
  //  Get the language's plural index for a number
  //
  plural: function (n) {
    var locale = this.strings[this.locale];
    if (locale && locale.plural) {return locale.plural(n)}
    // default
    if (n == 1) {return 1} // one
    return 2; // other
  },

  //
  //  Convert a number to language-specific form
  //
  number: function(n) {
    var locale = this.strings[this.locale];
    if (locale && locale.number) {return locale.number(n)}
    // default
    return n;
  }
};


/**********************************************************/

MathJax.Message = {
  localize: function (message) {
    return MathJax.Localization._(message,message);
  },
  
  filterText: function (text,n,id) {
    if (MathJax.Hub.config.messageStyle === "simple") {
      if (id === "LoadFile") {
        if (!this.loading) {this.loading = this.localize("Loading") + " "}
        text = this.loading; this.loading += ".";
      } else if (id === "ProcessMath") {
        if (!this.processing) {this.processing = this.localize("Processing") + " "}
        text = this.processing; this.processing += ".";
      } else if (id === "TypesetMath") {
        if (!this.typesetting) {this.typesetting = this.localize("Typesetting") + " "}
        text = this.typesetting; this.typesetting += ".";
      }
    }
    return text;
  },
  
  Set: function (text,n,clearDelay) {
    if (MathJax.debug) {
      if (Array.isArray(text)) {
        text = MathJax.Localization._.apply(MathJax.Localization,text);
      }
      console.log("Message: "+text);
    }
  },

  Clear: function (n,delay) {},
  Remove: function () {},
  File: function (file) {
    return this.Set(["LoadFile","Loading %1",file],null,null);
  },
  
  Log: function () {}
};

/**********************************************************/

MathJax.Hub = {
  config: {
    root: "./legacy",
    config: [],      // list of configuration files to load
    jax: [],         // list of input and output jax to load
    extensions: [],  // list of extensions to load
    preJax: null,    // pattern to remove from before math script tag
    postJax: null,   // pattern to remove from after math script tag
    displayAlign: 'center',       // how to align displayed equations (left, center, right)
    displayIndent: '0',           // indentation for displayed equations (when not centered)
    preRemoveClass: 'MathJax_Preview', // class of objects to remove preceeding math script
    showProcessingMessages: true, // display "Processing math: nn%" messages or not
    messageStyle: "normal",       // set to "none" or "simple" (for "Loading..." and "Processing...")
    delayStartupUntil: "none",    // set to "onload" to delay setup until the onload handler runs
                                  // set to "configured" to delay startup until MathJax.Hub.Configured() is called
                                  // set to a Callback to wait for before continuing with the startup
    skipStartupTypeset: false,    // set to true to skip PreProcess and Process during startup
    elements: [],             // array of elements to process when none is given explicitly
    positionToHash: true,    // after initial typeset pass, position to #hash location?
     
    showMathMenu: true,      // attach math context menu to typeset math?
    showMathMenuMSIE: true,  // separtely determine if MSIE should have math menu
                             //  (since the code for that is a bit delicate)
    
    menuSettings: {
      zoom: "None",        //  when to do MathZoom
      CTRL: false,         //    require CTRL for MathZoom?
      ALT: false,          //    require Alt or Option?
      CMD: false,          //    require CMD?
      Shift: false,        //    require Shift?
      discoverable: false, //  make math menu discoverable on hover?
      zscale: "200%",      //  the scaling factor for MathZoom
      renderer: null,      //  set when Jax are loaded
      font: "Auto",        //  what font HTML-CSS should use
      context: "MathJax",  //  or "Browser" for pass-through to browser menu
      locale: null,        //  the language to use for messages
      mpContext: false,    //  true means pass menu events to MathPlayer in IE
      mpMouse: false,      //  true means pass mouse events to MathPlayer in IE
      texHints: true,      //  include class names for TeXAtom elements
      FastPreview: null,   //  use PreviewHTML output as preview?
      assistiveMML: null,  //  include hidden MathML for screen readers?
      inTabOrder: true,    //  set to false if math elements should be included in the tabindex
      semantics: false     //  add semantics tag with original form in MathML output
    },
    
    errorSettings: {
       // localized HTML snippet structure for message to use
      message: ["[",["MathProcessingError","Math Processing Error"],"]"],
      style: {color: "#CC0000", "font-style":"italic"}  // style for message
    },
    
    ignoreMMLattributes: {}  // attributes not to copy to HTML-CSS or SVG output
                             //   from MathML input (in addition to the ones in MML.nocopyAttributes).
                             //   An id set to true will be ignored, one set to false will
                             //   be allowed (even if other criteria normally would prevent
                             //   it from being copied); use false carefully!
  },
  
  preProcessors: MathJax.Callback.Hooks(true), // list of callbacks for preprocessing (initialized by extensions)
  inputJax: {},          // mime-type mapped to input jax (by registration)
  outputJax: {order:{}}, // mime-type mapped to output jax list (by registration)

  processSectionDelay: 50, // pause between input and output phases of processing
  processUpdateTime: 250, // time between screen updates when processing math (milliseconds)
  processUpdateDelay: 10, // pause between screen updates to allow other processing (milliseconds)

  signal: MathJax.Callback.Signal("Hub"), // Signal used for Hub events

  Config: function (def) {
    this.Insert(this.config,def);
    if (this.config.Augment) {this.Augment(this.config.Augment)}
  },
  CombineConfig: function (name,def) {
    var config = this.config, id, parent; name = name.split(/\./);
    for (var i = 0, m = name.length; i < m; i++) {
      id = name[i]; if (!config[id]) {config[id] = {}}
      parent = config; config = config[id];
    }
    parent[id] = config = this.Insert(def,config);
    return config;
  },
  
  Register: {
    PreProcessor: function () {return MathJax.Hub.preProcessors.Add.apply(MathJax.Hub.preProcessors,arguments)},
    MessageHook: function () {return MathJax.Hub.signal.MessageHook.apply(MathJax.Hub.signal,arguments)},
    StartupHook: function () {return MathJax.Hub.Startup.signal.MessageHook.apply(MathJax.Hub.Startup.signal,arguments)},
    LoadHook: function () {return MathJax.Ajax.LoadHook.apply(MathJax.Ajax,arguments)}
  },
  UnRegister: {
    PreProcessor: function (hook) {MathJax.Hub.preProcessors.Remove(hook)},
    MessageHook: function (hook) {MathJax.Hub.signal.RemoveHook(hook)},
    StartupHook: function (hook) {MathJax.Hub.Startup.signal.RemoveHook(hook)},
    LoadHook: function (hook) {MathJax.Ajax.removeHook(hook)}
  },
  
  setRenderer: function (renderer,type) {
    if (!renderer) return;
    if (!MathJax.OutputJax[renderer]) {
      this.config.menuSettings.renderer = "";
      var file = "[MathJax]/jax/output/"+renderer+"/config.js";
      return MathJax.Ajax.Require(file,["setRenderer",this,renderer,type]);
    } else {
      this.config.menuSettings.renderer = renderer;
      if (type == null) {type = "jax/mml"}
      var jax = this.outputJax;
      if (jax[type] && jax[type].length) {
        if (renderer !== jax[type][0].id) {
          jax[type].unshift(MathJax.OutputJax[renderer]);
          return this.signal.Post(["Renderer Selected",renderer]);
        }
      }
      return null;
    }
  },

  Queue: function () {
    return this.queue.Push.apply(this.queue,arguments);
  },
  
  RestartAfter: function (callback) {
    throw this.Insert(Error("restart"),{restart: MathJax.Callback(callback)});
  },
  
  Insert: function (dst,src) {
    for (var id in src) {if (src.hasOwnProperty(id)) {
      // allow for concatenation of arrays?
      if (typeof src[id] === 'object' && !(src[id] instanceof Array) &&
         (typeof dst[id] === 'object' || typeof dst[id] === 'function')) {
        this.Insert(dst[id],src[id]);
      } else {
        dst[id] = src[id];
      }
    }}
    return dst;
  },

  // Old browsers (e.g. Internet Explorer <= 8) do not support trim().
  SplitList: ("trim" in String.prototype ?
              function (list) {return list.trim().split(/\s+/)} :
              function (list) {return list.replace(/^\s+/,'').
                                           replace(/\s+$/,'').split(/\s+/)})
};

//
//  Storage area for extensions and preprocessors
//
MathJax.Extension = {};

MathJax.Hub.Startup = {
  queue:   MathJax.Callback.Queue(),           // Queue used for startup actions
  signal:  MathJax.Callback.Signal("Startup")  // Signal used for startup events
};

MathJax.Ajax.config.root = MathJax.Hub.config.root;

/**********************************************************/

(function (BASENAME) {
  var BASE = window[BASENAME], ROOT = "["+BASENAME+"]";
  var HUB = BASE.Hub, AJAX = BASE.Ajax, CALLBACK = BASE.Callback;

  var JAX = MathJax.Object.Subclass({
    JAXFILE: "jax.js",
    require: null, // array of files to load before jax.js is complete
    config: {},
    //
    //  Make a subclass and return an instance of it.
    //  (FIXME: should we replace config with a copy of the constructor's
    //   config?  Otherwise all subclasses share the same config structure.)
    //
    Init: function (def,cdef) {
      if (arguments.length === 0) {return this}
      return (this.constructor.Subclass(def,cdef))();
    },
    //
    //  Augment by merging with class definition (not replacing)
    //
    Augment: function (def,cdef) {
      var cObject = this.constructor, ndef = {};
      if (def != null) {
        for (var id in def) {if (def.hasOwnProperty(id)) {
          if (typeof def[id] === "function")
            {cObject.protoFunction(id,def[id])} else {ndef[id] = def[id]}
        }}
        // MSIE doesn't list toString even if it is not native so handle it separately
        if (def.toString !== cObject.prototype.toString && def.toString !== {}.toString)
          {cObject.protoFunction('toString',def.toString)}
      }
      HUB.Insert(cObject.prototype,ndef);
      cObject.Augment(null,cdef);
      return this;
    },
    Translate: function (script,state) {
      throw Error(this.directory+"/"+this.JAXFILE+" failed to define the Translate() method");
    },
    Register: function (mimetype) {},
    Config: function () {
      this.config = HUB.CombineConfig(this.id,this.config);
      if (this.config.Augment) {this.Augment(this.config.Augment)}
    },
    Startup: function () {},
    loadComplete: function (file) {
      if (file === "config.js") {
        return AJAX.loadComplete(this.directory+"/"+file);
      } else {
        var queue = CALLBACK.Queue();
        queue.Push(
          ["Post",HUB.Startup.signal,this.id+" Jax Config"],
          ["Config",this],
          ["Post",HUB.Startup.signal,this.id+" Jax Startup"],
          ["Startup",this],
          ["Post",HUB.Startup.signal,this.id+" Jax Ready"]
        );
        if (this.copyTranslate) {
          queue.Push(
            [function (THIS) {
              THIS.preProcess  = THIS.preTranslate;
              THIS.Process     = THIS.Translate;
              THIS.postProcess = THIS.postTranslate;
            },this.constructor.prototype]
          );
        }
        return queue.Push(["loadComplete",AJAX,this.directory+"/"+file]);
      }
    }
  },{
    id: "Jax",
    version: "2.6.0",
    directory: ROOT+"/jax",
    extensionDir: ROOT+"/extensions"
  });

  /***********************************/

  BASE.InputJax = JAX.Subclass({
    elementJax: "mml",  // the element jax to load for this input jax
    sourceMenuTitle: /*_(MathMenu)*/ ["Original","Original Form"],
    copyTranslate: true,
    Process: function (script,state) {
      throw Error("Input jax failed to load properly")
    },
    needsUpdate: function (jax) {
      var script = jax.SourceElement();
      return (jax.originalText !== BASE.HTML.getScript(script));
    },
    Register: function (mimetype) {
      if (!HUB.inputJax) {HUB.inputJax = {}}
      HUB.inputJax[mimetype] = this;
    }
  },{
    id: "InputJax",
    version: "2.6.0",
    directory: JAX.directory+"/input",
    extensionDir: JAX.extensionDir
  });

  /***********************************/

  BASE.OutputJax = JAX.Subclass({
    copyTranslate: true,
    preProcess: function (state) {
      throw Error("Output jax failed to load properly");
    },
    Register: function (mimetype) {
      var jax = HUB.outputJax;
      if (!jax[mimetype]) {jax[mimetype] = []}
      //  If the output jax is earlier in the original configuration list, put it first here
      if (jax[mimetype].length && (this.id === HUB.config.menuSettings.renderer ||
            (jax.order[this.id]||0) < (jax.order[jax[mimetype][0].id]||0)))
        {jax[mimetype].unshift(this)} else {jax[mimetype].push(this)}
    },
    Remove: function (jax) {}
  },{
    id: "OutputJax",
    version: "2.6.0",
    directory: JAX.directory+"/output",
    extensionDir: JAX.extensionDir,
    fontDir: ROOT+(BASE.isPacked?"":"/..")+"/fonts",
    imageDir: ROOT+(BASE.isPacked?"":"/..")+"/images"
  });
  
  /***********************************/

  BASE.ElementJax = JAX.Subclass({
    // make a subclass, not an instance
    Init: function (def,cdef) {return this.constructor.Subclass(def,cdef)},
    
    inputJax: null,
    outputJax: null,
    inputID: null,
    originalText: "",
    mimeType: "",
    sourceMenuTitle: /*_(MathMenu)*/ ["MathMLcode","MathML Code"],
    
    Text: function (text,callback) {
      var script = this.SourceElement();
      BASE.HTML.setScript(script,text);
      script.MathJax.state = this.STATE.UPDATE;
      return HUB.Update(script,callback);
    },
    Reprocess: function (callback) {
      var script = this.SourceElement();
      script.MathJax.state = this.STATE.UPDATE;
      return HUB.Reprocess(script,callback);
    },
    Update: function (callback) {return this.Rerender(callback)},
    Rerender: function (callback) {
      var script = this.SourceElement();
      script.MathJax.state = this.STATE.OUTPUT;
      return HUB.Process(script,callback);
    },
    Remove: function (keep) {
      if (this.hover) {this.hover.clear(this)}
      BASE.OutputJax[this.outputJax].Remove(this);
      if (!keep) {
        HUB.signal.Post(["Remove Math",this.inputID]); // wait for this to finish?
        this.Detach();
      }
    },
    needsUpdate: function () {
      return BASE.InputJax[this.inputJax].needsUpdate(this);
    },

    SourceElement: function () {return document.getElementById(this.inputID)},
    
    Attach: function (script,inputJax) {
      var jax = script.MathJax.elementJax;
      if (script.MathJax.state === this.STATE.UPDATE) {
        jax.Clone(this);
      } else {
        jax = script.MathJax.elementJax = this;
        if (script.id) {this.inputID = script.id}
          else {script.id = this.inputID = BASE.ElementJax.GetID(); this.newID = 1}
      }
      jax.originalText = BASE.HTML.getScript(script);
      jax.inputJax = inputJax;
      if (jax.root) {jax.root.inputID = jax.inputID}
      return jax;
    },
    Detach: function () {
      var script = this.SourceElement(); if (!script) return;
      try {delete script.MathJax} catch(err) {script.MathJax = null}
      if (this.newID) {script.id = ""}
    },
    Clone: function (jax) {
      var id;
      for (id in this) {
        if (!this.hasOwnProperty(id)) continue;
        if (typeof(jax[id]) === 'undefined' && id !== 'newID') {delete this[id]}
      }
      for (id in jax) {
        if (!jax.hasOwnProperty(id)) continue;
        if (typeof(this[id]) === 'undefined' || (this[id] !== jax[id] && id !== 'inputID'))
          {this[id] = jax[id]}
      }
    }
  },{
    id: "ElementJax",
    version: "2.6.0",
    directory: JAX.directory+"/element",
    extensionDir: JAX.extensionDir,
    ID: 0,  // jax counter (for IDs)
    STATE: {
      PENDING: 1,      // script is identified as math but not yet processed
      PROCESSED: 2,    // script has been processed
      UPDATE: 3,       // elementJax should be updated
      OUTPUT: 4        // output should be updated (input is OK)
    },
    
    GetID: function () {this.ID++; return "MathJax-Element-"+this.ID},
    Subclass: function () {
      var obj = JAX.Subclass.apply(this,arguments);
      obj.loadComplete = this.prototype.loadComplete;
      return obj;
    }
  });
  BASE.ElementJax.prototype.STATE = BASE.ElementJax.STATE;
  
})("MathJax");

MathJax.Hub.Browser = {Select: function () {}};


/***/ }),

/***/ 124:
/***/ (() => {

/* -*- Mode: Javascript; indent-tabs-mode:nil; js-indent-level: 2 -*- */
/* vim: set ts=2 et sw=2 tw=80: */

/*************************************************************
 *
 *  MathJax/jax/input/AsciiMath/jax.js
 *  
 *  An Input Jax for AsciiMath notation 
 *  (see http://www1.chapman.edu/~jipsen/mathml/asciimath.html).
 *  
 *  Originally adapted for MathJax by David Lippman.
 *  Additional work done by Davide P. Cervone.
 *  
 *  The current development repository for AsciiMathML is
 *      https://github.com/mathjax/asciimathml
 *  
 *  A portion of this file is taken from
 *  ASCIIMathML.js Version 2.2 Mar 3, 2014, (c) Peter Jipsen http://www.chapman.edu/~jipsen
 *  and is used by permission of Peter Jipsen, who has agreed to allow us to
 *  release it under the Apache2 license (see below).  That portion is indicated
 *  via comments.
 *  
 *  The remainder falls under the copyright that follows.
 *  
 *  ---------------------------------------------------------------------
 *  
 *  Copyright (c) 2012-2020 The MathJax Consortium
 * 
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

(function (ASCIIMATH) {

  var MML;  // Filled in later

  //
  //  Make a documentFragment work-alike that uses MML objects
  //  rather than DOM objects.
  //
  var DOCFRAG = MathJax.Object.Subclass({
    firstChild: null,
    lastChild: null,
    Init: function () {
      this.childNodes = [];
    },
    appendChild: function (node) {
      if (node.parent) {node.parent.removeChild(node)}
      if (this.lastChild) {this.lastChild.nextSibling = node}
      if (!this.firstChild) {this.firstChild = node}
      this.childNodes.push(node); node.parent = this;
      this.lastChild = node;
      return node;
    },
    removeChild: function (node) {
      for (var i = 0, m = this.childNodes.length; i < m; i++)
        {if (this.childNodes[i] === node) break}
      if (i === m) return;
      this.childNodes.splice(i,1);
      if (node === this.firstChild) {this.firstChild = node.nextSibling}
      if (node === this.lastChild) {
        if (!this.childNodes.length) {this.lastChild = null}
          else {this.lastChild = this.childNodes[this.childNodes.length-1]}
      }
      if (i) {this.childNodes[i-1].nextSibling = node.nextSibling}
      node.nextSibling = node.parent = null;
      return node;
    },
    replaceChild: function (node,old) {
      for (var i = 0, m = this.childNodes.length; i < m; i++)
        {if (this.childNodes[i] === old) break}
      if (i) {this.childNodes[i-1].nextSibling = node} else {this.firstChild = node}
      if (i >= m-1) {this.lastChild = node}
      this.childNodes[i] = node; node.nextSibling = old.nextSibling;
      old.nextSibling = old.parent = null;
      return old;
    },
    hasChildNodes: function (node) {
      return (this.childNodes.length>0);	    
    },
    toString: function () {return "{"+this.childNodes.join("")+"}"}
  });
  
  var INITASCIIMATH = function () {
    MML = MathJax.ElementJax.mml;
    var MBASEINIT = MML.mbase.prototype.Init;
    
    //
    //  Make MML elements looks like DOM elements (add the
    //  methods that AsciiMath needs)
    //
    MML.mbase.Augment({
      firstChild: null,
      lastChild: null,
      nodeValue: null,
      nextSibling: null,
      Init: function () {
        var obj = MBASEINIT.apply(this,arguments) || this;
        obj.childNodes = obj.data;
        obj.nodeName = obj.type;
        return obj;
      },
      appendChild: function (node) {
        if (node.parent) {node.parent.removeChild(node)}
        var nodes = arguments;
        if (node.isa(DOCFRAG)) {
          nodes = node.childNodes;
          node.data = node.childNodes = [];
          node.firstChild = node.lastChild = null;
        }
        for (var i = 0, m = nodes.length; i < m; i++) {
          node = nodes[i];
          if (this.lastChild) {this.lastChild.nextSibling = node}
          if (!this.firstChild) {this.firstChild = node}
          this.Append(node);
          this.lastChild = node;
        }
        return node;
      },
      removeChild: function (node) {
        for (var i = 0, m = this.childNodes.length; i < m; i++)
          {if (this.childNodes[i] === node) break}
        if (i === m) return;
        this.childNodes.splice(i,1);
        if (node === this.firstChild) {this.firstChild = node.nextSibling}
        if (node === this.lastChild) {
          if (!this.childNodes.length) {this.lastChild = null}
            else {this.lastChild = this.childNodes[this.childNodes.length-1]}
        }
        if (i) {this.childNodes[i-1].nextSibling = node.nextSibling}
        node.nextSibling = node.parent = null;
        return node;
      },
      replaceChild: function (node,old) {
        for (var i = 0, m = this.childNodes.length; i < m; i++)
          {if (this.childNodes[i] === old) break}
        // FIXME:  make this work with DOCFRAG's?
        if (i) {this.childNodes[i-1].nextSibling = node} else {this.firstChild = node}
        if (i >= m-1) {this.lastChild = node}
        this.SetData(i,node); node.nextSibling = old.nextSibling;
        old.nextSibling = old.parent = null;
        return old;
      },
      hasChildNodes: function (node) {
        return (this.childNodes.length>0);	    
      },
      setAttribute: function (name,value) {this[name] = value}
    });
  };
  
  //
  //  Set up to isolate ASCIIMathML.js
  //
  
  var window = {};  // hide the true window
  
  //
  //  Hide the true document, and add functions that
  //  use and produce MML objects instead of DOM objects
  //
  var document = {
    getElementById: true,
    createElementNS: function (ns,type) {
      var node = MML[type]();
      if (type === "mo" && ASCIIMATH.config.useMathMLspacing) {node.useMMLspacing = 0x80}
      return node;
    },
    createTextNode: function (text) {return MML.chars(text).With({nodeValue:text})},
    createDocumentFragment: function () {return DOCFRAG()}
  };
  
  var navigator = {appName: "MathJax"};  // hide the true navigator object
  
/******************************************************************
 *
 *   The following section is ASCIIMathML.js Version 2.2
 *   (c) Peter Jipsen, used with permission.
 *   
 *   Some sections are commented out to save space in the
 *   minified version (but that is not strictly necessary).
 *   
 ******************************************************************/

/*
ASCIIMathML.js
==============
This file contains JavaScript functions to convert ASCII math notation
and (some) LaTeX to Presentation MathML. The conversion is done while the 
HTML page loads, and should work with Firefox and other browsers that can
render MathML.

Just add the next line to your HTML page with this file in the same folder:

<script type="text/javascript" src="ASCIIMathML.js"></script>

Version 2.2 Mar 3, 2014.
Latest version at https://github.com/mathjax/asciimathml
If you use it on a webpage, please send the URL to jipsen@chapman.edu

Copyright (c) 2014 Peter Jipsen and other ASCIIMathML.js contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
//var asciimath = {};

//(function(){
var mathcolor = "blue";        // change it to "" (to inherit) or another color
//var mathfontsize = "1em";      // change to e.g. 1.2em for larger math
//var mathfontfamily = "serif";  // change to "" to inherit (works in IE) 
                               // or another family (e.g. "arial")
//var automathrecognize = false; // writing "amath" on page makes this true
//var checkForMathML = true;     // check if browser can display MathML
//var notifyIfNoMathML = true;   // display note at top if no MathML capability
//var alertIfNoMathML = false;   // show alert box if no MathML capability
//var translateOnLoad = true;    // set to false to do call translators from js 
//var translateASCIIMath = true; // false to preserve `..`
var displaystyle = true;      // puts limits above and below large operators
var showasciiformulaonhover = true; // helps students learn ASCIIMath
var decimalsign = ".";        // change to "," if you like, beware of `(1,2)`!
//var AMdelimiter1 = "`", AMescape1 = "\\\\`"; // can use other characters
//var AMdocumentId = "wikitext" // PmWiki element containing math (default=body)
var fixphi = true;  		//false to return to legacy phi/varphi mapping

/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

var isIE = (navigator.appName.slice(0,9)=="Microsoft");
/*
var noMathML = false, translated = false;

if (isIE) { // add MathPlayer info to IE webpages
  document.write("<object id=\"mathplayer\"\
  classid=\"clsid:32F66A20-7614-11D4-BD11-00104BD3F987\"></object>");
  document.write("<?import namespace=\"m\" implementation=\"#mathplayer\"?>");
}

// Add a stylesheet, replacing any previous custom stylesheet (adapted from TW)
function setStylesheet(s) {
	var id = "AMMLcustomStyleSheet";
	var n = document.getElementById(id);
	if(document.createStyleSheet) {
		// Test for IE's non-standard createStyleSheet method
		if(n)
			n.parentNode.removeChild(n);
		// This failed without the &nbsp;
		document.getElementsByTagName("head")[0].insertAdjacentHTML("beforeEnd","&nbsp;<style id='" + id + "'>" + s + "</style>");
	} else {
		if(n) {
			n.replaceChild(document.createTextNode(s),n.firstChild);
		} else {
			n = document.createElement("style");
			n.type = "text/css";
			n.id = id;
			n.appendChild(document.createTextNode(s));
			document.getElementsByTagName("head")[0].appendChild(n);
		}
	}
}

setStylesheet("#AMMLcloseDiv \{font-size:0.8em; padding-top:1em; color:#014\}\n#AMMLwarningBox \{position:absolute; width:100%; top:0; left:0; z-index:200; text-align:center; font-size:1em; font-weight:bold; padding:0.5em 0 0.5em 0; color:#ffc; background:#c30\}");

function init(){
	var msg, warnings = new Array();
	if (document.getElementById==null){
		alert("This webpage requires a recent browser such as Mozilla Firefox");
		return null;
	}
	if (checkForMathML && (msg = checkMathML())) warnings.push(msg);
	if (warnings.length>0) displayWarnings(warnings);
	if (!noMathML) initSymbols();
	return true;
}

function checkMathML(){
  if (navigator.appName.slice(0,8)=="Netscape") 
    if (navigator.appVersion.slice(0,1)>="5") noMathML = null;
    else noMathML = true;
  else if (navigator.appName.slice(0,9)=="Microsoft")
    try {
        var ActiveX = new ActiveXObject("MathPlayer.Factory.1");
        noMathML = null;
    } catch (e) {
        noMathML = true;
    }
  else if (navigator.appName.slice(0,5)=="Opera") 
    if (navigator.appVersion.slice(0,3)>="9.5") noMathML = null;
  else noMathML = true;
//noMathML = true; //uncomment to check
  if (noMathML && notifyIfNoMathML) {
    var msg = "To view the ASCIIMathML notation use Internet Explorer + MathPlayer or Mozilla Firefox 2.0 or later.";
    if (alertIfNoMathML)
       alert(msg);
    else return msg;
  }
}

function hideWarning(){
	var body = document.getElementsByTagName("body")[0];
	body.removeChild(document.getElementById('AMMLwarningBox'));
	body.onclick = null;
}

function displayWarnings(warnings) {
  var i, frag, nd = createElementXHTML("div");
  var body = document.getElementsByTagName("body")[0];
  body.onclick=hideWarning;
  nd.id = 'AMMLwarningBox';
  for (i=0; i<warnings.length; i++) {
	frag = createElementXHTML("div");
	frag.appendChild(document.createTextNode(warnings[i]));
	frag.style.paddingBottom = "1.0em";
	nd.appendChild(frag);
  }
  nd.appendChild(createElementXHTML("p"));
  nd.appendChild(document.createTextNode("For instructions see the "));
  var an = createElementXHTML("a");
  an.appendChild(document.createTextNode("ASCIIMathML"));
  an.setAttribute("href","http://www.chapman.edu/~jipsen/asciimath.html");
  nd.appendChild(an);
  nd.appendChild(document.createTextNode(" homepage"));
  an = createElementXHTML("div");
  an.id = 'AMMLcloseDiv';
  an.appendChild(document.createTextNode('(click anywhere to close this warning)'));
  nd.appendChild(an);
  var body = document.getElementsByTagName("body")[0];
  body.insertBefore(nd,body.childNodes[0]);
}

function translate(spanclassAM) {
  if (!translated) { // run this only once
    translated = true;
    var body = document.getElementsByTagName("body")[0];
    var processN = document.getElementById(AMdocumentId);
    if (translateASCIIMath) AMprocessNode((processN!=null?processN:body), false, spanclassAM);
  }
}
*/
function createElementXHTML(t) {
  if (isIE) return document.createElement(t);
  else return document.createElementNS("http://www.w3.org/1999/xhtml",t);
}

var AMmathml = "http://www.w3.org/1998/Math/MathML";

function AMcreateElementMathML(t) {
  if (isIE) return document.createElement("m:"+t);
  else return document.createElementNS(AMmathml,t);
}

function createMmlNode(t,frag) {
  var node;
  if (isIE) node = document.createElement("m:"+t);
  else node = document.createElementNS(AMmathml,t);
  if (frag) node.appendChild(frag);
  return node;
}

function newcommand(oldstr,newstr) {
  AMsymbols.push({input:oldstr, tag:"mo", output:newstr, tex:null, ttype:DEFINITION});
  refreshSymbols();
}

function newsymbol(symbolobj) {
  AMsymbols.push(symbolobj);
  refreshSymbols();
}

// character lists for Mozilla/Netscape fonts
var AMcal = ["\uD835\uDC9C","\u212C","\uD835\uDC9E","\uD835\uDC9F","\u2130","\u2131","\uD835\uDCA2","\u210B","\u2110","\uD835\uDCA5","\uD835\uDCA6","\u2112","\u2133","\uD835\uDCA9","\uD835\uDCAA","\uD835\uDCAB","\uD835\uDCAC","\u211B","\uD835\uDCAE","\uD835\uDCAF","\uD835\uDCB0","\uD835\uDCB1","\uD835\uDCB2","\uD835\uDCB3","\uD835\uDCB4","\uD835\uDCB5","\uD835\uDCB6","\uD835\uDCB7","\uD835\uDCB8","\uD835\uDCB9","\u212F","\uD835\uDCBB","\u210A","\uD835\uDCBD","\uD835\uDCBE","\uD835\uDCBF","\uD835\uDCC0","\uD835\uDCC1","\uD835\uDCC2","\uD835\uDCC3","\u2134","\uD835\uDCC5","\uD835\uDCC6","\uD835\uDCC7","\uD835\uDCC8","\uD835\uDCC9","\uD835\uDCCA","\uD835\uDCCB","\uD835\uDCCC","\uD835\uDCCD","\uD835\uDCCE","\uD835\uDCCF"];

var AMfrk = ["\uD835\uDD04","\uD835\uDD05","\u212D","\uD835\uDD07","\uD835\uDD08","\uD835\uDD09","\uD835\uDD0A","\u210C","\u2111","\uD835\uDD0D","\uD835\uDD0E","\uD835\uDD0F","\uD835\uDD10","\uD835\uDD11","\uD835\uDD12","\uD835\uDD13","\uD835\uDD14","\u211C","\uD835\uDD16","\uD835\uDD17","\uD835\uDD18","\uD835\uDD19","\uD835\uDD1A","\uD835\uDD1B","\uD835\uDD1C","\u2128","\uD835\uDD1E","\uD835\uDD1F","\uD835\uDD20","\uD835\uDD21","\uD835\uDD22","\uD835\uDD23","\uD835\uDD24","\uD835\uDD25","\uD835\uDD26","\uD835\uDD27","\uD835\uDD28","\uD835\uDD29","\uD835\uDD2A","\uD835\uDD2B","\uD835\uDD2C","\uD835\uDD2D","\uD835\uDD2E","\uD835\uDD2F","\uD835\uDD30","\uD835\uDD31","\uD835\uDD32","\uD835\uDD33","\uD835\uDD34","\uD835\uDD35","\uD835\uDD36","\uD835\uDD37"];

var AMbbb = ["\uD835\uDD38","\uD835\uDD39","\u2102","\uD835\uDD3B","\uD835\uDD3C","\uD835\uDD3D","\uD835\uDD3E","\u210D","\uD835\uDD40","\uD835\uDD41","\uD835\uDD42","\uD835\uDD43","\uD835\uDD44","\u2115","\uD835\uDD46","\u2119","\u211A","\u211D","\uD835\uDD4A","\uD835\uDD4B","\uD835\uDD4C","\uD835\uDD4D","\uD835\uDD4E","\uD835\uDD4F","\uD835\uDD50","\u2124","\uD835\uDD52","\uD835\uDD53","\uD835\uDD54","\uD835\uDD55","\uD835\uDD56","\uD835\uDD57","\uD835\uDD58","\uD835\uDD59","\uD835\uDD5A","\uD835\uDD5B","\uD835\uDD5C","\uD835\uDD5D","\uD835\uDD5E","\uD835\uDD5F","\uD835\uDD60","\uD835\uDD61","\uD835\uDD62","\uD835\uDD63","\uD835\uDD64","\uD835\uDD65","\uD835\uDD66","\uD835\uDD67","\uD835\uDD68","\uD835\uDD69","\uD835\uDD6A","\uD835\uDD6B"];
/*var AMcal = [0xEF35,0x212C,0xEF36,0xEF37,0x2130,0x2131,0xEF38,0x210B,0x2110,0xEF39,0xEF3A,0x2112,0x2133,0xEF3B,0xEF3C,0xEF3D,0xEF3E,0x211B,0xEF3F,0xEF40,0xEF41,0xEF42,0xEF43,0xEF44,0xEF45,0xEF46];
var AMfrk = [0xEF5D,0xEF5E,0x212D,0xEF5F,0xEF60,0xEF61,0xEF62,0x210C,0x2111,0xEF63,0xEF64,0xEF65,0xEF66,0xEF67,0xEF68,0xEF69,0xEF6A,0x211C,0xEF6B,0xEF6C,0xEF6D,0xEF6E,0xEF6F,0xEF70,0xEF71,0x2128];
var AMbbb = [0xEF8C,0xEF8D,0x2102,0xEF8E,0xEF8F,0xEF90,0xEF91,0x210D,0xEF92,0xEF93,0xEF94,0xEF95,0xEF96,0x2115,0xEF97,0x2119,0x211A,0x211D,0xEF98,0xEF99,0xEF9A,0xEF9B,0xEF9C,0xEF9D,0xEF9E,0x2124];*/

var CONST = 0, UNARY = 1, BINARY = 2, INFIX = 3, LEFTBRACKET = 4,
    RIGHTBRACKET = 5, SPACE = 6, UNDEROVER = 7, DEFINITION = 8,
    LEFTRIGHT = 9, TEXT = 10, /*BIG = 11, LONG = 12, STRETCHY = 13,
    MATRIX = 14,*/ UNARYUNDEROVER = 15; // token types

var AMquote = {input:"\"",   tag:"mtext", output:"mbox", tex:null, ttype:TEXT};

var AMsymbols = [
//some greek symbols
{input:"alpha",  tag:"mi", output:"\u03B1", tex:null, ttype:CONST},
{input:"beta",   tag:"mi", output:"\u03B2", tex:null, ttype:CONST},
{input:"chi",    tag:"mi", output:"\u03C7", tex:null, ttype:CONST},
{input:"delta",  tag:"mi", output:"\u03B4", tex:null, ttype:CONST},
{input:"Delta",  tag:"mo", output:"\u0394", tex:null, ttype:CONST},
{input:"epsi",   tag:"mi", output:"\u03B5", tex:"epsilon", ttype:CONST},
{input:"varepsilon", tag:"mi", output:"\u025B", tex:null, ttype:CONST},
{input:"eta",    tag:"mi", output:"\u03B7", tex:null, ttype:CONST},
{input:"gamma",  tag:"mi", output:"\u03B3", tex:null, ttype:CONST},
{input:"Gamma",  tag:"mo", output:"\u0393", tex:null, ttype:CONST},
{input:"iota",   tag:"mi", output:"\u03B9", tex:null, ttype:CONST},
{input:"kappa",  tag:"mi", output:"\u03BA", tex:null, ttype:CONST},
{input:"lambda", tag:"mi", output:"\u03BB", tex:null, ttype:CONST},
{input:"Lambda", tag:"mo", output:"\u039B", tex:null, ttype:CONST},
{input:"lamda", tag:"mi", output:"\u03BB", tex:null, ttype:CONST},
{input:"Lamda", tag:"mo", output:"\u039B", tex:null, ttype:CONST},
{input:"mu",     tag:"mi", output:"\u03BC", tex:null, ttype:CONST},
{input:"nu",     tag:"mi", output:"\u03BD", tex:null, ttype:CONST},
{input:"omega",  tag:"mi", output:"\u03C9", tex:null, ttype:CONST},
{input:"Omega",  tag:"mo", output:"\u03A9", tex:null, ttype:CONST},
{input:"phi",    tag:"mi", output:fixphi?"\u03D5":"\u03C6", tex:null, ttype:CONST},
{input:"varphi", tag:"mi", output:fixphi?"\u03C6":"\u03D5", tex:null, ttype:CONST},
{input:"Phi",    tag:"mo", output:"\u03A6", tex:null, ttype:CONST},
{input:"pi",     tag:"mi", output:"\u03C0", tex:null, ttype:CONST},
{input:"Pi",     tag:"mo", output:"\u03A0", tex:null, ttype:CONST},
{input:"psi",    tag:"mi", output:"\u03C8", tex:null, ttype:CONST},
{input:"Psi",    tag:"mi", output:"\u03A8", tex:null, ttype:CONST},
{input:"rho",    tag:"mi", output:"\u03C1", tex:null, ttype:CONST},
{input:"sigma",  tag:"mi", output:"\u03C3", tex:null, ttype:CONST},
{input:"Sigma",  tag:"mo", output:"\u03A3", tex:null, ttype:CONST},
{input:"tau",    tag:"mi", output:"\u03C4", tex:null, ttype:CONST},
{input:"theta",  tag:"mi", output:"\u03B8", tex:null, ttype:CONST},
{input:"vartheta", tag:"mi", output:"\u03D1", tex:null, ttype:CONST},
{input:"Theta",  tag:"mo", output:"\u0398", tex:null, ttype:CONST},
{input:"upsilon", tag:"mi", output:"\u03C5", tex:null, ttype:CONST},
{input:"xi",     tag:"mi", output:"\u03BE", tex:null, ttype:CONST},
{input:"Xi",     tag:"mo", output:"\u039E", tex:null, ttype:CONST},
{input:"zeta",   tag:"mi", output:"\u03B6", tex:null, ttype:CONST},

//binary operation symbols
//{input:"-",  tag:"mo", output:"\u0096", tex:null, ttype:CONST},
{input:"*",  tag:"mo", output:"\u22C5", tex:"cdot", ttype:CONST},
{input:"**", tag:"mo", output:"\u2217", tex:"ast", ttype:CONST},
{input:"***", tag:"mo", output:"\u22C6", tex:"star", ttype:CONST},
{input:"//", tag:"mo", output:"/",      tex:null, ttype:CONST},
{input:"\\\\", tag:"mo", output:"\\",   tex:"backslash", ttype:CONST},
{input:"setminus", tag:"mo", output:"\\", tex:null, ttype:CONST},
{input:"xx", tag:"mo", output:"\u00D7", tex:"times", ttype:CONST},
{input:"|><", tag:"mo", output:"\u22C9", tex:"ltimes", ttype:CONST},
{input:"><|", tag:"mo", output:"\u22CA", tex:"rtimes", ttype:CONST},
{input:"|><|", tag:"mo", output:"\u22C8", tex:"bowtie", ttype:CONST},
{input:"-:", tag:"mo", output:"\u00F7", tex:"div", ttype:CONST},
{input:"divide",   tag:"mo", output:"-:", tex:null, ttype:DEFINITION},
{input:"@",  tag:"mo", output:"\u2218", tex:"circ", ttype:CONST},
{input:"o+", tag:"mo", output:"\u2295", tex:"oplus", ttype:CONST},
{input:"ox", tag:"mo", output:"\u2297", tex:"otimes", ttype:CONST},
{input:"o.", tag:"mo", output:"\u2299", tex:"odot", ttype:CONST},
{input:"sum", tag:"mo", output:"\u2211", tex:null, ttype:UNDEROVER},
{input:"prod", tag:"mo", output:"\u220F", tex:null, ttype:UNDEROVER},
{input:"^^",  tag:"mo", output:"\u2227", tex:"wedge", ttype:CONST},
{input:"^^^", tag:"mo", output:"\u22C0", tex:"bigwedge", ttype:UNDEROVER},
{input:"vv",  tag:"mo", output:"\u2228", tex:"vee", ttype:CONST},
{input:"vvv", tag:"mo", output:"\u22C1", tex:"bigvee", ttype:UNDEROVER},
{input:"nn",  tag:"mo", output:"\u2229", tex:"cap", ttype:CONST},
{input:"nnn", tag:"mo", output:"\u22C2", tex:"bigcap", ttype:UNDEROVER},
{input:"uu",  tag:"mo", output:"\u222A", tex:"cup", ttype:CONST},
{input:"uuu", tag:"mo", output:"\u22C3", tex:"bigcup", ttype:UNDEROVER},

//binary relation symbols
{input:"!=",  tag:"mo", output:"\u2260", tex:"ne", ttype:CONST},
{input:":=",  tag:"mo", output:":=",     tex:null, ttype:CONST},
{input:"lt",  tag:"mo", output:"<",      tex:null, ttype:CONST},
{input:"<=",  tag:"mo", output:"\u2264", tex:"le", ttype:CONST},
{input:"lt=", tag:"mo", output:"\u2264", tex:"leq", ttype:CONST},
{input:"gt",  tag:"mo", output:">",      tex:null, ttype:CONST},
{input:">=",  tag:"mo", output:"\u2265", tex:"ge", ttype:CONST},
{input:"gt=", tag:"mo", output:"\u2265", tex:"geq", ttype:CONST},
{input:"-<",  tag:"mo", output:"\u227A", tex:"prec", ttype:CONST},
{input:"-lt", tag:"mo", output:"\u227A", tex:null, ttype:CONST},
{input:">-",  tag:"mo", output:"\u227B", tex:"succ", ttype:CONST},
{input:"-<=", tag:"mo", output:"\u2AAF", tex:"preceq", ttype:CONST},
{input:">-=", tag:"mo", output:"\u2AB0", tex:"succeq", ttype:CONST},
{input:"in",  tag:"mo", output:"\u2208", tex:null, ttype:CONST},
{input:"!in", tag:"mo", output:"\u2209", tex:"notin", ttype:CONST},
{input:"sub", tag:"mo", output:"\u2282", tex:"subset", ttype:CONST},
{input:"sup", tag:"mo", output:"\u2283", tex:"supset", ttype:CONST},
{input:"sube", tag:"mo", output:"\u2286", tex:"subseteq", ttype:CONST},
{input:"supe", tag:"mo", output:"\u2287", tex:"supseteq", ttype:CONST},
{input:"-=",  tag:"mo", output:"\u2261", tex:"equiv", ttype:CONST},
{input:"~=",  tag:"mo", output:"\u2245", tex:"cong", ttype:CONST},
{input:"~~",  tag:"mo", output:"\u2248", tex:"approx", ttype:CONST},
{input:"~",  tag:"mo", output:"\u223C", tex:"sim", ttype:CONST},
{input:"prop", tag:"mo", output:"\u221D", tex:"propto", ttype:CONST},

//logical symbols
{input:"and", tag:"mtext", output:"and", tex:null, ttype:SPACE},
{input:"or",  tag:"mtext", output:"or",  tex:null, ttype:SPACE},
{input:"not", tag:"mo", output:"\u00AC", tex:"neg", ttype:CONST},
{input:"=>",  tag:"mo", output:"\u21D2", tex:"implies", ttype:CONST},
{input:"if",  tag:"mo", output:"if",     tex:null, ttype:SPACE},
{input:"<=>", tag:"mo", output:"\u21D4", tex:"iff", ttype:CONST},
{input:"AA",  tag:"mo", output:"\u2200", tex:"forall", ttype:CONST},
{input:"EE",  tag:"mo", output:"\u2203", tex:"exists", ttype:CONST},
{input:"_|_", tag:"mo", output:"\u22A5", tex:"bot", ttype:CONST},
{input:"TT",  tag:"mo", output:"\u22A4", tex:"top", ttype:CONST},
{input:"|--",  tag:"mo", output:"\u22A2", tex:"vdash", ttype:CONST},
{input:"|==",  tag:"mo", output:"\u22A8", tex:"models", ttype:CONST},

//grouping brackets
{input:"(", tag:"mo", output:"(", tex:"left(", ttype:LEFTBRACKET},
{input:")", tag:"mo", output:")", tex:"right)", ttype:RIGHTBRACKET},
{input:"[", tag:"mo", output:"[", tex:"left[", ttype:LEFTBRACKET},
{input:"]", tag:"mo", output:"]", tex:"right]", ttype:RIGHTBRACKET},
{input:"{", tag:"mo", output:"{", tex:null, ttype:LEFTBRACKET},
{input:"}", tag:"mo", output:"}", tex:null, ttype:RIGHTBRACKET},
{input:"|", tag:"mo", output:"|", tex:null, ttype:LEFTRIGHT},
{input:":|:", tag:"mo", output:"|", tex:null, ttype:CONST},
{input:"|:", tag:"mo", output:"|", tex:null, ttype:LEFTBRACKET},
{input:":|", tag:"mo", output:"|", tex:null, ttype:RIGHTBRACKET},
//{input:"||", tag:"mo", output:"||", tex:null, ttype:LEFTRIGHT},
{input:"(:", tag:"mo", output:"\u2329", tex:"langle", ttype:LEFTBRACKET},
{input:":)", tag:"mo", output:"\u232A", tex:"rangle", ttype:RIGHTBRACKET},
{input:"<<", tag:"mo", output:"\u2329", tex:null, ttype:LEFTBRACKET},
{input:">>", tag:"mo", output:"\u232A", tex:null, ttype:RIGHTBRACKET},
{input:"{:", tag:"mo", output:"{:", tex:null, ttype:LEFTBRACKET, invisible:true},
{input:":}", tag:"mo", output:":}", tex:null, ttype:RIGHTBRACKET, invisible:true},

//miscellaneous symbols
{input:"int",  tag:"mo", output:"\u222B", tex:null, ttype:CONST},
{input:"dx",   tag:"mi", output:"{:d x:}", tex:null, ttype:DEFINITION},
{input:"dy",   tag:"mi", output:"{:d y:}", tex:null, ttype:DEFINITION},
{input:"dz",   tag:"mi", output:"{:d z:}", tex:null, ttype:DEFINITION},
{input:"dt",   tag:"mi", output:"{:d t:}", tex:null, ttype:DEFINITION},
{input:"oint", tag:"mo", output:"\u222E", tex:null, ttype:CONST},
{input:"del",  tag:"mo", output:"\u2202", tex:"partial", ttype:CONST},
{input:"grad", tag:"mo", output:"\u2207", tex:"nabla", ttype:CONST},
{input:"+-",   tag:"mo", output:"\u00B1", tex:"pm", ttype:CONST},
{input:"-+",   tag:"mo", output:"\u2213", tex:"mp", ttype:CONST},
{input:"O/",   tag:"mo", output:"\u2205", tex:"emptyset", ttype:CONST},
{input:"oo",   tag:"mo", output:"\u221E", tex:"infty", ttype:CONST},
{input:"aleph", tag:"mo", output:"\u2135", tex:null, ttype:CONST},
{input:"...",  tag:"mo", output:"...",    tex:"ldots", ttype:CONST},
{input:":.",  tag:"mo", output:"\u2234",  tex:"therefore", ttype:CONST},
{input:":'",  tag:"mo", output:"\u2235",  tex:"because", ttype:CONST},
{input:"/_",  tag:"mo", output:"\u2220",  tex:"angle", ttype:CONST},
{input:"/_\\",  tag:"mo", output:"\u25B3",  tex:"triangle", ttype:CONST},
{input:"'",   tag:"mo", output:"\u2032",  tex:"prime", ttype:CONST},
{input:"tilde", tag:"mover", output:"~", tex:null, ttype:UNARY, acc:true},
{input:"\\ ",  tag:"mo", output:"\u00A0", tex:null, ttype:CONST},
{input:"frown",  tag:"mo", output:"\u2322", tex:null, ttype:CONST},
{input:"quad", tag:"mo", output:"\u00A0\u00A0", tex:null, ttype:CONST},
{input:"qquad", tag:"mo", output:"\u00A0\u00A0\u00A0\u00A0", tex:null, ttype:CONST},
{input:"cdots", tag:"mo", output:"\u22EF", tex:null, ttype:CONST},
{input:"vdots", tag:"mo", output:"\u22EE", tex:null, ttype:CONST},
{input:"ddots", tag:"mo", output:"\u22F1", tex:null, ttype:CONST},
{input:"diamond", tag:"mo", output:"\u22C4", tex:null, ttype:CONST},
{input:"square", tag:"mo", output:"\u25A1", tex:null, ttype:CONST},
{input:"|__", tag:"mo", output:"\u230A",  tex:"lfloor", ttype:CONST},
{input:"__|", tag:"mo", output:"\u230B",  tex:"rfloor", ttype:CONST},
{input:"|~", tag:"mo", output:"\u2308",  tex:"lceiling", ttype:CONST},
{input:"~|", tag:"mo", output:"\u2309",  tex:"rceiling", ttype:CONST},
{input:"CC",  tag:"mo", output:"\u2102", tex:null, ttype:CONST},
{input:"NN",  tag:"mo", output:"\u2115", tex:null, ttype:CONST},
{input:"QQ",  tag:"mo", output:"\u211A", tex:null, ttype:CONST},
{input:"RR",  tag:"mo", output:"\u211D", tex:null, ttype:CONST},
{input:"ZZ",  tag:"mo", output:"\u2124", tex:null, ttype:CONST},
{input:"f",   tag:"mi", output:"f",      tex:null, ttype:UNARY, func:true},
{input:"g",   tag:"mi", output:"g",      tex:null, ttype:UNARY, func:true},

//standard functions
{input:"lim",  tag:"mo", output:"lim", tex:null, ttype:UNDEROVER},
{input:"Lim",  tag:"mo", output:"Lim", tex:null, ttype:UNDEROVER},
{input:"sin",  tag:"mo", output:"sin", tex:null, ttype:UNARY, func:true},
{input:"cos",  tag:"mo", output:"cos", tex:null, ttype:UNARY, func:true},
{input:"tan",  tag:"mo", output:"tan", tex:null, ttype:UNARY, func:true},
{input:"sinh", tag:"mo", output:"sinh", tex:null, ttype:UNARY, func:true},
{input:"cosh", tag:"mo", output:"cosh", tex:null, ttype:UNARY, func:true},
{input:"tanh", tag:"mo", output:"tanh", tex:null, ttype:UNARY, func:true},
{input:"cot",  tag:"mo", output:"cot", tex:null, ttype:UNARY, func:true},
{input:"sec",  tag:"mo", output:"sec", tex:null, ttype:UNARY, func:true},
{input:"csc",  tag:"mo", output:"csc", tex:null, ttype:UNARY, func:true},
{input:"arcsin",  tag:"mo", output:"arcsin", tex:null, ttype:UNARY, func:true},
{input:"arccos",  tag:"mo", output:"arccos", tex:null, ttype:UNARY, func:true},
{input:"arctan",  tag:"mo", output:"arctan", tex:null, ttype:UNARY, func:true},
{input:"coth",  tag:"mo", output:"coth", tex:null, ttype:UNARY, func:true},
{input:"sech",  tag:"mo", output:"sech", tex:null, ttype:UNARY, func:true},
{input:"csch",  tag:"mo", output:"csch", tex:null, ttype:UNARY, func:true},
{input:"exp",  tag:"mo", output:"exp", tex:null, ttype:UNARY, func:true},
{input:"abs",   tag:"mo", output:"abs",  tex:null, ttype:UNARY, rewriteleftright:["|","|"]},
{input:"norm",   tag:"mo", output:"norm",  tex:null, ttype:UNARY, rewriteleftright:["\u2225","\u2225"]},
{input:"floor",   tag:"mo", output:"floor",  tex:null, ttype:UNARY, rewriteleftright:["\u230A","\u230B"]},
{input:"ceil",   tag:"mo", output:"ceil",  tex:null, ttype:UNARY, rewriteleftright:["\u2308","\u2309"]},
{input:"log",  tag:"mo", output:"log", tex:null, ttype:UNARY, func:true},
{input:"ln",   tag:"mo", output:"ln",  tex:null, ttype:UNARY, func:true},
{input:"det",  tag:"mo", output:"det", tex:null, ttype:UNARY, func:true},
{input:"dim",  tag:"mo", output:"dim", tex:null, ttype:CONST},
{input:"mod",  tag:"mo", output:"mod", tex:null, ttype:CONST},
{input:"gcd",  tag:"mo", output:"gcd", tex:null, ttype:UNARY, func:true},
{input:"lcm",  tag:"mo", output:"lcm", tex:null, ttype:UNARY, func:true},
{input:"lub",  tag:"mo", output:"lub", tex:null, ttype:CONST},
{input:"glb",  tag:"mo", output:"glb", tex:null, ttype:CONST},
{input:"min",  tag:"mo", output:"min", tex:null, ttype:UNDEROVER},
{input:"max",  tag:"mo", output:"max", tex:null, ttype:UNDEROVER},
{input:"Sin",  tag:"mo", output:"Sin", tex:null, ttype:UNARY, func:true},
{input:"Cos",  tag:"mo", output:"Cos", tex:null, ttype:UNARY, func:true},
{input:"Tan",  tag:"mo", output:"Tan", tex:null, ttype:UNARY, func:true},
{input:"Arcsin",  tag:"mo", output:"Arcsin", tex:null, ttype:UNARY, func:true},
{input:"Arccos",  tag:"mo", output:"Arccos", tex:null, ttype:UNARY, func:true},
{input:"Arctan",  tag:"mo", output:"Arctan", tex:null, ttype:UNARY, func:true},
{input:"Sinh", tag:"mo", output:"Sinh", tex:null, ttype:UNARY, func:true},
{input:"Cosh", tag:"mo", output:"Cosh", tex:null, ttype:UNARY, func:true},
{input:"Tanh", tag:"mo", output:"Tanh", tex:null, ttype:UNARY, func:true},
{input:"Cot",  tag:"mo", output:"Cot", tex:null, ttype:UNARY, func:true},
{input:"Sec",  tag:"mo", output:"Sec", tex:null, ttype:UNARY, func:true},
{input:"Csc",  tag:"mo", output:"Csc", tex:null, ttype:UNARY, func:true},
{input:"Log",  tag:"mo", output:"Log", tex:null, ttype:UNARY, func:true},
{input:"Ln",   tag:"mo", output:"Ln",  tex:null, ttype:UNARY, func:true},
{input:"Abs",   tag:"mo", output:"abs",  tex:null, ttype:UNARY, notexcopy:true, rewriteleftright:["|","|"]},

//arrows
{input:"uarr", tag:"mo", output:"\u2191", tex:"uparrow", ttype:CONST},
{input:"darr", tag:"mo", output:"\u2193", tex:"downarrow", ttype:CONST},
{input:"rarr", tag:"mo", output:"\u2192", tex:"rightarrow", ttype:CONST},
{input:"->",   tag:"mo", output:"\u2192", tex:"to", ttype:CONST},
{input:">->",   tag:"mo", output:"\u21A3", tex:"rightarrowtail", ttype:CONST},
{input:"->>",   tag:"mo", output:"\u21A0", tex:"twoheadrightarrow", ttype:CONST},
{input:">->>",   tag:"mo", output:"\u2916", tex:"twoheadrightarrowtail", ttype:CONST},
{input:"|->",  tag:"mo", output:"\u21A6", tex:"mapsto", ttype:CONST},
{input:"larr", tag:"mo", output:"\u2190", tex:"leftarrow", ttype:CONST},
{input:"harr", tag:"mo", output:"\u2194", tex:"leftrightarrow", ttype:CONST},
{input:"rArr", tag:"mo", output:"\u21D2", tex:"Rightarrow", ttype:CONST},
{input:"lArr", tag:"mo", output:"\u21D0", tex:"Leftarrow", ttype:CONST},
{input:"hArr", tag:"mo", output:"\u21D4", tex:"Leftrightarrow", ttype:CONST},
//commands with argument
{input:"sqrt", tag:"msqrt", output:"sqrt", tex:null, ttype:UNARY},
{input:"root", tag:"mroot", output:"root", tex:null, ttype:BINARY},
{input:"frac", tag:"mfrac", output:"/",    tex:null, ttype:BINARY},
{input:"/",    tag:"mfrac", output:"/",    tex:null, ttype:INFIX},
{input:"stackrel", tag:"mover", output:"stackrel", tex:null, ttype:BINARY},
{input:"overset", tag:"mover", output:"stackrel", tex:null, ttype:BINARY},
{input:"underset", tag:"munder", output:"stackrel", tex:null, ttype:BINARY},
{input:"_",    tag:"msub",  output:"_",    tex:null, ttype:INFIX},
{input:"^",    tag:"msup",  output:"^",    tex:null, ttype:INFIX},
{input:"hat", tag:"mover", output:"\u005E", tex:null, ttype:UNARY, acc:true},
{input:"bar", tag:"mover", output:"\u00AF", tex:"overline", ttype:UNARY, acc:true},
{input:"vec", tag:"mover", output:"\u2192", tex:null, ttype:UNARY, acc:true},
{input:"dot", tag:"mover", output:".",      tex:null, ttype:UNARY, acc:true},
{input:"ddot", tag:"mover", output:"..",    tex:null, ttype:UNARY, acc:true},
{input:"overarc", tag:"mover", output:"\u23DC", tex:"overparen", ttype:UNARY, acc:true},
{input:"ul", tag:"munder", output:"\u0332", tex:"underline", ttype:UNARY, acc:true},
{input:"ubrace", tag:"munder", output:"\u23DF", tex:"underbrace", ttype:UNARYUNDEROVER, acc:true},
{input:"obrace", tag:"mover", output:"\u23DE", tex:"overbrace", ttype:UNARYUNDEROVER, acc:true},
{input:"text", tag:"mtext", output:"text", tex:null, ttype:TEXT},
{input:"mbox", tag:"mtext", output:"mbox", tex:null, ttype:TEXT},
{input:"color", tag:"mstyle", ttype:BINARY},
{input:"id", tag:"mrow", ttype:BINARY},
{input:"class", tag:"mrow", ttype:BINARY},
{input:"cancel", tag:"menclose", output:"cancel", tex:null, ttype:UNARY},
AMquote,
{input:"bb", tag:"mstyle", atname:"mathvariant", atval:"bold", output:"bb", tex:null, ttype:UNARY},
{input:"mathbf", tag:"mstyle", atname:"mathvariant", atval:"bold", output:"mathbf", tex:null, ttype:UNARY},
{input:"sf", tag:"mstyle", atname:"mathvariant", atval:"sans-serif", output:"sf", tex:null, ttype:UNARY},
{input:"mathsf", tag:"mstyle", atname:"mathvariant", atval:"sans-serif", output:"mathsf", tex:null, ttype:UNARY},
{input:"bbb", tag:"mstyle", atname:"mathvariant", atval:"double-struck", output:"bbb", tex:null, ttype:UNARY, codes:AMbbb},
{input:"mathbb", tag:"mstyle", atname:"mathvariant", atval:"double-struck", output:"mathbb", tex:null, ttype:UNARY, codes:AMbbb},
{input:"cc",  tag:"mstyle", atname:"mathvariant", atval:"script", output:"cc", tex:null, ttype:UNARY, codes:AMcal},
{input:"mathcal", tag:"mstyle", atname:"mathvariant", atval:"script", output:"mathcal", tex:null, ttype:UNARY, codes:AMcal},
{input:"tt",  tag:"mstyle", atname:"mathvariant", atval:"monospace", output:"tt", tex:null, ttype:UNARY},
{input:"mathtt", tag:"mstyle", atname:"mathvariant", atval:"monospace", output:"mathtt", tex:null, ttype:UNARY},
{input:"fr",  tag:"mstyle", atname:"mathvariant", atval:"fraktur", output:"fr", tex:null, ttype:UNARY, codes:AMfrk},
{input:"mathfrak",  tag:"mstyle", atname:"mathvariant", atval:"fraktur", output:"mathfrak", tex:null, ttype:UNARY, codes:AMfrk}
];

function compareNames(s1,s2) {
  if (s1.input > s2.input) return 1
  else return -1;
}

var AMnames = []; //list of input symbols

function initSymbols() {
  var i;
  var symlen = AMsymbols.length;
  for (i=0; i<symlen; i++) {
    if (AMsymbols[i].tex) {
      AMsymbols.push({input:AMsymbols[i].tex,
        tag:AMsymbols[i].tag, output:AMsymbols[i].output, ttype:AMsymbols[i].ttype,
        acc:(AMsymbols[i].acc||false)});
    }
  }
  refreshSymbols();
}

function refreshSymbols(){
  var i;
  AMsymbols.sort(compareNames);
  for (i=0; i<AMsymbols.length; i++) AMnames[i] = AMsymbols[i].input;
}

function define(oldstr,newstr) {
  AMsymbols.push({input:oldstr, tag:"mo", output:newstr, tex:null, ttype:DEFINITION});
  refreshSymbols(); // this may be a problem if many symbols are defined!
}

function AMremoveCharsAndBlanks(str,n) {
//remove n characters and any following blanks
  var st;
  if (str.charAt(n)=="\\" && str.charAt(n+1)!="\\" && str.charAt(n+1)!=" ")
    st = str.slice(n+1);
  else st = str.slice(n);
  for (var i=0; i<st.length && st.charCodeAt(i)<=32; i=i+1);
  return st.slice(i);
}

function position(arr, str, n) {
// return position >=n where str appears or would be inserted
// assumes arr is sorted
  if (n==0) {
    var h,m;
    n = -1;
    h = arr.length;
    while (n+1<h) {
      m = (n+h) >> 1;
      if (arr[m]<str) n = m; else h = m;
    }
    return h;
  } else
    for (var i=n; i<arr.length && arr[i]<str; i++);
  return i; // i=arr.length || arr[i]>=str
}

function AMgetSymbol(str) {
//return maximal initial substring of str that appears in names
//return null if there is none
  var k = 0; //new pos
  var j = 0; //old pos
  var mk; //match pos
  var st;
  var tagst;
  var match = "";
  var more = true;
  for (var i=1; i<=str.length && more; i++) {
    st = str.slice(0,i); //initial substring of length i
    j = k;
    k = position(AMnames, st, j);
    if (k<AMnames.length && str.slice(0,AMnames[k].length)==AMnames[k]){
      match = AMnames[k];
      mk = k;
      i = match.length;
    }
    more = k<AMnames.length && str.slice(0,AMnames[k].length)>=AMnames[k];
  }
  AMpreviousSymbol=AMcurrentSymbol;
  if (match!=""){
    AMcurrentSymbol=AMsymbols[mk].ttype;
    return AMsymbols[mk];
  }
// if str[0] is a digit or - return maxsubstring of digits.digits
  AMcurrentSymbol=CONST;
  k = 1;
  st = str.slice(0,1);
  var integ = true;
  while ("0"<=st && st<="9" && k<=str.length) {
    st = str.slice(k,k+1);
    k++;
  }
  if (st == decimalsign) {
    st = str.slice(k,k+1);
    if ("0"<=st && st<="9") {
      integ = false;
      k++;
      while ("0"<=st && st<="9" && k<=str.length) {
        st = str.slice(k,k+1);
        k++;
      }
    }
  }
  if ((integ && k>1) || k>2) {
    st = str.slice(0,k-1);
    tagst = "mn";
  } else {
    k = 2;
    st = str.slice(0,1); //take 1 character
    tagst = (("A">st || st>"Z") && ("a">st || st>"z")?"mo":"mi");
  }
  if (st=="-" && str.charAt(1)!==' ' && AMpreviousSymbol==INFIX) {
    AMcurrentSymbol = INFIX;  //trick "/" into recognizing "-" on second parse
    return {input:st, tag:tagst, output:st, ttype:UNARY, func:true};
  }
  return {input:st, tag:tagst, output:st, ttype:CONST};
}

function AMremoveBrackets(node) {
  var st;
  if (!node.hasChildNodes()) { return; }
  if (node.firstChild.hasChildNodes() && (node.nodeName=="mrow" || node.nodeName=="M:MROW")) {
    st = node.firstChild.firstChild.nodeValue;
    if (st=="(" || st=="[" || st=="{") node.removeChild(node.firstChild);
  }
  if (node.lastChild.hasChildNodes() && (node.nodeName=="mrow" || node.nodeName=="M:MROW")) {
    st = node.lastChild.firstChild.nodeValue;
    if (st==")" || st=="]" || st=="}") node.removeChild(node.lastChild);
  }
}

/*Parsing ASCII math expressions with the following grammar
v ::= [A-Za-z] | greek letters | numbers | other constant symbols
u ::= sqrt | text | bb | other unary symbols for font commands
b ::= frac | root | stackrel         binary symbols
l ::= ( | [ | { | (: | {:            left brackets
r ::= ) | ] | } | :) | :}            right brackets
S ::= v | lEr | uS | bSS             Simple expression
I ::= S_S | S^S | S_S^S | S          Intermediate expression
E ::= IE | I/I                       Expression
Each terminal symbol is translated into a corresponding mathml node.*/

var AMnestingDepth,AMpreviousSymbol,AMcurrentSymbol;

function AMparseSexpr(str) { //parses str and returns [node,tailstr]
  var symbol, node, result, i, st,// rightvert = false,
    newFrag = document.createDocumentFragment();
  str = AMremoveCharsAndBlanks(str,0);
  symbol = AMgetSymbol(str);             //either a token or a bracket or empty
  if (symbol == null || symbol.ttype == RIGHTBRACKET && AMnestingDepth > 0) {
    return [null,str];
  }
  if (symbol.ttype == DEFINITION) {
    str = symbol.output+AMremoveCharsAndBlanks(str,symbol.input.length);
    symbol = AMgetSymbol(str);
  }
  switch (symbol.ttype) {  case UNDEROVER:
  case CONST:
    str = AMremoveCharsAndBlanks(str,symbol.input.length);
    return [createMmlNode(symbol.tag,        //its a constant
                             document.createTextNode(symbol.output)),str];
  case LEFTBRACKET:   //read (expr+)
    AMnestingDepth++;
    str = AMremoveCharsAndBlanks(str,symbol.input.length);
    result = AMparseExpr(str,true);
    AMnestingDepth--;
    if (typeof symbol.invisible == "boolean" && symbol.invisible)
      node = createMmlNode("mrow",result[0]);
    else {
      node = createMmlNode("mo",document.createTextNode(symbol.output));
      node = createMmlNode("mrow",node);
      node.appendChild(result[0]);
    }
    return [node,result[1]];
  case TEXT:
      if (symbol!=AMquote) str = AMremoveCharsAndBlanks(str,symbol.input.length);
      if (str.charAt(0)=="{") i=str.indexOf("}");
      else if (str.charAt(0)=="(") i=str.indexOf(")");
      else if (str.charAt(0)=="[") i=str.indexOf("]");
      else if (symbol==AMquote) i=str.slice(1).indexOf("\"")+1;
      else i = 0;
      if (i==-1) i = str.length;
      st = str.slice(1,i);
      if (st.charAt(0) == " ") {
        node = createMmlNode("mspace");
        node.setAttribute("width","1ex");
        newFrag.appendChild(node);
      }
      newFrag.appendChild(
        createMmlNode(symbol.tag,document.createTextNode(st)));
      if (st.charAt(st.length-1) == " ") {
        node = createMmlNode("mspace");
        node.setAttribute("width","1ex");
        newFrag.appendChild(node);
      }
      str = AMremoveCharsAndBlanks(str,i+1);
      return [createMmlNode("mrow",newFrag),str];
  case UNARYUNDEROVER:
  case UNARY:
      str = AMremoveCharsAndBlanks(str,symbol.input.length);
      result = AMparseSexpr(str);
      if (result[0]==null) return [createMmlNode(symbol.tag,
                             document.createTextNode(symbol.output)),str];
      if (typeof symbol.func == "boolean" && symbol.func) { // functions hack
        st = str.charAt(0);
          if (st=="^" || st=="_" || st=="/" || st=="|" || st=="," ||
             (symbol.input.length==1 && symbol.input.match(/\w/) && st!="(")) {
          return [createMmlNode(symbol.tag,
                    document.createTextNode(symbol.output)),str];
        } else {
          node = createMmlNode("mrow",
           createMmlNode(symbol.tag,document.createTextNode(symbol.output)));
          node.appendChild(result[0]);
          return [node,result[1]];
        }
      }
      AMremoveBrackets(result[0]);
      if (symbol.input == "sqrt") {           // sqrt
        return [createMmlNode(symbol.tag,result[0]),result[1]];
      } else if (typeof symbol.rewriteleftright != "undefined") {    // abs, floor, ceil
          node = createMmlNode("mrow", createMmlNode("mo",document.createTextNode(symbol.rewriteleftright[0])));
          node.appendChild(result[0]);
          node.appendChild(createMmlNode("mo",document.createTextNode(symbol.rewriteleftright[1])));
          return [node,result[1]];
      } else if (symbol.input == "cancel") {   // cancel
        node = createMmlNode(symbol.tag,result[0]);
	node.setAttribute("notation","updiagonalstrike");
	return [node,result[1]];
      } else if (typeof symbol.acc == "boolean" && symbol.acc) {   // accent
        node = createMmlNode(symbol.tag,result[0]);
        var accnode = createMmlNode("mo",document.createTextNode(symbol.output));
        if (symbol.input=="vec" && (
		(result[0].nodeName=="mrow" && result[0].childNodes.length==1
			&& result[0].firstChild.firstChild.nodeValue !== null
			&& result[0].firstChild.firstChild.nodeValue.length==1) ||
		(result[0].firstChild.nodeValue !== null
			&& result[0].firstChild.nodeValue.length==1) )) {
			accnode.setAttribute("stretchy",false);
        }
        node.appendChild(accnode);
        return [node,result[1]];
      } else {                        // font change command
        if (!isIE && typeof symbol.codes != "undefined") {
          for (i=0; i<result[0].childNodes.length; i++)
            if (result[0].childNodes[i].nodeName=="mi" || result[0].nodeName=="mi") {
              st = (result[0].nodeName=="mi"?result[0].firstChild.nodeValue:
                              result[0].childNodes[i].firstChild.nodeValue);
              var newst = [];
              for (var j=0; j<st.length; j++)
		  if (st.charCodeAt(j)>64 && st.charCodeAt(j)<91)
		  	newst = newst + symbol.codes[st.charCodeAt(j)-65];
                else if (st.charCodeAt(j)>96 && st.charCodeAt(j)<123)
                	newst = newst + symbol.codes[st.charCodeAt(j)-71];
                else newst = newst + st.charAt(j);
              if (result[0].nodeName=="mi")
                result[0]=createMmlNode("mo").
                          appendChild(document.createTextNode(newst));
              else result[0].replaceChild(createMmlNode("mo").
                               appendChild(document.createTextNode(newst)),
                                           result[0].childNodes[i]);
            }
        }
        node = createMmlNode(symbol.tag,result[0]);
        node.setAttribute(symbol.atname,symbol.atval);
        return [node,result[1]];
      }
  case BINARY:
    str = AMremoveCharsAndBlanks(str,symbol.input.length);
    result = AMparseSexpr(str);
    if (result[0]==null) return [createMmlNode("mo",
                           document.createTextNode(symbol.input)),str];
    AMremoveBrackets(result[0]);
    var result2 = AMparseSexpr(result[1]);
    if (result2[0]==null) return [createMmlNode("mo",
                           document.createTextNode(symbol.input)),str];
    AMremoveBrackets(result2[0]);
    if (['color', 'class', 'id'].indexOf(symbol.input) >= 0) {

      // Get the second argument
    	if (str.charAt(0)=="{") i=str.indexOf("}");
      else if (str.charAt(0)=="(") i=str.indexOf(")");
      else if (str.charAt(0)=="[") i=str.indexOf("]");
    	st = str.slice(1,i);

      // Make a mathml node
    	node = createMmlNode(symbol.tag,result2[0]);

      // Set the correct attribute
      if (symbol.input === "color") node.setAttribute("mathcolor", st)
      else if (symbol.input === "class") node.setAttribute("class", st)
      else if (symbol.input === "id") node.setAttribute("id", st)
   	return [node,result2[1]];
    }
    if (symbol.input=="root" || symbol.output=="stackrel")
      newFrag.appendChild(result2[0]);
    newFrag.appendChild(result[0]);
    if (symbol.input=="frac") newFrag.appendChild(result2[0]);
    return [createMmlNode(symbol.tag,newFrag),result2[1]];
  case INFIX:
    str = AMremoveCharsAndBlanks(str,symbol.input.length);
    return [createMmlNode("mo",document.createTextNode(symbol.output)),str];
  case SPACE:
    str = AMremoveCharsAndBlanks(str,symbol.input.length);
    node = createMmlNode("mspace");
    node.setAttribute("width","1ex");
    newFrag.appendChild(node);
    newFrag.appendChild(
      createMmlNode(symbol.tag,document.createTextNode(symbol.output)));
    node = createMmlNode("mspace");
    node.setAttribute("width","1ex");
    newFrag.appendChild(node);
    return [createMmlNode("mrow",newFrag),str];
  case LEFTRIGHT:
//    if (rightvert) return [null,str]; else rightvert = true;
    AMnestingDepth++;
    str = AMremoveCharsAndBlanks(str,symbol.input.length);
    result = AMparseExpr(str,false);
    AMnestingDepth--;
    st = "";
    if (result[0].lastChild!=null)
      st = result[0].lastChild.firstChild.nodeValue;
    if (st == "|" && str.charAt(0)!==",") { // its an absolute value subterm
      node = createMmlNode("mo",document.createTextNode(symbol.output));
      node = createMmlNode("mrow",node);
      node.appendChild(result[0]);
      return [node,result[1]];
    } else { // the "|" is a \mid so use unicode 2223 (divides) for spacing
      node = createMmlNode("mo",document.createTextNode("\u2223"));
      node = createMmlNode("mrow",node);
      return [node,str];
    }
  default:
//alert("default");
    str = AMremoveCharsAndBlanks(str,symbol.input.length);
    return [createMmlNode(symbol.tag,        //its a constant
                             document.createTextNode(symbol.output)),str];
  }
}

function AMparseIexpr(str) {
  var symbol, sym1, sym2, node, result, underover;
  str = AMremoveCharsAndBlanks(str,0);
  sym1 = AMgetSymbol(str);
  result = AMparseSexpr(str);
  node = result[0];
  str = result[1];
  symbol = AMgetSymbol(str);
  if (symbol.ttype == INFIX && symbol.input != "/") {
    str = AMremoveCharsAndBlanks(str,symbol.input.length);
//    if (symbol.input == "/") result = AMparseIexpr(str); else ...
    result = AMparseSexpr(str);
    if (result[0] == null) // show box in place of missing argument
      result[0] = createMmlNode("mo",document.createTextNode("\u25A1"));
    else AMremoveBrackets(result[0]);
    str = result[1];
//    if (symbol.input == "/") AMremoveBrackets(node);
    underover = (sym1.ttype == UNDEROVER || sym1.ttype == UNARYUNDEROVER);
    if (symbol.input == "_") {
      sym2 = AMgetSymbol(str);
      if (sym2.input == "^") {
        str = AMremoveCharsAndBlanks(str,sym2.input.length);
        var res2 = AMparseSexpr(str);
        AMremoveBrackets(res2[0]);
        str = res2[1];
        node = createMmlNode((underover?"munderover":"msubsup"),node);
        node.appendChild(result[0]);
        node.appendChild(res2[0]);
        node = createMmlNode("mrow",node); // so sum does not stretch
      } else {
        node = createMmlNode((underover?"munder":"msub"),node);
        node.appendChild(result[0]);
      }
    } else if (symbol.input == "^" && underover) {
    	node = createMmlNode("mover",node);
        node.appendChild(result[0]);
    } else {
      node = createMmlNode(symbol.tag,node);
      node.appendChild(result[0]);
    }
    if (typeof sym1.func != 'undefined' && sym1.func) {
    	sym2 = AMgetSymbol(str);
    	if (sym2.ttype != INFIX && sym2.ttype != RIGHTBRACKET &&
     	    (sym1.input.length>1 || sym2.ttype == LEFTBRACKET)) {
    		result = AMparseIexpr(str);
    		node = createMmlNode("mrow",node);
    		node.appendChild(result[0]);
    		str = result[1];
    	}
    }
  }
  return [node,str];
}

function AMparseExpr(str,rightbracket) {
  var symbol, node, result, i,
  newFrag = document.createDocumentFragment();
  do {
    str = AMremoveCharsAndBlanks(str,0);
    result = AMparseIexpr(str);
    node = result[0];
    str = result[1];
    symbol = AMgetSymbol(str);
    if (symbol.ttype == INFIX && symbol.input == "/") {
      str = AMremoveCharsAndBlanks(str,symbol.input.length);
      result = AMparseIexpr(str);
      if (result[0] == null) // show box in place of missing argument
        result[0] = createMmlNode("mo",document.createTextNode("\u25A1"));
      else AMremoveBrackets(result[0]);
      str = result[1];
      AMremoveBrackets(node);
      node = createMmlNode(symbol.tag,node);
      node.appendChild(result[0]);
      newFrag.appendChild(node);
      symbol = AMgetSymbol(str);
    }
    else if (node!=undefined) newFrag.appendChild(node);
  } while ((symbol.ttype != RIGHTBRACKET &&
           (symbol.ttype != LEFTRIGHT || rightbracket)
           || AMnestingDepth == 0) && symbol!=null && symbol.output!="");
  if (symbol.ttype == RIGHTBRACKET || symbol.ttype == LEFTRIGHT) {
//    if (AMnestingDepth > 0) AMnestingDepth--;
    var len = newFrag.childNodes.length;
    if (len>0 && newFrag.childNodes[len-1].nodeName == "mrow"
    	    && newFrag.childNodes[len-1].lastChild
    	    && newFrag.childNodes[len-1].lastChild.firstChild ) { //matrix
    	    //removed to allow row vectors: //&& len>1 &&
    	    //newFrag.childNodes[len-2].nodeName == "mo" &&
    	    //newFrag.childNodes[len-2].firstChild.nodeValue == ","
      var right = newFrag.childNodes[len-1].lastChild.firstChild.nodeValue;
      if (right==")" || right=="]") {
        var left = newFrag.childNodes[len-1].firstChild.firstChild.nodeValue;
        if (left=="(" && right==")" && symbol.output != "}" ||
            left=="[" && right=="]") {
        var pos = []; // positions of commas
        var matrix = true;
        var m = newFrag.childNodes.length;
        for (i=0; matrix && i<m; i=i+2) {
          pos[i] = [];
          node = newFrag.childNodes[i];
          if (matrix) matrix = node.nodeName=="mrow" &&
            (i==m-1 || node.nextSibling.nodeName=="mo" &&
            node.nextSibling.firstChild.nodeValue==",")&&
            node.firstChild.firstChild.nodeValue==left &&
            node.lastChild.firstChild.nodeValue==right;
          if (matrix)
            for (var j=0; j<node.childNodes.length; j++)
              if (node.childNodes[j].firstChild.nodeValue==",")
                pos[i][pos[i].length]=j;
          if (matrix && i>1) matrix = pos[i].length == pos[i-2].length;
        }
        matrix = matrix && (pos.length>1 || pos[0].length>0);
        var columnlines = [];
        if (matrix) {
          var row, frag, n, k, table = document.createDocumentFragment();
          for (i=0; i<m; i=i+2) {
            row = document.createDocumentFragment();
            frag = document.createDocumentFragment();
            node = newFrag.firstChild; // <mrow>(-,-,...,-,-)</mrow>
            n = node.childNodes.length;
            k = 0;
            node.removeChild(node.firstChild); //remove (
            for (j=1; j<n-1; j++) {
              if (typeof pos[i][k] != "undefined" && j==pos[i][k]){
                node.removeChild(node.firstChild); //remove ,
                if (node.firstChild.nodeName=="mrow" && node.firstChild.childNodes.length==1 &&
         	  node.firstChild.firstChild.firstChild.nodeValue=="\u2223") {
         	    //is columnline marker - skip it
         	    if (i==0) { columnlines.push("solid"); }
         	    node.removeChild(node.firstChild); //remove mrow
         	    node.removeChild(node.firstChild); //remove ,
         	    j+=2;
         	    k++;
            	} else if (i==0) { columnlines.push("none"); }
                row.appendChild(createMmlNode("mtd",frag));
                k++;
              } else frag.appendChild(node.firstChild);
            }
            row.appendChild(createMmlNode("mtd",frag));
            if (i==0) { columnlines.push("none"); }
            if (newFrag.childNodes.length>2) {
              newFrag.removeChild(newFrag.firstChild); //remove <mrow>)</mrow>
              newFrag.removeChild(newFrag.firstChild); //remove <mo>,</mo>
            }
            table.appendChild(createMmlNode("mtr",row));
          }
          node = createMmlNode("mtable",table);
          node.setAttribute("columnlines", columnlines.join(" "));
          if (typeof symbol.invisible == "boolean" && symbol.invisible) node.setAttribute("columnalign","left");
          newFrag.replaceChild(node,newFrag.firstChild);
        }
       }
      }
    }
    str = AMremoveCharsAndBlanks(str,symbol.input.length);
    if (typeof symbol.invisible != "boolean" || !symbol.invisible) {
      node = createMmlNode("mo",document.createTextNode(symbol.output));
      newFrag.appendChild(node);
    }
  }
  return [newFrag,str];
}

function parseMath(str,latex) {
  var frag, node;
  AMnestingDepth = 0;
  //some basic cleanup for dealing with stuff editors like TinyMCE adds
  str = str.replace(/&nbsp;/g,"");
  str = str.replace(/&gt;/g,">");
  str = str.replace(/&lt;/g,"<");
  frag = AMparseExpr(str.replace(/^\s+/g,""),false)[0];
  node = createMmlNode("mstyle",frag);
  if (mathcolor != "") node.setAttribute("mathcolor",mathcolor);
  if (mathfontsize != "") {
	  node.setAttribute("fontsize", mathfontsize);
	  node.setAttribute("mathsize", mathfontsize);
  }
  if (mathfontfamily != "") {
	  node.setAttribute("fontfamily", mathfontfamily);
	  node.setAttribute("mathvariant", mathfontfamily);
  }

  if (displaystyle) node.setAttribute("displaystyle","true");
  node = createMmlNode("math",node);
  if (showasciiformulaonhover)                      //fixed by djhsu so newline
    node.setAttribute("title",str.replace(/\s+/g," "));//does not show in Gecko
  return node;
}

/*
function strarr2docFrag(arr, linebreaks, latex) {
  var newFrag=document.createDocumentFragment();
  var expr = false;
  for (var i=0; i<arr.length; i++) {
    if (expr) newFrag.appendChild(parseMath(arr[i],latex));
    else {
      var arri = (linebreaks ? arr[i].split("\n\n") : [arr[i]]);
      newFrag.appendChild(createElementXHTML("span").
      appendChild(document.createTextNode(arri[0])));
      for (var j=1; j<arri.length; j++) {
        newFrag.appendChild(createElementXHTML("p"));
        newFrag.appendChild(createElementXHTML("span").
        appendChild(document.createTextNode(arri[j])));
      }
    }
    expr = !expr;
  }
  return newFrag;
}

function AMautomathrec(str) {
//formula is a space (or start of str) followed by a maximal sequence of *two* or more tokens, possibly separated by runs of digits and/or space.
//tokens are single letters (except a, A, I) and ASCIIMathML tokens
  var texcommand = "\\\\[a-zA-Z]+|\\\\\\s|";
  var ambigAMtoken = "\\b(?:oo|lim|ln|int|oint|del|grad|aleph|prod|prop|sinh|cosh|tanh|cos|sec|pi|tt|fr|sf|sube|supe|sub|sup|det|mod|gcd|lcm|min|max|vec|ddot|ul|chi|eta|nu|mu)(?![a-z])|";
  var englishAMtoken = "\\b(?:sum|ox|log|sin|tan|dim|hat|bar|dot)(?![a-z])|";
  var secondenglishAMtoken = "|\\bI\\b|\\bin\\b|\\btext\\b"; // took if and or not out
  var simpleAMtoken = "NN|ZZ|QQ|RR|CC|TT|AA|EE|sqrt|dx|dy|dz|dt|xx|vv|uu|nn|bb|cc|csc|cot|alpha|beta|delta|Delta|epsilon|gamma|Gamma|kappa|lambda|Lambda|omega|phi|Phi|Pi|psi|Psi|rho|sigma|Sigma|tau|theta|Theta|xi|Xi|zeta"; // uuu nnn?
  var letter = "[a-zA-HJ-Z](?=(?:[^a-zA-Z]|$|"+ambigAMtoken+englishAMtoken+simpleAMtoken+"))|";
  var token = letter+texcommand+"\\d+|[-()[\\]{}+=*&^_%\\\@/<>,\\|!:;'~]|\\.(?!(?:\x20|$))|"+ambigAMtoken+englishAMtoken+simpleAMtoken;
  var re = new RegExp("(^|\\s)((("+token+")\\s?)(("+token+secondenglishAMtoken+")\\s?)+)([,.?]?(?=\\s|$))","g");
  str = str.replace(re," `$2`$7");
  var arr = str.split(AMdelimiter1);
  var re1 = new RegExp("(^|\\s)([b-zB-HJ-Z+*<>]|"+texcommand+ambigAMtoken+simpleAMtoken+")(\\s|\\n|$)","g");
  var re2 = new RegExp("(^|\\s)([a-z]|"+texcommand+ambigAMtoken+simpleAMtoken+")([,.])","g"); // removed |\d+ for now
  for (i=0; i<arr.length; i++)   //single nonenglish tokens
    if (i%2==0) {
      arr[i] = arr[i].replace(re1," `$2`$3");
      arr[i] = arr[i].replace(re2," `$2`$3");
      arr[i] = arr[i].replace(/([{}[\]])/,"`$1`");
    }
  str = arr.join(AMdelimiter1);
  str = str.replace(/((^|\s)\([a-zA-Z]{2,}.*?)\)`/g,"$1`)");  //fix parentheses
  str = str.replace(/`(\((a\s|in\s))(.*?[a-zA-Z]{2,}\))/g,"$1`$3");  //fix parentheses
  str = str.replace(/\sin`/g,"` in");
  str = str.replace(/`(\(\w\)[,.]?(\s|\n|$))/g,"$1`");
  str = str.replace(/`([0-9.]+|e.g|i.e)`(\.?)/gi,"$1$2");
  str = str.replace(/`([0-9.]+:)`/g,"$1");
  return str;
}

function processNodeR(n, linebreaks,latex) {
  var mtch, str, arr, frg, i;
  if (n.childNodes.length == 0) {
   if ((n.nodeType!=8 || linebreaks) &&
    n.parentNode.nodeName!="form" && n.parentNode.nodeName!="FORM" &&
    n.parentNode.nodeName!="textarea" && n.parentNode.nodeName!="TEXTAREA"
      //&&
      //n.parentNode.nodeName!="pre" && n.parentNode.nodeName!="PRE"
    ) {
    str = n.nodeValue;
    if (!(str == null)) {
      str = str.replace(/\r\n\r\n/g,"\n\n");
      str = str.replace(/\x20+/g," ");
      str = str.replace(/\s*\r\n/g," ");
      if(latex) {
// DELIMITERS:
        mtch = (str.indexOf("\$")==-1 ? false : true);
        str = str.replace(/([^\\])\$/g,"$1 \$");
        str = str.replace(/^\$/," \$");	// in case \$ at start of string
        arr = str.split(" \$");
        for (i=0; i<arr.length; i++)
	  arr[i]=arr[i].replace(/\\\$/g,"\$");
      } else {
      mtch = false;
      str = str.replace(new RegExp(AMescape1, "g"),
              function(){mtch = true; return "AMescape1"});
      str = str.replace(/\\?end{?a?math}?/i,
              function(){automathrecognize = false; mtch = true; return ""});
      str = str.replace(/amath\b|\\begin{a?math}/i,
              function(){automathrecognize = true; mtch = true; return ""});
      arr = str.split(AMdelimiter1);
      if (automathrecognize)
        for (i=0; i<arr.length; i++)
          if (i%2==0) arr[i] = AMautomathrec(arr[i]);
      str = arr.join(AMdelimiter1);
      arr = str.split(AMdelimiter1);
      for (i=0; i<arr.length; i++) // this is a problem ************
        arr[i]=arr[i].replace(/AMescape1/g,AMdelimiter1);
      }
      if (arr.length>1 || mtch) {
        if (!noMathML) {
          frg = strarr2docFrag(arr,n.nodeType==8,latex);
          var len = frg.childNodes.length;
          n.parentNode.replaceChild(frg,n);
          return len-1;
        } else return 0;
      }
    }
   } else return 0;
  } else if (n.nodeName!="math") {
    for (i=0; i<n.childNodes.length; i++)
      i += processNodeR(n.childNodes[i], linebreaks,latex);
  }
  return 0;
}

function AMprocessNode(n, linebreaks, spanclassAM) {
  var frag,st;
  if (spanclassAM!=null) {
    frag = document.getElementsByTagName("span")
    for (var i=0;i<frag.length;i++)
      if (frag[i].className == "AM") 
        processNodeR(frag[i],linebreaks,false);
  } else {
    try {
      st = n.innerHTML; // look for AMdelimiter on page
    } catch(err) {}
//alert(st)
    if (st==null || /amath\b|\\begin{a?math}/i.test(st) ||
      st.indexOf(AMdelimiter1+" ")!=-1 || st.slice(-1)==AMdelimiter1 ||
      st.indexOf(AMdelimiter1+"<")!=-1 || st.indexOf(AMdelimiter1+"\n")!=-1) {
      processNodeR(n,linebreaks,false);
    }
  }
}

function generic(){
  if(!init()) return;
  if (translateOnLoad) {
      translate();
  }
};
//setup onload function
if(typeof window.addEventListener != 'undefined'){
  //.. gecko, safari, konqueror and standard
  window.addEventListener('load', generic, false);
}
else if(typeof document.addEventListener != 'undefined'){
  //.. opera 7
  document.addEventListener('load', generic, false);
}
else if(typeof window.attachEvent != 'undefined'){
  //.. win/ie
  window.attachEvent('onload', generic);
}else{
  //.. mac/ie5 and anything else that gets this far
  //if there's an existing onload function
  if(typeof window.onload == 'function'){
    //store it
    var existing = onload;
    //add new onload handler
    window.onload = function(){
      //call existing onload function
      existing();
      //call generic onload function
      generic();
    };
  }else{
    window.onload = generic;
  }
}

//expose some functions to outside
asciimath.newcommand = newcommand;
asciimath.newsymbol = newsymbol;
asciimath.AMprocesssNode = AMprocessNode;
asciimath.parseMath = parseMath;
asciimath.translate = translate;
})();

*/

/******************************************************************
 *
 *   The previous section is ASCIIMathML.js Version 2.2
 *   (c) Peter Jipsen, used with permission.
 *
 ******************************************************************/

var showasciiformulaonhover = false;
var mathfontfamily = "";
var mathcolor = "";
var mathfontsize = "";

//
//  Remove remapping of mathvariants to plane1 (MathJax handles that)
//  Change functions to mi rather than mo (to get spacing right)
//
(function () {
  for (var i = 0, m = AMsymbols.length; i < m; i++) {
    if (AMsymbols[i].codes) {delete AMsymbols[i].codes}
    if (AMsymbols[i].func) {AMsymbols[i].tag = "mi"}
  }
})();

//
//  Access to AsciiMath functions and values
//
ASCIIMATH.Augment({
  AM: {
    Init: function () {
      displaystyle = ASCIIMATH.config.displaystyle;
      // Old versions use the "decimal" option, so take it into account if it
      // is defined by the user. See issue 384.
      decimalsign  = (ASCIIMATH.config.decimal || ASCIIMATH.config.decimalsign);
      // unfix phi and varphi, if requested
      if (!ASCIIMATH.config.fixphi) {
        for (var i = 0, m = AMsymbols.length; i < m; i++) {
          if (AMsymbols[i].input === "phi")    {AMsymbols[i].output = "\u03C6"}
          if (AMsymbols[i].input === "varphi") {AMsymbols[i].output = "\u03D5"; i = m}
        }
      }
   
      INITASCIIMATH();
      initSymbols();
    },
    Augment: function (def) {
      for (var id in def) {if (def.hasOwnProperty(id)) {
	switch (id) {
	 case "displaystyle": displaystyle = def[id]; break;
	 case "decimal": decimal = def[id]; break;
	 case "parseMath": parseMath = def[id]; break;
	 case "parseExpr": AMparseExpr = def[id]; break;
	 case "parseIexpr": AMparseIexpr = def[id]; break;
	 case "parseSexpr": AMparseSexpr = def[id]; break;
	 case "removeBrackets": AMremoveBrackets = def[id]; break;
	 case "getSymbol": AMgetSymbol = def[id]; break;
	 case "position": position = def[id]; break;
	 case "removeCharsAndBlanks": AMremoveCharsAndBlanks = def[id]; break;
	 case "createMmlNode": createMmlNode = def[id]; break;
	 case "createElementMathML": AMcreateElementMathML = def[id]; break;
	 case "createElementXHTML": createElementXHTML = def[id]; break;
	 case "initSymbols": initSymbols = def[id]; break;
	 case "refreshSymbols": refreshSymbols = def[id]; break;
	 case "compareNames": compareNames = def[id]; break;
	};
        this[id] = def[id];
      }};
    },
    parseMath:  parseMath,
    parseExpr:  AMparseExpr,
    parseIexpr: AMparseIexpr,
    parseSexr:  AMparseSexpr,
    removeBrackets: AMremoveBrackets,
    getSymbol:  AMgetSymbol,
    position:   position,
    removeCharsAndBlanks: AMremoveCharsAndBlanks,
    createMmlNode: createMmlNode,
    createElementMathML: AMcreateElementMathML,
    createElementXHTML:  createElementXHTML,
    initSymbols: initSymbols,
    refreshSymbols: refreshSymbols,
    compareNames: compareNames,
    
    createDocumentFragment: DOCFRAG,
    document: document,
    
    define: define,
    newcommand: newcommand,
    newsymbol: newsymbol,
    symbols: AMsymbols,
    names: AMnames,
        
    TOKEN: {
      CONST:CONST, UNARY:UNARY, BINARY:BINARY, INFIX:INFIX,
      LEFTBRACKET:LEFTBRACKET, RIGHTBRACKET:RIGHTBRACKET, SPACE:SPACE,
      UNDEROVER:UNDEROVER, DEFINITION:DEFINITION, LEFTRIGHT:LEFTRIGHT, TEXT:TEXT,
      UNARYUNDEROVER:UNARYUNDEROVER
    }
  }
});

//
//  Make minimizer think these have been used
//
var junk = [window, navigator]; junk = null;
  
})(MathJax.InputJax.AsciiMath);


/************************************************************************/

(function (ASCIIMATH) {
  var MML;
  
  ASCIIMATH.Augment({
    sourceMenuTitle: /*_(MathMenu)*/ ["AsciiMathInput","AsciiMath Input"],
    annotationEncoding: "text/x-asciimath",

    prefilterHooks:    MathJax.Callback.Hooks(true),   // hooks to run before processing AsciiMath
    postfilterHooks:   MathJax.Callback.Hooks(true),   // hooks to run after processing AsciiMath

    Translate: function (script) {
      var mml, math = MathJax.HTML.getScript(script);
      var data = {math:math, script:script};
      var callback = this.prefilterHooks.Execute(data); if (callback) return callback;
      math = data.math;
      try {
        mml = this.AM.parseMath(math);
      } catch(err) {
        if (!err.asciimathError) {throw err}
        mml = this.formatError(err,math);
      }
      data.math = MML(mml); this.postfilterHooks.Execute(data);
      return this.postfilterHooks.Execute(data) || data.math;
    },
    formatError: function (err,math,script) {
      var message = err.message.replace(/\n.*/,"");
      MathJax.Hub.signal.Post(["AsciiMath Jax - parse error",message,math,script]);
      return MML.Error(message);
    },
    Error: function (message) {
      throw MathJax.Hub.Insert(Error(message),{asciimathError: true});
    },
    //
    //  Initialize the MML variable and AsciiMath itself
    //
    Startup: function () {
      MML = MathJax.ElementJax.mml;
      this.AM.Init();
    }
  });

  ASCIIMATH.loadComplete("jax.js");
  
})(MathJax.InputJax.AsciiMath);





/***/ }),

/***/ 287:
/***/ (() => {

(function () {
  var MML = MathJax.ElementJax.mml;
  
  var PROPERTY = [
    'texWithDelims',
    'movesupsub',
    'subsupOK',
    'primes',
    'movablelimits',
    'scriptlevel',
    'open',
    'close',
    'isError',
    'multiline',
    'variantForm',
    'autoOP',
    'fnOP'  
  ];
  var RENAME = {
      texWithDelims: 'withDelims'
  };

  MML.mbase.Augment({
    toMmlNode: function (factory) {
      var kind = this.type;
      if (kind === 'texatom') kind = 'TeXAtom';
      if (kind === 'text') kind = '#text';
      var node = this.nodeMake(factory, kind);
      if ("texClass" in this) node.texClass = this.texClass;
      return node;
    },
    nodeMake: function (factory,kind) {
      var node = factory.MML[kind === 'TeXmathchoice' ? 'mathchoice' : kind]();
      var data = (this.data[0] && this.data[0].inferred && this.inferRow ? this.data[0].data : this.data);
      for (var i = 0, m = data.length; i < m; i++) {
        var child = data[i];
        if (child) node.appendChild(child.toMmlNode(factory));
      }
      this.nodeAddAttributes(node);
      this.nodeAddProperties(node);
      return node;
    },
    nodeAddAttributes: function (node) {
      var defaults = (this.type === "mstyle" ? MML.math.prototype.defaults : this.defaults);
      var names = (this.attrNames||MML.copyAttributeNames),
          skip = MML.skipAttributes,
          copy = MML.copyAttributes;
      if (!this.attrNames) {
        for (var id in defaults) {
          if (!skip[id] && !copy[id] && defaults.hasOwnProperty(id)) {
            if (this[id] != null && this[id] !== defaults[id]) {
              if (this.Get(id,null,1) !== this[id]) node.attributes.set(id,this[id]);
            }
          }
        }
        if (this['class']) node.attributes.set('class',this['class']);
      }
      for (var i = 0, m = names.length; i < m; i++) {
        if (copy[names[i]] === 1 && !defaults.hasOwnProperty(names[i])) continue;
        var value = (this.attr||{})[names[i]];
        if (value == null) value = this[names[i]];
        if (value === 'true' || value === 'false') value = (value === 'true');
        if (value != null) node.attributes.set(names[i],value);
      }
    },
    nodeAddProperties: function (node) {
      for (var i = 0, m = PROPERTY.length; i < m; i++) {
        var name = PROPERTY[i];
        if (this[name] != null &&
            (this.defaults[name] == null || this.defaults[name] === MML.AUTO)) {
          node.setProperty(RENAME[name] || name, this[name]);
        }
      }
    }
  });
  
  MML.chars.Augment({
    toMmlNode: function (factory) {
      return factory.MML.text().setText(this.data.join(""));
    }
  });
  MML.entity.Augment({
    toMmlNode: function (factory) {
      return factory.MML.text().setText(this.toString());
    }
  });
  
  MML.msubsup.Augment({
    toMmlNode: function (factory) {
      var kind = (this.data[this.sub] == null ? 'msup' :
                  this.data[this.sup] == null ? 'msub' : 'msubsup'); 
      return this.nodeMake(factory, kind);
    }
  });
  
  MML.munderover.Augment({
    toMmlNode: function (factory) {
      var kind = (this.data[this.under] == null ? 'mover' :
                  this.data[this.over]  == null ? 'munder' : 'munderover'); 
      return this.nodeMake(factory, kind);
    }
  });
  
  MML.xml.Augment({
    toMmlNode: function (factory) {
      return factory.MML.xml(this.data);
    }
  });
  
})();


/***/ }),

/***/ 625:
/***/ (() => {

/* -*- Mode: Javascript; indent-tabs-mode:nil; js-indent-level: 2 -*- */
/* vim: set ts=2 et sw=2 tw=80: */

/*************************************************************
 *
 *  MathJax/jax/input/AsciiMath/config.js
 *
 *  Initializes the AsciiMath InputJax (the main definition is in
 *  MathJax/jax/input/AsciiMath/jax.js, which is loaded when needed).
 *  
 *  Originally adapted for MathJax by David Lippman.
 *  Additional work done by Davide P. Cervone.
 *  
 *  ---------------------------------------------------------------------
 *  
 *  Copyright (c) 2012-2017 The MathJax Consortium
 * 
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

MathJax.InputJax.AsciiMath = MathJax.InputJax({
  id: "AsciiMath",
  version: "2.7.2",
  directory: MathJax.InputJax.directory + "/AsciiMath",
  extensionDir: MathJax.InputJax.extensionDir + "/AsciiMath",
  
  config: {
    fixphi: true,                     // switch phi and varphi unicode values
    useMathMLspacing: true,           // use MathML spacing rather than TeX spacing?
    displaystyle: true,               // put limits above and below operators
    decimalsign: "."                  // can change to "," but watch out for "(1,2)"
  }
});
MathJax.InputJax.AsciiMath.Register("math/asciimath");

MathJax.InputJax.AsciiMath.loadComplete("config.js");


/***/ }),

/***/ 885:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

MathJax = Object.assign(__webpack_require__.g.MathJax || {}, (__webpack_require__(123)/* .MathJax */ .E));

//
//  Load component-based configuration, if any
//
if (MathJax.config && MathJax.config.asciimath) {
  MathJax.Hub.Config({AsciiMath: MathJax.config.asciimath});
}

MathJax.Ajax.Preloading(
  "[MathJax]/jax/input/AsciiMath/config.js",
  "[MathJax]/jax/input/AsciiMath/jax.js",
  "[MathJax]/jax/element/mml/jax.js"
);

__webpack_require__(15);
__webpack_require__(625);
__webpack_require__(124);

__webpack_require__(287);

module.exports.m = MathJax.InputJax.AsciiMath;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";

// NAMESPACE OBJECT: ./mjs/input/asciimath/legacy.js
var legacy_namespaceObject = {};
__webpack_require__.r(legacy_namespaceObject);
__webpack_require__.d(legacy_namespaceObject, {
  LegacyAsciiMath: () => (LegacyAsciiMath)
});

// NAMESPACE OBJECT: ./mjs/input/asciimath/FindAsciiMath.js
var FindAsciiMath_namespaceObject = {};
__webpack_require__.r(FindAsciiMath_namespaceObject);
__webpack_require__.d(FindAsciiMath_namespaceObject, {
  FindAsciiMath: () => (FindAsciiMath)
});

// NAMESPACE OBJECT: ./mjs/input/asciimath.js
var asciimath_namespaceObject = {};
__webpack_require__.r(asciimath_namespaceObject);
__webpack_require__.d(asciimath_namespaceObject, {
  AsciiMath: () => (AsciiMath)
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

// EXTERNAL MODULE: ./mjs/input/asciimath/legacy/shim.js
var shim = __webpack_require__(885);
;// ./components/mjs/core/lib/core/MmlTree/MmlFactory.js
const MmlFactory_def = MathJax._.core.MmlTree.MmlFactory;
const MmlFactory = MmlFactory_def.MmlFactory;

;// ./mjs/input/asciimath/legacy.js


const factory = new MmlFactory();
const LegacyAsciiMath = {
    Compile: function (am, display) {
        const script = {
            type: 'math/asciimath',
            innerText: am,
            MathJax: {},
        };
        const node = shim/* AsciiMath */.m.Translate(script).root.toMmlNode(factory);
        node.setInheritedAttributes({}, display, 0, false);
        return node;
    },
    Translate: function (am, display) {
        return this.Compile(am, display);
    },
};
//# sourceMappingURL=legacy.js.map
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

;// ./mjs/input/asciimath/FindAsciiMath.js



class FindAsciiMath extends AbstractFindMath {
    constructor(options) {
        super(options);
        this.getPatterns();
    }
    getPatterns() {
        const options = this.options;
        const starts = [];
        this.end = {};
        options['delimiters'].forEach((delims) => this.addPattern(starts, delims, false));
        this.start = new RegExp(starts.join('|'), 'g');
        this.hasPatterns = starts.length > 0;
    }
    addPattern(starts, delims, display) {
        const [open, close] = delims;
        starts.push(quotePattern(open));
        this.end[open] = [close, display, new RegExp(quotePattern(close), 'g')];
    }
    findEnd(text, n, start, end) {
        const [, display, pattern] = end;
        const i = (pattern.lastIndex = start.index + start[0].length);
        const match = pattern.exec(text);
        return !match
            ? null
            : protoItem(start[0], match.index < i ? '' : text.substring(i, match.index), match[0], n, start.index, match.index + match[0].length, display);
    }
    findMathInString(math, n, text) {
        let start, match;
        this.start.lastIndex = 0;
        while ((start = this.start.exec(text))) {
            match = this.findEnd(text, n, start, this.end[start[0]]);
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
FindAsciiMath.OPTIONS = {
    delimiters: [['`', '`']],
};
//# sourceMappingURL=FindAsciiMath.js.map
;// ./mjs/input/asciimath.js




class AsciiMath extends AbstractInputJax {
    constructor(options) {
        const [, find, am] = separateOptions(options, FindAsciiMath.OPTIONS, AsciiMath.OPTIONS);
        super(am);
        this.findAsciiMath =
            this.options['FindAsciiMath'] || new FindAsciiMath(find);
    }
    compile(math, _document) {
        return LegacyAsciiMath.Compile(math.math, math.display);
    }
    findMath(strings) {
        return this.findAsciiMath.findMath(strings);
    }
}
AsciiMath.NAME = 'AsciiMath';
AsciiMath.OPTIONS = Object.assign(Object.assign({}, AbstractInputJax.OPTIONS), { FindAsciiMath: null });
//# sourceMappingURL=asciimath.js.map
;// ./components/mjs/input/asciimath/lib/asciimath.js







if (MathJax.loader) {
  MathJax.loader.checkVersion('input/asciimath', VERSION, 'input');
}

combineWithMathJax({_: {
  input: {
    asciimath_ts: asciimath_namespaceObject,
    asciimath: {
      FindAsciiMath: FindAsciiMath_namespaceObject,
      legacy_ts: legacy_namespaceObject
    }
  }
}});

;// ./components/mjs/input/asciimath/asciimath.js




if (MathJax.startup) {
  MathJax.startup.registerConstructor('asciimath', AsciiMath);
  MathJax.startup.useInput('asciimath');
}

})();

/******/ })()
;