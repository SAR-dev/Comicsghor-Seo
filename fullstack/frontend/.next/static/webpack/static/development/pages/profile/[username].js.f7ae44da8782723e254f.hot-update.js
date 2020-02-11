webpackHotUpdate("static\\development\\pages\\profile\\[username].js",{

/***/ "./pages/profile/[username].js":
/*!*************************************!*\
  !*** ./pages/profile/[username].js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _actions_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/user */ "./actions/user.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-image */ "./node_modules/react-image/umd/index.js");
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_image__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_blog_ProfileBlogs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/blog/ProfileBlogs */ "./components/blog/ProfileBlogs.js");
/* harmony import */ var rsuite__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rsuite */ "./node_modules/rsuite/es/index.js");
/* harmony import */ var rsuite_lib_FlexboxGrid_FlexboxGridItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rsuite/lib/FlexboxGrid/FlexboxGridItem */ "./node_modules/rsuite/lib/FlexboxGrid/FlexboxGridItem.js");
/* harmony import */ var rsuite_lib_FlexboxGrid_FlexboxGridItem__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(rsuite_lib_FlexboxGrid_FlexboxGridItem__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\Users\\SAR-DEV\\Desktop\\fullstack\\frontend\\pages\\profile\\[username].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





 // import ContactForm from '../../components/form/ContactForm';






var UserProfile = function UserProfile(_ref) {
  var user = _ref.user,
      blogs = _ref.blogs,
      query = _ref.query;

  var head = function head() {
    return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, __jsx("title", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, user.username, " | ", _config__WEBPACK_IMPORTED_MODULE_5__["APP_NAME"]), __jsx("meta", {
      name: "description",
      content: "Blogs by ".concat(user.username),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }), __jsx("link", {
      rel: "canonical",
      href: "".concat(_config__WEBPACK_IMPORTED_MODULE_5__["DOMAIN"], "/profile/").concat(query.username),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }), __jsx("meta", {
      property: "og:title",
      content: "".concat(user.username, "| ").concat(_config__WEBPACK_IMPORTED_MODULE_5__["APP_NAME"]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }), __jsx("meta", {
      property: "og:description",
      content: "Blogs by ".concat(user.username),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }), __jsx("meta", {
      property: "og:type",
      content: "webiste",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }), __jsx("meta", {
      property: "og:url",
      content: "".concat(_config__WEBPACK_IMPORTED_MODULE_5__["DOMAIN"], "/profile/").concat(query.username),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }), __jsx("meta", {
      property: "og:site_name",
      content: "".concat(_config__WEBPACK_IMPORTED_MODULE_5__["APP_NAME"]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }), __jsx("meta", {
      property: "og:image",
      content: "".concat(_config__WEBPACK_IMPORTED_MODULE_5__["DOMAIN"], "/static/images/seoblog.jpg"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }), __jsx("meta", {
      property: "og:image:secure_url",
      content: "".concat(_config__WEBPACK_IMPORTED_MODULE_5__["DOMAIN"], "/static/images/seoblog.jpg"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }), __jsx("meta", {
      property: "og:image:type",
      content: "image/jpg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }), __jsx("meta", {
      property: "fb:app_id",
      content: "".concat(_config__WEBPACK_IMPORTED_MODULE_5__["FB_APP_ID"]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }));
  };

  var showUserBlogs = function showUserBlogs() {
    return blogs.map(function (blog, i) {
      return __jsx(rsuite__WEBPACK_IMPORTED_MODULE_9__["FlexboxGrid"].Item, {
        colspan: 24,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, __jsx(_components_blog_ProfileBlogs__WEBPACK_IMPORTED_MODULE_8__["default"], {
        blog: blog,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }));
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, head(), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
    fluid: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_9__["Row"], {
    className: "show-grid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_9__["Col"], {
    xs: 18,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_9__["FlexboxGrid"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_9__["FlexboxGrid"].Item, {
    colspan: 24,
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx(react_image__WEBPACK_IMPORTED_MODULE_7___default.a, {
    className: "cover-photo",
    src: "https://i.imgur.com/".concat(user.cover, "h.jpg"),
    loader: __jsx(rsuite__WEBPACK_IMPORTED_MODULE_9__["Loader"], {
      size: "md",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  })), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_9__["FlexboxGrid"].Item, {
    colspan: 24,
    className: "profile-photo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx(react_image__WEBPACK_IMPORTED_MODULE_7___default.a, {
    src: "https://i.imgur.com/".concat(user.avatar, "h.jpg"),
    loader: __jsx(rsuite__WEBPACK_IMPORTED_MODULE_9__["Loader"], {
      size: "md",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), user.name), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_9__["FlexboxGrid"].Item, {
    colspan: 24,
    className: "my-3 pb-4 profile-about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx("div", {
    className: "profile-info px-4 py-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
    icon: "code",
    className: "mr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), user.username), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
    icon: "user",
    className: "mr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), user.name), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
    icon: "envelope",
    className: "mr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }), user.email)), __jsx("p", {
    className: "about-me",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, user.about)), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_9__["FlexboxGrid"].Item, {
    colspan: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_9__["FlexboxGrid"], {
    justify: "space-around",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, showUserBlogs())))), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_9__["Col"], {
    xs: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_9__["FlexboxGrid"], {
    justify: "space-around",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, showUserBlogs()))))));
};

UserProfile.getInitialProps = function (_ref2) {
  var query = _ref2.query;
  return Object(_actions_user__WEBPACK_IMPORTED_MODULE_4__["userPublicProfile"])(query.username).then(function (data) {
    if (data.error) {
      console.log(data.error);
    } else {
      return {
        user: data.user,
        blogs: data.blogs,
        query: query
      };
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (UserProfile);

/***/ })

})
//# sourceMappingURL=[username].js.f7ae44da8782723e254f.hot-update.js.map