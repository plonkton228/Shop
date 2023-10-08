import axios from 'axios'
import { USER_LOCALSTORAGE_KEY } from 'share/const/localstorage'

const BaseURL = __API__ || 'http://localhost:8000/'
export const api = axios.create({
    baseURL: BaseURL,
    headers: {
        authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY)
    }

})
