import axios from 'axios';
import { API_BASE_URL } from 'react-native-config';

const axiosBase = ({ timeout = 30000, headers }) =>
  axios.create({
    baseURL: API_BASE_URL,
    timeout,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  });

const executeRequest = ({ method, pathname, data, options = {} }) => {
  const body = method === 'get' || !data ? {} : { data };

  const reqObject = {
    method,
    url: pathname,
    params: options.query,
    ...body,
  };

  const axiosBaseRequest = axiosBase(options);

  return new Promise((resolve, reject) => {
    return axiosBaseRequest
      .request(reqObject)
      .then(response => {
        console.log('RESPONSE: ', response);
        resolve(response);
      })
      .catch(error => {
        console.log('ERROR: ', error.message);
        reject(error);
      });
  });
};

export default {
  get: (pathname, options) =>
    executeRequest({ method: 'get', pathname, data: null, options }),

  post: (pathname, data, options) =>
    executeRequest({ method: 'post', pathname, data, options }),

  put: (pathname, data, options) =>
    executeRequest({ method: 'put', pathname, data, options }),

  delete: (pathname, data, options) =>
    executeRequest({ method: 'delete', pathname, data, options }),

  all: promises => axios.all(promises),
};
