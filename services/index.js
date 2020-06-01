import axios from 'axios'
// const api = axios.create({
//   baseURL: 'https://api.quwi.com/v2/'
// })


export const signin = (credentials) => {
  // return api.post('auth/login', credentials)
  console.log('$auth', $auth);
  return axios.post('auth/login', credentials);
}
