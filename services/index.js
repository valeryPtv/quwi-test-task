import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.quwi.com/v2/'
});

export const signin = (credentials) => {
  return api.post('auth/login', credentials);
};

export const getProjects = (token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  return api.get('projects-manage/index',config)
};

export const editProjectName = (token, projectId, name) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };
  return api.post(`projects-manage/update?id=${projectId}`, { name }, config)
};
