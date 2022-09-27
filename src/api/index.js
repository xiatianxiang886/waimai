import request from "./request";
export const reqPosition = (geohash) => request({
    url: '/position',
    method: 'get',
    params: {
        geohash
    }
})
export const reqFoodCategoryList = () => request({
    url: '/index_category',
    method: 'get'
})
export const reqShopList = ({ latitude, longitude }) => request({
    method: 'get',
    url: `/shops`,
    query: {
        latitude,
        longitude
    }
})
export const reqSearchShopList = ({ geohash, keyword }) => request({
    url: '/search_shops',
    method: 'get',
    query: {
        geohash,
        keyword
    }
})
export const reqGetCaptcha = () => request({
    url: '/captcha',
    method: 'get'
})
export const reqLogin = ({ name, pwd, captcha }) => request({
    method: 'post',
    url: '/login_pwd',
    data: {
        name,
        pwd,
        captcha
    }
})
export const reqCaptchaCode = (phone) => request({
    url: '/sendcode',
    method: 'get',
    query: {
        phone
    }
})
export const reqLoginByca = (phone, code) => request({
    url: '/login_sms',
    method: 'post',
    data: {
        phone,
        code
    }
})
export const reqUserInfo = () => request({
    url: '/userinfo',
    method: 'get'
})
export const reqLoginOut = () => request({
    url: '/logout',
    method: 'get'
})