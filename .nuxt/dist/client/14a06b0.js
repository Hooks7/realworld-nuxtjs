(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{194:function(t,e,r){"use strict";r.d(e,"f",(function(){return n})),r.d(e,"e",(function(){return c})),r.d(e,"c",(function(){return o})),r.d(e,"g",(function(){return l})),r.d(e,"d",(function(){return f})),r.d(e,"a",(function(){return v})),r.d(e,"h",(function(){return d})),r.d(e,"b",(function(){return m}));var n=function(t,e){return t({url:"/api/tags",method:"GET",params:e})},c=function(t,e,r){return t({url:"feed"!==r?"/api/articles":"/api/articles/feed",method:"GET",params:e})},o=function(t,e){return t({url:"/api/articles/".concat(e,"/favorite"),method:"POST"})},l=function(t,e){return t({url:"/api/articles/".concat(e,"/favorite"),method:"DELETE"})},f=function(t,e){return t({url:"/api/articles/".concat(e),method:"GET"})},v=function(t,data){return t({url:"/api/articles",method:"POST",data:data})},d=function(t,e,data){return t({url:"/api/articles/".concat(e),method:"PUT",data:data})},m=function(t,e){return t({url:"/api/articles/".concat(e),method:"DELETE"})}},197:function(t,e,r){"use strict";var n=r(4),c=(r(42),r(194)),o={props:["item"],data:function(){return{article:{}}},created:function(){this.article=this.$_.cloneDeep(this.item)},methods:{setFavorite:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o,l,article;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n=t.favorited,o=t.slug,e.$set(e.article,"favoriteDisabled",!0),n){r.next=8;break}return r.next=5,Object(c.c)(e.$axios,o);case 5:r.t0=r.sent,r.next=11;break;case 8:return r.next=10,Object(c.g)(e.$axios,o);case 10:r.t0=r.sent;case 11:l=r.t0,article=l.article,e.article=article;case 14:case"end":return r.stop()}}),r)})))()}}},l=r(32),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"article-preview"},[e("div",{staticClass:"article-meta"},[e("nuxt-link",{attrs:{to:"/profile/"+t.article.author.username}},[e("img",{attrs:{src:t.article.author.image}})]),t._v(" "),e("div",{staticClass:"info"},[e("nuxt-link",{staticClass:"author",attrs:{to:"/profile/"+t.article.author.username}},[t._v(t._s(t.article.author.username))]),t._v(" "),e("span",{staticClass:"date"},[t._v(t._s(t.article.createdAt))])],1),t._v(" "),e("button",{staticClass:"btn btn-outline-primary btn-sm pull-xs-right",class:{active:t.article.favorited},attrs:{disabled:t.article.favoriteDisabled},on:{click:function(e){return t.setFavorite(t.article)}}},[e("i",{staticClass:"ion-heart"}),t._v(" "+t._s(t.article.favoritesCount)+"\n    ")])],1),t._v(" "),e("nuxt-link",{staticClass:"preview-link",attrs:{to:{name:"article",params:{slug:t.article.slug}}}},[e("h1",[t._v(t._s(t.article.title))]),t._v(" "),e("p",[t._v(t._s(t.article.description))]),t._v(" "),e("span",[t._v("Read more...")])]),t._v(" "),e("ul",{staticClass:"tag-list"},t._l(t.article.tagList,(function(r){return e("li",{key:r,staticClass:"tag-default tag-pill tag-outline"},[t._v("\n      "+t._s(r)+"\n    ")])})),0)],1)}),[],!1,null,null,null);e.a=component.exports},200:function(t,e,r){"use strict";r.r(e);var n=r(14),c=r(4);r(42),r(36),r(9),r(37),r(35),r(33),r(21),r(22),r(43),r(44);function o(t,e){return void 0===e&&(e=15),+parseFloat(Number(t).toPrecision(e))}function l(t){var e=t.toString().split(/[eE]/),r=(e[0].split(".")[1]||"").length-+(e[1]||0);return r>0?r:0}function f(t){if(-1===t.toString().indexOf("e"))return Number(t.toString().replace(".",""));var e=l(t);return e>0?o(Number(t)*Math.pow(10,e)):Number(t)}function v(t){y&&(t>Number.MAX_SAFE_INTEGER||t<Number.MIN_SAFE_INTEGER)&&console.warn(t+" is beyond boundary when transfer to integer, the results may not be accurate")}function d(t){return function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];var n=e[0],c=e.slice(1);return c.reduce((function(e,r){return t(e,r)}),n)}}var m=d((function(t,e){var r=f(t),n=f(e),c=l(t)+l(e),o=r*n;return v(o),o/Math.pow(10,c)})),h=d((function(t,e){var r=Math.pow(10,Math.max(l(t),l(e)));return(m(t,r)+m(e,r))/r})),_=d((function(t,e){var r=Math.pow(10,Math.max(l(t),l(e)));return(m(t,r)-m(e,r))/r})),C=d((function(t,e){var r=f(t),n=f(e);return v(r),v(n),m(r/n,o(Math.pow(10,l(e)-l(t))))}));var y=!0;var O={strip:o,plus:h,minus:_,times:m,divide:C,round:function(t,e){var base=Math.pow(10,e),r=C(Math.round(Math.abs(m(t,base))),base);return t<0&&0!==r&&(r=m(r,-1)),r},digitLength:l,float2Fixed:f,enableBoundaryChecking:function(t){void 0===t&&(t=!0),y=t}},w=r(197),k=r(194),x=r(34);function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var E={name:"home",watchQuery:["offset","tag","type"],scrollToTop:!0,components:{ArticleCard:w.a},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,n,c,o,l,f,v,d,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.route,n=t.store,c=t.$axios,o=20,l=r.query,f=l.offset,v=l.tag,d=l.type,f=f||1,v||d||(d=n.state.user?"feed":"global"),e.next=7,Promise.all([Object(k.f)(c),Object(k.e)(c,{offset:f-1,limit:o,tag:v},d)]);case 7:return m=e.sent,e.abrupt("return",{tags:m[0].tags.slice(0,100),articles:m[1].articles,articlesCount:m[1].articlesCount,pageCount:O.round(O.divide(m[1].articlesCount,o),0),currentPage:f,type:d,tag:v});case 9:case"end":return e.stop()}}),e)})))()},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(x.c)(["user"]))},P=E,T=r(32),component=Object(T.a)(P,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"home-page"},[t._m(0),t._v(" "),e("div",{staticClass:"container page"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-9"},[e("div",{staticClass:"feed-toggle"},[e("ul",{staticClass:"nav nav-pills outline-active"},[e("li",{staticClass:"nav-item"},[t.user?e("nuxt-link",{staticClass:"nav-link",class:{disabled:!t.user,active:"feed"===t.type},attrs:{to:{name:"home",query:{type:"feed"}},exact:""}},[t._v("Your Feed")]):t._e()],1),t._v(" "),e("li",{staticClass:"nav-item"},[e("nuxt-link",{staticClass:"nav-link",class:{active:"global"===t.type},attrs:{to:{name:"home",query:{type:"global"}},exact:""}},[t._v("Global Feed")])],1),t._v(" "),t.tag?e("li",{staticClass:"nav-item"},[e("nuxt-link",{staticClass:"nav-link active",attrs:{to:{name:"home",query:{type:"global"}}}},[t._v("#"+t._s(t.tag))])],1):t._e()])]),t._v(" "),t._l(t.articles,(function(t,r){return e("ArticleCard",{key:r,attrs:{item:t}})})),t._v(" "),e("nav",[e("ul",{staticClass:"pagination"},t._l(t.pageCount,(function(r){return e("li",{key:r,staticClass:"page-item ng-scope",class:{active:r==t.currentPage}},[e("nuxt-link",{staticClass:"page-link ng-binding",attrs:{to:{name:"home",query:{offset:r,type:t.type,tag:t.tag}},href:""}},[t._v(t._s(r))])],1)})),0)])],2),t._v(" "),e("div",{staticClass:"col-md-3"},[e("div",{staticClass:"sidebar"},[e("p",[t._v("Popular Tags")]),t._v(" "),e("div",{staticClass:"tag-list"},t._l(t.tags,(function(r){return e("nuxt-link",{key:r,staticClass:"tag-pill tag-default",attrs:{to:{name:"home",query:{tag:r}}}},[t._v(t._s(r))])})),1)])])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"banner"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"logo-font"},[t._v("conduit")]),t._v(" "),e("p",[t._v("A place to share your knowledge.")])])])}],!1,null,null,null);e.default=component.exports}}]);