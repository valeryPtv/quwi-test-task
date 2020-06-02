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
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  return api.get('projects-manage/index',config)
}

export const editProjectName = (token, projectId, name) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  return api.post(`projects-manage/update?id=${projectId}`, { name }, config)
}
