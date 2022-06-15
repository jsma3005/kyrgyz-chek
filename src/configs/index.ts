import axios from 'axios'

export const apiUrl = 'https://kyrgyz-chek-default-rtdb.asia-southeast1.firebasedatabase.app/'

export namespace Interceptor {
  export const initBaseURL = () => {
    axios.defaults.baseURL = apiUrl
  }
}