(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/CreateTweetForm.tsx":
/*!****************************************!*\
  !*** ./components/CreateTweetForm.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateTweetForm": function() { return /* binding */ CreateTweetForm; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_fetcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/fetcher */ "./components/util/fetcher.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _util_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/hooks */ "./components/util/hooks.tsx");

var _jsxFileName = "F:\\Projects\\fs-twitter-clone\\components\\CreateTweetForm.tsx";





const CreateTweetForm = () => {
  const {
    0: input,
    1: setInput
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  const {
    feed
  } = (0,_util_hooks__WEBPACK_IMPORTED_MODULE_5__.useFeed)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
    style: {
      padding: '2rem'
    },
    onSubmit: async e => {
      e.preventDefault();
      (0,swr__WEBPACK_IMPORTED_MODULE_2__.mutate)('/api/feed', [{
        text: input,
        author: {
          username: 'Marshall Mathers'
        }
      }, ...feed], false);
      (0,_util_fetcher__WEBPACK_IMPORTED_MODULE_3__.fetcher)("/api/tweet/create", {
        text: input
      });
      setInput('');
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Input, {
          value: input,
          onChange: e => setInput(e.target.value)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 21
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
          htmlType: "submit",
          children: "Tweet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./components/Feed.tsx":
/*!*****************************!*\
  !*** ./components/Feed.tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Feed": function() { return /* binding */ Feed; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/hooks */ "./components/util/hooks.tsx");


var _jsxFileName = "F:\\Projects\\fs-twitter-clone\\components\\Feed.tsx";


const Feed = () => {
  const {
    feed
  } = (0,_util_hooks__WEBPACK_IMPORTED_MODULE_2__.useFeed)();
  return feed ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: feed.map(({
      id,
      text,
      author
    }, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Card, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
        children: text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 21
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: author.username
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 21
      }, undefined)]
    }, i, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }, undefined))
  }, void 0, false) : null;
};

/***/ }),

/***/ "./components/util/fetcher.tsx":
/*!*************************************!*\
  !*** ./components/util/fetcher.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetcher": function() { return /* binding */ fetcher; }
/* harmony export */ });
const fetcher = (url, data) => fetch(window.location.origin + url, {
  method: data ? 'POST' : 'GET',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
}).then(r => r.json());

/***/ }),

/***/ "./components/util/hooks.tsx":
/*!***********************************!*\
  !*** ./components/util/hooks.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useFeed": function() { return /* binding */ useFeed; }
/* harmony export */ });
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fetcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetcher */ "./components/util/fetcher.tsx");


function useFeed() {
  const {
    data: feed
  } = swr__WEBPACK_IMPORTED_MODULE_0___default()('/api/feed', _fetcher__WEBPACK_IMPORTED_MODULE_1__.fetcher);
  return {
    feed
  };
}

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Feed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Feed */ "./components/Feed.tsx");
/* harmony import */ var _components_CreateTweetForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CreateTweetForm */ "./components/CreateTweetForm.tsx");

var _jsxFileName = "F:\\Projects\\fs-twitter-clone\\pages\\index.tsx";



