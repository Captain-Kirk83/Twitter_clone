(function() {
var exports = {};
exports.id = "pages/api/tweet/create";
exports.ids = ["pages/api/tweet/create"];
exports.modules = {

/***/ "./pages/api/tweet/create.ts":
/*!***********************************!*\
  !*** ./pages/api/tweet/create.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
  const {
    token
  } = req.cookies;

  if (token) {
    //Get Authenticated user
    const {
      _id,
      username
    } = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().verify(token, process.env.JWT_SECRET);
    const {
      text
    } = req.body;

    if (text !== "") {
      const tweet = await prisma.tweet.create({
        data: {
          text,
          author: {
            connect: {
              username
            }
          }
        }
      });
      res.json(tweet);
    } else {
      res.json({
        error: 'Empty tweet'
      });
    }
  } else {
    res.json({
      error: 'You must be logged in to tweet.'
    });
  }
});

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@prisma/client");;

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("jsonwebtoken");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/tweet/create.ts"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcy10d2l0dGVyLWNsb25lLy4vcGFnZXMvYXBpL3R3ZWV0L2NyZWF0ZS50cyIsIndlYnBhY2s6Ly9mcy10d2l0dGVyLWNsb25lL2V4dGVybmFsIFwiQHByaXNtYS9jbGllbnRcIiIsIndlYnBhY2s6Ly9mcy10d2l0dGVyLWNsb25lL2V4dGVybmFsIFwianNvbndlYnRva2VuXCIiXSwibmFtZXMiOlsicmVxIiwicmVzIiwicHJpc21hIiwiUHJpc21hQ2xpZW50IiwidG9rZW4iLCJjb29raWVzIiwiX2lkIiwidXNlcm5hbWUiLCJqd3QiLCJwcm9jZXNzIiwiZW52IiwiSldUX1NFQ1JFVCIsInRleHQiLCJib2R5IiwidHdlZXQiLCJjcmVhdGUiLCJkYXRhIiwiYXV0aG9yIiwiY29ubmVjdCIsImpzb24iLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBLCtEQUFlLE9BQU1BLEdBQU4sRUFBV0MsR0FBWCxLQUFtQjtBQUM5QixRQUFNQyxNQUFNLEdBQUcsSUFBSUMsd0RBQUosRUFBZjtBQUVBLFFBQU07QUFBRUM7QUFBRixNQUFZSixHQUFHLENBQUNLLE9BQXRCOztBQUVBLE1BQUlELEtBQUosRUFBVztBQUNQO0FBQ0EsVUFBTTtBQUFFRSxTQUFGO0FBQU9DO0FBQVAsUUFBb0JDLDBEQUFBLENBQVdKLEtBQVgsRUFBa0JLLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxVQUE5QixDQUExQjtBQUNBLFVBQU07QUFBRUM7QUFBRixRQUFXWixHQUFHLENBQUNhLElBQXJCOztBQUNBLFFBQUdELElBQUksS0FBRyxFQUFWLEVBQ0E7QUFDSSxZQUFNRSxLQUFLLEdBQUcsTUFBTVosTUFBTSxDQUFDWSxLQUFQLENBQWFDLE1BQWIsQ0FBb0I7QUFDcENDLFlBQUksRUFBRTtBQUFFSixjQUFGO0FBQVFLLGdCQUFNLEVBQUU7QUFBRUMsbUJBQU8sRUFBRTtBQUFFWDtBQUFGO0FBQVg7QUFBaEI7QUFEOEIsT0FBcEIsQ0FBcEI7QUFHQU4sU0FBRyxDQUFDa0IsSUFBSixDQUFTTCxLQUFUO0FBQ0gsS0FORCxNQU9LO0FBQ0RiLFNBQUcsQ0FBQ2tCLElBQUosQ0FBUztBQUFFQyxhQUFLLEVBQUU7QUFBVCxPQUFUO0FBQ0g7QUFDSixHQWRELE1BY087QUFDSG5CLE9BQUcsQ0FBQ2tCLElBQUosQ0FBUztBQUFFQyxXQUFLLEVBQUU7QUFBVCxLQUFUO0FBQ0g7QUFDSixDQXRCRCxFOzs7Ozs7Ozs7OztBQ0pBLDRDOzs7Ozs7Ozs7OztBQ0FBLDBDIiwiZmlsZSI6InBhZ2VzL2FwaS90d2VldC9jcmVhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcclxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcblxyXG4gICAgY29uc3QgeyB0b2tlbiB9ID0gcmVxLmNvb2tpZXM7XHJcblxyXG4gICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgLy9HZXQgQXV0aGVudGljYXRlZCB1c2VyXHJcbiAgICAgICAgY29uc3QgeyBfaWQsIHVzZXJuYW1lIH0gPSBqd3QudmVyaWZ5KHRva2VuLCBwcm9jZXNzLmVudi5KV1RfU0VDUkVUKTtcclxuICAgICAgICBjb25zdCB7IHRleHQgfSA9IHJlcS5ib2R5O1xyXG4gICAgICAgIGlmKHRleHQhPT1cIlwiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3QgdHdlZXQgPSBhd2FpdCBwcmlzbWEudHdlZXQuY3JlYXRlKHsgXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7IHRleHQsIGF1dGhvcjogeyBjb25uZWN0OiB7IHVzZXJuYW1lIH0gfSB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXMuanNvbih0d2VldCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXMuanNvbih7IGVycm9yOiAnRW1wdHkgdHdlZXQnfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXMuanNvbih7IGVycm9yOiAnWW91IG11c3QgYmUgbG9nZ2VkIGluIHRvIHR3ZWV0Lid9KTtcclxuICAgIH1cclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcHJpc21hL2NsaWVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9