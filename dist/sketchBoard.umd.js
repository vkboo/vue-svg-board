/*! Build Time = 2019/12/07 17:03 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["sketchBoard"] = factory();
	else
		root["sketchBoard"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "dc8c");
/******/ })
/************************************************************************/
/******/ ({

/***/ "00d5":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("01f5");
var call = __webpack_require__("8bbc");
var isArrayIter = __webpack_require__("c847");
var anObject = __webpack_require__("a013");
var toLength = __webpack_require__("b146");
var getIterFn = __webpack_require__("1a9b");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "01f5":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("648a");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "03b3":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "0d33":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_erasePopover_vue_vue_type_style_index_1_id_5983cbfc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7482");
/* harmony import */ var _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_erasePopover_vue_vue_type_style_index_1_id_5983cbfc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_erasePopover_vue_vue_type_style_index_1_id_5983cbfc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_erasePopover_vue_vue_type_style_index_1_id_5983cbfc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "0d5f":
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__("a013");
var aFunction = __webpack_require__("648a");
var SPECIES = __webpack_require__("8b37")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "0e44":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("88dd");
var anObject = __webpack_require__("a013");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("01f5")(Function.call, __webpack_require__("acb9").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "0eec":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__("b2f5");
var $values = __webpack_require__("50e0")(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),

/***/ "14fc":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "16f0":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAAEgBckRAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABAZJREFUeNpiZICCzz///4exedkZGRnRBWGACZsgWAKZ07jzL5zNiFMHyCJsEgABBHPRfpBOKG7AbxQuUzAkFp/5x0CeUQABBAuSBCA1n4EAAIchyAtAtgMDkYAJWTEsCCu2/MWpAacnQGDW8X8MLmqMDEfv/2eINWGCawCFZD2xTmLElkDweRoggJA1GACp87gUogfrf2KcAwvW/wzEg0RSNeBOAgQ1nH2CsAiZjVPD6gv/4II/fqMqAkUccnb4jw1nr/2DQsMwfTx9gFjFoIgD5XdHIPsDEeoDQQRAADGilQcKQOo+A2XgANQRKGmPGgajgw9AiwQZ8eUCagCSo5lUwIJLAlSQXn2BsNtGkZHBR5uJOj4AFXoN7swMHKyY4h0+zLQNIlDJqyXByBCqz0SU5WTHweqL/xjOPv7PIMjFALZMSZhxYCIZf01MObjAhF7qUxEEAs01ZMTSfCCqosblYpChyAIAAcSIo41CUm0KLTELgYZfwFnTwho/pLQccABFoEUPyKrKSalfgZYsQC5N3wMpASpHMtgnTNBIFaBBKrpPj4xmSGsLDtC+qGCgMcBa4YCaRg07URvCpNYDBCucfDsmBkk+RnjjDdQ2I8cSjCB6/x1CwwwHAWMZRnB5D2ql4wL33v4nzgJQJeKihhk1aZZMYENgDsDWRSDKAlA/AoSxgXJnZobOvZidlD23IDUbxalIkBNYPRowgeMIFiSgqnPPrX8M5U7M1KsyQcE06/hfhvffgPEji9kAoG+dTOuMRmsLGkFBBGr4GtDCdFiHwpBWJSlyEAXSwPWOcAuAnA1UtOQDcjuLCcnGDVCJCxRW9oLIAgABRrBFB62z82mVEPA14oB4Iqx1QnCEA83RAdDWowDD4AAfoKG/gVDDEeTw9QyDGwQie4SRyq1eegH4UAKs4Xt+ANI4xXkEVIYyQTsyQ83xIGAAcjvNa+OhXhnTHLCQownUmgONcoLo79DRT20JRgZrRUacgyG0AiQlIdjgFycrA9CxTODWIqiZCmpBgpqloAY5uJVPoBU5IB6YdOgfw7NPkB4DrkY9CGy5+o/hyH2IJ/PsmMEeHPA8AOqYgRwPSh74HA8CoOFIUO8EBEA9FJQBdSIASD2o00GsPqI8IMXHAA55X23i0jco1OvdmcEe3gyMEVDsEQNAXWZQUgQBJWEa5AFywDVgnlkEnYHDlzeeA2MY1DkFFQqgrh+otzwoPICcDJHnbrABcjL/aEU2GDxwYAi7/wDN55xoDAyZoMPjiUPQ8aAe2gXkDo0CNCYEBrnDQd1LQ9h0AfKowQNojz9xkIe6INa5DiwdewVox36gu5kHoA5/QPSoBA4PgTI7qNNvT0NPgRx7EIg3YJu6wgYAvHQAV++06dMAAAAASUVORK5CYII="

/***/ }),

/***/ "1a9b":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("4819");
var ITERATOR = __webpack_require__("8b37")('iterator');
var Iterators = __webpack_require__("14fc");
module.exports = __webpack_require__("a4cc").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "1ce9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("3754");
var $export = __webpack_require__("b2f5");
var redefine = __webpack_require__("e5ef");
var redefineAll = __webpack_require__("f216");
var meta = __webpack_require__("3cc6");
var forOf = __webpack_require__("00d5");
var anInstance = __webpack_require__("d74e");
var isObject = __webpack_require__("88dd");
var fails = __webpack_require__("b6f1");
var $iterDetect = __webpack_require__("5b55");
var setToStringTag = __webpack_require__("6594");
var inheritIfRequired = __webpack_require__("44de");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ "1f98":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__("f425");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "21de":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__("b2f5");
var $entries = __webpack_require__("50e0")(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});


/***/ }),

/***/ "22e9":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__("88dd");
var cof = __webpack_require__("94ac");
var MATCH = __webpack_require__("8b37")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "22f3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__("dad2");
var getKeys = __webpack_require__("cfc7");
var gOPS = __webpack_require__("f7c1");
var pIE = __webpack_require__("d217");
var toObject = __webpack_require__("db4b");
var IObject = __webpack_require__("6462");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("b6f1")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "2338":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__("b2f5");
var ownKeys = __webpack_require__("2e9a");
var toIObject = __webpack_require__("3a68");
var gOPD = __webpack_require__("acb9");
var createProperty = __webpack_require__("f59b");

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});


/***/ }),

/***/ "265a":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("3754").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "26bd":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAAEgBckRAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAmtJREFUeNpiZICCzz///4exedkZGRnRBWGACZsgCLDAGIHernDB9Vt3MzDi0sEEsgibBEAAwVy0H6QTihtAYriNwmUKC7qLCLsKl1EAAQQLkgQgNZ+BAACHIcgLQLYDA5EAp5twASYGEgFIQyMpGhixJRB8ngYIIGQNBkDqPC6F6MFKlMdhwUpKKCXSJ1hJAlgzCzqoqGlkMLe0omPSIFnDAWIVgyIOlN8dgewPRKgPBBEAAcSIVh4oAKn7DJSBA1BHoKQ9ahiMDj4ALRJkxJcLqAFIThc0TxajFgxBC/DWxJSDC0zopT4VQSDQXENGLM0HoipqXC4GGYosABBAjDjaKKB2ST0p5Q8QFwINv4CzpoU1fkhpOeAAikCLHpBVlZNSvwItWYBcmr4HUgJUjmSwT5igkSpAg1R0nx6lqSGtLTgwWh+MAAtY0AVOHj/G0NFST5ZhoM7QaKti1AKqg0ZQKgI1fA1oYTqsQ2FIq5IUOYgCaeB6R7gFQM4GKlryAbmdxYRk4waoxAUKK3tBZAGAACPYooPW2fm0Sgj4GnFAPBHWOiE4woHm6ABo61GAYXCAD9DQ30Co4Qhy+HqGwQ0CkT3CSOVWL70AfCgB1vA9PwBpnOI8AipDmaAdmaHmeBAwALmd5g2WIV/bj3pg1AODHLAQo4iSrg65AHkgHm9TYrQUGvXAqAeGvgcODGH3H6D5nBONgSETdHg8cQg6HtRDu4DcoVGAxoTAIHc4qHtpCJsuQB41eADt8ScO8lAXxDrXgaVjrwDt2A90N/MA1OEPiB6VwOEhUGYHdfrtaegpkGMPAvEGbFNX2AAABg335yOxg6oAAAAASUVORK5CYII="

/***/ }),

/***/ "2841":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAAHeTXxYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAoxJREFUeNpiYMAGourX/M9e++c/XOA/EGQu+wgWYIQJuri4NACpDQABhKIVLAvS++/nVwaGz58/g7T+BypNQNbDABBAKCCmbTvcdBBgAhE7d+4Ea+VVsGJgYucGmwnUbQDXhWE2EAAEEGEAUg01aj6IzwwTVM/cARYQMY0x4H93TIEZJLh79+75V7f0MnwUsgTrZuUTNwCpnv8fCrq6uv6DnI9sPlgS5HyUMIHZA6QUYHyAAGLG50rjgOLzUty/FO7du7cRI4TRFUs4Fc/nV3eFi4FC//a84AV79uxJxHBCaWnp/IsXLzLcl0kHBy06gGoGa2SYNm3af3QA8jUowkABCcKgEMCIBlBIwOIIGRQXFxOOM5hmUDDiUgwQQNQFQFv+ewZG/8cmx4JLAzDRgNne7Dz/t66YyUgonuAaYODB6mwGZI2MhDRg08iErAGYZMGS2IBC6FQGmB+ZkDWAwJblM3Bq/P35JSLP/8cCvCPS4akBmr1QQzI9Pf0/Po0YGghpxKkBl0aCGtA14tPAiCNFoBdusMIxAJgRGwACjJHMdAkq8wJAcQ40ZAExehhJtACUveYDixAGUBECyv2PNpUx/HxzF158UGQRugXYihtCFjJSYgEpFjLis0BfX5/hxtMvDHJ+XVgLTlIsZMRmAbBkZnBzc4OLd3d3Mxw8d5dkC18dncnw/tL6Rniqg6ai8+gWoANiLfx4czfDi329IGYiLFXCSkkDcXFxBisrK7wuBDmkFI+F2CzAVUjOV1ZWTujp6WHg4eEhGDQwC0EJ5dXRGVgtIFg1gYoIbHUbMoBWXZRXX7gsJMcCYjPsfGAcJlhbWzOsW7cOJHQBiDdiUboBGHQXkIoouBgDvQAA5Mc6IXmKp1wAAAAASUVORK5CYII="

/***/ }),

/***/ "2881":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAAEgBckRAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAmtJREFUeNpiZICCzz///4exedkZGRnRBWGACZsgCLDAGBVb/sIFO3yYGRhx6WACWYRNAiCAYC7aD9IJxQ0gMdxG4TKFBd1FhF2FyyiAAIIFSQKQms9AAIDDEOQFINuBgUiA0024ABMDiQCkoZEUDYzYEgg+TwMEELIGAyB1HpdC9GAlyuOwYCUllBLpE6wkAayZBR3EmTAxaEkw0jFpkKzhALGKQREHyu+OQPYHItQHggiAAGJEKw8UgNR9BsrAAagjUNIeNQxGBx+AFgky4ssF1AAkpwuaJ4tRC4agBXhrYsrBBSb0Up+KIBBoriEjluYDURU1LheDDEUWAAggRhxtFFC7pJ6U8geIC4GGX8BZ08IaP6S0HHAARaBFD8iqykmpX4GWLEAuTd8DKQEqRzLYJ0zQSBWgQSq6T4/S1JDWFhwYrQ9GgAUs6ALXXvxnWHTmH1mGgTpDo62KUQuoDhpBqQjU8DWghemwDoUhrUpS5CAKpIHrHeEWADkbqGjJB+R2FhOSjRugEhcorOwFkQUAAoxgiw5aZ+fTKiHga8QB8URY64TgCAeaowOgrUcBhsEBPkBDfwOhhiPI4esZBjcIRPYII5VbvfQC8KEEWMP3/ACkcYrzCKgMZYJ2ZIaa40HAAOR2mjdYhnxtP+qBUQ8McsBCjCJKujrkAuSBeLxNidFSaNQDox4Y+h44MITdf4Dmc040BoZM0OHxxCHoeFAP7QJyh0YBGhMCg9zhoO6lIWy6AHnU4AG0x584yENdEOtcB5aOvQK0Yz/Q3cwDUIc/IHpUAoeHQJkd1Om3p6GnQI49CMQbsE1dYQMAK4z3573h6RUAAAAASUVORK5CYII="

