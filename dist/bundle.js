/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Syncopate-Regular.ttf */ "./src/Syncopate-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./ty-finck-U_2AlnfIGIU-unsplash.jpg */ "./src/ty-finck-U_2AlnfIGIU-unsplash.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: "Syncopate";
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    font-weight: 400;
    font-style:normal;
}

html {
    height: 100%;

}

body {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-repeat: no-repeat;
    background-size: 100% 800px;
    overflow:hidden;
    font-family: "Syncopate";
    color:rgb(220, 207, 207);
    margin: 0;

}

/*STATIC HEADER*/

.templateHeader {
    position:fixed;
    z-index: 1;
    width: 100%;
    font-size: 24px;
    height: 130px;
    background-color: rgba(120,53,19, 30%);
    padding-top: 10px;
    text-align: center;
    padding-bottom: 30px;
}

@media screen and (max-width: 589px) {
    .templateHeader {
        height: 180px;
    }
}

.title {
    margin-top: 36px;
    margin-bottom: 18px;
}

.address {
    margin:0;
}

/* FRONT PAGE STYLING */

#content {
    position: absolute;
    width: 100%;
    height: 800px;
    background-color: rgba(10,10,10, 60%);
}

.frontPage {
    position: relative;
    top: 190px;
} 

.welcome {
    padding-top: clamp(100px, 15%, 170px);
    text-align: center;
    margin: 0;
    font-size: clamp(20px, 3vw, 32px);
    font-weight: 800;
}

.descript {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    padding-bottom: 40px;
    padding-top: 14px;
    font-size: clamp(14px, 1.8vw, 20px);
    font-weight: 600;
    width: min(60%, 615px);
}

.hours {
    text-align: center;
    font-size: clamp(14px, 1.8vw, 20px);
    font-weight: 800;
    margin:0;
    padding-bottom: 10px;
}

/* MENU + CONTACT SHARED STYLING */

.page {
    overflow:auto;
    position: fixed;
    height:calc(100% - 209px);
    width: 100%;
    top: 170px;
}

.heading {
    color: rgb(220, 207, 207);
    font-size: 48px;
    text-align: center;
}

@media screen and (max-width: 589px) {
    .frontPage {
        top: 220px;
    }
    .page {
        top: 220px;
        height: calc(100% - 259px);
    }
}

/* MENU STYLING */

.itemHeader {
    font-size: 24px;
    font-weight: 600;
    margin-left: 10%;
}

.gridContainerMenu {
    display: grid;
    grid-template-columns: repeat(auto-fit, 420px);
    gap: 20px;
    margin-left: 10%;
    margin-bottom: 40px;
}

.menuItem {
    display:grid;
    grid-template-columns: 4fr 1fr;
    grid-template-rows: 30px 1fr;
    height: 100px;
    width: 400px;
    background-color:rgba(10,10,10, 70%);
    border: 5px solid rgb(220, 207, 207);
    border-radius: 10px;
    color: rgb(220, 207, 207);
    font-weight: 600;
}

.itemName {
    margin: 0;
    padding-top: 10px;
    padding-left: 10px;
    font-size: 18px;
}

.itemPrice {
    margin: 0;
    padding-top: 10px;
    padding-right: 10px;
    text-align: end;
    font-size: 18px;
}

.itemDescript {
    grid-area: 2 / 1 / 3 / 3;
    margin: 14px 10px 0 10px;

    font-size: 14px;
}

/* CONTACT STYLING */

.phoneContact, .emailContact, .addressContact {
    text-align: center;
    font-weight: 600;
    font-size: 18px;
}

#msgFormContact {
    margin-top: 60px;
}

.msgHeaderContact {
    margin-left: 5%;
}

.formDivs {
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    margin-bottom: 10px;
}

label {
    font-weight: 600;
}

.msgLabel {
    position:relative;
    bottom: 190px;
}

#FullName {
    position:relative;
    height: 20px;
    left: 10px;
    width: min(68%, 600px);
}

#Email {
    position: relative;
    height: 20px;
    left: 66px;
    width: min(68%, 600px);
}

#Message {
    position: relative;
    height: 200px;
    width: min(68%, 600px);
    left: 27px;
}

.submitBtn {
    position:relative;
    width: 100px;
    height: 30px;
    border-radius: 10px;
    font-family: "Syncopate";
    font-weight: 600;
    color: rgb(39,26,28);
    background-color: rgb(220, 207, 207);
    margin-top: 0px;
    margin-bottom: 40px;
    left: min(68%, 745px);
}

/* NAV BUTTONS SHARED */

.navBarHome button {
    width: 150px;
    height: 50px;
    border-radius: 10px;
    font-family: "Syncopate";
    font-weight: 600;
    color: rgb(39,26,28);
    background-color: rgb(220, 207, 207);
}

/* NAV HOME */

.navBarHome {
    position: fixed;
    display:flex;
    bottom: 60px;
    height: 60px;
    width: 100%;
    justify-content:center;
    gap: 40px;
}

@media screen and (max-height: 610px) {
    .navBarHome {
        top: 220px;
    }
}

/* NAV HIDDEN */

.hidden {
    display:none;
}

/* NAV BUTTON UPPER RIGHT CORNER */

.topRight {
    position: fixed;
    top:200px;
    right: 5%;
}

@media screen and (max-width: 589px) {
    .navBarHome button {
        width: 100px;
    }
    .topRight {
        top:245px;
    }
}


/* STATIC FOOTER */

.templateFooter {
    position: fixed;
    width: 100%;
    bottom: 0;
}

.templateFooter p {
    font-weight: 600;
    color: rgb(220, 207, 207);
    text-align: center;
    background-color: rgb(39,26,28);
    margin: 0;
    padding: 10px;
}

.templateFooter a {
    color: rgb(220, 207, 207);
}

