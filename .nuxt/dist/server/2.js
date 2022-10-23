exports.ids = [2];
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

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=template&id=695f83a5&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "article-page"
  }, [_vm._ssrNode("<div class=\"banner\">", "</div>", [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<h1>" + _vm._ssrEscape(_vm._s(_vm.article.title)) + "</h1> "), _c('UserHead', {
    attrs: {
      "article": _vm.article
    }
  })], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"container page\">", "</div>", [_vm._ssrNode("<div class=\"row article-content\"><div class=\"col-md-12\"><div>" + _vm._s(_vm.article.body) + "</div></div></div> <hr> "), _vm._ssrNode("<div class=\"article-actions\">", "</div>", [_c('UserHead', {
    attrs: {
      "article": _vm.article
    }
  })], 1), _vm._ssrNode(" <div class=\"row\"><div class=\"col-xs-12 col-md-8 offset-md-2\"><form class=\"card comment-form\"><div class=\"card-block\"><textarea placeholder=\"Write a comment...\" rows=\"3\" class=\"form-control\"></textarea></div> <div class=\"card-footer\"><img src=\"http://i.imgur.com/Qr71crq.jpg\" class=\"comment-author-img\"> <button class=\"btn btn-sm btn-primary\">Post Comment</button></div></form> <div class=\"card\"><div class=\"card-block\"><p class=\"card-text\">\n              With supporting text below as a natural lead-in to additional\n              content.\n            </p></div> <div class=\"card-footer\"><a href class=\"comment-author\"><img src=\"http://i.imgur.com/Qr71crq.jpg\" class=\"comment-author-img\"></a>\n             \n            <a href class=\"comment-author\">Jacob Schmidt</a> <span class=\"date-posted\">Dec 29th</span></div></div> <div class=\"card\"><div class=\"card-block\"><p class=\"card-text\">\n              With supporting text below as a natural lead-in to additional\n              content.\n            </p></div> <div class=\"card-footer\"><a href class=\"comment-author\"><img src=\"http://i.imgur.com/Qr71crq.jpg\" class=\"comment-author-img\"></a>\n             \n            <a href class=\"comment-author\">Jacob Schmidt</a> <span class=\"date-posted\">Dec 29th</span> <span class=\"mod-options\"><i class=\"ion-edit\"></i> <i class=\"ion-trash-a\"></i></span></div></div></div></div>")], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=template&id=695f83a5&

// EXTERNAL MODULE: ./api/articles.js
var articles = __webpack_require__(29);

// EXTERNAL MODULE: external "marked"
var external_marked_ = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/UserHead.vue?vue&type=template&id=744e6535&
var UserHeadvue_type_template_id_744e6535_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "article-meta"
  }, [_c('nuxt-link', {
    attrs: {
      "to": {
        name: 'profile',
        params: {
          username: _vm.articleInfo.author.username
        }
      }
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.articleInfo.author.image
    }
  })]), _vm._ssrNode(" <div class=\"info\"><a href class=\"author\">" + _vm._ssrEscape(_vm._s(_vm.articleInfo.author.username)) + "</a> <span class=\"date\">" + _vm._ssrEscape(_vm._s(_vm._f("date")(_vm.articleInfo.createdAt, "MMM DD,YYYY"))) + "</span></div> "), _vm.articleInfo.author.username === _vm.user.username ? [_c('nuxt-link', {
    attrs: {
      "to": '/editArticle/' + _vm.articleInfo.slug
    }
  }, [_c('button', {
    staticClass: "btn btn-sm btn-outline-secondary"
  }, [_c('i', {
    staticClass: "ion-edit"
  }), _vm._v("\n          Edit Article\n      ")])]), _vm._ssrNode("\n      \n    <button class=\"btn btn-sm btn-outline-danger\"><i class=\"ion-trash-a\"></i>\n        Delete Article\n    </button>")] : _vm._ssrNode("<button" + _vm._ssrAttr("disabled", _vm.articleInfo.author.followDisabled) + _vm._ssrClass("btn btn-sm btn-outline-secondary", {
    active: _vm.articleInfo.author.following
  }) + "><i class=\"ion-plus-round\"></i>" + _vm._ssrEscape("\n       \n      " + _vm._s(_vm.articleInfo.author.following ? "Unfollow" : "Follow") + "\n      " + _vm._s(_vm.articleInfo.author.username) + "\n    ") + "</button>\n      \n    <button" + _vm._ssrAttr("disabled", _vm.articleInfo.favoriteDisabled) + _vm._ssrClass("btn btn-sm btn-outline-primary", {
    active: _vm.articleInfo.favorited
  }) + "><i class=\"ion-heart\"></i>" + _vm._ssrEscape("\n        " + _vm._s(_vm.articleInfo.favorited ? "Unfavorite" : "Favorite") + " Post\n      ") + "<span class=\"counter\">" + _vm._ssrEscape("(" + _vm._s(_vm.articleInfo.favoritesCount) + ")") + "</span></button>")], 2);
};
var UserHeadvue_type_template_id_744e6535_staticRenderFns = [];

