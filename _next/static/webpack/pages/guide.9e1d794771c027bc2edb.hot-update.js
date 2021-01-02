webpackHotUpdate_N_E("pages/guide",{

/***/ "./components/Utils.js":
/*!*****************************!*\
  !*** ./components/Utils.js ***!
  \*****************************/
/*! exports provided: colors, space, fontSize, isDarkBackground, colorChange, hexToRGB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"colors\", function() { return colors; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"space\", function() { return space; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fontSize\", function() { return fontSize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isDarkBackground\", function() { return isDarkBackground; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"colorChange\", function() { return colorChange; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hexToRGB\", function() { return hexToRGB; });\n/* harmony import */ var _Users_philipdavis_Documents_swiftui_for_designers_next_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nfunction _templateObject() {\n  var data = Object(_Users_philipdavis_Documents_swiftui_for_designers_next_app_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    0% { \", \": \", \"; }\\n    25%  { \", \": \", \"; }\\n    50% { \", \": \", \"; }\\n    75% { \", \": \", \"; }\\n    100% { \", \": \", \"; }\\n  \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\nvar colors = {\n  white: \"#ffffff\",\n  red: \"#EF4343\",\n  purple: \"#9000FF\",\n  blue: \"#0086FF\",\n  teal: \"#7DE9FF\",\n  green: \"#54EB78\",\n  yellow: \"#FFD700\",\n  lightRed: \"#FDC9C9\",\n  lightPurple: \"#DFB7FF\",\n  lightBlue: \"#B9E9FF\",\n  lightGreen: \"#80F6A1\",\n  lightYellow: \"#FFDA8C\",\n  surfaceBackground: \"white\",\n  surfaceHighlight: \"#EFF3F5\",\n  surfaceBorder: \"#DDE5EA\",\n  surfaceBorderHighlight: \"#C1CACF\",\n  cardShadow: \"rgba(204,216,223,0.50)\",\n  primaryText: \"#37373C\",\n  secondaryText: \"#7C7C84\",\n  placeholderText: \"#6B767D\"\n};\nvar space = [0, 8, 16, 32, 64, 128, 256, 512];\nvar fontSize = [\"14px\", \"16px\", \"20px\", \"24px\", \"32px\", \"64px\"];\nvar isDarkBackground = function isDarkBackground(color) {\n  if (color) {\n    if (color.includes(\"black\") || color.includes(\"gray2\") || color.includes(\"gray3\")) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n};\nfunction colorChange(type) {\n  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;\n  return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"keyframes\"])(_templateObject(), type, hexToRGB(colors.lightPurple, opacity), type, hexToRGB(colors.lightRed, opacity), type, hexToRGB(colors.lightYellow, opacity), type, hexToRGB(colors.lightGreen, opacity), type, hexToRGB(colors.lightBlue, opacity));\n}\nfunction hexToRGB(hex, alpha) {\n  var r = parseInt(hex.slice(1, 3), 16),\n      g = parseInt(hex.slice(3, 5), 16),\n      b = parseInt(hex.slice(5, 7), 16);\n\n  if (alpha) {\n    return \"rgba(\" + r + \", \" + g + \", \" + b + \", \" + alpha + \")\";\n  } else {\n    return \"rgb(\" + r + \", \" + g + \", \" + b + \")\";\n  }\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VdGlscy5qcz85OTMzIl0sIm5hbWVzIjpbImNvbG9ycyIsIndoaXRlIiwicmVkIiwicHVycGxlIiwiYmx1ZSIsInRlYWwiLCJncmVlbiIsInllbGxvdyIsImxpZ2h0UmVkIiwibGlnaHRQdXJwbGUiLCJsaWdodEJsdWUiLCJsaWdodEdyZWVuIiwibGlnaHRZZWxsb3ciLCJzdXJmYWNlQmFja2dyb3VuZCIsInN1cmZhY2VIaWdobGlnaHQiLCJzdXJmYWNlQm9yZGVyIiwic3VyZmFjZUJvcmRlckhpZ2hsaWdodCIsImNhcmRTaGFkb3ciLCJwcmltYXJ5VGV4dCIsInNlY29uZGFyeVRleHQiLCJwbGFjZWhvbGRlclRleHQiLCJzcGFjZSIsImZvbnRTaXplIiwiaXNEYXJrQmFja2dyb3VuZCIsImNvbG9yIiwiaW5jbHVkZXMiLCJjb2xvckNoYW5nZSIsInR5cGUiLCJvcGFjaXR5Iiwia2V5ZnJhbWVzIiwiaGV4VG9SR0IiLCJoZXgiLCJhbHBoYSIsInIiLCJwYXJzZUludCIsInNsaWNlIiwiZyIsImIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsTUFBTSxHQUFHO0FBQ3BCQyxPQUFLLEVBQUUsU0FEYTtBQUVwQkMsS0FBRyxFQUFFLFNBRmU7QUFHcEJDLFFBQU0sRUFBRSxTQUhZO0FBSXBCQyxNQUFJLEVBQUUsU0FKYztBQUtwQkMsTUFBSSxFQUFFLFNBTGM7QUFNcEJDLE9BQUssRUFBRSxTQU5hO0FBT3BCQyxRQUFNLEVBQUUsU0FQWTtBQVFwQkMsVUFBUSxFQUFFLFNBUlU7QUFTcEJDLGFBQVcsRUFBRSxTQVRPO0FBVXBCQyxXQUFTLEVBQUUsU0FWUztBQVdwQkMsWUFBVSxFQUFFLFNBWFE7QUFZcEJDLGFBQVcsRUFBRSxTQVpPO0FBYXBCQyxtQkFBaUIsRUFBRSxPQWJDO0FBY3BCQyxrQkFBZ0IsRUFBRSxTQWRFO0FBZXBCQyxlQUFhLEVBQUUsU0FmSztBQWdCcEJDLHdCQUFzQixFQUFFLFNBaEJKO0FBaUJwQkMsWUFBVSxFQUFFLHdCQWpCUTtBQWtCcEJDLGFBQVcsRUFBRSxTQWxCTztBQW1CcEJDLGVBQWEsRUFBRSxTQW5CSztBQW9CcEJDLGlCQUFlLEVBQUU7QUFwQkcsQ0FBZjtBQXVCQSxJQUFNQyxLQUFLLEdBQUcsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLEVBQVAsRUFBVyxFQUFYLEVBQWUsRUFBZixFQUFtQixHQUFuQixFQUF3QixHQUF4QixFQUE2QixHQUE3QixDQUFkO0FBRUEsSUFBTUMsUUFBUSxHQUFHLENBQUMsTUFBRCxFQUFTLE1BQVQsRUFBaUIsTUFBakIsRUFBeUIsTUFBekIsRUFBaUMsTUFBakMsRUFBeUMsTUFBekMsQ0FBakI7QUFFQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQVVDLEtBQVYsRUFBaUI7QUFDL0MsTUFBSUEsS0FBSixFQUFXO0FBQ1QsUUFDRUEsS0FBSyxDQUFDQyxRQUFOLENBQWUsT0FBZixLQUNBRCxLQUFLLENBQUNDLFFBQU4sQ0FBZSxPQUFmLENBREEsSUFFQUQsS0FBSyxDQUFDQyxRQUFOLENBQWUsT0FBZixDQUhGLEVBSUU7QUFDQSxhQUFPLElBQVA7QUFDRCxLQU5ELE1BTU87QUFDTCxhQUFPLEtBQVA7QUFDRDtBQUNGO0FBQ0YsQ0FaTTtBQWNBLFNBQVNDLFdBQVQsQ0FBcUJDLElBQXJCLEVBQXdDO0FBQUEsTUFBYkMsT0FBYSx1RUFBSCxDQUFHO0FBQzdDLFNBQU9DLG1FQUFQLG9CQUNTRixJQURULEVBQ2tCRyxRQUFRLENBQUM5QixNQUFNLENBQUNTLFdBQVIsRUFBcUJtQixPQUFyQixDQUQxQixFQUVXRCxJQUZYLEVBRW9CRyxRQUFRLENBQUM5QixNQUFNLENBQUNRLFFBQVIsRUFBa0JvQixPQUFsQixDQUY1QixFQUdVRCxJQUhWLEVBR21CRyxRQUFRLENBQUM5QixNQUFNLENBQUNZLFdBQVIsRUFBcUJnQixPQUFyQixDQUgzQixFQUlVRCxJQUpWLEVBSW1CRyxRQUFRLENBQUM5QixNQUFNLENBQUNXLFVBQVIsRUFBb0JpQixPQUFwQixDQUozQixFQUtXRCxJQUxYLEVBS29CRyxRQUFRLENBQUM5QixNQUFNLENBQUNVLFNBQVIsRUFBbUJrQixPQUFuQixDQUw1QjtBQU9EO0FBRU0sU0FBU0UsUUFBVCxDQUFrQkMsR0FBbEIsRUFBdUJDLEtBQXZCLEVBQThCO0FBQ25DLE1BQUlDLENBQUMsR0FBR0MsUUFBUSxDQUFDSCxHQUFHLENBQUNJLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixDQUFELEVBQWtCLEVBQWxCLENBQWhCO0FBQUEsTUFDRUMsQ0FBQyxHQUFHRixRQUFRLENBQUNILEdBQUcsQ0FBQ0ksS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLENBQUQsRUFBa0IsRUFBbEIsQ0FEZDtBQUFBLE1BRUVFLENBQUMsR0FBR0gsUUFBUSxDQUFDSCxHQUFHLENBQUNJLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixDQUFELEVBQWtCLEVBQWxCLENBRmQ7O0FBSUEsTUFBSUgsS0FBSixFQUFXO0FBQ1QsV0FBTyxVQUFVQyxDQUFWLEdBQWMsSUFBZCxHQUFxQkcsQ0FBckIsR0FBeUIsSUFBekIsR0FBZ0NDLENBQWhDLEdBQW9DLElBQXBDLEdBQTJDTCxLQUEzQyxHQUFtRCxHQUExRDtBQUNELEdBRkQsTUFFTztBQUNMLFdBQU8sU0FBU0MsQ0FBVCxHQUFhLElBQWIsR0FBb0JHLENBQXBCLEdBQXdCLElBQXhCLEdBQStCQyxDQUEvQixHQUFtQyxHQUExQztBQUNEO0FBQ0YiLCJmaWxlIjoiLi9jb21wb25lbnRzL1V0aWxzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsga2V5ZnJhbWVzIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmV4cG9ydCBjb25zdCBjb2xvcnMgPSB7XG4gIHdoaXRlOiBcIiNmZmZmZmZcIixcbiAgcmVkOiBcIiNFRjQzNDNcIixcbiAgcHVycGxlOiBcIiM5MDAwRkZcIixcbiAgYmx1ZTogXCIjMDA4NkZGXCIsXG4gIHRlYWw6IFwiIzdERTlGRlwiLFxuICBncmVlbjogXCIjNTRFQjc4XCIsXG4gIHllbGxvdzogXCIjRkZENzAwXCIsXG4gIGxpZ2h0UmVkOiBcIiNGREM5QzlcIixcbiAgbGlnaHRQdXJwbGU6IFwiI0RGQjdGRlwiLFxuICBsaWdodEJsdWU6IFwiI0I5RTlGRlwiLFxuICBsaWdodEdyZWVuOiBcIiM4MEY2QTFcIixcbiAgbGlnaHRZZWxsb3c6IFwiI0ZGREE4Q1wiLFxuICBzdXJmYWNlQmFja2dyb3VuZDogXCJ3aGl0ZVwiLFxuICBzdXJmYWNlSGlnaGxpZ2h0OiBcIiNFRkYzRjVcIixcbiAgc3VyZmFjZUJvcmRlcjogXCIjRERFNUVBXCIsXG4gIHN1cmZhY2VCb3JkZXJIaWdobGlnaHQ6IFwiI0MxQ0FDRlwiLFxuICBjYXJkU2hhZG93OiBcInJnYmEoMjA0LDIxNiwyMjMsMC41MClcIixcbiAgcHJpbWFyeVRleHQ6IFwiIzM3MzczQ1wiLFxuICBzZWNvbmRhcnlUZXh0OiBcIiM3QzdDODRcIixcbiAgcGxhY2Vob2xkZXJUZXh0OiBcIiM2Qjc2N0RcIixcbn07XG5cbmV4cG9ydCBjb25zdCBzcGFjZSA9IFswLCA4LCAxNiwgMzIsIDY0LCAxMjgsIDI1NiwgNTEyXTtcblxuZXhwb3J0IGNvbnN0IGZvbnRTaXplID0gW1wiMTRweFwiLCBcIjE2cHhcIiwgXCIyMHB4XCIsIFwiMjRweFwiLCBcIjMycHhcIiwgXCI2NHB4XCJdO1xuXG5leHBvcnQgY29uc3QgaXNEYXJrQmFja2dyb3VuZCA9IGZ1bmN0aW9uIChjb2xvcikge1xuICBpZiAoY29sb3IpIHtcbiAgICBpZiAoXG4gICAgICBjb2xvci5pbmNsdWRlcyhcImJsYWNrXCIpIHx8XG4gICAgICBjb2xvci5pbmNsdWRlcyhcImdyYXkyXCIpIHx8XG4gICAgICBjb2xvci5pbmNsdWRlcyhcImdyYXkzXCIpXG4gICAgKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbG9yQ2hhbmdlKHR5cGUsIG9wYWNpdHkgPSAxKSB7XG4gIHJldHVybiBrZXlmcmFtZXNgXG4gICAgMCUgeyAke3R5cGV9OiAke2hleFRvUkdCKGNvbG9ycy5saWdodFB1cnBsZSwgb3BhY2l0eSl9OyB9XG4gICAgMjUlICB7ICR7dHlwZX06ICR7aGV4VG9SR0IoY29sb3JzLmxpZ2h0UmVkLCBvcGFjaXR5KX07IH1cbiAgICA1MCUgeyAke3R5cGV9OiAke2hleFRvUkdCKGNvbG9ycy5saWdodFllbGxvdywgb3BhY2l0eSl9OyB9XG4gICAgNzUlIHsgJHt0eXBlfTogJHtoZXhUb1JHQihjb2xvcnMubGlnaHRHcmVlbiwgb3BhY2l0eSl9OyB9XG4gICAgMTAwJSB7ICR7dHlwZX06ICR7aGV4VG9SR0IoY29sb3JzLmxpZ2h0Qmx1ZSwgb3BhY2l0eSl9OyB9XG4gIGA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoZXhUb1JHQihoZXgsIGFscGhhKSB7XG4gIHZhciByID0gcGFyc2VJbnQoaGV4LnNsaWNlKDEsIDMpLCAxNiksXG4gICAgZyA9IHBhcnNlSW50KGhleC5zbGljZSgzLCA1KSwgMTYpLFxuICAgIGIgPSBwYXJzZUludChoZXguc2xpY2UoNSwgNyksIDE2KTtcblxuICBpZiAoYWxwaGEpIHtcbiAgICByZXR1cm4gXCJyZ2JhKFwiICsgciArIFwiLCBcIiArIGcgKyBcIiwgXCIgKyBiICsgXCIsIFwiICsgYWxwaGEgKyBcIilcIjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gXCJyZ2IoXCIgKyByICsgXCIsIFwiICsgZyArIFwiLCBcIiArIGIgKyBcIilcIjtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Utils.js\n");

/***/ })

})