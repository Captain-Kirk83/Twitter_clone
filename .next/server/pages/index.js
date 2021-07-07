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

/***/ "./components/DeleteTweetButton.tsx":
/*!******************************************!*\
  !*** ./components/DeleteTweetButton.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteTweetButton": function() { return /* binding */ DeleteTweetButton; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util_fetcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/fetcher */ "./components/util/fetcher.tsx");

var _jsxFileName = "F:\\Projects\\fs-twitter-clone\\components\\DeleteTweetButton.tsx";



const DeleteTweetButton = ({
  id,
  feed
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
  style: {
    float: 'right'
  },
  danger: true,
  type: "dashed",
  onClick: async () => {
    await (0,_util_fetcher__WEBPACK_IMPORTED_MODULE_3__.fetcher)('/api/tweet/delete', {
      id
    });
    await (0,swr__WEBPACK_IMPORTED_MODULE_2__.mutate)('/api/feed', feed.filter(t => t.id !== id));
  },
  children: "x"
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 6,
  columnNumber: 5
}, undefined);

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
/* harmony import */ var _DeleteTweetButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DeleteTweetButton */ "./components/DeleteTweetButton.tsx");


var _jsxFileName = "F:\\Projects\\fs-twitter-clone\\components\\Feed.tsx";


 //import me from '../pages/api/me';


const Feed = () => {
  const {
    feed
  } = (0,_util_hooks__WEBPACK_IMPORTED_MODULE_2__.useFeed)();
  const {
    me
  } = (0,_util_hooks__WEBPACK_IMPORTED_MODULE_2__.useMe)();
  return feed ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: feed.map(({
      id,
      text,
      author
    }, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Card, {
      children: [me && author.id === me.id && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DeleteTweetButton__WEBPACK_IMPORTED_MODULE_3__.DeleteTweetButton, {
        id: id,
        feed: feed
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 25
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
        children: text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 21
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: author.username
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 21
      }, undefined)]
    }, i, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }, undefined))
  }, void 0, false) : null;
};

/***/ }),

/***/ "./components/LogoutButton.tsx":
/*!*************************************!*\
  !*** ./components/LogoutButton.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoutButton": function() { return /* binding */ LogoutButton; }
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

var _jsxFileName = "F:\\Projects\\fs-twitter-clone\\components\\LogoutButton.tsx";




