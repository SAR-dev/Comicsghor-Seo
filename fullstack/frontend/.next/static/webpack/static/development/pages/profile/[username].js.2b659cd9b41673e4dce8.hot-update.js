webpackHotUpdate("static\\development\\pages\\profile\\[username].js",{

/***/ "./pages/profile/[username].js":
/*!*************************************!*\
  !*** ./pages/profile/[username].js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _actions_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/user */ "./actions/user.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\Users\\SAR-DEV\\Desktop\\fullstack\\frontend\\pages\\profile\\[username].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





 // import ContactForm from '../../components/form/ContactForm';

var UserProfile = function UserProfile(_ref) {
  var user = _ref.user,
      blogs = _ref.blogs,
      query = _ref.query;
  // const head = () => (
  //     <Head>
  //         <title>
  //             {user.username} | {APP_NAME}
  //         </title>
  //         <meta name="description" content={`Blogs by ${user.username}`} />
  //         <link rel="canonical" href={`${DOMAIN}/profile/${query.username}`} />
  //         <meta property="og:title" content={`${user.username}| ${APP_NAME}`} />
  //         <meta property="og:description" content={`Blogs by ${user.username}`} />
  //         <meta property="og:type" content="webiste" />
  //         <meta property="og:url" content={`${DOMAIN}/profile/${query.username}`} />
  //         <meta property="og:site_name" content={`${APP_NAME}`} />
  //         <meta property="og:image" content={`${DOMAIN}/static/images/seoblog.jpg`} />
  //         <meta property="og:image:secure_url" content={`${DOMAIN}/static/images/seoblog.jpg`} />
  //         <meta property="og:image:type" content="image/jpg" />
  //         <meta property="fb:app_id" content={`${FB_APP_ID}`} />
  //     </Head>
  // );
  // const showUserBlogs = () => {
  //     return blogs.map((blog, i) => {
  //         return (
  //             <div className="mt-4 mb-4" key={i}>
  //                 <Link href={`/blogs/${blog.slug}`}>
  //                     <a className="lead">{blog.title}</a>
  //                 </Link>
  //             </div>
  //         );
  //     });
  // };
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(user), _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(blogs));
};

UserProfile.getInitialProps = function (_ref2) {
  var query = _ref2.query;
  return Object(_actions_user__WEBPACK_IMPORTED_MODULE_5__["userPublicProfile"])(query.username).then(function (data) {
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
//# sourceMappingURL=[username].js.2b659cd9b41673e4dce8.hot-update.js.map