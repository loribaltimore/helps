"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/landing";
exports.ids = ["pages/landing"];
exports.modules = {

/***/ "./components/MainContext.js":
/*!***********************************!*\
  !*** ./components/MainContext.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MainContext\": () => (/* binding */ MainContext),\n/* harmony export */   \"MainProvider\": () => (/* binding */ MainProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _functions_getSession__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functions/getSession */ \"./functions/getSession.js\");\n/* harmony import */ var _functions_getSession__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_functions_getSession__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nlet MainContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction MainProvider(props) {\n    let [currentUser, setCurrentUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined);\n    let [flash, setFlash] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        msg: undefined,\n        type: undefined\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let fn = async (req, res, next)=>{\n            await _functions_getSession__WEBPACK_IMPORTED_MODULE_2___default()().then((data)=>{\n                if (data.flash !== undefined) {\n                    setFlash({\n                        msg: data.flash[Object.keys(data.flash)],\n                        type: Object.keys(data.flash)[0]\n                    });\n                }\n            });\n        };\n        fn();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MainContext.Provider, {\n            value: {\n                currentUser,\n                setCurrentUser,\n                flash,\n                setFlash\n            },\n            children: props.children\n        }, void 0, false, {\n            fileName: \"/Users/loriba1timore/Coding Projects/portfolio/helps/components/MainContext.js\",\n            lineNumber: 23,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/loriba1timore/Coding Projects/portfolio/helps/components/MainContext.js\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, this);\n}\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01haW5Db250ZXh0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBMkQ7QUFDVjtBQUUxQyxJQUFJSSw0QkFBY0osb0RBQWFBLEdBQUc7QUFFbEMsU0FBU0ssYUFBYUMsS0FBSyxFQUFFO0lBQ2hDLElBQUksQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHTiwrQ0FBUUEsQ0FBQ087SUFDN0MsSUFBSSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdULCtDQUFRQSxDQUFDO1FBQUVVLEtBQUtIO1FBQVdJLE1BQU1KO0lBQVU7SUFFbkVSLGdEQUFTQSxDQUFDLElBQU07UUFDWixJQUFJYSxLQUFLLE9BQU9DLEtBQUtDLEtBQUtDLE9BQVM7WUFDL0IsTUFBTWQsNERBQVVBLEdBQUdlLElBQUksQ0FBQ0MsQ0FBQUEsT0FBUTtnQkFDNUIsSUFBSUEsS0FBS1QsS0FBSyxLQUFLRCxXQUFXO29CQUMxQkUsU0FBUzt3QkFBRUMsS0FBS08sS0FBS1QsS0FBSyxDQUFDVSxPQUFPQyxJQUFJLENBQUNGLEtBQUtULEtBQUssRUFBRTt3QkFBRUcsTUFBTU8sT0FBT0MsSUFBSSxDQUFDRixLQUFLVCxLQUFLLENBQUMsQ0FBQyxFQUFFO29CQUFDO2dCQUMxRixDQUFDO1lBQ0w7UUFDSjtRQUNBSTtJQUNKLEdBQUcsRUFBRTtJQUVMLHFCQUNJLDhEQUFDUTtrQkFDRyw0RUFBQ2xCLFlBQVltQixRQUFRO1lBQUNDLE9BQU87Z0JBQUNqQjtnQkFBYUM7Z0JBQWdCRTtnQkFBT0M7WUFBUTtzQkFDckVMLE1BQU1tQixRQUFROzs7Ozs7Ozs7OztBQUkvQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVscHMvLi9jb21wb25lbnRzL01haW5Db250ZXh0LmpzPzc0MDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBnZXRTZXNzaW9uIGZyb20gJy4uL2Z1bmN0aW9ucy9nZXRTZXNzaW9uJztcblxuZXhwb3J0IGxldCBNYWluQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIE1haW5Qcm92aWRlcihwcm9wcykge1xuICAgIGxldCBbY3VycmVudFVzZXIsIHNldEN1cnJlbnRVc2VyXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XG4gICAgbGV0IFtmbGFzaCwgc2V0Rmxhc2hdID0gdXNlU3RhdGUoeyBtc2c6IHVuZGVmaW5lZCwgdHlwZTogdW5kZWZpbmVkIH0pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbGV0IGZuID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgICAgICAgICBhd2FpdCBnZXRTZXNzaW9uKCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5mbGFzaCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEZsYXNoKHsgbXNnOiBkYXRhLmZsYXNoW09iamVjdC5rZXlzKGRhdGEuZmxhc2gpXSwgdHlwZTogT2JqZWN0LmtleXMoZGF0YS5mbGFzaClbMF0gfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9O1xuICAgICAgICBmbigpO1xuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxNYWluQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e2N1cnJlbnRVc2VyLCBzZXRDdXJyZW50VXNlciwgZmxhc2gsIHNldEZsYXNofX0+XG4gICAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPC9NYWluQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufTtcblxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImdldFNlc3Npb24iLCJNYWluQ29udGV4dCIsIk1haW5Qcm92aWRlciIsInByb3BzIiwiY3VycmVudFVzZXIiLCJzZXRDdXJyZW50VXNlciIsInVuZGVmaW5lZCIsImZsYXNoIiwic2V0Rmxhc2giLCJtc2ciLCJ0eXBlIiwiZm4iLCJyZXEiLCJyZXMiLCJuZXh0IiwidGhlbiIsImRhdGEiLCJPYmplY3QiLCJrZXlzIiwiZGl2IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MainContext.js\n");

