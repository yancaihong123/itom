import axios from 'axios'
import Vue from 'vue'

function requireData(url, params, type, item) {
  if (!url) {
    return false
  }
  switch (item) {
    case 'M1':
      url = axios.defaults.baseM1URL + url
      break
    case 'M2':
      url = axios.defaults.baseM2URL + url
      break
  }
  if (type === 'get') {
    return new Promise((resolve, reject) => {
      axios.get(url, params).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  } else {
    return new Promise((resolve, reject) => {
      axios.post(url, params).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }
}
const req = {}
req.install = function (Vue) {
  Vue.prototype.reqM1Service = function (url, params, type) {
    return requireData(url, params, type, 'M1')
  }
  Vue.prototype.reqM2Service = function (url, params, type) {
    return requireData(url, params, type, 'M2')
  }
}
export default req