.gitLogo {
    height: 15px;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: \"Syncopate\";\n    src: url('./Syncopate-Regular.ttf');\n    font-weight: 400;\n    font-style:normal;\n}\n\nhtml {\n    height: 100%;\n\n}\n\nbody {\n    background-image: url('./ty-finck-U_2AlnfIGIU-unsplash.jpg');\n    background-repeat: no-repeat;\n    background-size: 100% 800px;\n    overflow:hidden;\n    font-family: \"Syncopate\";\n    color:rgb(220, 207, 207);\n    margin: 0;\n\n}\n\n/*STATIC HEADER*/\n\n.templateHeader {\n    position:fixed;\n    z-index: 1;\n    width: 100%;\n    font-size: 24px;\n    height: 130px;\n    background-color: rgba(120,53,19, 30%);\n    padding-top: 10px;\n    text-align: center;\n    padding-bottom: 30px;\n}\n\n@media screen and (max-width: 589px) {\n    .templateHeader {\n        height: 180px;\n    }\n}\n\n.title {\n    margin-top: 36px;\n    margin-bottom: 18px;\n}\n\n.address {\n    margin:0;\n}\n\n/* FRONT PAGE STYLING */\n\n#content {\n    position: absolute;\n    width: 100%;\n    height: 800px;\n    background-color: rgba(10,10,10, 60%);\n}\n\n.frontPage {\n    position: relative;\n    top: 190px;\n} \n\n.welcome {\n    padding-top: clamp(100px, 15%, 170px);\n    text-align: center;\n    margin: 0;\n    font-size: clamp(20px, 3vw, 32px);\n    font-weight: 800;\n}\n\n.descript {\n    margin-left: auto;\n    margin-right: auto;\n    text-align: center;\n    padding-bottom: 40px;\n    padding-top: 14px;\n    font-size: clamp(14px, 1.8vw, 20px);\n    font-weight: 600;\n    width: min(60%, 615px);\n}\n\n.hours {\n    text-align: center;\n    font-size: clamp(14px, 1.8vw, 20px);\n    font-weight: 800;\n    margin:0;\n    padding-bottom: 10px;\n}\n\n/* MENU + CONTACT SHARED STYLING */\n\n.page {\n    overflow:auto;\n    position: fixed;\n    height:calc(100% - 209px);\n    width: 100%;\n    top: 170px;\n}\n\n.heading {\n    color: rgb(220, 207, 207);\n    font-size: 48px;\n    text-align: center;\n}\n\n@media screen and (max-width: 589px) {\n    .frontPage {\n        top: 220px;\n    }\n    .page {\n        top: 220px;\n        height: calc(100% - 259px);\n    }\n}\n\n/* MENU STYLING */\n\n.itemHeader {\n    font-size: 24px;\n    font-weight: 600;\n    margin-left: 10%;\n}\n\n.gridContainerMenu {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, 420px);\n    gap: 20px;\n    margin-left: 10%;\n    margin-bottom: 40px;\n}\n\n.menuItem {\n    display:grid;\n    grid-template-columns: 4fr 1fr;\n    grid-template-rows: 30px 1fr;\n    height: 100px;\n    width: 400px;\n    background-color:rgba(10,10,10, 70%);\n    border: 5px solid rgb(220, 207, 207);\n    border-radius: 10px;\n    color: rgb(220, 207, 207);\n    font-weight: 600;\n}\n\n.itemName {\n    margin: 0;\n    padding-top: 10px;\n    padding-left: 10px;\n    font-size: 18px;\n}\n\n.itemPrice {\n    margin: 0;\n    padding-top: 10px;\n    padding-right: 10px;\n    text-align: end;\n    font-size: 18px;\n}\n\n.itemDescript {\n    grid-area: 2 / 1 / 3 / 3;\n    margin: 14px 10px 0 10px;\n\n    font-size: 14px;\n}\n\n/* CONTACT STYLING */\n\n.phoneContact, .emailContact, .addressContact {\n    text-align: center;\n    font-weight: 600;\n    font-size: 18px;\n}\n\n#msgFormContact {\n    margin-top: 60px;\n}\n\n.msgHeaderContact {\n    margin-left: 5%;\n}\n\n.formDivs {\n    width: 80%;\n    margin-left: 10%;\n    margin-right: 10%;\n    margin-bottom: 10px;\n}\n\nlabel {\n    font-weight: 600;\n}\n\n.msgLabel {\n    position:relative;\n    bottom: 190px;\n}\n\n#FullName {\n    position:relative;\n    height: 20px;\n    left: 10px;\n    width: min(68%, 600px);\n}\n\n#Email {\n    position: relative;\n    height: 20px;\n    left: 66px;\n    width: min(68%, 600px);\n}\n\n#Message {\n    position: relative;\n    height: 200px;\n    width: min(68%, 600px);\n    left: 27px;\n}\n\n.submitBtn {\n    position:relative;\n    width: 100px;\n    height: 30px;\n    border-radius: 10px;\n    font-family: \"Syncopate\";\n    font-weight: 600;\n    color: rgb(39,26,28);\n    background-color: rgb(220, 207, 207);\n    margin-top: 0px;\n    margin-bottom: 40px;\n    left: min(68%, 745px);\n}\n\n/* NAV BUTTONS SHARED */\n\n.navBarHome button {\n    width: 150px;\n    height: 50px;\n    border-radius: 10px;\n    font-family: \"Syncopate\";\n    font-weight: 600;\n    color: rgb(39,26,28);\n    background-color: rgb(220, 207, 207);\n}\n\n/* NAV HOME */\n\n.navBarHome {\n    position: fixed;\n    display:flex;\n    bottom: 60px;\n    height: 60px;\n    width: 100%;\n    justify-content:center;\n    gap: 40px;\n}\n\n@media screen and (max-height: 610px) {\n    .navBarHome {\n        top: 220px;\n    }\n}\n\n/* NAV HIDDEN */\n\n.hidden {\n    display:none;\n}\n\n/* NAV BUTTON UPPER RIGHT CORNER */\n\n.topRight {\n    position: fixed;\n    top:200px;\n    right: 5%;\n}\n\n@media screen and (max-width: 589px) {\n    .navBarHome button {\n        width: 100px;\n    }\n    .topRight {\n        top:245px;\n    }\n}\n\n\n/* STATIC FOOTER */\n\n.templateFooter {\n    position: fixed;\n    width: 100%;\n    bottom: 0;\n}\n\n.templateFooter p {\n    font-weight: 600;\n    color: rgb(220, 207, 207);\n    text-align: center;\n    background-color: rgb(39,26,28);\n    margin: 0;\n    padding: 10px;\n}\n\n.templateFooter a {\n    color: rgb(220, 207, 207);\n}\n\n.gitLogo {\n    height: 15px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Contact)
/* harmony export */ });
function Contact() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const page = document.createElement("div");
    page.classList.add("page");
    content.appendChild(page);

    // HEADING //

    const heading = document.createElement("h1");
    heading.classList.add("heading");
    heading.innerText = "CONTACT";
    page.appendChild(heading);

    // NAV //

    

    // CONTACT INFO //

    const phone = document.createElement("p");
    phone.classList.add("phoneContact");
    phone.innerText = "Phone: (816) 555 - 5555";
    page.appendChild(phone);

    const email = document.createElement("p");
    email.classList.add("emailContact");
    email.innerText = "Email: WoodfireKC@pizza.org";
    page.appendChild(email);

    const address = document.createElement("p");
    address.classList.add("addressContact");
    address.innerText = "Address: 810 Main Street";
    page.appendChild(address);

    // MESSAGE FORM //

    const msgForm = document.createElement("form")
    msgForm.setAttribute("id", "msgFormContact");
    msgForm.setAttribute("name", "email");
    msgForm.setAttribute("method", "POST");
    page.appendChild(msgForm);

    const msgHeader = document.createElement("h1");
    msgHeader.classList.add("msgHeaderContact");
    msgHeader.innerText = "Send us a message";
    msgForm.appendChild(msgHeader);

    const spacer = document.createElement("div");
    msgForm.appendChild(spacer);

    const nameDiv = document.createElement("div");
    nameDiv.classList.add("formDivs");
    msgForm.appendChild(nameDiv);

    const nameLabelForm = document.createElement("label");
    nameLabelForm.setAttribute("for", "FullName");
    nameLabelForm.innerText = "Full Name: ";
    nameDiv.appendChild(nameLabelForm);

    const nameInputForm = document.createElement("input");
    nameInputForm.setAttribute("type", "text");
    nameInputForm.setAttribute("id", "FullName");
    nameDiv.appendChild(nameInputForm);

    const emailDiv = document.createElement("div");
    emailDiv.classList.add("formDivs");
    msgForm.appendChild(emailDiv);

    const emailLabelForm = document.createElement("label");
    emailLabelForm.setAttribute("for", "Email");
    emailLabelForm.innerText = "Email: ";
    emailDiv.appendChild(emailLabelForm);

    const emailInputForm = document.createElement("input");
    emailInputForm.setAttribute("type", "text");
    emailInputForm.setAttribute("id", "Email");
    emailDiv.appendChild(emailInputForm);

    const msgDiv = document.createElement("div");
    msgDiv.classList.add("formDivs");
    msgForm.appendChild(msgDiv);

    const messageLabelForm = document.createElement("label");
    messageLabelForm.setAttribute("for", "Message");
    messageLabelForm.classList.add("msgLabel");
    messageLabelForm.innerText = "Message: ";
    msgDiv.appendChild(messageLabelForm);

    const messageInputForm = document.createElement("textarea");
    messageInputForm.setAttribute("type", "text");
    messageInputForm.setAttribute("id", "Message");
    msgDiv.appendChild(messageInputForm);

    const submitBtn = document.createElement("button");
    submitBtn.classList.add("submitBtn");
    submitBtn.innerText = "SUBMIT"
    msgForm.appendChild(submitBtn);


    return page;

}

/***/ }),

/***/ "./src/frontPage.js":
/*!**************************!*\
  !*** ./src/frontPage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FrontPage)
/* harmony export */ });
function FrontPage() {

    const content = document.getElementById('content');
    content.innerHTML = "";

    const frontPage = document.createElement('div');
    frontPage.classList.add("frontPage")

    content.appendChild(frontPage);

    const welcome = document.createElement("p");
    welcome.classList.add("welcome")

    welcome.innerText = "Restaurant & Bar";

    frontPage.appendChild(welcome);

    const descript = document.createElement('p');
    descript.classList.add("descript")

    descript.innerText = "serving woodfire pizza, salads, appetizers & a large variety of local taps daily";

    frontPage.appendChild(descript);

    const hours = document.createElement('p');
    hours.classList.add("hours");

    hours.innerText = "Hours: 3PM - 1AM";

    frontPage.appendChild(hours);

    return frontPage;

}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Menu)
/* harmony export */ });
/* harmony import */ var _menuItems_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuItems.js */ "./src/menuItems.js");


