import axios from 'axios';
import { isDev } from 'utiles/utilis';

const DEBUG_URL = 'http://localhost:4005';
const PROD_URL = '';

export const baseURL = isDev() ? DEBUG_URL : PROD_URL;
axios.defaults.baseURL = baseURL;

enum httpServiceTypes {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete',
  PATCH = 'patch',
}

const httpRequest = async (
  endpoint: string,
  method: httpServiceTypes = httpServiceTypes.GET,
  data: null | object = null,
  query: null | object = null,
  headers?: object
) => {
  const result = await axios({
    url: endpoint,
    method,
    data,
    params: query,
    headers,
  });
  return result.data;
};

// eslint-disable-next-line
export default {
  get(endpoint: string, data?: object, query?: object) {
    return httpRequest(endpoint, httpServiceTypes.GET, data, query);
  },
  put(endpoint: string, data: object) {
    return httpRequest(endpoint, httpServiceTypes.PUT, data);
  },
  post(endpoint: string, data?: object, headers?: object) {
    return httpRequest(endpoint, httpServiceTypes.POST, data, null, headers);
  },
  delete(endpoint: string, data: object) {
    return httpRequest(endpoint, httpServiceTypes.DELETE, data);
  },
  patch(endpoint: string, data: object) {
    return httpRequest(endpoint, httpServiceTypes.PATCH, data);
  },
};

export const setAxiosHeader = (token: string | null) => {
  axios.defaults.headers.common['Authorization'] = 'bearer ' + token;
};
