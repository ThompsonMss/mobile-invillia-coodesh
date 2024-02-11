import axios from 'axios'
export interface InterfaceAPIClientGetRequest {
  url: string
}

export const api = axios.create({
  baseURL: 'https://api.dictionaryapi.dev/api/v2/entries/en/',
  timeout: 1000 * 20
})

api.interceptors.response.use(
  function (response) {
    return response.data
  },
  function (error) {
    return Promise.reject(error.response)
  }
)

export function get({ url }: InterfaceAPIClientGetRequest): any {
  return api.get(url)
}

export const clientApi = {
  get: get
}
