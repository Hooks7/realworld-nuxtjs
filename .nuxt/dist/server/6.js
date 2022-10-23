exports.ids = [6];
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

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/settings/index.vue?vue&type=template&id=a4cc282e&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"settings-page\"><div class=\"container page\"><div class=\"row\"><div class=\"col-md-6 offset-md-3 col-xs-12\"><h1 class=\"text-xs-center\">Your Settings</h1> <form><fieldset><fieldset class=\"form-group\"><input type=\"text\" placeholder=\"URL of profile picture\"" + _vm._ssrAttr("value", _vm.user.image) + " class=\"form-control\"></fieldset> <fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Your Name\"" + _vm._ssrAttr("value", _vm.user.username) + " class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><textarea rows=\"8\" placeholder=\"Short bio about you\" class=\"form-control form-control-lg\">" + _vm._ssrEscape(_vm._s(_vm.user.bio)) + "</textarea></fieldset> <fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Email\"" + _vm._ssrAttr("value", _vm.user.email) + " class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><input type=\"password\" placeholder=\"Password\"" + _vm._ssrAttr("value", _vm.user.password) + " class=\"form-control form-control-lg\"></fieldset> <button class=\"btn btn-lg btn-primary pull-xs-right\">\n                Update Settings\n              </button></fieldset></form> <hr> <button class=\"btn btn-outline-danger\">\n            Or click here to logout.\n          </button></div></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/settings/index.vue?vue&type=template&id=a4cc282e&

// EXTERNAL MODULE: ./api/user.js
var api_user = __webpack_require__(30);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/settings/index.vue?vue&type=script&lang=js&


// 仅在客户端加载 js-cookie 包
const Cookie = __webpack_require__(27);
/* harmony default export */ var settingsvue_type_script_lang_js_ = ({
  middleware: "authenticated",
  data() {
    return {
      user: {
        username: "",
        email: "",
        image: "",
        bio: "",
        password: ""
      }
    };
  },
  created() {
    this.gtCurrentUser();
  },
  methods: {
    ...Object(external_vuex_["mapMutations"])(["setUser"]),
    async gtCurrentUser() {
      let {
        user
      } = await Object(api_user["b" /* getCurrentUser */])(this.$axios);
      this.user = user;
    },
    async onsubmit() {
      try {
        const {
          user
        } = await Object(api_user["g" /* updateCurrentUser */])(this.$axios, {
          user: this.user
        });
        this.setUser(user);
        this.$router.push("/profile/" + user.username);
      } catch (error) {
        console.dir(error);
      }
    },
    logout() {
      this.setUser(null);
      Cookie.remove("user");
      this.$router.push("/");
    }
  }
});
// CONCATENATED MODULE: ./pages/settings/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_settingsvue_type_script_lang_js_ = (settingsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/settings/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_settingsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "1d984e8a"
  
)

/* harmony default export */ var settings = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=6.js.map