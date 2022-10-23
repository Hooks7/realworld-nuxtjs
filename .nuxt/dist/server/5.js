exports.ids = [5];
exports.modules = {

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return registration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return followUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return unFollowUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return updateCurrentUser; });
// 登录
const login = ($axios, data) => {
  return $axios({
    url: '/api/users/login',
    method: 'POST',
    data
  });
};

// 注册
const registration = ($axios, data) => {
  return $axios({
    url: '/api/users',
    method: 'POST',
    data
  });
};

// 获取用户信息
const getProfile = ($axios, username) => {
  return $axios({
    url: `/api/profiles/${username}`,
    method: 'GET'
  });
};

//订阅用户
const followUser = ($axios, username) => {
  return $axios({
    url: `/api/profiles/${username}/follow`,
    method: 'POST'
  });
};

//取消订阅用户
const unFollowUser = ($axios, username) => {
  return $axios({
    url: `/api/profiles/${username}/follow`,
    method: 'DELETE'
  });
};

// 获取登录用户信息
const getCurrentUser = $axios => {
  return $axios({
    url: `/api/user`,
    method: 'GET'
  });
};

// 更新登录用户信息
const updateCurrentUser = ($axios, data) => {
  return $axios({
    url: `/api/user`,
    method: 'PUT',
    data
  });
};

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=template&id=cd249578&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "auth-page"
  }, [_vm._ssrNode("<div class=\"container page\"><div class=\"row\"><div class=\"col-md-6 offset-md-3 col-xs-12\"><h1 class=\"text-xs-center\">" + _vm._ssrEscape("Sign " + _vm._s(_vm.isLogin ? "in" : "up")) + "</h1> <p class=\"text-xs-center\"><a href>Have an account?</a></p> <ul class=\"error-messages\">" + _vm._ssrList(_vm.errors, function (v, key) {
    return "<li>" + _vm._ssrEscape(_vm._s(key) + "  " + _vm._s(v)) + "</li>";
  }) + "</ul> <form>" + (!_vm.isLogin ? "<fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Your Name\"" + _vm._ssrAttr("value", _vm.user.username) + " class=\"form-control form-control-lg\"></fieldset>" : "<!---->") + " <fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Email\"" + _vm._ssrAttr("value", _vm.user.email) + " class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><input type=\"password\" placeholder=\"Password\"" + _vm._ssrAttr("value", _vm.user.password) + " class=\"form-control form-control-lg\"></fieldset> <button class=\"btn btn-lg btn-primary pull-xs-right\">" + _vm._ssrEscape("\n            Sign " + _vm._s(_vm.isLogin ? "in" : "up") + "\n          ") + "</button></form></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=template&id=cd249578&

// EXTERNAL MODULE: ./api/user.js
var api_user = __webpack_require__(30);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login/index.vue?vue&type=script&lang=js&
// 仅在客户端加载 js-cookie 包
const Cookie =  false ? undefined : undefined;


/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  data() {
    return {
      user: {
        username: "",
        email: "hooks7@163.com",
        password: "961001"
      },
      errors: ""
    };
  },
  computed: {
    isLogin() {
      return this.$route.name === "login";
    }
  },
  methods: {
    ...Object(external_vuex_["mapMutations"])(["setUser"]),
    //  表单提交
    async onsubmit() {
      try {
        if (this.isLogin) {
          let {
            user
          } = await Object(api_user["d" /* login */])(this.$axios, {
            user: this.user
          });
          this.setUser(user);
          // 持久化存储 当前版本需手动转化成json字符串
          Cookie.set("user", JSON.stringify(user));
        } else {
          // 注册用户
          await Object(api_user["e" /* registration */])(this.$axios, {
            user: this.user
          });
        }
        this.$router.push("/");
      } catch (error) {
        this.errors = error.response.data.errors;
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/login/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/login/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "7ddee7b8"
  
)

/* harmony default export */ var login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=5.js.map