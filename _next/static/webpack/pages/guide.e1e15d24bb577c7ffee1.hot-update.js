webpackHotUpdate_N_E("pages/guide",{

/***/ "./components/Button.js":
/*!******************************!*\
  !*** ./components/Button.js ***!
  \******************************/
/*! exports provided: Btn, BtnLink, BtnRainbow, BtnInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Btn\", function() { return Btn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BtnLink\", function() { return BtnLink; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BtnRainbow\", function() { return BtnRainbow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BtnInput\", function() { return BtnInput; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ \"./components/Utils.js\");\n\n\nvar Btn = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button.withConfig({\n  displayName: \"Button__Btn\",\n  componentId: \"sc-1je6red-0\"\n})([\"color:\", \";outline:none;font-family:inherit;backface-visibility:hidden;margin-right:10px;border:none;border-radius:8px;user-select:none;font-weight:bold;transition:0.4s all cubic-bezier(0.15,0.75,0.45,0.95);background-color:\", \";font-size:16px;padding:\", \" \", \";\", \" \", \" \", \" \", \" &:hover{cursor:pointer;transform:translateZ(0) scale(1.1);border-radius:6px;}\"], function (props) {\n  return Object(_Utils__WEBPACK_IMPORTED_MODULE_1__[\"isDarkBackground\"])(props.color) ? _Utils__WEBPACK_IMPORTED_MODULE_1__[\"colors\"].white : _Utils__WEBPACK_IMPORTED_MODULE_1__[\"colors\"].black;\n}, function (props) {\n  return props.color ? _Utils__WEBPACK_IMPORTED_MODULE_1__[\"colors\"][props.color] : _Utils__WEBPACK_IMPORTED_MODULE_1__[\"colors\"].lightBlue;\n}, _Utils__WEBPACK_IMPORTED_MODULE_1__[\"space\"][2] + \"px\", _Utils__WEBPACK_IMPORTED_MODULE_1__[\"space\"][3] + \"px\", function (props) {\n  return props.size === \"lg\" && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"font-size:18px;padding:\", \" \", \";\"], _Utils__WEBPACK_IMPORTED_MODULE_1__[\"space\"][2] + 4 + \"px\", _Utils__WEBPACK_IMPORTED_MODULE_1__[\"space\"][4] + \"px\");\n}, function (props) {\n  return props.size === \"sm\" && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"font-size:14px;padding:\", \" \", \";\"], _Utils__WEBPACK_IMPORTED_MODULE_1__[\"space\"][1] + \"px\", _Utils__WEBPACK_IMPORTED_MODULE_1__[\"space\"][2] + \"px\");\n}, function (props) {\n  return props.display === \"block\" && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"display:block;width:100%;\"]);\n}, function (props) {\n  return props.twitter && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"background-color:\", \";\"], Object(_Utils__WEBPACK_IMPORTED_MODULE_1__[\"hexToRGB\"])(_Utils__WEBPACK_IMPORTED_MODULE_1__[\"colors\"].lightBlue, 0.5));\n});\nvar BtnLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Btn).attrs({\n  as: \"a\"\n}).withConfig({\n  displayName: \"Button__BtnLink\",\n  componentId: \"sc-1je6red-1\"\n})([\"text-decoration:none;display:inline-block;\"]);\nvar BtnRainbow = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(BtnLink).withConfig({\n  displayName: \"Button__BtnRainbow\",\n  componentId: \"sc-1je6red-2\"\n})([\"animation:\", \" 10s infinite alternate;margin-right:0;\"], Object(_Utils__WEBPACK_IMPORTED_MODULE_1__[\"colorChange\"])(\"background\"));\nvar BtnInput = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Btn).attrs({\n  as: \"input\"\n}).withConfig({\n  displayName: \"Button__BtnInput\",\n  componentId: \"sc-1je6red-3\"\n})([\"-webkit-appearance:none;\"]);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CdXR0b24uanM/MDg4NSJdLCJuYW1lcyI6WyJCdG4iLCJzdHlsZWQiLCJidXR0b24iLCJwcm9wcyIsImlzRGFya0JhY2tncm91bmQiLCJjb2xvciIsImNvbG9ycyIsIndoaXRlIiwiYmxhY2siLCJsaWdodEJsdWUiLCJzcGFjZSIsInNpemUiLCJjc3MiLCJkaXNwbGF5IiwidHdpdHRlciIsImhleFRvUkdCIiwiQnRuTGluayIsImF0dHJzIiwiYXMiLCJCdG5SYWluYm93IiwiY29sb3JDaGFuZ2UiLCJCdG5JbnB1dCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBUU8sSUFBTUEsR0FBRyxHQUFHQyx5REFBTSxDQUFDQyxNQUFWO0FBQUE7QUFBQTtBQUFBLGdYQUNMLFVBQUNDLEtBQUQ7QUFBQSxTQUNQQywrREFBZ0IsQ0FBQ0QsS0FBSyxDQUFDRSxLQUFQLENBQWhCLEdBQWdDQyw2Q0FBTSxDQUFDQyxLQUF2QyxHQUErQ0QsNkNBQU0sQ0FBQ0UsS0FEL0M7QUFBQSxDQURLLEVBWU0sVUFBQ0wsS0FBRDtBQUFBLFNBQ2xCQSxLQUFLLENBQUNFLEtBQU4sR0FBY0MsNkNBQU0sQ0FBQ0gsS0FBSyxDQUFDRSxLQUFQLENBQXBCLEdBQW9DQyw2Q0FBTSxDQUFDRyxTQUR6QjtBQUFBLENBWk4sRUFnQkhDLDRDQUFLLENBQUMsQ0FBRCxDQUFMLEdBQVcsSUFoQlIsRUFnQmdCQSw0Q0FBSyxDQUFDLENBQUQsQ0FBTCxHQUFXLElBaEIzQixFQWtCWixVQUFDUCxLQUFEO0FBQUEsU0FDQUEsS0FBSyxDQUFDUSxJQUFOLEtBQWUsSUFBZixJQUNBQyw2REFEQSx3Q0FHYUYsNENBQUssQ0FBQyxDQUFELENBQUwsR0FBVyxDQUFYLEdBQWUsSUFINUIsRUFHb0NBLDRDQUFLLENBQUMsQ0FBRCxDQUFMLEdBQVcsSUFIL0MsQ0FEQTtBQUFBLENBbEJZLEVBeUJaLFVBQUNQLEtBQUQ7QUFBQSxTQUNBQSxLQUFLLENBQUNRLElBQU4sS0FBZSxJQUFmLElBQ0FDLDZEQURBLHdDQUdhRiw0Q0FBSyxDQUFDLENBQUQsQ0FBTCxHQUFXLElBSHhCLEVBR2dDQSw0Q0FBSyxDQUFDLENBQUQsQ0FBTCxHQUFXLElBSDNDLENBREE7QUFBQSxDQXpCWSxFQWdDWixVQUFDUCxLQUFEO0FBQUEsU0FDQUEsS0FBSyxDQUFDVSxPQUFOLEtBQWtCLE9BQWxCLElBQ0FELDZEQURBLCtCQURBO0FBQUEsQ0FoQ1ksRUF1Q1osVUFBQ1QsS0FBRDtBQUFBLFNBQ0FBLEtBQUssQ0FBQ1csT0FBTixJQUNBRiw2REFEQSw2QkFFc0JHLHVEQUFRLENBQUNULDZDQUFNLENBQUNHLFNBQVIsRUFBbUIsR0FBbkIsQ0FGOUIsQ0FEQTtBQUFBLENBdkNZLENBQVQ7QUFzREEsSUFBTU8sT0FBTyxHQUFHZixpRUFBTSxDQUFDRCxHQUFELENBQU4sQ0FBWWlCLEtBQVosQ0FBa0I7QUFBRUMsSUFBRSxFQUFFO0FBQU4sQ0FBbEIsQ0FBSDtBQUFBO0FBQUE7QUFBQSxrREFBYjtBQUtBLElBQU1DLFVBQVUsR0FBR2xCLGlFQUFNLENBQUNlLE9BQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSw4REFDUkksMERBQVcsQ0FBQyxZQUFELENBREgsQ0FBaEI7QUFLQSxJQUFNQyxRQUFRLEdBQUdwQixpRUFBTSxDQUFDRCxHQUFELENBQU4sQ0FBWWlCLEtBQVosQ0FBa0I7QUFBRUMsSUFBRSxFQUFFO0FBQU4sQ0FBbEIsQ0FBSDtBQUFBO0FBQUE7QUFBQSxnQ0FBZCIsImZpbGUiOiIuL2NvbXBvbmVudHMvQnV0dG9uLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7XG4gIGlzRGFya0JhY2tncm91bmQsXG4gIGNvbG9ycyxcbiAgc3BhY2UsXG4gIGNvbG9yQ2hhbmdlLFxuICBoZXhUb1JHQixcbn0gZnJvbSBcIi4vVXRpbHNcIjtcblxuZXhwb3J0IGNvbnN0IEJ0biA9IHN0eWxlZC5idXR0b25gXG4gIGNvbG9yOiAkeyhwcm9wcykgPT5cbiAgICBpc0RhcmtCYWNrZ3JvdW5kKHByb3BzLmNvbG9yKSA/IGNvbG9ycy53aGl0ZSA6IGNvbG9ycy5ibGFja307XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdHJhbnNpdGlvbjogMC40cyBhbGwgY3ViaWMtYmV6aWVyKDAuMTUsIDAuNzUsIDAuNDUsIDAuOTUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT5cbiAgICBwcm9wcy5jb2xvciA/IGNvbG9yc1twcm9wcy5jb2xvcl0gOiBjb2xvcnMubGlnaHRCbHVlfTtcblxuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6ICR7c3BhY2VbMl0gKyBcInB4XCJ9ICR7c3BhY2VbM10gKyBcInB4XCJ9O1xuXG4gICR7KHByb3BzKSA9PlxuICAgIHByb3BzLnNpemUgPT09IFwibGdcIiAmJlxuICAgIGNzc2BcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIHBhZGRpbmc6ICR7c3BhY2VbMl0gKyA0ICsgXCJweFwifSAke3NwYWNlWzRdICsgXCJweFwifTtcbiAgICBgfVxuXG4gICR7KHByb3BzKSA9PlxuICAgIHByb3BzLnNpemUgPT09IFwic21cIiAmJlxuICAgIGNzc2BcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIHBhZGRpbmc6ICR7c3BhY2VbMV0gKyBcInB4XCJ9ICR7c3BhY2VbMl0gKyBcInB4XCJ9O1xuICAgIGB9XG5cbiAgJHsocHJvcHMpID0+XG4gICAgcHJvcHMuZGlzcGxheSA9PT0gXCJibG9ja1wiICYmXG4gICAgY3NzYFxuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICBgfVxuXG4gICR7KHByb3BzKSA9PlxuICAgIHByb3BzLnR3aXR0ZXIgJiZcbiAgICBjc3NgXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2hleFRvUkdCKGNvbG9ycy5saWdodEJsdWUsIDAuNSl9O1xuICAgIGB9XG5cbiAgICBcblxuICAmOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApIHNjYWxlKDEuMSk7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgQnRuTGluayA9IHN0eWxlZChCdG4pLmF0dHJzKHsgYXM6IFwiYVwiIH0pYFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbmA7XG5cbmV4cG9ydCBjb25zdCBCdG5SYWluYm93ID0gc3R5bGVkKEJ0bkxpbmspYFxuICBhbmltYXRpb246ICR7Y29sb3JDaGFuZ2UoXCJiYWNrZ3JvdW5kXCIpfSAxMHMgaW5maW5pdGUgYWx0ZXJuYXRlO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG5gO1xuXG5leHBvcnQgY29uc3QgQnRuSW5wdXQgPSBzdHlsZWQoQnRuKS5hdHRycyh7IGFzOiBcImlucHV0XCIgfSlgXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Button.js\n");

/***/ })

})