/***/ }),

/***/ "28cc":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("8751");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("85cb").default
var update = add("de3e6be0", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "299f":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("6de9");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("85cb").default
var update = add("7194c696", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "29f4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_board_vue_vue_type_style_index_0_id_2b73900c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("767d");
/* harmony import */ var _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_board_vue_vue_type_style_index_0_id_2b73900c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_board_vue_vue_type_style_index_0_id_2b73900c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_board_vue_vue_type_style_index_0_id_2b73900c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "2d43":
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__("01f5");
var IObject = __webpack_require__("6462");
var toObject = __webpack_require__("db4b");
var toLength = __webpack_require__("b146");
var asc = __webpack_require__("5824");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "2e9a":
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__("a891");
var gOPS = __webpack_require__("f7c1");
var anObject = __webpack_require__("a013");
var Reflect = __webpack_require__("3754").Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),

/***/ "2f03":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("c481");
var defined = __webpack_require__("f01a");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "35dd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__("4819");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "3754":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "3a59":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__("1f98");
__webpack_require__("b2f5")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "3a68":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("6462");
var defined = __webpack_require__("f01a");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "3b54":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__("2f03")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("7656")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "3c6b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__("a013");
var toLength = __webpack_require__("b146");
var advanceStringIndex = __webpack_require__("b0f4");
var regExpExec = __webpack_require__("35dd");

// @@match logic
__webpack_require__("629c")('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative($match, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      if (!rx.global) return regExpExec(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "3cb6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__("e6ef");
var validate = __webpack_require__("4678");
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__("1ce9")(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),

/***/ "3cc6":
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__("9d01")('meta');
var isObject = __webpack_require__("88dd");
var has = __webpack_require__("03b3");
var setDesc = __webpack_require__("ddf7").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__("b6f1")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "4199":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAAHeTXxYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2JJREFUeNpiYMAGvCPS/2ev/fMfLvD58+f/IEGsqgECCAUwuri4GKhn7jj/8809iMiFCxdQDQMBgACCA6Dy9zFt2/8D6fkwVSwwK3l4eBh8IjMYgOYlfLy5G1M3SNHOnTvhZgMEEE7ADGOA7OB/d+yhe8v58wIfzwQwgQRhRgDtmc/Ezg1ibmQCuijBzc2NYUoQM7JJD2DOnv8fCkBGgryB7CewJCgo8LoKIIBwhUgBECsg8RWA2AEewmiK54NCB8b/9uwSA4ewMgPUFwyPN5YxbFrUxwg3CeRVGIBFMzIGqtmPYRPIFmBQJBw7doxh/fr1YDFQvCiEToW75MW+Xoa1U8sZsflnfkBAwH90m1GCDE9gzO/q6sIalAABRB0ADd4GNDEHfBoMQCkWGlr/kTNMcHbnf6zxFFG54L+wSQyc//bMEgZk/s3pHo579uw5wIScL4wEXzH8+/kVrghZw+15IQwgDSA2E0zD7t27BUpLSxkUn8xE0QizcdfWDXBXgTUpKysLwASwaQTZCPMjPBudPXu28cWLFw0TJ05kcHd3ZwBlkms7JjG859ZjYGRhAysUMY1hAGYzxnv37iH8NHPmTEagjQzi4uIML1++xLARmsUXYA329HRwkoEnIVCqAIUqwZQB0ggDRKU5NBvfUy2pAQQY3QAjEYkeFGj7+dVdBZBCPhGYohYgqelnYucp4BBWYvj9+SUIX4CquUDQIpgFEk7FAkBLUORAloFKCyA4wC6i7CDn1wUvr2Dg3pJ4kIWGMMtY8FkCNESAV8EKQx5kMdRyrNkZVEWBfAYv1bGUrmALgAlVAJTKQaC7u5vh4Lm7DNhcjQ5Ahj9YnQ1M4F8WAH2SiCyHnNMbgIafB2VemCWw/Lhl+QxwDoEY8hWvRUBLQMyDOKs+UF4E5gEFYClu4ODgwMDGxgb2TUNDA4OEhARDXFwcQ1SIDzgvX9y7hIFPxQGen2GAlVccnLdZ+cQDxBhfNigpKS0EmvsBZ2IAFeBAKgFUlff09IBKHAw1hIIUlFiAiaYQGIQTCCZvkIVASxJAloEKmZKSEoYvX74wAIMXp4XQFAnyhSNy8ia2ApkPKpjWrl37HxsA1XugYgSqzoAaNdZ8UNkEavygWWBAccmAw0JQAwPUIgEl4weDqqwDAHSoBD4GeQb6AAAAAElFTkSuQmCC"

/***/ }),

/***/ "44de":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("88dd");
var setPrototypeOf = __webpack_require__("0e44").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "4678":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("88dd");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ "4713":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("03b3");
var toObject = __webpack_require__("db4b");
var IE_PROTO = __webpack_require__("dfab")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "4819":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("94ac");
var TAG = __webpack_require__("8b37")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "4fd9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_sketchPopover_vue_vue_type_style_index_1_id_715a6e9a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fe3a");
/* harmony import */ var _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_sketchPopover_vue_vue_type_style_index_1_id_715a6e9a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_sketchPopover_vue_vue_type_style_index_1_id_715a6e9a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_sketchPopover_vue_vue_type_style_index_1_id_715a6e9a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "50e0":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("dad2");
var getKeys = __webpack_require__("cfc7");
var toIObject = __webpack_require__("3a68");
var isEnum = __webpack_require__("d217").f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || isEnum.call(O, key)) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};


/***/ }),

/***/ "5325":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("88dd");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "539d":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("b2f5");
var defined = __webpack_require__("f01a");
var fails = __webpack_require__("b6f1");
var spaces = __webpack_require__("c9ea");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "540f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__("648a");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "5454":
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "568a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("dad2") && !__webpack_require__("b6f1")(function () {
  return Object.defineProperty(__webpack_require__("e3e0")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "5824":
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__("f691");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "5b34":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("a013");
var isObject = __webpack_require__("88dd");
var newPromiseCapability = __webpack_require__("540f");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "5b55":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("8b37")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "5d1b":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("5454");
exports = module.exports = __webpack_require__("690e")(false);
// imports


// module
exports.push([module.i, ".erase-wrap[data-v-5983cbfc]{-webkit-box-sizing:border-box;box-sizing:border-box;width:152px;height:82px;padding:13px 0;background:#fff;border-radius:8px;-ms-flex-pack:distribute;justify-content:space-around;-webkit-box-shadow:3px 3px 3px 0 rgba(0,0,0,.05);box-shadow:3px 3px 3px 0 rgba(0,0,0,.05);border:2px solid #f0f0f0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.erase-wrap[data-v-5983cbfc],.erase-wrap .item[data-v-5983cbfc]{display:-webkit-box;display:-ms-flexbox;display:flex}.erase-wrap .item[data-v-5983cbfc]{width:56px;height:56px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer}.erase-wrap .item.on[data-v-5983cbfc]{background:url(" + escape(__webpack_require__("f56b")) + ")}.erase-wrap .item .icon[data-v-5983cbfc]{display:inline-block;vertical-align:middle;position:relative;top:6px;width:28px;height:28px}.erase-wrap .item .icon.erase[data-v-5983cbfc]{background:url(" + escape(__webpack_require__("2841")) + ")}.erase-wrap .item .icon.clear[data-v-5983cbfc]{background:url(" + escape(__webpack_require__("4199")) + ")}.erase-wrap .item .text[data-v-5983cbfc]{display:inline-block;width:56px;text-align:center;font-size:12px;color:#666;position:relative;bottom:6px}", ""]);

// exports


/***/ }),

/***/ "5fe5":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("c481");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "629c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__("3a59");
var redefine = __webpack_require__("e5ef");
var hide = __webpack_require__("743d");
var fails = __webpack_require__("b6f1");
var defined = __webpack_require__("f01a");
var wks = __webpack_require__("8b37");
var regexpExec = __webpack_require__("1f98");

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "644a":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("8b37")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("743d")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "6462":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("94ac");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "648a":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "6594":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("ddf7").f;
var has = __webpack_require__("03b3");
var TAG = __webpack_require__("8b37")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "690e":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "6de9":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("690e")(false);
// imports


// module
exports.push([module.i, "li,ul{list-style:none;margin:0;padding:0}", ""]);

// exports


/***/ }),

/***/ "6e26":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("ca2b");
var global = __webpack_require__("3754");
var ctx = __webpack_require__("01f5");
var classof = __webpack_require__("4819");
var $export = __webpack_require__("b2f5");
var isObject = __webpack_require__("88dd");
var aFunction = __webpack_require__("648a");
var anInstance = __webpack_require__("d74e");
var forOf = __webpack_require__("00d5");
var speciesConstructor = __webpack_require__("0d5f");
var task = __webpack_require__("d1f6").set;
var microtask = __webpack_require__("9d86")();
var newPromiseCapabilityModule = __webpack_require__("540f");
var perform = __webpack_require__("e588");
var userAgent = __webpack_require__("82cd");
var promiseResolve = __webpack_require__("5b34");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__("8b37")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__("f216")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__("6594")($Promise, PROMISE);
__webpack_require__("c650")(PROMISE);
Wrapper = __webpack_require__("a4cc")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__("5b55")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "7266":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("a7b8");
var descriptor = __webpack_require__("7dea");
var setToStringTag = __webpack_require__("6594");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("743d")(IteratorPrototype, __webpack_require__("8b37")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "7364":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("ddf7").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__("dad2") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "743d":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("ddf7");
var createDesc = __webpack_require__("7dea");
module.exports = __webpack_require__("dad2") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "7482":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("5d1b");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("85cb").default
var update = add("83a61c06", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "7656":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("ca2b");
var $export = __webpack_require__("b2f5");
var redefine = __webpack_require__("e5ef");
var hide = __webpack_require__("743d");
var Iterators = __webpack_require__("14fc");
var $iterCreate = __webpack_require__("7266");
var setToStringTag = __webpack_require__("6594");
var getPrototypeOf = __webpack_require__("4713");
var ITERATOR = __webpack_require__("8b37")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "767d":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("fb18");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("85cb").default
var update = add("813ea3ee", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "7dea":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "82cd":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("3754");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "85cb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_vue-style-loader@4.1.2@vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/_vue-style-loader@4.1.2@vue-style-loader/lib/addStylesClient.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "8751":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("690e")(false);
// imports


// module
exports.push([module.i, "li,ul{list-style:none;margin:0;padding:0}", ""]);

// exports


/***/ }),

/***/ "8812":
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "88dd":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "8b37":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("adbd")('wks');
var uid = __webpack_require__("9d01");
var Symbol = __webpack_require__("3754").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "8bac":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAACXBIWXMAAAsSAAALEgHS3X78AAABMElEQVQ4jc3VP0vDQBjH8W9LTQQHC/YFSAWdhA5OnRrQVXwBDp10cfDP4Ki4OTn7HpycBJe6FMeuLjarg1ARUYvtI3c2cM3FYno3+IMsD5fPPeTJcYiIemoi0hK3dEYOBREpAzEwj3tegFoRaHoCGTn7Ci17ApPoTr3HCX18HvLWF6s+NXr78MXe1TtnN59+UAVetH6wasUmcqMmuL5cYrceWGtK6cJlu8/T65DttYDqwvieafAwCjM3tjpV4H084Pj6Qw8iL5iJHkWh7lBNNYHzgCrqmJ4CJ2bRBM3s1AO2VmcmgsBd5qDmggLnm7Nj3/SgEf4F1LEGlYbb3QFLlaI1tKnQBN5YmbgkM//v7P+SWE1/Eeh6RKPkOmmKSM/xOlHvK0f/p+YuDYcOO0AP4Bs4egfuxn3m2wAAAABJRU5ErkJggg=="

/***/ }),

