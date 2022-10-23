exports.ids = [1];
exports.modules = {

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getArticles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return favoriteArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return unfavoriteFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return updateArticle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deleteArticle; });
// 获取文章标签
const getTags = ($axios, params) => {
  return $axios({
    url: "/api/tags",
    method: 'GET',
    params
  });
};

// 获取文章列表
const getArticles = ($axios, params, type) => {
  return $axios({
    url: type !== 'feed' ? "/api/articles" : '/api/articles/feed',
    method: 'GET',
    params
  });
};

// 点赞
const favoriteArticle = ($axios, slug) => {
  return $axios({
    url: `/api/articles/${slug}/favorite`,
    method: 'POST'
  });
};

// 取消点赞
const unfavoriteFavorite = ($axios, slug) => {
  return $axios({
    url: `/api/articles/${slug}/favorite`,
    method: 'DELETE'
  });
};

// 文章详情
const getArticle = ($axios, slug) => {
  return $axios({
    url: `/api/articles/${slug}`,
    method: 'GET'
  });
};

//新增文章
const createArticle = ($axios, data) => {
  return $axios({
    url: `/api/articles`,
    method: 'POST',
    data
  });
};

//修改文章
const updateArticle = ($axios, slug, data) => {
  return $axios({
    url: `/api/articles/${slug}`,
    method: 'PUT',
    data
  });
};

//删除文章
const deleteArticle = ($axios, slug) => {
  return $axios({
    url: `/api/articles/${slug}`,
    method: 'DELETE'
  });
};

/***/ }),

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

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./component/ArticleCard.vue?vue&type=template&id=0fc1e092&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "article-preview"
  }, [_vm._ssrNode("<div class=\"article-meta\">", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": '/profile/' + _vm.article.author.username
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.article.author.image
    }
  })]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"info\">", "</div>", [_c('nuxt-link', {
    staticClass: "author",
    attrs: {
      "to": '/profile/' + _vm.article.author.username
    }
  }, [_vm._v(_vm._s(_vm.article.author.username))]), _vm._ssrNode(" <span class=\"date\">" + _vm._ssrEscape(_vm._s(_vm.article.createdAt)) + "</span>")], 2), _vm._ssrNode(" <button" + _vm._ssrAttr("disabled", _vm.article.favoriteDisabled) + _vm._ssrClass("btn btn-outline-primary btn-sm pull-xs-right", {
    active: _vm.article.favorited
  }) + "><i class=\"ion-heart\"></i>" + _vm._ssrEscape(" " + _vm._s(_vm.article.favoritesCount) + "\n    ") + "</button>")], 2), _vm._ssrNode(" "), _c('nuxt-link', {
    staticClass: "preview-link",
    attrs: {
      "to": {
        name: 'article',
        params: {
          slug: _vm.article.slug
        }
      }
    }
  }, [_c('h1', [_vm._v(_vm._s(_vm.article.title))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.article.description))]), _vm._v(" "), _c('span', [_vm._v("Read more...")])]), _vm._ssrNode(" <ul class=\"tag-list\">" + _vm._ssrList(_vm.article.tagList, function (v) {
    return "<li class=\"tag-default tag-pill tag-outline\">" + _vm._ssrEscape("\n      " + _vm._s(v) + "\n    ") + "</li>";
  }) + "</ul>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./component/ArticleCard.vue?vue&type=template&id=0fc1e092&

// EXTERNAL MODULE: ./api/articles.js
var articles = __webpack_require__(29);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./component/ArticleCard.vue?vue&type=script&lang=js&

/* harmony default export */ var ArticleCardvue_type_script_lang_js_ = ({
  props: ["item"],
  data() {
    return {
      article: {}
    };
  },
  created() {
    this.article = this.$_.cloneDeep(this.item);
  },
  methods: {
    // 点赞/取消点赞
    async setFavorite({
      favorited,
      slug
    }) {
      this.$set(this.article, "favoriteDisabled", true);
      let {
        article
      } = !favorited ? await Object(articles["c" /* favoriteArticle */])(this.$axios, slug) : await Object(articles["g" /* unfavoriteFavorite */])(this.$axios, slug);
      this.article = article;
    }
  }
});
// CONCATENATED MODULE: ./component/ArticleCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var component_ArticleCardvue_type_script_lang_js_ = (ArticleCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./component/ArticleCard.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  component_ArticleCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "6a97466a"
  
)

