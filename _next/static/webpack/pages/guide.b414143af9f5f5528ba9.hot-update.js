webpackHotUpdate_N_E("pages/guide",{

/***/ "./components/Button.js":
/*!******************************!*\
  !*** ./components/Button.js ***!
  \******************************/
/*! exports provided: Btn, BtnLink, BtnRainbow, BtnInput, BtnTwitter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Btn\", function() { return Btn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BtnLink\", function() { return BtnLink; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BtnRainbow\", function() { return BtnRainbow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BtnInput\", function() { return BtnInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BtnTwitter\", function() { return BtnTwitter; });\n/* harmony import */ var _Users_philipdavis_Documents_swiftui_for_designers_next_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_philipdavis_Documents_swiftui_for_designers_next_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Utils */ \"./components/Utils.js\");\n\n\n\nvar _jsxFileName = \"/Users/philipdavis/Documents/swiftui-for-designers/next-app/components/Button.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_philipdavis_Documents_swiftui_for_designers_next_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nvar Btn = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].button.withConfig({\n  displayName: \"Button__Btn\",\n  componentId: \"sc-1je6red-0\"\n})([\"color:\", \";outline:none;font-family:inherit;backface-visibility:hidden;margin-right:10px;border:none;border-radius:8px;user-select:none;font-weight:bold;background-color:\", \";font-size:16px;padding:\", \" \", \";\", \" \", \" \", \" \", \" &:hover{cursor:pointer;box-shadow:inset 0 0 0 2px rgba(0,0,0,0.15);}\"], function (props) {\n  return Object(_Utils__WEBPACK_IMPORTED_MODULE_4__[\"isDarkBackground\"])(props.color) ? _Utils__WEBPACK_IMPORTED_MODULE_4__[\"colors\"].white : _Utils__WEBPACK_IMPORTED_MODULE_4__[\"colors\"].black;\n}, function (props) {\n  return props.color ? _Utils__WEBPACK_IMPORTED_MODULE_4__[\"colors\"][props.color] : _Utils__WEBPACK_IMPORTED_MODULE_4__[\"colors\"].lightBlue;\n}, _Utils__WEBPACK_IMPORTED_MODULE_4__[\"space\"][2] + \"px\", _Utils__WEBPACK_IMPORTED_MODULE_4__[\"space\"][3] + \"px\", function (props) {\n  return props.size === \"lg\" && Object(styled_components__WEBPACK_IMPORTED_MODULE_3__[\"css\"])([\"font-size:18px;padding:\", \" \", \";\"], _Utils__WEBPACK_IMPORTED_MODULE_4__[\"space\"][2] + 4 + \"px\", _Utils__WEBPACK_IMPORTED_MODULE_4__[\"space\"][4] + \"px\");\n}, function (props) {\n  return props.size === \"sm\" && Object(styled_components__WEBPACK_IMPORTED_MODULE_3__[\"css\"])([\"font-size:14px;padding:\", \" \", \";\"], _Utils__WEBPACK_IMPORTED_MODULE_4__[\"space\"][1] + \"px\", _Utils__WEBPACK_IMPORTED_MODULE_4__[\"space\"][2] + \"px\");\n}, function (props) {\n  return props.display === \"block\" && Object(styled_components__WEBPACK_IMPORTED_MODULE_3__[\"css\"])([\"display:block;width:100%;\"]);\n}, function (props) {\n  return props.twitter && Object(styled_components__WEBPACK_IMPORTED_MODULE_3__[\"css\"])([\"background-color:\", \";\"], Object(_Utils__WEBPACK_IMPORTED_MODULE_4__[\"hexToRGB\"])(_Utils__WEBPACK_IMPORTED_MODULE_4__[\"colors\"].lightBlue, 0.6));\n});\n_c = Btn;\nvar BtnLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Btn).attrs({\n  as: \"a\"\n}).withConfig({\n  displayName: \"Button__BtnLink\",\n  componentId: \"sc-1je6red-1\"\n})([\"text-decoration:none;display:inline-block;\"]);\nvar BtnRainbow = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(BtnLink).withConfig({\n  displayName: \"Button__BtnRainbow\",\n  componentId: \"sc-1je6red-2\"\n})([\"animation:\", \" 10s infinite alternate;margin-right:0;\"], Object(_Utils__WEBPACK_IMPORTED_MODULE_4__[\"colorChange\"])(\"background\"));\nvar BtnInput = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Btn).attrs({\n  as: \"input\"\n}).withConfig({\n  displayName: \"Button__BtnInput\",\n  componentId: \"sc-1je6red-3\"\n})([\"-webkit-appearance:none;\"]);\nfunction BtnTwitter(_ref) {\n  var children = _ref.children,\n      props = Object(_Users_philipdavis_Documents_swiftui_for_designers_next_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, [\"children\"]);\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Btn, _objectSpread(_objectSpread({}, props), {}, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(Icon, {\n      name: \"twitter\",\n      size: 34\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }, this), props.children]\n  }), void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 78,\n    columnNumber: 5\n  }, this);\n}\n_c2 = BtnTwitter;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Btn\");\n$RefreshReg$(_c2, \"BtnTwitter\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CdXR0b24uanM/MDg4NSJdLCJuYW1lcyI6WyJCdG4iLCJzdHlsZWQiLCJidXR0b24iLCJwcm9wcyIsImlzRGFya0JhY2tncm91bmQiLCJjb2xvciIsImNvbG9ycyIsIndoaXRlIiwiYmxhY2siLCJsaWdodEJsdWUiLCJzcGFjZSIsInNpemUiLCJjc3MiLCJkaXNwbGF5IiwidHdpdHRlciIsImhleFRvUkdCIiwiQnRuTGluayIsImF0dHJzIiwiYXMiLCJCdG5SYWluYm93IiwiY29sb3JDaGFuZ2UiLCJCdG5JbnB1dCIsIkJ0blR3aXR0ZXIiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVFPLElBQU1BLEdBQUcsR0FBR0MseURBQU0sQ0FBQ0MsTUFBVjtBQUFBO0FBQUE7QUFBQSxpVEFDTCxVQUFDQyxLQUFEO0FBQUEsU0FDUEMsK0RBQWdCLENBQUNELEtBQUssQ0FBQ0UsS0FBUCxDQUFoQixHQUFnQ0MsNkNBQU0sQ0FBQ0MsS0FBdkMsR0FBK0NELDZDQUFNLENBQUNFLEtBRC9DO0FBQUEsQ0FESyxFQVdNLFVBQUNMLEtBQUQ7QUFBQSxTQUNsQkEsS0FBSyxDQUFDRSxLQUFOLEdBQWNDLDZDQUFNLENBQUNILEtBQUssQ0FBQ0UsS0FBUCxDQUFwQixHQUFvQ0MsNkNBQU0sQ0FBQ0csU0FEekI7QUFBQSxDQVhOLEVBZUhDLDRDQUFLLENBQUMsQ0FBRCxDQUFMLEdBQVcsSUFmUixFQWVnQkEsNENBQUssQ0FBQyxDQUFELENBQUwsR0FBVyxJQWYzQixFQWlCWixVQUFDUCxLQUFEO0FBQUEsU0FDQUEsS0FBSyxDQUFDUSxJQUFOLEtBQWUsSUFBZixJQUNBQyw2REFEQSx3Q0FHYUYsNENBQUssQ0FBQyxDQUFELENBQUwsR0FBVyxDQUFYLEdBQWUsSUFINUIsRUFHb0NBLDRDQUFLLENBQUMsQ0FBRCxDQUFMLEdBQVcsSUFIL0MsQ0FEQTtBQUFBLENBakJZLEVBd0JaLFVBQUNQLEtBQUQ7QUFBQSxTQUNBQSxLQUFLLENBQUNRLElBQU4sS0FBZSxJQUFmLElBQ0FDLDZEQURBLHdDQUdhRiw0Q0FBSyxDQUFDLENBQUQsQ0FBTCxHQUFXLElBSHhCLEVBR2dDQSw0Q0FBSyxDQUFDLENBQUQsQ0FBTCxHQUFXLElBSDNDLENBREE7QUFBQSxDQXhCWSxFQStCWixVQUFDUCxLQUFEO0FBQUEsU0FDQUEsS0FBSyxDQUFDVSxPQUFOLEtBQWtCLE9BQWxCLElBQ0FELDZEQURBLCtCQURBO0FBQUEsQ0EvQlksRUFzQ1osVUFBQ1QsS0FBRDtBQUFBLFNBQ0FBLEtBQUssQ0FBQ1csT0FBTixJQUNBRiw2REFEQSw2QkFFc0JHLHVEQUFRLENBQUNULDZDQUFNLENBQUNHLFNBQVIsRUFBbUIsR0FBbkIsQ0FGOUIsQ0FEQTtBQUFBLENBdENZLENBQVQ7S0FBTVQsRztBQW9ETixJQUFNZ0IsT0FBTyxHQUFHZixpRUFBTSxDQUFDRCxHQUFELENBQU4sQ0FBWWlCLEtBQVosQ0FBa0I7QUFBRUMsSUFBRSxFQUFFO0FBQU4sQ0FBbEIsQ0FBSDtBQUFBO0FBQUE7QUFBQSxrREFBYjtBQUtBLElBQU1DLFVBQVUsR0FBR2xCLGlFQUFNLENBQUNlLE9BQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSw4REFDUkksMERBQVcsQ0FBQyxZQUFELENBREgsQ0FBaEI7QUFLQSxJQUFNQyxRQUFRLEdBQUdwQixpRUFBTSxDQUFDRCxHQUFELENBQU4sQ0FBWWlCLEtBQVosQ0FBa0I7QUFBRUMsSUFBRSxFQUFFO0FBQU4sQ0FBbEIsQ0FBSDtBQUFBO0FBQUE7QUFBQSxnQ0FBZDtBQUlBLFNBQVNJLFVBQVQsT0FBNEM7QUFBQSxNQUF0QkMsUUFBc0IsUUFBdEJBLFFBQXNCO0FBQUEsTUFBVHBCLEtBQVM7O0FBQ2pELHNCQUNFLHFFQUFDLEdBQUQsa0NBQVNBLEtBQVQ7QUFBQSw0QkFDRSxxRUFBQyxJQUFEO0FBQU0sVUFBSSxFQUFDLFNBQVg7QUFBcUIsVUFBSSxFQUFFO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUVHQSxLQUFLLENBQUNvQixRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBTUQ7TUFQZUQsVSIsImZpbGUiOiIuL2NvbXBvbmVudHMvQnV0dG9uLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7XG4gIGlzRGFya0JhY2tncm91bmQsXG4gIGNvbG9ycyxcbiAgc3BhY2UsXG4gIGNvbG9yQ2hhbmdlLFxuICBoZXhUb1JHQixcbn0gZnJvbSBcIi4vVXRpbHNcIjtcblxuZXhwb3J0IGNvbnN0IEJ0biA9IHN0eWxlZC5idXR0b25gXG4gIGNvbG9yOiAkeyhwcm9wcykgPT5cbiAgICBpc0RhcmtCYWNrZ3JvdW5kKHByb3BzLmNvbG9yKSA/IGNvbG9ycy53aGl0ZSA6IGNvbG9ycy5ibGFja307XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+XG4gICAgcHJvcHMuY29sb3IgPyBjb2xvcnNbcHJvcHMuY29sb3JdIDogY29sb3JzLmxpZ2h0Qmx1ZX07XG5cbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiAke3NwYWNlWzJdICsgXCJweFwifSAke3NwYWNlWzNdICsgXCJweFwifTtcblxuICAkeyhwcm9wcykgPT5cbiAgICBwcm9wcy5zaXplID09PSBcImxnXCIgJiZcbiAgICBjc3NgXG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBwYWRkaW5nOiAke3NwYWNlWzJdICsgNCArIFwicHhcIn0gJHtzcGFjZVs0XSArIFwicHhcIn07XG4gICAgYH1cblxuICAkeyhwcm9wcykgPT5cbiAgICBwcm9wcy5zaXplID09PSBcInNtXCIgJiZcbiAgICBjc3NgXG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBwYWRkaW5nOiAke3NwYWNlWzFdICsgXCJweFwifSAke3NwYWNlWzJdICsgXCJweFwifTtcbiAgICBgfVxuXG4gICR7KHByb3BzKSA9PlxuICAgIHByb3BzLmRpc3BsYXkgPT09IFwiYmxvY2tcIiAmJlxuICAgIGNzc2BcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgYH1cblxuICAkeyhwcm9wcykgPT5cbiAgICBwcm9wcy50d2l0dGVyICYmXG4gICAgY3NzYFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtoZXhUb1JHQihjb2xvcnMubGlnaHRCbHVlLCAwLjYpfTtcbiAgICBgfVxuXG4gICAgXG5cbiAgJjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgQnRuTGluayA9IHN0eWxlZChCdG4pLmF0dHJzKHsgYXM6IFwiYVwiIH0pYFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbmA7XG5cbmV4cG9ydCBjb25zdCBCdG5SYWluYm93ID0gc3R5bGVkKEJ0bkxpbmspYFxuICBhbmltYXRpb246ICR7Y29sb3JDaGFuZ2UoXCJiYWNrZ3JvdW5kXCIpfSAxMHMgaW5maW5pdGUgYWx0ZXJuYXRlO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG5gO1xuXG5leHBvcnQgY29uc3QgQnRuSW5wdXQgPSBzdHlsZWQoQnRuKS5hdHRycyh7IGFzOiBcImlucHV0XCIgfSlgXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbmA7XG5cbmV4cG9ydCBmdW5jdGlvbiBCdG5Ud2l0dGVyKHsgY2hpbGRyZW4sIC4uLnByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8QnRuIHsuLi5wcm9wc30+XG4gICAgICA8SWNvbiBuYW1lPVwidHdpdHRlclwiIHNpemU9ezM0fSAvPlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvQnRuPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Button.js\n");

/***/ })

})