/***/ "8bbc":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("a013");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "91a1":
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__("22e9");
var defined = __webpack_require__("f01a");

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),

/***/ "94ac":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "9604":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("b2f5");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("22f3") });


/***/ }),

/***/ "984f":
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__("8b37")('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),

/***/ "9d01":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "9d86":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("3754");
var macrotask = __webpack_require__("d1f6").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__("94ac")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "9f58":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("3a68");
var toLength = __webpack_require__("b146");
var toAbsoluteIndex = __webpack_require__("5fe5");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "9fa4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__("01f5");
var $export = __webpack_require__("b2f5");
var toObject = __webpack_require__("db4b");
var call = __webpack_require__("8bbc");
var isArrayIter = __webpack_require__("c847");
var toLength = __webpack_require__("b146");
var createProperty = __webpack_require__("f59b");
var getIterFn = __webpack_require__("1a9b");

$export($export.S + $export.F * !__webpack_require__("5b55")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "a013":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("88dd");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "a4cc":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "a7b8":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("a013");
var dPs = __webpack_require__("bf29");
var enumBugKeys = __webpack_require__("b4e0");
var IE_PROTO = __webpack_require__("dfab")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("e3e0")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("265a").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "a891":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("fb6d");
var hiddenKeys = __webpack_require__("b4e0").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "acb9":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("d217");
var createDesc = __webpack_require__("7dea");
var toIObject = __webpack_require__("3a68");
var toPrimitive = __webpack_require__("5325");
var has = __webpack_require__("03b3");
var IE8_DOM_DEFINE = __webpack_require__("568a");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("dad2") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "adbd":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("a4cc");
var global = __webpack_require__("3754");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("ca2b") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "b0f4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__("2f03")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "b146":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("c481");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "b2f5":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("3754");
var core = __webpack_require__("a4cc");
var hide = __webpack_require__("743d");
var redefine = __webpack_require__("e5ef");
var ctx = __webpack_require__("01f5");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "b4e0":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "b5b8":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("94ac");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "b6e2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_sketchPopover_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("299f");
/* harmony import */ var _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_sketchPopover_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_sketchPopover_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_sketchPopover_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "b6f1":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "bf29":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("ddf7");
var anObject = __webpack_require__("a013");
var getKeys = __webpack_require__("cfc7");

module.exports = __webpack_require__("dad2") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "c29c":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAAEgBckRAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA/JJREFUeNpiZICCzz///4exedkZGRnRBWGACZsgWAKZExMWCGcz4tQBsgibBEAAwVy0H6QTihvwG4XLFAyJjpZ6BvKMAgggWJAkAKn5DAQAOAxBXgCyHRiIBEzIimFBGOjtyoAvkP7jwgWFxf+Pn7nwv7q2Di7GCA3JemKdxIgtgeDzNEAAIWswAFLncSlED9b/xDgHFqz/GYgHiaRqwJ0ECGrYt2cXAzY2Tg2T+7vhgl+/fkFRtHnjOsIx7eLigkIjxzTtPX2AWMWgiAPld0cg+wMR6sFpHyCAGNGSugKQus9AGTgAdQRK2qOGwejgA9AiQUZ8uYAagORoJhWw4JIAFaQnjx+D8339gxiS0jJJtwFXqn7x7jPO1E4KJjmIQCWvuaUVQ25hKWqaBJbE67fupl4cgDI/qJQQExcHW6ajqz8wkYy/JqYcXGBCL/WpCAKB5hoyYklVRFXUuFwMMhRZACCAGHEkXZJqU2iJWQg0/ALOmhbW+CGl5YADKAItekBWVU5K/Qq0ZAFyafoeSAlQOZLBPmGCRqoADVLRfXpkNENaW3CA9kUFA40B1goH1DRC7lOAALaimKIK59L1O3D+xq07yapsQBgjiF69fAlJxErKcDEnFzdweV9bUYLToVcuXyQuDvbv3cUQER2HobC5owdsCMwB6ACn5aR49+6jF1iDas78Rf+joqOx6mEgNUxh8QHq0ID4bR1deOOHrHwACqbaymIwDYof9AYAfetkWmc0WlvQCAoiUMPXgBamwzoUhrQqSZGDKJAGrneEWwDkbKCiJR+Q21lMSDZugEpcoLCyF0QWAAgwRiJKW1CdnU+rhICvEQfEE2GtE4IjHGiODoC2HgUYBgf4AA39DYQajiCHr2cY3CAQ2SOMVG710gvAhxJgDd/zA5DGKc4joDKUCdqRGWqOBwEDkNtpXhsP9cqY5oCFHE2gtumWjesYrly6BB/9BI28+PgH4RwMGRQjabDBL25uHgbfgCAGR2c38CgOqOW4ctki+NgvoVbkgHigKDeD4f69u+AeQ3hULE5182ZNB49BgzzZN3kG2IMDngdAIQtyPCh54HM8CICGI2fOWwJmpyfFoA6oEwFA6kGDfsTqI8oDoE4gKOSJHSsFhfqSVevBHgbFCCj2iAGg/LRy6WIwm9i8RPNiFJRnYDNw+PIGKIZBnVOQJ0BqQGoHhQeQkyHy3A02QE7mH63IBoMHDgxh9x+g+ZwTjYEhE3R4PHEIOh7UQ7uA3KFRgMaEwCB3OKh7aQibLkAeNXgA7fEnDvJQF8Q614GlY68A7dgPdDfzANThD4gelcDhIVBmB3X67WnoKZBjDwLxBmxTV9gAAKwqWbvMkjUOAAAAAElFTkSuQmCC"

/***/ }),

/***/ "c481":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "c650":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("3754");
var dP = __webpack_require__("ddf7");
var DESCRIPTORS = __webpack_require__("dad2");
var SPECIES = __webpack_require__("8b37")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "c847":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("14fc");
var ITERATOR = __webpack_require__("8b37")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "c9ea":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "ca2b":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "cad8":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAAEgBckRAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABC5JREFUeNpiZICCzz///4exedkZGRnRBWGACZsgWAKZU5SbgeCAdIBwQWHxfxgbhJlAFoEUXLl8kSHQ25Vh5bLFYA0AAQTTtR9JdQNIjJEoy7FKfP36BbsENzcPiiQLjAFyEQis37obTAMEECxIEoDUfAYCAByGIC8A2Q4MRAImXIphTsEAyMEJwy4uLig0SpAD9TRiMxlGo0QBNpvQTZ0zfxGcDVIHEECMSBoMgNR5XKEDY+NMafiC9T8D8SCRVA3YU1NtRQlpGmCpmqT0iguwoAts3rgOnDJBthBlwxagBhDQ0dXH6iwMG169fIk74UFtOECs++ExDoyL99hSLVrhEABSCxBAjGgJUAFI3WegDBwAusQRPe1Rw2B08AFokSAjvlxADUBy2qY44eEDsOQiJi7OMHPeEvIzGyEASpsU5WZcro+IjoMX+LiyFlGlMLZS+e6jFxhibR1dBPUSjGSQy0H5GlcxBPJVeFQs7kgGZU9ClhAdHJjgAgusDMBnCSzcSSl5QZ4HmruBBb2gwVZR4yvNdPRQgu8C0BxDZAGAAGLEEfGgdkk9KeUPEBcCDb+AkZPRDCap5YADKAIteoBhAZWLjESgJQuQS9P3QEqAysUQ2CdM0EgVoEE5d58epakhrS04QPP6gKTS9OTxY7Sr0ZBzM66ig2oVDk2CiC4WKCopY+0AUWwBrD7omzwDXMHEhAVS1wJQud/c0QNmw2qvzdBWLMUWTO7vhjeHYQDUZJk3azp1LNi3ZxfDklXrUcRA7SIQJlCjEW54wbppHc0NGHJiYhJE1dUspEQyGaARFEQXaJUHgPVBAxN6JU3NkhQ5iEAJez3WVgMw9cCSKNGddojrHeGpCNR+gVpCrY4HI0YkQy0Bla6gzogBMb1UfJU9DAAEGCMRjWNQnZ2PbCmdACjxTUR3MN52F5KjA6CtRwGGwQE+QEN/A6GGYwCuxDqIQCCyRxip3OqlF4APJcAavucHII1TnEdAZSgTtCMz1BwPAgYgt9O82Tsk24z3792lmwdoEgPIFROo3RQeFcfg5OI2ND1AzFDHoO52DPl+05DzAKyTAuucII+pIssNyjwAmgMElUDYBoPTk2LAY7igzimo/zioYgDUUwZ1ZkGON7e0wjqSDRIDyYHUgNSS0rumaQyAHASbfSU07AvrSa5Yugjek4cNFwyIB0CdEVjfOLewlOiyHtTXhuUHUHcM11g4MYAF2vkjqxV69fIllAxKTiYFmUGBBw6A8kDhEC5FC5mgw+OJQ9DxoB4afLZjATAvgJLSeXK6kfiGFnABUN4hc8QG1L00hE0XMCGNGjwAzWMO8tgAhbog8lwHC5YBF9AowALoZO98YjI4qEwnNTRJqAcOQB3+AFcphGvkCKTBEanPDOq1gTr99uieAtUFxAw1EunYg0C8AdvUFTYAAJTNnA/2qj0uAAAAAElFTkSuQmCC"

/***/ }),

/***/ "cde0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = __webpack_require__("b2f5");
var $find = __webpack_require__("2d43")(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__("644a")(KEY);


/***/ }),

/***/ "cfc7":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("fb6d");
var enumBugKeys = __webpack_require__("b4e0");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "d1f6":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("01f5");
var invoke = __webpack_require__("8812");
var html = __webpack_require__("265a");
var cel = __webpack_require__("e3e0");
var global = __webpack_require__("3754");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__("94ac")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "d217":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "d4d5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("3754");
var has = __webpack_require__("03b3");
var cof = __webpack_require__("94ac");
var inheritIfRequired = __webpack_require__("44de");
var toPrimitive = __webpack_require__("5325");
var fails = __webpack_require__("b6f1");
var gOPN = __webpack_require__("a891").f;
var gOPD = __webpack_require__("acb9").f;
var dP = __webpack_require__("ddf7").f;
var $trim = __webpack_require__("539d").trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__("a7b8")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__("dad2") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__("e5ef")(global, NUMBER, $Number);
}


/***/ }),

/***/ "d74e":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "dac5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("644a");
var step = __webpack_require__("e650");
var Iterators = __webpack_require__("14fc");
var toIObject = __webpack_require__("3a68");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("7656")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "dad2":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("b6f1")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "daf2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("adbd")('native-function-to-string', Function.toString);


/***/ }),

/***/ "db4b":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("f01a");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "dc8c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@3.11.0@@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("e67d")
  }

  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.9@core-js/modules/es7.object.get-own-property-descriptors.js
var es7_object_get_own_property_descriptors = __webpack_require__("2338");

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.9@core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("f763");

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.9@core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("dac5");

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.9@core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("fb37");

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.9@core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7364");

// CONCATENATED MODULE: ./node_modules/_@babel_runtime@7.6.0@@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"24f693f0-vue-loader-template"}!./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./sketch_board/components/board.vue?vue&type=template&id=2b73900c&scoped=true&
var boardvue_type_template_id_2b73900c_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{ref:"svg_ref",class:[{ignore: _vm.ignore}, 'svg-borad'],attrs:{"width":_vm.width,"height":_vm.height,"viewBox":_vm.viewBox,"xmlns":"http://www.w3.org/2000/svg"},on:{"~mousedown":function($event){return _vm._handleEvent('down')},"~touchstart":function($event){return _vm._handleEvent('down')},"mouseup":function($event){return _vm._handleEvent('up')},"touchend":function($event){return _vm._handleEvent('up')}}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./sketch_board/components/board.vue?vue&type=template&id=2b73900c&scoped=true&

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.9@core-js/modules/es7.object.values.js
var es7_object_values = __webpack_require__("0eec");

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.9@core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("d4d5");

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.9@core-js/modules/es7.object.entries.js
var es7_object_entries = __webpack_require__("21de");

// CONCATENATED MODULE: ./node_modules/_@babel_runtime@7.6.0@@babel/runtime/helpers/esm/arrayWithoutHoles.js
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}
// CONCATENATED MODULE: ./node_modules/_@babel_runtime@7.6.0@@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
// CONCATENATED MODULE: ./node_modules/_@babel_runtime@7.6.0@@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/_@babel_runtime@7.6.0@@babel/runtime/helpers/esm/toConsumableArray.js



