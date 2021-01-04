webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Head.js":
/*!****************************!*\
  !*** ./components/Head.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-seo */ \"./node_modules/next-seo/lib/next-seo.module.js\");\n\n\nvar _jsxFileName = \"/Users/philipdavis/Documents/swiftui-for-designers/next-app/components/Head.js\";\n\n\n\n\nvar Head = function Head(props) {\n  var title = props.title ? props.title : \"SwiftUI for Designers\";\n  var description = props.description ? props.description : \"SwiftUI is a powerful tool for designers. You don't need to be a 10x engineer to get a lot from the framework.\";\n  var image = props.image ? props.image : \"https://swiftui.design/og.png\";\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        type: \"image/svg+xml\",\n        href: \"/icon.svg\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"apple-touch-icon\",\n        href: \"/icon.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"mask-icon\",\n        href: \"/icon.svg\",\n        color: \"#5D626E\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"viewport\",\n        content: \"initial-scale=1.0, width=device-width\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_seo__WEBPACK_IMPORTED_MODULE_3__[\"NextSeo\"], {\n      title: title,\n      description: description,\n      openGraph: {\n        title: title,\n        description: description,\n        images: [{\n          url: image\n        }],\n        site_name: \"SwiftUI for Designers\"\n      },\n      twitter: {\n        handle: \"@philipcdavis\",\n        cardType: \"summary_large_image\"\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n};\n\n_c = Head;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Head);\n\nvar _c;\n\n$RefreshReg$(_c, \"Head\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkLmpzP2RhOWMiXSwibmFtZXMiOlsiSGVhZCIsInByb3BzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwiaW1hZ2VzIiwidXJsIiwic2l0ZV9uYW1lIiwiaGFuZGxlIiwiY2FyZFR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQVVDLEtBQVYsRUFBaUI7QUFDNUIsTUFBTUMsS0FBSyxHQUFHRCxLQUFLLENBQUNDLEtBQU4sR0FBY0QsS0FBSyxDQUFDQyxLQUFwQixHQUE0Qix1QkFBMUM7QUFDQSxNQUFNQyxXQUFXLEdBQUdGLEtBQUssQ0FBQ0UsV0FBTixHQUNoQkYsS0FBSyxDQUFDRSxXQURVLEdBRWhCLGdIQUZKO0FBR0EsTUFBTUMsS0FBSyxHQUFHSCxLQUFLLENBQUNHLEtBQU4sR0FBY0gsS0FBSyxDQUFDRyxLQUFwQixHQUE0QiwrQkFBMUM7QUFDQSxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0U7QUFBTSxXQUFHLEVBQUMsTUFBVjtBQUFpQixZQUFJLEVBQUMsZUFBdEI7QUFBc0MsWUFBSSxFQUFDO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU0sV0FBRyxFQUFDLGtCQUFWO0FBQTZCLFlBQUksRUFBQztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRTtBQUFNLFdBQUcsRUFBQyxXQUFWO0FBQXNCLFlBQUksRUFBQyxXQUEzQjtBQUF1QyxhQUFLLEVBQUM7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGLGVBSUU7QUFBTSxZQUFJLEVBQUMsVUFBWDtBQUFzQixlQUFPLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBT0UscUVBQUMsZ0RBQUQ7QUFDRSxXQUFLLEVBQUVGLEtBRFQ7QUFFRSxpQkFBVyxFQUFFQyxXQUZmO0FBR0UsZUFBUyxFQUFFO0FBQ1RELGFBQUssRUFBRUEsS0FERTtBQUVUQyxtQkFBVyxFQUFFQSxXQUZKO0FBR1RFLGNBQU0sRUFBRSxDQUNOO0FBQ0VDLGFBQUcsRUFBRUY7QUFEUCxTQURNLENBSEM7QUFRVEcsaUJBQVMsRUFBRTtBQVJGLE9BSGI7QUFhRSxhQUFPLEVBQUU7QUFDUEMsY0FBTSxFQUFFLGVBREQ7QUFFUEMsZ0JBQVEsRUFBRTtBQUZIO0FBYlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBGO0FBQUEsa0JBREY7QUE0QkQsQ0FsQ0Q7O0tBQU1ULEk7QUFvQ1NBLG1FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9IZWFkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE5leHRIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IE5leHRTZW8gfSBmcm9tIFwibmV4dC1zZW9cIjtcblxuY29uc3QgSGVhZCA9IGZ1bmN0aW9uIChwcm9wcykge1xuICBjb25zdCB0aXRsZSA9IHByb3BzLnRpdGxlID8gcHJvcHMudGl0bGUgOiBcIlN3aWZ0VUkgZm9yIERlc2lnbmVyc1wiO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IHByb3BzLmRlc2NyaXB0aW9uXG4gICAgPyBwcm9wcy5kZXNjcmlwdGlvblxuICAgIDogXCJTd2lmdFVJIGlzIGEgcG93ZXJmdWwgdG9vbCBmb3IgZGVzaWduZXJzLiBZb3UgZG9uJ3QgbmVlZCB0byBiZSBhIDEweCBlbmdpbmVlciB0byBnZXQgYSBsb3QgZnJvbSB0aGUgZnJhbWV3b3JrLlwiO1xuICBjb25zdCBpbWFnZSA9IHByb3BzLmltYWdlID8gcHJvcHMuaW1hZ2UgOiBcImh0dHBzOi8vc3dpZnR1aS5kZXNpZ24vb2cucG5nXCI7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxOZXh0SGVhZD5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9zdmcreG1sXCIgaHJlZj1cIi9pY29uLnN2Z1wiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBocmVmPVwiL2ljb24ucG5nXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwibWFzay1pY29uXCIgaHJlZj1cIi9pY29uLnN2Z1wiIGNvbG9yPVwiIzVENjI2RVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICAgIDwvTmV4dEhlYWQ+XG4gICAgICA8TmV4dFNlb1xuICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgIGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn1cbiAgICAgICAgb3BlbkdyYXBoPXt7XG4gICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgICAgICBpbWFnZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdXJsOiBpbWFnZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICBzaXRlX25hbWU6IFwiU3dpZnRVSSBmb3IgRGVzaWduZXJzXCIsXG4gICAgICAgIH19XG4gICAgICAgIHR3aXR0ZXI9e3tcbiAgICAgICAgICBoYW5kbGU6IFwiQHBoaWxpcGNkYXZpc1wiLFxuICAgICAgICAgIGNhcmRUeXBlOiBcInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIixcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Head.js\n");

/***/ })

})