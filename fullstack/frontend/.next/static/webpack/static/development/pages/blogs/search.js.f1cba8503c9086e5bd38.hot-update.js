webpackHotUpdate("static\\development\\pages\\blogs\\search.js",{

/***/ "./components/blog/Search.js":
/*!***********************************!*\
  !*** ./components/blog/Search.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-render-html */ "./node_modules/react-render-html/index.js");
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_render_html__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _actions_blog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../actions/blog */ "./actions/blog.js");
/* harmony import */ var _components_blog_SearchCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/blog/SearchCard */ "./components/blog/SearchCard.js");
/* harmony import */ var rsuite__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rsuite */ "./node_modules/rsuite/es/index.js");







var _jsxFileName = "C:\\Users\\SAR-DEV\\Desktop\\fullstack\\frontend\\components\\blog\\Search.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }








var Search = function Search() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])({
    search: undefined,
    results: [],
    searched: false,
    message: ''
  }),
      values = _useState[0],
      setValues = _useState[1];

  var search = values.search,
      results = values.results,
      searched = values.searched,
      message = values.message;

  var searchSubmit = function searchSubmit(e) {
    e.preventDefault();
    Object(_actions_blog__WEBPACK_IMPORTED_MODULE_10__["listSearch"])({
      search: search
    }).then(function (data) {
      setValues(_objectSpread({}, values, {
        results: data,
        searched: true,
        message: "".concat(data.length, " blogs found")
      }));
    });
  };

  var handleChange = function handleChange(e) {
    setValues(_objectSpread({}, values, {
      search: e,
      searched: false,
      results: []
    }));
  };

  var searchedBlogs = function searchedBlogs() {
    var results = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, message && __jsx("p", {
      className: "pt-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, message), results.map(function (blog, i) {
      return __jsx(rsuite__WEBPACK_IMPORTED_MODULE_12__["Col"], {
        xs: 12,
        key: i,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, __jsx(_components_blog_SearchCard__WEBPACK_IMPORTED_MODULE_11__["default"], {
        blog: blog,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }));
    }));
  };

  var searchForm = function searchForm() {
    return __jsx(rsuite__WEBPACK_IMPORTED_MODULE_12__["Form"], {
      onSubmit: searchSubmit,
      fluid: true,
      layout: "inline",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_12__["FormGroup"], {
      style: {
        marginRight: 5
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_12__["FormControl"], {
      placeholder: "Search Posts...",
      onChange: handleChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    })), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_12__["Button"], {
      type: "submit",
      appearance: "ghost",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_12__["Icon"], {
      icon: "search",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }), " Search"));
  };

  return __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_12__["Grid"], {
    fluid: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_12__["Row"], {
    className: "show-grid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_12__["Col"], {
    xs: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, searchForm()), searched && __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, searchedBlogs(results)))));
};

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_6__["TagGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, showBlogTags(blog)))))));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchCard);

/***/ })

})
//# sourceMappingURL=search.js.f1cba8503c9086e5bd38.hot-update.js.map