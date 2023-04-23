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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Claim)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Connect */ \"./components/Connect.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Claim() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-full justify-between items-stretch p-8 pb-4 md:pb-8 px-3 md:px-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: ()=>router.push(\"/\"),\n                        className: \"flex justify-center items-center cursor-pointer rounded-lg border-[0.5px] py-3 px-5 md:px-8 hover:text-slate-400 hover:bg-slate-900 text-sm tracking-widest md:w-[200px]\",\n                        children: \"HOME\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vitorbutkusaguiar/repos/auction-page2/pages/claim.jsx\",\n                        lineNumber: 11,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Connect__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        network: \"1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vitorbutkusaguiar/repos/auction-page2/pages/claim.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vitorbutkusaguiar/repos/auction-page2/pages/claim.jsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w-[1100px] mx-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    \"data-widget\": \"m-claim-complete\",\n                    \"data-id\": \"1045020912\"\n                }, void 0, false, {\n                    fileName: \"/Users/vitorbutkusaguiar/repos/auction-page2/pages/claim.jsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/vitorbutkusaguiar/repos/auction-page2/pages/claim.jsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-10 flex w-full justify-between items-stretch p-8 pb-4 md:pb-8 px-3 md:px-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: ()=>router.push(\"/\"),\n                        className: \"flex justify-center items-center cursor-pointer rounded-lg border-[0.5px] py-3 px-5 hover:text-slate-400 hover:bg-slate-900 text-sm tracking-widest md:w-[200px]\",\n                        children: \"HOME\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vitorbutkusaguiar/repos/auction-page2/pages/claim.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Connect__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        network: \"1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vitorbutkusaguiar/repos/auction-page2/pages/claim.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vitorbutkusaguiar/repos/auction-page2/pages/claim.jsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vitorbutkusaguiar/repos/auction-page2/pages/claim.jsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jbGFpbS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBNEM7QUFDSjtBQUV6QixTQUFTRSxRQUFRO0lBQzlCLE1BQU1DLFNBQVNGLHNEQUFTQTtJQUV4QixxQkFDRSw4REFBQ0c7UUFBSUMsV0FBVTs7MEJBRWIsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQ0NFLFNBQVMsSUFBTUgsT0FBT0ksSUFBSSxDQUFDO3dCQUMzQkYsV0FBVTtrQ0FDWDs7Ozs7O2tDQUlELDhEQUFDTCwyREFBT0E7d0JBQUNRLFNBQVE7Ozs7Ozs7Ozs7OzswQkFJbkIsOERBQUNKO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFDQ0ssZUFBWTtvQkFDWkMsV0FBUTs7Ozs7Ozs7Ozs7MEJBS1osOERBQUNOO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQ0NFLFNBQVMsSUFBTUgsT0FBT0ksSUFBSSxDQUFDO3dCQUMzQkYsV0FBVTtrQ0FDWDs7Ozs7O2tDQUlELDhEQUFDTCwyREFBT0E7d0JBQUNRLFNBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUl6QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFuaWZvbGQtd2lkZ2V0cy1uZXh0anMtdGVtcGxhdGUvLi9wYWdlcy9jbGFpbS5qc3g/OTQwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29ubmVjdCBmcm9tICcuLi9jb21wb25lbnRzL0Nvbm5lY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDbGFpbSgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0ndy1zY3JlZW4nPlxuICAgICAgey8qIC0tIEFkZCBDb25uZWN0IFdpZGdldCAtLSAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IHctZnVsbCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtc3RyZXRjaCBwLTggcGItNCBtZDpwYi04IHB4LTMgbWQ6cHgtOCc+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnLycpfVxuICAgICAgICAgIGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgY3Vyc29yLXBvaW50ZXIgcm91bmRlZC1sZyBib3JkZXItWzAuNXB4XSBweS0zIHB4LTUgbWQ6cHgtOCBob3Zlcjp0ZXh0LXNsYXRlLTQwMCBob3ZlcjpiZy1zbGF0ZS05MDAgdGV4dC1zbSB0cmFja2luZy13aWRlc3QgbWQ6dy1bMjAwcHhdJ1xuICAgICAgICA+XG4gICAgICAgICAgSE9NRVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8Q29ubmVjdCBuZXR3b3JrPScxJyAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiB+fiBBZGQgQ2xhaW0gV2lkZ2V0IGNvbXBvbmVudCB+fiAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYXgtdy1bMTEwMHB4XSBteC1hdXRvJz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGRhdGEtd2lkZ2V0PSdtLWNsYWltLWNvbXBsZXRlJ1xuICAgICAgICAgIGRhdGEtaWQ9JzEwNDUwMjA5MTInXG4gICAgICAgICAgLy8gICBkYXRhLW5ldHdvcms9JzEnXG4gICAgICAgID48L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbXQtMTAgZmxleCB3LWZ1bGwganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLXN0cmV0Y2ggcC04IHBiLTQgbWQ6cGItOCBweC0zIG1kOnB4LTgnPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy8nKX1cbiAgICAgICAgICBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGN1cnNvci1wb2ludGVyIHJvdW5kZWQtbGcgYm9yZGVyLVswLjVweF0gcHktMyBweC01IGhvdmVyOnRleHQtc2xhdGUtNDAwIGhvdmVyOmJnLXNsYXRlLTkwMCB0ZXh0LXNtIHRyYWNraW5nLXdpZGVzdCBtZDp3LVsyMDBweF0nXG4gICAgICAgID5cbiAgICAgICAgICBIT01FXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxDb25uZWN0IG5ldHdvcms9JzEnIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJDb25uZWN0IiwidXNlUm91dGVyIiwiQ2xhaW0iLCJyb3V0ZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwicHVzaCIsIm5ldHdvcmsiLCJkYXRhLXdpZGdldCIsImRhdGEtaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/claim.jsx\n");

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