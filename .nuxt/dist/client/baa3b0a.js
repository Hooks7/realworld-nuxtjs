(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{195:function(e,t,r){"use strict";r.d(t,"d",(function(){return n})),r.d(t,"e",(function(){return o})),r.d(t,"c",(function(){return c})),r.d(t,"a",(function(){return l})),r.d(t,"f",(function(){return f})),r.d(t,"b",(function(){return d})),r.d(t,"g",(function(){return m}));var n=function(e,data){return e({url:"/api/users/login",method:"POST",data:data})},o=function(e,data){return e({url:"/api/users",method:"POST",data:data})},c=function(e,t){return e({url:"/api/profiles/".concat(t),method:"GET"})},l=function(e,t){return e({url:"/api/profiles/".concat(t,"/follow"),method:"POST"})},f=function(e,t){return e({url:"/api/profiles/".concat(t,"/follow"),method:"DELETE"})},d=function(e){return e({url:"/api/user",method:"GET"})},m=function(e,data){return e({url:"/api/user",method:"PUT",data:data})}},196:function(e,t,r){e.exports=function(){"use strict";function e(e){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var t in source)e[t]=source[t]}return e}function t(r,n){function o(t,o,c){if("undefined"!=typeof document){"number"==typeof(c=e({},n,c)).expires&&(c.expires=new Date(Date.now()+864e5*c.expires)),c.expires&&(c.expires=c.expires.toUTCString()),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var l="";for(var f in c)c[f]&&(l+="; "+f,!0!==c[f]&&(l+="="+c[f].split(";")[0]));return document.cookie=t+"="+r.write(o,t)+l}}function c(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var t=document.cookie?document.cookie.split("; "):[],n={},i=0;i<t.length;i++){var o=t[i].split("="),c=o.slice(1).join("=");try{var l=decodeURIComponent(o[0]);if(n[l]=r.read(c,l),e===l)break}catch(e){}}return e?n[e]:n}}return Object.create({set:o,get:c,remove:function(t,r){o(t,"",e({},r,{expires:-1}))},withAttributes:function(r){return t(this.converter,e({},this.attributes,r))},withConverter:function(r){return t(e({},this.converter,r),this.attributes)}},{attributes:{value:Object.freeze(n)},converter:{value:Object.freeze(r)}})}return t({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}()},205:function(e,t,r){"use strict";r.r(t);r(33),r(21),r(22),r(43),r(44);var n=r(4),o=r(14),c=(r(42),r(25),r(195)),l=r(34);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m=r(196),v={data:function(){return{user:{username:"",email:"hooks7@163.com",password:"961001"},errors:""}},computed:{isLogin:function(){return"login"===this.$route.name}},methods:d(d({},Object(l.b)(["setUser"])),{},{onsubmit:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!e.isLogin){t.next=10;break}return t.next=4,Object(c.d)(e.$axios,{user:e.user});case 4:r=t.sent,n=r.user,e.setUser(n),m.set("user",JSON.stringify(n)),t.next=12;break;case 10:return t.next=12,Object(c.e)(e.$axios,{user:e.user});case 12:e.$router.push("/"),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(0),e.errors=t.t0.response.data.errors;case 18:case"end":return t.stop()}}),t,null,[[0,15]])})))()}})},h=r(32),component=Object(h.a)(v,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"auth-page"},[t("div",{staticClass:"container page"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-6 offset-md-3 col-xs-12"},[t("h1",{staticClass:"text-xs-center"},[e._v("Sign "+e._s(e.isLogin?"in":"up"))]),e._v(" "),e._m(0),e._v(" "),t("ul",{staticClass:"error-messages"},e._l(e.errors,(function(r,n){return t("li",{key:r},[e._v(e._s(n)+"  "+e._s(r))])})),0),e._v(" "),t("form",{on:{submit:function(t){return t.preventDefault(),e.onsubmit.apply(null,arguments)}}},[e.isLogin?e._e():t("fieldset",{staticClass:"form-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Your Name"},domProps:{value:e.user.username},on:{input:function(t){t.target.composing||e.$set(e.user,"username",t.target.value)}}})]),e._v(" "),t("fieldset",{staticClass:"form-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Email"},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}})]),e._v(" "),t("fieldset",{staticClass:"form-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",placeholder:"Password"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}})]),e._v(" "),t("button",{staticClass:"btn btn-lg btn-primary pull-xs-right"},[e._v("\n            Sign "+e._s(e.isLogin?"in":"up")+"\n          ")])])])])])])}),[function(){var e=this._self._c;return e("p",{staticClass:"text-xs-center"},[e("a",{attrs:{href:""}},[this._v("Have an account?")])])}],!1,null,null,null);t.default=component.exports}}]);