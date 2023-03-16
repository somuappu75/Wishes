(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Button.js":
/*!******************************!*\
  !*** ./components/Button.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var _styles_Button_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Button.module.css */ "./styles/Button.module.css");
/* harmony import */ var _styles_Button_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Button_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "F:\\Git-remoteReposHosted\\Wishes\\components\\Button.js";


const Button = ({
  type = "button",
  text,
  onClick = null,
  className = ""
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    className: `${(_styles_Button_module_css__WEBPACK_IMPORTED_MODULE_1___default().button)} ${className}`,
    type: type,
    onClick: onClick,
    children: text
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./components/CopyLinkButton.js":
/*!**************************************!*\
  !*** ./components/CopyLinkButton.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CopyLinkButton": () => (/* binding */ CopyLinkButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_CopyLinkButton_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/CopyLinkButton.module.css */ "./styles/CopyLinkButton.module.css");
/* harmony import */ var _styles_CopyLinkButton_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_CopyLinkButton_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ "./components/Button.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "F:\\Git-remoteReposHosted\\Wishes\\components\\CopyLinkButton.js";




const CopyLinkButton = () => {
  const {
    0: active,
    1: setActive
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: timer,
    1: setTimer
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(2);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (active) {
      const id = setInterval(() => {
        setTimer(t => {
          if (t < 1) {
            setActive(false);
          } else {
            return t - 1;
          }
        });
      }, 1000);
      return () => clearInterval(id);
    }
  }, [active]);

  const handleClick = () => {
    navigator.clipboard.writeText(window.location.href);
    setActive(true);
    setTimer(2);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_1__.Button, {
    text: active ? "Link copied!" : "Copy Link",
    onClick: handleClick,
    className: active ? (_styles_CopyLinkButton_module_css__WEBPACK_IMPORTED_MODULE_3___default().active) : (_styles_CopyLinkButton_module_css__WEBPACK_IMPORTED_MODULE_3___default().inactive)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./components/index.js":
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CopyLinkButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CopyLinkButton */ "./components/CopyLinkButton.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _CopyLinkButton__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _CopyLinkButton__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ "./components/Button.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _Button__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _Button__WEBPACK_IMPORTED_MODULE_1__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);



/***/ }),

/***/ "./hooks/useTheme.js":
/*!***************************!*\
  !*** ./hooks/useTheme.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 //colors list

const useTheme = () => {
  const themes = [{
    id: 0,
    name: "blue",
    color: "#0070f3"
  }, {
    id: 1,
    name: "green",
    color: "#10B981"
  }, {
    id: 2,
    name: "violet",
    color: "#8B5CF6"
  }, {
    id: 3,
    name: "yellow",
    color: "#FBBF24"
  }, {
    id: 4,
    name: "red",
    color: "#E11D48"
  }];
  const {
    0: currentTheme,
    1: setCurrentTheme
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(themes[0]);

  const setTheme = id => {
    const requiredTheme = themes.find(item => id == item.id); // If the theme with the given id exists then change theme .

    if (requiredTheme) setCurrentTheme(requiredTheme); // If the theme with the given id does not exist then it doesnt change the default theme;
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let root = document.documentElement;
    root.style.setProperty("--color", currentTheme.color);
  }, [currentTheme]);
  return {
    themes,
    setTheme,
    currentTheme
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useTheme);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useTheme */ "./hooks/useTheme.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components */ "./components/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "F:\\Git-remoteReposHosted\\Wishes\\pages\\index.js";







