import axios from "axios";

axios.defaults.baseURL = 'https://ci-drf-api-25-46a75cd721fc.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/from-data';
axios.defaults.withCredentials = true;
