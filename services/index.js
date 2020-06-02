import axios from 'axios'
import { token } from "@nuxtjs/auth/lib/module/defaults";

const api = axios.create({
  baseURL: 'https://api.quwi.com/v2/'
  // headers: { 'Authorization': 'Bearer ' + token}
})

// axios.defaults.baseURL = 'http://localhost:1010/'
// axios.defaults.headers.common = {'Authorization': `bearer ${token}`}


export const signin = (credentials) => {
  // return api.post('auth/login', credentials)
  // console.log('$auth', $auth);
  return api.post('auth/login', credentials);
}

export const getProjects = (token) => {
  return api.get('/projects-manage/index',{
    headers: { Authorization: `Bearer ${token}` }
  })
}
