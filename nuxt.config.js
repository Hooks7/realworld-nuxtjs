module.exports = {
    router: {
        linkActiveClass: 'active',
        // 自定义路由规则
        extendRoutes(routes, resolve) {
            routes.splice(0)
            routes.push({
                path: '/',
                component: resolve(__dirname, 'pages/index.vue'),
                children: [{
                    name: 'home',
                    path: '',
                    component: resolve(__dirname, 'pages/home')
                },
                {
                    name: 'profile',
                    path: '/profile/:username',
                    component: resolve(__dirname, 'pages/profile')
                },
                {
                    name: 'settings',
                    path: '/settings',
                    component: resolve(__dirname, 'pages/settings')
                },
                {
                    name: 'createArticle',
                    path: '/createArticle',
                    component: resolve(__dirname, 'pages/editArticle')
                },
                {
                    name: 'editArticle',
                    path: '/editArticle/:slug',
                    component: resolve(__dirname, 'pages/editArticle')
                },
                {
                    name: 'article',
                    path: '/article/:slug',
                    component: resolve(__dirname, 'pages/article')
                }, {
                    name: 'login',
                    path: '/login',
                    component: resolve(__dirname, 'pages/login')
                },
                {
                    name: 'register',
                    path: '/register',
                    component: resolve(__dirname, 'pages/login')
                }
                ]
            })
        }
    },

    server: {
        port: 3000, // 服务端口号
        host: '0.0.0.0' // 配置让外网地址访问
    },
    modules: ['@nuxtjs/axios'],

    axios: {
        baseURL: 'http://realworld.api.fed.lagounews.com'
        , // Used as fallback if no runtime config is provided
    },


    plugins: [
        '~/plugins/request',
        '~/plugins/lodash',
        '~/plugins/day'
    ]

}