function Menu() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const page = document.createElement("div");
    page.classList.add("page");
    content.appendChild(page);

    /* MAIN HEADING */

    const heading = document.createElement("h1");
    heading.classList.add("heading")
    heading.innerText = "MENU";
    page.appendChild(heading);

    /* MENU ITEMS */
    
    const appList = [];
    const saladList = [];
    const pizzasList = [];

    const app1 = new _menuItems_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Buffalo Wings", "8 piece served with celery and blue cheese", 10.98);
    appList.push(app1);

    const app2 = new _menuItems_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Buffalo Cauliflower Bites", "8 piece served with blue cheese or ranch", 5.89);
    appList.push(app2);

    const app3 = new _menuItems_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Fried Pickles", "served with blue cheese or ranch", 6.89);
    appList.push(app3);

    const app4 = new _menuItems_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Smothered Fries", "bacon, in-house cheese sauce, fresh jalapenos, sour cream", 10.98);
    appList.push(app4);

    const salad1 = new _menuItems_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Fried Goat Cheese ", "arugula and romaine, corn, black olives, panko-fried goat cheese, spicy chipotle ranch", 10.98);
    saladList.push(salad1);

    const salad2 = new _menuItems_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Southern Fried Chicken", "romaine and iceberg, corn, black olives, southern fried chicken, spicy chipotle ranch", 11.98);
    saladList.push(salad2);

    const salad3 = new _menuItems_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Steak and Blue Cheese", "arugula and romaine, diced tomatoes, blue cheese crumbles, blue cheese dressing", 12.98);
    saladList.push(salad3);

    const pizza1 = new _menuItems_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Meat", "Tomatoes, mozzarella, italian sausage, bacon, pepperoni", 13.74);
    pizzasList.push(pizza1);

    const pizza2 = new _menuItems_js__WEBPACK_IMPORTED_MODULE_0__["default"]("margherita", "tomatoes, mozzarella, basil, extra virgin olive oil", 10.98);
    pizzasList.push(pizza2);

    const pizza3 = new _menuItems_js__WEBPACK_IMPORTED_MODULE_0__["default"]("pesto", "basil pesto, mozzarella, italian sausage, diced tomatoes, extra virgin olive oil", 11.98);
    pizzasList.push(pizza3);

    const pizza4 = new _menuItems_js__WEBPACK_IMPORTED_MODULE_0__["default"]("pepperoni", "tomatoes, mozzarella, pepperoni, spicy honey", 10.98);
    pizzasList.push(pizza4);

    const pizza5 = new _menuItems_js__WEBPACK_IMPORTED_MODULE_0__["default"]("sausage", "tomatoes, mozzarella, basil, italian sausage", 10.98);
    pizzasList.push(pizza5);

    const pizza6 = new _menuItems_js__WEBPACK_IMPORTED_MODULE_0__["default"]("ricotta", "mozzarella, ricotta, basil, oregano, extra virgin olive oil", 9.98);
    pizzasList.push(pizza6);

    /* FUNCTION TO ADD ITEMS FROM LIST TO DOM */

    function addItems(listName, container) {

        for (let i=0; i<listName.length; i++) {
            const newItem = document.createElement("div");
            newItem.classList.add("menuItem");
            container.appendChild(newItem);

            const name = document.createElement("p");
            name.classList.add("itemName");
            name.innerText = listName[i].name;
            newItem.appendChild(name);

            const price = document.createElement("p");
            price.classList.add("itemPrice");
            price.innerText = `$${listName[i].price}`;
            newItem.appendChild(price);

            const description = document.createElement("p");
            description.classList.add("itemDescript");
            description.innerText = listName[i].des;
            newItem.appendChild(description);

        }
    }

    /* APPETIZERS */

    const apps = document.createElement("p");
    apps.classList.add("itemHeader");
    apps.innerText = "appetizers";
    apps.setAttribute("id", "appetizerHeading");
    page.appendChild(apps);

    const appsContainer = document.createElement("div");
    appsContainer.classList.add("gridContainerMenu");
    page.appendChild(appsContainer);

    addItems(appList, appsContainer);

    /* SALADS */

    const salads = document.createElement("p");
    salads.classList.add("itemHeader");
    salads.innerText = "Salads";
    salads.setAttribute("id", "saladsHeading");
    page.appendChild(salads);

    const saladsContainer = document.createElement("div");
    saladsContainer.classList.add("gridContainerMenu");
    page.appendChild(saladsContainer);

    addItems(saladList, saladsContainer);

    /* PIZZAS */

    const pizzas = document.createElement("p");
    pizzas.classList.add("itemHeader");
    pizzas.innerText = "Pizzas";
    pizzas.setAttribute("id", "pizzasHeading");
    page.appendChild(pizzas);

    const pizzasContainer = document.createElement("div");
    pizzasContainer.classList.add("gridContainerMenu");
    page.appendChild(pizzasContainer);

    addItems(pizzasList, pizzasContainer);


    return page;



}

/***/ }),

/***/ "./src/menuItems.js":
/*!**************************!*\
  !*** ./src/menuItems.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MenuItems)
/* harmony export */ });
class MenuItems {
    constructor(name, des, price) {
        this.name = name;
        this.des = des;
        this.price = price;
    }

}





/***/ }),

/***/ "./src/Syncopate-Regular.ttf":
/*!***********************************!*\
  !*** ./src/Syncopate-Regular.ttf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "be83f868855d77b60447.ttf";

/***/ }),

/***/ "./src/github-mark-white.svg":
/*!***********************************!*\
  !*** ./src/github-mark-white.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "97ed8e7eef60d61ca469.svg";

/***/ }),

/***/ "./src/ty-finck-U_2AlnfIGIU-unsplash.jpg":
/*!***********************************************!*\
  !*** ./src/ty-finck-U_2AlnfIGIU-unsplash.jpg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dd592c1fb58105100836.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _github_mark_white_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./github-mark-white.svg */ "./src/github-mark-white.svg");
/* harmony import */ var _frontPage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./frontPage.js */ "./src/frontPage.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");






