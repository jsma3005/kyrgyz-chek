import axios from 'axios'

export const get = (id: string) => {
  return axios.get(`/categories/${id}.json`)
}