function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
// CONCATENATED MODULE: ./node_modules/_@babel_runtime@7.6.0@@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
// CONCATENATED MODULE: ./node_modules/_@babel_runtime@7.6.0@@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// CONCATENATED MODULE: ./node_modules/_@babel_runtime@7.6.0@@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/_@babel_runtime@7.6.0@@babel/runtime/helpers/esm/slicedToArray.js



function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}
// EXTERNAL MODULE: ./node_modules/_core-js@2.6.9@core-js/modules/es6.array.find-index.js
var es6_array_find_index = __webpack_require__("cde0");

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.9@core-js/modules/es6.regexp.match.js
var es6_regexp_match = __webpack_require__("3c6b");

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.9@core-js/modules/es6.string.iterator.js
var es6_string_iterator = __webpack_require__("3b54");

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.9@core-js/modules/es6.array.from.js
var es6_array_from = __webpack_require__("9fa4");

// CONCATENATED MODULE: ./node_modules/_@babel_runtime@7.6.0@@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
// CONCATENATED MODULE: ./node_modules/_@babel_runtime@7.6.0@@babel/runtime/helpers/esm/createClass.js
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
// CONCATENATED MODULE: ./sketch_board/lib.js















var lib_default =
/*#__PURE__*/
function () {
  function _default(svgDom, options) {
    var _this = this;

    _classCallCheck(this, _default);

    _defineProperty(this, "_regDownEvent", function (event) {
      var eventType = event.type;
      var offsetX = null;
      var offsetY = null;

      if (eventType === 'touchstart') {
        offsetX = event.touches[0].pageX - _this.svg.getBoundingClientRect().left;
        offsetY = event.touches[0].pageY - _this.svg.getBoundingClientRect().top;
      } else if (eventType === 'mousedown') {
        offsetX = event.offsetX;
        offsetY = event.offsetY;
      }

      offsetX = offsetX * _this.ratioX;
      offsetY = offsetY * _this.ratioY;

      if (_this.mode === 0) {
        // 擦除模式
        _this.deleting = true;

        var target = _this._gotNearTarget({
          x: offsetX,
          y: offsetY,
          isMove: false
        });

        target && _this._erase(target);
      } else if (_this.mode === 1) {
        // 绘制模式
        _this.drawStart.x = offsetX;
        _this.drawStart.y = offsetY;
        _this.moveStart.x = offsetX;
        _this.moveStart.y = offsetY;
        _this.drawing = true;
      }
    });

    _defineProperty(this, "_regUpEvent", function () {
      _this.deleting = false;

      if (_this.drawing && _this.mode === 1) {
        _this.drawing = false;
        _this.currentGraph = null;
        _this.points = [];

        if (_this.animationFrame) {
          cancelAnimationFrame(_this.animationFrame);
          _this.animationFrame = null;
        }

        _this._joinRecord(Array.from(_this.svg.children));
      }
    });

    _defineProperty(this, "_regMoveEvent", function (event) {
      var eventType = event.type;
      var offsetX = null;
      var offsetY = null;

      if (eventType === 'touchmove') {
        offsetX = event.touches[0].pageX - _this.svg.getBoundingClientRect().left;
        offsetY = event.touches[0].pageY - _this.svg.getBoundingClientRect().top;
      } else if (eventType === 'mousemove') {
        offsetX = event.offsetX;
        offsetY = event.offsetY;
      }

      offsetX = offsetX * _this.ratioX;
      offsetY = offsetY * _this.ratioY;

      if (_this.mode === 0) {
        if (_this.deleting) {
          // 擦除模式
          var target = _this._gotNearTarget({
            x: offsetX,
            y: offsetY,
            isMove: true
          });

          target && _this._erase(target);
        }
      } else if (_this.mode === 1) {
        _this.offset.x = offsetX;
        _this.offset.y = offsetY;

        if (_this.drawing) {
          // 正在绘制
          if (_this.onRaf) {
            !_this.animationFrame && (_this.animationFrame = requestAnimationFrame(_this._renderByReqAniFrame.bind(_this)));
          } else {
            _this._draw();
          }
        }
      }
    });

    this.isMobile = this._isMobile();
    this.initT = 0; // 用来记录requestAnimationFrame的时间间隔

    this.color = null;
    this.shape = null;
    this.width = null;
    this.mode = null; // 当前模式 0:删除模式 1:绘制模式 2:选择模式(暂无此功能)

    this.opacity = 0.3; // 荧光笔的透明度

    this.penStyle = null; // highlighters荧光笔 || pencil铅笔

    this.onBezier = null; // 是否开启了bezier

    this.onRaf = null; // 是否开启了requestAnimationFrame API

    this.points = []; // 使用贝塞尔曲线时，记录当前path的路径数组

    this.drawing = false; // 正在绘制

    this.drawStart = {
      x: 0,
      y: 0
    }; // 图形开始绘制的时候记录坐标，这个坐标不会随着拖动而拖动(只会在touchstart -> touchmove中变量传递使用)

    this.moveStart = {
      x: 0,
      y: 0
    }; // 移动开始，记录坐标，随着鼠标的移动而移动

    this.offset = {
      x: 0,
      y: 0
    }; // 使用requestAnimatinFrame时时候，touchmove的实时坐标

    this.currentGraph = null; // 当前正在绘制的实例

    this.animationFrame = null; // 使用requestAnimationAPI进行绘图时，requestAnimation的返回值

    this.graphAry = []; // 存储画布上的所有图形及其轨迹-可以用于上传&轨迹追加

    this.records = [[]]; // 画板历史记录

    this.records[0]._pointer = true; // 空白画板默认指针指在第一个空数组

    this.iteId = 0; // id自增

    this.deleting = false; // 鼠标按下，正在擦除

    this.svg = svgDom; // svg DOM

    this._renderDefault(options);

    this._getViewData();

    this.svg.addEventListener(this.isMobile ? 'touchstart' : 'mousedown', this._regDownEvent, false);
    this.svg.addEventListener(this.isMobile ? 'touchend' : 'mouseup', this._regUpEvent, false);
    this.svg.addEventListener(this.isMobile ? 'touchmove' : 'mousemove', this._regMoveEvent, false); // 解决鼠标移出画布后放开，在进入画布继续绘制的问题

    document.addEventListener(this.isMobile ? 'touchend' : 'mouseup', this._regUpEvent, false);
  }
  /** 赋予默认属性 */


  _createClass(_default, [{
    key: "_renderDefault",
    value: function _renderDefault(options) {
      this.color = options.color || 'black';
      this.shape = options.shape || 'curve';
      this.width = options.width || '2px';
      this.penStyle = options.penStyle || 'pencil';
      this.mode = options.mode || 1;
      this.onBezier = options.onBezier !== undefined ? options.onBezier : true;
      this.onRaf = options.onRaf !== undefined ? options.onRaf : true;
    }
    /** 获取viewbox与viewport的比例，用于绘制时确定svg坐标点 */

  }, {
    key: "_getViewData",
    value: function _getViewData() {
      var regViewBox = /^\d+[\s,]\d+[\s,](\d+)[\s,](\d+)$/;
      var viewBox = this.svg.getAttribute('viewBox');
      var matchViewBox = viewBox.match(regViewBox);
      var vWidth = parseFloat(matchViewBox[1]);
      var vHeight = parseFloat(matchViewBox[2]);
      var width = parseFloat(this.svg.getAttribute('width'));
      var height = parseFloat(this.svg.getAttribute('height'));
      this.ratioX = vWidth / width;
      this.ratioY = vHeight / height;
    }
    /** 手指按下事件注册
     * 将drawStart和moveStart的坐标置为事件坐标
     * 并标记为开始绘制
     */

  }, {
    key: "_renderByReqAniFrame",

    /** 使用requestAnimationFrame的方式渲染 */
    value: function _renderByReqAniFrame(t) {
      // 存在递归，所以需要再判断
      if (this.drawing) {
        console.log('requestAnimationFrame刷新间隔：', "".concat(t - this.initT, "ms"));
        this.initT = t;
        requestAnimationFrame(this._renderByReqAniFrame.bind(this));

        if (!(this.offset.x - this.moveStart.x === 0 && this.offset.y - this.moveStart.y === 0)) {
          // 停止绘图但是未抬笔时不进行绘制
          this._draw();
        }
      }
    }
    /**
     * 绘制
     */

  }, {
    key: "_draw",
    value: function _draw() {
      this.moveStart = {
        x: this.offset.x,
        y: this.offset.y
      };

      if (this.shape === 'stright') {
        // 直线
        if (!this.currentGraph) {
          this.currentGraph = this._line();
        } else {
          this._fresh(this.currentGraph);
        }
      } else if (this.shape === 'curve') {
        // 曲线
        if (!this.currentGraph) {
          this.currentGraph = this._path();
        } else {
          this._fresh(this.currentGraph);
        }
      }
    }
    /**
     * @desc 绘制曲线初始点
     */

  }, {
    key: "_path",
    value: function _path() {
      var dStr = '';

      var id = this._generateId();

      dStr += " M ".concat(this.drawStart.x, " ").concat(this.drawStart.y);
      return this._fill('path', {
        d: dStr
      }, id);
    }
    /**
     * @desc path的追加绘制
     * @param {*} el 当前追加的图形元素
     */

  }, {
    key: "_pathSuppBez",
    value: function _pathSuppBez(el) {
      var mStr = "M ".concat(this.drawStart.x, " ").concat(this.drawStart.y, " ");
      var d = '';
      this.points.push(this.offset.x, this.offset.y);

      if (this.points.length >= 2) {
        d = mStr + this._solve(this.points);
        el.setAttribute('d', d);
      }
    }
    /**
     * @desc path的追加绘制(使用)
     * @param {*} el 当前追加的图形元素
     */

  }, {
    key: "_pathSuppNoBez",
    value: function _pathSuppNoBez(el) {
      var d = el.getAttribute('d');
      d += " L".concat(this.offset.x, ",").concat(this.offset.y);
      el.setAttribute('d', d);
    }
    /**
     * @desc 绘制初始点的通用方法
     * 创建图形元素，append到svg中
     * @param {*} shape 需要绘制的图形
     * @param {*} attr 路径属性
     * @param {*} id 图形的属性
     */

  }, {
    key: "_fill",
    value: function _fill(shape, attr, id) {
      var _shape = document.createElementNS('http://www.w3.org/2000/svg', shape);

      _shape.id = id;
      Object.keys(attr).forEach(function (k) {
        var v = attr[k];

        _shape.setAttribute(k, v);
      });

      _shape.setAttribute('fill', 'transparent');

      _shape.setAttribute('stroke', this.color);

      _shape.setAttribute('stroke-width', this.width);

      if (this.penStyle === 'pencil') {
        // 铅笔需要两边的圆角
        _shape.setAttribute('stroke-linecap', 'round');
      } else if (this.penStyle === 'highlighters') {
        // 荧光笔需要透明度,增加宽度至固定值
        _shape.setAttribute('stroke-opacity', this.opacity);
      }

      this.svg.appendChild(_shape);
      return _shape;
    }
    /**
     * @desc 通用追加绘制方法
     * @param {*} el 正在绘制的元素
     */

  }, {
    key: "_fresh",
    value: function _fresh(el) {
      if (this.shape === 'stright') {
        this._lineSupp(el);
      } else if (this.shape === 'curve') {
        if (this.onBezier) {
          this._pathSuppBez(el);
        } else {
          this._pathSuppNoBez(el);
        }
      }
    }
    /** 绘制直线的初始点
     * 初始点的x1=x2, y1=y2
     */

  }, {
    key: "_line",
    value: function _line() {
      var attr = {
        x1: this.drawStart.x,
        y1: this.drawStart.y,
        x2: this.drawStart.x,
        y2: this.drawStart.y
      };

      var id = this._generateId();

      return this._fill('line', attr, id);
    }
    /**
     * @desc line的追加
     * 改变line的x2，y2属性
     * @param {*} el 正在绘制的元素
     */

  }, {
    key: "_lineSupp",
    value: function _lineSupp(el) {
      el.setAttribute('x2', this.offset.x);
      el.setAttribute('y2', this.offset.y);
    }
    /** 生成图形ID */

  }, {
    key: "_generateId",
    value: function _generateId() {
      return "yxp_prefix_svg_".concat(this.iteId++);
    }
    /** 清空画板 */

  }, {
    key: "clear",
    value: function clear() {
      this._removeSvgContent();

      this.records = [[]];
      this.records[0]._pointer = true;
      this.graphAry = [];
      this.currentGraph = null;
      this.drawing = false;
      this.iteId = 0;
    }
  }, {
    key: "_removeSvgContent",
    value: function _removeSvgContent() {
      var svg = this.svg;

      while (svg.hasChildNodes()) {
        svg.removeChild(svg.firstChild);
      }
    }
  }, {
    key: "_erase",
    value: function _erase(target) {
      this.svg.removeChild(target);
      var nextMirror = this.svg.children;

      this._joinRecord(Array.from(nextMirror));
    }
    /** 撤销 */

  }, {
    key: "revoke",
    value: function revoke() {
      this._moveLeftPointer();
    }
    /** 恢复 */

  }, {
    key: "resume",
    value: function resume() {
      this._moveRightPointer();
    }
    /**
    * 将折线修改为圆滑曲线
    * @param {*} data  [x1,y1,x2,y2,x3,y3...] 长度必须大于4, 长度必须是偶数
    * @param {*} k 拟合系数, 数字
    */

  }, {
    key: "_solve",
    value: function _solve(data) {
      var k = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var size = data.length;
      var last = size - 4;
      var path = '';

      for (var i = 0; i < size - 2; i += 2) {
        var x0 = i ? data[i - 2] : data[0];
        var y0 = i ? data[i - 1] : data[1];
        var x1 = data[i + 0];
        var y1 = data[i + 1]; // x2 和 y2 作为终点坐标

        var x2 = data[i + 2];
        var y2 = data[i + 3];
        var x3 = i !== last ? data[i + 4] : x2;
        var y3 = i !== last ? data[i + 5] : y2; // 计算控制点

        var cp1x = x1 + (x2 - x0) / 6 * k;
        var cp1y = y1 + (y2 - y0) / 6 * k;
        var cp2x = x2 - (x3 - x1) / 6 * k;
        var cp2y = y2 - (y3 - y1) / 6 * k;
        path += " C".concat(cp1x, ",").concat(cp1y, ",").concat(cp2x, ",").concat(cp2y, ",").concat(x2, ",").concat(y2);
      }

      return path;
    }
    /** 加入历史纪录 */

  }, {
    key: "_joinRecord",
    value: function _joinRecord(mirror) {
      var records = this.records.slice();
      var pointerIdx = records.findIndex(function (e) {
        return e._pointer;
      }); // 指针索引
      // 加入历史时，总是丢弃指针后面的记录

      records = records.slice(0, pointerIdx + 1); // 画布上无图形，record全覆盖

      records.push(mirror);
      records.forEach(function (item, index, me) {
        item._pointer = false;

        if (index === me.length - 1) {
          item._pointer = true;
        }
      });

      this._getGraphAryByRecord(mirror);

      this.records = records;
    }
  }, {
    key: "_moveRightPointer",
    value: function _moveRightPointer() {
      // 指针往前移动
      var records = this.records.slice();
      var maxIdx = records.length - 1;
      var pointerIdx = records.findIndex(function (e) {
        return e._pointer;
      }); // 当前最新

      if (pointerIdx < maxIdx) {
        // 指针在最大索引之前，可以进行"恢复"操作
        var currentMirror = records[pointerIdx + 1]; // 需要恢复的画布记录

        records[pointerIdx]._pointer = false;
        records[pointerIdx + 1]._pointer = true;

        this._redrawing(currentMirror);

        this._getGraphAryByRecord(currentMirror);
      }
    }
  }, {
    key: "_moveLeftPointer",
    value: function _moveLeftPointer() {
      var records = this.records.slice();
      var pointerIdx = records.findIndex(function (e) {
        return e._pointer;
      }); // pointerIndex在第一位，不操作

      if (pointerIdx === 0) return;
      var currentMirror = records[pointerIdx - 1];
      records[pointerIdx]._pointer = false;
      records[pointerIdx - 1]._pointer = true;

      this._redrawing(currentMirror);

      this._getGraphAryByRecord(currentMirror);
    }
  }, {
    key: "_redrawing",
    value: function _redrawing(mirror) {
      this._removeSvgContent();

      var fragment = document.createDocumentFragment();
      mirror.forEach(function (el) {
        fragment.appendChild(el);
      });
      this.svg.appendChild(fragment);
    }
    /** 判断浏览器是否为移动端 */

  }, {
    key: "_isMobile",
    value: function _isMobile() {
      var userAgentInfo = navigator.userAgent;

      if (!!userAgentInfo.match(/AppleWebKit.*Mobile.*/) || !!userAgentInfo.match(/AppleWebKit/)) {
        var temp = userAgentInfo.toLowerCase();

        if (temp.indexOf('android') > -1 || temp.indexOf('iphone') > -1 || temp.indexOf('ipad') > -1 || temp.indexOf('windows phone') > -1 || temp.indexOf('blackberry') > -1 || temp.indexOf('hp-tablet') > -1 || temp.indexOf('symbian') > -1 || temp.indexOf('phone') > -1) {
          return true;
        }
      }

      return false;
    }
    /** 创建SVGPoint，用于判断点是否在stroke上 */

  }, {
    key: "_createSVGPoint",
    value: function _createSVGPoint(x, y) {
      var point = this.svg.createSVGPoint();
      point.x = x;
      point.y = y;
      return point;
    }
    /** 判断按压点是否在矩形内 */

  }, {
    key: "_isPointInRect",
    value: function _isPointInRect(_ref) {
      var point = _ref.point,
          graph = _ref.graph;
      var graphBox = graph.getBBox();
      var x = graphBox.x,
          y = graphBox.y,
          width = graphBox.width,
          height = graphBox.height; // 允许的最小判断长度，width||height小于这个长度会强制增加到minLen
      // 如水平或垂直路径的情况，保证此Rect足够大到手指方便点击

      var minLen = 40;

      if (width < minLen) {
        x = x - minLen / 2;
        width = minLen;
      }

      if (height <= minLen) {
        y = y - minLen / 2;
        height = minLen;
      }

      var ax = x;
      var ay = y;
      var bx = x + width;
      var by = y + height;

      var _point2 = _slicedToArray(point, 2),
          _x = _point2[0],
          _y = _point2[1];

      return {
        value: _x >= ax && _x <= bx && _y >= ay && _y <= by,
        pathX: graphBox.x,
        pathY: graphBox.y,
        pathWidth: graphBox.width,
        pathHeight: graphBox.height
      };
    }
    /** 判断路径是否在整个矩形内 */

  }, {
    key: "_isPathInBox",
    value: function _isPathInBox(_ref2) {
      var path = _ref2.path,
          box = _ref2.box;
      var pathX = path.pathX,
          pathY = path.pathY,
          pathWidth = path.pathWidth,
          pathHeight = path.pathHeight;
      var boxX = box.boxX,
          boxY = box.boxY,
          boxWidth = box.boxWidth,
          boxHeight = box.boxHeight;
      return pathX > boxX && pathX + pathWidth < boxX + boxWidth && pathY > boxY && pathY + pathHeight && boxY + boxHeight;
    }
    /** 当前需要擦除的对象 */

  }, {
    key: "_gotNearTarget",
    value: function _gotNearTarget(_ref3) {
      var x = _ref3.x,
          y = _ref3.y,
          isMove = _ref3.isMove;
      var target = null;

      var graphs = _toConsumableArray(Array.from(this.svg.children)).reverse();

      if (isMove) {
        // move事件，按照真实坐标进行擦除
        for (var i = 0, len = graphs.length; i < len; i++) {
          var graph = graphs[i];

          var _point = this._createSVGPoint(x, y);

          if (graph.isPointInStroke(_point)) {
            target = graph;
            break;
          }
        }
      } else {
        var step = 10;
        var startX = x - step;
        var endX = x + step;
        var startY = y - step;
        var endY = y + step;
        var rect = 2 * step + 1; // 虚拟矩形框组成的点

        var points = [];
        var b1 = [];
        var b2 = [];
        var b3 = [];
        var b4 = [];
        Array.from({
          length: rect
        }).forEach(function (e, i) {
          b1.push([startX + i, startY]);
          b2.push([endX, startY + i]);
          b3.push([startX + i, endY]);
          b4.push([startX, startY + i]);
        });
        points.push.apply(points, b1.concat(b2, b3, b4));

        for (var _i = 0, _len2 = graphs.length; _i < _len2; _i++) {
          var _graph = graphs[_i]; // 遍历每根线条

          var strokeWidth = parseFloat(_graph.getAttribute('stroke-width'));

          var _this$_isPointInRect = this._isPointInRect({
            point: [x, y],
            graph: _graph
          }),
              value = _this$_isPointInRect.value,
              pathX = _this$_isPointInRect.pathX,
              pathY = _this$_isPointInRect.pathY,
              pathWidth = _this$_isPointInRect.pathWidth,
              pathHeight = _this$_isPointInRect.pathHeight;

          if (!value) continue;

          if (strokeWidth >= 10) {
            // 大线条，用实际坐标
            if (_graph.isPointInStroke(this._createSVGPoint(x, y))) {
              target = _graph;
              break;
            }
          } else {
            // 小线条，用矩阵坐标遍历
            var pathInBox = this._isPathInBox({
              path: {
                pathX: pathX,
                pathY: pathY,
                pathWidth: pathWidth,
                pathHeight: pathHeight
              },
              box: {
                boxX: startX,
                boxY: startY,
                boxWidth: rect,
                boxHeight: rect
              }
            }); // 整个路径都在虚拟矩形框中，直接删除


            if (pathInBox) {
              target = _graph;
              break;
            } else {
              // 利用路径与虚拟矩形框点阵相交判断进行删除
              for (var j = 0, _len = points.length; j < _len; j++) {
                var _points$j = _slicedToArray(points[j], 2),
                    _x = _points$j[0],
                    _y = _points$j[1];

                var _point3 = this._createSVGPoint(_x, _y);

                if (_graph.isPointInStroke(_point3)) {
                  target = _graph;
                  break;
                }
              }
            }
          }
        }
      }

      return target;
    }
    /** 根据历史记录得出当前数据模型 */

  }, {
    key: "_getGraphAryByRecord",
    value: function _getGraphAryByRecord() {
      var mirror = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var graphAry = [];
      Array.from(mirror).forEach(function (el) {
        var graph = Object.create(null);
        var tagName = el.tagName.toLowerCase();
        graph.tag = tagName;
        Array.from(el.attributes).forEach(function (attr) {
          var k = attr.name;
          var v = attr.value;
          graph[k] = v;
        });
        graphAry.push(graph);
      });
      this.graphAry = graphAry;
    }
    /** 已有数据的回显 */

  }, {
    key: "render",
    value: function render(data) {
      var fragment = document.createDocumentFragment();
      var maxId = 0;
      data.forEach(function (item) {
        var el = null;
        Object.entries(item).forEach(function (_ref4) {
          var _ref5 = _slicedToArray(_ref4, 2),
              k = _ref5[0],
              v = _ref5[1];

          if (k === 'tag') {
            el = document.createElementNS('http://www.w3.org/2000/svg', v);
          } else {
            el.setAttribute(k, v);
          }

          if (k === 'id') {
            maxId = parseInt(v) > maxId ? parseInt(v) : maxId;
          }
        });
        fragment.appendChild(el);
      });
      this.svg.appendChild(fragment);
      this.iteId = maxId + 1;

      this._joinRecord(Array.from(this.svg.children));
    }
    /** 动态改变画板大小，修复画笔触点坐标 */

  }, {
    key: "resize",
    value: function resize() {
      this._getViewData();

      this.svg.removeEventListener(this.isMobile ? 'touchstart' : 'mousedown', this._regDownEvent, false);
      this.svg.addEventListener(this.isMobile ? 'touchstart' : 'mousedown', this._regDownEvent, false);
    }
  }]);

  return _default;
}();


