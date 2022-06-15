import axios from 'axios'
import { apiUrl } from '../../../../../configs'

export const get = (id: string) => {
  return axios.get(`${apiUrl}/categories/${id}.json`)
}