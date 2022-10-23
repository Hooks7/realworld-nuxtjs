exports.ids = [3];
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

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=template&id=514195f2&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "home-page"
  }, [_vm._ssrNode("<div class=\"banner\"><div class=\"container\"><h1 class=\"logo-font\">conduit</h1> <p>A place to share your knowledge.</p></div></div> "), _vm._ssrNode("<div class=\"container page\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col-md-9\">", "</div>", [_vm._ssrNode("<div class=\"feed-toggle\">", "</div>", [_vm._ssrNode("<ul class=\"nav nav-pills outline-active\">", "</ul>", [_vm._ssrNode("<li class=\"nav-item\">", "</li>", [_vm.user ? _c('nuxt-link', {
    staticClass: "nav-link",
    class: {
      disabled: !_vm.user,
      active: _vm.type === 'feed'
    },
    attrs: {
      "to": {
        name: 'home',
        query: {
          type: 'feed'
        }
      },
      "exact": ""
    }
  }, [_vm._v("Your Feed")]) : _vm._e()], 1), _vm._ssrNode(" "), _vm._ssrNode("<li class=\"nav-item\">", "</li>", [_c('nuxt-link', {
    staticClass: "nav-link",
    class: {
      active: _vm.type === 'global'
    },
    attrs: {
      "to": {
        name: 'home',
        query: {
          type: 'global'
        }
      },
      "exact": ""
    }
  }, [_vm._v("Global Feed")])], 1), _vm._ssrNode(" "), _vm.tag ? _vm._ssrNode("<li class=\"nav-item\">", "</li>", [_c('nuxt-link', {
    staticClass: "nav-link active",
    attrs: {
      "to": {
        name: 'home',
        query: {
          type: 'global'
        }
      }
    }
  }, [_vm._v("#" + _vm._s(_vm.tag))])], 1) : _vm._e()], 2)]), _vm._ssrNode(" "), _vm._l(_vm.articles, function (item, index) {
    return _c('ArticleCard', {
      key: index,
      attrs: {
        "item": item
      }
    });
  }), _vm._ssrNode(" "), _vm._ssrNode("<nav>", "</nav>", [_vm._ssrNode("<ul class=\"pagination\">", "</ul>", _vm._l(_vm.pageCount, function (item) {
    return _vm._ssrNode("<li" + _vm._ssrClass("page-item ng-scope", {
      active: item == _vm.currentPage
    }) + ">", "</li>", [_c('nuxt-link', {
      staticClass: "page-link ng-binding",
      attrs: {
        "to": {
          name: 'home',
          query: {
            offset: item,
            type: _vm.type,
            tag: _vm.tag
          }
        },
        "href": ""
      }
    }, [_vm._v(_vm._s(item))])], 1);
  }), 0)])], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col-md-3\">", "</div>", [_vm._ssrNode("<div class=\"sidebar\">", "</div>", [_vm._ssrNode("<p>Popular Tags</p> "), _vm._ssrNode("<div class=\"tag-list\">", "</div>", _vm._l(_vm.tags, function (item) {
    return _c('nuxt-link', {
      key: item,
      staticClass: "tag-pill tag-default",
      attrs: {
        "to": {
          name: 'home',
          query: {
            tag: item
          }
        }
      }
    }, [_vm._v(_vm._s(item))]);
  }), 1)], 2)])], 2)])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=template&id=514195f2&

// EXTERNAL MODULE: external "number-precision"
var external_number_precision_ = __webpack_require__(26);
var external_number_precision_default = /*#__PURE__*/__webpack_require__.n(external_number_precision_);

// EXTERNAL MODULE: ./component/ArticleCard.vue + 4 modules
var ArticleCard = __webpack_require__(31);

// EXTERNAL MODULE: ./api/articles.js
var articles = __webpack_require__(29);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=script&lang=js&




/* harmony default export */ var homevue_type_script_lang_js_ = ({
  name: "home",
  // 监听query参数重新调用asyncData渲然
  watchQuery: ["offset", "tag", "type"],
  // scrollToTop 属性用于控制页面渲染前是否滚动至页面顶部
  scrollToTop: true,
  components: {
    ArticleCard: ArticleCard["a" /* default */]
  },
  // 初始化列表/tag数据
  async asyncData({
    route,
    store,
    $axios
  }) {
    const pageSize = 20;
    let {
      offset,
      tag,
      type
    } = route.query;
    offset = offset || 1;
    if (!tag && !type) {
      type = store.state.user ? "feed" : "global";
    }
    let res = await Promise.all([Object(articles["f" /* getTags */])($axios), Object(articles["e" /* getArticles */])($axios, {
      offset: offset - 1,
      limit: pageSize,
      tag
    }, type)]);
    return {
      tags: res[0].tags.slice(0, 100),
      articles: res[1].articles,
      articlesCount: res[1].articlesCount,
      pageCount: external_number_precision_default.a.round(external_number_precision_default.a.divide(res[1].articlesCount, pageSize), 0),
      currentPage: offset,
      type,
      tag
    };
  },
  computed: {
    ...Object(external_vuex_["mapState"])(["user"])
  }
});
// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_homevue_type_script_lang_js_ = (homevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/home/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_homevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "7d399b74"
  
)

/* harmony default export */ var home = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=3.js.map