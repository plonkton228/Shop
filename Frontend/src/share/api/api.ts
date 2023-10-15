import axios, { type AxiosInstance } from 'axios'
import { USER_LOCALSTORAGE_KEY } from 'share/const/localstorage'

const BaseURL = __API__ || 'http://62.233.46.97:8000'

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
