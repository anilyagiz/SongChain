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

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @solana/wallet-adapter-base */ \"@solana/wallet-adapter-base\");\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"@solana/wallet-adapter-react\");\n/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @solana/wallet-adapter-react-ui */ \"@solana/wallet-adapter-react-ui\");\n/* harmony import */ var _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @solana/wallet-adapter-wallets */ \"@solana/wallet-adapter-wallets\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @solana/web3.js */ \"@solana/web3.js\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _gumhq_ui_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @gumhq/ui-components */ \"@gumhq/ui-components\");\n/* harmony import */ var _gumhq_ui_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_gumhq_ui_components__WEBPACK_IMPORTED_MODULE_8__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_3__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_5__, _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_6__]);\n([_solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_3__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_5__, _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\n__webpack_require__(/*! @solana/wallet-adapter-react-ui/styles.css */ \"./node_modules/@solana/wallet-adapter-react-ui/styles.css\");\nfunction MyApp({ Component , pageProps  }) {\n    // Can be set to 'devnet', 'testnet', or 'mainnet-beta'\n    const network = _solana_wallet_adapter_base__WEBPACK_IMPORTED_MODULE_3__.WalletAdapterNetwork.Devnet;\n    // You can also provide a custom RPC endpoint\n    const endpoint = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>(0,_solana_web3_js__WEBPACK_IMPORTED_MODULE_7__.clusterApiUrl)(network), [\n        network\n    ]);\n    const wallets = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>[\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_6__.PhantomWalletAdapter({\n                network\n            }),\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_6__.SlopeWalletAdapter(),\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_6__.SolflareWalletAdapter({\n                network\n            }),\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_6__.TorusWalletAdapter(),\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_6__.LedgerWalletAdapter(),\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_6__.SolletWalletAdapter({\n                network\n            }),\n            new _solana_wallet_adapter_wallets__WEBPACK_IMPORTED_MODULE_6__.SolletExtensionWalletAdapter({\n                network\n            })\n        ], [\n        network\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__.ConnectionProvider, {\n        endpoint: endpoint,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_4__.WalletProvider, {\n            wallets: wallets,\n            autoConnect: true,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_5__.WalletModalProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_gumhq_ui_components__WEBPACK_IMPORTED_MODULE_8__.GumUIProvider, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\my\\\\Desktop\\\\songchain\\\\pages\\\\_app.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\my\\\\Desktop\\\\songchain\\\\pages\\\\_app.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\my\\\\Desktop\\\\songchain\\\\pages\\\\_app.tsx\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\my\\\\Desktop\\\\songchain\\\\pages\\\\_app.tsx\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\my\\\\Desktop\\\\songchain\\\\pages\\\\_app.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBRVM7QUFFNEI7QUFDZTtBQUNaO0FBQ3VJO0FBQzdKO0FBRUs7QUFFckRlLG1CQUFPQSxDQUFDO0FBRVIsU0FBU0MsTUFBTSxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBWSxFQUFFO0lBQ2hELHVEQUF1RDtJQUN2RCxNQUFNQyxVQUFVakIsb0ZBQTJCO0lBRTNDLDZDQUE2QztJQUM3QyxNQUFNbUIsV0FBV3BCLDhDQUFPQSxDQUFDLElBQU1ZLDhEQUFhQSxDQUFDTSxVQUFVO1FBQUNBO0tBQVE7SUFFaEUsTUFBTUcsVUFBVXJCLDhDQUFPQSxDQUNuQixJQUFNO1lBRUYsSUFBSU0sZ0ZBQW9CQSxDQUFDO2dCQUFFWTtZQUFRO1lBQ25DLElBQUlYLDhFQUFrQkE7WUFDdEIsSUFBSUMsaUZBQXFCQSxDQUFDO2dCQUFFVTtZQUFRO1lBQ3BDLElBQUlQLDhFQUFrQkE7WUFDdEIsSUFBSU4sK0VBQW1CQTtZQUN2QixJQUFJSywrRUFBbUJBLENBQUM7Z0JBQUVRO1lBQVE7WUFDbEMsSUFBSVQsd0ZBQTRCQSxDQUFDO2dCQUFFUztZQUFRO1NBQzlDLEVBRUQ7UUFBQ0E7S0FBUTtJQUVkLHFCQUNFLDhEQUFDaEIsNEVBQWtCQTtRQUFDa0IsVUFBVUE7a0JBQzVCLDRFQUFDakIsd0VBQWNBO1lBQUNrQixTQUFTQTtZQUFTQyxXQUFXO3NCQUMzQyw0RUFBQ2xCLGdGQUFtQkE7MEJBQ2xCLDRFQUFDUywrREFBYUE7OEJBQ1osNEVBQUNHO3dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3BDO0FBRUEsaUVBQWVGLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFdhbGxldEFkYXB0ZXJOZXR3b3JrIH0gZnJvbSAnQHNvbGFuYS93YWxsZXQtYWRhcHRlci1iYXNlJztcbmltcG9ydCB7IENvbm5lY3Rpb25Qcm92aWRlciwgV2FsbGV0UHJvdmlkZXIgfSBmcm9tICdAc29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0JztcbmltcG9ydCB7IFdhbGxldE1vZGFsUHJvdmlkZXIgfSBmcm9tICdAc29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0LXVpJztcbmltcG9ydCB7IExlZGdlcldhbGxldEFkYXB0ZXIsIFBoYW50b21XYWxsZXRBZGFwdGVyLCBTbG9wZVdhbGxldEFkYXB0ZXIsIFNvbGZsYXJlV2FsbGV0QWRhcHRlciwgU29sbGV0RXh0ZW5zaW9uV2FsbGV0QWRhcHRlciwgU29sbGV0V2FsbGV0QWRhcHRlciwgVG9ydXNXYWxsZXRBZGFwdGVyIH0gZnJvbSAnQHNvbGFuYS93YWxsZXQtYWRhcHRlci13YWxsZXRzJztcbmltcG9ydCB7IGNsdXN0ZXJBcGlVcmwgfSBmcm9tICdAc29sYW5hL3dlYjMuanMnO1xuXG5pbXBvcnQgeyBHdW1VSVByb3ZpZGVyIH0gZnJvbSAnQGd1bWhxL3VpLWNvbXBvbmVudHMnO1xuXG5yZXF1aXJlKCdAc29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0LXVpL3N0eWxlcy5jc3MnKTtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICAgLy8gQ2FuIGJlIHNldCB0byAnZGV2bmV0JywgJ3Rlc3RuZXQnLCBvciAnbWFpbm5ldC1iZXRhJ1xuICAgY29uc3QgbmV0d29yayA9IFdhbGxldEFkYXB0ZXJOZXR3b3JrLkRldm5ldDtcblxuICAgLy8gWW91IGNhbiBhbHNvIHByb3ZpZGUgYSBjdXN0b20gUlBDIGVuZHBvaW50XG4gICBjb25zdCBlbmRwb2ludCA9IHVzZU1lbW8oKCkgPT4gY2x1c3RlckFwaVVybChuZXR3b3JrKSwgW25ldHdvcmtdKTtcblxuICAgY29uc3Qgd2FsbGV0cyA9IHVzZU1lbW8oXG4gICAgICAgKCkgPT4gW1xuICAgICAgICAgIFxuICAgICAgICAgICBuZXcgUGhhbnRvbVdhbGxldEFkYXB0ZXIoeyBuZXR3b3JrIH0pLFxuICAgICAgICAgICBuZXcgU2xvcGVXYWxsZXRBZGFwdGVyKCksXG4gICAgICAgICAgIG5ldyBTb2xmbGFyZVdhbGxldEFkYXB0ZXIoeyBuZXR3b3JrIH0pLFxuICAgICAgICAgICBuZXcgVG9ydXNXYWxsZXRBZGFwdGVyKCksXG4gICAgICAgICAgIG5ldyBMZWRnZXJXYWxsZXRBZGFwdGVyKCksXG4gICAgICAgICAgIG5ldyBTb2xsZXRXYWxsZXRBZGFwdGVyKHsgbmV0d29yayB9KSxcbiAgICAgICAgICAgbmV3IFNvbGxldEV4dGVuc2lvbldhbGxldEFkYXB0ZXIoeyBuZXR3b3JrIH0pLFxuICAgICAgIF0sXG4gICAgICAgXG4gICAgICAgW25ldHdvcmtdXG4gICApO1xuICByZXR1cm4gKFxuICAgIDxDb25uZWN0aW9uUHJvdmlkZXIgZW5kcG9pbnQ9e2VuZHBvaW50fT5cbiAgICAgIDxXYWxsZXRQcm92aWRlciB3YWxsZXRzPXt3YWxsZXRzfSBhdXRvQ29ubmVjdD5cbiAgICAgICAgPFdhbGxldE1vZGFsUHJvdmlkZXI+XG4gICAgICAgICAgPEd1bVVJUHJvdmlkZXI+XG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgPC9HdW1VSVByb3ZpZGVyPlxuICAgICAgICA8L1dhbGxldE1vZGFsUHJvdmlkZXI+XG4gICAgICA8L1dhbGxldFByb3ZpZGVyPlxuICAgIDwvQ29ubmVjdGlvblByb3ZpZGVyPilcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZU1lbW8iLCJXYWxsZXRBZGFwdGVyTmV0d29yayIsIkNvbm5lY3Rpb25Qcm92aWRlciIsIldhbGxldFByb3ZpZGVyIiwiV2FsbGV0TW9kYWxQcm92aWRlciIsIkxlZGdlcldhbGxldEFkYXB0ZXIiLCJQaGFudG9tV2FsbGV0QWRhcHRlciIsIlNsb3BlV2FsbGV0QWRhcHRlciIsIlNvbGZsYXJlV2FsbGV0QWRhcHRlciIsIlNvbGxldEV4dGVuc2lvbldhbGxldEFkYXB0ZXIiLCJTb2xsZXRXYWxsZXRBZGFwdGVyIiwiVG9ydXNXYWxsZXRBZGFwdGVyIiwiY2x1c3RlckFwaVVybCIsIkd1bVVJUHJvdmlkZXIiLCJyZXF1aXJlIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJuZXR3b3JrIiwiRGV2bmV0IiwiZW5kcG9pbnQiLCJ3YWxsZXRzIiwiYXV0b0Nvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./node_modules/@solana/wallet-adapter-react-ui/styles.css":
/*!*****************************************************************!*\
  !*** ./node_modules/@solana/wallet-adapter-react-ui/styles.css ***!
  \*****************************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@gumhq/ui-components":
/*!***************************************!*\
  !*** external "@gumhq/ui-components" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@gumhq/ui-components");

/***/ }),

/***/ "@solana/web3.js":
/*!**********************************!*\
  !*** external "@solana/web3.js" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@solana/web3.js");

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

/***/ }),

/***/ "@solana/wallet-adapter-base":
/*!**********************************************!*\
  !*** external "@solana/wallet-adapter-base" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-base");;

/***/ }),

/***/ "@solana/wallet-adapter-react":
/*!***********************************************!*\
  !*** external "@solana/wallet-adapter-react" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-react");;

/***/ }),

/***/ "@solana/wallet-adapter-react-ui":
/*!**************************************************!*\
  !*** external "@solana/wallet-adapter-react-ui" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-react-ui");;

/***/ }),

/***/ "@solana/wallet-adapter-wallets":
/*!*************************************************!*\
  !*** external "@solana/wallet-adapter-wallets" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-wallets");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();