/***/ }),

/***/ "./functions/getSession.js":
/*!*********************************!*\
  !*** ./functions/getSession.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nlet axios = __webpack_require__(/*! axios */ \"axios\");\nlet getSession = async (req, res, next)=>{\n    let response = await axios({\n        method: \"get\",\n        url: \"http://localhost:3000/session\"\n    }).then((data)=>{\n        console.log(data);\n        return data;\n    }).catch((err)=>console.log(err));\n    let { data  } = response;\n    return data;\n};\nmodule.exports = getSession;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mdW5jdGlvbnMvZ2V0U2Vzc2lvbi5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUFBLElBQUlBLFFBQVFDLG1CQUFPQSxDQUFDO0FBRXBCLElBQUlDLGFBQWEsT0FBT0MsS0FBS0MsS0FBS0MsT0FBUztJQUN2QyxJQUFJQyxXQUFXLE1BQU1OLE1BQU07UUFDdkJPLFFBQVE7UUFDUkMsS0FBSztJQUNULEdBQUdDLElBQUksQ0FBQ0MsQ0FBQUEsT0FBUTtRQUFFQyxRQUFRQyxHQUFHLENBQUNGO1FBQU8sT0FBT0E7SUFBSyxHQUFHRyxLQUFLLENBQUNDLENBQUFBLE1BQU9ILFFBQVFDLEdBQUcsQ0FBQ0U7SUFDN0UsSUFBSSxFQUFFSixLQUFJLEVBQUUsR0FBR0o7SUFDZixPQUFPSTtBQUNYO0FBRUFLLE9BQU9DLE9BQU8sR0FBR2QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWxwcy8uL2Z1bmN0aW9ucy9nZXRTZXNzaW9uLmpzPzM5NmYiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcblxubGV0IGdldFNlc3Npb24gPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyh7XG4gICAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgICAgIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9zZXNzaW9uJ1xuICAgIH0pLnRoZW4oZGF0YSA9PiB7IGNvbnNvbGUubG9nKGRhdGEpOyByZXR1cm4gZGF0YSB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XG4gICAgbGV0IHsgZGF0YSB9ID0gcmVzcG9uc2U7XG4gICAgcmV0dXJuIGRhdGE7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFNlc3Npb247Il0sIm5hbWVzIjpbImF4aW9zIiwicmVxdWlyZSIsImdldFNlc3Npb24iLCJyZXEiLCJyZXMiLCJuZXh0IiwicmVzcG9uc2UiLCJtZXRob2QiLCJ1cmwiLCJ0aGVuIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVyciIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./functions/getSession.js\n");

/***/ }),

/***/ "./pages/landing.js":
/*!**************************!*\
  !*** ./pages/landing.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_MainContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MainContext */ \"./components/MainContext.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Landing(props) {\n    let { test  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_components_MainContext__WEBPACK_IMPORTED_MODULE_1__.MainContext);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Hola Mis Amigos\"\n    }, void 0, false, {\n        fileName: \"/Users/loriba1timore/Coding Projects/portfolio/helps/pages/landing.js\",\n        lineNumber: 8,\n        columnNumber: 9\n    }, this);\n}\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Landing);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sYW5kaW5nLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQXdEO0FBQ3JCO0FBRW5DLFNBQVNFLFFBQVFDLEtBQUssRUFBRTtJQUNwQixJQUFJLEVBQUVDLEtBQUksRUFBRSxHQUFHSCxpREFBVUEsQ0FBQ0QsZ0VBQVdBO0lBRXJDLHFCQUNJLDhEQUFDSztrQkFBSTs7Ozs7O0FBSWI7O0FBRUEsaUVBQWVILE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWxwcy8uL3BhZ2VzL2xhbmRpbmcuanM/N2FlYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNYWluQ29udGV4dCB9IGZyb20gJy4uL2NvbXBvbmVudHMvTWFpbkNvbnRleHQnO1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gTGFuZGluZyhwcm9wcykge1xuICAgIGxldCB7IHRlc3QgfSA9IHVzZUNvbnRleHQoTWFpbkNvbnRleHQpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICBIb2xhIE1pcyBBbWlnb3NcbiAgICAgICAgPC9kaXY+XG4gICAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgTGFuZGluZzsiXSwibmFtZXMiOlsiTWFpbkNvbnRleHQiLCJ1c2VDb250ZXh0IiwiTGFuZGluZyIsInByb3BzIiwidGVzdCIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/landing.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/landing.js"));
module.exports = __webpack_exports__;

})();