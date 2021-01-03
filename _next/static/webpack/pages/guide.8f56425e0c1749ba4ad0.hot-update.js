webpackHotUpdate_N_E("pages/guide",{

/***/ "./components/Card.js":
/*!****************************!*\
  !*** ./components/Card.js ***!
  \****************************/
/*! exports provided: SystemCard, MediaCard, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SystemCard\", function() { return SystemCard; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MediaCard\", function() { return MediaCard; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rebass */ \"./node_modules/rebass/dist/index.esm.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Utils */ \"./components/Utils.js\");\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Button */ \"./components/Button.js\");\n\nvar _jsxFileName = \"/Users/philipdavis/Documents/swiftui-for-designers/next-app/components/Card.js\";\n\n // import Image from \"next/image\";\n\n\n\n\n\nvar Card = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(rebass__WEBPACK_IMPORTED_MODULE_3__[\"Box\"]).withConfig({\n  displayName: \"Card\",\n  componentId: \"sc-1i4q32e-0\"\n})([\"background-color:\", \";/ display:inline-block;overflow:hidden;& img{border-radius:8px;}\"], _Utils__WEBPACK_IMPORTED_MODULE_5__[\"colors\"].surfaceBackground);\n_c = Card;\nfunction SystemCard(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(rebass__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n    width: [1, 1 / 3],\n    p: [0, 2],\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Card, {\n      width: [1],\n      p: \"24px\",\n      sx: {\n        borderRadius: \"16px\",\n        boxShadow: \"inset 0 0 0 2px \".concat(_Utils__WEBPACK_IMPORTED_MODULE_5__[\"colors\"].cardShadow, \", 0 8px 8px -6px \").concat(_Utils__WEBPACK_IMPORTED_MODULE_5__[\"colors\"].cardShadow, \";\")\n      },\n      textAlign: \"center\",\n      mb: [3, 2],\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(rebass__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], {\n        mb: -2,\n        fontSize: 3,\n        fontWeight: \"600\",\n        children: props.label\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(rebass__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], {\n        mb: 2,\n        color: _Utils__WEBPACK_IMPORTED_MODULE_5__[\"colors\"].primaryText,\n        fontSize: 6,\n        fontWeight: \"bold\",\n        children: props.version\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Button__WEBPACK_IMPORTED_MODULE_6__[\"Btn\"], {\n        color: \"lightRed\",\n        display: \"block\",\n        children: props.button\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 5\n  }, this);\n}\n_c2 = SystemCard;\nfunction MediaCard(props) {\n  var _props$color = props.color,\n      color = _props$color === void 0 ? \"lightBlue\" : _props$color,\n      _props$url = props.url,\n      url = _props$url === void 0 ? \"#\" : _props$url;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(rebass__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n    width: [1, 1 / 2],\n    m: 0,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Card, {\n      mb: 5,\n      mx: [0, 3],\n      p: 0,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(rebass__WEBPACK_IMPORTED_MODULE_3__[\"Image\"], {\n        width: \"400\",\n        height: \"200\",\n        src: props.src\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(rebass__WEBPACK_IMPORTED_MODULE_3__[\"Box\"], {\n        pt: 20,\n        px: \"6px\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(rebass__WEBPACK_IMPORTED_MODULE_3__[\"Text\"], {\n          color: _Utils__WEBPACK_IMPORTED_MODULE_5__[\"colors\"].primaryText,\n          fontSize: 3,\n          mt: -3,\n          mb: 2,\n          fontWeight: \"600\",\n          children: props.label\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(rebass__WEBPACK_IMPORTED_MODULE_3__[\"Flex\"], {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n            href: url,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              target: \"_blank\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Button__WEBPACK_IMPORTED_MODULE_6__[\"Btn\"], {\n                color: color,\n                children: props.button\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 66,\n                columnNumber: 17\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 65,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 64,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 50,\n    columnNumber: 5\n  }, this);\n}\n_c3 = MediaCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Card\");\n$RefreshReg$(_c2, \"SystemCard\");\n$RefreshReg$(_c3, \"MediaCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkLmpzP2RjY2IiXSwibmFtZXMiOlsiQ2FyZCIsInN0eWxlZCIsIkJveCIsImNvbG9ycyIsInN1cmZhY2VCYWNrZ3JvdW5kIiwiU3lzdGVtQ2FyZCIsInByb3BzIiwiYm9yZGVyUmFkaXVzIiwiYm94U2hhZG93IiwiY2FyZFNoYWRvdyIsImxhYmVsIiwicHJpbWFyeVRleHQiLCJ2ZXJzaW9uIiwiYnV0dG9uIiwiTWVkaWFDYXJkIiwiY29sb3IiLCJ1cmwiLCJzcmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLGlFQUFNLENBQUNDLDBDQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsK0ZBQ1lDLDZDQUFNLENBQUNDLGlCQURuQixDQUFWO0tBQU1KLEk7QUFVQyxTQUFTSyxVQUFULENBQW9CQyxLQUFwQixFQUEyQjtBQUNoQyxzQkFDRSxxRUFBQywwQ0FBRDtBQUFLLFNBQUssRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFJLENBQVIsQ0FBWjtBQUF3QixLQUFDLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUEzQjtBQUFBLDJCQUNFLHFFQUFDLElBQUQ7QUFDRSxXQUFLLEVBQUUsQ0FBQyxDQUFELENBRFQ7QUFFRSxPQUFDLEVBQUUsTUFGTDtBQUdFLFFBQUUsRUFBRTtBQUNGQyxvQkFBWSxFQUFFLE1BRFo7QUFFRkMsaUJBQVMsNEJBQXFCTCw2Q0FBTSxDQUFDTSxVQUE1Qiw4QkFBMEROLDZDQUFNLENBQUNNLFVBQWpFO0FBRlAsT0FITjtBQU9FLGVBQVMsRUFBQyxRQVBaO0FBUUUsUUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FSTjtBQUFBLDhCQVVFLHFFQUFDLDJDQUFEO0FBQU0sVUFBRSxFQUFFLENBQUMsQ0FBWDtBQUFjLGdCQUFRLEVBQUUsQ0FBeEI7QUFBMkIsa0JBQVUsRUFBQyxLQUF0QztBQUFBLGtCQUNHSCxLQUFLLENBQUNJO0FBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZGLGVBYUUscUVBQUMsMkNBQUQ7QUFBTSxVQUFFLEVBQUUsQ0FBVjtBQUFhLGFBQUssRUFBRVAsNkNBQU0sQ0FBQ1EsV0FBM0I7QUFBd0MsZ0JBQVEsRUFBRSxDQUFsRDtBQUFxRCxrQkFBVSxFQUFDLE1BQWhFO0FBQUEsa0JBQ0dMLEtBQUssQ0FBQ007QUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBYkYsZUFpQkUscUVBQUMsMkNBQUQ7QUFBSyxhQUFLLEVBQUMsVUFBWDtBQUFzQixlQUFPLEVBQUMsT0FBOUI7QUFBQSxrQkFDR04sS0FBSyxDQUFDTztBQURUO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBeUJEO01BMUJlUixVO0FBNEJULFNBQVNTLFNBQVQsQ0FBbUJSLEtBQW5CLEVBQTBCO0FBQUEscUJBQ1VBLEtBRFYsQ0FDekJTLEtBRHlCO0FBQUEsTUFDekJBLEtBRHlCLDZCQUNqQixXQURpQjtBQUFBLG1CQUNVVCxLQURWLENBQ0pVLEdBREk7QUFBQSxNQUNKQSxHQURJLDJCQUNFLEdBREY7QUFFL0Isc0JBQ0UscUVBQUMsMENBQUQ7QUFBSyxTQUFLLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSSxDQUFSLENBQVo7QUFBd0IsS0FBQyxFQUFFLENBQTNCO0FBQUEsMkJBQ0UscUVBQUMsSUFBRDtBQUFNLFFBQUUsRUFBRSxDQUFWO0FBQWEsUUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBakI7QUFBeUIsT0FBQyxFQUFFLENBQTVCO0FBQUEsOEJBQ0UscUVBQUMsNENBQUQ7QUFBTyxhQUFLLEVBQUMsS0FBYjtBQUFtQixjQUFNLEVBQUMsS0FBMUI7QUFBZ0MsV0FBRyxFQUFFVixLQUFLLENBQUNXO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLHFFQUFDLDBDQUFEO0FBQUssVUFBRSxFQUFFLEVBQVQ7QUFBYSxVQUFFLEVBQUUsS0FBakI7QUFBQSxnQ0FDRSxxRUFBQywyQ0FBRDtBQUNFLGVBQUssRUFBRWQsNkNBQU0sQ0FBQ1EsV0FEaEI7QUFFRSxrQkFBUSxFQUFFLENBRlo7QUFHRSxZQUFFLEVBQUUsQ0FBQyxDQUhQO0FBSUUsWUFBRSxFQUFFLENBSk47QUFLRSxvQkFBVSxFQUFDLEtBTGI7QUFBQSxvQkFPR0wsS0FBSyxDQUFDSTtBQVBUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFVRSxxRUFBQywyQ0FBRDtBQUFBLGlDQUNFLHFFQUFDLGdEQUFEO0FBQU0sZ0JBQUksRUFBRU0sR0FBWjtBQUFBLG1DQUNFO0FBQUcsb0JBQU0sRUFBQyxRQUFWO0FBQUEscUNBQ0UscUVBQUMsMkNBQUQ7QUFBSyxxQkFBSyxFQUFFRCxLQUFaO0FBQUEsMEJBQW9CVCxLQUFLLENBQUNPO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBeUJEO01BM0JlQyxTO0FBNkJEZCxtRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ2FyZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbi8vIGltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgQm94LCBUZXh0LCBGbGV4LCBJbWFnZSB9IGZyb20gXCJyZWJhc3NcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tIFwiLi9VdGlsc1wiO1xuaW1wb3J0IHsgQnRuIH0gZnJvbSBcIi4vQnV0dG9uXCI7XG5cbmNvbnN0IENhcmQgPSBzdHlsZWQoQm94KWBcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcnMuc3VyZmFjZUJhY2tncm91bmR9Oy9cbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICYgaW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBmdW5jdGlvbiBTeXN0ZW1DYXJkKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPEJveCB3aWR0aD17WzEsIDEgLyAzXX0gcD17WzAsIDJdfT5cbiAgICAgIDxDYXJkXG4gICAgICAgIHdpZHRoPXtbMV19XG4gICAgICAgIHA9e1wiMjRweFwifVxuICAgICAgICBzeD17e1xuICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxNnB4XCIsXG4gICAgICAgICAgYm94U2hhZG93OiBgaW5zZXQgMCAwIDAgMnB4ICR7Y29sb3JzLmNhcmRTaGFkb3d9LCAwIDhweCA4cHggLTZweCAke2NvbG9ycy5jYXJkU2hhZG93fTtgLFxuICAgICAgICB9fVxuICAgICAgICB0ZXh0QWxpZ249XCJjZW50ZXJcIlxuICAgICAgICBtYj17WzMsIDJdfVxuICAgICAgPlxuICAgICAgICA8VGV4dCBtYj17LTJ9IGZvbnRTaXplPXszfSBmb250V2VpZ2h0PVwiNjAwXCI+XG4gICAgICAgICAge3Byb3BzLmxhYmVsfVxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxUZXh0IG1iPXsyfSBjb2xvcj17Y29sb3JzLnByaW1hcnlUZXh0fSBmb250U2l6ZT17Nn0gZm9udFdlaWdodD1cImJvbGRcIj5cbiAgICAgICAgICB7cHJvcHMudmVyc2lvbn1cbiAgICAgICAgPC9UZXh0PlxuXG4gICAgICAgIDxCdG4gY29sb3I9XCJsaWdodFJlZFwiIGRpc3BsYXk9XCJibG9ja1wiPlxuICAgICAgICAgIHtwcm9wcy5idXR0b259XG4gICAgICAgIDwvQnRuPlxuICAgICAgPC9DYXJkPlxuICAgIDwvQm94PlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gTWVkaWFDYXJkKHByb3BzKSB7XG4gIGxldCB7IGNvbG9yID0gXCJsaWdodEJsdWVcIiwgdXJsID0gXCIjXCIgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxCb3ggd2lkdGg9e1sxLCAxIC8gMl19IG09ezB9PlxuICAgICAgPENhcmQgbWI9ezV9IG14PXtbMCwgM119IHA9ezB9PlxuICAgICAgICA8SW1hZ2Ugd2lkdGg9XCI0MDBcIiBoZWlnaHQ9XCIyMDBcIiBzcmM9e3Byb3BzLnNyY30gLz5cbiAgICAgICAgPEJveCBwdD17MjB9IHB4PXtcIjZweFwifT5cbiAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgY29sb3I9e2NvbG9ycy5wcmltYXJ5VGV4dH1cbiAgICAgICAgICAgIGZvbnRTaXplPXszfVxuICAgICAgICAgICAgbXQ9ey0zfVxuICAgICAgICAgICAgbWI9ezJ9XG4gICAgICAgICAgICBmb250V2VpZ2h0PVwiNjAwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7cHJvcHMubGFiZWx9XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDxGbGV4PlxuICAgICAgICAgICAgPExpbmsgaHJlZj17dXJsfT5cbiAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgPEJ0biBjb2xvcj17Y29sb3J9Pntwcm9wcy5idXR0b259PC9CdG4+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9DYXJkPlxuICAgIDwvQm94PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Card.js\n");

/***/ })

})