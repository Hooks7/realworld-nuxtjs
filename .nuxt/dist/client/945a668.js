(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{201:function(t,n,e){"use strict";e.r(n);e(33),e(21),e(22),e(43),e(44);var r=e(14),c=e(34);function l(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,e)}return n}var o={name:"layout",computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(n){Object(r.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}({},Object(c.c)(["user"]))},v=o,_=e(32),component=Object(_.a)(v,(function(){var t=this,n=t._self._c;return n("div",[n("nav",{staticClass:"navbar navbar-light"},[n("div",{staticClass:"container"},[n("nuxt-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("conduit")]),t._v(" "),n("ul",{staticClass:"nav navbar-nav pull-xs-right"},[n("li",{staticClass:"nav-item"},[n("nuxt-link",{staticClass:"nav-link",attrs:{to:"/",exact:""}},[t._v("Home")])],1),t._v(" "),t.user?n("li",{staticClass:"nav-item"},[n("nuxt-link",{staticClass:"nav-link",attrs:{to:"/createArticle"}},[n("i",{staticClass:"ion-compose"}),t._v(" New Article\n          ")])],1):t._e(),t._v(" "),t.user?n("li",{staticClass:"nav-item"},[n("nuxt-link",{staticClass:"nav-link",attrs:{to:"/settings"}},[n("i",{staticClass:"ion-gear-a"}),t._v(" Settings\n          ")])],1):t._e(),t._v(" "),n("li",{staticClass:"nav-item"},[t.user?t._e():n("nuxt-link",{staticClass:"nav-link",attrs:{to:"/login"}},[t._v("Sign in")])],1),t._v(" "),n("li",{staticClass:"nav-item"},[t.user?t._e():n("nuxt-link",{staticClass:"nav-link",attrs:{to:"/register"}},[t._v("Sign up")])],1),t._v(" "),n("li",{staticClass:"nav-item"},[t.user?n("nuxt-link",{staticClass:"nav-link ng-binding",attrs:{to:{name:"profile",params:{username:t.user.username}}}},[n("img",{staticClass:"user-pic",attrs:{src:t.user.image}}),t._v("\n            "+t._s(t.user.username)+"\n          ")]):t._e()],1)])],1)]),t._v(" "),n("nuxt-child"),t._v(" "),n("footer",[n("div",{staticClass:"container"},[n("nuxt-link",{staticClass:"logo-font",attrs:{to:"/"}},[t._v("conduit")]),t._v(" "),t._m(0)],1)])],1)}),[function(){var t=this,n=t._self._c;return n("span",{staticClass:"attribution"},[t._v("\n        An interactive learning project from\n        "),n("a",{attrs:{href:"https://thinkster.io"}},[t._v("Thinkster")]),t._v(". Code & design\n        licensed under MIT.\n      ")])}],!1,null,null,null);n.default=component.exports}}]);