// EXTERNAL MODULE: ./node_modules/_core-js@2.6.9@core-js/modules/es6.promise.js
var es6_promise = __webpack_require__("6e26");

// CONCATENATED MODULE: ./sketch_board/utils/util.js

var svgToBase64 = function svgToBase64(svgDOM) {
  return new Promise(function (resolve) {
    var svgCon = svgDOM.outerHTML;
    var src = 'data:image/svg+xml;base64,' + window.btoa(unescape(encodeURIComponent(svgCon)));
    var img = new Image();
    img.src = src;

    img.onload = function () {
      var canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      var context = canvas.getContext('2d');
      context.drawImage(img, 0, 0);
      var ImgBase64 = canvas.toDataURL('image/png');
      resolve(ImgBase64);
    };
  });
};
// CONCATENATED MODULE: ./sketch_board/utils/config.js
// 三种笔粗细-铅笔
var thicknessMap = {
  'small': '2px',
  'middle': '4px',
  'large': '8px'
}; // 三种笔粗细-荧光笔

var hThicknessMap = {
  'small': '5px',
  'middle': '10px',
  'large': '20px'
}; // 笔型(铅笔与荧光笔)

var penStyles = ['pencil', 'highlighters']; // 线型

var lines = ['curve', 'stright']; // 画板模式 0:删除模式 1:绘制模式 2:选择模式(暂无)

