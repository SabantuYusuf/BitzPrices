webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Prices.js":
/*!******************************!*\
  !*** ./components/Prices.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_sabantuyusuf_mycode_BITZPRICE_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_sabantuyusuf_mycode_BITZPRICE_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_sabantuyusuf_mycode_BITZPRICE_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _Users_sabantuyusuf_mycode_BITZPRICE_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _Users_sabantuyusuf_mycode_BITZPRICE_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _Users_sabantuyusuf_mycode_BITZPRICE_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _Users_sabantuyusuf_mycode_BITZPRICE_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/sabantuyusuf/mycode/BITZPRICE/components/Prices.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_Users_sabantuyusuf_mycode_BITZPRICE_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_Users_sabantuyusuf_mycode_BITZPRICE_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_Users_sabantuyusuf_mycode_BITZPRICE_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\nvar Prices = /*#__PURE__*/function (_React$Component) {\n  Object(_Users_sabantuyusuf_mycode_BITZPRICE_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Prices, _React$Component);\n\n  var _super = _createSuper(Prices);\n\n  function Prices() {\n    var _this;\n\n    Object(_Users_sabantuyusuf_mycode_BITZPRICE_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Prices);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_Users_sabantuyusuf_mycode_BITZPRICE_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_Users_sabantuyusuf_mycode_BITZPRICE_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"state\", {\n      currency: 'USD'\n    });\n\n    return _this;\n  }\n\n  Object(_Users_sabantuyusuf_mycode_BITZPRICE_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Prices, [{\n    key: \"render\",\n    value: function render() {\n      var list = '';\n\n      if (this.state.currency === 'USD') {\n        /*#__PURE__*/\n        Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"li\", {\n          className: \"list-group-item\",\n          children: [\"Bitcoin rate for \", this.props.bpi.USD.discription, \": \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"span\", {\n            \"class\": \"badge badge-primary\",\n            children: [\" \", this.props.bpi.USD.code]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 14,\n            columnNumber: 27\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"strong\", {\n            children: this.props.bpi.USD.rate\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 15,\n            columnNumber: 25\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 13\n        }, this);\n      } else if (this.state.currency === 'GBP') {\n        /*#__PURE__*/\n        Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"li\", {\n          className: \"list-group-item\",\n          children: [\"Bitcoin rate for \", this.props.bpi.USD.discription, \": \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"span\", {\n            \"class\": \"badge badge-primary\",\n            children: [\" \", this.props.bpi.GBP.code]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 21,\n            columnNumber: 27\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"strong\", {\n            children: this.props.bpi.GBP.rate\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 22,\n            columnNumber: 25\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 13\n        }, this);\n      } else if (this.state.currency === 'EUR') {\n        /*#__PURE__*/\n        Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"li\", {\n          className: \"list-group-item\",\n          children: [\"Bitcoin rate for \", this.props.bpi.EUR.discription, \": \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"span\", {\n            \"class\": \"badge badge-primary\",\n            children: [\" \", this.props.bpi.USD.code]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 27\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"strong\", {\n            children: this.props.bpi.EUR.rate\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 25\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 13\n        }, this);\n      }\n\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"div\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"ul\", {\n          className: \"list-group\",\n          children: list\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 17\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 13\n      }, this);\n    }\n  }]);\n\n  return Prices;\n}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Prices);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QcmljZXMuanM/YmUyZCJdLCJuYW1lcyI6WyJQcmljZXMiLCJjdXJyZW5jeSIsImxpc3QiLCJzdGF0ZSIsInByb3BzIiwiYnBpIiwiVVNEIiwiZGlzY3JpcHRpb24iLCJjb2RlIiwicmF0ZSIsIkdCUCIsIkVVUiIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztJQUVNQSxNOzs7Ozs7Ozs7Ozs7Ozs7O2tUQUNNO0FBQ0pDLGNBQVEsRUFBRTtBQUROLEs7Ozs7Ozs7NkJBSUM7QUFDTCxVQUFJQyxJQUFJLEdBQUUsRUFBVjs7QUFFQSxVQUFHLEtBQUtDLEtBQUwsQ0FBV0YsUUFBWCxLQUF1QixLQUExQixFQUFpQztBQUM3QjtBQUFBO0FBQUksbUJBQVMsRUFBQyxpQkFBZDtBQUFBLDBDQUM4QixLQUFLRyxLQUFMLENBQVdDLEdBQVgsQ0FBZUMsR0FBZixDQUFtQkMsV0FEakQscUJBRWM7QUFBTSxxQkFBTSxxQkFBWjtBQUFBLDRCQUFvQyxLQUFLSCxLQUFMLENBQVdDLEdBQVgsQ0FBZUMsR0FBZixDQUFtQkUsSUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZkLGVBR1k7QUFBQSxzQkFBUyxLQUFLSixLQUFMLENBQVdDLEdBQVgsQ0FBZUMsR0FBZixDQUFtQkc7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNSCxPQVBELE1BT00sSUFBRyxLQUFLTixLQUFMLENBQVdGLFFBQVgsS0FBc0IsS0FBekIsRUFBZ0M7QUFDbEM7QUFBQTtBQUFJLG1CQUFTLEVBQUMsaUJBQWQ7QUFBQSwwQ0FDOEIsS0FBS0csS0FBTCxDQUFXQyxHQUFYLENBQWVDLEdBQWYsQ0FBbUJDLFdBRGpELHFCQUVjO0FBQU0scUJBQU0scUJBQVo7QUFBQSw0QkFBb0MsS0FBS0gsS0FBTCxDQUFXQyxHQUFYLENBQWVLLEdBQWYsQ0FBbUJGLElBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGZCxlQUdZO0FBQUEsc0JBQVMsS0FBS0osS0FBTCxDQUFXQyxHQUFYLENBQWVLLEdBQWYsQ0FBbUJEO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUgsT0FQSyxNQU9BLElBQUcsS0FBS04sS0FBTCxDQUFXRixRQUFYLEtBQXNCLEtBQXpCLEVBQWdDO0FBQ2xDO0FBQUE7QUFBSSxtQkFBUyxFQUFDLGlCQUFkO0FBQUEsMENBQzhCLEtBQUtHLEtBQUwsQ0FBV0MsR0FBWCxDQUFlTSxHQUFmLENBQW1CSixXQURqRCxxQkFFYztBQUFNLHFCQUFNLHFCQUFaO0FBQUEsNEJBQW9DLEtBQUtILEtBQUwsQ0FBV0MsR0FBWCxDQUFlQyxHQUFmLENBQW1CRSxJQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRmQsZUFHWTtBQUFBLHNCQUFTLEtBQUtKLEtBQUwsQ0FBV0MsR0FBWCxDQUFlTSxHQUFmLENBQW1CRjtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1IOztBQUdELDBCQUNJO0FBQUEsK0JBQ0k7QUFBSSxtQkFBUyxFQUFDLFlBQWQ7QUFBQSxvQkFDS1A7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKO0FBT0g7Ozs7RUF2Q2dCVSw0Q0FBSyxDQUFDQyxTOztBQTBDWmIscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1ByaWNlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY2xhc3MgUHJpY2VzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgY3VycmVuY3k6ICdVU0QnXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgbGlzdCA9Jyc7XG5cbiAgICAgICAgaWYodGhpcy5zdGF0ZS5jdXJyZW5jeSA9PT0nVVNEJykge1xuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgQml0Y29pbiByYXRlIGZvciB7dGhpcy5wcm9wcy5icGkuVVNELmRpc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgOiA8c3BhbiBjbGFzcz1cImJhZGdlIGJhZGdlLXByaW1hcnlcIj4ge3RoaXMucHJvcHMuYnBpLlVTRC5jb2RlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e3RoaXMucHJvcHMuYnBpLlVTRC5yYXRlfTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuc3RhdGUuY3VycmVuY3k9PT0nR0JQJykge1xuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgQml0Y29pbiByYXRlIGZvciB7dGhpcy5wcm9wcy5icGkuVVNELmRpc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgOiA8c3BhbiBjbGFzcz1cImJhZGdlIGJhZGdlLXByaW1hcnlcIj4ge3RoaXMucHJvcHMuYnBpLkdCUC5jb2RlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e3RoaXMucHJvcHMuYnBpLkdCUC5yYXRlfTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgIH1lbHNlIGlmKHRoaXMuc3RhdGUuY3VycmVuY3k9PT0nRVVSJykge1xuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgQml0Y29pbiByYXRlIGZvciB7dGhpcy5wcm9wcy5icGkuRVVSLmRpc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgOiA8c3BhbiBjbGFzcz1cImJhZGdlIGJhZGdlLXByaW1hcnlcIj4ge3RoaXMucHJvcHMuYnBpLlVTRC5jb2RlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e3RoaXMucHJvcHMuYnBpLkVVUi5yYXRlfTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuXG4gICAgICAgIH1cblxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIHtsaXN0fVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByaWNlczsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Prices.js\n");

/***/ })

})