function Component() {

    const page = document.createElement("div")
    document.body.appendChild(page);

    // TEMPLATE HEADER

    const header = document.createElement("header");
    header.classList.add("templateHeader");
    page.appendChild(header);
    header.onclick = switchFrontPage;


    const title = document.createElement("h1");
    title.innerText = "WoodFire Pizzeria";
    title.classList.add("title");
    header.appendChild(title);

    const address = document.createElement("h4");
    address.innerText = "810 Main Street";
    address.classList.add("address");
    header.appendChild(address);


    // VARIABLE CONTENT

    const content = document.createElement("div");
    content.setAttribute("id", "content");

    page.appendChild(content);

    content.appendChild((0,_contact_js__WEBPACK_IMPORTED_MODULE_4__["default"])());

    // NAV

    const navBar = document.createElement("nav");
    navBar.classList.add("navBarHome");
    page.appendChild(navBar);

    const menuBtn = document.createElement("button");
    menuBtn.innerText = "Menu";
    navBar.appendChild(menuBtn);
    menuBtn.onclick = switchMenu;


    const contactBtn = document.createElement("button");
    contactBtn.innerText = "Contact";
    navBar.appendChild(contactBtn);
    contactBtn.onclick = switchContact;


    // HANDLE ONCLICK DYNAMIC NAV AND PAGE

    function switchContact () {
        contactBtn.classList.remove("topRight");
        contactBtn.classList.add("hidden");
        menuBtn.classList.remove("hidden");
        menuBtn.classList.add("topRight");
        (0,_contact_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
    }

    function switchMenu() {
        menuBtn.classList.remove("topRight");
        menuBtn.classList.add("hidden");
        contactBtn.classList.remove("hidden");
        contactBtn.classList.add("topRight");
        (0,_menu_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
    }

    function switchFrontPage() {
        menuBtn.classList.remove("hidden");
        menuBtn.classList.remove("topRight");
        contactBtn.classList.remove("hidden");
        contactBtn.classList.remove("topRight");
        (0,_frontPage_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    }

    // FOOTER

    const templateFooter = document.createElement("footer");
    templateFooter.classList.add("templateFooter");
    page.appendChild(templateFooter);

    const gitHub = document.createElement("p");
    gitHub.classList.add("gitHub");
    gitHub.innerText = "Created By ";
    templateFooter.appendChild(gitHub);

    const Icon = new Image();
    Icon.src = _github_mark_white_svg__WEBPACK_IMPORTED_MODULE_1__;
    Icon.classList.add("gitLogo");

    const gitHubLink = document.createElement("a");
    gitHubLink.setAttribute("href", "https://github.com/BenjaminJMcD");
    gitHubLink.appendChild(Icon)
    const gitName = document.createElement("span");
    gitName.innerText = "BenjaminJMcD";
    gitHubLink.appendChild(gitName);
    gitHub.appendChild(gitHubLink);

    return page;

}

document.body.appendChild(Component());

//<p class="gitHub">
//Created By 
//<a href="github.com">
//<img class="gitLogo" src="GitIcon"/>
//BenjaminJMcD
//</a></p>
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsMkhBQTBDO0FBQ3RGLDRDQUE0QyxtSkFBc0Q7QUFDbEcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsT0FBTyxpRkFBaUYsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsWUFBWSxNQUFNLGFBQWEsTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxVQUFVLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLGFBQWEsTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxNQUFNLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksY0FBYyxXQUFXLE9BQU8sYUFBYSxNQUFNLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sV0FBVyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLEtB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RUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsd0JBQXdCLHVEQUFPOztBQUUvQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1REFBTztBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG9EQUFJO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEseURBQVM7QUFDakI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxtREFBTztBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvZnJvbnRQYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvbWVudUl0ZW1zLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vU3luY29wYXRlLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi90eS1maW5jay1VXzJBbG5mSUdJVS11bnNwbGFzaC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJTeW5jb3BhdGVcIjtcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc3R5bGU6bm9ybWFsO1xufVxuXG5odG1sIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbn1cblxuYm9keSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDgwMHB4O1xuICAgIG92ZXJmbG93OmhpZGRlbjtcbiAgICBmb250LWZhbWlseTogXCJTeW5jb3BhdGVcIjtcbiAgICBjb2xvcjpyZ2IoMjIwLCAyMDcsIDIwNyk7XG4gICAgbWFyZ2luOiAwO1xuXG59XG5cbi8qU1RBVElDIEhFQURFUiovXG5cbi50ZW1wbGF0ZUhlYWRlciB7XG4gICAgcG9zaXRpb246Zml4ZWQ7XG4gICAgei1pbmRleDogMTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgaGVpZ2h0OiAxMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyMCw1MywxOSwgMzAlKTtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4OXB4KSB7XG4gICAgLnRlbXBsYXRlSGVhZGVyIHtcbiAgICAgICAgaGVpZ2h0OiAxODBweDtcbiAgICB9XG59XG5cbi50aXRsZSB7XG4gICAgbWFyZ2luLXRvcDogMzZweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xufVxuXG4uYWRkcmVzcyB7XG4gICAgbWFyZ2luOjA7XG59XG5cbi8qIEZST05UIFBBR0UgU1RZTElORyAqL1xuXG4jY29udGVudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogODAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMCwxMCwxMCwgNjAlKTtcbn1cblxuLmZyb250UGFnZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMTkwcHg7XG59IFxuXG4ud2VsY29tZSB7XG4gICAgcGFkZGluZy10b3A6IGNsYW1wKDEwMHB4LCAxNSUsIDE3MHB4KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogY2xhbXAoMjBweCwgM3Z3LCAzMnB4KTtcbiAgICBmb250LXdlaWdodDogODAwO1xufVxuXG4uZGVzY3JpcHQge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gICAgcGFkZGluZy10b3A6IDE0cHg7XG4gICAgZm9udC1zaXplOiBjbGFtcCgxNHB4LCAxLjh2dywgMjBweCk7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB3aWR0aDogbWluKDYwJSwgNjE1cHgpO1xufVxuXG4uaG91cnMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IGNsYW1wKDE0cHgsIDEuOHZ3LCAyMHB4KTtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIG1hcmdpbjowO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4vKiBNRU5VICsgQ09OVEFDVCBTSEFSRUQgU1RZTElORyAqL1xuXG4ucGFnZSB7XG4gICAgb3ZlcmZsb3c6YXV0bztcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgaGVpZ2h0OmNhbGMoMTAwJSAtIDIwOXB4KTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0b3A6IDE3MHB4O1xufVxuXG4uaGVhZGluZyB7XG4gICAgY29sb3I6IHJnYigyMjAsIDIwNywgMjA3KTtcbiAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODlweCkge1xuICAgIC5mcm9udFBhZ2Uge1xuICAgICAgICB0b3A6IDIyMHB4O1xuICAgIH1cbiAgICAucGFnZSB7XG4gICAgICAgIHRvcDogMjIwcHg7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMjU5cHgpO1xuICAgIH1cbn1cblxuLyogTUVOVSBTVFlMSU5HICovXG5cbi5pdGVtSGVhZGVyIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xufVxuXG4uZ3JpZENvbnRhaW5lck1lbnUge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIDQyMHB4KTtcbiAgICBnYXA6IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuXG4ubWVudUl0ZW0ge1xuICAgIGRpc3BsYXk6Z3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzMHB4IDFmcjtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMTAsMTAsMTAsIDcwJSk7XG4gICAgYm9yZGVyOiA1cHggc29saWQgcmdiKDIyMCwgMjA3LCAyMDcpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgY29sb3I6IHJnYigyMjAsIDIwNywgMjA3KTtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uaXRlbU5hbWUge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uaXRlbVByaWNlIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uaXRlbURlc2NyaXB0IHtcbiAgICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDM7XG4gICAgbWFyZ2luOiAxNHB4IDEwcHggMCAxMHB4O1xuXG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4vKiBDT05UQUNUIFNUWUxJTkcgKi9cblxuLnBob25lQ29udGFjdCwgLmVtYWlsQ29udGFjdCwgLmFkZHJlc3NDb250YWN0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbiNtc2dGb3JtQ29udGFjdCB7XG4gICAgbWFyZ2luLXRvcDogNjBweDtcbn1cblxuLm1zZ0hlYWRlckNvbnRhY3Qge1xuICAgIG1hcmdpbi1sZWZ0OiA1JTtcbn1cblxuLmZvcm1EaXZzIHtcbiAgICB3aWR0aDogODAlO1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxubGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5tc2dMYWJlbCB7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgYm90dG9tOiAxOTBweDtcbn1cblxuI0Z1bGxOYW1lIHtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgbGVmdDogMTBweDtcbiAgICB3aWR0aDogbWluKDY4JSwgNjAwcHgpO1xufVxuXG4jRW1haWwge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgbGVmdDogNjZweDtcbiAgICB3aWR0aDogbWluKDY4JSwgNjAwcHgpO1xufVxuXG4jTWVzc2FnZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgd2lkdGg6IG1pbig2OCUsIDYwMHB4KTtcbiAgICBsZWZ0OiAyN3B4O1xufVxuXG4uc3VibWl0QnRuIHtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZm9udC1mYW1pbHk6IFwiU3luY29wYXRlXCI7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogcmdiKDM5LDI2LDI4KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIwLCAyMDcsIDIwNyk7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgbGVmdDogbWluKDY4JSwgNzQ1cHgpO1xufVxuXG4vKiBOQVYgQlVUVE9OUyBTSEFSRUQgKi9cblxuLm5hdkJhckhvbWUgYnV0dG9uIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZm9udC1mYW1pbHk6IFwiU3luY29wYXRlXCI7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogcmdiKDM5LDI2LDI4KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIwLCAyMDcsIDIwNyk7XG59XG5cbi8qIE5BViBIT01FICovXG5cbi5uYXZCYXJIb21lIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGJvdHRvbTogNjBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcbiAgICBnYXA6IDQwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA2MTBweCkge1xuICAgIC5uYXZCYXJIb21lIHtcbiAgICAgICAgdG9wOiAyMjBweDtcbiAgICB9XG59XG5cbi8qIE5BViBISURERU4gKi9cblxuLmhpZGRlbiB7XG4gICAgZGlzcGxheTpub25lO1xufVxuXG4vKiBOQVYgQlVUVE9OIFVQUEVSIFJJR0hUIENPUk5FUiAqL1xuXG4udG9wUmlnaHQge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6MjAwcHg7XG4gICAgcmlnaHQ6IDUlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODlweCkge1xuICAgIC5uYXZCYXJIb21lIGJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICB9XG4gICAgLnRvcFJpZ2h0IHtcbiAgICAgICAgdG9wOjI0NXB4O1xuICAgIH1cbn1cblxuXG4vKiBTVEFUSUMgRk9PVEVSICovXG5cbi50ZW1wbGF0ZUZvb3RlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvdHRvbTogMDtcbn1cblxuLnRlbXBsYXRlRm9vdGVyIHAge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6IHJnYigyMjAsIDIwNywgMjA3KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM5LDI2LDI4KTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLnRlbXBsYXRlRm9vdGVyIGEge1xuICAgIGNvbG9yOiByZ2IoMjIwLCAyMDcsIDIwNyk7XG59XG5cbi5naXRMb2dvIHtcbiAgICBoZWlnaHQ6IDE1cHg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHdCQUF3QjtJQUN4Qiw0Q0FBbUM7SUFDbkMsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7O0FBRWhCOztBQUVBO0lBQ0kseURBQTREO0lBQzVELDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLHdCQUF3QjtJQUN4Qix3QkFBd0I7SUFDeEIsU0FBUzs7QUFFYjs7QUFFQSxnQkFBZ0I7O0FBRWhCO0lBQ0ksY0FBYztJQUNkLFVBQVU7SUFDVixXQUFXO0lBQ1gsZUFBZTtJQUNmLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7QUFDSjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxRQUFRO0FBQ1o7O0FBRUEsdUJBQXVCOztBQUV2QjtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsYUFBYTtJQUNiLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxpQ0FBaUM7SUFDakMsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BC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LGFBQWE7QUFDakI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcIlN5bmNvcGF0ZVxcXCI7XFxuICAgIHNyYzogdXJsKCcuL1N5bmNvcGF0ZS1SZWd1bGFyLnR0ZicpO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXN0eWxlOm5vcm1hbDtcXG59XFxuXFxuaHRtbCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG5cXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi90eS1maW5jay1VXzJBbG5mSUdJVS11bnNwbGFzaC5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDgwMHB4O1xcbiAgICBvdmVyZmxvdzpoaWRkZW47XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU3luY29wYXRlXFxcIjtcXG4gICAgY29sb3I6cmdiKDIyMCwgMjA3LCAyMDcpO1xcbiAgICBtYXJnaW46IDA7XFxuXFxufVxcblxcbi8qU1RBVElDIEhFQURFUiovXFxuXFxuLnRlbXBsYXRlSGVhZGVyIHtcXG4gICAgcG9zaXRpb246Zml4ZWQ7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGhlaWdodDogMTMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTIwLDUzLDE5LCAzMCUpO1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTg5cHgpIHtcXG4gICAgLnRlbXBsYXRlSGVhZGVyIHtcXG4gICAgICAgIGhlaWdodDogMTgwcHg7XFxuICAgIH1cXG59XFxuXFxuLnRpdGxlIHtcXG4gICAgbWFyZ2luLXRvcDogMzZweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMThweDtcXG59XFxuXFxuLmFkZHJlc3Mge1xcbiAgICBtYXJnaW46MDtcXG59XFxuXFxuLyogRlJPTlQgUEFHRSBTVFlMSU5HICovXFxuXFxuI2NvbnRlbnQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDgwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwLDEwLDEwLCA2MCUpO1xcbn1cXG5cXG4uZnJvbnRQYWdlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDE5MHB4O1xcbn0gXFxuXFxuLndlbGNvbWUge1xcbiAgICBwYWRkaW5nLXRvcDogY2xhbXAoMTAwcHgsIDE1JSwgMTcwcHgpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgyMHB4LCAzdncsIDMycHgpO1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbn1cXG5cXG4uZGVzY3JpcHQge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMTRweDtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxNHB4LCAxLjh2dywgMjBweCk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHdpZHRoOiBtaW4oNjAlLCA2MTVweCk7XFxufVxcblxcbi5ob3VycyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxNHB4LCAxLjh2dywgMjBweCk7XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICAgIG1hcmdpbjowO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLyogTUVOVSArIENPTlRBQ1QgU0hBUkVEIFNUWUxJTkcgKi9cXG5cXG4ucGFnZSB7XFxuICAgIG92ZXJmbG93OmF1dG87XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgaGVpZ2h0OmNhbGMoMTAwJSAtIDIwOXB4KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRvcDogMTcwcHg7XFxufVxcblxcbi5oZWFkaW5nIHtcXG4gICAgY29sb3I6IHJnYigyMjAsIDIwNywgMjA3KTtcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4OXB4KSB7XFxuICAgIC5mcm9udFBhZ2Uge1xcbiAgICAgICAgdG9wOiAyMjBweDtcXG4gICAgfVxcbiAgICAucGFnZSB7XFxuICAgICAgICB0b3A6IDIyMHB4O1xcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyNTlweCk7XFxuICAgIH1cXG59XFxuXFxuLyogTUVOVSBTVFlMSU5HICovXFxuXFxuLml0ZW1IZWFkZXIge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxufVxcblxcbi5ncmlkQ29udGFpbmVyTWVudSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCA0MjBweCk7XFxuICAgIGdhcDogMjBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG59XFxuXFxuLm1lbnVJdGVtIHtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMzBweCAxZnI7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDEwLDEwLDEwLCA3MCUpO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCByZ2IoMjIwLCAyMDcsIDIwNyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGNvbG9yOiByZ2IoMjIwLCAyMDcsIDIwNyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5pdGVtTmFtZSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4uaXRlbVByaWNlIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gICAgdGV4dC1hbGlnbjogZW5kO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi5pdGVtRGVzY3JpcHQge1xcbiAgICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDM7XFxuICAgIG1hcmdpbjogMTRweCAxMHB4IDAgMTBweDtcXG5cXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4vKiBDT05UQUNUIFNUWUxJTkcgKi9cXG5cXG4ucGhvbmVDb250YWN0LCAuZW1haWxDb250YWN0LCAuYWRkcmVzc0NvbnRhY3Qge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuI21zZ0Zvcm1Db250YWN0IHtcXG4gICAgbWFyZ2luLXRvcDogNjBweDtcXG59XFxuXFxuLm1zZ0hlYWRlckNvbnRhY3Qge1xcbiAgICBtYXJnaW4tbGVmdDogNSU7XFxufVxcblxcbi5mb3JtRGl2cyB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG5sYWJlbCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5tc2dMYWJlbCB7XFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbiAgICBib3R0b206IDE5MHB4O1xcbn1cXG5cXG4jRnVsbE5hbWUge1xcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBsZWZ0OiAxMHB4O1xcbiAgICB3aWR0aDogbWluKDY4JSwgNjAwcHgpO1xcbn1cXG5cXG4jRW1haWwge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgbGVmdDogNjZweDtcXG4gICAgd2lkdGg6IG1pbig2OCUsIDYwMHB4KTtcXG59XFxuXFxuI01lc3NhZ2Uge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIHdpZHRoOiBtaW4oNjglLCA2MDBweCk7XFxuICAgIGxlZnQ6IDI3cHg7XFxufVxcblxcbi5zdWJtaXRCdG4ge1xcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU3luY29wYXRlXFxcIjtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY29sb3I6IHJnYigzOSwyNiwyOCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjAsIDIwNywgMjA3KTtcXG4gICAgbWFyZ2luLXRvcDogMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbiAgICBsZWZ0OiBtaW4oNjglLCA3NDVweCk7XFxufVxcblxcbi8qIE5BViBCVVRUT05TIFNIQVJFRCAqL1xcblxcbi5uYXZCYXJIb21lIGJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmb250LWZhbWlseTogXFxcIlN5bmNvcGF0ZVxcXCI7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGNvbG9yOiByZ2IoMzksMjYsMjgpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIwLCAyMDcsIDIwNyk7XFxufVxcblxcbi8qIE5BViBIT01FICovXFxuXFxuLm5hdkJhckhvbWUge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgYm90dG9tOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xcbiAgICBnYXA6IDQwcHg7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA2MTBweCkge1xcbiAgICAubmF2QmFySG9tZSB7XFxuICAgICAgICB0b3A6IDIyMHB4O1xcbiAgICB9XFxufVxcblxcbi8qIE5BViBISURERU4gKi9cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTpub25lO1xcbn1cXG5cXG4vKiBOQVYgQlVUVE9OIFVQUEVSIFJJR0hUIENPUk5FUiAqL1xcblxcbi50b3BSaWdodCB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOjIwMHB4O1xcbiAgICByaWdodDogNSU7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4OXB4KSB7XFxuICAgIC5uYXZCYXJIb21lIGJ1dHRvbiB7XFxuICAgICAgICB3aWR0aDogMTAwcHg7XFxuICAgIH1cXG4gICAgLnRvcFJpZ2h0IHtcXG4gICAgICAgIHRvcDoyNDVweDtcXG4gICAgfVxcbn1cXG5cXG5cXG4vKiBTVEFUSUMgRk9PVEVSICovXFxuXFxuLnRlbXBsYXRlRm9vdGVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm90dG9tOiAwO1xcbn1cXG5cXG4udGVtcGxhdGVGb290ZXIgcCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGNvbG9yOiByZ2IoMjIwLCAyMDcsIDIwNyk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM5LDI2LDI4KTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4udGVtcGxhdGVGb290ZXIgYSB7XFxuICAgIGNvbG9yOiByZ2IoMjIwLCAyMDcsIDIwNyk7XFxufVxcblxcbi5naXRMb2dvIHtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFjdCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBhZ2UuY2xhc3NMaXN0LmFkZChcInBhZ2VcIik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwYWdlKTtcblxuICAgIC8vIEhFQURJTkcgLy9cblxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKFwiaGVhZGluZ1wiKTtcbiAgICBoZWFkaW5nLmlubmVyVGV4dCA9IFwiQ09OVEFDVFwiO1xuICAgIHBhZ2UuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG5cbiAgICAvLyBOQVYgLy9cblxuICAgIFxuXG4gICAgLy8gQ09OVEFDVCBJTkZPIC8vXG5cbiAgICBjb25zdCBwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHBob25lLmNsYXNzTGlzdC5hZGQoXCJwaG9uZUNvbnRhY3RcIik7XG4gICAgcGhvbmUuaW5uZXJUZXh0ID0gXCJQaG9uZTogKDgxNikgNTU1IC0gNTU1NVwiO1xuICAgIHBhZ2UuYXBwZW5kQ2hpbGQocGhvbmUpO1xuXG4gICAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBlbWFpbC5jbGFzc0xpc3QuYWRkKFwiZW1haWxDb250YWN0XCIpO1xuICAgIGVtYWlsLmlubmVyVGV4dCA9IFwiRW1haWw6IFdvb2RmaXJlS0NAcGl6emEub3JnXCI7XG4gICAgcGFnZS5hcHBlbmRDaGlsZChlbWFpbCk7XG5cbiAgICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYWRkcmVzcy5jbGFzc0xpc3QuYWRkKFwiYWRkcmVzc0NvbnRhY3RcIik7XG4gICAgYWRkcmVzcy5pbm5lclRleHQgPSBcIkFkZHJlc3M6IDgxMCBNYWluIFN0cmVldFwiO1xuICAgIHBhZ2UuYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG5cbiAgICAvLyBNRVNTQUdFIEZPUk0gLy9cblxuICAgIGNvbnN0IG1zZ0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKVxuICAgIG1zZ0Zvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtc2dGb3JtQ29udGFjdFwiKTtcbiAgICBtc2dGb3JtLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJlbWFpbFwiKTtcbiAgICBtc2dGb3JtLnNldEF0dHJpYnV0ZShcIm1ldGhvZFwiLCBcIlBPU1RcIik7XG4gICAgcGFnZS5hcHBlbmRDaGlsZChtc2dGb3JtKTtcblxuICAgIGNvbnN0IG1zZ0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBtc2dIZWFkZXIuY2xhc3NMaXN0LmFkZChcIm1zZ0hlYWRlckNvbnRhY3RcIik7XG4gICAgbXNnSGVhZGVyLmlubmVyVGV4dCA9IFwiU2VuZCB1cyBhIG1lc3NhZ2VcIjtcbiAgICBtc2dGb3JtLmFwcGVuZENoaWxkKG1zZ0hlYWRlcik7XG5cbiAgICBjb25zdCBzcGFjZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1zZ0Zvcm0uYXBwZW5kQ2hpbGQoc3BhY2VyKTtcblxuICAgIGNvbnN0IG5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG5hbWVEaXYuY2xhc3NMaXN0LmFkZChcImZvcm1EaXZzXCIpO1xuICAgIG1zZ0Zvcm0uYXBwZW5kQ2hpbGQobmFtZURpdik7XG5cbiAgICBjb25zdCBuYW1lTGFiZWxGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIG5hbWVMYWJlbEZvcm0uc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiRnVsbE5hbWVcIik7XG4gICAgbmFtZUxhYmVsRm9ybS5pbm5lclRleHQgPSBcIkZ1bGwgTmFtZTogXCI7XG4gICAgbmFtZURpdi5hcHBlbmRDaGlsZChuYW1lTGFiZWxGb3JtKTtcblxuICAgIGNvbnN0IG5hbWVJbnB1dEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbmFtZUlucHV0Rm9ybS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICBuYW1lSW5wdXRGb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiRnVsbE5hbWVcIik7XG4gICAgbmFtZURpdi5hcHBlbmRDaGlsZChuYW1lSW5wdXRGb3JtKTtcblxuICAgIGNvbnN0IGVtYWlsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBlbWFpbERpdi5jbGFzc0xpc3QuYWRkKFwiZm9ybURpdnNcIik7XG4gICAgbXNnRm9ybS5hcHBlbmRDaGlsZChlbWFpbERpdik7XG5cbiAgICBjb25zdCBlbWFpbExhYmVsRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBlbWFpbExhYmVsRm9ybS5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJFbWFpbFwiKTtcbiAgICBlbWFpbExhYmVsRm9ybS5pbm5lclRleHQgPSBcIkVtYWlsOiBcIjtcbiAgICBlbWFpbERpdi5hcHBlbmRDaGlsZChlbWFpbExhYmVsRm9ybSk7XG5cbiAgICBjb25zdCBlbWFpbElucHV0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBlbWFpbElucHV0Rm9ybS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICBlbWFpbElucHV0Rm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIkVtYWlsXCIpO1xuICAgIGVtYWlsRGl2LmFwcGVuZENoaWxkKGVtYWlsSW5wdXRGb3JtKTtcblxuICAgIGNvbnN0IG1zZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbXNnRGl2LmNsYXNzTGlzdC5hZGQoXCJmb3JtRGl2c1wiKTtcbiAgICBtc2dGb3JtLmFwcGVuZENoaWxkKG1zZ0Rpdik7XG5cbiAgICBjb25zdCBtZXNzYWdlTGFiZWxGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIG1lc3NhZ2VMYWJlbEZvcm0uc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiTWVzc2FnZVwiKTtcbiAgICBtZXNzYWdlTGFiZWxGb3JtLmNsYXNzTGlzdC5hZGQoXCJtc2dMYWJlbFwiKTtcbiAgICBtZXNzYWdlTGFiZWxGb3JtLmlubmVyVGV4dCA9IFwiTWVzc2FnZTogXCI7XG4gICAgbXNnRGl2LmFwcGVuZENoaWxkKG1lc3NhZ2VMYWJlbEZvcm0pO1xuXG4gICAgY29uc3QgbWVzc2FnZUlucHV0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICBtZXNzYWdlSW5wdXRGb3JtLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIG1lc3NhZ2VJbnB1dEZvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJNZXNzYWdlXCIpO1xuICAgIG1zZ0Rpdi5hcHBlbmRDaGlsZChtZXNzYWdlSW5wdXRGb3JtKTtcblxuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoXCJzdWJtaXRCdG5cIik7XG4gICAgc3VibWl0QnRuLmlubmVyVGV4dCA9IFwiU1VCTUlUXCJcbiAgICBtc2dGb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG5cblxuICAgIHJldHVybiBwYWdlO1xuXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRnJvbnRQYWdlKCkge1xuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgY29uc3QgZnJvbnRQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZnJvbnRQYWdlLmNsYXNzTGlzdC5hZGQoXCJmcm9udFBhZ2VcIilcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZnJvbnRQYWdlKTtcblxuICAgIGNvbnN0IHdlbGNvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB3ZWxjb21lLmNsYXNzTGlzdC5hZGQoXCJ3ZWxjb21lXCIpXG5cbiAgICB3ZWxjb21lLmlubmVyVGV4dCA9IFwiUmVzdGF1cmFudCAmIEJhclwiO1xuXG4gICAgZnJvbnRQYWdlLmFwcGVuZENoaWxkKHdlbGNvbWUpO1xuXG4gICAgY29uc3QgZGVzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGVzY3JpcHQuY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0XCIpXG5cbiAgICBkZXNjcmlwdC5pbm5lclRleHQgPSBcInNlcnZpbmcgd29vZGZpcmUgcGl6emEsIHNhbGFkcywgYXBwZXRpemVycyAmIGEgbGFyZ2UgdmFyaWV0eSBvZiBsb2NhbCB0YXBzIGRhaWx5XCI7XG5cbiAgICBmcm9udFBhZ2UuYXBwZW5kQ2hpbGQoZGVzY3JpcHQpO1xuXG4gICAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaG91cnMuY2xhc3NMaXN0LmFkZChcImhvdXJzXCIpO1xuXG4gICAgaG91cnMuaW5uZXJUZXh0ID0gXCJIb3VyczogM1BNIC0gMUFNXCI7XG5cbiAgICBmcm9udFBhZ2UuYXBwZW5kQ2hpbGQoaG91cnMpO1xuXG4gICAgcmV0dXJuIGZyb250UGFnZTtcblxufSIsImltcG9ydCBNZW51SXRlbXMgZnJvbSAnLi9tZW51SXRlbXMuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lbnUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICBjb25zdCBwYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwYWdlLmNsYXNzTGlzdC5hZGQoXCJwYWdlXCIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGFnZSk7XG5cbiAgICAvKiBNQUlOIEhFQURJTkcgKi9cblxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgaGVhZGluZy5jbGFzc0xpc3QuYWRkKFwiaGVhZGluZ1wiKVxuICAgIGhlYWRpbmcuaW5uZXJUZXh0ID0gXCJNRU5VXCI7XG4gICAgcGFnZS5hcHBlbmRDaGlsZChoZWFkaW5nKTtcblxuICAgIC8qIE1FTlUgSVRFTVMgKi9cbiAgICBcbiAgICBjb25zdCBhcHBMaXN0ID0gW107XG4gICAgY29uc3Qgc2FsYWRMaXN0ID0gW107XG4gICAgY29uc3QgcGl6emFzTGlzdCA9IFtdO1xuXG4gICAgY29uc3QgYXBwMSA9IG5ldyBNZW51SXRlbXMoXCJCdWZmYWxvIFdpbmdzXCIsIFwiOCBwaWVjZSBzZXJ2ZWQgd2l0aCBjZWxlcnkgYW5kIGJsdWUgY2hlZXNlXCIsIDEwLjk4KTtcbiAgICBhcHBMaXN0LnB1c2goYXBwMSk7XG5cbiAgICBjb25zdCBhcHAyID0gbmV3IE1lbnVJdGVtcyhcIkJ1ZmZhbG8gQ2F1bGlmbG93ZXIgQml0ZXNcIiwgXCI4IHBpZWNlIHNlcnZlZCB3aXRoIGJsdWUgY2hlZXNlIG9yIHJhbmNoXCIsIDUuODkpO1xuICAgIGFwcExpc3QucHVzaChhcHAyKTtcblxuICAgIGNvbnN0IGFwcDMgPSBuZXcgTWVudUl0ZW1zKFwiRnJpZWQgUGlja2xlc1wiLCBcInNlcnZlZCB3aXRoIGJsdWUgY2hlZXNlIG9yIHJhbmNoXCIsIDYuODkpO1xuICAgIGFwcExpc3QucHVzaChhcHAzKTtcblxuICAgIGNvbnN0IGFwcDQgPSBuZXcgTWVudUl0ZW1zKFwiU21vdGhlcmVkIEZyaWVzXCIsIFwiYmFjb24sIGluLWhvdXNlIGNoZWVzZSBzYXVjZSwgZnJlc2ggamFsYXBlbm9zLCBzb3VyIGNyZWFtXCIsIDEwLjk4KTtcbiAgICBhcHBMaXN0LnB1c2goYXBwNCk7XG5cbiAgICBjb25zdCBzYWxhZDEgPSBuZXcgTWVudUl0ZW1zKFwiRnJpZWQgR29hdCBDaGVlc2UgXCIsIFwiYXJ1Z3VsYSBhbmQgcm9tYWluZSwgY29ybiwgYmxhY2sgb2xpdmVzLCBwYW5rby1mcmllZCBnb2F0IGNoZWVzZSwgc3BpY3kgY2hpcG90bGUgcmFuY2hcIiwgMTAuOTgpO1xuICAgIHNhbGFkTGlzdC5wdXNoKHNhbGFkMSk7XG5cbiAgICBjb25zdCBzYWxhZDIgPSBuZXcgTWVudUl0ZW1zKFwiU291dGhlcm4gRnJpZWQgQ2hpY2tlblwiLCBcInJvbWFpbmUgYW5kIGljZWJlcmcsIGNvcm4sIGJsYWNrIG9saXZlcywgc291dGhlcm4gZnJpZWQgY2hpY2tlbiwgc3BpY3kgY2hpcG90bGUgcmFuY2hcIiwgMTEuOTgpO1xuICAgIHNhbGFkTGlzdC5wdXNoKHNhbGFkMik7XG5cbiAgICBjb25zdCBzYWxhZDMgPSBuZXcgTWVudUl0ZW1zKFwiU3RlYWsgYW5kIEJsdWUgQ2hlZXNlXCIsIFwiYXJ1Z3VsYSBhbmQgcm9tYWluZSwgZGljZWQgdG9tYXRvZXMsIGJsdWUgY2hlZXNlIGNydW1ibGVzLCBibHVlIGNoZWVzZSBkcmVzc2luZ1wiLCAxMi45OCk7XG4gICAgc2FsYWRMaXN0LnB1c2goc2FsYWQzKTtcblxuICAgIGNvbnN0IHBpenphMSA9IG5ldyBNZW51SXRlbXMoXCJNZWF0XCIsIFwiVG9tYXRvZXMsIG1venphcmVsbGEsIGl0YWxpYW4gc2F1c2FnZSwgYmFjb24sIHBlcHBlcm9uaVwiLCAxMy43NCk7XG4gICAgcGl6emFzTGlzdC5wdXNoKHBpenphMSk7XG5cbiAgICBjb25zdCBwaXp6YTIgPSBuZXcgTWVudUl0ZW1zKFwibWFyZ2hlcml0YVwiLCBcInRvbWF0b2VzLCBtb3p6YXJlbGxhLCBiYXNpbCwgZXh0cmEgdmlyZ2luIG9saXZlIG9pbFwiLCAxMC45OCk7XG4gICAgcGl6emFzTGlzdC5wdXNoKHBpenphMik7XG5cbiAgICBjb25zdCBwaXp6YTMgPSBuZXcgTWVudUl0ZW1zKFwicGVzdG9cIiwgXCJiYXNpbCBwZXN0bywgbW96emFyZWxsYSwgaXRhbGlhbiBzYXVzYWdlLCBkaWNlZCB0b21hdG9lcywgZXh0cmEgdmlyZ2luIG9saXZlIG9pbFwiLCAxMS45OCk7XG4gICAgcGl6emFzTGlzdC5wdXNoKHBpenphMyk7XG5cbiAgICBjb25zdCBwaXp6YTQgPSBuZXcgTWVudUl0ZW1zKFwicGVwcGVyb25pXCIsIFwidG9tYXRvZXMsIG1venphcmVsbGEsIHBlcHBlcm9uaSwgc3BpY3kgaG9uZXlcIiwgMTAuOTgpO1xuICAgIHBpenphc0xpc3QucHVzaChwaXp6YTQpO1xuXG4gICAgY29uc3QgcGl6emE1ID0gbmV3IE1lbnVJdGVtcyhcInNhdXNhZ2VcIiwgXCJ0b21hdG9lcywgbW96emFyZWxsYSwgYmFzaWwsIGl0YWxpYW4gc2F1c2FnZVwiLCAxMC45OCk7XG4gICAgcGl6emFzTGlzdC5wdXNoKHBpenphNSk7XG5cbiAgICBjb25zdCBwaXp6YTYgPSBuZXcgTWVudUl0ZW1zKFwicmljb3R0YVwiLCBcIm1venphcmVsbGEsIHJpY290dGEsIGJhc2lsLCBvcmVnYW5vLCBleHRyYSB2aXJnaW4gb2xpdmUgb2lsXCIsIDkuOTgpO1xuICAgIHBpenphc0xpc3QucHVzaChwaXp6YTYpO1xuXG4gICAgLyogRlVOQ1RJT04gVE8gQUREIElURU1TIEZST00gTElTVCBUTyBET00gKi9cblxuICAgIGZ1bmN0aW9uIGFkZEl0ZW1zKGxpc3ROYW1lLCBjb250YWluZXIpIHtcblxuICAgICAgICBmb3IgKGxldCBpPTA7IGk8bGlzdE5hbWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgbmV3SXRlbS5jbGFzc0xpc3QuYWRkKFwibWVudUl0ZW1cIik7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmV3SXRlbSk7XG5cbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgICAgIG5hbWUuY2xhc3NMaXN0LmFkZChcIml0ZW1OYW1lXCIpO1xuICAgICAgICAgICAgbmFtZS5pbm5lclRleHQgPSBsaXN0TmFtZVtpXS5uYW1lO1xuICAgICAgICAgICAgbmV3SXRlbS5hcHBlbmRDaGlsZChuYW1lKTtcblxuICAgICAgICAgICAgY29uc3QgcHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgICAgIHByaWNlLmNsYXNzTGlzdC5hZGQoXCJpdGVtUHJpY2VcIik7XG4gICAgICAgICAgICBwcmljZS5pbm5lclRleHQgPSBgJCR7bGlzdE5hbWVbaV0ucHJpY2V9YDtcbiAgICAgICAgICAgIG5ld0l0ZW0uYXBwZW5kQ2hpbGQocHJpY2UpO1xuXG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICAgICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcIml0ZW1EZXNjcmlwdFwiKTtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IGxpc3ROYW1lW2ldLmRlcztcbiAgICAgICAgICAgIG5ld0l0ZW0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiBBUFBFVElaRVJTICovXG5cbiAgICBjb25zdCBhcHBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYXBwcy5jbGFzc0xpc3QuYWRkKFwiaXRlbUhlYWRlclwiKTtcbiAgICBhcHBzLmlubmVyVGV4dCA9IFwiYXBwZXRpemVyc1wiO1xuICAgIGFwcHMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhcHBldGl6ZXJIZWFkaW5nXCIpO1xuICAgIHBhZ2UuYXBwZW5kQ2hpbGQoYXBwcyk7XG5cbiAgICBjb25zdCBhcHBzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhcHBzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJncmlkQ29udGFpbmVyTWVudVwiKTtcbiAgICBwYWdlLmFwcGVuZENoaWxkKGFwcHNDb250YWluZXIpO1xuXG4gICAgYWRkSXRlbXMoYXBwTGlzdCwgYXBwc0NvbnRhaW5lcik7XG5cbiAgICAvKiBTQUxBRFMgKi9cblxuICAgIGNvbnN0IHNhbGFkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHNhbGFkcy5jbGFzc0xpc3QuYWRkKFwiaXRlbUhlYWRlclwiKTtcbiAgICBzYWxhZHMuaW5uZXJUZXh0ID0gXCJTYWxhZHNcIjtcbiAgICBzYWxhZHMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzYWxhZHNIZWFkaW5nXCIpO1xuICAgIHBhZ2UuYXBwZW5kQ2hpbGQoc2FsYWRzKTtcblxuICAgIGNvbnN0IHNhbGFkc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2FsYWRzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJncmlkQ29udGFpbmVyTWVudVwiKTtcbiAgICBwYWdlLmFwcGVuZENoaWxkKHNhbGFkc0NvbnRhaW5lcik7XG5cbiAgICBhZGRJdGVtcyhzYWxhZExpc3QsIHNhbGFkc0NvbnRhaW5lcik7XG5cbiAgICAvKiBQSVpaQVMgKi9cblxuICAgIGNvbnN0IHBpenphcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHBpenphcy5jbGFzc0xpc3QuYWRkKFwiaXRlbUhlYWRlclwiKTtcbiAgICBwaXp6YXMuaW5uZXJUZXh0ID0gXCJQaXp6YXNcIjtcbiAgICBwaXp6YXMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwaXp6YXNIZWFkaW5nXCIpO1xuICAgIHBhZ2UuYXBwZW5kQ2hpbGQocGl6emFzKTtcblxuICAgIGNvbnN0IHBpenphc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcGl6emFzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJncmlkQ29udGFpbmVyTWVudVwiKTtcbiAgICBwYWdlLmFwcGVuZENoaWxkKHBpenphc0NvbnRhaW5lcik7XG5cbiAgICBhZGRJdGVtcyhwaXp6YXNMaXN0LCBwaXp6YXNDb250YWluZXIpO1xuXG5cbiAgICByZXR1cm4gcGFnZTtcblxuXG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51SXRlbXMge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRlcywgcHJpY2UpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5kZXMgPSBkZXM7XG4gICAgICAgIHRoaXMucHJpY2UgPSBwcmljZTtcbiAgICB9XG5cbn1cblxuXG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IEdpdEljb24gZnJvbSAnLi9naXRodWItbWFyay13aGl0ZS5zdmcnO1xuaW1wb3J0IEZyb250UGFnZSBmcm9tICcuL2Zyb250UGFnZS5qcyc7XG5pbXBvcnQgTWVudSBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IENvbnRhY3QgZnJvbSAnLi9jb250YWN0LmpzJztcblxuZnVuY3Rpb24gQ29tcG9uZW50KCkge1xuXG4gICAgY29uc3QgcGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBhZ2UpO1xuXG4gICAgLy8gVEVNUExBVEUgSEVBREVSXG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwidGVtcGxhdGVIZWFkZXJcIik7XG4gICAgcGFnZS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGhlYWRlci5vbmNsaWNrID0gc3dpdGNoRnJvbnRQYWdlO1xuXG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICB0aXRsZS5pbm5lclRleHQgPSBcIldvb2RGaXJlIFBpenplcmlhXCI7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICAgIGFkZHJlc3MuaW5uZXJUZXh0ID0gXCI4MTAgTWFpbiBTdHJlZXRcIjtcbiAgICBhZGRyZXNzLmNsYXNzTGlzdC5hZGQoXCJhZGRyZXNzXCIpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChhZGRyZXNzKTtcblxuXG4gICAgLy8gVkFSSUFCTEUgQ09OVEVOVFxuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRlbnRcIik7XG5cbiAgICBwYWdlLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChDb250YWN0KCkpO1xuXG4gICAgLy8gTkFWXG5cbiAgICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICAgIG5hdkJhci5jbGFzc0xpc3QuYWRkKFwibmF2QmFySG9tZVwiKTtcbiAgICBwYWdlLmFwcGVuZENoaWxkKG5hdkJhcik7XG5cbiAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBtZW51QnRuLmlubmVyVGV4dCA9IFwiTWVudVwiO1xuICAgIG5hdkJhci5hcHBlbmRDaGlsZChtZW51QnRuKTtcbiAgICBtZW51QnRuLm9uY2xpY2sgPSBzd2l0Y2hNZW51O1xuXG5cbiAgICBjb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb250YWN0QnRuLmlubmVyVGV4dCA9IFwiQ29udGFjdFwiO1xuICAgIG5hdkJhci5hcHBlbmRDaGlsZChjb250YWN0QnRuKTtcbiAgICBjb250YWN0QnRuLm9uY2xpY2sgPSBzd2l0Y2hDb250YWN0O1xuXG5cbiAgICAvLyBIQU5ETEUgT05DTElDSyBEWU5BTUlDIE5BViBBTkQgUEFHRVxuXG4gICAgZnVuY3Rpb24gc3dpdGNoQ29udGFjdCAoKSB7XG4gICAgICAgIGNvbnRhY3RCdG4uY2xhc3NMaXN0LnJlbW92ZShcInRvcFJpZ2h0XCIpO1xuICAgICAgICBjb250YWN0QnRuLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgIG1lbnVCdG4uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgICAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKFwidG9wUmlnaHRcIik7XG4gICAgICAgIENvbnRhY3QoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzd2l0Y2hNZW51KCkge1xuICAgICAgICBtZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJ0b3BSaWdodFwiKTtcbiAgICAgICAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICBjb250YWN0QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICAgIGNvbnRhY3RCdG4uY2xhc3NMaXN0LmFkZChcInRvcFJpZ2h0XCIpO1xuICAgICAgICBNZW51KCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3dpdGNoRnJvbnRQYWdlKCkge1xuICAgICAgICBtZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICAgIG1lbnVCdG4uY2xhc3NMaXN0LnJlbW92ZShcInRvcFJpZ2h0XCIpO1xuICAgICAgICBjb250YWN0QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICAgIGNvbnRhY3RCdG4uY2xhc3NMaXN0LnJlbW92ZShcInRvcFJpZ2h0XCIpO1xuICAgICAgICBGcm9udFBhZ2UoKTtcbiAgICB9XG5cbiAgICAvLyBGT09URVJcblxuICAgIGNvbnN0IHRlbXBsYXRlRm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgICB0ZW1wbGF0ZUZvb3Rlci5jbGFzc0xpc3QuYWRkKFwidGVtcGxhdGVGb290ZXJcIik7XG4gICAgcGFnZS5hcHBlbmRDaGlsZCh0ZW1wbGF0ZUZvb3Rlcik7XG5cbiAgICBjb25zdCBnaXRIdWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBnaXRIdWIuY2xhc3NMaXN0LmFkZChcImdpdEh1YlwiKTtcbiAgICBnaXRIdWIuaW5uZXJUZXh0ID0gXCJDcmVhdGVkIEJ5IFwiO1xuICAgIHRlbXBsYXRlRm9vdGVyLmFwcGVuZENoaWxkKGdpdEh1Yik7XG5cbiAgICBjb25zdCBJY29uID0gbmV3IEltYWdlKCk7XG4gICAgSWNvbi5zcmMgPSBHaXRJY29uO1xuICAgIEljb24uY2xhc3NMaXN0LmFkZChcImdpdExvZ29cIik7XG5cbiAgICBjb25zdCBnaXRIdWJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgZ2l0SHViTGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiaHR0cHM6Ly9naXRodWIuY29tL0JlbmphbWluSk1jRFwiKTtcbiAgICBnaXRIdWJMaW5rLmFwcGVuZENoaWxkKEljb24pXG4gICAgY29uc3QgZ2l0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGdpdE5hbWUuaW5uZXJUZXh0ID0gXCJCZW5qYW1pbkpNY0RcIjtcbiAgICBnaXRIdWJMaW5rLmFwcGVuZENoaWxkKGdpdE5hbWUpO1xuICAgIGdpdEh1Yi5hcHBlbmRDaGlsZChnaXRIdWJMaW5rKTtcblxuICAgIHJldHVybiBwYWdlO1xuXG59XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoQ29tcG9uZW50KCkpO1xuXG4vLzxwIGNsYXNzPVwiZ2l0SHViXCI+XG4vL0NyZWF0ZWQgQnkgXG4vLzxhIGhyZWY9XCJnaXRodWIuY29tXCI+XG4vLzxpbWcgY2xhc3M9XCJnaXRMb2dvXCIgc3JjPVwiR2l0SWNvblwiLz5cbi8vQmVuamFtaW5KTWNEXG4vLzwvYT48L3A+Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9