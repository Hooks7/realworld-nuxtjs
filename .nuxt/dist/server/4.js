exports.ids = [4];
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

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/editArticle/index.vue?vue&type=template&id=fd22cbfa&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "editor-page"
  }, [_vm._ssrNode("<div class=\"container page\"><div class=\"row\"><div class=\"col-md-10 offset-md-1 col-xs-12\"><form><fieldset><fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Article Title\"" + _vm._ssrAttr("value", _vm.article.title) + " class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><input type=\"text\" placeholder=\"What's this article about?\"" + _vm._ssrAttr("value", _vm.article.description) + " class=\"form-control\"></fieldset> <fieldset class=\"form-group\"><textarea rows=\"8\" placeholder=\"Write your article (in markdown)\" class=\"form-control\">" + _vm._ssrEscape(_vm._s(_vm.article.body)) + "</textarea></fieldset> <fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Enter tags\"" + _vm._ssrAttr("value", _vm.tag) + " class=\"form-control\"> <div class=\"tag-list\">" + _vm._ssrList(_vm.article.tagList, function (item, i) {
    return "<span class=\"tag-default tag-pill ng-binding ng-scope\"><i class=\"ion-close-round\"></i>" + _vm._ssrEscape("\n                  " + _vm._s(item)) + "</span>";
  }) + "</div></fieldset> <button class=\"btn btn-lg pull-xs-right btn-primary\">\n              Publish Article\n            </button></fieldset></form></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/editArticle/index.vue?vue&type=template&id=fd22cbfa&

// EXTERNAL MODULE: ./api/articles.js
var articles = __webpack_require__(29);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/editArticle/index.vue?vue&type=script&lang=js&

/* harmony default export */ var editArticlevue_type_script_lang_js_ = ({
  data() {
    return {
      article: {
        title: "",
        description: "",
        body: "",
        tagList: []
      },
      tag: ""
    };
  },
  mounted() {
    this.$route.params.slug && this.gtArticle();
  },
  methods: {
    async gtArticle() {
      let {
        article
      } = await Object(articles["d" /* getArticle */])(this.$axios, this.$route.params.slug);
      this.article = article;
    },
    async onsubmit() {
      let res;
      if (!this.$route.params.slug) {
        res = await Object(articles["a" /* createArticle */])(this.$axios, {
          article: this.article
        });
      } else {
        res = await Object(articles["h" /* updateArticle */])(this.$axios, this.$route.params.slug, {
          article: this.article
        });
      }
      this.$router.push({
        name: "article",
        params: {
          slug: res.article.slug
        }
      });
    },
    addTag() {
      if (this.article.tagList.includes(this.tag)) return;
      this.article.tagList.push(this.tag);
      this.tag = "";
    },
    removeTag(index) {
      this.article.tagList.splice(index, 1);
    }
  }
});
// CONCATENATED MODULE: ./pages/editArticle/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_editArticlevue_type_script_lang_js_ = (editArticlevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/editArticle/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_editArticlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "425c391b"
  
)

/* harmony default export */ var editArticle = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=4.js.map