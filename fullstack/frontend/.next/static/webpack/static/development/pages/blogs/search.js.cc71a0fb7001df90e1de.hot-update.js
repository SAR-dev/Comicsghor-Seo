webpackHotUpdate("static\\development\\pages\\blogs\\search.js",{

/***/ "./components/blog/SearchCard.js":
/*!***************************************!*\
  !*** ./components/blog/SearchCard.js ***!
  \***************************************/
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
var _jsxFileName = "C:\\Users\\SAR-DEV\\Desktop\\fullstack\\frontend\\components\\blog\\SearchCard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var SearchCard = function SearchCard(_ref) {
  var blog = _ref.blog;
  return __jsx("div", {
    className: "article-box mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    fluid: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    className: "show-grid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    xs: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/blogs/".concat(blog.slug),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("h6", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, blog.title))))))), __jsx("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    fluid: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    className: "show-grid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    xs: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("p", {
    className: "writer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_6__["Icon"], {
    icon: "calendar",
    className: "px-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), " ", moment__WEBPACK_IMPORTED_MODULE_3___default()(blog.updatedAt).fromNow()))))), __jsx("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    fluid: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    className: "show-grid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("div", {
    className: "blog-excerpt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react_render_html__WEBPACK_IMPORTED_MODULE_2___default()(blog.excerpt))), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    xs: 12,
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx(react_image__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: "blog-thumbnail",
    src: "".concat(_config__WEBPACK_IMPORTED_MODULE_4__["API"], "/blog/photo/").concat(blog.slug),
    loader: __jsx(rsuite__WEBPACK_IMPORTED_MODULE_6__["Loader"], {
      size: "md",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchCard);

/***/ })

})
//# sourceMappingURL=search.js.cc71a0fb7001df90e1de.hot-update.js.map