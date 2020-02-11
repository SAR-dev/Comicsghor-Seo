webpackHotUpdate("static\\development\\pages\\admin\\crud\\[slug].js",{

/***/ "./components/crud/BlogUpdate.js":
/*!***************************************!*\
  !*** ./components/crud/BlogUpdate.js ***!
  \***************************************/
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../actions/auth */ "./actions/auth.js");
/* harmony import */ var _actions_category__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../actions/category */ "./actions/category.js");
/* harmony import */ var _actions_tag__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../actions/tag */ "./actions/tag.js");
/* harmony import */ var _actions_blog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../actions/blog */ "./actions/blog.js");
/* harmony import */ var _node_modules_react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../node_modules/react-quill/dist/quill.snow.css */ "./node_modules/react-quill/dist/quill.snow.css");
/* harmony import */ var _node_modules_react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _helpers_quill__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../helpers/quill */ "./helpers/quill.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var _actions_imgur__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../actions/imgur */ "./actions/imgur.js");
/* harmony import */ var rsuite__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rsuite */ "./node_modules/rsuite/es/index.js");








var _jsxFileName = "C:\\Users\\SAR-DEV\\Desktop\\fullstack\\frontend\\components\\crud\\BlogUpdate.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }










var ReactQuill = next_dynamic__WEBPACK_IMPORTED_MODULE_11___default()(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-quill */ "./node_modules/react-quill/lib/index.js", 7));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! react-quill */ "./node_modules/react-quill/lib/index.js")];
    },
    modules: ['react-quill']
  }
});