var modes = [0, 1, 2]; // 画板选择器上的各种颜色

var colors = ['#000000', '#ff1000', '#326ed9', '#ffc510', '#306c00', '#ff1ecf'];
// EXTERNAL MODULE: ./node_modules/_core-js@2.6.9@core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__("f301");

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.9@core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__("df99");

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.9@core-js/modules/es6.set.js
var es6_set = __webpack_require__("3cb6");

// CONCATENATED MODULE: ./sketch_board/utils/propsValidator.js











/**
 * @desc 验证config这个props的规则
 * 规则：必须将5个属性写全，每个属性的值也要正确
 * @param {Object} value props value
 * @return {Boolean} 是否通过验证
 */

var propsValidator_configValidator = function configValidator(value) {
  var flag = false;
  var shouldKeys = ['thickness', 'pen', 'line', 'color', 'mode'];
  var keys = Object.keys(value);

  if (_toConsumableArray(new Set(keys)).length === shouldKeys.length) {
    flag = !keys.map(function (itm) {
      return shouldKeys.includes(itm);
    }).includes(false);
  }

  if (flag) {
    var bools = [];
    Object.entries(value).forEach(function (_ref, index, en) {
      var _ref2 = _slicedToArray(_ref, 2),
          k = _ref2[0],
          v = _ref2[1];

      switch (k) {
        case 'thickness':
          // 线粗度
          bools.push(Object.keys(thicknessMap).includes(v));
          break;

        case 'pen':
          // 笔形状
          bools.push(penStyles.includes(v));
          break;

        case 'line':
          // 线型
          bools.push(lines.includes(v));
          break;

        case 'color':
          // 线颜色
          bools.push(typeof v === 'string');
          break;

        case 'mode':
          bools.push(modes.includes(v));
      }
    });
    flag = !bools.includes(false);
  }

  return flag;
};
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./sketch_board/components/board.vue?vue&type=script&lang=js&








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var boardvue_type_script_lang_js_ = ({
  name: 'SketchBoard',
  props: {
    width: {
      // 画布width(px)
      type: Number,
      required: true
    },
    height: {
      // 画布height(px)
      type: Number,
      required: true
    },
    viewBox: {
      // 画布viewBox，当前产品默认值如下
      type: String,
      default: '0 0 1024 600'
    },
    ignore: {
      // 是否允许事件穿透
      type: Boolean,
      default: false
    },
    opacity: {
      // 荧光笔的透明度
      type: Number,
      validator: function validator(value) {
        return value >= 0 && value <= 1;
      },
      default: 0.3
    },
    thicknessess: {
      // 硬笔-笔型粗细集合
      type: Array,
      validator: function validator(value) {
        return value.every(function (itm) {
          return typeof itm === 'string';
        });
      },
      default: function _default() {
        return Object.values(thicknessMap);
      }
    },
    hThicknessess: {
      // 荧光笔-笔型粗细集合
      type: Array,
      validator: function validator(value) {
        return value.every(function (itm) {
          return typeof itm === 'string';
        });
      },
      default: function _default() {
        return Object.values(hThicknessMap);
      }
    },
    config: {
      // 绘制属性的配置
      type: Object,
      validator: propsValidator_configValidator,
      required: true
    },
    onLoad: {
      // 画板初始化完成-回调函数
      type: Function,
      default: function _default() {}
    },
    onUpEvent: {
      // 函数回调-操作画板的开始/结束时间信息
      type: Function,
      default: function _default() {}
    }
  },
  data: function data() {
    return {
      bezier: false,
      // 开启贝塞尔曲线
      raf: false,
      // 开启requestAnimationFrame API
      sTime: null,
      // 开始操作画板的时间戳
      eTime: null // 最后操作画板的时间戳

    };
  },
  computed: {
    // 当前笔的粗细值
    cp_thickness: function cp_thickness() {
      return this.cp_thickness_map[this.config.thickness];
    },
    // 笔粗细与的映射关系
    cp_thickness_map: function cp_thickness_map() {
      var _thicknessMap = Object.create(null); // 铅笔/荧光笔 小中大的粗线不一致


      var ts = this.config.pen === 'pencil' ? this.thicknessess : this.hThicknessess;
      Object.keys(_objectSpread({}, thicknessMap)).forEach(function (k, i) {
        _thicknessMap[k] = ts[i];
      });
      return _thicknessMap;
    }
  },
  watch: {
    // watch画板各属性的变化，然后改变画板的属性表现
    'config': {
      deep: true,
      handler: function handler(newVal, oldVal) {
        this._updateAttr();
      }
    },
    // svg尺寸发生变化,重新计算绘制坐标
    'width': function width(newVal) {
      this.$nextTick(this.resize);
    },
    // svg尺寸发生变化,重新计算绘制坐标
    'height': function height(newVal) {
      this.$nextTick(this.resize);
    }
  },
  mounted: function mounted() {
    // 需要等待确定尺寸之后，再取实例化
    this.$nextTick(this._instantSketch);
  },
  methods: {
    _instantSketch: function _instantSketch() {
      this.sketch = new lib_default(this.$refs.svg_ref, {
        width: this.cp_thickness,
        penStyle: this.config.pen,
        shape: this.config.line,
        color: this.config.color,
        onBezier: this.bezier,
        onRaf: this.raf
      });
      this.sketch.opacity = this.opacity;
      this.onLoad(this);
    },

    /**
     * @desc 获取svg转化成base64
     */
    toBase64: function toBase64() {
      return svgToBase64(this.$refs.svg_ref);
    },

    /**
     * @desc 更新画板/画笔的属性
     */
    _updateAttr: function _updateAttr() {
      this.sketch.width = this.cp_thickness;
      this.sketch.color = this.config.color;
      this.sketch.shape = this.config.line;
      this.sketch.penStyle = this.config.pen;
      this.sketch.mode = this.config.mode;
    },

    /**
     * @desc 撤销
     */
    revoke: function revoke() {
      this.sketch.revoke();
    },

    /**
     * @desc 恢复
     */
    resume: function resume() {
      this.sketch.resume();
    },

    /**
     * @desc 清除画板
     */
    clear: function clear() {
      this.sketch.clear();
    },

    /**
     * @desc 获取svg的矢量数据
     */
    getData: function getData() {
      return this.sketch.graphAry;
    },

    /**
     * @desc 根据指定的svg数据格式进行回显
     * @param {Object} data
     */
    render: function render(data) {
      this.sketch.render(data);
    },

    /**
     * @desc 动态改变画板大小，修复画笔触点坐标
     */
    resize: function resize() {
      this.sketch.resize();
    },
    _updateThickness: function _updateThickness(newVal) {
      var _this = this;

      Object.keys(_objectSpread({}, thicknessMap)).forEach(function (k, i) {
        _this.thicknessMap[k] = newVal[i];
      });
    },

    /**
     * @desc 处理放下/抬起事件，用于画板stime etime统计
     */
    _handleEvent: function _handleEvent(type) {
      if (type === 'down') {
        this.sTime = new Date().getTime();
      } else if (type === 'up') {
        this.eTime = new Date().getTime();
        this.onUpEvent({
          sTime: this.sTime,
          eTime: this.eTime,
          time: this.eTime - this.sTime
        });
      }
    }
  }
});
// CONCATENATED MODULE: ./sketch_board/components/board.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_boardvue_type_script_lang_js_ = (boardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./sketch_board/components/board.vue?vue&type=style&index=0&id=2b73900c&lang=scss&scoped=true&
var boardvue_type_style_index_0_id_2b73900c_lang_scss_scoped_true_ = __webpack_require__("29f4");

// CONCATENATED MODULE: ./node_modules/_vue-loader@15.7.1@vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./sketch_board/components/board.vue






/* normalize component */

var component = normalizeComponent(
  components_boardvue_type_script_lang_js_,
  boardvue_type_template_id_2b73900c_scoped_true_render,
  staticRenderFns,
  false,
  null,
  "2b73900c",
  null
  
)

/* harmony default export */ var board = (component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"24f693f0-vue-loader-template"}!./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./sketch_board/components/sketchPopover.vue?vue&type=template&id=715a6e9a&scoped=true&
var sketchPopovervue_type_template_id_715a6e9a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"popover-wrap"},[_c('ul',{staticClass:"thickness"},_vm._l((Object.keys(_vm.thicknessMap)),function(item){return _c('li',{key:item,class:['point', item, _vm.config.thickness === item && 'on'],on:{"click":function($event){return _vm._handle('thickness', item)}}})}),0),_c('ul',{staticClass:"pen-line-style"},[_vm._l((_vm.penStyles),function(item){return _c('li',{key:item,class:['item', item, item === _vm.config.pen && 'on'],on:{"click":function($event){return _vm._handle('pen', item)}}})}),_vm._l((_vm.lines),function(item){return _c('li',{key:item,class:['item', item, item === _vm.config.line && 'on'],on:{"click":function($event){return _vm._handle('line', item)}}})})],2),_c('ul',{staticClass:"colors"},[_vm._l((_vm.colors),function(item){return _c('li',{key:item,class:['item', item === _vm.config.color && 'on'],style:({background: item}),on:{"click":function($event){return _vm._handle('color', item)}}})}),_c('li')],2)])])}
var sketchPopovervue_type_template_id_715a6e9a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./sketch_board/components/sketchPopover.vue?vue&type=template&id=715a6e9a&scoped=true&

// EXTERNAL MODULE: ./node_modules/_core-js@2.6.9@core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__("9604");

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./sketch_board/components/sketchPopover.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var sketchPopovervue_type_script_lang_js_ = ({
  name: 'SketchPopover',
  props: {
    colors: {
      // 颜色集合
      type: Array,
      default: function _default() {
        return colors;
      }
    },
    config: {
      // 选项框配置项
      type: Object,
      validator: propsValidator_configValidator,
      required: true
    }
  },
  data: function data() {
    return {
      thicknessMap: thicknessMap,
      penStyles: penStyles,
      lines: lines
    };
  },
  methods: {
    _handle: function _handle(type, value) {
      var _Object$assign;

      this.$emit('update:config', Object.assign({}, this.config, (_Object$assign = {}, _defineProperty(_Object$assign, type, value), _defineProperty(_Object$assign, "mode", 1), _Object$assign)));
    }
  }
});
// CONCATENATED MODULE: ./sketch_board/components/sketchPopover.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_sketchPopovervue_type_script_lang_js_ = (sketchPopovervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./sketch_board/components/sketchPopover.vue?vue&type=style&index=0&lang=scss&
var sketchPopovervue_type_style_index_0_lang_scss_ = __webpack_require__("b6e2");

