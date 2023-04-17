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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    /**\n   * NOTE: prior to v3 of marketplace widgets, it was necessary to trigger the `m-refresh-widgets`\n   * event when dynamically changing elements on the page/routes.\n   * See the docs for more details: https://docs.manifold.xyz/v/manifold-for-developers/resources/widgets/marketplace-widgets/window-events\n   */ const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const handleRouteChange = (url, { shallow  })=>{\n            // Note: need to trigger a m-refresh-widgets event every time the URL changes client side\n            window.dispatchEvent(new Event(\"m-refresh-widgets\"));\n        };\n        router.events.on(\"routeChangeStart\", handleRouteChange);\n        // If the component is unmounted, unsubscribe\n        // from the event with the `off` method:\n        return ()=>{\n            router.events.off(\"routeChangeStart\", handleRouteChange);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"/Users/vitorbutkusaguiar/repos/auction-page2/pages/_app.js\",\n        lineNumber: 26,\n        columnNumber: 10\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQStCO0FBQ0c7QUFDTTtBQUV4QyxTQUFTRSxNQUFNLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFFLEVBQUU7SUFDdkM7Ozs7R0FJQyxHQUNELE1BQU1DLFNBQVNKLHNEQUFTQTtJQUN4QkQsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU1NLG9CQUFvQixDQUFDQyxLQUFLLEVBQUVDLFFBQU8sRUFBRSxHQUFLO1lBQzlDLHlGQUF5RjtZQUN6RkMsT0FBT0MsYUFBYSxDQUFDLElBQUlDLE1BQU07UUFDakM7UUFDQU4sT0FBT08sTUFBTSxDQUFDQyxFQUFFLENBQUMsb0JBQW9CUDtRQUVyQyw2Q0FBNkM7UUFDN0Msd0NBQXdDO1FBQ3hDLE9BQU8sSUFBTTtZQUNYRCxPQUFPTyxNQUFNLENBQUNFLEdBQUcsQ0FBQyxvQkFBb0JSO1FBQ3hDO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQU8sOERBQUNIO1FBQVcsR0FBR0MsU0FBUzs7Ozs7O0FBQ2pDO0FBRUEsaUVBQWVGLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYW5pZm9sZC13aWRnZXRzLW5leHRqcy10ZW1wbGF0ZS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICAvKipcbiAgICogTk9URTogcHJpb3IgdG8gdjMgb2YgbWFya2V0cGxhY2Ugd2lkZ2V0cywgaXQgd2FzIG5lY2Vzc2FyeSB0byB0cmlnZ2VyIHRoZSBgbS1yZWZyZXNoLXdpZGdldHNgXG4gICAqIGV2ZW50IHdoZW4gZHluYW1pY2FsbHkgY2hhbmdpbmcgZWxlbWVudHMgb24gdGhlIHBhZ2Uvcm91dGVzLlxuICAgKiBTZWUgdGhlIGRvY3MgZm9yIG1vcmUgZGV0YWlsczogaHR0cHM6Ly9kb2NzLm1hbmlmb2xkLnh5ei92L21hbmlmb2xkLWZvci1kZXZlbG9wZXJzL3Jlc291cmNlcy93aWRnZXRzL21hcmtldHBsYWNlLXdpZGdldHMvd2luZG93LWV2ZW50c1xuICAgKi9cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlUm91dGVDaGFuZ2UgPSAodXJsLCB7IHNoYWxsb3cgfSkgPT4ge1xuICAgICAgLy8gTm90ZTogbmVlZCB0byB0cmlnZ2VyIGEgbS1yZWZyZXNoLXdpZGdldHMgZXZlbnQgZXZlcnkgdGltZSB0aGUgVVJMIGNoYW5nZXMgY2xpZW50IHNpZGVcbiAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnbS1yZWZyZXNoLXdpZGdldHMnKSk7XG4gICAgfTtcbiAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZVN0YXJ0JywgaGFuZGxlUm91dGVDaGFuZ2UpO1xuXG4gICAgLy8gSWYgdGhlIGNvbXBvbmVudCBpcyB1bm1vdW50ZWQsIHVuc3Vic2NyaWJlXG4gICAgLy8gZnJvbSB0aGUgZXZlbnQgd2l0aCB0aGUgYG9mZmAgbWV0aG9kOlxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICByb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VTdGFydCcsIGhhbmRsZVJvdXRlQ2hhbmdlKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwiaGFuZGxlUm91dGVDaGFuZ2UiLCJ1cmwiLCJzaGFsbG93Iiwid2luZG93IiwiZGlzcGF0Y2hFdmVudCIsIkV2ZW50IiwiZXZlbnRzIiwib24iLCJvZmYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



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
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();