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

const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  const {
    text
  } = req.body;
  const tweet = await prisma.tweet.create({
    data: {
      text
    }
  });
  res.json(tweet);
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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/api/tweet/create.ts"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcy10d2l0dGVyLWNsb25lLy4vcGFnZXMvYXBpL3R3ZWV0L2NyZWF0ZS50cyIsIndlYnBhY2s6Ly9mcy10d2l0dGVyLWNsb25lL2V4dGVybmFsIFwiQHByaXNtYS9jbGllbnRcIiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJQcmlzbWFDbGllbnQiLCJyZXEiLCJyZXMiLCJ0ZXh0IiwiYm9keSIsInR3ZWV0IiwiY3JlYXRlIiwiZGF0YSIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLE1BQU1BLE1BQU0sR0FBRyxJQUFJQyx3REFBSixFQUFmO0FBRUEsK0RBQWUsT0FBTUMsR0FBTixFQUFXQyxHQUFYLEtBQW1CO0FBQzlCLFFBQU07QUFBRUM7QUFBRixNQUFXRixHQUFHLENBQUNHLElBQXJCO0FBQ0EsUUFBTUMsS0FBSyxHQUFHLE1BQU1OLE1BQU0sQ0FBQ00sS0FBUCxDQUFhQyxNQUFiLENBQW9CO0FBQUVDLFFBQUksRUFBRTtBQUFFSjtBQUFGO0FBQVIsR0FBcEIsQ0FBcEI7QUFDQUQsS0FBRyxDQUFDTSxJQUFKLENBQVNILEtBQVQ7QUFDSCxDQUpELEU7Ozs7Ozs7Ozs7O0FDSEEsNEMiLCJmaWxlIjoicGFnZXMvYXBpL3R3ZWV0L2NyZWF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xyXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyhyZXEsIHJlcykgPT4ge1xyXG4gICAgY29uc3QgeyB0ZXh0IH0gPSByZXEuYm9keTtcclxuICAgIGNvbnN0IHR3ZWV0ID0gYXdhaXQgcHJpc21hLnR3ZWV0LmNyZWF0ZSh7IGRhdGE6IHsgdGV4dCB9IH0pO1xyXG4gICAgcmVzLmpzb24odHdlZXQpO1xyXG59OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBwcmlzbWEvY2xpZW50XCIpOzsiXSwic291cmNlUm9vdCI6IiJ9