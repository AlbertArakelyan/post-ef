import axios from 'axios';
import store from 'store';


const axiosApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

axiosApi.interceptors.request.use((req) => {
  const accessToken = store.get('access_token');

  if (req && req.headers && accessToken) {
    req.headers.Authorization = `Bearer ${accessToken}`;
  }

  return req;
});

const request = (method, url, data = null, params = undefined) => {
  return axiosApi.request({
    method,
    url,
    data,
    params,
  }).then((response) => {
    return response;
  }).catch((error) => {
    console.log(method, url, error.message);
    return error.response;
  });
};

export default request;