/* harmony default export */ var ArticleCard = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=template&id=70596172&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "profile-page"
  }, [_vm._ssrNode("<div class=\"user-info\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-xs-12 col-md-10 offset-md-1\">", "</div>", [_vm._ssrNode("<img" + _vm._ssrAttr("src", _vm.profile.image) + " class=\"user-img\"> <h4>" + _vm._ssrEscape(_vm._s(_vm.profile.username)) + "</h4> <p class=\"ng-binding\">" + _vm._ssrEscape(_vm._s(_vm.profile.bio)) + "</p> "), _vm.user.username !== _vm.profile.username ? _vm._ssrNode("<button" + _vm._ssrAttr("disabled", _vm.profile.followDisabled) + _vm._ssrClass("btn btn-sm btn-outline-secondary action-btn", {
    active: _vm.profile.following
  }) + ">", "</button>", [_vm._ssrNode("<i class=\"ion-plus-round\"></i>" + _vm._ssrEscape("\n              " + _vm._s(_vm.profile.following ? "Unfollow" : "Follow") + "\n            " + _vm._s(_vm.profile.username) + "\n          "))], 2) : _c('nuxt-link', {
    attrs: {
      "to": "/settings"
    }
  }, [_c('button', {
    staticClass: "btn btn-sm btn-outline-secondary action-btn"
  }, [_c('i', {
    staticClass: "ion-gear-a"
  }), _vm._v("\n                Edit Profile Settings\n            ")])])], 2)])])]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-xs-12 col-md-10 offset-md-1\">", "</div>", [_vm._ssrNode("<div class=\"articles-toggle\">", "</div>", [_vm._ssrNode("<ul class=\"nav nav-pills outline-active\">", "</ul>", [_vm._ssrNode("<li class=\"nav-item\">", "</li>", [_c('nuxt-link', {
    staticClass: "nav-link",
    class: {
      active: _vm.$route.query.type !== 'favorite'
    },
    attrs: {
      "exact": "",
      "to": {
        name: 'profile',
        query: {
          type: 'author'
        }
      }
    }
  }, [_vm._v("My Articles")])], 1), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"nav-item\">", "</li>", [_c('nuxt-link', {
    staticClass: "nav-link",
    class: {
      active: _vm.$route.query.type === 'favorite'
    },
    attrs: {
      "exact": "",
      "to": {
        name: 'profile',
        query: {
          type: 'favorite'
        }
      }
    }
  }, [_vm._v("Favorited Articles")])], 1)], 2)]), _vm._ssrNode(" "), _vm._l(_vm.articles, function (item) {
    return _c('ArticleCard', {
      key: item.slug,
      attrs: {
        "item": item
      }
    });
  })], 2)])])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=template&id=70596172&

// EXTERNAL MODULE: ./api/user.js
var user = __webpack_require__(30);

// EXTERNAL MODULE: ./api/articles.js
var api_articles = __webpack_require__(29);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// EXTERNAL MODULE: ./component/ArticleCard.vue + 4 modules
var ArticleCard = __webpack_require__(31);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile/index.vue?vue&type=script&lang=js&




/* harmony default export */ var profilevue_type_script_lang_js_ = ({
  name: "profile",
  watchQuery: ["username", "type"],
  components: {
    ArticleCard: ArticleCard["a" /* default */]
  },
  async asyncData({
    route,
    $axios
  }) {
    let {
      username
    } = route.params;
    let {
      type
    } = route.query;

    // 用户信息
    const {
      profile
    } = await Object(user["c" /* getProfile */])($axios, username);
    // 用户发布的文章/用户点赞的文章
    const {
      articles
    } = await Object(api_articles["e" /* getArticles */])($axios, {
      limit: 5,
      offset: 0,
      author: type !== "favorite" ? username : "",
      favorited: type === "favorite" ? username : ""
    });
    return {
      profile,
      articles
    };
  },
  computed: {
    ...Object(external_vuex_["mapState"])(["user"])
  },
  methods: {
    // 订阅/取消订阅
    async setFollow({
      following,
      username
    }) {
      this.$set(this.profile, "followDisabled", true);
      let {
        profile
      } = !following ? await Object(user["a" /* followUser */])(this.$axios, username) : await Object(user["f" /* unFollowUser */])(this.$axios, username);
      this.profile = profile;
    }
  }
});
// CONCATENATED MODULE: ./pages/profile/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_profilevue_type_script_lang_js_ = (profilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/profile/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_profilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "159d64f8"
  
)

/* harmony default export */ var pages_profile = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=1.js.map