function Home() {
  const {
    themes,
    setTheme,
    currentTheme
  } = (0,_hooks_useTheme__WEBPACK_IMPORTED_MODULE_2__.default)();
  const {
    0: value,
    1: setValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");

  const handleInput = e => {
    e.preventDefault();
    const id = currentTheme.id;

    if (!value || value[0] === " ") {
      alert("Please enter Your name!");
      return;
    }

    if (id == 0) next_router__WEBPACK_IMPORTED_MODULE_1___default().push(value); // If the theme is default blue then push to '/{name}'
    else next_router__WEBPACK_IMPORTED_MODULE_1___default().push(`/${value}/${id}`); // If the theme is not default then will push to '/{name}?color={id}
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("title", {
        children: "Create a Birthday Wish"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("meta", {
        name: "description",
        content: "An app to generate birthday wishes :)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("main", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().main),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h1", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().title),
          children: ["Create a ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("span", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().span),
            children: "Birthday"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 22
          }, this), " Wish to Boss"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().themeWrapper),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("form", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().theme),
          id: "theme-input",
          onChange: e => setTheme(e.target.id),
          children: themes.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
            type: "radio",
            className: item.name,
            id: item.id,
            name: "theme",
            value: item.color,
            defaultChecked: currentTheme.id === item.id
          }, item.id, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 15
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("form", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().form),
          onSubmit: handleInput,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
            id: "input",
            name: "go",
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().input),
            placeholder: "Enter your name to wish",
            value: value,
            onChange: e => setValue(e.target.value)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().button),
            type: "submit",
            text: "Go!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().desc),
          children: ["Created by", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().span),
            href: "https://somuappu75.github.io/Mydevprofile/",
            target: "_blank",
            rel: "noreferrer",
            children: "Somanath"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, this), "."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().desc),
          children: ["Click here to", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("a", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().span),
            href: "https://somuappu75.github.io/tribute/",
            target: "_blank",
            rel: "noreferrer",
            children: "Homepage"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 13
          }, this), "!"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./styles/Button.module.css":
/*!**********************************!*\
  !*** ./styles/Button.module.css ***!
  \**********************************/
/***/ ((module) => {

// Exports
module.exports = {
	"button": "Button_button__1rPei"
};


/***/ }),