// EXTERNAL MODULE: ./sketch_board/components/sketchPopover.vue?vue&type=style&index=1&id=715a6e9a&lang=scss&scoped=true&
var sketchPopovervue_type_style_index_1_id_715a6e9a_lang_scss_scoped_true_ = __webpack_require__("4fd9");

// CONCATENATED MODULE: ./sketch_board/components/sketchPopover.vue







/* normalize component */

var sketchPopover_component = normalizeComponent(
  components_sketchPopovervue_type_script_lang_js_,
  sketchPopovervue_type_template_id_715a6e9a_scoped_true_render,
  sketchPopovervue_type_template_id_715a6e9a_scoped_true_staticRenderFns,
  false,
  null,
  "715a6e9a",
  null
  
)

/* harmony default export */ var sketchPopover = (sketchPopover_component.exports);
// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"24f693f0-vue-loader-template"}!./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./sketch_board/components/erasePopover.vue?vue&type=template&id=5983cbfc&scoped=true&
var erasePopovervue_type_template_id_5983cbfc_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"erase-wrap"},_vm._l((_vm.tools),function(item,index){return _c('div',{key:index,class:['item', item.type === _vm.current && 'on'],on:{"mousedown":function($event){return _vm._handleDown(item.type)},"touchstart":function($event){return _vm._handleDown(item.type)},"mouseup":function($event){return _vm._handleUp(item.type)},"touchend":function($event){return _vm._handleUp(item.type)}}},[_c('i',{class:['icon', item.type]}),_c('span',{staticClass:"text"},[_vm._v(_vm._s(item.text))])])}),0)])}
var erasePopovervue_type_template_id_5983cbfc_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./sketch_board/components/erasePopover.vue?vue&type=template&id=5983cbfc&scoped=true&

// CONCATENATED MODULE: ./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--12-0!./node_modules/_thread-loader@2.1.3@thread-loader/dist/cjs.js!./node_modules/_babel-loader@8.0.6@babel-loader/lib!./node_modules/_cache-loader@2.0.1@cache-loader/dist/cjs.js??ref--0-0!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./sketch_board/components/erasePopover.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var erasePopovervue_type_script_lang_js_ = ({
  name: 'ErasePopover',
  data: function data() {
    return {
      tools: [{
        type: 'erase',
        text: '擦除'
      }, {
        type: 'clear',
        text: '清屏'
      }],
      current: 'erase'
    };
  },
  methods: {
    _handleDown: function _handleDown(type) {
      if (type === 'clear') {
        this.current = type;
      }
    },
    _handleUp: function _handleUp(type) {
      this.$emit(type);
      this.current = 'erase';
    }
  }
});
// CONCATENATED MODULE: ./sketch_board/components/erasePopover.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_erasePopovervue_type_script_lang_js_ = (erasePopovervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./sketch_board/components/erasePopover.vue?vue&type=style&index=0&lang=scss&
var erasePopovervue_type_style_index_0_lang_scss_ = __webpack_require__("dcd4");

// EXTERNAL MODULE: ./sketch_board/components/erasePopover.vue?vue&type=style&index=1&id=5983cbfc&lang=scss&scoped=true&
var erasePopovervue_type_style_index_1_id_5983cbfc_lang_scss_scoped_true_ = __webpack_require__("0d33");

// CONCATENATED MODULE: ./sketch_board/components/erasePopover.vue







/* normalize component */

var erasePopover_component = normalizeComponent(
  components_erasePopovervue_type_script_lang_js_,
  erasePopovervue_type_template_id_5983cbfc_scoped_true_render,
  erasePopovervue_type_template_id_5983cbfc_scoped_true_staticRenderFns,
  false,
  null,
  "5983cbfc",
  null
  
)

/* harmony default export */ var erasePopover = (erasePopover_component.exports);
// CONCATENATED MODULE: ./sketch_board/index.js







function sketch_board_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function sketch_board_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { sketch_board_ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { sketch_board_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var sketch_board_createHOCSketchBoard = function createHOCSketchBoard(options) {
  return {
    data: function data() {
      return sketch_board_objectSpread({}, options);
    },
    extends: board
  };
};

/* harmony default export */ var sketch_board = ({
  install: function install(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    Vue.component(board.name, sketch_board_createHOCSketchBoard(options));
    Vue.component(sketchPopover.name, sketchPopover);
    Vue.component(erasePopover.name, erasePopover);
  }
});
// CONCATENATED MODULE: ./node_modules/_@vue_cli-service@3.11.0@@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (sketch_board);



/***/ }),

/***/ "dcd4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_erasePopover_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("28cc");
/* harmony import */ var _node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_erasePopover_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_erasePopover_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_4_1_2_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_1_0_1_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_7_3_1_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_2_0_1_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_erasePopover_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "ddf7":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("a013");
var IE8_DOM_DEFINE = __webpack_require__("568a");
var toPrimitive = __webpack_require__("5325");
var dP = Object.defineProperty;

exports.f = __webpack_require__("dad2") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "ded0":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("5454");
exports = module.exports = __webpack_require__("690e")(false);
// imports


// module
exports.push([module.i, ".popover-wrap[data-v-715a6e9a]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:360px;height:270px;background:#fff;border-radius:8px;-webkit-box-shadow:3px 3px 3px 0 rgba(0,0,0,.05);box-shadow:3px 3px 3px 0 rgba(0,0,0,.05);border:2px solid #f0f0f0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.popover-wrap[data-v-715a6e9a],.thickness[data-v-715a6e9a]{-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;padding:0 30px}.thickness[data-v-715a6e9a]{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around;-webkit-box-flex:1;-ms-flex:1;flex:1;border-bottom:2px solid #f0f0f0}.thickness>.point[data-v-715a6e9a]{position:relative;border-radius:50%;background-color:#cfdae2;cursor:pointer}.thickness>.point[data-v-715a6e9a]:after{content:\" \";left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);position:absolute;width:44px;height:44px;background-color:transparent}.thickness>.point.on[data-v-715a6e9a]{background-color:#4d95fb}.thickness>.point.small[data-v-715a6e9a]{width:10px;height:10px}.thickness>.point.middle[data-v-715a6e9a]{width:16px;height:16px}.thickness>.point.large[data-v-715a6e9a]{width:22px;height:22px}.pen-line-style[data-v-715a6e9a]{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:0 10;border-bottom:2px solid #f0f0f0}.pen-line-style>.item[data-v-715a6e9a]{width:48px;height:48px;cursor:pointer}.pen-line-style>.item.pencil[data-v-715a6e9a]{background:url(" + escape(__webpack_require__("ec30")) + ")}.pen-line-style>.item.pencil.on[data-v-715a6e9a]{background:url(" + escape(__webpack_require__("f972")) + ")}.pen-line-style>.item.highlighters[data-v-715a6e9a]{background:url(" + escape(__webpack_require__("cad8")) + ")}.pen-line-style>.item.highlighters.on[data-v-715a6e9a]{background:url(" + escape(__webpack_require__("fbfc")) + ")}.pen-line-style>.item.curve[data-v-715a6e9a]{background:url(" + escape(__webpack_require__("c29c")) + ")}.pen-line-style>.item.curve.on[data-v-715a6e9a]{background:url(" + escape(__webpack_require__("16f0")) + ")}.pen-line-style>.item.stright[data-v-715a6e9a]{background:url(" + escape(__webpack_require__("26bd")) + ")}.pen-line-style>.item.stright.on[data-v-715a6e9a]{background:url(" + escape(__webpack_require__("2881")) + ")}.colors[data-v-715a6e9a]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.colors>.item[data-v-715a6e9a]{width:36px;height:36px;border-radius:8px;cursor:pointer}.colors>.item.on[data-v-715a6e9a]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.colors>.item.on[data-v-715a6e9a]:after{content:\" \";display:inline-block;width:20px;height:20px;background:url(" + escape(__webpack_require__("8bac")) + ") no-repeat}", ""]);

// exports


/***/ }),

/***/ "df99":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__("b2f5");
var context = __webpack_require__("91a1");
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__("984f")(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "dfab":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("adbd")('keys');
var uid = __webpack_require__("9d01");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "e3e0":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("88dd");
var document = __webpack_require__("3754").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "e588":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "e5ef":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("3754");
var hide = __webpack_require__("743d");
var has = __webpack_require__("03b3");
var SRC = __webpack_require__("9d01")('src');
var $toString = __webpack_require__("daf2");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("a4cc").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "e650":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "e67d":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "e6ef":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__("ddf7").f;
var create = __webpack_require__("a7b8");
var redefineAll = __webpack_require__("f216");
var ctx = __webpack_require__("01f5");
var anInstance = __webpack_require__("d74e");
var forOf = __webpack_require__("00d5");
var $iterDefine = __webpack_require__("7656");
var step = __webpack_require__("e650");
var setSpecies = __webpack_require__("c650");
var DESCRIPTORS = __webpack_require__("dad2");
var fastKey = __webpack_require__("3cc6").fastKey;
var validate = __webpack_require__("4678");
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),

/***/ "ec30":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAAEgBckRAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABKJJREFUeNpiZICCzz///4exedkZGRnRBWGACVkw0NsVIYGsSkdXH8EB6QBhFxcXMH38zAUwzQKyCMQAqYYZtX7rbgaAAILp2g/TCcQNIDFGbC7CsByrBMj82ooSuARho5BVgwBAAMGCJAFIzWcgAMBhCPICkO3AQCRgwqUYOZxRAFIAwfGLd59RghsZgzQ0IAsUFBajKEbXxAT0SAPIM8i2oocMsqcBAogRyWkGQOo8LoXowfqfmBCCBet/BuJBIqkasKemr1+/kKYhJiyQIT0phngNoGzw9ctX4mIaOaLmzF+ENaZRBGC5Dl/SwDDR3z/g/6Xrd/5jS2cgPxzAFkpFuRlYIw6UlhyB7A9EREEgiAAIIEa0AFAAUvcZKAMHoI5ASXvUMBgdfABaJMiILxdQAzCRaji+ZExSyYoryYMwKZYQbQEoL8EMBllCLGAhRtHk/m5w3oNXP9BSF5mPE2DLHch449adWLMcKGdhEyeYl5Hx3Ucv8BqybNVagpYwoZfwyGD/3l3w+nzlssXgYIFhEPD1DyIUQBeY0Et9XODKpYukZoFAoLmGLOhVC3pFfeXyRazVKI6q9QLIUGQBgABixBHxoHZJPSnlDxAXAg2/gC6BXtiR1HLAARSBFj3AsIDU6pBQ/Qq0ZAFyafoeSAlQuZwD+4QJGqkCNChI7+NtFFIJGNLaggMkFdek1gWgFElyffDq5UvaVDgw12NrblDFApjBNKsykYOGFF8QVaOBGunc3DwMikrK8AKQWEBUMkWvHkGRbW5pxZBbWEp5EIEqGnQwc/5ihn17dlEnDlYsXcQwc94SFDFQcIEAMZbgtQAW1mLi4hhyFTWN4NYGRRaAIhdXOIPiAD11kRVETi5ukKLx3l1wZCN3ZkANAlDDAA9oBFlwgZSMBnIxsREM6pcyoVfSxIDXr4gqjw4gB1EgA5UBrBMCaxdtoKIlHzB612gtC1B/wQDvsAISiIiOYwiPisWo7GEAIEB1ZozTMBBEUdtKmQKO4BtwA8QN4AAUqShRTkABRQqEhChAFIgTQBAXSJogbsEROAI8s2ONrLG92LuxM5Ir7yZ/dr2z//9pZXTuzj6XP91i8PHdVgE38i4F+tixx71kHPHtVn/ZRhwB/pqMO050Imlg1rutKK2EtHqwdigKoZM5IbNr4IkDsMfm1dEji/njT4/3xRMzJrF+GCb4/vbyR9CmU30ZjX8HAA/T1KzTorajTAAqpsHrJHxp2mAJQMGbaDbv/iOJgskmX2EobBuaL0xc74wkh4ixdMZgO4BcFvCwxyp4kRa8E/bfwYmIl8DZ7LQE2VRteMeYup7HIAmIS45A81HijGEsn1yIJHolsLi6KIDwPV8urr3nMZY5KFUfbd2WwKprrf/82BQuws3dQ21VAqQVzGEuh7vHHbHiJp4nPXpOOEZihUg1sg4pK64tFHGbepbVeebs8Vmoulw0d4wKQ2KBb2MUWtntQHfmiV/DcwzyMhetnCmf4os+ZsjdiBCs+r7udWSG4fLsfJG86wEPLR/diqeWQzFpcI7I8khpZlQbov9Qa+e6fpcVEDqL6FXArn+fpdW6suIHFUx4b/J6sv8AAAAASUVORK5CYII="

