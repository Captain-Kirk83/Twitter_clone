self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/CreateTweetForm.tsx":
/*!****************************************!*\
  !*** ./components/CreateTweetForm.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateTweetForm": function() { return /* binding */ CreateTweetForm; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var F_Projects_fs_twitter_clone_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var F_Projects_fs_twitter_clone_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(F_Projects_fs_twitter_clone_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var F_Projects_fs_twitter_clone_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var F_Projects_fs_twitter_clone_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _util_fetcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/fetcher */ "./components/util/fetcher.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _util_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util/hooks */ "./components/util/hooks.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "F:\\Projects\\fs-twitter-clone\\components\\CreateTweetForm.tsx",
    _this = undefined,
    _s = $RefreshSig$();






var CreateTweetForm = function CreateTweetForm() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''),
      input = _useState[0],
      setInput = _useState[1];

  var _useFeed = (0,_util_hooks__WEBPACK_IMPORTED_MODULE_7__.useFeed)(),
      feed = _useFeed.feed;

  var _useMe = (0,_util_hooks__WEBPACK_IMPORTED_MODULE_7__.useMe)(),
      me = _useMe.me;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
    style: {
      padding: '2rem'
    },
    onSubmit: /*#__PURE__*/function () {
      var _ref = (0,F_Projects_fs_twitter_clone_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/F_Projects_fs_twitter_clone_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {
        return F_Projects_fs_twitter_clone_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                (0,swr__WEBPACK_IMPORTED_MODULE_4__.mutate)('/api/feed', [{
                  text: input,
                  author: {
                    username: me.username
                  }
                }].concat((0,F_Projects_fs_twitter_clone_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(feed)), false);
                (0,_util_fetcher__WEBPACK_IMPORTED_MODULE_5__.fetcher)("/api/tweet/create", {
                  text: input
                });
                setInput('');

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }(),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_8__.Row, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_8__.Col, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_8__.Input, {
          value: input,
          onChange: function onChange(e) {
            return setInput(e.target.value);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 25
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 21
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_8__.Col, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_8__.Button, {
          htmlType: "submit",
          children: "Tweet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 25
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 21
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, _this);
};

_s(CreateTweetForm, "K7r6aCqRMH8NWlGAljJTjemcWhI=", false, function () {
  return [_util_hooks__WEBPACK_IMPORTED_MODULE_7__.useFeed, _util_hooks__WEBPACK_IMPORTED_MODULE_7__.useMe];
});

_c = CreateTweetForm;

var _c;

$RefreshReg$(_c, "CreateTweetForm");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DcmVhdGVUd2VldEZvcm0udHN4Il0sIm5hbWVzIjpbIkNyZWF0ZVR3ZWV0Rm9ybSIsInVzZVN0YXRlIiwiaW5wdXQiLCJzZXRJbnB1dCIsInVzZUZlZWQiLCJmZWVkIiwidXNlTWUiLCJtZSIsInBhZGRpbmciLCJlIiwicHJldmVudERlZmF1bHQiLCJtdXRhdGUiLCJ0ZXh0IiwiYXV0aG9yIiwidXNlcm5hbWUiLCJmZXRjaGVyIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUFBOztBQUFBLGtCQUNQQywrQ0FBUSxDQUFDLEVBQUQsQ0FERDtBQUFBLE1BQzFCQyxLQUQwQjtBQUFBLE1BQ25CQyxRQURtQjs7QUFBQSxpQkFFaEJDLG9EQUFPLEVBRlM7QUFBQSxNQUV6QkMsSUFGeUIsWUFFekJBLElBRnlCOztBQUFBLGVBR2xCQyxrREFBSyxFQUhhO0FBQUEsTUFHekJDLEVBSHlCLFVBR3pCQSxFQUh5Qjs7QUFLakMsc0JBQ0k7QUFDSSxTQUFLLEVBQUU7QUFBRUMsYUFBTyxFQUFFO0FBQVgsS0FEWDtBQUVJLFlBQVE7QUFBQSwrU0FBRSxpQkFBT0MsQ0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ05BLGlCQUFDLENBQUNDLGNBQUY7QUFFQUMsMkRBQU0sQ0FFRixXQUZFLEdBR0Q7QUFBRUMsc0JBQUksRUFBRVYsS0FBUjtBQUFlVyx3QkFBTSxFQUFFO0FBQUVDLDRCQUFRLEVBQUVQLEVBQUUsQ0FBQ087QUFBZjtBQUF2QixpQkFIQyx5SkFHcURULElBSHJELElBRzRELEtBSDVELENBQU47QUFLQVUsc0VBQU8sQ0FBQyxtQkFBRCxFQUFzQjtBQUN6Qkgsc0JBQUksRUFBRVY7QUFEbUIsaUJBQXRCLENBQVA7QUFLQUMsd0JBQVEsQ0FBQyxFQUFELENBQVI7O0FBYk07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBRjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUZaO0FBQUEsMkJBa0JRLDhEQUFDLHFDQUFEO0FBQUEsOEJBQ0ksOERBQUMscUNBQUQ7QUFBQSwrQkFDSSw4REFBQyx1Q0FBRDtBQUFPLGVBQUssRUFBRUQsS0FBZDtBQUFxQixrQkFBUSxFQUFFLGtCQUFDTyxDQUFEO0FBQUEsbUJBQU9OLFFBQVEsQ0FBQ00sQ0FBQyxDQUFDTyxNQUFGLENBQVNDLEtBQVYsQ0FBZjtBQUFBO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFLSSw4REFBQyxxQ0FBRDtBQUFBLCtCQUNJLDhEQUFDLHdDQUFEO0FBQVEsa0JBQVEsRUFBQyxRQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFsQlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBOEJILENBbkNNOztHQUFNakIsZTtVQUVRSSxnRCxFQUNGRSw4Qzs7O0tBSE5OLGUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTVlOTEzNjgyYmE4MGRiYTJmODQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiwgbWVzc2FnZSwgUm93LCBDb2wsIElucHV0IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgbXV0YXRlIH0gZnJvbSBcInN3clwiO1xyXG5pbXBvcnQgeyBmZXRjaGVyIH0gZnJvbSBcIi4vdXRpbC9mZXRjaGVyXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUZlZWQsIHVzZU1lIH0gZnJvbSBcIi4vdXRpbC9ob29rc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENyZWF0ZVR3ZWV0Rm9ybSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgeyBmZWVkIH0gPSB1c2VGZWVkKCk7XHJcbiAgICBjb25zdCB7IG1lIH0gPSB1c2VNZSgpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogJzJyZW0nIH19XHJcbiAgICAgICAgICAgIG9uU3VibWl0PXthc3luYyAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIG11dGF0ZShcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAnL2FwaS9mZWVkJyxcclxuICAgICAgICAgICAgICAgICAgICBbeyB0ZXh0OiBpbnB1dCwgYXV0aG9yOiB7IHVzZXJuYW1lOiBtZS51c2VybmFtZSB9fSwgLi4uZmVlZF0sIGZhbHNlXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgZmV0Y2hlcihcIi9hcGkvdHdlZXQvY3JlYXRlXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBpbnB1dFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRJbnB1dCgnJyk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHZhbHVlPXtpbnB1dH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRJbnB1dChlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaHRtbFR5cGU9XCJzdWJtaXRcIj5Ud2VldDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICk7XHJcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==