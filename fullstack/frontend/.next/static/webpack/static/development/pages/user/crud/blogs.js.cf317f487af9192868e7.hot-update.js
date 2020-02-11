webpackHotUpdate("static\\development\\pages\\user\\crud\\blogs.js",{

/***/ "./components/crud/BlogRead.js":
/*!*************************************!*\
  !*** ./components/crud/BlogRead.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/auth */ "./actions/auth.js");
/* harmony import */ var _actions_blog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/blog */ "./actions/blog.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rsuite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rsuite */ "./node_modules/rsuite/es/index.js");
var _jsxFileName = "C:\\Users\\SAR-DEV\\Desktop\\fullstack\\frontend\\components\\crud\\BlogRead.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var BlogRead = function BlogRead(_ref) {
  var username = _ref.username;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      blogs = _useState[0],
      setBlogs = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      message = _useState2[0],
      setMessage = _useState2[1];

  var token = Object(_actions_auth__WEBPACK_IMPORTED_MODULE_3__["getCookie"])('token');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    loadBlogs();
  }, []);

  var loadBlogs = function loadBlogs() {
    Object(_actions_blog__WEBPACK_IMPORTED_MODULE_4__["list"])(username).then(function (data) {
      if (data.error) {
        console.log(data.error);
      } else {
        setBlogs(data);
      }
    });
  };

  var deleteBlog = function deleteBlog(slug) {
    Object(_actions_blog__WEBPACK_IMPORTED_MODULE_4__["removeBlog"])(slug, token).then(function (data) {
      if (data.error) {
        console.log(data.error);
      } else {
        setMessage(data.message);
        loadBlogs();
        open(data.message);
      }
    });
  };

  var open = function open(msg) {
    rsuite__WEBPACK_IMPORTED_MODULE_6__["Notification"]['success']({
      title: 'Success',
      description: msg
    });
  };

  var deleteConfirm = function deleteConfirm(slug) {
    var answer = window.confirm('Are you sure you want to delete your blog?');

    if (answer) {
      deleteBlog(slug);
    }
  };

  var showUpdateButton = function showUpdateButton(blog) {
    if (Object(_actions_auth__WEBPACK_IMPORTED_MODULE_3__["isAuth"])() && Object(_actions_auth__WEBPACK_IMPORTED_MODULE_3__["isAuth"])().role === 0) {
      return __jsx(rsuite__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        size: "sm",
        onClick: function onClick() {
          return next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/user/crud/".concat(blog.slug));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_6__["Icon"], {
        icon: "edit2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }), " Edit");
    } else if (Object(_actions_auth__WEBPACK_IMPORTED_MODULE_3__["isAuth"])() && Object(_actions_auth__WEBPACK_IMPORTED_MODULE_3__["isAuth"])().role === 1) {
      return __jsx(rsuite__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        size: "sm",
        onClick: function onClick() {
          return next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/admin/crud/".concat(blog.slug));
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_6__["Icon"], {
        icon: "edit2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }), " Edit");
    }
  };

  var showAllBlogs = function showAllBlogs() {
    return blogs.map(function (blog, i) {
      return __jsx(rsuite__WEBPACK_IMPORTED_MODULE_6__["FlexboxGrid"], {
        key: i,
        className: "manage-blog px-3 py-2 mb-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_6__["FlexboxGrid"].Item, {
        colspan: 18,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, blog.title), __jsx("p", {
        className: "writer grey-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_6__["Icon"], {
        icon: "user",
        className: "pr-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }), " ", blog.postedBy.name, ' ', __jsx(rsuite__WEBPACK_IMPORTED_MODULE_6__["Icon"], {
        icon: "calendar",
        className: "px-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }), " ", moment__WEBPACK_IMPORTED_MODULE_5___default()(blog.updatedAt).fromNow())), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_6__["FlexboxGrid"].Item, {
        colspan: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_6__["ButtonToolbar"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        size: "sm",
        onClick: function onClick() {
          return deleteConfirm(blog.slug);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_6__["Icon"], {
        icon: "trash",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }), " Delete"), showUpdateButton(blog))));
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx("div", {
    className: "container my-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    fluid: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    className: "show-grid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, showAllBlogs()))));
};

/* harmony default export */ __webpack_exports__["default"] = (BlogRead);

/***/ })

})
//# sourceMappingURL=blogs.js.cf317f487af9192868e7.hot-update.js.map