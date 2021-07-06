(function() {
var exports = {};
exports.id = "pages/api/me";
exports.ids = ["pages/api/me"];
exports.modules = {

/***/ "./pages/api/me.ts":
/*!*************************!*\
  !*** ./pages/api/me.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_1__);


const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_1__.PrismaClient();
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  const {
    token
  } = req.cookies;

  if (token) {
    const {
      id,
      username
    } = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, process.env.JWT_SECRET);
    const me = await prisma.user.findUnique({
      where: {
        id
      }
    });
    res.json(me);
  } else {
    res.json({});
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/me.ts"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcy10d2l0dGVyLWNsb25lLy4vcGFnZXMvYXBpL21lLnRzIiwid2VicGFjazovL2ZzLXR3aXR0ZXItY2xvbmUvZXh0ZXJuYWwgXCJAcHJpc21hL2NsaWVudFwiIiwid2VicGFjazovL2ZzLXR3aXR0ZXItY2xvbmUvZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJQcmlzbWFDbGllbnQiLCJyZXEiLCJyZXMiLCJ0b2tlbiIsImNvb2tpZXMiLCJpZCIsInVzZXJuYW1lIiwiand0IiwicHJvY2VzcyIsImVudiIsIkpXVF9TRUNSRVQiLCJtZSIsInVzZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJqc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsTUFBTUEsTUFBTSxHQUFHLElBQUlDLHdEQUFKLEVBQWY7QUFFQSwrREFBZSxPQUFPQyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDL0IsUUFBTTtBQUFFQztBQUFGLE1BQVlGLEdBQUcsQ0FBQ0csT0FBdEI7O0FBRUEsTUFBR0QsS0FBSCxFQUFVO0FBQ04sVUFBTTtBQUFFRSxRQUFGO0FBQU1DO0FBQU4sUUFBbUJDLDBEQUFBLENBQVdKLEtBQVgsRUFBa0JLLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxVQUE5QixDQUF6QjtBQUNBLFVBQU1DLEVBQUUsR0FBRyxNQUFNWixNQUFNLENBQUNhLElBQVAsQ0FBWUMsVUFBWixDQUF1QjtBQUFFQyxXQUFLLEVBQUU7QUFBRVQ7QUFBRjtBQUFULEtBQXZCLENBQWpCO0FBQ0FILE9BQUcsQ0FBQ2EsSUFBSixDQUFTSixFQUFUO0FBQ0gsR0FKRCxNQUlPO0FBQ0hULE9BQUcsQ0FBQ2EsSUFBSixDQUFTLEVBQVQ7QUFDSDtBQUNKLENBVkQsRTs7Ozs7Ozs7Ozs7QUNKQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSwwQyIsImZpbGUiOiJwYWdlcy9hcGkvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XHJcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcclxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCB7IHRva2VuIH0gPSByZXEuY29va2llcztcclxuXHJcbiAgICBpZih0b2tlbikge1xyXG4gICAgICAgIGNvbnN0IHsgaWQsIHVzZXJuYW1lIH0gPSBqd3QudmVyaWZ5KHRva2VuLCBwcm9jZXNzLmVudi5KV1RfU0VDUkVUKTtcclxuICAgICAgICBjb25zdCBtZSA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBpZCB9IH0pO1xyXG4gICAgICAgIHJlcy5qc29uKG1lKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzLmpzb24oe30pO1xyXG4gICAgfVxyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBwcmlzbWEvY2xpZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7OyJdLCJzb3VyY2VSb290IjoiIn0=