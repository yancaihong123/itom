import axios from 'axios'
// Make a request for a user with a given ID
const axiosGet = {
  // eslint-disable-next-line space-before-function-paren
  get(address, options) {
    axios.get(address + options)
      .then(function (response) {
        // handle success
        console.log(response)
      })
      .catch(function (error) {
        // handle error
        console.log(error)
      })
      .then(function () {
        // always executed
      })
  }
}
export default axiosGet
