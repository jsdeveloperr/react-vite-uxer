import axios from 'axios';

export const getToken = () =>
  localStorage.getItem('access_token')
    ? localStorage.getItem('access_token')
    : null;

export const getAuthorizationHeader = () => `Bearer ${getToken()}`;

export default function makeApi(baseURL: string) {
  const api = axios.create({
    baseURL,
    headers: {
      Authorization: getAuthorizationHeader(),
    },
  });

  api.defaults.headers.post['Content-Type'] = 'application/json';
  api.defaults.headers.put['Content-Type'] = 'application/json';
  api.defaults.headers.delete['Content-Type'] = 'application/json';
  const bearerToken = localStorage.getItem('access_token');

  api.interceptors.request.use(
    config => {
      if (bearerToken) {
        // eslint-disable-next-line no-param-reassign
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${bearerToken}`,
        };
      }

      return config;
    },
    error => Promise.reject(error)
  );

  api.interceptors.response.use(
    response => response.data, // return data object
    error => Promise.reject(error)
  );
  return api;
}
