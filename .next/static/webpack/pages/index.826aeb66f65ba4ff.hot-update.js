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

/***/ "./components/header.tsx":
/*!*******************************!*\
  !*** ./components/header.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"./node_modules/@solana/wallet-adapter-react/lib/esm/index.js\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @solana/web3.js */ \"./node_modules/@solana/web3.js/lib/index.browser.esm.js\");\n/* harmony import */ var _hooks_useGumSDK__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks/useGumSDK */ \"./hooks/useGumSDK.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst WalletMultiButtonDynamic = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(async ()=>(await Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! @solana/wallet-adapter-react-ui */ \"./node_modules/@solana/wallet-adapter-react-ui/lib/esm/index.js\"))).WalletMultiButton, {\n    loadableGenerated: {\n        modules: [\n            \"..\\\\components\\\\header.tsx -> \" + \"@solana/wallet-adapter-react-ui\"\n        ]\n    },\n    ssr: false\n});\n_c = WalletMultiButtonDynamic;\nfunction header() {\n    _s();\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const wallet = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_7__.useWallet)();\n    const userPublicKey = wallet === null || wallet === void 0 ? void 0 : wallet.publicKey;\n    const connection = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>new _solana_web3_js__WEBPACK_IMPORTED_MODULE_5__.Connection(\"https://api.devnet.solana.com\", \"confirmed\"), []);\n    const sdk = (0,_hooks_useGumSDK__WEBPACK_IMPORTED_MODULE_6__.useGumSDK)(connection, {\n        preflightCommitment: \"confirmed\"\n    }, \"devnet\");\n    const handleClick = ()=>{\n        setActive(!active);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"flex items-center flex-wrap pb-10 pt-2 max-w-7xl \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative flex h-16 items-center justify-between\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    className: \"flex items-center gap-6 lg:px-0\",\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            className: \"\",\n                            src: \"/background.png\",\n                            alt: \" Logo\",\n                            width: 400,\n                            height: 400\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\my\\\\Desktop\\\\songchain\\\\components\\\\header.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\my\\\\Desktop\\\\songchain\\\\components\\\\header.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\my\\\\Desktop\\\\songchain\\\\components\\\\header.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\my\\\\Desktop\\\\songchain\\\\components\\\\header.tsx\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"inline-flex p-3 bg-blue-700 hover:bg-blue-800 rounded lg:hidden text-white ml-auto hover:text-white outline-none\",\n                onClick: handleClick,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    className: \"w-6 h-6\",\n                    fill: \"none\",\n                    stroke: \"currentColor\",\n                    viewBox: \"0 0 24 24\",\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                        strokeLinecap: \"round\",\n                        strokeLinejoin: \"round\",\n                        strokeWidth: 2,\n                        d: \"M4 6h16M4 12h16M4 18h16\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\my\\\\Desktop\\\\songchain\\\\components\\\\header.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\my\\\\Desktop\\\\songchain\\\\components\\\\header.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\my\\\\Desktop\\\\songchain\\\\components\\\\header.tsx\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat(active ? \"\" : \"hidden\", \"   w-full lg:inline-flex lg:flex-grow lg:w-auto md:pt-0 mt-4 bg-zinc-300 md:bg-zinc-50 p-4 rounded-xl \"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto pt-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"https://medium.com/@anill.yagiz/songchain-the-worlds-first-web3-social-music-platform-8d78342270f8\",\n                            target: \"_blank\",\n                            rel: \"noopener noreferrer\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"font-medium text-black hover:text-blue-700 transition-in duration-500 ease-out border-b-2 border-transparent hover:border-blue-700 px-3 mr-6 mb-3 md:mb-0\",\n                                children: \"About Us\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\my\\\\Desktop\\\\songchain\\\\components\\\\header.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\my\\\\Desktop\\\\songchain\\\\components\\\\header.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 21\n                        }, this),\n                        sdk && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-blue-700 text-white rounded-xl font-medium\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(WalletMultiButtonDynamic, {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\my\\\\Desktop\\\\songchain\\\\components\\\\header.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 29\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\my\\\\Desktop\\\\songchain\\\\components\\\\header.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\my\\\\Desktop\\\\songchain\\\\components\\\\header.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\my\\\\Desktop\\\\songchain\\\\components\\\\header.tsx\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\my\\\\Desktop\\\\songchain\\\\components\\\\header.tsx\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, this);\n}\n_s(header, \"6dMQpyS19GpVyyP1fyCLZ+hHfX4=\", false, function() {\n    return [\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_7__.useWallet,\n        _hooks_useGumSDK__WEBPACK_IMPORTED_MODULE_6__.useGumSDK\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(header));\nvar _c;\n$RefreshReg$(_c, \"WalletMultiButtonDynamic\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFnRDtBQUNqQjtBQUNGO0FBRUs7QUFDcUQ7QUFDL0I7QUFDVDtBQUUvQyxNQUFNUywyQkFBMkJKLG1EQUFPQSxDQUNwQyxVQUFZLENBQUMsTUFBTSw4TEFBd0MsRUFBR0ssaUJBQWlCOzs7Ozs7SUFDN0VDLEtBQUssS0FBSzs7S0FGVkY7QUFNTixTQUFTRyxTQUFTOztJQUNkLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHYiwrQ0FBUUEsQ0FBQyxLQUFLO0lBRTFDLE1BQU1jLFNBQVNULHVFQUFTQTtJQUN4QixNQUFNVSxnQkFBZ0JELG1CQUFBQSxvQkFBQUEsS0FBQUEsSUFBQUEsT0FBUUUsU0FBUztJQUN2QyxNQUFNQyxhQUFhaEIsOENBQU9BLENBQUMsSUFBTSxJQUFJSyx1REFBVUEsQ0FBQyxpQ0FBaUMsY0FBYyxFQUFFO0lBQ2pHLE1BQU1ZLE1BQU1YLDJEQUFTQSxDQUFDVSxZQUFZO1FBQUVFLHFCQUFxQjtJQUFZLEdBQUc7SUFFeEUsTUFBTUMsY0FBYyxJQUFNO1FBQ3RCUCxVQUFVLENBQUNEO0lBQ2Y7SUFDQSxxQkFDSSw4REFBQ1M7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNDO2dCQUFJRCxXQUFVOzBCQUNYLDRFQUFDbkIsa0RBQUlBO29CQUNEbUIsV0FBVTtvQkFDVkUsTUFBSzs4QkFFTCw0RUFBQ0Q7d0JBQUlELFdBQVU7a0NBQ1gsNEVBQUNwQixtREFBS0E7NEJBQUNvQixXQUFVOzRCQUFHRyxLQUFJOzRCQUFrQkMsS0FBSTs0QkFBUUMsT0FBTzs0QkFBS0MsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUt0Riw4REFBQ0M7Z0JBQ0RQLFdBQVU7Z0JBQ1ZRLFNBQVNWOzBCQUVMLDRFQUFDVztvQkFDR1QsV0FBVTtvQkFDVlUsTUFBSztvQkFDTEMsUUFBTztvQkFDUEMsU0FBUTtvQkFDUkMsT0FBTTs4QkFFTiw0RUFBQ0M7d0JBQ0RDLGVBQWM7d0JBQ2RDLGdCQUFlO3dCQUNmQyxhQUFhO3dCQUNiQyxHQUFFOzs7Ozs7Ozs7Ozs7Ozs7OzBCQUtWLDhEQUFDakI7Z0JBQ0RELFdBQVcsR0FFVixPQURHVixTQUFTLEtBQUssUUFBUSxFQUN6QjswQkFFRyw0RUFBQ1c7b0JBQUlELFdBQVU7O3NDQUNYLDhEQUFDbkIsa0RBQUlBOzRCQUFDcUIsTUFBSzs0QkFDUGlCLFFBQU87NEJBQ1BDLEtBQUk7c0NBQ0osNEVBQUNDO2dDQUFHckIsV0FBVTswQ0FDNEQ7Ozs7Ozs7Ozs7O3dCQUk1RUoscUJBQ0UsOERBQUNLOzRCQUFJRCxXQUFVO3NDQUNYLDRFQUFDZDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUzdCO0dBckVTRzs7UUFHVU4sbUVBQVNBO1FBR1pFLHVEQUFTQTs7O0FBa0V6Qiw0RUFBZVIsMkNBQUlBLENBQUNZLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIudHN4Pzg3MGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWVtbywgdXNlU3RhdGUsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgQ3JlYXRlVXNlciBmcm9tIFwiLi9jcmVhdGVVc2VyXCI7XG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXG5pbXBvcnQgeyBBbmNob3JXYWxsZXQsIHVzZUFuY2hvcldhbGxldCwgdXNlV2FsbGV0IH0gZnJvbSAnQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdCdcbmltcG9ydCB7IFB1YmxpY0tleSwgQ29ubmVjdGlvbiB9IGZyb20gXCJAc29sYW5hL3dlYjMuanNcIjtcbmltcG9ydCB7IHVzZUd1bVNESyB9IGZyb20gJy4uL2hvb2tzL3VzZUd1bVNESyc7XG5cbmNvbnN0IFdhbGxldE11bHRpQnV0dG9uRHluYW1pYyA9IGR5bmFtaWMoXG4gICAgYXN5bmMgKCkgPT4gKGF3YWl0IGltcG9ydCgnQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdC11aScpKS5XYWxsZXRNdWx0aUJ1dHRvbixcbiAgICB7IHNzcjogZmFsc2UgfVxuKTtcblxuXG5mdW5jdGlvbiBoZWFkZXIoKSB7XG4gICAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IHdhbGxldCA9IHVzZVdhbGxldCgpO1xuICAgIGNvbnN0IHVzZXJQdWJsaWNLZXkgPSB3YWxsZXQ/LnB1YmxpY0tleSBhcyBQdWJsaWNLZXk7XG4gICAgY29uc3QgY29ubmVjdGlvbiA9IHVzZU1lbW8oKCkgPT4gbmV3IENvbm5lY3Rpb24oXCJodHRwczovL2FwaS5kZXZuZXQuc29sYW5hLmNvbVwiLCBcImNvbmZpcm1lZFwiKSwgW10pO1xuICAgIGNvbnN0IHNkayA9IHVzZUd1bVNESyhjb25uZWN0aW9uLCB7IHByZWZsaWdodENvbW1pdG1lbnQ6IFwiY29uZmlybWVkXCIgfSwgXCJkZXZuZXRcIik7XG5cbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICAgICAgc2V0QWN0aXZlKCFhY3RpdmUpO1xuICAgIH07XG4gICAgcmV0dXJuKFxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGZsZXgtd3JhcCBwYi0xMCBwdC0yICBtYXgtdy03eGwgXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVsYXRpdmUgZmxleCBoLTE2IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4nPlxuICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC02IGxnOnB4LTBcIlxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiL1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPVwiXCIgc3JjPVwiL2JhY2tncm91bmQucG5nXCIgYWx0PVwiIExvZ29cIiB3aWR0aD17NDAwfSBoZWlnaHQ9ezQwMH0vPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9J2lubGluZS1mbGV4IHAtMyBiZy1ibHVlLTcwMCBob3ZlcjpiZy1ibHVlLTgwMCByb3VuZGVkIGxnOmhpZGRlbiB0ZXh0LXdoaXRlIG1sLWF1dG8gaG92ZXI6dGV4dC13aGl0ZSBvdXRsaW5lLW5vbmUnXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndy02IGgtNidcbiAgICAgICAgICAgICAgICAgICAgZmlsbD0nbm9uZSdcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPSdjdXJyZW50Q29sb3InXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9JzAgMCAyNCAyNCdcbiAgICAgICAgICAgICAgICAgICAgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJ1xuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD0ncm91bmQnXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPSdyb3VuZCdcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XG4gICAgICAgICAgICAgICAgICAgIGQ9J000IDZoMTZNNCAxMmgxNk00IDE4aDE2J1xuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XG4gICAgICAgICAgICAgICAgYWN0aXZlID8gJycgOiAnaGlkZGVuJ1xuICAgICAgICAgICAgfSAgIHctZnVsbCBsZzppbmxpbmUtZmxleCBsZzpmbGV4LWdyb3cgbGc6dy1hdXRvIG1kOnB0LTAgbXQtNCBiZy16aW5jLTMwMCBtZDpiZy16aW5jLTUwIHAtNCByb3VuZGVkLXhsIGB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xnOmlubGluZS1mbGV4IGxnOmZsZXgtcm93IGxnOm1sLWF1dG8gbGc6dy1hdXRvIHctZnVsbCBsZzppdGVtcy1jZW50ZXIgaXRlbXMtc3RhcnQgIGZsZXggZmxleC1jb2wgbGc6aC1hdXRvIHB0LTInPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly9tZWRpdW0uY29tL0BhbmlsbC55YWdpei9zb25nY2hhaW4tdGhlLXdvcmxkcy1maXJzdC13ZWIzLXNvY2lhbC1tdXNpYy1wbGF0Zm9ybS04ZDc4MzQyMjcwZjhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LW1lZGl1bSB0ZXh0LWJsYWNrIGhvdmVyOnRleHQtYmx1ZS03MDAgdHJhbnNpdGlvbi1pbiBkdXJhdGlvbi01MDAgZWFzZS1vdXQgXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWItMiBib3JkZXItdHJhbnNwYXJlbnQgaG92ZXI6Ym9yZGVyLWJsdWUtNzAwIHB4LTMgbXItNiBtYi0zIG1kOm1iLTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBYm91dCBVc1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICB7IHNkayAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmctYmx1ZS03MDAgdGV4dC13aGl0ZSByb3VuZGVkLXhsIGZvbnQtbWVkaXVtJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V2FsbGV0TXVsdGlCdXR0b25EeW5hbWljICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L25hdj5cbiAgICApO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IG1lbW8oaGVhZGVyKTsiXSwibmFtZXMiOlsibWVtbyIsInVzZVN0YXRlIiwidXNlTWVtbyIsIkltYWdlIiwiTGluayIsImR5bmFtaWMiLCJ1c2VXYWxsZXQiLCJDb25uZWN0aW9uIiwidXNlR3VtU0RLIiwiV2FsbGV0TXVsdGlCdXR0b25EeW5hbWljIiwiV2FsbGV0TXVsdGlCdXR0b24iLCJzc3IiLCJoZWFkZXIiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJ3YWxsZXQiLCJ1c2VyUHVibGljS2V5IiwicHVibGljS2V5IiwiY29ubmVjdGlvbiIsInNkayIsInByZWZsaWdodENvbW1pdG1lbnQiLCJoYW5kbGVDbGljayIsIm5hdiIsImNsYXNzTmFtZSIsImRpdiIsImhyZWYiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzdmciLCJmaWxsIiwic3Ryb2tlIiwidmlld0JveCIsInhtbG5zIiwicGF0aCIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VMaW5lam9pbiIsInN0cm9rZVdpZHRoIiwiZCIsInRhcmdldCIsInJlbCIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/header.tsx\n"));

/***/ })

});