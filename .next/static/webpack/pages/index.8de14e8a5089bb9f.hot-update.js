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

/***/ "./Components/ListItems.js":
/*!*********************************!*\
  !*** ./Components/ListItems.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst PostListing = (param)=>{\n    let { posts } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        sx: {\n            bgcolor: \"#f6f6f605\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Latest posts\"\n            }, void 0, false, {\n                fileName: \"D:\\\\next\\\\posts\\\\Components\\\\ListItems.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, undefined),\n            posts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: post.title\n                        }, void 0, false, {\n                            fileName: \"D:\\\\next\\\\posts\\\\Components\\\\ListItems.js\",\n                            lineNumber: 14,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            loading: \"lazy\",\n                            src: post.image,\n                            alt: post.title,\n                            width: 100\n                        }, void 0, false, {\n                            fileName: \"D:\\\\next\\\\posts\\\\Components\\\\ListItems.js\",\n                            lineNumber: 15,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: post.description\n                        }, void 0, false, {\n                            fileName: \"D:\\\\next\\\\posts\\\\Components\\\\ListItems.js\",\n                            lineNumber: 16,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, post.id, true, {\n                    fileName: \"D:\\\\next\\\\posts\\\\Components\\\\ListItems.js\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, undefined))\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\next\\\\posts\\\\Components\\\\ListItems.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, undefined);\n};\n_c = PostListing;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostListing);\nvar _c;\n$RefreshReg$(_c, \"PostListing\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL0xpc3RJdGVtcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQW9DO0FBQ1Y7QUFFMUIsTUFBTUUsY0FBYztRQUFDLEVBQUVDLEtBQUssRUFBRTtJQUM1QixxQkFDRSw4REFBQ0gsOENBQUdBO1FBQUNJLElBQ0Q7WUFDSUMsU0FBUztRQUNiOzswQkFFRiw4REFBQ0M7MEJBQUc7Ozs7OztZQUNISCxNQUFNSSxHQUFHLENBQUMsQ0FBQ0MscUJBQ1YsOERBQUNDOztzQ0FDQyw4REFBQ0M7c0NBQUlGLEtBQUtHLEtBQUs7Ozs7OztzQ0FDZiw4REFBQ0M7NEJBQUlDLFNBQVE7NEJBQU9DLEtBQUtOLEtBQUtPLEtBQUs7NEJBQUVDLEtBQUtSLEtBQUtHLEtBQUs7NEJBQUdNLE9BQU87Ozs7OztzQ0FDOUQsOERBQUNDO3NDQUFHVixLQUFLVyxXQUFXOzs7Ozs7O21CQUhaWCxLQUFLWSxFQUFFOzs7Ozs7Ozs7OztBQVF6QjtLQWpCTWxCO0FBbUJOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL0NvbXBvbmVudHMvTGlzdEl0ZW1zLmpzPzQ4ZGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94IH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBQb3N0TGlzdGluZyA9ICh7IHBvc3RzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBzeD17XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBiZ2NvbG9yOiAnI2Y2ZjZmNjA1J1xyXG4gICAgICAgIH1cclxuICAgIH0+XHJcbiAgICAgIDxoMj5MYXRlc3QgcG9zdHM8L2gyPlxyXG4gICAgICB7cG9zdHMubWFwKChwb3N0KSA9PiAoXHJcbiAgICAgICAgPGRpdiBrZXk9e3Bvc3QuaWR9PlxyXG4gICAgICAgICAgPGgzPntwb3N0LnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICA8aW1nIGxvYWRpbmc9XCJsYXp5XCIgc3JjPXtwb3N0LmltYWdlfSBhbHQ9e3Bvc3QudGl0bGV9ICB3aWR0aD17MTAwfS8+XHJcbiAgICAgICAgICA8cD57cG9zdC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RMaXN0aW5nOyJdLCJuYW1lcyI6WyJCb3giLCJSZWFjdCIsIlBvc3RMaXN0aW5nIiwicG9zdHMiLCJzeCIsImJnY29sb3IiLCJoMiIsIm1hcCIsInBvc3QiLCJkaXYiLCJoMyIsInRpdGxlIiwiaW1nIiwibG9hZGluZyIsInNyYyIsImltYWdlIiwiYWx0Iiwid2lkdGgiLCJwIiwiZGVzY3JpcHRpb24iLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/ListItems.js\n"));

/***/ })

});