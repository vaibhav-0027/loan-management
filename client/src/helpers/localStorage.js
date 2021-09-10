export const setUserInfo = (info) => {
    localStorage.setItem("userInfo", info);
}

export const getUserInfo = () => {
    if(localStorage.getItem("userInfo")) {
        return JSON.parse(localStorage.getItem("userInfo"))
    }

    return null
}

export const setUserAccessToken = (token) => {
    localStorage.setItem("userAccessToken", token)
}

export const getUserAccessToken = () => {
    if(localStorage.getItem("userAccessToken")) {
        return localStorage.getItem("userAccessToken")
    }
}