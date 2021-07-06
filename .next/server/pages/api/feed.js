(function() {
var exports = {};
exports.id = "pages/api/feed";
exports.ids = ["pages/api/feed"];
exports.modules = {

/***/ "./pages/api/feed.ts":
/*!***************************!*\
  !*** ./pages/api/feed.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  const tweets = await prisma.tweet.findMany({
    orderBy: {
      createdAt: 'desc'
    },
    include: {
      author: {
        select: {
          username: true,
          id: true
        }
      }
    }
  });
  res.json(tweets);
});

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@prisma/client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/feed.ts"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcy10d2l0dGVyLWNsb25lLy4vcGFnZXMvYXBpL2ZlZWQudHMiLCJ3ZWJwYWNrOi8vZnMtdHdpdHRlci1jbG9uZS9leHRlcm5hbCBcIkBwcmlzbWEvY2xpZW50XCIiXSwibmFtZXMiOlsicHJpc21hIiwiUHJpc21hQ2xpZW50IiwicmVxIiwicmVzIiwidHdlZXRzIiwidHdlZXQiLCJmaW5kTWFueSIsIm9yZGVyQnkiLCJjcmVhdGVkQXQiLCJpbmNsdWRlIiwiYXV0aG9yIiwic2VsZWN0IiwidXNlcm5hbWUiLCJpZCIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLE1BQU1BLE1BQU0sR0FBRyxJQUFJQyx3REFBSixFQUFmO0FBRUEsK0RBQWUsT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQy9CLFFBQU1DLE1BQU0sR0FBRyxNQUFNSixNQUFNLENBQUNLLEtBQVAsQ0FBYUMsUUFBYixDQUFzQjtBQUN2Q0MsV0FBTyxFQUFFO0FBQUVDLGVBQVMsRUFBRTtBQUFiLEtBRDhCO0FBRXZDQyxXQUFPLEVBQUU7QUFBRUMsWUFBTSxFQUFFO0FBQUVDLGNBQU0sRUFBRTtBQUFFQyxrQkFBUSxFQUFFLElBQVo7QUFBa0JDLFlBQUUsRUFBRTtBQUF0QjtBQUFWO0FBQVY7QUFGOEIsR0FBdEIsQ0FBckI7QUFJQVYsS0FBRyxDQUFDVyxJQUFKLENBQVNWLE1BQVQ7QUFDSCxDQU5ELEU7Ozs7Ozs7Ozs7O0FDSEEsNEMiLCJmaWxlIjoicGFnZXMvYXBpL2ZlZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XHJcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgY29uc3QgdHdlZXRzID0gYXdhaXQgcHJpc21hLnR3ZWV0LmZpbmRNYW55KHtcclxuICAgICAgICBvcmRlckJ5OiB7IGNyZWF0ZWRBdDogJ2Rlc2MnIH0sXHJcbiAgICAgICAgaW5jbHVkZTogeyBhdXRob3I6IHsgc2VsZWN0OiB7IHVzZXJuYW1lOiB0cnVlLCBpZDogdHJ1ZSB9IH0gfVxyXG4gICAgfSk7XHJcbiAgICByZXMuanNvbih0d2VldHMpO1xyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBwcmlzbWEvY2xpZW50XCIpOzsiXSwic291cmNlUm9vdCI6IiJ9