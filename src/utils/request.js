/**
 * 封装axios请求模块
 */
import axios from 'axios'

const request = axios.create({
  baseURL: 'http://218.17.45.99:9068/',
  timeout: 1000,
  async: true,
  crossDomain: true,
  headers: {
    'TW-ProjectName': 'ansotest001',
    'TW-App': 'android',
    'TW-Authorization': 'EC6E151FB5CE4FA8BC4D087811C188E0'
  }
})

export default request