const LogoutButton = () => {
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Button, {
    loading: loading,
    onClick: async () => {
      setLoading(true);
      const {
        data,
        error
      } = await (0,_util_fetcher__WEBPACK_IMPORTED_MODULE_3__.fetcher)('/api/logout', {});

      if (error) {
        antd__WEBPACK_IMPORTED_MODULE_1__.message.error(error);
        setLoading(false);
        return;
      }

      await (0,swr__WEBPACK_IMPORTED_MODULE_2__.mutate)('/api/me');
    },
    children: "Log Out"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, undefined);
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
/* harmony import */ var _LogoutButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LogoutButton */ "./components/LogoutButton.tsx");

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
      lineNumber: 15,
      columnNumber: 17
    }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_1__.Col, {
      children: ["Logged in as: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
        children: me.username
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 35
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 21
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LogoutButton__WEBPACK_IMPORTED_MODULE_5__.LogoutButton, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 21
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcy10d2l0dGVyLWNsb25lLy4vY29tcG9uZW50cy9DcmVhdGVUd2VldEZvcm0udHN4Iiwid2VicGFjazovL2ZzLXR3aXR0ZXItY2xvbmUvLi9jb21wb25lbnRzL0RlbGV0ZVR3ZWV0QnV0dG9uLnRzeCIsIndlYnBhY2s6Ly9mcy10d2l0dGVyLWNsb25lLy4vY29tcG9uZW50cy9GZWVkLnRzeCIsIndlYnBhY2s6Ly9mcy10d2l0dGVyLWNsb25lLy4vY29tcG9uZW50cy9Mb2dvdXRCdXR0b24udHN4Iiwid2VicGFjazovL2ZzLXR3aXR0ZXItY2xvbmUvLi9jb21wb25lbnRzL1Byb2ZpbGUudHN4Iiwid2VicGFjazovL2ZzLXR3aXR0ZXItY2xvbmUvLi9jb21wb25lbnRzL1NpZ251cEZvcm0udHN4Iiwid2VicGFjazovL2ZzLXR3aXR0ZXItY2xvbmUvLi9jb21wb25lbnRzL3V0aWwvZmV0Y2hlci50c3giLCJ3ZWJwYWNrOi8vZnMtdHdpdHRlci1jbG9uZS8uL2NvbXBvbmVudHMvdXRpbC9ob29rcy50c3giLCJ3ZWJwYWNrOi8vZnMtdHdpdHRlci1jbG9uZS8uL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9mcy10d2l0dGVyLWNsb25lL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovL2ZzLXR3aXR0ZXItY2xvbmUvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2ZzLXR3aXR0ZXItY2xvbmUvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9mcy10d2l0dGVyLWNsb25lL2V4dGVybmFsIFwic3dyXCIiXSwibmFtZXMiOlsiQ3JlYXRlVHdlZXRGb3JtIiwiaW5wdXQiLCJzZXRJbnB1dCIsInVzZVN0YXRlIiwiZmVlZCIsInVzZUZlZWQiLCJtZSIsInVzZU1lIiwicGFkZGluZyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm11dGF0ZSIsInRleHQiLCJhdXRob3IiLCJ1c2VybmFtZSIsImZldGNoZXIiLCJ0YXJnZXQiLCJ2YWx1ZSIsIkRlbGV0ZVR3ZWV0QnV0dG9uIiwiaWQiLCJmbG9hdCIsImZpbHRlciIsInQiLCJGZWVkIiwibWFwIiwiaSIsIkxvZ291dEJ1dHRvbiIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZGF0YSIsImVycm9yIiwibWVzc2FnZSIsIlByb2ZpbGUiLCJTaWdudXBGb3JtIiwic2V0VXNlcm5hbWUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwibG9naW4iLCJzZXRMb2dpbiIsImxlbmd0aCIsInVybCIsImZldGNoIiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJtZXRob2QiLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyIiwianNvbiIsInVzZVNXUiIsInNwYW4iLCJvZmZzZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLE1BQU1BLGVBQWUsR0FBRyxNQUFNO0FBQ2pDLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkMsK0NBQVEsQ0FBQyxFQUFELENBQWxDO0FBQ0EsUUFBTTtBQUFFQztBQUFGLE1BQVdDLG9EQUFPLEVBQXhCO0FBQ0EsUUFBTTtBQUFFQztBQUFGLE1BQVNDLGtEQUFLLEVBQXBCO0FBRUEsc0JBQ0k7QUFDSSxTQUFLLEVBQUU7QUFBRUMsYUFBTyxFQUFFO0FBQVgsS0FEWDtBQUVJLFlBQVEsRUFBRSxNQUFPQyxDQUFQLElBQWE7QUFDbkJBLE9BQUMsQ0FBQ0MsY0FBRjtBQUVBQyxpREFBTSxDQUVGLFdBRkUsRUFHRixDQUFDO0FBQUVDLFlBQUksRUFBRVgsS0FBUjtBQUFlWSxjQUFNLEVBQUU7QUFBRUMsa0JBQVEsRUFBRVIsRUFBRSxDQUFDUTtBQUFmO0FBQXZCLE9BQUQsRUFBb0QsR0FBR1YsSUFBdkQsQ0FIRSxFQUc0RCxLQUg1RCxDQUFOO0FBS0FXLDREQUFPLENB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Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLGlDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBtZXNzYWdlLCBSb3csIENvbCwgSW5wdXQgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBtdXRhdGUgfSBmcm9tIFwic3dyXCI7XHJcbmltcG9ydCB7IGZldGNoZXIgfSBmcm9tIFwiLi91dGlsL2ZldGNoZXJcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRmVlZCwgdXNlTWUgfSBmcm9tIFwiLi91dGlsL2hvb2tzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ3JlYXRlVHdlZXRGb3JtID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCB7IGZlZWQgfSA9IHVzZUZlZWQoKTtcclxuICAgIGNvbnN0IHsgbWUgfSA9IHVzZU1lKCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nOiAnMnJlbScgfX1cclxuICAgICAgICAgICAgb25TdWJtaXQ9e2FzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbXV0YXRlKFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICcvYXBpL2ZlZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIFt7IHRleHQ6IGlucHV0LCBhdXRob3I6IHsgdXNlcm5hbWU6IG1lLnVzZXJuYW1lIH19LCAuLi5mZWVkXSwgZmFsc2VcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBmZXRjaGVyKFwiL2FwaS90d2VldC9jcmVhdGVcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGlucHV0XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIHNldElucHV0KCcnKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdmFsdWU9e2lucHV0fSBvbkNoYW5nZT17KGUpID0+IHNldElucHV0KGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBodG1sVHlwZT1cInN1Ym1pdFwiPlR3ZWV0PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgKTtcclxufTsiLCJpbXBvcnQgeyBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgbXV0YXRlIH0gZnJvbSAnc3dyJztcclxuaW1wb3J0IHsgZmV0Y2hlciB9IGZyb20gJy4vdXRpbC9mZXRjaGVyJztcclxuXHJcbmV4cG9ydCBjb25zdCBEZWxldGVUd2VldEJ1dHRvbiA9ICh7IGlkLCBmZWVkIH0pID0+IChcclxuICAgIDxCdXR0b25cclxuICAgICAgICBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JyB9fVxyXG4gICAgICAgIGRhbmdlclxyXG4gICAgICAgIHR5cGU9XCJkYXNoZWRcIlxyXG4gICAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgZmV0Y2hlcignL2FwaS90d2VldC9kZWxldGUnLCB7IGlkIH0pO1xyXG4gICAgICAgICAgICBhd2FpdCBtdXRhdGUoXHJcbiAgICAgICAgICAgICAgICAnL2FwaS9mZWVkJyxcclxuICAgICAgICAgICAgICAgIGZlZWQuZmlsdGVyKCh0KSA9PiB0LmlkICE9PSBpZClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgeFxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4pOyIsImltcG9ydCB7IENhcmQgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgdXNlRmVlZCB9IGZyb20gJy4vdXRpbC9ob29rcyc7XHJcbmltcG9ydCB7IERlbGV0ZVR3ZWV0QnV0dG9uIH0gZnJvbSBcIi4vRGVsZXRlVHdlZXRCdXR0b25cIjtcclxuLy9pbXBvcnQgbWUgZnJvbSAnLi4vcGFnZXMvYXBpL21lJztcclxuaW1wb3J0IHsgdXNlTWUgfSBmcm9tICcuL3V0aWwvaG9va3MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZlZWQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGZlZWQgfSA9IHVzZUZlZWQoKTtcclxuICAgIGNvbnN0IHsgbWUgfSA9IHVzZU1lKCk7XHJcbiAgICByZXR1cm4gZmVlZCA/IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7ZmVlZC5tYXAoKHsgaWQsIHRleHQsIGF1dGhvciB9LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8Q2FyZCBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgIHttZSAmJiBhdXRob3IuaWQgPT09IG1lLmlkICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZVR3ZWV0QnV0dG9uIGlkPXtpZH0gZmVlZD17ZmVlZH0gLz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDxoND57dGV4dH08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnthdXRob3IudXNlcm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8Lz5cclxuICAgICkgOiBudWxsO1xyXG59OyIsImltcG9ydCB7IEJ1dHRvbiwgbWVzc2FnZSB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IG11dGF0ZSB9IGZyb20gXCJzd3JcIjtcclxuaW1wb3J0IHsgZmV0Y2hlciB9IGZyb20gXCIuL3V0aWwvZmV0Y2hlclwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExvZ291dEJ1dHRvbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBsb2FkaW5nPXtsb2FkaW5nfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXthc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgZmV0Y2hlcignL2FwaS9sb2dvdXQnLHt9KTtcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGF3YWl0IG11dGF0ZSgnL2FwaS9tZScpO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBMb2cgT3V0XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgKTtcclxufTsiLCJpbXBvcnQgeyBSb3csIENvbCwgQnV0dG9uLCBtZXNzYWdlIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IFNpZ251cEZvcm0gfSBmcm9tICcuL1NpZ251cEZvcm0nO1xyXG5pbXBvcnQgeyB1c2VNZSB9IGZyb20gJy4vdXRpbC9ob29rcyc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMb2dvdXRCdXR0b24gfSBmcm9tICcuL0xvZ291dEJ1dHRvbic7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvZmlsZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgbWUgfSA9IHVzZU1lKCk7XHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBpZiAoIW1lKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSb3cgc3R5bGU9e3sgcGFkZGluZzogJzEuNXJlbScgfX0+XHJcbiAgICAgICAgICAgIHshbWUudXNlcm5hbWUgPyAoXHJcbiAgICAgICAgICAgICAgICA8U2lnbnVwRm9ybSAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICBMb2dnZWQgaW4gYXM6IDxzdHJvbmc+e21lLnVzZXJuYW1lfTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMb2dvdXRCdXR0b24gLz5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgKTtcclxufTsiLCJpbXBvcnQgeyBSb3csIENvbCwgQnV0dG9uLCBtZXNzYWdlLCBJbnB1dCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG11dGF0ZSB9IGZyb20gXCJzd3JcIjtcclxuaW1wb3J0IHsgZmV0Y2hlciB9IGZyb20gXCIuL3V0aWwvZmV0Y2hlclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNpZ251cEZvcm0gPSAoe30pID0+IHtcclxuICAgIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbbG9naW4sIHNldExvZ2luXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgIDxoMz5TaWduIHVwPC9oMz5cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXthc3luYyAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodXNlcm5hbWUubGVuZ3RoID09PSAwIHx8IHBhc3N3b3JkLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlLmVycm9yKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJVaCBvaDogeW91IGNhbid0IGhhdmUgYSBibGFuayB1c2VybmFtZSBvciBwYXNzd29yZC5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IGZldGNoZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGAvYXBpLyR7bG9naW4gPyAnbG9naW4nIDogJ3NpZ251cCd9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IG11dGF0ZSgnL2FwaS9tZScpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gaHRtbFR5cGU9XCJzdWJtaXRcIiBsb2FkaW5nPXtsb2FkaW5nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsb2dpbiA/ICdMb2dpbicgOiAnU2lnbiB1cCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHNldExvZ2luKCFsb2dpbil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2xvZ2luID8gJ05ldz8gU2lnbiBVcCcgOiAnQWxyZWFkeSBhIHVzZXI/IExvZyBJbid9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICApO1xyXG59OyIsImV4cG9ydCBjb25zdCBmZXRjaGVyID0gKHVybCwgZGF0YSkgPT5cclxuICAgIChmZXRjaCh3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgdXJsLCB7XHJcbiAgICAgICAgbWV0aG9kOiBkYXRhID8gJ1BPU1QnIDogJ0dFVCcsXHJcbiAgICAgICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnIDogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKVxyXG4gICAgfSkpLnRoZW4oKHIpID0+IHIuanNvbigpKTsiLCJpbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XHJcbmltcG9ydCB7IGZldGNoZXIgfSBmcm9tICcuL2ZldGNoZXInO1xyXG5pbXBvcnQgeyBUd2VldCwgVXNlciB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VGZWVkKCkge1xyXG4gICAgY29uc3Qge2RhdGE6IGZlZWR9OiB7IGRhdGE/OiAoVHdlZXQgJiB7IGF1dGhvcjogVXNlciB9KVtdIH0gPSB1c2VTV1IoJy9hcGkvZmVlZCcsIGZldGNoZXIpO1xyXG4gICAgcmV0dXJuIHsgZmVlZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlTWUoKSB7XHJcbiAgICBjb25zdCB7IGRhdGE6IG1lIH06IHsgZGF0YT86IFVzZXIgfSA9IHVzZVNXUignL2FwaS9tZScsIGZldGNoZXIpO1xyXG4gICAgcmV0dXJuIHsgbWUgfTtcclxufSIsImltcG9ydCB7IENvbCwgUm93IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgRmVlZCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0ZlZWRcIjtcclxuaW1wb3J0IHsgQ3JlYXRlVHdlZXRGb3JtIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ3JlYXRlVHdlZXRGb3JtXCI7XHJcbmltcG9ydCB7IFByb2ZpbGUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9maWxlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXHJcbiAgICA8Um93PlxyXG4gICAgICAgIDxDb2wgbWQ9e3sgc3BhbjogMTAsIG9mZnNldDogOCB9fT5cclxuICAgICAgICAgICAgPFByb2ZpbGUgLz5cclxuICAgICAgICAgICAgPENyZWF0ZVR3ZWV0Rm9ybSAvPlxyXG4gICAgICAgICAgICA8RmVlZCAvPlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgPC9Sb3c+XHJcbik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3dyXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9