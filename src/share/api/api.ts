import axios, { type AxiosInstance } from 'axios'
import { USER_LOCALSTORAGE_KEY } from 'share/const/localstorage'

const BaseURL = __API__ || 'https://jsonserver-bh4f.onrender.com/'
console.log(localStorage.getItem(USER_LOCALSTORAGE_KEY))
// export const api = axios.create({
//     baseURL: BaseURL,
//     headers: {
//         authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY)
//     }
//
// })

export class API {
    constructor () {
        this.apiInstance = axios.create(({
            baseURL: BaseURL,
            headers: {
                authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY)
            }
        }))
    }

    apiInstance: AxiosInstance
}
