(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

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
const fetcher = (url, data = undefined) => fetch(window.location.origin + url, {
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

var _jsxFileName = "F:\\Projects\\fs-twitter-clone\\pages\\index.tsx";


/* harmony default export */ __webpack_exports__["default"] = (() => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
    md: {
      span: 10,
      offset: 8
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Feed__WEBPACK_IMPORTED_MODULE_2__.Feed, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 5,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcy10d2l0dGVyLWNsb25lLy4vY29tcG9uZW50cy9GZWVkLnRzeCIsIndlYnBhY2s6Ly9mcy10d2l0dGVyLWNsb25lLy4vY29tcG9uZW50cy91dGlsL2ZldGNoZXIudHN4Iiwid2VicGFjazovL2ZzLXR3aXR0ZXItY2xvbmUvLi9jb21wb25lbnRzL3V0aWwvaG9va3MudHN4Iiwid2VicGFjazovL2ZzLXR3aXR0ZXItY2xvbmUvLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZnMtdHdpdHRlci1jbG9uZS9leHRlcm5hbCBcImFudGRcIiIsIndlYnBhY2s6Ly9mcy10d2l0dGVyLWNsb25lL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vZnMtdHdpdHRlci1jbG9uZS9leHRlcm5hbCBcInN3clwiIl0sIm5hbWVzIjpbIkZlZWQiLCJmZWVkIiwidXNlRmVlZCIsIm1hcCIsImlkIiwidGV4dCIsImF1dGhvciIsImkiLCJ1c2VybmFtZSIsImZldGNoZXIiLCJ1cmwiLCJkYXRhIiwidW5kZWZpbmVkIiwiZmV0Y2giLCJ3aW5kb3ciLCJsb2NhdGlvbiIsIm9yaWdpbiIsIm1ldGhvZCIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInIiLCJqc29uIiwidXNlU1dSIiwic3BhbiIsIm9mZnNldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxNQUFNQSxJQUFJLEdBQUcsTUFBTTtBQUN0QixRQUFNO0FBQUVDO0FBQUYsTUFBV0Msb0RBQU8sRUFBeEI7QUFDQSxTQUFPRCxJQUFJLGdCQUNQO0FBQUEsY0FDS0EsSUFBSSxDQUFDRSxHQUFMLENBQVMsQ0FBQztBQUFFQyxRQUFGO0FBQU1DLFVBQU47QUFBWUM7QUFBWixLQUFELEVBQXVCQyxDQUF2QixrQkFDTiw4REFBQyxzQ0FBRDtBQUFBLDhCQUNJO0FBQUEsa0JBQUtGO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJO0FBQUEsa0JBQU9DLE1BQU0sQ0FBQ0U7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKO0FBQUEsT0FBV0QsQ0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURIO0FBREwsbUJBRE8sR0FTUCxJQVRKO0FBVUgsQ0FaTSxDOzs7Ozs7Ozs7Ozs7Ozs7QUNIQSxNQUFNRSxPQUFPLEdBQUcsQ0FBQ0MsR0FBRCxFQUFNQyxJQUFJLEdBQUdDLFNBQWIsS0FDbkJDLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFoQixHQUF5Qk4sR0FBMUIsRUFBK0I7QUFDaENPLFFBQU0sRUFBRU4sSUFBSSxHQUFHLE1BQUgsR0FBWSxLQURRO0FBRWhDTyxhQUFXLEVBQUUsU0FGbUI7QUFHaENDLFNBQU8sRUFBRTtBQUNMLG9CQUFpQjtBQURaLEdBSHVCO0FBTWhDQyxNQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlWCxJQUFmO0FBTjBCLENBQS9CLENBQUwsQ0FPR1ksSUFQSCxDQU9TQyxDQUFELElBQU9BLENBQUMsQ0FBQ0MsSUFBRixFQVBmLENBREcsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQVA7QUFDQTtBQUVPLFNBQVN2QixPQUFULEdBQW1CO0FBQ3RCLFFBQU07QUFBQ1MsUUFBSSxFQUFFVjtBQUFQLE1BQWV5QiwwQ0FBTSxDQUFDLFdBQUQsRUFBY2pCLDZDQUFkLENBQTNCO0FBQ0EsU0FBTztBQUFFUjtBQUFGLEdBQVA7QUFDSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkQ7QUFDQTtBQUVBLCtEQUFlLG1CQUNYLDhEQUFDLHFDQUFEO0FBQUEseUJBQ0ksOERBQUMscUNBQUQ7QUFBSyxNQUFFLEVBQUU7QUFBRTBCLFVBQUksRUFBRSxFQUFSO0FBQVlDLFlBQU0sRUFBRTtBQUFwQixLQUFUO0FBQUEsMkJBQ0ksOERBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosRTs7Ozs7Ozs7Ozs7QUNIQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxpQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcmQgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgdXNlRmVlZCB9IGZyb20gJy4vdXRpbC9ob29rcyc7XHJcblxyXG5leHBvcnQgY29uc3QgRmVlZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgZmVlZCB9ID0gdXNlRmVlZCgpO1xyXG4gICAgcmV0dXJuIGZlZWQgPyAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge2ZlZWQubWFwKCh7IGlkLCB0ZXh0LCBhdXRob3IgfSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPENhcmQga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICA8aDQ+e3RleHR9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57YXV0aG9yLnVzZXJuYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC8+XHJcbiAgICApIDogbnVsbDtcclxufTsiLCJleHBvcnQgY29uc3QgZmV0Y2hlciA9ICh1cmwsIGRhdGEgPSB1bmRlZmluZWQpID0+XHJcbiAgICBmZXRjaCh3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgdXJsLCB7XHJcbiAgICAgICAgbWV0aG9kOiBkYXRhID8gJ1BPU1QnIDogJ0dFVCcsXHJcbiAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnIDogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKVxyXG4gICAgfSkudGhlbigocikgPT4gci5qc29uKCkpOyIsImltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcclxuaW1wb3J0IHsgZmV0Y2hlciB9IGZyb20gJy4vZmV0Y2hlcic7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlRmVlZCgpIHtcclxuICAgIGNvbnN0IHtkYXRhOiBmZWVkfSA9IHVzZVNXUignL2FwaS9mZWVkJywgZmV0Y2hlcik7XHJcbiAgICByZXR1cm4geyBmZWVkIH07XHJcbn0iLCJpbXBvcnQgeyBDb2wsIFJvdyB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IEZlZWQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9GZWVkXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXHJcbiAgICA8Um93PlxyXG4gICAgICAgIDxDb2wgbWQ9e3sgc3BhbjogMTAsIG9mZnNldDogOCB9fT5cclxuICAgICAgICAgICAgPEZlZWQgLz5cclxuICAgICAgICA8L0NvbD5cclxuICAgIDwvUm93PlxyXG4pOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3dyXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9