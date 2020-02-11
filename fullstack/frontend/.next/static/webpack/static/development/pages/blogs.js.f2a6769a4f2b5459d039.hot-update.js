webpackHotUpdate("static\\development\\pages\\blogs.js",{

/***/ "./components/blog/Card.js":
/*!*********************************!*\
  !*** ./components/blog/Card.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-render-html */ "./node_modules/react-render-html/index.js");
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_render_html__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-image */ "./node_modules/react-image/umd/index.js");
/* harmony import */ var react_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rsuite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rsuite */ "./node_modules/rsuite/es/index.js");
var _jsxFileName = "C:\\Users\\SAR-DEV\\Desktop\\fullstack\\frontend\\components\\blog\\Card.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Card = function Card(_ref) {
  var blog = _ref.blog;

  var showBlogCategories = function showBlogCategories(blog) {
    return blog.categories.map(function (c, i) {
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        key: i,
        href: "/categories/".concat(c.slug),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, __jsx("a", {
        className: "small-category",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, c.name));
    });
  };

  var showBlogTags = function showBlogTags(blog) {
    return blog.tags.map(function (t, i) {
      return __jsx(rsuite__WEBPACK_IMPORTED_MODULE_6__["Tag"], {
        style: {
          backgroundColor: '#ccc'
        },
        key: i,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/tags/".concat(t.slug),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, __jsx("a", {
        className: "small-tag",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, t.name)));
    });
  };

  return __jsx("div", {
    className: "article-box mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    fluid: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    className: "show-grid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    xs: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, showBlogCategories(blog), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/blogs/".concat(blog.slug),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("h6", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, blog.title))))))), __jsx("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    fluid: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    className: "show-grid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    xs: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("p", {
    className: "writer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_6__["Icon"], {
    icon: "user",
    className: "pr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), " ", blog.postedBy.name, ' ', __jsx(rsuite__WEBPACK_IMPORTED_MODULE_6__["Icon"], {
    icon: "calendar",
    className: "px-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), " ", moment__WEBPACK_IMPORTED_MODULE_3___default()(blog.updatedAt).fromNow()))))), __jsx("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    fluid: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    className: "show-grid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("div", {
    className: "blog-excerpt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react_render_html__WEBPACK_IMPORTED_MODULE_2___default()(blog.excerpt))), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    xs: 12,
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx(react_image__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: "blog-thumbnail",
    src: "".concat(_config__WEBPACK_IMPORTED_MODULE_4__["API"], "/blog/photo/").concat(blog.slug),
    loader: __jsx(rsuite__WEBPACK_IMPORTED_MODULE_6__["Loader"], {
      size: "md",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }))))), __jsx("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    fluid: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    className: "show-grid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    xs: 12,
    className: "tag-list-blog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_6__["TagGroup"], {
    className: "pt-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, showBlogTags(blog)))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ })

})
//# sourceMappingURL=blogs.js.f2a6769a4f2b5459d039.hot-update.js.map