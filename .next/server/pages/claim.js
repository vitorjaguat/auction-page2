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
exports.id = "pages/claim";
exports.ids = ["pages/claim"];
exports.modules = {

/***/ "./components/Connect.js":
/*!*******************************!*\
  !*** ./components/Connect.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Connect)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n// simple connect button\n\nfunction Connect({ network  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        \"data-widget\": \"m-connect\",\n        \"data-delay-auth\": \"true\",\n        \"data-network\": network\n    }, void 0, false, {\n        fileName: \"/Users/vitorbutkusaguiar/repos/auction-page2/components/Connect.js\",\n        lineNumber: 3,\n        columnNumber: 11\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Nvbm5lY3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsd0JBQXdCO0FBQ3hCO0FBQWUsU0FBU0EsUUFBUSxFQUFFQyxRQUFPLEVBQUUsRUFBRTtJQUMzQyxxQkFBUSw4REFBQ0M7UUFDUEMsZUFBWTtRQUNaQyxtQkFBZ0I7UUFDaEJDLGdCQUFjSjs7Ozs7O0FBRWxCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYW5pZm9sZC13aWRnZXRzLW5leHRqcy10ZW1wbGF0ZS8uL2NvbXBvbmVudHMvQ29ubmVjdC5qcz82NjgxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNpbXBsZSBjb25uZWN0IGJ1dHRvblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29ubmVjdCh7IG5ldHdvcmsgfSkge1xuICByZXR1cm4gKDxkaXZcbiAgICBkYXRhLXdpZGdldD0nbS1jb25uZWN0J1xuICAgIGRhdGEtZGVsYXktYXV0aD0ndHJ1ZSdcbiAgICBkYXRhLW5ldHdvcms9e25ldHdvcmt9XG4gID48L2Rpdj4pXG59XG4iXSwibmFtZXMiOlsiQ29ubmVjdCIsIm5ldHdvcmsiLCJkaXYiLCJkYXRhLXdpZGdldCIsImRhdGEtZGVsYXktYXV0aCIsImRhdGEtbmV0d29yayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Connect.js\n");

/***/ }),

/***/ "./pages/claim.jsx":
/*!*************************!*\
  !*** ./pages/claim.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Claim),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Connect */ \"./components/Connect.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Claim() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-screen\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-w-[1100px] mx-auto\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                \"data-widget\": \"m-claim-complete\",\n                // data-id='1040586992' //notably nyc, works!\n                // data-id='1044943088' // new pepe, no!\n                \"data-id\": \"1045020912\" // antílope, no!\n            }, void 0, false, {\n                fileName: \"/Users/vitorbutkusaguiar/repos/auction-page2/pages/claim.jsx\",\n                lineNumber: 23,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/vitorbutkusaguiar/repos/auction-page2/pages/claim.jsx\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/vitorbutkusaguiar/repos/auction-page2/pages/claim.jsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\nasync function getStaticProps() {\n    return {\n        props: {}\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jbGFpbS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQTRDO0FBQ0o7QUFFekIsU0FBU0UsUUFBUTtJQUM5QixNQUFNQyxTQUFTRixzREFBU0E7SUFFeEIscUJBQ0UsOERBQUNHO1FBQUlDLFdBQVU7a0JBY2IsNEVBQUNEO1lBQUlDLFdBQVU7c0JBQ2IsNEVBQUNEO2dCQUNDRSxlQUFZO2dCQUNaLDZDQUE2QztnQkFDN0Msd0NBQXdDO2dCQUN4Q0MsV0FBUSxhQUFhLGdCQUFnQjs7Ozs7Ozs7Ozs7Ozs7OztBQW1CL0MsQ0FBQztBQUVNLGVBQWVDLGlCQUFpQjtJQUNyQyxPQUFPO1FBQ0xDLE9BQU8sQ0FBQztJQUNWO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21hbmlmb2xkLXdpZGdldHMtbmV4dGpzLXRlbXBsYXRlLy4vcGFnZXMvY2xhaW0uanN4Pzk0MGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbm5lY3QgZnJvbSAnLi4vY29tcG9uZW50cy9Db25uZWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2xhaW0oKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3ctc2NyZWVuJz5cbiAgICAgIHsvKiAtLSBBZGQgQ29ubmVjdCBXaWRnZXQgLS0gKi99XG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9J2ZsZXggdy1mdWxsIGp1c3RpZnktYmV0d2VlbiBpdGVtcy1zdHJldGNoIHAtOCBwYi00IG1kOnBiLTggcHgtMyBtZDpweC04Jz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvJyl9XG4gICAgICAgICAgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBjdXJzb3ItcG9pbnRlciByb3VuZGVkLWxnIGJvcmRlci1bMC41cHhdIHB5LTMgcHgtNSBtZDpweC04IGhvdmVyOnRleHQtc2xhdGUtNDAwIGhvdmVyOmJnLXNsYXRlLTkwMCB0ZXh0LXNtIHRyYWNraW5nLXdpZGVzdCBtZDp3LVsyMDBweF0nXG4gICAgICAgID5cbiAgICAgICAgICBIT01FXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxDb25uZWN0IG5ldHdvcms9JzEnIC8+XG4gICAgICA8L2Rpdj4gKi99XG5cbiAgICAgIHsvKiB+fiBBZGQgQ2xhaW0gV2lkZ2V0IGNvbXBvbmVudCB+fiAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYXgtdy1bMTEwMHB4XSBteC1hdXRvJz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGRhdGEtd2lkZ2V0PSdtLWNsYWltLWNvbXBsZXRlJ1xuICAgICAgICAgIC8vIGRhdGEtaWQ9JzEwNDA1ODY5OTInIC8vbm90YWJseSBueWMsIHdvcmtzIVxuICAgICAgICAgIC8vIGRhdGEtaWQ9JzEwNDQ5NDMwODgnIC8vIG5ldyBwZXBlLCBubyFcbiAgICAgICAgICBkYXRhLWlkPScxMDQ1MDIwOTEyJyAvLyBhbnTDrWxvcGUsIG5vIVxuICAgICAgICAgIC8vIGRhdGEtZmFsbGJhY2stcHJvdmlkZXJcbiAgICAgICAgICAvLyBkYXRhLXYtYXBwXG4gICAgICAgICAgLy8gZGF0YS1uZXR3b3JrPScxJ1xuICAgICAgICA+PC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPSdtdC0xMCBmbGV4IHctZnVsbCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtc3RyZXRjaCBwLTggcGItNCBtZDpwYi04IHB4LTMgbWQ6cHgtOCc+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnLycpfVxuICAgICAgICAgIGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgY3Vyc29yLXBvaW50ZXIgcm91bmRlZC1sZyBib3JkZXItWzAuNXB4XSBweS0zIHB4LTUgaG92ZXI6dGV4dC1zbGF0ZS00MDAgaG92ZXI6Ymctc2xhdGUtOTAwIHRleHQtc20gdHJhY2tpbmctd2lkZXN0IG1kOnctWzIwMHB4XSdcbiAgICAgICAgPlxuICAgICAgICAgIEhPTUVcbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPENvbm5lY3QgbmV0d29yaz0nMScgLz5cbiAgICAgIDwvZGl2PiAqL31cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7fSxcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJDb25uZWN0IiwidXNlUm91dGVyIiwiQ2xhaW0iLCJyb3V0ZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJkYXRhLXdpZGdldCIsImRhdGEtaWQiLCJnZXRTdGF0aWNQcm9wcyIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/claim.jsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

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
var __webpack_exports__ = (__webpack_exec__("./pages/claim.jsx"));
module.exports = __webpack_exports__;

})();