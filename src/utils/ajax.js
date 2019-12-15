import axios from 'axios'

const _instance = axios.create({
    // withCredentials: true
})

_instance.interceptors.request.use(config => {
    return config
}, error => {
    return Promise.reject(error)
})

_instance.interceptors.response.use(({ data }) => {
    return data
}, error => {
    return Promise.reject(error)
})

export default _instance
