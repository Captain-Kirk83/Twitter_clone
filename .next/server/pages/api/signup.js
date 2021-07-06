(function() {
var exports = {};
exports.id = "pages/api/signup";
exports.ids = ["pages/api/signup"];
exports.modules = {

/***/ "./pages/api/signup.ts":
/*!*****************************!*\
  !*** ./pages/api/signup.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcrypt */ "bcrypt");
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookie */ "cookie");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_3__);




const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_3__.PrismaClient();
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  const salt = bcrypt__WEBPACK_IMPORTED_MODULE_0___default().genSaltSync();
  const {
    username,
    password
  } = req.body;
  let user;

  try {
    user = await prisma.user.create({
      data: {
        username,
        password: bcrypt__WEBPACK_IMPORTED_MODULE_0___default().hashSync(password, salt)
      }
    });
  } catch (error) {
    res.json({
      error: 'A user with that username already exists'
    });
    return;
  }

  const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().sign({
    username: user.username,
    id: user.id,
    time: new Date()
  }, process.env.JWT_SECRET, {
    expiresIn: '6h'
  });
  res.setHeader('Set-Cookie', cookie__WEBPACK_IMPORTED_MODULE_2___default().serialize('token', token, {
    httpOnly: true,
    maxAge: 6 * 60 * 60,
    path: '/',
    sameSite: 'lax',
    secure: false
  }));
  res.json(user);
  return;
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

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("bcrypt");;

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("cookie");;

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/signup.ts"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcy10d2l0dGVyLWNsb25lLy4vcGFnZXMvYXBpL3NpZ251cC50cyIsIndlYnBhY2s6Ly9mcy10d2l0dGVyLWNsb25lL2V4dGVybmFsIFwiQHByaXNtYS9jbGllbnRcIiIsIndlYnBhY2s6Ly9mcy10d2l0dGVyLWNsb25lL2V4dGVybmFsIFwiYmNyeXB0XCIiLCJ3ZWJwYWNrOi8vZnMtdHdpdHRlci1jbG9uZS9leHRlcm5hbCBcImNvb2tpZVwiIiwid2VicGFjazovL2ZzLXR3aXR0ZXItY2xvbmUvZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJQcmlzbWFDbGllbnQiLCJyZXEiLCJyZXMiLCJzYWx0IiwiYmNyeXB0IiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImJvZHkiLCJ1c2VyIiwiY3JlYXRlIiwiZGF0YSIsImVycm9yIiwianNvbiIsInRva2VuIiwiand0IiwiaWQiLCJ0aW1lIiwiRGF0ZSIsInByb2Nlc3MiLCJlbnYiLCJKV1RfU0VDUkVUIiwiZXhwaXJlc0luIiwic2V0SGVhZGVyIiwiY29va2llIiwiaHR0cE9ubHkiLCJtYXhBZ2UiLCJwYXRoIiwic2FtZVNpdGUiLCJzZWN1cmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU1BLE1BQU0sR0FBRyxJQUFJQyx3REFBSixFQUFmO0FBRUEsK0RBQWUsT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQy9CLFFBQU1DLElBQUksR0FBR0MseURBQUEsRUFBYjtBQUNBLFFBQU07QUFBRUMsWUFBRjtBQUFZQztBQUFaLE1BQXlCTCxHQUFHLENBQUNNLElBQW5DO0FBQ0EsTUFBSUMsSUFBSjs7QUFDQSxNQUFJO0FBQ0FBLFFBQUksR0FBRyxNQUFNVCxNQUFNLENBQUNTLElBQVAsQ0FBWUMsTUFBWixDQUFtQjtBQUM1QkMsVUFBSSxFQUFFO0FBQ0ZMLGdCQURFO0FBRUZDLGdCQUFRLEVBQUVGLHNEQUFBLENBQWdCRSxRQUFoQixFQUEwQkgsSUFBMUI7QUFGUjtBQURzQixLQUFuQixDQUFiO0FBTUgsR0FQRCxDQU9FLE9BQU9RLEtBQVAsRUFBYztBQUNaVCxPQUFHLENBQUNVLElBQUosQ0FBUztBQUFFRCxXQUFLLEVBQUU7QUFBVCxLQUFUO0FBQ0E7QUFDSDs7QUFDRCxRQUFNRSxLQUFLLEdBQUdDLHdEQUFBLENBQ1Y7QUFBRVQsWUFBUSxFQUFFRyxJQUFJLENBQUNILFFBQWpCO0FBQTJCVSxNQUFFLEVBQUVQLElBQUksQ0FBQ08sRUFBcEM7QUFBd0NDLFFBQUksRUFBRSxJQUFJQyxJQUFKO0FBQTlDLEdBRFUsRUFFVkMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFVBRkYsRUFHVjtBQUNJQyxhQUFTLEVBQUU7QUFEZixHQUhVLENBQWQ7QUFRQW5CLEtBQUcsQ0FBQ29CLFNBQUosQ0FDSSxZQURKLEVBRUlDLHVEQUFBLENBQWlCLE9BQWpCLEVBQTBCVixLQUExQixFQUFpQztBQUM3QlcsWUFBUSxFQUFFLElBRG1CO0FBRTdCQyxVQUFNLEVBQUUsSUFBRSxFQUFGLEdBQUssRUFGZ0I7QUFHN0JDLFFBQUksRUFBRSxHQUh1QjtBQUk3QkMsWUFBUSxFQUFFLEtBSm1CO0FBSzdCQyxVQUFNO0FBTHVCLEdBQWpDLENBRko7QUFVQTFCLEtBQUcsQ0FBQ1UsSUFBSixDQUFTSixJQUFUO0FBQ0E7QUFDSCxDQW5DRCxFOzs7Ozs7Ozs7OztBQ05BLDRDOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLG9DOzs7Ozs7Ozs7OztBQ0FBLDBDIiwiZmlsZSI6InBhZ2VzL2FwaS9zaWdudXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdCc7XHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcclxuaW1wb3J0IGNvb2tpZSBmcm9tICdjb29raWUnO1xyXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XHJcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgY29uc3Qgc2FsdCA9IGJjcnlwdC5nZW5TYWx0U3luYygpO1xyXG4gICAgY29uc3QgeyB1c2VybmFtZSwgcGFzc3dvcmQgfSA9IHJlcS5ib2R5O1xyXG4gICAgbGV0IHVzZXI7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5jcmVhdGUoe1xyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZSxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBiY3J5cHQuaGFzaFN5bmMocGFzc3dvcmQsIHNhbHQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmVzLmpzb24oeyBlcnJvcjogJ0EgdXNlciB3aXRoIHRoYXQgdXNlcm5hbWUgYWxyZWFkeSBleGlzdHMnfSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdG9rZW4gPSBqd3Quc2lnbihcclxuICAgICAgICB7IHVzZXJuYW1lOiB1c2VyLnVzZXJuYW1lLCBpZDogdXNlci5pZCwgdGltZTogbmV3IERhdGUoKSB9LFxyXG4gICAgICAgIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBleHBpcmVzSW46ICc2aCdcclxuICAgICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIHJlcy5zZXRIZWFkZXIoXHJcbiAgICAgICAgJ1NldC1Db29raWUnLFxyXG4gICAgICAgIGNvb2tpZS5zZXJpYWxpemUoJ3Rva2VuJywgdG9rZW4sIHtcclxuICAgICAgICAgICAgaHR0cE9ubHk6IHRydWUsXHJcbiAgICAgICAgICAgIG1heEFnZTogNio2MCo2MCxcclxuICAgICAgICAgICAgcGF0aDogJy8nLFxyXG4gICAgICAgICAgICBzYW1lU2l0ZTogJ2xheCcsXHJcbiAgICAgICAgICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xyXG4gICAgICAgIH0pXHJcbiAgICApO1xyXG4gICAgcmVzLmpzb24odXNlcik7XHJcbiAgICByZXR1cm47XHJcbn07IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHByaXNtYS9jbGllbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJjcnlwdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29va2llXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7OyJdLCJzb3VyY2VSb290IjoiIn0=