"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Detail.jsx":
/*!*******************************!*\
  !*** ./components/Detail.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Detail; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll-parallax */ \"./node_modules/react-scroll-parallax/dist/react-scroll-parallax.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Detail(param) {\n    let { img  } = param;\n    _s();\n    const { ref  } = (0,react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__.useParallax)({\n        speed: -5\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-screen h-60 overflow-hidden\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-screen h-60\",\n            ref: ref,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                src: img,\n                //   width={2000}\n                //   height={500}\n                fill: true,\n                className: \"object-cover -translate-y-3\",\n                unoptimized: true\n            }, void 0, false, {\n                fileName: \"/Users/vitorbutkusaguiar/repos/auction-page2/components/Detail.jsx\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/vitorbutkusaguiar/repos/auction-page2/components/Detail.jsx\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/vitorbutkusaguiar/repos/auction-page2/components/Detail.jsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n_s(Detail, \"jQvQudpCTO/n9mc2B1es1lmoTYo=\", false, function() {\n    return [\n        react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__.useParallax\n    ];\n});\n_c = Detail;\nvar _c;\n$RefreshReg$(_c, \"Detail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0RldGFpbC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQStCO0FBQ3FCO0FBRXJDLFNBQVNFLE9BQU8sS0FBTyxFQUFFO1FBQVQsRUFBRUMsSUFBRyxFQUFFLEdBQVA7O0lBQzdCLE1BQU0sRUFBRUMsSUFBRyxFQUFFLEdBQUdILGtFQUFXQSxDQUFDO1FBQzFCSSxPQUFPLENBQUM7SUFDVjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVO1lBQWdCSCxLQUFLQTtzQkFDbEMsNEVBQUNKLG1EQUFLQTtnQkFDSlEsS0FBS0w7Z0JBQ0wsaUJBQWlCO2dCQUNqQixpQkFBaUI7Z0JBQ2pCTSxJQUFJO2dCQUNKRixXQUFVO2dCQUNWRyxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7O0FBS3JCLENBQUM7R0FuQnVCUjs7UUFDTkQsOERBQVdBOzs7S0FETEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EZXRhaWwuanN4P2NiZTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IHsgdXNlUGFyYWxsYXggfSBmcm9tICdyZWFjdC1zY3JvbGwtcGFyYWxsYXgnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZXRhaWwoeyBpbWcgfSkge1xuICBjb25zdCB7IHJlZiB9ID0gdXNlUGFyYWxsYXgoe1xuICAgIHNwZWVkOiAtNSxcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0ndy1zY3JlZW4gaC02MCBvdmVyZmxvdy1oaWRkZW4nPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3ctc2NyZWVuIGgtNjAnIHJlZj17cmVmfT5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgc3JjPXtpbWd9XG4gICAgICAgICAgLy8gICB3aWR0aD17MjAwMH1cbiAgICAgICAgICAvLyAgIGhlaWdodD17NTAwfVxuICAgICAgICAgIGZpbGxcbiAgICAgICAgICBjbGFzc05hbWU9J29iamVjdC1jb3ZlciAtdHJhbnNsYXRlLXktMydcbiAgICAgICAgICB1bm9wdGltaXplZFxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJ1c2VQYXJhbGxheCIsIkRldGFpbCIsImltZyIsInJlZiIsInNwZWVkIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwiZmlsbCIsInVub3B0aW1pemVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Detail.jsx\n"));

/***/ })

});