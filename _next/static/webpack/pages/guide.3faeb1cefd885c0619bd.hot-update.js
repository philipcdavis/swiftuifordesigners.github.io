webpackHotUpdate_N_E("pages/guide",{

/***/ "./components/Button.js":
/*!******************************!*\
  !*** ./components/Button.js ***!
  \******************************/
/*! exports provided: Btn, BtnLink, BtnRainbow, BtnInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Btn\", function() { return Btn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BtnLink\", function() { return BtnLink; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BtnRainbow\", function() { return BtnRainbow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BtnInput\", function() { return BtnInput; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ \"./components/Utils.js\");\n\n\nvar Btn = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button.withConfig({\n  displayName: \"Button__Btn\",\n  componentId: \"sc-1je6red-0\"\n})([\"color:\", \";outline:none;font-family:inherit;backface-visibility:hidden;margin-right:10px;border:none;border-radius:6px;user-select:none;font-weight:bold;transition:0.4s all cubic-bezier(0.15,0.75,0.45,0.95);background-color:\", \";font-size:16px;padding:\", \" \", \";\", \" \", \" \", \" \", \" \", \" &:hover{cursor:pointer;transform:translateZ(0) scale(1.1);border-radius:6px;}\"], function (props) {\n  return Object(_Utils__WEBPACK_IMPORTED_MODULE_1__[\"isDarkBackground\"])(props.color) ? _Utils__WEBPACK_IMPORTED_MODULE_1__[\"colors\"].white : _Utils__WEBPACK_IMPORTED_MODULE_1__[\"colors\"].black;\n}, function (props) {\n  return props.color ? _Utils__WEBPACK_IMPORTED_MODULE_1__[\"colors\"][props.color] : _Utils__WEBPACK_IMPORTED_MODULE_1__[\"colors\"].lightBlue;\n}, _Utils__WEBPACK_IMPORTED_MODULE_1__[\"space\"][2] + \"px\", _Utils__WEBPACK_IMPORTED_MODULE_1__[\"space\"][3] + \"px\", function (props) {\n  return props.size === \"lg\" && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"font-size:18px;padding:\", \" \", \";\"], _Utils__WEBPACK_IMPORTED_MODULE_1__[\"space\"][2] + 4 + \"px\", _Utils__WEBPACK_IMPORTED_MODULE_1__[\"space\"][4] + \"px\");\n}, function (props) {\n  return props.size === \"sm\" && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"font-size:14px;padding:\", \" \", \";\"], _Utils__WEBPACK_IMPORTED_MODULE_1__[\"space\"][1] + \"px\", _Utils__WEBPACK_IMPORTED_MODULE_1__[\"space\"][2] + \"px\");\n}, function (props) {\n  return props.display === \"block\" && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"display:block;width:100%;\"]);\n}, function (props) {\n  return Object(_Utils__WEBPACK_IMPORTED_MODULE_1__[\"isDarkBackground\"])(props.color) && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"border:2px solid \", \";\"], _Utils__WEBPACK_IMPORTED_MODULE_1__[\"colors\"].gray2);\n}, function (props) {\n  return props.color === \"white\" && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"box-shadow:0 3px 5px 0 rgba(0,0,0,0.15);\"]);\n});\nvar BtnLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Btn).attrs({\n  as: \"a\"\n}).withConfig({\n  displayName: \"Button__BtnLink\",\n  componentId: \"sc-1je6red-1\"\n})([\"text-decoration:none;display:inline-block;\"]);\nvar BtnRainbow = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(BtnLink).withConfig({\n  displayName: \"Button__BtnRainbow\",\n  componentId: \"sc-1je6red-2\"\n})([\"animation:\", \" 10s infinite alternate;margin-right:0;\"], Object(_Utils__WEBPACK_IMPORTED_MODULE_1__[\"colorChange\"])(\"background\"));\nvar BtnInput = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Btn).attrs({\n  as: \"input\"\n}).withConfig({\n  displayName: \"Button__BtnInput\",\n  componentId: \"sc-1je6red-3\"\n})([\"-webkit-appearance:none;margin:0;padding:4px 20px;\"]);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CdXR0b24uanM/MDg4NSJdLCJuYW1lcyI6WyJCdG4iLCJzdHlsZWQiLCJidXR0b24iLCJwcm9wcyIsImlzRGFya0JhY2tncm91bmQiLCJjb2xvciIsImNvbG9ycyIsIndoaXRlIiwiYmxhY2siLCJsaWdodEJsdWUiLCJzcGFjZSIsInNpemUiLCJjc3MiLCJkaXNwbGF5IiwiZ3JheTIiLCJCdG5MaW5rIiwiYXR0cnMiLCJhcyIsIkJ0blJhaW5ib3ciLCJjb2xvckNoYW5nZSIsIkJ0bklucHV0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFTyxJQUFNQSxHQUFHLEdBQUdDLHlEQUFNLENBQUNDLE1BQVY7QUFBQTtBQUFBO0FBQUEscVhBQ0wsVUFBQ0MsS0FBRDtBQUFBLFNBQ1BDLCtEQUFnQixDQUFDRCxLQUFLLENBQUNFLEtBQVAsQ0FBaEIsR0FBZ0NDLDZDQUFNLENBQUNDLEtBQXZDLEdBQStDRCw2Q0FBTSxDQUFDRSxLQUQvQztBQUFBLENBREssRUFZTSxVQUFDTCxLQUFEO0FBQUEsU0FDbEJBLEtBQUssQ0FBQ0UsS0FBTixHQUFjQyw2Q0FBTSxDQUFDSCxLQUFLLENBQUNFLEtBQVAsQ0FBcEIsR0FBb0NDLDZDQUFNLENBQUNHLFNBRHpCO0FBQUEsQ0FaTixFQWdCSEMsNENBQUssQ0FBQyxDQUFELENBQUwsR0FBVyxJQWhCUixFQWdCZ0JBLDRDQUFLLENBQUMsQ0FBRCxDQUFMLEdBQVcsSUFoQjNCLEVBa0JaLFVBQUNQLEtBQUQ7QUFBQSxTQUNBQSxLQUFLLENBQUNRLElBQU4sS0FBZSxJQUFmLElBQ0FDLDZEQURBLHdDQUdhRiw0Q0FBSyxDQUFDLENBQUQsQ0FBTCxHQUFXLENBQVgsR0FBZSxJQUg1QixFQUdvQ0EsNENBQUssQ0FBQyxDQUFELENBQUwsR0FBVyxJQUgvQyxDQURBO0FBQUEsQ0FsQlksRUF5QlosVUFBQ1AsS0FBRDtBQUFBLFNBQ0FBLEtBQUssQ0FBQ1EsSUFBTixLQUFlLElBQWYsSUFDQUMsNkRBREEsd0NBR2FGLDRDQUFLLENBQUMsQ0FBRCxDQUFMLEdBQVcsSUFIeEIsRUFHZ0NBLDRDQUFLLENBQUMsQ0FBRCxDQUFMLEdBQVcsSUFIM0MsQ0FEQTtBQUFBLENBekJZLEVBZ0NaLFVBQUNQLEtBQUQ7QUFBQSxTQUNBQSxLQUFLLENBQUNVLE9BQU4sS0FBa0IsT0FBbEIsSUFDQUQsNkRBREEsK0JBREE7QUFBQSxDQWhDWSxFQXVDWixVQUFDVCxLQUFEO0FBQUEsU0FDQUMsK0RBQWdCLENBQUNELEtBQUssQ0FBQ0UsS0FBUCxDQUFoQixJQUNBTyw2REFEQSw2QkFFc0JOLDZDQUFNLENBQUNRLEtBRjdCLENBREE7QUFBQSxDQXZDWSxFQTZDVixVQUFDWCxLQUFEO0FBQUEsU0FDRkEsS0FBSyxDQUFDRSxLQUFOLEtBQWdCLE9BQWhCLElBQ0FPLDZEQURBLDhDQURFO0FBQUEsQ0E3Q1UsQ0FBVDtBQTBEQSxJQUFNRyxPQUFPLEdBQUdkLGlFQUFNLENBQUNELEdBQUQsQ0FBTixDQUFZZ0IsS0FBWixDQUFrQjtBQUFFQyxJQUFFLEVBQUU7QUFBTixDQUFsQixDQUFIO0FBQUE7QUFBQTtBQUFBLGtEQUFiO0FBS0EsSUFBTUMsVUFBVSxHQUFHakIsaUVBQU0sQ0FBQ2MsT0FBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLDhEQUNSSSwwREFBVyxDQUFDLFlBQUQsQ0FESCxDQUFoQjtBQUtBLElBQU1DLFFBQVEsR0FBR25CLGlFQUFNLENBQUNELEdBQUQsQ0FBTixDQUFZZ0IsS0FBWixDQUFrQjtBQUFFQyxJQUFFLEVBQUU7QUFBTixDQUFsQixDQUFIO0FBQUE7QUFBQTtBQUFBLDBEQUFkIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9CdXR0b24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgaXNEYXJrQmFja2dyb3VuZCwgY29sb3JzLCBzcGFjZSwgY29sb3JDaGFuZ2UgfSBmcm9tIFwiLi9VdGlsc1wiO1xuXG5leHBvcnQgY29uc3QgQnRuID0gc3R5bGVkLmJ1dHRvbmBcbiAgY29sb3I6ICR7KHByb3BzKSA9PlxuICAgIGlzRGFya0JhY2tncm91bmQocHJvcHMuY29sb3IpID8gY29sb3JzLndoaXRlIDogY29sb3JzLmJsYWNrfTtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0cmFuc2l0aW9uOiAwLjRzIGFsbCBjdWJpYy1iZXppZXIoMC4xNSwgMC43NSwgMC40NSwgMC45NSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHByb3BzKSA9PlxuICAgIHByb3BzLmNvbG9yID8gY29sb3JzW3Byb3BzLmNvbG9yXSA6IGNvbG9ycy5saWdodEJsdWV9O1xuXG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogJHtzcGFjZVsyXSArIFwicHhcIn0gJHtzcGFjZVszXSArIFwicHhcIn07XG5cbiAgJHsocHJvcHMpID0+XG4gICAgcHJvcHMuc2l6ZSA9PT0gXCJsZ1wiICYmXG4gICAgY3NzYFxuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgcGFkZGluZzogJHtzcGFjZVsyXSArIDQgKyBcInB4XCJ9ICR7c3BhY2VbNF0gKyBcInB4XCJ9O1xuICAgIGB9XG5cbiAgJHsocHJvcHMpID0+XG4gICAgcHJvcHMuc2l6ZSA9PT0gXCJzbVwiICYmXG4gICAgY3NzYFxuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgcGFkZGluZzogJHtzcGFjZVsxXSArIFwicHhcIn0gJHtzcGFjZVsyXSArIFwicHhcIn07XG4gICAgYH1cblxuICAkeyhwcm9wcykgPT5cbiAgICBwcm9wcy5kaXNwbGF5ID09PSBcImJsb2NrXCIgJiZcbiAgICBjc3NgXG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIGB9XG5cbiAgJHsocHJvcHMpID0+XG4gICAgaXNEYXJrQmFja2dyb3VuZChwcm9wcy5jb2xvcikgJiZcbiAgICBjc3NgXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAke2NvbG9ycy5ncmF5Mn07XG4gICAgYH1cblxuICAgICR7KHByb3BzKSA9PlxuICAgIHByb3BzLmNvbG9yID09PSBcIndoaXRlXCIgJiZcbiAgICBjc3NgXG4gICAgICBib3gtc2hhZG93OiAwIDNweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgIGB9XG5cbiAgJjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKSBzY2FsZSgxLjEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEJ0bkxpbmsgPSBzdHlsZWQoQnRuKS5hdHRycyh7IGFzOiBcImFcIiB9KWBcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5gO1xuXG5leHBvcnQgY29uc3QgQnRuUmFpbmJvdyA9IHN0eWxlZChCdG5MaW5rKWBcbiAgYW5pbWF0aW9uOiAke2NvbG9yQ2hhbmdlKFwiYmFja2dyb3VuZFwiKX0gMTBzIGluZmluaXRlIGFsdGVybmF0ZTtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuYDtcblxuZXhwb3J0IGNvbnN0IEJ0bklucHV0ID0gc3R5bGVkKEJ0bikuYXR0cnMoeyBhczogXCJpbnB1dFwiIH0pYFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogNHB4IDIwcHg7XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Button.js\n");

/***/ })

})