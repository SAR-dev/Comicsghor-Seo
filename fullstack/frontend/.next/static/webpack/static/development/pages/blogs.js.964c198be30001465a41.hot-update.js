webpackHotUpdate("static\\development\\pages\\blogs.js",{

/***/ "./pages/blogs/index.js":
/*!******************************!*\
  !*** ./pages/blogs/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _actions_blog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions/blog */ "./actions/blog.js");
/* harmony import */ var _components_blog_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/blog/Card */ "./components/blog/Card.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var rsuite__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rsuite */ "./node_modules/rsuite/es/index.js");

var _jsxFileName = "C:\\Users\\SAR-DEV\\Desktop\\fullstack\\frontend\\pages\\blogs\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










var Blogs = function Blogs(_ref) {
  var blogs = _ref.blogs,
      categories = _ref.categories,
      tags = _ref.tags,
      totalBlogs = _ref.totalBlogs,
      blogsLimit = _ref.blogsLimit,
      blogSkip = _ref.blogSkip,
      router = _ref.router;

  var head = function head() {
    return __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx("title", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, "Programming blogs | ", _config__WEBPACK_IMPORTED_MODULE_8__["APP_NAME"]), __jsx("meta", {
      name: "description",
      content: "Programming blogs and tutorials on react node next vue php laravel and web developoment",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }), __jsx("link", {
      rel: "canonical",
      href: "".concat(_config__WEBPACK_IMPORTED_MODULE_8__["DOMAIN"]).concat(router.pathname),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }), __jsx("meta", {
      property: "og:title",
      content: "Latest web developoment tutorials | ".concat(_config__WEBPACK_IMPORTED_MODULE_8__["APP_NAME"]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }), __jsx("meta", {
      property: "og:description",
      content: "Programming blogs and tutorials on react node next vue php laravel and web developoment",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }), __jsx("meta", {
      property: "og:type",
      content: "webiste",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }), __jsx("meta", {
      property: "og:url",
      content: "".concat(_config__WEBPACK_IMPORTED_MODULE_8__["DOMAIN"]).concat(router.pathname),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }), __jsx("meta", {
      property: "og:site_name",
      content: "".concat(_config__WEBPACK_IMPORTED_MODULE_8__["APP_NAME"]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }), __jsx("meta", {
      property: "og:image",
      content: "".concat(_config__WEBPACK_IMPORTED_MODULE_8__["DOMAIN"], "/images/seoblog.jpg"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }), __jsx("meta", {
      property: "og:image:secure_url",
      ccontent: "".concat(_config__WEBPACK_IMPORTED_MODULE_8__["DOMAIN"], "/images/seoblog.jpg"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }), __jsx("meta", {
      property: "og:image:type",
      content: "image/jpg",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }), __jsx("meta", {
      property: "fb:app_id",
      content: "".concat(_config__WEBPACK_IMPORTED_MODULE_8__["FB_APP_ID"]),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }));
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(blogsLimit),
      limit = _useState[0],
      setLimit = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      skip = _useState2[0],
      setSkip = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(totalBlogs),
      size = _useState3[0],
      setSize = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      loadedBlogs = _useState4[0],
      setLoadedBlogs = _useState4[1];

  var loadMore = function loadMore() {
    var toSkip = skip + limit;
    Object(_actions_blog__WEBPACK_IMPORTED_MODULE_6__["listBlogsWithCategoriesAndTags"])(toSkip, limit).then(function (data) {
      if (data.error) {
        console.log(data.error);
      } else {
        setLoadedBlogs([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(loadedBlogs), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(data.blogs)));
        setSize(data.size);
        setSkip(toSkip);
      }
    });
  };

  var loadMoreButton = function loadMoreButton() {
    return size > 0 && size >= limit && __jsx(rsuite__WEBPACK_IMPORTED_MODULE_9__["Button"], {
      appearance: "primary",
      block: true,
      onClick: loadMore,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, "Load More");
  };

  var showAllBlogs = function showAllBlogs() {
    return blogs.map(function (blog, i) {
      return __jsx("article", {
        key: i,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, __jsx(_components_blog_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {
        blog: blog,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }));
    });
  };

  var showLoadedBlogs = function showLoadedBlogs() {
    return loadedBlogs.map(function (blog, i) {
      return __jsx("article", {
        key: i,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, __jsx(_components_blog_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {
        blog: blog,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }));
    });
  };

  var showAllCategories = function showAllCategories() {
    return categories.map(function (c, i) {
      return __jsx(rsuite__WEBPACK_IMPORTED_MODULE_9__["List"].Item, {
        key: i,
        index: i,
        className: "menu-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/categories/".concat(c.slug),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, __jsx("a", {
        className: "pl-2 ".concat(router.pathname === "/".concat(c.slug) ? 'active-menu' : ''),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, c.name)));
    });
  };

  var showAllTags = function showAllTags() {
    return tags.map(function (t, i) {
      return __jsx(rsuite__WEBPACK_IMPORTED_MODULE_9__["List"].Item, {
        key: i,
        index: i,
        className: "menu-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/tags/".concat(t.slug),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, __jsx("a", {
        className: "pl-2 ".concat(router.pathname === "/".concat(t.slug) ? 'active-menu' : ''),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, t.name)));
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, head(), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, __jsx("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_9__["Grid"], {
    fluid: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_9__["Row"], {
    className: "show-grid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_9__["Col"], {
    xs: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, __jsx("h6", {
    className: "pb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "Categories"), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_9__["List"], {
    bordered: true,
    size: "sm",
    className: "mr-4 mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, showAllCategories()), __jsx("h6", {
    className: "pb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "Tags"), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_9__["List"], {
    bordered: true,
    size: "sm",
    className: "mr-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, showAllTags()))), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_9__["Col"], {
    xs: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, showAllBlogs()), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, showLoadedBlogs()), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, loadMoreButton())), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_9__["Col"], {
    xs: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  })))))));
};

Blogs.getInitialProps = function () {
  var skip = 0;
  var limit = 2;
  return Object(_actions_blog__WEBPACK_IMPORTED_MODULE_6__["listBlogsWithCategoriesAndTags"])(skip, limit).then(function (data) {
    if (data.error) {
      console.log(data.error);
    } else {
      return {
        blogs: data.blogs,
        categories: data.categories,
        tags: data.tags,
        totalBlogs: data.size,
        blogsLimit: limit,
        blogSkip: skip
      };
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(Blogs));

/***/ })

})
//# sourceMappingURL=blogs.js.964c198be30001465a41.hot-update.js.map