var BlogUpdate = function BlogUpdate(_ref) {
  var router = _ref.router;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(''),
      body = _useState[0],
      setBody = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(''),
      title = _useState2[0],
      setTitle = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])([]),
      categories = _useState3[0],
      setCategories = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])([]),
      tags = _useState4[0],
      setTags = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])([]),
      checkedCat = _useState5[0],
      setCheckedCat = _useState5[1]; // categories


  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])([]),
      checkedTag = _useState6[0],
      setCheckedTag = _useState6[1]; // tags


  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])({
    error: '',
    success: '',
    formData: '',
    initial: true,
    uploading: false,
    images: []
  }),
      values = _useState7[0],
      setValues = _useState7[1];

  var error = values.error,
      success = values.success,
      formData = values.formData,
      initial = values.initial,
      uploading = values.uploading,
      images = values.images;
  var token = Object(_actions_auth__WEBPACK_IMPORTED_MODULE_12__["getCookie"])('token');
  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(function () {
    setValues(_objectSpread({}, values, {
      formData: new FormData()
    }));
    initBlog();
    initCategories();
    initTags();
  }, [router]);

  var initBlog = function initBlog() {
    if (router.query.slug) {
      Object(_actions_blog__WEBPACK_IMPORTED_MODULE_15__["singleBlog"])(router.query.slug).then(function (data) {
        if (data.error) {
          console.log(data.error);
        } else {
          setTitle(data.title);
          setImages(data.image[0]);
          setBody(data.body);
          setCategoriesArray(data.categories);
          setTagsArray(data.tags);
        }
      });
    }
  };

  var setImages = function setImages(data) {
    if (data) {
      var arr = data.split(',');
      setValues(_objectSpread({}, values, {
        images: arr
      }));
      formData.set('image', arr);
    }

    return;
  };

  var setCategoriesArray = function setCategoriesArray(blogCategories) {
    setCheckedCat(blogCategories[0]._id);
  };

  var setTagsArray = function setTagsArray(blogTags) {
    var ta = [];
    blogTags.map(function (t, i) {
      ta.push(t._id);
    });
    setCheckedTag(ta);
  };

  var initCategories = function initCategories() {
    Object(_actions_category__WEBPACK_IMPORTED_MODULE_13__["getCategories"])().then(function (data) {
      if (data.error) {
        setValues(_objectSpread({}, values, {
          error: data.error
        }));
      } else {
        var items = [];
        data.forEach(function (item, i) {
          items[i] = {
            key: i,
            value: item._id,
            label: item.name
          };
        });
        setCategories(items);
      }
    });
  };

  var initTags = function initTags() {
    Object(_actions_tag__WEBPACK_IMPORTED_MODULE_14__["getTags"])().then(function (data) {
      if (data.error) {
        setValues(_objectSpread({}, values, {
          error: data.error
        }));
      } else {
        var items = [];
        data.forEach(function (item, i) {
          items[i] = {
            key: i,
            value: item._id,
            label: item.name
          };
        });
        setTags(items);
      }
    });
  };

  var handleTitle = function handleTitle(e) {
    setTitle(e);
    formData.set('title', e);
  };

  var handleBody = function handleBody(e) {
    setBody(e);
    formData.set('body', e);
  };

  var editBlog = function editBlog(e) {
    e.preventDefault();
    setValues(_objectSpread({}, values, {
      uploading: true
    }));
    Object(_actions_blog__WEBPACK_IMPORTED_MODULE_15__["updateBlog"])(formData, token, router.query.slug).then(function (data) {
      if (data.error) {
        setValues(_objectSpread({}, values, {
          error: data.error
        }));
      } else {
        setValues(_objectSpread({}, values, {
          uploading: false,
          success: "Blog titled \"".concat(data.title, "\" is successfully updated")
        }));
        setTitle('');
        setBody('');
      }
    });
  };

  var handleTagsChange = function handleTagsChange(e, _ref2) {
    var value = _ref2.value;
    formData.set('tags', e);
    setCheckedTag(e);
  };

  var handleCatChange = function handleCatChange(e, _ref3) {
    var value = _ref3.value;
    formData.set('categories', e);
    setCheckedCat(e);
  };

  var handleImage = function handleImage(file, callback) {
    setValues(_objectSpread({}, values, {
      initial: false
    }));
    var reader = new FileReader();

    reader.onloadend = function () {
      callback(reader.result);
    };

    reader.readAsDataURL(file);
    formData.set('photo', file);
  };

  var thumbnailStyles = {
    width: 300,
    height: 200,
    marginTop: 0
  };

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_8___default.a.useState(null),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__["default"])(_React$useState, 2),
      fileInfo = _React$useState2[0],
      setFileInfo = _React$useState2[1];

  var handleImageArray = function handleImageArray(event) {
    setValues(_objectSpread({}, values, {
      uploading: true
    }));
    var fileInput = false;

    if (!event.target.files[0] || event.target.files[0].size > 19922944) {
      setValues(_objectSpread({}, values, {
        error: 'Image size is too large!',
        uploading: false
      }));
    }

    if (event.target.files[0]) {
      fileInput = true;
    }

    if (fileInput) {
      var img = event.target.files[0];
      Object(_actions_imgur__WEBPACK_IMPORTED_MODULE_19__["imageupload"])(img).then(function (res) {
        var imgArray = images;
        imgArray.push(res.data.id);
        setValues(_objectSpread({}, values, {
          images: imgArray,
          uploading: false
        }));
        formData.set('image', imgArray);
      });
    }
  };

  var deleteImage = function deleteImage(e, i) {
    e.preventDefault();
    var imgArray = images;
    imgArray.splice(i, 1);
    setValues(_objectSpread({}, values, {
      images: imgArray
    }));
    formData.set('image', imgArray);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_20__["Form"], {
    fluid: true,
    onSubmit: editBlog,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_20__["FormGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_20__["ControlLabel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, __jsx("h6", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, "Post Title")), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_20__["FormControl"], {
    placeholder: "Give an awesome title...",
    value: title,
    onChange: handleTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_20__["HelpBlock"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }, "Required")), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_20__["FormGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_20__["ControlLabel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }, __jsx("h6", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }, "Post Body")), __jsx(ReactQuill, {
    modules: _helpers_quill__WEBPACK_IMPORTED_MODULE_17__["QuillModules"],
    formats: _helpers_quill__WEBPACK_IMPORTED_MODULE_17__["QuillFormats"],
    value: body,
    placeholder: "Write something amazing",
    onChange: handleBody,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: this
  }), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_20__["HelpBlock"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: this
  }, "Required")), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_20__["FormGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_20__["FlexboxGrid"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_20__["FlexboxGrid"].Item, {
    colspan: 11,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_20__["TagPicker"], {
    block: true,
    data: tags,
    value: checkedTag,
    onChange: handleTagsChange,
    placeholder: "Select Tags",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: this
  }), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_20__["HelpBlock"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: this
  }, "Required")), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_20__["FlexboxGrid"].Item, {
    colspan: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: this
  }), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_20__["FlexboxGrid"].Item, {
    colspan: 11,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_20__["SelectPicker"], {
    block: true,
    data: categories,
    value: checkedCat,
    onChange: handleCatChange,
    placeholder: "Select Categories",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: this
  }), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_20__["HelpBlock"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263
    },
    __self: this
  }, "Required"))), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_20__["FlexboxGrid"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_20__["FlexboxGrid"].Item, {
    colspan: 10,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_20__["ControlLabel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: this
  }, __jsx("h6", {
    className: "pt-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269
    },
    __self: this
  }, "Select Thumbnail")), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_20__["Uploader"], {
    fileListVisible: false,
    listType: "picture",
    onUpload: function onUpload(file) {
      handleImage(file.blobFile, function (value) {
        setFileInfo(value);
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: this
  }, __jsx("button", {
    style: thumbnailStyles,
    type: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280
    },
    __self: this
  }, fileInfo ? __jsx("img", {
    src: fileInfo,
    className: "thumbnail-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281
    },
    __self: this
  }) : '', body && initial && __jsx("img", {
    src: "".concat(_config__WEBPACK_IMPORTED_MODULE_18__["API"], "/blog/photo/").concat(router.query.slug),
    className: "thumbnail-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284
    },
    __self: this
  }))), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_20__["HelpBlock"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291
    },
    __self: this
  }, "Required")))), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_20__["FormGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_20__["FlexboxGrid"].Item, {
    colspan: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_20__["ControlLabel"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297
    },
    __self: this
  }, __jsx("h6", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298
    },
    __self: this
  }, "Add Images")), __jsx("div", {
    className: "imgur-uploader",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_20__["FlexboxGrid"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301
    },
    __self: this
  }, images.map(function (image, i) {
    return __jsx(rsuite__WEBPACK_IMPORTED_MODULE_20__["FlexboxGrid"].Item, {
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 304
      },
      __self: this
    }, __jsx("div", {
      className: "add-image-grid",
      style: {
        display: 'grid',
        marginRight: '10px',
        marginBottom: '10px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 305
      },
      __self: this
    }, __jsx("img", {
      className: "imgur-Image",
      src: "https://i.imgur.com/".concat(image, "m.png"),
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 309
      },
      __self: this
    }), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_20__["Button"], {
      color: "red",
      size: "xs",
      onClick: function onClick(e) {
        return deleteImage(e, i);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 314
      },
      __self: this
    }, "Delete")));
  }), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_20__["FlexboxGrid"].Item, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321
    },
    __self: this
  }, __jsx("input", {
    onChange: handleImageArray,
    type: "file",
    accept: "image/*",
    className: uploading ? 'disabled-input' : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322
    },
    __self: this
  }), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_20__["Icon"], {
    icon: "upload",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328
    },
    __self: this
  }))))), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_20__["HelpBlock"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333
    },
    __self: this
  }, "Optional")), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_20__["FormGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_20__["ButtonToolbar"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_20__["Button"], {
    appearance: "primary",
    block: true,
    type: "submit",
    disabled: uploading ? true : false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337
    },
    __self: this
  }, "Submit"))))), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_20__["Modal"], {
    backdrop: "static",
    show: error.length > 0 ? true : false,
    onHide: function onHide() {
      return setValues(_objectSpread({}, values, {
        error: ''
      }));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_20__["Modal"].Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_20__["Modal"].Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_20__["Icon"], {
    icon: "exclamation-circle",
    style: {
      color: '#ffc845'
    },
    size: "lg",
    className: "pr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351
    },
    __self: this
  }), "Error Occured")), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_20__["Modal"].Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355
    },
    __self: this
  }, error), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_20__["Modal"].Footer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_20__["Button"], {
    onClick: function onClick() {
      return setValues(_objectSpread({}, values, {
        error: ''
      }));
    },
    appearance: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357
    },
    __self: this
  }, "OK, Got it"))), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_20__["Modal"], {
    backdrop: "static",
    show: success.length > 0 ? true : false,
    onHide: function onHide() {
      return next_router__WEBPACK_IMPORTED_MODULE_10___default.a.replace('/blogs');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_20__["Modal"].Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_20__["Modal"].Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_20__["Icon"], {
    icon: "check",
    style: {
      color: '#00a78e'
    },
    size: "lg",
    className: "pr-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365
    },
    __self: this
  }), "Successful")), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_20__["Modal"].Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369
    },
    __self: this
  }, success), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_20__["Modal"].Footer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_20__["Button"], {
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_10___default.a.replace('/blogs');
    },
    appearance: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371
    },
    __self: this
  }, "OK, Got it"))), __jsx(rsuite__WEBPACK_IMPORTED_MODULE_20__["Modal"], {
    backdrop: "static",
    show: uploading,
    size: "xs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_20__["Modal"].Body, {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377
    },
    __self: this
  }, __jsx(rsuite__WEBPACK_IMPORTED_MODULE_20__["Loader"], {
    size: "lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378
    },
    __self: this
  }), __jsx("h4", {
    className: "py-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379
    },
    __self: this
  }, "Uploading"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_10__["withRouter"])(BlogUpdate));

/***/ })

})
//# sourceMappingURL=[slug].js.c50e754b686872721876.hot-update.js.map