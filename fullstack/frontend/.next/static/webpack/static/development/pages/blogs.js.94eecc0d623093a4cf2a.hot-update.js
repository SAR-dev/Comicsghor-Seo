webpackHotUpdate("static\\development\\pages\\blogs.js",{

/***/ "./actions/blog.js":
/*!*************************!*\
  !*** ./actions/blog.js ***!
  \*************************/
/*! exports provided: createBlog, listBlogsWithCategoriesAndTags, singleBlog, listRelated, list, removeBlog, updateBlog, listSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBlog", function() { return createBlog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listBlogsWithCategoriesAndTags", function() { return listBlogsWithCategoriesAndTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleBlog", function() { return singleBlog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listRelated", function() { return listRelated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "list", function() { return list; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeBlog", function() { return removeBlog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateBlog", function() { return updateBlog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listSearch", function() { return listSearch; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth */ "./actions/auth.js");





var createBlog = function createBlog(blog, token) {
  var createBlogEndpoint;

  if (Object(_auth__WEBPACK_IMPORTED_MODULE_4__["isAuth"])() && Object(_auth__WEBPACK_IMPORTED_MODULE_4__["isAuth"])().role == 1) {
    createBlogEndpoint = "".concat(_config__WEBPACK_IMPORTED_MODULE_2__["API"], "/blog");
  } else if (Object(_auth__WEBPACK_IMPORTED_MODULE_4__["isAuth"])() && Object(_auth__WEBPACK_IMPORTED_MODULE_4__["isAuth"])().role === 0) {
    createBlogEndpoint = "".concat(_config__WEBPACK_IMPORTED_MODULE_2__["API"], "/user/blog");
  }

  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(createBlogEndpoint), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: "Bearer ".concat(token)
    },
    body: blog
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var listBlogsWithCategoriesAndTags = function listBlogsWithCategoriesAndTags(skip, limit) {
  var data = {
    limit: limit,
    skip: skip
  };
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_2__["API"], "/blogs-categories-tags"), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(data)
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var singleBlog = function singleBlog(slug) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_2__["API"], "/blog/").concat(slug), {
    method: 'GET'
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var listRelated = function listRelated(blog) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_2__["API"], "/blogs/related"), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(blog)
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var list = function list(username) {
  var listBlogEndpoint;

  if (username) {
    listBlogEndpoint = "".concat(_config__WEBPACK_IMPORTED_MODULE_2__["API"], "/").concat(username, "/blogs");
  } else {
    listBlogEndpoint = "".concat(_config__WEBPACK_IMPORTED_MODULE_2__["API"], "/blogs");
  }

  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(listBlogEndpoint), {
    method: 'GET'
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var removeBlog = function removeBlog(slug, token) {
  var deleteBlogEndpoint;

  if (Object(_auth__WEBPACK_IMPORTED_MODULE_4__["isAuth"])() && Object(_auth__WEBPACK_IMPORTED_MODULE_4__["isAuth"])().role == 1) {
    deleteBlogEndpoint = "".concat(_config__WEBPACK_IMPORTED_MODULE_2__["API"], "/blog/").concat(slug);
  } else if (Object(_auth__WEBPACK_IMPORTED_MODULE_4__["isAuth"])() && Object(_auth__WEBPACK_IMPORTED_MODULE_4__["isAuth"])().role === 0) {
    deleteBlogEndpoint = "".concat(_config__WEBPACK_IMPORTED_MODULE_2__["API"], "/user/blog/").concat(slug);
  }

  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(deleteBlogEndpoint), {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: "Bearer ".concat(token)
    }
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var updateBlog = function updateBlog(blog, token, slug) {
  var updateBlogEndpoint;

  if (Object(_auth__WEBPACK_IMPORTED_MODULE_4__["isAuth"])() && Object(_auth__WEBPACK_IMPORTED_MODULE_4__["isAuth"])().role == 1) {
    updateBlogEndpoint = "".concat(_config__WEBPACK_IMPORTED_MODULE_2__["API"], "/blog/").concat(slug);
  } else if (Object(_auth__WEBPACK_IMPORTED_MODULE_4__["isAuth"])() && Object(_auth__WEBPACK_IMPORTED_MODULE_4__["isAuth"])().role === 0) {
    updateBlogEndpoint = "".concat(_config__WEBPACK_IMPORTED_MODULE_2__["API"], "/user/blog/").concat(slug);
  }

  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(updateBlogEndpoint), {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      Authorization: "Bearer ".concat(token)
    },
    body: blog
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};
var listSearch = function listSearch(params) {
  // console.log('search params', params);
  var query = query_string__WEBPACK_IMPORTED_MODULE_3___default.a.stringify(params); // console.log('query params', query);

  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_2__["API"], "/blogs/search?").concat(query), {
    method: 'GET'
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return console.log(err);
  });
};

/***/ })

})
//# sourceMappingURL=blogs.js.94eecc0d623093a4cf2a.hot-update.js.map