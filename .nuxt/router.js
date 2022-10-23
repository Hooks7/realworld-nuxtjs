import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _58be594e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "" */))
const _fcec010a = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _4668298d = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _17dd18bf = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _56150570 = () => interopDefault(import('../pages/editArticle' /* webpackChunkName: "" */))
const _2d326cda = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))
const _a0238f66 = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _58be594e,
    children: [{
      path: "",
      component: _fcec010a,
      name: "home"
    }, {
      path: "/profile/:username",
      component: _4668298d,
      name: "profile"
    }, {
      path: "/settings",
      component: _17dd18bf,
      name: "settings"
    }, {
      path: "/createArticle",
      component: _56150570,
      name: "createArticle"
    }, {
      path: "/editArticle/:slug",
      component: _56150570,
      name: "editArticle"
    }, {
      path: "/article/:slug",
      component: _2d326cda,
      name: "article"
    }, {
      path: "/login",
      component: _a0238f66,
      name: "login"
    }, {
      path: "/register",
      component: _a0238f66,
      name: "register"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
