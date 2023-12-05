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

.templateHeader:hover {
    cursor: pointer;
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

.navBarHome button:hover {
    cursor:pointer;
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
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: \"Syncopate\";\n    src: url('./Syncopate-Regular.ttf');\n    font-weight: 400;\n    font-style:normal;\n}\n\nhtml {\n    height: 100%;\n\n}\n\nbody {\n    background-image: url('./ty-finck-U_2AlnfIGIU-unsplash.jpg');\n    background-repeat: no-repeat;\n    background-size: 100% 800px;\n    overflow:hidden;\n    font-family: \"Syncopate\";\n    color:rgb(220, 207, 207);\n    margin: 0;\n\n}\n\n/*STATIC HEADER*/\n\n.templateHeader {\n    position:fixed;\n    z-index: 1;\n    width: 100%;\n    font-size: 24px;\n    height: 130px;\n    background-color: rgba(120,53,19, 30%);\n    padding-top: 10px;\n    text-align: center;\n    padding-bottom: 30px;\n}\n\n.templateHeader:hover {\n    cursor: pointer;\n}\n\n@media screen and (max-width: 589px) {\n    .templateHeader {\n        height: 180px;\n    }\n}\n\n.title {\n    margin-top: 36px;\n    margin-bottom: 18px;\n}\n\n.address {\n    margin:0;\n}\n\n/* FRONT PAGE STYLING */\n\n#content {\n    position: absolute;\n    width: 100%;\n    height: 800px;\n    background-color: rgba(10,10,10, 60%);\n}\n\n.frontPage {\n    position: relative;\n    top: 190px;\n} \n\n.welcome {\n    padding-top: clamp(100px, 15%, 170px);\n    text-align: center;\n    margin: 0;\n    font-size: clamp(20px, 3vw, 32px);\n    font-weight: 800;\n}\n\n.descript {\n    margin-left: auto;\n    margin-right: auto;\n    text-align: center;\n    padding-bottom: 40px;\n    padding-top: 14px;\n    font-size: clamp(14px, 1.8vw, 20px);\n    font-weight: 600;\n    width: min(60%, 615px);\n}\n\n.hours {\n    text-align: center;\n    font-size: clamp(14px, 1.8vw, 20px);\n    font-weight: 800;\n    margin:0;\n    padding-bottom: 10px;\n}\n\n/* MENU + CONTACT SHARED STYLING */\n\n.page {\n    overflow:auto;\n    position: fixed;\n    height:calc(100% - 209px);\n    width: 100%;\n    top: 170px;\n}\n\n.heading {\n    color: rgb(220, 207, 207);\n    font-size: 48px;\n    text-align: center;\n}\n\n@media screen and (max-width: 589px) {\n    .frontPage {\n        top: 220px;\n    }\n    .page {\n        top: 220px;\n        height: calc(100% - 259px);\n    }\n}\n\n/* MENU STYLING */\n\n.itemHeader {\n    font-size: 24px;\n    font-weight: 600;\n    margin-left: 10%;\n}\n\n.gridContainerMenu {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, 420px);\n    gap: 20px;\n    margin-left: 10%;\n    margin-bottom: 40px;\n}\n\n.menuItem {\n    display:grid;\n    grid-template-columns: 4fr 1fr;\n    grid-template-rows: 30px 1fr;\n    height: 100px;\n    width: 400px;\n    background-color:rgba(10,10,10, 70%);\n    border: 5px solid rgb(220, 207, 207);\n    border-radius: 10px;\n    color: rgb(220, 207, 207);\n    font-weight: 600;\n}\n\n.itemName {\n    margin: 0;\n    padding-top: 10px;\n    padding-left: 10px;\n    font-size: 18px;\n}\n\n.itemPrice {\n    margin: 0;\n    padding-top: 10px;\n    padding-right: 10px;\n    text-align: end;\n    font-size: 18px;\n}\n\n.itemDescript {\n    grid-area: 2 / 1 / 3 / 3;\n    margin: 14px 10px 0 10px;\n\n    font-size: 14px;\n}\n\n/* CONTACT STYLING */\n\n.phoneContact, .emailContact, .addressContact {\n    text-align: center;\n    font-weight: 600;\n    font-size: 18px;\n}\n\n#msgFormContact {\n    margin-top: 60px;\n}\n\n.msgHeaderContact {\n    margin-left: 5%;\n}\n\n.formDivs {\n    width: 80%;\n    margin-left: 10%;\n    margin-right: 10%;\n    margin-bottom: 10px;\n}\n\nlabel {\n    font-weight: 600;\n}\n\n.msgLabel {\n    position:relative;\n    bottom: 190px;\n}\n\n#FullName {\n    position:relative;\n    height: 20px;\n    left: 10px;\n    width: min(68%, 600px);\n}\n\n#Email {\n    position: relative;\n    height: 20px;\n    left: 66px;\n    width: min(68%, 600px);\n}\n\n#Message {\n    position: relative;\n    height: 200px;\n    width: min(68%, 600px);\n    left: 27px;\n}\n\n.submitBtn {\n    position:relative;\n    width: 100px;\n    height: 30px;\n    border-radius: 10px;\n    font-family: \"Syncopate\";\n    font-weight: 600;\n    color: rgb(39,26,28);\n    background-color: rgb(220, 207, 207);\n    margin-top: 0px;\n    margin-bottom: 40px;\n    left: min(68%, 745px);\n}\n\n/* NAV BUTTONS SHARED */\n\n.navBarHome button {\n    width: 150px;\n    height: 50px;\n    border-radius: 10px;\n    font-family: \"Syncopate\";\n    font-weight: 600;\n    color: rgb(39,26,28);\n    background-color: rgb(220, 207, 207);\n}\n\n.navBarHome button:hover {\n    cursor:pointer;\n}\n\n/* NAV HOME */\n\n.navBarHome {\n    position: fixed;\n    display:flex;\n    bottom: 60px;\n    height: 60px;\n    width: 100%;\n    justify-content:center;\n    gap: 40px;\n}\n\n@media screen and (max-height: 610px) {\n    .navBarHome {\n        top: 220px;\n    }\n}\n\n/* NAV HIDDEN */\n\n.hidden {\n    display:none;\n}\n\n/* NAV BUTTON UPPER RIGHT CORNER */\n\n.topRight {\n    position: fixed;\n    top:200px;\n    right: 5%;\n}\n\n@media screen and (max-width: 589px) {\n    .navBarHome button {\n        width: 100px;\n    }\n    .topRight {\n        top:245px;\n    }\n}\n\n\n/* STATIC FOOTER */\n\n.templateFooter {\n    position: fixed;\n    width: 100%;\n    bottom: 0;\n}\n\n.templateFooter p {\n    font-weight: 600;\n    color: rgb(220, 207, 207);\n    text-align: center;\n    background-color: rgb(39,26,28);\n    margin: 0;\n    padding: 10px;\n}\n\n.templateFooter a {\n    color: rgb(220, 207, 207);\n}\n\n.gitLogo {\n    height: 15px;\n}"],"sourceRoot":""}]);
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

    content.appendChild((0,_frontPage_js__WEBPACK_IMPORTED_MODULE_2__["default"])());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsMkhBQTBDO0FBQ3RGLDRDQUE0QyxtSkFBc0Q7QUFDbEcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSw0QkFBNEIsbUNBQW1DO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGlGQUFpRixZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxZQUFZLE1BQU0sYUFBYSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxLQUFLLFVBQVUsTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sYUFBYSxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxNQUFNLE1BQU0sYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxjQUFjLFdBQVcsT0FBTyxhQUFhLE1BQU0sWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUs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Ozs7QUNBc0I7QUFDd0I7QUFDUDtBQUNWO0FBQ007O0FBRW5DOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLHdCQUF3Qix5REFBUzs7QUFFakM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdURBQU87QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvREFBSTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlEQUFTO0FBQ2pCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsbURBQU87QUFDdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2Zyb250UGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL21lbnVJdGVtcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL1N5bmNvcGF0ZS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vdHktZmluY2stVV8yQWxuZklHSVUtdW5zcGxhc2guanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiU3luY29wYXRlXCI7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXN0eWxlOm5vcm1hbDtcbn1cblxuaHRtbCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG59XG5cbmJvZHkge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSA4MDBweDtcbiAgICBvdmVyZmxvdzpoaWRkZW47XG4gICAgZm9udC1mYW1pbHk6IFwiU3luY29wYXRlXCI7XG4gICAgY29sb3I6cmdiKDIyMCwgMjA3LCAyMDcpO1xuICAgIG1hcmdpbjogMDtcblxufVxuXG4vKlNUQVRJQyBIRUFERVIqL1xuXG4udGVtcGxhdGVIZWFkZXIge1xuICAgIHBvc2l0aW9uOmZpeGVkO1xuICAgIHotaW5kZXg6IDE7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGhlaWdodDogMTMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjAsNTMsMTksIDMwJSk7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuXG4udGVtcGxhdGVIZWFkZXI6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTg5cHgpIHtcbiAgICAudGVtcGxhdGVIZWFkZXIge1xuICAgICAgICBoZWlnaHQ6IDE4MHB4O1xuICAgIH1cbn1cblxuLnRpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiAzNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XG59XG5cbi5hZGRyZXNzIHtcbiAgICBtYXJnaW46MDtcbn1cblxuLyogRlJPTlQgUEFHRSBTVFlMSU5HICovXG5cbiNjb250ZW50IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA4MDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwLDEwLDEwLCA2MCUpO1xufVxuXG4uZnJvbnRQYWdlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxOTBweDtcbn0gXG5cbi53ZWxjb21lIHtcbiAgICBwYWRkaW5nLXRvcDogY2xhbXAoMTAwcHgsIDE1JSwgMTcwcHgpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiBjbGFtcCgyMHB4LCAzdncsIDMycHgpO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5kZXNjcmlwdCB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgICBwYWRkaW5nLXRvcDogMTRweDtcbiAgICBmb250LXNpemU6IGNsYW1wKDE0cHgsIDEuOHZ3LCAyMHB4KTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHdpZHRoOiBtaW4oNjAlLCA2MTVweCk7XG59XG5cbi5ob3VycyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogY2xhbXAoMTRweCwgMS44dncsIDIwcHgpO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgbWFyZ2luOjA7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi8qIE1FTlUgKyBDT05UQUNUIFNIQVJFRCBTVFlMSU5HICovXG5cbi5wYWdlIHtcbiAgICBvdmVyZmxvdzphdXRvO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBoZWlnaHQ6Y2FsYygxMDAlIC0gMjA5cHgpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRvcDogMTcwcHg7XG59XG5cbi5oZWFkaW5nIHtcbiAgICBjb2xvcjogcmdiKDIyMCwgMjA3LCAyMDcpO1xuICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4OXB4KSB7XG4gICAgLmZyb250UGFnZSB7XG4gICAgICAgIHRvcDogMjIwcHg7XG4gICAgfVxuICAgIC5wYWdlIHtcbiAgICAgICAgdG9wOiAyMjBweDtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyNTlweCk7XG4gICAgfVxufVxuXG4vKiBNRU5VIFNUWUxJTkcgKi9cblxuLml0ZW1IZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XG59XG5cbi5ncmlkQ29udGFpbmVyTWVudSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgNDIwcHgpO1xuICAgIGdhcDogMjBweDtcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbi5tZW51SXRlbSB7XG4gICAgZGlzcGxheTpncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNGZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwcHggMWZyO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgxMCwxMCwxMCwgNzAlKTtcbiAgICBib3JkZXI6IDVweCBzb2xpZCByZ2IoMjIwLCAyMDcsIDIwNyk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBjb2xvcjogcmdiKDIyMCwgMjA3LCAyMDcpO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5pdGVtTmFtZSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5pdGVtUHJpY2Uge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5pdGVtRGVzY3JpcHQge1xuICAgIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMztcbiAgICBtYXJnaW46IDE0cHggMTBweCAwIDEwcHg7XG5cbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi8qIENPTlRBQ1QgU1RZTElORyAqL1xuXG4ucGhvbmVDb250YWN0LCAuZW1haWxDb250YWN0LCAuYWRkcmVzc0NvbnRhY3Qge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuI21zZ0Zvcm1Db250YWN0IHtcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xufVxuXG4ubXNnSGVhZGVyQ29udGFjdCB7XG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuXG4uZm9ybURpdnMge1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5sYWJlbCB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLm1zZ0xhYmVsIHtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICBib3R0b206IDE5MHB4O1xufVxuXG4jRnVsbE5hbWUge1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgIGhlaWdodDogMjBweDtcbiAgICBsZWZ0OiAxMHB4O1xuICAgIHdpZHRoOiBtaW4oNjglLCA2MDBweCk7XG59XG5cbiNFbWFpbCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMjBweDtcbiAgICBsZWZ0OiA2NnB4O1xuICAgIHdpZHRoOiBtaW4oNjglLCA2MDBweCk7XG59XG5cbiNNZXNzYWdlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICB3aWR0aDogbWluKDY4JSwgNjAwcHgpO1xuICAgIGxlZnQ6IDI3cHg7XG59XG5cbi5zdWJtaXRCdG4ge1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBmb250LWZhbWlseTogXCJTeW5jb3BhdGVcIjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiByZ2IoMzksMjYsMjgpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjAsIDIwNywgMjA3KTtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICBsZWZ0OiBtaW4oNjglLCA3NDVweCk7XG59XG5cbi8qIE5BViBCVVRUT05TIFNIQVJFRCAqL1xuXG4ubmF2QmFySG9tZSBidXR0b24ge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBmb250LWZhbWlseTogXCJTeW5jb3BhdGVcIjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiByZ2IoMzksMjYsMjgpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjAsIDIwNywgMjA3KTtcbn1cblxuLm5hdkJhckhvbWUgYnV0dG9uOmhvdmVyIHtcbiAgICBjdXJzb3I6cG9pbnRlcjtcbn1cblxuLyogTkFWIEhPTUUgKi9cblxuLm5hdkJhckhvbWUge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgYm90dG9tOiA2MHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICAgIGdhcDogNDBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDYxMHB4KSB7XG4gICAgLm5hdkJhckhvbWUge1xuICAgICAgICB0b3A6IDIyMHB4O1xuICAgIH1cbn1cblxuLyogTkFWIEhJRERFTiAqL1xuXG4uaGlkZGVuIHtcbiAgICBkaXNwbGF5Om5vbmU7XG59XG5cbi8qIE5BViBCVVRUT04gVVBQRVIgUklHSFQgQ09STkVSICovXG5cbi50b3BSaWdodCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDoyMDBweDtcbiAgICByaWdodDogNSU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4OXB4KSB7XG4gICAgLm5hdkJhckhvbWUgYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgIH1cbiAgICAudG9wUmlnaHQge1xuICAgICAgICB0b3A6MjQ1cHg7XG4gICAgfVxufVxuXG5cbi8qIFNUQVRJQyBGT09URVIgKi9cblxuLnRlbXBsYXRlRm9vdGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm90dG9tOiAwO1xufVxuXG4udGVtcGxhdGVGb290ZXIgcCB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogcmdiKDIyMCwgMjA3LCAyMDcpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzksMjYsMjgpO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4udGVtcGxhdGVGb290ZXIgYSB7XG4gICAgY29sb3I6IHJnYigyMjAsIDIwNywgMjA3KTtcbn1cblxuLmdpdExvZ28ge1xuICAgIGhlaWdodDogMTVweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLDRDQUFtQztJQUNuQyxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTs7QUFFaEI7O0FBRUE7SUFDSSx5REFBNEQ7SUFDNUQsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLHdCQUF3QjtJQUN4QixTQUFTOztBQUViOztBQUVBLGdCQUFnQjs7QUFFaEI7SUFDSSxjQUFjO0lBQ2QsVUFBVTtJQUNWLFdBQVc7SUFDWCxlQUFlO0lBQ2YsYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7QUFDSjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxRQUFRO0FBQ1o7O0FBRUEsdUJBQXVC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QUNJLFlBQVk7QUFDaEI7O0FBRUEsa0NBQWtDOztBQUVsQztJQUNJLGVBQWU7SUFDZixTQUFTO0lBQ1QsU0FBUztBQUNiOztBQUVBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxTQUFTO0lBQ2I7QUFDSjs7O0FBR0Esa0JBQWtCOztBQUVsQjtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsU0FBUztBQUNiOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsK0JBQStCO0lBQy9CLFNBQVM7SUFDVCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJTeW5jb3BhdGVcXFwiO1xcbiAgICBzcmM6IHVybCgnLi9TeW5jb3BhdGUtUmVndWxhci50dGYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zdHlsZTpub3JtYWw7XFxufVxcblxcbmh0bWwge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuXFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vdHktZmluY2stVV8yQWxuZklHSVUtdW5zcGxhc2guanBnJyk7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSA4MDBweDtcXG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xcbiAgICBmb250LWZhbWlseTogXFxcIlN5bmNvcGF0ZVxcXCI7XFxuICAgIGNvbG9yOnJnYigyMjAsIDIwNywgMjA3KTtcXG4gICAgbWFyZ2luOiAwO1xcblxcbn1cXG5cXG4vKlNUQVRJQyBIRUFERVIqL1xcblxcbi50ZW1wbGF0ZUhlYWRlciB7XFxuICAgIHBvc2l0aW9uOmZpeGVkO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBoZWlnaHQ6IDEzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyMCw1MywxOSwgMzAlKTtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XFxufVxcblxcbi50ZW1wbGF0ZUhlYWRlcjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTg5cHgpIHtcXG4gICAgLnRlbXBsYXRlSGVhZGVyIHtcXG4gICAgICAgIGhlaWdodDogMTgwcHg7XFxuICAgIH1cXG59XFxuXFxuLnRpdGxlIHtcXG4gICAgbWFyZ2luLXRvcDogMzZweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMThweDtcXG59XFxuXFxuLmFkZHJlc3Mge1xcbiAgICBtYXJnaW46MDtcXG59XFxuXFxuLyogRlJPTlQgUEFHRSBTVFlMSU5HICovXFxuXFxuI2NvbnRlbnQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDgwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwLDEwLDEwLCA2MCUpO1xcbn1cXG5cXG4uZnJvbnRQYWdlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDE5MHB4O1xcbn0gXFxuXFxuLndlbGNvbWUge1xcbiAgICBwYWRkaW5nLXRvcDogY2xhbXAoMTAwcHgsIDE1JSwgMTcwcHgpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgyMHB4LCAzdncsIDMycHgpO1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbn1cXG5cXG4uZGVzY3JpcHQge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMTRweDtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxNHB4LCAxLjh2dywgMjBweCk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHdpZHRoOiBtaW4oNjAlLCA2MTVweCk7XFxufVxcblxcbi5ob3VycyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxNHB4LCAxLjh2dywgMjBweCk7XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICAgIG1hcmdpbjowO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuXFxuLyogTUVOVSArIENPTlRBQ1QgU0hBUkVEIFNUWUxJTkcgKi9cXG5cXG4ucGFnZSB7XFxuICAgIG92ZXJmbG93OmF1dG87XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgaGVpZ2h0OmNhbGMoMTAwJSAtIDIwOXB4KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRvcDogMTcwcHg7XFxufVxcblxcbi5oZWFkaW5nIHtcXG4gICAgY29sb3I6IHJnYigyMjAsIDIwNywgMjA3KTtcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4OXB4KSB7XFxuICAgIC5mcm9udFBhZ2Uge1xcbiAgICAgICAgdG9wOiAyMjBweDtcXG4gICAgfVxcbiAgICAucGFnZSB7XFxuICAgICAgICB0b3A6IDIyMHB4O1xcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyNTlweCk7XFxuICAgIH1cXG59XFxuXFxuLyogTUVOVSBTVFlMSU5HICovXFxuXFxuLml0ZW1IZWFkZXIge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxufVxcblxcbi5ncmlkQ29udGFpbmVyTWVudSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCA0MjBweCk7XFxuICAgIGdhcDogMjBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG59XFxuXFxuLm1lbnVJdGVtIHtcXG4gICAgZGlzcGxheTpncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMzBweCAxZnI7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDEwLDEwLDEwLCA3MCUpO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCByZ2IoMjIwLCAyMDcsIDIwNyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGNvbG9yOiByZ2IoMjIwLCAyMDcsIDIwNyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5pdGVtTmFtZSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4uaXRlbVByaWNlIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gICAgdGV4dC1hbGlnbjogZW5kO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi5pdGVtRGVzY3JpcHQge1xcbiAgICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDM7XFxuICAgIG1hcmdpbjogMTRweCAxMHB4IDAgMTBweDtcXG5cXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4vKiBDT05UQUNUIFNUWUxJTkcgKi9cXG5cXG4ucGhvbmVDb250YWN0LCAuZW1haWxDb250YWN0LCAuYWRkcmVzc0NvbnRhY3Qge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuI21zZ0Zvcm1Db250YWN0IHtcXG4gICAgbWFyZ2luLXRvcDogNjBweDtcXG59XFxuXFxuLm1zZ0hlYWRlckNvbnRhY3Qge1xcbiAgICBtYXJnaW4tbGVmdDogNSU7XFxufVxcblxcbi5mb3JtRGl2cyB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG5sYWJlbCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5tc2dMYWJlbCB7XFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbiAgICBib3R0b206IDE5MHB4O1xcbn1cXG5cXG4jRnVsbE5hbWUge1xcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBsZWZ0OiAxMHB4O1xcbiAgICB3aWR0aDogbWluKDY4JSwgNjAwcHgpO1xcbn1cXG5cXG4jRW1haWwge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgbGVmdDogNjZweDtcXG4gICAgd2lkdGg6IG1pbig2OCUsIDYwMHB4KTtcXG59XFxuXFxuI01lc3NhZ2Uge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIHdpZHRoOiBtaW4oNjglLCA2MDBweCk7XFxuICAgIGxlZnQ6IDI3cHg7XFxufVxcblxcbi5zdWJtaXRCdG4ge1xcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU3luY29wYXRlXFxcIjtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY29sb3I6IHJnYigzOSwyNiwyOCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjAsIDIwNywgMjA3KTtcXG4gICAgbWFyZ2luLXRvcDogMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbiAgICBsZWZ0OiBtaW4oNjglLCA3NDVweCk7XFxufVxcblxcbi8qIE5BViBCVVRUT05TIFNIQVJFRCAqL1xcblxcbi5uYXZCYXJIb21lIGJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmb250LWZhbWlseTogXFxcIlN5bmNvcGF0ZVxcXCI7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGNvbG9yOiByZ2IoMzksMjYsMjgpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIwLCAyMDcsIDIwNyk7XFxufVxcblxcbi5uYXZCYXJIb21lIGJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjpwb2ludGVyO1xcbn1cXG5cXG4vKiBOQVYgSE9NRSAqL1xcblxcbi5uYXZCYXJIb21lIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGJvdHRvbTogNjBweDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcXG4gICAgZ2FwOiA0MHB4O1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNjEwcHgpIHtcXG4gICAgLm5hdkJhckhvbWUge1xcbiAgICAgICAgdG9wOiAyMjBweDtcXG4gICAgfVxcbn1cXG5cXG4vKiBOQVYgSElEREVOICovXFxuXFxuLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6bm9uZTtcXG59XFxuXFxuLyogTkFWIEJVVFRPTiBVUFBFUiBSSUdIVCBDT1JORVIgKi9cXG5cXG4udG9wUmlnaHQge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDoyMDBweDtcXG4gICAgcmlnaHQ6IDUlO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODlweCkge1xcbiAgICAubmF2QmFySG9tZSBidXR0b24ge1xcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xcbiAgICB9XFxuICAgIC50b3BSaWdodCB7XFxuICAgICAgICB0b3A6MjQ1cHg7XFxuICAgIH1cXG59XFxuXFxuXFxuLyogU1RBVElDIEZPT1RFUiAqL1xcblxcbi50ZW1wbGF0ZUZvb3RlciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvdHRvbTogMDtcXG59XFxuXFxuLnRlbXBsYXRlRm9vdGVyIHAge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjb2xvcjogcmdiKDIyMCwgMjA3LCAyMDcpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzOSwyNiwyOCk7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnRlbXBsYXRlRm9vdGVyIGEge1xcbiAgICBjb2xvcjogcmdiKDIyMCwgMjA3LCAyMDcpO1xcbn1cXG5cXG4uZ2l0TG9nbyB7XFxuICAgIGhlaWdodDogMTVweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3QoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICBjb25zdCBwYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwYWdlLmNsYXNzTGlzdC5hZGQoXCJwYWdlXCIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGFnZSk7XG5cbiAgICAvLyBIRUFESU5HIC8vXG5cbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGhlYWRpbmcuY2xhc3NMaXN0LmFkZChcImhlYWRpbmdcIik7XG4gICAgaGVhZGluZy5pbm5lclRleHQgPSBcIkNPTlRBQ1RcIjtcbiAgICBwYWdlLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuXG4gICAgLy8gTkFWIC8vXG5cbiAgICBcblxuICAgIC8vIENPTlRBQ1QgSU5GTyAvL1xuXG4gICAgY29uc3QgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwaG9uZS5jbGFzc0xpc3QuYWRkKFwicGhvbmVDb250YWN0XCIpO1xuICAgIHBob25lLmlubmVyVGV4dCA9IFwiUGhvbmU6ICg4MTYpIDU1NSAtIDU1NTVcIjtcbiAgICBwYWdlLmFwcGVuZENoaWxkKHBob25lKTtcblxuICAgIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZW1haWwuY2xhc3NMaXN0LmFkZChcImVtYWlsQ29udGFjdFwiKTtcbiAgICBlbWFpbC5pbm5lclRleHQgPSBcIkVtYWlsOiBXb29kZmlyZUtDQHBpenphLm9yZ1wiO1xuICAgIHBhZ2UuYXBwZW5kQ2hpbGQoZW1haWwpO1xuXG4gICAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGFkZHJlc3MuY2xhc3NMaXN0LmFkZChcImFkZHJlc3NDb250YWN0XCIpO1xuICAgIGFkZHJlc3MuaW5uZXJUZXh0ID0gXCJBZGRyZXNzOiA4MTAgTWFpbiBTdHJlZXRcIjtcbiAgICBwYWdlLmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuXG4gICAgLy8gTUVTU0FHRSBGT1JNIC8vXG5cbiAgICBjb25zdCBtc2dGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIilcbiAgICBtc2dGb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibXNnRm9ybUNvbnRhY3RcIik7XG4gICAgbXNnRm9ybS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZW1haWxcIik7XG4gICAgbXNnRm9ybS5zZXRBdHRyaWJ1dGUoXCJtZXRob2RcIiwgXCJQT1NUXCIpO1xuICAgIHBhZ2UuYXBwZW5kQ2hpbGQobXNnRm9ybSk7XG5cbiAgICBjb25zdCBtc2dIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgbXNnSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJtc2dIZWFkZXJDb250YWN0XCIpO1xuICAgIG1zZ0hlYWRlci5pbm5lclRleHQgPSBcIlNlbmQgdXMgYSBtZXNzYWdlXCI7XG4gICAgbXNnRm9ybS5hcHBlbmRDaGlsZChtc2dIZWFkZXIpO1xuXG4gICAgY29uc3Qgc3BhY2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtc2dGb3JtLmFwcGVuZENoaWxkKHNwYWNlcik7XG5cbiAgICBjb25zdCBuYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBuYW1lRGl2LmNsYXNzTGlzdC5hZGQoXCJmb3JtRGl2c1wiKTtcbiAgICBtc2dGb3JtLmFwcGVuZENoaWxkKG5hbWVEaXYpO1xuXG4gICAgY29uc3QgbmFtZUxhYmVsRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBuYW1lTGFiZWxGb3JtLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIkZ1bGxOYW1lXCIpO1xuICAgIG5hbWVMYWJlbEZvcm0uaW5uZXJUZXh0ID0gXCJGdWxsIE5hbWU6IFwiO1xuICAgIG5hbWVEaXYuYXBwZW5kQ2hpbGQobmFtZUxhYmVsRm9ybSk7XG5cbiAgICBjb25zdCBuYW1lSW5wdXRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIG5hbWVJbnB1dEZvcm0uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgbmFtZUlucHV0Rm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIkZ1bGxOYW1lXCIpO1xuICAgIG5hbWVEaXYuYXBwZW5kQ2hpbGQobmFtZUlucHV0Rm9ybSk7XG5cbiAgICBjb25zdCBlbWFpbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZW1haWxEaXYuY2xhc3NMaXN0LmFkZChcImZvcm1EaXZzXCIpO1xuICAgIG1zZ0Zvcm0uYXBwZW5kQ2hpbGQoZW1haWxEaXYpO1xuXG4gICAgY29uc3QgZW1haWxMYWJlbEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgZW1haWxMYWJlbEZvcm0uc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiRW1haWxcIik7XG4gICAgZW1haWxMYWJlbEZvcm0uaW5uZXJUZXh0ID0gXCJFbWFpbDogXCI7XG4gICAgZW1haWxEaXYuYXBwZW5kQ2hpbGQoZW1haWxMYWJlbEZvcm0pO1xuXG4gICAgY29uc3QgZW1haWxJbnB1dEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZW1haWxJbnB1dEZvcm0uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgZW1haWxJbnB1dEZvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJFbWFpbFwiKTtcbiAgICBlbWFpbERpdi5hcHBlbmRDaGlsZChlbWFpbElucHV0Rm9ybSk7XG5cbiAgICBjb25zdCBtc2dEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1zZ0Rpdi5jbGFzc0xpc3QuYWRkKFwiZm9ybURpdnNcIik7XG4gICAgbXNnRm9ybS5hcHBlbmRDaGlsZChtc2dEaXYpO1xuXG4gICAgY29uc3QgbWVzc2FnZUxhYmVsRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBtZXNzYWdlTGFiZWxGb3JtLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIk1lc3NhZ2VcIik7XG4gICAgbWVzc2FnZUxhYmVsRm9ybS5jbGFzc0xpc3QuYWRkKFwibXNnTGFiZWxcIik7XG4gICAgbWVzc2FnZUxhYmVsRm9ybS5pbm5lclRleHQgPSBcIk1lc3NhZ2U6IFwiO1xuICAgIG1zZ0Rpdi5hcHBlbmRDaGlsZChtZXNzYWdlTGFiZWxGb3JtKTtcblxuICAgIGNvbnN0IG1lc3NhZ2VJbnB1dEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgbWVzc2FnZUlucHV0Rm9ybS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICBtZXNzYWdlSW5wdXRGb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiTWVzc2FnZVwiKTtcbiAgICBtc2dEaXYuYXBwZW5kQ2hpbGQobWVzc2FnZUlucHV0Rm9ybSk7XG5cbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKFwic3VibWl0QnRuXCIpO1xuICAgIHN1Ym1pdEJ0bi5pbm5lclRleHQgPSBcIlNVQk1JVFwiXG4gICAgbXNnRm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuXG5cbiAgICByZXR1cm4gcGFnZTtcblxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZyb250UGFnZSgpIHtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIGNvbnN0IGZyb250UGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZyb250UGFnZS5jbGFzc0xpc3QuYWRkKFwiZnJvbnRQYWdlXCIpXG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZyb250UGFnZSk7XG5cbiAgICBjb25zdCB3ZWxjb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgd2VsY29tZS5jbGFzc0xpc3QuYWRkKFwid2VsY29tZVwiKVxuXG4gICAgd2VsY29tZS5pbm5lclRleHQgPSBcIlJlc3RhdXJhbnQgJiBCYXJcIjtcblxuICAgIGZyb250UGFnZS5hcHBlbmRDaGlsZCh3ZWxjb21lKTtcblxuICAgIGNvbnN0IGRlc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGRlc2NyaXB0LmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdFwiKVxuXG4gICAgZGVzY3JpcHQuaW5uZXJUZXh0ID0gXCJzZXJ2aW5nIHdvb2RmaXJlIHBpenphLCBzYWxhZHMsIGFwcGV0aXplcnMgJiBhIGxhcmdlIHZhcmlldHkgb2YgbG9jYWwgdGFwcyBkYWlseVwiO1xuXG4gICAgZnJvbnRQYWdlLmFwcGVuZENoaWxkKGRlc2NyaXB0KTtcblxuICAgIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGhvdXJzLmNsYXNzTGlzdC5hZGQoXCJob3Vyc1wiKTtcblxuICAgIGhvdXJzLmlubmVyVGV4dCA9IFwiSG91cnM6IDNQTSAtIDFBTVwiO1xuXG4gICAgZnJvbnRQYWdlLmFwcGVuZENoaWxkKGhvdXJzKTtcblxuICAgIHJldHVybiBmcm9udFBhZ2U7XG5cbn0iLCJpbXBvcnQgTWVudUl0ZW1zIGZyb20gJy4vbWVudUl0ZW1zLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZW51KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgY29uc3QgcGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcGFnZS5jbGFzc0xpc3QuYWRkKFwicGFnZVwiKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHBhZ2UpO1xuXG4gICAgLyogTUFJTiBIRUFESU5HICovXG5cbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGhlYWRpbmcuY2xhc3NMaXN0LmFkZChcImhlYWRpbmdcIilcbiAgICBoZWFkaW5nLmlubmVyVGV4dCA9IFwiTUVOVVwiO1xuICAgIHBhZ2UuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG5cbiAgICAvKiBNRU5VIElURU1TICovXG4gICAgXG4gICAgY29uc3QgYXBwTGlzdCA9IFtdO1xuICAgIGNvbnN0IHNhbGFkTGlzdCA9IFtdO1xuICAgIGNvbnN0IHBpenphc0xpc3QgPSBbXTtcblxuICAgIGNvbnN0IGFwcDEgPSBuZXcgTWVudUl0ZW1zKFwiQnVmZmFsbyBXaW5nc1wiLCBcIjggcGllY2Ugc2VydmVkIHdpdGggY2VsZXJ5IGFuZCBibHVlIGNoZWVzZVwiLCAxMC45OCk7XG4gICAgYXBwTGlzdC5wdXNoKGFwcDEpO1xuXG4gICAgY29uc3QgYXBwMiA9IG5ldyBNZW51SXRlbXMoXCJCdWZmYWxvIENhdWxpZmxvd2VyIEJpdGVzXCIsIFwiOCBwaWVjZSBzZXJ2ZWQgd2l0aCBibHVlIGNoZWVzZSBvciByYW5jaFwiLCA1Ljg5KTtcbiAgICBhcHBMaXN0LnB1c2goYXBwMik7XG5cbiAgICBjb25zdCBhcHAzID0gbmV3IE1lbnVJdGVtcyhcIkZyaWVkIFBpY2tsZXNcIiwgXCJzZXJ2ZWQgd2l0aCBibHVlIGNoZWVzZSBvciByYW5jaFwiLCA2Ljg5KTtcbiAgICBhcHBMaXN0LnB1c2goYXBwMyk7XG5cbiAgICBjb25zdCBhcHA0ID0gbmV3IE1lbnVJdGVtcyhcIlNtb3RoZXJlZCBGcmllc1wiLCBcImJhY29uLCBpbi1ob3VzZSBjaGVlc2Ugc2F1Y2UsIGZyZXNoIGphbGFwZW5vcywgc291ciBjcmVhbVwiLCAxMC45OCk7XG4gICAgYXBwTGlzdC5wdXNoKGFwcDQpO1xuXG4gICAgY29uc3Qgc2FsYWQxID0gbmV3IE1lbnVJdGVtcyhcIkZyaWVkIEdvYXQgQ2hlZXNlIFwiLCBcImFydWd1bGEgYW5kIHJvbWFpbmUsIGNvcm4sIGJsYWNrIG9saXZlcywgcGFua28tZnJpZWQgZ29hdCBjaGVlc2UsIHNwaWN5IGNoaXBvdGxlIHJhbmNoXCIsIDEwLjk4KTtcbiAgICBzYWxhZExpc3QucHVzaChzYWxhZDEpO1xuXG4gICAgY29uc3Qgc2FsYWQyID0gbmV3IE1lbnVJdGVtcyhcIlNvdXRoZXJuIEZyaWVkIENoaWNrZW5cIiwgXCJyb21haW5lIGFuZCBpY2ViZXJnLCBjb3JuLCBibGFjayBvbGl2ZXMsIHNvdXRoZXJuIGZyaWVkIGNoaWNrZW4sIHNwaWN5IGNoaXBvdGxlIHJhbmNoXCIsIDExLjk4KTtcbiAgICBzYWxhZExpc3QucHVzaChzYWxhZDIpO1xuXG4gICAgY29uc3Qgc2FsYWQzID0gbmV3IE1lbnVJdGVtcyhcIlN0ZWFrIGFuZCBCbHVlIENoZWVzZVwiLCBcImFydWd1bGEgYW5kIHJvbWFpbmUsIGRpY2VkIHRvbWF0b2VzLCBibHVlIGNoZWVzZSBjcnVtYmxlcywgYmx1ZSBjaGVlc2UgZHJlc3NpbmdcIiwgMTIuOTgpO1xuICAgIHNhbGFkTGlzdC5wdXNoKHNhbGFkMyk7XG5cbiAgICBjb25zdCBwaXp6YTEgPSBuZXcgTWVudUl0ZW1zKFwiTWVhdFwiLCBcIlRvbWF0b2VzLCBtb3p6YXJlbGxhLCBpdGFsaWFuIHNhdXNhZ2UsIGJhY29uLCBwZXBwZXJvbmlcIiwgMTMuNzQpO1xuICAgIHBpenphc0xpc3QucHVzaChwaXp6YTEpO1xuXG4gICAgY29uc3QgcGl6emEyID0gbmV3IE1lbnVJdGVtcyhcIm1hcmdoZXJpdGFcIiwgXCJ0b21hdG9lcywgbW96emFyZWxsYSwgYmFzaWwsIGV4dHJhIHZpcmdpbiBvbGl2ZSBvaWxcIiwgMTAuOTgpO1xuICAgIHBpenphc0xpc3QucHVzaChwaXp6YTIpO1xuXG4gICAgY29uc3QgcGl6emEzID0gbmV3IE1lbnVJdGVtcyhcInBlc3RvXCIsIFwiYmFzaWwgcGVzdG8sIG1venphcmVsbGEsIGl0YWxpYW4gc2F1c2FnZSwgZGljZWQgdG9tYXRvZXMsIGV4dHJhIHZpcmdpbiBvbGl2ZSBvaWxcIiwgMTEuOTgpO1xuICAgIHBpenphc0xpc3QucHVzaChwaXp6YTMpO1xuXG4gICAgY29uc3QgcGl6emE0ID0gbmV3IE1lbnVJdGVtcyhcInBlcHBlcm9uaVwiLCBcInRvbWF0b2VzLCBtb3p6YXJlbGxhLCBwZXBwZXJvbmksIHNwaWN5IGhvbmV5XCIsIDEwLjk4KTtcbiAgICBwaXp6YXNMaXN0LnB1c2gocGl6emE0KTtcblxuICAgIGNvbnN0IHBpenphNSA9IG5ldyBNZW51SXRlbXMoXCJzYXVzYWdlXCIsIFwidG9tYXRvZXMsIG1venphcmVsbGEsIGJhc2lsLCBpdGFsaWFuIHNhdXNhZ2VcIiwgMTAuOTgpO1xuICAgIHBpenphc0xpc3QucHVzaChwaXp6YTUpO1xuXG4gICAgY29uc3QgcGl6emE2ID0gbmV3IE1lbnVJdGVtcyhcInJpY290dGFcIiwgXCJtb3p6YXJlbGxhLCByaWNvdHRhLCBiYXNpbCwgb3JlZ2FubywgZXh0cmEgdmlyZ2luIG9saXZlIG9pbFwiLCA5Ljk4KTtcbiAgICBwaXp6YXNMaXN0LnB1c2gocGl6emE2KTtcblxuICAgIC8qIEZVTkNUSU9OIFRPIEFERCBJVEVNUyBGUk9NIExJU1QgVE8gRE9NICovXG5cbiAgICBmdW5jdGlvbiBhZGRJdGVtcyhsaXN0TmFtZSwgY29udGFpbmVyKSB7XG5cbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPGxpc3ROYW1lLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIG5ld0l0ZW0uY2xhc3NMaXN0LmFkZChcIm1lbnVJdGVtXCIpO1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0l0ZW0pO1xuXG4gICAgICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgICBuYW1lLmNsYXNzTGlzdC5hZGQoXCJpdGVtTmFtZVwiKTtcbiAgICAgICAgICAgIG5hbWUuaW5uZXJUZXh0ID0gbGlzdE5hbWVbaV0ubmFtZTtcbiAgICAgICAgICAgIG5ld0l0ZW0uYXBwZW5kQ2hpbGQobmFtZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgICBwcmljZS5jbGFzc0xpc3QuYWRkKFwiaXRlbVByaWNlXCIpO1xuICAgICAgICAgICAgcHJpY2UuaW5uZXJUZXh0ID0gYCQke2xpc3ROYW1lW2ldLnByaWNlfWA7XG4gICAgICAgICAgICBuZXdJdGVtLmFwcGVuZENoaWxkKHByaWNlKTtcblxuICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJpdGVtRGVzY3JpcHRcIik7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBsaXN0TmFtZVtpXS5kZXM7XG4gICAgICAgICAgICBuZXdJdGVtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyogQVBQRVRJWkVSUyAqL1xuXG4gICAgY29uc3QgYXBwcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGFwcHMuY2xhc3NMaXN0LmFkZChcIml0ZW1IZWFkZXJcIik7XG4gICAgYXBwcy5pbm5lclRleHQgPSBcImFwcGV0aXplcnNcIjtcbiAgICBhcHBzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYXBwZXRpemVySGVhZGluZ1wiKTtcbiAgICBwYWdlLmFwcGVuZENoaWxkKGFwcHMpO1xuXG4gICAgY29uc3QgYXBwc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYXBwc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZ3JpZENvbnRhaW5lck1lbnVcIik7XG4gICAgcGFnZS5hcHBlbmRDaGlsZChhcHBzQ29udGFpbmVyKTtcblxuICAgIGFkZEl0ZW1zKGFwcExpc3QsIGFwcHNDb250YWluZXIpO1xuXG4gICAgLyogU0FMQURTICovXG5cbiAgICBjb25zdCBzYWxhZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBzYWxhZHMuY2xhc3NMaXN0LmFkZChcIml0ZW1IZWFkZXJcIik7XG4gICAgc2FsYWRzLmlubmVyVGV4dCA9IFwiU2FsYWRzXCI7XG4gICAgc2FsYWRzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2FsYWRzSGVhZGluZ1wiKTtcbiAgICBwYWdlLmFwcGVuZENoaWxkKHNhbGFkcyk7XG5cbiAgICBjb25zdCBzYWxhZHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNhbGFkc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZ3JpZENvbnRhaW5lck1lbnVcIik7XG4gICAgcGFnZS5hcHBlbmRDaGlsZChzYWxhZHNDb250YWluZXIpO1xuXG4gICAgYWRkSXRlbXMoc2FsYWRMaXN0LCBzYWxhZHNDb250YWluZXIpO1xuXG4gICAgLyogUElaWkFTICovXG5cbiAgICBjb25zdCBwaXp6YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwaXp6YXMuY2xhc3NMaXN0LmFkZChcIml0ZW1IZWFkZXJcIik7XG4gICAgcGl6emFzLmlubmVyVGV4dCA9IFwiUGl6emFzXCI7XG4gICAgcGl6emFzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicGl6emFzSGVhZGluZ1wiKTtcbiAgICBwYWdlLmFwcGVuZENoaWxkKHBpenphcyk7XG5cbiAgICBjb25zdCBwaXp6YXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBpenphc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZ3JpZENvbnRhaW5lck1lbnVcIik7XG4gICAgcGFnZS5hcHBlbmRDaGlsZChwaXp6YXNDb250YWluZXIpO1xuXG4gICAgYWRkSXRlbXMocGl6emFzTGlzdCwgcGl6emFzQ29udGFpbmVyKTtcblxuXG4gICAgcmV0dXJuIHBhZ2U7XG5cblxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudUl0ZW1zIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBkZXMsIHByaWNlKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZGVzID0gZGVzO1xuICAgICAgICB0aGlzLnByaWNlID0gcHJpY2U7XG4gICAgfVxuXG59XG5cblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCBHaXRJY29uIGZyb20gJy4vZ2l0aHViLW1hcmstd2hpdGUuc3ZnJztcbmltcG9ydCBGcm9udFBhZ2UgZnJvbSAnLi9mcm9udFBhZ2UuanMnO1xuaW1wb3J0IE1lbnUgZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCBDb250YWN0IGZyb20gJy4vY29udGFjdC5qcyc7XG5cbmZ1bmN0aW9uIENvbXBvbmVudCgpIHtcblxuICAgIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwYWdlKTtcblxuICAgIC8vIFRFTVBMQVRFIEhFQURFUlxuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcInRlbXBsYXRlSGVhZGVyXCIpO1xuICAgIHBhZ2UuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBoZWFkZXIub25jbGljayA9IHN3aXRjaEZyb250UGFnZTtcblxuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gXCJXb29kRmlyZSBQaXp6ZXJpYVwiO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZVwiKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgICBhZGRyZXNzLmlubmVyVGV4dCA9IFwiODEwIE1haW4gU3RyZWV0XCI7XG4gICAgYWRkcmVzcy5jbGFzc0xpc3QuYWRkKFwiYWRkcmVzc1wiKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG5cblxuICAgIC8vIFZBUklBQkxFIENPTlRFTlRcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRlbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250ZW50XCIpO1xuXG4gICAgcGFnZS5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoRnJvbnRQYWdlKCkpO1xuXG4gICAgLy8gTkFWXG5cbiAgICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICAgIG5hdkJhci5jbGFzc0xpc3QuYWRkKFwibmF2QmFySG9tZVwiKTtcbiAgICBwYWdlLmFwcGVuZENoaWxkKG5hdkJhcik7XG5cbiAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBtZW51QnRuLmlubmVyVGV4dCA9IFwiTWVudVwiO1xuICAgIG5hdkJhci5hcHBlbmRDaGlsZChtZW51QnRuKTtcbiAgICBtZW51QnRuLm9uY2xpY2sgPSBzd2l0Y2hNZW51O1xuXG5cbiAgICBjb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb250YWN0QnRuLmlubmVyVGV4dCA9IFwiQ29udGFjdFwiO1xuICAgIG5hdkJhci5hcHBlbmRDaGlsZChjb250YWN0QnRuKTtcbiAgICBjb250YWN0QnRuLm9uY2xpY2sgPSBzd2l0Y2hDb250YWN0O1xuXG5cbiAgICAvLyBIQU5ETEUgT05DTElDSyBEWU5BTUlDIE5BViBBTkQgUEFHRVxuXG4gICAgZnVuY3Rpb24gc3dpdGNoQ29udGFjdCAoKSB7XG4gICAgICAgIGNvbnRhY3RCdG4uY2xhc3NMaXN0LnJlbW92ZShcInRvcFJpZ2h0XCIpO1xuICAgICAgICBjb250YWN0QnRuLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgIG1lbnVCdG4uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgICAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKFwidG9wUmlnaHRcIik7XG4gICAgICAgIENvbnRhY3QoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzd2l0Y2hNZW51KCkge1xuICAgICAgICBtZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJ0b3BSaWdodFwiKTtcbiAgICAgICAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICBjb250YWN0QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICAgIGNvbnRhY3RCdG4uY2xhc3NMaXN0LmFkZChcInRvcFJpZ2h0XCIpO1xuICAgICAgICBNZW51KCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3dpdGNoRnJvbnRQYWdlKCkge1xuICAgICAgICBtZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICAgIG1lbnVCdG4uY2xhc3NMaXN0LnJlbW92ZShcInRvcFJpZ2h0XCIpO1xuICAgICAgICBjb250YWN0QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICAgIGNvbnRhY3RCdG4uY2xhc3NMaXN0LnJlbW92ZShcInRvcFJpZ2h0XCIpO1xuICAgICAgICBGcm9udFBhZ2UoKTtcbiAgICB9XG5cbiAgICAvLyBGT09URVJcblxuICAgIGNvbnN0IHRlbXBsYXRlRm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgICB0ZW1wbGF0ZUZvb3Rlci5jbGFzc0xpc3QuYWRkKFwidGVtcGxhdGVGb290ZXJcIik7XG4gICAgcGFnZS5hcHBlbmRDaGlsZCh0ZW1wbGF0ZUZvb3Rlcik7XG5cbiAgICBjb25zdCBnaXRIdWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBnaXRIdWIuY2xhc3NMaXN0LmFkZChcImdpdEh1YlwiKTtcbiAgICBnaXRIdWIuaW5uZXJUZXh0ID0gXCJDcmVhdGVkIEJ5IFwiO1xuICAgIHRlbXBsYXRlRm9vdGVyLmFwcGVuZENoaWxkKGdpdEh1Yik7XG5cbiAgICBjb25zdCBJY29uID0gbmV3IEltYWdlKCk7XG4gICAgSWNvbi5zcmMgPSBHaXRJY29uO1xuICAgIEljb24uY2xhc3NMaXN0LmFkZChcImdpdExvZ29cIik7XG5cbiAgICBjb25zdCBnaXRIdWJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgZ2l0SHViTGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiaHR0cHM6Ly9naXRodWIuY29tL0JlbmphbWluSk1jRFwiKTtcbiAgICBnaXRIdWJMaW5rLmFwcGVuZENoaWxkKEljb24pXG4gICAgY29uc3QgZ2l0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGdpdE5hbWUuaW5uZXJUZXh0ID0gXCJCZW5qYW1pbkpNY0RcIjtcbiAgICBnaXRIdWJMaW5rLmFwcGVuZENoaWxkKGdpdE5hbWUpO1xuICAgIGdpdEh1Yi5hcHBlbmRDaGlsZChnaXRIdWJMaW5rKTtcblxuICAgIHJldHVybiBwYWdlO1xuXG59XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoQ29tcG9uZW50KCkpO1xuXG4vLzxwIGNsYXNzPVwiZ2l0SHViXCI+XG4vL0NyZWF0ZWQgQnkgXG4vLzxhIGhyZWY9XCJnaXRodWIuY29tXCI+XG4vLzxpbWcgY2xhc3M9XCJnaXRMb2dvXCIgc3JjPVwiR2l0SWNvblwiLz5cbi8vQmVuamFtaW5KTWNEXG4vLzwvYT48L3A+Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9