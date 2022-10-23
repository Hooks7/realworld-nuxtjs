(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{195:function(e,t,r){"use strict";r.d(t,"d",(function(){return n})),r.d(t,"e",(function(){return o})),r.d(t,"c",(function(){return c})),r.d(t,"a",(function(){return l})),r.d(t,"f",(function(){return f})),r.d(t,"b",(function(){return d})),r.d(t,"g",(function(){return m}));var n=function(e,data){return e({url:"/api/users/login",method:"POST",data:data})},o=function(e,data){return e({url:"/api/users",method:"POST",data:data})},c=function(e,t){return e({url:"/api/profiles/".concat(t),method:"GET"})},l=function(e,t){return e({url:"/api/profiles/".concat(t,"/follow"),method:"POST"})},f=function(e,t){return e({url:"/api/profiles/".concat(t,"/follow"),method:"DELETE"})},d=function(e){return e({url:"/api/user",method:"GET"})},m=function(e,data){return e({url:"/api/user",method:"PUT",data:data})}},196:function(e,t,r){e.exports=function(){"use strict";function e(e){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var t in source)e[t]=source[t]}return e}function t(r,n){function o(t,o,c){if("undefined"!=typeof document){"number"==typeof(c=e({},n,c)).expires&&(c.expires=new Date(Date.now()+864e5*c.expires)),c.expires&&(c.expires=c.expires.toUTCString()),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var l="";for(var f in c)c[f]&&(l+="; "+f,!0!==c[f]&&(l+="="+c[f].split(";")[0]));return document.cookie=t+"="+r.write(o,t)+l}}function c(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var t=document.cookie?document.cookie.split("; "):[],n={},i=0;i<t.length;i++){var o=t[i].split("="),c=o.slice(1).join("=");try{var l=decodeURIComponent(o[0]);if(n[l]=r.read(c,l),e===l)break}catch(e){}}return e?n[e]:n}}return Object.create({set:o,get:c,remove:function(t,r){o(t,"",e({},r,{expires:-1}))},withAttributes:function(r){return t(this.converter,e({},this.attributes,r))},withConverter:function(r){return t(e({},this.converter,r),this.attributes)}},{attributes:{value:Object.freeze(n)},converter:{value:Object.freeze(r)}})}return t({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}()},203:function(e,t,r){"use strict";r.r(t);r(33),r(21),r(22),r(43),r(44);var n=r(4),o=r(14),c=(r(42),r(195)),l=r(34);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m=r(196),v={middleware:"authenticated",data:function(){return{user:{username:"",email:"",image:"",bio:"",password:""}}},created:function(){this.gtCurrentUser()},methods:d(d({},Object(l.b)(["setUser"])),{},{gtCurrentUser:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(c.b)(e.$axios);case 2:r=t.sent,n=r.user,e.user=n;case 5:case"end":return t.stop()}}),t)})))()},onsubmit:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(c.g)(e.$axios,{user:e.user});case 3:r=t.sent,n=r.user,e.setUser(n),e.$router.push("/profile/"+n.username),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.dir(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()},logout:function(){this.setUser(null),m.remove("user"),this.$router.push("/")}})},h=r(32),component=Object(h.a)(v,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"settings-page"},[t("div",{staticClass:"container page"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-6 offset-md-3 col-xs-12"},[t("h1",{staticClass:"text-xs-center"},[e._v("Your Settings")]),e._v(" "),t("form",{on:{submit:function(t){return t.preventDefault(),e.onsubmit.apply(null,arguments)}}},[t("fieldset",[t("fieldset",{staticClass:"form-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.image,expression:"user.image"}],staticClass:"form-control",attrs:{type:"text",placeholder:"URL of profile picture"},domProps:{value:e.user.image},on:{input:function(t){t.target.composing||e.$set(e.user,"image",t.target.value)}}})]),e._v(" "),t("fieldset",{staticClass:"form-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.username,expression:"user.username"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Your Name"},domProps:{value:e.user.username},on:{input:function(t){t.target.composing||e.$set(e.user,"username",t.target.value)}}})]),e._v(" "),t("fieldset",{staticClass:"form-group"},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.user.bio,expression:"user.bio"}],staticClass:"form-control form-control-lg",attrs:{rows:"8",placeholder:"Short bio about you"},domProps:{value:e.user.bio},on:{input:function(t){t.target.composing||e.$set(e.user,"bio",t.target.value)}}})]),e._v(" "),t("fieldset",{staticClass:"form-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Email"},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}})]),e._v(" "),t("fieldset",{staticClass:"form-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",placeholder:"Password"},domProps:{value:e.user.password},on:{input:function(t){t.target.composing||e.$set(e.user,"password",t.target.value)}}})]),e._v(" "),t("button",{staticClass:"btn btn-lg btn-primary pull-xs-right"},[e._v("\n                Update Settings\n              ")])])]),e._v(" "),t("hr"),e._v(" "),t("button",{staticClass:"btn btn-outline-danger",on:{click:function(t){return e.logout()}}},[e._v("\n            Or click here to logout.\n          ")])])])])])])}),[],!1,null,null,null);t.default=component.exports}}]);