/* harmony default export */ __webpack_exports__["default"] = (() => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
    md: {
      span: 10,
      offset: 8
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CreateTweetForm__WEBPACK_IMPORTED_MODULE_3__.CreateTweetForm, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Feed__WEBPACK_IMPORTED_MODULE_2__.Feed, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 6,
  columnNumber: 5
}, undefined));

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("antd");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ (function(module) {

"use strict";
module.exports = require("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcy10d2l0dGVyLWNsb25lLy4vY29tcG9uZW50cy9DcmVhdGVUd2VldEZvcm0udHN4Iiwid2VicGFjazovL2ZzLXR3aXR0ZXItY2xvbmUvLi9jb21wb25lbnRzL0ZlZWQudHN4Iiwid2VicGFjazovL2ZzLXR3aXR0ZXItY2xvbmUvLi9jb21wb25lbnRzL3V0aWwvZmV0Y2hlci50c3giLCJ3ZWJwYWNrOi8vZnMtdHdpdHRlci1jbG9uZS8uL2NvbXBvbmVudHMvdXRpbC9ob29rcy50c3giLCJ3ZWJwYWNrOi8vZnMtdHdpdHRlci1jbG9uZS8uL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9mcy10d2l0dGVyLWNsb25lL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovL2ZzLXR3aXR0ZXItY2xvbmUvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2ZzLXR3aXR0ZXItY2xvbmUvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9mcy10d2l0dGVyLWNsb25lL2V4dGVybmFsIFwic3dyXCIiXSwibmFtZXMiOlsiQ3JlYXRlVHdlZXRGb3JtIiwiaW5wdXQiLCJzZXRJbnB1dCIsInVzZVN0YXRlIiwiZmVlZCIsInVzZUZlZWQiLCJwYWRkaW5nIiwiZSIsInByZXZlbnREZWZhdWx0IiwibXV0YXRlIiwidGV4dCIsImF1dGhvciIsInVzZXJuYW1lIiwiZmV0Y2hlciIsInRhcmdldCIsInZhbHVlIiwiRmVlZCIsIm1hcCIsImlkIiwiaSIsInVybCIsImRhdGEiLCJmZXRjaCIsIndpbmRvdyIsImxvY2F0aW9uIiwib3JpZ2luIiwibWV0aG9kIiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwiciIsImpzb24iLCJ1c2VTV1IiLCJzcGFuIiwib2Zmc2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7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QUNBLFNBQU87QUFBRVQ7QUFBRixHQUFQO0FBQ0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNORDtBQUNBO0FBQ0E7QUFFQSwrREFBZSxtQkFDWCw4REFBQyxxQ0FBRDtBQUFBLHlCQUNJLDhEQUFDLHFDQUFEO0FBQUssTUFBRSxFQUFFO0FBQUVnQyxVQUFJLEVBQUUsRUFBUjtBQUFZQyxZQUFNLEVBQUU7QUFBcEIsS0FBVDtBQUFBLDRCQUNJLDhEQUFDLHdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSSw4REFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixFOzs7Ozs7Ozs7OztBQ0pBLGtDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLGlDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBtZXNzYWdlLCBSb3csIENvbCwgSW5wdXQgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBtdXRhdGUgfSBmcm9tIFwic3dyXCI7XHJcbmltcG9ydCB7IGZldGNoZXIgfSBmcm9tIFwiLi91dGlsL2ZldGNoZXJcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRmVlZCB9IGZyb20gXCIuL3V0aWwvaG9va3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDcmVhdGVUd2VldEZvcm0gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IHsgZmVlZCB9ID0gdXNlRmVlZCgpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogJzJyZW0nIH19XHJcbiAgICAgICAgICAgIG9uU3VibWl0PXthc3luYyAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIG11dGF0ZShcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAnL2FwaS9mZWVkJyxcclxuICAgICAgICAgICAgICAgICAgICBbeyB0ZXh0OiBpbnB1dCwgYXV0aG9yOiB7IHVzZXJuYW1lOiAnTWFyc2hhbGwgTWF0aGVycycgfX0sIC4uLmZlZWRdLCBmYWxzZVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGZldGNoZXIoXCIvYXBpL3R3ZWV0L2NyZWF0ZVwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogaW5wdXRcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgc2V0SW5wdXQoJycpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB2YWx1ZT17aW5wdXR9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW5wdXQoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGh0bWxUeXBlPVwic3VibWl0XCI+VHdlZXQ8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICApO1xyXG59OyIsImltcG9ydCB7IENhcmQgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgdXNlRmVlZCB9IGZyb20gJy4vdXRpbC9ob29rcyc7XHJcblxyXG5leHBvcnQgY29uc3QgRmVlZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgZmVlZCB9ID0gdXNlRmVlZCgpO1xyXG4gICAgcmV0dXJuIGZlZWQgPyAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge2ZlZWQubWFwKCh7IGlkLCB0ZXh0LCBhdXRob3IgfSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPENhcmQga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICA8aDQ+e3RleHR9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57YXV0aG9yLnVzZXJuYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC8+XHJcbiAgICApIDogbnVsbDtcclxufTsiLCJleHBvcnQgY29uc3QgZmV0Y2hlciA9ICh1cmwsIGRhdGEpID0+XHJcbiAgICAoZmV0Y2god2luZG93LmxvY2F0aW9uLm9yaWdpbiArIHVybCwge1xyXG4gICAgICAgIG1ldGhvZDogZGF0YSA/ICdQT1NUJyA6ICdHRVQnLFxyXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJyA6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSlcclxuICAgIH0pKS50aGVuKChyKSA9PiByLmpzb24oKSk7IiwiaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xyXG5pbXBvcnQgeyBmZXRjaGVyIH0gZnJvbSAnLi9mZXRjaGVyJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VGZWVkKCkge1xyXG4gICAgY29uc3Qge2RhdGE6IGZlZWR9ID0gdXNlU1dSKCcvYXBpL2ZlZWQnLCBmZXRjaGVyKTtcclxuICAgIHJldHVybiB7IGZlZWQgfTtcclxufSIsImltcG9ydCB7IENvbCwgUm93IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgRmVlZCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0ZlZWRcIjtcclxuaW1wb3J0IHsgQ3JlYXRlVHdlZXRGb3JtIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ3JlYXRlVHdlZXRGb3JtXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXHJcbiAgICA8Um93PlxyXG4gICAgICAgIDxDb2wgbWQ9e3sgc3BhbjogMTAsIG9mZnNldDogOCB9fT5cclxuICAgICAgICAgICAgPENyZWF0ZVR3ZWV0Rm9ybSAvPlxyXG4gICAgICAgICAgICA8RmVlZCAvPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgPC9Sb3c+XHJcbik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3dyXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9