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
/* harmony default export */ __webpack_exports__["default"] = ((req, res) => {
  const feed = [{
    text: 'Wow not having to configure and transpile typescript is one of the best parts of next.js',
    author: {
      username: 'john'
    }
  }, {
    text: 'I\'m a firm believer that dark mode should be universal default on the web',
    author: {
      username: 'johnny'
    }
  }];
  res.json(feed);
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcy10d2l0dGVyLWNsb25lLy4vcGFnZXMvYXBpL2ZlZWQudHMiXSwibmFtZXMiOlsicmVxIiwicmVzIiwiZmVlZCIsInRleHQiLCJhdXRob3IiLCJ1c2VybmFtZSIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0RBQWUsQ0FBQ0EsR0FBRCxFQUFNQyxHQUFOLEtBQWM7QUFDekIsUUFBTUMsSUFBSSxHQUFHLENBQ1Q7QUFDSUMsUUFBSSxFQUFFLDBGQURWO0FBRUlDLFVBQU0sRUFBRTtBQUFFQyxjQUFRLEVBQUU7QUFBWjtBQUZaLEdBRFMsRUFLVDtBQUNJRixRQUFJLEVBQUUsNEVBRFY7QUFFSUMsVUFBTSxFQUFFO0FBQUVDLGNBQVEsRUFBRTtBQUFaO0FBRlosR0FMUyxDQUFiO0FBVUFKLEtBQUcsQ0FBQ0ssSUFBSixDQUFTSixJQUFUO0FBQ0gsQ0FaRCxFIiwiZmlsZSI6InBhZ2VzL2FwaS9mZWVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCBmZWVkID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogJ1dvdyBub3QgaGF2aW5nIHRvIGNvbmZpZ3VyZSBhbmQgdHJhbnNwaWxlIHR5cGVzY3JpcHQgaXMgb25lIG9mIHRoZSBiZXN0IHBhcnRzIG9mIG5leHQuanMnLFxyXG4gICAgICAgICAgICBhdXRob3I6IHsgdXNlcm5hbWU6ICdqb2huJyB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdJXFwnbSBhIGZpcm0gYmVsaWV2ZXIgdGhhdCBkYXJrIG1vZGUgc2hvdWxkIGJlIHVuaXZlcnNhbCBkZWZhdWx0IG9uIHRoZSB3ZWInLFxyXG4gICAgICAgICAgICBhdXRob3I6IHsgdXNlcm5hbWU6ICdqb2hubnknIH1cclxuICAgICAgICB9XHJcbiAgICBdO1xyXG4gICAgcmVzLmpzb24oZmVlZCk7XHJcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==