/***/ }),

/***/ "f01a":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "f216":
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__("e5ef");
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),

/***/ "f301":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__("b2f5");
var $includes = __webpack_require__("9f58")(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__("644a")('includes');


/***/ }),

/***/ "f425":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__("a013");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "f56b":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAACUUlEQVRoge2bQWsaQRiG3292l0qVutCAHgINGGh/Qv9Bj6UN7M2bLJTQnyMF6a03QyteCvkH/QuFFAzkYIOFNWijODtfL9VutxqTZnSdZZ7bzA7L+/CJ4+GVcAfqp1wsDuErDwVilJLPBODf5V3rUECUXDNhJGaYjMuIPryg8W3fQ+sOhG0uO0CVHewRwf2fsLphhqQYgxjotwIa3nR2pWD9lIsPxzjUPRndKCD6WcTZqqkuFTz+yE8U4WCjyTQjGL3mEZ2n9/8RfNPmp3BR3U4szUj03wX0NbklkouwwzVj5QDARTXscC25tRAM21x2GPvbT6UXh7Eftrk8X/+ZoMCzTBJtgoSLAIBGlyuOQCG7RHpxBAqNLleA34Le1PyPZpq5E739zA/kBM+zDrQJ3AK+iOvZbl/k9+F6Bl940/wKelP4Qrn5+XJJo1wUxK7/1rwPAvDF+mNmYwVNxwqajhU0HStoOlbQdKyg6VhB07GCpmMFTccKmo4VNB0raDr5F0wXbvKEAqL8T9Dl/E7QZUQChFHWQTYGYSQuZX4neCkRiZOAYqkwyDqMbqTC4CSgWAAAKVxkHUg3cycBAK2Ahnm6LhQQzWuWi2uCJXqZJdJM0mUh2ApoKNh8ScHoJUuyf130zSM6h0R/+7E0IdFPd0aXFmLDDtdMax7GhIvWK/qW3l9ZaT7+xI9nCoe7XtKLFSaewFnzNf1Y9nxtKb3R5YqY4WDXRGOFifLQe/+Svt90bq3gnPopFx+NsCcJPjFK227gM0MyYeQyoqsSBrf9a8EvRAu1HiVk1dAAAAAASUVORK5CYII="

/***/ }),

/***/ "f59b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__("ddf7");
var createDesc = __webpack_require__("7dea");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "f691":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("88dd");
var isArray = __webpack_require__("b5b8");
var SPECIES = __webpack_require__("8b37")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "f763":
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__("dac5");
var getKeys = __webpack_require__("cfc7");
var redefine = __webpack_require__("e5ef");
var global = __webpack_require__("3754");
var hide = __webpack_require__("743d");
var Iterators = __webpack_require__("14fc");
var wks = __webpack_require__("8b37");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "f7c1":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "f972":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAAEgBckRAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABKRJREFUeNpiZICCzz///4exedkZGRnRBWGACVmwYstfhASyKiVhRgQHpAOEs9f+AdMXn/0D00wgi2CqQUbNOv4PrAEggGC69sN0AnEDSIwRm4swLMcqgW4+YaNQXAMEAAEEC5IEIDWfgQAAhyHIC0C2AwORgAmXYuRwJujtH78ZGDp8mLFrAoUkUqj+7z3wFyVuYDQMg+KoARZPuEIG2dMAAcSIZJMBkDqPSyF6sP4nJoRgwfqfgXiQSKoG3MFKkoaGnX8ZOveREHGgbIDTFuRIQY+o9Zf//UeXx7AhzRIhtOfWP/w2wEws2fTn/63XmKbDbDiAbsh3oPsnHvqHNeJAackRyP5ARBQEggiAAGJEc54CkLrPQBk4AHUEStqjhsHo4APQIkFGfLmAGoDktA1KYBysFOYFXKARmORByR5fXiHbAlBe+v4bkbeIBSzEKFp98R+84EQudZH5ZPvg7JP/DGcf/2eod0c1LN+OCWfRTrQF778DXX/hH1aXSvIxMvhqE7aEBZQ9caUkkMth9fmeW/9RCg+QpdaKjAybr+I1/wITeqmPC9x7+5/ULBAINNeQEUtpBq+o0V2NCyAF4QWQochyAAHEiKNQBrVL6kkpf4C4EGj4BYycjGYwSS0HHEARaNEDDAtILTII1a9ASxYgl6bvgZQAlcs5sE+YoJFKbcMZYMU/I5WDBh0Y0tqCAyRZQGpdQHJ9ACqmQeUTTSyAVTKTDv2ljQUTD/+Ft2loYsH7bwj2pEP/iLaAqBoN1EjnZIXUAaSWrERZADIQudIBVf6gajRUn4nyIAIV2eig3IkZXBlRJQ5A9UG5M2qVCcsLoPqaIgtgYS3IiSkXZ8IErq8psgAUuaEG2JVoSTDCGwYUBZGxDMSg55/+g1sQyJ0ZUIOAQFw0giy4QFRGg6Z9UH4gJuyhjYkGJvRKmtRMR6CehgdRILXLaVgnBNYu2kBFSz5g9K7RWhagzogBvmEFZOCixgTEjBiVPQwABKjOjHEahqEwnBgmJnqADrkBEjPiCnAETlD1GB25ARIHoAMrUhGMrJ1hQoyMlVAb+hm/ylgmMYndur8UqWrs9D27ef7//7UyOnNmj+RHtwj+fNduwI28ywr6wrDH4yIPfJrVn7YRRwK/K/LGpZ1IGZn1bgsbK6F0X6w9ghY6ygiZfQsenBB7al6dHCrlw+/nK32lxGGqB8MEn19rQ9Bq+zDKfwdc54HPPmqbZQJQMZ9twnehNG1nCUDBm2g29zqYTY2IVoWg7pOHH3IGzRcmbu+MJIeI8emMne0AulyChz26wYu04J7o98VXRgmIzjkdlo3VhnuM0T2Pp2UeCYhLjkALUeKMYSyy6D8eRJIEbl9WOpDB0e9+VRsYy5z3tVLFguibwKxrrZ9/1Np0GZ0d/FmVkNM+MIe5yOoeZ8SMk3hc9Og54RjZtiDViJfU9cFYcTwZ2z5hbs+yOlbGHr+KVZcplT4Tj79a5NMYhbbpdqA7qyKs4ZmDvKxEKyvLp3ijjxlzNxKAVR/YvQ7lMVxujC9SdX3BY8tHs+Klz6EI5rimwYzoP0c7h/a6QmB5PwT7uL6mvtaVD9/y46POeK7ccQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "f9f2":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("b2f5");
var core = __webpack_require__("a4cc");
var fails = __webpack_require__("b6f1");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "fb18":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("690e")(false);
// imports


// module
exports.push([module.i, ".svg-borad[data-v-2b73900c]{display:block}.ignore[data-v-2b73900c]{pointer-events:none}", ""]);

// exports


/***/ }),

/***/ "fb37":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("db4b");
var $keys = __webpack_require__("cfc7");

__webpack_require__("f9f2")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "fb6d":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("03b3");
var toIObject = __webpack_require__("3a68");
var arrayIndexOf = __webpack_require__("9f58")(false);
var IE_PROTO = __webpack_require__("dfab")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "fbfc":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAAEgBckRAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABDpJREFUeNpiZICCzz///4exedkZGRnRBWGACZsgWAKZM+nQPwQHpAOEew/8/Q9jgzATyCKQgntv/zNUbPnLsOcWxGSAAILp2o+kugEkxkiU5VglfvzGIcHBiirJAmOAXAQCHT7MYBoggGBBkgCk5jMQAOAwBHkByHZgIBIw4VIMcwpR3gYpBrkZmyaQhkZsJsNolChABrCoyF77ByUS11/+B2eD1AEEECOSBgMgdR5X6MDYOFMavmD9z0A8SCRVA/ZgnXX8H2kaYKmapPSKC2D44ej9/wzWioxgW5SEGQnbcOQ+xP0gxdicxYIu8P4b7oQHs+EAse6HxzjQH++R0w+OwiEApBYggBjREqACkLrPQBk4AHSJI3rao4bB6OAD0CJBRny5gBqA5LRNKmAhRTEsuQhyMTCUOzGTn9kIAVDapCg343K9ixoTvMAHZS2qxQHI8HJnZgZBTlQxY1lGhlB9JsosABmErRCA+QLkKxc1RtyRDMqehCwhNjiwgAsssDIAnyWwcCel5AWCQKC5G1jQCxpsFTW+0gwt+C4AzTFEFgAIIEYclSKoXVJPSvkDxIVAwy9gRDKawSS1HHAARaBFDzAsoHKRkQi0ZAFyafoeSAlQuRgC+4QJGqkCNCjn7tOjNDWktQUHaF4fkFSaXnvxn3YWgMCiM//w5mqqVThD1wIpPkasHSCKLYDVB3l2TOAKpmHnX+paACr30ywhSmG1F6jZSxULVl/8h1Hug+rnzVf/UceCs4//MzS4o9ZooMof1DYiUKMRbnjBummg9I8OBDkZiaqrWUiJZDJAIyiILtAqDwDrgwYm9EqamiUpchAFAvF6XK0GWBIlttMOdb0jPBWB2i9QS6jV8WDEiGSoJaD6AdQZMSCml4qvsocBgABjJKQDWmfnI1tKJwBKfBPRHYy33YXk6ABo61GAYXCAD9DQ30Co4RiAK7EOIhCI7BFGKrd66QXgQwmwhu/5AUjjFOcRUBnKBO3IDDXHg4AByO00b/YOyTbj80/0CxMWWhg6EWkaAdRuAjUzjWUYh04MIAPQmNXqC6T3VwaNB4Z8v2nIeQDWSYF1TkAYmxy1AFWLUdAc4DNgCYRtMLhz319wfgB1TkH9x0HlAVBPGeTA70BaW4KRIdYEuwMXAztfV1/8Z+BkhXgQNJM44B4AlfmwYpPQsC+sJ7nnFkR9PjAmJPkYB84DoM4IrG8cakB8WX/2yX9w0QoCoO4YrrFwYiuyA+S2Qu+9Rcq8QAetvkCeGUrC5LdKQYm1cAiXooVM0OHxxCHoeFAPDT7bsQCYF0BJ6Tw53Uh8Qwu4ACjvkDliA+peGsKmC5iQRg0egOYxB3lsgEJdEHmugwXLgAtoFGABdLJ3PjEZHFQPkBqaJIyyHoA6/AFJzWmoBkekPjOo1wbq9NujewpU+846TpUKHeTYg0C8AdvUFTYAAD14MxjFGK0SAAAAAElFTkSuQmCC"

/***/ }),

/***/ "fe3a":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("ded0");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("85cb").default
var update = add("3c97a7e7", content, true, {"sourceMap":false,"shadowMode":false});

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=sketchBoard.umd.js.map