// CONCATENATED MODULE: ./pages/article/components/UserHead.vue?vue&type=template&id=744e6535&

// EXTERNAL MODULE: ./api/user.js
var user = __webpack_require__(30);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/UserHead.vue?vue&type=script&lang=js&



/* harmony default export */ var UserHeadvue_type_script_lang_js_ = ({
  props: ["article"],
  data() {
    return {
      articleInfo: {}
    };
  },
  computed: {
    ...Object(external_vuex_["mapState"])(["user"])
  },
  created() {
    this.articleInfo = this.$_.cloneDeep(this.article);
  },
  methods: {
    async deleteArticle(slug) {
      await Object(articles["b" /* deleteArticle */])(this.$axios, slug);
      this.$router.push("/");
    },
    // 点赞/取消点赞
    async setFavorite({
      favorited,
      slug
    }) {
      this.$set(this.articleInfo, "favoriteDisabled", true);
      let {
        article
      } = !favorited ? await Object(articles["c" /* favoriteArticle */])(this.$axios, slug) : await Object(articles["g" /* unfavoriteFavorite */])(this.$axios, slug);
      this.articleInfo = article;
    },
    // 订阅/取消订阅
    async setFollow({
      following,
      username
    }) {
      this.$set(this.articleInfo.author, "followDisabled", true);
      let {
        profile
      } = !following ? await Object(user["a" /* followUser */])(this.$axios, username) : await Object(user["f" /* unFollowUser */])(this.$axios, username);
      this.articleInfo.author = profile;
    }
  }
});
// CONCATENATED MODULE: ./pages/article/components/UserHead.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_UserHeadvue_type_script_lang_js_ = (UserHeadvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/article/components/UserHead.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_UserHeadvue_type_script_lang_js_,
  UserHeadvue_type_template_id_744e6535_render,
  UserHeadvue_type_template_id_744e6535_staticRenderFns,
  false,
  injectStyles,
  null,
  "004b3a37"
  
)

/* harmony default export */ var UserHead = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=script&lang=js&



/* harmony default export */ var articlevue_type_script_lang_js_ = ({
  components: {
    UserHead: UserHead
  },
  async asyncData({
    route,
    $axios
  }) {
    const {
      slug
    } = route.params;
    const {
      article
    } = await Object(articles["d" /* getArticle */])($axios, slug);
    article.body = external_marked_["marked"].parse(article.body);
    return {
      article
    };
  }
});
// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_articlevue_type_script_lang_js_ = (articlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/index.vue



function article_injectStyles (context) {
  
  
}

/* normalize component */

var article_component = Object(componentNormalizer["a" /* default */])(
  pages_articlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  article_injectStyles,
  null,
  "2b79ac05"
  
)

/* harmony default export */ var pages_article = __webpack_exports__["default"] = (article_component.exports);

/***/ })

};;
//# sourceMappingURL=2.js.map