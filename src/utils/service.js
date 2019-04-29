import axios from 'axios'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Vue from 'vue'
import { message } from 'ant-design-vue'
import store from '@/store'

const service = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8090',
  timeout: 5000,
  withCredentials: true
})

service.interceptors.request.use(
  config => {
    NProgress.start()
    // TODO set token
    const token = store.getters.token
    Vue.$log.debug('Got token from store', token)
    if (token && token.access_token) {
      config.headers['Admin-Authorization'] = token.access_token
    }
    return config
  },
  error => {
    NProgress.remove()
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    NProgress.done()
    return response
  },
  error => {
    NProgress.done()

    if (axios.isCancel(error)) {
      Vue.$log.debug('Cancelled uploading by user.')
      return Promise.reject(error)
    }

    Vue.$log.error('Response failed', error)

    const response = error.response
    const status = response ? response.status : -1
    Vue.$log.error('Server response status', status)

    const data = response ? response.data : null
    if (data) {
      // Business response
      Vue.$log.error('Business response status', data.status)
      if (data.status === 400) {
        // TODO handle 400 status error
      } else if (data.status === 401) {
        // TODO handle 401 status error
      } else if (data.status === 403) {
        // TODO handle 403 status error
      } else if (data.status === 404) {
        // TODO handle 404 status error
      } else if (data.status === 500) {
        // TODO handle 500 status error
      }

      message.error(data.message)
    } else {
      message.error('Server unavailable')
    }

    return Promise.reject(error)
  }
)

export default service
