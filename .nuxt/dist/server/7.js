exports.ids = [7];
exports.modules = {

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=51d33ea6&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<nav class=\"navbar navbar-light\">", "</nav>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_c('nuxt-link', {
    staticClass: "navbar-brand",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("conduit")]), _vm._ssrNode(" "), _vm._ssrNode("<ul class=\"nav navbar-nav pull-xs-right\">", "</ul>", [_vm._ssrNode("<li class=\"nav-item\">", "</li>", [_c('nuxt-link', {
    staticClass: "nav-link",
    attrs: {
      "to": "/",
      "exact": ""
    }
  }, [_vm._v("Home")])], 1), _vm._ssrNode(" "), _vm.user ? _vm._ssrNode("<li class=\"nav-item\">", "</li>", [_c('nuxt-link', {
    staticClass: "nav-link",
    attrs: {
      "to": "/createArticle"
    }
  }, [_c('i', {
    staticClass: "ion-compose"
  }), _vm._v(" New Article\n          ")])], 1) : _vm._e(), _vm._ssrNode(" "), _vm.user ? _vm._ssrNode("<li class=\"nav-item\">", "</li>", [_c('nuxt-link', {
    staticClass: "nav-link",
    attrs: {
      "to": "/settings"
    }
  }, [_c('i', {
    staticClass: "ion-gear-a"
  }), _vm._v(" Settings\n          ")])], 1) : _vm._e(), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"nav-item\">", "</li>", [!_vm.user ? _c('nuxt-link', {
    staticClass: "nav-link",
    attrs: {
      "to": "/login"
    }
  }, [_vm._v("Sign in")]) : _vm._e()], 1), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"nav-item\">", "</li>", [!_vm.user ? _c('nuxt-link', {
    staticClass: "nav-link",
    attrs: {
      "to": "/register"
    }
  }, [_vm._v("Sign up")]) : _vm._e()], 1), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"nav-item\">", "</li>", [_vm.user ? _c('nuxt-link', {
    staticClass: "nav-link ng-binding",
    attrs: {
      "to": {
        name: 'profile',
        params: {
          username: _vm.user.username
        }
      }
    }
  }, [_c('img', {
    staticClass: "user-pic",
    attrs: {
      "src": _vm.user.image
    }
  }), _vm._v("\n            " + _vm._s(_vm.user.username) + "\n          ")]) : _vm._e()], 1)], 2)], 2)]), _vm._ssrNode(" "), _c('nuxt-child'), _vm._ssrNode(" "), _vm._ssrNode("<footer>", "</footer>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_c('nuxt-link', {
    staticClass: "logo-font",
    attrs: {
      "to": "/"
    }
  }, [_vm._v("conduit")]), _vm._ssrNode(" <span class=\"attribution\">\n        An interactive learning project from\n        <a href=\"https://thinkster.io\">Thinkster</a>. Code &amp; design\n        licensed under MIT.\n      </span>")], 2)])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=51d33ea6&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&

/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  name: "layout",
  computed: {
    ...Object(external_vuex_["mapState"])(["user"])
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "314509de"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=7.js.map