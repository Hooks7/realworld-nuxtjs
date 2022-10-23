
// 获取文章标签
export const getTags = ($axios, params) => {
    return $axios({
        url: "/api/tags",
        method: 'GET',
        params
    })
}

// 获取文章列表
export const getArticles = ($axios, params, type) => {
    return $axios({
        url: type !== 'feed' ? "/api/articles" : '/api/articles/feed',
        method: 'GET',
        params
    })
}

// 点赞
export const favoriteArticle = ($axios, slug) => {
    return $axios({
        url: `/api/articles/${slug}/favorite`,
        method: 'POST',
    })
}

// 取消点赞
export const unfavoriteFavorite = ($axios, slug) => {
    return $axios({
        url: `/api/articles/${slug}/favorite`,
        method: 'DELETE',
    })
}

// 文章详情
export const getArticle = ($axios, slug) => {
    return $axios({
        url: `/api/articles/${slug}`,
        method: 'GET',
    })
}

//新增文章
export const createArticle = ($axios, data) => {
    return $axios({
        url: `/api/articles`,
        method: 'POST',
        data
    })
}

//修改文章
export const updateArticle = ($axios, slug, data) => {
    return $axios({
        url: `/api/articles/${slug}`,
        method: 'PUT',
        data
    })
}

//删除文章
export const deleteArticle = ($axios, slug) => {
    return $axios({
        url: `/api/articles/${slug}`,
        method: 'DELETE',
    })
}