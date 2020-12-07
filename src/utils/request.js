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
    'TW-Authorization': '43B6182A895A41A089E2652E2B520391'
  }
})

export default request