/***/ "./styles/CopyLinkButton.module.css":
/*!******************************************!*\
  !*** ./styles/CopyLinkButton.module.css ***!
  \******************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"button": "CopyLinkButton_button__30DCu",
	"inactive": "CopyLinkButton_inactive__11kr9",
	"active": "CopyLinkButton_active__3GKaG"
};


/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Home_container__1EcsU",
	"main": "Home_main__1x8gC",
	"span": "Home_span__16ncA",
	"desc": "Home_desc__2xwKH",
	"title": "Home_title__3DjR7",
	"form": "Home_form__1fOyp",
	"input": "Home_input__2_zyB",
	"themeWrapper": "Home_themeWrapper__2Xre8",
	"theme": "Home_theme__7nYSh",
	"button": "Home_button__Xc9mA"
};


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUEscUVBRGI7QUFFRSxnQkFBSSxFQUFDLDRDQUZQO0FBR0Usa0JBQU0sRUFBQyxRQUhUO0FBSUUsZUFBRyxFQUFDLFlBSk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVpGLGVBd0JFO0FBQUcsbUJBQVMsRUFBRUEscUVBQWQ7QUFBQSxzQ0FDZ0IsR0FEaEIsZUFFRTtBQUNFLHFCQUFTLEVBQUVBLHFFQURiO0FBRUUsZ0JBQUksRUFBQyx1Q0FGUDtBQUdFLGtCQUFNLEVBQUMsUUFIVDtBQUlFLGVBQUcsRUFBQyxZQUpOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkF4QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBNUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBNEVEOzs7Ozs7Ozs7O0FDcEdEO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDWkE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaXJ0aGRheS13aXNoLy4vY29tcG9uZW50cy9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vYmlydGhkYXktd2lzaC8uL2NvbXBvbmVudHMvQ29weUxpbmtCdXR0b24uanMiLCJ3ZWJwYWNrOi8vYmlydGhkYXktd2lzaC8uL2NvbXBvbmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmlydGhkYXktd2lzaC8uL2hvb2tzL3VzZVRoZW1lLmpzIiwid2VicGFjazovL2JpcnRoZGF5LXdpc2gvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iaXJ0aGRheS13aXNoLy4vc3R5bGVzL0J1dHRvbi5tb2R1bGUuY3NzIiwid2VicGFjazovL2JpcnRoZGF5LXdpc2gvLi9zdHlsZXMvQ29weUxpbmtCdXR0b24ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9iaXJ0aGRheS13aXNoLy4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9iaXJ0aGRheS13aXNoL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vYmlydGhkYXktd2lzaC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vYmlydGhkYXktd2lzaC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vYmlydGhkYXktd2lzaC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9CdXR0b24ubW9kdWxlLmNzc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9ICh7XHJcbiAgdHlwZSA9IFwiYnV0dG9uXCIsXHJcbiAgdGV4dCxcclxuICBvbkNsaWNrID0gbnVsbCxcclxuICBjbGFzc05hbWUgPSBcIlwiLFxyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxidXR0b25cclxuICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYnV0dG9ufSAke2NsYXNzTmFtZX1gfVxyXG4gICAgICB0eXBlPXt0eXBlfVxyXG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgPlxyXG4gICAgICB7dGV4dH1cclxuICAgIDwvYnV0dG9uPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlIGZyb20gXCIuLi9zdHlsZXMvQ29weUxpbmtCdXR0b24ubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi9CdXR0b25cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDb3B5TGlua0J1dHRvbiA9ICgpID0+IHtcclxuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt0aW1lciwgc2V0VGltZXJdID0gdXNlU3RhdGUoMik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoYWN0aXZlKSB7XHJcbiAgICAgIGNvbnN0IGlkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIHNldFRpbWVyKCh0KSA9PiB7XHJcbiAgICAgICAgICBpZiAodCA8IDEpIHtcclxuICAgICAgICAgICAgc2V0QWN0aXZlKGZhbHNlKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0IC0gMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSwgMTAwMCk7XHJcblxyXG4gICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpZCk7XHJcbiAgICB9XHJcbiAgfSwgW2FjdGl2ZV0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuXHJcbiAgICBzZXRBY3RpdmUodHJ1ZSk7XHJcbiAgICBzZXRUaW1lcigyKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJ1dHRvblxyXG4gICAgICB0ZXh0PXthY3RpdmUgPyBcIkxpbmsgY29waWVkIVwiIDogXCJDb3B5IExpbmtcIn1cclxuICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgIGNsYXNzTmFtZT17YWN0aXZlID8gc3R5bGUuYWN0aXZlIDogc3R5bGUuaW5hY3RpdmV9XHJcbiAgICAvPlxyXG4gICk7XHJcbn07XHJcbiIsImV4cG9ydCAqIGZyb20gXCIuL0NvcHlMaW5rQnV0dG9uXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL0J1dHRvblwiO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy9jb2xvcnMgbGlzdFxyXG5cclxuY29uc3QgdXNlVGhlbWUgPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IHRoZW1lcyA9IFtcclxuICAgIHsgaWQ6IDAsIG5hbWU6IFwiYmx1ZVwiLCBjb2xvcjogXCIjMDA3MGYzXCIgfSxcclxuICAgIHsgaWQ6IDEsIG5hbWU6IFwiZ3JlZW5cIiwgY29sb3I6IFwiIzEwQjk4MVwiIH0sXHJcbiAgICB7IGlkOiAyLCBuYW1lOiBcInZpb2xldFwiLCBjb2xvcjogXCIjOEI1Q0Y2XCIgfSxcclxuICAgIHsgaWQ6IDMsIG5hbWU6IFwieWVsbG93XCIsIGNvbG9yOiBcIiNGQkJGMjRcIiB9LFxyXG4gICAgeyBpZDogNCwgbmFtZTogXCJyZWRcIiwgY29sb3I6IFwiI0UxMUQ0OFwiIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgW2N1cnJlbnRUaGVtZSwgc2V0Q3VycmVudFRoZW1lXSA9IHVzZVN0YXRlKHRoZW1lc1swXSk7XHJcblxyXG4gIGNvbnN0IHNldFRoZW1lID0gKGlkKSA9PiB7XHJcbiAgICBjb25zdCByZXF1aXJlZFRoZW1lID0gdGhlbWVzLmZpbmQoKGl0ZW0pID0+IGlkID09IGl0ZW0uaWQpO1xyXG4gICAgLy8gSWYgdGhlIHRoZW1lIHdpdGggdGhlIGdpdmVuIGlkIGV4aXN0cyB0aGVuIGNoYW5nZSB0aGVtZSAuXHJcbiAgICBpZiAocmVxdWlyZWRUaGVtZSkgc2V0Q3VycmVudFRoZW1lKHJlcXVpcmVkVGhlbWUpO1xyXG4gICAgLy8gSWYgdGhlIHRoZW1lIHdpdGggdGhlIGdpdmVuIGlkIGRvZXMgbm90IGV4aXN0IHRoZW4gaXQgZG9lc250IGNoYW5nZSB0aGUgZGVmYXVsdCB0aGVtZTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IHJvb3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcbiAgICByb290LnN0eWxlLnNldFByb3BlcnR5KFwiLS1jb2xvclwiLCBjdXJyZW50VGhlbWUuY29sb3IpO1xyXG4gIH0sIFtjdXJyZW50VGhlbWVdKTtcclxuXHJcbiAgcmV0dXJuIHsgdGhlbWVzLCBzZXRUaGVtZSwgY3VycmVudFRoZW1lIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VUaGVtZTtcclxuIiwiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB1c2VUaGVtZSBmcm9tIFwiLi4vaG9va3MvdXNlVGhlbWVcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4uL2NvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgeyB0aGVtZXMsIHNldFRoZW1lLCBjdXJyZW50VGhlbWUgfSA9IHVzZVRoZW1lKCk7XHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlSW5wdXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgaWQgPSBjdXJyZW50VGhlbWUuaWQ7XHJcblxyXG4gICAgaWYgKCF2YWx1ZSB8fCB2YWx1ZVswXSA9PT0gXCIgXCIpIHtcclxuICAgICAgYWxlcnQoXCJQbGVhc2UgZW50ZXIgWW91ciBuYW1lIVwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGlkID09IDApIFJvdXRlci5wdXNoKHZhbHVlKTtcclxuICAgIC8vIElmIHRoZSB0aGVtZSBpcyBkZWZhdWx0IGJsdWUgdGhlbiBwdXNoIHRvICcve25hbWV9J1xyXG4gICAgZWxzZSBSb3V0ZXIucHVzaChgLyR7dmFsdWV9LyR7aWR9YCk7IC8vIElmIHRoZSB0aGVtZSBpcyBub3QgZGVmYXVsdCB0aGVuIHdpbGwgcHVzaCB0byAnL3tuYW1lfT9jb2xvcj17aWR9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkNyZWF0ZSBhIEJpcnRoZGF5IFdpc2g8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJBbiBhcHAgdG8gZ2VuZXJhdGUgYmlydGhkYXkgd2lzaGVzIDopXCIgLz5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxyXG4gICAgICAgICAgICBDcmVhdGUgYSA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5zcGFufT5CaXJ0aGRheTwvc3Bhbj4gV2lzaCB0byBCb3NzXHJcbiAgICAgICAgICA8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHsvKiBUaGVtZSBDb2xvciAgKi99XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGhlbWVXcmFwcGVyfT5cclxuICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRoZW1lfVxyXG4gICAgICAgICAgICBpZD1cInRoZW1lLWlucHV0XCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUaGVtZShlLnRhcmdldC5pZCl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHt0aGVtZXMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICBpZD17aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgIG5hbWU9XCJ0aGVtZVwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbS5jb2xvcn1cclxuICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXtjdXJyZW50VGhlbWUuaWQgPT09IGl0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfSBvblN1Ym1pdD17aGFuZGxlSW5wdXR9PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICBpZD1cImlucHV0XCJcclxuICAgICAgICAgICAgICBuYW1lPVwiZ29cIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBuYW1lIHRvIHdpc2hcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IHR5cGU9XCJzdWJtaXRcIiB0ZXh0PVwiR28hXCIgLz5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2N9PlxyXG4gICAgICAgICAgICBDcmVhdGVkIGJ5e1wiIFwifVxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNwYW59XHJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vc29tdWFwcHU3NS5naXRodWIuaW8vTXlkZXZwcm9maWxlL1wiXHJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFNvbWFuYXRoXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgLlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY30+XHJcbiAgICAgICAgICAgIENsaWNrIGhlcmUgdG97XCIgXCJ9XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc3Bhbn1cclxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9zb211YXBwdTc1LmdpdGh1Yi5pby90cmlidXRlL1wiXHJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEhvbWVwYWdlXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgIVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJ1dHRvblwiOiBcIkJ1dHRvbl9idXR0b25fXzFyUGVpXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJidXR0b25cIjogXCJDb3B5TGlua0J1dHRvbl9idXR0b25fXzMwREN1XCIsXG5cdFwiaW5hY3RpdmVcIjogXCJDb3B5TGlua0J1dHRvbl9pbmFjdGl2ZV9fMTFrcjlcIixcblx0XCJhY3RpdmVcIjogXCJDb3B5TGlua0J1dHRvbl9hY3RpdmVfXzNHS2FHXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJIb21lX2NvbnRhaW5lcl9fMUVjc1VcIixcblx0XCJtYWluXCI6IFwiSG9tZV9tYWluX18xeDhnQ1wiLFxuXHRcInNwYW5cIjogXCJIb21lX3NwYW5fXzE2bmNBXCIsXG5cdFwiZGVzY1wiOiBcIkhvbWVfZGVzY19fMnh3S0hcIixcblx0XCJ0aXRsZVwiOiBcIkhvbWVfdGl0bGVfXzNEalI3XCIsXG5cdFwiZm9ybVwiOiBcIkhvbWVfZm9ybV9fMWZPeXBcIixcblx0XCJpbnB1dFwiOiBcIkhvbWVfaW5wdXRfXzJfenlCXCIsXG5cdFwidGhlbWVXcmFwcGVyXCI6IFwiSG9tZV90aGVtZVdyYXBwZXJfXzJYcmU4XCIsXG5cdFwidGhlbWVcIjogXCJIb21lX3RoZW1lX183bllTaFwiLFxuXHRcImJ1dHRvblwiOiBcIkhvbWVfYnV0dG9uX19YYzltQVwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsic3R5bGVzIiwiQnV0dG9uIiwidHlwZSIsInRleHQiLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZSIsIkNvcHlMaW5rQnV0dG9uIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwidGltZXIiLCJzZXRUaW1lciIsImlkIiwic2V0SW50ZXJ2YWwiLCJ0IiwiY2xlYXJJbnRlcnZhbCIsImhhbmRsZUNsaWNrIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiaW5hY3RpdmUiLCJSZWFjdCIsInVzZVRoZW1lIiwidGhlbWVzIiwibmFtZSIsImNvbG9yIiwiY3VycmVudFRoZW1lIiwic2V0Q3VycmVudFRoZW1lIiwic2V0VGhlbWUiLCJyZXF1aXJlZFRoZW1lIiwiZmluZCIsIml0ZW0iLCJyb290IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzZXRQcm9wZXJ0eSIsIkhlYWQiLCJSb3V0ZXIiLCJIb21lIiwidmFsdWUiLCJzZXRWYWx1ZSIsImhhbmRsZUlucHV0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiYWxlcnQiLCJwdXNoIiwiY29udGFpbmVyIiwibWFpbiIsInRpdGxlIiwic3BhbiIsInRoZW1lV3JhcHBlciIsInRoZW1lIiwidGFyZ2V0IiwibWFwIiwiZm9ybSIsImlucHV0IiwiZGVzYyJdLCJzb3VyY2VSb290IjoiIn0=