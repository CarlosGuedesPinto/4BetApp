import axios from 'axios'

const mainInstance = axios.create({
    baseURL: process.env.VUE_APP_API_URL
})

mainInstance.interceptors.request.use((config) => {
    config.headers['apiKey'] = process.env.VUE_APP_API_KEY
    return config
}, (error) => Promise.reject(error))

export default { mainInstance }
