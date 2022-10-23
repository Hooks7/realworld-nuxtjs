
// 登录
export const login = ($axios,data) => {
    return $axios({
        url: '/api/users/login',
        method: 'POST',
        data
    })
}

// 注册
export const registration = ($axios,data) => {
    return $axios({
        url: '/api/users',
        method: 'POST',
        data
    })
}


// 获取用户信息
export const getProfile = ($axios,username) => {
    return $axios({
        url: `/api/profiles/${username}`,
        method: 'GET',
    })
}

//订阅用户
export const followUser = ($axios,username) => {
    return $axios({
        url: `/api/profiles/${username}/follow`,
        method: 'POST',
    })
}

//取消订阅用户
export const unFollowUser = ($axios,username) => {
    return $axios({
        url: `/api/profiles/${username}/follow`,
        method: 'DELETE',
    })
}

// 获取登录用户信息
export const getCurrentUser = ($axios) => {
    return $axios({
        url: `/api/user`,
        method: 'GET',
    })
}

// 更新登录用户信息
export const updateCurrentUser = ($axios,data) => {
    return $axios({
        url: `/api/user`,
        method: 'PUT',
        data
    })
}

