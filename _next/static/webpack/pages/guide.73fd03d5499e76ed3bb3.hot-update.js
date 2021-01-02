webpackHotUpdate_N_E("pages/guide",{

/***/ "./components/Button.js":
/*!******************************!*\
  !*** ./components/Button.js ***!
  \******************************/
/*! exports provided: Btn, BtnLink, BtnRainbow, BtnInput, BtnTwitter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Btn\", function() { return Btn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BtnLink\", function() { return BtnLink; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BtnRainbow\", function() { return BtnRainbow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BtnInput\", function() { return BtnInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BtnTwitter\", function() { return BtnTwitter; });\n/* harmony import */ var _Users_philipdavis_Documents_swiftui_for_designers_next_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_philipdavis_Documents_swiftui_for_designers_next_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Icon */ \"./components/Icon.js\");\n/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rebass */ \"./node_modules/rebass/dist/index.esm.js\");\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Utils */ \"./components/Utils.js\");\n\n\n\nvar _jsxFileName = \"/Users/philipdavis/Documents/swiftui-for-designers/next-app/components/Button.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_philipdavis_Documents_swiftui_for_designers_next_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar Btn = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].button.withConfig({\n  displayName: \"Button__Btn\",\n  componentId: \"sc-1je6red-0\"\n})([\"outline:none;font-family:inherit;backface-visibility:hidden;margin-right:10px;border:none;border-radius:8px;user-select:none;font-weight:bold;background-color:\", \";font-size:16px;padding:\", \" \", \";\", \" \", \" \", \" &:hover{cursor:pointer;box-shadow:inset 0 0 0 2px rgba(0,0,0,0.15);}\"], function (props) {\n  return props.color ? _Utils__WEBPACK_IMPORTED_MODULE_6__[\"colors\"][props.color] : _Utils__WEBPACK_IMPORTED_MODULE_6__[\"colors\"].lightBlue;\n}, _Utils__WEBPACK_IMPORTED_MODULE_6__[\"space\"][2] + \"px\", _Utils__WEBPACK_IMPORTED_MODULE_6__[\"space\"][3] + \"px\", function (props) {\n  return props.size === \"lg\" && Object(styled_components__WEBPACK_IMPORTED_MODULE_3__[\"css\"])([\"font-size:18px;padding:\", \" \", \";\"], _Utils__WEBPACK_IMPORTED_MODULE_6__[\"space\"][2] + 4 + \"px\", _Utils__WEBPACK_IMPORTED_MODULE_6__[\"space\"][4] + \"px\");\n}, function (props) {\n  return props.size === \"sm\" && Object(styled_components__WEBPACK_IMPORTED_MODULE_3__[\"css\"])([\"font-size:14px;padding:\", \" \", \";\"], _Utils__WEBPACK_IMPORTED_MODULE_6__[\"space\"][1] + \"px\", _Utils__WEBPACK_IMPORTED_MODULE_6__[\"space\"][2] + \"px\");\n}, function (props) {\n  return props.display === \"block\" && Object(styled_components__WEBPACK_IMPORTED_MODULE_3__[\"css\"])([\"display:block;width:100%;\"]);\n});\n_c = Btn;\nvar BtnLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Btn).attrs({\n  as: \"a\"\n}).withConfig({\n  displayName: \"Button__BtnLink\",\n  componentId: \"sc-1je6red-1\"\n})([\"text-decoration:none;display:inline-block;\"]);\nvar BtnRainbow = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(BtnLink).withConfig({\n  displayName: \"Button__BtnRainbow\",\n  componentId: \"sc-1je6red-2\"\n})([\"animation:\", \" 10s infinite alternate;margin-right:0;\"], Object(_Utils__WEBPACK_IMPORTED_MODULE_6__[\"colorChange\"])(\"background\"));\nvar BtnInput = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Btn).attrs({\n  as: \"input\"\n}).withConfig({\n  displayName: \"Button__BtnInput\",\n  componentId: \"sc-1je6red-3\"\n})([\"-webkit-appearance:none;\"]);\nvar BtnIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_Icon__WEBPACK_IMPORTED_MODULE_4__[\"default\"]).withConfig({\n  displayName: \"Button__BtnIcon\",\n  componentId: \"sc-1je6red-4\"\n})([\"margin-right:10px;margin-left:-8px;position:relative;top:2px;\"]);\n_c2 = BtnIcon;\nfunction BtnTwitter(_ref) {\n  var children = _ref.children,\n      rest = Object(_Users_philipdavis_Documents_swiftui_for_designers_next_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, [\"children\"]);\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Btn, _objectSpread(_objectSpread({\n    twitter: true\n  }, rest), {}, {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(rebass__WEBPACK_IMPORTED_MODULE_5__[\"Flex\"], {\n      sx: {\n        height: \"24px\"\n      },\n      alignItems: \"center\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(BtnIcon, {\n        fill: _Utils__WEBPACK_IMPORTED_MODULE_6__[\"colors\"].blue,\n        name: \"twitter\",\n        size: 34\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 9\n      }, this), children]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 7\n    }, this)\n  }), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 81,\n    columnNumber: 5\n  }, this);\n}\n_c3 = BtnTwitter;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Btn\");\n$RefreshReg$(_c2, \"BtnIcon\");\n$RefreshReg$(_c3, \"BtnTwitter\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CdXR0b24uanM/MDg4NSJdLCJuYW1lcyI6WyJCdG4iLCJzdHlsZWQiLCJidXR0b24iLCJwcm9wcyIsImNvbG9yIiwiY29sb3JzIiwibGlnaHRCbHVlIiwic3BhY2UiLCJzaXplIiwiY3NzIiwiZGlzcGxheSIsIkJ0bkxpbmsiLCJhdHRycyIsImFzIiwiQnRuUmFpbmJvdyIsImNvbG9yQ2hhbmdlIiwiQnRuSW5wdXQiLCJCdG5JY29uIiwiSWNvbiIsIkJ0blR3aXR0ZXIiLCJjaGlsZHJlbiIsInJlc3QiLCJoZWlnaHQiLCJibHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBUU8sSUFBTUEsR0FBRyxHQUFHQyx5REFBTSxDQUFDQyxNQUFWO0FBQUE7QUFBQTtBQUFBLGlTQVNNLFVBQUNDLEtBQUQ7QUFBQSxTQUNsQkEsS0FBSyxDQUFDQyxLQUFOLEdBQWNDLDZDQUFNLENBQUNGLEtBQUssQ0FBQ0MsS0FBUCxDQUFwQixHQUFvQ0MsNkNBQU0sQ0FBQ0MsU0FEekI7QUFBQSxDQVROLEVBYUhDLDRDQUFLLENBQUMsQ0FBRCxDQUFMLEdBQVcsSUFiUixFQWFnQkEsNENBQUssQ0FBQyxDQUFELENBQUwsR0FBVyxJQWIzQixFQWVaLFVBQUNKLEtBQUQ7QUFBQSxTQUNBQSxLQUFLLENBQUNLLElBQU4sS0FBZSxJQUFmLElBQ0FDLDZEQURBLHdDQUdhRiw0Q0FBSyxDQUFDLENBQUQsQ0FBTCxHQUFXLENBQVgsR0FBZSxJQUg1QixFQUdvQ0EsNENBQUssQ0FBQyxDQUFELENBQUwsR0FBVyxJQUgvQyxDQURBO0FBQUEsQ0FmWSxFQXNCWixVQUFDSixLQUFEO0FBQUEsU0FDQUEsS0FBSyxDQUFDSyxJQUFOLEtBQWUsSUFBZixJQUNBQyw2REFEQSx3Q0FHYUYsNENBQUssQ0FBQyxDQUFELENBQUwsR0FBVyxJQUh4QixFQUdnQ0EsNENBQUssQ0FBQyxDQUFELENBQUwsR0FBVyxJQUgzQyxDQURBO0FBQUEsQ0F0QlksRUE2QlosVUFBQ0osS0FBRDtBQUFBLFNBQ0FBLEtBQUssQ0FBQ08sT0FBTixLQUFrQixPQUFsQixJQUNBRCw2REFEQSwrQkFEQTtBQUFBLENBN0JZLENBQVQ7S0FBTVQsRztBQThDTixJQUFNVyxPQUFPLEdBQUdWLGlFQUFNLENBQUNELEdBQUQsQ0FBTixDQUFZWSxLQUFaLENBQWtCO0FBQUVDLElBQUUsRUFBRTtBQUFOLENBQWxCLENBQUg7QUFBQTtBQUFBO0FBQUEsa0RBQWI7QUFLQSxJQUFNQyxVQUFVLEdBQUdiLGlFQUFNLENBQUNVLE9BQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSw4REFDUkksMERBQVcsQ0FBQyxZQUFELENBREgsQ0FBaEI7QUFLQSxJQUFNQyxRQUFRLEdBQUdmLGlFQUFNLENBQUNELEdBQUQsQ0FBTixDQUFZWSxLQUFaLENBQWtCO0FBQUVDLElBQUUsRUFBRTtBQUFOLENBQWxCLENBQUg7QUFBQTtBQUFBO0FBQUEsZ0NBQWQ7QUFJUCxJQUFNSSxPQUFPLEdBQUdoQixpRUFBTSxDQUFDaUIsNkNBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSxxRUFBYjtNQUFNRCxPO0FBT0MsU0FBU0UsVUFBVCxPQUEyQztBQUFBLE1BQXJCQyxRQUFxQixRQUFyQkEsUUFBcUI7QUFBQSxNQUFSQyxJQUFROztBQUNoRCxzQkFDRSxxRUFBQyxHQUFEO0FBQUssV0FBTztBQUFaLEtBQWlCQSxJQUFqQjtBQUFBLDJCQUNFLHFFQUFDLDJDQUFEO0FBQU0sUUFBRSxFQUFFO0FBQUVDLGNBQU0sRUFBRTtBQUFWLE9BQVY7QUFBOEIsZ0JBQVUsRUFBQyxRQUF6QztBQUFBLDhCQUNFLHFFQUFDLE9BQUQ7QUFBUyxZQUFJLEVBQUVqQiw2Q0FBTSxDQUFDa0IsSUFBdEI7QUFBNEIsWUFBSSxFQUFDLFNBQWpDO0FBQTJDLFlBQUksRUFBRTtBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFFR0gsUUFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFRRDtNQVRlRCxVIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9CdXR0b24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IEljb24gZnJvbSBcIi4vSWNvblwiO1xuaW1wb3J0IHsgRmxleCB9IGZyb20gXCJyZWJhc3NcIjtcbmltcG9ydCB7XG4gIGlzRGFya0JhY2tncm91bmQsXG4gIGNvbG9ycyxcbiAgc3BhY2UsXG4gIGNvbG9yQ2hhbmdlLFxuICBoZXhUb1JHQixcbn0gZnJvbSBcIi4vVXRpbHNcIjtcblxuZXhwb3J0IGNvbnN0IEJ0biA9IHN0eWxlZC5idXR0b25gXG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+XG4gICAgcHJvcHMuY29sb3IgPyBjb2xvcnNbcHJvcHMuY29sb3JdIDogY29sb3JzLmxpZ2h0Qmx1ZX07XG5cbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiAke3NwYWNlWzJdICsgXCJweFwifSAke3NwYWNlWzNdICsgXCJweFwifTtcblxuICAkeyhwcm9wcykgPT5cbiAgICBwcm9wcy5zaXplID09PSBcImxnXCIgJiZcbiAgICBjc3NgXG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBwYWRkaW5nOiAke3NwYWNlWzJdICsgNCArIFwicHhcIn0gJHtzcGFjZVs0XSArIFwicHhcIn07XG4gICAgYH1cblxuICAkeyhwcm9wcykgPT5cbiAgICBwcm9wcy5zaXplID09PSBcInNtXCIgJiZcbiAgICBjc3NgXG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBwYWRkaW5nOiAke3NwYWNlWzFdICsgXCJweFwifSAke3NwYWNlWzJdICsgXCJweFwifTtcbiAgICBgfVxuXG4gICR7KHByb3BzKSA9PlxuICAgIHByb3BzLmRpc3BsYXkgPT09IFwiYmxvY2tcIiAmJlxuICAgIGNzc2BcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgYH1cblxuXG5cbiAgICBcblxuICAmOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBCdG5MaW5rID0gc3R5bGVkKEJ0bikuYXR0cnMoeyBhczogXCJhXCIgfSlgXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuYDtcblxuZXhwb3J0IGNvbnN0IEJ0blJhaW5ib3cgPSBzdHlsZWQoQnRuTGluaylgXG4gIGFuaW1hdGlvbjogJHtjb2xvckNoYW5nZShcImJhY2tncm91bmRcIil9IDEwcyBpbmZpbml0ZSBhbHRlcm5hdGU7XG4gIG1hcmdpbi1yaWdodDogMDtcbmA7XG5cbmV4cG9ydCBjb25zdCBCdG5JbnB1dCA9IHN0eWxlZChCdG4pLmF0dHJzKHsgYXM6IFwiaW5wdXRcIiB9KWBcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuYDtcblxuY29uc3QgQnRuSWNvbiA9IHN0eWxlZChJY29uKWBcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tbGVmdDogLThweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDJweDtcbmA7XG5cbmV4cG9ydCBmdW5jdGlvbiBCdG5Ud2l0dGVyKHsgY2hpbGRyZW4sIC4uLnJlc3QgfSkge1xuICByZXR1cm4gKFxuICAgIDxCdG4gdHdpdHRlciB7Li4ucmVzdH0+XG4gICAgICA8RmxleCBzeD17eyBoZWlnaHQ6IFwiMjRweFwiIH19IGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgPEJ0bkljb24gZmlsbD17Y29sb3JzLmJsdWV9IG5hbWU9XCJ0d2l0dGVyXCIgc2l6ZT17MzR9IC8+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvRmxleD5cbiAgICA8L0J0bj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Button.js\n");

/***/ })

})