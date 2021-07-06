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
  const {
    me
  } = (0,_util_hooks__WEBPACK_IMPORTED_MODULE_5__.useMe)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
    style: {
      padding: '2rem'
    },
    onSubmit: async e => {
      e.preventDefault();
      (0,swr__WEBPACK_IMPORTED_MODULE_2__.mutate)('/api/feed', [{
        text: input,
        author: {
          username: me.username
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
          lineNumber: 33,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 21
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
          htmlType: "submit",
          children: "Tweet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
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

/***/ "./components/Profile.tsx":
/*!********************************!*\
  !*** ./components/Profile.tsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Profile": function() { return /* binding */ Profile; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SignupForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SignupForm */ "./components/SignupForm.tsx");
/* harmony import */ var _util_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/hooks */ "./components/util/hooks.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "F:\\Projects\\fs-twitter-clone\\components\\Profile.tsx";




const Profile = () => {
  const {
    me
  } = (0,_util_hooks__WEBPACK_IMPORTED_MODULE_3__.useMe)();
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  if (!me) return null;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
    style: {
      padding: '1.5rem'
    },
    children: !me.username ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SignupForm__WEBPACK_IMPORTED_MODULE_2__.SignupForm, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
      children: ["Logged in as: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
        children: me.username
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 35
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./components/SignupForm.tsx":
/*!***********************************!*\
  !*** ./components/SignupForm.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupForm": function() { return /* binding */ SignupForm; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_fetcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/fetcher */ "./components/util/fetcher.tsx");

var _jsxFileName = "F:\\Projects\\fs-twitter-clone\\components\\SignupForm.tsx";




const SignupForm = ({}) => {
  const {
    0: username,
    1: setUsername
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
  const {
    0: password,
    1: setPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
  const {
    0: login,
    1: setLogin
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "Sign up"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        onSubmit: async e => {
          e.preventDefault();

          if (username.length === 0 || password.length === 0) {
            antd__WEBPACK_IMPORTED_MODULE_1__.message.error("Uh oh: you can't have a blank username or password.");
          }

          setLoading(true);
          const {
            data,
            error
          } = await (0,_util_fetcher__WEBPACK_IMPORTED_MODULE_4__.fetcher)(`/api/${login ? 'login' : 'signup'}`, {
            username,
            password
          });

          if (error) {
            antd__WEBPACK_IMPORTED_MODULE_1__.message.error(error);
            setLoading(false);
            return;
          }

          await (0,swr__WEBPACK_IMPORTED_MODULE_3__.mutate)('/api/me');
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Input, {
            value: username,
            onChange: e => setUsername(e.target.value),
            type: "name",
            placeholder: "Username"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 25
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Input, {
            value: password,
            onChange: e => setPassword(e.target.value),
            type: "password",
            placeholder: "Password"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
            htmlType: "submit",
            loading: loading,
            children: login ? 'Login' : 'Sign up'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            onClick: () => setLogin(!login),
            children: login ? 'New? Sign Up' : 'Already a user? Log In'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, undefined);
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
/* harmony export */   "useFeed": function() { return /* binding */ useFeed; },
/* harmony export */   "useMe": function() { return /* binding */ useMe; }
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
function useMe() {
  const {
    data: me
  } = swr__WEBPACK_IMPORTED_MODULE_0___default()('/api/me', _fetcher__WEBPACK_IMPORTED_MODULE_1__.fetcher);
  return {
    me
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
/* harmony import */ var _components_Profile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Profile */ "./components/Profile.tsx");

var _jsxFileName = "F:\\Projects\\fs-twitter-clone\\pages\\index.tsx";




/* harmony default export */ __webpack_exports__["default"] = (() => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Row, {
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
    md: {
      span: 10,
      offset: 8
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Profile__WEBPACK_IMPORTED_MODULE_4__.Profile, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CreateTweetForm__WEBPACK_IMPORTED_MODULE_3__.CreateTweetForm, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Feed__WEBPACK_IMPORTED_MODULE_2__.Feed, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 7,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcy10d2l0dGVyLWNsb25lLy4vY29tcG9uZW50cy9DcmVhdGVUd2VldEZvcm0udHN4Iiwid2VicGFjazovL2ZzLXR3aXR0ZXItY2xvbmUvLi9jb21wb25lbnRzL0ZlZWQudHN4Iiwid2VicGFjazovL2ZzLXR3aXR0ZXItY2xvbmUvLi9jb21wb25lbnRzL1Byb2ZpbGUudHN4Iiwid2VicGFjazovL2ZzLXR3aXR0ZXItY2xvbmUvLi9jb21wb25lbnRzL1NpZ251cEZvcm0udHN4Iiwid2VicGFjazovL2ZzLXR3aXR0ZXItY2xvbmUvLi9jb21wb25lbnRzL3V0aWwvZmV0Y2hlci50c3giLCJ3ZWJwYWNrOi8vZnMtdHdpdHRlci1jbG9uZS8uL2NvbXBvbmVudHMvdXRpbC9ob29rcy50c3giLCJ3ZWJwYWNrOi8vZnMtdHdpdHRlci1jbG9uZS8uL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9mcy10d2l0dGVyLWNsb25lL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovL2ZzLXR3aXR0ZXItY2xvbmUvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2ZzLXR3aXR0ZXItY2xvbmUvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9mcy10d2l0dGVyLWNsb25lL2V4dGVybmFsIFwic3dyXCIiXSwibmFtZXMiOlsiQ3JlYXRlVHdlZXRGb3JtIiwiaW5wdXQiLCJzZXRJbnB1dCIsInVzZVN0YXRlIiwiZmVlZCIsInVzZUZlZWQiLCJtZSIsInVzZU1lIiwicGFkZGluZyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm11dGF0ZSIsInRleHQiLCJhdXRob3IiLCJ1c2VybmFtZSIsImZldGNoZXIiLCJ0YXJnZXQiLCJ2YWx1ZSIsIkZlZWQiLCJtYXAiLCJpZCIsImkiLCJQcm9maWxlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJTaWdudXBGb3JtIiwic2V0VXNlcm5hbWUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwibG9naW4iLCJzZXRMb2dpbiIsImxlbmd0aCIsIm1lc3NhZ2UiLCJkYXRhIiwiZXJyb3IiLCJ1cmwiLCJmZXRjaCIsIndpbmRvdyIsImxvY2F0aW9uIiwib3JpZ2luIiwibWV0aG9kIiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwiciIsImpzb24iLCJ1c2VTV1IiLCJzcGFuIiwib2Zmc2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxNQUFNQSxlQUFlLEdBQUcsTUFBTTtBQUNqQyxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JDLCtDQUFRLENBQUMsRUFBRCxDQUFsQztBQUNBLFFBQU07QUFBRUM7QUFBRixNQUFXQyxvREFBTyxFQUF4QjtBQUNBLFFBQU07QUFBRUM7QUFBRixNQUFTQyxrREFBSyxFQUFwQjtBQUVBLHNCQUNJO0FBQ0ksU0FBSyxFQUFFO0FBQUVDLGFBQU8sRUFBRTtBQUFYLEtBRFg7QUFFSSxZQUFRLEVBQUUsTUFBT0MsQ0FBUCxJQUFhO0FBQ25CQSxPQUFDLENBQUNDLGNBQUY7QUFFQUMsaURBQU0sQ0FFRixXQUZFLEVBR0YsQ0FBQztBQUFFQyxZQUFJLEVBQUVYLEtBQVI7QUFBZVksY0FBTSxFQUFFO0FBQUVDLGtCQUFRLEVBQUVSLEVBQUUsQ0FBQ1E7QUFBZjtBQUF2QixPQUFELEVBQW9ELEdBQUdWLElBQXZELENBSEUsRUFHNEQsS0FINUQsQ0FBTjtBQUtBVyw0REFBTyxDQUFDLG1CQUFELEVBQXNCO0FBQ3pCSCxZQUFJLEVBQUVYO0FBRG1CLE9BQXRCLENBQVA7QUFLQUMsY0FBUSxDQUFDLEVBQUQsQ0FBUjtBQUNILEtBaEJMO0FBQUEsMkJBa0JRLDhEQUFDLHFDQUFEO0FBQUEsOEJBQ0ksOERBQUMscUNBQUQ7QUFBQSwrQkFDSSw4REFBQyx1Q0FBRDtBQUFPLGVBQUssRUFBRUQsS0FBZDtB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QVlsQyw2Q0FBWixDQUE1QztBQUNBLFNBQU87QUFBRVQ7QUFBRixHQUFQO0FBQ0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkQ7QUFDQTtBQUNBO0FBQ0E7QUFFQSwrREFBZSxtQkFDWCw4REFBQyxxQ0FBRDtBQUFBLHlCQUNJLDhEQUFDLHFDQUFEO0FBQUssTUFBRSxFQUFFO0FBQUU0QyxVQUFJLEVBQUUsRUFBUjtBQUFZQyxZQUFNLEVBQUU7QUFBcEIsS0FBVDtBQUFBLDRCQUNJLDhEQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSSw4REFBQyx3RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLGVBR0ksOERBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosRTs7Ozs7Ozs7Ozs7QUNMQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxpQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiwgbWVzc2FnZSwgUm93LCBDb2wsIElucHV0IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgbXV0YXRlIH0gZnJvbSBcInN3clwiO1xyXG5pbXBvcnQgeyBmZXRjaGVyIH0gZnJvbSBcIi4vdXRpbC9mZXRjaGVyXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUZlZWQsIHVzZU1lIH0gZnJvbSBcIi4vdXRpbC9ob29rc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENyZWF0ZVR3ZWV0Rm9ybSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgeyBmZWVkIH0gPSB1c2VGZWVkKCk7XHJcbiAgICBjb25zdCB7IG1lIH0gPSB1c2VNZSgpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogJzJyZW0nIH19XHJcbiAgICAgICAgICAgIG9uU3VibWl0PXthc3luYyAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIG11dGF0ZShcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAnL2FwaS9mZWVkJyxcclxuICAgICAgICAgICAgICAgICAgICBbeyB0ZXh0OiBpbnB1dCwgYXV0aG9yOiB7IHVzZXJuYW1lOiBtZS51c2VybmFtZSB9fSwgLi4uZmVlZF0sIGZhbHNlXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgZmV0Y2hlcihcIi9hcGkvdHdlZXQvY3JlYXRlXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBpbnB1dFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRJbnB1dCgnJyk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHZhbHVlPXtpbnB1dH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRJbnB1dChlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaHRtbFR5cGU9XCJzdWJtaXRcIj5Ud2VldDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICk7XHJcbn07IiwiaW1wb3J0IHsgQ2FyZCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyB1c2VGZWVkIH0gZnJvbSAnLi91dGlsL2hvb2tzJztcclxuXHJcbmV4cG9ydCBjb25zdCBGZWVkID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBmZWVkIH0gPSB1c2VGZWVkKCk7XHJcbiAgICByZXR1cm4gZmVlZCA/IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7ZmVlZC5tYXAoKHsgaWQsIHRleHQsIGF1dGhvciB9LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8Q2FyZCBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoND57dGV4dH08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnthdXRob3IudXNlcm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8Lz5cclxuICAgICkgOiBudWxsO1xyXG59OyIsImltcG9ydCB7IFJvdywgQ29sLCBCdXR0b24sIG1lc3NhZ2UgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgU2lnbnVwRm9ybSB9IGZyb20gJy4vU2lnbnVwRm9ybSc7XHJcbmltcG9ydCB7IHVzZU1lIH0gZnJvbSAnLi91dGlsL2hvb2tzJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvZmlsZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgbWUgfSA9IHVzZU1lKCk7XHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBpZiAoIW1lKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSb3cgc3R5bGU9e3sgcGFkZGluZzogJzEuNXJlbScgfX0+XHJcbiAgICAgICAgICAgIHshbWUudXNlcm5hbWUgPyAoXHJcbiAgICAgICAgICAgICAgICA8U2lnbnVwRm9ybSAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICBMb2dnZWQgaW4gYXM6IDxzdHJvbmc+e21lLnVzZXJuYW1lfTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKlRvIGFkZCBsb2dvdXQgYnV0dG9uIGhlcmUqL31cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgKTtcclxufTsiLCJpbXBvcnQgeyBSb3csIENvbCwgQnV0dG9uLCBtZXNzYWdlLCBJbnB1dCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG11dGF0ZSB9IGZyb20gXCJzd3JcIjtcclxuaW1wb3J0IHsgZmV0Y2hlciB9IGZyb20gXCIuL3V0aWwvZmV0Y2hlclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNpZ251cEZvcm0gPSAoe30pID0+IHtcclxuICAgIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbbG9naW4sIHNldExvZ2luXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgIDxoMz5TaWduIHVwPC9oMz5cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXthc3luYyAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodXNlcm5hbWUubGVuZ3RoID09PSAwIHx8IHBhc3N3b3JkLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLmVycm9yKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJVaCBvaDogeW91IGNhbid0IGhhdmUgYSBibGFuayB1c2VybmFtZSBvciBwYXNzd29yZC5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IGZldGNoZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGAvYXBpLyR7bG9naW4gPyAnbG9naW4nIDogJ3NpZ251cCd9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IG11dGF0ZSgnL2FwaS9tZScpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaHRtbFR5cGU9XCJzdWJtaXRcIiBsb2FkaW5nPXtsb2FkaW5nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsb2dpbiA/ICdMb2dpbicgOiAnU2lnbiB1cCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHNldExvZ2luKCFsb2dpbil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2xvZ2luID8gJ05ldz8gU2lnbiBVcCcgOiAnQWxyZWFkeSBhIHVzZXI/IExvZyBJbid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICApO1xyXG59OyIsImV4cG9ydCBjb25zdCBmZXRjaGVyID0gKHVybCwgZGF0YSkgPT5cclxuICAgIChmZXRjaCh3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgdXJsLCB7XHJcbiAgICAgICAgbWV0aG9kOiBkYXRhID8gJ1BPU1QnIDogJ0dFVCcsXHJcbiAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnIDogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKVxyXG4gICAgfSkpLnRoZW4oKHIpID0+IHIuanNvbigpKTsiLCJpbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XHJcbmltcG9ydCB7IGZldGNoZXIgfSBmcm9tICcuL2ZldGNoZXInO1xyXG5pbXBvcnQgeyBUd2VldCwgVXNlciB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VGZWVkKCkge1xyXG4gICAgY29uc3Qge2RhdGE6IGZlZWR9OiB7IGRhdGE/OiAoVHdlZXQgJiB7IGF1dGhvcjogVXNlciB9KVtdIH0gPSB1c2VTV1IoJy9hcGkvZmVlZCcsIGZldGNoZXIpO1xyXG4gICAgcmV0dXJuIHsgZmVlZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlTWUoKSB7XHJcbiAgICBjb25zdCB7IGRhdGE6IG1lIH06IHsgZGF0YT86IFVzZXIgfSA9IHVzZVNXUignL2FwaS9tZScsIGZldGNoZXIpO1xyXG4gICAgcmV0dXJuIHsgbWUgfTtcclxufSIsImltcG9ydCB7IENvbCwgUm93IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgRmVlZCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0ZlZWRcIjtcclxuaW1wb3J0IHsgQ3JlYXRlVHdlZXRGb3JtIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ3JlYXRlVHdlZXRGb3JtXCI7XHJcbmltcG9ydCB7IFByb2ZpbGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9maWxlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXHJcbiAgICA8Um93PlxyXG4gICAgICAgIDxDb2wgbWQ9e3sgc3BhbjogMTAsIG9mZnNldDogOCB9fT5cclxuICAgICAgICAgICAgPFByb2ZpbGUgLz5cclxuICAgICAgICAgICAgPENyZWF0ZVR3ZWV0Rm9ybSAvPlxyXG4gICAgICAgICAgICA8RmVlZCAvPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgPC9Sb3c+XHJcbik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3dyXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9