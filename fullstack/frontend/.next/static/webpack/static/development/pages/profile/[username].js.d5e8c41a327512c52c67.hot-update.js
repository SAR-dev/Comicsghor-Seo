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
/* harmony import */ var rsuite__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rsuite */ "./node_modules/rsuite/es/index.js");
var _jsxFileName = "C:\\Users\\SAR-DEV\\Desktop\\fullstack\\frontend\\pages\\profile\\[username].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
    fluid: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_8__["Row"], {
    className: "show-grid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_8__["Col"], {
    xs: 18,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_8__["FlexboxGrid"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_8__["FlexboxGrid"].Item, {
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
    loader: __jsx(rsuite__WEBPACK_IMPORTED_MODULE_8__["Loader"], {
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
  })), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_8__["FlexboxGrid"].Item, {
    colspan: 24,
    className: "profile-photo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx(react_image__WEBPACK_IMPORTED_MODULE_7___default.a, {
    src: "https://i.imgur.com/".concat(user.avatar, "h.jpg"),
    loader: __jsx(rsuite__WEBPACK_IMPORTED_MODULE_8__["Loader"], {
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
  })), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_8__["FlexboxGrid"].Item, {
    colspan: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_8__["FlexboxGrid"], {
    className: "profile-info mt-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_8__["FlexboxGrid"].Item, {
    colspan: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("div", {
    className: "profile-name text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
    icon: "user",
    className: "mr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), user.name)), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_8__["FlexboxGrid"].Item, {
    colspan: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx("div", {
    className: "profile-email text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
    icon: "envelope-square",
    className: "mr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }), user.email)), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_8__["FlexboxGrid"].Item, {
    colspan: 8,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx("div", {
    className: "profile-username text-center link-decoration-none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "".concat(user.profile),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
    icon: "id-badge",
    className: "mr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }), user.username)))))), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_8__["FlexboxGrid"].Item, {
    colspan: 24,
    className: "my-3 profile-about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
    icon: "angle-double-right",
    className: "pl-3 py-2",
    size: "2x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }), __jsx("p", {
    className: "px-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, user.about)))), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_8__["Col"], {
    xs: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }))))));
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
//# sourceMappingURL=[username].js.d5e8c41a327512c52c67.hot-update.js.map