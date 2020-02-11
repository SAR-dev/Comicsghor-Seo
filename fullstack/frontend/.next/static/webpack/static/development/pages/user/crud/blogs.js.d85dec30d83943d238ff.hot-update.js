webpackHotUpdate("static\\development\\pages\\user\\crud\\blogs.js",{

/***/ "./components/Topnav.js":
/*!******************************!*\
  !*** ./components/Topnav.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/auth */ "./actions/auth.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rsuite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rsuite */ "./node_modules/rsuite/es/index.js");
var _jsxFileName = "C:\\Users\\SAR-DEV\\Desktop\\fullstack\\frontend\\components\\Topnav.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Topnav = function Topnav() {
  return __jsx(rsuite__WEBPACK_IMPORTED_MODULE_4__["Navbar"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_4__["Navbar"].Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_4__["Nav"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_4__["Nav"].Item, {
    className: "link-decoration-none",
    icon: __jsx(rsuite__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
      icon: "home",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }),
    onClick: function onClick() {
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.replace('/');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Home"), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_4__["Nav"].Item, {
    className: "link-decoration-none",
    icon: __jsx(rsuite__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
      icon: "book",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }),
    onClick: function onClick() {
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.replace('/blogs');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Posts"), Object(_actions_auth__WEBPACK_IMPORTED_MODULE_1__["isAuth"])() && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_4__["Nav"].Item, {
    className: "link-decoration-none",
    icon: __jsx(rsuite__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
      icon: "pencil",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }),
    onClick: function onClick() {
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.replace('/user/crud/blog');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Write"), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_4__["Nav"].Item, {
    className: "link-decoration-none",
    icon: __jsx(rsuite__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
      icon: "search",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }),
    onClick: function onClick() {
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.replace('/blogs/search');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Search"), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_4__["Nav"].Item, {
    className: "link-decoration-none",
    icon: __jsx(rsuite__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
      icon: "sign-out",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }),
    onClick: function onClick() {
      return Object(_actions_auth__WEBPACK_IMPORTED_MODULE_1__["signout"])(function () {
        return next_router__WEBPACK_IMPORTED_MODULE_2___default.a.replace('/signin');
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Sign Out")), !Object(_actions_auth__WEBPACK_IMPORTED_MODULE_1__["isAuth"])() && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_4__["Nav"].Item, {
    className: "link-decoration-none",
    icon: __jsx(rsuite__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
      icon: "sign-in",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }),
    onClick: function onClick() {
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.replace('/signin');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Sign In"), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_4__["Nav"].Item, {
    className: "link-decoration-none",
    icon: __jsx(rsuite__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
      icon: "user-plus",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }),
    onClick: function onClick() {
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.replace('/signup');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Sign Up"))), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_4__["Nav"], {
    pullRight: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, Object(_actions_auth__WEBPACK_IMPORTED_MODULE_1__["isAuth"])() && Object(_actions_auth__WEBPACK_IMPORTED_MODULE_1__["isAuth"])().role === 1 && __jsx(rsuite__WEBPACK_IMPORTED_MODULE_4__["Nav"].Item, {
    className: "link-decoration-none",
    icon: __jsx(rsuite__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
      icon: "user-secret",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }),
    onClick: function onClick() {
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.replace('/admin');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "".concat(Object(_actions_auth__WEBPACK_IMPORTED_MODULE_1__["isAuth"])().name)), Object(_actions_auth__WEBPACK_IMPORTED_MODULE_1__["isAuth"])() && Object(_actions_auth__WEBPACK_IMPORTED_MODULE_1__["isAuth"])().role === 0 && __jsx(rsuite__WEBPACK_IMPORTED_MODULE_4__["Nav"].Item, {
    className: "link-decoration-none",
    icon: __jsx(rsuite__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
      icon: "user",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }),
    onClick: function onClick() {
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.replace('/user');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "".concat(Object(_actions_auth__WEBPACK_IMPORTED_MODULE_1__["isAuth"])().name)))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Topnav);

/***/ })

})
//# sourceMappingURL=blogs.js.d85dec30d83943d238ff.hot-update.js.map