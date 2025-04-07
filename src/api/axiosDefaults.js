import axios from "axios";

axios.defaults.baseURL = 'https://ci-drf-api-25-46a75cd721fc.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();

